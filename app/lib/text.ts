// Small text helpers, kept together so the rules live in one place.

// "a" or "an", chosen from the following word.
//
// WHY THIS EXISTS
//
// The subject page said "Try a English test", because the article was typed as
// a literal "a" next to an interpolated subject name. It reads as sloppy in
// exactly the place a new visitor is deciding whether the site is serious, and
// it was spotted in a review before any of us noticed it.
//
// HONEST LIMITATION: English chooses the article by SOUND, not spelling — "an
// hour", "a university", "an MP". This function goes by the first letter,
// which is correct for every subject name on the site now and for the obvious
// future ones (Art, Economics, IT, Engineering all take "an" correctly). If a
// subject is ever added whose sound and spelling disagree, add it to the
// exceptions below rather than rewriting the rule, and the check in
// scripts/check-content.mjs will keep the two in step.
const SOUND_EXCEPTIONS: Record<string, "a" | "an"> = {
  // e.g. university: "a", hour: "an" — none needed yet, but the hook is here
  // so the fix is a one-line data change rather than a logic change.
};

export function indefiniteArticle(word: string): "a" | "an" {
  const first = word.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const exception = SOUND_EXCEPTIONS[first];
  if (exception) return exception;
  return /^[aeiou]/.test(first) ? "an" : "a";
}
