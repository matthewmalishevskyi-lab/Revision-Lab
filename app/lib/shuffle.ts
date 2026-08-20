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
