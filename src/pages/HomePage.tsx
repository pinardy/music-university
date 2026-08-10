import { Link } from 'react-router-dom'
import { completedInYear, lessonCountByYear, program, years } from '../data'
import { useProgress } from '../progress'
import ProgressControls from '../components/ProgressControls'
import ContinueCard from '../components/ContinueCard'

export default function HomePage() {
  const progress = useProgress()

  return (
    <>
      <section className="hero">
        <h1>{program.programTitle}</h1>
        <p>{program.description}</p>
        <ul className="inspirations">
          {program.inspirations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
      <ContinueCard />
      <div className="year-grid">
        {years.map((y) => {
          const total = lessonCountByYear[y.year] ?? 0
          const done = completedInYear(progress, y.year)
          const pct = total ? Math.round((done / total) * 100) : 0
          return (
            <Link key={y.year} to={`/year/${y.year}`} className="year-card">
              <span className="year-num">Year {y.year}</span>
              <h2>{y.title}</h2>
              <p>{y.theme}</p>
              <div
                className="progress-track"
                role="progressbar"
                aria-valuenow={done}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-label={`Year ${y.year} progress`}
              >
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="progress-label">
                {done} of {total} lessons completed
              </span>
            </Link>
          )
        })}
      </div>
      <ProgressControls />
    </>
  )
}
