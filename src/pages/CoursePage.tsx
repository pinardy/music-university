import { Link, useParams } from 'react-router-dom'
import { getCourse, yearForCourse } from '../data'
import { resolveResources } from '../data/resources'
import { lessonKey, useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'
import ResourceList from '../components/ResourceList'

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
  const courseResources = resolveResources(course.resources)

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

      {courseResources.length > 0 && (
        <section className="lesson-section course-references">
          <h2>Set texts &amp; standing references</h2>
          <p className="section-lede">
            Keep these open all semester. Week-by-week readings are listed on each lesson.
          </p>
          <ResourceList resources={courseResources} />
        </section>
      )}

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
