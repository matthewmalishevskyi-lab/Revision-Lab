"use client";

// Practice questions you actually answer.
//
// Type an answer, press Check, and the site marks it. That's the whole point:
// your own Revision & exam practice content says retrieval practice — trying to
// recall something and finding out whether you were right — beats rereading,
// which mostly builds false confidence. An answer sitting on screen destroys
// that, because your eye reads it before your brain attempts it.
//
// ─────────────────────────────────────────────────────────────────────────────
// TWO KINDS OF QUESTION, AND WHY
//
// Some answers a computer can mark: "75", "01011100", "DE". Those are exact.
//
// Some it genuinely cannot: "explain why hexadecimal is used". There are
// thousands of correct wordings, and comparing strings would mark good answers
// wrong while rewarding students for guessing magic words — the opposite of
// what revision should do.
//
// So questions WITH an `accept` list get auto-marked, and questions without it
// get self-marked: the model answer appears and the student judges honestly.
// Recognising which problems shouldn't be automated is a real engineering
// skill, not a cop-out.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { HigherBadge } from "./HigherBadge";
import { recordAnswer } from "../lib/progress-actions";
import { shuffle } from "../lib/shuffle";

type Question = {
  question: string;
  accept?: string[];
  answer: string;
  higherOnly?: boolean;
  // ── MULTIPLE CHOICE ───────────────────────────────────────────────────────
  // Present `choices` and the question renders as buttons instead of a text
  // box. There is deliberately NO separate "correctIndex" field: the right
  // answer is whichever choice appears in `accept`, so multiple choice reuses
  // the marking code that already exists rather than introducing a second,
  // subtly different way of being right. A duplicated marking path is how a
  // site ends up marking the same answer correct in one place and wrong in
  // another. The checker verifies that exactly one choice matches `accept`.
  choices?: string[];
};

// Makes typed answers forgiving without making them wrong.
//
// ─────────────────────────────────────────────────────────────────────────────
// A REAL BUG THIS FUNCTION USED TO HAVE
//
// The first version stripped every hyphen, so that "run-length encoding" would
// match "run length encoding". Sensible-looking, and quietly catastrophic: it
// also stripped the MINUS SIGN. "-3" became "3", so a student answering 3 to a
// question whose answer was -3 was marked CORRECT.
//
// An automated check caught it. The lesson is worth more than the fix: a rule
// that looks harmless in the case you were thinking about ("hyphens are just
// punctuation") can be badly wrong in a case you weren't ("minus is not
// punctuation, it's part of the number"). Test the edges, not the middle.
//
// The fix is to remove a hyphen only when it sits BETWEEN TWO LETTERS, which is
// where word hyphens live. A hyphen next to a digit is a minus sign and stays.
// ─────────────────────────────────────────────────────────────────────────────
//
// Removed: capitals, spaces, commas, word hyphens and a trailing full stop. So
// "1.44 MB", "1.44mb" and "1.44 mb." all match, and "run-length encoding"
// matches "run length encoding".
//
// ─────────────────────────────────────────────────────────────────────────────
// SYMBOLS THAT DECORATE A NUMBER WITHOUT CHANGING IT
//
// A second bug, found the same way as the first. Asked "the bearing of A from
// B?", a student who typed 230° was marked WRONG, because the accepted answer
// was "230" and the degree sign made the strings differ. Same for 20% and £50.
//
// The fix is to drop a trailing ° or % and a leading currency symbol, because
// none of them change the VALUE — 230 and 230° are the same answer written two
// ways. The alternative was adding every variant to hundreds of accept lists
// by hand, which would work until the first one anybody forgot.
//
// Note this cannot wrongly accept a percentage where a decimal was asked for:
// "write 45% as a decimal" wants 0.45, and a student typing 45% still produces
// "45", which still does not match. The symbol is stripped; the value is not.
// ─────────────────────────────────────────────────────────────────────────────
//
// NOT removed: minus signs, and leading zeros. "1011100" stays different from
// "01011100", because a missing leading zero on an 8-bit answer genuinely IS
// wrong and examiners mark it as such. Forgiving about typing, strict about the
// answer.
// Exported so MockExam.tsx can mark answers exactly the same way. Two
// slightly different copies of "how forgiving is marking" is how a site ends
// up marking the same typed answer correct in one place and wrong in
// another — the same reasoning that keeps multiple choice reusing this
// instead of getting its own comparison.
export function normalise(text: string): string {
  return text
    .toLowerCase()
    // Unify the various dash characters people and word processors produce.
    .replace(/[–—−]/g, "-")
    // Drop hyphens only where a letter sits on each side.
    .replace(/(?<=[a-z])-(?=[a-z])/g, "")
    .replace(/[\s,]/g, "")
    // A currency symbol in front of a number decorates it; £50 is 50.
    .replace(/^[£$€]/, "")
    // Trailing degree signs, percent signs and sentence punctuation, in any
    // combination — "230°." and "20%" both reduce to the bare value.
    .replace(/[°%.!?]+$/, "");
}

