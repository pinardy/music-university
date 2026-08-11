/**
 * Renders every route to static HTML at build time.
 *
 * GitHub Pages has no SPA rewrite, so a deep link previously returned the
 * shell with a 404 status: bad for sharing, invisible to crawlers, and all
 * ~95,000 words of lesson prose unindexed. Writing a real file per route
 * fixes the status code, gives each page its own title and description, and
 * puts the content in the initial response.
 *
 * The output is progressive enhancement, not a static site: the client still
 * hydrates and takes over routing. Pages that suspend on lesson data keep
 * their prerendered markup visible until the chunk arrives.
 *
 *   npm run build   vite build, then this
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { StrictMode } from 'react'
import { StaticRouter } from 'react-router'
import { prerenderToNodeStream } from 'react-dom/static'
import App from '../src/App'
import { courseSummaries, loadAllCourses, years } from '../src/data'
import { program } from '../src/data/program'
import { streamLabels } from '../src/streams'
import type { CourseStream } from '../src/types'

// Relative to the project, not to wherever this script was compiled to.
const DIST = join(process.cwd(), 'dist')
const BASE = '/music-university'

interface Route {
  /** Path below the base, without leading slash. '' is the home page. */
  path: string
  title: string
  description: string
}

function truncate(s: string, n = 155): string {
  const clean = s.replace(/\s+/g, ' ').trim()
  return clean.length <= n ? clean : `${clean.slice(0, n - 1).trimEnd()}…`
}

async function routes(): Promise<Route[]> {
  const all = await loadAllCourses()
  const list: Route[] = [
    {
      path: '',
      title: 'Music University — Bachelor of Music Curriculum',
      description: truncate(program.description),
    },
    {
      path: 'library',
      title: 'Source library — Music University',
      description: 'Every open textbook, score, primary source and drill referenced in the curriculum.',
    },
    {
      path: 'search',
      title: 'Search — Music University',
      description: 'Search lesson titles, objectives, text, listening lists and assignments across the whole degree.',
    },
    {
      path: 'repertoire',
      title: 'Listening list — Music University',
      description: 'Every work the curriculum asks you to hear, gathered from the listening list of each lesson.',
    },
    {
      path: 'streams',
      title: 'Streams — Music University',
      description: 'The degree read down instead of across: each subject followed through the whole programme.',
    },
    {
      path: 'glossary',
      title: 'Glossary — Music University',
      description:
        'Working definitions for the vocabulary the curriculum uses, chosen by counting what appears in the lesson text.',
    },
    {
      path: 'assessment',
      title: 'Assessment — Music University',
      description:
        'Rubrics and worked examples: how each kind of work is judged, and what a good answer looks like.',
    },
    {
      path: 'notes',
      title: 'Notes — Music University',
      description: 'Notes you have written on individual lessons.',
    },
  ]

  for (const y of years) {
    list.push({
      path: `year/${y.year}`,
      title: `Year ${y.year}: ${y.title} — Music University`,
      description: truncate(y.theme),
    })
  }

  for (const stream of Object.keys(streamLabels) as CourseStream[]) {
    const n = Object.values(courseSummaries).filter((c) => c.stream === stream).length
    list.push({
      path: `stream/${stream}`,
      title: `${streamLabels[stream]} — Music University`,
      description: `${streamLabels[stream]} across the four-year curriculum: ${n} ${n === 1 ? 'course' : 'courses'}.`,
    })
  }

  for (const course of all) {
    list.push({
      path: `course/${course.id}`,
      title: `${course.code} ${course.title} — Music University`,
      description: truncate(course.description),
    })
    for (const lesson of course.lessons) {
      list.push({
        path: `course/${course.id}/lesson/${lesson.id}`,
        title: `${lesson.title} — ${course.code} week ${lesson.week} — Music University`,
        description: truncate(lesson.objectives[0] ?? lesson.content[0] ?? course.description),
      })
    }
  }

  return list
}

async function render(path: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter basename={BASE} location={`${BASE}/${path}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

const template = readFileSync(join(DIST, 'index.html'), 'utf8')
const all = await routes()
let written = 0

for (const route of all) {
  const body = await render(route.path)
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(route.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/s,
      `$1${escape(route.description)}$2`,
    )
    // The route this markup was rendered for. Offline, the service worker
    // falls back to the precached index.html for every navigation, so the
    // client has to know whether the markup it finds actually matches.
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-prerendered="${BASE}/${route.path}">${body}</div>`,
    )

  const out = route.path
    ? join(DIST, route.path, 'index.html')
    : join(DIST, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  written++
}

// GitHub Pages serves 404.html for anything unmatched; keep it the bare shell
// so the client router can still resolve routes added after this build.
writeFileSync(join(DIST, '404.html'), template)

console.log(`prerendered ${written} routes`)
