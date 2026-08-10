import { use } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { CourseSummary } from '../types'
import { courseSummaries, loadYearCourses, years } from '../data'
import { resolveResources } from '../data/resources'
import { lessonKey, useProgress } from '../progress'
import { streamColor, streamLabels } from '../streams'
import ResourceList from '../components/ResourceList'
import NotFound from '../components/NotFound'

export default function CoursePage() {
  const { courseId } = useParams()
  const summary = courseId ? courseSummaries[courseId] : undefined
  if (!summary) return <NotFound what="Course" />
  return <CourseView summary={summary} />
}

function CourseView({ summary }: { summary: CourseSummary }) {
  const progress = useProgress()
  const course = use(loadYearCourses(summary.year)).get(summary.id)

  if (!course) return <NotFound what="Course" />

  const year = years.find((y) => y.year === summary.year)
  const courseResources = resolveResources(course.resources)
  const prerequisites = (course.prerequisites ?? [])
    .map((id) => courseSummaries[id])
    .filter(Boolean)

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

      {prerequisites.length > 0 && (
        <p className="prerequisites">
          <span className="prerequisites-label">Prerequisite{prerequisites.length > 1 && 's'}</span>
          {prerequisites.map((p) => (
            <Link key={p.id} to={`/course/${p.id}`} className="prerequisite">
              {p.code} · {p.title}
            </Link>
          ))}
        </p>
      )}

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
