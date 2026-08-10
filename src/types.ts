export type CourseStream =
  | 'theory'
  | 'aural'
  | 'history'
  | 'performance'
  | 'ensemble'
  | 'keyboard'
  | 'composition'
  | 'technology'
  | 'context'
  | 'professional'

export interface Lesson {
  /** Unique within its course, e.g. "week-01" */
  id: string
  week: number
  title: string
  objectives: string[]
  /** Markdown-ish paragraphs of lesson content */
  content: string[]
  /** Repertoire, recordings or scores to study this week */
  listening?: string[]
  /** Practice tasks / homework */
  assignments?: string[]
}

export interface Course {
  /** Unique across the whole curriculum, e.g. "mt1" */
  id: string
  code: string
  title: string
  credits: number
  stream: CourseStream
  description: string
  /** Course ids that should be completed first */
  prerequisites?: string[]
  lessons: Lesson[]
}

export interface Semester {
  /** e.g. "y1s1" */
  id: string
  label: string
  courseIds: string[]
}

export interface Year {
  year: 1 | 2 | 3 | 4
  title: string
  theme: string
  semesters: Semester[]
}

export interface Curriculum {
  programTitle: string
  description: string
  inspirations: string[]
  years: Year[]
  courses: Record<string, Course>
}
