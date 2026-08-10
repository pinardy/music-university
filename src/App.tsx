import { Suspense, lazy, useRef } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'
import ThemeToggle from './components/ThemeToggle'

// Route-level splitting keeps the lesson prose, the source catalogue and the
// library's grouping logic out of the initial download.
const HomePage = lazy(() => import('./pages/HomePage'))
const YearPage = lazy(() => import('./pages/YearPage'))
const CoursePage = lazy(() => import('./pages/CoursePage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const LibraryPage = lazy(() => import('./pages/LibraryPage'))
const NotesPage = lazy(() => import('./pages/NotesPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const RepertoirePage = lazy(() => import('./pages/RepertoirePage'))
const StreamPage = lazy(() => import('./pages/StreamsPage'))
const StreamsIndexPage = lazy(() =>
  import('./pages/StreamsPage').then((m) => ({ default: m.StreamsIndexPage })),
)

const NAV = [
  { to: '/search', label: 'Search' },
  { to: '/repertoire', label: 'Repertoire' },
  { to: '/streams', label: 'Streams' },
  { to: '/notes', label: 'Notes' },
  { to: '/library', label: 'Sources' },
]

export default function App() {
  const mainRef = useRef<HTMLElement>(null)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop mainRef={mainRef} />
      <header className="site-header">
        <Link to="/" aria-label="Home" className="site-mark">
          <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="" />
        </Link>
        <Link to="/" className="wordmark">
          Music University
          <small>Bachelor of Music</small>
        </Link>
        <nav className="header-nav">
          {NAV.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `header-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </header>
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Suspense fallback={<p className="route-loading">Loading…</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/year/:year" element={<YearPage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/repertoire" element={<RepertoirePage />} />
            <Route path="/streams" element={<StreamsIndexPage />} />
            <Route path="/stream/:stream" element={<StreamPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
