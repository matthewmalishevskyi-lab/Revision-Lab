// Fisher–Yates. Picking a random order with `Math.random()` alone (sorting
// by a random comparator, `array.sort(() => Math.random() - 0.5)`) is a
// classic near-miss — it doesn't produce a uniform shuffle and quietly
// over-favours certain orderings. This does.
//
// Shared here because two different things in the site need exactly the
// same operation: the exam page uses it to pick which QUESTIONS appear in a
// mock exam, and Practice.tsx / MockExam.tsx use it to scramble the order
// multiple-choice OPTIONS are shown in (see the comment wherever it's
// called from for why that second use exists at all).
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// THE SAME SHUFFLE, BUT DECIDED BY *WHICH* QUESTION IT IS RATHER THAN *WHEN*
// IT RENDERED — which is what stops React tearing the page down and rebuilding
// it on arrival.
//
// The shuffle above uses `Math.random()`. That is exactly right for picking
// which questions go in a mock exam, and exactly wrong for deciding the order
// options are DRAWN in, because that order is computed twice: once on the
// server when the HTML is built, and again in the browser when React takes
// over. Two calls to `Math.random()` give two different orders, the browser
// finds HTML that doesn't match what it just rendered, and React throws the
// whole subtree away and re-renders it — a real console error on every topic
// page with multiple-choice questions, and the server's work wasted.
//
// Seeding from the question's own TEXT fixes it: the same question always
// produces the same order, on the server and in the browser, so the two agree.
// The correct answer still isn't sitting at A — which was the actual point of
// shuffling — it just lands in a position decided by the question rather than
// by chance.
//
// The trade-off, stated plainly: a given question shows its options in the
// same order every visit. That's a fair price for the page not erroring, and
// it's still miles from the original bug where EVERY answer was option A.
// ─────────────────────────────────────────────────────────────────────────────
export function seedFromText(text: string): number {
  // A small, ordinary string hash. 31 is the traditional multiplier; `| 0`
  // keeps it inside a 32-bit integer instead of drifting into floats.
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  // A linear congruential generator — the numbers are the well-known ones
  // from Numerical Recipes. Not good enough for anything security-related,
  // which this very deliberately is not: it decides which order four answer
  // buttons appear in.
  let state = seed || 1;
  function nextRandom(): number {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  }

  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
