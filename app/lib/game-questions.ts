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
import { getSubject } from "./subjects";

export type GameQuestion = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string };

const MAX_POOL = 120;
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

type Raw = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string; easy: boolean };

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
      out.push({ question: q.question, choices, correct: choices.indexOf(right), topic: slug, topicTitle: title, easy });
      continue;
    }
    // written answer: only numbers can be turned into buttons safely
    const rightText = accepted.find((a) => Number.isFinite(Number(a)));
    if (!rightText) continue;
    const wrong = numericChoices(rightText, accepted);
    if (!wrong) continue;
    const choices = shuffle([rightText, ...wrong]);
    out.push({ question: q.question, choices, correct: choices.indexOf(rightText), topic: slug, topicTitle: title, easy });
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
  const strip = ({ question, choices, correct, topic, topicTitle }: Raw): GameQuestion => {
    const right = choices[correct], mixed = shuffle([...choices]);
    return { question, choices: mixed, correct: mixed.indexOf(right), topic, topicTitle };
  };
  const ownEasy = picked.slice(0, fromChosen).filter((q) => q.easy);
  return {
    reload: shuffle(picked).slice(0, MAX_POOL).map(strip),
    // the stomp pool stays on the chosen topics where it can: they are the
    // quick ones, and there are plenty
    easy: shuffle((ownEasy.length >= 12 ? ownEasy : picked.filter((q) => q.easy))).slice(0, MAX_POOL).map(strip),
  };
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
