import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'music-curriculum-progress-v1'

type ProgressSet = Set<string>

let completed: ProgressSet = load()
const listeners = new Set<() => void>()

/**
 * Immutable copy handed to React. `completed` is mutated in place by
 * {@link toggleLesson}, so it cannot serve as the snapshot itself — its
 * identity would never change and no component would re-render.
 */
let snapshot: ReadonlySet<string> = new Set(completed)

function load(): ProgressSet {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

function persist() {
  snapshot = new Set(completed)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
  } catch {
    // storage full or unavailable — progress stays in memory
  }
  listeners.forEach((l) => l())
}

export function lessonKey(courseId: string, lessonId: string): string {
  return `${courseId}/${lessonId}`
}

export function toggleLesson(courseId: string, lessonId: string) {
  const key = lessonKey(courseId, lessonId)
  if (completed.has(key)) completed.delete(key)
  else completed.add(key)
  persist()
}

export function resetProgress() {
  completed = new Set()
  persist()
}

/** Shape of the file produced by {@link exportProgress}. */
interface ProgressFile {
  format: typeof EXPORT_FORMAT
  exportedAt: string
  completed: string[]
}

const EXPORT_FORMAT = 'music-university/progress@1'

export function exportProgress(): ProgressFile {
  return {
    format: EXPORT_FORMAT,
    exportedAt: new Date().toISOString(),
    completed: [...completed].sort(),
  }
}

export class ProgressImportError extends Error {}

/**
 * Replace the completed set from a previously exported file.
 *
 * Unknown lesson keys are kept rather than dropped: a backup taken against a
 * later version of the curriculum should survive a round trip through an
 * older one.
 */
export function importProgress(raw: unknown): number {
  if (typeof raw !== 'object' || raw === null) {
    throw new ProgressImportError('That file is not a progress export.')
  }
  const file = raw as Partial<ProgressFile>
  if (file.format !== EXPORT_FORMAT) {
    throw new ProgressImportError(
      `Unrecognised format “${String(file.format ?? 'missing')}” — expected ${EXPORT_FORMAT}.`,
    )
  }
  if (!Array.isArray(file.completed) || file.completed.some((k) => typeof k !== 'string')) {
    throw new ProgressImportError('The “completed” list is missing or malformed.')
  }
  completed = new Set(file.completed as string[])
  persist()
  return completed.size
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): ReadonlySet<string> {
  return snapshot
}

/** Reactive set of completed lesson keys. */
export function useProgress(): ReadonlySet<string> {
  return useSyncExternalStore(subscribe, getSnapshot)
}