type Status = "unanswered" | "correct" | "incorrect" | "selfMarked";

type QuestionState = {
  input: string;
  status: Status;
  revealed: boolean;
};

const EMPTY: QuestionState = { input: "", status: "unanswered", revealed: false };

// ─────────────────────────────────────────────────────────────────────────────
// WHY MULTIPLE CHOICE OPTIONS ARE SHUFFLED HERE RATHER THAN TRUSTED AS WRITTEN
//
// A REAL BUG THIS FUNCTION USED TO HAVE: content is written with the correct
// choice listed FIRST, because that's the natural order to write it in — you
// think of the right answer, then think of three wrong ones to go with it.
// Nothing ever reordered them before showing them on screen, so on the huge
// majority of multiple-choice questions across the whole site, the correct
// answer sat in position A every single time. Spotted by Matthew after a
// mock exam where every question he could answer by picking "A" — a student
// could pass without knowing a single fact, which defeats the entire point
// of a revision site.
//
// The fix shuffles the DISPLAY ORDER only, once per question, not the data
// itself — `accept` still lists the right answer by its TEXT, not by
// position, so marking needs no changes at all; see the comment on
// `Question.choices` above for why there's no separate "correct index" to
// keep in sync in the first place.
// ─────────────────────────────────────────────────────────────────────────────
function shuffledChoicesFor(questions: Question[]): (string[] | undefined)[] {
  return questions.map((q) => (q.choices ? shuffle(q.choices) : undefined));
}

