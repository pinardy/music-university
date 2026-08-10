import { listeningLinks } from '../data/listeningLinks.generated'

/**
 * A listening-list entry, with a score link when one could be resolved.
 *
 * Entries are free text and only some name a work precisely enough to
 * identify — the rest are instructions like "a benchmark recording of the
 * etude you are preparing". Those simply render as text; a guessed link would
 * be worse than none.
 */
export default function ListeningEntry({ text }: { text: string }) {
  const link = listeningLinks[text.trim()]
  if (!link) return <>{text}</>

  return (
    <>
      {text}{' '}
      <a
        className="score-link"
        href={link.u}
        target="_blank"
        rel="noopener noreferrer"
        title={link.t}
      >
        Score
        <span className="sr-only"> for {link.t} (opens in a new tab)</span>
      </a>
    </>
  )
}
