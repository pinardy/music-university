import { use } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { CourseSummary } from '../types'
import { courseSummaries, loadYearCourses, years } from '../data'
import { resolveResources } from '../data/resources'
import { lessonKey, toggleLesson, useProgress } from '../progress'
import ResourceList from '../components/ResourceList'
import NotFound from '../components/NotFound'

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const summary = courseId ? courseSummaries[courseId] : undefined
  if (!summary || !lessonId) return <NotFound what="Lesson" />
  return <LessonView summary={summary} lessonId={lessonId} />
}

function LessonView({ summary, lessonId }: { summary: CourseSummary; lessonId: string }) {
  const progress = useProgress()
  const course = use(loadYearCourses(summary.year)).get(summary.id)

  const lessonIndex = course?.lessons.findIndex((l) => l.id === lessonId) ?? -1
  const lesson = course && lessonIndex >= 0 ? course.lessons[lessonIndex] : undefined

  if (!course || !lesson) return <NotFound what="Lesson" />

  const year = years.find((y) => y.year === summary.year)
  const done = progress.has(lessonKey(course.id, lesson.id))
  const lessonResources = resolveResources(lesson.resources)
  const prev = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : undefined
  const next =
    lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : undefined

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
        <Link to={`/course/${course.id}`}>{course.code}</Link>
        <span className="sep">/</span>
        <span>Week {lesson.week}</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">
          {course.title} · Week {lesson.week}
        </span>
        <h1 className="page-title">{lesson.title}</h1>
      </header>

      <section className="lesson-section">
        <h2>Learning objectives</h2>
        <ul>
          {lesson.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Lesson</h2>
        {lesson.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      {lesson.listening && lesson.listening.length > 0 && (
        <section className="lesson-section">
          <h2>Listening &amp; repertoire</h2>
          <ul>
            {lesson.listening.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {lesson.assignments && lesson.assignments.length > 0 && (
        <section className="lesson-section">
          <h2>Assignments</h2>
          <ul>
            {lesson.assignments.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {lessonResources.length > 0 && (
        <section className="lesson-section">
          <h2>Sources &amp; further reading</h2>
          <p className="section-lede">
            Everything below is an external link. Items marked “subscription” expect a library or
            conservatory login; the rest are free to read.
          </p>
          <ResourceList resources={lessonResources} />
        </section>
      )}

      <button
        className={`complete-btn${done ? ' done' : ''}`}
        onClick={() => toggleLesson(course.id, lesson.id)}
      >
        {done ? '✓ Completed — tap to undo' : 'Mark lesson complete'}
      </button>

      <nav className="lesson-nav">
        {prev ? (
          <Link to={`/course/${course.id}/lesson/${prev.id}`}>← Wk {prev.week}: {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/course/${course.id}/lesson/${next.id}`}>Wk {next.week}: {next.title} →</Link>
        ) : (
          <Link to={`/course/${course.id}`}>Back to course ↑</Link>
        )}
      </nav>
    </>
  )
}
