import type { Resource } from '../types'
import { resourceKindLabels } from '../data/resources'

interface Props {
  resources: Resource[]
  /** Hide the publisher line — for lists already grouped under a publisher heading. */
  hideSource?: boolean
}

/** Renders external sources as a list of outbound links with a kind badge. */
export default function ResourceList({ resources, hideSource = false }: Props) {
  if (resources.length === 0) return null

  return (
    <ul className="resource-list">
      {resources.map((r) => (
        <li key={r.id} className="resource">
          <a href={r.url} target="_blank" rel="noopener noreferrer">
            <span className={`resource-kind kind-${r.kind}`}>{resourceKindLabels[r.kind]}</span>
            <span className="resource-title">{r.title}</span>
            {(!hideSource || !r.open) && (
              <span className="resource-source">
                {!hideSource && r.source}
                {!r.open && (
                  <span className="resource-gated" title="Needs a library or institutional login">
                    {hideSource ? 'subscription' : ' · subscription'}
                  </span>
                )}
              </span>
            )}
            {r.note && <span className="resource-note">{r.note}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
