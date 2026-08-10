import { Link, useParams } from 'react-router-dom'
import { getCourse, yearForCourse } from '../data'
import { lessonKey, useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'

export default function CoursePage() {
  const { courseId } = useParams()
  const progress = useProgress()
  const course = courseId ? getCourse(courseId) : undefined

  if (!course) {
    return (
      <div className="not-found">
        <h1>Course not found</h1>
        <p>
          <Link to="/">Return to the curriculum overview</Link>
        </p>
      </div>
    )
  }

  const year = yearForCourse(course.id)

  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        {year && (
          <>
            <span className="sep">/</span>
            <Link to={`/year/${year.year}`}>Year {year.year}</Link>
          </>
        )}
        <span className="sep">/</span>
        <span>{course.code}</span>
      </nav>
      <div className="stream-badge">
        <span className="stream-dot" style={{ background: streamColor(course.stream) }} />
        {streamLabels[course.stream]} · {course.credits} credits
      </div>
      <h1 className="page-title">
        {course.code} · {course.title}
      </h1>
      <p className="course-description">{course.description}</p>
      <ol className="lesson-list">
        {course.lessons.map((lesson) => {
          const done = progress.has(lessonKey(course.id, lesson.id))
          return (
            <li key={lesson.id}>
              <Link to={`/course/${course.id}/lesson/${lesson.id}`} className="lesson-row">
                <span className="week-num">Wk {lesson.week}</span>
                <span className="lesson-title">{lesson.title}</span>
                {done && <span className="check">✓</span>}
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}
