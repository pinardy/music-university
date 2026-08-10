import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { CourseStream } from '../types'
import { completedInCourse, courseSummaries, loadSemesterCourses, years } from '../data'
import { useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'
import NotFound from '../components/NotFound'

/** Course ids in curriculum order, with the semester each sits in. */
function orderedCourses() {
  return years.flatMap((y) =>
    y.semesters.flatMap((s) =>
      s.courseIds.map((id) => ({ id, year: y.year, semesterId: s.id, semesterLabel: s.label })),
    ),
  )
}

export function StreamsIndexPage() {
  const progress = useProgress()
  const ordered = useMemo(orderedCourses, [])

  const streams = (Object.keys(streamLabels) as CourseStream[]).map((stream) => {
    const courses = ordered.filter((c) => courseSummaries[c.id]?.stream === stream)
    const lessons = courses.reduce((n, c) => n + (courseSummaries[c.id]?.lessonCount ?? 0), 0)
    const done = courses.reduce((n, c) => n + completedInCourse(progress, c.id), 0)
    return { stream, courses, lessons, done }
  })

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Streams</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">The degree read down instead of across</span>
        <h1 className="page-title">Streams</h1>
      </header>
      <p className="course-description">
        Each stream is one subject followed through the whole programme. Useful when you want to see
        how the theory sequence builds, or how far the history strand actually runs, rather than
        what a single semester contains.
      </p>

      <div className="stream-grid">
        {streams.map(({ stream, courses, lessons, done }) => (
          <Link key={stream} to={`/stream/${stream}`} className="stream-card">
            <span className="stream-dot" style={{ background: streamColor(stream) }} />
            <div className="stream-main">
              <h2>{streamLabels[stream]}</h2>
              <span className="course-meta">
                {courses.length} {courses.length === 1 ? 'course' : 'courses'} · {lessons} lessons
              </span>
            </div>
            <span className={`course-progress${done === lessons && lessons ? ' done' : ''}`}>
              {done}/{lessons}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default function StreamPage() {
  const { stream } = useParams()
  const progress = useProgress()
  const ordered = useMemo(orderedCourses, [])

  if (!stream || !(stream in streamLabels)) return <NotFound what="Stream" />
  const key = stream as CourseStream

  const courses = ordered.filter((c) => courseSummaries[c.id]?.stream === key)
  const lessons = courses.reduce((n, c) => n + (courseSummaries[c.id]?.lessonCount ?? 0), 0)
  const done = courses.reduce((n, c) => n + completedInCourse(progress, c.id), 0)

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <Link to="/streams">Streams</Link>
        <span className="sep">/</span>
        <span>{streamLabels[key]}</span>
      </nav>

      <div className="stream-badge">
        <span className="stream-dot" style={{ background: streamColor(key) }} />
        {courses.length} {courses.length === 1 ? 'course' : 'courses'} · {lessons} lessons · {done}{' '}
        completed
      </div>
      <h1 className="page-title">{streamLabels[key]}</h1>

      <div className="course-list stream-sequence">
        {courses.map((entry) => {
          const course = courseSummaries[entry.id]!
          const courseDone = completedInCourse(progress, course.id)
          return (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="course-card"
              onMouseEnter={() => void loadSemesterCourses(course.semesterId)}
              onFocus={() => void loadSemesterCourses(course.semesterId)}
            >
              <span className="stream-dot" style={{ background: streamColor(course.stream) }} />
              <div className="course-main">
                <span className="course-code">
                  {course.code} · Year {entry.year}, {entry.semesterLabel.split(' · ')[0]}
                </span>
                <h3>{course.title}</h3>
                <span className="course-meta">{course.credits} credits</span>
              </div>
              <span
                className={`course-progress${courseDone === course.lessonCount ? ' done' : ''}`}
              >
                {courseDone}/{course.lessonCount}
              </span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
