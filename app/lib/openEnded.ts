// Which practice questions have an answer space too wide to machine-mark?
//
// ─────────────────────────────────────────────────────────────────────────────
// THE BUG THIS EXISTS FOR
//
// Matthew, testing the Spanish greetings topic:
//
//     Q: Give one situation where you would use usted instead of tú.
//     accept: ["with a teacher", "talking to a teacher", "with an adult
//              stranger", "with a stranger", "talking to an adult you don't
//              know"]
//
// He typed "teacher". The site marked it WRONG.
//
// "teacher" is a perfect answer. So is "my head of year", "the man in the
// post office", "someone's grandmother", "a police officer" and a few hundred
// other things. The question says "give ONE situation" — it is PROMISING the
// student that many answers are right — and then marks against a list of five
// specific phrasings. No accept list can ever be finished, because the set it
// is trying to enumerate is open.
//
// Measured across the site when this was written: 252 typed auto-marked
// questions ask something open-ended like this. Every one of them can tell a
// student who knows the material perfectly well that they are wrong, which is
// the single worst thing a revision site can do.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY DERIVED RATHER THAN A FLAG ON 252 QUESTIONS
//
// The same argument teacher-tools.ts makes about which topics have diagrams,
// and marks.ts about mark tariffs: a hand-written list is wrong the moment
// somebody writes question 253 and forgets it, and nothing says so. The stem
// already contains the evidence — a question that says "give one" is telling
// us what it is. There is still an explicit `openEnded` escape hatch on the
// question for the cases this reads wrongly.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ WHICH WAY TO BE WRONG, AND WHY THAT MAKES THIS EASY
//
// The two mistakes are not symmetrical, and noticing that is what stopped this
// turning into a fiddly exercise in perfect pattern-matching:
//
//   - call a CLOSED question open  → the student self-marks something the site
//                                    could have marked. They lose a tick.
//   - call an OPEN question closed → the student is told a right answer is
//                                    wrong. They lose trust, and possibly the
//                                    belief that they knew it.
//
// The second is far worse, so this deliberately OVER-matches. When a pattern is
// arguable, it is included. The only exclusions below are cases where the words
// "give one" are not asking for one of many at all.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Words that can follow "give two…" without the question being open-ended.
 * These are instructions about the FORMAT of a single answer, not requests for
 * one of several — "Give three figures" on a bearing question has exactly one
 * right answer, and auto-marking it is worth keeping.
 */
const FORMAT_WORD =
  /^(figures?|decimal|decimals|significant|answer|answers|simplified|fraction|percentage|ratio|exact|estimate)\b/i;

/**
 * ⚠️ A COMMAND WORD HAS TO START A SENTENCE, and this is the second time this
 * codebase has had to learn it — marks.ts hit exactly the same thing when it
 * read tariffs off command words.
 *
 * The first version of the patterns below looked for "give", "state" and
 * "describe" anywhere in the stem, and immediately mis-read three perfectly
 * closed questions, because those words are ordinary English as well as exam
 * instructions:
 *
 *     "Does 1/3 give a terminating or a recurring decimal?"   give = the verb
 *     "Is a change of state a physical or a chemical change?"  state = a noun
 *     "…should you give when asked to 'describe the single transformation'?"
 *
 * All three have one right answer and deserve to keep their marking.
 *
 * A comma counts as well as a full stop, because the real exam phrasing often
 * puts the context first — "Under data protection law, name one right an
 * individual has" is a command, and is genuinely open-ended.
 */
const SENTENCE_START = String.raw`(?:^|[.!?\n]\s*|,\s*)`;

const OPEN_PATTERNS: RegExp[] = [
  // "Give one reason", "Name two things", "State an advantage", "Suggest a way"
  new RegExp(
    SENTENCE_START + String.raw`(give|name|state|suggest|identify|list)\s+(one|two|three|four|a|an|another|some|any)\s+(?<rest>\S+)`,
    "i",
  ),
  // "In your own words" says outright that any phrasing counts, wherever it sits
  /\bin your own words\b/i,
  // A description or an explanation is prose, and prose has no accept list
  new RegExp(SENTENCE_START + String.raw`describe\b`, "i"),
  new RegExp(SENTENCE_START + String.raw`explain\s+(why|how|what|the|one|two)\b`, "i"),
  /\bwhy might\b/i,
  /\bwhat might\b/i,
  // "one benefit of…", "two drawbacks of…" without a leading command word
  /\b(one|two|three)\s+(example|reason|way|situation|advantage|disadvantage|benefit|drawback|use|feature|problem|risk|cause|effect|method|strategy|factor|limitation|impact|consequence)s?\b/i,
  // Free writing: there is no single right answer and the model answer says so
  new RegExp(
    SENTENCE_START + String.raw`write\s+(a|an|one|two|three)\s+(short|brief|full|sentence|paragraph|introduction|description|account)`,
    "i",
  ),
];

/**
 * Does this question's wording promise the student that more than one answer
 * is right (or ask for prose), so that no accept list could ever be complete?
 */
export function isOpenEnded(question: {
  question: string;
  accept?: readonly string[];
  choices?: readonly string[];
  openEnded?: boolean;
}): boolean {
  // An explicit flag always wins — see the escape-hatch note above.
  if (typeof question.openEnded === "boolean") return question.openEnded;

  // ⚠️ Multiple choice is never open-ended, whatever the stem says. "Give one
  // reason" followed by four buttons has exactly one right button: the answer
  // space IS the list, so there is nothing an accept list could fail to
  // enumerate. Without this line every open-worded MCQ on the site would lose
  // its marking for no reason at all.
  if (question.choices?.length) return false;

  // Nothing to take away from a question that was never auto-marked.
  if (!question.accept?.length) return false;

  for (const pattern of OPEN_PATTERNS) {
    const match = pattern.exec(question.question);
    if (!match) continue;
    const rest = match.groups?.rest;
    if (rest && FORMAT_WORD.test(rest)) continue;
    return true;
  }
  return false;
}
