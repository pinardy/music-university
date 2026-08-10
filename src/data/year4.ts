import type { Course, Year } from '../types'
import { semesterLabel } from './semesterLabel'
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
      label: semesterLabel(7, y4s1Courses),
      courseIds: y4s1Courses.map((c) => c.id),
    },
    {
      id: 'y4s2',
      label: semesterLabel(8, y4s2Courses),
      courseIds: y4s2Courses.map((c) => c.id),
    },
  ],
}
