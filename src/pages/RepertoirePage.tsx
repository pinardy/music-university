import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Course } from '../types'
import { courseSummaries } from '../data'
import { useAllCourses } from '../useAllCourses'
import { repertoireKey, toggleListened, useListened } from '../progress'

interface Item {
  key: string
  text: string
  /** Every lesson that assigns this work — the same piece recurs across courses. */
  sources: { courseId: string; courseCode: string; lessonId: string; week: number }[]
  firstYear: number
}

function collect(courses: Course[]): Item[] {
  const byKey = new Map<string, Item>()
  for (const course of courses) {
    const year = courseSummaries[course.id]?.year ?? 9
    for (const lesson of course.lessons) {
      for (const entry of lesson.listening ?? []) {
        const key = repertoireKey(entry)
        let item = byKey.get(key)
        if (!item) {
          item = { key, text: entry.trim(), sources: [], firstYear: year }
          byKey.set(key, item)
        }
        item.firstYear = Math.min(item.firstYear, year)
        item.sources.push({
          courseId: course.id,
          courseCode: course.code,
          lessonId: lesson.id,
          week: lesson.week,
        })
      }
    }
  }
  return [...byKey.values()]
}

export default function RepertoirePage() {
  const courses = useAllCourses()
  const listened = useListened()
  const [query, setQuery] = useState('')
  const [unheardOnly, setUnheardOnly] = useState(false)

  const items = useMemo(() => (courses ? collect(courses) : []), [courses])

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const matched = items.filter((i) => {
      if (unheardOnly && listened.has(i.key)) return false
      return !needle || i.text.toLowerCase().includes(needle)
    })
    const byYear = new Map<number, Item[]>()
    for (const item of matched) {
      const bucket = byYear.get(item.firstYear)
      if (bucket) bucket.push(item)
      else byYear.set(item.firstYear, [item])
    }
    // Left in insertion order, which is curriculum order: courses run in
    // semester sequence and lessons by week. Sorting alphabetically instead
    // floats every entry that happens to begin "A recording of…" to the top.
    return [...byYear.entries()].sort(([a], [b]) => a - b).map(([year, items]) => ({ year, items }))
  }, [items, query, unheardOnly, listened])

  const shown = groups.reduce((n, g) => n + g.items.length, 0)
  const heard = items.filter((i) => listened.has(i.key)).length

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Repertoire</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">Every work the curriculum asks you to hear</span>
        <h1 className="page-title">Listening list</h1>
      </header>
      <p className="course-description">
        {courses
          ? `${items.length} works and recordings, gathered from the listening lists of every lesson and grouped by the year they first appear. Tick them off as you go — ${heard} of ${items.length} so far.`
          : 'Gathering the listening lists from every lesson…'}
      </p>

      <div className="progress-track" role="progressbar" aria-valuenow={heard} aria-valuemin={0}
        aria-valuemax={items.length} aria-label="Repertoire heard">
        <div
          className="progress-fill"
          style={{ width: `${items.length ? (heard / items.length) * 100 : 0}%` }}
        />
      </div>

      <div className="library-controls">
        <input
          type="search"
          value={query}
          placeholder="Search composers and works…"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search repertoire"
        />
        <label className="library-toggle">
          <input
            type="checkbox"
            checked={unheardOnly}
            onChange={(e) => setUnheardOnly(e.target.checked)}
          />
          Not yet heard
        </label>
      </div>

      {!courses ? null : shown === 0 ? (
        <p className="course-description">Nothing matches that filter.</p>
      ) : (
        groups.map((group) => (
          <section key={group.year} className="lesson-section">
            <h2>
              Year {group.year} <span className="count">{group.items.length}</span>
            </h2>
            <ul className="repertoire-list">
              {group.items.map((item) => {
                const done = listened.has(item.key)
                return (
                  <li key={item.key} className={`repertoire${done ? ' heard' : ''}`}>
                    <label>
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => toggleListened(item.text)}
                      />
                      <span className="repertoire-text">{item.text}</span>
                    </label>
                    <span className="repertoire-sources">
                      {item.sources.slice(0, 3).map((s) => (
                        <Link
                          key={`${s.courseId}/${s.lessonId}`}
                          to={`/course/${s.courseId}/lesson/${s.lessonId}`}
                        >
                          {s.courseCode} wk {s.week}
                        </Link>
                      ))}
                      {item.sources.length > 3 && <span>+{item.sources.length - 3}</span>}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        ))
      )}
    </>
  )
}
