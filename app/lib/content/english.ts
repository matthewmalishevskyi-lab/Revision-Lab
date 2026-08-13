// ENGLISH — all 16 topics.
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
      {
        question: "What does INFERENCE mean when reading a text?",
        choices: [
          "Working out what is suggested rather than stated",
          "Copying a quotation exactly",
          "Summarising the whole text",
          "Counting the techniques used",
        ],
        accept: [
          "Working out what is suggested rather than stated",
        ],
        answer: "Inference questions want you to read between the lines and support the reading with evidence.",
      },
      {
        question: "Which is the best way to support a point about a text?",
        choices: [
          "A short, precise quotation analysed closely",
          "A long quotation with no comment",
          "A general statement with no evidence",
          "A summary of the plot",
        ],
        accept: [
          "A short, precise quotation analysed closely",
        ],
        answer: "Embedding a few words into your own sentence and unpicking the word choice scores far higher than quoting a paragraph.",
      },
      {
        question: "What does TONE refer to?",
        choices: [
          "The writer's attitude conveyed through language",
          "The speed of the plot",
          "The number of characters",
          "The length of the sentences",
        ],
        accept: [
          "The writer's attitude conveyed through language",
        ],
        answer: "Mood is what the reader feels; tone is the writer's attitude. The two are related but not the same.",
      },
      {
        question: "Analysing a writer's METHODS means writing about:",
        choices: [
          "The choices they made and the effect on the reader",
          "What happens in the story",
          "Your personal opinion of the characters",
          "The historical background only",
        ],
        accept: [
          "The choices they made and the effect on the reader",
        ],
        answer: "Retelling the plot is the single biggest waste of time in an English exam. Always link method to effect.",
      },
      {
        question: "Which phrase best begins an analytical sentence?",
        choices: [
          "The writer suggests that...",
          "The story is about...",
          "I think this is good because...",
          "In the beginning...",
        ],
        accept: [
          "The writer suggests that...",
        ],
        answer: "It signals analysis rather than retelling, and pushes you straight into the writer's intention.",
      },
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
      {
        question: "Which opening is most likely to engage a reader?",
        choices: [
          "A vivid image or moment of tension",
          "A list of the characters' names",
          "A summary of what will happen",
          "A description of the weather forecast",
        ],
        accept: [
          "A vivid image or moment of tension",
        ],
        answer: "Starting in the middle of the action gives the reader a reason to continue. Explaining everything first delays that.",
      },
      {
        question: "Which technique creates atmosphere most effectively in descriptive writing?",
        choices: [
          "Sensory detail beyond just sight",
          "Long lists of adjectives",
          "Frequent exclamation marks",
          "Naming every object present",
        ],
        accept: [
          "Sensory detail beyond just sight",
        ],
        answer: "Sound, smell and touch are the senses most students forget, and using them makes a description feel inhabited.",
      },
      {
        question: "Varying sentence length is useful because it:",
        choices: [
          "Controls pace and creates emphasis",
          "Makes the writing longer",
          "Fills the page more quickly",
          "Avoids the need for punctuation",
        ],
        accept: [
          "Controls pace and creates emphasis",
        ],
        answer: "A short sentence after several long ones lands hard. That contrast is the effect, not the shortness itself.",
      },
      {
        question: "In a 40-mark creative writing task, planning is worth doing because it:",
        choices: [
          "Gives the piece a clear structure and ending",
          "Guarantees more techniques",
          "Uses up spare time",
          "Replaces the need to check spelling",
        ],
        accept: [
          "Gives the piece a clear structure and ending",
        ],
        answer: "Unplanned pieces commonly run out of time and stop mid-scene, losing structure marks that were easy to keep.",
      },
      {
        question: "Which is usually the strongest way to end a descriptive piece?",
        choices: [
          "Echoing an image from the opening",
          "Waking up and it was a dream",
          "Explaining the moral",
          "Introducing a new character",
        ],
        accept: [
          "Echoing an image from the opening",
        ],
        answer: "A circular structure feels deliberate. The dream ending is heavily overused and undermines everything before it.",
      },
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
      {
        question: "Which technique compares two things using 'like' or 'as'?",
        choices: [
          "Simile",
          "Metaphor",
          "Personification",
          "Alliteration",
        ],
        accept: [
          "Simile",
        ],
        answer: "A metaphor says something IS the other thing. Naming the technique earns little on its own — the marks come from analysing its effect.",
      },
      {
        question: "Giving human qualities to something non-human is:",
        choices: [
          "Personification",
          "Simile",
          "Onomatopoeia",
          "Sibilance",
        ],
        accept: [
          "Personification",
        ],
        answer: "It often makes a setting feel threatening or alive, which is why it appears so often in descriptions of nature and weather.",
      },
      {
        question: "What is ENJAMBMENT?",
        choices: [
          "A sentence running over the end of a line without pause",
          "A pause in the middle of a line",
          "A repeated opening word",
          "A rhyme at the end of a line",
        ],
        accept: [
          "A sentence running over the end of a line without pause",
        ],
        answer: "A caesura is the mid-line pause. Enjambment can create momentum or a sense of thought spilling over.",
      },
      {
        question: "A poem of fourteen lines is most likely a:",
        choices: [
          "Sonnet",
          "Ballad",
          "Haiku",
          "Ode",
        ],
        accept: [
          "Sonnet",
        ],
        answer: "Sonnets traditionally deal with love or intense feeling, and the turn in argument often comes near the end.",
      },
      {
        question: "Which word describes the rhythm and beat of a poem?",
        choices: [
          "Metre",
          "Stanza",
          "Rhyme scheme",
          "Imagery",
        ],
        accept: [
          "Metre",
        ],
        answer: "Iambic pentameter is the most common English metre. A break in the rhythm often marks a moment of disruption.",
      },
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
      {
        question: "What is a SOLILOQUY?",
        choices: [
          "A speech revealing a character's private thoughts to the audience",
          "A conversation between two characters",
          "A song performed on stage",
          "A stage direction",
        ],
        accept: [
          "A speech revealing a character's private thoughts to the audience",
        ],
        answer: "The character is alone, so the audience is trusted with what others cannot hear. An aside is much shorter.",
      },
      {
        question: "Iambic pentameter consists of:",
        choices: [
          "Five pairs of unstressed then stressed syllables",
          "Ten rhyming words",
          "Five rhyming couplets",
          "Two lines of any length",
        ],
        accept: [
          "Five pairs of unstressed then stressed syllables",
        ],
        answer: "Shakespeare often gives verse to nobles and prose to lower-status characters, so a switch is worth noticing.",
      },
      {
        question: "Dramatic irony occurs when:",
        choices: [
          "The audience knows something a character does not",
          "A character tells a joke",
          "Two characters argue",
          "The plot ends unhappily",
        ],
        accept: [
          "The audience knows something a character does not",
        ],
        answer: "It creates tension because we can see the mistake coming, which makes us watch differently.",
      },
      {
        question: "In a Shakespearean tragedy, the protagonist usually has:",
        choices: [
          "A fatal flaw that leads to their downfall",
          "A happy ending",
          "No influence over events",
          "Only minor problems",
        ],
        accept: [
          "A fatal flaw that leads to their downfall",
        ],
        answer: "Ambition, jealousy and indecision are common flaws. The audience is meant to feel both pity and unease.",
      },
      {
        question: "Why did Shakespeare's plays include comic scenes in tragedies?",
        choices: [
          "To vary the mood and heighten the tension that follows",
          "To fill time",
          "Because tragedies were unpopular",
          "To avoid censorship",
        ],
        accept: [
          "To vary the mood and heighten the tension that follows",
        ],
        answer: "Comic relief makes the return to darkness land harder, and appealed to a mixed audience.",
      },
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
      {
        question: "In a fiction reading question about structure, you might discuss:",
        choices: [
          "Where the writer shifts focus and why",
          "How many adjectives are used",
          "The spelling of unusual words",
          "The length of the extract",
        ],
        accept: [
          "Where the writer shifts focus and why",
        ],
        answer: "Structure covers openings, shifts in perspective, pace and endings — not just paragraph count.",
      },
      {
        question: "Evaluating a statement about a text means:",
        choices: [
          "Judging how far you agree, using evidence",
          "Agreeing with it automatically",
          "Summarising the text",
          "Listing techniques",
        ],
        accept: [
          "Judging how far you agree, using evidence",
        ],
        answer: "Evaluation questions carry the most marks and are most often answered as description instead of judgement.",
      },
      {
        question: "Which detail would best build tension in a piece of narrative writing?",
        choices: [
          "A small unsettling detail noticed too late",
          "A full description of the room",
          "A list of the character's belongings",
          "An explanation of the ending",
        ],
        accept: [
          "A small unsettling detail noticed too late",
        ],
        answer: "Withholding information creates tension. Explaining everything as it happens releases it.",
      },
      {
        question: "Reading a fiction extract closely means paying attention to:",
        choices: [
          "Individual word choices and their connotations",
          "Only the events described",
          "The author's biography",
          "The number of characters",
        ],
        accept: [
          "Individual word choices and their connotations",
        ],
        answer: "Why 'crept' rather than 'walked'? The specific choice is where the analysis lives.",
      },
      {
        question: "In the reading paper, the number of marks tells you:",
        choices: [
          "How much to write and how deeply to analyse",
          "Which question to answer first",
          "How long the extract is",
          "How many quotations to memorise",
        ],
        accept: [
          "How much to write and how deeply to analyse",
        ],
        answer: "Spending twenty minutes on a four-mark question is one of the commonest ways to lose marks elsewhere.",
      },
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
        accept: ["transactional writing", "transactional"], answer:
          "Transactional writing \u2014 letters, articles, speeches and reviews, all written for a stated audience." },
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
      {
        question: "Which is a common purpose of non-fiction writing?",
        choices: [
          "To persuade the reader to a point of view",
          "To invent a fictional world",
          "To follow a rhyme scheme",
          "To avoid having an audience",
        ],
        accept: [
          "To persuade the reader to a point of view",
        ],
        answer: "Inform, explain, describe, argue and advise are the others. Identifying purpose shapes everything you say about method.",
      },
      {
        question: "Which technique is most associated with persuasive writing?",
        choices: [
          "Rhetorical questions and direct address",
          "Random capitalisation",
          "Long unbroken paragraphs",
          "Avoiding all facts",
        ],
        accept: [
          "Rhetorical questions and direct address",
        ],
        answer: "Triples, emotive language, anecdote and statistics are the others. The mark comes from explaining WHY it works on the reader.",
      },
      {
        question: "When comparing two non-fiction texts you should focus on:",
        choices: [
          "Both the ideas expressed and how they are conveyed",
          "Only which one you enjoyed more",
          "The number of paragraphs in each",
          "The publication dates only",
        ],
        accept: [
          "Both the ideas expressed and how they are conveyed",
        ],
        answer: "Comparative connectives such as 'whereas' and 'similarly' make the comparison visible to the examiner.",
      },
      {
        question: "An anecdote is used in persuasive writing to:",
        choices: [
          "Make an argument feel personal and relatable",
          "Provide statistical proof",
          "Confuse the reader",
          "Fill space",
        ],
        accept: [
          "Make an argument feel personal and relatable",
        ],
        answer: "It is emotionally powerful but is only one example, which is a fair criticism to make when evaluating a text.",
      },
      {
        question: "When writing to argue, your viewpoint should be:",
        choices: [
          "Clear and consistent throughout",
          "Changed halfway through",
          "Hidden from the reader",
          "The same as the opposing side",
        ],
        accept: [
          "Clear and consistent throughout",
        ],
        answer: "Acknowledging a counter-argument and dismissing it strengthens your case; drifting between positions weakens it.",
      },
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

    workedExamples: [
      {
        question: "Plan an essay on how a writer presents responsibility in a modern text, from memory.",
        steps: [
          "Spend five minutes planning. There is no extract, so structure has to come from you.",
          "Write a THESIS first: one sentence arguing something, not restating the question. For example: 'the writer presents responsibility as collective rather than individual, and punishes those who deny it.'",
          "Choose four paragraph points that build the argument, each with one learned quotation.",
          "Order them to trace development across the whole text — early, middle, end — so you can show change.",
          "Note where context genuinely explains a moment, and attach it there rather than in a separate paragraph.",
        ],
        answer:
          "A thesis, four evidenced points ordered across the text, and context attached to specific moments.",
      },
      {
        question: "Turn 'the character changes a lot in the play' into a top-band point.",
        steps: [
          "Diagnose it: this describes rather than argues, and gives no evidence or cause.",
          "Name WHAT changes: the character moves from deference to open defiance.",
          "Give the turning point and what caused it.",
          "Add short evidence from before and after, so the change is demonstrated rather than asserted.",
          "Say what the writer achieves by it: perhaps the audience is invited to see that change is possible, which serves the play's argument.",
        ],
        answer:
          "Name the change, locate the turning point, evidence both sides, and say what the writer gains by it.",
      },
      {
        question: "Weave context into analysis rather than bolting it on. Show the difference.",
        steps: [
          "The bolted-on version: a paragraph explaining the social conditions of the period, with no reference to the text.",
          "That demonstrates recall, but analyses nothing, so it earns very little.",
          "The woven version starts with the moment: identify a specific line or action.",
          "Explain how a contemporary audience would have received it, given what they believed or expected.",
          "Conclude with the effect: the writer relies on that expectation, so the moment lands harder for its original audience than for us.",
        ],
        answer:
          "Attach context to a specific moment and explain the reaction it produces. Standalone history paragraphs are the commonest way to waste knowledge.",
      },
      {
        question: "Explain why you should write 'the audience' for a play and 'the reader' for a novel.",
        steps: [
          "A play is written to be performed and watched, not read silently.",
          "So its effects include staging: entrances, lighting, what is visible and what is concealed.",
          "Saying 'the reader' signals you are treating a script as a novel and missing that dimension.",
          "For a novel, the reader's experience IS the medium — pacing, narrative voice, chapter breaks.",
          "Examiners notice the slip immediately, and it is a one-word fix.",
        ],
        answer:
          "'Audience' for plays, 'reader' for novels. A tiny detail that signals whether you understand the form.",
      },
    ],

    practice: [
      { question: "What is the term for an idea or issue a writer explores throughout a text?",
        accept: ["theme", "a theme"], answer: "A theme — an idea the writer explores, not simply an event that happens." },
      { question: "What is the term for the theatrical elements of a play such as staging, lighting and entrances?",
        accept: ["stagecraft"], answer: "Stagecraft. Discussing it shows you are treating the text as a play." },
      { question: "What is the term for the central character whose choices drive the story?",
        accept: ["protagonist", "the protagonist"], answer:
          "The protagonist \u2014 the character whose decisions drive the plot forward." },
      { question: "What is the term for the character or force opposing the protagonist?",
        accept: ["antagonist", "the antagonist"], answer:
          "The antagonist, who may be a person, a group, or an impersonal force." },
      { question: "What is the term for a character whose contrasting qualities highlight another's?",
        accept: ["foil", "a foil"], answer: "A foil — pairing opposites makes both characters' traits stand out." },
      { question: "What is the term for the central argument of an essay, stated in the introduction?",
        accept: ["thesis", "a thesis", "thesis statement"],
        answer: "A thesis. It should argue something, not restate the question." },
      { question: "What is the term for the way a character changes over the course of a text?",
        accept: ["character arc", "arc", "a character arc"], answer:
          "A character arc \u2014 what changes, when the turning point falls, and what causes it." },
      { question: "What is the term for a recurring image or idea that develops a theme?",
        accept: ["motif", "a motif"], answer: "A motif, which gives you a ready-made structure for tracing development across a text." },
      { question: "What is the term for a story in which characters and events stand for wider ideas?",
        accept: ["allegory", "an allegory"], answer: "Allegory — Animal Farm being the standard example." },
      { question: "Should you write 'the audience' or 'the reader' when discussing a play?",
        accept: ["the audience", "audience"], answer: "The audience. It is written to be watched, and examiners notice the slip immediately." },
      { question: "Is there an extract in front of you for the modern text question?",
        accept: ["no"], answer: "No — it is answered from memory, which is why learning short quotations matters so much." },
      { question: "Roughly how many short quotations should you learn per character or theme?",
        accept: ["5", "five", "about 5", "around 5", "4-5", "3-5"],
        answer: "Around five. Short ones you can spell and analyse beat long ones you half-remember." },
      { question: "Where in an essay should your thesis appear?",
        accept: ["the introduction", "introduction", "the start", "the beginning", "first paragraph", "at the start"],
        answer: "The introduction, in the first two or three sentences — and every paragraph should then support it." },
      { question: "Should context be a separate paragraph or woven into analysis?",
        accept: ["woven into analysis", "woven in", "woven", "integrated", "woven into the analysis", "integrated into analysis"],
        answer: "Woven in, attached to specific moments. A standalone history paragraph earns very little." },
      { question: "Should evidence come from the whole text or mainly the opening?",
        accept: ["the whole text", "whole text", "throughout", "across the whole text", "all of it"],
        answer: "The whole text. An essay stopping halfway cannot show how ideas develop, which is what the question tests." },
      { question: "How long should you spend planning this essay?",
        accept: ["5 minutes", "five minutes", "5", "about 5 minutes"],
        answer: "About five minutes. A planned essay with a clear argument reliably outscores a longer unplanned one." },
      { question: "Explain why retelling the plot is the most common way strong knowledge produces a weak grade.",
        answer: "Because the examiner already knows the text — nothing is demonstrated by recounting it. The marks are for constructing an argument about how the writer creates meaning and for analysing specific choices. A student who knows the play thoroughly but writes what happens has spent the whole essay proving something that was never in question, while never doing the thing being assessed. (Mark this one yourself.)" },
      { question: "Explain why tracing a character's development across the whole text scores higher than analysing one scene deeply.",
        answer: "Because the question is set on the whole text and rewards understanding of how ideas and characters develop. A single scene analysed brilliantly still shows only a snapshot, and cannot demonstrate change, cause or the writer's shaping of the work as a whole. Evidence from the beginning, middle and end lets you argue about what changes, when, and why the writer places it there. (Mark this one yourself.)" },
      {
        question: "Stage directions in a modern play are worth analysing because they:",
        choices: [
          "Reveal the writer's intentions for performance",
          "Are not part of the text",
          "Only describe scenery",
          "Are written by the director",
        ],
        accept: [
          "Reveal the writer's intentions for performance",
        ],
        answer: "Lighting, silence, positioning and props are all deliberate choices, and often carry theme as directly as dialogue does.",
      },
      {
        question: "Which is a strong focus for an essay on a modern text?",
        choices: [
          "How a character develops and what that says about the writer's ideas",
          "A chapter-by-chapter summary",
          "Whether you liked the ending",
          "The number of scenes",
        ],
        accept: [
          "How a character develops and what that says about the writer's ideas",
        ],
        answer: "Characters in modern texts are usually vehicles for ideas about society, so link the two explicitly.",
      },
      {
        question: "Writing about structure in a play might include:",
        choices: [
          "Where the writer places the climax and why",
          "How many pages it has",
          "The font used in the script",
          "The names of the original cast",
        ],
        accept: [
          "Where the writer places the climax and why",
        ],
        answer: "Structural choices — an act ending on a revelation, a cyclical opening and closing — are frequently under-used by students.",
      },
      {
        question: "A modern text set in the past is often really commenting on:",
        choices: [
          "The writer's own society and time",
          "Historical accuracy only",
          "Nothing beyond the plot",
          "The lives of real people",
        ],
        accept: [
          "The writer's own society and time",
        ],
        answer: "Noticing that gap between when a play is SET and when it was WRITTEN often unlocks the whole argument.",
      },
      {
        question: "Symbolism in a modern text works by:",
        choices: [
          "Using an object or image to represent a bigger idea",
          "Repeating a character's name",
          "Describing a setting realistically",
          "Listing events in order",
        ],
        accept: [
          "Using an object or image to represent a bigger idea",
        ],
        answer: "Trace where the symbol appears across the whole text rather than analysing one appearance in isolation.",
      },
    ],

    misconceptions: [
      { wrong: "\"Knowing the plot thoroughly is what gets a top grade.\"",
        right: "Retelling it earns nothing — the examiner knows the text. Marks come from arguing a thesis and analysing how the writer creates meaning." },
      { wrong: "\"Context means a paragraph about the historical period.\"",
        right: "Weave it into analysis at specific moments, explaining how a contemporary audience would react. A standalone paragraph shows recall and analyses nothing." },
      { wrong: "\"Longer quotations show deeper knowledge.\"",
        right: "Short ones you can spell and unpick are far more useful. A half-remembered speech you cannot analyse is worse than three precise words." },
      { wrong: "\"You can use 'the reader' for a play; it means the same thing.\"",
        right: "Say 'the audience'. It signals that you understand the text is written to be performed, and examiners notice the difference immediately." },
      { wrong: "\"A theme is something that happens in the text.\"",
        right: "A theme is an IDEA the writer explores — responsibility, power, guilt. What happens is plot; what it is about is theme." },
      { wrong: "\"If I've prepared an essay, I can use it whatever the question asks.\"",
        right: "Pre-learned essays delivered regardless of the wording score badly. Return to the question's actual words at the start or end of every paragraph." },
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

    workedExamples: [
      {
        question: "Structure an answer to 'How does Shakespeare present ambition in this extract and in the play as a whole?'",
        steps: [
          "Note the double demand: the extract AND the whole play. Both are required, and the mark scheme says so.",
          "Introduction: one or two sentences arguing a clear line about ambition.",
          "Two or three paragraphs on the EXTRACT first, while the evidence is in front of you — bank those marks.",
          "Then two or three paragraphs moving outwards, using learned quotations from elsewhere in the play.",
          "Link explicitly between the two: 'this foreshadows...' or 'by Act 5 this has become...'.",
          "Conclusion: what Shakespeare achieves overall, and why it matters.",
        ],
        answer:
          "Half on the extract, half on the wider play, with explicit links. Staying inside the extract is the most common reason strong analysis gets a middling grade.",
      },
      {
        question: "Analyse a recurring image of blood across a play, rather than in one scene.",
        steps: [
          "Identify the motif: blood appears repeatedly, so it is doing structural work.",
          "Track it early: blood may first signal honour or bravery in battle.",
          "Track it at the turning point: the same image now signals guilt.",
          "Track it late: it becomes something that cannot be washed away — permanent, inescapable.",
          "Argue the development: the shifting meaning of one image charts the character's moral decline.",
        ],
        answer:
          "Following one motif from beginning to end gives a ready-made structure for a whole-text answer, and demonstrates development rather than description.",
      },
      {
        question: "Use context well: a character defies expectations of women in the period.",
        steps: [
          "Anchor it to a specific moment — a line where she commands rather than obeys.",
          "State the expectation: women were expected to be obedient to fathers and husbands.",
          "Explain the reaction: a contemporary audience would find this genuinely shocking, not merely bold.",
          "Say what Shakespeare gains: the shock makes the audience question the order they take for granted.",
          "Keep it to two or three sentences inside an analytical paragraph — never a separate history section.",
        ],
        answer:
          "Context explains a REACTION at a specific moment. That is what earns AO3 marks; background information does not.",
      },
      {
        question: "Explain how to use a soliloquy as evidence, and why it is stronger than dialogue.",
        steps: [
          "Establish what it is: a speech delivered alone on stage, addressed to the audience.",
          "Note the absence of any other character — nobody to flatter, deceive or perform for.",
          "Contrast with dialogue, which may be strategic, false or self-protective.",
          "So when words and actions conflict, the soliloquy is the reliable evidence.",
          "In an answer: 'alone on stage, with no reason to dissemble, he admits...' — the framing itself demonstrates understanding.",
        ],
        answer:
          "There is nobody to lie to. Framing a soliloquy that way shows you understand WHY it counts as strong evidence.",
      },
    ],

    practice: [
      { question: "Does the Shakespeare question require you to write about the extract only, or the extract and the whole play?",
        accept: ["both", "extract and whole play", "the extract and the whole play", "extract and the play",
                 "both the extract and the play", "extract and play"],
        answer: "Both. Staying inside the extract caps your mark however good the analysis is." },
      { question: "Roughly what proportion of your answer should cover the extract?",
        accept: ["half", "a half", "50%", "about half", "1/2"],
        answer: "About half, then move outwards to the wider play. Start with the extract while the evidence is in front of you." },
      { question: "What is the term for a speech delivered alone on stage revealing true thoughts?",
        accept: ["soliloquy", "a soliloquy"], answer: "A soliloquy — the strongest evidence for a character's inner state." },
      { question: "What is the term for a high-status protagonist brought down by a fatal flaw?",
        accept: ["tragic hero", "a tragic hero"], answer: "A tragic hero, the central figure of a Shakespearean tragedy." },
      { question: "What is the term for that fatal flaw itself?",
        accept: ["hamartia"], answer: "Hamartia — the error of judgement or flaw that causes the downfall." },
      { question: "What is the term for a recurring image such as blood or darkness used to develop a theme?",
        accept: ["motif", "a motif"], answer: "A motif, which gives a whole-text answer a ready-made structure." },
      { question: "What is the term for the audience knowing something a character does not?",
        accept: ["dramatic irony"], answer: "Dramatic irony, which builds tension across a scene or a whole act." },
      { question: "What is the verse form of unrhymed iambic pentameter called?",
        accept: ["blank verse"], answer: "Blank verse, used for most of Shakespeare's dialogue." },
      { question: "What is the term for placing opposing ideas together in a balanced structure?",
        accept: ["antithesis"], answer: "Antithesis — 'fair is foul, and foul is fair' being the obvious example." },
      { question: "What is the term for using weather to reflect the mood of a scene?",
        accept: ["pathetic fallacy"], answer: "Pathetic fallacy — storms accompanying turmoil, for instance." },
      { question: "Should you refer to 'the reader' or 'the audience'?",
        accept: ["the audience", "audience"], answer: "The audience. Referring to staging where relevant is also credited." },
      { question: "Is translating the extract into modern English a good use of exam time?",
        accept: ["no"], answer: "No. Paraphrase is not analysis — show understanding through the argument you build." },
      { question: "What should you attach a piece of context to, in order for it to earn marks?",
        accept: ["a specific moment", "a specific moment in the text", "a moment", "a specific line",
                 "a particular moment", "specific moments"],
        answer: "A specific moment, explaining the reaction it would produce. Generic background earns very little." },
      { question: "Naming which act and scene a moment comes from demonstrates what?",
        accept: ["whole text knowledge", "knowledge of the whole text", "whole-text knowledge", "whole text",
                 "knowledge of the play"],
        answer: "Whole-text knowledge, and it takes two seconds to include." },
      { question: "Which is stronger evidence for what a character truly believes: a soliloquy or dialogue?",
        accept: ["soliloquy", "a soliloquy", "the soliloquy"],
        answer: "A soliloquy. There is nobody on stage to deceive, so there is no motive to dissemble." },
      { question: "How many short quotations from across the whole play should you aim to learn per theme?",
        accept: ["5", "five", "about 5", "around 5", "4-5", "3-5"],
        answer: "Around five, spread across the beginning, middle and end so you can show development." },
      { question: "Explain why an answer confined to the extract cannot reach the top bands.",
        answer: "Because the question explicitly asks about the extract AND the play as a whole, and the mark scheme allocates marks to whole-text understanding. An answer confined to the extract can only show close analysis of one moment, so it has no way to demonstrate how a character or theme develops, where the turning point falls, or how Shakespeare shapes the work overall — which is precisely what the second half of the marks is for. (Mark this one yourself.)" },
      { question: "Explain why tracking a motif such as blood or darkness is an efficient way to structure a whole-text answer.",
        answer: "Because a motif recurs at intervals across the play by design, so following it automatically takes you from the beginning to the end and gives you evidence at each stage. It also lets you argue about development rather than description: the same image meaning honour early and inescapable guilt later charts a character's decline in a way that listing separate quotations cannot. (Mark this one yourself.)" },
      {
        question: "When analysing a Shakespeare extract, you should:",
        choices: [
          "Link the extract to the play as a whole",
          "Only discuss the extract",
          "Summarise the plot first",
          "Describe the theatre building",
        ],
        accept: [
          "Link the extract to the play as a whole",
        ],
        answer: "Most mark schemes reward whole-text understanding, so the extract is a starting point rather than the whole answer.",
      },
      {
        question: "Which is the strongest way to use a quotation?",
        choices: [
          "Embed a few words and analyse the word choice",
          "Quote a full speech without comment",
          "Paraphrase without quoting",
          "Quote from a different play",
        ],
        accept: [
          "Embed a few words and analyse the word choice",
        ],
        answer: "Zooming in on a single verb or image shows precision. Long quotations eat time and earn little.",
      },
      {
        question: "Writing about how an audience would react is useful because:",
        choices: [
          "Plays are written to be performed, not just read",
          "It fills space",
          "It avoids needing quotations",
          "Examiners prefer opinions",
        ],
        accept: [
          "Plays are written to be performed, not just read",
        ],
        answer: "Considering staging, tone of voice and the reaction of a contemporary audience shows genuine dramatic understanding.",
      },
      {
        question: "A character's status in a Shakespeare play is often signalled by:",
        choices: [
          "Whether they speak in verse or prose",
          "The colour of their costume only",
          "How many lines they have",
          "Their name's length",
        ],
        accept: [
          "Whether they speak in verse or prose",
        ],
        answer: "A noble slipping into prose, or a commoner rising into verse, is usually a deliberate signal worth commenting on.",
      },
      {
        question: "Context is best used in a Shakespeare essay to:",
        choices: [
          "Explain why an idea would unsettle an audience of the time",
          "List historical dates",
          "Describe Shakespeare's family",
          "Compare film adaptations",
        ],
        accept: [
          "Explain why an idea would unsettle an audience of the time",
        ],
        answer: "Beliefs about kingship, gender and the supernatural are the ones that usually illuminate the text most directly.",
      },
    ],

    misconceptions: [
      { wrong: "\"If the extract is printed, the answer should be about the extract.\"",
        right: "The question asks for the extract AND the whole play, and the marks are split accordingly. Confining yourself to the extract is the most common reason good analysis gets a middling grade." },
      { wrong: "\"Explaining what the Shakespearean language means shows understanding.\"",
        right: "Paraphrase is not analysis. Demonstrate understanding through the argument you make about the language, not by restating it in modern English." },
      { wrong: "\"Context marks are for knowing facts about the period.\"",
        right: "They are for showing how context shapes MEANING. Attach a belief to a specific line and explain the reaction it produces, or the knowledge earns almost nothing." },
      { wrong: "\"Dialogue is just as reliable as a soliloquy for a character's real feelings.\"",
        right: "Dialogue may be performance, flattery or deception — there is an audience on stage. A soliloquy has nobody to deceive, which is exactly what makes it strong evidence." },
      { wrong: "\"Starting with the wider play shows greater knowledge.\"",
        right: "Start with the extract, where the evidence is in front of you and the marks are easiest to bank, then move outwards using learned quotations." },
      { wrong: "\"A conclusion should summarise what you have already said.\"",
        right: "It should state what Shakespeare achieves overall and why it matters — a judgement that follows from the argument, not a repetition of it." },
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

    workedExamples: [
      {
        question: "Use Victorian context to explain a scene in which a wealthy character dismisses the poor as idle.",
        steps: [
          "Anchor to the moment: identify the specific line where the attitude is expressed.",
          "State the context precisely: there was no welfare system, and the destitute faced the workhouse.",
          "Add the belief: poverty was widely regarded as a personal moral failing rather than a social condition.",
          "Explain the reaction: some contemporary readers would have shared the view, which is exactly why the writer stages it so unsympathetically.",
          "Conclude with purpose: the novel is arguing against a view its first readers held, which makes the scene a piece of social criticism rather than description.",
        ],
        answer:
          "Context explains why the scene was confrontational for its original audience — and that the writer intended it to be.",
      },
      {
        question: "Analyse setting as meaningful: a scene opens in thick fog.",
        steps: [
          "Resist treating setting as scene-setting. In these novels it almost always carries meaning.",
          "State the literal: the fog obscures vision and muffles sound.",
          "Move to the figurative: things are hidden, and characters cannot see clearly — literally or morally.",
          "Connect to theme: concealment, secrecy, or a society unable to see its own condition.",
          "Add pathetic fallacy if it fits: the weather reflects the moral murk of the scene.",
        ],
        answer:
          "Fog as concealment and moral obscurity, not weather. Treating setting as thematic is a reliable way into these texts.",
      },
      {
        question: "Explain what a first-person narrator conceals as well as reveals.",
        steps: [
          "Note the effect of the choice: we see everything through one consciousness.",
          "That creates intimacy — we have direct access to their thoughts.",
          "But it also limits us: we only know what they know, notice, or choose to tell us.",
          "Ask what the narrator might have reason to omit or misrepresent.",
          "If their account conflicts with events, they may be unreliable — and that unreliability is usually the point.",
        ],
        answer:
          "Intimacy at the cost of perspective. Asking what a narrator conceals is a genuinely sophisticated observation.",
      },
      {
        question: "Structure an answer to an extract-plus-whole-text question on a nineteenth-century novel.",
        steps: [
          "Analyse the extract closely first — the evidence is printed, so bank those marks.",
          "Then trace the same theme or character across the novel using learned quotations.",
          "Draw from the beginning, middle and end, so you can show development rather than a snapshot.",
          "Attach context to specific moments, explaining how a Victorian reader would have responded.",
          "Keep returning to a clear thesis stated in the introduction, so the essay argues rather than describes.",
        ],
        answer:
          "Extract first, then the whole novel, with context attached to moments and a thesis running throughout.",
      },
    ],

    practice: [
      { question: "What is the term for a third-person narrator who knows everything, including characters' thoughts?",
        accept: ["omniscient", "omniscient narrator", "third person omniscient"],
        answer: "An omniscient narrator, who can move between characters and reveal what none of them knows." },
      { question: "What is the term for a narrator whose account cannot be fully trusted?",
        accept: ["unreliable narrator", "unreliable", "an unreliable narrator"],
        answer: "An unreliable narrator, whose bias, ignorance or dishonesty becomes part of the meaning." },
      { question: "What is the term for a story told within another story?",
        accept: ["framed narrative", "frame narrative", "framing narrative", "a framed narrative"],
        answer: "A framed narrative, which adds layers of perspective and distance." },
      { question: "What is the term for a style using darkness, isolation and psychological dread?",
        accept: ["gothic", "the gothic"], answer: "Gothic, which uses setting and the uncanny to create unease." },
      { question: "What is the term for weather reflecting the mood or moral state of a scene?",
        accept: ["pathetic fallacy"], answer: "Pathetic fallacy — fog for concealment, storms for turmoil." },
      { question: "What is the term for the idea that human nature contains two opposed sides?",
        accept: ["duality"], answer: "Duality, a central concern of much nineteenth-century fiction." },
      { question: "What is the term for writing that exposes and challenges social injustice?",
        accept: ["social criticism", "social commentary"],
        answer: "Social criticism — many Victorian novels argue against conditions their first readers accepted." },
      { question: "What is the term for publishing a novel in instalments?",
        accept: ["serialisation", "serialization", "serialised", "serial"],
        answer: "Serialisation, which is why chapters so often end on a hook." },
      { question: "What is the term for placing two contrasting things side by side for effect?",
        accept: ["juxtaposition"], answer: "Juxtaposition — wealth beside destitution being the classic Victorian example." },
      { question: "What is the term for hints early in a text about what will happen later?",
        accept: ["foreshadowing"], answer: "Foreshadowing, which builds anticipation and rewards rereading." },
      { question: "Where did the destitute face being sent, in the absence of a welfare system?",
        accept: ["the workhouse", "workhouse", "workhouses"],
        answer: "The workhouse — deliberately harsh, and a real fear for the Victorian poor." },
      { question: "Should you write 'the reader' or 'the audience' for a novel?",
        accept: ["the reader", "reader"], answer: "The reader. 'Audience' belongs to plays, which are written to be watched." },
      { question: "Should you write 'Scrooge is greedy' or 'Dickens presents Scrooge as greedy'?",
        accept: ["dickens presents", "dickens presents scrooge as greedy", "the writer presents",
                 "the second", "the second one", "dickens presents scrooge"],
        answer: "'Dickens presents...' — it keeps the focus on deliberate authorial choices, which is what is being assessed." },
      { question: "Nineteenth-century sentences are typically long and heavily subordinated. What should you read to?",
        accept: ["the punctuation", "punctuation", "read to the punctuation"],
        answer: "The punctuation, not the line ending. Most nineteenth-century prose becomes manageable that way." },
      { question: "In these novels, is setting usually neutral description or thematically meaningful?",
        accept: ["meaningful", "thematically meaningful", "meaningful thematically", "significant", "thematic"],
        answer: "Thematically meaningful. Fog, darkness and cold are almost always doing more than describing the weather." },
      { question: "Should quotations be learned from across the whole novel or mainly the opening chapters?",
        accept: ["across the whole novel", "the whole novel", "across the novel", "throughout", "the whole book",
                 "across the whole book"],
        answer: "Across the whole novel — beginning, middle and end — so you can demonstrate development." },
      { question: "Explain why context is more useful in this topic than in most others.",
        answer: "Because the world of a nineteenth-century novel is genuinely unfamiliar, so a modern reader can miss what a contemporary one would have felt immediately. Knowing there was no welfare system, that poverty was widely blamed on the poor, and that a fallen woman faced social ruin explains why particular moments were confrontational rather than merely sad. Without that, you can analyse the language accurately and still misjudge the effect entirely. (Mark this one yourself.)" },
      { question: "Explain why asking what a narrator conceals is a more sophisticated point than describing what they reveal.",
        answer: "Because it treats the narrative voice as a deliberate choice rather than a neutral window. Every narrator has a perspective, and a first-person one in particular can only report what they noticed, understood and chose to share. Considering the gaps — what they avoid, misjudge or have reason to hide — opens up questions of reliability and irony that a summary of their account cannot reach. (Mark this one yourself.)" },
      {
        question: "Which narrative viewpoint uses 'I' to tell the story?",
        choices: [
          "First person",
          "Third person limited",
          "Third person omniscient",
          "Second person",
        ],
        accept: [
          "First person",
        ],
        answer: "First person creates intimacy but limits what the reader can know, which writers often exploit deliberately.",
      },
      {
        question: "An omniscient narrator is one who:",
        choices: [
          "Knows the thoughts of all characters",
          "Only knows one character's mind",
          "Is a character in the story",
          "Never comments on events",
        ],
        accept: [
          "Knows the thoughts of all characters",
        ],
        answer: "It allows a writer to move between perspectives and pass judgement, which many 19th-century novelists do openly.",
      },
      {
        question: "Why is social context especially important in 19th-century novels?",
        choices: [
          "Writers often criticised the class and poverty of their society",
          "The books were very long",
          "They were written in verse",
          "Few people could read them",
        ],
        accept: [
          "Writers often criticised the class and poverty of their society",
        ],
        answer: "Industrialisation, class division and the position of women shape most of the set texts, so context feeds directly into theme.",
      },
      {
        question: "A BILDUNGSROMAN is a novel about:",
        choices: [
          "A character growing up and developing morally",
          "A historical battle",
          "A single day in a city",
          "A detective solving a crime",
        ],
        accept: [
          "A character growing up and developing morally",
        ],
        answer: "Tracking how the protagonist changes is exactly what whole-text questions on these novels reward.",
      },
      {
        question: "Which is most useful when writing about a 19th-century novel's language?",
        choices: [
          "Explaining how the style shapes the reader's sympathy",
          "Noting that the language is old-fashioned",
          "Counting long words",
          "Modernising the quotations",
        ],
        accept: [
          "Explaining how the style shapes the reader's sympathy",
        ],
        answer: "Saying language is 'old' is not analysis. Showing how it directs feeling towards or against a character is.",
      },
    ],

    misconceptions: [
      { wrong: "\"Setting descriptions are there to help you picture the scene.\"",
        right: "In these novels setting almost always carries thematic weight. Fog conceals, cold isolates, darkness hides moral wrongdoing — treating it as scenery misses most of what it is doing." },
      { wrong: "\"A first-person narrator gives you the true version of events.\"",
        right: "It gives you ONE version, limited to what that character noticed, understood and chose to tell. Asking what they conceal is often where the real meaning sits." },
      { wrong: "\"You should judge Victorian attitudes by modern standards.\"",
        right: "Explain how a contemporary reader would have responded. Condemning the period shows a modern opinion; explaining the reaction shows understanding of context, which is what is assessed." },
      { wrong: "\"Long nineteenth-century sentences mean the vocabulary is harder.\"",
        right: "Usually it is the subordination, not the words. Read to the punctuation rather than the line, and most of it becomes manageable." },
      { wrong: "\"Writing 'Scrooge is greedy' is the same as 'Dickens presents Scrooge as greedy'.\"",
        right: "The second keeps the focus on authorial choice, which is what the analysis marks reward. The first treats a character as a real person rather than a construction." },
      { wrong: "\"Learning quotations from the opening chapters is enough.\"",
        right: "Whole-text questions test development. Without evidence from the middle and end you cannot show how a character or theme changes, which is most of what the question is for." },
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

    workedExamples: [
      {
        question: "Write the opening of a comparison between two anthology poems about conflict.",
        steps: [
          "Do NOT open with biography. Get into the comparison immediately.",
          "State a comparison that already contains an argument: 'Both poets present conflict as something that outlasts the fighting, but where Poem A locates it in memory, Poem B locates it in the body.'",
          "That single sentence gives the essay a direction and signals comparison from the first line.",
          "Follow with evidence from A, briefly embedded.",
          "Then evidence from B joined with a connective — 'whereas', 'by contrast' — so the comparison is explicit rather than implied.",
        ],
        answer:
          "A comparative thesis in the first sentence. Opening with a poet's life history wastes the most valuable position in the essay.",
      },
      {
        question: "Compare the endings of two poems rather than their openings. Explain why that is productive.",
        steps: [
          "Note that poets place their weight at the close — the last line is what the reader carries away.",
          "Identify what each poem does at the end: resolve, refuse to resolve, undercut itself, or return to the start.",
          "Compare the two choices directly: one may offer comfort where the other withholds it.",
          "Link that to form: a final rhyming couplet feels closed; an unfinished line feels open.",
          "Draw the conclusion: the different endings reveal genuinely different attitudes to the shared subject.",
        ],
        answer:
          "Endings concentrate a poem's meaning, so comparing them reliably produces a substantial point rather than a surface one.",
      },
      {
        question: "You have to choose a second poem in the exam. Explain how to choose well.",
        steps: [
          "Decide pairings BEFORE the exam, for each likely theme — power, conflict, loss, nature, relationships.",
          "Choose for contrast as much as similarity: differences give you more to write about than agreement.",
          "Choose a poem you can QUOTE accurately, not the one that fits most perfectly in theory.",
          "Check it genuinely addresses the theme in the question, not just loosely.",
          "Spend no time deciding in the exam — that decision should already be made.",
        ],
        answer:
          "A well-known poem chosen for contrast beats a perfect-in-theory one you half-remember. Prepare the pairings in advance.",
      },
      {
        question: "Compare methods rather than only content, for two poems both about grief.",
        steps: [
          "Note the trap: both poems are about grief, so simply saying so compares nothing.",
          "Compare FORM: one may use a tight regular structure, the other free verse.",
          "Compare VOICE: one may address the dead directly, the other speak about them in the third person.",
          "Compare IMAGERY: one may reach for nature, the other for domestic objects.",
          "Draw the meaning out: the contained form may suggest grief held in check, while the free verse lets it spill.",
        ],
        answer:
          "The marks are in HOW each poet conveys grief, not in the shared subject. Comparing methods is the skill being assessed.",
      },
    ],

    practice: [
      { question: "In this question, how many poems are printed for you?",
        accept: ["1", "one"], answer: "One. You choose the second from the anthology and quote it from memory." },
      { question: "Which skill is actually being assessed in this question?",
        accept: ["comparison", "comparing", "the comparison"],
        answer: "Comparison — of methods as well as content. Two separate analyses cannot reach the top bands." },
      { question: "Should you write about both poems in the same paragraph, or one then the other?",
        accept: ["same paragraph", "both in the same paragraph", "the same paragraph", "together",
                 "in the same paragraph", "both together"],
        answer: "Both in the same paragraph, joined by comparative connectives." },
      { question: "Give one comparative connective suitable for this essay.",
        accept: ["whereas", "however", "in contrast", "similarly", "by contrast", "while", "although", "both"],
        answer: "'Whereas', 'in contrast', 'similarly' or 'by contrast'. Using them constantly is what makes it read as comparison." },
      { question: "When choosing the second poem, is it better to pick the perfect fit or the one you know best?",
        accept: ["the one you know best", "the one you know", "know best", "the one you can quote",
                 "the one you remember", "one you know well"],
        answer: "The one you know best. A slightly less ideal poem quoted accurately always outperforms an ideal one half-remembered." },
      { question: "Should you open the essay with the poet's biography?",
        accept: ["no"], answer: "No. Get into the comparison immediately — context belongs woven in, attached to specific lines." },
      { question: "Which part of two poems is especially productive to compare?",
        accept: ["the endings", "endings", "the ending", "ending", "the last lines", "final lines"],
        answer: "The endings. Poets put their weight at the close, so comparing them reliably yields a substantial point." },
      { question: "What is the term for a turn or shift in a poem's argument or mood?",
        accept: ["volta", "a volta"], answer: "A volta — locating it in each poem gives you a natural comparison point." },
      { question: "What is the term for the voice of a poem, who may not be the poet?",
        accept: ["speaker", "the speaker"], answer: "The speaker. Distinguishing them from the poet shows genuine understanding." },
      { question: "What is the term for a sentence running over a line ending without punctuation?",
        accept: ["enjambment", "enjambement"], answer: "Enjambment, which creates flow or urgency and is worth comparing between poems." },
      { question: "What is the term for a deliberate pause within a line?",
        accept: ["caesura", "a caesura"], answer: "A caesura, which breaks rhythm and gives emphasis." },
      { question: "What is the term for the type and shape of a poem, such as sonnet or free verse?",
        accept: ["form", "the form"], answer: "Form. A tension between form and subject is always worth comparing." },
      { question: "Two poems are both about loss. Is saying so a comparison?",
        accept: ["no"], answer: "No. That is shared content. The marks are in comparing HOW each poet conveys it." },
      { question: "Should you learn quotations for the second poem, or will the anthology be provided?",
        accept: ["learn them", "learn quotations", "learn the quotations", "yes learn them", "from memory",
                 "you must learn them"],
        answer: "Learn them. Only one poem is printed, so the second must be quoted from memory." },
      { question: "Roughly how many paragraphs should a comparison essay have?",
        accept: ["4", "5", "four", "five", "4-5", "four or five", "4 or 5"],
        answer: "Four or five, each comparing a different aspect — attitude, imagery, form, structure, voice." },
      { question: "Where should context appear in this essay?",
        accept: ["woven in", "woven into analysis", "attached to specific lines", "integrated", "woven",
                 "in the analysis", "attached to lines"],
        answer: "Woven into analysis, attached to specific lines. A biography paragraph at the start wastes the strongest position in the essay." },
      { question: "Explain why comparing methods scores more highly than comparing subjects.",
        answer: "Because the subject is usually given by the question — both poems are about conflict, or power, or loss — so noting the shared theme compares nothing and could be done without reading either poem. The genuine differences lie in HOW each poet conveys it: form, voice, imagery, structure, where each places its weight. That is what demonstrates you have read both poems as crafted objects rather than as messages. (Mark this one yourself.)" },
      { question: "Explain why preparing poem pairings before the exam is worth the effort.",
        answer: "Because choosing under time pressure costs minutes you need for writing, and the decision made in a hurry is usually worse. Deciding in advance which poem you would pair with each likely theme means you arrive knowing your quotations, having already spotted the contrasts, and can start comparing in the first sentence rather than spending five minutes flicking through the anthology. (Mark this one yourself.)" },
      {
        question: "When comparing two anthology poems, you should:",
        choices: [
          "Compare ideas AND methods throughout",
          "Write about one, then the other",
          "Choose poems at random",
          "Only compare their lengths",
        ],
        accept: [
          "Compare ideas AND methods throughout",
        ],
        answer: "Integrated comparison, moving between poems in the same paragraph, scores far higher than two separate essays.",
      },
      {
        question: "Which connective is most useful in a comparison essay?",
        choices: [
          "Whereas",
          "Firstly",
          "Finally",
          "Also",
        ],
        accept: [
          "Whereas",
        ],
        answer: "Similarly, in contrast and likewise do the same job. They make the comparison visible rather than implied.",
      },
      {
        question: "Choosing which anthology poem to compare should depend on:",
        choices: [
          "A shared theme or contrasting treatment of one",
          "Which is shortest",
          "Which you read most recently",
          "Which has the most rhymes",
        ],
        accept: [
          "A shared theme or contrasting treatment of one",
        ],
        answer: "A poem that contrasts sharply often produces a better essay than one that simply agrees with the first.",
      },
      {
        question: "Learning quotations from the anthology is important because:",
        choices: [
          "The poems are not always printed in full in the exam",
          "Examiners test memory alone",
          "It replaces the need for analysis",
          "Quotations earn marks by themselves",
        ],
        accept: [
          "The poems are not always printed in full in the exam",
        ],
        answer: "Short, flexible quotations that can support several points are more useful than long ones learned by rote.",
      },
      {
        question: "A strong comparison paragraph typically:",
        choices: [
          "Makes a point about both poems and analyses evidence from each",
          "Quotes one poem only",
          "Describes what happens in both",
          "Gives a personal preference",
        ],
        accept: [
          "Makes a point about both poems and analyses evidence from each",
        ],
        answer: "The point should be about the IDEA being compared, with the poems as evidence — not a tour of the poems.",
      },
    ],

    misconceptions: [
      { wrong: "\"Analysing one poem thoroughly, then the other, is a comparison.\"",
        right: "It is two essays side by side. Comparison must happen within paragraphs, joined by connectives, or the skill being assessed never appears." },
      { wrong: "\"Choose the poem that fits the theme most perfectly.\"",
        right: "Choose the one you know well enough to quote accurately. A perfect match you half-remember produces vague analysis and no evidence." },
      { wrong: "\"Saying both poems are about loss counts as a comparison point.\"",
        right: "The shared subject is usually given in the question. The marks are in comparing how each poet conveys it — form, voice, imagery, structure." },
      { wrong: "\"Starting with the poets' backgrounds sets up the essay well.\"",
        right: "It wastes the strongest position in the essay. Open with a comparative argument and weave context in later, attached to specific lines." },
      { wrong: "\"Only one poem needs learning since the other is printed.\"",
        right: "The printed poem is chosen by the examiner, and you cannot know which. Prepared pairings and learned quotations for each are what make the choice quick and the evidence accurate." },
      { wrong: "\"Spelling the poets' names is a minor detail.\"",
        right: "It shapes the examiner's impression of how well you know the anthology, and it costs nothing to get right." },
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

    workedExamples: [
      {
        question: "Work through the first ninety seconds with a poem you have never seen.",
        steps: [
          "Read it once for SENSE only. Do not annotate — just find out what it is about.",
          "Read it a second time for technique, marking anything that stands out.",
          "Answer four questions in the margin: who is speaking, to whom, about what, and how do they feel?",
          "Look at the title again — it often names the subject or sets up an irony the poem then develops.",
          "Mark where the mood changes. Very few poems stay in one mood, and the shift is usually the point.",
        ],
        answer:
          "Two reads, the four questions, the title, and the shift. Ninety seconds here prevents the most expensive error possible: a confident essay about the wrong poem.",
      },
      {
        question: "Turn a list of features into an analytical paragraph.",
        steps: [
          "The list version: 'There is alliteration, a simile and enjambment.' This is feature-spotting and scores very little.",
          "Choose ONE feature that is genuinely doing something.",
          "State what the poet conveys through it — meaning first.",
          "Quote two or three words, embedded in your sentence.",
          "Analyse the specific word, then say what the reader is left feeling: 'the harsh plosives in \'bitter, black\' make the line difficult to say aloud, so the reader physically enacts the speaker\'s resistance.'",
        ],
        answer:
          "One feature analysed over four sentences beats five named. Feature-spotting is the single biggest score-limiter on unseen poetry.",
      },
      {
        question: "You do not fully understand a line. Explain what to do.",
        steps: [
          "Do not panic, and do not skip the poem — nobody understands every line on a first reading.",
          "Work from what you DO understand: the overall situation, the tone, the images you can grasp.",
          "Offer a tentative reading of the difficult line: 'this could suggest...' rather than a confident claim.",
          "Ground the interpretation in the words actually on the page, so it is defensible even if incomplete.",
          "Move on. A strong answer built on three clear observations beats a stalled one that tried to decode everything.",
        ],
        answer:
          "Tentative, evidence-based interpretation. Examiners reward a defensible partial reading over a confident invented one.",
      },
      {
        question: "Approach the comparison half of the paper efficiently.",
        steps: [
          "Check the marks: the comparison usually carries fewer than the single-poem question, so it should take proportionally less time.",
          "Find ONE clear similarity and ONE clear difference — that is enough for a strong answer.",
          "Focus on METHODS rather than content, since the shared theme is given.",
          "Write about both poems in the same paragraph, joined by comparative connectives.",
          "Do not attempt to cover everything; two developed comparisons beat five undeveloped ones.",
        ],
        answer:
          "One similarity, one difference, both about method, written within shared paragraphs — and finished inside its share of the time.",
      },
    ],

    practice: [
      { question: "How many times should you read an unseen poem before writing?",
        accept: ["2", "twice", "two", "2 times", "two times"],
        answer: "Twice — once for sense, once for technique. Starting after one read is the most expensive shortcut on this paper." },
      { question: "What is the term for listing techniques without explaining their effect?",
        accept: ["feature spotting", "feature-spotting", "featurespotting"],
        answer: "Feature-spotting, which scores very little and is the biggest score-limiter on unseen poetry." },
      { question: "Should you assume the speaker of a poem is the poet?",
        accept: ["no"], answer: "No. The voice is a construction, and saying 'the speaker' shows you understand that." },
      { question: "What is often the most useful single piece of free information about an unseen poem?",
        accept: ["the title", "title", "its title"],
        answer: "The title. It frequently names the subject or sets up an irony, and many candidates ignore it completely." },
      { question: "What is the term for the atmosphere or feeling a poem creates in the reader?",
        accept: ["mood", "the mood"], answer: "Mood — and identifying where it changes is usually the point of the poem." },
      { question: "What is the term for a change in a poem's tone, tense or focus?",
        accept: ["shift", "a shift", "volta"], answer: "A shift, sometimes called a volta when it marks a turn in the argument." },
      { question: "Give one phrase that shows tentative interpretation.",
        accept: ["this suggests", "suggests", "this could suggest", "could imply", "this implies", "may suggest",
                 "perhaps", "might suggest", "this could imply"],
        answer: "'This could suggest' or 'this implies'. Examiners credit tentative reading over false confidence." },
      { question: "Should an unseen poetry answer lead with meaning or with technique?",
        accept: ["meaning", "with meaning", "meaning first"],
        answer: "Meaning. Say what the poem conveys, then show how — the reverse reads as mechanical." },
      { question: "Which usually carries fewer marks: the single-poem question or the comparison?",
        accept: ["the comparison", "comparison", "the comparison question"],
        answer: "The comparison, so it should take proportionally less time. Splitting time evenly leaves the higher-value question rushed." },
      { question: "How many clear comparison points are enough for a strong comparison answer?",
        accept: ["2", "two", "one similarity and one difference", "1 similarity and 1 difference"],
        answer: "Two developed points — one similarity and one difference — beat five undeveloped ones." },
      { question: "In a comparison, should you focus on shared content or on differing methods?",
        accept: ["methods", "differing methods", "the methods", "method"],
        answer: "Methods. The shared theme is usually given in the question, so noting it compares nothing." },
      { question: "What is the term for marking notes on a text before writing about it?",
        accept: ["annotation", "annotating"], answer: "Annotation — mark what stands out first, then look for patterns among the marks." },
      { question: "What is the term for a gap between what is said or expected and what is actually meant?",
        accept: ["irony"], answer: "Irony, which a title frequently sets up in unseen poems." },
      { question: "How many practice unseen poems per week is a sensible target?",
        accept: ["1", "one", "1 a week", "one a week", "one per week"],
        answer: "One a week, timed. Frequency matters more than the length of each session for this skill." },
      { question: "Is this the most improvable question on the paper? Answer yes or no.",
        accept: ["yes"], answer: "Yes, because it tests method rather than memory — so regular practice moves the mark directly." },
      { question: "Should you use familiar poems for unseen practice?",
        accept: ["no"], answer: "No. Using poems you already know defeats the purpose, which is practising the approach to something unfamiliar." },
      { question: "Explain why unseen poetry is the fairest question on the paper.",
        answer: "Because nobody has prepared for it. Every candidate meets the poem for the first time in the exam, so no amount of memorised material helps and the marks go entirely to method — reading carefully, identifying meaning, selecting evidence and analysing it. That also makes it the most improvable question, since practising the process reliably raises the mark in a way that learning more content cannot. (Mark this one yourself.)" },
      { question: "Explain why a tentative, partial reading scores better than a confident invented one.",
        answer: "Because interpretation must be grounded in the words on the page. A tentative reading signals that you are drawing a conclusion from evidence and remain open to alternatives, which is what literary analysis actually is. A confident claim the poem does not support shows the opposite — that the reading came from you rather than the text — and an examiner can see immediately that the evidence does not carry it. (Mark this one yourself.)" },
      {
        question: "The first thing to do with an unseen poem is:",
        choices: [
          "Read it twice and work out what it is about",
          "Look for techniques immediately",
          "Count the stanzas",
          "Start writing straight away",
        ],
        accept: [
          "Read it twice and work out what it is about",
        ],
        answer: "Meaning first, methods second. Technique-spotting without understanding produces a list rather than an argument.",
      },
      {
        question: "If you do not understand every line of an unseen poem, you should:",
        choices: [
          "Focus on what you DO understand and analyse it well",
          "Leave the question blank",
          "Guess the poet's name",
          "Write about a different poem",
        ],
        accept: [
          "Focus on what you DO understand and analyse it well",
        ],
        answer: "Nobody is expected to grasp every line at first reading. Depth on a few moments beats confusion across all of them.",
      },
      {
        question: "Which observation would earn the most credit?",
        choices: [
          "The short final line isolates the speaker, mirroring their loneliness",
          "There is a simile in line four",
          "The poem has four stanzas",
          "The poem rhymes",
        ],
        accept: [
          "The short final line isolates the speaker, mirroring their loneliness",
        ],
        answer: "It names a method AND explains its effect on meaning. Spotting alone earns almost nothing.",
      },
      {
        question: "The title of an unseen poem is worth examining because it:",
        choices: [
          "Often signals the theme or the poet's attitude",
          "Is chosen by the exam board",
          "Never relates to the content",
          "Tells you the poet's age",
        ],
        accept: [
          "Often signals the theme or the poet's attitude",
        ],
        answer: "Returning to the title at the end of your answer, once you understand the poem, often produces a strong closing point.",
      },
      {
        question: "When comparing two unseen poems, the safest structure is:",
        choices: [
          "Thematic paragraphs covering both poems",
          "All of poem one, then all of poem two",
          "A list of techniques",
          "A summary of each",
        ],
        accept: [
          "Thematic paragraphs covering both poems",
        ],
        answer: "Comparing by theme forces genuine comparison. Handling the poems one after another tends to produce two descriptions.",
      },
    ],

    misconceptions: [
      { wrong: "\"You need to understand every line before you can write anything.\"",
        right: "Nobody does on a first reading. Build the answer from what you do understand and offer a tentative reading of the rest — a defensible partial answer beats a stalled one." },
      { wrong: "\"Spotting lots of techniques shows a wide knowledge.\"",
        right: "Feature-spotting scores very little. One technique analysed over four sentences is worth more than five named in a list." },
      { wrong: "\"Being uncertain looks weak, so write with confidence.\"",
        right: "'This could suggest' is a mark of thoughtful reading. Examiners credit tentative interpretation grounded in evidence over confident claims the poem does not support." },
      { wrong: "\"The two questions carry similar marks, so split the time evenly.\"",
        right: "The comparison usually carries fewer marks. Splitting time evenly leaves the higher-value question rushed, which is a self-inflicted loss." },
      { wrong: "\"The title is just a label.\"",
        right: "It is free information about subject or tone, and frequently sets up an irony the poem develops. Many candidates never mention it." },
      { wrong: "\"Practising on poems I've studied is good preparation.\"",
        right: "It tests memory rather than method. The whole skill is meeting something unfamiliar, so practice only works on poems you have genuinely never seen." },
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

    workedExamples: [
      {
        question: "Turn a weak paragraph into a top-band one, step by step.",
        steps: [
          "Weak version: 'The writer uses a metaphor which is effective and makes the reader interested.'",
          "Add the POINT — what is actually being argued? 'The writer presents the city as predatory.'",
          "Add EMBEDDED evidence: the city is described as having 'jaws'.",
          "Analyse one word: 'jaws' suggests something that consumes rather than merely contains, so the inhabitants become prey.",
          "Link back to the question, and add a second layer if there is room — perhaps this prepares the reader for what the city later does to the protagonist.",
        ],
        answer:
          "Point, embedded evidence, close analysis of one word, link. The words 'effective' and 'interested' should be deleted from your vocabulary.",
      },
      {
        question: "Learn quotations efficiently for a whole text.",
        steps: [
          "Aim for around five per character and five per theme — not fifty per text.",
          "Choose SHORT ones: three or four words you can spell and analyse beat a full sentence.",
          "Choose quotations with rich language, so there is something to say about the individual words.",
          "Note where each comes from — beginning, middle or end — so you can show development.",
          "Test yourself by WRITING them out from memory, not by rereading. Recognition is not recall.",
        ],
        answer:
          "Around five short, rich, located quotations per character and theme, tested by writing rather than reading.",
      },
      {
        question: "Plan a Literature essay in five minutes.",
        steps: [
          "Read the question twice and underline exactly what it asks about.",
          "Decide your THESIS — a single sentence arguing something, not restating the question.",
          "Note three or four paragraph points that build that argument, each with a quotation.",
          "Order them so the argument develops across the text rather than repeating.",
          "Check every point answers the question as worded, and cut any that does not, however good it is.",
        ],
        answer:
          "Thesis first, then three or four evidenced points ordered to build. Five minutes here reliably beats five extra minutes of writing.",
      },
      {
        question: "Allocate time across a paper with a 40-mark and a 30-mark question in 105 minutes.",
        steps: [
          "Total 70 marks in 105 minutes gives 1.5 minutes per mark.",
          "The 40-mark question therefore deserves about 60 minutes; the 30-mark about 45.",
          "Take 5 minutes off each for planning and proofreading, so roughly 55 and 40 of writing.",
          "Write the finishing time for each question at the top of the page before you start.",
          "If one overruns, stop and move on — an unfinished second essay costs far more than an imperfect first one.",
        ],
        answer:
          "Time follows marks, not interest. Writing target times on the paper is what makes the plan actually happen.",
      },
    ],

    practice: [
      { question: "Which assessment objective covers analysis of language, form and structure?",
        accept: ["ao2", "a02"], answer: "AO2, which usually carries the most marks — which is why analysis matters more than plot knowledge." },
      { question: "Which assessment objective covers your response and use of evidence?",
        accept: ["ao1", "a01"], answer: "AO1 — a clear argument supported by well-chosen references." },
      { question: "Which assessment objective covers context?",
        accept: ["ao3", "a03"], answer: "AO3 — understanding of the circumstances in which a text was written or set." },
      { question: "Which assessment objective covers spelling, punctuation and grammar?",
        accept: ["ao4", "a04"], answer: "AO4, which is separately assessed on several papers and worth protecting proofreading time for." },
      { question: "Which assessment objective usually carries the most marks in Literature?",
        accept: ["ao2", "a02"], answer: "AO2. That is precisely why retelling the plot scores so poorly." },
      { question: "Roughly how many quotations should you learn per character or theme?",
        accept: ["5", "five", "about 5", "around 5", "4-5", "3-5"],
        answer: "Around five, short and rich enough to analyse. Fifty half-remembered ones are worse than five you know." },
      { question: "How long should you spend planning an essay?",
        accept: ["5 minutes", "five minutes", "5", "about 5 minutes"],
        answer: "About five minutes. It reliably produces a better essay than five extra minutes of writing." },
      { question: "What is the term for the central argument of an essay, stated in the introduction?",
        accept: ["thesis", "a thesis", "thesis statement"], answer: "A thesis. It should argue something rather than restate the question." },
      { question: "Should you write 'the writer presents' or 'the character is'?",
        accept: ["the writer presents", "writer presents", "the writer presents...", "the first", "the first one"],
        answer: "'The writer presents' — it keeps the focus on deliberate authorial choices, which is what AO2 rewards." },
      { question: "How many developed points should one paragraph contain?",
        accept: ["1", "one", "one developed point"],
        answer: "One, developed properly. Three underdeveloped points in a paragraph score less than one done well." },
      { question: "Which part of a paragraph should take up the most words?",
        accept: ["analysis", "the analysis", "explanation", "the explanation"],
        answer: "The analysis. If your paragraphs are mostly quotation, you are sitting in the middle bands." },
      { question: "Is rereading notes or writing practice paragraphs more effective revision?",
        accept: ["writing practice paragraphs", "writing", "writing paragraphs", "practice paragraphs",
                 "writing practice", "practising writing"],
        answer: "Writing. English is assessed on production, so producing writing is the only practice that tests the real skill." },
      { question: "What document explains what candidates did well and badly on a past paper?",
        accept: ["examiners report", "examiner's report", "examiners reports", "the examiners report"],
        answer: "The examiners' report, which states plainly what goes wrong every year." },
      { question: "What should you echo at the start or end of each paragraph?",
        accept: ["the question", "the question wording", "the wording of the question", "the questions wording",
                 "words from the question"],
        answer: "The wording of the question. It keeps you focused and shows the examiner you are answering what was asked." },
      { question: "How long should you leave to proofread?",
        accept: ["2 minutes", "two minutes", "2", "about 2 minutes", "2-3 minutes"],
        answer: "At least two minutes. Spelling, punctuation and grammar are separately assessed on several papers." },
      { question: "Should time be allocated according to marks or according to how interesting a question is?",
        accept: ["marks", "according to marks", "by marks", "the marks"],
        answer: "Marks. Running out of time on the final question is the most common and most avoidable disaster in English exams." },
      { question: "Explain why retelling the plot is the most common way good knowledge produces a poor grade.",
        answer: "Because the examiner has read the text, so recounting it demonstrates nothing that is being assessed. The marks sit in AO2 — analysing how the writer creates meaning through language, form and structure — and in AO1's requirement for a sustained argument. A student who knows the text thoroughly but narrates it spends the whole essay proving something never in doubt, while never doing the thing being marked. (Mark this one yourself.)" },
      { question: "Describe how to use an examiners' report to improve, in three steps.",
        answer: "First, read what the report says candidates did badly on the specific question type you struggle with — it is usually blunt and specific. Second, find the same weakness in your own past answers, since these faults are near-universal rather than personal. Third, rewrite one previous paragraph deliberately fixing that fault, and check the next timed answer for it specifically. That turns a general warning into a targeted change, which is what actually moves a grade. (Mark this one yourself.)" },
      {
        question: "The best way to revise a literature text is to:",
        choices: [
          "Learn flexible quotations and practise linking them to themes",
          "Reread the whole book repeatedly",
          "Memorise the plot in order",
          "Watch the film version only",
        ],
        accept: [
          "Learn flexible quotations and practise linking them to themes",
        ],
        answer: "A short quotation that supports three different themes is worth more than ten that each work once.",
      },
      {
        question: "Planning an essay for five minutes is worthwhile because it:",
        choices: [
          "Produces a clearer argument and prevents drifting",
          "Uses up nervous energy",
          "Guarantees more quotations",
          "Replaces the need for a conclusion",
        ],
        accept: [
          "Produces a clearer argument and prevents drifting",
        ],
        answer: "Unplanned essays commonly repeat themselves and run out of time before the strongest point is made.",
      },
      {
        question: "If you run short of time in an English exam, the best approach is to:",
        choices: [
          "Write a brief plan or bullet points for the remaining answer",
          "Leave it blank",
          "Rewrite an earlier answer",
          "Write a long introduction",
        ],
        accept: [
          "Write a brief plan or bullet points for the remaining answer",
        ],
        answer: "Examiners can credit clear points in note form. A blank answer can score nothing at all.",
      },
      {
        question: "Which is the most efficient way to revise SPaG?",
        choices: [
          "Practise the specific errors you personally make most",
          "Reread grammar rules",
          "Write longer sentences",
          "Avoid punctuation",
        ],
        accept: [
          "Practise the specific errors you personally make most",
        ],
        answer: "Marked work tells you which errors are yours. Revising rules you already follow is time spent on nothing.",
      },
      {
        question: "Timing questions by their marks matters because:",
        choices: [
          "Every question needs its fair share of the time available",
          "Examiners time you strictly",
          "Longer answers always score more",
          "It looks organised",
        ],
        accept: [
          "Every question needs its fair share of the time available",
        ],
        answer: "An unfinished high-mark question costs far more than a slightly shorter answer on one you enjoyed.",
      },
    ],

    misconceptions: [
      { wrong: "\"Writing more gets a higher grade.\"",
        right: "One developed point per paragraph, properly analysed, scores more than three rushed ones. Length is not a mark scheme criterion; sustained argument is." },
      { wrong: "\"Rereading notes is efficient revision because you cover more ground.\"",
        right: "English is assessed on what you produce. Writing one timed paragraph and marking it teaches more than an hour of rereading, which builds recognition rather than recall." },
      { wrong: "\"A prepared essay can be adapted to whatever question comes up.\"",
        right: "Pre-learned essays delivered regardless of the wording score badly. Echo the question in every paragraph, and cut prepared material that does not answer it." },
      { wrong: "\"AO3 means writing everything you know about the period.\"",
        right: "It rewards showing how context shapes MEANING. Attach it to specific moments and explain the reaction, or the knowledge earns almost nothing." },
      { wrong: "\"Technical accuracy is a minor consideration in a Literature essay.\"",
        right: "AO4 is separately assessed on several papers. Two minutes proofreading is a better return than one more rushed paragraph." },
      { wrong: "\"Quoting more of the text proves you know it.\"",
        right: "Analysis, not quotation, is what AO2 rewards. If most of a paragraph is quoted material, most of the marks are going unclaimed." },
    ],
  },

  "english/grammar-punctuation-and-spelling": {
    summary:
      "Technical accuracy is examined directly, and it is worth a substantial share of the marks on the writing papers — often around a fifth of the whole paper. That makes it the highest-value thing on the course that can be improved purely by learning rules, without reading a single extra book. This topic covers word classes, sentence structures, the punctuation examiners actually look for, and the spellings that catch out the most people.",
    keyFacts: [
      {
        heading: "Word classes",
        points: [
          "Noun: a person, place, thing or idea. Proper nouns (London, Tuesday) take capital letters; abstract nouns name things you cannot touch (freedom, grief).",
          "Verb: an action or a state of being. Every complete sentence needs one.",
          "Adjective: describes a noun. Adverb: describes a verb, an adjective or another adverb, and often ends in -ly.",
          "Pronoun: stands in for a noun (he, they, it, which).",
          "Preposition: shows position or relationship (under, before, despite). Conjunction: joins clauses (because, although, and).",
          "Determiner: comes before a noun to specify it (the, a, this, several).",
        ],
      },
      {
        heading: "Sentence types",
        points: [
          "A clause contains a verb. A main clause makes sense on its own; a subordinate clause does not.",
          "Simple sentence: one main clause. 'The rain stopped.' Useful for impact.",
          "Compound sentence: two main clauses joined by a coordinating conjunction — and, but, or, so.",
          "Complex sentence: a main clause plus at least one subordinate clause. 'Although the rain stopped, the sky stayed grey.'",
          "Minor sentence: no verb, used deliberately for effect. 'Nothing. Silence.' Powerful sparingly, weak in bulk.",
          "Varying sentence length is one of the most reliable ways to lift a piece of writing, and examiners notice it immediately.",
        ],
      },
      {
        heading: "Punctuation that earns marks",
        points: [
          "A full stop ends a sentence. A comma cannot: joining two complete sentences with a comma is a comma splice, and it is the most common error in GCSE writing.",
          "Fix a comma splice with a full stop, a semicolon, or a conjunction.",
          "A semicolon joins two closely related complete sentences. A colon introduces an explanation, an example or a list.",
          "Brackets, paired dashes and paired commas all mark off extra information. Whichever you open with, close with the same.",
          "Apostrophes do two jobs: contraction (don't, it's = it is) and possession (the dog's bowl; the dogs' bowls for plurals).",
          "Speech: new speaker, new line; punctuation goes inside the speech marks. 'Stop,' she said.",
        ],
      },
      {
        heading: "Spellings that catch people out",
        points: [
          "their (belonging to them) / there (place) / they're (they are).",
          "your (belonging to you) / you're (you are). its (belonging to it) / it's (it is) — its has NO apostrophe when it means belonging.",
          "affect is usually the verb, effect usually the noun: the weather affects my mood; it has an effect on my mood.",
          "practice is the noun, practise the verb (UK spelling): I go to football practice; I practise every day.",
          "definitely, separate, necessary, embarrass, occurred, rhythm, beginning, argument, conscience, atmosphere.",
          "Learn the ones YOU get wrong. A personal list of ten misspellings, revisited weekly, is worth more than any general list.",
        ],
      },
      {
        heading: "Paragraphs, tense and register",
        points: [
          "Start a new paragraph for a change of time, place, topic or speaker — the four reasons, easily memorised.",
          "One-line paragraphs used sparingly create emphasis. Used constantly they just look like a list.",
          "Keep the tense consistent. Drifting between past and present mid-paragraph is a technical accuracy error, and it is easy to miss when writing quickly.",
          "Register means how formal the writing is. A letter to a headteacher and a blog for teenagers need different registers, and marks go for matching it to the audience.",
          "Standard English means the grammar and vocabulary expected in formal writing — not an accent, and not 'better' English, just what is expected in this context.",
        ],
      },
    ],
    flashcards: [
      { term: "Noun", definition: "A word naming a person, place, thing or idea." },
      { term: "Abstract noun", definition: "A noun naming something that cannot be touched, such as freedom or grief." },
      { term: "Verb", definition: "A word expressing an action or state of being. Every complete sentence needs one." },
      { term: "Adverb", definition: "A word describing a verb, adjective or other adverb — often, though not always, ending in -ly." },
      { term: "Conjunction", definition: "A word joining clauses together, such as because, although or but." },
      { term: "Preposition", definition: "A word showing position or relationship, such as under, before or despite." },
      { term: "Clause", definition: "A group of words containing a verb." },
      { term: "Main clause", definition: "A clause that makes complete sense on its own." },
      { term: "Subordinate clause", definition: "A clause that adds information but cannot stand alone as a sentence." },
      { term: "Simple sentence", definition: "A sentence made of one main clause." },
      { term: "Compound sentence", definition: "Two main clauses joined by a coordinating conjunction such as and, but or so." },
      { term: "Complex sentence", definition: "A main clause with at least one subordinate clause." },
      { term: "Comma splice", definition: "The error of joining two complete sentences with only a comma." },
      { term: "Semicolon", definition: "A punctuation mark joining two closely related complete sentences." },
      { term: "Colon", definition: "A punctuation mark introducing an explanation, an example or a list." },
      { term: "Register", definition: "The level of formality of a piece of writing, matched to its audience and purpose." },
      { term: "Standard English", definition: "The grammar and vocabulary expected in formal writing and speech." },
    ],
    examTips: [
      {
        tip: "Leave five minutes to proofread, every time",
        detail:
          "Technical accuracy is separately assessed and worth a large share of the writing marks. Five minutes of checking reliably beats two more rushed sentences.",
      },
      {
        tip: "Hunt specifically for comma splices",
        detail:
          "Read each comma and ask whether both halves could stand alone as sentences. If they could, it needs a full stop, semicolon or conjunction.",
      },
      {
        tip: "Vary your sentence lengths deliberately",
        detail:
          "A short sentence after two long ones lands hard. Examiners reward conscious variety, and it is something you can plan for rather than hope for.",
      },
      {
        tip: "Use a semicolon at least once, correctly",
        detail:
          "One well-placed semicolon signals control of punctuation. One misused semicolon signals the opposite, so use it where two complete sentences sit closely related.",
      },
      {
        tip: "Check every it's for the word 'is'",
        detail:
          "If 'it is' fits, the apostrophe is right. If it means belonging to it, there is no apostrophe. This one check removes the most common apostrophe error in English.",
      },
      {
        tip: "Keep a personal spelling list",
        detail:
          "Ten words you actually get wrong, written out weekly, beats memorising a hundred you already know. Take them from your own marked work.",
      },
      {
        tip: "Match the register to the audience named in the task",
        detail:
          "The question always says who is reading. A letter to a governor and an article for teenagers require different levels of formality, and marks are given for getting it right.",
      },
    ],

    workedExamples: [
      {
        question:
          "Identify and correct the error: 'The rain fell heavily, the match was cancelled.'",
        steps: [
          "Test each half separately. 'The rain fell heavily.' is a complete sentence.",
          "'The match was cancelled.' is also a complete sentence.",
          "Two complete sentences joined by only a comma is a comma splice.",
          "There are three ways to fix it: a full stop, a semicolon, or a conjunction.",
          "Choose by meaning — the two are causally linked, so 'so' or a semicolon reads best.",
        ],
        answer:
          "A comma splice. Correct it as: 'The rain fell heavily, so the match was cancelled.' — or with a semicolon, or as two separate sentences.",
      },
      {
        question:
          "Rewrite as a complex sentence: 'The house was empty. Nobody had lived there for years.'",
        steps: [
          "A complex sentence needs a main clause and at least one subordinate clause.",
          "Decide which idea is the main point — here, that the house was empty.",
          "Turn the other into a subordinate clause using a subordinating conjunction such as because, although or since.",
          "'Because nobody had lived there for years' cannot stand alone, so it is subordinate. ✓",
          "The subordinate clause can go first for variety, with a comma after it.",
        ],
        answer:
          "'The house was empty because nobody had lived there for years.' Or, opening with the subordinate clause: 'Because nobody had lived there for years, the house was empty.'",
      },
      {
        question:
          "Correct the apostrophes: 'The dogs bowl was empty, its been like that for days, and the childrens toys were everywhere.'",
        steps: [
          "'The dogs bowl' — the bowl belongs to one dog, so it is possessive: dog's bowl.",
          "'its been' means 'it has been', which is a contraction, so it needs an apostrophe: it's been.",
          "'childrens' — children is already plural, so the possessive apostrophe goes before the s: children's.",
          "Check the comma splice too: 'The dog's bowl was empty' and 'it's been like that for days' are both complete sentences.",
          "Replace that comma with a semicolon or a full stop.",
        ],
        answer:
          "'The dog's bowl was empty; it's been like that for days, and the children's toys were everywhere.'",
      },
      {
        question:
          "Explain how sentence structure creates effect in: 'She checked the lock, the window, the door behind her. Nothing. She breathed out.'",
        steps: [
          "The first sentence is long, built from a list that accumulates as she checks each thing.",
          "That accumulation slows the reader down and mirrors the methodical, anxious checking.",
          "'Nothing.' is a minor sentence — no verb, one word. The abruptness stops the rhythm dead.",
          "That sudden halt creates a beat of silence on the page, imitating the pause before relief.",
          "The final short simple sentence releases the tension, matching the exhale it describes.",
        ],
        answer:
          "The long accumulating list mirrors her methodical anxiety; the one-word minor sentence 'Nothing.' halts the rhythm abruptly, creating a beat of tension; and the short simple sentence that follows releases it, the sentence structure imitating the held breath and the exhale.",
      },
    ],

    practice: [
      { question: "What is the error called when two complete sentences are joined by only a comma?",
        accept: ["comma splice", "a comma splice"],
        answer: "A comma splice — the most common technical error in GCSE writing." },
      { question: "What word class describes a verb, and often ends in -ly?",
        accept: ["adverb", "an adverb"],
        answer: "An adverb — it describes a verb, an adjective or another adverb. Not all of them end in -ly: very, often and well are adverbs too." },
      { question: "What word class names a person, place, thing or idea?",
        accept: ["noun", "a noun"],
        answer: "A noun. Proper nouns take capital letters, and abstract nouns name things you cannot touch, such as freedom." },
      { question: "What is a clause that cannot stand alone as a sentence called?",
        accept: ["subordinate clause", "a subordinate clause", "subordinate", "dependent clause"],
        answer: "A subordinate clause. It adds information but cannot stand alone, which is what makes a sentence complex." },
      { question: "What type of sentence has one main clause and no subordinate clause?",
        accept: ["simple", "simple sentence", "a simple sentence"],
        answer: "A simple sentence — one main clause. Used deliberately among longer ones, it lands hard." },
      { question: "What type of sentence joins two main clauses with 'and', 'but' or 'so'?",
        accept: ["compound", "compound sentence", "a compound sentence"],
        answer: "A compound sentence — two main clauses of equal weight, joined by a coordinating conjunction." },
      { question: "What type of sentence contains a main clause and at least one subordinate clause?",
        accept: ["complex", "complex sentence", "a complex sentence"],
        answer: "A complex sentence. The subordinate clause can go before or after the main clause, which is useful for varying your openings." },
      { question: "Which punctuation mark joins two closely related complete sentences?",
        accept: ["semicolon", "semi colon", "semi-colon", "a semicolon"],
        answer: "A semicolon. Both halves must be able to stand alone as sentences, which is exactly what makes it the cure for a comma splice." },
      { question: "Which punctuation mark introduces a list or an explanation?",
        accept: ["colon", "a colon"],
        answer: "A colon. What follows explains or expands on what came before it." },
      { question: "Complete correctly: 'The team celebrated ___ victory.' (their / there / they're)",
        accept: ["their"],
        answer: "their — belonging to them." },
      { question: "Complete correctly: '___ going to be late.' (Your / You're)",
        accept: ["you're", "youre"],
        answer: "You're — short for 'you are'." },
      { question: "Complete correctly: 'The cat licked ___ paw.' (its / it's)",
        accept: ["its"],
        answer: "its — belonging to it, with no apostrophe. it's always means 'it is' or 'it has'." },
      { question: "Which is the verb: practice or practise? (UK spelling)",
        accept: ["practise"],
        answer: "practise is the verb; practice is the noun. Same pattern as advise/advice." },
      { question: "Which is usually the verb: affect or effect?",
        accept: ["affect"],
        answer: "affect is usually the verb, effect usually the noun." },
      { question: "Where does the apostrophe go in the possessive plural 'the dogs bowls' (bowls of several dogs)? Write the two words.",
        accept: ["dogs' bowls", "the dogs' bowls"],
        answer: "dogs' bowls — for a plural already ending in s, the apostrophe goes after it." },
      { question: "Name one of the four reasons to start a new paragraph.",
        accept: ["time", "place", "topic", "speaker", "new speaker", "change of time", "change of place", "change of topic"],
        answer: "A change of time, place, topic or speaker." },
      { question: "Explain why varying sentence length improves a piece of descriptive writing.",
        answer: "Because length controls pace, and pace controls how the reader feels. A long sentence with several clauses slows the reading down, which suits description, accumulation or a wandering thought; a short one lands abruptly and creates emphasis or shock. When every sentence is the same length the writing becomes monotonous and the reader stops noticing where the important moments are, because nothing stands out from anything else. Placing a very short sentence immediately after two long ones is the simplest way to make a moment hit hard, and it is something you can plan deliberately rather than hope happens. (Mark this one yourself.)" },
      { question: "Explain why technical accuracy is worth revising even though it feels less interesting than analysis.",
        answer: "Because it is assessed separately and carries a large share of the writing marks — often around a fifth of the paper — and unlike analysis it can be improved by learning a finite set of rules rather than by reading more widely. Comma splices, apostrophes and homophone confusions account for most of the marks lost, and each has a check that takes seconds to apply. It also affects the rest of the paper indirectly: an examiner reading accurate, controlled writing finds the argument easier to follow, whereas errors interrupt the reading and make even a good point harder to credit. (Mark this one yourself.)" },
      {
        question: "Which sentence uses the apostrophe correctly?",
        choices: [
          "The dog's lead was missing.",
          "The dogs' lead was missing, for one dog.",
          "The dogs lead was missing.",
          "The dog's leads' were missing.",
        ],
        accept: [
          "The dog's lead was missing.",
        ],
        answer: "Apostrophe before the s for one owner, after for more than one. Never use one to make a plural.",
      },
      {
        question: "What is the purpose of a semicolon?",
        choices: [
          "To join two closely related complete sentences",
          "To introduce a list",
          "To show possession",
          "To mark a question",
        ],
        accept: [
          "To join two closely related complete sentences",
        ],
        answer: "A colon introduces a list or explanation. Both halves either side of a semicolon must work as sentences alone.",
      },
      {
        question: "Which is a correct use of 'their', 'there' and 'they're'?",
        choices: [
          "They're going to leave their bags over there.",
          "Their going to leave there bags over they're.",
          "There going to leave they're bags over their.",
          "They're going to leave there bags over their.",
        ],
        accept: [
          "They're going to leave their bags over there.",
        ],
        answer: "They're is they are, their shows possession, there is a place. Getting these wrong is heavily penalised in the SPaG marks.",
      },
      {
        question: "A comma splice happens when:",
        choices: [
          "Two complete sentences are joined with only a comma",
          "A list has too many commas",
          "A comma is used before 'and'",
          "A sentence has no comma at all",
        ],
        accept: [
          "Two complete sentences are joined with only a comma",
        ],
        answer: "Use a full stop, a semicolon, or add a conjunction. It is one of the most common errors in exam writing.",
      },
      {
        question: "Which sentence is written in the PASSIVE voice?",
        choices: [
          "The window was broken by the boy.",
          "The boy broke the window.",
          "The boy is breaking the window.",
          "Break the window.",
        ],
        accept: [
          "The window was broken by the boy.",
        ],
        answer: "Passive puts the action before the doer, which can hide responsibility — a useful point in non-fiction analysis.",
      },
    ],

    misconceptions: [
      { wrong: "\"A comma can join two sentences if they're about the same thing.\"",
        right: "It cannot, ever. That is a comma splice. Use a full stop, a semicolon, or add a conjunction — the choice depends on how closely the ideas are linked." },
      { wrong: "\"it's means belonging to it.\"",
        right: "it's always means 'it is' or 'it has'. The possessive is its, with no apostrophe — one of the few possessives in English that takes none." },
      { wrong: "\"Long sentences are more sophisticated.\"",
        right: "Control is what is rewarded, not length. A deliberate short sentence among longer ones shows more skill than a page of clauses joined by 'and'." },
      { wrong: "\"Adverbs always end in -ly.\"",
        right: "Many do, but plenty do not: very, often, well, soon, never. The test is what the word describes, not how it ends." },
      { wrong: "\"Spelling doesn't really matter as long as the meaning is clear.\"",
        right: "It is directly assessed and worth a substantial share of the writing marks. It is also the part of the paper most improvable by revision alone." },
      { wrong: "\"Standard English means posh English.\"",
        right: "It is the grammar and vocabulary expected in formal contexts. It is about appropriateness for a situation, not about class or accent, and non-standard forms are not incorrect in their own contexts." },
    ],
  },

  "english/comparing-texts": {
    summary:
      "Comparison questions appear on almost every English paper: two non-fiction texts on the language paper, two poems on the literature paper. They are also the questions students most often answer badly — not because the texts are hard, but because they write about one text, then the other, and never actually compare. This topic is about the structure and the habits that turn two separate analyses into one comparative argument.",
    keyFacts: [
      {
        heading: "What comparison actually means",
        points: [
          "A comparison discusses both texts TOGETHER, not one after the other.",
          "The examiner is looking for a point that could not be made about either text alone.",
          "Similarities and differences both count, and the best answers find similarities of purpose with differences of method — or the reverse.",
          "'Both writers are angry, but they express it very differently' is a comparative point. 'Text A is angry. Text B is calm.' is two statements sitting next to each other.",
          "Every paragraph should mention both texts. If a paragraph names only one, it is analysis, not comparison.",
        ],
      },
      {
        heading: "What to compare",
        points: [
          "Viewpoint: what does each writer actually think, and how strongly?",
          "Purpose: to inform, persuade, entertain, argue, advise? Two texts on the same subject often have entirely different purposes.",
          "Tone: angry, nostalgic, ironic, detached, urgent, affectionate.",
          "Methods: the techniques used — imagery, structure, sentence forms, direct address, statistics, anecdote.",
          "Audience: who each was written for, and how the writing changes to suit them.",
          "Context: when each was written, and how that shapes what could be said and how.",
        ],
      },
      {
        heading: "Structuring a comparative answer",
        points: [
          "The integrated method is the stronger one: each paragraph makes one comparative point, using evidence from both texts.",
          "A workable paragraph shape: comparative point → quotation from Text A → analysis → connective → quotation from Text B → analysis → what the difference reveals.",
          "The block method — everything about Text A, then everything about Text B — rarely reaches the higher bands, because comparison only appears at the very end if at all.",
          "Aim for three or four strong comparative paragraphs rather than six thin ones.",
          "Finish each paragraph with the significance: not just that the writers differ, but what that difference achieves.",
        ],
      },
      {
        heading: "Comparative connectives",
        points: [
          "For similarity: similarly, likewise, in the same way, both writers, equally.",
          "For difference: whereas, in contrast, however, on the other hand, conversely, while.",
          "For degree: to a greater extent, more explicitly, far more subtly, less directly.",
          "Use them mid-sentence to link the two texts inside one thought, rather than starting a new paragraph with 'However'.",
          "'Whereas' is the single most useful word in a comparison, because it forces both halves of the sentence to be about different texts.",
        ],
      },
      {
        heading: "Choosing evidence",
        points: [
          "Pick quotations that PAIR — two moments doing a similar job, or the same job in opposite ways.",
          "Short embedded quotations work better than long ones, because they leave room for analysis.",
          "Annotate both texts before writing, marking two or three points where they clearly speak to each other.",
          "Plan for five minutes. A comparison written without a plan almost always drifts into block structure.",
          "Track the same idea across both texts rather than listing every technique you can spot in each.",
        ],
      },
    ],
    flashcards: [
      { term: "Comparison", definition: "Writing about two texts together, making points that could not be made about either alone." },
      { term: "Integrated comparison", definition: "A structure where each paragraph makes one comparative point using evidence from both texts." },
      { term: "Block structure", definition: "Writing all about one text and then all about the other — the weaker approach, which rarely reaches the higher bands." },
      { term: "Comparative connective", definition: "A linking word or phrase such as whereas, similarly or in contrast that joins points about two texts." },
      { term: "Viewpoint", definition: "What the writer thinks about the subject, and how strongly." },
      { term: "Purpose", definition: "What a text is trying to do: inform, persuade, entertain, argue or advise." },
      { term: "Tone", definition: "The attitude conveyed by the writing — angry, nostalgic, ironic, detached." },
      { term: "Method", definition: "A technique a writer uses to achieve their effect, such as imagery, structure or direct address." },
      { term: "Audience", definition: "The readers a text is aimed at, which shapes its vocabulary, tone and assumptions." },
      { term: "Embedded quotation", definition: "A short quotation woven into your own sentence rather than set apart." },
      { term: "Paired evidence", definition: "Two quotations, one from each text, chosen because they do comparable work." },
    ],
    examTips: [
      {
        tip: "Mention both texts in every paragraph",
        detail:
          "The quickest self-check there is. Glance back: if a paragraph names only one text, it is not yet comparative and will be capped in the lower bands.",
      },
      {
        tip: "Use 'whereas' deliberately",
        detail:
          "It forces one text into each half of the sentence, which is exactly the structure a comparative point needs. Aim for it several times in an answer.",
      },
      {
        tip: "Compare methods, not just content",
        detail:
          "Both texts being about pollution is a starting point, not a point. How each writer makes you feel about it is where the marks live.",
      },
      {
        tip: "Plan the pairings before you write",
        detail:
          "Five minutes marking two or three moments where the texts speak to each other prevents the drift into block structure that ruins most comparisons.",
      },
      {
        tip: "Look for similar purpose with different method",
        detail:
          "It is the most productive kind of comparative point: both writers want you angry, but one uses statistics and the other uses a single child's story.",
      },
      {
        tip: "Say what the difference achieves",
        detail:
          "Identifying a difference is one mark; explaining what it does to the reader is where the higher bands begin. End each paragraph with the effect.",
      },
      {
        tip: "Do not force a comparison that isn't there",
        detail:
          "If the texts genuinely differ, say so clearly and explore why. Pretending to find a similarity produces vague writing that convinces nobody.",
      },
    ],

    workedExamples: [
      {
        question:
          "Turn these two statements into one comparative point: 'Text A uses statistics about flooding.' 'Text B describes one family losing their home.'",
        steps: [
          "Ask what both writers are trying to achieve — here, to make the reader take flooding seriously.",
          "That shared purpose is the frame for the comparison.",
          "Now identify how the methods differ: one appeals to reason with data, one to emotion with a single story.",
          "Join them with a comparative connective so both texts sit in one sentence.",
          "Finish with the effect — what each method does to the reader.",
        ],
        answer:
          "Both writers want the reader to take flooding seriously, but they reach for opposite kinds of proof: Text A piles up statistics to make the scale feel undeniable, whereas Text B narrows to one family, trusting that a single loss the reader can picture will move them further than a number they cannot.",
      },
      {
        question:
          "Write the opening of a comparative paragraph about tone, using one quotation from each text: Text A — 'This is, frankly, a disgrace.' Text B — 'One might reasonably ask whether more could have been done.'",
        steps: [
          "Start with a comparative point about tone rather than a description of one text.",
          "Quote briefly from Text A and analyse the word doing the work — 'frankly' and 'disgrace'.",
          "Use a connective to move to Text B without starting a new paragraph.",
          "Quote briefly and analyse — 'one might reasonably ask' is impersonal and hedged.",
          "Close with what the difference achieves: force against restraint, and who each is aimed at.",
        ],
        answer:
          "Both writers are critical, but they let that criticism show to very different degrees. Text A is openly furious: 'frankly' pushes politeness aside, and 'a disgrace' passes judgement outright with no room for disagreement. Text B, whereas, keeps its anger under the surface — 'one might reasonably ask' is impersonal and carefully hedged, so the criticism arrives as a question rather than a verdict. The restraint makes Text B sound measured and therefore harder to dismiss, while Text A's bluntness is designed to make the reader share its indignation immediately.",
      },
      {
        question:
          "Explain why this paragraph would not reach the higher bands: 'Text A uses a rhetorical question to make the reader think. It also uses a list of three. Text B uses emotive language.'",
        steps: [
          "Check the structure: Text A is discussed alone, then Text B is discussed alone. There is no comparative point.",
          "Check for connectives: there are none linking the two texts.",
          "Check the analysis: the techniques are named but their effect is asserted, not explained. 'Make the reader think' is a phrase that fits any rhetorical question anywhere.",
          "Check the evidence: there are no quotations at all, so nothing is anchored in the texts.",
          "The fix is to choose one shared idea and examine how each writer handles it, with quotations.",
        ],
        answer:
          "It spots techniques but never compares them, offers no quotations, and explains no effects — it is a list of features rather than an argument. Rewritten comparatively it would take one shared idea and ask how each writer approaches it, with a short quotation from each and an explanation of what the difference achieves.",
      },
      {
        question:
          "Two poems both describe a parent. One is written in strict rhyming quatrains; the other in free verse. Suggest a comparative point about form.",
        steps: [
          "Note that form is a method, so a difference in form is worth comparing in its own right.",
          "Ask what the regular form suggests: order, control, tradition, perhaps distance or restraint.",
          "Ask what free verse suggests: spontaneity, a speaking voice, emotion escaping any pattern.",
          "Link the form to the relationship each poem describes.",
          "Be careful to argue it from the poem rather than assuming form always means the same thing.",
        ],
        answer:
          "Both poems are about a parent, but their forms pull in opposite directions: the strict quatrains hold the feeling inside a controlled, inherited pattern, which suits a relationship governed by duty and restraint, whereas the free verse lets the voice run past any expected shape, so the emotion arrives unmanaged. The contrast in form becomes a contrast in how freely each speaker is able to feel.",
      },
    ],

    practice: [
      { question: "What is the weaker structure called, where you write all about one text then all about the other?",
        accept: ["block", "block structure", "the block structure"],
        answer: "Block structure. Integrated comparison is the stronger approach." },
      { question: "What is the stronger structure called, where each paragraph compares both texts?",
        accept: ["integrated", "integrated comparison", "integrated structure"],
        answer: "Integrated comparison — each paragraph makes one comparative point using evidence from both texts." },
      { question: "Name a comparative connective that signals DIFFERENCE.",
        accept: ["whereas", "however", "in contrast", "conversely", "on the other hand", "while", "but"],
        answer: "Whereas, in contrast, however, conversely or on the other hand." },
      { question: "Name a comparative connective that signals SIMILARITY.",
        accept: ["similarly", "likewise", "both", "equally", "in the same way"],
        answer: "Similarly, likewise, equally, or 'both writers'." },
      { question: "How many texts should be mentioned in each paragraph of a comparison?",
        accept: ["2", "two", "both"],
        answer: "Both. A paragraph naming only one text is analysis, not comparison." },
      { question: "Which single word is described as the most useful in a comparison, because it forces a text into each half of the sentence?",
        accept: ["whereas"],
        answer: "Whereas. It is so useful because it forces one text into each half of the sentence, which is the shape a comparative point needs." },
      { question: "What is the term for what a text is trying to do — inform, persuade, entertain or argue?",
        accept: ["purpose", "the purpose"],
        answer: "Purpose. Two texts on the same subject often have completely different purposes, which is where the comparison starts." },
      { question: "What is the term for the attitude conveyed by the writing, such as angry or nostalgic?",
        accept: ["tone", "the tone"],
        answer: "Tone — the attitude the writing conveys, such as angry, nostalgic, ironic or detached." },
      { question: "What is the term for the readers a text is aimed at?",
        accept: ["audience", "the audience"],
        answer: "Audience. Who a text was written for shapes its vocabulary, its tone and what it assumes the reader already knows." },
      { question: "What is a short quotation woven into your own sentence called?",
        accept: ["embedded quotation", "embedded", "an embedded quotation"],
        answer: "An embedded quotation — it leaves more room for analysis than a long one." },
      { question: "Is it better to write three strong comparative paragraphs or six thin ones?",
        accept: ["3", "three", "three strong", "three strong paragraphs"],
        answer: "Three strong ones. Depth of comparison beats coverage." },
      { question: "Should a comparison discuss similarities, differences, or both?",
        accept: ["both"],
        answer: "Both. The best answers often find a shared purpose achieved by different methods." },
      { question: "What should a comparative paragraph end with: another quotation, or the effect of the difference?",
        accept: ["the effect", "effect", "the effect of the difference"],
        answer: "The effect. Identifying a difference is the start; explaining what it achieves is where the higher bands begin." },
      { question: "What is the term for two quotations chosen because they do comparable work in each text?",
        accept: ["paired evidence", "paired quotations", "pairing", "paired"],
        answer: "Paired evidence — two quotations, one from each text, chosen because they do comparable work." },
      { question: "About how long should you spend planning a comparison before writing?",
        accept: ["5 minutes", "five minutes", "5"],
        answer: "About five minutes. Planning is what prevents the drift into block structure." },
      { question: "Give one aspect of a text you can compare other than its content.",
        accept: ["tone", "purpose", "audience", "structure", "methods", "viewpoint", "form", "context", "language"],
        answer: "Tone, purpose, audience, structure, form, methods, viewpoint or context." },
      { question: "Explain why writing about one text and then the other rarely reaches the higher bands.",
        answer: "Because the assessment rewards comparison, and a block-structured answer only compares in its final sentences, if at all. Everything before that is two separate analyses that happen to share a page, so the examiner has nothing to credit against the comparative criteria for most of the answer. It also weakens the analysis itself: setting two texts side by side reveals things neither shows alone, because each writer's choices only look like choices once you can see that another writer facing the same subject did something different. Integrating the comparison forces those insights out. (Mark this one yourself.)" },
      { question: "Explain why a comparison of methods is worth more than a comparison of subject matter.",
        answer: "Because subject matter is usually given by the exam rather than chosen by the writer — the two texts are set together precisely because they share a topic, so noticing that shared topic demonstrates nothing. Methods are where the writers actually made decisions: what to include, how to order it, which words to use, whether to reach for a statistic or a story. Comparing those choices lets you explain why two texts on the same subject leave the reader feeling completely different things, which is the question the mark scheme is really asking. (Mark this one yourself.)" },
      {
        question: "A comparison essay is strongest when it:",
        choices: [
          "Moves between texts within each paragraph",
          "Covers one text then the other",
          "Focuses on the longer text",
          "Avoids quotations",
        ],
        accept: [
          "Moves between texts within each paragraph",
        ],
        answer: "Integrated comparison demonstrates the relationship between the texts, which is what the mark scheme rewards.",
      },
      {
        question: "When comparing texts, you should compare:",
        choices: [
          "Both the ideas and the methods used to express them",
          "Only the subject matter",
          "Only the techniques",
          "Only the writers' backgrounds",
        ],
        accept: [
          "Both the ideas and the methods used to express them",
        ],
        answer: "Ideas alone reads as summary; methods alone reads as technique-spotting. The marks are in linking them.",
      },
      {
        question: "Which is a useful phrase for signalling a difference?",
        choices: [
          "In contrast",
          "Furthermore",
          "In addition",
          "Similarly",
        ],
        accept: [
          "In contrast",
        ],
        answer: "Whereas and unlike do the same job. Similarly and likewise signal agreement, so choose deliberately.",
      },
      {
        question: "If two texts express similar ideas differently, you should:",
        choices: [
          "Explain how the different methods change the effect",
          "Say they are the same",
          "Pick the better one",
          "Ignore the difference",
        ],
        accept: [
          "Explain how the different methods change the effect",
        ],
        answer: "Two writers can reach the same conclusion by opposite routes, and that contrast is often the most interesting point available.",
      },
      {
        question: "A conclusion to a comparison essay should:",
        choices: [
          "Reach an overall judgement about the texts' treatment of the idea",
          "Introduce a new text",
          "Repeat the introduction",
          "List the techniques used",
        ],
        accept: [
          "Reach an overall judgement about the texts' treatment of the idea",
        ],
        answer: "A conclusion that decides something reads as an argument. One that summarises reads as a checklist.",
      },
    ],

    misconceptions: [
      { wrong: "\"Comparing means finding things that are the same.\"",
        right: "Differences count just as much, and the strongest points often combine both — a shared purpose pursued by opposite methods." },
      { wrong: "\"You should write about Text A first, then Text B.\"",
        right: "That is block structure, and it postpones the comparison until the end. Each paragraph should make one comparative point using both texts." },
      { wrong: "\"Saying 'both texts are about pollution' is a comparison.\"",
        right: "That is the topic, and the exam chose it. The comparison lies in how each writer treats it and what effect that has." },
      { wrong: "\"Naming lots of techniques shows more knowledge.\"",
        right: "A list of features with no effects explained sits in the lower bands. Fewer techniques, properly explored across both texts, scores far higher." },
      { wrong: "\"Long quotations show you have understood the text.\"",
        right: "They use up the space analysis needs. Short embedded quotations, closely examined, are worth far more than a copied paragraph." },
      { wrong: "\"If the texts have nothing in common, the question is unfair.\"",
        right: "Then the comparison is about the difference. Saying clearly how and why they diverge, and what each achieves, is a perfectly strong answer." },
    ],
  },

  "english/spoken-language": {
    summary:
      "Every GCSE English Language student gives a spoken presentation. It is reported separately from your grade — as Pass, Merit or Distinction — which is why it gets neglected, and also why it is one of the easiest things on the course to do well at with a little preparation. This topic covers preparing and delivering that presentation, handling questions, and the features that make spoken language a genuinely different thing from writing.",
    keyFacts: [
      {
        heading: "The spoken language endorsement",
        points: [
          "It is assessed as Pass, Merit or Distinction, and appears separately on your certificate rather than inside the English Language grade.",
          "You are assessed on presenting information clearly, listening and responding to questions, and using Standard English.",
          "The presentation is normally a few minutes long, on a topic you choose or are given, delivered to an audience.",
          "It is a required part of the course, so it must be completed even though it does not change the number on your certificate.",
          "Employers and sixth forms do see it, and 'Distinction' costs no more effort than 'Pass' if you prepare.",
        ],
      },
      {
        heading: "Preparing a presentation",
        points: [
          "Choose a topic you actually have something to say about — enthusiasm carries a talk further than research does.",
          "Structure it clearly: an opening that tells the audience where you are going, three main sections, and a conclusion that lands.",
          "Write cue cards with prompts, never a full script. Reading aloud sounds flat and makes eye contact impossible.",
          "Signpost as you go: 'The second reason is...', 'That brings me to...'. Listeners cannot re-read, so they need the map.",
          "Time it out loud, more than once. Most people speak faster under pressure and finish early.",
          "Anticipate three questions you might be asked and think about the answers in advance.",
        ],
      },
      {
        heading: "Delivering it",
        points: [
          "Speak more slowly than feels natural. Nerves speed everyone up, and clarity is being assessed.",
          "Make eye contact across the room rather than fixing on one person or on your notes.",
          "Use pauses deliberately — before an important point, and after it. Silence sounds confident, not empty.",
          "Vary your tone and volume. A monotone loses an audience faster than any mistake of content.",
          "Stand still and keep your hands purposeful. Rocking and fidgeting distract from what you are saying.",
          "If you lose your place, pause, look at your card, and carry on. The audience notices far less than you think.",
        ],
      },
      {
        heading: "Using Standard English, and answering questions",
        points: [
          "Standard English is assessed here: full sentences, agreement between subject and verb, and vocabulary suited to a formal setting.",
          "It does not mean losing your accent. Accent is how you sound; Standard English is grammar and vocabulary.",
          "Listen to the whole question before starting to answer, and it is fine to pause and think first.",
          "If you do not know, say so honestly and offer what you do know — that is judged far better than bluffing.",
          "Refer back to your presentation when answering: it shows you are connecting the question to your material.",
          "Answering questions well is a separate assessed skill, not an afterthought.",
        ],
      },
      {
        heading: "Features of spoken language",
        points: [
          "Spontaneous speech is planned as it is spoken, which is why it contains features writing does not.",
          "Non-fluency features: fillers ('um', 'er'), false starts, repetitions, and self-corrections.",
          "Elision: sounds dropped in casual speech — 'gonna', 'dunno', 'innit'.",
          "Fillers are not errors. They buy thinking time and signal that the speaker has not finished, which is exactly what a listener needs.",
          "Prepared speech, such as a scripted presentation, sits between spontaneous speech and writing, borrowing the structure of one and the delivery of the other.",
          "Turn-taking, interruption and adjacency pairs (a question expecting an answer) organise conversation without anyone agreeing them in advance.",
        ],
      },
    ],
    flashcards: [
      { term: "Spoken language endorsement", definition: "The separately reported part of GCSE English Language, graded Pass, Merit or Distinction." },
      { term: "Standard English", definition: "The grammar and vocabulary expected in formal settings — unrelated to accent." },
      { term: "Accent", definition: "How a speaker pronounces words, reflecting where they are from. Not a matter of correctness." },
      { term: "Dialect", definition: "The vocabulary and grammar of a particular region or group." },
      { term: "Non-fluency features", definition: "Fillers, false starts, repetitions and self-corrections that occur in spontaneous speech." },
      { term: "Filler", definition: "A sound or word such as 'um' or 'you know' that buys thinking time and holds the speaker's turn." },
      { term: "Elision", definition: "Sounds dropped in casual speech, as in 'gonna' for 'going to'." },
      { term: "Spontaneous speech", definition: "Speech planned as it is produced, which is why it contains non-fluency features." },
      { term: "Prepared speech", definition: "Speech planned in advance, such as a presentation — more structured than conversation." },
      { term: "Signposting", definition: "Telling the audience where you are going in a talk, since they cannot re-read." },
      { term: "Adjacency pair", definition: "A two-part exchange where the first part expects a particular second, such as a question and its answer." },
      { term: "Turn-taking", definition: "The unspoken system by which speakers take turns in conversation." },
      { term: "Cue card", definition: "A card holding prompts rather than a full script, used to keep a talk natural." },
    ],
    examTips: [
      {
        tip: "Use prompts, never a script",
        detail:
          "A read-aloud presentation sounds flat and prevents eye contact, both of which are assessed. Cue cards with five or six phrases each are enough.",
      },
      {
        tip: "Slow down deliberately",
        detail:
          "Everyone speeds up under nerves. Practise at a pace that feels slightly too slow — on the day it will come out about right.",
      },
      {
        tip: "Prepare three likely questions",
        detail:
          "Responding to questions is separately assessed. Thinking of the obvious three in advance turns the least predictable part into the easiest.",
      },
      {
        tip: "Signpost between sections",
        detail:
          "'That brings me to my second point.' A listener has no way to scan back, so these small signals do a lot of work.",
      },
      {
        tip: "Say honestly when you don't know",
        detail:
          "Bluffing is transparent and marks you down. 'I'm not sure, but what I do know is...' is treated as a strength, not a weakness.",
      },
      {
        tip: "Pause instead of filling",
        detail:
          "Silence sounds considered; 'um' sounds unprepared. When you need a moment, take it without making a noise.",
      },
      {
        tip: "Treat fillers as features, not mistakes, when analysing speech",
        detail:
          "In a transcript question, explain what a filler DOES — buying time, holding the turn, softening a disagreement — rather than calling it an error.",
      },
    ],

    workedExamples: [
      {
        question: "Plan a five-minute presentation on 'Social media should be banned for under-16s'.",
        steps: [
          "Opening: a striking fact or a short personal moment, then state your position in one sentence so the audience knows where you stand.",
          "Signpost the structure: 'I'll look at three things — the evidence on wellbeing, the practical problems with a ban, and what I think we should do instead.'",
          "Section one: the strongest evidence for the case, with one specific example rather than several vague ones.",
          "Section two: the honest counter-argument. Acknowledging the other side makes you sound credible, not weak.",
          "Conclusion: return to your opening image and state your position again, slightly sharpened. Then prepare for the obvious questions — enforcement, and where you drew the age line.",
        ],
        answer:
          "Hook → position stated → signposted structure → evidence → honest counter-argument → conclusion returning to the opening. Prepare answers on enforcement and on why 16 rather than another age.",
      },
      {
        question:
          "Identify the spoken language features in: 'So I was — um — I was gonna say, like, it's not really, you know, it's not that simple.'",
        steps: [
          "'So I was —' followed by a restart is a false start: the speaker abandons the structure and begins again.",
          "'um' is a filler, buying a moment of thinking time while holding the turn.",
          "'gonna' is elision — 'going to' with sounds dropped, typical of informal speech.",
          "'like' and 'you know' are discourse markers, softening the statement and checking the listener is with them.",
          "'it's not really... it's not that simple' is a repetition and self-correction, the speaker refining what they meant as they say it.",
        ],
        answer:
          "A false start ('So I was —'), a filler ('um'), elision ('gonna'), discourse markers ('like', 'you know') and a self-correcting repetition. None are errors: they are the normal machinery of speech planned in real time.",
      },
      {
        question:
          "A student says 'I done my research on it.' Explain the difference between accent and Standard English here.",
        steps: [
          "'I done' is a non-standard grammatical form; Standard English would be 'I did'.",
          "That is a matter of grammar, which is what the endorsement assesses.",
          "Accent is separate: it is how the words are pronounced, and it varies across the country without any version being incorrect.",
          "A speaker with any accent can use Standard English, and frequently does.",
          "So the advice is about grammar in a formal setting, not about changing how someone sounds.",
        ],
        answer:
          "'I done' is a non-standard grammatical form, so Standard English would be 'I did' — and grammar is what is assessed. Accent, meaning pronunciation, is a separate thing entirely and is neither assessed nor in need of changing.",
      },
      {
        question:
          "You are asked a question you cannot answer at the end of your presentation. What should you do?",
        steps: [
          "Listen to the whole question rather than starting to answer partway through.",
          "Pause. A moment's thought reads as consideration, not confusion.",
          "Be honest that you do not know that specific thing — bluffing is obvious and is marked down.",
          "Offer what you do know that is related, so the answer still has substance.",
          "Where you can, connect it back to a point you made, showing you are still thinking about your material.",
        ],
        answer:
          "Listen fully, pause, then say honestly that you do not know — and immediately offer the related thing you do know, linking it back to your presentation. Honesty with substance is credited; bluffing is not.",
      },
    ],

    practice: [
      { question: "What three grades can the spoken language endorsement be awarded?",
        accept: ["pass merit distinction", "pass, merit, distinction", "pass merit and distinction"],
        answer: "Pass, Merit and Distinction." },
      { question: "Does the spoken language endorsement count towards your English Language grade? Answer yes or no.",
        accept: ["no"],
        answer: "No — it is reported separately on the certificate." },
      { question: "What is the term for sounds like 'um' and 'er' in speech?",
        accept: ["fillers", "filler", "a filler"],
        answer: "Fillers. They buy thinking time and hold the speaker's turn." },
      { question: "What is the term for dropping sounds, as in 'gonna' for 'going to'?",
        accept: ["elision"],
        answer: "Elision — sounds dropped in casual speech, as in 'gonna' or 'dunno'. It is a feature of speech, not an error." },
      { question: "What is the general term for fillers, false starts and repetitions in speech?",
        accept: ["non fluency features", "non-fluency features", "non fluency", "nonfluency features"],
        answer: "Non-fluency features — normal in spontaneous speech, not errors." },
      { question: "What is the term for how a speaker pronounces words, reflecting where they are from?",
        accept: ["accent", "an accent"],
        answer: "Accent — distinct from dialect, which is vocabulary and grammar." },
      { question: "What is the term for the vocabulary and grammar of a particular region?",
        accept: ["dialect", "a dialect"],
        answer: "Dialect — the vocabulary and grammar of a region or group, which is separate from accent, meaning pronunciation." },
      { question: "Is Standard English about accent or about grammar and vocabulary?",
        accept: ["grammar and vocabulary", "grammar", "vocabulary and grammar"],
        answer: "Grammar and vocabulary. Any accent can be used with Standard English." },
      { question: "Should you use a full script or cue cards for a presentation?",
        accept: ["cue cards", "cue card", "cards", "prompts"],
        answer: "Cue cards with prompts. Reading aloud sounds flat and prevents eye contact." },
      { question: "What is the term for telling your audience where your talk is going next?",
        accept: ["signposting", "signpost"],
        answer: "Signposting. Listeners cannot re-read, so they need the map." },
      { question: "What is the term for a two-part exchange such as a question and its answer?",
        accept: ["adjacency pair", "an adjacency pair", "adjacency pairs"],
        answer: "An adjacency pair — the first part sets up an expectation that the second part fills, as a question expects an answer." },
      { question: "What is the term for the system by which speakers take turns in conversation?",
        accept: ["turn taking", "turn-taking", "turntaking"],
        answer: "Turn-taking. Nobody agrees the rules in advance, yet speakers manage it constantly through pauses, tone and eye contact." },
      { question: "Under nerves, do most people speak faster or slower than usual?",
        accept: ["faster"],
        answer: "Faster — which is why you should practise deliberately slowly." },
      { question: "Besides presenting, name one other thing assessed in the endorsement.",
        accept: ["responding to questions", "answering questions", "listening", "standard english", "listening and responding", "questions"],
        answer: "Responding to questions, and using Standard English." },
      { question: "Is speech planned as it is spoken called spontaneous or prepared speech?",
        accept: ["spontaneous", "spontaneous speech"],
        answer: "Spontaneous speech — which is why it contains non-fluency features." },
      { question: "If you don't know the answer to a question, should you bluff or say so honestly?",
        accept: ["say so honestly", "honestly", "be honest", "say so"],
        answer: "Say so honestly, then offer what you do know. Bluffing is transparent and marked down." },
      { question: "Explain why fillers such as 'um' should not be treated as errors when analysing a transcript.",
        answer: "Because they are doing a job that writing never has to do. A speaker is planning and delivering at the same time, and a filler buys a moment to think while signalling that the turn is not finished — without it, the pause would invite someone else to start talking. Fillers can also soften a disagreement or mark hesitation about something delicate, which carries real meaning. Calling them mistakes measures speech against the standards of writing, which had time to be redrafted, and misses what the speaker was actually managing in the moment. (Mark this one yourself.)" },
      { question: "Explain why using Standard English is not the same as losing your accent.",
        answer: "Because they describe different things. Standard English is a matter of grammar and vocabulary — 'I did' rather than 'I done', 'we were' rather than 'we was' — and it is the form expected in formal writing and speech across the whole country. Accent is pronunciation: how the vowels and consonants sound, which varies by region and carries no correctness at all. Someone can speak flawless Standard English in a broad Yorkshire, Glaswegian or Cornish accent, and millions do every day. Asking a student to use Standard English in an assessment is asking about grammar in a formal setting, not asking them to sound like someone else. (Mark this one yourself.)" },
      {
        question: "The spoken language endorsement is assessed on:",
        choices: [
          "Presenting, responding to questions and using standard English",
          "Written accuracy only",
          "Memorising a script exactly",
          "Length of the talk alone",
        ],
        accept: [
          "Presenting, responding to questions and using standard English",
        ],
        answer: "It is reported separately from the GCSE grade but still appears on your certificate.",
      },
      {
        question: "Which is most important when planning a spoken presentation?",
        choices: [
          "Structuring it clearly with a strong opening and close",
          "Writing every word to read aloud",
          "Using the longest words possible",
          "Speaking as fast as possible",
        ],
        accept: [
          "Structuring it clearly with a strong opening and close",
        ],
        answer: "Cue cards keep you flexible. Reading a full script aloud almost always sounds flat and loses the audience.",
      },
      {
        question: "Standard English in a presentation means:",
        choices: [
          "Using widely accepted grammar and vocabulary",
          "Avoiding any regional accent",
          "Using only formal literary words",
          "Never using contractions",
        ],
        accept: [
          "Using widely accepted grammar and vocabulary",
        ],
        answer: "Accent is not the same as dialect or grammar. You are assessed on grammatical standard English, not on how you sound.",
      },
      {
        question: "When responding to questions after a talk, you should:",
        choices: [
          "Listen carefully and develop your answer with reasons",
          "Give one-word answers",
          "Repeat your presentation",
          "Change the subject",
        ],
        accept: [
          "Listen carefully and develop your answer with reasons",
        ],
        answer: "The question-and-answer section is assessed too, and short answers waste the easiest marks available.",
      },
      {
        question: "Which non-verbal technique most improves a presentation?",
        choices: [
          "Eye contact with the audience",
          "Reading from the floor",
          "Standing completely still",
          "Speaking without pauses",
        ],
        accept: [
          "Eye contact with the audience",
        ],
        answer: "Pace, pausing and gesture matter too. A deliberate pause before a key point is one of the most effective tools available.",
      },
    ],

    misconceptions: [
      { wrong: "\"The spoken language part doesn't matter because it isn't in my grade.\"",
        right: "It appears separately on your certificate, sixth forms and employers see it, and a Distinction takes barely more preparation than a Pass." },
      { wrong: "\"Standard English means speaking without an accent.\"",
        right: "Standard English is grammar and vocabulary. Accent is pronunciation, varies across the country, and is not a matter of correctness at all." },
      { wrong: "\"Writing the whole speech out makes it safer.\"",
        right: "A read script sounds flat, removes eye contact and makes recovery from a lost place harder, not easier. Prompts keep the delivery alive." },
      { wrong: "\"Fillers and false starts are just bad speaking.\"",
        right: "They are normal features of real-time speech planning. In a transcript question, explain what they DO rather than treating them as mistakes." },
      { wrong: "\"You should keep talking to avoid awkward silences.\"",
        right: "Pauses read as confidence and give your audience time to absorb a point. Filling every gap with 'um' does the opposite." },
      { wrong: "\"The question section is just a formality at the end.\"",
        right: "Listening and responding is separately assessed. Preparing three likely questions turns the least predictable part of the task into the most controllable." },
    ],
  },

  "english/context-and-themes": {
    summary:
      "Context is the assessment objective students most often lose marks on, because it is the one most often bolted on. A paragraph of history dropped into an essay earns very little; the same information used to explain why a writer made a particular choice earns a great deal. This topic is about using context as part of an argument, and about tracking themes across a whole text so you can write about it as a designed thing rather than a story.",
    keyFacts: [
      {
        heading: "What context means",
        points: [
          "Context is anything outside the text that shapes how it was written or how it is read.",
          "Historical and social context: the beliefs, laws, class structure and events of the time.",
          "Biographical context: the writer's own life, where it genuinely bears on the work.",
          "Literary context: the genre, movement or tradition the text belongs to, and what its readers would have expected.",
          "Reception context: how the text was understood then, and how it is understood now — these often differ sharply.",
          "Check your board's assessment objectives: context is usually AO3 in English Literature and carries a defined share of the marks.",
        ],
      },
      {
        heading: "Using context well",
        points: [
          "The test: does this sentence explain something about the TEXT? If it only explains something about history, it is not doing AO3 work.",
          "Weak: 'Victorian society had lots of poverty.' Strong: 'Dickens makes the reader see the children under the Ghost's robe because his audience largely believed poverty was a moral failing rather than a social one.'",
          "Integrate context into the analysis rather than giving it a paragraph of its own.",
          "One sentence of context, used precisely, beats a paragraph of general background.",
          "Context can explain what a word MEANT then, which is often the sharpest possible use of it.",
          "Never open an essay with a paragraph of history. Start with the text and the argument.",
        ],
      },
      {
        heading: "Contexts worth knowing (examples)",
        points: [
          "Jacobean drama: a monarch believed to rule by divine right, so killing a king was a crime against God and the natural order — and James I had a personal interest in witchcraft.",
          "Victorian fiction: rapid industrialisation, extreme inequality, and a widespread belief that poverty was deserved. Serialisation shaped the plotting of many novels.",
          "Gothic writing: ruins, doubles, the supernatural and the fear of what science might unleash.",
          "1945 and after: the Second World War, the new welfare state, and drama that questioned who was responsible for whom.",
          "War poetry: the gap between how a war was described at home and what soldiers actually experienced.",
          "Your own set texts will differ from this list. The method transfers; the details must come from your own texts.",
        ],
      },
      {
        heading: "Themes",
        points: [
          "A theme is an idea the whole text explores — power, guilt, class, gender, ambition, isolation, responsibility.",
          "A theme is not the same as a topic. 'Death' is a topic; 'the text presents death as the one thing status cannot buy' is a theme.",
          "Track each theme through the text: where it appears, how it develops, and where it is resolved or deliberately left unresolved.",
          "The strongest essays argue that the writer uses a theme to say something, rather than listing places the theme appears.",
          "Watch how a theme changes: what a character believes at the start and at the end is usually the point.",
          "Keep a page per major theme, with three or four short quotations from across the whole text.",
        ],
      },
      {
        heading: "Building the argument",
        points: [
          "Open with a thesis: one sentence saying what you will argue, not a summary of the plot.",
          "Each paragraph should develop that argument, not restart it.",
          "Refer to the writer as a maker of choices: 'Shakespeare presents...', 'Priestley chooses to...'. Characters do not decide anything — writers do.",
          "Use the whole text, not just the extract, when the question allows it. Examiners look for range.",
          "Quotations should be short and embedded, so most of the sentence is your analysis.",
          "End with what the text is FOR: what its writer wanted the audience to think or feel differently about.",
        ],
      },
    ],
    flashcards: [
      { term: "Context", definition: "Anything outside a text that shapes how it was written or how it is read." },
      { term: "AO3", definition: "The assessment objective covering the relationship between a text and the context in which it was written and received." },
      { term: "Social context", definition: "The class structure, beliefs and everyday conditions of the society a text was written in." },
      { term: "Literary context", definition: "The genre, movement or tradition a text belongs to, and the expectations that come with it." },
      { term: "Reception", definition: "How readers or audiences understood a text — which can differ greatly between then and now." },
      { term: "Theme", definition: "An idea a whole text explores, such as power, guilt, class or responsibility." },
      { term: "Thesis", definition: "The single-sentence argument an essay sets out to prove." },
      { term: "Divine right of kings", definition: "The belief that a monarch's authority came from God, making regicide a crime against the natural order." },
      { term: "Gothic", definition: "A literary tradition using ruins, doubles, the supernatural and the fear of knowledge overreaching." },
      { term: "Serialisation", definition: "Publishing a novel in instalments, which shaped plotting towards regular cliffhangers." },
      { term: "Authorial intent", definition: "What the writer appears to want the audience to think or feel — the 'so what' of an essay." },
      { term: "Bolted-on context", definition: "Historical information dropped into an essay without being connected to the text. It earns very little." },
    ],
    examTips: [
      {
        tip: "Never open with a history paragraph",
        detail:
          "Start with your thesis about the text. Context belongs inside the analysis, at the moment it explains a choice, not stacked up at the front.",
      },
      {
        tip: "Apply the 'does this explain the text?' test",
        detail:
          "Read each context sentence back. If it tells the examiner about history but nothing about the writing, rewrite it so it explains why the writer did something.",
      },
      {
        tip: "Name the writer as the one making choices",
        detail:
          "'Priestley presents Birling as...' rather than 'Birling is...'. It is a small change of wording that shifts an entire essay from retelling to analysis.",
      },
      {
        tip: "Use one precise contextual fact rather than three vague ones",
        detail:
          "A single specific detail, tied tightly to a moment in the text, does more than a general paragraph about the period.",
      },
      {
        tip: "Track themes across the whole text",
        detail:
          "Examiners look for range. Three short quotations from beginning, middle and end show you know the text as a designed whole, not just the extract.",
      },
      {
        tip: "Write a thesis you could disagree with",
        detail:
          "'This essay will explore the theme of power' is not an argument. 'Macbeth suggests ambition is destructive because it isolates' is one — and can be defended.",
      },
      {
        tip: "Finish with the 'so what'",
        detail:
          "What did the writer want the audience to think or feel differently about? That final move is what separates the top band from a competent essay.",
      },
    ],

    workedExamples: [
      {
        question:
          "Improve this bolted-on context: 'An Inspector Calls was written in 1945 but set in 1912. There was a war and the welfare state was created.'",
        steps: [
          "Identify the problem: the facts are correct but do nothing to explain the play.",
          "Ask what the gap between the two dates lets Priestley do that a 1945 setting would not.",
          "The audience knows what happened between 1912 and 1945; the characters do not. That is dramatic irony built out of history.",
          "Connect it to a specific choice: Birling's confident predictions about war and the Titanic.",
          "Rewrite so the context explains the effect of the writing on the audience.",
        ],
        answer:
          "Priestley sets the play in 1912 but writes it in 1945, so his audience has lived through everything Birling confidently denies. When Birling calls war 'fiddlesticks', the gap between his certainty and the audience's memory of two wars destroys his authority before the Inspector has even arrived — the historical distance is a dramatic weapon, not a setting.",
      },
      {
        question:
          "Explain how context sharpens the meaning of 'unsex me here' in Macbeth.",
        steps: [
          "Establish what the line asks for: Lady Macbeth wants her femininity removed.",
          "Bring in the context precisely: a Jacobean audience held firm expectations that women were gentle, obedient and maternal.",
          "So the request is not a metaphor for confidence — it is a request to become unnatural.",
          "Link it to the play's wider pattern: the natural order disturbed by the murder, echoed in the storms and the horses eating each other.",
          "Close with the effect: the audience hears a woman placing herself outside nature, which prepares them to see her destruction as inevitable.",
        ],
        answer:
          "To a Jacobean audience, who expected women to be gentle and maternal, 'unsex me here' is not ambition expressed strongly but a woman asking to be made unnatural. It places her alongside the witches, outside the natural order the play is about disturbing — which is why her later collapse reads to that audience as consequence rather than misfortune.",
      },
      {
        question:
          "Turn this topic into a theme statement: 'The theme of social class in A Christmas Carol.'",
        steps: [
          "A topic names a subject; a theme says what the text argues about that subject.",
          "Ask what the text actually claims about class, not merely that class appears in it.",
          "Consider the evidence: the Cratchits' warmth against Scrooge's cold wealth, and Ignorance and Want shown as children.",
          "Turn it into a claim someone could disagree with.",
          "Add the 'so what': what did Dickens want his readers to do differently?",
        ],
        answer:
          "'Dickens presents poverty as something inflicted by the comfortable rather than deserved by the poor, using Scrooge's transformation to argue that responsibility for it is personal as well as political.' That is a claim an essay can defend, where 'the theme of social class' is only a subject heading.",
      },
      {
        question:
          "Plan how to track the theme of guilt across a text you have studied.",
        steps: [
          "Take one page and write the theme at the top.",
          "Find where the theme first appears, and note what the text seems to say about it at that stage.",
          "Find a moment in the middle where it develops, complicates or is denied by a character.",
          "Find where it stands at the end — resolved, or deliberately left open.",
          "Add three or four short quotations, one from each stage, and a sentence on what the writer achieves by placing them where they are.",
        ],
        answer:
          "One page per theme, with beginning, middle and end quotations and a sentence each on how the idea develops. The value is not the quotations themselves but the shape they reveal: an essay that can describe how a theme moves is writing about a designed text, not retelling a story.",
      },
    ],

    practice: [
      { question: "Which assessment objective usually covers context in English Literature?",
        accept: ["ao3", "a03"],
        answer: "AO3 — the relationship between a text and the context in which it was written and received." },
      { question: "What is the term for context dropped into an essay without being linked to the text?",
        accept: ["bolted on", "bolted-on", "bolted on context", "bolt on"],
        answer: "Bolted-on context. It earns very little because it explains history rather than writing." },
      { question: "Is 'death' a theme or a topic?",
        accept: ["topic", "a topic"],
        answer: "A topic. A theme states what the text argues about that subject." },
      { question: "What is the single-sentence argument an essay sets out to prove called?",
        accept: ["thesis", "a thesis", "thesis statement"],
        answer: "A thesis. It should be a claim someone could disagree with, not a statement of what you intend to explore." },
      { question: "Complete the better phrasing: 'Shakespeare ___ Macbeth as...' (presents / is)",
        accept: ["presents"],
        answer: "presents — naming the writer as the one making choices shifts an essay from retelling to analysis." },
      { question: "What was the belief that a monarch's authority came directly from God called?",
        accept: ["divine right", "the divine right of kings", "divine right of kings"],
        answer: "The divine right of kings — which made regicide a crime against the natural order." },
      { question: "What is the term for publishing a novel in instalments?",
        accept: ["serialisation", "serialization", "serialised", "serial"],
        answer: "Serialisation, which shaped plotting towards regular cliffhangers." },
      { question: "Which literary tradition uses ruins, doubles and the supernatural?",
        accept: ["gothic", "the gothic"],
        answer: "The Gothic — a tradition built on ruins, doubles, the supernatural, and the fear of knowledge overreaching itself." },
      { question: "Should an essay open with a paragraph of historical background? Answer yes or no.",
        accept: ["no"],
        answer: "No. Open with a thesis about the text; context belongs inside the analysis." },
      { question: "What is the term for how audiences understood a text at the time it appeared?",
        accept: ["reception", "reception context"],
        answer: "Reception — and it often differs sharply from how the text is read now." },
      { question: "Which is better in an essay: one precise contextual fact, or three general ones?",
        accept: ["one", "one precise", "1", "one precise fact"],
        answer: "One precise fact, tied tightly to a moment in the text." },
      { question: "Should quotations in a literature essay be long or short and embedded?",
        accept: ["short", "short and embedded", "embedded"],
        answer: "Short and embedded, so most of the sentence is your own analysis." },
      { question: "Name one type of context other than historical.",
        accept: ["literary", "biographical", "social", "reception", "genre", "literary context", "biographical context"],
        answer: "Literary, biographical, social or reception context." },
      { question: "What is the test for whether a context sentence is doing its job?",
        accept: ["does it explain the text", "explains the text", "does it explain something about the text"],
        answer: "Does it explain something about the TEXT? If it only explains history, it is not doing AO3 work." },
      { question: "How many parts of the text should a themed quotation bank cover: only the extract, or the whole text?",
        accept: ["the whole text", "whole text", "all of it", "the whole"],
        answer: "The whole text — examiners look for range across beginning, middle and end." },
      { question: "What should a top-band essay end with, beyond summarising?",
        accept: ["so what", "the so what", "authorial intent", "what the writer wanted", "the effect on the audience"],
        answer: "The 'so what' — what the writer wanted the audience to think or feel differently about." },
      { question: "Explain why writing 'Macbeth decides to kill Duncan' is weaker than 'Shakespeare has Macbeth kill Duncan'.",
        answer: "Because the first treats the character as a real person making a free decision, which turns the essay into retelling a story. The second acknowledges that Macbeth exists only because a writer constructed him, and that every action in the play was chosen for an effect on an audience. That framing opens the questions worth marks: why place the murder offstage, why put the dagger speech before it, why give the porter a comic scene immediately after. Nothing in a text happens by itself, and writing as though it does closes off the analysis before it starts. (Mark this one yourself.)" },
      { question: "Explain why a theme should be tracked across a whole text rather than found in a single moment.",
        answer: "Because a theme is not a thing that appears but an idea that develops, and its meaning lies in how it changes. What a text says about guilt at the start is often the opposite of what it says by the end, and the distance between the two is the writer's actual argument. Finding one quotation shows you can spot the theme; showing where it begins, how it complicates in the middle and where it is resolved or deliberately left open shows you understand the text as something designed. It also demonstrates the range examiners look for, since the alternative is an essay that never leaves the extract in front of you. (Mark this one yourself.)" },
      {
        question: "Why does CONTEXT matter when studying a text?",
        choices: [
          "It helps explain the ideas the writer was responding to",
          "It replaces the need to read the text",
          "It provides quotations to use",
          "It shows how long the text is",
        ],
        accept: [
          "It helps explain the ideas the writer was responding to",
        ],
        answer: "Context should be woven into analysis, not bolted on as a separate paragraph of history.",
      },
      {
        question: "Which is the best use of context in an essay?",
        choices: [
          "Linking a writer's choice to the ideas of their time",
          "Listing dates at the start",
          "Describing the writer's whole life",
          "Explaining the exam board's syllabus",
        ],
        accept: [
          "Linking a writer's choice to the ideas of their time",
        ],
        answer: "One well-placed sentence connecting a moment in the text to its period beats a paragraph of biography.",
      },
      {
        question: "A THEME is best described as:",
        choices: [
          "An idea explored throughout a text",
          "A single event in the plot",
          "A character's name",
          "The setting of a scene",
        ],
        accept: [
          "An idea explored throughout a text",
        ],
        answer: "Power, love, guilt, class and identity are common ones. Trace how a theme DEVELOPS rather than just spotting it.",
      },
      {
        question: "Writing about a writer's intentions means considering:",
        choices: [
          "What they wanted readers to think or feel",
          "How long the book took to write",
          "How many copies it sold",
          "Which edition you read",
        ],
        accept: [
          "What they wanted readers to think or feel",
        ],
        answer: "Phrases like 'the writer challenges the reader to' show you are treating the text as a crafted argument.",
      },
      {
        question: "Which approach shows the strongest understanding of a text as a whole?",
        choices: [
          "Tracing how an idea changes from beginning to end",
          "Analysing one quotation in isolation",
          "Summarising every chapter",
          "Listing the characters",
        ],
        accept: [
          "Tracing how an idea changes from beginning to end",
        ],
        answer: "Whole-text questions reward a sense of development. Picking one moment cannot demonstrate that.",
      },
    ],

    misconceptions: [
      { wrong: "\"Context means writing a paragraph about history at the start.\"",
        right: "That is bolted-on context and scores very little. Context earns marks when it explains why a writer made a particular choice, woven into the analysis." },
      { wrong: "\"A theme is just what the text is about.\"",
        right: "That is the topic. A theme is what the text ARGUES about that topic — a claim someone could disagree with." },
      { wrong: "\"The more historical facts, the better the AO3 mark.\"",
        right: "Precision beats quantity. One fact that explains a specific word or scene outperforms a paragraph of general background every time." },
      { wrong: "\"Characters make their own decisions.\"",
        right: "Writers make them. Phrasing every point as a choice by the author is the simplest way to move an essay from narration into analysis." },
      { wrong: "\"Only the extract in front of me matters.\"",
        right: "Where the question allows it, examiners look for knowledge of the whole text. Quotations from across the text demonstrate range that an extract-only answer cannot." },
      { wrong: "\"Biographical facts about the writer always count as context.\"",
        right: "Only where they genuinely bear on the writing. A fact about the author's childhood that explains nothing in the text is as bolted-on as a fact about the period." },
    ],
  },
};
