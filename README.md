# Conservatory — Bachelor of Music Curriculum PWA

A React + TypeScript progressive web app presenting a complete four-year (eight-semester)
Bachelor of Music curriculum as weekly lessons, with per-lesson objectives, teaching content,
listening lists, assignments and locally-stored progress tracking.

The synthesized curriculum is adapted from the published curricula of:

- **Yong Siew Toh Conservatory of Music, NUS** — pillar structure (major study, music studies,
  collaborative activity, professional integration) and "The Profession of Music" sequence
- **The Juilliard School** — the four classroom departments and the theory sequence
  (Diatonic Harmony → Chromatic Harmony → At Tonality's Edge), secondary piano for all majors
- **Royal College of Music, London** — the Healthy Musician, Teaching Musician and
  Independent Project modules; principal study weighted heavily every semester
- **Curtis Institute of Music** — universal conducting, solfège rigor, world-music and
  20th/21st-century-techniques requirements, liberal-arts foundations

## Structure

- 4 years / 8 semesters, ~132 credits, 51 courses
- Academic courses run 13 weekly lessons; applied courses (principal study, ensembles,
  chamber music, capstone) run 6 milestone units
- Streams: theory, aural skills, music history, principal study, ensemble, keyboard,
  composition, technology, musical contexts, professional development

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build (generates service worker + manifest)
npm run preview  # serve the production build locally
```

## PWA

Built with `vite-plugin-pwa` (auto-updating service worker, offline-capable after first
visit, installable on desktop and mobile). Lesson progress is stored in `localStorage`.

## Code map

- `src/types.ts` — curriculum data model
- `src/data/y*.ts` — one file per semester of course/lesson content; `year*.ts` assemble
  semesters into years; `index.ts` exposes the full curriculum and lookups
- `src/pages/` — home (years), year (semesters/courses), course (lesson list), lesson viewer
- `src/progress.ts` — localStorage-backed completion tracking
