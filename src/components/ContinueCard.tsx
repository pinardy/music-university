import { Link } from 'react-router-dom'
import { courseSummaries } from '../data'
import { useLastLesson, useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'

/**
 * Entry point back into whatever was last open. Renders from the denormalised
 * record in the store, so the home page still costs nothing beyond the
 * catalogue.
 */
export default function ContinueCard() {
  const last = useLastLesson()
  const progress = useProgress()
  if (!last) return null

  const summary = courseSummaries[last.courseId]
  const done = progress.has(`${last.courseId}/${last.lessonId}`)

  return (
    <Link
      to={`/course/${last.courseId}/lesson/${last.lessonId}`}
      className="continue-card"
      aria-label={`Continue: ${last.courseCode} week ${last.week}, ${last.title}`}
    >
      <span className="continue-label">{done ? 'Last read' : 'Continue'}</span>
      <span className="continue-title">{last.title}</span>
      <span className="continue-meta">
        {summary && (
          <span className="stream-dot" style={{ background: streamColor(summary.stream) }} />
        )}
        {last.courseCode} · Week {last.week}
        {summary && ` · ${streamLabels[summary.stream]}`}
        {done && ' · completed'}
      </span>
    </Link>
  )
}
