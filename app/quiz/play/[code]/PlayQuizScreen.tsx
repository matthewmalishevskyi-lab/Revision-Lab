"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getQuizView, submitAnswerAction, type QuizView } from "../../../lib/quiz-actions";
import { recordAnswer, recordTestCompletion } from "../../../lib/progress-actions";
import { useStoredRaw } from "../../../lib/browserStore";
import { playCorrect, playCountdownTick, playFanfare, playWrong } from "../../../lib/quizSound";
import { quizPlayerStorageKey, parseStoredQuizPlayer } from "../../quizStorage";
import { QuizChoiceButton, type QuizChoiceVariant } from "../../../components/quiz/QuizChoiceButton";
import { QuizLeaderboard } from "../../../components/quiz/QuizLeaderboard";
import { QuizConfetti } from "../../../components/quiz/QuizConfetti";
import { QuizPlayerAvatar } from "../../../components/quiz/QuizPlayerAvatar";
import { QuizSoundToggle } from "../../../components/quiz/QuizSoundToggle";

const POLL_MS = 1200;
const TICK_MS = 250;

// A player's own device — see lib/quiz.ts's file header for why this
// polls rather than holding a live connection, and HostQuizScreen.tsx's
// own comment for the general shape (it's deliberately similar; this is
// the other half of the same game).
//
// PROGRESS INTEGRATION: a logged-in player gets exactly the same
// `recordAnswer`/`recordTestCompletion` calls a mock exam already makes —
// see progress-actions.ts's own file header for why those can ONLY ever be
// called from the player's OWN device (they read the caller's session
// cookie, not an id passed in), which is precisely why this happens here,
// on each player's own screen, rather than being done once by the host on
// everyone's behalf. A guest with no account gets the identical calls;
// `recordAnswer` itself just quietly does nothing without a session to
// attach to — "not logged in: nothing to record against. Not an error,"
// per that file's own comment.
export function PlayQuizScreen({ code }: { code: string }) {
  // Read the same way ThemeToggle and the wardrobe's equipped outfit are —
  // `useSyncExternalStore` under the hood, which is what lets this render
  // correctly on the very first paint (both server and client) instead of
  // needing an effect + setState just to notice localStorage exists. See
  // browserStore.ts's own header comment for the hydration-mismatch bug
  // that pattern exists to avoid, and DashboardCelebrations' entry in
  // PROJECT_NOTES.md for a real case of getting this wrong.
  const storedRaw = useStoredRaw(quizPlayerStorageKey(code), null);
  const identity = parseStoredQuizPlayer(storedRaw);

  const [view, setView] = useState<QuizView | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  const recordedQuestions = useRef<Set<number>>(new Set());
  const recordedFinish = useRef(false);
  const lastTickSound = useRef<number | null>(null); // last whole second a tick actually played for

  // Polling for STATE. The interval (and the deferred kickoff) are what's
  // allowed to call setState here, not a plain call at the top of the
  // effect body — see HostQuizScreen.tsx's identical comment for the full
  // reasoning; this is deliberately built the same way.
  useEffect(() => {
    if (!identity) return;
    const playerId = identity.playerId;
    async function poll() {
      const next = await getQuizView(code, playerId);
      if (next) setView(next);
    }
    const kickoff = setTimeout(poll, 0);
    const interval = setInterval(poll, POLL_MS);
    return () => {
      clearTimeout(kickoff);
      clearInterval(interval);
    };
  }, [code, identity]);

  // A fresh question means a fresh chance to answer — clear the optimistic
  // local selection the moment the round moves on. Done here, during
  // render (comparing against the previous question index, the same
  // pattern Practice.tsx already uses for a different prop-change reset),
  // rather than as an effect that calls setSelectedChoice directly in its
  // own body.
  const [lastResetIndex, setLastResetIndex] = useState<number | null>(null);
  if (view && view.currentIndex !== lastResetIndex) {
    setLastResetIndex(view.currentIndex);
    setSelectedChoice(null);
    setSubmitError(null);
  }

  // The on-screen countdown — see HostQuizScreen.tsx's identical comment
  // for why `Date.now()` only ever appears inside this timer's own
  // callback, never during render.
  const isQuestionPhase = view?.status === "question" && Boolean(view.phaseStartedAt);
  useEffect(() => {
    if (!isQuestionPhase || !view?.phaseStartedAt) return;
    const startedAtMs = new Date(view.phaseStartedAt).getTime();
    const duration = view.questionSeconds;
    function tick() {
      const elapsed = (Date.now() - startedAtMs) / 1000;
      const remaining = Math.max(0, Math.ceil(duration - elapsed));
      setSecondsLeft(remaining);
      // Once per second, not once per 250ms TICK_MS interval — see
      // HostQuizScreen.tsx's identical comment at its own copy of this.
      if (remaining !== lastTickSound.current) {
        lastTickSound.current = remaining;
        playCountdownTick(remaining);
      }
    }
    const interval = setInterval(tick, TICK_MS);
    return () => clearInterval(interval);
  }, [isQuestionPhase, view?.phaseStartedAt, view?.questionSeconds]);

  // Feed progress once a question's result is actually known — as soon as
  // it's in `reveal` (or later), not the instant this player personally
  // answers, so someone who ran out of time without answering still gets
  // recorded as a wrong attempt on that topic rather than nothing at all.
  useEffect(() => {
    if (!view || !view.currentQuestion) return;
    if (view.status !== "reveal" && view.status !== "finished") return;
    if (recordedQuestions.current.has(view.currentIndex)) return;

    recordedQuestions.current.add(view.currentIndex);
    // The correct/wrong chime lives in this same effect rather than a
    // separate one — it needs to fire exactly once per question too, the
    // instant the result is actually known, which is precisely what this
    // ref guard already does for the progress call right below it.
    // `myAnswer === null` (ran out of time without answering) plays
    // neither — there's nothing to congratulate or console someone on.
    if (view.myAnswer) {
      if (view.myAnswer.correct) playCorrect();
      else playWrong();
    }
    void recordAnswer(
      view.subjectSlug,
      view.currentQuestion.topicSlug,
      view.myAnswer?.correct ?? false,
    ).catch(() => {});
  }, [view]);

  // Fires exactly once, the moment the game ends — same "fire once on the
  // finishing transition" pattern MockExam.tsx's own effect follows.
  // `correctCount` comes straight from the leaderboard's own tally for
  // this player, so it can never disagree with what the leaderboard itself
  // shows.
  useEffect(() => {
    if (!view || view.status !== "finished" || !identity) return;
    if (recordedFinish.current) return;
    recordedFinish.current = true;

    playFanfare();
    const myRow = view.leaderboard.find((row) => row.player.id === identity.playerId);
    void recordTestCompletion(view.subjectSlug, myRow?.correctCount ?? 0, view.totalQuestions).catch(
      () => {},
    );
  }, [view, identity]);

  if (!identity) {
    return (
      <div className="mt-10 text-center">
        <p className="opacity-70">
          You haven&apos;t joined this room from this device yet.
        </p>
        <Link
          href={`/quiz/join?code=${code}`}
          className="mt-4 inline-block rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Join with the code
        </Link>
      </div>
    );
  }

  if (!view) {
    return <p className="mt-10 text-center opacity-60">Loading…</p>;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // REMOVED FROM THE ROOM — found by playing a real game and then watching
  // what the removed player's own screen actually did.
  //
  // The host's ✕ takes someone out of the room, and the HOST's lobby updates
  // correctly. The removed player's screen did not: it carried on cheerfully
  // saying "You're in! 🎉" and listing the players still in the room, forever.
  // They'd sit waiting for a game they were no longer part of, and only find
  // out anything was wrong once it started and their answers had nowhere to
  // land — the same "believing you'd answered when you hadn't" shape of
  // silence handleAnswer's own comment below exists to stop.
  //
  // `view.players` is the room's real current list (straight from
  // getSessionPlayers), and `view` is only ever set from a fetch that
  // actually succeeded — a failed poll leaves the previous view in place
  // rather than emptying it. So "my id isn't in this list" is a trustworthy
  // signal that the row is genuinely gone rather than a network blip, and
  // host removal is the only thing on the whole site that deletes one.
  // ───────────────────────────────────────────────────────────────────────────
  const stillInRoom = view.players.some((player) => player.id === identity.playerId);
  if (!stillInRoom) {
    return (
      <div className="mt-10 text-center">
        <p className="text-2xl font-bold">You&apos;re not in this room</p>
        <p className="mt-2 opacity-70">
          The host removed you from it. If that wasn&apos;t meant to happen, you
          can join again with the same room code.
        </p>
        <Link
          href={`/quiz/join?code=${code}`}
          className="mt-5 inline-block rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Join again
        </Link>
      </div>
    );
  }

  const alreadyAnswered = view.myAnswer !== null || selectedChoice !== null;

  // Before this, the result of submitAnswerAction was thrown away entirely
  // — the button visually locked in as "selected" the instant it was
  // clicked, REGARDLESS of whether the answer actually got recorded. A
  // failure (the countdown ending a beat before the tap landed, a network
  // hiccup, a doubled tap racing itself) looked identical on screen to a
  // real, scored answer: no error, no correction, just silence. Someone
  // could genuinely believe they'd answered and scored 0 points with no way
  // to ever find out why.
  async function handleAnswer(index: number) {
    if (!identity || !view) return;
    if (alreadyAnswered || submitting || view.status !== "question") return;
    setSelectedChoice(index);
    setSubmitError(null);
    setSubmitting(true);
    const result = await submitAnswerAction(code, identity.playerId, view.currentIndex, index);
    setSubmitting(false);

    if (!result.ok) {
      if (result.error === "ALREADY_ANSWERED") {
        // A real answer already exists for this question (most likely a
        // doubled tap racing itself) — nothing to correct, the next poll's
        // `myAnswer` will show the real one that was actually recorded.
        return;
      }
      // Genuinely didn't get recorded — undo the optimistic selection so
      // the buttons go back to tappable, and say why, rather than leaving
      // a "selected" answer sitting there that was never actually scored.
      setSelectedChoice(null);
      setSubmitError(
        result.error === "WRONG_PHASE"
          ? "Too slow — the question moved on before that got through."
          : "That didn't go through — try again if there's still time.",
      );
    }
  }

  return (
    <div className="mt-8">
      <div className="flex justify-end">
        <QuizSoundToggle />
      </div>

      {view.status === "lobby" && (
        <section className="text-center">
          <p className="text-2xl font-bold">You&apos;re in! 🎉</p>
          <p className="mt-2 opacity-70">
            Waiting for the host to start — {view.subjectName}, {view.topicTitles.join(", ")}.
          </p>
          <div className="mx-auto mt-6 max-w-sm rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold">
              {view.players.length} player{view.players.length === 1 ? "" : "s"} in the room
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {view.players.map((p) => (
                <li
                  key={p.id}
                  className={[
                    "flex items-center gap-1.5 rounded-full py-1 pl-1.5 pr-3 text-sm font-medium",
                    p.id === identity.playerId
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200",
                  ].join(" ")}
                >
                  <QuizPlayerAvatar playerId={p.id} size={20} />
                  {p.displayName}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(view.status === "question" || view.status === "reveal") && view.currentQuestion && (
        <section>
          <div className="flex items-center justify-between text-sm opacity-60">
            <span>
              Question {view.currentIndex + 1} of {view.totalQuestions}
            </span>
            {view.status === "question" && (
              <span className="text-2xl font-black tabular-nums opacity-100">{secondsLeft}</span>
            )}
          </div>

          <h2 className="mt-3 text-center text-xl font-bold sm:text-2xl">
            {view.currentQuestion.question}
          </h2>

          {view.status === "question" && alreadyAnswered && (
            <p className="mt-4 text-center font-semibold text-green-700 dark:text-green-400">
              Locked in! Waiting for everyone else…
            </p>
          )}

          {view.status === "question" && submitError && (
            <p className="mt-4 text-center font-semibold text-red-700 dark:text-red-400">
              {submitError}
            </p>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {view.currentQuestion.choices.map((choice, index) => {
              let variant: QuizChoiceVariant = "default";
              if (view.status === "reveal") {
                const isCorrect = view.revealedCorrectChoice === choice;
                const iPickedThis = view.myAnswer?.choiceIndex === index;
                variant = isCorrect ? "correctReveal" : iPickedThis ? "wrongPickedReveal" : "fadedReveal";
              } else if (index === selectedChoice) {
                variant = "selected";
              }

              return (
                <QuizChoiceButton
                  key={index}
                  index={index}
                  text={choice}
                  variant={variant}
                  onClick={
                    view.status === "question" && !alreadyAnswered
                      ? () => handleAnswer(index)
                      : undefined
                  }
                  disabled={submitting}
                />
              );
            })}
          </div>

          {view.status === "reveal" && (
            <div className="mt-6 text-center">
              {view.myAnswer ? (
                <p
                  className={
                    view.myAnswer.correct
                      ? "font-bold text-green-700 dark:text-green-400"
                      : "font-bold text-red-700 dark:text-red-400"
                  }
                >
                  {view.myAnswer.correct
                    ? `Correct! +${view.myAnswer.points} points`
                    : "Not quite — 0 points"}
                </p>
              ) : (
                <p className="font-semibold opacity-60">You didn&apos;t answer in time.</p>
              )}
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider opacity-60">
                Leaderboard so far
              </p>
              <div className="mx-auto mt-3 max-w-md">
                <QuizLeaderboard
                  rows={view.leaderboard.slice(0, 5)}
                  viewerPlayerId={identity.playerId}
                  compact
                />
              </div>
              <p className="mt-3 opacity-60">Waiting for the host to move on…</p>
            </div>
          )}
        </section>
      )}

      {view.status === "finished" && (
        <section className="text-center">
          <QuizConfetti />
          <p className="text-4xl font-black">🏆 Final results</p>
          <div className="mx-auto mt-6 max-w-md">
            <QuizLeaderboard rows={view.leaderboard} viewerPlayerId={identity.playerId} />
          </div>
          <Link
            href="/quiz/join"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Join another quiz
          </Link>
        </section>
      )}
    </div>
  );
}
