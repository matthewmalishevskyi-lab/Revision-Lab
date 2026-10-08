// What to show when somebody presses "Explain further" under a key fact.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// Matthew: "the actual information part is not so good... for example a button
// 'explain further' expands the information."
//
// He is right, and the measurement says exactly how right. Across the site:
//
//     285 topics · 1,278 key-fact blocks · 6,291 bullet points
//     median 17 words per bullet
//     bullets containing ANY causal connective
//       ("because", "so that", "which means") ....... 509 of 6,291  (8%)
//
// A 17-word bullet is one sentence, and 92% of them state a fact without ever
// saying why it is true. "All control systems have RECEPTORS, a COORDINATION
// CENTRE, and EFFECTORS" is three technical words and no explanation. That is
// a good revision card and a bad explanation: perfect for somebody who sat the
// lesson and is reminding themselves the night before, useless for somebody
// who missed it — and on a free revision site that second person is a lot of
// who turns up. They have nowhere to go.
//
// The answer is NOT to write more into the bullets, which would wreck the
// thing that works. It is progressive disclosure: the one-liner stays exactly
// as it is, and a button opens the longer version underneath.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE MEASUREMENT THAT DECIDED HOW TO BUILD IT
//
// The obvious objection is "that is 1,278 explanations to write". But the site
// has already written them and filed them in four different sections, five to
// twelve phone screens apart. Measured, per key-fact block:
//
//     a flashcard definition for a term in the block ...... 1,214  (95%)
//     a common mistake about the same material ............ 1,134  (89%)
//     a worked example on the same material ................. 568  (44%)
//     ──────────────────────────────────────────────────────────────
//     something to show ................................... 1,273 (100%)
//     two or more KINDS of thing .......................... 1,150  (90%)
//     nothing at all ........................................... 5   (0%)
//
// So this ships with no new content and has something real to open on every
// block but five. What it CANNOT do is answer "why is this true" — nothing on
// the site currently says why, which is the 8% above. That is a writing job,
// and it is stage 2.
//
// ─────────────────────────────────────────────────────────────────────────────
// DERIVED, NEVER A HAND-WRITTEN MAPPING
//
// Same argument teacher-tools.ts makes about which topics have diagrams and
// marks.ts about tariffs: a hand list linking 1,278 blocks to their material
// is wrong the moment somebody writes the next bullet, and nothing says so.
// The block's own words are the evidence.
//
// ⚠️ SERVER ONLY. This reads whole topics, so a client component importing it
// would ship the content registry to the browser — the trap calculator-topics
// .ts already documents. The page does the matching and passes plain strings
// down; there is a check in check-security.mjs.

import type { TopicContent } from "./content";

/** Words too common to be evidence that two sentences are about one thing. */
const STOP = new Set(
  ("the a an and or of to in is are was were be been being for on at by with from this that these those it its as not but if then " +
    "than so into over under more most less least you your they their there here which who what when where how why all any each " +
    "other some such only own same very can will just has have had do does did would could should may might must one two three " +
    "also about after before between during through while because means give gives given make makes made use uses used using " +
    "called known type types kind form forms part parts thing things").split(" "),
);

/** The words in a piece of text worth matching on. */
function keywords(text: string): Set<string> {
  return new Set(
    String(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 4 && !STOP.has(w)),
  );
}

function overlap(a: Set<string>, b: Set<string>): number {
  let n = 0;
  for (const w of a) if (b.has(w)) n++;
  return n;
}

/**
 * How strongly a term belongs to a block: how many times its words actually
 * appear in the block, with a bonus for the heading.
 *
 * ⚠️ COUNTING, NOT JUST PRESENCE, AND THE FIRST VERSION GOT THIS WRONG.
 * Scoring on "does this word appear at all" put the definition of INSULIN
 * under "The endocrine glands", which mentions it once in passing, instead of
 * under "Controlling blood glucose", which is three quarters about it. Both
 * scored 1, and the tie broke on whichever was considered first — which is to
 * say, on nothing. Counting occurrences is the difference between a block
 * that merely name-drops a term and the block that is about it.
 */
function weight(termWords: Set<string>, heading: string, body: string): number {
  const headWords = keywords(heading);
  let score = 0;
  for (const w of termWords) {
    const hits = body.toLowerCase().split(w).length - 1;
    if (hits > 0) score += hits;
    if (headWords.has(w)) score += 3;
  }
  return score;
}

