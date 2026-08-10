/**
 * Resolves listening-list entries to scores, writing
 * `src/data/listeningLinks.generated.ts`.
 *
 * The 789 listening entries are free text — "Jessye Norman, Richard Strauss's
 * Four Last Songs (Masur/Gewandhausorchester) — breath and line". Roughly a
 * third lead with a performer rather than a composer, so parsing the first
 * name out of an entry and trusting it would produce confident wrong links.
 *
 * Two passes, both conservative:
 *   1. Match a composer-specific catalogue number (BWV, K., Hob., …) against
 *      the scores already in the source catalogue. No new URL involved.
 *   2. Ask IMSLP's search API, and accept a result only if the composer
 *      surname in its page title appears in the entry. That guard is what
 *      makes performer-led entries safe: a search seeded with "Jessye Norman"
 *      that returns a Strauss page is accepted because the entry says
 *      Strauss, and a search that returns something unrelated is not.
 *
 * Anything unresolved stays unlinked. Run manually — the build must not
 * depend on a third-party API:
 *
 *   npm run gen:listening
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { resources } from '../src/data/resources'
import { year1Courses } from '../src/data/year1'
import { year2Courses } from '../src/data/year2'
import { year3Courses } from '../src/data/year3'
import { year4Courses } from '../src/data/year4'

const OUT = join(process.cwd(), 'src/data/listeningLinks.generated.ts')
const UA = 'music-university link builder (github.com/pinardy/music-university)'
const CONCURRENCY = 4

const courses = [...year1Courses, ...year2Courses, ...year3Courses, ...year4Courses]
const entries = new Set<string>()
for (const c of courses) for (const l of c.lessons) for (const e of l.listening ?? []) entries.add(e.trim())

/** Composer-specific catalogues. Op. is excluded: it is per-composer, so on
 *  its own it identifies nothing. */
const CAT = /\b(BWV|HWV|RV|WAB|Hob|BuxWV|Sz|TWV)\.?\s?([IVXa-z]*\.?\s?\d+[a-z]?(?::\d+)?)|(\bK\.\s?\d+[a-z]?)|(\bD\.\s?\d+)/g

/** "Op. 13", "Op.13 No.2" -> a comparable token. */
function opus(s: string): string[] {
  return [...s.matchAll(/\bOp\.?\s?(\d+)(?:\s?No\.?\s?(\d+))?/gi)].map(
    (m) => `op${m[1]}${m[2] ? `n${m[2]}` : ''}`.toLowerCase(),
  )
}

function cats(s: string): string[] {
  return [...s.matchAll(CAT)]
    .map((m) => (m[1] ? `${m[1]} ${m[2]}` : (m[3] ?? m[4]))!)
    .map((x) => x.replace(/\./g, '').replace(/\s+/g, ' ').trim().toLowerCase())
}

/**
 * "Symphony No. 5", "Piano Sonata No.8" -> "symphony5". Genre plus number
 * plus a matching composer identifies a standard work about as reliably as an
 * opus number, and covers the many entries that carry neither.
 */
const GENRE =
  /\b(symphon(?:y|ies)|sonata|quartet|quintet|concerto|trio|sextet|mass|cantata|nocturne|ballade|impromptu|rhapsody|overture|serenade|waltz|polonaise|mazurka|etude|étude|prelude|invention|partita|suite)\b[\s,]*(?:no\.?\s*)?(\d+)/gi

function works(s: string): string[] {
  return [...s.matchAll(GENRE)].map(
    (m) => `${m[1]!.toLowerCase().replace(/^symphonies$/, 'symphony').replace('étude', 'etude')}${m[2]}`,
  )
}

/** Surname as the source catalogue writes it: "Beethoven, Symphony No. 5…". */
function scoreSurname(title: string): string {
  return (title.split(',')[0] ?? '').trim().toLowerCase()
}

// ── Pass 1: existing verified scores ────────────────────────────────────────
interface ScoreEntry {
  id: string
  surname: string
  tokens: Set<string>
}

const scoreIndex: ScoreEntry[] = []
const scoreByCat = new Map<string, string>()
for (const [id, r] of Object.entries(resources)) {
  if (r.kind !== 'score') continue
  for (const c of cats(r.title)) if (!scoreByCat.has(c)) scoreByCat.set(c, id)
  scoreIndex.push({
    id,
    surname: scoreSurname(r.title),
    tokens: new Set([...cats(r.title), ...opus(r.title), ...works(r.title)]),
  })
}

/** A catalogued score whose composer and work both agree with the entry. */
function scoreFor(entry: string): string | undefined {
  const lower = entry.toLowerCase()
  const tokens = new Set([...cats(entry), ...opus(entry), ...works(entry)])
  if (!tokens.size) return undefined
  for (const s of scoreIndex) {
    if (!s.surname || !lower.includes(s.surname)) continue
    for (const t of tokens) if (s.tokens.has(t)) return s.id
  }
  return undefined
}

// ── Pass 2: IMSLP search ────────────────────────────────────────────────────
/**
 * Drop the trailing commentary and the parenthetical performer credits.
 *
 * Entries use an em-dash both to separate composer from work ("Beethoven —
 * Piano Sonata No. 8") and to append commentary ("…, Op. 13 — compare a live
 * recording"). Taking everything before the first dash therefore threw the
 * work away and searched for a bare composer name, which returned whatever
 * page that composer happened to rank first.
 */
