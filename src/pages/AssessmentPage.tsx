import { Link } from 'react-router-dom'
import { courseSummaries } from '../data'
import { LEVEL_LABELS, rubrics, rubricsByCourse, workedExamples } from '../data/assessment'
import RubricTable from '../components/RubricTable'

export default function AssessmentPage() {
  return (
    <>
      <nav className="crumbs">
        <Link to="/">Curriculum</Link>
        <span className="sep">/</span>
        <span>Assessment</span>
      </nav>

      <header className="lesson-header">
        <span className="kicker">How the work is judged, and what good looks like</span>
        <h1 className="page-title">Assessment</h1>
      </header>
      <p className="course-description">
        {rubrics.length} rubrics and {workedExamples.length} worked examples. Assessment repeats
        across the degree — a written analysis is judged the same way in Year 1 and Year 3 — so the
        criteria are set out once here and each course points at the ones that apply to it.
        Levels are {LEVEL_LABELS.join(', ').toLowerCase()}.
      </p>

      <section className="lesson-section">
        <h2>Worked examples</h2>
        <p className="section-lede">
          Model answers with the reasoning shown. The annotations matter more than the prose: they
          are the part a rubric cannot express.
        </p>
        {workedExamples.map((ex) => (
          <article key={ex.id} id={ex.id} className="worked-example">
            <h3>{ex.title}</h3>
            <p className="example-brief">
              <strong>Brief.</strong> {ex.brief}
            </p>
            {ex.sections.map((s, i) => (
              <div key={i} className="example-section">
                <p className="example-text">{s.text}</p>
                {s.note && <p className="example-note">{s.note}</p>}
              </div>
            ))}
            <p className="example-why">Why it works</p>
            <ul className="example-points">
              {ex.whatMakesItWork.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="lesson-section">
        <h2>Rubrics</h2>
        {rubrics.map((r) => {
          const courses = Object.entries(rubricsByCourse)
            .filter(([, ids]) => ids.includes(r.id))
            .map(([id]) => courseSummaries[id])
            .filter(Boolean)
          return (
            <article key={r.id} id={r.id} className="rubric">
              <h3>{r.title}</h3>
              <p className="section-lede">{r.purpose}</p>
              <RubricTable rubric={r} />
              {courses.length > 0 && (
                <p className="rubric-courses">
                  Used by{' '}
                  {courses.map((c, i) => (
                    <span key={c!.id}>
                      {i > 0 && ', '}
                      <Link to={`/course/${c!.id}`}>{c!.code}</Link>
                    </span>
                  ))}
                </p>
              )}
            </article>
          )
        })}
      </section>
    </>
  )
}