export function Practice({
  questions,
  colour,
  subject,
  topic,
}: {
  questions: Question[];
  colour: string;
  // Which topic these questions belong to, so an answer can be recorded
  // against it. Passed in rather than worked out here, because a component
  // that has to guess where it is being used is a component that will
  // eventually guess wrong.
  subject: string;
  topic: string;
}) {
  const [states, setStates] = useState<Record<number, QuestionState>>({});

  // ───────────────────────────────────────────────────────────────────────────
  // WHY THIS RESET EXISTS
  //
  // React reuses a component when it appears in the same place in the tree with
  // the same type. Navigating from one topic page to another does exactly that,
  // so this component is NOT recreated — and the state survives.
  //
  // Without the reset below, a student who answered eight questions on Binary &
  // data and then clicked through to Algorithms would find those answers and
  // ticks still sitting against the new, completely different questions. They
  // are stored by position, and position 3 exists on both pages.
  //
  // This is React's documented pattern for adjusting state when a prop changes:
  // compare with the previous value during render and reset. It happens before
  // anything is painted, so there is no flicker.
  // ───────────────────────────────────────────────────────────────────────────
  // Which questions have already had an attempt recorded on this visit.
  const [recorded, setRecorded] = useState<Set<number>>(new Set());

  const [previousQuestions, setPreviousQuestions] = useState(questions);
  // Shuffled ONCE per set of questions, not on every render — otherwise the
  // buttons would reorder themselves under someone's finger while they were
  // still deciding. Reset alongside everything else the moment the topic
  // (and so the actual question list) changes, same as `states`/`recorded`.
  const [shuffledChoices, setShuffledChoices] = useState(() =>
    shuffledChoicesFor(questions),
  );
  if (questions !== previousQuestions) {
    setPreviousQuestions(questions);
    setStates({});
    // A different topic's questions: start recording again.
    setRecorded(new Set());
    setShuffledChoices(shuffledChoicesFor(questions));
  }

  const stateFor = (index: number) => states[index] ?? EMPTY;

  function update(index: number, changes: Partial<QuestionState>) {
    setStates((current) => ({
      ...current,
      [index]: { ...(current[index] ?? EMPTY), ...changes },
    }));
  }

  // `given` lets a click pass its answer straight in. Without it, a choice
  // button would have to setState and then read the state back in the same
  // tick — which React does not do, so the first click always marked the
  // PREVIOUS selection. Passing the value avoids the race entirely.
  function check(index: number, question: Question, given?: string) {
    const typed = given ?? stateFor(index).input;
    if (!typed.trim()) return;

    const isCorrect = (question.accept ?? []).some(
      (valid) => normalise(valid) === normalise(typed),
    );
    update(index, { status: isCorrect ? "correct" : "incorrect", revealed: isCorrect });

    // ─────────────────────────────────────────────────────────────────────────
    // ONLY THE FIRST ATTEMPT AT EACH QUESTION IS RECORDED, and this was a bug
    // before it was a decision.
    //
    // The first version recorded on every press of Check. Press it twice
    // because nothing seemed to happen, or hold Enter for two seconds — key
    // repeat fires it about ten times a second — and ONE answered question
    // became twenty recorded events. Tested: 20 presses produced 20 events,
    // so the page would have reported "Questions answered: 20" and computed
    // accuracy from twenty copies of the same answer.
    //
    // Recording only the first attempt fixes the inflation, and is the better
    // statistic anyway. First-attempt accuracy is what "do I know this?"
    // actually means. If retries counted, anyone could reach 100% by guessing
    // until the tick appeared, which would make the number meaningless — and
    // the whole point of these figures is that they can be trusted.
    //
    // Later attempts still work normally on screen. They just aren't measured.
    // ─────────────────────────────────────────────────────────────────────────
    if (!recorded.has(index)) {
      setRecorded((previous) => new Set(previous).add(index));

      // Not awaited. The tick or cross has already appeared, because `update`
      // ran first. Waiting for a database round trip before showing the result
      // would add a visible delay to every answer for no benefit anyone can
      // see. A failure is silent for the student and logged on the server —
      // losing a statistic is a much smaller problem than an error message
      // interrupting revision.
      //
      // Wrong answers are recorded as well as right ones. Only counting
      // correct answers would make accuracy meaningless.
      void recordAnswer(subject, topic, isCorrect).catch(() => {});
    }
  }

  const markable = questions.filter((q) => q.accept).length;
  const correct = questions.filter(
    (q, i) => q.accept && stateFor(i).status === "correct",
  ).length;
  const attempted = questions.filter(
    (q, i) => q.accept && stateFor(i).status !== "unanswered",
  ).length;

  return (
    <div>
      {/* Score, shown only once something has been attempted — a 0/14 staring
          at you before you start is discouraging and tells you nothing. */}
      {attempted > 0 && (
        <div
          className="mb-4 rounded-2xl px-5 py-3.5 font-medium"
          style={{ backgroundColor: `${colour}14`, color: colour }}
        >
          {correct} out of {markable} correct
          {attempted < markable && ` · ${markable - attempted} still to try`}
        </div>
      )}

      <ol className="space-y-3">
        {questions.map((item, index) => {
          const state = stateFor(index);
          const autoMarked = Boolean(item.accept);
          // The shuffled DISPLAY order — see shuffledChoicesFor's comment.
          // `item.choices` below still guards whether this is a multiple
          // choice question at all; this is only ever read once that's true.
          const choices = shuffledChoices[index];

          return (
            <li
              key={item.question}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: colour }}
                >
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  {item.higherOnly && (
                    <p className="mb-2">
                      <HigherBadge />
                    </p>
                  )}
                  <p className="whitespace-pre-line font-medium leading-relaxed">
                    {item.question}
                  </p>

                  {autoMarked ? (
                    <>
                      {item.choices ? (
                        /* ── Multiple choice ──────────────────────────────
                           Answered state is locked: once you have picked, the
                           buttons stop responding. Re-clicking would let you
                           cycle through options until one turned green, which
                           is not revision, and it would also mean the progress
                           figures counted a guessed answer as knowledge. */
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {choices!.map((option, optionIndex) => {
                            const picked = state.input === option;
                            const answered = state.status !== "unanswered";
                            const isRight = (item.accept ?? []).some(
                              (valid) => normalise(valid) === normalise(option),
                            );
                            // Reveal the right answer once they have committed,
                            // whether they got it or not — being told only
                            // "wrong" teaches nothing.
                            const show = answered && (picked || isRight);
                            return (
                              <button
                                key={option}
                                type="button"
                                disabled={answered}
                                onClick={() => {
                                  update(index, { input: option });
                                  check(index, item, option);
                                }}
                                className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${
                                  show && isRight
                                    ? "border-green-600/60 bg-green-500/15 font-medium"
                                    : show
                                      ? "border-red-600/50 bg-red-500/10"
                                      : answered
                                        ? "border-black/10 opacity-55 dark:border-white/10"
                                        : "border-black/10 hover:border-black/25 hover:bg-black/5 dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-white/10"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-px font-semibold opacity-45"
                                >
                                  {"ABCDEF"[optionIndex]}
                                </span>
                                <span className="min-w-0 flex-1">{option}</span>
                                {show && (
                                  <span aria-hidden="true" className="font-bold">
                                    {isRight ? "\u2713" : "\u2717"}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <input
                          type="text"
                          value={state.input}
                          onChange={(event) =>
                            update(index, {
                              input: event.target.value,
                              status: "unanswered",
                            })
                          }
                          // Enter should submit. Making people reach for the
                          // mouse between every question is the fastest way to
                          // stop them doing all sixteen.
                          onKeyDown={(event) => {
                            if (event.key === "Enter") check(index, item);
                          }}
                          placeholder="Your answer"
                          aria-label={`Answer to question ${index + 1}`}
                          className="w-44 rounded-lg border border-black/10 bg-white/80 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/15 dark:bg-white/5"
                        />
                        <button
                          type="button"
                          onClick={() => check(index, item)}
                          className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                          style={{ backgroundColor: colour }}
                        >
                          Check
                        </button>
                        {!state.revealed && (
                          <button
                            type="button"
                            onClick={() =>
                              update(index, { revealed: true, status: "selfMarked" })
                            }
                            className="rounded-lg border border-black/10 px-3.5 py-2 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                          >
                            Show answer
                          </button>
                        )}
                      </div>
                      )}

                      {/* role="status" makes screen readers announce the result
                          as soon as it appears, rather than leaving blind users
                          with no idea whether they got it right. */}
                      {state.status === "correct" && (
                        <p
                          role="status"
                          className="mt-3 font-semibold text-green-700 dark:text-green-400"
                        >
                          ✓ Correct
                        </p>
                      )}
                      {state.status === "incorrect" && (
                        <p
                          role="status"
                          className="mt-3 font-semibold text-red-700 dark:text-red-400"
                        >
                          {item.choices ? "\u2717 Not quite" : "✗ Not quite — try again, or reveal the answer"}
                        </p>
                      )}
                    </>
                  ) : (
                    // No accept list, so this one can't be machine-marked.
                    !state.revealed && (
                      <button
                        type="button"
                        onClick={() => update(index, { revealed: true })}
                        className="mt-3 rounded-lg border border-black/10 px-3.5 py-2 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                      >
                        Show model answer
                      </button>
                    )
                  )}

                  {state.revealed && (
                    <div
                      className="mt-3 rounded-xl px-4 py-3"
                      style={{ backgroundColor: `${colour}14` }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-50">
                        {autoMarked ? "Answer" : "Model answer — mark your own"}
                      </p>
                      <p className="mt-1 leading-relaxed opacity-85">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 text-sm opacity-50">
        {markable > 0
          ? "Write your answer before checking. Deciding you knew it after seeing the answer is the most common way to waste revision time."
          : "Write your answer out in full before revealing the model answer, then mark yourself honestly against it."}
      </p>
    </div>
  );
}
