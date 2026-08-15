/**
 * Tracks which glossary terms have already been marked in a lesson, so each
 * is linked once rather than on every occurrence. Kept out of the component
 * file so that only components are exported from there.
 */
export interface GlossaryState {
  seen: Set<string>
}

export function newGlossaryState(): GlossaryState {
  return { seen: new Set() }
}
