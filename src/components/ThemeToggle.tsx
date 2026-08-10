import { setThemePreference, useThemePreference, type ThemePreference } from '../theme'

const ORDER: ThemePreference[] = ['system', 'light', 'dark']
const LABEL: Record<ThemePreference, string> = {
  system: 'Auto',
  light: 'Light',
  dark: 'Dark',
}
const ICON: Record<ThemePreference, string> = {
  system: '◐',
  light: '☀',
  dark: '☾',
}

/** Cycles system → light → dark. Three states need no menu. */
export default function ThemeToggle() {
  const preference = useThemePreference()
  const next = ORDER[(ORDER.indexOf(preference) + 1) % ORDER.length]!

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setThemePreference(next)}
      title={`Theme: ${LABEL[preference]} — switch to ${LABEL[next]}`}
      aria-label={`Theme: ${LABEL[preference]}. Switch to ${LABEL[next]}.`}
    >
      <span aria-hidden="true">{ICON[preference]}</span>
      <span className="theme-label">{LABEL[preference]}</span>
    </button>
  )
}
