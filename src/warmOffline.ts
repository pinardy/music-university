import { loadSemesterCourses, semesterIds } from './data'

/**
 * Pulls the semester chunks into the runtime cache once the page is idle.
 *
 * The service worker deliberately does not precache them — that made every
 * first visit download the whole degree before anything was readable. Fetching
 * them afterwards, one at a time and only when the browser has nothing better
 * to do, restores full offline coverage without touching the critical path.
 *
 * Skipped entirely on metered or slow connections, where quietly pulling
 * ~340 kB nobody asked for is the wrong trade.
 */
const IDLE_TIMEOUT_MS = 10_000
const GAP_MS = 400

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

function shouldWarm(): boolean {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  if (!connection) return true
  if (connection.saveData) return false
  return !/(^|-)(2g|slow-2g)$/.test(connection.effectiveType ?? '')
}

function onIdle(fn: () => void) {
  const ric = (window as Window & { requestIdleCallback?: typeof requestIdleCallback })
    .requestIdleCallback
  if (ric) ric(fn, { timeout: IDLE_TIMEOUT_MS })
  else setTimeout(fn, 2000)
}

let started = false

export function warmOfflineCache() {
  if (started || !shouldWarm()) return
  started = true

  onIdle(async () => {
    const jobs = [
      ...semesterIds.map((id) => () => loadSemesterCourses(id)),
      // Carries the source cross-reference, also kept out of the precache.
      () => import('./pages/LibraryPage'),
    ]

    for (const job of jobs) {
      try {
        await job()
      } catch {
        // A failed warm-up is not worth surfacing; the chunk loads on demand.
      }
      // Yield between chunks so this never competes with a real navigation.
      await new Promise((resolve) => setTimeout(resolve, GAP_MS))
    }
  })
}
