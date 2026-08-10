import type { Course, Year } from '../types'
import { y4s1Courses } from './y4s1'
import { y4s2Courses } from './y4s2'

export const year4Courses: Course[] = [...y4s1Courses, ...y4s2Courses]

export const year4: Year = {
  year: 4,
  title: 'Integration & Launch',
  theme:
    'Conducting, world musics, entrepreneurship, the independent capstone project and the graduation recital.',
  semesters: [
    {
      id: 'y4s1',
      label: 'Semester 7 · 16 credits',
      courseIds: y4s1Courses.map((c) => c.id),
    },
    {
      id: 'y4s2',
      label: 'Semester 8 · 17 credits',
      courseIds: y4s2Courses.map((c) => c.id),
    },
  ],
}
