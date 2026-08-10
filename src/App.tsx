import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import YearPage from './pages/YearPage'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'
import LibraryPage from './pages/LibraryPage'

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" aria-label="Home">
          <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="" />
        </Link>
        <Link to="/" className="wordmark">
          Music University
          <small>Bachelor of Music</small>
        </Link>
        <Link to="/library" className="header-link">
          Sources
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/year/:year" element={<YearPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/library" element={<LibraryPage />} />
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
