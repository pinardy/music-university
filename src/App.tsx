import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import YearPage from './pages/YearPage'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" aria-label="Home">
          <img src="/icon.svg" alt="" />
        </Link>
        <Link to="/" className="wordmark">
          Conservatory
          <small>Bachelor of Music</small>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/year/:year" element={<YearPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>Page not found</h1>
              <p>
                <Link to="/">Return to the curriculum overview</Link>
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  )
}
