import { useEffect, useState } from 'react'
import type { Course } from './types'
import { loadAllCourses, peekAllCourses } from './data'

/**
 * Loads the whole curriculum without suspending.
 *
 * Search and repertoire need all eight semester chunks — around 340 kB
 * gzipped. Suspending on that would leave the reader looking at a bare
 * "Loading…" for the whole download, so instead the page renders immediately
 * and fills in when the data lands. Returns synchronously once loaded, so
 * revisiting either page never shows the pending state again.
 */
export function useAllCourses(): Course[] | undefined {
  const [courses, setCourses] = useState(peekAllCourses)

  useEffect(() => {
    if (courses) return
    let cancelled = false
    void loadAllCourses().then((all) => {
      if (!cancelled) setCourses(all)
    })
    return () => {
      cancelled = true
    }
  }, [courses])

  return courses
}
