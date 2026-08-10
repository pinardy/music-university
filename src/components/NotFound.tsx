import { Link } from 'react-router-dom'

export default function NotFound({ what = 'Page' }: { what?: string }) {
  return (
    <div className="not-found">
      <h1>{what} not found</h1>
      <p>
        <Link to="/">Return to the curriculum overview</Link>
      </p>
    </div>
  )
}
