import type { Course } from '../types'

export const y4s2Courses: Course[] = [
  {
    id: 'aps402',
    code: 'APS402',
    title: 'Principal Study 8 & Senior Recital',
    credits: 6,
    stream: 'performance',
    description:
      'The degree capstone: a 60-minute public graduation recital (or composition portfolio, per major) prepared in weekly one-to-one lessons and defended through written program notes. Students take full artistic ownership of programming, preparation, production and presentation on their instrument or voice.',
    prerequisites: ['aps401'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Unit 1: Recital Dramaturgy — Finalizing the Graduation Program',
        objectives: [
          'Finalize a 60-minute recital program and defend its artistic rationale to your teacher and department',
          'Map the program’s emotional and stylistic arc, including key relationships, pacing and intermission placement',
          'Build a semester-long backward plan from recital date to today, with weekly repertoire targets',
        ],
        content: [
          'A graduation recital is an argument about who you are as an artist, not a checklist of styles. Strong senior programs balance a substantial anchor work — a Bach suite, a Beethoven or Brahms sonata, a major song cycle — against contrast in period, language and character, and most departments expect at least one work written after 1950 and encourage one by a living or underrepresented composer. In this unit you present your finalized program in writing with timings, argue for its through-line, and receive formal approval, because from this point every lesson serves the recital.',
          'Dramaturgy means treating the recital as a single composed experience. Consider tonal geography (opening in D minor and ending in D major creates a different journey than an arch that returns home), the placement of the most demanding work relative to your stamina curve, and where the audience needs breathing space. Kathleen Ferrier’s and Dietrich Fischer-Dieskau’s recital programs are classic case studies in pacing; contemporary artists like Jennifer Koh (Bach and commissions interleaved) and Víkingur Ólafsson (Bach refracted through Philip Glass) model how juxtaposition itself becomes interpretation.',
          'The backward plan converts the date on the poster into daily work. Divide the semester into a learning phase (all notes and text secure), an interpretation phase (tempo, sound, rhetoric decided and tested), and a performance phase (run-throughs under pressure), assigning each work a memorization or security deadline at least six weeks before the recital. Schedule your hall booking, collaborative pianist or ensemble partners, recording engineer and program-note deadlines now — production failures, not musical ones, are the most common source of senior-recital stress.',
        ],
        listening: [
          'Víkingur Ólafsson — Debussy · Rameau (album, 2020) as a model of program dramaturgy',
          'Jessye Norman — Live at Hohenems (Schubert and Strauss recital)',
          'Jennifer Koh — Bach and Beyond, Part 1',
        ],
        assignments: [
          'Submit your final program with exact timings, a 300-word artistic rationale, and confirmed collaborator commitments',
          'Produce a week-by-week backward plan from recital day to today and review it with your teacher',
          'Record a baseline run of the least secure work and write a candid gap analysis',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Unit 2: Deep Work — Technical and Interpretive Problem-Solving',
        objectives: [
          'Isolate the three highest-risk passages in the program and design targeted practice protocols for each',
          'Make and notate final interpretive decisions on tempo, articulation, ornamentation and rubato, grounded in score study and performance-practice evidence',
          'Apply mental practice and interleaved scheduling to consolidate memory and security',
        ],
        content: [
          'With the program fixed, practice shifts from coverage to depth. Risk-map every work: mark passages red (fails under pressure), amber (works at home, fragile on stage) and green (secure), then budget practice time in proportion to risk rather than pleasure. For each red passage, define the mechanical problem precisely — a shift, a breath, a coordination between hands or between text and line — and attack it with variable practice: altered rhythms, transposition of the gesture, playing or singing from different entry points, and tempo ladders that climb past performance tempo to create headroom.',
          'Interpretive decisions must now be made, written into the score, and defended. If your anchor work is Baroque, settle ornamentation and articulation against sources such as C. P. E. Bach’s Versuch or Quantz’s treatise and against recordings from different tradition-streams (compare Gustav Leonhardt’s rhetoric with Murray Perahia’s line in the same Bach). For Romantic repertoire, decide where rubato serves the phrase’s harmonic tension — Chopin’s own description of a steady left hand under a free right hand remains the best working definition — and mark every tempo modification so it becomes reproducible rather than accidental.',
          'Memory research distinguishes serial recall (each bar cues the next, which collapses when one link breaks) from a network of retrieval cues, and performers need the second. Establish landmarks every eight to sixteen bars where you can restart cold, name the harmony or text at each landmark, and rehearse recovering from deliberate breakdowns. Interleave works within each session rather than blocking a week per piece — interleaving feels worse and tests better, a robust finding from motor-learning studies that applies directly to recital preparation.',
        ],
        listening: [
          'J.S. Bach — Chaconne from Partita No. 2 in D minor, BWV 1004 (compare recordings by Rachel Podger and Gidon Kremer)',
          'Chopin — Nocturne in C-sharp minor, Op. 27 No. 1 (Maria João Pires) for rubato study',
          'Quantz-era practice: C.P.E. Bach — Sonata in A minor, Wq 132 (any historically informed recording)',
        ],
        assignments: [
          'Submit your risk map with a written practice protocol for each red passage; re-test and re-grade after two weeks',
          'Annotate the full score of your anchor work with final tempo, articulation and ornamentation decisions, citing at least two sources or reference recordings',
          'Perform one work entirely from memory starting at three different landmarks chosen by your teacher',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Unit 3: Program Notes — Writing and Defending Your Scholarship',
        objectives: [
          'Draft complete program notes that combine accurate scholarship with a personal interpretive stance',
          'Cite historical and analytical sources correctly and integrate them without academic jargon',
          'Defend the notes orally before faculty, connecting written claims to audible interpretive choices',
        ],
        content: [
          'Defended program notes distinguish the graduation recital from every earlier jury: you must show that your interpretation rests on knowledge, not habit. Good notes answer three questions per work — what is this piece, why does it matter, and what should the listener notice — in roughly 150 to 250 words each, written for an intelligent non-specialist. Banish filler biography (audiences do not need birth and death dates recited) in favor of one vivid, verifiable fact and one guide for the ear: telling listeners that the second movement’s hymn returns shattered in the finale changes how they hear the whole work.',
          'Scholarship means your claims are checkable. Verify dates, dedications and premiere details against Grove Music Online or a critical edition preface rather than streaming-service blurbs, and when you make an analytical claim — that Messiaen builds a movement from his second mode of limited transposition, or that a Schubert song pivots through an enharmonic German sixth — be prepared to show it in the score. The defense is a viva voce: faculty will ask why you chose your tempo, what edition you used and why, and how your reading differs from a recording you admire, so rehearse articulate answers that link evidence to decision.',
          'Voice matters as much as accuracy. Study published notes by writers such as Michael Steinberg and the program essays of ensembles like the Danish String Quartet, which are learned but conversational; then write a first draft fast, cut a third of it, and read it aloud to a non-musician, revising anything they cannot follow. Your artist biography and a brief personal statement about the program complete the booklet, and these documents become templates you will reuse professionally for years.',
        ],
        listening: [
          'Messiaen — Quatuor pour la fin du temps: VIII. Louange à l’Immortalité de Jésus',
          'Schubert — Winterreise, D. 911: Der Lindenbaum (Fischer-Dieskau/Moore) alongside its published note by Michael Steinberg-style writers',
          'Caroline Shaw — Partita for 8 Voices: III. Courante (read Roomful of Teeth’s program materials as a model)',
        ],
        assignments: [
          'Submit complete program notes, artist biography and personal statement with a source list for every factual claim',
          'Exchange notes with a peer and return line-edited feedback focused on clarity and audience guidance',
          'Complete a 20-minute mock defense; write a one-page reflection on which questions exposed weak reasoning',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Unit 4: Pressure Testing — Run-Throughs and Performance Psychology',
        objectives: [
          'Perform complete run-throughs of each recital half under simulated performance conditions',
          'Apply a personal pre-performance routine covering arousal regulation, attention focus and recovery from errors',
          'Analyze recorded run-throughs to separate preparation problems from performance problems',
        ],
        content: [
          'A program that has never been run in full is a set of pieces, not a recital. From this unit you perform each half without stopping — in studio class, for invited friends, in retirement homes or schools — because stamina, page-flow, stage logistics and the psychological weight of accumulation only appear in complete runs. Treat every run as data: record it, log where attention drifted, where physical tension built, and where recovery after a slip was slow, then feed those findings back into targeted practice rather than generalized repetition.',
          'Performance psychology gives you tools, not slogans. The Yerkes–Dodson relationship predicts an optimal arousal zone: under-arousal produces flat, careless playing while over-arousal narrows attention and stiffens motor control, so learn to regulate with slow diaphragmatic breathing (exhale longer than inhale to engage the parasympathetic system), with pre-performance routines that are identical every time, and with attention anchored on musical intentions — the sound you want next — rather than on self-monitoring. Simulation training works: elevate your heart rate with stairs before a run-through, or perform immediately after minimal warm-up, to rehearse playing well in a non-ideal body state.',
          'Error recovery is a rehearsable skill and the true difference between professionals and students. Practice continuing through planted disruptions — a peer coughing, a dropped program, a wrong entry from your pianist — and rehearse your landmark restarts until a memory slip costs two seconds instead of a spiral. After each run, complete a structured debrief within an hour: three things that worked, three priorities, one process change; this keeps evaluation factual and prevents the global self-judgment that corrodes confidence in the final weeks.',
        ],
        listening: [
          'Beethoven — Piano Sonata in A-flat major, Op. 110 (Mitsuko Uchida) — study how a long arc is sustained live',
          'Clara Schumann — Three Romances, Op. 22 (any live recording) for poise in lyrical exposure',
          'Your own most recent run-through recording, reviewed with score in hand',
        ],
        assignments: [
          'Complete two full-program run-throughs for live listeners this unit and submit recordings with timestamped self-analysis',
          'Write out your exact pre-performance routine (from 24 hours before to walking onstage) and test it before one run',
          'Conduct one disruption rehearsal with planted errors and report recovery times at each landmark',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Unit 5: Production Week — Dress Rehearsal, Recording and Stagecraft',
        objectives: [
          'Run a full dress rehearsal in the recital hall, resolving acoustics, lighting, stage plot and equipment logistics',
          'Coordinate professional-quality audio and video capture of the recital for your portfolio',
          'Finalize stage deportment: entrances, bows, spoken introductions and transitions between works',
        ],
        content: [
          'The dress rehearsal is a production meeting with music in it. Walk the hall systematically: test balance with your collaborators from several audience positions, since a piano lid on full stick that balances a violin may bury a mezzo; set stands, chairs, page-turner position and lighting; and time every transition including tuning, stage resets and your walk from the wings. Halls differ radically in reverberation — a two-second tail invites broader tempi and cleaner articulation than your dry studio allowed — so make explicit tempo and pedaling adjustments and write them down.',
          'Your recital recording will open professional doors for the next five years, so treat capture as seriously as performance. Confirm your engineer’s microphone plan (a main stereo pair such as ORTF or spaced omnis at two to three meters, plus spot microphones as needed), request a brief soundcheck recording to approve, and arrange two camera angles if video is possible because summer festivals and graduate programs increasingly require video. Decide in advance the policy on retakes: many departments allow a patch session after the audience leaves, and knowing this removes pressure from any single moment.',
          'Stagecraft communicates before you play a note. Rehearse the physical performance — entering at a confident pace, acknowledging the audience, the shape and timing of bows, how you signal an attacca versus inviting applause — and script any spoken introductions to be short, warm and specific rather than improvised. Plan clothing you have already performed in, food and hydration for recital day, and the guest logistics (tickets, programs, reception) that otherwise consume attention in the final 48 hours.',
        ],
        listening: [
          'Hildegard von Bingen — O virtus Sapientiae (Anonymous 4) — hear how acoustics shape interpretation',
          'Ravel — Tzigane (Janine Jansen, live) for stage presence study on video',
          'A commercial recital recording in your instrument’s repertoire, focusing on hall sound and editing',
        ],
        assignments: [
          'Complete the dress rehearsal with a written hall report: balance decisions, tempo adjustments, full stage plot and transition timings',
          'Submit the signed recording plan (engineer, microphone setup, video angles, patch-session policy)',
          'Video yourself performing all entrances, bows and spoken introductions; revise with your teacher’s feedback',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Unit 6: The Senior Recital, Graduation Jury and Artistic Reflection',
        objectives: [
          'Perform the 60-minute public graduation recital at professional standard',
          'Complete the graduation jury and program-note defense with the faculty panel',
          'Produce a written artistic reflection and a forward plan connecting the capstone to your professional next steps',
        ],
        content: [
          'Recital week is about protecting the state you have built, not adding value. Taper practice as athletes taper training: reduce volume by roughly half in the final week, keep short daily contact with every work at performance tempo, and refuse the temptation to fix cosmetic details that risk destabilizing secure motor programs. On the day, follow your scripted routine exactly, arrive early enough to warm up in the hall or a matched space, and hold one clear musical intention for each work — the single idea you most want the audience to receive — because intention crowds out self-monitoring.',
          'The jury and defense that follow the recital assess the whole musician the degree promised to produce. The faculty panel evaluates technical command, interpretive maturity, stylistic range across the program, stage presence and the intellectual grounding shown in your defended notes; expect questions that probe decisions rather than facts, such as why your Baroque ornamentation differed from the edition or how your tempo relates to the composer’s metronome marking. Answer from evidence and conviction — examiners reward a defensible individual reading over safe anonymity.',
          'Reflection converts the capstone into a launchpad. Within a week, watch the video once for honest assessment and once purely as an audience member, then write a reflection addressing what your playing now says about your artistic identity, which limitations you will address in the next year, and how the recital repertoire, recording and notes feed your auditions, applications and first professional season. Graduates who leave with a concrete twelve-month artistic plan — repertoire to learn, recordings to release, people to contact — convert momentum; those who leave with only relief lose it.',
        ],
        listening: [
          'Brahms — Sonata in F minor for your final-week inspiration (choose the version for your instrument or the Op. 120 clarinet/viola sonatas)',
          'Florence Price — Fantasie nègre No. 1 in E minor (Samantha Ege) — a model of conviction in advocacy repertoire',
          'The video of your own senior recital, reviewed twice with different listening goals',
        ],
        assignments: [
          'Perform the public senior recital and complete the graduation jury with defended program notes',
          'Submit a 1,000-word artistic reflection based on two viewings of your recital video',
          'Deliver a twelve-month professional plan listing repertoire, recording, audition and contact goals with dates',
        ],
      },
    ],
  },
  {
    id: 'cap402',
    code: 'CAP402',
    title: 'Independent Project',
    credits: 3,
    stream: 'professional',
    description:
      'A self-directed capstone in the RCM Independent Project and YST Collaboratory tradition: students design, research and deliver an original project — community engagement, interdisciplinary creation, applied research or a recording — under faculty supervision. The course assesses initiative, project management and public communication as core professional skills.',
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Unit 1: Proposal Defense — Scoping and Committing to the Project',
        objectives: [
          'Define a project with clear aims, audience, deliverables and success criteria',
          'Defend the proposal before a faculty panel, addressing feasibility, budget and risk',
          'Establish a supervision agreement with milestones, meeting schedule and assessment criteria',
        ],
        content: [
          'An independent project succeeds or fails at the scoping stage. Strong proposals answer five questions in two pages: what will exist at the end that does not exist now (the deliverable), who is it for (a named audience, not the public), why you are the person to make it, what it will cost in money and hours, and how you will know it succeeded. Past projects in this tradition span a hospital concert series with patient-interaction research, an EP of newly commissioned works with a release campaign, a documentary on a local musical community, and an interactive concert for neurodivergent children — the common thread is a bounded, deliverable outcome rather than an open-ended intention.',
          'The proposal defense is a pitch under scrutiny, modeled on funding panels you will face professionally. Faculty probe feasibility hardest: a semester is roughly fourteen working weeks, so a proposal to record five works, build a website and run three workshops must show a calendar proving the hours exist, with named collaborators who have actually agreed. Learn to distinguish the minimum viable project — what you can guarantee — from stretch goals, and present both explicitly; panels trust applicants who show they have already imagined failure modes and planned around them.',
          'Once approved, the supervision agreement makes self-direction accountable. It fixes your supervisor, the meeting rhythm (typically fortnightly), the three checkpoint dates, the final deliverables and the assessment weighting between process (documentation, responsiveness to feedback) and product (the work itself and its public presentation). Set up your project infrastructure now: a project journal you write in weekly, a budget tracker, a shared folder for materials, and a single document listing every commitment you have made to other people with its deadline.',
        ],
        listening: [
          'Yo-Yo Ma — Bach Six Cello Suites from the Bach Project (an artist-led project with explicit civic aims)',
          'Abel Selaocoe — Where Is Home / Hae ke Kae (album as a research-driven artistic project)',
          'Anna Meredith — Varmints (album, 2016) as a model of a self-produced interdisciplinary release',
        ],
        assignments: [
          'Submit the two-page proposal with deliverables, audience, timeline, budget and success criteria',
          'Present a 10-minute defense with slides; revise the proposal within one week to address panel conditions',
          'Sign the supervision agreement and create your project journal, budget tracker and commitments document',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Unit 2: Context and Literature Review — Learning What Already Exists',
        objectives: [
          'Survey existing projects, scholarship and practice relevant to your project’s field',
          'Conduct informational interviews or site research with practitioners and stakeholders',
          'Position your project explicitly: what it borrows, what it adapts and what it adds',
        ],
        content: [
          'Every project enters a field that already has a history, and ignorance of it wastes your one semester. The context review adapts the academic literature review to artistic practice: gather the five to ten closest precedents — projects, recordings, ensembles, papers, community programs — and analyze each for its aims, methods, audience and documented outcomes. A student building a concert series for dementia patients should know Manchester Camerata’s Music in Mind program and the research of the Cambridge Institute for Music Therapy Research; one producing a debut EP should study how comparable artists sequenced, funded and released theirs, from Sean Shibe’s softLOUD to self-released Bandcamp models.',
          'Primary research beats secondary research where people are involved. Conduct at least three informational interviews with practitioners who have done adjacent work — administrators, producers, teaching artists, engineers — using prepared questions that target decisions and mistakes rather than general encouragement, and record insights in your journal within a day. If your project serves a community or venue, visit it: observe the space, meet the gatekeepers, and learn the constraints (scheduling, safeguarding policies, acoustics, budgets) that will otherwise ambush you at delivery.',
          'The review concludes by positioning your project honestly. Write a short statement in three moves: this field contains X (the precedents), my project follows Y from them (borrowed methods and standards), and it differs by Z (your specific contribution — a new audience, a new pairing of disciplines, a repertoire gap, a local need unmet). This positioning statement disciplines the whole project: any planned activity that serves neither Y nor Z is scope creep and should be cut now, while cutting is cheap.',
        ],
        listening: [
          'Sean Shibe — softLOUD (album) — repertoire framing as project positioning',
          'Steve Reich — Different Trains (Kronos Quartet) — documentary source material transformed into art',
          'Rhiannon Giddens — They’re Calling Me Home (with Francesco Turrisi) — research-led programming',
        ],
        assignments: [
          'Submit an annotated review of five to ten precedents with two lessons drawn from each',
          'Complete three informational interviews or site visits; log findings and one plan change each prompted',
          'Write the one-page positioning statement and prune your project plan against it',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Unit 3: Development Checkpoints — Making, Testing, Iterating',
        objectives: [
          'Execute the core production phase against the milestone plan, documenting decisions weekly',
          'Test early material with a sample of the intended audience and iterate on the evidence',
          'Manage budget, collaborators and scope actively, escalating problems at checkpoints rather than hiding them',
        ],
        content: [
          'This unit is the engine room: several weeks of supervised making punctuated by formal checkpoints. Work in weekly cycles borrowed from agile practice — plan the week’s concrete outputs on Monday, make, then review on Friday what shipped, what slipped and why — and record each cycle in your project journal, because the journal is both an assessed deliverable and the raw material for your final reflection. Checkpoints with your supervisor are not status theater: bring the actual work in its current imperfect state (rough mixes, draft scripts, workshop plans, half-edited video), since feedback on real material is worth ten conversations about intentions.',
          'Test with real audience members before the stakes rise. A recording project should send a rough mix to five listeners from its target audience with three specific questions; a community project should pilot one workshop with a small group and observe what actually engaged them, which is reliably different from what you predicted. Treat negative feedback as free consulting: the education student who discovers children ignore her carefully written narration but light up at call-and-response has learned something no amount of planning could reveal, and the semester still has time to use it.',
          'Projects rarely fail from lack of talent; they fail from unmanaged scope, money and people. Review the budget at every checkpoint against actuals, and apply the project-management triangle honestly — when time compresses, you must cut scope or accept lower polish, and the professional move is choosing deliberately rather than letting the deadline choose. When a collaborator goes quiet or a venue wavers, escalate at the next checkpoint with options already sketched; supervisors evaluate how you handle trouble, and a well-managed crisis strengthens your assessment rather than harming it.',
        ],
        listening: [
          'Caroline Shaw & Sō Percussion — Let the Soil Play Its Simple Part — collaborative iteration audible in the result',
          'Nico Muhly — writings and interviews on deadline-driven composing, alongside his Two Boys excerpts',
          'A rough cut or demo from your own project, reviewed side by side with a professional benchmark',
        ],
        assignments: [
          'Maintain weekly journal cycles (plan, output, review) and submit them at each checkpoint',
          'Run one audience test of draft material; report findings and the specific iterations they caused',
          'Present a budget-versus-actuals and scope statement at the midpoint checkpoint, flagging any cuts needed',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Unit 4: Work-in-Progress Showing — Public Feedback Before the Stakes Rise',
        objectives: [
          'Present the project publicly in unfinished form to peers, faculty and invited stakeholders',
          'Design and run a structured feedback process that yields usable evidence, not politeness',
          'Translate feedback into a prioritized revision plan for the production phase',
        ],
        content: [
          'The work-in-progress showing is a deliberately unfinished public moment, borrowed from theatre and design practice, and it exists because feedback after completion is an autopsy while feedback before completion is medicine. Show real material — fifteen minutes of the concert with spoken framing, three mixed tracks with cover art drafts, a workshop demonstration with volunteer participants — and frame explicitly what stage the work is at and what kind of feedback you need, because unframed audiences default to either kindness or nitpicking, and neither helps.',
          'Structure extracts signal from the room. Use forms or facilitated discussion built on specific prompts: what moment stayed with you, where did your attention drop, what did you think this project was for — and, following Liz Lerman’s Critical Response Process, let responders ask you neutral questions before offering opinions, which surfaces assumptions on both sides. Capture everything (a peer taking notes, a recording of the discussion), because presenters under adrenaline remember at most a quarter of what was said, and the throwaway comment from the one audience member who matches your real target demographic may be the most valuable sentence of the night.',
          'Feedback is only worth the revision it causes. Within 48 hours, sort every comment into adopt, adapt, investigate or decline — declining is legitimate when feedback pulls against the project’s positioning statement, and documenting the reasoning demonstrates exactly the artistic judgment this course assesses. Emerge with a prioritized revision plan for the remaining weeks that names the three changes with the highest impact-to-effort ratio, and confirm with your supervisor that the final-phase calendar absorbs them without destabilizing the confirmed deliverables.',
        ],
        listening: [
          'Liz Lerman — Critical Response Process (read the summary; observe it applied in any recorded session)',
          'Meredith Monk — Dolmen Music — work developed through iterative showings',
          'Julius Eastman — Femenine (Wild Up) — a performance tradition rebuilt through workshop practice',
        ],
        assignments: [
          'Deliver the work-in-progress showing with explicit framing of stage and feedback needs',
          'Submit the captured feedback with your adopt/adapt/investigate/decline sorting and reasoning',
          'Agree the prioritized revision plan with your supervisor, mapped onto the remaining calendar',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Unit 5: Production and Delivery — Finishing to Professional Standard',
        objectives: [
          'Complete all confirmed deliverables at professional presentation standard',
          'Apply finishing disciplines: proofing, mastering, rights clearance, accessibility and archiving',
          'Deliver to the real audience or venue and document the delivery as evidence',
        ],
        content: [
          'Finishing is a distinct skill from making, and the last ten percent of quality takes thirty percent of the effort. Professional standard means the details an amateur skips: recordings are mastered with consistent loudness and correct metadata (ISRC codes, credits, composer attributions); printed and digital materials are proofread by a second reader; events have front-of-house plans, signage and accessibility provision; and anything using others’ music, images or words has documented permission — copyright clearance is the finishing task students most often discover too late, so audit it first, not last.',
          'Delivery means the work reaches its actual audience, not just the assessment panel. Release the EP on the platforms your positioning statement named, run the workshop series in the partner school, mount the exhibition in the community space — and gather evidence as you go: attendance counts, photographs (with consent), participant quotes, streaming statistics, a venue letter. This evidence serves double duty, feeding both your final assessment and the grant applications and portfolio websites where this project will live professionally for years.',
          'Archive as if your future self is a stranger. Assemble a project archive containing final deliverables in open formats, source files, the journal, budget actuals, contact list, permissions and a one-page project summary with outcomes; funders, employers and graduate programs routinely ask for exactly this kind of documented project history, and graduates who can produce it in an afternoon have a durable advantage. Close the loop with collaborators and stakeholders now — thank-you messages, shared files, honored promises — because your reputation in this field begins with how you end this project.',
        ],
        listening: [
          'Angélique Kidjo — Remain in Light — a complete artistic project delivered across recording, performance and advocacy',
          'Max Richter — Sleep (excerpts) — production and delivery designed around a specific audience experience',
          'The final master or final materials of your own project, checked against a commercial reference',
        ],
        assignments: [
          'Deliver all confirmed deliverables and submit the delivery evidence package (attendance, media, statistics, letters)',
          'Complete the rights and permissions audit with documentation for every third-party asset',
          'Assemble the project archive with a one-page outcomes summary',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Unit 6: Public Presentation and Written Reflection',
        objectives: [
          'Present the completed project publicly, communicating aims, process and outcomes to a mixed audience',
          'Submit a written reflection that evaluates outcomes against the original success criteria',
          'Extract transferable lessons and define the project’s professional afterlife',
        ],
        content: [
          'The final presentation is a professional genre in itself — part TED-style narrative, part viva. In fifteen to twenty minutes with media, tell the project’s story in the shape funders recognize: the need or idea, what you did, what happened (with evidence), what you learned, and what comes next; then take questions from faculty and audience. Presenters fail this by narrating chronology (then I did, then I did); succeed by structuring around outcomes and decisions, showing the work itself generously — play the track, screen the footage, demonstrate the workshop game — because the artifact persuades more than description.',
          'The written reflection is where the course’s learning is actually assessed, and honesty scores higher than triumphalism. Evaluate each original success criterion with evidence: met, partially met, or missed and why; analyze two or three pivotal decisions using your journal as data, including at least one you would now make differently; and reflect on yourself as a self-directed professional — how you handled ambiguity, deadlines, other people and your own motivation across fourteen weeks without anyone structuring your time. Kolb’s experiential learning cycle (experience, reflection, conceptualization, experimentation) is a useful scaffold: end each section with the principle you will carry forward.',
          'Finally, give the project an afterlife. Decide what continues: does the concert series seek funding for a second season, does the EP anchor your booking pitch, does the community partnership continue with you or get handed to a successor with documentation? Update your CV, website and portfolio with the project while evidence is fresh, and write the 100-word and 300-word versions of its story now — you will reuse them in applications for years, and the independent project frequently becomes the thing interviewers most want to discuss.',
        ],
        listening: [
          'Benjamin Zander — TED talk on classical music and audiences, as a presentation-craft model',
          'Esperanza Spalding — 12 Little Spells (project rollout as narrative)',
          'Tan Dun — Water Passion after St. Matthew (excerpts) — an interdisciplinary project communicated globally',
        ],
        assignments: [
          'Deliver the public final presentation with media and Q&A',
          'Submit the written reflection evaluating all success criteria with journal-based decision analysis',
          'Publish the project to your professional platforms and submit the 100-word and 300-word project narratives',
        ],
      },
    ],
  },
  {
    id: 'ped402',
    code: 'PED402',
    title: 'Pedagogy of the Principal Instrument',
    credits: 2,
    stream: 'professional',
    description:
      'Training in the art and business of teaching your instrument or voice, on the RCM Teaching Musician model. The course moves from learning science and method-book literacy through lesson design, inclusive practice and studio ethics to a supervised teaching practicum, culminating in a professional teaching portfolio.',
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Learning Theories for Musicians',
        objectives: [
          'Compare behaviorist, cognitivist, constructivist and social learning accounts of how musical skill develops',
          'Explain motor-learning principles — blocked versus random practice, feedback timing, mental rehearsal — with musical examples',
          'Analyze your own musical training through these theoretical lenses',
        ],
        content: [
          'Teaching without a theory of learning is guesswork, so the course begins with the major accounts of how humans acquire skill. Behaviorism (Skinner) explains why immediate reinforcement shapes practice habits and why praise contingent on specific behavior (you kept the bow parallel that whole phrase) outperforms general praise; cognitivism focuses on working-memory limits, which is why beginners drown when asked to manage pitch, rhythm, posture and tone simultaneously and why good teachers isolate one variable at a time. Constructivism (Piaget, Bruner) holds that learners build understanding rather than receive it, motivating discovery approaches where a student finds a fingering before being given one, and Vygotsky’s zone of proximal development defines the teacher’s core job: pitching tasks just beyond what the student can do alone, with scaffolding that is progressively removed.',
          'Motor learning research speaks directly to instrumental teaching. The contextual interference effect shows that blocked practice (repeating one passage twenty times) produces fast gains that evaporate, while random or interleaved practice produces slower gains that last — a counterintuitive finding teachers must explain to students who trust the feeling of blocked repetition. Feedback research distinguishes knowledge of results from knowledge of performance and warns against feedback after every attempt, which creates dependency; delayed and summarized feedback builds the student’s own error-detection, which is the actual goal. Mental practice activates overlapping neural circuitry with physical practice and, combined with physical work, outperforms physical practice alone for many tasks.',
          'Ericsson’s deliberate-practice framework — effortful, goal-directed work on tasks just beyond current ability, with feedback — reframes the ten-thousand-hours cliché: hours matter only when they are the right kind, and the teacher’s role is designing that kind. Apply each theory to your own history this week: identify one thing a teacher of yours did that behaviorism explains, one that scaffolding explains, and one practice habit of yours that motor-learning research would reform. Teachers who can name why a technique works can adapt it when it fails, which is the difference between a method and an understanding.',
        ],
        listening: [
          'Shinichi Suzuki-tradition recording: Suzuki Violin School, Book 1 reference recordings — hear sequenced difficulty',
          'J.S. Bach — Minuet in G major, BWV Anh. 114 — a canonical early-learning piece to analyze for cognitive load',
          'Béla Bartók — Mikrokosmos, Book 1 (selections) — constructivist sequencing by a major composer',
        ],
        assignments: [
          'Write a 600-word analysis of your own training identifying three theory-explained practices',
          'Design two versions of a practice assignment for one passage — blocked and interleaved — and explain the predicted difference',
          'Observe one lesson (video or live) and log every instance of feedback, classifying its type and timing',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Motivation and Deliberate Practice',
        objectives: [
          'Apply self-determination theory (autonomy, competence, relatedness) to studio teaching decisions',
          'Distinguish fixed and growth mindset language and audit teacher talk for each',
          'Teach students to design their own deliberate-practice sessions',
        ],
        content: [
          'Most students who quit lessons quit for motivational, not musical, reasons, so motivation is core professional knowledge. Deci and Ryan’s self-determination theory identifies three needs that sustain intrinsic motivation: autonomy (students who choose among three approved pieces practice more than students assigned one), competence (progress must be visible, which is why recordings of the student from three months ago are powerful), and relatedness (the teacher-student bond and peer community of group classes and studio recitals). Extrinsic rewards — stickers, exam grades, parental payment-per-practice — can jump-start behavior but, per the overjustification effect, can corrode intrinsic interest if they become the point.',
          'Dweck’s mindset research translates directly into teacher language. Praising talent (you’re so musical) builds a fixed mindset in which difficulty signals inadequacy and students avoid challenge; praising process (your slow work on that shift this week is why it speaks now) builds a growth mindset in which difficulty signals learning. Audit the words teachers use at moments of student failure — the most diagnostic moment — and script alternatives: not that was wrong but what did you hear, which trains evaluation, and not do it again but what will you change this time, which trains intention.',
          'The endgame is students who can practice without you, because a weekly lesson is under two percent of a student’s musical week. Teach an explicit practice architecture — goal, method, evaluation for each practice segment — and rehearse it in the lesson: have the student practice in front of you for five minutes while you coach the practicing, not the playing. Assign practice journals with three prompts (what I worked on, what changed, what’s next), and treat a student who reports honest failure with a good method as more successful than one who reports polished results from mindless repetition.',
        ],
        listening: [
          'Clara Schumann — Romance in A minor (a realistic intermediate-student goal piece to motivate around)',
          'Scott Joplin — The Entertainer (simplified and original versions) — autonomy-supportive repertoire choice in action',
          'Lang Lang — Piano Book (selections) — a professional artist framing student repertoire as art',
        ],
        assignments: [
          'Rewrite ten fixed-mindset teacher statements as process-focused alternatives',
          'Design a practice journal template and pilot it on your own practice for one week',
          'Interview one current student or amateur about why they continue (or nearly quit) lessons; map answers to SDT needs',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Beginner Method Books and Sequencing',
        objectives: [
          'Evaluate three major method books for your instrument against explicit sequencing criteria',
          'Explain the pedagogical logic of note-order, rhythm and technique introduction in each method',
          'Design a supplementary sequence to patch a chosen method’s gaps',
        ],
        content: [
          'A method book is a theory of learning frozen in print, and teachers must read them critically rather than obediently. Compare the assumptions across traditions: Suzuki delays note-reading in favor of ear-first learning modeled on language acquisition, with parental involvement and a common repertoire that builds community; exam-board syllabi (ABRSM, RCM Toronto) sequence by graded difficulty with balanced technical, reading and aural components; instrument-specific classics — Essential Elements for band instruments, Piano Adventures, the Rubank series, vocalises like Vaccai for voice — each choose a starting register, a first rhythm set, and an order of technical challenges, and every choice trades something away.',
          'Evaluate any method against concrete criteria: what note or hand position comes first and why (middle-C position teaches symmetry but delays reading range; C-major bias delays flat keys unhelpfully for winds); how fast rhythms accumulate and whether meter variety appears early; when the second technical dimension (new strings, register breaks, hand independence) arrives relative to consolidation of the first; whether the music is worth playing — students practice music they love — and whose music it includes, since many legacy methods present an all-male, all-European repertoire that modern supplements like the Piano Music of Black Composers series correct.',
          'No method survives contact with a real student intact, so professional practice is method-plus-supplements. Identify the canonical gaps in your chosen method — commonly rhythm reading, improvisation, transposition or ensemble playing — and build a supplement file: duets for lesson use (student learning accelerates when the teacher plays along), rote pieces beyond reading level to keep musicality ahead of literacy, and technical games that isolate one skill. The goal of week three is a documented, defensible answer to the first question every parent asks: what book will my child use, and why that one?',
        ],
        listening: [
          'Suzuki Violin School, Book 1 — Twinkle Variations (reference recording) — analyze the rhythm-first sequencing',
          'Faber Piano Adventures Level 1 performance tracks (selections) — production values in modern methods',
          'Florence Price — pieces from A Child’s Album-style collections in the Piano Music of Black Composers anthology',
        ],
        assignments: [
          'Write a comparative review (800 words) of three methods for your instrument against the evaluation criteria',
          'Chart the first-year sequence of your preferred method: notes, rhythms and techniques by unit',
          'Compile a ten-item supplement file that patches the method’s two biggest gaps, with a sentence justifying each item',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Posture and Technique Foundations for Beginners',
        objectives: [
          'Describe the healthy setup for your instrument or voice in anatomically accurate language',
          'Diagnose the most common beginner setup faults and sequence corrections by priority',
          'Design first-lessons technique routines that build habits before they must be unlearned',
        ],
        content: [
          'The first month of lessons sets habits that either serve a student for life or must be painfully unlearned later, and setup faults are the leading cause of both stalled progress and playing-related injury. Learn to describe your instrument’s healthy setup in anatomical terms — balanced skeletal support, neutral wrists, released shoulders, breath from diaphragmatic descent rather than clavicular heaving — because vague imagery (relax!) fails where specific instruction (let the shoulder blade slide down your back) succeeds. Body-mapping work from the Alexander and Andover traditions matters here: many faults come from a false map, like the student who thinks the arm starts at the shoulder joint rather than the sternoclavicular joint and therefore reaches instead of releasing.',
          'Faults must be triaged, not machine-gunned. Prioritize corrections by three tests: does it risk injury (a collapsed left wrist, a raised larynx under pressure — fix immediately), does it block the next stage of development (a rigid embouchure that works at mezzo-forte but will fail at the octave — fix soon), or is it cosmetic (fix never, or last). Correct through the environment before the body: adjust chair height, footstool, strap length and stand position first, since a well-arranged environment produces good posture without willpower, and use mirrors, video and physical modeling because beginners cannot feel what they cannot yet perceive.',
          'Design the first six lessons so technique is embedded in music, not quarantined before it. Rote pieces on open strings or single notes let full attention go to sound and setup; games (statue checks, slow-motion bows, sirens for voice) build habits through play rather than drill; and every lesson should end with the student sounding good at something, because tone is the beginner’s reward and the teacher’s best diagnostic — a healthy setup is audible. Write out your routine for the very first lesson minute by minute: what you show, what they try, what goes home.',
        ],
        listening: [
          'Pablo Casals — Song of the Birds — tone as the lifelong product of setup',
          'Emmanuel Pahud — Debussy, Syrinx — breath and support made audible',
          'Barbara Hannigan — warm-up and rehearsal footage (any masterclass) — vocal posture and release in action',
        ],
        assignments: [
          'Write an anatomically accurate one-page setup guide for your instrument with photographs or diagrams',
          'Video three peers or students playing; produce a triaged fault diagnosis for each using the three tests',
          'Script your first-ever-lesson plan minute by minute, including the take-home routine',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Lesson Planning and Curriculum Design',
        objectives: [
          'Write lesson plans with objectives, activities, assessment and contingencies',
          'Design a year-long curriculum map for one student profile using backward design',
          'Balance repertoire, technique, musicianship and creativity within a 30-minute lesson economy',
        ],
        content: [
          'Backward design (Wiggins and McTighe) orders planning correctly: decide what the student should be able to do by year’s end, define what evidence would show it, and only then plan activities. A year map for a nine-year-old second-year pianist might target three performed pieces, all major pentascales, sight-reading at two levels below repertoire, and improvising an answer phrase — and each weekly lesson then serves the map rather than drifting on whatever the student happened to practice. Plans need objectives phrased as observable behavior (the student will play the B section hands together at quarter = 60, not the student will understand the B section) because observable objectives make assessment automatic.',
          'The 30-minute lesson is a brutal economy that punishes poor structure. A reliable skeleton: two minutes of arrival and rapport, five of technique or warm-up with one focus, fifteen on repertoire (deep work on one section beats shallow passes over everything), five of musicianship or creativity — sight-reading, ear work, improvisation on rotation — and three to set the week’s practice with the student writing their own assignment, since self-written assignments are remembered and owned. Plan contingencies for the two commonest surprises: the student who practiced nothing (pivot to in-lesson learning of next week’s material, modeling the practice process) and the student who mastered everything (extension material must already be in your bag).',
          'Curriculum-level thinking also means repertoire literacy: maintain a leveled repertoire list for your instrument organized by technical demand, musical style and student appeal, drawing on graded syllabi but going beyond them into film, folk, popular and living composers’ music. Every piece assigned should earn its six weeks of the student’s life by teaching at least two things from the year map. Review and revise the map each term against reality — curriculum design is a loop, not a document.',
        ],
        listening: [
          'Dmitri Kabalevsky — 24 Pieces for Children, Op. 39 (selections) — a composed curriculum in miniature',
          'Valerie Coleman — Umoja (flexible ensemble version) — living-composer repertoire for developing players',
          'Edward Elgar — Salut d’amour (student-accessible arrangement) — appeal and teaching value combined',
        ],
        assignments: [
          'Write three full lesson plans (beginner, intermediate, returning adult) with objectives, timings and contingencies',
          'Produce a year-long curriculum map for one detailed student profile using backward design',
          'Build a 20-piece leveled repertoire list annotated with what each piece teaches',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Teaching Demonstration Labs',
        objectives: [
          'Teach a 15-minute mini-lesson to a peer under faculty observation',
          'Apply a structured observation protocol when watching peers teach',
          'Revise your teaching based on video review and structured feedback',
        ],
        content: [
          'Teaching is a performance skill, and like performance it improves only through observed repetitions with feedback. In the lab format, each student teaches a 15-minute mini-lesson — a first lesson, a piece introduction, or a technical fix — to a peer simulating a defined student profile, while the class observes with a protocol that separates description (the teacher gave instructions while the student was playing) from judgment (that was confusing), because descriptive observation is learnable and transfers. Faculty debrief focuses on two or three leverage points rather than a laundry list, mirroring good teaching itself.',
          'The most common novice-teacher faults are highly predictable, so watch for them in yourself: talking too much (aim for the student making sound over 50 percent of the lesson), teaching the piece instead of the student (delivering your planned content regardless of what the learner in front of you actually needs), fixing five things at once (working memory again — one focus per attempt), and demonstrating without directing attention (a demonstration is only as good as the listening instruction that precedes it: watch my wrist at the string crossing). Naming these faults turns them from character flaws into technical problems, which is precisely the reframe you will later offer your own students.',
          'Video review is uncomfortable and irreplaceable. Watch your mini-lesson twice: once tracking the student (were they thinking, guessing, or waiting?), once tracking yourself (talk ratio, question quality — open questions like what did you notice versus closed ones like was that better — and physical positioning). Write a two-point revision plan and teach a second mini-lesson applying it; the delta between takes, not the polish of either, is what this unit assesses, exactly as growth-oriented assessment should.',
        ],
        listening: [
          'Itzhak Perlman — masterclass footage from the Perlman Music Program — attention-directing before demonstration',
          'Nadia Boulanger — documented teaching excerpts (Mademoiselle documentary) — questioning technique',
          'A video of your own mini-lesson, watched twice with the two tracking lenses',
        ],
        assignments: [
          'Teach two observed 15-minute mini-lessons, the second applying your revision plan',
          'Complete structured observation forms for four peer lessons using descriptive language only',
          'Submit your video self-review with talk-ratio estimate, question inventory and two-point revision plan',
        ],
      },
      {
        id: 'week-07',
        week: 7,
        title: 'Group Teaching and El Sistema-Style Contexts',
        objectives: [
          'Adapt instrumental pedagogy from one-to-one to group and large-ensemble teaching formats',
          'Explain the El Sistema philosophy and evaluate the evidence on intensive ensemble-based programs',
          'Design a group class plan with differentiation for mixed levels',
        ],
        content: [
          'Group teaching is not one-to-one teaching done to several people at once; it is a different discipline with its own techniques. The group format offers what private lessons cannot — peer modeling (students learn enormously from watching near-peers succeed), ensemble skills from day one, motivational energy and economic access — but demands classroom-management craft: routines for entering and unpacking, non-verbal signals for attention, pacing that never leaves the majority idle, and rotational structures where subgroups alternate playing, observing with a job (listen for whether their bows stay in the lane), and fingering silently. Rhythm-first, sound-before-symbol approaches like those in Paul Rolland’s string pedagogy and Music Learning Theory (Gordon) suit groups particularly well.',
          'El Sistema, founded by José Antonio Abreu in Venezuela in 1975, reframed ensemble teaching as social action: intensive, frequent, mostly free orchestral programs where the orchestra itself is the classroom and citizenship laboratory, producing alumni from Gustavo Dudamel to the Simón Bolívar Symphony Orchestra. Its global offspring — Sistema Scotland’s Big Noise, El Sistema USA programs, Superar in Europe — adapt the model with varying intensity, and the research picture is genuinely mixed: studies report gains in engagement, attendance and self-esteem, while critics such as Geoff Baker document authoritarian tendencies and question the strength of causal evidence. A professional teaching musician should be able to argue both sides and still act.',
          'Differentiation makes or breaks mixed-level groups. Techniques include layered parts (the same piece arranged so beginners play open-string roots while advanced students play the melody — the flexible-ensemble scoring of composers like Valerie Coleman and arrangements in the Sound Innovations tradition support this), role rotation so status does not calcify, and tiered assignments from a common core. Design your group plan so that at any moment a visitor could not instantly tell who the weakest player is — that invisibility is a design achievement, and it protects exactly the students group programs most aim to serve.',
        ],
        listening: [
          'Simón Bolívar Symphony Orchestra / Gustavo Dudamel — Bernstein, Mambo from West Side Story (live)',
          'Sistema Scotland Big Noise — documentary footage of a nucleo rehearsal',
          'Valerie Coleman — Umoja (flexible ensemble) — layered-parts repertoire in practice',
        ],
        assignments: [
          'Write a 45-minute group class plan for six mixed-level beginners with rotation and differentiation built in',
          'Read one pro-Sistema study and one critique (e.g. Baker); write a 500-word balanced evaluation',
          'Arrange 16 bars of a folk tune in three simultaneous difficulty layers for your instrument family',
        ],
      },
      {
        id: 'week-08',
        week: 8,
        title: 'Inclusive Teaching and Special Educational Needs',
        objectives: [
          'Apply Universal Design for Learning principles to instrumental teaching',
          'Adapt teaching for common profiles: autism, ADHD, dyslexia, visual and hearing impairment, physical disability',
          'Locate adaptive instruments, notation resources and referral pathways',
        ],
        content: [
          'Inclusive teaching starts from Universal Design for Learning: plan multiple means of representation (demonstrate aurally, visually and kinesthetically, not just via notation), multiple means of action (a student may show understanding by playing, singing, moving or arranging), and multiple means of engagement — because designs that accommodate the edges usually improve learning for everyone. This reframes special educational needs from a list of exceptions to a design stance: the question is not can this student learn music but what conditions does this student need, and the history of musicians from Evelyn Glennie (profoundly deaf percussionist) to Nobuyuki Tsujii (blind concert pianist) demonstrates that the ceiling is set by teaching, not by diagnosis.',
          'Specific profiles reward specific knowledge. Autistic students often thrive on predictable lesson structure, explicit language over idiom, and controlled sensory environments (many are hypersensitive to volume — position them away from the piano’s open lid); ADHD profiles respond to short varied activity blocks, movement built into the lesson, and immediate goals; dyslexia frequently co-presents with difficulty in notation reading, where color-coding, enlarged scores, off-copy learning and rhythm-syllable systems help. Visually impaired students may use Braille music, large print or ear-based learning; deaf and hard-of-hearing students work through vibration, visual cueing and residual hearing, as Glennie’s barefoot performance practice shows; physical disabilities call for adaptive instruments — one-handed recorders and adapted brass through organizations like the OHMI Trust, and technology such as Clarion and other accessible digital instruments.',
          'Professional inclusion also means knowing your limits and your network. Learn intake questions that invite disclosure without demanding it (is there anything about how you learn best that would help me teach you well?), document adaptations that work, and build referral knowledge: music-therapy services for goals that are therapeutic rather than musical, local SEN music organizations, and the family’s existing support team, with whom a coordinated approach beats improvisation. Inclusion is also economic and cultural — sliding-scale fees, repertoire that reflects students’ identities, and studio policies written in plain language are inclusion decisions too.',
        ],
        listening: [
          'Evelyn Glennie — TED talk How to Truly Listen, plus her recording of Joseph Schwantner’s Percussion Concerto',
          'Nobuyuki Tsujii — Liszt, La campanella (live at the Van Cliburn Competition)',
          'The British Paraorchestra — Terry Riley, In C (excerpt) — adaptive instruments in professional performance',
        ],
        assignments: [
          'Redesign one of your week-5 lesson plans through UDL: add alternative representations, actions and engagement paths',
          'Write adaptation one-pagers for two profiles of your choice, citing specific tools and resources',
          'Draft inclusive intake-form questions and a plain-language studio policy statement',
        ],
      },
      {
        id: 'week-09',
        week: 9,
        title: 'Adolescent and Adult Learners',
        objectives: [
          'Adapt teaching for adolescent development: identity, autonomy, motivation and the dropout cliff',
          'Apply andragogy principles to adult beginners and returners',
          'Handle changing-voice and physical-growth issues appropriate to your instrument',
        ],
        content: [
          'Adolescence is where studios lose the most students, and the losses are structural, not random. Around ages 12 to 15, identity formation makes music either self-defining or self-alienating; autonomy needs collide with parent-mandated lessons; social comparison sharpens just as practice demands rise; and school pressures crowd the calendar. Effective responses give real autonomy (repertoire co-designed with the student, including film, game and popular music treated seriously — a teenager who arranges a song they love is doing genuine musicianship), create peer contexts (bands, ensembles, studio classes) because belonging retains adolescents better than progress does, and renegotiate goals openly: a student who wants to play well at a campfire has a legitimate goal deserving a real curriculum.',
          'For singers and wind players, adolescence is also physiological. The changing voice requires informed handling — John Cooksey’s stages of male voice change and equivalent frameworks for female voice change guide range selection and repertoire, and the cardinal rule is never to push range or volume through instability; cambiata choral repertoire exists precisely for this window. String and piano students hit growth spurts that disrupt proprioception seemingly overnight, requiring temporary technical resets, and instrument sizing decisions (moving to full-size too early or late) have long consequences.',
          'Adult learners invert most beginner assumptions. Knowles’s andragogy holds that adults are self-directed, bring rich experience, and need to know why before they invest — so explain the purpose of every exercise, connect new learning to what they already know, and expect faster conceptual progress with slower motor progress than children show, which adults find demoralizing unless you predict it for them out loud. Adults carry aspiration and shame in equal measure (many are returners with a critical inner voice installed by a childhood teacher), practice in small unpredictable windows around jobs and families, and flourish with repertoire dignity: real music at accessible difficulty, from Satie’s Gymnopédie No. 1 to lead-sheet standards, never children’s material.',
        ],
        listening: [
          'Erik Satie — Gymnopédie No. 1 — adult-beginner repertoire with full musical dignity',
          'Benjamin Britten — from A Ceremony of Carols (cambiata-friendly lines to study for changing voices)',
          'Billie Eilish / Finneas — Ocean Eyes (as an adolescent-chosen arranging project of genuine craft)',
        ],
        assignments: [
          'Design a retention plan for a hypothetical 14-year-old considering quitting: autonomy, peers and renegotiated goals',
          'Write a first-lesson plan for a 45-year-old returner, including how you will address the inner critic explicitly',
          'For your instrument, summarize the adolescent physical-change issues and your management protocol in one page',
        ],
      },
      {
        id: 'week-10',
        week: 10,
        title: 'Studio Business and Ethics',
        objectives: [
          'Build a studio business plan: pricing, policies, scheduling, premises and marketing',
          'Apply safeguarding and professional-boundary standards to private teaching',
          'Handle money, taxes, insurance and data protection as a self-employed teacher',
        ],
        content: [
          'A private studio is a small business, and underpricing is the profession’s chronic disease. Set rates from a target annual income divided by realistic teachable hours (30 contact hours a week is near the sustainable ceiling once planning, admin and your own practice are counted), benchmarked against local market rates and your qualifications — then hold them, because teachers who charge apologetically attract clients who value them accordingly. Written studio policies are the professional backbone: payment by term or month rather than per lesson (smoothing income and signaling commitment), a 24-hour cancellation rule with stated make-up limits, and expectations on practice, instruments and parental roles, all delivered before the first lesson so every later conversation has a document behind it.',
          'Safeguarding is non-negotiable and mostly structural. Teach where you can be seen (windows in doors, parents welcome, no closed private spaces with minors), obtain the background checks your jurisdiction provides, communicate with students under 18 only through parents or on channels parents can see, and know your local mandatory-reporting obligations and the procedure if a child discloses harm: listen, do not promise secrecy, record their words verbatim, report to the designated authority. Physical touch in instrumental teaching — posture adjustment, hand position — should be minimized in favor of modeling and verbal instruction, and always preceded by asking permission, with parental conversation about your approach up front.',
          'The financial and legal layer is unglamorous and essential: register as self-employed and keep books from the first lesson (income, expenses, the home-studio proportion of household costs where deductible); hold public liability insurance and, in many territories, membership of a professional body (MTNA, ISM, MTA equivalents) that provides templates and legal advice; comply with data protection when you store families’ contact details and lesson videos; and license properly, since photocopying purchased music beyond fair-use limits is both illegal and a poor ethical model for students. Ethics extends to pedagogy itself — honest progress reports to parents, no poaching colleagues’ students, and referring a student onward when their needs exceed your expertise is a mark of professionalism, not failure.',
        ],
        listening: [
          'Astor Piazzolla — Libertango — imagine pricing and programming a studio recital around crowd-pleasing repertoire',
          'Scott Joplin — Maple Leaf Rag — public-domain versus copyrighted edition status as a licensing case study',
          'A professional body podcast episode on studio policy (e.g. MTNA Business Digest, any episode)',
        ],
        assignments: [
          'Write a complete studio policy document: rates, payment terms, cancellations, make-ups, communication and safeguarding',
          'Build a first-year studio financial model: target income, hours, rates, expenses and tax set-aside',
          'Draft your safeguarding protocol including the disclosure procedure for your jurisdiction',
        ],
      },
      {
        id: 'week-11',
        week: 11,
        title: 'Assessment and Feedback',
        objectives: [
          'Distinguish formative from summative assessment and design both for studio teaching',
          'Write rubrics and use audio/video evidence to track student progress',
          'Prepare students for external assessments (graded exams, festivals, auditions) without teaching to the test',
        ],
        content: [
          'Assessment is not the enemy of artistry; unexamined teaching is. Formative assessment happens continuously inside lessons — questioning, listening diagnostically, watching a student self-correct — and its master technique is the feedback loop from Hattie’s research: feed up (where are we going), feed back (how is it going against that goal), feed forward (what next), which is only possible when lessons have explicit goals. Summative assessment (term recitals, graded exams, juries) certifies attainment at a point in time; healthy studios use it sparingly and diagnostically, mining an exam report for the next term’s priorities rather than treating the grade as the product.',
          'Rubrics make musical judgment teachable. A four-level rubric across dimensions — pulse and rhythm, pitch accuracy, tone, phrasing and dynamics, stage presence — converts that felt vague into specific and shows students that excellence has addressable components; even better, have students assess their own recordings against the rubric before you do, because calibrated self-assessment is the endgame of all feedback. Keep longitudinal evidence: a dated recording archive per student, revisited each term, is the most motivating assessment instrument that exists — students cannot argue with their own three-months-ago playing.',
          'External assessment systems — ABRSM, RCM Toronto and Trinity graded exams, festivals, youth-orchestra auditions — offer structure, goals and benchmarking, and they distort teaching when the syllabus becomes the curriculum: three exam pieces polished for a year while sight-reading, ear skills and repertoire breadth atrophy. Use them on your terms: enter students when ready rather than annually by default, treat scales and supporting tests as musicianship rather than tollbooths, and translate examiner-report language for students and parents, modeling how professionals metabolize judgment. For audition preparation, add simulation — recorded run-throughs, unfamiliar listeners, one-chance performances — because assessment performance is itself a trainable skill.',
        ],
        listening: [
          'ABRSM Grade 5 piano syllabus selections (current list) — analyze what the assessment values',
          'Mozart — Violin Concerto No. 3 in G major, K. 216, I (standard youth audition repertoire) — listen as an adjudicator',
          'Two recordings of the same student piece three months apart from any studio archive — longitudinal listening practice',
        ],
        assignments: [
          'Design a four-level performance rubric for your instrument and apply it to two recordings, justifying every rating',
          'Write a term-report template for parents that reports progress against goals, not just activities',
          'Plan a 10-week exam-preparation arc that protects sight-reading, ear work and repertoire breadth alongside the exam pieces',
        ],
      },
      {
        id: 'week-12',
        week: 12,
        title: 'Supervised Teaching Practicum',
        objectives: [
          'Teach a sequence of real lessons to an assigned student under faculty supervision',
          'Document planning, delivery and student outcomes across the sequence',
          'Respond to supervisor feedback with visible changes between lessons',
        ],
        content: [
          'The practicum is where the course cashes out: each student teacher is assigned a real learner — a beginner from the community program, a secondary-instrument peer, or a continuing student from the prep division — and teaches a supervised sequence of lessons, typically three to four across the practicum window. Everything from the semester now operates at once: you diagnose the student’s stage and needs, set sequence goals, plan each lesson with objectives and contingencies, teach with attention to talk ratio and single-focus feedback, and assess against evidence. The supervisor observes live or by video and debriefs after each lesson using the same descriptive protocol you practiced in the labs.',
          'What distinguishes strong practicums is responsiveness between lessons. After each debrief, choose one or two concrete changes — ask before touching the student’s hand position, cut teacher demonstration time in half, end with the student writing the assignment — and implement them visibly in the next lesson; supervisors assess the trajectory across the sequence more than any single lesson’s polish. Keep a practicum log with the plan, what actually happened (they always diverge — the divergence is the interesting data), the student’s observable outcomes, and your adaptation decisions, writing entries within 24 hours while detail survives.',
          'The practicum also rehearses the full professional wrapper: you communicate with the student (or their parent) about goals and progress, manage the room and the schedule, and close the sequence with a brief written progress report and a recommendation for the student’s next steps — exactly the artifacts a first employer or first private client will expect. Expect the humbling, universal discovery of every new teacher: the lesson you planned is not the lesson you teach, and the skill being assessed is not plan-execution but real-time judgment in service of the learner in front of you.',
        ],
        listening: [
          'Recordings of your practicum student’s assigned repertoire in professional performances, to set your own aural reference',
          'Your own practicum lesson videos, reviewed before each supervisor debrief',
          'Dorothy DeLay — teaching accounts and archival masterclass footage — long-arc studio relationships',
        ],
        assignments: [
          'Teach the supervised lesson sequence with full plans submitted in advance of each lesson',
          'Maintain the practicum log (plan, reality, outcomes, adaptations) within 24 hours of each lesson',
          'Write the closing progress report and next-steps recommendation for your student or their parent',
        ],
      },
      {
        id: 'week-13',
        week: 13,
        title: 'The Teaching Portfolio',
        objectives: [
          'Assemble a professional teaching portfolio: philosophy, evidence, curriculum samples and business documents',
          'Write a one-page teaching philosophy grounded in the semester’s theory and practice',
          'Present the portfolio and defend your pedagogical choices in a panel review',
        ],
        content: [
          'The teaching portfolio is the course’s summative deliverable and a genuinely usable professional asset — the document set you will draw on for community-school applications, university teaching assistantships and your own studio launch. Its core is the teaching philosophy statement: one page, first person, concrete, that states what you believe about how people learn music and shows those beliefs operating in your actual practice. The reliable test is falsifiability: I believe every student deserves excellence says nothing because no teacher believes the opposite, whereas I sequence ear-first and delay notation for the first term, because sound-before-symbol builds musicianship that reading can then describe, is a position with reasons, evidence and consequences.',
          'Evidence outweighs assertion throughout the portfolio. Include two or three best lesson plans annotated with what happened when taught; short practicum video excerpts (with permissions) chosen to show interaction rather than lecturing; your curriculum map and leveled repertoire list; the rubric and a progress report; the studio policy and safeguarding documents from week 10; and a reflective summary of your practicum trajectory quoting your own log — the log entry where lesson two changed because of lesson one’s debrief demonstrates responsiveness no philosophy statement can. Organize for a reader with ten minutes: philosophy first, evidence indexed, appendices ruthless.',
          'The panel review closes the loop: a 15-minute presentation of your portfolio followed by questioning that connects claims to evidence — if your philosophy invokes autonomy-supportive teaching, expect to be asked where in your video a student made a real choice. This defense rehearses every teaching interview you will face, where the universal questions are why do you teach, how do you know your students learn, and what would I see in your lesson; graduates leave with rehearsed, evidenced answers to all three, plus a document set that markets them from the first week of their careers.',
        ],
        listening: [
          'Leonard Bernstein — Young People’s Concerts: What Does Music Mean? — pedagogy as public artistry',
          'Sphinx Organization — performance and education footage — mission-driven teaching in practice',
          'One lesson-video excerpt from your own portfolio, chosen and defended in your presentation',
        ],
        assignments: [
          'Assemble the complete teaching portfolio with philosophy, evidence, curriculum and business documents',
          'Write and workshop the one-page teaching philosophy through one peer-review cycle',
          'Deliver the 15-minute panel presentation and defense of your portfolio',
        ],
      },
    ],
  },
  {
    id: 'ens402',
    code: 'ENS402',
    title: 'Large Ensemble 8',
    credits: 2,
    stream: 'ensemble',
    description:
      'The culminating semester of the large-ensemble sequence: a full professional-model concert cycle featuring side-by-side collaboration with a partner professional orchestra, choir or wind ensemble. Graduating members carry section-leadership and mentoring responsibility while performing at the standard the profession will expect of them next season.',
    prerequisites: ['ens401'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Unit 1: Season Launch — Professional Standards and Leadership Roles',
        objectives: [
          'Prepare assigned parts to first-rehearsal performance standard, the professional norm',
          'Take up a defined leadership role: principal, section mentor, stage or library assistant',
          'Analyze the semester’s repertoire cycle from full scores before rehearsals begin',
        ],
        content: [
          'In a professional orchestra the first rehearsal is close to concert-ready — players arrive with parts learned, bowings and breathings resolved, and tempo problems solved at home — and this final semester adopts that norm without apology. Preparation now means score-based study, not part-based note-learning: know what happens in the other sections during your rests, mark cue lines, and resolve ensemble-critical passages (the exposed woodwind chords, the string unisons, the brass chorale intonation) in sectionals you organize yourselves. The cycle typically pairs a cornerstone symphony with a contemporary work and a collaboration piece for the side-by-side program, and each demands a different preparation style.',
          'Every graduating member holds a leadership role this semester, because next year you may be the youngest professional in a section rather than the oldest student. Principals prepare bowings or breathings and lead sectionals; section mentors are paired with first- and second-year players for stand-partner coaching; stage and library assistants learn the operational spine of ensemble life — parts distribution, errata management, stage plots, timing sheets — that professionals depend on and rarely see taught. Leadership in an ensemble is mostly modeling: arriving early, marking parts immediately, responding to the conductor’s adjustments the first time.',
          'Score study before the first downbeat transforms what rehearsals can accomplish. Spend this unit with the full scores: map each work’s form, identify where your line is structural versus accompanimental (the second horn sustaining the harmonic floor in a Brahms slow movement is doing different work than when doubling the tune), and mark the conductor-dependent moments — fermatas, transitions, rubato zones — where your eyes must leave the part entirely. Write a one-page ensemble-risk map per work: the ten moments most likely to fail and what your section must do about each.',
        ],
        listening: [
          'Brahms — Symphony No. 2 in D major, Op. 73 (Berlin Philharmonic/Rattle) with score in hand',
          'Jessie Montgomery — Banner (Sphinx Virtuosi) — contemporary-work preparation study',
          'Shostakovich — Festive Overture, Op. 96 — first-rehearsal-standard preparation benchmark',
        ],
        assignments: [
          'Pass the parts check: perform the cycle’s exposed passages for your principal or coach at tempo',
          'Submit your leadership-role plan (sectional schedule, mentee pairing or operations checklist)',
          'Deliver the one-page ensemble-risk map for the cornerstone work',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Unit 2: Sectional Leadership and Mentoring Younger Players',
        objectives: [
          'Plan and run efficient sectionals with clear objectives and time discipline',
          'Coach a younger stand partner using the feedback skills of a section leader',
          'Standardize section sound: unified articulation, intonation strategy and dynamic scaling',
        ],
        content: [
          'Running a sectional is applied rehearsal technique, and it is a skill auditions never test but jobs constantly require. Plan it like a lesson: choose the three passages where sectional work adds most value (ensemble-precision spots, intonation chords, unified articulation), state the goal of each segment aloud, work at reduced tempo with a defined success criterion before restoring tempo, and stop talking — professional sectionals maintain a playing-to-talking ratio that student leaders almost always get backwards. End every sectional by playing the fixed passages in context so improvements bind to the music rather than to the exercise.',
          'Mentoring a younger stand partner rehearses studio pedagogy inside the ensemble. The stand is an intimate teaching venue: model part-marking habits (pencil in hand, mark the first time), narrate your listening (I tune this note to the flute, not the concertmaster), and give feedback in the section leader’s dialect — brief, specific, forward-looking, never public humiliation. Remember what the research on modeling says: your mentee learns more from watching how you recover from your own mistake in rehearsal than from anything you tell them.',
          'Section sound is a designed artifact. Agree explicitly on articulation defaults (where does the section sit between marcato and tenuto in this repertoire), on an intonation strategy (who is the reference in each texture — bass line for chords, principal for unisons; pure thirds in sustained chords versus equal temperament with keyboard), and on dynamic scaling so that forte in the accompanimental role sits under forte in the melodic role. These agreements are what listeners hear as a great section, and articulating them — literally writing them down for your section this unit — is the leadership deliverable.',
        ],
        listening: [
          'Beethoven — Symphony No. 7, II (Vienna Philharmonic/Kleiber) — section-sound unanimity study',
          'Holst — First Suite in E-flat for Military Band (Eastman Wind Ensemble/Fennell) — articulation defaults in winds',
          'Florence Price — Symphony No. 1 in E minor, III Juba Dance — rhythmic section discipline',
        ],
        assignments: [
          'Lead one sectional from a submitted plan; collect written feedback from two participants',
          'Complete three documented mentoring sessions with your assigned younger player',
          'Write your section’s sound agreement: articulation defaults, intonation references and dynamic scaling for the cycle',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Unit 3: Side-by-Side Rehearsals with the Professional Partner',
        objectives: [
          'Integrate into a mixed professional-student ensemble, adapting instantly to professional rehearsal pace',
          'Absorb and log the tacit professional practices observable at close range',
          'Build professional relationships appropriately: preparation, courtesy and curiosity',
        ],
        content: [
          'The side-by-side is the semester’s centerpiece: students share stands with members of a partner professional orchestra or ensemble for a rehearsal sequence and joint concert, the model used by programs from the New World Symphony to conservatory partnerships worldwide. Professional rehearsal pace is the first shock — a professional orchestra may fully prepare a program in three or four rehearsals, so nothing is played twice without a reason, conductors’ instructions are implemented immediately and remembered permanently, and self-noise (practicing licks during pauses, chatter) is absent. Your job is to match that responsiveness: mark every instruction instantly, apply notes given to other sections to your own playing, and never be the reason something is repeated.',
          'Sitting next to a professional is a masterclass in tacit knowledge, if you watch for it. Observe how they mark parts (economically, legibly, immediately), how they listen (watch their eyes find the section they are tuning to), how they pace physical effort across a three-hour rehearsal, how they negotiate stand-partner logistics (page turns, divisi splits) without a word, and how they behave in the break — the social fabric of professional life is visible at the coffee urn. Keep a side-by-side journal and log three observed practices per rehearsal with a note on how you will adopt each.',
          'These weeks are also relationship weeks, and the etiquette matters. Introduce yourself briefly, let musical respect precede questions, and when you do ask, ask well — specific questions about their instrument choices, preparation habits or career paths land far better than can you get me an audition; many professionals actively enjoy mentoring a well-prepared student, and side-by-side stand partners have historically become references, teachers and colleagues. The reputation you build in these rehearsals is your first professional reputation, and this industry’s memory is long.',
        ],
        listening: [
          'Mahler — Symphony No. 1 in D major (Lucerne Festival Orchestra/Abbado) — a mixed hand-picked ensemble at work',
          'The side-by-side cycle repertoire in your partner ensemble’s own recording, to learn their house style',
          'Anna Clyne — Masquerade — energizing joint-concert repertoire study',
        ],
        assignments: [
          'Maintain the side-by-side journal: three observed professional practices per rehearsal with adoption plans',
          'Implement every conductor instruction without repetition; have your principal verify and countersign your part markings',
          'Conduct one substantive professional conversation and summarize its advice in the journal',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Unit 4: The Major-Work Cycle — Depth, Stamina and Artistic Ownership',
        objectives: [
          'Sustain concentration and physical efficiency across full run-throughs of a major symphonic work',
          'Contribute interpretive intelligence within the conductor’s framework',
          'Solve advanced ensemble problems: tempo transitions, balance in tuttis, intonation drift',
        ],
        content: [
          'A major symphony — a Brahms, Tchaikovsky, Shostakovich or Mahler — is an endurance event, and this unit trains the stamina layer that separates a good first half from a good whole concert. Physical efficiency is the foundation: release tension in rests as deliberately as you play in passages, scale effort so climaxes still have headroom in the finale, and manage the micro-recovery moments (shoulder release at every long rest, jaw and hand checks at movement breaks) that professionals execute automatically. Concentration is equally trainable — practice attention recovery, the skill of noticing a drift and returning to the sound within a beat, because in a 45-minute work everyone drifts and only the recovery speed differs.',
          'Artistic ownership inside someone else’s interpretation is the ensemble player’s peculiar art. The conductor sets the frame — tempo, character, balance priorities — and within it you make dozens of live decisions: exactly how to voice your note in the chord, where your crescendo peaks so the phrase passes cleanly to the oboes, how much to lean on an appoggiatura in the section unison. Study the cycle’s major work with two contrasting reference recordings this unit, form a view of the key interpretive choices, and then commit to executing the conductor’s view wholeheartedly even where it differs — that professional duality, conviction without ego, is what conductors mean when they praise an orchestra’s flexibility.',
          'The advanced ensemble problems of the cycle deserve named solutions. Tempo transitions fail when players wait for certainty, so learn the conductor’s preparatory habits and commit with the gesture; tutti balance follows the principle that whoever has the moving line or the theme projects while everyone with sustained harmony plays under their dynamic (Strauss’s advice to look at the melody and conduct the accompaniment applies to playing too); intonation drift over long movements is countered by anchoring to the bass and to the winds’ fixed pitches at structural downbeats rather than trusting drift-accumulated section consensus. Log one such problem and its working solution per rehearsal.',
        ],
        listening: [
          'Tchaikovsky — Symphony No. 5 in E minor, Op. 64 (Leningrad Philharmonic/Mravinsky) and a modern contrast (Oslo/Jansons)',
          'Shostakovich — Symphony No. 5 in D minor, Op. 47, III–IV — stamina and pacing study',
          'Mahler — Symphony No. 1, finale — climax scaling across a long span',
        ],
        assignments: [
          'Complete two full run-throughs with a written stamina log: tension points, recovery moments, concentration drifts',
          'Compare two reference recordings of the major work; write one page on three interpretive divergences and the conductor’s choices',
          'Document one ensemble problem and its solution per rehearsal in your cycle log',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Unit 5: Recording and Broadcast Discipline',
        objectives: [
          'Perform to recording standard: consistency across takes, noise discipline and session etiquette',
          'Understand the session workflow: producers, talkback, takes, patching and editing',
          'Apply broadcast-specific stagecraft for a streamed or filmed concert',
        ],
        content: [
          'The recorded concert or session in this cycle introduces the discipline that dominates professional life, where a large share of income and reputation flows through microphones. Recording reverses concert psychology: instead of one unrepeatable arc, you produce multiple takes that must match in tempo, tuning and interpretation so the editor can cut between them — which is why professionals mark exact tempos, why the producer’s talkback instructions (bar 112, letter F, once more, watch the second-beat ensemble) must be executed identically, and why noise discipline (chair creaks, page turns, jewelry, mute drops) is a session skill in itself. The session hierarchy runs conductor–producer–engineer, and the producer’s ears in the booth outrank anyone’s on the floor about what the microphones caught.',
          'Understand the workflow so you can serve it. Sessions run in union-style time blocks with mandated breaks; works are recorded in complete takes for arc plus patch takes for repairs; the producer keeps a take log against the score, and orchestras that stay quiet between takes and reset instantly record more music per hour, which is why session efficiency is a hiring criterion in studio-heavy markets like London. Listen critically to playback when offered: hearing the microphone’s truth about your section’s balance and intonation, then adjusting in the next take, is the fastest ensemble feedback loop that exists.',
          'Broadcast and stream add a visual layer to the same discipline. Cameras change stagecraft — professional dress codes are enforced exactly, entrances and bows are choreographed for shots, and your face is on screen during rests, so the bored-viola meme is a career hazard, not a joke. Streamed concerts have precise timing (broadcast slots do not wait for slow stage resets), which elevates the stage crew and timing sheets from support to structure; graduating members in operations roles run this layer, and every member learns to hit a stage cue like a downbeat.',
        ],
        listening: [
          'A commercial session documentary (e.g. footage of Abbey Road orchestral sessions) for workflow observation',
          'Beethoven — Symphony No. 9 (Berlin Philharmonic Digital Concert Hall stream) — broadcast stagecraft study',
          'Your own ensemble’s raw takes versus the edited master from this cycle’s session, compared with score',
        ],
        assignments: [
          'Participate in the recording session; execute all producer instructions and submit your annotated part showing take marks',
          'Write a session report: what the microphones revealed about your section and two adjustments you made between takes',
          'Rehearse and pass the broadcast-stagecraft check: dress, entrances, camera awareness and stage-cue timing',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Unit 6: Final Concert Cycle and Professional Transition',
        objectives: [
          'Deliver the culminating concert at professional standard with full leadership responsibilities discharged',
          'Complete legacy handoff: parts, operations documentation and mentee transition',
          'Translate eight semesters of ensemble experience into audition and employment assets',
        ],
        content: [
          'The final concert is both a performance and a demonstration that the ensemble’s standard survives your departure. Graduating leaders run the last production cycle end to end — sectional schedules, stage plots, the timing sheet, the pre-concert talk — while the concert itself asks for the synthesis of the sequence: first-rehearsal preparation, section-sound agreements, side-by-side responsiveness, major-work stamina and recording discipline, all live at once. Programs traditionally give graduating members a visible moment, and how you handle it — generosity toward the ensemble rather than a soloist’s farewell — is itself the final lesson in ensemble citizenship.',
          'Legacy handoff is a professional practice too rarely taught. Return library parts with your markings intact where they help successors and erased where they were personal; write the operations handbook entries for your role (how the stage plot database works, where the errata lists live, what went wrong this year and how it was fixed); and formally transition your mentee, introducing them to their next mentor with a written summary of their progress and needs. Institutions run on this unglamorous documentation, and the habit of leaving every role better documented than you found it will distinguish you in every organization you join.',
          'Finally, convert the sequence into career assets. Eight semesters of ensemble work yield concrete audition and employment material: excerpt mastery from four years of repertoire (list every excerpt you have performed in context — context is what excerpt training lacks), leadership evidence for CVs and interviews (sectionals led, mentoring done, operations run), the side-by-side professional contacts, and this cycle’s recording for your portfolio. Write your ensemble narrative — the two-minute interview answer to what kind of colleague are you — with specific stories attached, because orchestras hire colleagues, not just players, and you now have four years of evidence.',
        ],
        listening: [
          'Dvořák — Symphony No. 9 in E minor, From the New World (a canonical culminating-cycle benchmark)',
          'Gabriela Lena Frank — Elegía Andina — contemporary programming for a final concert',
          'Sibelius — Finlandia, Op. 26 — ensemble sound as collective identity',
        ],
        assignments: [
          'Perform the final concert cycle with your leadership responsibilities discharged and reviewed by faculty',
          'Submit the legacy package: annotated parts returned, operations handbook entries, mentee transition summary',
          'Deliver your excerpt-in-context list, ensemble CV section and written two-minute ensemble narrative',
        ],
      },
    ],
  },
  {
    id: 'chm402',
    code: 'CHM402',
    title: 'Chamber Music 6',
    credits: 1,
    stream: 'ensemble',
    description:
      'The final chamber-music semester: the ensemble curates, produces and performs its own farewell program, taking every artistic and practical decision from repertoire to stage. The course assesses the group as a self-governing professional ensemble — the model of the chamber musician the sequence set out to build.',
    prerequisites: ['chm401'],
    lessons: [
      {
        id: 'week-01',
        week: 1,
        title: 'Unit 1: Curating the Farewell — Concept and Repertoire',
        objectives: [
          'Develop a curatorial concept that gives the farewell program a genuine through-line',
          'Select repertoire collaboratively, balancing artistic ambition, rehearsal economy and ensemble history',
          'Pitch the program to faculty as an ensemble, defending the concept collectively',
        ],
        content: [
          'A farewell program curated by the ensemble is the sequence’s final examination in artistic judgment: nobody assigns the repertoire, and the program must mean something. Strong curatorial concepts are specific enough to exclude — an evening tracing letters and friendships between composers (Brahms and the Schumanns, Ravel and Vaughan Williams), a program of lasts (final works, final movements, a piece from the group’s first semester revisited), a homage to the ensemble’s formation story — while weak concepts (music we like) exclude nothing and therefore say nothing. The concept should also honor the group’s actual history: returning to a work the ensemble played in second year, now transformed by four years of shared craft, is a curatorial move audiences find genuinely moving.',
          'Repertoire selection under a concept is a negotiation, and the negotiation is part of the assessment. Balance one substantial anchor (a Brahms or Dvořák quartet-weight work for your formation), one contemporary or underrepresented voice the group genuinely advocates (Caroline Shaw, Jessie Montgomery, Reena Esmail, Julius Eastman, or a peer composer from your conservatory), and lighter connective tissue — arrangements, miniatures, a spoken word from the stage — with cold-eyed rehearsal math: a semester holds roughly a dozen ensemble rehearsals plus coachings, and programming ninety minutes of new hard repertoire for that budget is self-sabotage. Decide too what farewell means practically: is this group continuing professionally, and if so the program doubles as a debut; if not, it is a completed statement, and both framings are honorable.',
          'The collective pitch rehearses professional life, where ensembles win engagements by proposing programs to presenters. Prepare a one-page prospectus — concept, repertoire with durations, why this ensemble for this program, venue and date — and present it with every member speaking, because presenters and faculty alike read internal balance from who talks. Defend the concept against the standard probes: what would you cut if the timing runs long, why this contemporary work rather than a familiar name, what will the audience leave holding?',
        ],
        listening: [
          'Brahms — Piano Quartet No. 1 in G minor, Op. 25 (or the anchor-weight equivalent for your formation)',
          'Caroline Shaw — Entr’acte (Attacca Quartet) — contemporary advocacy repertoire',
          'Danish String Quartet — Last Leaf (album) — a masterclass in concept-driven programming',
        ],
        assignments: [
          'Submit the one-page program prospectus with concept statement, repertoire, durations and rehearsal budget',
          'Deliver the collective pitch with all members speaking; revise the program per faculty conditions',
          'Write a short ensemble-history note identifying the work or thread that connects this program to your first semester',
        ],
      },
      {
        id: 'week-02',
        week: 2,
        title: 'Unit 2: Self-Governed Rehearsal — The Ensemble as Its Own Coach',
        objectives: [
          'Run a disciplined rehearsal cycle with rotating leadership and documented decisions',
          'Apply the sequence’s accumulated rehearsal techniques without external coaching as the default',
          'Use coachings strategically as consultations the ensemble directs',
        ],
        content: [
          'Four years of coached chamber music have one intended product: an ensemble that can rehearse itself, and this semester tests exactly that. Adopt professional rehearsal governance — an agreed schedule with attendance rules the group actually enforces, rotating rehearsal leadership so each member plans and runs sessions, and a decision log recording what was agreed (tempo of the slow movement, the balance solution at the recapitulation) so decisions stay made instead of being relitigated weekly. The classic quartet failure modes are known from decades of ensembles: the unspoken hierarchy where one voice always wins, the politeness spiral where nothing is ever really fixed, and the efficiency collapse where talk replaces playing — name them, and assign the group the job of policing all three.',
          'Your accumulated technique toolkit now runs without a coach: rehearse intonation from the bass and by chord function (pure thirds in sustained sonorities, melodic intonation in lines); solve ensemble precision with the metronome displaced to offbeats and with playing subdivisions aloud; balance by recording and listening from the audience position, since the truth about balance never lives on stage; and rehearse transitions and beginnings ten times more than their length suggests, because audiences judge ensembles disproportionately by entries, releases and silences. When conflict about interpretation arises — and in a good ensemble it must — use the professional protocol: try both versions full-heartedly, record them, and let the recording arbitrate.',
          'Coaching in this final semester inverts: the ensemble hires the expertise. Book your limited coachings deliberately — a string-quartet specialist for the anchor work’s style questions, the composer or a new-music specialist for the contemporary piece, a stage director for the program’s spoken and theatrical elements — and arrive with a written agenda of the three problems you could not solve yourselves. That is exactly how professional ensembles use coaching for their whole careers, and demonstrating it is worth more to your assessment than any polished passage.',
        ],
        listening: [
          'Beethoven — String Quartet in C-sharp minor, Op. 131 (recorded rehearsal footage of any major quartet) — rehearsal culture study',
          'Ravel — String Quartet in F major, II — precision-and-transition rehearsal benchmark',
          'Your own rehearsal recordings, reviewed weekly from the audience position',
        ],
        assignments: [
          'Maintain the decision log and rotating-leadership schedule across the rehearsal cycle',
          'Record and arbitrate one genuine interpretive disagreement using the try-both protocol; document the outcome',
          'Book coachings with written agendas of unsolved problems; report what each consultation changed',
        ],
      },
      {
        id: 'week-03',
        week: 3,
        title: 'Unit 3: The Living Voice — Contemporary Work and Collaboration',
        objectives: [
          'Prepare the program’s contemporary or commissioned work to advocacy standard',
          'Collaborate directly with a living composer or arranger where possible',
          'Integrate any extended techniques, electronics or theatrical elements reliably',
        ],
        content: [
          'The contemporary work on a farewell program carries a particular charge: it states what this ensemble believes the repertoire’s future includes. Advocacy standard means preparing the piece with the same interpretive depth as the Brahms — understanding its formal logic, its sound-world references and its notation conventions — rather than achieving mere accuracy, because audiences detect an ensemble’s belief in a piece within a minute. If the work uses extended techniques (Bartók pizzicato, bow overpressure, multiphonics, singing while playing), treat each as a technique to be practiced to reliability like any shift or trill, with a written legend agreed across the group for every non-standard symbol.',
          'Working with a living composer is a professional skill with its own etiquette, and this unit builds it if any opportunity exists — a conservatory composer, a commissioned peer, or a composer reachable by video call. Prepare questions that respect the score (we tried the harmonic at bar 40 two ways — which did you intend?) rather than requesting a masterclass; play for them early enough that their feedback can change the performance; and negotiate honestly where the notation asks the impossible, since composers routinely revise passages when performers demonstrate the problem — this collaborative loop is how the repertoire has always been made, from Joachim’s work with Brahms to Rostropovich’s with Shostakovich and Britten.',
          'If the program includes electronics, amplification, video or staging, production reliability becomes a rehearsal subject. Run the technology in every rehearsal from the moment it enters the concept, not just at the dress; assign one member as production owner with a cue sheet and a failure plan (what do we do if the track does not fire); and rehearse the failure plan, because the difference between a professional and a student ensemble is not whether technology fails but whether anyone in the audience can tell. Simple theatrical decisions — lighting states, spoken introductions, how the group physically inhabits the farewell frame — also get rehearsed, scripted and owned.',
        ],
        listening: [
          'Jessie Montgomery — Strum (Catalyst Quartet) — advocacy-standard contemporary performance',
          'Reena Esmail — String Quartet (Ragamala) excerpts — cross-tradition notation and technique',
          'George Crumb — Black Angels (Kronos Quartet) — extended techniques and theatre integrated',
        ],
        assignments: [
          'Perform the contemporary work in studio class; collect feedback specifically on conviction and clarity of advocacy',
          'Complete one composer or specialist consultation with prepared score-specific questions; log the changes it caused',
          'Submit the production cue sheet and demonstrate the failure plan in rehearsal',
        ],
      },
      {
        id: 'week-04',
        week: 4,
        title: 'Unit 4: The Audience Frame — Notes, Speaking and Production',
        objectives: [
          'Write the program book: notes, ensemble history and acknowledgments in the ensemble’s collective voice',
          'Script and rehearse spoken introductions that frame the farewell authentically',
          'Complete concert production: venue, publicity, tickets, recording and reception logistics',
        ],
        content: [
          'A curated program deserves a curated frame, and the farewell concert’s written and spoken materials carry unusual emotional weight. Write program notes in the ensemble’s collective voice — what this music means to this group, alongside the scholarship — and include a short ensemble history: where the group formed, what it has played, what it learned, told with specificity (the coaching where the slow movement finally opened; the tour van breakdown) rather than sentiment, because specificity is what makes audiences feel included in the story. Acknowledge teachers, coaches and families by name; the farewell program book becomes a keepsake, and producing a beautiful one is part of the artistic act.',
          'Speaking from the stage is now a rehearsed ensemble skill, not an improvised solo. Script who speaks before which work and what they say — sixty to ninety seconds, one idea per introduction, ending with a listening cue that hands attention to the music — and rehearse the speeches with the same seriousness as the transitions, including microphone technique if the hall requires it. The farewell frame invites one genuinely personal moment; place it deliberately (most ensembles put it before the final work or the encore), keep it short, and let the last music, not the last speech, close the story.',
          'Production is entirely the ensemble’s this time: book and confirm the venue with a written schedule including dress rehearsal and reception; produce publicity (a poster, an email to the ensemble’s four-year audience list, conservatory listings, personal invitations to every teacher and coach in the group’s history); arrange the recording, because this concert is both memory and portfolio material for each member’s next audition or the ensemble’s continuing life; and plan the reception, which at a farewell is not an afterthought but the concert’s second half socially. Assign every production task a single owner and a deadline in a shared production sheet — the tool this sequence has been building toward since the first coached rehearsal.',
        ],
        listening: [
          'Schubert — String Quintet in C major, D. 956, II — study how you would introduce profound music in sixty seconds',
          'Danish String Quartet — spoken introductions in any live concert video — stage-speech craft',
          'Osvaldo Golijov — Tenebrae (excerpt) — a work whose framing story transforms audience listening',
        ],
        assignments: [
          'Submit the complete program book: collective-voice notes, ensemble history, acknowledgments and credits',
          'Rehearse all spoken introductions on video; revise for length, single-idea focus and listening cues',
          'Deliver the production sheet with every task owned and dated; confirm venue, recording and publicity milestones',
        ],
      },
      {
        id: 'week-05',
        week: 5,
        title: 'Unit 5: Preview Performances and the Recorded Legacy',
        objectives: [
          'Perform the program in at least one preview setting and iterate on the evidence',
          'Capture a high-quality recording of the program for each member’s professional portfolio',
          'Stabilize interpretation: lock tempos, transitions and the spoken frame under performance pressure',
        ],
        content: [
          'No program is finished until it has met an audience, so the farewell concert gets at least one preview — a community venue, a school, a retirement residence, a house concert for the studio — chosen deliberately from the settings this ensemble has served across four years. Preview audiences are diagnostic gold precisely because they are not polite conservatory listeners: watch where attention holds and where it slides, whether the spoken introductions land as intended, and how the program’s emotional arc actually plays in a room; then hold a same-day debrief and make the final cuts and adjustments while impressions are concrete. A program note that confused the preview audience or an introduction that ran long gets fixed now, cheaply.',
          'The recorded legacy has two distinct products, and conflating them wastes both. The portfolio recording — captured at the preview, a dedicated session, or the dress rehearsal with patch time — serves each member’s auditions and applications, so choose the two or three movements that show ensemble virtuosity and individual quality, and capture them with the session discipline learned in the large-ensemble sequence: matched takes, noise control, a take log. The archival recording of the farewell concert itself serves memory and any continuing life of the group; brief the engineer on both goals, and clear the rights questions (the contemporary work’s composer permission for portfolio use) before, not after, the capture.',
          'Stabilization is the final interpretive phase: the window for new ideas closes, and the ensemble’s job becomes reproducing its best decisions reliably under pressure. Lock tempos with written metronome marks in the decision log, run the complete program including speeches and stage moves at least twice, and rehearse the pressure points — the exposed opening, the attacca into the finale, the moment after the personal speech when someone must play through feeling — because farewell concerts ambush ensembles emotionally, and the professional answer is to have rehearsed playing while moved. Trust the log: on stage, execute the decisions rather than renegotiating them.',
        ],
        listening: [
          'Dvořák — Piano Quintet No. 2 in A major, Op. 81 (or your anchor work) in two contrasting reference recordings',
          'Your preview-performance recording, reviewed with the decision log open',
          'Julius Eastman — Stay On It (Wild Up) — ensemble energy sustained under emotional charge',
        ],
        assignments: [
          'Perform the preview concert; submit the same-day debrief with the specific changes it caused',
          'Complete the portfolio capture with take log; deliver edited selections and confirm composer permissions',
          'Run two full stabilization performances including speeches; certify the locked decision log',
        ],
      },
      {
        id: 'week-06',
        week: 6,
        title: 'Unit 6: The Farewell Concert and What the Ensemble Leaves Behind',
        objectives: [
          'Perform the farewell concert at professional standard as a self-governed ensemble',
          'Complete a collective and individual reflection on four years of chamber-music formation',
          'Decide and document the ensemble’s afterlife: continuation, dissolution or transformation',
        ],
        content: [
          'The farewell concert is the sequence’s summative performance, and it is assessed as the work of a professional ensemble: the curation’s coherence, the self-governed preparation audible in the playing, the frame’s craft, and the group’s poise inside an emotionally loaded evening. Play the program as rehearsed and stabilized, protect each other on stage the way four years of shared risk has taught (the glance that steadies a shaking colleague before the exposed entry is chamber music too), and let the concert’s meaning come from the music’s quality rather than its announcement — the deepest farewell an ensemble can offer its audience is simply its best playing.',
          'Reflection afterwards happens at two levels. Collectively, the ensemble writes a short retrospective against the sequence’s arc — from conducted rehearsal discipline in first year, through coached interpretation, student-led programming and community performance, to this self-governed production — naming what the group can now do that no member could do alone, which is the actual content of chamber-music education. Individually, each member writes a reflection on their own formation as a colleague: how they learned to lead and to yield, what their recurring role in conflict was and how it evolved, and what kind of ensemble citizen they now are, with evidence from the decision logs and recordings the sequence has accumulated.',
          'Finally, the ensemble decides its afterlife deliberately rather than by drift. Continuing groups leave with concrete assets this semester built — a program that is now a bookable product, a portfolio recording, an audience list, a prospectus — and should schedule their first professional-life meeting before graduation scatters them across time zones. Dissolving groups close well: rights and recordings shared, the program archive deposited with the department for future ensembles to learn from, and the relationships explicitly carried forward as the beginning of a professional network, because the violist you argued with about a tempo for four years is precisely the colleague who will recommend you for a festival in ten. Both endings, done deliberately, are professional successes.',
        ],
        listening: [
          'Beethoven — String Quartet in F major, Op. 135, III Lento assai — leave-taking rendered in ensemble sound',
          'Caroline Shaw — Plan & Elevation, V The Beech Tree — a contemporary benediction',
          'The archival recording of your own farewell concert, heard once, together',
        ],
        assignments: [
          'Perform the farewell concert; complete the faculty assessment debrief as an ensemble',
          'Submit the collective retrospective and your individual colleague-formation reflection',
          'Deliver the afterlife decision document: continuation plan with first-meeting date, or closure archive deposited',
        ],
      },
    ],
  },
]
