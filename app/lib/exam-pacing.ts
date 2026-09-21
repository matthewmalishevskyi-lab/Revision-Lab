// One minute per mark, during a test and after it.
//
// Pure functions, no React, so `scripts/check-pacing.mjs` can drive them over
// invented sittings — the same split as daily-practice.ts, and for the same
// reason: the interesting behaviour is at the edges (nothing answered yet, the
// whole paper answered in one burst, time running out mid-question), and edges
// are where a pacing hint that sounds confident turns out to be nonsense.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHAT THIS IS FOR
//
// Matthew's brainstorm, September: "one minute per mark is actually sick."
// Running out of time is one of the commonest ways a capable student loses
// marks, and nearly every site WARNS about it without measuring it. This
// measures it: while the clock runs it says whether you are keeping pace, and
// afterwards it says where the time actually went — "6 minutes on a 2-mark
// question, then out of time with 9 marks still unanswered".
// ─────────────────────────────────────────────────────────────────────────────

export type Pace = {
  /** Whole minutes ahead (negative) or behind (positive) the one-minute-per-mark pace. */
  minutesBehind: number;
  label: string;
  tone: "good" | "neutral" | "warn";
};

/**
 * Where you are against one minute per mark, right now.
 *
 * The comparison is TIME SPENT against the marks you have already ANSWERED:
 * answer a 3-mark question in 1 minute and you have banked 2 minutes. That is
 * the rule applied honestly — the budget for a question is earned by
 * answering it, not granted on sight.
 *
 * ⚠️ THE ±1 MINUTE DEAD BAND IS NOT DECORATION. Without it the label flickers
 * between "ahead" and "behind" every few seconds on a paper being answered at
 * almost exactly the right speed — a nervous student watching a clock that
 * keeps changing its mind is worse off than one with no clock at all. Within a
 * minute either way is "on pace", which is also the truthful precision: the
 * marks themselves are only ever within about a mark of a real scheme.
 */
export function pace(elapsedSeconds: number, marksAnswered: number): Pace {
  const behind = elapsedSeconds / 60 - marksAnswered;
  const whole = Math.round(behind);
  if (Math.abs(behind) < 1) return { minutesBehind: 0, label: "On pace", tone: "good" };
  if (behind > 0) {
    return {
      minutesBehind: whole,
      label: `${whole} min behind`,
      // Only turns amber once it is genuinely worth acting on. Two minutes
      // behind on a twenty-minute paper is a nudge, not an alarm.
      tone: whole >= 3 ? "warn" : "neutral",
    };
  }
  return { minutesBehind: whole, label: `${-whole} min ahead`, tone: "good" };
}

export type Overrun = {
  /** Position in the paper, 0-based. */
  index: number;
  marks: number;
  seconds: number;
  /** seconds spent ÷ seconds it was worth. */
  ratio: number;
};

export type TimeBreakdown = {
  /** Questions that took well over their share, worst first. */
  overran: Overrun[];
  unansweredCount: number;
  unansweredMarks: number;
  /** True when the clock ran out rather than the student finishing. */
  ranOut: boolean;
};

/**
 * Where the time went.
 *
 * ⚠️ TIME IS MEASURED BETWEEN ANSWERS, AND THE FINISH SCREEN SAYS SO.
 * The test shows every question at once and a student can answer them in any
 * order, so there is no way to know which question somebody was LOOKING at.
 * What is knowable is when each answer was committed. The time a question is
 * charged is the gap since the previous answer — which is exactly "how long it
 * took you to get this one down", and is honest about what it is. A student
 * who skips around will see time charged to whichever question they answered
 * next; the page tells them that rather than presenting it as precise.
 *
 * A question is only flagged when it took BOTH over one and a half times its
 * share AND at least a full minute more than its share. The ratio alone would
 * flag a 1-mark question answered in 95 seconds, which is nothing; the extra
 * minute alone would never flag anything on a 1-mark question at all.
 */
export function timeBreakdown(
  marks: number[],
  answeredAt: Record<number, number>,
  durationSeconds: number,
  secondsLeft: number,
): TimeBreakdown {
  const order = Object.entries(answeredAt)
    .map(([i, at]) => ({ index: Number(i), at }))
    .sort((a, b) => a.at - b.at);

  const overran: Overrun[] = [];
  let previous = 0;
  for (const { index, at } of order) {
    const seconds = Math.max(0, at - previous);
    previous = at;
    const share = marks[index] * 60;
    if (share > 0 && seconds > share * 1.5 && seconds >= share + 60) {
      overran.push({ index, marks: marks[index], seconds, ratio: seconds / share });
    }
  }
  overran.sort((a, b) => b.ratio - a.ratio);

  const unanswered = marks
    .map((m, i) => ({ m, i }))
    .filter(({ i }) => answeredAt[i] === undefined);

  return {
    overran,
    unansweredCount: unanswered.length,
    unansweredMarks: unanswered.reduce((n, { m }) => n + m, 0),
    ranOut: secondsLeft <= 0 && unanswered.length > 0,
  };
}

/** "6 min" / "45 sec" — spoken the way a student would say it. */
export function spokenDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)} sec`;
  const m = Math.round(seconds / 60);
  return `${m} min`;
}
