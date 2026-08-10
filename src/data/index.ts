import type { Course } from '../types'
import { courseSummaries, lessonCountByYear, years } from './catalogue.generated'
import { program } from './program'

export { program, years, courseSummaries, lessonCountByYear }
export type { SemesterSummary, YearSummary } from './catalogue.generated'

/**
 * Lesson prose is the bulk of this app, so each year is a separate chunk that
 * only the course and lesson pages pull in. Everything the home and year pages
 * need lives in the generated catalogue instead.
 */
const loaders: Record<number, () => Promise<{ default: Course[] }>> = {
  1: () => import('./year1').then((m) => ({ default: m.year1Courses })),
  2: () => import('./year2').then((m) => ({ default: m.year2Courses })),
  3: () => import('./year3').then((m) => ({ default: m.year3Courses })),
  4: () => import('./year4').then((m) => ({ default: m.year4Courses })),
}

const cache = new Map<number, Promise<Map<string, Course>>>()

export function loadYearCourses(year: number): Promise<Map<string, Course>> {
  let pending = cache.get(year)
  if (!pending) {
    const load = loaders[year]
    pending = load
      ? load().then((m) => new Map(m.default.map((c) => [c.id, c])))
      : Promise.resolve(new Map())
    cache.set(year, pending)
  }
  return pending
}

/** Resolve a single course, fetching its year's chunk if it is not loaded yet. */
export async function loadCourse(courseId: string): Promise<Course | undefined> {
  const summary = courseSummaries[courseId]
  if (!summary) return undefined
  return (await loadYearCourses(summary.year)).get(courseId)
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
