// The ship's log: how each deck of the alien game has gone, best run first.
//
// WHY THIS IS IN THE BROWSER AND NOT THE DATABASE. Every other record on this
// site is an `activity` row, and the obvious build is a new `kind`. That means
// widening the CHECK constraint on `activity.kind` in Supabase — and this
// project has already lost a week to exactly that: TEST_BADGE_SETUP.sql was
// written, never run, and every completed test was silently refused by
// Postgres while the site showed no error at all (see PROJECT_NOTES,
// 2026-08-20). A game score is not worth that risk. It is also genuinely a
// fact about one device — nobody else sees it, losing it costs nothing — which
// is the same test the wardrobe's equipped outfit and the saved answers pass.
//
// The cost, stated rather than hidden: a best time set on a laptop does not
// follow you to a phone, and clearing site data clears it.
//
// This file is deliberately pure — no React, no localStorage — so the folding
// and the validation can be checked by a plain Node script.

/** What one finished level is worth, out of 100. */
export const GRADE_BANDS = [
  { at: 90, letter: "S" },
  { at: 75, letter: "A" },
  { at: 60, letter: "B" },
  { at: 45, letter: "C" },
  { at: 0, letter: "D" },
] as const;

export type Grade = (typeof GRADE_BANDS)[number]["letter"];

export function gradeFor(score: number): Grade {
  for (const band of GRADE_BANDS) if (score >= band.at) return band.letter;
  return "D";
}

/**
 * The score for a finished level, out of 100.
 *
 * Three things, because any one on its own rewards the wrong behaviour:
 * time alone rewards sprinting past every alien and every question, kills
 * alone rewards ignoring the clock, and accuracy alone is already measured
 * everywhere else on the site. Together they say "you cleared the deck, you
 * answered well, and you did not take all afternoon".
 *
 * ⚠️ Accuracy counts for the most of the three ON PURPOSE. This is a revision
 * site: the game exists to get questions answered, and a grade that paid more
 * for shooting would be telling students the opposite.
 */
export const WEIGHTS = { accuracy: 40, aliens: 30, time: 30 } as const;

export type Run = {
  level: string;
  seconds: number;
  kills: number;
  aliens: number;
  right: number;
  wrong: number;
  /** The level's par time in seconds — full marks at or under it. */
  par: number;
};

export function scoreRun(run: Run): number {
  const answered = run.right + run.wrong;
  // No questions answered is not 100% and not 0%: it is no evidence either
  // way, so it scores the middle rather than rewarding never pressing R.
  const accuracy = answered === 0 ? 0.5 : run.right / answered;
  const cleared = run.aliens === 0 ? 1 : Math.min(1, run.kills / run.aliens);
  // full marks at par, nothing at three times par, straight line between
  // ⚠️ `par <= 0` is FALSE for NaN, so a par that is not a number has to be
  // ruled out by name or the whole score comes back NaN — caught by the check.
  const par = Number.isFinite(run.par) && run.par > 0 ? run.par : 0;
  const seconds = Number.isFinite(run.seconds) ? run.seconds : 0;
  const pace = par === 0 ? 1 : Math.max(0, Math.min(1, (3 * par - seconds) / (2 * par)));
  return Math.round(accuracy * WEIGHTS.accuracy + cleared * WEIGHTS.aliens + pace * WEIGHTS.time);
}

export type LevelBest = {
  runs: number;
  bestScore: number;
  bestGrade: Grade;
  bestSeconds: number;
  mostKills: number;
  /** 0–1, or null if no question was ever answered on this deck. */
  bestAccuracy: number | null;
};

export type ShipsLog = Record<string, LevelBest>;

export const SHIPS_LOG_KEY = "rl-game-log";
const MAX_LEVELS = 40;

/** Add a finished run to the log, keeping the best of each figure. */
export function foldRun(log: ShipsLog, run: Run): ShipsLog {
  const score = scoreRun(run);
  const answered = run.right + run.wrong;
  const accuracy = answered === 0 ? null : run.right / answered;
  const was = log[run.level];
  const next: LevelBest = {
    runs: (was?.runs ?? 0) + 1,
    bestScore: Math.max(was?.bestScore ?? 0, score),
    bestGrade: gradeFor(Math.max(was?.bestScore ?? 0, score)),
    // ⚠️ best time means the SMALLEST, so a missing previous value cannot be 0
    bestSeconds: was ? Math.min(was.bestSeconds, run.seconds) : run.seconds,
    mostKills: Math.max(was?.mostKills ?? 0, run.kills),
    bestAccuracy: accuracy === null ? (was?.bestAccuracy ?? null) : Math.max(was?.bestAccuracy ?? 0, accuracy),
  };
  return { ...log, [run.level]: next };
}

const isFinite_ = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);

/**
 * Read a stored log back, dropping anything that is not the right shape.
 *
 * Everything here came out of localStorage, which anyone can edit, and a
 * corrupt entry must never break the page it is shown on — the same rule
 * savedAnswers.ts follows for the same reason.
 */
export function parseLog(raw: string | null): ShipsLog {
  if (!raw) return {};
  let value: unknown;
  try { value = JSON.parse(raw); } catch { return {}; }
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out: ShipsLog = {};
  for (const [level, entry] of Object.entries(value as Record<string, unknown>).slice(0, MAX_LEVELS)) {
    if (!level || level.length > 120 || !entry || typeof entry !== "object") continue;
    const e = entry as Record<string, unknown>;
    if (!isFinite_(e.runs) || !isFinite_(e.bestScore) || !isFinite_(e.bestSeconds) || !isFinite_(e.mostKills)) continue;
    if (e.runs < 1 || e.bestSeconds < 0 || e.mostKills < 0) continue;
    const accuracy = isFinite_(e.bestAccuracy) && e.bestAccuracy >= 0 && e.bestAccuracy <= 1 ? e.bestAccuracy : null;
    const bestScore = Math.max(0, Math.min(100, Math.round(e.bestScore)));
    out[level] = {
      runs: Math.min(9999, Math.round(e.runs)),
      bestScore,
      // ⚠️ recomputed, never read back: a letter stored beside the number it
      // comes from is a second copy of the same fact, and an edited file could
      // otherwise show an S against a score of 4.
      bestGrade: gradeFor(bestScore),
      bestSeconds: Math.round(e.bestSeconds),
      mostKills: Math.round(e.mostKills),
      bestAccuracy: accuracy,
    };
  }
  return out;
}

export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
