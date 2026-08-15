import { use, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import type { Course, CourseSummary, Lesson } from '../types'
import { courseSummaries, loadSemesterCourses, years } from '../data'
import { resolveResources } from '../data/resources'
import {
  assignmentKey,
  lessonKey,
  recordVisit,
  toggleAssignment,
  toggleLesson,
  useAssignments,
  useProgress,
} from '../progress'
import ResourceList from '../components/ResourceList'
import NotFound from '../components/NotFound'
import LessonNote from '../components/LessonNote'
import ListeningEntry from '../components/ListeningEntry'
import GlossaryText from '../components/GlossaryText'
import { newGlossaryState } from '../glossaryState'

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const summary = courseId ? courseSummaries[courseId] : undefined
  if (!summary || !lessonId) return <NotFound what="Lesson" />
  return <LessonView summary={summary} lessonId={lessonId} />
}

function LessonView({ summary, lessonId }: { summary: CourseSummary; lessonId: string }) {
  const course = use(loadSemesterCourses(summary.semesterId)).get(summary.id)

  const lessonIndex = course?.lessons.findIndex((l) => l.id === lessonId) ?? -1
  const lesson = course && lessonIndex >= 0 ? course.lessons[lessonIndex] : undefined

  if (!course || !lesson) return <NotFound what="Lesson" />

  // Split out so the visit-recording effect sits below the not-found guard
  // rather than running for a lesson that does not exist.
  return <LessonBody course={course} lesson={lesson} summary={summary} index={lessonIndex} />
}

function LessonBody({
  course,
  lesson,
  summary,
  index,
}: {
  course: Course
  lesson: Lesson
  summary: CourseSummary
  index: number
}) {
  const progress = useProgress()
  const assignments = useAssignments()
  const navigate = useNavigate()

  useEffect(() => {
    recordVisit({
      courseId: course.id,
      lessonId: lesson.id,
      courseCode: course.code,
      title: lesson.title,
      week: lesson.week,
    })
  }, [course.id, course.code, lesson.id, lesson.title, lesson.week])

  const lessonIndex = index
  // Rebuilt every render on purpose. Memoising it would leave the "already
  // marked" set full from the previous pass, so every glossary term would
  // disappear the first time anything else on the page changed.
  const glossaryState = newGlossaryState()

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
        <span>
          Week {lesson.week} of {course.lessons.length}
        </span>
      </nav>

      <header className="lesson-header">
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
          <p key={i}>
            <GlossaryText text={para} state={glossaryState} />
          </p>
        ))}
      </section>

      {lesson.listening && lesson.listening.length > 0 && (
        <section className="lesson-section">
          <h2>Listening &amp; repertoire</h2>
          <ul>
            {lesson.listening.map((item, i) => (
              <li key={i}>
                <ListeningEntry text={item} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {lesson.assignments && lesson.assignments.length > 0 && (
        <section className="lesson-section">
          <h2>Assignments</h2>
          <ul className="assignment-list">
            {lesson.assignments.map((item, i) => {
              const key = assignmentKey(course.id, lesson.id, i)
              const ticked = assignments.has(key)
              return (
                <li key={i} className={ticked ? 'done' : undefined}>
                  <label>
                    <input
                      type="checkbox"
                      checked={ticked}
                      onChange={() => toggleAssignment(key)}
                    />
                    <span>{item}</span>
                  </label>
                </li>
              )
            })}
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

      <LessonNote key={lessonKey(course.id, lesson.id)} noteKey={lessonKey(course.id, lesson.id)} />

      <div className="lesson-actions">
        <button
          className={`complete-btn${done ? ' done' : ''}`}
          onClick={() => toggleLesson(course.id, lesson.id)}
        >
          {done ? '✓ Completed — undo' : 'Mark lesson complete'}
        </button>
        {!done && next && (
          <button
            className="complete-btn next"
            onClick={() => {
              toggleLesson(course.id, lesson.id)
              navigate(`/course/${course.id}/lesson/${next.id}`)
            }}
          >
            Complete &amp; continue →
          </button>
        )}
      </div>

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
