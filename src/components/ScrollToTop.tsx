import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Handles the two things a single-page app has to do for itself on navigation:
 * reset scroll, and move focus.
 *
 * Without the scroll reset, following "next week →" from the foot of a long
 * lesson lands you at the foot of the next one. Without the focus move, the
 * browser leaves focus on the link you just clicked — so keyboard users
 * re-tab through the whole header each time, and screen readers never
 * announce that anything changed.
 *
 * Back/forward are left alone so the browser can restore the previous offset.
 */
export default function ScrollToTop({ mainRef }: { mainRef: React.RefObject<HTMLElement | null> }) {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const firstRender = useRef(true)

  useEffect(() => {
    if (navigationType === 'POP') return
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, navigationType])

  useEffect(() => {
    // Not on first paint: stealing focus from the document on load is its own
    // annoyance, and nothing has changed yet.
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, mainRef])

  return null
}
