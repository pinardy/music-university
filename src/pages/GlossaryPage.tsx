import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { glossary, glossaryByTerm, glossaryCategories, type GlossaryCategory } from '../data/glossary'

const ORDER = Object.keys(glossaryCategories) as GlossaryCategory[]

export default function GlossaryPage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const matches = glossary.filter(
      (t) =>
        !needle ||
        t.term.toLowerCase().includes(needle) ||
        (t.aka ?? []).some((a) => a.toLowerCase().includes(needle)) ||
        t.definition.toLowerCase().includes(needle),
    )
    return ORDER.map((category) => ({
      category,
      terms: matches
        .filter((t) => t.category === category)
        .sort((a, b) => a.term.localeCompare(b.term)),
    })).filter((g) => g.terms.length > 0)
  }, [query])

  const shown = groups.reduce((n, g) => n + g.terms.length, 0)

  function onChange(value: string) {
    setQuery(value)
    setParams(value.trim() ? { q: value } : {}, { replace: true })
  }

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Glossary</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">The vocabulary the lessons actually use</span>
        <h1 className="page-title">Glossary</h1>
      </header>
      <p className="course-description">
        {glossary.length} terms, chosen by counting what appears across the curriculum’s lesson text
        rather than from a general dictionary. Definitions are deliberately short — this is for when
        you have hit a word mid-paragraph.
      </p>

      <div className="library-controls">
        <input
          type="search"
          value={query}
          placeholder="Search terms and definitions…"
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search the glossary"
        />
      </div>

      <p className="section-lede" role="status">
        {shown} of {glossary.length} terms
      </p>

      {groups.length > 1 && (
        <nav className="jump-links" aria-label="Jump to a category">
          {groups.map((g) => (
            <a key={g.category} href={`#cat-${g.category}`}>
              {glossaryCategories[g.category]}
            </a>
          ))}
        </nav>
      )}

      {shown === 0 ? (
        <p className="course-description">No terms match that search.</p>
      ) : (
        groups.map((group) => (
          <section key={group.category} id={`cat-${group.category}`} className="lesson-section">
            <h2>
              {glossaryCategories[group.category]}{' '}
              <span className="count">{group.terms.length}</span>
            </h2>
            <dl className="glossary-list">
              {group.terms.map((t) => (
                <div key={t.term} id={`term-${t.term.toLowerCase().replace(/\s+/g, '-')}`} className="glossary-entry">
                  <dt>
                    {t.term}
                    {t.aka && <span className="glossary-aka">also {t.aka.join(', ')}</span>}
                  </dt>
                  <dd>
                    {t.definition}
                    {t.see && t.see.length > 0 && (
                      <span className="glossary-see">
                        See also{' '}
                        {t.see.map((s, i) => {
                          const target = glossaryByTerm.get(s.toLowerCase())
                          return (
                            <span key={s}>
                              {i > 0 && ', '}
                              {target ? (
                                <a href={`#term-${target.term.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {target.term}
                                </a>
                              ) : (
                                s
                              )}
                            </span>
                          )
                        })}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))
      )}
    </>
  )
}
