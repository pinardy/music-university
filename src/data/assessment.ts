/**
 * Rubrics and worked examples.
 *
 * The curriculum sets 969 assignments and 1,132 objectives and, until now,
 * said nothing about how any of it would be judged or what a good answer looks
 * like. Both gaps are filled here rather than in the course data, because
 * assessment repeats: a harmonic analysis is marked the same way in Year 1 and
 * Year 3, so rubrics are keyed by the kind of work and courses point at them.
 */

export type RubricId =
  | 'analysis'
  | 'jury'
  | 'aural-exam'
  | 'composition-portfolio'
  | 'research-paper'
  | 'keyboard-proficiency'
  | 'ensemble-participation'
  | 'teaching-practicum'

export interface Criterion {
  name: string
  /** What is being judged. */
  description: string
  /** Descriptors from strongest to weakest. Four bands, deliberately. */
  levels: [string, string, string, string]
}

export interface Rubric {
  id: RubricId
  title: string
  /** What this kind of assessment is actually testing. */
  purpose: string
  criteria: Criterion[]
}

export const LEVEL_LABELS = ['Distinction', 'Merit', 'Pass', 'Not yet'] as const

export const rubrics: Rubric[] = [
  {
    id: 'analysis',
    title: 'Written analysis',
    purpose:
      'Whether you can support a claim about how a piece works with evidence from the score, in language a reader can check.',
    criteria: [
      {
        name: 'Accuracy',
        description: 'Are the observations correct — keys, chords, cadences, formal boundaries?',
        levels: [
          'Everything checks out, including the ambiguous moments, which are identified as ambiguous.',
          'Substantially correct; any errors are incidental and do not affect the argument.',
          'Broadly correct, with errors that a careful re-reading would have caught.',
          'Errors frequent enough that the analysis cannot be relied on.',
        ],
      },
      {
        name: 'Evidence',
        description: 'Are claims tied to specific bars rather than asserted?',
        levels: [
          'Every claim cites bar numbers; the reader can verify each one without hunting.',
          'Claims are generally cited; a few rest on the reader taking your word.',
          'Some citation, but the argument often floats free of the score.',
          'Assertion without location.',
        ],
      },
      {
        name: 'Interpretation',
        description: 'Does the analysis explain anything, or only label?',
        levels: [
          'Labels are a starting point; the writing explains what the features do and why they matter here.',
          'Some interpretation beyond labelling, developed unevenly.',
          'Mostly labelling with occasional comment.',
          'A list of chords with no argument.',
        ],
      },
      {
        name: 'Presentation',
        description: 'Terminology, prose and any score annotation.',
        levels: [
          'Terminology exact, prose economical, annotations legible and consistent.',
          'Clear throughout, with minor lapses in terminology or layout.',
          'Understandable but loose in terminology or untidy in presentation.',
          'Unclear enough to impede the reader.',
        ],
      },
    ],
  },
  {
    id: 'jury',
    title: 'Performance jury or recital',
    purpose:
      'Whether the preparation, the playing and the recovery hold up under performance conditions, in front of people, once.',
    criteria: [
      {
        name: 'Technical control',
        description: 'Accuracy, intonation, tone and evenness under pressure.',
        levels: [
          'Secure throughout, including in the passages that are genuinely hard.',
          'Secure in the main, with lapses that do not derail the performance.',
          'Adequate, with technical limits audibly shaping what is attempted.',
          'Insecurity frequent enough to interrupt the music.',
        ],
      },
      {
        name: 'Musical shaping',
        description: 'Phrasing, pacing, dynamic range and the sense of a whole.',
        levels: [
          'A convincing shape at both phrase and movement level, sustained to the end.',
          'Well shaped locally; the longer arc is less consistently held.',
          'Shaping present but conventional or intermittent.',
          'Notes delivered without direction.',
        ],
      },
      {
        name: 'Stylistic understanding',
        description: 'Do the choices suit the idiom and the period?',
        levels: [
          'Choices are idiomatic and can be defended from the score or the sources.',
          'Broadly stylish, with a few decisions that sit oddly.',
          'Generic delivery that would suit almost any repertoire.',
          'Choices at odds with the style.',
        ],
      },
      {
        name: 'Stage conduct and recovery',
        description: 'Entrance, bearing, and what happens when something goes wrong.',
        levels: [
          'Professional throughout; any slip is invisible because the performance continues.',
          'Composed, with minor visible reaction to a problem.',
          'Nerves visible and affecting the presentation.',
          'A slip stops or visibly derails the performance.',
        ],
      },
    ],
  },
  {
    id: 'aural-exam',
    title: 'Aural examination',
    purpose:
      'Whether the ear works in real time and under a clock, which is a different skill from working it out afterwards.',
    criteria: [
      {
        name: 'Melodic dictation',
        description: 'Pitch and contour captured accurately within the playings allowed.',
        levels: [
          'Complete and accurate, including chromatic inflections.',
          'Accurate in outline with isolated pitch errors.',
          'Contour correct, detail unreliable.',
          'Outline not captured.',
        ],
      },
      {
        name: 'Rhythmic dictation',
        description: 'Durations, beaming and metric placement.',
        levels: [
          'Exact, including syncopation and subdivision.',
          'Accurate with minor notational slips.',
          'Beat-level accuracy, subdivisions approximate.',
          'Metric placement lost.',
        ],
      },
      {
        name: 'Harmonic hearing',
        description: 'Chord quality, function and cadence identification.',
        levels: [
          'Function and inversion identified reliably, including chromatic chords.',
          'Diatonic function reliable; chromatic harmony less certain.',
          'Primary triads and cadence types identified.',
          'Harmonic function not yet audible.',
        ],
      },
      {
        name: 'Sight-singing',
        description: 'Pitch accuracy, tuning and above all continuity.',
        levels: [
          'Accurate and musical, with the pulse held throughout.',
          'Accurate with brief hesitation.',
          'Pulse maintained; pitch drifts.',
          'Stops to correct, losing the line.',
        ],
      },
    ],
  },
  {
    id: 'composition-portfolio',
    title: 'Composition portfolio',
    purpose:
      'Whether you can carry an idea to a finished, performable piece — and whether players could rehearse it without you in the room.',
    criteria: [
      {
        name: 'Musical invention',
        description: 'The quality of the material and what is done with it.',
        levels: [
          'Distinctive material developed with real consequence.',
          'Solid material, developed conventionally but effectively.',
          'Serviceable material with limited development.',
          'Material changes constantly without going anywhere.',
        ],
      },
      {
        name: 'Craft',
        description: 'Idiomatic writing, texture, pacing and formal proportion.',
        levels: [
          'Idiomatic throughout; proportions convincing at full length.',
          'Largely idiomatic; proportions falter in places.',
          'Playable, with passages that fight the instrument or the clock.',
          'Writing that players cannot realistically execute.',
        ],
      },
      {
        name: 'Notation and materials',
        description: 'Score, parts, performance notes and page turns.',
        levels: [
          'A complete package a distant ensemble could prepare unaided.',
          'Clear, with small ambiguities a rehearsal would resolve.',
          'Readable but requiring the composer present.',
          'Materials that would stall a rehearsal.',
        ],
      },
      {
        name: 'Response to rehearsal',
        description: 'What changed after hearing it, and why.',
        levels: [
          'Substantive revision addressing what the workshop actually revealed.',
          'Meaningful revision, though some issues were left.',
          'Cosmetic changes only.',
          'No evidence of revision.',
        ],
      },
    ],
  },
  {
    id: 'research-paper',
    title: 'Research paper',
    purpose:
      'Whether you can find evidence, weigh it, and be honest about what it does not settle.',
    criteria: [
      {
        name: 'Question',
        description: 'Is there an answerable question, or only a topic?',
        levels: [
          'A focused question the paper genuinely answers.',
          'A clear question, partly answered.',
          'A topic with an implied question.',
          'No question discernible.',
        ],
      },
      {
        name: 'Sources',
        description: 'Range, quality and appropriate use of primary and secondary material.',
        levels: [
          'Primary sources used where they exist; scholarship read rather than summarised.',
          'Good secondary reading with some primary material.',
          'Reliance on general reference works.',
          'Sources thin or unsuitable.',
        ],
      },
      {
        name: 'Argument',
        description: 'Does evidence support the claims, and are limits acknowledged?',
        levels: [
          'Argument follows from evidence; thin evidence is named as thin.',
          'Generally well supported, with occasional overreach.',
          'Assertions outrun the evidence in places.',
          'Conclusions unsupported.',
        ],
      },
      {
        name: 'Citation',
        description: 'Consistency and completeness, including scores and recordings.',
        levels: [
          'Complete and consistent; editions and recordings cited precisely.',
          'Consistent with minor omissions.',
          'Present but inconsistent.',
          'Inadequate to trace the sources.',
        ],
      },
    ],
  },
  {
    id: 'keyboard-proficiency',
    title: 'Keyboard proficiency',
    purpose:
      'Whether the routines are reliable on demand, in keys you did not choose, under mild pressure.',
    criteria: [
      {
        name: 'Scales and cadence patterns',
        description: 'Accuracy, fingering and evenness in keys drawn at random.',
        levels: [
          'Fluent in all required keys with correct fingering.',
          'Fluent in most keys; a few need thought.',
          'Accurate but slow and effortful.',
          'Not reliable across the required keys.',
        ],
      },
      {
        name: 'Sight-reading',
        description: 'Continuity, pulse and sensible simplification.',
        levels: [
          'Steady pulse maintained; simplifies intelligently where needed.',
          'Mostly continuous with brief breaks.',
          'Frequent stops but recovers.',
          'Cannot sustain a reading.',
        ],
      },
      {
        name: 'Harmonisation and realisation',
        description: 'Chord symbols, figured bass and harmonising a melody at sight.',
        levels: [
          'Idiomatic realisations with smooth voice leading, at tempo.',
          'Correct harmony, voice leading occasionally awkward.',
          'Plausible harmony produced slowly.',
          'Cannot yet harmonise unseen material.',
        ],
      },
    ],
  },
  {
    id: 'ensemble-participation',
    title: 'Ensemble participation',
    purpose:
      'Whether you are the colleague a conductor wants in the room — which is mostly about what you did before the rehearsal.',
    criteria: [
      {
        name: 'Preparation',
        description: 'Part learned and marked before the first rehearsal.',
        levels: [
          'Fully prepared and marked; cues written in at every long rest.',
          'Prepared, with marking completed during the cycle.',
          'Learned late; rehearsal time spent on personal problems.',
          'Consistently underprepared.',
        ],
      },
      {
        name: 'Ensemble skill',
        description: 'Watching, blending, tuning and adjusting to role.',
        levels: [
          'Watches continuously, matches the section, adjusts dynamic to function.',
          'Generally attentive with lapses in busy passages.',
          'Plays accurately but largely independently of the section.',
          'Does not adjust to the ensemble.',
        ],
      },
      {
        name: 'Professional conduct',
        description: 'Punctuality, silence, marking discipline, response to direction.',
        levels: [
          'Exemplary, and improves the working atmosphere around them.',
          'Reliable throughout.',
          'Occasional lapses in punctuality or focus.',
          'Conduct that costs the ensemble time.',
        ],
      },
    ],
  },
  {
    id: 'teaching-practicum',
    title: 'Teaching practicum',
    purpose:
      'Whether a student learned something, which is a different question from whether the lesson went smoothly.',
    criteria: [
      {
        name: 'Planning',
        description: 'Objectives, sequencing and material appropriate to the learner.',
        levels: [
          'Clear objectives, sensibly sequenced, pitched accurately to the student.',
          'Sound plan, pitched slightly high or low.',
          'A plan followed regardless of what the student needed.',
          'No discernible plan.',
        ],
      },
      {
        name: 'Diagnosis',
        description: 'Identifying the actual cause of a difficulty.',
        levels: [
          'Isolates the real cause and addresses that, not the symptom.',
          'Usually accurate; occasionally treats the symptom.',
          'Notices problems but misattributes them.',
          'Problems go unnoticed.',
        ],
      },
      {
        name: 'Feedback',
        description: 'Specific, actionable and delivered so the student can use it.',
        levels: [
          'Concrete, prioritised, and checked for understanding.',
          'Specific but not always prioritised.',
          'General encouragement with little to act on.',
          'Vague or discouraging.',
        ],
      },
    ],
  },
]

