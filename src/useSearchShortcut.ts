import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * `/` or Cmd/Ctrl-K jumps to search.
 *
 * Search is the main route into 324 lessons and sits behind seven nav pills;
 * the search page focuses its own input on mount, so this only has to get the
 * reader there.
 */
export function useSearchShortcut() {
  const navigate = useNavigate()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = document.activeElement as HTMLElement | null
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el?.isContentEditable === true
      const isSlash = e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey
      const isCmdK = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)

      // `/` must still be typeable; Cmd-K is reserved so it works from a field.
      if (isSlash && typing) return
      if (!isSlash && !isCmdK) return

      e.preventDefault()
      navigate('/search')
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [navigate])
}
