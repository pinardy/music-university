import { useEffect, useRef, useState } from 'react'
import { setNote, useNote } from '../progress'

const SAVE_DELAY_MS = 600

/**
 * Freeform note attached to a lesson.
 *
 * Mount with `key={noteKey}` so the draft resets when you move between
 * lessons. Writes are debounced — otherwise every keystroke would serialise
 * the whole study state to localStorage — and flushed on unmount so
 * navigating away mid-sentence does not lose the tail of it.
 */
export default function LessonNote({ noteKey }: { noteKey: string }) {
  const saved = useNote(noteKey)
  const [draft, setDraft] = useState(saved)
  const [flushed, setFlushed] = useState(true)

  // Refs so the unmount effect can flush the latest draft without re-running.
  const latest = useRef(draft)
  latest.current = draft
  const savedRef = useRef(saved)
  savedRef.current = saved

  useEffect(() => {
    if (draft === savedRef.current) {
      setFlushed(true)
      return
    }
    setFlushed(false)
    const id = setTimeout(() => {
      setNote(noteKey, draft)
      setFlushed(true)
    }, SAVE_DELAY_MS)
    return () => clearTimeout(id)
  }, [draft, noteKey])

  useEffect(() => {
    return () => {
      if (latest.current !== savedRef.current) setNote(noteKey, latest.current)
    }
  }, [noteKey])

  return (
    <section className="lesson-section lesson-note">
      <h2>
        Your notes
        <span className={`note-state${flushed ? '' : ' pending'}`}>
          {draft.trim() === '' ? '' : flushed ? 'Saved' : 'Saving…'}
        </span>
      </h2>
      <p className="section-lede">
        Kept in this browser and included in your progress backup. Nothing is uploaded.
      </p>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => setNote(noteKey, draft)}
        rows={5}
        placeholder="Questions for your teacher, practice observations, things to revisit…"
        aria-label="Notes for this lesson"
      />
    </section>
  )
}
