import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Course } from '../types'
import { courseSummaries, loadSemesterCourses } from '../data'
import { setNote, useNotes } from '../progress'

interface Row {
  key: string
  courseId: string
  lessonId: string
  courseCode: string
  courseTitle: string
  lessonTitle?: string
  week?: number
  body: string
}

/**
 * Loads only the semesters that actually contain a noted lesson, so writing
 * one note does not cost the whole curriculum.
 */
function useNotedLessons(keys: string[]) {
  const semesters = useMemo(() => {
    const ids = new Set<string>()
    for (const key of keys) {
      const summary = courseSummaries[key.slice(0, key.indexOf('/'))]
      if (summary) ids.add(summary.semesterId)
    }
    return [...ids].sort()
  }, [keys])

  const [courses, setCourses] = useState<Map<string, Course>>(new Map())

  useEffect(() => {
    let cancelled = false
    void Promise.all(semesters.map(loadSemesterCourses)).then((loaded) => {
      if (cancelled) return
      const merged = new Map<string, Course>()
      for (const chunk of loaded) for (const [id, course] of chunk) merged.set(id, course)
      setCourses(merged)
    })
    return () => {
      cancelled = true
    }
  }, [semesters.join(',')]) // eslint-disable-line react-hooks/exhaustive-deps

  return courses
}

export default function NotesPage() {
  const notes = useNotes()
  const [query, setQuery] = useState('')

  const keys = useMemo(() => [...notes.keys()].sort(), [notes])
  const courses = useNotedLessons(keys)

  const rows = useMemo<Row[]>(() => {
    const needle = query.trim().toLowerCase()
    return keys
      .map((key) => {
        const courseId = key.slice(0, key.indexOf('/'))
        const lessonId = key.slice(key.indexOf('/') + 1)
        const summary = courseSummaries[courseId]
        const lesson = courses.get(courseId)?.lessons.find((l) => l.id === lessonId)
        return {
          key,
          courseId,
          lessonId,
          courseCode: summary?.code ?? courseId.toUpperCase(),
          courseTitle: summary?.title ?? 'Unknown course',
          lessonTitle: lesson?.title,
          week: lesson?.week,
          body: notes.get(key) ?? '',
        }
      })
      .filter(
        (r) =>
          !needle ||
          r.body.toLowerCase().includes(needle) ||
          r.courseCode.toLowerCase().includes(needle) ||
          (r.lessonTitle ?? '').toLowerCase().includes(needle),
      )
  }, [keys, courses, notes, query])

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Notes</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">Everything you have written down</span>
        <h1 className="page-title">Notes</h1>
      </header>

      {notes.size === 0 ? (
        <p className="course-description">
          No notes yet. Every lesson has a notes box at the foot of the page; whatever you write
          there is collected here and included in your progress backup.
        </p>
      ) : (
        <>
          <p className="course-description">
            {notes.size} {notes.size === 1 ? 'note' : 'notes'}, stored in this browser only.
          </p>

          <div className="library-controls">
            <input
              type="search"
              value={query}
              placeholder="Search your notes…"
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search notes"
            />
          </div>

          {rows.length === 0 ? (
            <p className="course-description">No notes match that search.</p>
          ) : (
            <ul className="note-list">
              {rows.map((row) => (
                <li key={row.key} className="note-entry">
                  <Link to={`/course/${row.courseId}/lesson/${row.lessonId}`}>
                    <span className="search-where">
                      {row.courseCode}
                      {row.week !== undefined && ` · Week ${row.week}`}
                    </span>
                    <span className="search-title">{row.lessonTitle ?? row.courseTitle}</span>
                  </Link>
                  <p className="note-body">{row.body}</p>
                  <button
                    className="note-delete"
                    onClick={() => {
                      if (window.confirm('Delete this note?')) setNote(row.key, '')
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  )
}
