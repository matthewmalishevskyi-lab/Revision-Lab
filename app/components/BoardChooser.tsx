"use client";

import { useActionState } from "react";
import { setExamBoardAction, type BoardActionState } from "../lib/exam-board-actions";
import {
  BOARD_LABEL, BOARDS, choiceLabel, hiddenCount, SAME_ON_EVERY_BOARD, type BoardChoice,
} from "../lib/examBoards";

// The question "which exam board?", for one subject. Two shapes:
//
//   "ask"    — the first time a logged-in student opens a subject that asks:
//              a panel above the topics. Pick one, or skip. Skipping is saved
//              as "none", so it is not asked again on the next visit.
//   "change" — once answered: one line saying which board, and a Change
//              button that opens the same choices.
//
// ⚠️ NOT A MODAL. A box that blocks the page until you answer turns a question
// into a gate, and a student who doesn't know their board yet should still be
// able to revise. The topics are right there underneath.
//
// A plain form whose buttons carry the board, so it works before the page's
// JavaScript has loaded; <details> opens Change with no JavaScript either.
export function BoardChooser({ subject, subjectName, current, mode, label = "Exam board:" }: {
  subject: string;
  subjectName: string;
  current: BoardChoice | null;
  mode: "ask" | "change";
  /** What the closed "change" line says before the board. */
  label?: string;
}) {
  const [state, action, pending] = useActionState<BoardActionState, FormData>(setExamBoardAction, {});
  const same = SAME_ON_EVERY_BOARD.has(subject);
  const anyHidden = BOARDS.some((b) => hiddenCount(subject, b) > 0);

  const lead = same
    ? `Every board teaches the same ${subjectName} content, so nothing will be hidden — tell us anyway and you won't be asked again.`
    : anyHidden
      ? "Pick yours and topics that aren't on its specification will be hidden."
      : `Every ${subjectName} topic here is on all four boards' specifications, so nothing will be hidden.`;

  const buttons = (
    <form action={action} className="mt-4">
      <input type="hidden" name="subject" value={subject} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {BOARDS.map((board) => {
          const hides = hiddenCount(subject, board);
          const chosen = current === board;
          return (
            <button
              key={board}
              type="submit"
              name="board"
              value={board}
              disabled={pending}
              aria-pressed={chosen}
              className={`flex min-h-14 flex-col items-center justify-center rounded-2xl border px-3 py-2 text-center transition disabled:opacity-60 ${
                chosen
                  ? "border-blue-500 bg-blue-50 dark:border-blue-400/70 dark:bg-blue-500/15"
                  : "border-black/10 bg-white hover:bg-black/5 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              <span className="font-semibold">{chosen ? "✓ " : ""}{BOARD_LABEL[board]}</span>
              {hides > 0 && (
                <span className="text-xs opacity-60">hides {hides} topic{hides === 1 ? "" : "s"}</span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <button
          type="submit"
          name="board"
          value="none"
          disabled={pending}
          aria-pressed={current === "none"}
          className="min-h-11 text-sm font-medium underline underline-offset-2 opacity-70 transition hover:opacity-100 disabled:opacity-40"
        >
          {mode === "ask" ? "Not sure — skip for now" : "Not sure — show everything"}
        </button>
        <span className="text-sm opacity-60">
          It&apos;s on the front of your past papers, or your teacher will know.
        </span>
      </div>
      <p role="status" className="mt-2 text-sm">
        {pending ? "Saving…" : state.error ? <span className="text-red-700 dark:text-red-300">{state.error}</span> : null}
      </p>
    </form>
  );

  if (mode === "ask") {
    return (
      <section
        aria-labelledby="board-question"
        className="mx-auto mt-6 max-w-4xl rounded-3xl border-2 border-blue-300 bg-white/80 px-6 py-6 shadow-[0_20px_50px_-30px_rgba(22,24,43,0.5)] backdrop-blur-sm dark:border-blue-400/40 dark:bg-white/5 sm:px-8"
      >
        <h2 id="board-question" className="text-2xl font-bold tracking-tight">
          Which exam board is your {subjectName} GCSE?
        </h2>
        <p className="mt-2 opacity-75">{lead} You can change it any time.</p>
        {buttons}
      </section>
    );
  }

  return (
    <details className="group mx-auto mt-4 max-w-4xl rounded-2xl border border-black/10 bg-white/60 px-5 py-1 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
      <summary className="flex min-h-11 cursor-pointer list-none [&::-webkit-details-marker]:hidden flex-wrap items-center justify-center gap-x-2 text-sm">
        <span className="opacity-70">{label}</span>
        <strong>{current ? choiceLabel(current) : "not set"}</strong>
        <span className="font-medium underline underline-offset-2 opacity-70 group-open:hidden">Change</span>
        <span className="hidden font-medium underline underline-offset-2 opacity-70 group-open:inline">Close</span>
      </summary>
      <div className="pb-4">
        <p className="mt-1 text-center text-sm opacity-75">{lead}</p>
        {buttons}
      </div>
    </details>
  );
}
