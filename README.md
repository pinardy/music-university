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

## Sources

Every lesson and every course links out to the actual reading, score or drill it depends on.
The catalogue lives in `src/data/resources.ts` (366 entries) and is browsable in the app at
`/library`. It leans on open, stable material so the curriculum is usable without a subscription:

- **Theory** — *Open Music Theory* 2nd ed. (VIVA/Pressbooks), Hutchinson's *Music Theory for the
  21st-Century Classroom*, Mount's *Fundamentals, Function, and Form*
- **Aural** — musictheory.net and teoria.com drills, GNU Solfege, the OMT sight-singing anthologies
- **History** — *Understanding Music: Past and Present* (LibreTexts), Open Yale MUSI 112,
  digital editions (Bach Digital, NMA Online, Chopin Online, Schubert Online, Beethoven-Haus),
  and primary texts on Project Gutenberg / Internet Archive
- **Scores** — 66 verified IMSLP work pages plus CPDL for choral repertoire
- **Performance & health** — The Musician's Way, Bulletproof Musician, NIDCD/OSHA hearing guidance
- **Conducting** — ConductIT, the open RNCM/Stavanger/Aveiro/Open University curriculum
- **Teaching & career** — GIML, MTNA, Suzuki Association, Sistema Global, Drake Music, OHMI

A handful of entries (Grove, JSTOR, Project MUSE, Naxos, Digital Concert Hall) are the standard
subscription databases a conservatory library provides; these are flagged `open: false` and
labelled "subscription" in the UI.

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
- `src/data/resources.ts` — the external source catalogue; courses and lessons cite entries by id
  via their `resources` field, resolved with `resolveResources`
- `src/components/ResourceList.tsx` — renders a set of sources as outbound links
- `src/pages/` — home (years), year (semesters/courses), course (lesson list), lesson viewer,
  library (all sources, searchable)
- `src/progress.ts` — localStorage-backed completion tracking
