"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  advanceAction,
  endQuizAction,
  getQuizView,
  removePlayerAction,
  revealAction,
  startQuizAction,
  type QuizView,
} from "../../../lib/quiz-actions";
import { playCountdownTick, playFanfare } from "../../../lib/quizSound";
import { QuizChoiceButton } from "../../../components/quiz/QuizChoiceButton";
import { QuizLeaderboard } from "../../../components/quiz/QuizLeaderboard";
import { QuizConfetti } from "../../../components/quiz/QuizConfetti";
import { QuizPlayerAvatar } from "../../../components/quiz/QuizPlayerAvatar";
import { QuizSoundToggle } from "../../../components/quiz/QuizSoundToggle";

// The host's own screen — this is the "put it on a shared screen" half of
// the feature. It never answers questions itself (there's no player
// identity here at all); its whole job is showing the room code, showing
// each question as it goes live, and pacing the game forward.
//
// POLLING, NOT PUSH — see lib/quiz.ts's own header comment for why. This
// component polls `getQuizView` on an interval for STATE (who's joined, has
// the phase changed) and runs its own separate, faster local tick purely to
// animate the countdown between polls — the number on screen is always
// computed fresh from `phaseStartedAt`, so it can never drift just because
// a poll was a little late.
const POLL_MS = 1500;
const TICK_MS = 250;

