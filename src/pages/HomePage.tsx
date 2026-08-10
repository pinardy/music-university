import { Link } from 'react-router-dom'
import { curriculum, lessonKeysForYear } from '../data'
import { useProgress } from '../progress'

export default function HomePage() {
  const progress = useProgress()

  return (
    <>
      <section className="hero">
        <h1>{curriculum.programTitle}</h1>
        <p>{curriculum.description}</p>
        <ul className="inspirations">
          {curriculum.inspirations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
      <div className="year-grid">
        {curriculum.years.map((y) => {
          const keys = lessonKeysForYear(y.year)
          const done = keys.filter((k) => progress.has(k)).length
          const pct = keys.length ? Math.round((done / keys.length) * 100) : 0
          return (
            <Link key={y.year} to={`/year/${y.year}`} className="year-card">
              <span className="year-num">Year {y.year}</span>
              <h2>{y.title}</h2>
              <p>{y.theme}</p>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="progress-label">
                {done} of {keys.length} lessons completed
              </span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
