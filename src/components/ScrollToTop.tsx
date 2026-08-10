import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Resets scroll on navigation. Without this, following "next week →" from the
 * foot of a long lesson lands you at the foot of the next one.
 *
 * Back/forward are left alone so the browser can restore the previous offset.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') return
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, navigationType])

  return null
}
