/**
 * Working definitions for the vocabulary the lessons actually use.
 *
 * The terms were chosen by counting occurrences across the ~95,000 words of
 * lesson prose rather than from a general music dictionary, so this defines
 * what the curriculum says and not what a glossary is usually expected to
 * contain. Definitions are short on purpose: this is for a reader who has hit
 * a word mid-paragraph, not a substitute for the lesson.
 */

export type GlossaryCategory =
  | 'harmony'
  | 'form'
  | 'rhythm'
  | 'aural'
  | 'performance'
  | 'history'
  | 'contexts'
  | 'technology'
  | 'profession'

export const glossaryCategories: Record<GlossaryCategory, string> = {
  harmony: 'Harmony & counterpoint',
  form: 'Form & analysis',
  rhythm: 'Rhythm & metre',
  aural: 'Aural skills',
  performance: 'Performance & ensemble',
  history: 'Historical style',
  contexts: 'Musical contexts',
  technology: 'Technology & acoustics',
  profession: 'The profession',
}

export interface Term {
  term: string
  /** Alternative spellings or names a reader might search for. */
  aka?: string[]
  category: GlossaryCategory
  definition: string
  /** Other terms worth reading alongside this one. */
  see?: string[]
}

export const glossary: Term[] = [
  // ── Harmony & counterpoint ────────────────────────────────────────────────
  {
    term: 'Cadence',
    category: 'harmony',
    definition:
      'A conventional harmonic formula that punctuates a phrase, functioning roughly as a comma or full stop does in prose. The authentic cadence (V–I) closes firmly, the plagal (IV–I) more softly, the half cadence ends on V and sounds like a question, and the deceptive (V–vi) promises closure and withholds it.',
    see: ['Phrase', 'Dominant', 'Tonic'],
  },
  {
    term: 'Tonic',
    category: 'harmony',
    definition:
      'The note and chord a passage treats as home. Nearly everything in tonal music is heard in relation to it: departure creates tension, return creates resolution.',
    see: ['Dominant', 'Cadence', 'Modulation'],
  },
  {
    term: 'Dominant',
    category: 'harmony',
    definition:
      'The chord built on the fifth degree of the scale. Its leading tone pulls up to the tonic and, when a seventh is added, the resulting tritone makes the pull stronger still — which is why V–I is the strongest progression in the system.',
    see: ['Tonic', 'Cadence', 'Secondary dominant'],
  },
  {
    term: 'Triad',
    category: 'harmony',
    definition:
      'A three-note chord built by stacking two thirds. Its quality — major, minor, diminished or augmented — depends on the size of each third.',
    see: ['Inversion', 'Seventh chord'],
  },
  {
    term: 'Seventh chord',
    category: 'harmony',
    definition:
      'A triad with a fourth note a seventh above the root. The dominant seventh is the most common and the most directional, because it contains a tritone that wants to resolve.',
    see: ['Triad', 'Dominant'],
  },
  {
    term: 'Inversion',
    category: 'harmony',
    definition:
      'Two related ideas. A chord is inverted when a note other than the root is in the bass. An interval is inverted when its lower note is moved up an octave, turning a third into a sixth, a fifth into a fourth.',
    see: ['Triad', 'Figured bass', 'Interval'],
  },
  {
    term: 'Interval',
    category: 'harmony',
    definition:
      'The distance between two pitches, named by the number of scale steps it spans and by quality: perfect, major, minor, augmented or diminished.',
    see: ['Inversion', 'Harmonic series'],
  },
  {
    term: 'Figured bass',
    aka: ['Thoroughbass', 'Continuo figures'],
    category: 'harmony',
    definition:
      'Baroque shorthand in which numerals under a written bass line indicate the intervals to be played above it, leaving the voicing to the performer. The realisation was improvised, so no two performances were identical.',
    see: ['Continuo', 'Inversion'],
  },
  {
    term: 'Counterpoint',
    category: 'harmony',
    definition:
      'The craft of combining independent melodic lines so that each makes sense on its own and all make sense together. Species counterpoint teaches it in graded stages of rhythmic complexity.',
    see: ['Polyphony', 'Fugue', 'Species counterpoint'],
  },
  {
    term: 'Species counterpoint',
    category: 'harmony',
    definition:
      'A graded method, codified by Fux in 1725, that introduces contrapuntal writing one rhythmic complication at a time — note against note, then two, four, syncopated, and finally florid.',
    see: ['Counterpoint'],
  },
  {
    term: 'Voice leading',
    category: 'harmony',
    definition:
      'How individual parts move from one chord to the next. The governing preferences are to keep common tones stationary and to move everything else the shortest distance available.',
    see: ['Counterpoint', 'Cadence'],
  },
  {
    term: 'Suspension',
    category: 'harmony',
    definition:
      'A note held over from the previous chord so that it becomes a dissonance, then resolved downward by step. Preparation, suspension, resolution — the three-stage shape is what makes it audible as tension.',
    see: ['Voice leading', 'Retardation'],
  },
  {
    term: 'Retardation',
    category: 'harmony',
    definition: 'A suspension that resolves upward rather than downward.',
    see: ['Suspension'],
  },
  {
    term: 'Modulation',
    category: 'harmony',
    definition:
      'A change of key established firmly enough to be heard as a new home, usually confirmed by a cadence. Briefer visits that do not settle are tonicizations.',
    see: ['Tonicization', 'Tonic'],
  },
  {
    term: 'Tonicization',
    category: 'harmony',
    definition:
      'Treating a chord other than the tonic as a momentary home, typically by preceding it with its own dominant, without committing to a full change of key.',
    see: ['Modulation', 'Secondary dominant'],
  },
  {
    term: 'Secondary dominant',
    aka: ['Applied dominant'],
    category: 'harmony',
    definition:
      'A dominant chord borrowed from another key and aimed at a chord within the current one — V/V, V/vi and so on. The commonest way of colouring diatonic harmony without leaving it.',
    see: ['Tonicization', 'Dominant'],
  },
  {
    term: 'Mode mixture',
    aka: ['Modal mixture', 'Borrowed chords'],
    category: 'harmony',
    definition:
      'Borrowing chords from the parallel major or minor — a minor iv in a major key, a major I at the end of a minor piece. The parallel relationship is what makes the colour audible.',
    see: ['Neapolitan sixth', 'Modulation'],
  },
  {
    term: 'Neapolitan sixth',
    category: 'harmony',
    definition:
      'A major triad built on the flattened second degree, almost always in first inversion, used as a strong predominant. Its flavour comes from the semitone above the tonic.',
    see: ['Mode mixture', 'Augmented sixth'],
  },
  {
    term: 'Augmented sixth',
    category: 'harmony',
    definition:
      'A chromatic predominant containing the interval of an augmented sixth, which expands outward to the dominant. The Italian, French and German varieties differ only in the note added.',
    see: ['Neapolitan sixth', 'Dominant'],
  },
  {
    term: 'Pedal point',
    category: 'harmony',
    definition:
      'A sustained note, usually in the bass, held while the harmony above it changes and ceases to agree with it. Tonic and dominant pedals are the common cases.',
  },
  {
    term: 'Sequence',
    category: 'harmony',
    definition:
      'A pattern repeated at successively higher or lower pitch levels. The descending-fifths sequence is the most common in tonal music and the reason so much Baroque writing feels driven.',
    see: ['Voice leading'],
  },
  {
    term: 'Non-chord tone',
    aka: ['Embellishing tone', 'NCT'],
    category: 'harmony',
    definition:
      'A note that does not belong to the prevailing harmony — passing tone, neighbour, appoggiatura, escape tone, anticipation. Classified by how it is approached and left.',
    see: ['Appoggiatura', 'Suspension'],
  },
  {
    term: 'Appoggiatura',
    category: 'harmony',
    definition:
      'A dissonance approached by leap and resolved by step, usually falling on a strong beat so that the resolution is heard as a relaxation.',
    see: ['Non-chord tone'],
  },
  {
    term: 'Set theory',
    aka: ['Pitch-class set theory'],
    category: 'harmony',
    definition:
      'The analytical apparatus for post-tonal music: pitches are reduced to twelve pitch classes and collections are compared by normal form, prime form and interval content rather than by key.',
    see: ['Prime form', 'Interval vector', 'Twelve-tone'],
  },
  {
    term: 'Prime form',
    category: 'harmony',
    definition:
      'The most compact, transposition- and inversion-normalised representation of a pitch-class set, used so that related collections can be recognised as the same object.',
    see: ['Set theory', 'Interval vector'],
  },
  {
    term: 'Interval vector',
    category: 'harmony',
    definition:
      'A six-number tally of how many of each interval class a pitch-class set contains — a fingerprint of its sound rather than its spelling.',
    see: ['Set theory', 'Prime form'],
  },
  {
    term: 'Twelve-tone',
    aka: ['Dodecaphony', 'Serialism'],
    category: 'harmony',
    definition:
      'Composition ordered by a row containing all twelve pitch classes, deployed in its original, inverted, retrograde and retrograde-inverted forms at any transposition.',
    see: ['Set theory', 'Serialism'],
  },
  {
    term: 'Serialism',
    category: 'harmony',
    definition:
      'The extension of twelve-tone ordering to parameters beyond pitch — duration, dynamic, articulation — pursued most systematically in the decade after 1945.',
    see: ['Twelve-tone'],
  },
  {
    term: 'Octatonic',
    category: 'harmony',
    definition:
      'An eight-note collection alternating whole and half steps. Symmetrical, so it has only three distinct transpositions, and a staple of Stravinsky and the Russian tradition.',
    see: ['Whole-tone'],
  },
  {
    term: 'Whole-tone',
    category: 'harmony',
    definition:
      'A six-note scale of equal whole steps. Having no semitone and no perfect fifth, it lacks the pull that defines tonal harmony — hence its weightless, unanchored sound.',
    see: ['Octatonic'],
  },

  // ── Form & analysis ───────────────────────────────────────────────────────
  {
    term: 'Motive',
    category: 'form',
    definition:
      'The smallest musical unit that carries identity — an interval and a rhythm short enough to be recognised whenever it returns, and to be spun into a whole movement.',
    see: ['Phrase', 'Development'],
  },
  {
    term: 'Phrase',
    category: 'form',
    definition:
      'A complete musical thought, typically four or eight bars in Classical style, ending in a cadence.',
    see: ['Period', 'Sentence', 'Cadence'],
  },
  {
    term: 'Period',
    category: 'form',
    definition:
      'Two phrases in a question-and-answer relationship: an antecedent ending on a weak cadence, answered by a consequent that closes firmly.',
    see: ['Antecedent', 'Consequent', 'Sentence'],
  },
  {
    term: 'Antecedent',
    category: 'form',
    definition: 'The opening phrase of a period, ending inconclusively so that an answer is required.',
    see: ['Period', 'Consequent'],
  },
  {
    term: 'Consequent',
    category: 'form',
    definition: 'The answering phrase of a period, closing what the antecedent left open.',
    see: ['Period', 'Antecedent'],
  },
  {
    term: 'Sentence',
    category: 'form',
    definition:
      'A phrase structure of presentation, repetition and continuation: an idea, the idea again, then fragmentation accelerating into a cadence.',
    see: ['Period', 'Phrase'],
  },
  {
    term: 'Sonata form',
    category: 'form',
    definition:
      'The dominant large-scale design of the Classical period: an exposition establishing two key areas, a development that destabilises them, and a recapitulation resolving everything into the tonic.',
    see: ['Exposition', 'Development', 'Recapitulation'],
  },
  {
    term: 'Exposition',
    category: 'form',
    definition:
      'The first section of a sonata-form movement, presenting the material and moving from the tonic to a secondary key. In a fugue, the opening in which every voice states the subject in turn.',
    see: ['Sonata form', 'Fugue'],
  },
  {
    term: 'Development',
    category: 'form',
    definition:
      'The central section of a sonata-form movement, in which material is fragmented, sequenced and moved through unstable keys.',
    see: ['Sonata form', 'Recapitulation'],
  },
  {
    term: 'Recapitulation',
    category: 'form',
    definition:
      'The return of the exposition’s material with the secondary group resolved into the tonic — the point of the whole design.',
    see: ['Sonata form', 'Exposition'],
  },
  {
    term: 'Binary form',
    category: 'form',
    definition:
      'A two-part design, each part usually repeated. Rounded binary brings the opening material back within the second part.',
    see: ['Ternary form'],
  },
  {
    term: 'Ternary form',
    category: 'form',
    definition: 'A three-part ABA design in which the outer sections frame a contrasting middle.',
    see: ['Binary form', 'Rondo'],
  },
  {
    term: 'Rondo',
    category: 'form',
    definition:
      'A form built on a recurring refrain separated by contrasting episodes. Common as a finale, where its predictability is part of the pleasure.',
    see: ['Ternary form', 'Ritornello'],
  },
  {
    term: 'Fugue',
    category: 'form',
    definition:
      'A contrapuntal procedure rather than a fixed form: a subject is stated by each voice in turn, answered at the dominant, then developed through episodes and further entries.',
    see: ['Counterpoint', 'Exposition'],
  },
  {
    term: 'Ritornello',
    category: 'form',
    definition:
      'A recurring orchestral refrain framing solo episodes, and the engine of the Baroque concerto movement.',
    see: ['Rondo'],
  },
  {
    term: 'Texture',
    category: 'form',
    definition:
      'How many independent strands are sounding and how they relate — monophony, homophony, polyphony or heterophony. Density is a compositional parameter in its own right.',
    see: ['Polyphony', 'Homophony', 'Heterophony'],
  },
  {
    term: 'Homophony',
    category: 'form',
    definition: 'Melody with subordinate accompaniment: one line leads and the rest support it.',
    see: ['Texture', 'Polyphony'],
  },
  {
    term: 'Polyphony',
    category: 'form',
    definition:
      'Several independent lines of comparable interest sounding together, distinguishable by register, rhythm or timbre.',
    see: ['Counterpoint', 'Texture'],
  },
  {
    term: 'Heterophony',
    category: 'form',
    definition:
      'Simultaneous variants of the same melody, each performer elaborating it differently. Central to much music outside Europe and underused by Western composers.',
    see: ['Texture', 'Gamelan'],
  },
  {
    term: 'Hypermeter',
    category: 'form',
    definition:
      'Metre operating above the bar, where whole bars behave as strong and weak beats — which is why four-bar groups feel regular and a five-bar group feels like an interruption.',
    see: ['Phrase', 'Metre'],
  },

  // ── Rhythm & metre ────────────────────────────────────────────────────────
  {
    term: 'Metre',
    aka: ['Meter'],
    category: 'rhythm',
    definition:
      'The recurring pattern of strong and weak beats against which rhythm is heard. Simple metres divide the beat in two, compound metres in three.',
    see: ['Hemiola', 'Hypermeter'],
  },
  {
    term: 'Hemiola',
    category: 'rhythm',
    definition:
      'Three beats in the time of two, or the reverse — a momentary regrouping that unsettles the metre without changing the time signature.',
    see: ['Metre', 'Polyrhythm'],
  },
  {
    term: 'Polyrhythm',
    category: 'rhythm',
    definition:
      'Two or more conflicting groupings sounding at once over a shared pulse. Distinct from polymetre, where the cycles themselves differ.',
    see: ['Timeline', 'Metre'],
  },
  {
    term: 'Additive rhythm',
    category: 'rhythm',
    definition:
      'Irregular groupings built from a constant small unit — 2+2+3 rather than a division of a regular bar. Characteristic of Balkan traditions and of Stravinsky.',
    see: ['Metre'],
  },
  {
    term: 'Metric modulation',
    category: 'rhythm',
    definition:
      'Pivoting from one tempo to another by way of a subdivision common to both, so the change is exact rather than approximate.',
    see: ['Metre'],
  },
  {
    term: 'Ostinato',
    category: 'rhythm',
    definition: 'A short pattern repeated persistently, often as the foundation the rest is built over.',
    see: ['Pedal point'],
  },
  {
    term: 'Rubato',
    category: 'rhythm',
    definition:
      'Expressive flexibility of tempo. In a chamber ensemble it has to be agreed in advance and rehearsed, or it produces hesitancy rather than freedom.',
    see: ['Balance', 'Preparatory beat'],
  },

  // ── Aural skills ──────────────────────────────────────────────────────────
  {
    term: 'Solfège',
    aka: ['Solfeggio', 'Solmization'],
    category: 'aural',
    definition:
      'Singing pitches to syllables. Movable-do names degrees relative to the tonic and suits tonal hearing; fixed-do names absolute pitches.',
    see: ['Sight-singing', 'Dictation'],
  },
  {
    term: 'Sight-singing',
    category: 'aural',
    definition:
      'Singing notation at first sight. Trained by keeping the pulse through mistakes rather than stopping to correct them.',
    see: ['Solfège', 'Dictation'],
  },
  {
    term: 'Dictation',
    category: 'aural',
    definition:
      'Writing down what you hear. Melodic, harmonic and rhythmic dictation are the standard forms, and all reward capturing structure before detail.',
    see: ['Sight-singing', 'Solfège'],
  },

  // ── Performance & ensemble ────────────────────────────────────────────────
  {
    term: 'Tessitura',
    category: 'performance',
    definition:
      'Where a part mostly sits, as distinct from the extremes it touches. A line hovering near the top of a range is exhausting even when every note is within it.',
    see: ['Register'],
  },
  {
    term: 'Register',
    category: 'performance',
    definition:
      'A portion of an instrument’s or voice’s range with a distinct character. Instruments are most themselves at their extremes and most alike in the middle.',
    see: ['Tessitura', 'Timbre'],
  },
  {
    term: 'Timbre',
    aka: ['Tone colour'],
    category: 'performance',
    definition:
      'The quality that distinguishes two instruments playing the same pitch at the same volume, determined largely by the distribution of energy across the overtones.',
    see: ['Harmonic series', 'Register'],
  },
  {
    term: 'Articulation',
    category: 'performance',
    definition:
      'How a note begins and ends, and how it connects to its neighbours — legato, staccato, marcato and the rest. The parameter that most defines period style.',
    see: ['Legato', 'Staccato'],
  },
  { term: 'Legato', category: 'performance', definition: 'Notes connected without audible separation.', see: ['Articulation'] },
  { term: 'Staccato', category: 'performance', definition: 'Notes detached and shortened, with silence between them.', see: ['Articulation'] },
  {
    term: 'Portamento',
    category: 'performance',
    definition:
      'An audible slide between two pitches. Standard expressive practice in the nineteenth century and heard throughout early recordings.',
    see: ['Vibrato'],
  },
  {
    term: 'Vibrato',
    category: 'performance',
    definition:
      'Regular fluctuation of pitch used as tone colour. Its width and speed are stylistic choices, and matching them is part of ensemble blend.',
    see: ['Blend', 'Portamento'],
  },
  {
    term: 'Blend',
    category: 'performance',
    definition:
      'Matching note length, attack, vibrato and vowel within a section so it speaks as one instrument. A section of fine players who differ sounds worse than modest players who match.',
    see: ['Balance', 'Intonation'],
  },
  {
    term: 'Balance',
    category: 'performance',
    definition:
      'The relative loudness of parts according to their role. A written forte in an accompanying figure is quieter than the same marking in the tune.',
    see: ['Blend'],
  },
  {
    term: 'Intonation',
    category: 'performance',
    definition:
      'Playing in tune — which system depends on context: just intonation for sustained harmony, expressive tendencies in melody, equal temperament when a keyboard is present.',
    see: ['Just intonation', 'Temperament'],
  },
  {
    term: 'Ictus',
    category: 'performance',
    definition:
      'The point in a conducting gesture where direction changes and the sound is placed. Ensembles that play after it rather than on it sound sluggish.',
    see: ['Preparatory beat'],
  },
  {
    term: 'Preparatory beat',
    aka: ['Preparation'],
    category: 'performance',
    definition:
      'The gesture immediately before an entry. Its speed sets the tempo, its weight the dynamic, its character the articulation — almost everything needed to enter together.',
    see: ['Ictus'],
  },
  {
    term: 'Continuo',
    aka: ['Basso continuo'],
    category: 'performance',
    definition:
      'The Baroque accompanying group — a chordal instrument realising figures over a sustained bass — and the texture that defines the period.',
    see: ['Figured bass'],
  },

  // ── Historical style ──────────────────────────────────────────────────────
  {
    term: 'Prima pratica',
    category: 'history',
    definition:
      'The older practice in Monteverdi’s formulation, in which the contrapuntal rules govern and the music takes precedence over the words.',
    see: ['Seconda pratica'],
  },
  {
    term: 'Seconda pratica',
    category: 'history',
    definition:
      'The newer practice, in which the text governs and a dissonance forbidden by rule is permitted if the words demand it. The premise behind recitative, opera and the affective madrigal.',
    see: ['Prima pratica', 'Recitative'],
  },
  {
    term: 'Recitative',
    category: 'history',
    definition:
      'Vocal writing that follows the rhythms and inflections of speech over a sparse accompaniment, used to carry dialogue and advance the action.',
    see: ['Aria', 'Seconda pratica'],
  },
  {
    term: 'Aria',
    category: 'history',
    definition:
      'A self-contained song within a larger dramatic work, in which the action pauses and a character dwells on a state of feeling.',
    see: ['Recitative', 'Da capo aria'],
  },
  {
    term: 'Da capo aria',
    category: 'history',
    definition:
      'An ABA aria in which the returning A section is ornamented by the singer. The convention that made eighteenth-century opera a vehicle for vocal display.',
    see: ['Aria', 'Bel canto'],
  },
  {
    term: 'Bel canto',
    category: 'history',
    definition:
      'A style and school of singing prizing evenness of line, agility and beauty of tone, associated with early nineteenth-century Italian opera.',
    see: ['Aria'],
  },
  {
    term: 'Doctrine of the affections',
    aka: ['Affections', 'Affektenlehre'],
    category: 'history',
    definition:
      'The Baroque view that a movement should embody a single, sustained emotional state, and that specific musical figures reliably evoke specific feelings.',
    see: ['Prima pratica'],
  },
  {
    term: 'Galant',
    category: 'history',
    definition:
      'The mid-eighteenth-century style that displaced the learned Baroque: singable melody over light accompaniment, short balanced phrases and frequent cadences.',
    see: ['Empfindsamer Stil', 'Schema'],
  },
  {
    term: 'Empfindsamer Stil',
    aka: ['Sensitive style'],
    category: 'history',
    definition:
      'A style of abrupt emotional shifts — sudden dynamics, unexpected harmony, rhetorical silence — associated above all with C. P. E. Bach.',
    see: ['Galant'],
  },
  {
    term: 'Schema',
    aka: ['Galant schema', 'Partimento'],
    category: 'history',
    definition:
      'A stock voice-leading pattern with a conventional bass and melodic outline, learned as a building block by apprentice musicians. Hearing them makes much eighteenth-century music legible.',
    see: ['Galant', 'Figured bass'],
  },
  {
    term: 'Chorale',
    category: 'history',
    definition:
      'A Lutheran congregational hymn melody. Its harmonisations became the standard teaching material for voice leading, and quoting one imported instant doctrinal meaning.',
    see: ['Voice leading'],
  },
  {
    term: 'Lied',
    category: 'history',
    definition:
      'German art song for voice and piano, in which the piano is an equal interpretive partner rather than an accompaniment.',
  },
  {
    term: 'Leitmotif',
    category: 'history',
    definition:
      'A recurring musical idea attached to a character, object or concept, transformed as the drama develops. Wagner’s central technique.',
    see: ['Motive'],
  },
  {
    term: 'Historically informed performance',
    aka: ['HIP', 'Period performance'],
    category: 'history',
    definition:
      'Performance reconstructed from period instruments, tunings, treatises and conventions. The evidence is incomplete and the treatises disagree, so it constrains interpretation without determining it.',
    see: ['Temperament', 'Continuo'],
  },

  // ── Musical contexts ──────────────────────────────────────────────────────
  {
    term: 'Ethnomusicology',
    category: 'contexts',
    definition:
      'The study of music as human activity rather than as a repertoire of works — who makes it, in what circumstances, learned how and valued why.',
    see: ['Participatory music', 'Transcription'],
  },
  {
    term: 'Participatory music',
    category: 'contexts',
    definition:
      'Music structured so that people of varying skill can join in: open-ended forms, dense textures that hide individual error, and no audience–performer boundary. Judging it by presentational criteria misses what it is for.',
    see: ['Ethnomusicology', 'Entrainment'],
  },
  {
    term: 'Entrainment',
    category: 'contexts',
    definition:
      'The tendency of rhythmic systems to synchronise, which is why collective ritual music so often has a strong regular pulse.',
    see: ['Participatory music'],
  },
  {
    term: 'Transcription',
    category: 'contexts',
    definition:
      'Writing down music from a recording. An act of interpretation rather than transfer: every transcription decides what counts as an event and which deviations matter.',
    see: ['Ethnomusicology'],
  },
  {
    term: 'Timeline',
    aka: ['Bell pattern'],
    category: 'contexts',
    definition:
      'An asymmetrical repeating figure, played on a bell or other cutting timbre, against which everything else in a West African drum ensemble is placed.',
    see: ['Polyrhythm'],
  },
  {
    term: 'Raga',
    category: 'contexts',
    definition:
      'Far more than a scale: an ascending and descending pattern, a hierarchy of important pitches, characteristic phrases, specific ornaments, and often a time of day and emotional character.',
    see: ['Tala', 'Maqam'],
  },
  {
    term: 'Tala',
    category: 'contexts',
    definition: 'The metric cycle of Indian classical music, against which improvisation is measured.',
    see: ['Raga'],
  },
  {
    term: 'Maqam',
    category: 'contexts',
    definition:
      'The modal system of Arab music, organised by characteristic phrases and modulation paths and using intervals that fall between the semitones of Western tuning.',
    see: ['Raga'],
  },
  {
    term: 'Gamelan',
    category: 'contexts',
    definition:
      'Indonesian percussion ensemble tuned as a single instrument, so no two sets are alike and instruments cannot be exchanged between them.',
    see: ['Colotomic structure', 'Heterophony'],
  },
  {
    term: 'Colotomic structure',
    category: 'contexts',
    definition:
      'Cyclic form marked by specific gongs at specific points, with the largest gong closing the cycle. Once you know which gong marks what, the architecture becomes audible.',
    see: ['Gamelan'],
  },

  // ── Technology & acoustics ────────────────────────────────────────────────
  {
    term: 'Harmonic series',
    aka: ['Overtone series', 'Partials'],
    category: 'technology',
    definition:
      'The set of frequencies at whole-number multiples of a fundamental, present in almost every musical tone. Their relative strengths produce timbre, and their relationships underlie consonance and tuning.',
    see: ['Timbre', 'Just intonation'],
  },
  {
    term: 'Just intonation',
    category: 'technology',
    definition:
      'Tuning intervals to whole-number frequency ratios so they beat-free. A pure major third is about fourteen cents narrower than its equal-tempered equivalent.',
    see: ['Temperament', 'Intonation'],
  },
  {
    term: 'Temperament',
    category: 'technology',
    definition:
      'Any systematic compromise distributing tuning error across the keys. Meantone favours some keys at the expense of others; well temperaments make every key usable but distinct; equal temperament makes them identical.',
    see: ['Just intonation', 'Historically informed performance'],
  },
  {
    term: 'Cent',
    category: 'technology',
    definition:
      'A hundredth of an equal-tempered semitone, and the unit that lets tuning systems be compared precisely.',
    see: ['Temperament'],
  },
  {
    term: 'Sampling rate',
    category: 'technology',
    definition:
      'How many measurements of a waveform are taken per second. The Nyquist limit means a rate accurately represents frequencies up to half its value.',
    see: ['Bit depth'],
  },
  {
    term: 'Bit depth',
    category: 'technology',
    definition:
      'How finely each sample is quantised, and therefore the available dynamic range — about 96 dB at sixteen bits, 144 dB at twenty-four.',
    see: ['Sampling rate', 'Headroom'],
  },
  {
    term: 'Headroom',
    category: 'technology',
    definition:
      'The margin between the loudest recorded peak and the point of clipping. Digital clipping destroys the waveform and cannot be repaired afterwards.',
    see: ['Bit depth', 'LUFS'],
  },
  {
    term: 'LUFS',
    aka: ['Loudness units full scale'],
    category: 'technology',
    definition:
      'The perceptual loudness measure behind streaming normalisation. Because playback is normalised, mastering a classical recording louder achieves nothing but lost dynamic range.',
    see: ['Headroom'],
  },
  {
    term: 'Reverberation time',
    aka: ['RT60'],
    category: 'technology',
    definition:
      'How long sound takes to decay by 60 dB in a space. It determines how much a room blurs successive events, and different repertoires want different values.',
    see: ['Comb filtering'],
  },
  {
    term: 'Comb filtering',
    category: 'technology',
    definition:
      'The hollow, phasey sound produced when a direct signal and a slightly delayed reflection cancel at regularly spaced frequencies — usually a microphone placed too near a hard surface.',
    see: ['Polar pattern', 'Reverberation time'],
  },
  {
    term: 'Polar pattern',
    category: 'technology',
    definition:
      'What a microphone hears from each direction. Choosing between omnidirectional, cardioid and figure-of-eight is mostly a decision about how much room to include.',
    see: ['Proximity effect'],
  },
  {
    term: 'Proximity effect',
    category: 'technology',
    definition:
      'The exaggeration of low frequencies when a directional microphone is placed close to a source. Omnidirectional capsules do not exhibit it.',
    see: ['Polar pattern'],
  },
  {
    term: 'MIDI',
    category: 'technology',
    definition:
      'A control protocol carrying which note, how hard, when and on which channel — and no audio whatsoever. The same file sounds different on every system.',
  },

  // ── The profession ────────────────────────────────────────────────────────
  {
    term: 'Mechanical licence',
    category: 'profession',
    definition:
      'Permission to reproduce a composition in a recording. Needed for in-copyright works even when the recording is entirely your own.',
    see: ['Performance royalties', 'ISRC'],
  },
  {
    term: 'Performance royalties',
    category: 'profession',
    definition:
      'Payments due when a work is performed or broadcast publicly, collected by societies on behalf of composers and publishers.',
    see: ['Mechanical licence'],
  },
  {
    term: 'ISRC',
    category: 'profession',
    definition:
      'The International Standard Recording Code, a unique identifier per recording that makes royalty tracking possible. Distinct from any identifier of the composition.',
    see: ['Mechanical licence'],
  },
  {
    term: 'Orchestral excerpt',
    category: 'profession',
    definition:
      'One of the twenty or thirty canonical passages per instrument on which orchestral auditions are decided. Short, which tempts candidates to underprepare them.',
    see: ['Screened audition'],
  },
  {
    term: 'Screened audition',
    category: 'profession',
    definition:
      'An audition heard from behind a screen so that only the sound is judged. Standard in early rounds, and the only realistic way to rehearse for one is to reproduce the conditions.',
    see: ['Orchestral excerpt'],
  },
]

/** Terms indexed by lowercase name, for cross-reference lookup. */
export const glossaryByTerm = new Map(glossary.map((t) => [t.term.toLowerCase(), t]))