/** Which rubric applies to which course. */
export const rubricsByCourse: Record<string, RubricId[]> = {
  aps101: ['jury'], aps102: ['jury'], aps201: ['jury'], aps202: ['jury'],
  aps301: ['jury'], aps302: ['jury'], aps401: ['jury'], aps402: ['jury'],
  cnd401: ['jury', 'ensemble-participation'],
  mut101: ['analysis'], mut102: ['analysis'], mut201: ['analysis'], mut202: ['analysis'],
  mut301: ['analysis'], mut302: ['analysis'],
  aur101: ['aural-exam'], aur102: ['aural-exam'], aur201: ['aural-exam'],
  key101: ['keyboard-proficiency'], key102: ['keyboard-proficiency'],
  ens101: ['ensemble-participation'], ens102: ['ensemble-participation'],
  ens401: ['ensemble-participation'], ens402: ['ensemble-participation'],
  chm401: ['ensemble-participation'], chm402: ['ensemble-participation'],
  muh202: ['research-paper', 'analysis'], muh301: ['research-paper', 'analysis'],
  com302: ['composition-portfolio'],
  ctx302: ['research-paper'],
  tec301: ['composition-portfolio'],
  ped402: ['teaching-practicum'],
  cap402: ['research-paper'],
}

// ── Worked examples ─────────────────────────────────────────────────────────

