// Keeping swear words and slurs out of the names other people have to look at.
//
// Deliberately ZERO IMPORTS, the same reason quizConfig.ts has none: this is
// used by Server Actions AND could be used by a Client Component for instant
// feedback, so it must not drag a "use server" module graph or any
// server-only node: code into a browser bundle.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE TWO WAYS A FILTER LIKE THIS GOES WRONG, AND WHAT'S DONE ABOUT EACH
//
// 1. TOO LOOSE. A plain list of words never catches anyone who's actually
//    trying: "f u c k", "f.u.c.k", "sh1t", "@ss", "FUUUCK" all sail past a
//    naive check. So nothing is compared raw — every name is first squashed
//    down to bare letters (accents stripped, leetspeak digits mapped back,
//    every space, dot, dash and underscore removed), and the rude words are
//    matched as patterns that tolerate any letter repeating, which is what
//    catches "fuuuck" without the filter having to guess at spellings.
//
// 2. TOO TIGHT — and this is the one people actually get wrong. It has a
//    name: the SCUNTHORPE PROBLEM, after the English town whose residents
//    could not sign up to services that blocked the four letters sitting in
//    the middle of it. Blindly searching for rude substrings also rejects
//    class, bass, pass, grass, assess, assassin, analysis, Cockburn,
//    Hancock, shiitake, Dickens, Middlesex, Sussex, Penistone and hello.
//    Telling a real kid their real name is offensive is a worse failure than
//    letting one rude nickname through.
//
//    The fix here: before looking for anything rude, every known-innocent
//    word is REMOVED from the squashed name. "scunthorpe" has "scunthorpe"
//    taken out of it and is left with nothing to find; "classic" becomes
//    "ic". Only what's left over is searched. Where even that isn't safe —
//    "ass" sits inside Cassie, Cassius and any number of names nobody can
//    enumerate — the word is matched only as a WHOLE word, or only in the
//    compounds people actually use as insults.
//
// This will never be perfect — no filter is, and a determined 15-year-old
// will always find something. It is aimed at the obvious stuff, which is
// what actually turns up in a classroom.
// ─────────────────────────────────────────────────────────────────────────────

// Rude roots, matched anywhere in what's left after the innocent words above
// have been removed. Roots rather than exact words on purpose, so "fucking",
// "shithead" and "bitches" are all covered by one entry each.
const BANNED_ROOTS = [
  "anal",
  "anus",
  "arse",
  // NOT a bare "ass". Testing this filter against real first names found it
  // blocking Cassie, Cassius and Cassidy, and there is no way to enumerate
  // every name that happens to contain those three letters — so the mildest
  // word on this list is matched only in the compounds people actually use
  // as insults. "arse" above is the British form a UK classroom would type
  // anyway, and it carries no such risk.
  "asshole",
  "asshat",
  "assface",
  "asswipe",
  "assclown",
  "asslick",
  "dumbass",
  "fatass",
  "jackass",
  "smartass",
  "bastard",
  "bellend",
  "bitch",
  "bollock",
  "boob",
  "bugger",
  "chink",
  "clit",
  "cock",
  "coon",
  "cunt",
  "dick",
  "dildo",
  "dyke",
  "fag",
  "fanny",
  "fuck",
  "gash",
  "gook",
  "handjob",
  "jizz",
  "kike",
  "knob",
  "kunt",
  "milf",
  "minge",
  "nigg",
  "nonce",
  "paki",
  "penis",
  "piss",
  "poof",
  "porn",
  "prick",
  "pussy",
  "queer",
  "rape",
  "retard",
  "rimjob",
  "scrote",
  "semen",
  "sex",
  "shag",
  "shit",
  "slag",
  "slut",
  "spastic",
  "spunk",
  "testicle",
  "tits",
  "titties",
  "tosser",
  "turd",
  "twat",
  "vagina",
  "wank",
  "whore",
  "wog",
];

