import type { Course, Year } from '../types'
import { semesterLabel } from './semesterLabel'
import { y3s1Courses } from './y3s1'
import { y3s2Courses } from './y3s2'

export const year3Courses: Course[] = [...y3s1Courses, ...y3s2Courses]

export const year3: Year = {
  year: 3,
  title: 'Analysis, Creation & Direction',
  theme:
    'Form and 20th-century analysis, first compositions and orchestrations, student-led chamber music and the junior recital.',
  semesters: [
    {
      id: 'y3s1',
      label: semesterLabel(5, y3s1Courses),
      courseIds: y3s1Courses.map((c) => c.id),
    },
    {
      id: 'y3s2',
      label: semesterLabel(6, y3s2Courses),
      courseIds: y3s2Courses.map((c) => c.id),
    },
  ],
}
