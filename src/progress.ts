import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'music-curriculum-progress-v1'

type ProgressSet = Set<string>

let completed: ProgressSet = load()
const listeners = new Set<() => void>()
let snapshotCache: string[] = [...completed]

function load(): ProgressSet {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}

function persist() {
  snapshotCache = [...completed]
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshotCache))
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

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): string[] {
  return snapshotCache
}

/** Reactive set of completed lesson keys. */
export function useProgress(): ProgressSet {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot)
  return new Set(snapshot)
}
