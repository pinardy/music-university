import { useRef, useState } from 'react'
import {
  ProgressImportError,
  exportState,
  importState,
  resetProgress,
  useStateSummary,
} from '../progress'

type Status = { tone: 'ok' | 'error'; message: string } | null

/**
 * Backup and reset controls for everything the app remembers.
 *
 * Progress, repertoire ticks and notes live only in this browser's
 * localStorage, so clearing site data would otherwise destroy them with no way
 * back and no route to a second device.
 */
export default function ProgressControls() {
  const summary = useStateSummary()
  const fileInput = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<Status>(null)

  const empty = summary.completed === 0 && summary.listened === 0 && summary.notes === 0

  function download() {
    const data = exportState()
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
    )
    const a = document.createElement('a')
    a.href = url
    a.download = `music-university-progress-${data.exportedAt.slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setStatus({ tone: 'ok', message: 'Backup exported.' })
  }

  async function upload(file: File) {
    try {
      const result = importState(JSON.parse(await file.text()))
      setStatus({
        tone: 'ok',
        message: `Restored ${result.completed} lessons, ${result.listened} repertoire items and ${result.notes} notes.`,
      })
    } catch (err) {
      setStatus({
        tone: 'error',
        message:
          err instanceof ProgressImportError
            ? err.message
            : 'That file could not be read as JSON.',
      })
    }
  }

  function reset() {
    const parts = [
      `${summary.completed} completed lessons`,
      `${summary.listened} repertoire ticks`,
      `${summary.notes} notes`,
    ]
    if (!window.confirm(`Clear ${parts.join(', ')}? This cannot be undone.`)) return
    resetProgress()
    setStatus({ tone: 'ok', message: 'Everything cleared.' })
  }

  return (
    <section className="progress-controls">
      <h2>Your progress</h2>
      <p className="section-lede">
        {empty
          ? 'Nothing recorded yet. Progress, repertoire and notes are stored in this browser only — export a backup once you have some.'
          : `${summary.completed} lessons completed, ${summary.listened} repertoire items heard, ${summary.notes} notes written — stored in this browser only. Export a backup before clearing site data or moving to another device.`}
      </p>
      <div className="progress-actions">
        <button onClick={download} disabled={empty}>
          Export backup
        </button>
        <button onClick={() => fileInput.current?.click()}>Import backup</button>
        <button className="danger" onClick={reset} disabled={empty}>
          Clear everything
        </button>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) void upload(file)
            e.target.value = ''
          }}
        />
      </div>
      {status && (
        <p className={`progress-status ${status.tone}`} role="status">
          {status.message}
        </p>
      )}
    </section>
  )
}
