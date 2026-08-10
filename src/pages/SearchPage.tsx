import { useDeferredValue, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import type { Course, Lesson } from '../types'
import { useAllCourses } from '../useAllCourses'
import { streamLabels } from '../streams'

const MAX_RESULTS = 60

interface Entry {
  course: Course
  lesson: Lesson
  haystack: string
}

interface Hit extends Entry {
  /** Where the term was found, for the snippet under each result. */
  excerpt: string
  field: string
}

/**
 * Searches the lesson text itself rather than a prebuilt index: the semester
 * chunks already exist for the lesson pages, so reusing them avoids shipping
 * a second copy of ~95,000 words.
 */
function buildEntries(courses: Course[]): Entry[] {
  return courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      course,
      lesson,
      haystack: [
        course.code,
        course.title,
        lesson.title,
        ...lesson.objectives,
        ...lesson.content,
        ...(lesson.listening ?? []),
        ...(lesson.assignments ?? []),
      ]
        .join('  ')
        .toLowerCase(),
    })),
  )
}

function findExcerpt(entry: Entry, needle: string): { excerpt: string; field: string } {
  const fields: [string, string[]][] = [
    ['Objective', entry.lesson.objectives],
    ['Lesson', entry.lesson.content],
    ['Listening', entry.lesson.listening ?? []],
    ['Assignment', entry.lesson.assignments ?? []],
  ]
  for (const [field, values] of fields) {
    for (const value of values) {
      const at = value.toLowerCase().indexOf(needle)
      if (at === -1) continue
      const start = Math.max(0, at - 70)
      const end = Math.min(value.length, at + needle.length + 110)
      return {
        field,
        excerpt: `${start > 0 ? '…' : ''}${value.slice(start, end).trim()}${end < value.length ? '…' : ''}`,
      }
    }
  }
  return { field: 'Title', excerpt: entry.lesson.title }
}

export default function SearchPage() {
  const courses = useAllCourses()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const deferred = useDeferredValue(query)

  const entries = useMemo(() => (courses ? buildEntries(courses) : []), [courses])

  const { hits, total } = useMemo(() => {
    const needle = deferred.trim().toLowerCase()
    if (needle.length < 2) return { hits: [] as Hit[], total: 0 }
    const matched = entries.filter((e) => e.haystack.includes(needle))
    return {
      total: matched.length,
      hits: matched.slice(0, MAX_RESULTS).map((e) => ({ ...e, ...findExcerpt(e, needle) })),
    }
  }, [entries, deferred])

  function onChange(value: string) {
    setQuery(value)
    setParams(value.trim() ? { q: value } : {}, { replace: true })
  }

  const searching = deferred.trim().length >= 2 && courses !== undefined

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Search</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">Every lesson in the curriculum</span>
        <h1 className="page-title">Search</h1>
      </header>
      <p className="course-description">
        Searches lesson titles, objectives, the lesson text, listening lists and assignments across
        all {courses?.length ?? 33} courses.
      </p>

      <div className="library-controls">
        <input
          type="search"
          value={query}
          autoFocus
          placeholder="Search the curriculum…"
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search lessons"
        />
      </div>

      {!courses ? (
        <p className="course-description">Loading the curriculum…</p>
      ) : !searching ? (
        <p className="course-description">Type at least two characters.</p>
      ) : total === 0 ? (
        <p className="course-description">No lessons match “{deferred.trim()}”.</p>
      ) : (
        <>
          <p className="section-lede">
            {total} matching {total === 1 ? 'lesson' : 'lessons'}
            {total > MAX_RESULTS && ` — showing the first ${MAX_RESULTS}`}
          </p>
          <ol className="search-results">
            {hits.map((hit) => (
              <li key={`${hit.course.id}/${hit.lesson.id}`}>
                <Link
                  to={`/course/${hit.course.id}/lesson/${hit.lesson.id}`}
                  className="search-result"
                >
                  <span className="search-where">
                    {hit.course.code} · Week {hit.lesson.week} ·{' '}
                    {streamLabels[hit.course.stream]}
                  </span>
                  <span className="search-title">{hit.lesson.title}</span>
                  <span className="search-excerpt">
                    <em>{hit.field}</em> {hit.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
