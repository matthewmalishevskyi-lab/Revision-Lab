// How many marks a practice question is worth.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// Matthew: "on the exam style questions, can you please tell how many marks
// you're getting for different questions? Because for now it's the same...
// according to the actual AQA marking thing."
//
// He is right that it was the same: every question counted as exactly one,
// so a one-word recall and a six-mark "evaluate" were worth the same in a
// test score. Real papers do not work like that, and a student who has only
// ever practised against a flat score has no feel for how much to write.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THERE IS NO "ACTUAL AQA MARKING THING" TO COPY FROM, AND THAT MATTERS
//
// The obvious implementation is a lookup table: State = 1, Explain = 3,
// Evaluate = 6. That table does not exist. AQA publishes typical tariffs per
// command word and then disclaims them in the same document:
//
//   "We'll use the appropriate command word for the question, so this list
//    isn't exhaustive. Any command word can be used for any mark and any AO."
//        — AQA, Get to grips with GCSE Geography command words
//
// In that same official table "Suggest" appears against 1, 2, 4, 6 AND 9
// marks. So a command word tells you what KIND of answer is wanted, not how
// much it is worth.
//
// What IS real, consistent and quotable is the principle underneath:
//
//   Low tariffs are point-marked — one mark per creditable point or per
//   required step of a calculation. High tariffs are levels-marked, where the
//   number signals expected depth rather than a count of points.
//
// AQA draws that line explicitly for Geography ("low tariff, point marked
// questions (1-3 marks) and high tariff, levels marked questions (4-9
// marks)") and for Science (extended response is the 4-6 band). Their mark
// schemes say the same operationally: "Name two magnetic materials [2 marks]"
// is one mark per material; "marks should be awarded for each stage of the
// calculation completed correctly".
//
// So this file applies THE PRINCIPLE, not a table it pretends to have found.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE GAPS IN EACH SUBJECT'S TARIFF SET ARE AS IMPORTANT AS THE VALUES
//
// Every subject uses its own set, and the missing numbers are conspicuous to
// anyone who teaches it. There is no 6-mark question on a GCSE Maths paper —
// the ceiling is 5, across sixteen papers checked. There is no 3-mark
// Business question. Geography skips 5, 7 and 8. Marking a Maths question
// "6 marks" would be wrong in a way a teacher spots instantly, so a derived
// value is always snapped onto the subject's real set.
//
// Sourced from AQA's own specifications, question papers and mark schemes
// (June 2022 and June 2023, both tiers where tiered), not from memory.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY DERIVED RATHER THAN WRITTEN INTO THE CONTENT
//
// 5,745 practice questions. Writing a number onto each one means 5,745 chances
// to be inconsistent, no way to see the reasoning, and no way to change your
// mind. Deriving it puts the whole rule in one readable place that can be
// argued with and tested — the same choice this codebase already makes for
// badges, XP, streaks and the teacher-tools library.
//
// A question that genuinely needs a different number can still say so:
// `marks` on the question itself always wins. Nothing here overrides an
// author who has looked at a real mark scheme.

/** A practice question, as far as marking is concerned. */
export type MarkableQuestion = {
  question: string;
  answer?: string;
  accept?: string[];
  choices?: string[];
  /** An explicit tariff always beats the derived one. */
  marks?: number;
};

/**
 * The tariffs that actually appear on each subject's papers.
 *
 * Read off real AQA papers. Where a number is absent from a list, it is
 * absent from the paper — Maths stops at 5, Business has no 3, Geography
 * skips 5, 7 and 8, PE skips 7 and 8.
 */
