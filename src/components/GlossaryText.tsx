import { Fragment, useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { glossaryTerms } from '../data/glossaryTerms.generated'
import type { GlossaryState } from '../glossaryState'

/**
 * Links glossary terms where they appear in lesson prose.
 *
 * The glossary held 116 definitions that could only be reached by leaving the
 * lesson and searching for the word you had just read, which is the opposite
 * of what a glossary is for. Terms are now marked in the text and open their
 * definition in place.
 *
 * Only the first occurrence of each term in a lesson is linked — marking every
 * instance of "cadence" in a lesson about cadences would be unreadable.
 */

const ALL_MATCHES = glossaryTerms
  .flatMap((t) => t.match.map((m) => ({ match: m, term: t })))
  .sort((a, b) => b.match.length - a.match.length)

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// One pass over the paragraph, longest match first so "secondary dominant"
// wins over "dominant". Optional trailing 's' catches ordinary plurals.
const PATTERN = new RegExp(
  `\\b(${ALL_MATCHES.map((m) => escapeRe(m.match)).join('|')})(s?)\\b`,
  'gi',
)

const BY_MATCH = new Map(ALL_MATCHES.map((m) => [m.match.toLowerCase(), m.term]))

/** Splits one paragraph into plain text and glossary terms. */
export default function GlossaryText({
  text,
  state,
}: {
  text: string
  state: GlossaryState
}) {
  const parts: ReactNode[] = []
  let last = 0

  for (const m of text.matchAll(PATTERN)) {
    const whole = m[0]
    const base = (m[1] ?? '').toLowerCase()
    const entry = BY_MATCH.get(base)
    if (!entry || state.seen.has(entry.slug)) continue
    state.seen.add(entry.slug)

    const at = m.index ?? 0
    if (at > last) parts.push(text.slice(last, at))
    parts.push(<GlossaryTerm key={`${entry.slug}-${at}`} slug={entry.slug} label={whole} />)
    last = at + whole.length
  }

  if (parts.length === 0) return <>{text}</>
  if (last < text.length) parts.push(text.slice(last))
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  )
}

type Definition = { term: string; definition: string } | 'loading' | 'missing'

function GlossaryTerm({ slug, label }: { slug: string; label: string }) {
  const [open, setOpen] = useState(false)
  const [definition, setDefinition] = useState<Definition>('loading')
  const wrapper = useRef<HTMLSpanElement>(null)
  const panelId = useId()

  // The definitions are ten times the size of the index, so they only arrive
  // once a reader actually asks for one.
  useEffect(() => {
    if (!open || definition !== 'loading') return
    let cancelled = false
    void import('../data/glossary').then(({ glossary }) => {
      if (cancelled) return
      const found = glossary.find(
        (t) => t.term.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug,
      )
      setDefinition(found ? { term: found.term, definition: found.definition } : 'missing')
    })
    return () => {
      cancelled = true
    }
  }, [open, definition, slug])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <span className="glossary-term-wrap" ref={wrapper}>
      <button
        type="button"
        className="glossary-term"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className="sr-only"> — show definition</span>
      </button>
      {open && (
        <span className="glossary-popover" id={panelId} role="dialog" aria-label={`Definition of ${label}`}>
          {definition === 'loading' ? (
            <span className="glossary-popover-loading">Loading…</span>
          ) : definition === 'missing' ? (
            <span className="glossary-popover-loading">No definition found.</span>
          ) : (
            <>
              <strong>{definition.term}</strong>
              <span>{definition.definition}</span>
              <Link to={`/glossary?q=${encodeURIComponent(definition.term)}`}>
                Open in the glossary
              </Link>
            </>
          )}
        </span>
      )}
    </span>
  )
}
