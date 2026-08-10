import { Link, useParams } from 'react-router-dom'
import { curriculum, getCourse } from '../data'
import { lessonKey, useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'

export default function YearPage() {
  const { year } = useParams()
  const progress = useProgress()
  const yearData = curriculum.years.find((y) => String(y.year) === year)

  if (!yearData) {
    return (
      <div className="not-found">
        <h1>Year not found</h1>
        <p>
          <Link to="/">Return to the curriculum overview</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Year {yearData.year}</span>
      </nav>
      <h1 className="page-title">
        Year {yearData.year} — {yearData.title}
      </h1>
      <p className="page-subtitle">{yearData.theme}</p>
      {yearData.semesters.map((sem) => (
        <section key={sem.id} className="semester-block">
          <h2>{sem.label}</h2>
          <div className="course-list">
            {sem.courseIds.map((courseId) => {
              const course = getCourse(courseId)
              if (!course) return null
              const done = course.lessons.filter((l) =>
                progress.has(lessonKey(course.id, l.id)),
              ).length
              const total = course.lessons.length
              return (
                <Link key={course.id} to={`/course/${course.id}`} className="course-card">
                  <span
                    className="stream-dot"
                    style={{ background: streamColor(course.stream) }}
                    title={streamLabels[course.stream]}
                  />
                  <div className="course-main">
                    <span className="course-code">{course.code}</span>
                    <h3>{course.title}</h3>
                    <span className="course-meta">
                      {streamLabels[course.stream]} · {course.credits} credits
                    </span>
                  </div>
                  <span className={`course-progress${done === total ? ' done' : ''}`}>
                    {done}/{total} {done === total ? '✓' : ''}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </>
  )
}
