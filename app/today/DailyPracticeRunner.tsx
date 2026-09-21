"use client";

// Today's practice, one question at a time.
//
// ⚠️ THIS DOES NOT REIMPLEMENT MARKING, AND THAT WAS THE FIRST TEMPTATION.
// `normalise()` in lib/normalise.ts is the single rule for whether a typed
// answer counts, and this project has already been bitten once by two
// implementations disagreeing — the hyphen-versus-minus-sign bug documented at
// the top of Practice.tsx, where "3" was accepted for an answer of "-3". A
// second copy here would mean a student could be marked right in their daily
// set and wrong on the topic page for the identical answer, which is worse
// than either rule being wrong on its own.

import { useRef, useState } from "react";
import Link from "next/link";
import { normalise } from "../lib/normalise";
import { HigherBadge } from "../components/HigherBadge";
import { MarkTariff } from "../components/MarkTariff";
import { ReportQuestion } from "../components/ReportQuestion";
import { DIFFICULTY_LABELS } from "../lib/difficulty";
import { recordAnswer } from "../lib/progress-actions";
import type { DailySet } from "../lib/daily-practice";

type State = "unanswered" | "correct" | "wrong" | "shown";

export function DailyPracticeRunner({
  set,
  variant = "daily",
}: {
  set: DailySet;
  // "revisit" is the wrong-answer list above the daily set. Same runner, so
  // marking and recording cannot drift between the two — only the words on
  // the finish card differ, because "tomorrow's set will use today's answers"
  // is not what happens to a revisited question.
  variant?: "daily" | "revisit";
}) {
  const [at, setAt] = useState(0);
  const [typed, setTyped] = useState("");
  const [states, setStates] = useState<State[]>(() => set.questions.map(() => "unanswered"));
  /** Which questions have already been sent to the database. See settle(). */
  const recorded = useRef<Set<number>>(new Set());

  const q = set.questions[at];
  const state = states[at];
  const done = states.filter((s) => s !== "unanswered").length;
  const right = states.filter((s) => s === "correct").length;
  const finished = done === set.questions.length;

  function settle(next: State) {
    setStates((prev) => {
      if (prev[at] !== "unanswered") return prev;
      const copy = [...prev];
      copy[at] = next;
      return copy;
    });

    // ⚠️ REVEALING A MODEL ANSWER IS NOT GETTING IT WRONG.
    //
    // This recorded `next === "correct"`, so pressing "Show the model answer"
    // on an extended question filed it as an INCORRECT answer. That is wrong
    // twice over. It makes accuracy a lie — the site cannot mark an extended
    // answer, which is the entire reason those questions are self-marked — and
    // it feeds straight back into the recommender, so a student who engages
    // with the hardest questions in a topic makes that topic look weaker, and
    // is handed more of it tomorrow. A loop that punishes doing the hard part.
    //
    // Practice.tsx has always got this right: its "Show answer" sets a
    // `selfMarked` status and never calls recordAnswer at all. Same here.
    if (next === "shown") return;

    // ⚠️ RECORDED ONCE PER QUESTION, VIA A REF RATHER THAN THE RENDER'S STATE.
    // The guard used to read `states[at]`, which is the value captured when
    // this render ran — so two clicks landing before React re-renders both saw
    // "unanswered" and both recorded. Holding Enter on the text input is the
    // realistic way to do it, and this project has already shipped that exact
    // bug once: key repeat turned one answered question into twenty recorded
    // events. A ref is written synchronously, so the second call sees the
    // first.
    if (recorded.current.has(at)) return;
    recorded.current.add(at);

    // Recorded against the question's OWN topic, not "today's practice". A
    // daily set is a different way of REACHING questions, not a different kind
    // of question — so it feeds topic coverage, accuracy, XP and the streak
    // exactly as answering them on the topic page would. It is also what makes
    // the recommendation improve: today's answers are tomorrow's input.
    //
    // Not awaited, and failures are swallowed: the tick has already appeared,
    // and losing one statistic matters less than an error interrupting
    // revision. Same call and same reasoning as Practice.tsx.
    void recordAnswer(q.subjectSlug, q.topicSlug, next === "correct", q.question).catch(() => {});
  }

  function check() {
    if (state !== "unanswered" || !q.accept) return;
    const ok = q.accept.some((a) => normalise(a) === normalise(typed));
    settle(ok ? "correct" : "wrong");
  }

  function move(delta: number) {
    setAt((i) => Math.min(set.questions.length - 1, Math.max(0, i + delta)));
    setTyped("");
  }

  return (
    <div className="mt-8">
      {/* Progress through the set. A plain list of dots rather than a bar:
          a teacher's "3 of 10" is easier to hold than a percentage. */}
      <div className="flex flex-wrap items-center gap-3">
        <ol className="flex flex-wrap gap-1.5" aria-label={`${variant === "revisit" ? "Revisit, question" : "Question"} ${at + 1} of ${set.questions.length}`}>
          {states.map((s, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => { setAt(i); setTyped(""); }}
                aria-label={`Question ${i + 1}${s === "unanswered" ? "" : s === "correct" ? ", correct" : ", answered"}`}
                aria-current={i === at ? "step" : undefined}
                className={`h-8 w-8 rounded-full text-xs font-bold transition ${
                  i === at ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
                } ${
                  s === "unanswered"
                    ? "bg-black/10 dark:bg-white/15"
                    : s === "correct"
                      ? "bg-green-600 text-white"
                      : "bg-amber-500 text-white"
                }`}
                style={i === at ? { boxShadow: `0 0 0 2px ${q.accent}` } : undefined}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
        <p className="text-sm tabular-nums opacity-60">
          {done} of {set.questions.length} answered
          {done > 0 && ` · ${right} right`}
        </p>
      </div>

      <article className="mt-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <Link
            href={`/subjects/${q.subjectSlug}/${q.topicSlug}`}
            className="font-semibold hover:underline"
            style={{ color: q.accent }}
          >
            {q.topicTitle}
          </Link>
          <span className="opacity-50">{q.subjectName}</span>
          {/* The level is shown, because "it gets harder" is only reassuring
              if you can see it happening. */}
          <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium opacity-70 dark:bg-white/10">
            {DIFFICULTY_LABELS[q.difficulty]}
          </span>
          {q.higherOnly && <HigherBadge />}
        </div>

        <p className="mt-4 whitespace-pre-line text-xl font-semibold leading-relaxed">
          {q.question}
          <MarkTariff marks={q.marks} />
        </p>

        {q.choices && q.choices.length > 0 ? (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {q.choices.map((choice) => {
              const isRight = (q.accept ?? []).some((a) => normalise(a) === normalise(choice));
              const picked = typed === choice;
              const reveal = state !== "unanswered";
              return (
                <li key={choice}>
                  <button
                    type="button"
                    disabled={reveal}
                    onClick={() => {
                      if (state !== "unanswered") return;
                      setTyped(choice);
                      settle(isRight ? "correct" : "wrong");
                    }}
                    className={`min-h-11 w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                      reveal && isRight
                        ? "border-green-600 bg-green-600/10"
                        : reveal && picked
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-black/10 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                    }`}
                  >
                    {choice}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : q.accept ? (
          <div className="mt-5 flex flex-wrap gap-2">
            <label className="sr-only" htmlFor="answer">Your answer</label>
            <input
              id="answer"
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") check(); }}
              disabled={state !== "unanswered"}
              autoComplete="off"
              className="min-h-11 flex-1 rounded-xl border border-black/15 bg-white/80 px-4 text-base dark:border-white/20 dark:bg-black/30"
              placeholder="Type your answer"
            />
            <button
              type="button"
              onClick={check}
              disabled={state !== "unanswered"}
              className="min-h-11 rounded-full px-6 text-sm font-semibold text-white disabled:opacity-40"
              style={{ backgroundColor: q.accent }}
            >
              Check
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => settle("shown")}
            disabled={state !== "unanswered"}
            className="mt-5 min-h-11 rounded-full px-6 text-sm font-semibold text-white disabled:opacity-40"
            style={{ backgroundColor: q.accent }}
          >
            Show the model answer
          </button>
        )}

        {/* One live region for the outcome, so a screen reader is told the
            result rather than having to go looking for it. */}
        <p role="status" aria-live="polite" className="sr-only">
          {state === "correct" ? "Correct." : state === "wrong" ? "Not quite." : ""}
        </p>

        {state !== "unanswered" && (
          <div
            className="mt-5 rounded-2xl px-5 py-4"
            style={{ backgroundColor: state === "correct" ? "#16a34a18" : `${q.accent}14` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-55">
              {state === "correct" ? "Correct" : q.selfMarked ? "Model answer" : "Not quite"}
            </p>
            <p className="mt-1.5 whitespace-pre-line leading-relaxed opacity-85">{q.answer}</p>
            {q.selfMarked && (
              <p className="mt-2 text-xs opacity-60">
                Mark this one yourself — there is no single right wording.
              </p>
            )}
          </div>
        )}

        {state !== "unanswered" && (
          <ReportQuestion
            subjectSlug={q.subjectSlug}
            topicSlug={q.topicSlug}
            question={q.question}
          />
        )}
      </article>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={at === 0}
          className="min-h-11 rounded-full border border-black/15 px-5 text-sm font-medium disabled:opacity-35 dark:border-white/20"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={at === set.questions.length - 1}
          className="min-h-11 rounded-full px-6 text-sm font-semibold text-white disabled:opacity-35"
          style={{ backgroundColor: q.accent }}
        >
          Next →
        </button>
      </div>

      {finished && (
        <section className="mt-8 rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-bold tracking-tight">
            {variant === "revisit" ? "Mistakes revisited" : <>That is today&apos;s set done</>}
          </h2>
          <p className="mt-2 tabular-nums opacity-70">
            {right} of {set.questions.length} right.
          </p>
          {/* ⚠️ No grade, no prediction, no "you are on track for a 6".
              Matthew's own rule: we are not qualified to mark extended answers,
              so we do not dress a self-assessment up as an estimate. */}
          <p className="mt-3 text-sm opacity-60">
            {variant === "revisit" ? (
              <>
                The ones you got right will wait longer before coming back. Any
                you missed will be back in about ten minutes.
              </>
            ) : (
              <>
                Tomorrow&apos;s set will use today&apos;s answers, so the topics
                you found hard will come back.
              </>
            )}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {set.focus.map((f) => (
              <Link
                key={`${f.subjectSlug}/${f.topicSlug}`}
                href={`/subjects/${f.subjectSlug}/${f.topicSlug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-5 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                Revise {f.topicTitle}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
