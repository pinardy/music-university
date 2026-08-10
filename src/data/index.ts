import type { Course } from '../types'
import { courseSummaries, lessonCountByYear, years } from './catalogue.generated'
import { program } from './program'

export { program, years, courseSummaries, lessonCountByYear }
export type { SemesterSummary, YearSummary } from './catalogue.generated'

/**
 * Lesson prose is the bulk of this app, so it is split one chunk per semester
 * — the smallest unit the source files already divide along. Reading a lesson
 * costs its own semester and nothing else; a year would be roughly twice the
 * download for the same page. Everything the home, year and stream pages need
 * lives in the generated catalogue instead.
 */
const loaders: Record<string, () => Promise<Course[]>> = {
  y1s1: () => import('./y1s1').then((m) => m.y1s1Courses),
  y1s2: () => import('./y1s2').then((m) => m.y1s2Courses),
  y2s1: () => import('./y2s1').then((m) => m.y2s1Courses),
  y2s2: () => import('./y2s2').then((m) => m.y2s2Courses),
  y3s1: () => import('./y3s1').then((m) => m.y3s1Courses),
  y3s2: () => import('./y3s2').then((m) => m.y3s2Courses),
  y4s1: () => import('./y4s1').then((m) => m.y4s1Courses),
  y4s2: () => import('./y4s2').then((m) => m.y4s2Courses),
}

export const semesterIds = Object.keys(loaders)

const cache = new Map<string, Promise<Map<string, Course>>>()

export function loadSemesterCourses(semesterId: string): Promise<Map<string, Course>> {
  let pending = cache.get(semesterId)
  if (!pending) {
    const load = loaders[semesterId]
    pending = load
      ? load().then((courses) => new Map(courses.map((c) => [c.id, c])))
      : Promise.resolve(new Map())
    cache.set(semesterId, pending)
  }
  return pending
}

/**
 * Every course, in curriculum order. Pulls all eight semester chunks, so it is
 * only for the pages that genuinely span the whole degree — search and
 * repertoire. They are the same chunks the lesson pages use, so a semester
 * already read is not downloaded twice.
 */
let allCourses: Promise<Course[]> | undefined
let resolvedCourses: Course[] | undefined

export function loadAllCourses(): Promise<Course[]> {
  allCourses ??= Promise.all(semesterIds.map(loadSemesterCourses)).then((bySemester) => {
    resolvedCourses = bySemester.flatMap((m) => [...m.values()])
    return resolvedCourses
  })
  return allCourses
}

/**
 * The already-resolved course list, or undefined if it is still loading.
 * Lets the whole-degree pages render their controls on the first frame and
 * skip the loading state entirely on a second visit.
 */
export function peekAllCourses(): Course[] | undefined {
  return resolvedCourses
}

/** Resolve a single course, fetching its year's chunk if it is not loaded yet. */
export async function loadCourse(courseId: string): Promise<Course | undefined> {
  const summary = courseSummaries[courseId]
  if (!summary) return undefined
  return (await loadSemesterCourses(summary.semesterId)).get(courseId)
}

export function yearSummaryFor(courseId: string) {
  const summary = courseSummaries[courseId]
  return summary ? years.find((y) => y.year === summary.year) : undefined
}

/**
 * Completed-lesson tallies read straight off the progress keys, which are
 * `courseId/lessonId`. Counting this way keeps the home and year pages free of
 * the lesson data they would otherwise need just to know how many there are.
 */
export function completedInCourse(progress: ReadonlySet<string>, courseId: string): number {
  const prefix = `${courseId}/`
  let n = 0
  for (const key of progress) if (key.startsWith(prefix)) n++
  return n
}

export function completedInYear(progress: ReadonlySet<string>, year: number): number {
  let n = 0
  for (const key of progress) {
    const courseId = key.slice(0, key.indexOf('/'))
    if (courseSummaries[courseId]?.year === year) n++
  }
  return n
}
