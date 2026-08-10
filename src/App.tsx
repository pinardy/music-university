import { Suspense, lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'

// Route-level splitting keeps the lesson prose, the source catalogue and the
// library's grouping logic out of the initial download.
const HomePage = lazy(() => import('./pages/HomePage'))
const YearPage = lazy(() => import('./pages/YearPage'))
const CoursePage = lazy(() => import('./pages/CoursePage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const LibraryPage = lazy(() => import('./pages/LibraryPage'))

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
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
      <Suspense fallback={<p className="route-loading">Loading…</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/year/:year" element={<YearPage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
