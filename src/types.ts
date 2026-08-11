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

export type ResourceKind =
  /** Chapter or section of an open-access textbook */
  | 'textbook'
  /** Encyclopaedia, dictionary or organisation reference page */
  | 'reference'
  /** Downloadable score or part */
  | 'score'
  /** Scholarly article or essay */
  | 'article'
  /** Recorded lecture, masterclass or documentary */
  | 'lecture'
  /** Archive of listenable recordings, as opposed to a score */
  | 'recording'
  /** Interactive drills, ear-training or practice tools */
  | 'exercise'
  /** Historical document written by the musicians who made the music */
  | 'primary'

export interface Resource {
  /** Catalogue key, e.g. "omt-intervals" */
  id: string
  title: string
  /** Publisher, author or hosting institution */
  source: string
  url: string
  kind: ResourceKind
  /** Why this source is here and what to do with it */
  note?: string
  /** Free to read without a subscription or institutional login */
  open: boolean
}

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
  /** Catalogue ids (see `src/data/resources.ts`) of readings for this lesson */
  resources?: string[]
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
  /** Catalogue ids of the standing references used across the whole course */
  resources?: string[]
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

/**
 * The light half of a {@link Course} — everything the home and year pages need
 * to render, with the lesson bodies left behind in the per-year chunk.
 *
 * Generated into `catalogue.generated.ts`; see `scripts/gen-catalogue.ts`.
 */
export interface CourseSummary {
  id: string
  code: string
  title: string
  credits: number
  stream: CourseStream
  year: 1 | 2 | 3 | 4
  /** Which semester chunk holds this course's lessons, e.g. "y2s1" */
  semesterId: string
  lessonCount: number
  prerequisites?: string[]
}