const TARIFFS: Record<string, readonly number[]> = {
  // AQA 8300. Checked across 16 papers, 2019/2022/2023, both tiers: the
  // highest tariff on any question is 5, and 5s are about 1% of questions.
  maths: [1, 2, 3, 4, 5],

  // AQA 8461/8462/8463. Extended response is the 4-6 band, levels-marked.
  biology: [1, 2, 3, 4, 5, 6],
  chemistry: [1, 2, 3, 4, 5, 6],
  physics: [1, 2, 3, 4, 5, 6],

  // AQA 8525. Paper 1's big tariffs are "write a program" questions, which
  // this site does not set; Paper 2's 9 is a levels-marked "Discuss".
  "computer-science": [1, 2, 3, 4, 5, 6, 9],

  // AQA 8035. No 5, 7 or 8 anywhere.
  geography: [1, 2, 3, 4, 6, 9],

  // AQA 8132. No 3, no 7, no 8.
  business: [1, 2, 4, 5, 6, 9, 12],

  // AQA 8062. A genuinely fixed structure: every question is 1 + 2 + 4 + 5 + 12.
  // ⚠️ AQA's own HTML scheme-of-assessment page says "1, 1, 4, 6 and 12" and
  // is WRONG; the specification PDF and the real 2022 and 2023 papers all say
  // 1, 2, 4, 5, 12.
  "religious-education": [1, 2, 4, 5, 12],

  // AQA 8100.
  citizenship: [1, 2, 4, 6, 8, 12],

  // AQA 8582. No 7 or 8; the 9 is one levels-marked question per paper.
  "physical-education": [1, 2, 3, 4, 5, 6, 9],

  // AQA 8145. Every question is levels-marked and the real set is 4, 8, 12,
  // 16 — there is no such thing as a 1-mark History question.
  history: [1, 2, 4, 8, 12],

  // AQA 8700/8702. The real papers start at 4 and run to 40, and every tariff
  // above 8 needs an attached source, extract or unseen poem.
  english: [1, 2, 4, 8, 12],

  // AQA 8692/8652/8662, 2024 spec. Reading and listening are 1s and 2s
  // throughout; the bigger numbers belong to extended writing tasks.
  spanish: [1, 2, 5, 10],
  french: [1, 2, 5, 10],
  german: [1, 2, 5, 10],
};

/**
 * ⚠️ HISTORY AND ENGLISH HAVE NO SMALL TARIFF, AND THIS SITE ASKS SMALL
 * QUESTIONS.
 *
 * On a real History paper the smallest question is 4 marks, because every one
 * of them is a levels-marked extended answer. English Language starts at 4
 * too. But "Who became Chancellor of Germany in 1933?" is a one-word recall
 * drill, and calling it a 4-mark question would teach a student to write four
 * marks' worth of prose for a name.
 *
 * So those two subjects keep 1 and 2 in their sets above for recall drills,
 * and the honest position is stated rather than hidden: below 4, these are
 * PRACTICE tariffs following the one-mark-per-point principle, not tariffs
 * you will meet on the paper. Anything from 4 upwards is a real one.
 */
export const NO_SMALL_TARIFF = new Set(["history", "english"]);

/** Everything else — a subject with no entry gets the ordinary short range. */
const DEFAULT_TARIFFS: readonly number[] = [1, 2, 3, 4, 5, 6];

/**
 * ⚠️ THE SAME COMMAND WORD IS WORTH WILDLY DIFFERENT AMOUNTS IN DIFFERENT
 * SUBJECTS, AND IGNORING THAT WAS THIS FILE'S WORST BUG.
 *
 * "Explain why dividing an inequality by a negative number reverses the sign"
 * was coming out at 5 marks, because the derivation read the command word,
 * saw a four-sentence model answer, and reached for the top of the range. On
 * a real Maths paper that is a ONE mark question — the "give a reason" mark
 * next to the working. Five is also the rarest tariff Maths uses at all, so
 * the site was printing its least likely number on its commonest kind of
 * written question.
 *
 * The distinction that fixes it is one every teacher makes without thinking:
 *
 *   WRITTEN_CEILING — the most a subject ever pays for prose alone. Maths and
 *   the languages pay almost nothing: a sentence of reasoning is worth a mark
 *   or two beside the working, and anything worth more is a calculation, not
 *   an essay. The essay subjects pay properly for it.
 *
 *   LEVELS_CEILING — the subject's one big levels-marked question, the
 *   "evaluate" or "to what extent" at the end of the paper. Business and RE
 *   finish on 12; Geography, PE and Computer Science on 9; the sciences never
 *   go past their 6-mark extended response; Maths has no such question at all.
 *
 * Both are read off the same papers as TARIFFS above.
 */
const WRITTEN_CEILING: Record<string, number> = {
  maths: 2,
  spanish: 2,
  french: 2,
  german: 2,
  biology: 4,
  chemistry: 4,
  physics: 4,
  "computer-science": 4,
  geography: 4,
  business: 4,
  "religious-education": 4,
  citizenship: 4,
  "physical-education": 4,
  history: 4,
  english: 4,
};

const LEVELS_CEILING: Record<string, number> = {
  maths: 3,
  biology: 6,
  chemistry: 6,
  physics: 6,
  "computer-science": 9,
  geography: 9,
  business: 9,
  "physical-education": 9,
  spanish: 10,
  french: 10,
  german: 10,
  "religious-education": 12,
  citizenship: 12,
  history: 12,
  english: 12,
};