export type Explanation = {
  /** Flashcard definitions for terms this block uses. */
  definitions: { term: string; definition: string }[];
  /** The matching common mistake, if there is one. */
  mistake?: { wrong: string; right: string };
  /** The matching worked example, if there is one. */
  example?: { question: string; steps: string[]; answer: string };
};

/**
 * Work out, for every key-fact block in a topic, which of the topic's own
 * definitions, mistakes and worked examples belong under it.
 *
 * Returned as an array lined up with `content.keyFacts`, so the page can do
 * `explanations[i]` without matching headings back up by string.
 *
 * ⚠️ EACH PIECE OF MATERIAL IS GIVEN TO ONE BLOCK ONLY — the one it fits best.
 * The first version scored each block independently, and the result was the
 * same definition of "homeostasis" opening under all four blocks of the
 * homeostasis topic, which reads as padding and teaches the reader to stop
 * pressing the button. Assigning by best fit is what makes the expansion feel
 * specific to the fact above it.
 */
export function explainFurther(content: TopicContent): Explanation[] {
  const blocks = content.keyFacts ?? [];
  const out: Explanation[] = blocks.map(() => ({ definitions: [] }));
  if (!blocks.length) return out;

  const blockWords = blocks.map((b) =>
    keywords(`${b.heading} ${(b.points ?? []).join(" ")}`),
  );

  /** Give one item to the single block that matches it best, or to nobody. */
  const blockBodies = blocks.map((b) => (b.points ?? []).join(" "));

  function assign<T>(
    items: readonly T[],
    textOf: (item: T) => string,
    minScore: number,
    place: (into: Explanation, item: T) => void,
    perBlockCap: number,
    placedCount: (e: Explanation) => number,
    scoreOf: (k: Set<string>, i: number) => number = (k, i) => overlap(k, blockWords[i]),
  ) {
    // Score every (item, block) pair first, then hand them out best-first, so
    // a strong match is never crowded out by a weak one that was simply
    // considered earlier.
    const scored: { item: T; block: number; score: number }[] = [];
    for (const item of items) {
      const k = keywords(textOf(item));
      if (!k.size) continue;
      for (let i = 0; i < blocks.length; i++) {
        const score = scoreOf(k, i);
        if (score >= minScore) scored.push({ item, block: i, score });
      }
    }
    scored.sort((a, b) => b.score - a.score);
    const used = new Set<T>();
    for (const { item, block, score } of scored) {
      void score;
      if (used.has(item)) continue;
      if (placedCount(out[block]) >= perBlockCap) continue;
      used.add(item);
      place(out[block], item);
    }
  }

  // ── What the words mean ───────────────────────────────────────────────────
  // A definition is matched on its TERM, not its body: the term is what the
  // block actually uses, and matching on the body would attach a definition to
  // any block that happens to share its vocabulary.
  //
  // Three per block, because the point is to unblock a reader, not to reprint
  // the Definitions section a screen early.
  assign(
    content.flashcards ?? [],
    (f) => f.term,
    1,
    (into, f) => into.definitions.push({ term: f.term, definition: f.definition }),
    3,
    (e) => e.definitions.length,
    (k, i) => weight(k, blocks[i].heading, blockBodies[i]),
  );

  // ── Where people go wrong ────────────────────────────────────────────────
  // Three shared words rather than one: a misconception is two whole
  // sentences, so a single shared word is almost always a coincidence.
  assign(
    content.misconceptions ?? [],
    (m) => `${m.wrong} ${m.right}`,
    3,
    (into, m) => { into.mistake = { wrong: m.wrong, right: m.right }; },
    1,
    (e) => (e.mistake ? 1 : 0),
  );

  // ── The method in action ─────────────────────────────────────────────────
  assign(
    content.workedExamples ?? [],
    (w) => `${w.question} ${(w.steps ?? []).join(" ")}`,
    3,
    (into, w) => { into.example = { question: w.question, steps: w.steps, answer: w.answer }; },
    1,
    (e) => (e.example ? 1 : 0),
  );

  return out;
}

/** Is there anything at all to open for this block? */
export function hasExplanation(e: Explanation): boolean {
  return e.definitions.length > 0 || Boolean(e.mistake) || Boolean(e.example);
}