// Ordinary words that happen to contain one of the roots above. Each of these
// is removed from the name BEFORE the search, so its innocent letters can't
// be mistaken for a rude word. Add to this list rather than weakening the one
// above whenever a real name gets wrongly rejected.
const INNOCENT_WORDS = [
  // The classics, including the town this problem is named after
  "scunthorpe",
  "penistone",
  "lightwater",
  "clitheroe",
  "cockermouth",
  "cockburn",
  "cocktail",
  "cockpit",
  "cockney",
  "cockroach",
  "peacock",
  "hancock",
  "hitchcock",
  "woodcock",
  "shuttlecock",
  "weathercock",
  "cocoa",
  "sussex",
  "essex",
  "middlesex",
  "wessex",
  "sexton",
  "sextant",
  "sextet",
  "unisex",
  "homosexual",
  "heterosexual",
  "sexuality",
  // -ass- words, far and away the commonest false positive
  "class",
  "classic",
  "classical",
  "classroom",
  "bass",
  "bassist",
  "brass",
  "grass",
  "glass",
  "grasshopper",
  "pass",
  "passage",
  "passenger",
  "passion",
  "compass",
  "embassy",
  "mass",
  "massive",
  "massachusetts",
  "assess",
  "assessment",
  "asset",
  "assassin",
  "assist",
  "assistant",
  "assign",
  "assignment",
  "assume",
  "assumption",
  "assure",
  "associate",
  "association",
  "assemble",
  "assembly",
  "cassidy",
  "cassandra",
  "casserole",
  "harass",
  "surpass",
  "potassium",
  "molasses",
  "carcass",
  // -anal- / -analy-
  "analysis",
  "analyse",
  "analyze",
  "analyst",
  "analytical",
  "canal",
  "banal",
  // shi-, tit-, and other short-root carriers
  "shiitake",
  "titan",
  "titanic",
  "titanium",
  "title",
  "titus",
  "constitution",
  "competition",
  "repetition",
  "dickens",
  "dickinson",
  "dickson",
  "benedict",
  "predict",
  "verdict",
  "dictionary",
  "medic",
  "hello",
  "shell",
  "shelter",
  "washington",
  "assyria",
  "cumbria",
  "cumberland",
  "scumbag",
  "circumstance",
  "document",
  "accumulate",
  "gashley",
  "wagashi",
  "knobbly",
  "sexagesimal",
  // Found by running this filter over real first names and surnames rather
  // than by imagining what might break.
  "analog",
  "analogue",
  "analogy",
  "analogous",
  "analgesic",
  "fagan",
  "fagin",
  "wogan",
  "raccoon",
  "cocoon",
  "tycoon",
  "grape",
  "drape",
  "scrape",
  "prickle",
  "prickly",
  "dickie",
  "dicky",
  "bagshaw",
  "bagshot",
  "flagship",
  "saturday",
  "pakistan",
  "pakistani",
  "vandyke",
  "dykstra",
];

// Words too short and too common-as-a-fragment to search for anywhere inside
// a name, but unmistakable when they ARE the whole word. "Cassie" must not be
// blocked; "a$$" and "dumb ass" must be. So these are matched against each
// word of the name on its own, never as a substring of a longer one.
const BANNED_WHOLE_WORDS = ["ass", "cum"];

// Leetspeak and lookalike characters, mapped back to the letter they stand in
// for. Without this, "sh1t" and "@ss" are just unknown strings.
const CHARACTER_SUBSTITUTIONS: Record<string, string> = {
  "0": "o",
  "1": "i",
  "3": "e",
  "4": "a",
  "5": "s",
  "6": "g",
  "7": "t",
  "8": "b",
  "9": "g",
  "@": "a",
  $: "s",
  "!": "i",
  "|": "i",
  "+": "t",
  "*": "",
};

// Everything that isn't a letter comes out, which is what collapses
// "f.u.c.k" and "f u c k" into one word to be checked.
function squash(value: string): string {
  const lowered = value
    .toLowerCase()
    // Accents off: "fück" and "fuck" must not be different questions.
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  let out = "";
  for (const character of lowered) {
    const substituted = CHARACTER_SUBSTITUTIONS[character];
    const mapped = substituted === undefined ? character : substituted;
    if (mapped >= "a" && mapped <= "z") out += mapped;
  }
  return out;
}

// "fuuuck", "ffffuck" and "fuckkk" are all the same word with a key held
// down. The obvious fix — squashing repeated letters out of the NAME — was
// tried first and was WRONG in a way only testing showed: it shortens the
// rude words too. "boob" collapses to "bob", and "ass" collapses to "as",
// a fragment so short it flagged Jason, Ashley and Chase.
//
// Tolerating repeats in the PATTERN instead has neither problem: /b+o+o+b+/
// still needs two separate runs of "o", so it matches "boob" and "booob" but
// never "bob".
function repeatTolerantPattern(root: string): RegExp {
  return new RegExp([...root].map((letter) => `${letter}+`).join(""));
}

const BANNED_PATTERNS = BANNED_ROOTS.map(repeatTolerantPattern);

// Longest first, so "classroom" is taken out whole rather than being left as
// a stray "room" by the shorter "class" going first.
const INNOCENT_BY_LENGTH = [...INNOCENT_WORDS].sort((a, b) => b.length - a.length);

function stripInnocentWords(squashed: string): string {
  let remaining = squashed;
  for (const innocent of INNOCENT_BY_LENGTH) {
    // Every occurrence, not just the first — "classclass" is still innocent.
    // Replaced with a space rather than nothing so the letters on either side
    // can't be shunted together into a word neither of them was part of.
    remaining = remaining.split(innocent).join(" ");
  }
  return remaining;
}

/**
 * True if this name contains a swear word or slur, after allowing for
 * spacing, punctuation, accents, leetspeak and repeated letters.
 */
export function containsProfanity(value: string): boolean {
  const squashed = squash(value);
  if (!squashed) return false;

  const remaining = stripInnocentWords(squashed);
  if (BANNED_PATTERNS.some((pattern) => pattern.test(remaining))) return true;

  // Each word on its own, for the short ones above. Splitting on the ORIGINAL
  // value's non-letters is what keeps "dumb ass" two words while still
  // squashing "a$$" down to one.
  return value
    .split(/[^\p{L}\p{N}@$!|+*]+/u)
    .map(squash)
    .some((word) => BANNED_WHOLE_WORDS.includes(word));
}

export const PROFANITY_REJECTION_MESSAGE =
  "Pick a different name — that one won't work here.";
