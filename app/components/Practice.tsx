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

type Question = {
  question: string;
  accept?: string[];
  answer: string;
  higherOnly?: boolean;
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
function normalise(text: string): string {
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
  if (questions !== previousQuestions) {
    setPreviousQuestions(questions);
    setStates({});
    // A different topic's questions: start recording again.
    setRecorded(new Set());
  }

  const stateFor = (index: number) => states[index] ?? EMPTY;

  function update(index: number, changes: Partial<QuestionState>) {
    setStates((current) => ({
      ...current,
      [index]: { ...(current[index] ?? EMPTY), ...changes },
    }));
  }

  function check(index: number, question: Question) {
    const typed = stateFor(index).input;
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
                          ✗ Not quite — try again, or reveal the answer
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
