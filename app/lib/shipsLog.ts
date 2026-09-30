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

/** A number we are willing to do arithmetic with: finite, not negative, and
 *  not so large that multiplying it overflows to Infinity. ⚠️ The first version
 *  of this guard covered `par` alone, by name, because that is the one a check
 *  caught — and `kills`, `aliens`, `right` and `wrong` were all still able to
 *  bring back NaN, or a score of 140 out of 100. */
const num = (v: number, max = 1e9) => (Number.isFinite(v) && v >= 0 ? Math.min(v, max) : 0);

/** How many questions it takes for your real accuracy to count in full. */
export const ACCURACY_CONFIDENCE = 6;

export function scoreRun(run: Run): number {
  const right = num(run.right), wrong = num(run.wrong);
  const answered = right + wrong;
  // ⚠️ THE GRADE USED TO PUNISH TRYING, WHICH IS THE ONE THING IT MUST NEVER DO.
  // Answering nothing scores the middle (20 of 40) — no evidence either way.
  // With raw accuracy, ONE wrong answer therefore scored 0 and cost 20 marks,
  // and a timed-out question counts as wrong, so a single 10-second clock
  // running out while you were being shot at was worth more than every alien
  // on the deck. Measured on level 1: never pressing R scored A (80); ten
  // questions with five right scored the same 80; one attempt, wrong, scored
  // B (60). A player optimising their grade should never have opened a quiz.
  //
  // So your real accuracy fades IN over the first few questions rather than
  // applying in full from the first one. One answer moves you a little, six
  // move you all the way — a perfect run still reaches 100 and a run of wrong
  // answers still reaches 0, but one unlucky question is worth three marks
  // instead of twenty. (Ramping to full confidence, rather than the permanent
  // prior daily-practice.ts uses to RANK topics, because a grade has to be
  // able to reach both ends and a ranking does not.)
  const raw = answered === 0 ? 0.5 : right / answered;
  const confidence = Math.min(1, answered / ACCURACY_CONFIDENCE);
  const accuracy = 0.5 + (raw - 0.5) * confidence;
  const aliens = num(run.aliens), kills = num(run.kills);
  const cleared = aliens === 0 ? 1 : Math.min(1, kills / aliens);
  // full marks at par, nothing at three times par, straight line between
  // ⚠️ `par <= 0` is FALSE for NaN, so a par that is not a number has to be
  // ruled out by name or the whole score comes back NaN — caught by the check.
  // The 1e9 cap matters too: `Number.isFinite(1e308)` is true and `3 * 1e308`
  // is Infinity, so the guard without a ceiling still produced NaN.
  const par = num(run.par, 1e9), seconds = num(run.seconds, 1e9);
  const pace = par === 0 ? 1 : Math.max(0, Math.min(1, (3 * par - seconds) / (2 * par)));
  const score = accuracy * WEIGHTS.accuracy + cleared * WEIGHTS.aliens + pace * WEIGHTS.time;
  return Math.max(0, Math.min(100, Math.round(score)));
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
  const right = num(run.right), wrong = num(run.wrong), answered = right + wrong;
  const accuracy = answered === 0 ? null : right / answered;
  const was = log[run.level];
  // ⚠️ A non-finite `seconds` used to reach `Math.min` and poison the record:
  // NaN stringifies as null, parseLog then rejects the whole entry, and the
  // deck's runs, best score, kills and accuracy all vanished with it. The one
  // field with no fallback is the one that has to be guarded hardest.
  const seconds = Number.isFinite(run.seconds) && run.seconds >= 0 ? Math.min(run.seconds, 1e7) : (was?.bestSeconds ?? 0);
  const next: LevelBest = {
    runs: (was?.runs ?? 0) + 1,
    bestScore: Math.max(was?.bestScore ?? 0, score),
    bestGrade: gradeFor(Math.max(was?.bestScore ?? 0, score)),
    // ⚠️ best time means the SMALLEST, so a missing previous value cannot be 0
    bestSeconds: was ? Math.min(was.bestSeconds, seconds) : seconds,
    mostKills: Math.max(was?.mostKills ?? 0, num(run.kills, 1e6)),
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
  // ⚠️ Cap AFTER validating, not before. Slicing first meant forty junk keys
  // written ahead of a real one hid every real deck in the log.
  let kept = 0;
  for (const [level, entry] of Object.entries(value as Record<string, unknown>)) {
    if (kept >= MAX_LEVELS) break;
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
      // clamped like `runs` above: an edited file could otherwise render
      // "1.67e+298:00" as a best time, or "1e+308 aliens"
      bestSeconds: Math.min(359999, Math.round(e.bestSeconds)),
      mostKills: Math.min(9999, Math.round(e.mostKills)),
      bestAccuracy: accuracy,
    };
    kept++;
  }
  return out;
}

export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
