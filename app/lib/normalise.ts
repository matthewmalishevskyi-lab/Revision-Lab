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

// ─────────────────────────────────────────────────────────────────────────────
// ACCENTS, AND THE KEYBOARD NOBODY HAS
//
// ⚠️ A THIRD BUG OF THE SAME FAMILY, AND THE BIGGEST ONE YET. Asked "How do
// you say 'I am 16 years old' in Spanish?", a student typing
//
//     Tengo dieciseis anos
//
// was marked WRONG, because the accept list holds "tengo dieciséis años". The
// answer is right. The student simply does not own a keyboard that can produce
// ñ — a UK layout has no key for it, and nor does it have é, ü, ç or ß.
//
// That is not one broken question. Measured across the site rather than
// guessed at — the first guess written here was "nearly every answer", and it
// was four times too high:
//
//     french     63 of 161 typed answers   (39%)
//     spanish    48 of 144
//     german     15 of 109
//     ────────────────────────────────────────
//     all three  126 of 414
//     whole site 215 of 5,017
//
// So it is not most of the site, and it IS two fifths of French — 126 questions
// that a student on a UK keyboard could not get right however well they knew
// the answer, concentrated exactly where someone is most likely to be revising
// vocabulary by typing it.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS A SECOND FUNCTION AND NOT A LINE INSIDE normalise()
//
// Folding accents away is NOT harmless, and this file's own history is the
// argument for caution: stripping every hyphen looked harmless too, and marked
// -3 and 3 as the same answer.
//
// In these languages the accent is sometimes the entire difference between two
// real words:
//
//     tú (you)      vs  tu (your)          Spanish
//     sí (yes)      vs  si (if)            Spanish
//     él (he)       vs  el (the)           Spanish
//     año (year)    vs  ano (a rather different word)
//     où (where)    vs  ou (or)            French
//     schön (nice)  vs  schon (already)    German
//
// So a silent fold would mark a genuinely wrong answer right, which is the one
// thing this site must never do.
//
// The way out is not to choose between the two mistakes but to refuse both: the
// answer is ACCEPTED, and the student is TOLD. `normalise` stays strict and is
// still what decides an exact match; this looser form is only consulted when
// the strict one has already failed, and when it rescues an answer the marking
// says so in as many words — "Correct — mind the accents: it's años, not anos."
//
// A student who could not type ñ gets their mark. A student who wrote "tu" for
// "tú" also gets their mark, and gets told the accent is the word — which is
// the thing they actually needed to read. Nobody is called wrong for owning
// the wrong keyboard.
// ─────────────────────────────────────────────────────────────────────────────

/** Strip accents, so "años" and "anos" compare equal. */
export function foldAccents(text: string): string {
  return (
    text
      // Letters that are not a base letter plus a mark, so NFD cannot split
      // them. German ß is "ss" when it is spelled out, which is exactly what
      // somebody without the key types.
      .replace(/ß/g, "ss")
      .replace(/æ/g, "ae")
      .replace(/Æ/g, "AE")
      .replace(/œ/g, "oe")
      .replace(/Œ/g, "OE")
      .replace(/ø/g, "o")
      .replace(/Ø/g, "O")
      .replace(/ð/g, "d")
      .replace(/þ/g, "th")
      .replace(/ł/g, "l")
      .replace(/Ł/g, "L")
      // NFD splits "ñ" into "n" + a combining tilde; the range below is the
      // block those combining marks live in, so this handles every accented
      // letter in every language at once rather than a list of the ones we
      // happened to think of.
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .normalize("NFC")
  );
}

/** `normalise`, with accents folded away too. Only ever used as a fallback. */
export function normaliseLoose(text: string): string {
  return normalise(foldAccents(text));
}

/**
 * Mark a typed answer against an accept list.
 *
 * Returns whether it counts, and — when it only counted once accents were
 * folded — the properly accented form, so the page can show what the student
 * should have written. `want` being set is the whole reason this returns an
 * object rather than a boolean: an accepted answer with a spelling worth
 * correcting is a different thing from a perfect one, and the student is
 * entitled to know which they just gave.
 */
export function markAnswer(
  typed: string,
  accept: readonly string[],
): { correct: boolean; want?: string } {
  const strict = normalise(typed);
  if (accept.some((valid) => normalise(valid) === strict)) return { correct: true };

  const loose = normaliseLoose(typed);
  const rescued = accept.find((valid) => normaliseLoose(valid) === loose);
  if (rescued) return { correct: true, want: rescued };

  return { correct: false };
}
