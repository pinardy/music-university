import type { Course, Curriculum, Year } from '../types'
import { year1, year1Courses } from './year1'
import { year2, year2Courses } from './year2'
import { year3, year3Courses } from './year3'
import { year4, year4Courses } from './year4'
import { lessonKey } from '../progress'

const allCourses: Course[] = [...year1Courses, ...year2Courses, ...year3Courses, ...year4Courses]

export const curriculum: Curriculum = {
  programTitle: 'Bachelor of Music',
  description:
    'A four-year, eight-semester conservatory curriculum of weekly lessons spanning music theory, ' +
    'aural skills, music history, keyboard, composition, technology and performance. The course of ' +
    'study is adapted from the published curricula of leading conservatories and supplemented with ' +
    'standard repertoire and open educational resources.',
  inspirations: [
    'Yong Siew Toh Conservatory of Music, NUS',
    'The Juilliard School',
    'Royal College of Music, London',
    'Curtis Institute of Music',
  ],
  years: [year1, year2, year3, year4],
  courses: Object.fromEntries(allCourses.map((c) => [c.id, c])),
}

export function getCourse(courseId: string): Course | undefined {
  return curriculum.courses[courseId]
}

export function yearForCourse(courseId: string): Year | undefined {
  return curriculum.years.find((y) =>
    y.semesters.some((s) => s.courseIds.includes(courseId)),
  )
}

export function lessonKeysForYear(year: number): string[] {
  const y = curriculum.years.find((yy) => yy.year === year)
  if (!y) return []
  return y.semesters.flatMap((s) =>
    s.courseIds.flatMap((courseId) => {
      const course = curriculum.courses[courseId]
      return course ? course.lessons.map((l) => lessonKey(course.id, l.id)) : []
    }),
  )
}
