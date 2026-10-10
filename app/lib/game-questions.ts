// The questions the alien game asks, drawn from the site's own practice
// questions. Server-only: it reads the content registry, and only the chosen
// topics' questions ever reach the browser.
//
// Two pools:
//   reload - the questions asked when you recharge the blaster
//   easy   - the recognise/recall ones (difficulty 1-2), for the 5-second
//            "stomp" questions, which Matthew asked to be "rapid and easy"
//
// ⚠️ WHY THERE IS MORE HERE THAN "READ THE MULTIPLE-CHOICE QUESTIONS"
//
// Matthew played a full game and got repeats: "if a person is doing year nine
// maths, they would have a lot of same questions popping up." He was right,
// and the arithmetic says so — a topic carries five to nine multiple-choice
// questions, so three topics give about twenty, and one playthrough asks more
// than that. Two things widen the pool without inventing any content:
//
//   1. NUMERIC WRITTEN ANSWERS BECOME MULTIPLE CHOICE. A question whose every
//      accepted answer is a number can be asked with four buttons: the real
//      answer plus three wrong numbers built from it (see `numericChoices`).
//      Only numbers, because a wrong option has to be definitely wrong, and
//      that is checkable for a number and a guess for a sentence.
//   2. IF THE CHOSEN TOPICS STILL DON'T FILL THE POOL, it tops up from the
//      rest of the same subject, nearest years first. Every question shows the
//      topic it came from, so this is visible, not a swindle.

import { getTopicContent } from "./content";
import { difficultyOf } from "./difficulty";
import { normalise } from "./normalise";
import { shuffle } from "./shuffle";
import { smoothedAccuracy } from "./daily-practice";
import { getSubject } from "./subjects";

export type GameQuestion = {
  question: string; choices: string[]; correct: number; topic: string; topicTitle: string;
  /** The site's model answer, shown after a WRONG answer so the game teaches
   *  rather than only marking. Absent when the model answer says no more than
   *  the button already did — see `whyFor`. */
  why?: string;
};

/** The longest model answer the quiz panel can hold without becoming a wall of
 *  text mid-firefight. Measured against the panel: three wrapped lines. */
const WHY_MAX = 190;

/**
 * What to show a student who just got this wrong.
 *
 * ⚠️ NOT simply the model answer. Most of them are worth reading — "32, because
 * 2 x 2 x 2 x 2 x 2 = 32" teaches the method — but plenty are just the answer
 * again ("About 100"), and printing that under a button that already says 100
 * is noise that trains people to ignore the panel. So a model answer earns its
 * place only if it says something the right button does not.
 *
 * Long ones are cut at a SENTENCE, never mid-word: half an explanation is worse
 * than none, because the reader cannot tell what they are missing.
 */
