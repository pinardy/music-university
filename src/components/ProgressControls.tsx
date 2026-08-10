import { useRef, useState } from 'react'
import {
  ProgressImportError,
  exportProgress,
  importProgress,
  resetProgress,
  useProgress,
} from '../progress'

type Status = { tone: 'ok' | 'error'; message: string } | null

/**
 * Backup and reset controls for the completed-lesson set.
 *
 * Progress lives only in this browser's localStorage, so clearing site data
 * would otherwise destroy it with no way back and no route to a second device.
 */
export default function ProgressControls() {
  const progress = useProgress()
  const fileInput = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<Status>(null)

  function download() {
    const data = exportProgress()
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
    )
    const a = document.createElement('a')
    a.href = url
    a.download = `music-university-progress-${data.exportedAt.slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setStatus({ tone: 'ok', message: `Exported ${data.completed.length} completed lessons.` })
  }

  async function upload(file: File) {
    try {
      const count = importProgress(JSON.parse(await file.text()))
      setStatus({ tone: 'ok', message: `Restored ${count} completed lessons.` })
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
    if (!window.confirm(`Clear all ${progress.size} completed lessons? This cannot be undone.`)) {
      return
    }
    resetProgress()
    setStatus({ tone: 'ok', message: 'Progress cleared.' })
  }

  return (
    <section className="progress-controls">
      <h2>Your progress</h2>
      <p className="section-lede">
        {progress.size === 0
          ? 'Nothing completed yet. Progress is stored in this browser only — export a backup once you have some.'
          : `${progress.size} lessons completed, stored in this browser only. Export a backup before clearing site data or moving to another device.`}
      </p>
      <div className="progress-actions">
        <button onClick={download} disabled={progress.size === 0}>
          Export backup
        </button>
        <button onClick={() => fileInput.current?.click()}>Import backup</button>
        <button className="danger" onClick={reset} disabled={progress.size === 0}>
          Clear progress
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
