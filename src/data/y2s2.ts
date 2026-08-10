import type { Course } from '../types'

export const y2s2Courses: Course[] = [
  {
    id: 'aps202',
    code: 'APS202',
    title: 'Principal Study 4',
    credits: 5,
    stream: 'performance',
    description:
      'The fourth semester of one-to-one applied study culminates in the sophomore continuation jury, a barrier assessment that determines progression into the upper division. Students consolidate the technical regime built over three semesters while broadening repertoire across at least three style periods, and learn to manage a long-range preparation timeline toward a high-stakes performance.',
    prerequisites: ['aps201'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Unit 1: Semester Audit and Barrier-Jury Roadmap',
        objectives: [
          'Assess current technical and musical standing against the sophomore barrier-jury rubric',
          'Select a jury program of three contrasting works spanning at least three style periods',
          'Build a fourteen-week backward-planned preparation calendar with milestone dates',
        ],
        content: [
          'The sophomore continuation jury differs from earlier juries in one crucial way: it is a barrier assessment, meaning the faculty votes on whether you continue in the performance degree. In the first lesson you and your teacher read the rubric together — typical categories are tone quality, intonation or diction, rhythmic integrity, technical command, stylistic understanding, and stage presence — and score a recording of your most recent jury against it honestly. The gap between your current scores and the passing threshold becomes the semester’s work order, stated in concrete terms such as ‘intonation above the staff degrades under forte dynamics’ rather than vague resolutions to ‘play better’.',
          'Program selection follows from that audit. A strong barrier program shows breadth without overreach: a Baroque or Classical work that exposes clarity of articulation and phrasing, a Romantic or early-20th-century work that shows tonal range and expressive risk, and a post-1950 or non-canonical work that demonstrates rhythmic and notational literacy. Singers assemble the equivalent in languages and periods — for example an Italian aria antica, a German Lied, and a 20th-century English or French song. The rule of thumb from audition-panel practice is to program at ninety percent of your technical ceiling, because juries reward control and communication more than ambition.',
          'The unit closes by translating the program into a backward-planned calendar. Working from jury day, fix the date by which every work must be performable slowly from memory (around week 8), the date of the first full run-through (week 10), and two mock-jury dates (weeks 11 and 13). Each week between now and those milestones gets a named deliverable — ‘exposition memorized’, ‘cadenza at 80 percent tempo’ — so that practice sessions inherit their goals from the plan rather than from mood. This goal–method–evaluation architecture, introduced in first year, now runs at the scale of a whole semester.',
        ],
        listening: [
          'A commercial recording of each work on your jury program, in at least two contrasting interpretations',
          'Glenn Gould, interview excerpts on practice and recording from The Glenn Gould Reader (as a study in self-assessment)',
        ],
        assignments: [
          'Score your most recent jury recording against the barrier rubric and write a one-page gap analysis',
          'Submit your proposed three-work jury program with timings and a one-sentence rationale per work',
          'Draft the fourteen-week backward-planned calendar and review it with your teacher',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Unit 2: Technique Consolidation — From Acquisition to Reliability',
        objectives: [
          'Convert this year’s new technical skills into a maintainable daily regime of 30–40 minutes',
          'Apply interleaved and randomized practice to stabilize technique under pressure',
          'Diagnose and rebuild one persistent technical weakness from its component motions',
        ],
        content: [
          'Second-year technique work shifts from acquiring new skills to making existing ones reliable — the difference between playing a passage correctly once and playing it correctly the tenth time, cold, with an audience watching. Motor-learning research distinguishes performance during practice from actual learning: blocked repetition (drilling one passage twenty times) produces fast apparent gains that evaporate, while interleaved practice (rotating among three or four technical targets in short sets) produces slower gains that survive stress. Your daily regime is therefore restructured into a rotation: tone or breath work, one scale-family in multiple articulations and rhythms, one flexibility or agility drill, and one etude excerpt, with the order shuffled day to day.',
          'Reliability also demands testing, not just training. Once a passage is secure at target tempo, subject it to the ‘first-take test’: one attempt only, recorded, at the start of the next day’s session before you are warm. If the first take fails on two consecutive days, the passage is not learned — it returns to slow practice with a different method, such as rhythmic displacement, chaining backward from the final note, or practicing the transitions between hand positions, breaths, or shifts rather than the notes themselves. Keeping a written first-take log across the semester gives you and your teacher hard data on what is genuinely jury-ready.',
          'Every player carries one weakness that has survived three semesters of general practice — a register break, an uneven trill, a shift that lands sharp, a consonant cluster that clots the vocal line. This unit isolates that weakness and rebuilds it from component motions: film the action in slow motion, identify the preparatory movement that precedes the failure, and design a micro-drill that trains only that preparation. Ten focused minutes daily on the true cause typically outperforms an hour of playing passages that merely contain the symptom.',
        ],
        listening: [
          'Recordings of a great technician on your instrument or voice playing repertoire you consider ‘easy’ — study what reliability sounds like',
          'Jascha Heifetz, 24 Caprices Op. 1 by Paganini (selections), or an equivalent benchmark recording for your instrument or voice',
        ],
        assignments: [
          'Write out your rotating 30–40 minute maintenance regime and log adherence daily for two weeks',
          'Keep a first-take log for the three hardest passages in your jury program',
          'Film your chosen persistent weakness in slow motion and bring a written component-motion diagnosis to your lesson',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Unit 3: Style Lab — Making Three Centuries Sound Different',
        objectives: [
          'Define concrete, executable style markers for each work on the jury program',
          'Apply period-appropriate articulation, ornamentation, vibrato and rubato decisions',
          'Defend interpretive choices verbally, as required in the jury’s brief oral component',
        ],
        content: [
          'A barrier jury listens for whether your Bach sounds different from your Brahms for reasons you can name. This unit turns style from an atmosphere into a checklist of executable decisions. For Baroque repertoire that means hierarchical beat weighting (strong–weak pairing at the level the meter implies), articulation that speaks rather than sustains, ornaments realized from the beat, and dynamics built from texture and register rather than continuous hairpins. For Classical works it means punctuation — hearing phrase endings as commas, semicolons and full stops in the manner Leopold Mozart and Türk describe — and dramatic contrast between galant and learned topics.',
          'Romantic and post-Romantic style centers on managed rubato and a wider tonal palette. Study how Chopin’s own students described his rubato — a flexible melody over a steady accompaniment pulse — versus the structural tempo modification Wagner and Furtwängler favored, and decide which model your Romantic work needs at each phrase. Vibrato becomes a variable, not a default: map where it intensifies, narrows, or disappears entirely. For your 20th- or 21st-century work, precision itself is the style marker: exact dynamics, exact rhythm in mixed meters, and faithful execution of extended techniques or unconventional notation as the composer specifies.',
          'Because the jury includes brief questions from the panel, you must be able to say why you chose an interpretation in one or two sentences that cite evidence — the score, a treatise, a recording tradition, the harmony. Practice this aloud: after each run-through this week, answer an imagined panel question such as ‘Why so little vibrato in the slow movement?’ or ‘What informs your tempo in the fugue?’. An interpreter who can articulate reasons reads as a musician making choices; one who cannot reads as a student copying recordings.',
        ],
        listening: [
          'Two historically-informed and two modern-instrument recordings of your Baroque or Classical jury work, compared',
          'Frédéric Chopin, Nocturne in D-flat major Op. 27 No. 2 — recordings by Arthur Rubinstein and Ignaz Friedman, compared for rubato practice',
          'The composer’s own recording or a premiere recording of your 20th-/21st-century work, if one exists',
        ],
        assignments: [
          'Create a one-page style sheet per jury work listing your articulation, ornament, vibrato and rubato decisions with evidence',
          'Record the same eight-bar phrase in deliberately ‘wrong’ style and correct style; bring both to your lesson',
          'Write and rehearse two-sentence answers to five likely panel questions',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Unit 4: Memory Architecture and the Slow-Practice Deepening Cycle',
        objectives: [
          'Secure the jury program using four interlocking memory systems: aural, visual, kinesthetic and analytical',
          'Install numbered performance checkpoints permitting recovery from any memory slip',
          'Use ultra-slow practice to audit and refresh detail that has eroded since learning',
        ],
        content: [
          'Memory that survives adrenaline is built on redundancy. Performance psychologists distinguish four memory systems: kinesthetic (the hands or voice know the sequence), aural (you can sing every voice), visual (you can see the page or the keyboard topology), and analytical (you know the form, the keys, and the harmonic logic at every moment). Kinesthetic memory alone — the default result of ordinary repetition — is the system most disrupted by stress, which is why slips in juries so often occur in passages students ‘never miss’ at home. This unit audits each jury work against all four systems: sing the bass line from memory, write out the opening eight bars on staff paper, and narrate the tonal plan aloud (‘exposition closes in the mediant; development sequences through the circle of fifths to the dominant pedal’).',
          'Checkpointing turns analysis into insurance. Divide each work into numbered structural landmarks — typically every phrase or formal juncture, fifteen to twenty-five per movement — and drill starting cold from any landmark chosen at random by a peer or by dice. When a memory slip happens in performance, a checkpointed player jumps forward to the next landmark within a beat or two; an uncheckpointed player stops. Landmark practice also reveals which regions of the piece exist only as kinesthetic chain: anywhere you cannot start is a place you cannot recover.',
          'Ultra-slow practice — at a quarter to a third of tempo, with full expressive commitment — serves a second function this deep into preparation: auditing. At performance tempo the ear checks outlines; at extreme slow tempo it hears every attack, every release, every intonation bend and pedal or breath choice, exposing detail that has silently eroded since the notes were learned in September. Pianists from Rachmaninoff to Hewitt have described a weekly slow ‘pass’ through repertoire in performance condition; adopt the practice for each jury work once weekly from now until the jury.',
        ],
        listening: [
          'Your own landmark-drill recordings, reviewed for recovery speed',
          'J.S. Bach, Well-Tempered Clavier Book I, Fugue in C minor BWV 847 — follow the score and narrate entries from memory afterward as an analytical-memory exercise',
        ],
        assignments: [
          'Produce a numbered landmark map for every jury work and pass a random-start drill administered by a peer',
          'Write out the first page of one jury work from memory and check it against the score',
          'Complete one ultra-slow expressive pass per work this week and log what the slow pass exposed',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Unit 5: Mock Juries, Stress Inoculation and Recovery Skills',
        objectives: [
          'Perform the complete program in two mock juries under realistic conditions',
          'Apply arousal-regulation techniques before and during performance',
          'Rehearse error recovery so that slips cost beats, not measures',
        ],
        content: [
          'Simulation is the only rehearsal for pressure. This unit stages two full mock juries: performance attire, a panel of peers and a faculty guest at a table, a stopwatch, walk-in and bow, and the real jury’s format including interruptions (‘Thank you — please begin at the second movement’). Being stopped and restarted mid-work is a routine jury procedure that unsettles unprepared students far more than wrong notes do, so it is drilled deliberately. Both mocks are recorded on video, and the debrief scores the run against the barrier rubric from Unit 1 so progress is measured on the instrument that will actually judge you.',
          'Between the mocks you build a pre-performance routine with three layers. Physiological: slow diaphragmatic breathing on an extended exhale (a four-count in, six-to-eight-count out) reliably lowers heart rate within about ninety seconds and can be done in the hallway. Attentional: a brief centering script that moves focus from self (‘they are evaluating me’) to task (‘the opening needs a warm mezzo-piano and a relaxed right shoulder’), following the quiet-eye and process-focus findings in sport psychology. Behavioral: a fixed sequence — arrive, warm up in a set order, silence, walk, breathe, begin — rehearsed until it runs automatically, because a routine that only exists on calm days is not a routine.',
          'Recovery skill is trained like any other. In practice runs this week, a peer injects controlled sabotage: a loud noise, a dropped pencil, a deliberately wrong page-turn cue. Your job is to keep the pulse and jump to the next landmark, then log the recovery time. The professional standard is that an error costs its own beat and nothing more; the audience — and the panel — remembers the recovery, not the slip. Post-mock review focuses one praise and one fix per work, avoiding the demoralizing full-inventory critique that degrades the final weeks of preparation.',
        ],
        listening: [
          'Video of your first mock jury, reviewed once with the rubric and once with the sound off to study stage demeanor',
          'A live-recital recording (not studio) of one jury work by a major artist, listened to for how live imperfections are absorbed',
        ],
        assignments: [
          'Perform two complete mock juries and submit rubric-scored self-evaluations of both videos',
          'Write your three-layer pre-performance routine on a card and execute it before every run-through this week',
          'Complete five sabotage-recovery drills and log recovery times',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Unit 6: The Barrier Jury and the Upper-Division Plan',
        objectives: [
          'Execute jury week with a tapered practice load and stable routines',
          'Perform the barrier jury and answer panel questions with poise',
          'Translate jury feedback into a written repertoire and technique plan for the junior year',
        ],
        content: [
          'Jury week follows a taper, borrowed from athletics: total practice volume drops by roughly a third, run-throughs stop two days before the jury, and the final days contain only slow expressive passes, landmark spot-checks, and mental rehearsal. The evidence from performance science is consistent — skill does not improve in the last forty-eight hours, but fatigue and fresh doubt can accumulate. Sleep is protected as a scheduled commitment, since memory consolidation of the semester’s motor learning happens disproportionately during sleep, and warm-ups on jury day are kept short, familiar and gentle.',
          'In the jury itself, the panel typically hears eight to twelve minutes selected from your program, chooses starting points, and asks one or two questions. Everything here has been rehearsed: the interrupted start (Unit 5), the random landmark entry (Unit 4), the two-sentence interpretive answers (Unit 3). Walk, bow, and tempo-set deliberately — the first ten seconds establish the panel’s frame, and a composed entrance buys goodwill that survives a small slip later. Whatever happens, complete the performance as a professional: the barrier assessment measures readiness for the upper division, and readiness includes how you carry a rough moment.',
          'The final lesson converts the jury into a plan. You and your teacher read the panel’s written comments line by line, sorting them into technique items, repertoire directions, and performance-behavior notes, and draft the junior-year plan: the concerto or major aria/scene to begin over the summer, the etude book or vocalise volume for the next technical stage, and the first repertoire ideas for the junior recital that now sits three semesters away. A short written reflection — what this semester’s preparation system got right, what failed under pressure, what changes next cycle — closes the loop, because the durable outcome of APS202 is not the jury result but a preparation method you now own.',
        ],
        listening: [
          'Your jury recording, reviewed once alone and once with your teacher',
          'The concerto, aria or major work proposed for junior-year study, in two contrasting recordings',
        ],
        assignments: [
          'Perform the sophomore barrier jury',
          'Submit a one-page written reflection on your preparation system: what held, what broke, what changes',
          'Draft the junior-year repertoire and technique plan with your teacher and file it with the studio',
        ],
      },
    ],
  },
  {
    id: 'mut202',
    code: 'MUT202',
    title: 'Music Theory 4: At Tonality’s Edge',
    credits: 3,
    stream: 'theory',
    description:
      'The final semester of the core theory sequence follows tonality to its edge and beyond, from Mahler and Debussy through free atonality, pitch-class set theory and the twelve-tone method, to Stravinsky, Bartók and the neoclassicists. Students acquire the analytical toolkit for post-tonal music — collections, sets, rows, symmetry — and finish by composing short studies in three distinct 20th-century idioms.',
    prerequisites: ['mut201'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'The Dissolution of Common-Practice Syntax: Mahler and Strauss',
        objectives: [
          'Identify techniques that weaken tonal syntax: nonresolving dominants, chromatic sequence saturation, and dissolving cadences',
          'Analyze passages of Mahler and Strauss where key is asserted by pedal and gesture rather than by cadence',
          'Define ‘emancipation of the dissonance’ and situate it historically around 1900–1908',
        ],
        content: [
          'Common-practice tonality is a syntax: chords have functions (tonic, predominant, dominant), functions occur in ordered progressions, and cadences articulate closure. Around 1890–1910 that syntax weakened not through a single revolution but through cumulative habits. Dominants stop resolving — Strauss’s Till Eulenspiegel (1895) and Salome (1905) are full of V7 and half-diminished sonorities that slide chromatically to other dissonances instead of discharging to tonic. Sequences, once transitional, saturate whole paragraphs so that no key holds long enough to govern. And enharmonic reinterpretation, learned last semester as an expressive special effect, becomes routine, so that a German sixth or diminished seventh is less a chord in a key than a pivot permanently in motion.',
          'Mahler shows the complementary strategy: keys asserted by weight rather than syntax. The first movement of the Ninth Symphony (1909) establishes D major less by cadence than by pedal point, orchestral color, and the obsessive return of a two-note sighing motive; when the music collapses into D minor and beyond, there is rarely a functional progression to blame — texture and register do the tonal work. Mahler also practices what analysts after Robert Bailey call the ‘double-tonic complex’: the Song of the Earth entwines C and A, and the Second Symphony travels from C minor to E-flat major permanently, abandoning the classical promise that a work ends where it began. Directional tonality of this kind makes key a narrative event rather than a grammatical frame.',
          'Schoenberg later named the endpoint of this process the ‘emancipation of the dissonance’: once dissonant chords no longer obligate resolution, the consonance/dissonance distinction stops organizing music, and something else must. The years 1900–1908 are thus best heard not as decay but as an overloaded system: Strauss’s Elektra (1908) stacks bitonal complexes (the famous Elektra chord superimposes E major and C-sharp major triads) yet still ends in C major, while Schoenberg’s Second String Quartet (1908) adds a soprano singing ‘I feel air from another planet’ as its finale leaves key signatures behind. This course follows the several answers composers gave to the question that moment posed: if not functional tonality, then what?',
        ],
        listening: [
          'Gustav Mahler, Symphony No. 9, first movement (Andante comodo)',
          'Richard Strauss, Salome, final scene',
          'Richard Strauss, Elektra, opening scene (Agamemnon motive) and Elektra chord passages',
          'Arnold Schoenberg, String Quartet No. 2 Op. 10, fourth movement (Entrückung)',
        ],
        assignments: [
          'Annotate the first 30 bars of the Mahler Ninth’s first movement: mark every event that asserts D major and classify it as syntactic (functional progression) or rhetorical (pedal, color, motive)',
          'Find three nonresolving dominant-quality sonorities in the Salome final scene and describe what each moves to instead',
          'Write one paragraph defining ‘emancipation of the dissonance’ with two musical examples from this week’s listening',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Debussy: Modes, Whole-Tone and Pentatonic Collections',
        objectives: [
          'Construct and recognize the diatonic modes, pentatonic collection and the two whole-tone collections',
          'Analyze Debussy’s harmony as collection-based rather than function-based, including planing (parallel chords)',
          'Trace collection shifts as the form-defining events in a Debussy prelude',
        ],
        content: [
          'Debussy’s answer to the crisis of tonality was to change the question: instead of asking which chord comes next, ask which collection of pitches is in play. A collection is simply a referential set of notes — the white-key diatonic set, the five-note pentatonic set (C–D–E–G–A, the black keys), a church mode such as Dorian or Lydian, or the whole-tone scale, of which only two distinct transpositions exist: WT0 (C–D–E–F♯–G♯–A♯) and WT1 (C♯–D♯–F–G–A–B). Because the whole-tone collection contains no perfect fifths and no half steps, it supports no dominant and no leading tone: it is structurally incapable of functional cadence, which is precisely its appeal. Voiles (Préludes Book I, 1910) floats almost entirely on WT0, breaks to black-key pentatonic in its middle section, and returns — the collection change is the form.',
          'Within a collection, Debussy moves chords in parallel — a technique called planing or, in French treatises, glissando harmony. In La cathédrale engloutie, root-position triads and open fifths slide stepwise in parallel, flatly contradicting the voice-leading rules of the chorale style: the sonority is treated as a single thickened melodic line, a color rather than a functional object. Distinguish diatonic planing (parallel chords filtered through one diatonic mode, so chord quality varies) from exact chromatic planing (every chord an exact transposition, so the collection changes constantly). Ninth chords, added sixths and chords built on fourths receive the same treatment: they are sonic objects chosen for resonance, not tension demanding resolution.',
          'Analysis of this repertoire therefore replaces Roman numerals with collection labels and centricity judgments. Centricity — the sense that one pitch is ‘home’ — survives without functional harmony: Debussy establishes centers by pedal, ostinato, registral placement and repetition, exactly Mahler’s rhetorical toolkit. In La fille aux cheveux de lin, a pentatonic melody is harmonized in a G-flat major that cadences plagally and modally, dodging the leading tone; in Nuages from the Nocturnes (1899), an ostinato of parallel fifths and thirds circles a B center colored by Dorian and octatonic inflections. Map a piece as a succession of collections, each with its own center, and Debussy’s forms emerge as clearly as sonata expositions once did.',
        ],
        listening: [
          'Claude Debussy, Préludes Book I: Voiles',
          'Claude Debussy, Préludes Book I: La cathédrale engloutie',
          'Claude Debussy, Nocturnes: Nuages',
          'Claude Debussy, Préludes Book I: La fille aux cheveux de lin',
        ],
        assignments: [
          'Make a bar-by-bar collection map of Voiles (WT0, pentatonic, WT0) and mark the pitch center of each section with evidence',
          'Find and label two passages of diatonic planing and one of exact chromatic planing in La cathédrale engloutie',
          'Harmonize a given eight-bar pentatonic melody twice: once with functional harmony, once with parallel modal triads over a pedal; write two sentences on the difference',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Scriabin and Synthetic Scales',
        objectives: [
          'Spell the mystic chord and derive the acoustic (Lydian-dominant) scale from it',
          'Explain how a single referential sonority can replace tonic–dominant polarity',
          'Compare Scriabin’s late system with Debussy’s collections and with the octatonic collection',
        ],
        content: [
          'Alexander Scriabin traveled from Chopin imitation to a private harmonic system in barely fifteen years. His late works (roughly 1908–1915) are governed by what early analysts called the ‘mystic chord’ — spelled from C as C–F♯–B♭–E–A–D, a stack of fourths (augmented, diminished, then perfect) — though it is more usefully heard as a verticalization of a scale: C–D–E–F♯–A–B♭ plus its implied companions fills out the acoustic or Lydian-dominant collection, C–D–E–F♯–G–A–B♭, so named because it approximates the lower partials of the harmonic series. The chord is dominant-quality (a V13♯11 in Roman-numeral terms) yet never resolves; Scriabin liquidates the distinction between chord and scale, so that melody and harmony draw from one reservoir of pitches — his own formulation was that ‘melody is unfurled harmony’.',
          'What replaces progression is transposition of the referential sonority. In Prometheus: The Poem of Fire (1910) and the late piano sonatas, the mystic complex moves — characteristically by tritone or minor third, intervals that preserve much of its pitch content — creating a music of shifting lights rather than departures and returns. The Piano Sonata No. 5 (1907) stands at the hinge: it retains key signatures and an ecstatic F-sharp-major climax, but its languid opening harmony is already the mystic sound. By the Sonata No. 9, ‘Black Mass’ (1913), and the late poèmes such as Vers la flamme (1914), no key signature appears and closure is achieved by registral extremity, dynamic apotheosis and rhythmic dissolution — rhetorical endings for a syntax that no longer has cadences.',
          'A synthetic scale is any referential collection assembled by a composer rather than inherited from the diatonic system, and Scriabin’s is one of a family the course will keep meeting. The acoustic scale is one rotation away from the ascending melodic minor; sharpen the mystic complex slightly and you fall into the octatonic collection (alternating half and whole steps), which Scriabin also exploits and which Stravinsky will make structural in Week 8. The comparison with Debussy is instructive: both composers replace function with collection, but Debussy shifts among many collections for color, while late Scriabin monomaniacally transposes one. Both strategies show that coherence can survive tonality’s loss if the ear is given a consistent referential sound.',
        ],
        listening: [
          'Alexander Scriabin, Prometheus: The Poem of Fire Op. 60 (opening and final pages)',
          'Alexander Scriabin, Piano Sonata No. 5 Op. 53',
          'Alexander Scriabin, Vers la flamme Op. 72',
          'Alexander Scriabin, Piano Sonata No. 9 Op. 68 (Black Mass)',
        ],
        assignments: [
          'Spell the mystic chord from three different roots, convert each to scale form, and identify which acoustic collection results',
          'Analyze the first page of Vers la flamme: label the governing collection and every transposition of it, noting the interval of transposition',
          'Compose an eight-bar piano fragment that uses one transposing referential sonority (your own synthetic chord of five or six notes) and no functional cadence',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Early Schoenberg and Free Atonality',
        objectives: [
          'Describe the path from extended tonality to atonality in Schoenberg’s works of 1899–1912',
          'Identify contextual coherence devices: motivic saturation, developing variation and complementation',
          'Analyze a free-atonal miniature by Schoenberg or Webern using intervallic cells',
        ],
        content: [
          'Schoenberg’s development compresses the whole crisis into one career. Verklärte Nacht (1899) is late-Romantic chromaticism in the Wagner–Brahms line; the massive Gurre-Lieder (begun 1900) and the First Chamber Symphony Op. 9 (1906), with its fourth-chords and whole-tone passages, stretch tonality to its limits; then the last movement of the Second String Quartet (1908) and the Three Piano Pieces Op. 11 (1909) cross the line into what is conventionally called free atonality — Schoenberg preferred ‘pantonality’. Free means pre-systematic: there is no twelve-tone method yet, and each piece must invent its own coherence. The crossing was not casual; Schoenberg described it as obedience to an inner compulsion, and the expressionist aesthetic of the years around Erwartung (1909) — a half-hour monodrama of a woman searching a forest for her murdered lover — demanded harmonic vertigo that tonality could not supply.',
          'Without keys, coherence becomes contextual, established inside each work. The primary device is the intervallic cell: a small set of intervals — in Op. 11 No. 1, the opening three-note figure B–G♯–G, a minor third plus a half step — saturates the texture melodically and harmonically, transposed, inverted, and verticalized. This is Brahms’s developing variation radicalized: every event derives from continuous transformation of initial material rather than from symmetrical repetition. Schoenberg also relies on complementation, the tendency of atonal lines to cycle through all twelve pitch classes before repeating any, keeping the chromatic field in circulation and preventing accidental tonics; analysts call the resulting texture ‘chromatic saturation’.',
          'The aphoristic miniature is this style’s natural form, because contextual coherence is hard to sustain at length without text. Webern’s Six Bagatelles Op. 9 (1913) average under a minute each — Schoenberg’s preface famously says they express ‘a novel in a single gesture’ — and his Five Pieces for Orchestra Op. 10 make single sonorities into events. Where longer spans were needed, text carried the form: Erwartung, and Pierrot lunaire (1912), whose Sprechstimme (pitched speech notated with x-headed notes) sits between song and recitation. In analysis, resist hunting for hidden keys; instead label the recurring cells, track their transformations, and describe how register, dynamics and timbre articulate phrase and climax — the parameters that inherited form-making duties from harmony.',
        ],
        listening: [
          'Arnold Schoenberg, Three Piano Pieces Op. 11, No. 1',
          'Arnold Schoenberg, Pierrot lunaire Op. 21: Mondestrunken and Der Mondfleck',
          'Anton Webern, Six Bagatelles for String Quartet Op. 9',
          'Arnold Schoenberg, Erwartung Op. 17 (opening scene)',
        ],
        assignments: [
          'Circle every occurrence of the opening three-note cell (and its inversions and verticalizations) in the first 11 bars of Schoenberg Op. 11 No. 1',
          'Write a short analysis (300 words) of one Webern bagatelle describing how cells, register and dynamics create a complete form in under a minute',
          'Compose a 12–16 bar atonal miniature for your instrument built from a single three-note cell, avoiding triadic verticals',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Pitch-Class Set Theory I: Sets and Normal Form',
        objectives: [
          'Define pitch class, integer notation, and pitch-class set',
          'Compute normal form and prime form for any set of three to six elements',
          'Relate sets by transposition (Tn) and inversion (TnI)',
        ],
        content: [
          'Set theory, systematized by Allen Forte in The Structure of Atonal Music (1973) and refined by Rahn and Straus, gives atonal analysis the vocabulary tonal analysis gets from Roman numerals. A pitch class gathers all octave duplications and enharmonic spellings of a note into one object: every C, whether contra-octave or piccolo register, and every B♯ and D𝄫, is pitch class 0. The twelve pitch classes are numbered 0 through 11 (C = 0, C♯/D♭ = 1, … B = 11), and arithmetic is mod 12, exactly like clock arithmetic: 10 + 4 = 2, because four hours after ten o’clock is two o’clock. A pitch-class set is simply an unordered collection of pitch classes — the atonal analogue of ‘a chord type’, with no root, no spelling and no registral commitment.',
          'To compare sets we need a standard order. Normal form is the most compact ascending rotation: list the set ascending, try each rotation, and choose the one with the smallest span from first to last element, breaking ties by packing small intervals toward the left. Take the opening cell of Schoenberg Op. 11 No. 1 — B, G♯, G, or {7, 8, 11}: its rotations span 7→11 (4 semitones), 8→7 (11), 11→8 (9), so normal form is [7, 8, 11]. Prime form goes one step further, transposing the normal form to begin on 0 and comparing it with the inversion treated the same way, choosing the more compact: [7, 8, 11] transposes to (0, 1, 4); its inversion yields (0, 3, 4), which packs less tightly to the left, so the prime form is (014). Prime form names the set class — the family of all transpositions and inversions of a set — and Forte gave each class a catalog number (014 is 3-3).',
          'The payoff is analytical: two chords that look nothing alike on the page may be the same set class, and hearing that identity is hearing the piece’s harmonic consistency. The operations that define the family are transposition, Tn (add n to every element mod 12), and inversion, TnI (subtract every element from n mod 12). Thus T3 of {7, 8, 11} is {10, 11, 2}; T0I of it is {5, 4, 1}. Famous set classes to memorize now: (014), the Schoenberg cell; (0146), the all-interval tetrachord; (0167), the Z-cell prominent in Bartók; and (037), which is nothing other than the consonant triad seen through atonal eyes — set theory covers tonal objects too, it just ignores their function.',
        ],
        listening: [
          'Anton Webern, Five Movements for String Quartet Op. 5, No. 4 (a classic set-analysis specimen)',
          'Arnold Schoenberg, Six Little Piano Pieces Op. 19, No. 2',
          'Igor Stravinsky, Three Pieces for String Quartet, No. 2',
        ],
        assignments: [
          'Compute normal form and prime form for ten given sets of three to five elements, showing the rotation table for at least three of them',
          'Identify the set class of every trichord formed by adjacent notes in the first phrase of Webern Op. 5 No. 4',
          'Drill: convert twenty note-name collections to integer notation and back within a time limit, using flashcards or an app',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Set Theory II: Interval-Class Vectors and Set Relations',
        objectives: [
          'Compute interval-class vectors and use them to characterize a set’s sound',
          'Define and apply subset, superset, complement, Z-relation and invariance',
          'Use set relations to describe harmonic consistency across an atonal work',
        ],
        content: [
          'The interval-class vector is a set’s sonic fingerprint. An interval class (ic) reduces every interval to its smallest form: a major seventh (11 semitones) and a minor second (1) are both ic1; there are only six interval classes, ic1 through ic6. The vector counts how many of each a set contains, written as six digits. The major/minor triad (037) has vector 001110 — one minor third, one major third, one perfect fourth/fifth, and nothing else — which is why triads sound the way they do; the whole-tone-derived (048) has 000300; the chromatic trichord (012) has 210000. Vectors predict sound: sets heavy in ic1 and ic6 sound tense and ‘atonal’, sets heavy in ic3, ic4 and ic5 sound warm and quasi-tonal, which is why composers as different as Webern and Britten can be characterized by the vectors they favor.',
          'Several relations organize the universe of set classes. A subset is contained within a superset: (014) sits inside (0146), so a composer can grow harmonies organically by expanding a cell. The complement of a set is everything it excludes — the complement of a four-note set is an eight-note set — and by the complement theorem the two share a proportionally similar vector, a fact Forte made central to his readings of Schoenberg. Two sets are Z-related when they share an identical vector without being transpositions or inversions of one another: the classic pair is 4-Z15 (0146) and 4-Z29 (0137), the all-interval tetrachords, whose vector 111111 contains every interval class exactly once. Invariance asks what survives an operation — the whole-tone collection maps onto itself under every even transposition, and (0167) maps onto itself at T6, which is why these sets create static, symmetrical harmonic fields.',
          'Relations become analysis when they explain what the ear reports. In Webern’s Op. 5 No. 4, the (0167) tetrachord and its subsets govern both the ostinato and the melodic spans, so the movement sounds harmonically unified despite having no tonal center; invariance under T6 explains why its transpositions sound like ‘the same music elsewhere’ rather than new material. When you analyze, choose the level of the set that matches what is audible — usually trichords and tetrachords, not sprawling septachords — and always pair every label with a claim about sound or structure. A set name that explains nothing is inventory, not analysis; the standing question for every label is: what does hearing this identity change?',
        ],
        listening: [
          'Anton Webern, Five Movements for String Quartet Op. 5, No. 4 (revisited with vectors)',
          'Elliott Carter, Eight Etudes and a Fantasy for Woodwind Quartet: Etude No. 3 (a single D-major triad as sound-study)',
          'Ruth Crawford Seeger, String Quartet 1931, third movement',
        ],
        assignments: [
          'Compute interval-class vectors for eight given sets, including one Z-related pair, and verify the shared vector',
          'Write a one-page set analysis of Webern Op. 5 No. 4 demonstrating the structural role of (0167) and its subsets, with a claim about invariance',
          'Find one tetrachord in your own principal-study repertoire (any period), compute its vector, and describe its sound in vector terms',
        ],
      },
      {
        id: 'week-07',
        week: 7,
        title: 'The Twelve-Tone Method: Rows and Operations',
        objectives: [
          'Define the tone row and construct a 12×12 matrix of its 48 forms (P, I, R, RI)',
          'Identify row forms and their deployment in a Schoenberg or Webern score',
          'Distinguish the method’s constraints from its freedoms: rhythm, register, texture and character remain open',
        ],
        content: [
          'By the early 1920s Schoenberg wanted the harmonic consistency of set-based writing with a system that could sustain large forms without text, and announced a ‘method of composing with twelve tones which are related only with one another’. Its rule is simple: order the twelve pitch classes into a series or row, and derive the piece’s material from that ordering. Each row yields 48 forms: the prime (P) at twelve transpositions, its inversion (I, every interval mirrored), its retrograde (R, the prime backward), and its retrograde inversion (RI). Forms are labeled by first pitch class — Schoenberg’s Op. 33a row starting on B♭ is P10. The 12×12 matrix makes all 48 visible at once: write P0 across the top row, I0 down the left column, and every row of the square is a transposed prime, every column a transposed inversion, read backward for R and RI.',
          'The method constrains pitch order and nothing else — rhythm, register, dynamics, texture, doubling and form remain free, which is why twelve-tone works differ so widely in character. In practice composers immediately loosened even the ordering: rows are deployed in overlapping strands, distributed between melody and accompaniment, and partitioned into segments treated as harmonies. Schoenberg built rows whose hexachords (first and last six notes) combine with those of an inversion to complete the aggregate without duplication — a property Milton Babbitt later named combinatoriality — allowing him to pair P and I forms like tonic and dominant. His Suite for Piano Op. 25 (1921–23), the first fully twelve-tone work, pours the method into Baroque dance forms (Präludium, Gavotte, Menuett, Gigue), all built from a single row whose forms are limited to transpositions containing the tritone G–D♭.',
          'Webern took the method toward crystalline symmetry. The row of his Symphony Op. 21 (1928) is its own retrograde at the tritone, and the Concerto for Nine Instruments Op. 24 builds its row from four statements of one (014) trichord — prime, retrograde-inversion, retrograde, inversion — fusing set theory and serialism in a single object; Webern loved that this design echoes the Latin SATOR–ROTAS word square. Berg went the other way, engineering rows with tonal shadows: the Violin Concerto (1935) row alternates minor and major triads through its first nine notes and ends with four whole steps that coincide with the opening of the Bach chorale Es ist genug, which the finale quotes outright. Reading a twelve-tone score, then, means asking not only ‘which row form?’ but ‘what is the row built to make possible?’.',
        ],
        listening: [
          'Arnold Schoenberg, Suite for Piano Op. 25: Präludium and Gavotte',
          'Anton Webern, Symphony Op. 21, first movement',
          'Alban Berg, Violin Concerto, first movement and the chorale variations of the second',
          'Arnold Schoenberg, Piano Piece Op. 33a',
        ],
        assignments: [
          'Construct the full 12×12 matrix for the row of Schoenberg Op. 25 (E–F–G–D♭–G♭–E♭–A♭–D–B–C–A–B♭) and label the axes',
          'Identify the row forms in the first 10 bars of the Op. 25 Präludium, marking where forms overlap or interlock',
          'Compose your own row with a designed property (a repeated trichord type, hexachordal combinatoriality, or embedded triads) and write a paragraph explaining the design',
        ],
      },
      {
        id: 'week-08',
        week: 8,
        title: 'Stravinsky: Octatonicism and Block Form',
        objectives: [
          'Construct the three octatonic collections and locate their embedded triads and Z-cells',
          'Analyze block form: juxtaposition, interruption and stratification instead of transition',
          'Apply both tools to passages from Petrushka and The Rite of Spring',
        ],
        content: [
          'The octatonic collection alternates half and whole steps, giving eight notes with only three distinct transpositions, conventionally OCT(0,1) = C–C♯–D♯–E–F♯–G–A–B♭, OCT(1,2), and OCT(2,3). Its internal symmetry (it maps onto itself at T3, T6 and T9) makes it a machine for Stravinsky’s favorite harmonies: it contains four major and four minor triads whose roots lie a minor third apart, four dominant sevenths, and the (0167) tritone cell. The famous Petrushka chord — C major and F♯ major triads sounded together — is not bitonal paint but a single octatonic object: both triads live inside OCT(0,1). Rimsky-Korsakov’s circle had used the scale as exotic color; his student Stravinsky, as Arthur Berger and Pieter van den Toorn showed, made it structural, often interacting with diatonic folk material so that passages read as octatonic–diatonic negotiations.',
          'Stravinsky’s forms are as radical as his harmony. Where German practice develops — transitions grow one idea into the next — Stravinsky juxtaposes: discrete blocks of material, each with fixed instrumentation, register, harmony and tempo character, are cut against each other like film shots, a technique Edward Cone described as ‘stratification, interlock and synthesis’. In the Symphonies of Wind Instruments (1920), three or four strata at different tempos interrupt one another repeatedly, each resuming where it left off, until a closing chorale synthesizes the field. The Rite of Spring works the same way at maximal violence: the Dance of the Adolescents pounds a single stacked sonority — an E♭7 over an F♭ major triad — with irregular accents, and form arises from the montage of ostinato blocks rather than from harmonic journey.',
          'Analyzing Stravinsky therefore needs both toolkits at once. Label collections (octatonic, diatonic, and their interactions) for the harmonic dimension; map blocks — give each recurring block a letter, chart its returns, and note what is invariant versus varied at each return — for the formal dimension. Note also how rhythm does the syntactic work harmony abandoned: ostinati establish expectation, and displaced accents and shifting meters violate it, so that tension and release become rhythmic categories. This is the deep lesson of the Rite a century on: coherence relocated from chord progression to collection, texture and pulse, an aesthetic of the sounding object rather than of the unfolding argument.',
        ],
        listening: [
          'Igor Stravinsky, Petrushka, Second Tableau (Petrushka chord)',
          'Igor Stravinsky, The Rite of Spring: Danse des adolescentes and Danse sacrale',
          'Igor Stravinsky, Symphonies of Wind Instruments',
          'Igor Stravinsky, Symphony of Psalms, first movement',
        ],
        assignments: [
          'Write out all three octatonic collections and list the major triads, minor triads and dominant sevenths embedded in OCT(0,1)',
          'Make a block map of the first three minutes of Symphonies of Wind Instruments: letter each block, chart returns, and note one invariant and one varied feature per return',
          'Analyze the Petrushka chord passage: show that both triads belong to one octatonic collection and describe how orchestration keeps the strata separate',
        ],
      },
      {
        id: 'week-09',
        week: 9,
        title: 'Bartók: Symmetry, Axis System, Folk Modality',
        objectives: [
          'Analyze inversional symmetry around a pitch axis in Bartók’s music',
          'Explain Lendvai’s axis system and evaluate it critically as an analytical claim',
          'Identify folk-derived modes and rhythms integrated into Bartók’s concert language',
        ],
        content: [
          'Bartók built a personal tonality from three sources: peasant music collected in the field, the chromatic saturation of post-Wagnerian Europe, and an instinct for symmetry. Beginning in 1906 he and Kodály recorded thousands of Hungarian, Romanian and Slovak songs on Edison cylinders, and the modes of that repertoire — Dorian, Aeolian, Mixolydian, the ‘acoustic’ Lydian-dominant of Romanian fiddling, and pentatony of the old Hungarian style — became his melodic bedrock, while its rhythms gave him parlando-rubato (free, speech-like) and tempo giusto (strict dance) characters, plus the additive ‘Bulgarian’ meters such as the 4+2+3 of the Music for Strings’ finale-cousins in the Mikrokosmos Bulgarian Dances. This was not quotation but assimilation: Bartók said the peasant modes freed him from the ‘tyrannical rule of the major and minor keys’.',
          'Symmetry organizes the chromatic side. Bartók habitually deploys inversional symmetry: lines and harmonies mirror around a central axis pitch, as in the fourth movement of Music for Strings, Percussion and Celesta (1936), whose subject expands outward from and contracts back to its axis, or the Fifth Quartet’s palindromic movements and the arch (bridge) forms ABCBA of the Fourth and Fifth Quartets, where the whole work mirrors around its center. His fugue subjects in the Music for Strings first movement enter alternately a fifth above and a fifth below A, climax at the maximal distance of E♭ — the tritone pole — and return to A for a closing inversion of the subject: the tritone functions as a structural antipode to the tonic, an idea impossible in functional tonality but natural in a symmetrical pitch space. Cells (0134) and (0167), Z-cells in the literature on the Fourth Quartet, saturate his textures the way (014) saturates Schoenberg.',
          'Ernő Lendvai proposed that Bartók’s tonal plans obey an ‘axis system’: the twelve pitch classes divide into three functions — tonic, dominant, subdominant — each an equivalence class of four roots a minor third apart (A tonic implies C, E♭ and F♯ as tonic substitutes), extending classical relative-key logic symmetrically. The theory elegantly matches the A–E♭–A pole plan of the Music for Strings, and Lendvai added golden-section proportion claims (the first movement’s climax falls near bar 55 of 89, a Fibonacci pairing). Treat these as hypotheses, not facts: scholars such as László Somfai have shown the sketches give them little support, and many ‘golden sections’ depend on what one counts. The critical skill this week is exactly that — testing an attractive analytical system against the score and keeping only what the music corroborates.',
        ],
        listening: [
          'Béla Bartók, Music for Strings, Percussion and Celesta, first and fourth movements',
          'Béla Bartók, String Quartet No. 4, first and fifth movements',
          'Béla Bartók, Mikrokosmos Book VI: Six Dances in Bulgarian Rhythm (No. 148–153, selections)',
          'Field recording: Hungarian parlando-rubato song from the Bartók–Kodály collections (Hungaroton archival series)',
        ],
        assignments: [
          'Chart the fugal entries of Music for Strings, first movement, by pitch level and show the A–E♭ pole relationship',
          'Find one clearly symmetrical passage in the Fourth Quartet and identify its axis; then find the same cell content used asymmetrically elsewhere',
          'Write 300 words evaluating one Lendvai claim (axis substitution or golden section) against the score: what supports it, what resists it',
        ],
      },
      {
        id: 'week-10',
        week: 10,
        title: 'Neoclassicism and Extended Tonality: Hindemith and Prokofiev',
        objectives: [
          'Define neoclassicism and extended tonality as retentions of centricity without common-practice syntax',
          'Summarize Hindemith’s systematic approach: interval roots, Series 1 and 2, and harmonic fluctuation',
          'Analyze Prokofiev’s wrong-note technique and chromatic third-relations within functional frames',
        ],
        content: [
          'Not every composer left tonality; many rebuilt it. Neoclassicism — the interwar stance announced by Stravinsky’s Pulcinella (1920) and the Octet (1923), and by Busoni’s call for a ‘young classicality’ — revives 18th-century genres, textures and gestures while filtering them through modern harmony: Stravinsky said his Octet was ‘not an emotive work but a musical object’. Extended tonality is the broader technical umbrella: music that keeps a pitch center and even triadic sonorities, but reaches them by non-functional routes — chromatic third relations, modal mixture pushed to saturation, quartal substitutes for dominants, and cadences by stepwise bass descent rather than V–I. The result is a spectrum, from Ravel and Poulenc’s perfumed diatonicism to Hindemith’s engineered chromaticism, all answering tonality’s crisis with reform rather than revolution.',
          'Hindemith is the great systematizer. His treatise The Craft of Musical Composition (1937) ranks the twelve chromatic notes by acoustic kinship to a tonic (Series 1: from the tonic outward through the fifth, fourth, and so on, ending at the tritone) and ranks intervals by harmonic strength (Series 2: fifth strongest, then fourth, thirds, sixths, seconds, sevenths, with the tritone apart), assigning every chord a root from its strongest interval. Composition then manages harmonic fluctuation — the planned rise and fall of chordal tension across a phrase — and melodic degree-progression toward cadences that land on fifth-related roots. Hear it in Mathis der Maler (1934) and the piano cycle Ludus Tonalis (1942), whose twelve fugues traverse Series 1 from C outward and whose postlude is the prelude upside down and backward: chromatic total, clear centers, no functional dominants.',
          'Prokofiev, by contrast, systematized nothing and codified a manner: the ‘wrong-note’ style, where a functional frame is intact but one voice steps a semitone aside — the gavotte of the Classical Symphony (1917) walks its D-major tune through unprepared side-slips, and the March from The Love for Three Oranges harmonizes C with B major neighbors. His five self-described lines (classical, modern, toccata or motoric, lyrical, grotesque) map his surface types, but the harmonic signature is chromatic third-relation and instant semitonal shift: whole passages transposed up or down a half step as a formal event, as in the Seventh Piano Sonata’s finale, a 7/8 toccata in B♭ whose ostinato hammers the ‘wrong’ notes into a new consonance. For analysis, identify the underlying diatonic frame first, then catalog the displacements — Prokofiev almost always makes the frame audible enough to measure the wrongness against.',
        ],
        listening: [
          'Igor Stravinsky, Octet for Winds, first movement',
          'Paul Hindemith, Symphony Mathis der Maler, first movement (Engelkonzert)',
          'Paul Hindemith, Ludus Tonalis: Praeludium and Fuga in C',
          'Sergei Prokofiev, Symphony No. 1 in D major Op. 25 (Classical), Gavotte; and Piano Sonata No. 7 Op. 83, Precipitato',
        ],
        assignments: [
          'Using Hindemith’s Series 2, determine the root and tension ranking of eight given chords, and order them into a rising-then-falling fluctuation curve',
          'Annotate the Classical Symphony Gavotte: mark the diatonic frame, every wrong-note displacement, and the chromatic third-relations in the trio',
          'Compose an eight-bar march in wrong-note style: a clear diatonic tune with systematic semitonal side-slips in one accompanying voice',
        ],
      },
      {
        id: 'week-11',
        week: 11,
        title: 'Rhythm and Meter Innovations',
        objectives: [
          'Define and notate changing meters, additive/aksak meters, and polymeter',
          'Analyze ostinato-plus-displacement rhythm in Stravinsky and Bartók',
          'Describe Messiaen’s added values and non-retrogradable rhythms and metric process in early minimalism',
        ],
        content: [
          'When harmony stopped carrying syntax, rhythm took over much of the load, and the 20th century rebuilt meter from the ground up. Three basic expansions: changing meter, where the notated measure length shifts bar to bar — the Danse sacrale of the Rite alternates 3/16, 5/16, 2/8 and kin so fast that the bar line becomes an accent mark; additive or aksak meter, where the beat itself is uneven, grouped from unequal cells such as 2+2+3 (a Bulgarian 7/8) or the 2+3+3 of Blue Rondo à la Turk — Bartók’s ‘Bulgarian rhythm’ pieces and Balkan folk practice are the source repertoire; and polymeter/polyrhythm, simultaneous conflicting periodicities, from the hemiola-saturated layers of Brahms to Ives’s bands colliding in Putnam’s Camp and Nancarrow’s player-piano canons at ratios like 3:4 and even irrational tempo relations.',
          'Stravinsky’s deepest rhythmic device is subtler than mixed meter: fixed ostinato plus movable accent. In the Danse des adolescentes the chord pattern is rigidly even, but sforzando accents fall unpredictably (the famous pattern of the opening: accents on 9, 11, 13 of the eighth-note stream), so the listener’s entrained pulse is contradicted without being destroyed — expectation itself becomes the material. Bartók’s aksak works make unevenness the norm until a straight 2+2 sounds like a disruption. Messiaen theorized the next step in The Technique of My Musical Language (1944): the added value (an extra sixteenth or dot that makes a rhythm ‘limp’ deliciously), non-retrogradable rhythms (palindromes like ♪♩♪ that read the same backward, which he prized as emblems of eternity), and rhythm treated as an independent structure — the Liturgie de cristal from the Quartet for the End of Time cycles a 17-value rhythmic pattern against a 29-chord harmonic pattern in the piano, an isorhythmic machine that would take hours to realign.',
          'After 1960, American minimalism made rhythmic process the whole form. Steve Reich’s phasing — two identical patterns, one gradually accelerating out of and back into alignment, as in Piano Phase (1967) — generates all its melodic content from one 12-note module and the interference patterns between its displaced copies; Clapping Music (1972) achieves the same by discrete rotation instead of continuous drift. These techniques knot the course’s threads together: like Stravinsky’s blocks, the material is fixed and the process is the form; like the isorhythm of Machaut you met in music history, structure lives in the rhythmic dimension. For performers, the practical payoff of this week is concrete: learn to conduct and count 2+2+3 and 3+3+2 groupings, to keep an internal grid against displaced accents, and to read changing meters by beat-unit rather than by bar.',
        ],
        listening: [
          'Igor Stravinsky, The Rite of Spring: Danse sacrale',
          'Olivier Messiaen, Quartet for the End of Time: I. Liturgie de cristal and VI. Danse de la fureur, pour les sept trompettes',
          'Steve Reich, Piano Phase and Clapping Music',
          'Conlon Nancarrow, Study for Player Piano No. 21 (Canon X)',
        ],
        assignments: [
          'Transcribe the accent pattern of the first 16 bars of the Danse des adolescentes over its even eighth-note grid',
          'Compose and perform (clapping or on your instrument) an eight-bar aksak melody in 2+2+3, then re-bar the same pitches in 3+2+2 and describe the difference',
          'Chart the first realignment cycle of Clapping Music: write out all 12 rotations and mark which produce maximal rhythmic dissonance',
        ],
      },
      {
        id: 'week-12',
        week: 12,
        title: 'Analysis Project Presentations',
        objectives: [
          'Present a 12–15 minute analysis of a post-1900 work or movement using tools from the course',
          'Match analytical apparatus to repertoire and connect every technical claim to sound',
          'Give and receive structured critique of analytical arguments',
        ],
        content: [
          'The analysis project is the course’s summative act of independent hearing: each student presents a post-1900 work or movement, chosen in consultation during Week 9, analyzed with whatever combination of the course toolkit the music demands. The matching of tool to repertoire is itself graded. Collection maps suit Debussy, Scriabin and early Stravinsky; set-class analysis suits free atonality; matrices and row-deployment charts suit the Second Viennese School; block maps, symmetry axes and rhythmic grids suit Stravinsky, Bartók and the minimalists; Hindemith’s fluctuation or wrong-note framing suits the extended-tonal repertoire. A presentation that forces set theory onto Poulenc, or hunts for rows in Ravel, fails the matching test regardless of its technical accuracy.',
          'The required arc mirrors professional conference practice: a hook (play the passage your analysis will explain), a claim stated in one sentence (‘the movement’s form is a single octatonic-to-diatonic resolution enacted three times at rising transpositions’), evidence presented with score and sound together, and a close that returns to the opening passage with the listener’s hearing changed. Every technical label must be cashed out in sound — the working rule from Week 6 stands: an analysis is a claim about hearing, defended with notation. Handouts carry the matrix, map or chart; slides carry only what the audience must see while listening; and the strict time limit is part of the assignment, since conference sessions and pre-concert talks do not grant extensions.',
          'Peer critique follows a fixed protocol: each respondent offers one strength, one challenge to the central claim, and one question, in that order, and the presenter answers the challenge on the spot — rehearsal for thesis defenses and Q&A to come. Strong challenges name counter-evidence (‘bar 34 uses the collection your claim says has been abandoned’), not taste. Written feedback from the instructor scores four axes: accuracy of the technical work, fit of tool to repertoire, audibility of claims, and clarity of delivery. Presentations from past cohorts that repay study include readings of Berg’s Sonata Op. 1, Ligeti’s Musica ricercata, Shostakovich’s Fugue in A major Op. 87 No. 7, and Unsuk Chin’s Piano Etude No. 1 (in C).',
        ],
        listening: [
          'The complete work each classmate is presenting, heard once before its presentation day (list circulated in Week 10)',
          'Your own project work in at least two recordings, compared for tempo and articulation decisions that affect your claims',
        ],
        assignments: [
          'Deliver the 12–15 minute presentation with a one-page analytical handout',
          'Submit the written version of the analysis (1,500–2,000 words with annotated score excerpts)',
          'Provide written peer responses (strength, challenge, question) for three assigned classmates',
        ],
      },
      {
        id: 'week-13',
        week: 13,
        title: 'Synthesis: Composing Brief Studies in Three 20th-Century Idioms',
        objectives: [
          'Compose three short studies (8–16 bars each) in three distinct 20th-century idioms studied this semester',
          'Demonstrate each idiom’s defining constraints from the inside: collection, row, or rhythmic process',
          'Reflect on the course arc: the several viable answers to the collapse of common-practice syntax',
        ],
        content: [
          'Analysis proves you can hear a system; composition proves you understand its constraints from the inside, and the final project asks for three miniatures, each in a different idiom drawn from the semester. Menu: a Debussian collection piece (at least two collections, one shift as the formal hinge, planing somewhere); a free-atonal cell miniature (one governing trichord or tetrachord, chromatic circulation, no triadic verticals); a strict twelve-tone statement (a designed row, at least three forms deployed, matrix attached); a Stravinskian block study (three blocks, octatonic–diatonic interplay, at least one displaced-accent ostinato); a Bartókian symmetry study (an explicit axis, folk-modal melody, an aksak meter); or a Reichian process piece (one module, a written process, the process audible). Each study is 8–16 bars — long enough for the idiom to declare itself, short enough to be excellent.',
          'The craft standard is idiomatic fidelity, not pastiche perfume. Every study is submitted with a 100-word technical note naming the constraint set and pointing to where the score honors it: which collections and where they shift, which row forms in which voices, which block returns vary what. The most common failure modes, drawn from years of these projects, are worth naming in advance: the ‘atonal’ study that secretly noodles in a diminished scale; the tone row treated as a melody harmonized with triads (legitimate for Berg, but then say so and engineer the row accordingly); the block piece whose blocks bleed into transitions; the process piece whose process cannot be heard. Playable matters too — at least one study must be performable by you or classmates, and Week 13 class time is a reading session where the studies are sight-read and recorded.',
          'The reading session doubles as the course’s closing argument. Heard side by side, the studies demonstrate that the ‘collapse of tonality’ produced not one successor but an ecosystem of syntaxes — collection-based color, contextual atonality, serial order, rhythmic process, reformed centricity — each internally consistent, each learnable, each still alive in the music being written now (spectralism grows from the acoustic scale, post-minimalism from process, film scoring from extended tonality, to gesture at the next course in the sequence). The final reflection asks you to connect one idiom to your own performing repertoire: name a 20th- or 21st-century work you play or sing, identify its primary syntax with course vocabulary, and state one interpretive decision this semester’s theory now informs.',
        ],
        listening: [
          'György Ligeti, Musica ricercata, Nos. 1, 2 and 7 (constraint-driven composition as a model)',
          'Unsuk Chin, Piano Etude No. 1 (in C)',
          'Arvo Pärt, Cantus in Memoriam Benjamin Britten (a single audible process)',
        ],
        assignments: [
          'Submit three studies in three distinct idioms, each with a 100-word technical note (and a matrix for the twelve-tone study)',
          'Participate in the reading session, performing in at least one classmate’s study',
          'Write the final reflection (400 words) connecting one course idiom to a work in your own repertoire',
        ],
      },
    ],
  },
]
