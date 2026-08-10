import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courseUsage, resourceUsage } from '../data/resourceUsage.generated'

const COLLAPSED = 4

/**
 * Where a source is actually used, from the generated reverse index.
 *
 * Kept out of ResourceList so the ~16 kB index only reaches the library
 * chunk — the course and lesson pages render sources too, and have no use
 * for it.
 */
export default function ResourceUsage({ id }: { id: string }) {
  const [expanded, setExpanded] = useState(false)
  const lessons = resourceUsage[id] ?? []
  const courses = courseUsage[id] ?? []

  if (lessons.length === 0 && courses.length === 0) return null

  const shown = expanded ? lessons : lessons.slice(0, COLLAPSED)
  const hidden = lessons.length - shown.length

  return (
    <div className="resource-usage">
      {courses.length > 0 && (
        <span className="usage-standing">
          Set text for{' '}
          {courses.map((c, i) => (
            <span key={c.c}>
              {i > 0 && ', '}
              <Link to={`/course/${c.c}`}>{c.k}</Link>
            </span>
          ))}
        </span>
      )}
      {lessons.length > 0 && (
        <span className="usage-lessons">
          <span className="usage-count">
            Cited by {lessons.length} {lessons.length === 1 ? 'lesson' : 'lessons'}
          </span>
          {shown.map((u) => (
            <Link key={`${u.c}/${u.l}`} to={`/course/${u.c}/lesson/${u.l}`} title={u.t}>
              {u.k} wk {u.w}
            </Link>
          ))}
          {hidden > 0 && (
            <button className="usage-more" onClick={() => setExpanded(true)}>
              +{hidden} more
            </button>
          )}
        </span>
      )}
    </div>
  )
}
