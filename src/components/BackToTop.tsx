import { useEffect, useState } from 'react'

const SHOW_AFTER_PX = 900

/**
 * The glossary runs to nearly 4,000 words in one scroll and lesson pages to
 * around 800, with no way back to the navigation but a long swipe.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.getElementById('main')?.focus({ preventScroll: true })
      }}
    >
      <span aria-hidden="true">↑</span>
      <span className="sr-only">Back to top</span>
    </button>
  )
}
