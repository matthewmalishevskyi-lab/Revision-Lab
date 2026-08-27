"use client";

// A timed set of questions pulled from across a whole subject, rather than
// one topic at a time — closer to what a real exam paper feels like: mixed
// topics, a clock running, and one score at the end instead of a running
// tally you can top up forever.
//
// Marking reuses `normalise` from Practice.tsx rather than writing a second
// copy of "how forgiving is this comparison" — see that file's comment for
// why two slightly different copies of the same rule is a real bug waiting
// to happen, not just untidy code.
//
// Every question here carries its OWN topic (`topicSlug`/`topicTitle`),
// unlike Practice.tsx where every question on the page belongs to the one
// topic being viewed. That's the one genuine structural difference: each
// answer is recorded against the topic IT came from, not against "the exam."
// A mock exam still feeds the same progress data as ordinary practice — it's
// a different way of ANSWERING questions, not a different kind of question.

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { normalise } from "./Practice";
import { HigherBadge } from "./HigherBadge";
import { Celebration } from "./Celebration";
import { recordAnswer, recordTestCompletion } from "../lib/progress-actions";
import { shuffle } from "../lib/shuffle";

export type ExamQuestion = {
  question: string;
  accept?: string[];
  answer: string;
  higherOnly?: boolean;
  choices?: string[];
  topicSlug: string;
  topicTitle: string;
};

type Status = "unanswered" | "correct" | "incorrect" | "selfMarked";
type QuestionState = { input: string; status: Status; revealed: boolean };
const EMPTY: QuestionState = { input: "", status: "unanswered", revealed: false };

