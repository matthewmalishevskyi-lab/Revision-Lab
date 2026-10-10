// A shuffle where some items tend to come first, without ever repeating one.
//
// ⚠️ PURE AND IMPORT-FREE ON PURPOSE. The alien game runs this in the browser
// every time its question deck runs out, so it must not pull in anything that
// reads the content registry — the same rule calculator-topics.ts and
// explainFurther.ts document. The weights are worked out on the server and
// arrive as plain numbers.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY A WEIGHTED SHUFFLE AND NOT A WEIGHTED DRAW
//
// The obvious way to make weak topics come up more often is to draw each
// question at random in proportion to its weight. That repeats questions — a
// heavily weighted one can come up twice in a row, and a deck of 120 would
// show the same few over and over while some are never asked at all. The
// September complaint was precisely about repeats ("a lot of same questions
// popping up").
//
// A weighted SHUFFLE keeps every item exactly once per pass and changes only
// the ORDER: weak-topic questions tend to land near the front, so a deck that
// asks twenty questions of a pool of 120 asks mostly the ones you need, and
// the rest still turn up before anything repeats.
//
// The method is Efraimidis–Spirakis: give each item the key u^(1/w) for a
// uniform random u, and sort by key, largest first. An item with twice the
// weight is not guaranteed to come first — it is twice as likely to beat any
// given rival, which is exactly "tends to".

/**
 * Shuffle `items` so that higher-weighted ones tend to come FIRST.
 *
 * Weights must be positive. Equal weights give an ordinary uniform shuffle.
 * `rand` is injectable so a check can make it deterministic.
 */
export function weightedShuffle<T>(
  items: readonly T[],
  weight: (item: T) => number,
  rand: () => number = Math.random,
): T[] {
  return items
    .map((item) => {
      const w = weight(item);
      const safe = Number.isFinite(w) && w > 0 ? w : 1;
      // 1 - rand() rather than rand(): rand() can return 0, and 0^(1/w) is 0
      // for every weight, which would tie the unlucky items at the very back
      return { item, key: Math.pow(1 - rand(), 1 / safe) };
    })
    .sort((a, b) => b.key - a.key)
    .map((x) => x.item);
}