export function HostQuizScreen({ code }: { code: string }) {
  const [view, setView] = useState<QuizView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [removingPlayerId, setRemovingPlayerId] = useState<string | null>(null);
  // "End quiz now" gets a second click to actually fire, rather than a
  // native confirm() dialog — the same "hide the serious step behind an
  // extra click" idiom DeleteAccountForm already uses (see AccountForms.tsx),
  // not a new pattern invented just for this. Worth the extra step here
  // specifically because, unlike leaving a clan or removing a lobby player,
  // this ends the game for every OTHER player in the room too, not just
  // something about the host's own account.
  const [confirmingEnd, setConfirmingEnd] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const autoRevealed = useRef<number>(-1); // which question index has already auto-revealed
  const lastTickSound = useRef<number | null>(null); // last whole second a tick actually played for
  const fanfarePlayed = useRef(false);

  const refresh = useCallback(async () => {
    const next = await getQuizView(code);
    if (next) setView(next);
  }, [code]);

  // The interval itself is what's allowed to call setState here — a timer
  // firing is exactly the "callback from an external system" case the
  // rules-of-hooks purity check wants, not a plain call sitting directly in
  // the effect body. The very first poll is kicked off via `setTimeout(…,
  // 0)` rather than called straight away for the same reason: it still
  // needs to happen almost immediately (nobody should stare at "Loading…"
  // for a full POLL_MS), just through a callback rather than synchronously.
  useEffect(() => {
    const kickoff = setTimeout(refresh, 0);
    const poll = setInterval(refresh, POLL_MS);
    return () => {
      clearTimeout(kickoff);
      clearInterval(poll);
    };
  }, [refresh]);

  // The on-screen countdown, recomputed from `phaseStartedAt` every tick
  // rather than trusted to count down on its own — see lib/quiz.ts's file
  // header for why. `Date.now()` is only ever read inside this timer
  // CALLBACK, never during render itself: reading the clock while
  // rendering is the kind of impurity that can make the same render pass
  // produce two different answers, which this codebase's own rules-of-hooks
  // lint pass now catches.
  const isQuestionPhase = view?.status === "question" && Boolean(view.phaseStartedAt);

  // Clearing the countdown the moment the phase stops being "question" is
  // done here, during render, rather than as an effect that calls
  // setSecondsLeft directly in its own body — the same "compare with the
  // previous value during render" pattern Practice.tsx already uses for a
  // different prop-change reset (see that file's own comment), which
  // sidesteps the lint rule entirely rather than fighting it.
  const [wasQuestionPhase, setWasQuestionPhase] = useState(false);
  if (isQuestionPhase !== wasQuestionPhase) {
    setWasQuestionPhase(isQuestionPhase);
    if (!isQuestionPhase) setSecondsLeft(null);
  }

  useEffect(() => {
    if (!isQuestionPhase || !view?.phaseStartedAt) return;
    const startedAtMs = new Date(view.phaseStartedAt).getTime();
    const duration = view.questionSeconds;
    function tick() {
      const elapsed = (Date.now() - startedAtMs) / 1000;
      const remaining = Math.max(0, Math.ceil(duration - elapsed));
      setSecondsLeft(remaining);
      // Only actually plays a sound for the last few seconds (see
      // playCountdownTick's own comment) — guarded by the ref so a tick
      // fires once per SECOND, not once per 250ms TICK_MS interval, which
      // would otherwise sound like a four-times-too-fast metronome.
      if (remaining !== lastTickSound.current) {
        lastTickSound.current = remaining;
        playCountdownTick(remaining);
      }
    }
    const interval = setInterval(tick, TICK_MS);
    return () => clearInterval(interval);
  }, [isQuestionPhase, view?.phaseStartedAt, view?.questionSeconds]);

  // The finishing fanfare — fires exactly once, the moment this screen
  // first sees "finished", the same one-shot-via-ref shape `autoRevealed`
  // above and PlayQuizScreen.tsx's own `recordedFinish` ref both use.
  useEffect(() => {
    if (view?.status === "finished" && !fanfarePlayed.current) {
      fanfarePlayed.current = true;
      playFanfare();
    }
  }, [view?.status]);

  // Moves the game on for the host once the clock genuinely runs out, so a
  // room doesn't sit frozen on an expired question just because nobody
  // clicked anything. Guarded by `autoRevealed` so this fires exactly once
  // per question — without it, every 250ms tick after time's up would fire
  // another reveal call (harmless individually, since revealCurrentQuestion
  // is a no-op once the phase has already moved on, but there's no reason
  // to hammer the server that way).
  useEffect(() => {
    if (
      view?.status === "question" &&
      secondsLeft === 0 &&
      autoRevealed.current !== view.currentIndex
    ) {
      autoRevealed.current = view.currentIndex;
      void revealAction(code).then(refresh);
    }
  }, [view, secondsLeft, code, refresh]);

  if (!view) {
    return <p className="mt-10 text-center opacity-60">Loading your room…</p>;
  }

  // Each handler clears any earlier error before trying — without this, an
  // error from one click (say, a WRONG_PHASE race between an auto-reveal
  // and a manual click) stayed on screen forever, even once later clicks
  // succeeded normally and the game had moved on fine.
  async function handleStart() {
    setError(null);
    const result = await startQuizAction(code);
    if (!result.ok) setError(result.error ?? "Something went wrong.");
    await refresh();
  }

  async function handleReveal() {
    setError(null);
    const result = await revealAction(code);
    if (!result.ok) setError(result.error ?? "Something went wrong.");
    await refresh();
  }

  async function handleAdvance() {
    setError(null);
    const result = await advanceAction(code);
    if (!result.ok) setError(result.error ?? "Something went wrong.");
    await refresh();
  }

  async function handleRemovePlayer(playerId: string) {
    setError(null);
    setRemovingPlayerId(playerId);
    const result = await removePlayerAction(code, playerId);
    setRemovingPlayerId(null);
    if (!result.ok) setError(result.error ?? "Something went wrong.");
    await refresh();
  }

  async function handleEndQuiz() {
    setError(null);
    setConfirmingEnd(false);
    const result = await endQuizAction(code);
    if (!result.ok) setError(result.error ?? "Something went wrong.");
    await refresh();
  }

  // Pasteable into a class chat/Teams/Google Classroom announcement,
  // rather than only ever read out digit by digit — `?code=` is read by
  // the join page itself (see its own comment) to pre-fill the room code.
  async function handleCopyInviteLink() {
    try {
      const link = `${window.location.origin}/quiz/join?code=${code}`;
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (an insecure context, browser
      // settings) — nothing to recover from; the big room code on screen
      // is still right there to read out or type in by hand.
    }
  }

  const isLastQuestion = view.currentIndex + 1 >= view.totalQuestions;

  return (
    <div className="mt-8">
      <div className="flex justify-end">
        <QuizSoundToggle />
      </div>

      {error && (
        <p className="mb-4 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">
          {error}
        </p>
      )}

      {view.status === "lobby" && (
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
            Room code
          </p>
          <p className="mt-2 text-7xl font-black tracking-widest tabular-nums sm:text-8xl">
            {view.code}
          </p>
          <p className="mt-3 opacity-70">
            Go to <span className="font-semibold">/quiz/join</span> and enter
            this code to play — {view.subjectName}, {view.topicTitles.join(", ")}.
          </p>
          <button
            type="button"
            onClick={handleCopyInviteLink}
            className="mt-2 text-sm font-semibold text-blue-700 underline underline-offset-2 dark:text-blue-400"
          >
            {linkCopied ? "Link copied!" : "Copy invite link"}
          </button>

          <div className="mx-auto mt-8 max-w-sm rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold">
              {view.players.length} player{view.players.length === 1 ? "" : "s"} joined
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {view.players.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-1.5 rounded-full bg-blue-100 py-1 pl-2 pr-1.5 text-sm font-medium text-blue-800 dark:bg-blue-500/20 dark:text-blue-200"
                >
                  <QuizPlayerAvatar playerId={p.id} size={20} />
                  {p.displayName}
                  {/* Lobby-only — see removePlayer's own comment in quiz.ts
                      for why this doesn't extend into a started game. No
                      confirmation step: removing someone before the game
                      has even started is exactly the low-stakes,
                      easily-repeated action LeaveClanButton's own comment
                      argues doesn't need one — they can just rejoin with
                      the code if this was a mistake. */}
                  <button
                    type="button"
                    onClick={() => handleRemovePlayer(p.id)}
                    disabled={removingPlayerId === p.id}
                    aria-label={`Remove ${p.displayName}`}
                    className="flex h-5 w-5 items-center justify-center rounded-full text-blue-800/60 transition hover:bg-blue-200 hover:text-blue-900 disabled:opacity-40 dark:text-blue-200/60 dark:hover:bg-blue-500/30 dark:hover:text-white"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            {view.players.length === 0 && (
              <p className="mt-2 text-sm opacity-50">Waiting for the first player…</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleStart}
            disabled={view.players.length === 0}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Start the quiz
          </button>
        </section>
      )}

      {(view.status === "question" || view.status === "reveal") && view.currentQuestion && (
        <section>
          <div className="flex items-center justify-between text-sm opacity-60">
            <span>
              Question {view.currentIndex + 1} of {view.totalQuestions} ·{" "}
              {view.currentQuestion.topicTitle}
            </span>
            <span>
              {view.answeredCount}/{view.players.length} answered
            </span>
          </div>

          {view.status === "question" && (
            <p className="mt-2 text-center text-6xl font-black tabular-nums">
              {secondsLeft}
            </p>
          )}

          <h2 className="mt-4 text-center text-2xl font-bold sm:text-3xl">
            {view.currentQuestion.question}
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(() => {
              // Total answers across every choice, computed once outside
              // the map rather than re-summed per button — a fraction of
              // this is what actually draws each button's fill bar (see
              // QuizChoiceButton's own comment on why it needs a fraction,
              // not just the raw count).
              const totalTallied = view.choiceTally?.reduce((sum, n) => sum + n, 0) ?? 0;
              return view.currentQuestion.choices.map((choice, index) => {
                const isCorrect = view.revealedCorrectChoice === choice;
                const variant =
                  view.status === "reveal" ? (isCorrect ? "correctReveal" : "fadedReveal") : "default";
                const tally = view.choiceTally?.[index];
                return (
                  <QuizChoiceButton
                    key={index}
                    index={index}
                    text={choice}
                    variant={variant}
                    tally={tally}
                    tallyFraction={
                      view.status === "reveal" && totalTallied > 0 && typeof tally === "number"
                        ? tally / totalTallied
                        : undefined
                    }
                  />
                );
              });
            })()}
          </div>

          {view.status === "question" ? (
            <button
              type="button"
              onClick={handleReveal}
              className="mx-auto mt-8 block rounded-xl border border-black/10 px-6 py-2.5 text-sm font-semibold opacity-70 transition hover:bg-black/5 hover:opacity-100 dark:border-white/15 dark:hover:bg-white/10"
            >
              Reveal now
            </button>
          ) : (
            <div className="mt-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wider opacity-60">
                Leaderboard so far
              </p>
              <div className="mx-auto mt-3 max-w-md">
                <QuizLeaderboard rows={view.leaderboard.slice(0, 5)} />
              </div>
              <button
                type="button"
                onClick={handleAdvance}
                className="mx-auto mt-6 block rounded-xl bg-blue-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg transition hover:bg-blue-700"
              >
                {isLastQuestion ? "Show final results" : "Next question"}
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            {confirmingEnd ? (
              <p className="text-sm">
                <span className="opacity-70">End the quiz for everyone right now? </span>
                <button
                  type="button"
                  onClick={handleEndQuiz}
                  className="font-semibold text-red-700 underline underline-offset-2 dark:text-red-400"
                >
                  Yes, end it
                </button>
                <span className="opacity-40"> · </span>
                <button
                  type="button"
                  onClick={() => setConfirmingEnd(false)}
                  className="font-semibold opacity-70 underline underline-offset-2"
                >
                  Never mind
                </button>
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingEnd(true)}
                className="text-sm opacity-40 underline underline-offset-2 transition hover:opacity-70"
              >
                End quiz early
              </button>
            )}
          </div>
        </section>
      )}

      {view.status === "finished" && (
        <section className="text-center">
          <QuizConfetti />
          <p className="text-4xl font-black">🏆 Final results</p>
          <div className="mx-auto mt-6 max-w-md">
            <QuizLeaderboard rows={view.leaderboard} />
          </div>
          <Link
            href="/quiz/host/new"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Host another quiz
          </Link>
        </section>
      )}
    </div>
  );
}