/**
 * The same table, exported for `scripts/check-content.mjs` to assert against.
 *
 * Exported rather than duplicated in the checker on purpose, and it is the
 * opposite call from the one that file makes about `normalise` — there, the
 * checker deliberately keeps its OWN copy of the marking rule, so that the two
 * disagreeing is itself the finding. Here there is nothing to disagree about:
 * a subject's tariff set is a fact read off its papers, not a judgement, and a
 * second hand-typed copy of it could only ever go stale.
 */
export const TARIFFS_FOR_CHECKING: Record<string, readonly number[]> = TARIFFS;

const DEFAULT_WRITTEN_CEILING = 4;
const DEFAULT_LEVELS_CEILING = 6;

/**
 * Command words, grouped by how much work the answer actually takes.
 *
 * Not a claim about AQA policy — see the header. This is the point principle
 * applied to the wording: "name two things" wants two points, "evaluate"
 * wants a judgement built from several.
 */
const RECALL = /^(state|name|give|identify|define|list|label|write down|what|which|who|when|where|how many|how much|true or false|complete|fill in|choose|circle|translate|say)\b/i;
const SHORT = /^(describe|outline|suggest|summarise|calculate|work out|find|solve|convert|show that|draw|plot|estimate|expand|factorise|simplify|round)\b/i;
const EXPLAIN = /^(explain|why|how does|how do|how is|how are|account for|justify)\b/i;
// ⚠️ "How far do you agree" is not optional here. It is the standard stem of
// AQA History's biggest question, and leaving it out marked four 16-mark
// essays as 2. It is listed as a phrase rather than trusted to "how", because
// "how does a catalyst work" is a different question entirely.
const EXTENDED = /^(evaluate|discuss|assess|analyse|compare|contrast|to what extent|how far|examine|recommend|consider)\b/i;

/** "Give two reasons", "name three" — the number IS the mark count. */
const COUNTED = /\b(two|three|four|2|3|4)\b\s+(\w+\s+){0,2}(reasons?|ways?|examples?|features?|factors?|causes?|effects?|advantages?|disadvantages?|benefits?|drawbacks?|methods?|types?|uses?|properties|differences?|similarities)/i;

const NUMBER_WORD: Record<string, number> = { two: 2, three: 3, four: 4, "2": 2, "3": 3, "4": 4 };

/**
 * ⚠️ THE COMMAND WORD IS NOT ALWAYS THE FIRST WORD, AND ASSUMING IT WAS COST
 * BUSINESS ITS ENTIRE TOP BAND.
 *
 * Every one of these patterns used to be anchored with `^`, so they only ever
 * looked at the first word of the stem. Real exam questions — and this site's,
 * which are written to look like them — put the context first and the
 * instruction after it:
 *
 *   "A café owner wants both to open three new branches next year and to
 *    maximise profit next year. Evaluate whether both aims can be met."
 *
 * That is a levels-marked question worth 9 or 12 on an AQA Business paper. It
 * was being read as no command word at all and marked 2. Twenty-three of the
 * subject's biggest questions were sitting in its smallest band.
 *
 * So the command word is looked for at the start of ANY SENTENCE in the stem,
 * not just the first. Sentence-initial rather than anywhere, deliberately: a
 * question can mention "evaluate" mid-clause while asking for something quite
 * different ("state which expression you would evaluate first"), and matching
 * loose words inside a sentence would promote those too.
 */
