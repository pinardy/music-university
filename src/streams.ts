import type { CourseStream } from './types'

export const streamLabels: Record<CourseStream, string> = {
  theory: 'Music Theory & Analysis',
  aural: 'Aural Skills',
  history: 'Music History',
  performance: 'Principal Study',
  ensemble: 'Ensemble & Chamber Music',
  keyboard: 'Keyboard Skills',
  composition: 'Composition & Orchestration',
  technology: 'Music Technology',
  context: 'Musical Contexts',
  professional: 'Professional Development',
}

export function streamColor(stream: CourseStream): string {
  return `var(--stream-${stream})`
}
