import type { Course } from '../types'

export const y4s1Courses: Course[] = [
  {
    id: 'aps401',
    code: 'APS401',
    title: 'Principal Study 7',
    credits: 6,
    stream: 'performance',
    description:
      'The seventh semester of one-to-one applied study shifts the focus from curricular development to professional readiness. Students build the repertoire for the senior recital, assemble a complete audition portfolio, and produce application-quality recordings for graduate programs, young-artist schemes and orchestral or ensemble auditions.',
    prerequisites: ['aps302'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Senior Recital Repertoire Design Lab',
        objectives: [
          'Draft a complete 60-minute senior recital program with defensible artistic logic',
          'Map each proposed work against your current technical and stylistic strengths',
          'Set a semester-long learning calendar with milestone dates for each work',
        ],
        content: [
          'A senior recital is judged first as a program, then as a sequence of pieces, so this unit begins with programming as a compositional act. Working with your teacher, you assemble a 60-minute plan that balances at least three style periods, includes one work written after 1970, and features a substantial anchor piece — a full sonata, a song cycle, or a major unaccompanied work for your instrument or voice. You test the program against practical constraints that professionals check first: total duration with pauses, key and tempo adjacencies between works, stamina curve across the evening, and collaborator availability for anything requiring piano, continuo or a chamber partner.',
          'Each candidate work is then audited against your present abilities using a gap analysis. For every piece you list its three hardest passages, name the specific technical demand each poses (for example, sustained high tessitura, rapid string crossings, long circular phrases requiring breath planning, or left-hand extensions), and rate your current command from cold reading to performance-ready. Works where more than half the difficulties are new territory belong early in the semester calendar; works that consolidate existing strengths can enter later. This audit is written down, because the document becomes the spine of your weekly lesson agenda for the rest of the year.',
          'Finally you reverse-plan the calendar. Professional preparation works backward from immovable dates: the recital itself next semester, this semester’s jury, the recording session in the final weeks, and any external audition deadlines. Each work receives target dates for notes-learned, memory-secure (where memory is expected in your discipline), first run-through, and first public try-out in studio class. Build slack into the plan — experienced performers schedule repertoire to be ready two to three weeks before it is needed, so that the final period is spent performing the music rather than still learning it.',
        ],
        listening: [
          'Maurice Ravel, Sonata for Violin and Cello — as a model of bold recital anchoring',
          'Franz Schubert, Winterreise, D. 911 (any voice type) — program-as-narrative thinking',
          'Kaija Saariaho, Sept Papillons for solo cello — a post-1970 work that programs well',
        ],
        assignments: [
          'Submit a one-page recital program draft with timings, ordering rationale and collaborator needs',
          'Complete the written gap analysis for every proposed work and bring it to your next lesson',
          'Produce a semester calendar with milestone dates for each piece, working backward from jury and recording dates',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Audition Portfolio Architecture',
        objectives: [
          'Research the actual repertoire requirements of at least four target auditions or applications',
          'Select a portfolio of audition repertoire that overlaps maximally with recital preparation',
          'Prepare excerpt or aria/short-work lists to professional formatting standards',
        ],
        content: [
          'Auditions are not generic: a graduate program, an orchestral vacancy, a young-artist opera studio and a chamber-music residency each publish specific requirements, and the professional habit is to read them literally. In this unit you pull the current published lists from at least four real targets and build a spreadsheet of every required item — concerto movements, contrasting solo works, orchestral excerpts, arias in specified languages, or lead-sheet and improvisation components where relevant to your discipline. Patterns emerge quickly: most instrumental lists share a core (a Classical concerto exposition, a Romantic concerto, an unaccompanied Bach movement or equivalent), and vocal lists cluster around contrasting languages and periods.',
          'The strategic move is overlap engineering. Every hour spent on a piece that serves both the senior recital and two audition lists is worth triple an hour on a piece serving only one purpose, so you and your teacher adjust both lists until the intersection is as large as honesty allows. Where an audition demands something the recital cannot absorb — standard orchestral excerpts are the usual case — you schedule it as a separate daily block and treat it with excerpt-specific method: exact printed tempi, awareness of what the passage sounds like inside the full score, and knowledge of what committees listen for (rhythmic integrity and sound before interpretive individuality).',
          'Presentation matters even on paper. You format a professional repertoire list: full composer names and dates, exact titles with catalogue numbers, movement designations, and durations. For vocal students, arias list opera, role and language; for jazz and contemporary tracks, tune lists show composer and form. This document accompanies every application you send, and committees do read it — a list with wrong opus numbers or misattributed arrangements signals carelessness before you play a note. The unit closes with a mock paperwork submission reviewed against a checklist of the errors screening committees most often report.',
        ],
        listening: [
          'W. A. Mozart, Concerto exposition standard for your instrument (e.g. Clarinet Concerto in A major, K. 622, I) — study three contrasting recordings',
          'Richard Strauss, Don Juan, Op. 20 — the archetypal orchestral-excerpt test of clarity under tempo',
          'Florence Price, Song to the Dark Virgin — an audition-viable art song beyond the standard list',
        ],
        assignments: [
          'Build the requirements spreadsheet for four real, current auditions or applications and identify the overlap set',
          'Format a complete professional repertoire list and submit it for red-pen review',
          'Begin daily fifteen-minute excerpt or audition-specific blocks and log them in your practice journal',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Deep Work Cycle: Technique in Service of Repertoire',
        objectives: [
          'Convert the gap analysis into targeted technical regimes embedded in daily practice',
          'Apply interleaved and retrieval-based practice schedules to new repertoire',
          'Demonstrate measurable progress on the three hardest passages of the anchor work',
        ],
        content: [
          'This unit is the semester’s engine room: several weeks of concentrated repertoire building in which technique is practised through the music rather than beside it. Each difficulty identified in Unit 1 is translated into a micro-etude — a looped, transposed, rhythmically varied extraction of the actual passage. A violinist struggling with the fugue subject entries in a Bach solo sonata practises the shift-and-voicing problem in all registers; a singer facing a long Strauss phrase builds it backward from the cadence, adding one earlier bar per repetition so the end of the phrase is always the freshest part. The principle, supported by motor-learning research, is that variable and effortful practice encodes more durable skill than comfortable repetition.',
          'Scheduling follows interleaving rather than blocking. Instead of forty unbroken minutes on one movement, the day rotates short, focused sets across three or four works, forcing repeated retrieval of each piece from cold. Retrieval practice is applied to memory work as well: rather than playing or singing through with the score until it feels familiar, you test recall in deliberately hostile conditions — starting from rehearsal letters chosen at random, writing out the bass line or text from memory, or performing the piece mentally away from the instrument at full imagined tempo. Errors surfaced now, in the practice room, are errors that will not surface in the jury.',
          'Progress must be measured, not felt. For each of the anchor work’s three hardest passages you keep a simple metric log: metronome marking achieved with zero errors across three consecutive repetitions, or for unmetered music, a recorded take rated against a rubric you and your teacher agree on. Weekly recordings of the same passages create an audit trail; when the log stalls for two weeks, the practice method changes, not merely the effort level. This habit — diagnose, intervene, measure, revise — is the transferable professional skill this unit teaches, more valuable than any single passage it fixes.',
        ],
        listening: [
          'J. S. Bach, Sonata No. 1 in G minor for solo violin, BWV 1001, Fuga — compare Milstein and Faust for articulation strategy',
          'György Kurtág, Signs, Games and Messages (selections for your instrument family) — micro-form as technical study',
          'Nina Simone, live recording of I Loves You, Porgy (1962) — phrase pacing and risk under pressure',
        ],
        assignments: [
          'Design and notate three micro-etudes derived from your anchor work and demonstrate them in lesson',
          'Keep a dated metric log for the three hardest passages, with weekly reference recordings',
          'Perform one work mentally, away from the instrument, and write a half-page report on where imagery broke down',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Studio Class Performance Cycle and Peer Adjudication',
        objectives: [
          'Perform audition repertoire in simulated audition conditions before the studio',
          'Deliver and receive structured peer feedback using a professional adjudication rubric',
          'Iterate interpretation based on recorded evidence rather than impression',
        ],
        content: [
          'Repertoire that only lives in the practice room is not yet repertoire, so this unit moves the audition portfolio onto its feet in a series of studio classes run as audition simulations. The format is deliberately cold: you enter, announce, and begin within thirty seconds; the panel of peers may stop you and ask for a different excerpt or a contrasting piece without warning, exactly as screening committees do. The physiological signature of auditioning — elevated heart rate, dry mouth, narrowed attention — appears reliably in simulation, which is precisely the point: stress inoculation research shows that graded exposure under realistic conditions is the most effective preparation for evaluative performance.',
          'Peers adjudicate with a written rubric adapted from real committee scoresheets: rhythm and pulse integrity, intonation or pitch accuracy, sound quality and projection, stylistic fluency, and the summary judgment every committee actually makes — would I want to hear more? Serving as an adjudicator is as instructive as performing, because articulating why a performance persuades or fails to sharpens your ear for your own work. Feedback is delivered in the professional register: specific, evidence-based, and tied to moments in the performance rather than to the performer’s character.',
          'Every simulation is recorded, and the review protocol is strict: watch once without the score noting only what a stranger would notice, then once with the score marking discrepancies, then extract a maximum of three action items. Limiting the list to three prevents the common post-performance spiral of global self-criticism and converts the recording into a practice plan. Across the cycle you track whether the same faults recur — recurring faults are technique problems to route back into Unit 3 methods, while one-off faults are usually attention problems addressed by performance routines developed in the next unit.',
        ],
        listening: [
          'Dmitri Shostakovich, Symphony No. 5, Op. 47, I — study your instrument’s exposed material as committees hear it',
          'Cecilia Bartoli, studio and live versions of Agitata da due venti (Vivaldi, Griselda) — compare risk profiles',
          'Jacqueline du Pré, Elgar Cello Concerto, Op. 85, live 1967 — commitment as an auditionable quality',
        ],
        assignments: [
          'Perform twice in the simulation cycle and submit your three-item action list from each recording review',
          'Adjudicate at least four peer performances using the rubric and hand your scoresheets to the performers',
          'Write a one-paragraph comparison of your simulated and practice-room versions of the same excerpt',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'The Application Recording Session',
        objectives: [
          'Plan and execute a professional recording session yielding application-quality takes',
          'Manage session logistics: booking, engineering liaison, take sheets and time budgeting',
          'Edit, select and deliver files meeting the technical specifications of real applications',
        ],
        content: [
          'Recorded rounds now gate nearly every professional opportunity — graduate school prescreens, competition first rounds, orchestral resume tapes — so this unit produces real deliverables in a supervised session. Preparation begins a fortnight out: you book the hall and engineer, confirm collaborative artists, and build a session plan that budgets time per work with the industry rule of thumb that one minute of finished music costs ten to fifteen minutes of session time. You prepare a take sheet listing each work, its movements, and planned cover spots, because sessions collapse without a written record of what was captured and what still needs insurance takes.',
          'In the session itself you learn the specific psychology of recording, which differs from live performance: there is no audience adrenaline to carry momentum, red-light nerves replace stage nerves, and perfection-seeking can consume the clock. The professional method is to open with a complete performance take of each work before any patching, both because committees increasingly require unedited takes and because whole takes preserve the long line that spliced perfection destroys. Only then do you cover specific flaws, always recording overlapping material a phrase before and after the target so edits can breathe. You practise talking to the engineer in useful terms — asking for a playback loud and flat rather than flattering, and describing balance issues by frequency and instrument rather than adjectives.',
          'Post-production is part of musicianship now. You attend the edit review, choosing takes against the criterion committees actually apply — a convincing, honest performance — rather than local spotlessness, and you learn what current application rules permit: many explicitly forbid edits within movements, and metadata or file naming that violates the published specification can disqualify a submission unread. Final deliverables are exported to each target’s exact requirements (typically 16-bit/44.1 kHz WAV or high-bitrate video with unmanipulated audio), named to specification, and archived with the session paperwork. The unit ends with your files actually uploaded to at least one live application portal or a complete mock submission.',
        ],
        listening: [
          'Glenn Gould, Bach Goldberg Variations, 1955 versus 1981 — the recording as a distinct artistic object',
          'Hilary Hahn, Ysaÿe Six Sonatas for solo violin (2023) — modern solo recording sound as a benchmark',
          'Esperanza Spalding, Exposure (2017) — a session created under a public 77-hour constraint; time budgeting made audible',
        ],
        assignments: [
          'Submit your session plan, take sheet and engineer brief one week before the session date',
          'Complete the recording session and the edit-review meeting, documenting take selections and reasons',
          'Deliver final files formatted to a real application’s published specification and archive the session paperwork',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Semester Jury and Professional Debrief',
        objectives: [
          'Perform a jury program demonstrating audition-standard readiness on the semester’s repertoire',
          'Present the completed audition portfolio and recording deliverables for faculty review',
          'Set the preparation contract for the senior recital semester with dated commitments',
        ],
        content: [
          'The semester closes with a jury run under audition rules rather than exam rules: you submit your professional repertoire list, the panel selects from it in real time, and you are heard in excerpts and partial movements as well as complete works. This format tests the specific readiness the semester has built — the ability to produce any listed item, cold, at professional standard, from any starting point. Panels at this level listen for the markers that distinguish employable playing and singing: unshakeable pulse, intonation or diction that survives pressure, a sound that projects intent, and the immediacy of communication that makes a listener stop shuffling papers.',
          'Alongside the performance, you table the semester’s tangible outputs for review as a portfolio: the recorded application files, the formatted repertoire lists, the metric logs from the deep-work cycle, and the adjudication scoresheets from the simulation cycle. Faculty assess these the way a professional mentor would — is this a musician whose preparation systems will survive without weekly lessons? The question is not rhetorical: within eight months you will be managing your own development, and the systems documented here are what you will manage it with.',
          'The debrief that follows converts assessment into contract. With your teacher you fix the senior recital program in near-final form, book the hall and collaborators, confirm which works are already performance-ready and which carry into next semester’s build, and set dated commitments for program notes, publicity materials and the dress-rehearsal cycle. You also review audition outcomes and application timelines landing over the winter, scheduling any prescreen recordings or live rounds into the plan. The unit — and the semester — ends with a single-page professional plan that your final semester will execute rather than improvise.',
        ],
        listening: [
          'Ludwig van Beethoven, late-period work relevant to your recital anchor (e.g. String Quartet No. 14 in C-sharp minor, Op. 131) — long-arc program thinking',
          'Barbara Hannigan and Reinbert de Leeuw, Vienna: Fin de Siècle (2018) — a recital program as a curated argument',
          'Your own Unit 5 session takes — reviewed once more after four weeks’ distance',
        ],
        assignments: [
          'Perform the jury from your submitted repertoire list under audition-selection rules',
          'Submit the complete portfolio binder: recordings, lists, logs and scoresheets',
          'Deliver the signed one-page senior recital preparation contract with dated milestones',
        ],
      },
    ],
  },
  {
    id: 'cnd401',
    code: 'CND401',
    title: 'Conducting Fundamentals',
    credits: 2,
    stream: 'performance',
    description:
      'A practical introduction to conducting required of all majors, on the Curtis model that every musician benefits from podium literacy. Students develop baton technique, score-study method and rehearsal craft, conducting a lab ensemble of their peers weekly and finishing with a video-reviewed practicum and a conducted final exam.',
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Baton Technique and Beat Patterns in 2, 3 and 4',
        objectives: [
          'Establish a neutral, tension-free conducting posture and baton grip',
          'Execute clear beat patterns in 2/4, 3/4 and 4/4 with a defined ictus on each beat',
          'Distinguish legato, marcato and staccato beat styles within each pattern',
        ],
        content: [
          'Conducting begins with the body, not the arm. The neutral stance places feet shoulder-width apart, weight evenly distributed, sternum lifted without rigidity, and the conducting plane — an imaginary horizontal surface at roughly sternum height — established as the home of every beat. The baton is held between thumb and the first joint of the index finger, resting across the fingers, an extension of the forearm’s line rather than a stick clutched in a fist; the point, not the hand, is what players watch. Tension anywhere in the chain from shoulder to fingertip transmits directly into an ensemble’s sound, which is why the first week is spent on release as much as on motion.',
          'Each meter has a canonical pattern built from downbeat, lateral beats and upbeat. In 4/4 the sequence runs down, inside (left across the body), outside (right), up; in 3/4, down, out, up; in 2/4, down-and-rebound, up. What makes a pattern readable is the ictus — the precise instant, marked by a small rebound off the conducting plane, where the beat actually occurs. A pattern without a clear ictus is decoration; players cannot place a note against a gesture that never lands. Practise each pattern slowly with a metronome, checking in a mirror that every beat strikes the same plane and that the pattern’s width stays within the frame of your shoulders.',
          'Beat style is the pattern’s adjective. Legato style connects beats with continuous, curved motion and a softened rebound, suited to a chorale or a slow movement; marcato stops momentarily at each ictus with angular travel between beats, suited to a march or an accented tutti; staccato style uses a light, quick flick with maximal stop, the gesture for crisp, detached playing. Conduct the opening of Beethoven’s Fifth Symphony’s second movement in legato 3/8 feel, then a Sousa march strain in marcato 2, and notice how the same arithmetic pattern communicates entirely different sound worlds. This vocabulary of styles, applied to three patterns, is already enough to conduct a large fraction of the repertoire.',
        ],
        listening: [
          'Ludwig van Beethoven, Symphony No. 5 in C minor, Op. 67, II — watch Carlos Kleiber (Concertgebouw, 1983) for legato pattern clarity',
          'John Philip Sousa, The Stars and Stripes Forever — marcato two-pattern study',
          'Johannes Brahms, Symphony No. 2 in D major, Op. 73, I — watch two conductors and compare ictus definition in 3/4',
        ],
        assignments: [
          'Practise 2-, 3- and 4-patterns ten minutes daily with metronome and mirror, in all three beat styles',
          'Film yourself conducting one minute in each meter and mark every unclear ictus on playback',
          'Write a half-page observation of one professional conductor’s pattern, plane and rebound from video',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Preparatory Gesture, Ictus and Release',
        objectives: [
          'Give preparatory beats that communicate tempo, dynamic and articulation before sound begins',
          'Start an ensemble cleanly on any beat of the bar, including fractional entries',
          'Execute releases that end sound with the same precision that preparations begin it',
        ],
        content: [
          'The preparatory gesture is conducting’s founding paradox: the most important beat you give is the one before the music starts. A preparation is a single beat, given in the tempo, dynamic and character of what follows, ending exactly one beat before the first sound; the players breathe with it and play at its arrival point. A slow, heavy preparation begets a slow, heavy entrance — which is why a preparation that contradicts the intended tempo is the most common cause of a bad start. The classic drill is to conduct only preparations: give the gesture, imagine the downbeat, stop, reset, at many tempi and dynamics, until the single beat reliably encodes all three variables.',
          'Entries do not only happen on downbeats. To start on beat three of a 4/4 bar, you give beat two as the preparation, placed and styled as if the music were already sounding; to start on a half-beat, as in the pickup to Beethoven’s First Symphony finale or a jazz chart entering on the and of four, the preparation subdivides so the players can read the fraction. The rule generalizes: the preparation is always the beat (or sub-beat) immediately preceding the entry, given in tempo. Practise entries on every beat of 2, 3 and 4, announcing aloud where the ensemble enters and having a partner clap the entry point to verify that your gesture, not your intention, communicates it.',
          'Releases are preparations in reverse and deserve equal craft. A release requires its own small preparatory loop — a gathering motion — arriving at a defined stopping point; a vague wave leaves a choir’s final consonant scattered across half a second. The shape varies with context: an upward loop for a lifted choral cutoff, a downward closing gesture for a final orchestral chord, a tiny flick for a subito silence. Fermata endings preview next week’s work: sound must be sustained by a living, slightly moving gesture, then released with the loop. Combine skills by conducting a full arc — preparation, four bars of pattern, release — treating the silence on either side as part of the performance.',
        ],
        listening: [
          'Ludwig van Beethoven, Symphony No. 1 in C major, Op. 21, IV — the notorious fractional entries of the opening',
          'Gustav Holst, First Suite in E-flat for Military Band, Op. 28 No. 1, Chaconne — entries layered on different beats',
          'Eric Whitacre, Sleep — choral releases and consonant placement; watch a filmed choir for cutoff technique',
        ],
        assignments: [
          'Drill preparations-only at six metronome marks from 50 to 152, in piano and forte versions',
          'With a partner clapping entries, practise starts on every beat and common half-beats of 2, 3 and 4 until placement is unanimous',
          'Film and review five different releases (loud, soft, lifted, closed, subito) for clarity of stopping point',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Left-Hand Independence: Cueing and Dynamics',
        objectives: [
          'Free the left hand from mirroring the beat pattern',
          'Deliver cues with eyes, breath and hand that arrive one beat before the entry',
          'Shape dynamics and balance with the left hand while the right maintains tempo',
        ],
        content: [
          'Novice conductors mirror: whatever the right hand does, the left copies, doubling information and adding none. The professional division of labor gives the right hand time — pattern, tempo, ictus — and the left hand everything else: cues, dynamic shaping, balance adjustment, sustaining gestures, and warnings. Achieving independence is a coordination skill like hands-apart piano practice, built through deliberately unequal drills: right hand conducts a steady 4 while the left rises through a four-bar crescendo, holds a flat sustaining palm, or rests entirely at the side. Resting is hardest and most important — a left hand that is always busy has no headroom left to mean anything.',
          'A cue is a three-part act: eye contact with the section a bar or more ahead, a breath or preparatory lift one beat before the entry, and the cue gesture itself at the entry point, scaled to the passage — a raised finger for a solo oboe, a full open hand toward the brass for a tutti entrance. The eyes carry most of the information; players report that a confident look in time is worth more than a flailing hand late. Cueing therefore depends on score knowledge and anticipation, previewing Week 5: you cannot look at the horns a bar early if you are discovering their entry in real time. Practise with a written cue map — every significant entry in a two-minute excerpt, listed with its lead time.',
          'Dynamic control from the podium works through gesture size and left-hand vocabulary together. The baseline rule is that pattern size tracks dynamic level — small beats for piano, expansive for forte — but the left hand refines it: palm down and gently pressing for softer, palm up and drawing for more sound, a pointed damping gesture at an over-loud section for balance. Study the extreme economy of Fritz Reiner, whose tiny beat compelled attention, against the sculptural left hand of Leonard Bernstein, and note that both systems work because they are consistent: an ensemble learns a conductor’s vocabulary within minutes, provided the vocabulary means the same thing every time.',
        ],
        listening: [
          'Maurice Ravel, Boléro — a cueing marathon; watch a filmed performance and log every cue’s lead time',
          'Pyotr Ilyich Tchaikovsky, Symphony No. 6 in B minor, Op. 74, IV — left-hand shaping of long dynamic waves',
          'Leonard Bernstein, Haydn Symphony No. 88, IV (Vienna Philharmonic, face-only encore film) — proof that eyes and intention cue',
        ],
        assignments: [
          'Drill hands-apart exercises daily: steady right-hand 4 against left-hand crescendos, sustains, cues and rest',
          'Prepare a written cue map for a two-minute excerpt and execute it for peers playing or singing the entries',
          'Film yourself conducting the same eight bars at pianissimo and fortissimo; verify visible, consistent size difference',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Fermatas, Subdivision and Asymmetric Meters',
        objectives: [
          'Execute fermatas with sustain, and with releases that either stop or connect onward',
          'Subdivide beats cleanly in slow tempi without cluttering the pattern',
          'Conduct 5/8, 7/8 and other asymmetric meters with correct long–short beat groupings',
        ],
        content: [
          'A fermata suspends meter, and the conductor must manage three decisions it forces: how the sound is sustained, how it ends, and how the music resumes. Sustain requires a living gesture — a slowly opening or gently pressing hand — because a frozen arm reads as a release. The ending then branches: a fermata with a break (as at the end of a chorale phrase) takes a full release loop followed by a new preparation, while a fermata that connects onward (Beethoven’s Fifth, bar 5) takes a release that is itself the preparation for the next attack, one combined motion. Bach chorales are the training gymnasium here, exactly as they are at every conservatory: each phrase-ending fermata poses the branch decision afresh.',
          'Subdivision answers the problem of very slow tempi, where full beats are too far apart for an ensemble to stay together between them. In a Largo 4/4 you conduct eight small pulses shaped as four beats with rebounded echoes — the pattern’s geography stays, each beat gaining a smaller inner ictus. The discipline is knowing when to stop: continuous subdivision clutters and micromanages, so the professional practice is to subdivide only where the ensemble needs it — approaching a ritardando, placing a delicate attack, controlling a suspension chain — and return to the plain pattern immediately after. Practise dropping subdivision in and out of a slow pattern without the tempo flinching.',
          'Asymmetric meters group unequal beats: 5/8 is 2+3 or 3+2, 7/8 commonly 2+2+3, and the conductor shows the grouping, not the eighth notes. A 2+3 bar of 5/8 at speed is conducted in two beats of unequal length — a short beat and a long beat whose extra time is absorbed in a wider travel or slower rebound. The music dictates the grouping: the opening of Dave Brubeck’s Take Five is unmistakably 3+2 feel at the drum pattern level, while the Mars movement of Holst’s The Planets hammers 5/4 in patterns the conductor must choose to beat in five or in grouped gestures. Practise switching groupings on command, because mixed-meter passages — previewing Week 11 — change them bar by bar.',
        ],
        listening: [
          'J. S. Bach, chorale Ein feste Burg ist unser Gott, BWV 302 — fermata practice repertoire',
          'Gustav Holst, The Planets, Op. 32, Mars — 5/4 grouping decisions',
          'Paul Desmond (Dave Brubeck Quartet), Take Five — 5/4 as felt grouping rather than arithmetic',
          'Ludwig van Beethoven, Symphony No. 5 in C minor, Op. 67, I, bars 1–21 — the connecting fermata problem',
        ],
        assignments: [
          'Conduct four Bach chorale phrases with contrasting fermata treatments, filmed and reviewed',
          'Practise a Largo pattern with subdivision entering and leaving cleanly at marked points',
          'Drill 5/8 and 7/8 in both groupings at three tempi, then conduct a peer clapping the meter to verify grouping legibility',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Score Study Method: From Analysis to Gesture',
        objectives: [
          'Apply a systematic score-study sequence from overview to bar-level detail',
          'Build an inner-ear realization of a score before and without recordings',
          'Translate analytical findings into concrete gestural and rehearsal decisions',
        ],
        content: [
          'Conductors are the only performers whose instrument they cannot touch alone in a practice room; the score is where their practising happens. A reliable study sequence moves from the whole toward the detail: first the map — instrumentation, movements, tempo scheme, overall duration, formal outline — then a phrase-level pass marking phrase lengths, cadences, climaxes and key areas, then bar-level work on entries, doublings, balance risks and technical traps for the players. Many conductors mark systematically: brackets for phrases, arrows toward arrival points, colored cues for entries, meter changes flagged in the margin a bar early. The marking system matters less than its consistency, because in performance the eye must retrieve information in a fraction of a second.',
          'The discipline that separates study from browsing is inner-ear realization: hearing the score internally, away from recordings, checking pitches at the piano only where the inner ear is unsure. Recordings enter late and plurally — two or three contrasting interpretations compared after your own conception exists — because a single early recording quietly becomes the piece in your imagination, and you end up conducting Karajan rather than Beethoven. Singing lines aloud, playing reductions at the keyboard, and writing out the harmonic skeleton of a passage are the concrete techniques; Week 7’s lab repertoire (a Bach chorale and a Classical minuet) is the immediate application, small enough that total internalization is achievable in a week.',
          'Analysis pays off only when it changes what your hands do. Every study finding is converted into a gestural or verbal plan: the phrase peaks in bar 12, so the beat grows through bars 9–11 and the left hand shapes the arrival; the second horn entry is exposed, so it receives eye contact at bar 30 and a cue; the modulation at the double bar is the movement’s hinge, so the rehearsal plan starts there rather than at the top. This from-analysis-to-gesture translation is the course’s central idea, and it produces the written artifact this week requires: a conducting plan in which each line of analysis faces the decision it motivates.',
        ],
        listening: [
          'W. A. Mozart, Symphony No. 40 in G minor, K. 550, III — this week’s study score; no recordings until your own realization exists',
          'J. S. Bach, chorale Jesu, meine Freude, BWV 358 — inner-ear singing practice in four parts',
          'Igor Stravinsky and Robert Craft recordings compared with Bernstein in The Rite of Spring, Sacrificial Dance — how far interpretations diverge from one text',
        ],
        assignments: [
          'Complete the three-pass study of the Mozart minuet and submit your marked score',
          'Write out the chorale’s bass line and harmonic analysis from memory after singing study',
          'Submit a one-page from-analysis-to-gesture plan pairing at least eight findings with podium decisions',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Rehearsal Technique and Verbal Economy',
        objectives: [
          'Structure a rehearsal with a timed plan built from anticipated problem spots',
          'Diagnose ensemble problems accurately and address them in minimal words',
          'Use rehearsal-frame language: where to start, what to fix, and immediate re-testing',
        ],
        content: [
          'Rehearsal is applied economics: a fixed budget of minutes and player attention allocated against a ranked list of problems. The plan is written before the downbeat — which passages get time, in what order, with contingencies — and it starts from the score study of Week 5, which predicted where the trouble will be: the exposed entry, the ensemble-risk tempo transition, the balance trap where melody sits under accompaniment. Professional rehearsal plans work in segments with clock times attached, and they schedule the hardest work early, when concentration is freshest, saving run-throughs for the end. An unplanned rehearsal defaults to playing through and vaguely hoping, the most expensive habit on the podium.',
          'Verbal economy is the craft of saying less so the ensemble plays more. The canonical intervention has three moves: stop at (not after) the problem, name it in one sentence with a location — second violins, bar 24, the eighth notes are late after the tie — and restart from a specific, announced place a few bars before the spot. Then, critically, re-test: if the fix worked, acknowledge briefly and move on; if not, change the explanation rather than repeating it louder. Talking is the enemy statistic here — studies of expert ensemble directors consistently find they talk in shorter bursts and re-test more often than novices, whose long verbal essays let the ensemble’s attention and embouchures go cold.',
          'Not every fix needs words at all. The hierarchy of intervention runs: fix it with gesture while playing continues; fix it with a look or a sung model; fix it with one sentence; and only last, fix it with an explanation. Singing the desired shape is often the fastest transmission channel a conductor has — four sung notes replace forty words about phrasing. This week each student rehearses the lab ensemble for eight minutes on assigned trouble spots, filmed, with the review counting three metrics: ratio of playing time to talking time, accuracy of first diagnosis, and whether each stop ended in a verified fix.',
        ],
        listening: [
          'Carlos Kleiber in rehearsal, Die Fledermaus overture (Südfunk footage) — imagery and economy',
          'Leonard Bernstein rehearsing the London Symphony Orchestra in Shostakovich Symphony No. 5 — diagnosis and re-testing on film',
          'Marin Alsop rehearsal footage with a youth orchestra — pacing and tone with developing players',
        ],
        assignments: [
          'Write a timed twenty-minute rehearsal plan for the lab piece with predicted problems ranked',
          'Rehearse the lab ensemble for eight minutes; film it',
          'Review your film computing talk-to-play ratio and listing every stop with its diagnosis and whether the re-test passed',
        ],
      },
      {
        id: 'week-07',
        week: 7,
        title: 'Conducting Chorales and Classical Minuets (Lab Ensemble)',
        objectives: [
          'Conduct Bach chorales with shaped phrases, managed fermatas and clean releases',
          'Conduct a Classical minuet with style-appropriate one-in-a-bar and three-pattern choices',
          'Integrate pattern, cueing, dynamics and rehearsal craft in continuous lab performance',
        ],
        content: [
          'The chorale is the conductor’s étude: four parts, slow harmonic rhythm, a fermata at every phrase end, and nowhere to hide. Conducting Wachet auf or O Haupt voll Blut und Wunden in the lab, you manage the full cycle each phrase — preparation with breath, legato four-pattern shaped toward the phrase’s harmonic goal, sustain into the fermata, and the branch decision of Week 4: release-and-breathe or connect onward. Text matters even instrumentally: chorale phrasing follows the chorale’s words, and conductors who know where the commas fall shape the lines convincingly. The lab format means immediate feedback; when your gesture is ambiguous, sixteen colleagues demonstrate the ambiguity in sound within one beat.',
          'The Classical minuet poses the opposite problem: not sustained weight but poise, lift and metric hierarchy. A minuet’s 3/4 carries a strong-weak-weak profile with two-bar and four-bar groupings above it, and the conductor chooses between beating a light three and conducting one-in-a-bar where the tempo and the music’s dance character invite it — many minuets and virtually all scherzos read better in one, with the pattern showing bars, not beats. Style details decide the gesture vocabulary: appoggiaturas lean and resolve, cadential trills need a hair of time, dynamic contrasts in Haydn arrive subito rather than by crescendo. The trio typically drops in weight and color, a change the conductor shows with smaller pattern and softer style rather than announcing.',
          'This week is the semester’s first sustained podium residency: each student conducts both a chorale and a minuet movement with the lab ensemble, applying the full toolkit under continuity pressure — no stopping to reset between skills. The assessment rubric mirrors what ensembles actually need, in order: is the beat findable, are entries prepared, do the hands agree with the mouth, and does the gesture reflect the style? Peers rotate between playing and observing with the rubric, because diagnosing a colleague’s unclear preparation from inside the second violins is the fastest way to stop making the same error yourself.',
        ],
        listening: [
          'J. S. Bach, Wachet auf, ruft uns die Stimme, BWV 140, final chorale — phrase and fermata study',
          'Joseph Haydn, Symphony No. 104 in D major, Menuetto — three versus one-in-a-bar decisions',
          'W. A. Mozart, Symphony No. 40 in G minor, K. 550, III — this week’s lab repertoire, now with recordings compared',
        ],
        assignments: [
          'Conduct one chorale and one minuet in lab; submit your marked scores beforehand',
          'Complete rubric observations for four peers and deliver them face to face',
          'Review your lab film and write three action items feeding into next week’s podium turn',
        ],
      },
      {
        id: 'week-08',
        week: 8,
        title: 'Recitative and Accompanying Flexibility',
        objectives: [
          'Conduct secco and accompagnato recitative following a singer’s free declamation',
          'Place orchestral chords precisely from the singer’s text cues',
          'Develop accompanying instincts: following, leading and the negotiated middle',
        ],
        content: [
          'Recitative inverts the podium’s power structure: the singer owns the tempo, and the conductor’s job is to place the ensemble’s punctuation around free speech-rhythm. In secco recitative the chords are sparse and the technique is surgical — the conductor waits, tracking the text, and gives a compact preparation-plus-downbeat exactly where the chord belongs, often cued off a specific word or syllable marked in the score. The historical practice of leading from the keyboard survives in the technique’s feel: you are punctuating a sentence, not beating time. Mozart’s Figaro recitatives are the training ground; each chord placement is a micro-exercise in preparation timing from Week 2, now triggered by language rather than by metronome.',
          'Accompagnato and aria accompaniment demand continuous flexibility instead of point placement. Here the orchestra plays sustained or figurated material while the singer stretches and compresses, and the conductor becomes a transmission system: listening a syllable ahead, bending the beat’s travel speed so the ensemble arrives with the voice, using dead beats — placed but energyless gestures — to pass through bars where the singer holds. The core drill is conducting against a partner who deliberately varies their rubato: the pattern must breathe without breaking, and the players behind you must always know which beat you are in even when its length is elastic. Cadenza endings add the classic trap: the conductor must know the aria’s text well enough to prepare the orchestra’s re-entry from the singer’s cadential formula.',
          'Beyond opera, accompanying flexibility is the skill concerto conducting runs on, and it generalizes to every collaboration: when to follow, when to lead, and how the negotiation happens in real time through eyes and breath. The working rule professionals cite is that the accompanist leads in tutti and transitions and follows in solo statements — but announces the tempo firmly at structural returns, because a soloist mid-flight needs the ritornello to land, not to ask permission. Lab work pairs each conductor with a singer or soloist performing a recitative-and-aria excerpt; the assessment is brutal in its simplicity: did every chord land with the voice, and did the ensemble ever have to guess?',
        ],
        listening: [
          'W. A. Mozart, Le nozze di Figaro, K. 492, Act I recitative and duettino Cinque… dieci — secco chord placement',
          'G. F. Handel, Messiah, accompagnato Comfort ye, my people — sustained flexibility under free declamation',
          'Frédéric Chopin, Piano Concerto No. 2 in F minor, Op. 21, II — orchestral accompanying of soloistic rubato',
        ],
        assignments: [
          'Mark chord-placement cue words in a Figaro recitative scene and conduct it with a singer in lab',
          'Drill the elastic-pattern exercise with a partner varying rubato; film and verify beat legibility',
          'Write a one-page reflection on one follow-versus-lead decision from your lab session and its outcome',
        ],
      },
      {
        id: 'week-09',
        week: 9,
        title: 'Error Detection from the Podium',
        objectives: [
          'Detect and locate pitch, rhythm and balance errors in real time against the score',
          'Prioritize which errors to address, in which order, under rehearsal time pressure',
          'Verify corrections by directed re-listening rather than assumption',
        ],
        content: [
          'An ensemble assumes the conductor hears everything; the skill of actually doing so is trainable and this week trains it. Error detection is score-referenced listening: holding the inner-ear model built in study (Week 5) against the sounding reality and flagging mismatches — a wrong pitch in the second horn, a rushed inner-voice figure, a suspension resolving early. Research on rehearsal expertise shows detection accuracy tracks score knowledge more than raw ear ability: you hear what you know to listen for. The lab drill is planted-error practice, standard in conducting pedagogy: the ensemble receives parts with deliberate errors, and the conductor must stop, name the section, the bar, and the nature of the fault without fishing.',
          'Detection under real conditions is a triage problem, because everything is slightly wrong all the time. The professional hierarchy addresses errors in roughly this order: wrong notes and rhythms first (they are objective and contagious), then ensemble and vertical alignment, then intonation, then balance and blend, then style and shape — while accepting that a catastrophic balance problem can jump the queue. Equally important is what not to stop for: errors the players will self-correct on a second pass, one-off slips versus systematic faults, and problems whose fix belongs to a section rehearsal rather than tutti time. Each stop costs thirty to ninety seconds of collective attention; the triage decision is an economic one, continuous with Week 6.',
          'A correction is not complete until it is verified, and verification is directed: tell the ensemble what you will be listening for on the repeat, then actually listen for it, ignoring everything else for those bars. Selective attention is the mechanism — the auditory system can track one designated stream far better than it can monitor globally — and announcing the target also recruits the players’ own monitoring. The week’s assessment combines a planted-error lab round with a written error-detection test using recorded excerpts against scores, the same format used in graduate conducting auditions, where candidates mark every discrepancy between a doctored recording and the printed page.',
        ],
        listening: [
          'Joseph Haydn, Symphony No. 94 in G major, II — lab planted-error repertoire; know it exactly',
          'Percy Grainger, Lincolnshire Posy, Rufford Park Poachers — a texture where balance errors hide',
          'Any professional recording of this week’s lab piece, followed once by the class’s own lab recording — list every discrepancy',
        ],
        assignments: [
          'Complete two planted-error podium rounds, logging detection time and localization accuracy for each fault',
          'Take the written recording-versus-score discrepancy test on two excerpts',
          'Write a triage justification for one lab stop you chose to make and one error you chose to leave',
        ],
      },
      {
        id: 'week-10',
        week: 10,
        title: 'Romantic Rubato and Expressive Pacing',
        objectives: [
          'Conduct tempo modification — rubato, ritardando, accelerando — with readable transitional beats',
          'Shape long-range pacing toward structural climaxes rather than local surges',
          'Adapt gesture weight, size and speed to Romantic sound ideals',
        ],
        content: [
          'Romantic performance practice treats tempo as expressive material, and the podium problem is that flexible time must still be ensemble-readable. The mechanics live in the beat’s travel: to slow down, each gesture’s journey lengthens and often gains subdivision as insurance; to accelerate, travel compresses and rebounds quicken; and in both cases the change must be gradual across the gesture, not announced abruptly at an ictus, or the ensemble fractures into players who anticipated and players who waited. Wagner’s essay On Conducting made the modification of tempo the very definition of the conductor’s art; whatever one thinks of his polemics, the technical claim stands — an inflexible beat starves Romantic phrasing, and an illegible one destroys it.',
          'Rubato proper comes in two historical types worth distinguishing on the podium. The earlier, melodic type — documented from Mozart’s letters through Chopin’s teaching — lets the melody bend against a steady accompaniment, and requires the conductor mostly to keep the frame stable while a soloist or section leans; the later, structural type moves the whole texture, and there the conductor is the rubato. The craft in the second type is proportion: time borrowed must feel repaid, a ritardando into a theme costs a compensating onward motion after it, and hairpin dynamics usually carry micro-timing with them. Study Willem Mengelberg’s Mahler Fourth or his Tchaikovsky against a modern literalist recording to hear how far notated-versus-performed timing diverged in the tradition closest to these composers.',
          'Pacing is rubato’s long-range form: the management of intensity across minutes so that a movement has one summit rather than a mountain range of equal peaks. Practically, this means conserving — holding tempo, dynamic and gesture in reserve through secondary climaxes so that the structural one (the recapitulation’s arrival, the chorale’s final phrase, bar 3 before the end of Nimrod) has somewhere to go. The conductor’s gesture budget mirrors the music’s: if the beat has been maximal for ten minutes, nothing is left for the moment that matters. In lab, students conduct Elgar’s Nimrod and a Brahms excerpt with the explicit brief that only one moment may receive the largest gesture of the performance, and peers report whether they could tell which it was.',
        ],
        listening: [
          'Edward Elgar, Enigma Variations, Op. 36, IX (Nimrod) — compare Boult and Barenboim for pacing of the single climax',
          'Gustav Mahler, Symphony No. 4, conducted by Willem Mengelberg (1939) — historical rubato practice on record',
          'Johannes Brahms, Symphony No. 4 in E minor, Op. 98, I — travel-speed control across constant meter',
          'Frédéric Chopin, Nocturne in D-flat major, Op. 27 No. 2 (Rubinstein) — melodic rubato over a steady frame',
        ],
        assignments: [
          'Conduct Nimrod in lab under the one-largest-gesture rule; collect peer reports on where your climax read',
          'Practise notated accelerando and ritardando passages with a partner clapping subdivisions to test readability',
          'Compare timings of one passage across a historical and a modern recording, tabulating bar durations',
        ],
      },
      {
        id: 'week-11',
        week: 11,
        title: '20th-Century and Mixed Meters',
        objectives: [
          'Conduct rapid mixed-meter chains (2/4, 3/8, 5/8, 7/8) with grouping-true patterns',
          'Keep a constant pulse unit across changing bar lengths',
          'Handle 20th-century notation: dead bars, cued chamber textures and non-metric passages',
        ],
        content: [
          'Much post-1900 music replaces the steady bar with a changing one, and the conductor’s first decision in any mixed-meter chain is the common unit: what stays constant while bars change length. In Stravinsky’s Soldier’s Tale or the Danse sacrale, the eighth note is usually the invariant, and bars of 2/8, 3/16 and 5/16 are conducted as patterns whose beats contain different numbers of unchanging eighths — the asymmetric technique of Week 4 now chained bar to bar. Score preparation becomes physical training: conductors write the pattern choice above every bar, then drill the sequence like choreography until the changes are procedural memory, because there is no time to read and decide at tempo. Bernstein’s advice to students was blunt: know the bar coming, not the bar you are in.',
          'Certain 20th-century textures change the job qualitatively. In hocketing chamber music like Stravinsky’s Octet or in Copland’s Appalachian Spring the conductor is a traffic controller of entries more than a shaper of line, and the cue map from Week 3 becomes the primary document. Dead beats — placed, energyless gestures marking bars where nothing new happens — keep counting players oriented through rests; conversely, some passages demand active beats of drastically unequal character within one bar. Messiaen’s additive rhythms and non-retrogradable patterns often abandon meter as felt hierarchy entirely: the conductor beats a notated grid the players count against, and clarity, not expression, is the entire virtue of the gesture.',
          'The lab centerpiece is a mixed-meter gauntlet: an excerpt chain including Bernstein’s America (a 6/8 + 3/4 alternation that is one meter written as two), a page of L’Histoire du soldat, and a 7/8 groove passage, conducted with the ensemble clapping and playing. Assessment is empirical — the ensemble either stays together or does not — and film review checks the two classic faults: patterns that show beats but hide groupings, and preparation gestures that leak the wrong meter before a change. Students finish by preparing their own marked map of a self-chosen excerpt from the post-1950 repertoire, a direct rehearsal for the practicum repertoire choices of Week 12.',
        ],
        listening: [
          'Igor Stravinsky, L’Histoire du soldat, The Soldier’s March — eighth-note invariance across changing bars',
          'Leonard Bernstein, West Side Story, America — hemiola as notated meter alternation',
          'Igor Stravinsky, The Rite of Spring, Danse sacrale — the summit of mixed-meter conducting; follow with score',
          'Olivier Messiaen, L’Ascension, III — additive rhythm and grid beating',
        ],
        assignments: [
          'Mark pattern choices above every bar of the lab gauntlet excerpts and drill the chains to tempo',
          'Conduct the gauntlet in lab; log every train-wreck bar from the film and diagnose each',
          'Prepare a marked mixed-meter map of a self-chosen post-1950 excerpt for practicum consideration',
        ],
      },
      {
        id: 'week-12',
        week: 12,
        title: 'Video-Reviewed Practicum',
        objectives: [
          'Conduct and rehearse a complete short work with the lab ensemble in one continuous practicum',
          'Analyze your own podium work on video against the semester’s full rubric',
          'Convert video findings into a concrete correction plan for the final exam',
        ],
        content: [
          'The practicum is a dress rehearsal for the final exam and a capstone of method: each student receives fifteen minutes with the lab ensemble to rehearse and then perform a short work chosen with the instructor — a chorale plus a minuet, a Grainger folk-song setting, a movement of a Holst suite, or an approved mixed-meter excerpt. The quarter hour is yours to budget, and the budgeting is itself assessed: strong practica open with a brief diagnostic run of the hardest passage, spend the middle on two or three triaged fixes with verified re-tests, and close with a continuous performance. Everything the semester built is in play at once — preparation, cueing, style, verbal economy, error detection — under the clock that makes conducting a performing art.',
          'Video review then does what mirrors and memory cannot. The protocol is three passes, each with a different attention: first with sound, watching as a player would, asking only whether you would know when and how to play; second without sound, which exposes gesture habits mercilessly — mirroring hands, a wandering plane, preparations whose size contradicts the music, a face that never leaves the score; third with the rubric, scoring yourself on every semester competency before your instructor and a peer score the same film independently. Divergence between the three scoresheets is itself data: what you cannot see in your own conducting is precisely what needs external eyes, which is why professional conductors film rehearsals throughout their careers.',
          'The output is a correction plan, not a mood. From the composite scores you select the two highest-leverage faults — not the most embarrassing ones, the ones costing the ensemble the most information — and design a week of targeted drills for each, on the micro-etude model of the applied studio: a mirroring habit gets hands-apart drills with the left hand behind the back for half of each run; late cues get a cue-map drill with a partner calling entries. You also finalize your exam repertoire and submit its marked score, so that Week 13 tests preparation rather than improvisation. The practicum film and correction plan together form the course portfolio’s centerpiece.',
        ],
        listening: [
          'Gustav Holst, Second Suite in F for Military Band, Op. 28 No. 2, IV (Fantasia on the Dargason) — practicum repertoire option',
          'Percy Grainger, Ye Banks and Braes o’ Bonnie Doon — practicum repertoire option for balance shaping',
          'One full filmed rehearsal by a professional conductor of your choice, watched with the three-pass protocol before reviewing your own',
        ],
        assignments: [
          'Complete the fifteen-minute practicum with a written time budget submitted beforehand',
          'Perform the three-pass video review and reconcile your scoresheet with instructor and peer sheets',
          'Submit the two-fault correction plan with daily drills and your marked exam score',
        ],
      },
      {
        id: 'week-13',
        week: 13,
        title: 'Final Conducting Exam with Ensemble',
        objectives: [
          'Rehearse and perform an assigned and a prepared work with the ensemble under exam conditions',
          'Demonstrate integrated command of pattern, preparation, cueing, flexibility and rehearsal craft',
          'Evaluate your semester arc and define how podium literacy serves your principal discipline',
        ],
        content: [
          'The exam runs in two rounds mirroring professional conducting auditions. Round one is your prepared piece from Week 12: a ten-minute slot to rehearse briefly and perform, assessed on the full rubric — findable beat, communicative preparations, accurate cueing, stylistic gesture, verbal economy, and the ensemble’s actual result, which is the only measure players respect. Round two is a short assigned excerpt distributed forty-eight hours in advance, testing the transferable core of the course: can your score-study method produce a conductable conception of unfamiliar music in two days? Panels for both rounds include the instructor and rotating peer assessors, whose scoresheets have tracked you all semester and now calibrate the arc.',
          'The rubric’s summary question is the one ensembles silently ask of every conductor within eight bars: does following this person make playing easier or harder? Everything the course taught serves that question. A findable ictus makes ensemble automatic; a truthful preparation makes entries fearless; a consistent style vocabulary lets players commit sound without hedging; economical rehearsal respects the attention that is an ensemble’s real currency. Where those are present, technical imperfections are forgiven — professional players routinely rank clarity and trustworthiness above elegance — and where they are absent, no beauty of arm motion compensates.',
          'The course closes by returning conducting to its place in your degree: this is a fundamentals course on the Curtis model, required not to produce conductors but to produce complete musicians. Podium literacy changes how you play and sing — you now read full scores rather than parts, hear your line as one voice in a texture, understand what a conductor’s gesture is asking before it is explained, and can lead a sectional, a chamber rehearsal or a community ensemble when your career asks it, which it will. Your written exam reflection addresses exactly this transfer: three specific ways the semester’s podium work has already changed your work in the practice room, the section and the chamber ensemble.',
        ],
        listening: [
          'Your assigned excerpt, studied by the Week 5 method — inner ear first, recordings last',
          'Claudio Abbado, Lucerne Festival Orchestra, Mahler Symphony No. 2, V (2003) — minimal gesture, maximal trust, as a closing ideal',
          'Your own Week 1 and Week 12 films, watched back to back',
        ],
        assignments: [
          'Perform both exam rounds with marked scores submitted for each',
          'Submit the complete course portfolio: films, scoresheets, correction plans and marked scores',
          'Write the one-page transfer reflection connecting podium literacy to your principal study',
        ],
      },
    ],
  },
]
