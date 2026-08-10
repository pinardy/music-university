import type { Course, Year } from '../types'
import { y1s1Courses } from './y1s1'
import { y1s2Courses } from './y1s2'

export const year1Courses: Course[] = [...y1s1Courses, ...y1s2Courses]

export const year1: Year = {
  year: 1,
  title: 'Foundations',
  theme:
    'Grounding musicianship in diatonic harmony, the trained ear, the keyboard, healthy practice and the discipline of the large ensemble.',
  semesters: [
    {
      id: 'y1s1',
      label: 'Semester 1 · 17 credits',
      courseIds: y1s1Courses.map((c) => c.id),
    },
    {
      id: 'y1s2',
      label: 'Semester 2 · 16 credits',
      courseIds: y1s2Courses.map((c) => c.id),
    },
  ],
}
