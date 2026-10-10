// What "done" looks like for one topic, worked out from what the student did.
//
// ⚠️ PURE AND IMPORT-FREE ON PURPOSE, like weightedShuffle.ts: the rule is the
// whole feature, so it lives somewhere a plain Node script can run it over
// thousands of invented students (scripts/check-mastery.mjs) without a
// database, a browser or the content registry.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE TOPIC PAGE NEEDED A FINISH LINE
//
// Measured on 2026-10-09: the topic page read the student's account for one
// thing only — whether to run the invisible study timer. The site already knew
// every answer they had given on the topic, every question they had got wrong
// and every definition they had marked "Got it", and showed none of it. The
// tenth visit looked exactly like the first, and nothing on the page said what
// finished looks like. Every other part of the site has a goal; this page
// had none.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE RULE, AND WHY EACH PART OF IT IS THERE
//
// A topic is MASTERED when all three hold:
//
//   1. at least MIN_ANSWERED practice answers on it, AND 80% of the most
//      recent WINDOW of them right. RECENT, not lifetime: a student who got
//      the first ten wrong and the last twenty right knows it now, and a
//      lifetime average would hold that against them for weeks. And a lucky
//      first five does not count, because five is not fifteen.
//   2. 60% of the topic's definitions most recently marked "Got it". Most
//      recently, so a card you knew last month and fluffed today counts as
//      not known — which is true.
//   3. nothing on the topic is waiting in "Revisit your mistakes". A question
//      you got wrong and have not yet got right again is the clearest
//      evidence there is that the topic is not done.
//
// ⚠️ IT IS THE CURRENT STATE, NOT A TROPHY. Mastery can be lost — get a run of
// answers wrong, or let a missed question come due — and that is deliberate.
// A finish line that stays crossed after you have forgotten the topic is a
// lie on the one page that is supposed to tell you where you are. Nothing is
// stored, so nothing can drift: it is worked out fresh from the same events
// as everything else on /progress.
// ─────────────────────────────────────────────────────────────────────────────

export const MIN_ANSWERED = 15;
export const WINDOW = 20;
export const MASTERY_ACCURACY = 0.8;
export const CARDS_KNOWN_SHARE = 0.6;

export type TopicStanding = {
  /** Every practice answer on the topic, OLDEST first. */
  answers: boolean[];
  /** How many definitions the topic has. */
  cardsTotal: number;
  /** How many of them were most recently marked "Got it". */
  cardsKnown: number;
  /** Questions on this topic due again in "Revisit your mistakes". */
  toRevisit: number;
};

export type MasteryState = "new" | "learning" | "nearly" | "mastered";

export type Mastery = {
  state: MasteryState;
  answered: number;
  /** The recent window: how many of the last `recentOf` answers were right. */
  recentRight: number;
  recentOf: number;
  /** How many definitions need to be known for mastery, how many are, of how many. */
  cardsNeeded: number;
  cardsKnown: number;
  cardsTotal: number;
  /** Questions waiting in "Revisit your mistakes". */
  toRevisit: number;
  /** 0–1 towards mastery, for a bar. Exactly 1 only when mastered. */
  progress: number;
  /** What is left, in words a student can act on. Empty when mastered. */
  needs: string[];
};

const plural = (n: number, one: string, many = one + "s") => `${n} ${n === 1 ? one : many}`;

export function topicMastery(s: TopicStanding): Mastery {
  const answered = s.answers.length;
  const recent = s.answers.slice(-WINDOW);
  const recentRight = recent.filter(Boolean).length;
  const recentOf = recent.length;
  const accuracy = recentOf ? recentRight / recentOf : 0;
  const cardsNeeded = s.cardsTotal ? Math.ceil(s.cardsTotal * CARDS_KNOWN_SHARE) : 0;
  const cardsKnown = Math.min(s.cardsKnown, s.cardsTotal);

  const enough = answered >= MIN_ANSWERED;
  const accurate = recentOf > 0 && accuracy >= MASTERY_ACCURACY;
  const cardsOk = cardsKnown >= cardsNeeded;
  const clear = s.toRevisit <= 0;

  const needs: string[] = [];
  if (!enough) needs.push(`Answer ${plural(MIN_ANSWERED - answered, "more practice question")}`);
  // ⚠️ Only once there is something to be accurate ABOUT. "Get 80% right" to
  // somebody who has answered nothing reads as a telling-off before a start.
  if (recentOf > 0 && !accurate) {
    const want = Math.ceil(MASTERY_ACCURACY * recentOf);
    needs.push(`Get ${want} of your last ${recentOf} right — you have ${recentRight}`);
  }
  if (!cardsOk) needs.push(`Mark ${plural(cardsNeeded - cardsKnown, "more definition")} “Got it”`);
  if (!clear) needs.push(`Get the ${plural(s.toRevisit, "question")} you missed right again`);

  const mastered = enough && accurate && cardsOk && clear;
  // the bar: questions are most of it, definitions the rest, and a missed
  // question waiting holds it short of full however good the rest is
  const qPart = Math.min(1, answered / MIN_ANSWERED) * Math.min(1, accuracy / MASTERY_ACCURACY);
  const cPart = cardsNeeded ? Math.min(1, cardsKnown / cardsNeeded) : 1;
  const raw = 0.65 * qPart + 0.35 * cPart;
  const progress = mastered ? 1 : Math.min(0.95, raw * (clear ? 1 : 0.9));

  const state: MasteryState = mastered ? "mastered"
    : answered === 0 && cardsKnown === 0 && clear ? "new"
    : progress >= 0.75 ? "nearly"
    : "learning";
  return { state, answered, recentRight, recentOf, cardsNeeded, cardsKnown, cardsTotal: s.cardsTotal, toRevisit: Math.max(0, s.toRevisit), progress, needs };
}

/** The words for each state, in one place so every page says the same thing. */
export const MASTERY_LABEL: Record<MasteryState, string> = {
  new: "Not started",
  learning: "Learning",
  nearly: "Nearly there",
  mastered: "Mastered",
};