export function whyFor(answer: string, right: string): string | undefined {
  // ⚠️ The panel draws PLAIN TEXT on a canvas: `wrap()` splits on whitespace,
  // so a real line break becomes a space and a two-line answer arrives as one
  // run-on sentence. One model answer (maths, vectors) is prose followed by a
  // stacked column vector drawn out of U+239B..U+23A0 bracket pieces, which no
  // system font on a phone or a laptop has — it came out as four empty boxes
  // glued to the end of the sentence. Keep the prose, drop the picture.
  let text = (answer ?? "").replace(/\u00a0/g, " ").trim();
  const firstBreak = text.search(/[\r\n]/);
  if (firstBreak >= 0) text = text.slice(0, firstBreak).trim().replace(/[\s,;:—-]+$/, "") + "…";
  if (!text) return undefined;
  // Does this say anything the right button does not? ⚠️ Testing only whether
  // it STARTS with the answer is not enough: "About 100" against a button
  // reading 100 begins with the word "about" and sails through, and printing
  // that under the button is pure noise. So take the answer out of the sentence
  // and see whether anything of substance is left.
  const rightBare = normalise(right);
  const adds = (s: string) => { const b = normalise(s); return b !== rightBare && b.replace(rightBare, "").length >= 10; };
  if (!adds(text)) return undefined;
  if (text.length <= WHY_MAX) return text;

  // Too long: keep whole sentences up to the cap.
  const parts = text.split(/(?<=[.!?])\s+/);
  let out = parts[0];
  for (const p of parts.slice(1)) { if ((out + " " + p).length > WHY_MAX) break; out += " " + p; }
  // (the first sentence on its own can already be over the cap, so test both)
  if (out.length <= WHY_MAX && adds(out)) return out;

  // ⚠️ But cutting to whole sentences can leave ONLY a restatement of the
  // button, which is the very thing this function exists to refuse. Caught by
  // the checker on a real maths question whose first sentence is its own
  // multiple-choice option and whose second sentence is the actual teaching. So
  // when that happens, cut at a WORD instead: the start of a real explanation,
  // marked as cut, beats a sentence that says nothing.
  // ⚠️ And WHERE it is cut decides whether what is left still means anything.
  // Cutting at the last word leaves danglers that reverse the sense — one real
  // one ended "…as a distortion of, not", and several ended on the subject of a
  // clause with its predicate gone ("…closed skills such as a free throw"). So
  // prefer the last CLAUSE boundary in the back half of the window: a shorter
  // complete thought beats a longer half of one.
  const cut = text.slice(0, WHY_MAX - 1);
  const clause = Math.max(cut.lastIndexOf(", "), cut.lastIndexOf("; "), cut.lastIndexOf(" — "), cut.lastIndexOf(": "));
  const word = cut.lastIndexOf(" ");
  const at = clause > WHY_MAX * 0.55 ? clause : word;
  // No usable boundary in the first 190 characters means the model answer is
  // one enormous unbroken token, which teaches nothing anyway — better to show
  // no explanation than half a word with an ellipsis glued to it.
  if (at <= 40) return undefined;
  let out2 = cut.slice(0, at).trimEnd();
  // a trailing connective is the same dangling-clause problem in one word
  out2 = out2.replace(/[\s,;:—-]*\b(?:and|or|but|not|never|unless|so|because|than|that|which|with|of|to|for|a|an|the|is|are|was|were)$/i, "").trimEnd();
  out2 = out2.replace(/[\s,;:—-]+$/, "");
  return out2.length > 40 ? out2 + "…" : undefined;
}

// ⚠️ 240, not 120. With ammunition off the floor a full clear of all nine
// decks now costs about 127 questions, and a pool of 120 would guarantee the
// repeats Matthew complained about in September ("if a person is doing year
// nine maths, they would have a lot of same questions popping up"). Maths
// alone has 1,722 practice questions to draw from, so the cap was the only
// thing in the way.
const MAX_POOL = 240;
/** Below this many reload questions, top up from the rest of the subject. */
const WANT = 60;
const MAX_CHOICES = 4;

/** Topics in a subject with enough questions to play with. */
export function playableTopics(subjectSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return [];
  return subject.years.map((y) => ({
    year: y.year,
    topics: y.topics
      .map((t) => ({ ...t, count: topicQuestions(subjectSlug, t.slug, t.title).length }))
      .filter((t) => t.count >= 3),
  })).filter((y) => y.topics.length > 0);
}

/** A number written the way the answer writes it: same decimals, no silly precision. */
function sameShape(value: number, like: string): string {
  const dp = (like.split(".")[1] ?? "").length;
  const out = value.toFixed(dp);
  return dp ? out : String(Math.round(value));
}

/**
 * Three wrong numbers for a numeric answer: the mistakes a student actually
 * makes — out by a place, off by one, halved, doubled, the sign dropped — and
 * never a value the question would accept.
 */