function startsSentenceWith(stem: string, pattern: RegExp): boolean {
  return stem
    // ⚠️ The closing-quote allowance is not a nicety. Nineteen RE questions
    // read  'Salah is the most important of the Five Pillars.' Evaluate this
    // statement.  — a full stop, then a closing quote, then the command word.
    // Splitting on a terminator followed directly by whitespace never saw the
    // break, so every one of AQA RE's 12-mark questions was being read as
    // having no command word at all and marked 2.
    .split(/(?<=[.!?;:]['")\]”’]?)\s+/)
    .some((sentence) => pattern.test(sentence.trim()));
}

/**
 * How many separate points the model answer actually makes.
 *
 * ⚠️ ONLY MEANINGFUL FOR THE EXTENDED QUESTIONS. On this site an `answer` is
 * "the answer, then why it matters" — "In the gall bladder, before being
 * released into the small intestine. Made in the liver, stored in the gall
 * bladder: the two verbs are what the question is testing." That second
 * sentence is teaching, not a second creditable point, and counting it marked
 * one-word recall questions as 2. So sentence-counting is used only where the
 * whole answer IS the response: the self-marked ones.
 */
function pointsInAnswer(answer: string | undefined): number {
  if (!answer) return 1;
  const sentences = answer
    .split(/(?<=[.!?])\s+|;\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 12);
  return Math.max(1, sentences.length);
}

/** A question whose answer is worked out rather than recalled. */
const CALCULATION = /^(calculate|work out|find|solve|evaluate the|how much|how many|convert|round|expand|factorise|simplify|estimate|increase|decrease)\b/i;

/**
 * How many operations the working actually contains.
 *
 * AQA marks a calculation one mark per completed stage — "marks should be
 * awarded for each stage of the calculation completed correctly" — so the
 * arithmetic in the model answer is the closest thing to a real mark scheme
 * this content has. "Length scale factor 4, so area scale factor 16, and
 * 15 × 16 = 240" is visibly three stages; "60 ÷ 40 = 1.5" is one.
 */
function operationsIn(answer: string | undefined): number {
  if (!answer) return 0;
  return (answer.match(/[×÷+=−]/g) ?? []).length;
}

/** The nearest tariff a subject actually uses, never above `ceiling`. */
function snap(raw: number, subject: string, ceiling: number): number {
  const allowed = (TARIFFS[subject] ?? DEFAULT_TARIFFS).filter((t) => t <= ceiling);
  if (allowed.length === 0) return 1;
  let best = allowed[0];
  for (const t of allowed) {
    if (Math.abs(t - raw) < Math.abs(best - raw)) best = t;
    // A tie goes DOWN, not up. Over-marking teaches a student to write more
    // than the question wants, which is how people run out of time.
    else if (Math.abs(t - raw) === Math.abs(best - raw) && t < best) best = t;
  }
  return best;
}

/**
 * What this question is worth.
 *
 * `subject` is the subject slug — "maths", "religious-education".
 */
export function marksFor(subject: string, q: MarkableQuestion): number {
  // An author who has read a real mark scheme always wins.
  if (typeof q.marks === "number" && q.marks > 0) return Math.round(q.marks);

  // So does a question that states its own tariff. Citizenship's exam-practice
  // topic quotes real questions back at the student —
  //   "A question says: 'Evaluate the view that young people should be given
  //    the vote at 16. (12 marks)'. Write a full answer."
  // — and printing "[2 marks]" beside a question whose own text says 12 is the
  // worst version of getting this wrong: the page contradicts itself in one
  // line. Reading the number out of the stem costs nothing and cannot be
  // wrong, because the author put it there deliberately.
  const stated = q.question.match(/\((\d{1,2})\s*marks?\)/i);
  if (stated) return Number(stated[1]);

  // ⚠️ A single-answer multiple choice is 1 mark in every AQA subject that
  // uses them — "tick one box", "shade one circle", "shade one lozenge".
  // Checked across every subject that sets them, with no exception found.
  // (Multi-select pays a mark per selection, but this site sets none.)
  if (q.choices && q.choices.length > 0) return 1;

  const stem = q.question.trim();

  // "Give two reasons" is two marks, by the count in the question itself.
  // This beats the command word, because "give" alone would say one.
  const counted = stem.match(COUNTED);
  if (counted) {
    const n = NUMBER_WORD[counted[1].toLowerCase()] ?? 2;
    return snap(n, subject, 6);
  }

  // Self-marked questions are the extended ones: there is no `accept` list
  // precisely because no string comparison can mark them.
  const extended = !q.accept;

  // ── AUTO-MARKED: one right answer, so one mark — unless it is worked out ──
  //
  // ⚠️ THIS IS THE RULE THAT MATTERS MOST, and the first version got it wrong
  // in both directions. A question with an `accept` list has, by construction,
  // one correct response a string comparison can recognise. On a real paper
  // that is a 1-mark question. The exception is a CALCULATION, which AQA marks
  // per completed stage — method marks and an accuracy mark — so
  // "Two similar rectangles... find the area of the larger" is three marks
  // and was being given one.
  if (!extended) {
    // AQA's 2024 MFL specs mark translation at 2 marks per sentence, in both
    // directions, on both tiers.
    if (startsSentenceWith(stem, /^translate\b/i) && TARIFFS[subject]?.includes(2)) return 2;

    // A calculation is either asked for by the command word, or betrayed by a
    // numeric answer that shows working. "What is 9⁰?" has a numeric answer
    // and NO working, and is genuinely a 1-mark recall of an index law;
    // "Find the area of a parallelogram with base 12 and height 7" answers
    // "84 cm². Base × perpendicular height", and that × is the method mark.
    const ops = operationsIn(q.answer);
    const numeric = (q.accept ?? []).some((a) => /^[£$]?-?[\d.,]+/.test(a.trim()));

    // ⚠️ A RECALL COMMAND WORD BEATS THE OPERATOR COUNT, AND LEAVING IT OUT
    // GAVE TWO NEARLY IDENTICAL QUESTIONS DIFFERENT TARIFFS.
    //
    //   "...What is the top component of a + b?"     [2 marks]
    //   "...What is the bottom component of a + b?"  [3 marks]
    //
    // Both are one number read off a sum. They differed only because the
    // second one's model answer happens to show its arithmetic — "2, because
    // 4 + (−2) = 2" has three operators in it, the first has one — and the
    // operator count was allowed to decide whether the question was a
    // calculation at all. Two questions a student can see are the same size,
    // printed with different numbers beside them, is the exact thing that
    // makes a mark look made up.
    //
    // So the command word decides the KIND of question and the operator count
    // only ever sizes one it has already agreed is a calculation. "Calculate",
    // "work out", "solve" say plainly that working is wanted; "what is" and
    // "state" ask for the answer. The two lists overlap on "how many" / "how
    // much", which genuinely go both ways, so an explicit calculation word is
    // checked first and wins.
    const asksForWorking = startsSentenceWith(stem, CALCULATION);
    const asksToRecall = !asksForWorking && startsSentenceWith(stem, RECALL);
    if (asksForWorking || (!asksToRecall && numeric && ops >= 1)) {
      // ⚠️ BANDED DELIBERATELY COARSELY, AND CAPPED AT 3.
      // The `answer` is prose, not a mark scheme, so the operator count is a
      // proxy and an imperfect one: "Multiply the fronts (2 × 3 = 6) and add
      // the powers (5 + 4 = 9)" contains five operators for what AQA marks as
      // 2. Three bands keep the error inside about one mark either way, which
      // is the honest limit of what can be read off an explanation. A question
      // that deserves better can carry an explicit `marks`.
      return snap(ops >= 3 ? 3 : ops >= 1 ? 2 : 1, subject, 5);
    }

    // Everything else with one recognisable right answer.
    return snap(1, subject, 2);
  }

  // ── SELF-MARKED: the extended ones, where depth is the whole point ────────
  //
  // ⚠️ THE COMMAND WORD PICKS THE BAND; THE SUBJECT PICKS THE CEILING. Neither
  // alone is enough, and using only the first is what produced 5-mark Maths
  // "explain" questions — see WRITTEN_CEILING above.
  //
  // The bands themselves are the point principle applied to what the wording
  // asks for: a levels-marked judgement, a point developed and linked, a
  // description, a fact. The model answer's length nudges one mark either way
  // inside a band and is never allowed to choose the band, because on this
  // site an `answer` is prose written to teach, and longer prose does not mean
  // a bigger question.
  const points = pointsInAnswer(q.answer);
  const developed = points >= 3 ? 1 : 0;

  if (startsSentenceWith(stem, EXTENDED)) {
    // The subject's one big levels-marked question. Its size is a fact about
    // the paper, not about this particular wording, so the ceiling IS the
    // answer rather than a cap on one.
    return snap(
      LEVELS_CEILING[subject] ?? DEFAULT_LEVELS_CEILING,
      subject,
      LEVELS_CEILING[subject] ?? DEFAULT_LEVELS_CEILING,
    );
  }

  const written = WRITTEN_CEILING[subject] ?? DEFAULT_WRITTEN_CEILING;
  let raw: number;
  if (startsSentenceWith(stem, EXPLAIN)) raw = 3 + developed;      // a point, developed, linked
  else if (startsSentenceWith(stem, SHORT)) raw = 2 + developed;   // describe / outline / suggest
  else if (startsSentenceWith(stem, RECALL)) raw = 1 + developed;  // a fact, self-marked
  else raw = 2 + developed;

  return snap(raw, subject, written);
}

/** The tariff total for a set of questions — a paper's "out of". */
export function totalMarks(subject: string, questions: readonly MarkableQuestion[]): number {
  return questions.reduce((sum, q) => sum + marksFor(subject, q), 0);
}
