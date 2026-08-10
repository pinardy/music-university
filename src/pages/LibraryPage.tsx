import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Resource, ResourceKind } from '../types'
import { allResources, resourceKindLabels } from '../data/resources'
import ResourceList from '../components/ResourceList'
import ResourceUsage from '../components/ResourceUsage'

const SUBGROUP_THRESHOLD = 24

const KIND_ORDER: ResourceKind[] = [
  'textbook',
  'exercise',
  'score',
  'reference',
  'article',
  'primary',
  'lecture',
]

export default function LibraryPage() {
  const [query, setQuery] = useState('')
  const [openOnly, setOpenOnly] = useState(false)

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const matches = allResources.filter((r) => {
      if (openOnly && !r.open) return false
      if (!needle) return true
      return (
        r.title.toLowerCase().includes(needle) ||
        r.source.toLowerCase().includes(needle) ||
        (r.note ?? '').toLowerCase().includes(needle)
      )
    })
    return KIND_ORDER.map((kind) => ({
      kind,
      items: matches
        .filter((r) => r.kind === kind)
        .sort((a, b) => a.source.localeCompare(b.source) || a.title.localeCompare(b.title)),
    })).filter((g) => g.items.length > 0)
  }, [query, openOnly])

  const total = groups.reduce((n, g) => n + g.items.length, 0)

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Sources</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">Every source referenced in this curriculum</span>
        <h1 className="page-title">Source library</h1>
      </header>
      <p className="course-description">
        {allResources.length} open textbooks, scores, primary documents, drills and reference works,
        linked from the lessons that use them. Most are free; a handful are the standard subscription
        databases a conservatory library provides.
      </p>

      <div className="library-controls">
        <input
          type="search"
          value={query}
          placeholder="Search titles, publishers and notes…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search sources"
        />
        <label className="library-toggle">
          <input type="checkbox" checked={openOnly} onChange={(e) => setOpenOnly(e.target.checked)} />
          Free to read only
        </label>
      </div>

      {total === 0 ? (
        <p className="course-description">No sources match that search.</p>
      ) : (
        groups.map((g) => (
          <section key={g.kind} className="lesson-section">
            <h2>
              {kindHeading(g.kind)} <span className="count">{g.items.length}</span>
            </h2>
            {g.items.length > SUBGROUP_THRESHOLD ? (
              bySource(g.items).map(([source, items]) => (
                <div key={source} className="source-group">
                  <h3>
                    {source} <span className="count">{items.length}</span>
                  </h3>
                  <ResourceList
                    resources={items}
                    hideSource
                    renderExtra={(r) => <ResourceUsage id={r.id} />}
                  />
                </div>
              ))
            ) : (
              <ResourceList resources={g.items} renderExtra={(r) => <ResourceUsage id={r.id} />} />
            )}
          </section>
        ))
      )}
    </>
  )
}

/** Group a kind's entries by publisher, largest collection first. */
function bySource(items: Resource[]): [string, Resource[]][] {
  const map = new Map<string, Resource[]>()
  for (const r of items) {
    const bucket = map.get(r.source)
    if (bucket) bucket.push(r)
    else map.set(r.source, [r])
  }
  return [...map.entries()].sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]),
  )
}

function kindHeading(kind: ResourceKind): string {
  const headings: Record<ResourceKind, string> = {
    textbook: 'Open textbooks & readings',
    exercise: 'Drills & practice tools',
    score: 'Scores & editions',
    reference: 'Reference works & organisations',
    article: 'Articles & journals',
    primary: 'Primary sources',
    lecture: 'Recorded lectures & performance',
  }
  return headings[kind] ?? resourceKindLabels[kind]
}