function formatClock(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function MockExam({
  questions,
  subjectSlug,
  subjectName,
  colour,
  durationSeconds,
  // Both default to the ORIGINAL "{Subject} test" behaviour, unchanged —
  // added when the longer "past paper" mode needed its finish screen to
  // link back to ANOTHER past paper, not another quick test. Without an
  // override, finishing a 50-question past paper would land on a button
  // reading "Try another {subject} test" pointing at the short 20-question
  // version — a real, confusing bait-and-switch this component would have
  // shipped silently if the link had stayed hardcoded.
  retryHref = `/subjects/${subjectSlug}/exam`,
  retryLabel = `Try another ${subjectName} test`,
}: {
  questions: ExamQuestion[];
  subjectSlug: string;
  subjectName: string;
  colour: string;
  durationSeconds: number;
  retryHref?: string;
  retryLabel?: string;
}) {
  const [phase, setPhase] = useState<"intro" | "running" | "finished">("intro");
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const [states, setStates] = useState<Record<number, QuestionState>>({});
  const recorded = useRef<Set<number>>(new Set());
  // Whether the celebration overlay has been dismissed — not "is it
  // showing", which is derived below as `celebrating`. Tracking dismissal
  // rather than the shown/hidden state directly means there's no moment
  // that needs a `setState` call INSIDE an effect just to turn it on: the
  // overlay simply IS showing, automatically, the instant `phase` becomes
  // "finished", because `celebrating` is computed from both values on every
  // render rather than copied into its own state that has to be told to
  // catch up.
  const [dismissed, setDismissed] = useState(false);

  // ───────────────────────────────────────────────────────────────────────────
  // WHY MULTIPLE CHOICE OPTIONS ARE SHUFFLED HERE — see Practice.tsx's copy of
  // this comment for the full story. Short version: content is written with
  // the correct choice listed first, and nothing ever reordered it before
  // showing it on screen — so on almost every multiple-choice question on the
  // site, the right answer sat in position A. Spotted by Matthew after a mock
  // exam where picking "A" every time answered every question correctly.
  //
  // `useMemo` rather than the reset-during-render pattern Practice.tsx uses:
  // MockExam gets a brand new `questions` array every time the exam page is
  // visited (a fresh random pick — see that page's comment), it never reuses
  // one exam's question list for another, so there's no equivalent "topic
  // changed under me" case to guard against. Shuffling once when `questions`
  // is first seen is enough, and it stays stable for the rest of the exam
  // because the array reference doesn't change again after that.
  const shuffledChoices = useMemo(
    () => questions.map((q) => (q.choices ? shuffle(q.choices) : undefined)),
    [questions],
  );

  // A ref, not state, for the same reason StudyTimer elsewhere on the site
  // uses one: the tick doesn't need to trigger a render by itself, only the
  // seconds-left NUMBER does, and re-deriving "has this run out" from state
  // that's already mid-update is exactly the kind of off-by-one a countdown
  // is easy to get wrong in.
  useEffect(() => {
    if (phase !== "running") return;

    const interval = setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          clearInterval(interval);
          setPhase("finished");
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const stateFor = (index: number) => states[index] ?? EMPTY;

  function update(index: number, changes: Partial<QuestionState>) {
    setStates((current) => ({
      ...current,
      [index]: { ...(current[index] ?? EMPTY), ...changes },
    }));
  }

  function check(index: number, question: ExamQuestion, given?: string) {
    const typed = given ?? stateFor(index).input;
    if (!typed.trim()) return;

    const isCorrect = (question.accept ?? []).some(
      (valid) => normalise(valid) === normalise(typed),
    );
    update(index, { status: isCorrect ? "correct" : "incorrect", revealed: isCorrect });

    // Same "first attempt only" rule as Practice.tsx, and the same reason:
    // without it, pressing Check twice or holding Enter would inflate both
    // the count and the accuracy figure with repeats of one answer.
    if (!recorded.current.has(index)) {
      recorded.current.add(index);
      void recordAnswer(subjectSlug, question.topicSlug, isCorrect).catch(() => {});
    }
  }

  const markable = questions.filter((q) => q.accept).length;
  const correct = questions.filter(
    (q, i) => q.accept && stateFor(i).status === "correct",
  ).length;
  const wrongQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => q.accept && stateFor(i).status === "incorrect");

  // The topics that came up at all, in order of first appearance — used both
  // in the intro (so it's clear this isn't one topic) and, once finished, to
  // point at exactly what's worth revisiting.
  const uniqueTopics = Array.from(
    new Map(questions.map((q) => [q.topicSlug, q.topicTitle])).entries(),
  );

  // Whether the celebration overlay is actually showing right now — "the
  // exam just finished, AND nobody has dismissed it yet." Computed fresh on
  // every render instead of stored in its own state, so there's no moment
  // where something has to notice `phase` became "finished" and remember
  // to flip a separate flag — it's simply true the instant the condition
  // is, with nothing that can drift out of sync with it.
  const celebrating = phase === "finished" && !dismissed;

  // The one thing that genuinely can't be derived this way: telling the
  // server a test finished is a real network call, not a render-time
  // calculation, so it still needs an effect. Fires once, the moment the
  // exam finishes, however it finished — running out of time or clicking
  // "Finish now" both count.
  //
  // Placed here, after `correct`/`markable` are declared above, rather than
  // up near the other effects — the earlier ordering worked fine at runtime
  // (an effect only actually reads its closed-over variables once it runs,
  // well after the whole render has finished), but reading a variable before
  // its declaration in the file is exactly the kind of thing that becomes a
  // real bug the moment someone reorders the code around it, so it's worth
  // just not writing it that way.
  useEffect(() => {
    if (phase === "finished") {
      // Fire-and-forget, same pattern as recordAnswer above — a failed write
      // here should never stop the finish screen from showing. Records
      // against the subject as a whole (there's no single topic a whole test
      // belongs to), and is what the "completed a test in every subject"
      // badges — and now "Test score history" — read back.
      void recordTestCompletion(subjectSlug, correct, markable).catch(() => {});
    }
    // NOT re-running this every time correct/markable tick up during the
    // exam: it should fire exactly once, the moment phase becomes
    // "finished", not on every answered question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, subjectSlug]);

  if (phase === "intro") {
    return (
      <div className="rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-bold tracking-tight">
          {questions.length} questions, {Math.round(durationSeconds / 60)}{" "}
          minutes
        </h2>
        <p className="mx-auto mt-3 max-w-prose opacity-70">
          Pulled from {uniqueTopics.length} different {subjectName} topics —
          not just one, so this is closer to what the real paper feels like.
          The clock starts the moment you click start, and answers are marked
          the same way as everywhere else on the site.
        </p>
        <button
          type="button"
          onClick={() => setPhase("running")}
          className="mt-6 rounded-xl px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: colour }}
        >
          Start the exam
        </button>
      </div>
    );
  }

  if (phase === "finished") {
    return (
      <div>
        {celebrating && (
          <Celebration
            message={
              markable === 0
                ? "Test finished!"
                : correct / markable >= 0.8
                  ? `${correct}/${markable} — great work!`
                  : "Test finished!"
            }
            onDismiss={() => setDismissed(true)}
          />
        )}

        <div
          className="rounded-3xl p-8 text-center text-white shadow-sm"
          style={{ backgroundColor: colour }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
            {secondsLeft === 0 ? "Time's up" : "Exam finished"}
          </p>
          <p className="mt-2 text-5xl font-bold tabular-nums">
            {correct}/{markable}
          </p>
          <p className="mt-1 opacity-85">
            {markable > 0
              ? `${Math.round((correct / markable) * 100)}% of the auto-marked questions`
              : "No auto-marked questions in this set"}
          </p>
        </div>

        {wrongQuestions.length > 0 && (
          <div className="mt-6 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold">Worth revisiting</h3>
            <p className="mt-1 text-sm opacity-60">
              Topics behind the questions you got wrong.
            </p>
            <ul className="mt-4 space-y-2">
              {Array.from(
                new Map(
                  wrongQuestions.map(({ q }) => [q.topicSlug, q.topicTitle]),
                ).entries(),
              ).map(([slug, title]) => (
                <li key={slug}>
                  <Link
                    href={`/subjects/${subjectSlug}/${slug}`}
                    className="flex items-center justify-between rounded-xl border border-black/10 px-4 py-2.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                  >
                    {title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={retryHref}
            className="rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: colour }}
          >
            {retryLabel}
          </Link>
          <Link
            href={`/subjects/${subjectSlug}`}
            className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Back to {subjectName}
          </Link>
        </div>
      </div>
    );
  }

  // phase === "running"
  return (
    <div>
      {/* Sticks to the top so the time remaining is visible without
          scrolling back up — the one thing about a timed exam that matters
          more than anything else on the page. */}
      <div
        className="sticky top-0 z-10 -mx-6 mb-4 flex items-center justify-between border-b border-white/60 bg-white/90 px-6 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/90 sm:rounded-2xl sm:border sm:mx-0"
        style={{ borderColor: secondsLeft <= 60 ? "#dc2626" : undefined }}
      >
        <span className="text-sm font-medium opacity-70">
          {correct + wrongQuestions.length}/{markable} answered so far
        </span>
        <span
          className={`text-xl font-bold tabular-nums ${
            secondsLeft <= 60 ? "text-red-600 dark:text-red-400" : ""
          }`}
          style={{ color: secondsLeft <= 60 ? undefined : colour }}
        >
          {formatClock(secondsLeft)}
        </span>
        <button
          type="button"
          onClick={() => setPhase("finished")}
          className="rounded-lg border border-black/10 px-3.5 py-1.5 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          Finish now
        </button>
      </div>

      <ol className="space-y-3">
        {questions.map((item, index) => {
          const state = stateFor(index);
          const autoMarked = Boolean(item.accept);
          // The shuffled DISPLAY order — see the comment on
          // `shuffledChoices` above. `item.choices` still guards whether
          // this is a multiple choice question at all.
          const choices = shuffledChoices[index];

          return (
            <li
              key={`${item.topicSlug}-${item.question}`}
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
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-45">
                    {item.topicTitle}
                  </p>
                  {item.higherOnly && (
                    <p className="mb-2 mt-1.5">
                      <HigherBadge />
                    </p>
                  )}
                  <p className="mt-1 whitespace-pre-line font-medium leading-relaxed">
                    {item.question}
                  </p>

                  {autoMarked ? (
                    <>
                      {item.choices ? (
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {choices!.map((option, optionIndex) => {
                            const picked = state.input === option;
                            const answered = state.status !== "unanswered";
                            const isRight = (item.accept ?? []).some(
                              (valid) => normalise(valid) === normalise(option),
                            );
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
                                <span aria-hidden="true" className="mt-px font-semibold opacity-45">
                                  {"ABCDEF"[optionIndex]}
                                </span>
                                <span className="min-w-0 flex-1">{option}</span>
                                {show && (
                                  <span aria-hidden="true" className="font-bold">
                                    {isRight ? "✓" : "✗"}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        // ── Locked after the first check, same reasoning as
                        // multiple choice above — found in the 2026-08-25
                        // deep bug hunt. This used to stay editable forever:
                        // `onChange` reset `status` back to "unanswered" on
                        // every keystroke, and `check()` re-evaluated and
                        // overwrote `status` on every subsequent press with
                        // no gate. `correct`/`markable` below (and the score
                        // handed to recordTestCompletion when the exam
                        // finishes) read straight off `status`, so a wrong
                        // first answer could be edited and re-checked until
                        // it read "correct" — inflating both the on-screen
                        // tally and the score PERMANENTLY WRITTEN to the
                        // database, not just this session's display. Practice.tsx
                        // deliberately allows this (documented there: only the
                        // first attempt is ever recorded, later ones are a
                        // free-form retry aid) — but a mock exam's own score
                        // is read live off this same status, so here it has to
                        // behave like a real exam: one shot per question.
                        <div className="mt-3 flex flex-wrap gap-2">
                          <input
                            type="text"
                            value={state.input}
                            disabled={state.status !== "unanswered"}
                            onChange={(event) =>
                              update(index, { input: event.target.value, status: "unanswered" })
                            }
                            onKeyDown={(event) => {
                              if (event.key === "Enter") check(index, item);
                            }}
                            placeholder="Your answer"
                            aria-label={`Answer to question ${index + 1}`}
                            className="w-44 rounded-lg border border-black/10 bg-white/80 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 disabled:opacity-55 dark:border-white/15 dark:bg-white/5"
                          />
                          <button
                            type="button"
                            disabled={state.status !== "unanswered"}
                            onClick={() => check(index, item)}
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-55"
                            style={{ backgroundColor: colour }}
                          >
                            Check
                          </button>
                        </div>
                      )}

                      {state.status === "correct" && (
                        <p role="status" className="mt-3 font-semibold text-green-700 dark:text-green-400">
                          ✓ Correct
                        </p>
                      )}
                      {state.status === "incorrect" && (
                        <p role="status" className="mt-3 font-semibold text-red-700 dark:text-red-400">
                          {/* Both kinds are locked after one attempt in a
                              mock exam (see the free-text input's comment
                              above), so neither wording invites a retry. */}
                          ✗ Not quite
                        </p>
                      )}
                    </>
                  ) : (
                    !state.revealed && (
                      <button
                        type="button"
                        onClick={() => update(index, { revealed: true, status: "selfMarked" })}
                        className="mt-3 rounded-lg border border-black/10 px-3.5 py-2 text-sm font-medium transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                      >
                        Show model answer
                      </button>
                    )
                  )}

                  {state.revealed && (
                    <div className="mt-3 rounded-xl px-4 py-3" style={{ backgroundColor: `${colour}14` }}>
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-50">
                        {autoMarked ? "Answer" : "Model answer — mark your own"}
                      </p>
                      <p className="mt-1 leading-relaxed opacity-85">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setPhase("finished")}
          className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: colour }}
        >
          Finish exam
        </button>
      </div>
    </div>
  );
}
