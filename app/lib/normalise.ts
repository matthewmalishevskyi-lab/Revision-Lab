// Makes typed answers forgiving without making them wrong.
//
// Pulled out of Practice.tsx into its own file the moment a THIRD place
// needed the exact same comparison — the live quiz has to work out which
// multiple-choice option is actually correct (whichever one matches the
// question's `accept` list), the same rule Practice.tsx and MockExam.tsx
// already use to mark a typed or clicked answer. This file has no "use
// client"/"use server" directive on purpose: it's a plain, side-effect-free
// string function, safe to import from a browser component OR from
// server-only code like lib/quiz.ts — unlike Practice.tsx, which pulls in
// React and browser-only concerns alongside the one function everyone
// actually wants.
//
// ─────────────────────────────────────────────────────────────────────────────
// A REAL BUG THIS FUNCTION USED TO HAVE
//
// The first version stripped every hyphen, so that "run-length encoding" would
// match "run length encoding". Sensible-looking, and quietly catastrophic: it
// also stripped the MINUS SIGN. "-3" became "3", so a student answering 3 to a
// question whose answer was -3 was marked CORRECT.
//
// An automated check caught it. The lesson is worth more than the fix: a rule
// that looks harmless in the case you were thinking about ("hyphens are just
// punctuation") can be badly wrong in a case you weren't ("minus is not
// punctuation, it's part of the number"). Test the edges, not the middle.
//
// The fix is to remove a hyphen only when it sits BETWEEN TWO LETTERS, which is
// where word hyphens live. A hyphen next to a digit is a minus sign and stays.
// ─────────────────────────────────────────────────────────────────────────────
//
// Removed: capitals, spaces, commas, word hyphens and a trailing full stop. So
// "1.44 MB", "1.44mb" and "1.44 mb." all match, and "run-length encoding"
// matches "run length encoding".
//
// ─────────────────────────────────────────────────────────────────────────────
// SYMBOLS THAT DECORATE A NUMBER WITHOUT CHANGING IT
//
// A second bug, found the same way as the first. Asked "the bearing of A from
// B?", a student who typed 230° was marked WRONG, because the accepted answer
// was "230" and the degree sign made the strings differ. Same for 20% and £50.
//
// The fix is to drop a trailing ° or % and a leading currency symbol, because
// none of them change the VALUE — 230 and 230° are the same answer written two
// ways. The alternative was adding every variant to hundreds of accept lists
// by hand, which would work until the first one anybody forgot.
//
// Note this cannot wrongly accept a percentage where a decimal was asked for:
// "write 45% as a decimal" wants 0.45, and a student typing 45% still produces
// "45", which still does not match. The symbol is stripped; the value is not.
// ─────────────────────────────────────────────────────────────────────────────
//
// NOT removed: minus signs, and leading zeros. "1011100" stays different from
// "01011100", because a missing leading zero on an 8-bit answer genuinely IS
// wrong and examiners mark it as such. Forgiving about typing, strict about the
// answer.
export function normalise(text: string): string {
  return text
    .toLowerCase()
    // Unify the various dash characters people and word processors produce.
    .replace(/[–—−]/g, "-")
    // Drop hyphens only where a letter sits on each side.
    .replace(/(?<=[a-z])-(?=[a-z])/g, "")
    .replace(/[\s,]/g, "")
    // A currency symbol in front of a number decorates it; £50 is 50.
    .replace(/^[£$€]/, "")
    // Trailing degree signs, percent signs and sentence punctuation, in any
    // combination — "230°." and "20%" both reduce to the bare value.
    .replace(/[°%.!?]+$/, "");
}
