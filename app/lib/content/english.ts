// ENGLISH — all 12 topics.
//
// ⚠️ SET TEXTS VARY MORE HERE THAN IN ANY OTHER SUBJECT. One school studies
// Macbeth, another Romeo and Juliet; one does An Inspector Calls, another Blood
// Brothers. The poetry anthology cluster differs by board too.
//
// So these topics teach the SKILLS and the terminology, which transfer to any
// text, and name the common set texts only as examples. Matthew should check
// which texts his school actually studies — the analytical approach here works
// for all of them, but the specific quotations and characters will not.
//
// Assessment Objective numbering also differs slightly between boards. The
// numbers used here follow the most common arrangement; check your own.

import type { TopicContent } from "./index";

export const ENGLISH: Record<string, TopicContent> = {
  // ─────────────────────────── YEAR 9 ───────────────────────────

  "english/reading-for-meaning": {
    summary:
      "Reading at GCSE is not about whether you enjoyed the text. It is about noticing what a writer has done and explaining the effect of that choice on a reader. This topic covers finding evidence, drawing inferences from it, and building the paragraph structure that every English answer for the next three years will use.",
    keyFacts: [
      {
        heading: "Explicit and implicit meaning",
        points: [
          "Explicit meaning is stated directly — you can point to the words that say it.",
          "Implicit meaning is suggested rather than stated, and has to be inferred.",
          "An inference is a conclusion drawn from evidence. 'His hands shook' implies fear without ever naming it.",
          "Questions asking what a text 'suggests' or 'implies' are asking for inference, and a literal answer will not score.",
        ],
      },
      {
        heading: "Choosing quotations",
        points: [
          "Short and precise beats long. A single well-chosen word is often stronger evidence than a whole sentence.",
          "Embed quotations inside your own sentence rather than dropping them in as a standalone line.",
          "Quote exactly, inside quotation marks, with the original spelling.",
          "Choose quotations you can actually say something about. A perfect quotation you cannot analyse earns nothing.",
        ],
      },
      {
        heading: "Paragraph structure",
        points: [
          "Point: make a clear statement answering the question.",
          "Evidence: give a short embedded quotation.",
          "Explanation: analyse the specific words and their effect on the reader.",
          "Some schools use PETAL, adding Technique and Link. The names differ; the logic is identical.",
          "The Explanation is where the marks are. Most weak answers have plenty of point and evidence and almost no analysis.",
        ],
      },
      {
        heading: "Analysing word choice",
        points: [
          "Zoom in on individual words, especially verbs and adjectives.",
          "Connotations are the associations a word carries beyond its literal meaning — 'slithered' suggests something sinister that 'moved' does not.",
          "Ask why the writer chose THAT word rather than an obvious alternative.",
          "Use tentative language: 'this suggests', 'this implies', 'this could imply'. Certainty about a writer's intention is rarely justified.",
        ],
      },
      {
        heading: "Structure and whole-text features",
        points: [
          "Structure is how the text is organised: the opening, how focus shifts, where the turning point falls, how it ends.",
          "Look for shifts — of time, place, perspective, mood.",
          "Paragraph and sentence length create pace. A short sentence after several long ones lands hard.",
          "Foreshadowing hints at what is to come; a cyclical structure returns at the end to where it began.",
        ],
      },
      {
        heading: "Purpose, audience and tone",
        points: [
          "Purpose: to entertain, inform, persuade, describe, advise or argue. Many texts do more than one.",
          "Audience: who the text is aimed at, shown by vocabulary, references and formality.",
          "Tone is the writer's attitude — angry, nostalgic, mocking, affectionate.",
          "Register is the level of formality, and shifts in it are usually deliberate.",
        ],
      },
    ],
    flashcards: [
      { term: "Inference", definition: "A conclusion drawn from evidence in a text rather than from something stated directly." },
      { term: "Explicit meaning", definition: "Meaning stated directly in the text, which can be pointed to." },
      { term: "Implicit meaning", definition: "Meaning suggested by the text rather than stated outright." },
      { term: "Connotation", definition: "The associations and feelings a word carries beyond its literal definition." },
      { term: "Embedded quotation", definition: "A short quotation woven into your own sentence rather than presented separately." },
      { term: "Tone", definition: "The writer's attitude towards their subject, conveyed through word choice and style." },
      { term: "Register", definition: "The level of formality of language, adjusted for audience and situation." },
      { term: "Purpose", definition: "The writer's reason for producing the text, such as to persuade, inform or entertain." },
      { term: "Structure", definition: "How a text is organised and ordered, including openings, shifts and endings." },
      { term: "Foreshadowing", definition: "Hints early in a text about events that will happen later." },
      { term: "Cyclical structure", definition: "A structure that ends by returning to where it began." },
      { term: "Tentative language", definition: "Cautious phrasing such as 'this suggests' or 'this may imply', used when interpreting a text." },
    ],
    examTips: [
      {
        tip: "Answer the question that was asked",
        detail:
          "If it asks about how the writer presents a character's fear, every paragraph must be about fear. Writing everything you noticed about the extract is the most common way to score badly with good material.",
      },
      {
        tip: "Spend most of your words on analysis",
        detail:
          "Point and evidence should be one line each. The explanation should be three or four. Answers that are mostly quotation with a sentence of comment sit in the bottom bands.",
      },
      {
        tip: "Zoom in on single words",
        detail:
          "Take one word from your quotation and unpick its connotations. 'The word \"crept\" suggests secrecy and unease' is worth more than a paragraph about the whole sentence.",
      },
      {
        tip: "Never just name a technique",
        detail:
          "'This is a metaphor' scores nothing. Say what it makes the reader picture or feel, and why the writer wanted that.",
      },
      {
        tip: "Use tentative phrasing",
        detail:
          "'This suggests' and 'this could imply' show interpretation. Stating flatly that the writer definitely meant something is less sophisticated and examiners notice.",
      },
      {
        tip: "Keep quotations short",
        detail:
          "Copying three lines wastes time and shows nothing. A few words you then analyse closely demonstrates far more skill.",
      },
      {
        tip: "Refer to 'the reader', not 'you'",
        detail:
          "Write about the effect on the reader rather than on yourself. It keeps the register formal and the focus on the writer's craft.",
      },
    ],
  },

  "english/creative-writing": {
    summary:
      "In the writing half of the exam you are marked on two things: how well you communicate and organise ideas, and how accurately you write. Vocabulary and imagination matter, but structure, paragraphing and punctuation carry an enormous share of the marks — and they are far easier to improve deliberately.",
    keyFacts: [
      {
        heading: "Planning",
        points: [
          "Spend around five minutes planning. It is not wasted time — unplanned writing loses structure marks.",
          "Decide the ending before you start, so the piece drives towards something.",
          "Keep the scope small. One moment described richly beats a whole life rushed.",
          "Plan four or five paragraphs and give each a clear job.",
        ],
      },
      {
        heading: "Openings and structure",
        points: [
          "Start in the middle of something, not with waking up or setting the scene at length.",
          "Effective openings: a striking image, a line of dialogue, an unusual detail, a short arresting sentence.",
          "A cyclical structure — ending where you began, changed — is simple and very effective.",
          "Vary paragraph lengths. A one-line paragraph creates emphasis, but only if it is rare.",
          "Never end with 'and then I woke up'. Examiners have seen it thousands of times.",
        ],
      },
      {
        heading: "Show, don't tell",
        points: [
          "Do not name the emotion; describe what it looks like. Not 'she was nervous', but 'she checked the door for the third time'.",
          "Use specific concrete detail rather than general description. 'A chipped blue mug' beats 'a cup'.",
          "Engage more than one sense — sound and smell are far more memorable than sight alone.",
          "Trust the reader to work it out. Explaining the emotion afterwards undoes the effect.",
        ],
      },
      {
        heading: "Sentence variety",
        points: [
          "A simple sentence has one clause; a compound joins two with a conjunction; a complex sentence has a subordinate clause.",
          "Vary the length deliberately. A short sentence after several long ones is a jolt.",
          "Vary the opening: start with an adverb, a verb ending in -ing, or a subordinate clause, not always the subject.",
          "One-word or fragment sentences work for impact, used sparingly.",
        ],
      },
      {
        heading: "Language techniques",
        points: [
          "Simile compares using like or as; metaphor states one thing is another; personification gives human qualities to non-human things.",
          "Onomatopoeia imitates sound; alliteration repeats initial sounds; sibilance repeats s sounds for a hissing effect.",
          "Semantic field: a group of words relating to the same idea, sustained through a passage to build atmosphere.",
          "Use techniques where they belong. Stuffing in a simile per paragraph is obvious and counts against you.",
        ],
      },
      {
        heading: "Technical accuracy",
        points: [
          "Punctuate dialogue correctly: new speaker, new paragraph; punctuation inside the speech marks.",
          "Use a full range: full stops, commas, question marks, exclamation marks, apostrophes, colons, semicolons, dashes and ellipses.",
          "A semicolon joins two complete related sentences. A colon introduces a list or an explanation.",
          "Its means belonging to it; it's means it is. There, their and they're are different words.",
          "Accuracy is a large and separate chunk of the marks — proofread for two minutes at the end.",
        ],
      },
    ],
    flashcards: [
      { term: "Simile", definition: "A comparison of one thing to another using 'like' or 'as'." },
      { term: "Metaphor", definition: "A comparison stating that one thing is another, without using like or as." },
      { term: "Personification", definition: "Giving human qualities or actions to something non-human." },
      { term: "Onomatopoeia", definition: "A word that imitates the sound it describes, such as crash or hiss." },
      { term: "Alliteration", definition: "The repetition of the same initial sound in nearby words." },
      { term: "Sibilance", definition: "The repetition of s and sh sounds, often creating a soft or sinister effect." },
      { term: "Semantic field", definition: "A group of words in a text that all relate to the same theme or idea." },
      { term: "Simple sentence", definition: "A sentence containing a single clause with one subject and one verb." },
      { term: "Compound sentence", definition: "A sentence joining two main clauses with a coordinating conjunction." },
      { term: "Complex sentence", definition: "A sentence containing a main clause and at least one subordinate clause." },
      { term: "Subordinate clause", definition: "A clause that adds information but cannot stand alone as a sentence." },
      { term: "Show, don't tell", definition: "Conveying emotion through described action and detail rather than naming the feeling." },
      { term: "Cyclical structure", definition: "A structure that returns at the end to the image or idea it began with." },
      { term: "Pathetic fallacy", definition: "Using weather or nature to reflect the mood of a scene or character." },
    ],
    examTips: [
      {
        tip: "Plan for five minutes, always",
        detail:
          "Structure and organisation are explicitly assessed. Writing that wanders because it had no plan cannot reach the top bands however good the individual sentences are.",
      },
      {
        tip: "Write less, but write it better",
        detail:
          "A tightly controlled piece of one and a half sides beats three rushed sides. Examiners reward quality of expression, not quantity.",
      },
      {
        tip: "Describe one moment, not a whole story",
        detail:
          "Most of the highest-scoring responses cover a few minutes in detail. Trying to fit a whole adventure in forces you into flat summary.",
      },
      {
        tip: "Proofread for two full minutes",
        detail:
          "Technical accuracy carries a large share of the marks. Catching three punctuation errors at the end can move you up a band.",
      },
      {
        tip: "Use ambitious vocabulary you are sure of",
        detail:
          "A precise ordinary word beats an impressive one used wrongly. Misused vocabulary is more damaging than plain vocabulary.",
      },
      {
        tip: "Punctuate dialogue properly or leave it out",
        detail:
          "New speaker, new paragraph, punctuation inside the speech marks. Badly punctuated dialogue draws attention to accuracy errors.",
      },
      {
        tip: "Match the form to the task",
        detail:
          "If asked to describe, do not write a story with a plot. If asked to narrate, do not write a static description. Answering in the wrong form caps your marks immediately.",
      },
    ],
  },

  "english/poetry-basics": {
    summary:
      "Poetry compresses meaning: every word, line break and pause is a choice. Analysing it means noticing those choices and explaining their effect. This topic covers the vocabulary you need — form, structure, imagery, sound — and the method for approaching a poem you have never seen before.",
    keyFacts: [
      {
        heading: "Form",
        points: [
          "Form is the type and shape of the poem — sonnet, ballad, ode, elegy, dramatic monologue or free verse.",
          "A sonnet has 14 lines and is traditionally associated with love. A volta is a turn in argument, often at line 9.",
          "A dramatic monologue is spoken by a single character who is not the poet, and often reveals more than they intend.",
          "Free verse has no regular rhyme or metre, which can suggest freedom or a lack of control.",
          "Ask why the poet chose that form, and whether they break its rules anywhere.",
        ],
      },
      {
        heading: "Structure",
        points: [
          "A stanza is a group of lines; regular stanzas suggest order and control.",
          "Enjambment is a sentence running over the line break without punctuation, creating flow or breathlessness.",
          "A caesura is a pause within a line, usually from punctuation, which breaks rhythm and creates emphasis.",
          "An end-stopped line finishes with punctuation, creating a sense of completeness or finality.",
          "Track how the poem develops from beginning to end — does the mood or perspective shift?",
        ],
      },
      {
        heading: "Rhyme and rhythm",
        points: [
          "Rhyme scheme is labelled with letters: ABAB, AABB, ABCB.",
          "Regular rhyme can suggest order, control or a childlike simplicity; irregular or absent rhyme can suggest disorder.",
          "Metre is the pattern of stressed and unstressed syllables. Iambic pentameter has five unstressed-stressed pairs per line.",
          "Rhythm mirrors content: a marching rhythm for soldiers, a broken one for grief.",
          "Half-rhyme (or para-rhyme) almost rhymes but not quite, creating unease.",
        ],
      },
      {
        heading: "Imagery",
        points: [
          "Imagery is language creating a picture in the reader's mind, appealing to any of the senses.",
          "Simile, metaphor and personification are the three you will use most.",
          "An extended metaphor is developed across several lines or the whole poem.",
          "Symbolism uses an object to represent an abstract idea.",
          "Pathetic fallacy uses weather or nature to reflect mood.",
        ],
      },
      {
        heading: "Sound and voice",
        points: [
          "Alliteration, assonance (repeated vowel sounds), consonance and sibilance all shape how a poem sounds aloud.",
          "Plosive sounds — b, p, t, d — feel harsh and abrupt. Soft sounds feel gentle.",
          "The speaker is the voice of the poem and is not necessarily the poet.",
          "Note whether the poem is first, second or third person, and who it addresses.",
        ],
      },
      {
        heading: "How to approach an unfamiliar poem",
        points: [
          "Read it twice: once for sense, once for technique.",
          "Work out who is speaking, to whom, about what, and how they feel.",
          "Annotate anything that stands out, then look for patterns among your annotations.",
          "Identify the mood and note where it changes.",
          "Build the answer around meaning, using techniques as evidence — not the other way round.",
        ],
      },
    ],
    flashcards: [
      { term: "Stanza", definition: "A group of lines in a poem, separated from others by a space." },
      { term: "Enjambment", definition: "A sentence or phrase running over the end of a line into the next without punctuation." },
      { term: "Caesura", definition: "A deliberate pause within a line of poetry, usually created by punctuation." },
      { term: "End-stopped line", definition: "A line ending with punctuation, creating a pause and a sense of completeness." },
      { term: "Volta", definition: "A turn or shift in argument or mood within a poem, often found in sonnets." },
      { term: "Sonnet", definition: "A fourteen-line poem with a regular structure, traditionally associated with love." },
      { term: "Dramatic monologue", definition: "A poem spoken throughout by a single character who is not the poet." },
      { term: "Free verse", definition: "Poetry without regular rhyme or metre." },
      { term: "Iambic pentameter", definition: "A line of five pairs of syllables, each an unstressed syllable followed by a stressed one." },
      { term: "Rhyme scheme", definition: "The pattern of rhymes at the ends of lines, labelled with letters such as ABAB." },
      { term: "Half-rhyme", definition: "Words that almost rhyme but not exactly, often creating a sense of unease." },
      { term: "Assonance", definition: "The repetition of similar vowel sounds in nearby words." },
      { term: "Plosive", definition: "A hard, abrupt consonant sound such as b, p, t or d." },
      { term: "Extended metaphor", definition: "A metaphor developed and sustained across several lines or a whole poem." },
      { term: "Symbolism", definition: "Using an object or image to represent a larger abstract idea." },
      { term: "Speaker", definition: "The voice narrating a poem, who may be a character rather than the poet." },
    ],
    examTips: [
      {
        tip: "Lead with meaning, follow with technique",
        detail:
          "Say what the poet conveys, then show how. Answers that list techniques and then hunt for meaning read as mechanical and stay in the middle bands.",
      },
      {
        tip: "Say 'the speaker', not 'the poet'",
        detail:
          "Unless you know the poem is autobiographical, the voice is a construction. Distinguishing them shows genuine understanding.",
      },
      {
        tip: "Analyse the effect of structure, not just its name",
        detail:
          "'There is enjambment' scores nothing. 'The enjambment makes the lines spill onward, mirroring the speaker's inability to stop' scores.",
      },
      {
        tip: "Track how the poem changes",
        detail:
          "Very few poems stay in one mood. Identifying where and how it shifts, and what that reveals, is what separates strong answers from competent ones.",
      },
      {
        tip: "Quote in short fragments",
        detail:
          "Two or three words you can analyse closely are worth more than a whole quoted stanza. Copying lines out is not analysis.",
      },
      {
        tip: "Do not force a technique that is not there",
        detail:
          "Inventing alliteration from two unrelated words is obvious and costs credibility. If it is not doing anything, do not mention it.",
      },
      {
        tip: "Read the poem twice before writing",
        detail:
          "It takes ninety seconds and prevents the most expensive error in poetry answers — misunderstanding what the poem is actually about.",
      },
    ],
  },

  "english/introducing-shakespeare": {
    summary:
      "Shakespeare is compulsory at GCSE, and the language is the barrier rather than the ideas. Once you know how the verse works, what the theatrical conventions signal, and enough about the period to explain why the original audience reacted as they did, the plays open up considerably.",
    keyFacts: [
      {
        heading: "Context: theatre",
        points: [
          "Shakespeare wrote roughly between 1590 and 1613, spanning the Elizabethan and Jacobean periods.",
          "Plays were performed at open-air playhouses such as the Globe, in daylight, with minimal scenery.",
          "With no lighting or sets, the language does the work — characters describe the time of day and the setting because the audience could not see it.",
          "Audiences were mixed: wealthy patrons seated, poorer 'groundlings' standing, all watching together.",
          "All parts were played by men and boys, since women were not permitted to act.",
        ],
      },
      {
        heading: "Context: beliefs",
        points: [
          "The Great Chain of Being held that everything had a fixed, God-given place, with the monarch above all people. Disrupting it was thought to bring chaos.",
          "Many believed in the divine right of kings, which is why regicide is presented as catastrophic rather than merely criminal.",
          "Belief in witchcraft and the supernatural was widespread; James I wrote a book about it.",
          "Women were expected to be obedient to fathers and husbands, which is why defiant female characters were so striking.",
          "Use context to explain a reaction, never as a bolted-on history paragraph.",
        ],
      },
      {
        heading: "Verse and prose",
        points: [
          "Most of Shakespeare's verse is blank verse: unrhymed iambic pentameter.",
          "Iambic pentameter is five unstressed-stressed pairs per line, roughly the rhythm of a heartbeat.",
          "High-status characters usually speak in verse; lower-status and comic characters often speak in prose.",
          "A character switching from verse to prose can signal madness, distress or a loss of control.",
          "Rhyming couplets often close a scene or emphasise a key point.",
        ],
      },
      {
        heading: "Dramatic devices",
        points: [
          "A soliloquy is a speech alone on stage revealing genuine private thoughts — the audience gets the truth.",
          "An aside is a short remark to the audience that other characters cannot hear.",
          "Dramatic irony is where the audience knows something a character does not, creating tension.",
          "A monologue is a long speech to other characters, unlike a soliloquy.",
          "Stage directions and implied action matter: these are plays to be watched, not novels.",
        ],
      },
      {
        heading: "Genre conventions",
        points: [
          "Tragedy: a high-status protagonist with a fatal flaw whose choices lead to their downfall and usually their death.",
          "Hamartia is the fatal flaw; hubris is excessive pride; catharsis is the release of emotion the audience feels at the end.",
          "Comedy: confusion, disguise and mistaken identity, resolved with marriage.",
          "History plays dramatise England's past, often with an eye on the politics of the present.",
        ],
      },
      {
        heading: "Reading the language",
        points: [
          "Thou, thee and thy are informal or intimate; you is formal or respectful. A switch between them is meaningful.",
          "Word order is often inverted for the sake of the metre — rearrange it mentally into normal order.",
          "Read to the punctuation, not to the end of each line.",
          "Look up unfamiliar words; many have shifted meaning entirely since 1600.",
        ],
      },
    ],
    flashcards: [
      { term: "Blank verse", definition: "Unrhymed iambic pentameter, the verse form Shakespeare used most often." },
      { term: "Iambic pentameter", definition: "A line of five pairs of syllables, each an unstressed syllable followed by a stressed one." },
      { term: "Soliloquy", definition: "A speech delivered by a character alone on stage, revealing their private thoughts to the audience." },
      { term: "Aside", definition: "A brief remark made to the audience that other characters on stage cannot hear." },
      { term: "Dramatic irony", definition: "Where the audience knows something that a character on stage does not." },
      { term: "Rhyming couplet", definition: "Two consecutive rhyming lines, often used to end a scene or emphasise a point." },
      { term: "Tragedy", definition: "A play in which a high-status protagonist is brought to ruin, usually through a fatal flaw." },
      { term: "Hamartia", definition: "The fatal flaw or error in judgement that leads to a tragic hero's downfall." },
      { term: "Hubris", definition: "Excessive pride or overconfidence, frequently the cause of a tragic hero's fall." },
      { term: "Catharsis", definition: "The release of emotion an audience experiences at the resolution of a tragedy." },
      { term: "Great Chain of Being", definition: "The Elizabethan belief in a fixed divine hierarchy, where disrupting the order brings chaos." },
      { term: "Divine right of kings", definition: "The belief that a monarch's authority comes directly from God." },
      { term: "Groundlings", definition: "Poorer members of the audience who stood in the yard around the stage." },
      { term: "Foil", definition: "A character whose qualities contrast with another's, highlighting their traits." },
    ],
    examTips: [
      {
        tip: "Weave context in, never bolt it on",
        detail:
          "A separate paragraph of history scores little. Use context to explain how the original audience would have reacted at a specific moment in the text.",
      },
      {
        tip: "Treat it as a play, not a novel",
        detail:
          "Refer to the audience rather than the reader, and mention staging where relevant. Examiners reward awareness that this was written to be performed.",
      },
      {
        tip: "Soliloquies are where characters tell the truth",
        detail:
          "Alone on stage, a character has no reason to lie. That makes soliloquies the strongest evidence for what someone genuinely thinks.",
      },
      {
        tip: "Notice shifts between verse and prose",
        detail:
          "A character who normally speaks in verse dropping into prose signals something has broken. This is a sophisticated point that is easy to make.",
      },
      {
        tip: "Do not translate — analyse",
        detail:
          "Retelling what happens in modern English is not analysis. Show understanding through the point you make, not by paraphrasing the extract.",
      },
      {
        tip: "Learn short quotations rather than long ones",
        detail:
          "Three or four words you can spell correctly and analyse closely are far more useful than a half-remembered speech.",
      },
      {
        tip: "Say 'the audience', not 'people watching'",
        detail:
          "Precise critical vocabulary — audience, protagonist, act, scene, stagecraft — signals confidence and is credited.",
      },
    ],
  },

  // ─────────────────────────── YEAR 10 ──────────────────────────

  "english/fiction-reading-and-writing": {
    summary:
      "The fiction paper pairs close analysis of an unseen extract with a piece of your own descriptive or narrative writing. The reading half asks you to analyse language, then structure, then evaluate. Knowing which skill each question wants is half the battle, because using the wrong one scores almost nothing.",
    keyFacts: [
      {
        heading: "The shape of the paper",
        points: [
          "Typically: a short retrieval question, a language analysis question, a structure question, then a longer evaluation question.",
          "Marks rise steeply through the paper, so time must be allocated accordingly, not spread evenly.",
          "The final writing task usually carries as many marks as the whole reading section.",
          "Exact question numbers and wording vary by board — check past papers for yours.",
        ],
      },
      {
        heading: "Analysing language",
        points: [
          "Focus on word choice, phrases, language techniques and sentence forms.",
          "Structure each paragraph: what the writer does, evidence, effect on the reader.",
          "Zoom in on individual words and their connotations.",
          "Use subject terminology accurately — verb, adjective, metaphor, semantic field — but only where it helps.",
          "The effect matters more than the label. Naming a technique with no comment on effect earns nothing.",
        ],
      },
      {
        heading: "Analysing structure",
        points: [
          "Structure questions are about the whole extract, not individual words. Answering with language analysis is the classic error.",
          "Consider: how it opens, where focus shifts, changes of time or place, zooming in or out, and how it ends.",
          "Think like a camera — where does the writer point our attention, and when does it move?",
          "Look for contrast, repetition, patterns and cyclical structure.",
          "Comment on why the writer ordered it that way and what it does to the reader.",
        ],
      },
      {
        heading: "Evaluation questions",
        points: [
          "You are given a statement and asked how far you agree, with evidence.",
          "Take a clear position early, then support it. Sitting on the fence weakens the answer.",
          "Combine analysis with judgement: explain how well the writer achieves the effect, not just that they do.",
          "Range matters — use evidence from across the whole extract, not just the opening.",
        ],
      },
      {
        heading: "Descriptive and narrative writing",
        points: [
          "Descriptive writing captures a scene or moment; narrative writing tells a story with development.",
          "Plan for five minutes and decide the ending before you start.",
          "Use varied sentence lengths and openings, sustained imagery, and precise vocabulary.",
          "Paragraph deliberately, with clear shifts of focus or time.",
          "Technical accuracy carries a large proportion of the marks. Leave two minutes to proofread.",
        ],
      },
      {
        heading: "Timing",
        points: [
          "Read the extract properly before answering anything — around ten minutes is normal.",
          "Allocate roughly a minute per mark on the reading questions.",
          "Protect the time for the writing task. Running out of time there is the single most costly mistake on this paper.",
          "Answer in order, since the questions are designed to build.",
        ],
      },
    ],
    flashcards: [
      { term: "Retrieval", definition: "Finding and stating information directly given in a text, with no analysis required." },
      { term: "Language analysis", definition: "Examining a writer's word choices, techniques and sentence forms, and their effect on the reader." },
      { term: "Structural analysis", definition: "Examining how a whole text is organised and ordered, and the effect of that order." },
      { term: "Evaluation", definition: "Judging how successfully a writer achieves an effect, supported by evidence." },
      { term: "Subject terminology", definition: "The technical vocabulary of English, such as metaphor, adjective or semantic field." },
      { term: "Narrative perspective", definition: "The viewpoint a story is told from, such as first person or third person." },
      { term: "Shift", definition: "A change in a text's focus, time, place or mood, important in structural analysis." },
      { term: "Descriptive writing", definition: "Writing that captures a scene, person or moment in detail rather than telling a story." },
      { term: "Narrative writing", definition: "Writing that tells a story, with events developing over time." },
      { term: "Contrast", definition: "Placing opposing ideas or images together to highlight the difference between them." },
    ],
    examTips: [
      {
        tip: "Do not answer a structure question with language analysis",
        detail:
          "Structure means the whole extract: openings, shifts, endings, focus. Quoting a metaphor in a structure question scores nothing, and this is the most common way marks are lost on this paper.",
      },
      {
        tip: "Guard the time for the writing task",
        detail:
          "It carries roughly half the paper's marks. Spending too long on reading questions and rushing the writing is the biggest single self-inflicted loss.",
      },
      {
        tip: "Take a clear position in evaluation questions",
        detail:
          "State how far you agree in your first sentence, then prove it. Balanced-to-the-point-of-vagueness answers cannot reach the top bands.",
      },
      {
        tip: "Use evidence from across the whole extract",
        detail:
          "Answers drawing only on the first paragraph limit themselves. Examiners look for coverage of the full text.",
      },
      {
        tip: "Terminology is a tool, not a target",
        detail:
          "Correctly naming a technique and then saying nothing about it is worth less than describing the effect precisely without the label.",
      },
      {
        tip: "Read the whole extract before writing anything",
        detail:
          "Ten minutes of proper reading prevents misunderstandings that cost far more than ten minutes to recover from.",
      },
      {
        tip: "Check the number of marks before you start each answer",
        detail:
          "A four-mark question and a twenty-mark question need very different amounts of writing. Matching length to marks is a basic but frequently ignored discipline.",
      },
    ],
  },

  "english/non-fiction-and-viewpoints": {
    summary:
      "The non-fiction paper uses two texts, often from different centuries, and asks you to summarise the differences between them, analyse how language is used to convey attitudes, and compare the writers' viewpoints. Then you write your own piece arguing a position. Comparison is the skill that carries this paper.",
    keyFacts: [
      {
        heading: "Forms of non-fiction",
        points: [
          "Articles, letters, speeches, diaries, travel writing, reviews, essays and blogs.",
          "Each has conventions: a letter has an address and sign-off, a speech directly addresses an audience, an article has a headline and subheadings.",
          "Older texts are often more formal, with longer sentences and elaborate vocabulary.",
          "Identify purpose and audience first — everything about the writer's choices follows from those.",
        ],
      },
      {
        heading: "Persuasive techniques",
        points: [
          "DAFOREST: Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples.",
          "A rule of three (triple) makes an argument feel complete and memorable.",
          "Anecdotes make an abstract argument personal and relatable.",
          "Counter-argument acknowledges the other side before dismissing it, which makes the writer seem reasonable.",
          "Hyperbole is deliberate exaggeration for effect.",
        ],
      },
      {
        heading: "Summarising differences",
        points: [
          "Summary questions want inference about the differences, not a retelling of each text.",
          "Use comparative connectives constantly: whereas, however, in contrast, similarly.",
          "Give a short quotation from EACH text for every point you make.",
          "Do not analyse language here — that is a different question. Focus on what the texts say.",
        ],
      },
      {
        heading: "Comparing viewpoints",
        points: [
          "Identify each writer's attitude towards the subject, then compare how they convey it.",
          "Compare methods as well as opinions: one writer may use humour where the other uses statistics.",
          "Write about both texts within the SAME paragraph, not one text then the other.",
          "Track how a writer's attitude develops within their text.",
          "Comparison is the assessed skill. Two separate analyses, however good, cannot reach the top bands.",
        ],
      },
      {
        heading: "Writing to argue or persuade",
        points: [
          "Match the form asked for: a letter needs a greeting and sign-off, a speech needs direct address to the audience.",
          "Take a clear position and hold it throughout. Wavering weakens the argument.",
          "Structure: engaging opening, three or four developed points, acknowledgement of the other side, strong conclusion.",
          "Use rhetorical devices deliberately, not scattered at random.",
          "Adapt tone and register to the stated audience — a school governor and a friend need different registers.",
        ],
      },
      {
        heading: "Reading older texts",
        points: [
          "Sentences are frequently longer and more complex; read to the punctuation.",
          "Some vocabulary has shifted meaning, so use surrounding context to work it out.",
          "Consider the historical context: what was normal, shocking or controversial at the time.",
          "Do not judge a nineteenth-century writer purely by modern standards — explain what their audience would have thought.",
        ],
      },
    ],
    flashcards: [
      { term: "DAFOREST", definition: "A memory aid for persuasive techniques: Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Triples." },
      { term: "Rhetorical question", definition: "A question asked for effect rather than to get an answer, prompting the audience to agree." },
      { term: "Emotive language", definition: "Word choices deliberately chosen to provoke an emotional response in the reader." },
      { term: "Direct address", definition: "Speaking straight to the reader or audience using words such as 'you'." },
      { term: "Rule of three", definition: "Grouping three words or ideas together to make an argument more memorable and complete." },
      { term: "Anecdote", definition: "A short personal story used to illustrate and personalise a point." },
      { term: "Counter-argument", definition: "Acknowledging an opposing view in order to challenge it and appear reasonable." },
      { term: "Hyperbole", definition: "Deliberate exaggeration used for emphasis or effect." },
      { term: "Viewpoint", definition: "The writer's attitude or opinion on the subject of their text." },
      { term: "Comparative connective", definition: "A linking word such as whereas, however or similarly, used to join points about two texts." },
      { term: "Transactional writing", definition: "Non-fiction writing produced for a real purpose and audience, such as a letter, article or speech." },
    ],
    examTips: [
      {
        tip: "Compare within paragraphs, not text by text",
        detail:
          "Write about both texts in the same paragraph using comparative connectives. Analysing text A fully and then text B is the single biggest limiter on this paper.",
      },
      {
        tip: "Quote from both texts in every comparison point",
        detail:
          "A comparison supported by evidence from only one text is not a comparison. Keep the quotations short so you have room for both.",
      },
      {
        tip: "Summary questions want inference, not retelling",
        detail:
          "Do not describe what happens in each text. State a difference, evidence it from both, and say what that difference suggests.",
      },
      {
        tip: "Match the form exactly in the writing task",
        detail:
          "A letter needs a greeting and sign-off; a speech needs direct address. Ignoring the form loses marks before the content is even considered.",
      },
      {
        tip: "Hold one position throughout",
        detail:
          "Arguing both sides equally in a persuasive task undermines it. Acknowledge the counter-argument, then dismiss it, and return to your line.",
      },
      {
        tip: "Adapt register to the stated audience",
        detail:
          "Writing to a headteacher and writing to a friend are different registers. The audience is always specified and always assessed.",
      },
      {
        tip: "Do not judge older texts only by modern values",
        detail:
          "Explain how the writer's contemporary audience would have responded. Showing awareness of context is credited; anachronistic outrage is not.",
      },
    ],
  },

  "english/a-modern-text": {
    summary:
      "For the modern text you write an essay from memory, with no extract in front of you. That means learning quotations and being able to trace how themes and characters develop across the whole play or novel. Common set texts include An Inspector Calls, Blood Brothers, Lord of the Flies and Animal Farm — check which yours is.",
    keyFacts: [
      {
        heading: "How the question works",
        points: [
          "Usually a single essay question on a theme or a character, answered from memory.",
          "You are assessed on your response and use of evidence, on analysis of language, form and structure, and on context.",
          "There is no extract, so learned quotations are essential.",
          "Some boards also assess spelling, punctuation and grammar on this paper.",
        ],
      },
      {
        heading: "Writing about a whole text",
        points: [
          "Trace development from beginning to end rather than describing a single moment.",
          "Show how a character changes, and identify what causes the change.",
          "Use evidence from throughout the text — an essay drawing only on the opening chapters looks incomplete.",
          "Refer to structure: where the writer places a revelation, and why there.",
        ],
      },
      {
        heading: "Themes and how to handle them",
        points: [
          "Typical themes: responsibility, class and inequality, power, generational conflict, guilt, identity, human nature.",
          "A theme is an idea the writer explores, not simply something that happens.",
          "Ask what the writer wants the audience to think — most set texts carry an argument.",
          "Connect themes to context: a play written just after a war, or set during one, is usually making a point about it.",
        ],
      },
      {
        heading: "Form and structure",
        points: [
          "For a play, discuss stagecraft: entrances and exits, lighting, setting, and what the audience sees.",
          "Dramatic irony is central to many modern plays.",
          "For a novel, consider narrative perspective and chapter structure.",
          "Say 'the audience' for a play and 'the reader' for a novel. Getting this wrong signals carelessness.",
        ],
      },
      {
        heading: "Using context properly",
        points: [
          "Context means the circumstances of writing or setting that shape meaning — social, historical or political.",
          "Integrate it into analysis: explain how it changes the meaning of a specific moment.",
          "A standalone paragraph of history scores very little.",
          "Consider when it was written versus when it is set — the gap is often deliberate and significant.",
        ],
      },
      {
        heading: "Essay structure",
        points: [
          "Introduction: a clear line of argument, a thesis, in two or three sentences. Do not restate the question.",
          "Four or five paragraphs, each making one developed point with embedded evidence.",
          "Conclusion: draw the argument together and say what the writer ultimately achieves.",
          "Plan for five minutes. A planned essay with a clear argument outscores a longer unplanned one reliably.",
        ],
      },
    ],
    flashcards: [
      { term: "Theme", definition: "An idea or issue a writer explores throughout a text." },
      { term: "Stagecraft", definition: "The theatrical elements of a play such as staging, lighting, entrances and props, and their effects on the audience." },
      { term: "Protagonist", definition: "The central character whose choices drive the story." },
      { term: "Antagonist", definition: "The character or force opposing the protagonist." },
      { term: "Foil", definition: "A character whose contrasting qualities highlight those of another." },
      { term: "Dramatic irony", definition: "Where the audience knows something a character does not, creating tension." },
      { term: "Context", definition: "The social, historical or political circumstances of a text's writing or setting that shape its meaning." },
      { term: "Thesis", definition: "The central argument of an essay, stated clearly in the introduction." },
      { term: "Character arc", definition: "The way a character changes over the course of a text." },
      { term: "Motif", definition: "A recurring image or idea that develops a theme through repetition." },
      { term: "Allegory", definition: "A story in which characters and events stand for wider ideas or real events." },
    ],
    examTips: [
      {
        tip: "Learn short quotations, not long ones",
        detail:
          "Three or four words you can spell and analyse are far more useful than a sentence you half-remember. Aim for a handful per character and per theme.",
      },
      {
        tip: "Argue a thesis rather than describing",
        detail:
          "State a clear line in your introduction and prove it. Retelling the plot is the most common reason strong knowledge produces a weak grade.",
      },
      {
        tip: "Weave context into analysis",
        detail:
          "Use it to explain what a moment meant to its original audience. A separate history paragraph is worth almost nothing.",
      },
      {
        tip: "Say 'audience' for plays, 'reader' for novels",
        detail:
          "A small detail that examiners notice immediately, and getting it right signals you understand the form.",
      },
      {
        tip: "Cover the whole text",
        detail:
          "Draw evidence from the beginning, middle and end. Essays that stop halfway through the text cannot show how ideas develop.",
      },
      {
        tip: "Plan before you write",
        detail:
          "Five minutes deciding your argument and paragraph order. Unplanned essays repeat themselves and drift away from the question.",
      },
      {
        tip: "Answer the actual question, every paragraph",
        detail:
          "Return to the wording of the question at the start or end of each paragraph. Prepared essays delivered regardless of what was asked score badly.",
      },
    ],
  },

  "english/a-shakespeare-play": {
    summary:
      "The Shakespeare question usually gives you a printed extract and asks you to write about it AND the play as a whole. That double demand is the thing to prepare for: close analysis of the extract, then knowledge of the rest of the play. Common set texts are Macbeth and Romeo and Juliet — check yours.",
    keyFacts: [
      {
        heading: "Extract to whole text",
        points: [
          "Spend roughly the first half of your answer on the extract, then move outwards to the rest of the play.",
          "Begin with close analysis of the printed extract, since the evidence is in front of you.",
          "Then trace the same theme or character elsewhere, using learned quotations.",
          "Link explicitly: 'This foreshadows...' or 'By Act 5, this has become...'.",
          "Answers staying entirely within the extract cannot reach the top bands, however good the analysis.",
        ],
      },
      {
        heading: "Analysing the extract",
        points: [
          "Consider where in the play it falls and what has just happened.",
          "Look at verse and prose, imagery, and the balance of who speaks most.",
          "Zoom in on individual words and their connotations.",
          "Note stage directions and implied action.",
          "Consider what the audience knows that the characters do not.",
        ],
      },
      {
        heading: "Character and theme development",
        points: [
          "Track how a character changes across the acts, and identify the turning point.",
          "Frequent themes: ambition, power, fate versus free will, guilt, appearance versus reality, loyalty, gender.",
          "Note the effect of a character's relationships and how they shift.",
          "Consider who is a foil to whom.",
        ],
      },
      {
        heading: "Language and dramatic technique",
        points: [
          "Soliloquies reveal true feeling and are the strongest evidence of a character's inner state.",
          "Recurring imagery — blood, darkness, light, disease, clothing — usually carries a theme.",
          "Dramatic irony creates tension throughout.",
          "Shifts from verse to prose can signal madness or loss of status.",
          "Rhyming couplets often mark the close of a scene or an important declaration.",
        ],
      },
      {
        heading: "Context that actually helps",
        points: [
          "The Great Chain of Being and the divine right of kings explain why disrupting order is catastrophic.",
          "Contemporary belief in witchcraft and the supernatural explains the audience's reaction to prophecy.",
          "Expectations of women explain why defiant female characters were shocking.",
          "The play was written for performance in an open-air playhouse to a mixed audience.",
          "Always tie context to a specific moment. Generic background paragraphs earn little.",
        ],
      },
      {
        heading: "Structuring the answer",
        points: [
          "Introduction: a clear argument in response to the question, briefly.",
          "Two or three paragraphs on the extract, then two or three on the wider play.",
          "Every paragraph: point, embedded quotation, analysis, and a link to the question.",
          "Conclusion: what Shakespeare achieves overall and why it matters.",
        ],
      },
    ],
    flashcards: [
      { term: "Soliloquy", definition: "A speech delivered alone on stage revealing a character's true private thoughts." },
      { term: "Tragic hero", definition: "A high-status protagonist whose fatal flaw brings about their downfall." },
      { term: "Hamartia", definition: "The fatal flaw or error of judgement that causes a tragic hero's destruction." },
      { term: "Dramatic irony", definition: "Where the audience knows something a character does not, creating tension." },
      { term: "Motif", definition: "A recurring image or idea used to develop a theme, such as blood or darkness." },
      { term: "Blank verse", definition: "Unrhymed iambic pentameter, the form used for most of Shakespeare's dialogue." },
      { term: "Foil", definition: "A character whose contrasting qualities emphasise those of another." },
      { term: "Pathetic fallacy", definition: "Using weather or nature to reflect the mood of a scene." },
      { term: "Catharsis", definition: "The emotional release an audience experiences at the end of a tragedy." },
      { term: "Aside", definition: "A remark spoken to the audience that other characters cannot hear." },
      { term: "Antithesis", definition: "Placing opposing ideas together in a balanced structure to highlight contrast." },
    ],
    examTips: [
      {
        tip: "Write about the extract AND the whole play",
        detail:
          "The question asks for both, and the mark scheme requires both. Staying inside the extract is the most common reason strong analysis gets a middling grade.",
      },
      {
        tip: "Start with the extract while the evidence is in front of you",
        detail:
          "Analyse closely first, then move outwards to learned quotations. It builds momentum and guarantees the extract is properly covered.",
      },
      {
        tip: "Use soliloquies as your strongest evidence",
        detail:
          "A character alone on stage has no reason to lie, which makes soliloquies the most reliable window into what they truly think.",
      },
      {
        tip: "Track motifs across the play",
        detail:
          "Recurring imagery such as blood, darkness or clothing gives a ready-made structure for showing development across acts.",
      },
      {
        tip: "Attach context to specific moments",
        detail:
          "Explain how a belief of the time changes what a particular line meant to its original audience. Generic history paragraphs score almost nothing.",
      },
      {
        tip: "Do not paraphrase the extract",
        detail:
          "Translating Shakespeare into modern English is not analysis. Show understanding through the argument you make about it.",
      },
      {
        tip: "Refer to acts and scenes",
        detail:
          "Saying where in the play something happens demonstrates whole-text knowledge and is quick to do.",
      },
    ],
  },

  // ─────────────────────────── YEAR 11 ──────────────────────────

  "english/the-19th-century-novel": {
    summary:
      "The nineteenth-century novel is usually assessed with an extract plus a whole-text question, like Shakespeare. The extra difficulty is the language and the distance of the world it describes, which makes context genuinely useful here rather than decorative. Common set texts include A Christmas Carol, Jekyll and Hyde, Frankenstein, Great Expectations and The Sign of Four.",
    keyFacts: [
      {
        heading: "Victorian context worth knowing",
        points: [
          "Extreme inequality between rich and poor, with workhouses for the destitute and no welfare system.",
          "Rigid class structure, where birth largely determined a person's opportunities.",
          "Rapid industrialisation created overcrowded, polluted cities and enormous wealth alongside enormous poverty.",
          "Strict social expectations of respectability, and severe restrictions on women's independence and property.",
          "Scientific advances, including evolution, unsettled religious certainty and provoked anxiety about progress.",
          "Novels were frequently published in instalments, which is why chapters often end on a hook.",
        ],
      },
      {
        heading: "Reading nineteenth-century prose",
        points: [
          "Sentences are longer and more heavily subordinated — read to the punctuation, not the line.",
          "Vocabulary may have shifted meaning since; use surrounding context.",
          "Description is often lengthy and is doing thematic work, not just scene-setting.",
          "Narrators may address the reader directly, which shapes how we judge characters.",
        ],
      },
      {
        heading: "Narrative technique",
        points: [
          "First person: intimate but potentially unreliable, since we see only one perspective.",
          "Third person omniscient: the narrator knows everything, including characters' thoughts.",
          "An unreliable narrator's account cannot be fully trusted, which becomes the point.",
          "Framed narratives place a story inside another, adding layers of perspective.",
          "Consider why the writer chose that perspective and what it conceals as well as what it reveals.",
        ],
      },
      {
        heading: "Common themes",
        points: [
          "Social criticism: poverty, class, exploitation and responsibility to others.",
          "The duality of human nature — respectability concealing something darker.",
          "Ambition and the dangers of overreaching, especially with science.",
          "Redemption and the possibility of change.",
          "Isolation, and the consequences of being cast out by society.",
        ],
      },
      {
        heading: "Setting and atmosphere",
        points: [
          "Setting in these novels is rarely neutral — fog, darkness and cold usually carry meaning.",
          "Pathetic fallacy links weather to mood and to moral state.",
          "The Gothic mode uses darkness, isolation, the uncanny and psychological dread.",
          "The contrast between city and countryside, or between rich and poor districts, often embodies the novel's argument.",
        ],
      },
      {
        heading: "Answering the question",
        points: [
          "Analyse the extract closely first, then trace the theme or character across the whole novel.",
          "Learn short quotations from the beginning, middle and end.",
          "Use context to explain how a Victorian reader would have responded, tied to specific moments.",
          "Build a clear argument in the introduction and return to it in every paragraph.",
        ],
      },
    ],
    flashcards: [
      { term: "Omniscient narrator", definition: "A third-person narrator who knows everything, including the thoughts of all characters." },
      { term: "Unreliable narrator", definition: "A narrator whose account cannot be fully trusted, whether through bias, ignorance or deception." },
      { term: "Framed narrative", definition: "A story told within another story, creating layers of perspective." },
      { term: "Gothic", definition: "A style using darkness, isolation, the supernatural and psychological dread to create unease." },
      { term: "Pathetic fallacy", definition: "Using weather or nature to reflect the mood or moral state of a scene." },
      { term: "Duality", definition: "The idea that something, especially human nature, contains two opposed sides." },
      { term: "Social criticism", definition: "Writing that exposes and challenges the injustices of the society it depicts." },
      { term: "Serialisation", definition: "Publishing a novel in instalments, which shaped chapter endings and pacing." },
      { term: "Redemption", definition: "The idea that a character can be saved or transformed by changing their behaviour." },
      { term: "Foreshadowing", definition: "Hints early in a text about what will happen later." },
      { term: "Juxtaposition", definition: "Placing two contrasting things side by side to highlight the difference." },
    ],
    examTips: [
      {
        tip: "Use context to explain a Victorian reader's response",
        detail:
          "Context is genuinely useful in this topic because the world is unfamiliar. Explain what a specific moment meant then, rather than listing historical facts.",
      },
      {
        tip: "Analyse the extract first, then go wider",
        detail:
          "The evidence for the extract is in front of you, so bank those marks before relying on memory for the rest of the novel.",
      },
      {
        tip: "Learn quotations from across the whole book",
        detail:
          "Beginning, middle and end. Essays evidenced only from the opening chapters cannot show development, which is what the whole-text question is testing.",
      },
      {
        tip: "Treat setting as meaningful",
        detail:
          "Fog, darkness and cold are doing thematic work. Analysing setting as atmosphere with purpose is a strong and easily made point.",
      },
      {
        tip: "Comment on narrative perspective",
        detail:
          "Ask what the chosen narrator conceals as well as reveals. Noticing unreliability is a genuinely sophisticated observation.",
      },
      {
        tip: "Do not summarise the plot",
        detail:
          "The examiner knows the book. Marks come from argument and analysis, never from retelling what happens.",
      },
      {
        tip: "Name the writer, not just the character",
        detail:
          "Write 'Dickens presents...' rather than 'Scrooge is...'. It keeps the focus on deliberate authorial choices, which is what is being assessed.",
      },
    ],
  },

  "english/poetry-anthology": {
    summary:
      "The anthology question gives you one poem printed and asks you to compare it with another from the cluster, chosen from memory. Comparison is the assessed skill, and the choice of second poem matters enormously — a well-chosen pairing makes the essay almost write itself. Clusters vary by board.",
    keyFacts: [
      {
        heading: "How the question works",
        points: [
          "One poem is printed; you choose a second from the anthology and compare.",
          "The question specifies a theme, such as power, conflict, loss or the presentation of relationships.",
          "You need the second poem's quotations from memory.",
          "Comparison of methods, not just of content, is what is being assessed.",
        ],
      },
      {
        heading: "Choosing the second poem",
        points: [
          "Choose for contrast as much as similarity — differences are usually easier to write about at length.",
          "Pick a poem you know well and can quote accurately, not the one that fits most perfectly in theory.",
          "Prepare pairings in advance for each likely theme, so no time is spent deciding in the exam.",
          "Make sure it genuinely addresses the theme in the question.",
        ],
      },
      {
        heading: "Structuring a comparison",
        points: [
          "Compare within each paragraph, dealing with both poems together, rather than one poem then the other.",
          "Use comparative connectives constantly: whereas, similarly, in contrast, both, however.",
          "Aim for four or five paragraphs, each comparing a different aspect.",
          "Compare content and ideas, language, form and structure, and tone.",
          "Two separate analyses side by side is the single biggest limiter on marks in this question.",
        ],
      },
      {
        heading: "What to compare",
        points: [
          "Attitude: what does each poet feel about the subject, and how certain are they?",
          "Voice: who speaks, and are they reliable or sympathetic?",
          "Imagery: what pictures does each build, and do they share any?",
          "Form: does a regular form suggest control, and free verse suggest its absence?",
          "Structure: how does each poem develop, and where does each shift?",
          "Endings are especially productive to compare, since poets place their weight there.",
        ],
      },
      {
        heading: "Learning the anthology",
        points: [
          "Know each poem's subject, speaker, tone and three or four quotations.",
          "Group poems by theme so you can see the natural pairings.",
          "Make a one-page summary per poem, then test yourself from memory.",
          "Learn the poets' names and spell them correctly.",
          "Practise writing comparisons under timed conditions — the constraint is what you are really training for.",
        ],
      },
      {
        heading: "Using context",
        points: [
          "Relevant context might be war experience, a personal loss, a colonial setting or the poet's own background.",
          "Attach it to a specific line and explain what it changes.",
          "Do not open with a biography of the poet.",
          "Contrasting the poets' different circumstances can itself be a strong comparative point.",
        ],
      },
    ],
    flashcards: [
      { term: "Anthology", definition: "A collection of poems studied together, usually grouped around a shared theme." },
      { term: "Comparison", definition: "Examining two texts together to identify similarities and differences in ideas and methods." },
      { term: "Comparative connective", definition: "A linking word such as whereas, similarly or in contrast, used to join points about two texts." },
      { term: "Speaker", definition: "The voice of a poem, who may be a character rather than the poet themselves." },
      { term: "Tone", definition: "The attitude a poem conveys towards its subject." },
      { term: "Volta", definition: "A turn or shift in a poem's argument or mood." },
      { term: "Form", definition: "The type and shape of a poem, such as sonnet, ballad or free verse." },
      { term: "Enjambment", definition: "A line running on into the next without punctuation, creating flow or urgency." },
      { term: "Caesura", definition: "A pause within a line of poetry, usually created by punctuation." },
      { term: "Juxtaposition", definition: "Placing two contrasting ideas or images side by side for effect." },
    ],
    examTips: [
      {
        tip: "Compare inside every paragraph",
        detail:
          "Discuss both poems together, linked with comparative connectives. Writing about one poem for two pages and then the other caps your marks no matter how good the analysis is.",
      },
      {
        tip: "Prepare your pairings before the exam",
        detail:
          "Decide in advance which poem you would pick for power, for conflict, for loss, for nature. Choosing under pressure wastes minutes you need for writing.",
      },
      {
        tip: "Choose the poem you know, not the perfect one",
        detail:
          "A slightly less ideal poem you can quote accurately will always outperform an ideal one you half-remember.",
      },
      {
        tip: "Compare methods, not just meanings",
        detail:
          "Both poems may be about grief. The marks are in how differently each poet conveys it — through form, imagery, voice and structure.",
      },
      {
        tip: "Compare the endings",
        detail:
          "Poets put their weight at the close. Contrasting how two poems resolve, or refuse to, is reliably productive.",
      },
      {
        tip: "Do not open with the poet's biography",
        detail:
          "Get into the comparison immediately. Context belongs woven into analysis, attached to particular lines.",
      },
      {
        tip: "Spell the poets' names and titles correctly",
        detail:
          "It is a small thing that shapes the examiner's impression of how well you know the anthology.",
      },
    ],
  },

  "english/unseen-poetry": {
    summary:
      "You are given a poem you have never seen and asked to analyse it, often followed by a comparison with a second unseen poem. This frightens people, but it is the fairest question on the paper: nobody has prepared, so the marks go entirely to method. Having a reliable process is worth more than having read a lot of poetry.",
    keyFacts: [
      {
        heading: "A method that works",
        points: [
          "Read the poem twice — once for meaning, once for technique. Do not start writing after one read.",
          "Ask: who is speaking, to whom, about what, and how do they feel?",
          "Annotate anything that stands out, then look for patterns among the annotations.",
          "Identify the mood and mark where it changes.",
          "Plan three or four points before writing.",
        ],
      },
      {
        heading: "What to look for",
        points: [
          "Title: it often tells you the subject or sets up an irony.",
          "First and last lines: poems tend to place their weight at the beginning and the end.",
          "Repetition: anything repeated is deliberate and worth comment.",
          "Unusual or striking word choices, and any word that feels out of place.",
          "Shifts in tense, person, mood or focus.",
          "Punctuation and line breaks, including anything unusual or absent.",
        ],
      },
      {
        heading: "Writing the single-poem answer",
        points: [
          "Introduction: one or two sentences on what the poem is about and the poet's apparent attitude.",
          "Three or four paragraphs, each on a different aspect, with short embedded quotations.",
          "Move from what the poem says to how it says it and why that matters.",
          "Conclusion: what the reader is left feeling and how the poem achieved it.",
        ],
      },
      {
        heading: "The comparison question",
        points: [
          "Usually shorter and focused on methods rather than content.",
          "Find one clear similarity and one clear difference, then develop them.",
          "Compare within paragraphs, never one poem then the other.",
          "Focus on how each poet conveys the shared theme differently.",
          "Manage time carefully — the comparison typically carries fewer marks and should take proportionally less time.",
        ],
      },
      {
        heading: "Common traps",
        points: [
          "Do not panic about not understanding every line; nobody does on a first reading.",
          "Do not feature-spot — listing techniques without explaining effect scores very little.",
          "Do not assume the speaker is the poet.",
          "Do not force an interpretation that the evidence does not support.",
          "An honest, tentative reading grounded in the text always beats a confident invented one.",
        ],
      },
      {
        heading: "Practising",
        points: [
          "Do one unseen poem a week, timed. Frequency matters more than length of session.",
          "Use poems you have never met; using familiar ones defeats the purpose.",
          "Build a bank of flexible sentence starters for analysis and comparison.",
          "Read widely — the more poems you have met, the less unfamiliar any new one feels.",
        ],
      },
    ],
    flashcards: [
      { term: "Unseen poetry", definition: "A poem encountered for the first time in the exam, analysed without prior study." },
      { term: "Feature-spotting", definition: "Listing techniques found in a text without explaining their effect, which scores very little." },
      { term: "Mood", definition: "The atmosphere or feeling a poem creates in the reader." },
      { term: "Shift", definition: "A change in a poem's tone, tense, focus or perspective." },
      { term: "Speaker", definition: "The voice of a poem, who should not be assumed to be the poet." },
      { term: "Annotation", definition: "Marking notes on a text to identify features and ideas before writing about it." },
      { term: "Tentative language", definition: "Cautious phrasing such as 'this suggests' used when offering an interpretation." },
      { term: "Imagery", definition: "Language that creates a picture or sensory impression in the reader's mind." },
      { term: "Irony", definition: "A gap between what is said or expected and what is actually meant or happens." },
    ],
    examTips: [
      {
        tip: "Read it twice before writing a word",
        detail:
          "Ninety seconds of proper reading prevents the most expensive error possible here: writing a confident essay about what the poem is not about.",
      },
      {
        tip: "Start with meaning, then move to method",
        detail:
          "Say what the poem conveys, then how. Answers that open with a list of techniques read as mechanical and cannot reach the top bands.",
      },
      {
        tip: "Do not feature-spot",
        detail:
          "'There is alliteration and a simile' is worth almost nothing. One technique analysed for its effect over four sentences is worth far more than five named.",
      },
      {
        tip: "Uncertainty is allowed and rewarded",
        detail:
          "'This could suggest' is a mark of thoughtful reading. Examiners credit tentative interpretation over false confidence.",
      },
      {
        tip: "Use the title",
        detail:
          "It is free information about subject or tone, and often sets up an irony the poem then develops. Many candidates ignore it entirely.",
      },
      {
        tip: "Watch the timing on the comparison",
        detail:
          "The second question usually carries fewer marks. Spending equal time on both leaves the higher-value question rushed.",
      },
      {
        tip: "Practise one unseen poem a week",
        detail:
          "This is the most improvable question on the paper because it tests method rather than memory. Regular short practice beats occasional long sessions.",
      },
    ],
  },

  "english/revision-and-exam-practice": {
    summary:
      "English is the subject where students most often know plenty and still underperform, because the marks depend on how you write about a text rather than what you know about it. This section covers the assessment objectives, learning quotations efficiently, planning essays, and the timing discipline the papers demand.",
    keyFacts: [
      {
        heading: "Assessment objectives",
        points: [
          "In Literature, AO1 is your response and use of evidence, AO2 is analysis of language, form and structure, AO3 is context, and AO4 is spelling, punctuation and grammar.",
          "AO2 usually carries the most marks, which is why analysis matters more than knowledge of the plot.",
          "In Language, marks are split between identifying and interpreting, analysing methods, comparing, evaluating, and your own writing.",
          "Exact numbering and weighting vary by board — check yours and know which objectives each question targets.",
        ],
      },
      {
        heading: "Learning quotations",
        points: [
          "Short is better. Three or four words you can spell and analyse beat a whole sentence.",
          "Aim for around five per character and five per theme, not fifty per text.",
          "Choose quotations with rich language you can actually say something about.",
          "Use flashcards, and test yourself by writing them out rather than rereading them.",
          "Learn where each quotation comes from — beginning, middle or end — so you can show development.",
        ],
      },
      {
        heading: "Planning essays",
        points: [
          "Spend five minutes planning. It reliably produces a better essay than five extra minutes of writing.",
          "Decide your argument — your thesis — before you write anything.",
          "Note three or four paragraph points and the evidence for each.",
          "Order them so the argument builds rather than repeats.",
          "Check every point actually answers the question as worded.",
        ],
      },
      {
        heading: "Paragraph discipline",
        points: [
          "One developed point per paragraph, not three underdeveloped ones.",
          "Point, embedded evidence, analysis, link back to the question.",
          "Most of the words should be analysis. If your paragraphs are mostly quotation, you are in the middle bands.",
          "Zoom in on individual words rather than commenting on whole quotations generally.",
          "Return to the question's wording at the end of each paragraph.",
        ],
      },
      {
        heading: "Timing",
        points: [
          "Work out minutes per mark before the exam and write the finish time for each question on your paper.",
          "Protect the writing tasks on the Language papers — they carry roughly half the marks.",
          "Leave a few minutes at the end to proofread, since technical accuracy is separately assessed.",
          "An unfinished essay loses more than a slightly rushed complete one.",
        ],
      },
      {
        heading: "Revision that works",
        points: [
          "Write practice paragraphs, do not reread notes. Producing writing is the skill being tested.",
          "Mark your own work against the mark scheme to see where the bands actually sit.",
          "Practise the same question with different texts to build flexibility.",
          "Read examiners' reports — they say plainly what candidates get wrong every year.",
          "Revise the texts you find hardest, not the ones you enjoy discussing.",
        ],
      },
    ],
    flashcards: [
      { term: "AO1", definition: "The assessment objective for responding to a text with a clear argument and well-chosen references." },
      { term: "AO2", definition: "The assessment objective for analysing language, form and structure using subject terminology." },
      { term: "AO3", definition: "The assessment objective for showing understanding of the context in which a text was written or set." },
      { term: "AO4", definition: "The assessment objective covering accuracy of spelling, punctuation and grammar." },
      { term: "Thesis", definition: "The central argument of an essay, stated clearly in the introduction and sustained throughout." },
      { term: "Embedded quotation", definition: "A short quotation integrated into your own sentence rather than standing alone." },
      { term: "Subject terminology", definition: "The technical vocabulary of English, used precisely to describe a writer's methods." },
      { term: "Examiner's report", definition: "A published document explaining what candidates did well and badly on a past paper." },
      { term: "Mark band", definition: "A range of marks describing a level of performance, used by examiners to place an answer." },
    ],
    examTips: [
      {
        tip: "Analyse, do not retell",
        detail:
          "Summarising the plot is the most common reason good knowledge produces a poor grade. The examiner has read the text. Marks come from what you argue about it.",
      },
      {
        tip: "Write 'the writer presents', not 'the character is'",
        detail:
          "Keeping the focus on deliberate authorial choices is exactly what AO2 rewards, and it is a simple habit to build.",
      },
      {
        tip: "Plan every essay, without exception",
        detail:
          "Five minutes. Unplanned essays repeat themselves, drift from the question and lose structure marks that were freely available.",
      },
      {
        tip: "Return to the question in every paragraph",
        detail:
          "Echo its wording at the start or end of each paragraph. It keeps you focused and shows the examiner you are answering what was asked.",
      },
      {
        tip: "Write times on your paper before you start",
        detail:
          "Note when each question must be finished. Running out of time on the final question is the most common and most avoidable disaster in English exams.",
      },
      {
        tip: "Proofread for two minutes",
        detail:
          "Spelling, punctuation and grammar are separately assessed on several papers. Catching a few errors is worth more than one more rushed sentence.",
      },
      {
        tip: "Practise by writing, not by reading",
        detail:
          "English is assessed on production. Writing one timed paragraph and marking it teaches more than an hour of rereading notes.",
      },
    ],
  },
};
