import { useSyncExternalStore } from 'react'

/**
 * Everything the app remembers about a student's study: which lessons are
 * complete, which repertoire has been listened to, and any notes they have
 * written. All of it lives in this browser only, so {@link exportState} is
 * the sole route to a backup or a second device.
 */

/** v1 held a bare array of completed lesson keys. Read once, then migrated. */
const LEGACY_KEY = 'music-curriculum-progress-v1'
const STORAGE_KEY = 'music-university-state-v2'

interface StudyState {
  completed: Set<string>
  /** Repertoire items, keyed by their own text — see {@link repertoireKey}. */
  listened: Set<string>
  /** Lesson key to note body. */
  notes: Map<string, string>
}

let state: StudyState = load()
const listeners = new Set<() => void>()

/**
 * Immutable copy handed to React. The live sets are mutated in place, so they
 * cannot serve as the snapshot themselves — identity would never change and
 * no component would re-render.
 */
let snapshot = freeze(state)

function freeze(s: StudyState) {
  return {
    completed: new Set(s.completed) as ReadonlySet<string>,
    listened: new Set(s.listened) as ReadonlySet<string>,
    notes: new Map(s.notes) as ReadonlyMap<string, string>,
  }
}

function empty(): StudyState {
  return { completed: new Set(), listened: new Set(), notes: new Map() }
}

function load(): StudyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return fromJSON(JSON.parse(raw))
    const legacy = localStorage.getItem(LEGACY_KEY)
    if (legacy) {
      const s = empty()
      s.completed = new Set(JSON.parse(legacy) as string[])
      return s
    }
  } catch {
    // fall through to an empty state rather than losing the app
  }
  return empty()
}

function fromJSON(raw: unknown): StudyState {
  const s = empty()
  if (typeof raw !== 'object' || raw === null) return s
  const o = raw as Record<string, unknown>
  if (Array.isArray(o.completed)) s.completed = new Set(o.completed.filter(isString))
  if (Array.isArray(o.listened)) s.listened = new Set(o.listened.filter(isString))
  if (o.notes && typeof o.notes === 'object') {
    for (const [k, v] of Object.entries(o.notes as Record<string, unknown>)) {
      if (isString(v) && v.trim()) s.notes.set(k, v)
    }
  }
  return s
}

function isString(v: unknown): v is string {
  return typeof v === 'string'
}

function toJSON(s: StudyState) {
  return {
    completed: [...s.completed].sort(),
    listened: [...s.listened].sort(),
    notes: Object.fromEntries([...s.notes.entries()].sort(([a], [b]) => a.localeCompare(b))),
  }
}

function persist() {
  snapshot = freeze(state)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toJSON(state)))
  } catch {
    // storage full or unavailable — state stays in memory for this session
  }
  listeners.forEach((l) => l())
}

// ── Keys ─────────────────────────────────────────────────────────────────────

export function lessonKey(courseId: string, lessonId: string): string {
  return `${courseId}/${lessonId}`
}

/**
 * Repertoire is keyed by the listening entry's own text rather than by its
 * position, so a work assigned by two different courses is one item that you
 * have either heard or not, and reordering a lesson does not lose ticks.
 */
export function repertoireKey(item: string): string {
  return item.trim()
}

// ── Mutations ────────────────────────────────────────────────────────────────

export function toggleLesson(courseId: string, lessonId: string) {
  const key = lessonKey(courseId, lessonId)
  if (state.completed.has(key)) state.completed.delete(key)
  else state.completed.add(key)
  persist()
}

export function toggleListened(item: string) {
  const key = repertoireKey(item)
  if (state.listened.has(key)) state.listened.delete(key)
  else state.listened.add(key)
  persist()
}

export function setNote(key: string, body: string) {
  if (body.trim()) state.notes.set(key, body)
  else state.notes.delete(key)
  persist()
}

export function resetProgress() {
  state = empty()
  persist()
}

// ── Backup ───────────────────────────────────────────────────────────────────

const EXPORT_FORMAT = 'music-university/progress@2'
const LEGACY_FORMAT = 'music-university/progress@1'

interface StateFile {
  format: string
  exportedAt: string
  completed: string[]
  listened: string[]
  notes: Record<string, string>
}

export function exportState(): StateFile {
  return { format: EXPORT_FORMAT, exportedAt: new Date().toISOString(), ...toJSON(state) }
}

export class ProgressImportError extends Error {}

export interface ImportSummary {
  completed: number
  listened: number
  notes: number
}

/**
 * Replace the whole state from a previously exported file. v1 files, which
 * carried only completed lessons, are still accepted.
 *
 * Unknown lesson keys are kept rather than dropped: a backup taken against a
 * later version of the curriculum should survive a round trip through an
 * older one.
 */
export function importState(raw: unknown): ImportSummary {
  if (typeof raw !== 'object' || raw === null) {
    throw new ProgressImportError('That file is not a progress export.')
  }
  const file = raw as Partial<StateFile>
  if (file.format !== EXPORT_FORMAT && file.format !== LEGACY_FORMAT) {
    throw new ProgressImportError(
      `Unrecognised format “${String(file.format ?? 'missing')}” — expected ${EXPORT_FORMAT}.`,
    )
  }
  if (!Array.isArray(file.completed) || !file.completed.every(isString)) {
    throw new ProgressImportError('The “completed” list is missing or malformed.')
  }
  state = fromJSON(file)
  persist()
  return { completed: state.completed.size, listened: state.listened.size, notes: state.notes.size }
}

// ── Subscription ─────────────────────────────────────────────────────────────

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return snapshot
}

function useStudyState() {
  return useSyncExternalStore(subscribe, getSnapshot)
}

/** Reactive set of completed lesson keys. */
export function useProgress(): ReadonlySet<string> {
  return useStudyState().completed
}

/** Reactive set of repertoire keys already listened to. */
export function useListened(): ReadonlySet<string> {
  return useStudyState().listened
}

export function useNote(key: string): string {
  return useStudyState().notes.get(key) ?? ''
}

export function useNoteCount(): number {
  return useStudyState().notes.size
}

/** Totals for the backup panel. */
export function useStateSummary(): ImportSummary {
  const s = useStudyState()
  return { completed: s.completed.size, listened: s.listened.size, notes: s.notes.size }
}