function numericChoices(rightText: string, accepted: string[]): string[] | null {
  const n = Number(rightText);
  if (!Number.isFinite(n)) return null;
  const banned = new Set(accepted.map(normalise));
  const wrong: string[] = [];
  const candidates = [n * 2, n / 2, n + 1, n - 1, n * 10, n / 10, -n, n + 10, n - 10, n * 1.1, n * 0.9];
  for (const c of candidates) {
    if (!Number.isFinite(c) || c === n) continue;
    // keep the same "kind" of number: no negatives for a positive answer (a
    // length can't be -4), and nothing silly like 0.0001 or a million
    if (n > 0 && c <= 0) continue;
    if (Math.abs(c) > 1e7 || (c !== 0 && Math.abs(c) < 1e-4)) continue;
    const text = sameShape(c, rightText);
    if (normalise(text) === normalise(rightText) || banned.has(normalise(text)) || wrong.some((w) => normalise(w) === normalise(text))) continue;
    wrong.push(text);
    if (wrong.length === MAX_CHOICES - 1) break;
  }
  return wrong.length === MAX_CHOICES - 1 ? wrong : null;
}

type Raw = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string; easy: boolean; why?: string };

/** Every question in one topic that the game can ask, ready-made or built.
 *  Cached: the picker asks for every topic of every subject to size the pools. */
const cache = new Map<string, Raw[]>();
function topicQuestions(subjectSlug: string, slug: string, title: string): Raw[] {
  const key = subjectSlug + "/" + slug;
  const hit = cache.get(key); if (hit) return hit;
  const out: Raw[] = [];
  cache.set(key, out);
  for (const q of getTopicContent(subjectSlug, slug)?.practice ?? []) {
    const accepted = (q.accept ?? []).map((a) => a.trim()).filter(Boolean);
    if (!accepted.length) continue; // self-marked questions have nothing to check against
    const easy = difficultyOf(subjectSlug, q) <= 2;
    if (q.choices && q.choices.length >= 2) {
      const acceptedN = accepted.map(normalise);
      const right = q.choices.find((c) => acceptedN.includes(normalise(c)));
      if (!right) continue;
      // Four buttons, keys 1-4: keep the right answer plus up to three wrong ones.
      const wrong = shuffle(q.choices.filter((c) => c !== right)).slice(0, MAX_CHOICES - 1);
      const choices = shuffle([right, ...wrong]);
      out.push({ question: q.question, choices, correct: choices.indexOf(right), topic: slug, topicTitle: title, easy, why: whyFor(q.answer, right) });
      continue;
    }
    // written answer: only numbers can be turned into buttons safely
    const rightText = accepted.find((a) => Number.isFinite(Number(a)));
    if (!rightText) continue;
    const wrong = numericChoices(rightText, accepted);
    if (!wrong) continue;
    const choices = shuffle([rightText, ...wrong]);
    out.push({ question: q.question, choices, correct: choices.indexOf(rightText), topic: slug, topicTitle: title, easy, why: whyFor(q.answer, rightText) });
  }
  return out;
}

