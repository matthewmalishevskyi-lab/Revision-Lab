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

    workedExamples: [
      {
        question:
          "Analyse this line: 'He crept along the corridor, hugging the shadows.' What does it suggest about the character?",
        steps: [
          "POINT: the writer presents the character as furtive and afraid of being seen.",
          "EVIDENCE: pick something short you can actually unpick — the verb 'crept' and the phrase 'hugging the shadows'.",
          "ANALYSE THE WORD: 'crept' suggests slow, deliberate, silent movement. Compare it with 'walked' — the writer chose a word carrying secrecy and unease.",
          "ANALYSE THE SECOND: 'hugging' is unexpected. It normally implies affection or comfort, so applying it to shadows suggests he seeks safety in darkness — he belongs there, or is desperate.",
          "LINK: together these imply someone doing something he does not want witnessed, and who is used to concealment.",
        ],
        answer:
          "The point is furtiveness; the marks come from unpicking 'crept' and 'hugging' individually rather than commenting on the sentence as a whole.",
      },
      {
        question: "Turn this weak paragraph into a strong one: 'The writer uses a simile. This is effective.'",
        steps: [
          "Diagnose the problems: no quotation, no analysis, and 'effective' says nothing about HOW.",
          "Add the evidence, embedded in your own sentence.",
          "Analyse a specific word inside the quotation, not the quotation as a whole.",
          "Explain the effect on the READER, not on you.",
          "Result: 'The writer describes the sky as \'bruised\', a word that carries injury and the aftermath of violence, so the weather itself seems damaged and the reader senses that something has already gone badly wrong.'",
        ],
        answer:
          "Point, embedded evidence, analysis of one word, and effect on the reader. 'This is effective' is the phrase to delete from your vocabulary.",
      },
      {
        question:
          "A question asks what the text 'suggests' about a character's mood. Explain how that differs from a retrieval question.",
        steps: [
          "A retrieval question asks for something stated — you can point at the words that say it.",
          "'Suggests' asks for INFERENCE: a conclusion drawn from evidence rather than something stated.",
          "So do not quote a line that says 'she was angry'. Look for the evidence that implies it.",
          "For example 'she set the cup down very carefully' implies controlled anger — the care is the giveaway.",
          "Explain the reasoning: why does that detail imply that mood? That reasoning IS the answer.",
        ],
        answer:
          "Inference requires evidence plus the reasoning that connects it to the conclusion. A literal answer scores nothing on a 'suggests' question.",
      },
      {
        question: "Identify the structural features of a text that opens with a wide landscape and narrows to a single closed door.",
        steps: [
          "This is STRUCTURE, not language — it is about the whole extract and the order of things.",
          "The opening is panoramic, establishing scale and setting.",
          "The focus then narrows progressively, like a camera zooming in.",
          "It ends on a single specific object, which makes that object feel significant.",
          "Effect: the reader's attention is funnelled, creating anticipation about what lies behind the door.",
        ],
        answer:
          "A narrowing focus from wide to specific, which builds anticipation and marks the final object as important.",
      },
    ],

    practice: [
      { question: "What is the term for a conclusion drawn from evidence in a text rather than something stated directly?",
        accept: ["inference", "an inference", "inferring"],
        answer: "Inference. Questions using the words 'suggests' or 'implies' are asking for it." },
      { question: "What is the term for meaning that is stated directly in the text?",
        accept: ["explicit", "explicit meaning"], answer: "Explicit meaning — you can point to the words that say it." },
      { question: "What is the term for the associations a word carries beyond its literal meaning?",
        accept: ["connotation", "connotations"],
        answer: "Connotation. 'Slithered' and 'moved' describe the same action but carry very different associations." },
      { question: "What is the term for a quotation woven into your own sentence rather than dropped in separately?",
        accept: ["embedded", "embedded quotation", "embedding"],
        answer: "An embedded quotation, which reads far better than a quotation standing alone on its own line." },
      { question: "What is the term for the writer's attitude towards their subject?",
        accept: ["tone"], answer: "Tone — angry, nostalgic, mocking, affectionate. Distinct from mood, which is what the reader feels." },
      { question: "What is the term for the level of formality of the language used?",
        accept: ["register"], answer: "Register. Shifts in it are almost always deliberate and worth commenting on." },
      { question: "What is the term for hints early in a text about events that happen later?",
        accept: ["foreshadowing"], answer: "Foreshadowing, a structural technique that builds anticipation." },
      { question: "What is the term for a structure that ends by returning to where it began?",
        accept: ["cyclical", "cyclical structure", "circular", "circular structure"],
        answer: "A cyclical structure, which can suggest that nothing has changed or that something has come full circle." },
      { question: "In PEE, what do the three letters stand for?",
        accept: ["point evidence explanation", "point, evidence, explanation", "pointevidenceexplanation",
                 "point evidence explain"],
        answer: "Point, Evidence, Explanation. Some schools use PETAL, adding Technique and Link — the logic is identical." },
      { question: "Which part of a PEE paragraph should be the LONGEST?",
        accept: ["explanation", "the explanation", "explain", "analysis", "the analysis"],
        answer: "The explanation. Most weak answers have plenty of point and evidence and almost no analysis." },
      { question: "Should you write about the effect on 'you' or on 'the reader'?",
        accept: ["the reader", "reader"],
        answer: "The reader. It keeps the register formal and the focus on the writer's craft rather than your personal response." },
      { question: "Give one word or phrase that shows tentative interpretation rather than certainty.",
        accept: ["suggests", "this suggests", "implies", "this implies", "could imply", "may suggest", "perhaps",
                 "could suggest", "might suggest"],
        answer: "'Suggests', 'implies' or 'could imply'. Tentative phrasing shows interpretation and is more sophisticated than flat certainty." },
      { question: "Is 'the writer uses a metaphor' on its own worth a mark? Answer yes or no.",
        accept: ["no"], answer: "No. Naming a technique earns nothing without explaining what it makes the reader picture or feel." },
      { question: "A question asks about STRUCTURE. Should you analyse individual word choices?",
        accept: ["no"], answer: "No — that is language analysis. Structure is about the whole text: openings, shifts of focus, and endings." },
      { question: "What is the term for the writer's reason for producing a text, such as to persuade or inform?",
        accept: ["purpose", "the purpose"], answer: "Purpose. Many texts have more than one, and identifying it shapes everything else you say." },
      { question: "Which is better evidence: a single well-chosen word, or three full lines quoted?",
        accept: ["a single word", "single word", "one word", "a single well-chosen word", "the single word",
                 "short quotation", "a short quotation"],
        answer: "A single well-chosen word you then unpick. Copying three lines wastes time and demonstrates nothing." },
      { question: "Explain why analysing one word closely scores more highly than commenting on a whole sentence.",
        answer: "Because the assessment rewards close analysis of a writer's specific choices. Commenting on a sentence usually produces a general observation about meaning, which any reader could make. Zooming in on one word lets you discuss its connotations and compare it with the alternatives the writer rejected — which demonstrates that you understand the choice was deliberate, and that is what earns the higher band. (Mark this one yourself.)" },
      { question: "Explain the difference between a retrieval question and an inference question, with an example of each.",
        answer: "A retrieval question asks for something stated: 'How old is the narrator?' — you find the line that says it. An inference question asks you to draw a conclusion from evidence: 'What does the extract suggest about the narrator's mood?' — nothing states the mood, so you cite a detail such as her hands trembling and explain what it implies. Answering an inference question with a literal quotation scores nothing, because the reasoning is the thing being tested. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Naming techniques is what gets marks — spot as many as possible.\"",
        right: "Naming a technique with no comment on its effect earns nothing. One technique analysed properly over four sentences is worth far more than five listed." },
      { wrong: "\"Longer quotations show you understand more of the text.\"",
        right: "They show you can copy. Two or three words you then unpick demonstrates far more skill, and leaves room for the analysis that actually scores." },
      { wrong: "\"Structure questions are about sentence structure and punctuation.\"",
        right: "At GCSE, structure means the WHOLE text: how it opens, where the focus shifts, what it ends on. Answering with language analysis is the single most common error on structure questions." },
      { wrong: "\"Saying an effect is 'effective' or 'engaging' counts as analysis.\"",
        right: "Those words say nothing. Explain WHAT effect and HOW — what the reader pictures, feels or infers as a result of that specific choice." },
      { wrong: "\"You should say what the writer definitely meant.\"",
        right: "Use tentative language — 'this suggests', 'this could imply'. Certainty about another person's intentions is rarely justified and reads as less sophisticated, not more." },
      { wrong: "\"Writing everything you noticed about the extract covers all the marks.\"",
        right: "Every paragraph must answer the question asked. If it asks how fear is presented, material about setting or humour earns nothing however good it is." },
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

    workedExamples: [
      {
        question: "Rewrite 'She was nervous' using show, don't tell.",
        steps: [
          "Do not name the emotion. Ask instead: what does a nervous person actually DO?",
          "Choose specific, observable behaviour: checking things repeatedly, fidgeting, an inability to settle.",
          "Add concrete detail rather than general description — a named object beats 'a thing'.",
          "Draft: 'She checked the lock for the third time, then straightened the same cushion she had already straightened.'",
          "Trust the reader. Adding 'because she was nervous' afterwards would undo the whole effect.",
        ],
        answer:
          "'She checked the lock for the third time, then straightened the same cushion she had already straightened.' The repetition does the work.",
      },
      {
        question: "Improve this opening: 'I woke up. It was a normal day. I got dressed and went out.'",
        steps: [
          "Diagnose the problems: waking up is the most overused opening there is, nothing is happening, and no detail is specific.",
          "Start in the MIDDLE of something instead, so the reader arrives mid-action.",
          "Choose one striking image or an unusual detail rather than a summary.",
          "Engage a sense other than sight — sound and smell are far more memorable.",
          "Redraft: 'The letterbox snapped shut at six, and the smell of smoke came in with the post.'",
        ],
        answer:
          "'The letterbox snapped shut at six, and the smell of smoke came in with the post.' Specific, mid-action, and it raises a question immediately.",
      },
      {
        question: "Punctuate this dialogue correctly: she said stop it now he replied I wont",
        steps: [
          "New speaker means a NEW PARAGRAPH, every time. This is the rule most often broken.",
          "Speech goes inside speech marks, and the punctuation that belongs to the speech goes inside them too.",
          "First line: 'Stop it now,' she said.  — comma inside the speech marks, before the closing mark.",
          "Second speaker starts on a new line: 'I won't,' he replied.",
          "Note the apostrophe in won't, which is a contraction of will not.",
        ],
        answer:
          "'Stop it now,' she said.\n\n'I won't,' he replied.",
      },
      {
        question: "Plan a descriptive piece about a storm in five minutes.",
        steps: [
          "Decide the ENDING first, so the writing drives towards something rather than wandering.",
          "Keep the scope small — one storm, one place, a few minutes of time. Not a whole day.",
          "Plan four or five paragraphs, each with a job: the sky before; the first strike; the height of it; the aftermath; one small detail left behind.",
          "Choose a sustained image to return to — perhaps a single tree — so the piece feels shaped rather than listed.",
          "Note two or three precise words in advance so you are not hunting for vocabulary mid-sentence.",
        ],
        answer:
          "Ending decided, scope small, four or five paragraphs with distinct jobs, and one sustained image. Structure is separately assessed, so this is not optional.",
      },
    ],

    practice: [
      { question: "What is the term for a comparison using 'like' or 'as'?",
        accept: ["simile", "a simile"], answer: "A simile — for example 'as cold as iron'." },
      { question: "What is the term for a comparison stating that one thing IS another?",
        accept: ["metaphor", "a metaphor"], answer: "A metaphor, which is stronger than a simile because it makes the claim directly." },
      { question: "What is the term for giving human qualities to something non-human?",
        accept: ["personification"], answer: "Personification — 'the wind clawed at the windows'." },
      { question: "What is the term for a word that imitates the sound it describes?",
        accept: ["onomatopoeia"], answer: "Onomatopoeia, such as crash, hiss or thud." },
      { question: "What is the term for repeating the same initial sound in nearby words?",
        accept: ["alliteration"], answer: "Alliteration, which draws attention to a phrase through sound." },
      { question: "What is the term for the repetition of s and sh sounds?",
        accept: ["sibilance"], answer: "Sibilance, often creating a soft, whispering or sinister effect." },
      { question: "What is the term for using weather or nature to reflect a character's mood?",
        accept: ["pathetic fallacy"], answer: "Pathetic fallacy — storms for turmoil, sunshine for relief." },
      { question: "What is the term for a group of words in a text all relating to the same idea?",
        accept: ["semantic field", "a semantic field"],
        answer: "A semantic field, which builds atmosphere across a passage rather than in a single line." },
      { question: "What is a sentence with one clause called?",
        accept: ["simple", "simple sentence", "a simple sentence"],
        answer: "A simple sentence. Used after several long ones, it lands hard." },
      { question: "What is a sentence containing a main clause and a subordinate clause called?",
        accept: ["complex", "complex sentence", "a complex sentence"],
        answer: "A complex sentence. Varying sentence types is explicitly assessed." },
      { question: "What is the term for showing emotion through action rather than naming it?",
        accept: ["show dont tell", "show, don't tell", "showing not telling", "show not tell", "showing"],
        answer: "Show, don't tell. 'She checked the lock for the third time' beats 'she was nervous'." },
      { question: "When a new person speaks in dialogue, what must you start?",
        accept: ["a new paragraph", "new paragraph", "new line", "a new line"],
        answer: "A new paragraph, every time. It is the dialogue rule most often broken." },
      { question: "Which is correct: its or it's, for 'it is'?",
        accept: ["it's", "its'"], answer: "it's — with an apostrophe, it is a contraction of 'it is'. 'its' without one means belonging to it." },
      { question: "How long should you spend planning a piece of creative writing in the exam?",
        accept: ["5 minutes", "five minutes", "5", "about 5 minutes", "around 5 minutes"],
        answer: "About five minutes. Structure and organisation are separately assessed, so unplanned writing cannot reach the top bands." },
      { question: "Which punctuation mark joins two complete, closely related sentences?",
        accept: ["semicolon", "a semicolon", ";"], answer: "A semicolon. A colon instead introduces a list or an explanation." },
      { question: "Is it better to write three rushed sides or one and a half controlled ones?",
        accept: ["one and a half", "1.5", "one and a half controlled", "the controlled one", "one and a half sides",
                 "shorter", "the shorter one"],
        answer: "One and a half controlled sides. Examiners reward quality of expression, not quantity." },
      { question: "Explain why 'and then I woke up' is such a damaging way to end a story.",
        answer: "Because it retrospectively removes every stake from the piece — nothing that happened mattered, so the reader's investment is wasted. It also signals that the writer could not find a real resolution. Examiners have seen it thousands of times, and it turns a competent piece into a predictable one at the exact moment the reader's impression is being formed. (Mark this one yourself.)" },
      { question: "Explain why describing one moment in detail usually scores higher than telling a whole story.",
        answer: "Because a whole story compressed into forty minutes forces you into summary — 'then this happened, then that happened' — which leaves no room for the descriptive detail, imagery and sentence craft being assessed. One moment described richly lets you show precise vocabulary, varied sentence structures and sustained imagery, which is what the mark scheme rewards. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Writing more gets more marks.\"",
        right: "A controlled page and a half beats three rushed sides. Marks come from quality of expression and structure, and rushing damages both." },
      { wrong: "\"You should include as many techniques as possible.\"",
        right: "Techniques stuffed in at a rate of one per paragraph read as mechanical. Use them where they genuinely serve the writing, or they count against you." },
      { wrong: "\"Ambitious vocabulary always impresses.\"",
        right: "A precise ordinary word beats an impressive one used wrongly. Misused vocabulary is more damaging than plain vocabulary, because it shows the meaning was never understood." },
      { wrong: "\"Technical accuracy is a small part of the marks.\"",
        right: "It is a large and separately assessed chunk. Two minutes proofreading at the end can move you up a band, which is a better return than one more paragraph." },
      { wrong: "\"Planning wastes writing time.\"",
        right: "Structure and organisation are explicitly assessed. Writing that wanders because it had no plan cannot reach the top bands however good the individual sentences are." },
      { wrong: "\"If asked to describe, I should still include a plot.\"",
        right: "Answering in the wrong form caps your marks immediately. Describe means capture a scene or moment; narrate means tell a story. Do what was asked." },
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

    workedExamples: [
      {
        question: "Analyse the effect of enjambment in these lines: 'I ran / and ran and could not stop / running'.",
        steps: [
          "Identify it precisely: the sentence spills over each line ending with no punctuation to halt it.",
          "Say what that DOES to the reading experience — the voice cannot pause where the eye expects to.",
          "Connect the technique to the meaning: the poem is about being unable to stop.",
          "So the form enacts the content — the lines run on exactly as the speaker does.",
          "Add the final layer: 'running' isolated on its own line leaves the action continuing beyond the poem.",
        ],
        answer:
          "The enjambment prevents the reader from pausing, so the movement of the poem imitates the speaker's inability to stop. Naming enjambment alone earns nothing.",
      },
      {
        question: "A poem has a strict, regular rhyme scheme, but its subject is grief. Explain what to say about that.",
        steps: [
          "Notice the mismatch. A tension between form and content is always worth comment.",
          "Consider what regular form usually suggests: order, control, containment.",
          "Consider what grief usually is: chaotic, overwhelming, uncontrolled.",
          "Read the tension: the speaker may be imposing control on feelings they cannot otherwise manage.",
          "Offer it tentatively — 'the regularity could suggest a speaker holding themselves together'.",
        ],
        answer:
          "The controlled form works against the uncontrolled subject, suggesting restraint imposed on grief. Spotting form-content tension is a reliably high-scoring move.",
      },
      {
        question: "Approach a poem you have never seen before, in order.",
        steps: [
          "Read it twice — once for sense, once for technique. Do not start writing after one read.",
          "Answer four questions: who is speaking, to whom, about what, and how do they feel?",
          "Annotate anything that stands out, without yet worrying whether it matters.",
          "Look for PATTERNS among the annotations — repeated images, repeated sounds, a shift.",
          "Mark where the mood changes. Very few poems stay in one mood, and the shift is usually the point.",
        ],
        answer:
          "Two reads, then the four questions, then patterns, then the shift. Leading with meaning and following with technique is what separates strong answers from mechanical ones.",
      },
      {
        question: "Explain the effect of a caesura in the line: 'He came home. Nothing was the same.'",
        steps: [
          "Identify it: the full stop creates a deliberate pause in the middle of the line.",
          "Note what happens to the rhythm — it breaks, forcing a stop where the line would otherwise flow.",
          "Connect that to the meaning: the pause physically separates 'before' from 'after'.",
          "The break in the line mirrors the break in his life.",
          "Add the second effect: it isolates the second statement, giving it weight it would not have mid-flow.",
        ],
        answer:
          "The caesura enacts the rupture it describes, separating before from after and giving the second statement emphasis.",
      },
    ],

    practice: [
      { question: "What is the term for a group of lines in a poem, separated by a space?",
        accept: ["stanza", "a stanza"], answer: "A stanza. Regular stanzas often suggest order or control." },
      { question: "What is the term for a sentence running over a line ending without punctuation?",
        accept: ["enjambment", "enjambement"], answer: "Enjambment, which creates flow, urgency or breathlessness." },
      { question: "What is the term for a deliberate pause within a line of poetry?",
        accept: ["caesura", "a caesura"], answer: "A caesura, usually created by punctuation, which breaks the rhythm for emphasis." },
      { question: "What is the term for a line that ends with punctuation?",
        accept: ["end stopped", "end-stopped", "endstopped", "end stopped line"],
        answer: "An end-stopped line, creating a sense of completeness or finality." },
      { question: "What is the term for a turn or shift in a poem's argument or mood?",
        accept: ["volta", "a volta"], answer: "A volta, traditionally at line 9 of a sonnet." },
      { question: "How many lines does a sonnet have?",
        accept: ["14", "fourteen"], answer: "14 lines, traditionally associated with love." },
      { question: "What is the term for poetry with no regular rhyme or metre?",
        accept: ["free verse"], answer: "Free verse, which can suggest freedom, naturalness or a lack of control." },
      { question: "What is the name of the metre with five unstressed-stressed pairs per line?",
        accept: ["iambic pentameter"], answer: "Iambic pentameter, roughly the rhythm of a heartbeat." },
      { question: "What is the term for a poem spoken throughout by a single character who is not the poet?",
        accept: ["dramatic monologue", "a dramatic monologue"],
        answer: "A dramatic monologue, which often reveals more about the speaker than they intend." },
      { question: "What is the term for the repetition of similar vowel sounds in nearby words?",
        accept: ["assonance"], answer: "Assonance. Consonance is the equivalent for consonant sounds." },
      { question: "What is the term for words that almost rhyme but not exactly?",
        accept: ["half rhyme", "half-rhyme", "halfrhyme", "para rhyme", "pararhyme", "slant rhyme"],
        answer: "Half-rhyme (or para-rhyme), which often creates a sense of unease or something not quite resolving." },
      { question: "What is the term for a metaphor developed across several lines or a whole poem?",
        accept: ["extended metaphor", "an extended metaphor"], answer:
          "An extended metaphor, sustained long enough to become a structural feature rather than a single image." },
      { question: "What is the term for using an object to represent a larger abstract idea?",
        accept: ["symbolism", "symbol", "a symbol"], answer: "Symbolism — a caged bird standing for lost freedom, for example." },
      { question: "How would you label the rhyme scheme of a four-line stanza rhyming first-with-third and second-with-fourth?",
        accept: ["abab"], answer: "ABAB. Rhyme schemes are labelled with letters, a new letter for each new rhyme sound." },
      { question: "Should you refer to 'the poet' or 'the speaker' when discussing the voice of a poem?",
        accept: ["the speaker", "speaker"],
        answer: "The speaker, unless you know the poem is autobiographical. The voice is a construction, and distinguishing them shows real understanding." },
      { question: "What is the term for hard, abrupt consonant sounds such as b, p, t and d?",
        accept: ["plosive", "plosives", "plosive sounds"], answer: "Plosives, which feel harsh and can suggest anger or violence." },
      { question: "Explain why you should lead with meaning and follow with technique, rather than the reverse.",
        answer: "Because starting from technique produces a list — 'there is alliteration, there is enjambment' — with the meaning bolted on afterwards, which reads as mechanical and stays in the middle bands. Starting from what the poem conveys means every technique you then discuss is evidence for a point you are already making, so the analysis has direction and each observation earns its place. (Mark this one yourself.)" },
      { question: "Explain why a tension between a poem's form and its subject is worth writing about.",
        answer: "Because form is a choice, and a mismatch is almost always deliberate. A tightly controlled rhyme scheme describing grief, or free verse describing something rigid, sets up a contradiction the reader feels without necessarily noticing. Naming that tension and suggesting what it implies — restraint imposed on chaos, for instance — shows you are reading the poem as a made object rather than only as a message. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"The speaker of a poem is the poet.\"",
        right: "Not unless you know it is autobiographical. The voice is a construction, and treating it as the poet's own can lead to claims the poem does not support." },
      { wrong: "\"Spotting enjambment or caesura earns the mark.\"",
        right: "Naming it earns nothing. 'The enjambment makes the lines spill onward, mirroring the speaker's inability to stop' earns the mark — the effect is the answer." },
      { wrong: "\"You should quote whole stanzas to show you understand them.\"",
        right: "Quote two or three words you can analyse closely. Copying a stanza is not analysis and eats the space where the marks actually are." },
      { wrong: "\"If I can't find a technique I should say there is one anyway.\"",
        right: "Inventing alliteration from two unrelated words is obvious to an examiner and costs credibility. If a feature is not doing anything, do not mention it." },
      { wrong: "\"A poem has one mood throughout.\"",
        right: "Very few do. Finding where and how the mood shifts, and what that reveals, is usually the difference between a competent answer and a strong one." },
      { wrong: "\"You can start writing after reading the poem once.\"",
        right: "Read it twice — once for sense, once for technique. Ninety seconds prevents the most expensive error possible: a confident essay about what the poem is not about." },
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

    workedExamples: [
      {
        question: "Read this line as Shakespeare's audience would: a king is murdered by a subject.",
        steps: [
          "Recall the belief: the Great Chain of Being placed everything in a fixed, God-given order, with the monarch above all people.",
          "Add the divine right of kings — a monarch's authority came directly from God.",
          "So killing a king is not only murder; it is an attack on the order of the universe itself.",
          "The original audience would expect consequences beyond the human: storms, unnatural events, the natural world disturbed.",
          "Write it as a reaction, not a history lesson: 'a Jacobean audience would see this as a crime against God, and would anticipate the chaos that follows.'",
        ],
        answer:
          "Regicide reads as cosmic disorder, not simply crime. Context earns marks when it explains a REACTION at a specific moment.",
      },
      {
        question: "A high-status character suddenly speaks in prose rather than verse. What should you say?",
        steps: [
          "Establish the norm: high-status characters usually speak in blank verse — unrhymed iambic pentameter.",
          "Note the change: this character has dropped out of verse into prose.",
          "Ask what has happened to them in the scene.",
          "A switch commonly signals madness, extreme distress, or a collapse of self-control and status.",
          "Say it as an effect: the loss of the verse form enacts the loss of order in the character's mind.",
        ],
        answer:
          "The form itself has broken down, mirroring the character. This is a sophisticated point that is quick to make once you know to look.",
      },
      {
        question: "Explain why a soliloquy is the strongest evidence for what a character truly thinks.",
        steps: [
          "Define it: a speech delivered alone on stage, addressed to the audience.",
          "Note who is listening: no other character. There is nobody to impress, deceive or protect.",
          "Compare with dialogue: anything said to another character may be performance, flattery or a lie.",
          "So a soliloquy carries no motive to deceive.",
          "Conclude: when a character's words and actions conflict, the soliloquy is the reliable one.",
        ],
        answer:
          "Because there is no one to lie to. Quoting a soliloquy for a character's inner state is stronger evidence than quoting dialogue.",
      },
      {
        question: "Explain how staging affects your answer, using the fact that plays were performed in daylight with no scenery.",
        steps: [
          "Recall the conditions: open-air playhouses, daylight, minimal sets, no lighting effects.",
          "So darkness and time of day could not be shown — only described.",
          "That is why characters constantly announce the setting and hour: the language creates the scenery.",
          "Effect on the audience: they imagined the night, which arguably made it more powerful than any set.",
          "Use it in an answer: 'the repeated references to darkness had to do the work of the lighting, so the language itself creates the atmosphere.'",
        ],
        answer:
          "The language does the work the set cannot. Referring to staging shows you are treating it as a play rather than a novel.",
      },
    ],

    practice: [
      { question: "What is the term for a speech delivered by a character alone on stage, revealing their true thoughts?",
        accept: ["soliloquy", "a soliloquy"], answer: "A soliloquy — the strongest evidence for a character's inner state, because there is nobody to deceive." },
      { question: "What is the term for a short remark to the audience that other characters cannot hear?",
        accept: ["aside", "an aside"], answer: "An aside, which lets a character share something privately mid-scene." },
      { question: "What is the term for the audience knowing something a character does not?",
        accept: ["dramatic irony"], answer: "Dramatic irony, which creates tension because we can see what is coming." },
      { question: "What is the name of the verse form Shakespeare used most: unrhymed iambic pentameter?",
        accept: ["blank verse"], answer: "Blank verse. High-status characters usually speak in it." },
      { question: "How many pairs of syllables are in a line of iambic pentameter?",
        accept: ["5", "five"], answer: "Five, each an unstressed syllable followed by a stressed one — roughly the rhythm of a heartbeat." },
      { question: "What is the term for the fatal flaw that brings about a tragic hero's downfall?",
        accept: ["hamartia"], answer: "Hamartia. Hubris — excessive pride — is one common form of it." },
      { question: "What is the term for excessive pride or overconfidence?",
        accept: ["hubris"], answer: "Hubris, frequently the cause of a tragic hero's fall." },
      { question: "What is the term for the release of emotion an audience feels at the end of a tragedy?",
        accept: ["catharsis"], answer: "Catharsis, the emotional resolution a tragedy builds towards." },
      { question: "What was the Elizabethan belief in a fixed, God-given hierarchy called?",
        accept: ["great chain of being", "the great chain of being", "chain of being"],
        answer: "The Great Chain of Being. Disrupting it was believed to bring chaos, which is why regicide is catastrophic." },
      { question: "What was the belief that a monarch's authority came directly from God called?",
        accept: ["divine right of kings", "the divine right of kings", "divine right"],
        answer: "The divine right of kings, which makes killing a king a crime against God." },
      { question: "What were the poorer audience members who stood around the stage called?",
        accept: ["groundlings", "the groundlings"], answer: "Groundlings, who stood in the yard while wealthier patrons sat." },
      { question: "Who played the female roles in Shakespeare's theatre?",
        accept: ["men", "boys", "men and boys", "boys and men", "male actors", "males"],
        answer: "Men and boys — women were not permitted to act, which is worth remembering when discussing female characters." },
      { question: "In Shakespeare's language, which is the informal or intimate form: 'thou' or 'you'?",
        accept: ["thou"], answer: "Thou is informal or intimate; you is formal or respectful. A switch between them is always meaningful." },
      { question: "Two consecutive rhyming lines, often ending a scene, are called what?",
        accept: ["rhyming couplet", "a rhyming couplet", "couplet"],
        answer: "A rhyming couplet, used to close a scene or stamp emphasis on a key idea." },
      { question: "What is the term for a character whose contrasting qualities highlight another's?",
        accept: ["foil", "a foil"], answer: "A foil — a quiet character beside a reckless one makes both traits stand out." },
      { question: "Should you write about 'the reader' or 'the audience' when analysing a play?",
        accept: ["the audience", "audience"],
        answer: "The audience. It is written to be watched, and examiners reward awareness of that." },
      { question: "Explain why bolting a paragraph of historical context onto an essay scores poorly.",
        answer: "Because context is assessed as understanding of how circumstances shape MEANING, not as historical knowledge in isolation. A separate paragraph about Jacobean society demonstrates recall but says nothing about the text. Attaching the same fact to a specific moment — explaining why an original audience would have reacted with horror to a particular line — turns it into analysis, which is what earns the marks. (Mark this one yourself.)" },
      { question: "Explain why a character switching from verse to prose is worth commenting on.",
        answer: "Because the form is a deliberate authorial choice, and a break in it signals a break in something else. High-status characters normally speak in blank verse, so dropping into prose commonly marks madness, extreme distress or a collapse of authority. Noticing it lets you argue that the structure of the speech enacts what is happening to the character, which is a more sophisticated point than analysing the words alone. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Context means writing what you know about the historical period.\"",
        right: "Context earns marks only when it explains a reaction to a specific moment in the text. A standalone history paragraph shows recall and analyses nothing." },
      { wrong: "\"A soliloquy and a monologue are the same thing.\"",
        right: "A soliloquy is spoken ALONE, so it is honest. A monologue is a long speech TO other characters, which may well be performance or deception." },
      { wrong: "\"Translating the extract into modern English shows you understood it.\"",
        right: "Paraphrase is not analysis. Show understanding through the argument you build about the language, not by restating what it says." },
      { wrong: "\"You should refer to 'the reader' when writing about a play.\"",
        right: "Say 'the audience'. Plays are written to be watched, and mentioning staging where relevant is credited." },
      { wrong: "\"Learning long speeches gives you better quotations.\"",
        right: "Three or four words you can spell correctly and analyse closely are far more useful than a half-remembered speech you cannot unpick." },
      { wrong: "\"Shakespeare's audiences were all wealthy and educated.\"",
        right: "They were strikingly mixed — groundlings stood in the yard for a penny while wealthy patrons sat. That is precisely why the plays contain both intricate verse and broad comedy." },
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

    workedExamples: [
      {
        question: "A question asks: 'How does the writer use language to describe the storm?' Plan the answer.",
        steps: [
          "Identify the skill being tested: LANGUAGE, so word choices, phrases, techniques and sentence forms.",
          "Choose three moments from across the extract, not three from the opening paragraph.",
          "For each: what the writer does, a short embedded quotation, and the effect on the reader.",
          "Zoom in on individual words — a single verb is usually richer than a whole clause.",
          "Use subject terminology where it helps, but never let naming a technique replace explaining its effect.",
        ],
        answer:
          "Three developed points, each analysing a specific word, drawn from across the whole extract.",
      },
      {
        question: "A question asks about STRUCTURE. Explain what to write about, and what to avoid.",
        steps: [
          "Structure means the whole extract and the ORDER of things — not word choices.",
          "Consider the opening: what does the writer choose to show first, and why that?",
          "Track the shifts: changes of time, place, perspective, or a zoom from wide to narrow.",
          "Consider the ending and what it leaves the reader with.",
          "AVOID quoting a metaphor and analysing it — that is language analysis, and it earns nothing here.",
        ],
        answer:
          "Openings, shifts, focus and endings. Answering a structure question with language analysis is the single most common error on this paper.",
      },
      {
        question:
          "Evaluate this statement: 'The writer makes the reader feel sympathy for the boy.' How far do you agree?",
        steps: [
          "Take a clear position in the first sentence. Sitting on the fence cannot reach the top bands.",
          "Say HOW FAR: fully, partly, or with a qualification — 'largely, though the ending complicates it'.",
          "Support it with evidence from across the extract, not just the beginning.",
          "Evaluate rather than only analyse: say how SUCCESSFULLY the writer achieves the effect, not merely that they do.",
          "Where the effect is weaker or more ambiguous, say so — a qualified judgement reads as more sophisticated than blanket agreement.",
        ],
        answer:
          "A clear position stated early, evidence from throughout, and judgement on how well the effect is achieved.",
      },
      {
        question: "You have 45 minutes for the writing task and 45 for reading. You are 10 minutes over on reading. What do you do?",
        steps: [
          "Recognise the maths: the writing task carries roughly half the paper's marks.",
          "Ten minutes of writing time is worth far more than ten minutes of polishing a reading answer.",
          "Stop the current reading answer at a sensible point rather than perfecting it.",
          "Move to the writing task with the full remaining time.",
          "Still reserve two minutes at the end to proofread, because technical accuracy is separately assessed.",
        ],
        answer:
          "Cut the reading answer and protect the writing time. Running out of time on the writing task is the most costly self-inflicted error on this paper.",
      },
    ],

    practice: [
      { question: "A question asks you to find information stated directly in the text. What skill is that?",
        accept: ["retrieval"], answer: "Retrieval — finding and stating what is given, with no analysis required." },
      { question: "Which skill asks you to examine a writer's word choices and their effect?",
        accept: ["language analysis", "language", "analysis of language"],
        answer: "Language analysis — word choices, techniques and sentence forms, and what they do to the reader." },
      { question: "Which skill asks about how the WHOLE text is organised and ordered?",
        accept: ["structure", "structural analysis", "structure analysis"],
        answer: "Structural analysis: openings, shifts of focus, and endings." },
      { question: "Which skill asks how far you agree with a statement about the text?",
        accept: ["evaluation", "evaluate"], answer: "Evaluation — judging how successfully the writer achieves an effect, with evidence." },
      { question: "In a structure question, should you analyse a metaphor's connotations?",
        accept: ["no"], answer: "No. That is language analysis, and it scores nothing on a structure question." },
      { question: "What is the term for a change of time, place or focus within a text?",
        accept: ["shift", "a shift"], answer: "A shift — the key thing to track in structure questions." },
      { question: "Which carries more marks on this paper: the reading section, or the writing task?",
        accept: ["the writing task", "writing", "the writing", "writing task"],
        answer: "The writing task carries roughly half the paper, which is why protecting its time matters so much." },
      { question: "Roughly how many minutes per mark should you allow on the reading questions?",
        accept: ["1", "one", "1 minute", "one minute"], answer: "About one minute per mark, adjusted so the writing task keeps its full time." },
      { question: "Should you read the whole extract before answering question one?",
        accept: ["yes"], answer: "Yes — about ten minutes. Misunderstanding the extract costs far more than the reading time." },
      { question: "What is the difference between descriptive and narrative writing, in one word each?",
        accept: ["scene and story", "describe and tell", "moment and story", "scene story", "description and story",
                 "picture and story"],
        answer: "Descriptive captures a scene or moment; narrative tells a story with events developing over time." },
      { question: "How long should you spend planning the writing task?",
        accept: ["5 minutes", "five minutes", "5", "about 5 minutes"],
        answer: "About five minutes. Structure is separately assessed, so a plan is not optional." },
      { question: "How long should you leave at the end to proofread?",
        accept: ["2 minutes", "two minutes", "2", "about 2 minutes", "2-3 minutes"],
        answer: "At least two minutes. Technical accuracy is a large, separately assessed portion of the marks." },
      { question: "In an evaluation question, when should you state your position?",
        accept: ["at the start", "the start", "first sentence", "the beginning", "in the introduction", "early", "immediately"],
        answer: "In your first sentence. A clear position stated early is what a top-band evaluation answer looks like." },
      { question: "Should evidence in a language answer come from one part of the extract or from across it?",
        accept: ["across it", "across", "from across", "throughout", "across the extract", "the whole extract"],
        answer: "From across the whole extract. Answers drawing only on the opening paragraph limit themselves." },
      { question: "Is naming a technique correctly worth a mark on its own?",
        accept: ["no"], answer: "No. Terminology is a tool for describing an effect precisely, not a target in itself." },
      { question: "What is the term for the viewpoint a story is told from, such as first or third person?",
        accept: ["narrative perspective", "perspective", "narrative voice", "point of view", "narrative point of view"],
        answer: "Narrative perspective, which shapes what the reader is allowed to know." },
      { question: "Explain why a structure question cannot be answered with language analysis, however good that analysis is.",
        answer: "Because the two assess different skills. Language analysis examines individual choices at word and phrase level; structure examines how the whole text is shaped — what the writer shows first, where the focus moves, what it ends on. An examiner marking a structure question has no criteria to reward a comment about a metaphor, so even excellent language analysis earns nothing there. (Mark this one yourself.)" },
      { question: "Explain why running out of time on the writing task is the most costly mistake on this paper.",
        answer: "Because the writing task carries roughly half the total marks, and those marks are spread across content, organisation and technical accuracy — all of which collapse if the piece is rushed or unfinished. Ten extra minutes spent perfecting a four-mark reading answer can never recover what an unplanned, unproofread piece of writing loses. Time should be protected in proportion to marks, not to how interesting a question is. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Structure questions are about sentence structure.\"",
        right: "They are about the whole extract: how it opens, where focus shifts, what it ends on. Answering with language analysis is the most common error on this paper." },
      { wrong: "\"Spending longer on the reading section shows more effort.\"",
        right: "The writing task carries about half the marks. Time should follow marks, not interest — an unfinished piece of writing costs more than an imperfect reading answer." },
      { wrong: "\"A balanced evaluation answer means not committing either way.\"",
        right: "Take a clear position and prove it. A qualified judgement — 'largely, though the ending complicates it' — is sophisticated; refusing to decide is not." },
      { wrong: "\"More subject terminology means a higher band.\"",
        right: "Correctly naming a technique and saying nothing about it is worth less than describing the effect precisely without the label. Terminology serves the analysis, not the other way round." },
      { wrong: "\"You should start writing straight away to save time.\"",
        right: "Read the whole extract first, and plan the writing task. Misunderstanding the text or wandering without a plan costs far more than the minutes saved." },
      { wrong: "\"All my evidence can come from the opening, since that's what I read most carefully.\"",
        right: "Examiners look for coverage of the whole extract. Evidence clustered in one place caps the mark however well it is analysed." },
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

    workedExamples: [
      {
        question: "Compare how two writers present their attitude to city life — one enthusiastic, one weary.",
        steps: [
          "Write about BOTH texts in the same paragraph. This is the single thing that decides your band.",
          "State the comparison first: 'Both writers describe the same crowds, but Source A finds energy where Source B finds exhaustion.'",
          "Evidence from A, briefly embedded, with a comment on one word.",
          "Evidence from B, linked with a comparative connective: 'whereas', 'in contrast', 'similarly'.",
          "Compare the METHOD too, not just the opinion: one may use short exclamatory sentences while the other uses long, weary subordinate clauses.",
        ],
        answer:
          "One paragraph covering both texts, with a comparative connective and evidence from each. Analysing A fully then B fully caps the mark however good each half is.",
      },
      {
        question: "Write the opening of a speech arguing that homework should be reduced.",
        steps: [
          "Match the FORM: a speech addresses an audience directly, so open by speaking to them.",
          "Take a clear position immediately — wavering weakens an argument.",
          "Use a rhetorical device deliberately, not decoratively: a rhetorical question invites agreement.",
          "Add a fact or statistic for credibility, and a triple for rhythm.",
          "Draft: 'Fellow students, how many of us finished last night's homework at eleven o'clock? Not because we were lazy, not because we were disorganised, but because there was simply too much of it.'",
        ],
        answer:
          "Direct address, clear position, a rhetorical question and a rule of three — with the form obviously matching what was asked for.",
      },
      {
        question: "A summary question asks for the differences between two texts. Explain what to write.",
        steps: [
          "This asks for INFERENCE about differences, not a retelling of each text.",
          "State a difference clearly as your point.",
          "Give a short quotation from EACH text to evidence it — one alone is not a comparison.",
          "Say what the difference SUGGESTS, which is the inference being tested.",
          "Do NOT analyse language here; that is a different question with different marks.",
        ],
        answer:
          "A stated difference, evidence from both, and what it implies. Retelling either text scores nothing.",
      },
      {
        question: "You are asked to write a letter to a headteacher. List what the form requires.",
        steps: [
          "A greeting: 'Dear Mrs Ahmed' — an appropriate salutation, not 'Hi'.",
          "A formal register throughout, because of the audience.",
          "Clear paragraphing, each with a distinct point.",
          "An acknowledgement of the opposing view, which makes you seem reasonable rather than one-sided.",
          "A sign-off: 'Yours sincerely' when you know the name, 'Yours faithfully' when you do not.",
        ],
        answer:
          "Greeting, formal register, paragraphs, counter-argument and sign-off. Ignoring the form loses marks before the content is even read.",
      },
    ],

    practice: [
      { question: "In DAFOREST, what does the R stand for?",
        accept: ["rhetorical question", "rhetorical questions", "rhetorical"],
        answer: "Rhetorical question — asked for effect rather than to get an answer, prompting the reader to agree." },
      { question: "In DAFOREST, what does the T stand for?",
        accept: ["triples", "triple", "rule of three", "tripling"],
        answer: "Triples, or the rule of three, which makes an argument feel complete and memorable." },
      { question: "In DAFOREST, what does the E stand for?",
        accept: ["emotive language", "emotive"], answer: "Emotive language — words chosen to provoke a feeling in the reader." },
      { question: "In DAFOREST, what does the D stand for?",
        accept: ["direct address", "direct"], answer: "Direct address — speaking straight to the reader using 'you'." },
      { question: "What is the term for deliberate exaggeration used for effect?",
        accept: ["hyperbole"], answer: "Hyperbole, which can add force or humour but loses power if overused." },
      { question: "What is the term for a short personal story used to illustrate a point?",
        accept: ["anecdote", "an anecdote"], answer: "An anecdote, which makes an abstract argument feel personal and relatable." },
      { question: "What is the term for acknowledging the opposing view in order to challenge it?",
        accept: ["counter argument", "counter-argument", "counterargument", "counter"],
        answer: "Counter-argument, which makes the writer appear reasonable rather than one-sided." },
      { question: "Give one comparative connective useful for joining points about two texts.",
        accept: ["whereas", "however", "in contrast", "similarly", "although", "while", "by contrast", "on the other hand"],
        answer: "'Whereas', 'however', 'in contrast' or 'similarly'. Using them constantly is what makes an answer read as genuine comparison." },
      { question: "Should you write about both texts in the same paragraph, or one text and then the other?",
        accept: ["same paragraph", "both in the same paragraph", "the same paragraph", "together", "both together",
                 "in the same paragraph"],
        answer: "Both in the same paragraph. Analysing one text fully and then the other is the biggest limiter on this paper." },
      { question: "How many texts should you quote from in each comparison point?",
        accept: ["2", "two", "both"], answer: "Both. A comparison supported by evidence from only one text is not a comparison." },
      { question: "In a summary question, should you analyse the writers' language choices?",
        accept: ["no"], answer: "No. Summary asks for inference about differences; language analysis is a separate question with separate marks." },
      { question: "Which sign-off should a letter use when you know the recipient's name?",
        accept: ["yours sincerely", "sincerely"], answer: "Yours sincerely. Use 'Yours faithfully' when you do not know the name." },
      { question: "What is the term for non-fiction writing produced for a real purpose and audience, like a letter or article?",
        accept: ["transactional writing", "transactional"], answer: "Transactional writing." },
      { question: "In a persuasive piece, should you argue both sides equally?",
        accept: ["no"], answer: "No. Hold one position, acknowledge the counter-argument, then dismiss it and return to your line." },
      { question: "What is the term for the writer's attitude or opinion on their subject?",
        accept: ["viewpoint", "the viewpoint", "attitude"], answer: "Viewpoint — the thing a comparison question is usually asking you to compare." },
      { question: "A 19th-century text uses a word whose meaning has changed. What should you use to work it out?",
        accept: ["context", "the context", "surrounding context", "the surrounding context"],
        answer: "The surrounding context. Many words have shifted meaning, and the sentence around them usually reveals the sense intended." },
      { question: "Explain why comparing texts one after the other caps your mark, even if both analyses are excellent.",
        answer: "Because comparison itself is the assessed skill, not analysis of two texts. Writing about A for two pages and then B for two pages produces two separate essays, and the examiner has nothing to reward for comparison because none was made explicit. Placing both texts in the same paragraph, joined with connectives like 'whereas', is what demonstrates the skill being marked. (Mark this one yourself.)" },
      { question: "Explain why you should not judge a nineteenth-century writer purely by modern values.",
        answer: "Because the assessment rewards understanding of how context shapes meaning. Attitudes that seem objectionable now may have been unremarkable or even progressive then, and explaining how a contemporary audience would have received the text demonstrates that understanding. Simply condemning the writer by today's standards shows a modern opinion rather than any insight into the text or its time. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Compare means describe text A, then describe text B.\"",
        right: "That is two descriptions. Comparison means writing about both in the same paragraph, joined by connectives, so the relationship between them is explicit." },
      { wrong: "\"A summary question wants me to say what happens in each text.\"",
        right: "It wants inference about the DIFFERENCES, evidenced from both texts. Retelling either one scores nothing." },
      { wrong: "\"Stuffing in every DAFOREST technique will impress.\"",
        right: "Devices used at random read as mechanical. Choose the ones that genuinely serve your argument, and make them work — a rhetorical question that nobody would answer differently is wasted." },
      { wrong: "\"The form of the writing task doesn't really matter.\"",
        right: "A letter needs a greeting and sign-off; a speech needs direct address. Ignoring the form loses marks before the content is even considered." },
      { wrong: "\"A persuasive piece should present both sides fairly.\"",
        right: "Hold one position. Acknowledge the counter-argument only in order to dismiss it — arguing both sides equally undermines the purpose you were asked to fulfil." },
      { wrong: "\"Older texts are harder because the vocabulary is more advanced.\"",
        right: "More often the difficulty is sentence LENGTH and subordination. Read to the punctuation rather than the line, and most nineteenth-century prose becomes manageable." },
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
