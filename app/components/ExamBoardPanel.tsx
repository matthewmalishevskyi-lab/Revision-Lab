"use client";

import { useMemo } from "react";
import { useStoredRaw, writeStorageRaw } from "../lib/browserStore";
import { EXAM_BOARD_KEY, EXAM_BOARDS, ExamBoard, isExamBoard } from "../lib/examBoards";

// A single choice rather than AccessibilityPanel's three independent
// toggles, so this renders as a list of options you pick ONE of (a radio
// group) instead of switches you flip individually. Same underlying
// mechanism either way: one localStorage key, read reactively through
// useStoredRaw so the server and the client's first paint agree (nobody has
// a board chosen yet, as far as either of them can tell), corrected the
// moment React can see the real stored value — no effect, no extra render.
export function ExamBoardPanel() {
  const raw = useStoredRaw(EXAM_BOARD_KEY, null);
  const board = useMemo<ExamBoard | null>(
    () => (isExamBoard(raw) ? raw : null),
    [raw],
  );

  return (
    <div className="space-y-3">
      <div role="radiogroup" aria-label="Exam board" className="space-y-3">
        {EXAM_BOARDS.map((option) => {
          const checked = board === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => writeStorageRaw(EXAM_BOARD_KEY, option.value)}
              className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left shadow-sm backdrop-blur-sm transition ${
                checked
                  ? "border-blue-400 bg-blue-50 dark:border-blue-400/60 dark:bg-blue-500/10"
                  : "border-white/60 bg-white/70 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              <span className="font-semibold">{option.label}</span>
              {checked && (
                <span
                  aria-hidden="true"
                  className="text-blue-600 dark:text-blue-400"
                >
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Only worth offering once there's something to clear — an empty
          string fails isExamBoard the same way a missing key does, so this
          reuses the exact same "unset" path rather than needing its own. */}
      {board && (
        <button
          type="button"
          onClick={() => writeStorageRaw(EXAM_BOARD_KEY, "")}
          className="text-sm underline underline-offset-2 opacity-60 transition hover:opacity-100"
        >
          Clear my exam board
        </button>
      )}
    </div>
  );
}