export interface ExampleSection {
  /** The model answer. */
  text: string
  /** Why it is written that way — the part a rubric cannot convey. */
  note?: string
}

export interface WorkedExample {
  id: string
  title: string
  rubric: RubricId
  /** The assignment this is answering. */
  brief: string
  sections: ExampleSection[]
  /** What separates this from a weaker answer. */
  whatMakesItWork: string[]
}

export const workedExamples: WorkedExample[] = [
  {
    id: 'cadence-analysis',
    title: 'Analysing a cadence in context',
    rubric: 'analysis',
    brief:
      'Identify the cadence at the end of the first phrase and explain what it contributes to the phrase structure. About 150 words.',
    sections: [
      {
        text: 'The phrase closes with a half cadence on V in bar 8, approached by ii6 in bar 7.',
        note: 'Location and chord first. A reader can verify this before reading anything interpretive.',
      },
      {
        text: 'Because the bass rises by step from scale degree 4 to 5 across the barline, the arrival is smoother than the same cadence would be with a leaping bass, and the soprano’s suspension over the barline delays the sense of arrival by a beat.',
        note: 'The observation explains a difference the listener can hear, rather than restating the label.',
      },
      {
        text: 'The effect is to leave the phrase open: the antecedent asks a question that the consequent answers with a perfect authentic cadence in bar 16, producing a parallel period.',
        note: 'Connects the local event to the structure. This is the step weak answers omit.',
      },
    ],
    whatMakesItWork: [
      'Every claim carries a bar number, so nothing has to be taken on trust.',
      'It explains what the harmony does, not merely what it is called.',
      'It scales up: one cadence is used to establish the phrase structure of sixteen bars.',
      'It is short. Length is not evidence of understanding.',
    ],
  },
  {
    id: 'listening-response',
    title: 'A listening response that argues something',
    rubric: 'analysis',
    brief:
      'Compare two recordings of the same work and account for the difference. About 200 words.',
    sections: [
      {
        text: 'Casals (1936) takes the Prélude at roughly 52 to the bar; Ma (1983) is nearer 63, and the difference is not merely speed.',
        note: 'Anchored in something measurable. "Casals is more romantic" is not checkable; a tempo is.',
      },
      {
        text: 'Casals separates the arpeggiated figures with audible bow changes and lets the tempo yield at each harmonic arrival — bars 22 and 31 are noticeably broadened. Ma sustains a more even bow and keeps the pulse steadier, so the harmonic rhythm carries the shape instead.',
        note: 'Two specific bars. The claim becomes falsifiable, which is what makes it worth making.',
      },
      {
        text: 'Neither is more faithful to the score, which specifies neither tempo nor rubato. The difference reflects changing assumptions about how much interpretive freedom a Baroque text invites, and Casals is closer to the performing conventions of his own century than to Bach’s.',
        note: 'Declines the easy verdict and names what actually differs — the assumptions, not the fidelity.',
      },
    ],
    whatMakesItWork: [
      'Comparison is grounded in specific, checkable observations.',
      'It resists ranking the performances, which is rarely the interesting question.',
      'It names what the score does and does not determine.',
    ],
  },
  {
    id: 'practice-log',
    title: 'A practice log entry worth keeping',
    rubric: 'jury',
    brief: 'Record one practice session in the goal–method–evaluation format.',
    sections: [
      {
        text: 'Goal: play bars 45–52 at 92 bpm with even semiquavers and no accent on the string crossing.',
        note: 'Specific, and stated before the session rather than after. "Work on the hard bit" cannot be evaluated.',
      },
      {
        text: 'Method: 20 minutes. Rhythmic variants (dotted, reverse-dotted) at 60; then straight at 60, 72, 80, 92, four correct repetitions required before advancing.',
        note: 'The method is reproducible and has a criterion for moving on, so progress is not a matter of feel.',
      },
      {
        text: 'Evaluation: clean to 80. At 92 the crossing accent returns, and the recording shows the right elbow rising just before it. Tomorrow: isolate the crossing alone, elbow level, before returning to tempo.',
        note: 'Names a cause, not just a failure, and converts it into the next session’s goal.',
      },
    ],
    whatMakesItWork: [
      'The goal is measurable, so the evaluation can be honest.',
      'The diagnosis identifies a physical cause rather than recording dissatisfaction.',
      'It ends with the next action, which is what makes a log compound over a semester.',
    ],
  },
]

export const rubricsById = new Map(rubrics.map((r) => [r.id, r]))
