import type { Course, Year } from '../types'
import { y2s1Courses } from './y2s1'
import { y2s2Courses } from './y2s2'

export const year2Courses: Course[] = [...y2s1Courses, ...y2s2Courses]

export const year2: Year = {
  year: 2,
  title: 'Craft & Context',
  theme:
    'Chromatic harmony through the edge of tonality, a thousand years of music history, chamber music and the sophomore continuation jury.',
  semesters: [
    {
      id: 'y2s1',
      label: 'Semester 3 · 17 credits',
      courseIds: y2s1Courses.map((c) => c.id),
    },
    {
      id: 'y2s2',
      label: 'Semester 4 · 17 credits',
      courseIds: y2s2Courses.map((c) => c.id),
    },
  ],
}
