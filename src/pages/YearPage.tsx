import { Link, useParams } from 'react-router-dom'
import { completedInCourse, courseSummaries, years } from '../data'
import { useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'
import NotFound from '../components/NotFound'

export default function YearPage() {
  const { year } = useParams()
  const progress = useProgress()
  const yearData = years.find((y) => String(y.year) === year)

  if (!yearData) return <NotFound what="Year" />

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
              const course = courseSummaries[courseId]
              if (!course) return null
              const done = completedInCourse(progress, course.id)
              const total = course.lessonCount
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
