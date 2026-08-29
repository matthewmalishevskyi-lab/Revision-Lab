"use client";

import { setQuizSoundMuted, useQuizSoundMuted } from "../../lib/quizSound";

// One small button, shared by both the host's screen and every player's
// own device — the same "one component, not two that could quietly drift
// apart" reasoning QuizChoiceButton's own file header gives for itself.
// `aria-pressed` is the correct ARIA role for a two-state toggle, the same
// choice ThemeToggle.tsx already makes for switching light/dark.
export function QuizSoundToggle() {
  const muted = useQuizSoundMuted();

  return (
    <button
      type="button"
      onClick={() => setQuizSoundMuted(!muted)}
      aria-pressed={muted}
      aria-label={muted ? "Turn quiz sound on" : "Turn quiz sound off"}
      title={muted ? "Sound is off" : "Sound is on"}
      className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm shadow-sm backdrop-blur-sm transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}
