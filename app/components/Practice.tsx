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

type Question = {
  question: string;
  accept?: string[];
  answer: string;
  higherOnly?: boolean;
};

// Makes typed answers forgiving without making them wrong.
//
// Removed: capitals, spaces, commas, hyphens and a trailing full stop. So
// "1.44 MB", "1.44mb" and "1.44 mb." all match, and "run-length encoding"
// matches "run length encoding" — because none of those differences is what
// the question is testing.
//
// NOT removed: leading zeros. "1011100" stays different from "01011100",
// because a missing leading zero on an 8-bit answer genuinely IS wrong and
// examiners mark it as such. Being forgiving about typing is good; being
// forgiving about the actual answer would teach the wrong thing.
function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s,\-–—]/g, "")
    .replace(/[.!?]+$/, "");
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
}: {
  questions: Question[];
  colour: string;
}) {
  const [states, setStates] = useState<Record<number, QuestionState>>({});

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
        Write your answer before checking. Deciding you knew it after seeing the
        answer is the most common way to waste revision time.
      </p>
    </div>
  );
}
