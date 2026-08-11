import { LEVEL_LABELS, type Rubric } from '../data/assessment'

/**
 * A rubric as a grid of criteria against levels.
 *
 * Wide by nature, so it scrolls inside its own container rather than pushing
 * the page sideways, and collapses to stacked cards on a phone where four
 * columns of prose would be unreadable.
 */
export default function RubricTable({ rubric }: { rubric: Rubric }) {
  return (
    <div className="rubric-scroll">
      <table className="rubric-table">
        <caption className="sr-only">{rubric.title} assessment criteria</caption>
        <thead>
          <tr>
            <th scope="col">Criterion</th>
            {LEVEL_LABELS.map((l) => (
              <th key={l} scope="col">
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rubric.criteria.map((c) => (
            <tr key={c.name}>
              <th scope="row">
                {c.name}
                <span className="criterion-desc">{c.description}</span>
              </th>
              {c.levels.map((level, i) => (
                <td key={i} data-level={LEVEL_LABELS[i]}>
                  {level}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