export function buildGameQuestions(subjectSlug: string, topicSlugs: string[]): { reload: GameQuestion[]; easy: GameQuestion[] } {
  const subject = getSubject(subjectSlug);
  if (!subject) return { reload: [], easy: [] };
  const all = subject.years.flatMap((y, yi) => y.topics.map((t) => ({ ...t, yi })));
  const chosen = new Set(topicSlugs);
  const picked: Raw[] = [];
  const seen = new Set<string>();
  const add = (list: Raw[]) => { for (const q of list) { const key = normalise(q.question); if (seen.has(key)) continue; seen.add(key); picked.push(q); } };

  for (const t of all) if (chosen.has(t.slug)) add(topicQuestions(subjectSlug, t.slug, t.title));
  const fromChosen = picked.length;

  if (picked.length < WANT) {
    // top up from the rest of the subject, starting with the years the chosen
    // topics are in, so a Year 9 student is not handed Year 11 work first
    const years = new Set(all.filter((t) => chosen.has(t.slug)).map((t) => t.yi));
    const rest = all.filter((t) => !chosen.has(t.slug)).sort((a, b) => Number(years.has(b.yi)) - Number(years.has(a.yi)));
    for (const t of rest) {
      if (picked.length >= WANT) break;
      add(topicQuestions(subjectSlug, t.slug, t.title));
    }
  }

  // the buttons are shuffled per game, not per server process: the cache above
  // holds one fixed order, and a fixed order is how "the answer is always A"
  // happened on the rest of the site
  const strip = ({ question, choices, correct, topic, topicTitle, why }: Raw): GameQuestion => {
    const right = choices[correct], mixed = shuffle([...choices]);
    return { question, choices: mixed, correct: mixed.indexOf(right), topic, topicTitle, ...(why ? { why } : {}) };
  };
  const ownEasy = picked.slice(0, fromChosen).filter((q) => q.easy);
  return {
    reload: shuffle(picked).slice(0, MAX_POOL).map(strip),
    // the stomp pool stays on the chosen topics where it can: they are the
    // quick ones, and there are plenty
    easy: shuffle((ownEasy.length >= 12 ? ownEasy : picked.filter((q) => q.easy))).slice(0, MAX_POOL).map(strip),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// QUESTIONS FROM YOUR WEAKEST TOPICS (2026-10-10)
//
// The game used to deal the chosen topics' questions evenly. The site already
// knows which topics a student is bad at — `/today`'s recommender ranks them by
// smoothed accuracy — and the game never asked. This is the item that has sat
// at the top of the backlog as "the biggest educational win per line of code
// in the project" since the recommender shipped.
//
// A WEIGHT per topic, not a filter. Filtering to the weakest topic would leave
// a student drilling the one thing they hate for nine decks, and would starve
// the topics they ticked on purpose. A weight just tilts which questions tend
// to come up first (see weightedShuffle.ts) — every question still turns up
// once before anything repeats.
// ─────────────────────────────────────────────────────────────────────────────

/** Floors and ceilings, so no topic disappears and none takes over. */
export const MIN_TOPIC_WEIGHT = 0.4;
export const MAX_TOPIC_WEIGHT = 3;

/**
 * How strongly each topic should be favoured, from the student's own record.
 *
 * A topic with no history sits at exactly 1, so a brand-new student — or a
 * logged-out one, who passes no scores at all — gets the old even deal. Below
 * the prior's 60% a topic climbs towards 3; a topic answered perfectly falls
 * towards 0.4 and stays in the mix.
 *
 * ⚠️ Smoothed, not raw, for the reason daily-practice.ts gives at length: with
 * raw accuracy ONE wrong answer makes a topic 0%, the worst score possible,
 * and that topic would then dominate every game for ever. With the prior, one
 * wrong answer out of one is 48%, and thirty answers swamp the prior entirely.
 */
export function weakTopicWeights(
  scores: readonly { topicSlug: string; correct: number; questionsAnswered: number }[],
): Record<string, number> {
  const out: Record<string, number> = {};
  for (const s of scores) {
    const answered = Math.max(0, s.questionsAnswered || 0);
    const correct = Math.max(0, Math.min(answered, s.correct || 0));
    // ⚠️ /today's OWN smoothing, imported rather than copied: a second copy of
    // its prior here would drift the first time somebody retunes the
    // recommender, and the game and /today would quietly disagree about which
    // topic is your weakest. Even the "no history" baseline is asked of it.
    const baseline = smoothedAccuracy(0, 0);
    const raw = (1 - smoothedAccuracy(correct, answered)) / (1 - baseline);
    out[s.topicSlug] = Math.max(MIN_TOPIC_WEIGHT, Math.min(MAX_TOPIC_WEIGHT, raw));
  }
  return out;
}

/** How many questions a choice of topics would give, for the picker to show. */
export function countGameQuestions(subjectSlug: string, topicSlugs: string[]): { own: number; total: number } {
  const subject = getSubject(subjectSlug);
  if (!subject) return { own: 0, total: 0 };
  const own = new Set<string>();
  for (const y of subject.years) for (const t of y.topics) {
    if (!topicSlugs.includes(t.slug)) continue;
    for (const q of topicQuestions(subjectSlug, t.slug, t.title)) own.add(normalise(q.question));
  }
  return { own: own.size, total: buildGameQuestions(subjectSlug, topicSlugs).reload.length };
}
