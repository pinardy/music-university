import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'music-university-theme'

export type ThemePreference = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

const listeners = new Set<() => void>()
let preference: ThemePreference = load()

function load(): ThemePreference {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw === 'light' || raw === 'dark' ? raw : 'system'
  } catch {
    return 'system'
  }
}

const systemQuery =
  typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: light)') : undefined

function systemTheme(): ResolvedTheme {
  return systemQuery?.matches ? 'light' : 'dark'
}

export function resolveTheme(pref: ThemePreference = preference): ResolvedTheme {
  return pref === 'system' ? systemTheme() : pref
}

function apply() {
  document.documentElement.dataset.theme = resolveTheme()
  listeners.forEach((l) => l())
}

// Track the system setting so "system" keeps following it after load.
systemQuery?.addEventListener('change', () => {
  if (preference === 'system') apply()
})

export function setThemePreference(next: ThemePreference) {
  preference = next
  try {
    if (next === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // preference stays in memory for this session
  }
  apply()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): ThemePreference {
  return preference
}

export function useThemePreference(): ThemePreference {
  return useSyncExternalStore(subscribe, getSnapshot)
}