function query(entry: string): string {
  const clean = entry.replace(/\([^)]*\)/g, ' ').replace(/[“”"’']/g, ' ')
  const parts = clean.split(/\s+—\s+/).map((p) => p.trim()).filter(Boolean)
  const count = (s: string) => (s.match(/\p{L}+/gu) ?? []).length
  let q = parts[0] ?? ''
  // Keep absorbing segments until there is enough to identify a work.
  for (let i = 1; i < parts.length && count(q) < 4; i++) q += ' ' + parts[i]
  return q.replace(/\s+/g, ' ').trim().slice(0, 180)
}

const STOP = new Set([
  'the','and','for','from','in','of','a','an','no','op','major','minor','flat','sharp',
  'movement','first','second','third','piano','sonata','symphony','quartet','concerto','suite',
  'string','music','opus','part','book','act','scene','song','songs','variations','prelude',
])

/** Distinctive words shared between an IMSLP title and the entry. */
function overlap(title: string, entry: string): number {
  const t = new Set(
    (title.replace(/\([^)]*\)/g, ' ').toLowerCase().match(/\p{L}{4,}/gu) ?? []).filter(
      (w) => !STOP.has(w),
    ),
  )
  const e = new Set((entry.toLowerCase().match(/\p{L}{4,}/gu) ?? []))
  let n = 0
  for (const w of t) if (e.has(w)) n++
  return n
}

/** IMSLP titles read "Work, Op.n (Surname, Firstname)". */
function surnameOf(title: string): string | undefined {
  const m = title.match(/\(([^,()]+),\s*[^()]*\)\s*$/)
  return m?.[1]?.trim()
}

const words = (s: string) => new Set(s.toLowerCase().match(/\p{L}+/gu) ?? [])

async function search(q: string): Promise<string[]> {
  const url =
    'https://imslp.org/api.php?action=query&list=search&format=json&srlimit=3&srsearch=' +
    encodeURIComponent(q)
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA } })
      if (!res.ok) throw new Error(String(res.status))
      const json = (await res.json()) as { query?: { search?: { title: string }[] } }
      return (json.query?.search ?? []).map((s) => s.title)
    } catch {
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)))
    }
  }
  return []
}

interface Resolved {
  entry: string
  resourceId?: string
  url?: string
  title?: string
}

const resolved: Resolved[] = []
const queue = [...entries]
let done = 0

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (;;) {
      const entry = queue.shift()
      if (!entry) return
      done++
      if (done % 100 === 0) console.log(`  ${done}/${entries.size}`)

      const entryCats = cats(entry)
      const known = entryCats.map((c) => scoreByCat.get(c)).find(Boolean) ?? scoreFor(entry)
      if (known) {
        resolved.push({ entry, resourceId: known })
        continue
      }

      // Only worth asking about entries that name a work at all.
      const entryWords = words(entry)
      if (entryWords.size < 3) continue

      for (const title of await search(query(entry))) {
        const surname = surnameOf(title)
        if (!surname) continue
        // The guard: the composer IMSLP thinks this is must be named in the entry.
        const parts = words(surname)
        if (![...parts].every((p) => entryWords.has(p))) continue
        // The composer being right is not enough — "Beethoven" alone matches
        // hundreds of pages. Require the work to agree too, by catalogue
        // number, by opus number, or by shared distinctive words.
        const titleCats = cats(title)
        const entryOps = opus(entry)
        const titleOps = opus(title)

        if (entryCats.length && titleCats.length) {
          if (!entryCats.some((c) => titleCats.includes(c))) continue
        } else if (entryOps.length && titleOps.length) {
          if (!entryOps.some((o) => titleOps.includes(o))) continue
        } else if (
          !works(entry).some((w) => works(title).includes(w)) &&
          overlap(title, entry) < 2
        ) {
          continue
        }
        resolved.push({
          entry,
          url: `https://imslp.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`,
          title,
        })
        break
      }
    }
  }),
)

const q = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
resolved.sort((a, b) => a.entry.localeCompare(b.entry))

const body = `// GENERATED by scripts/gen-listening-links.ts — do not edit by hand.
// Listening-list entry text to the score it refers to. Entries that could not
// be resolved with confidence are absent rather than guessed at.
//
// URLs are resolved here rather than stored as catalogue ids, so that reading
// this map does not pull the whole source catalogue into the chunk.
export interface ListeningLink {
  /** Score URL. */
  u: string
  /** Title of the score being linked to. */
  t: string
}

export const listeningLinks: Record<string, ListeningLink> = {
${resolved
  .map((r) => {
    const res = r.resourceId ? resources[r.resourceId] : undefined
    const url = res ? res.url : r.url!
    const title = res ? res.title : r.title!
    return `  ${q(r.entry)}: {u:${q(url)},t:${q(title)}},`
  })
  .join('\n')}
}
`

writeFileSync(OUT, body)
const viaCatalogue = resolved.filter((r) => r.resourceId).length
console.log(
  `resolved ${resolved.length} of ${entries.size} listening entries ` +
    `(${viaCatalogue} from the source catalogue, ${resolved.length - viaCatalogue} from IMSLP)`,
)
