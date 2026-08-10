import type { Course } from '../types'

/**
 * Builds a semester label from the courses actually in it. The credit totals
 * used to be written out by hand and had drifted well away from the courses
 * they described.
 */
export function semesterLabel(n: number, courses: Course[]): string {
  const credits = courses.reduce((total, c) => total + c.credits, 0)
  return `Semester ${n} · ${credits} credits`
}
