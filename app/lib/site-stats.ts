import { TOPIC_CONTENT } from "./content";

// What is actually on the site, counted from the content itself.
//
// WHY COUNTED RATHER THAN TYPED IN
//
// The homepage makes a specific claim — a number of topics, a number of common
// mistakes, a number of self-marking questions. Specific claims are the only
// kind worth making, because "everything you need for GCSE revision" is what
// every competitor says and none of them can prove.
//
// But a number typed into a heading is true on the day it is typed and slowly
// becomes a lie afterwards. Every subject added since would make the homepage
// understate the site, and every topic removed would make it overstate it —
// and overstating is the one that costs trust. Counting from TOPIC_CONTENT
// means the claim cannot drift from the thing it describes.
//
// This is the same reasoning that made SITE_DESCRIPTION derive from SUBJECTS
// rather than repeat it, and the content checker enforces that one.
//
// Cost: this pulls the whole content bundle into the page that calls it. That
// is fine here — the homepage is a Server Component and statically generated,
// so the counting happens once at build time and the visitor is sent numbers,
// not content.

export type SiteStats = {
  topics: number;
  mistakes: number;
  questions: number;
  flashcards: number;
  workedExamples: number;
};

export function siteStats(): SiteStats {
  let mistakes = 0;
  let questions = 0;
  let flashcards = 0;
  let workedExamples = 0;

  const entries = Object.values(TOPIC_CONTENT);
  for (const topic of entries) {
    mistakes += topic.misconceptions?.length ?? 0;
    questions += topic.practice?.length ?? 0;
    flashcards += topic.flashcards?.length ?? 0;
    workedExamples += topic.workedExamples?.length ?? 0;
  }

  return { topics: entries.length, mistakes, questions, flashcards, workedExamples };
}

// Round DOWN to a readable figure, so the site never claims more than it has.
//
// 4,684 questions becomes "4,600+", not "nearly 5,000". Rounding up would be
// the natural marketing instinct and it is the wrong one: a rounded-up number
// is a small false claim, and the whole point of using real figures is that
// every one of them survives being checked.
export function roundedDown(n: number): string {
  if (n < 100) return String(n);
  const step = n < 1000 ? 10 : 100;
  return `${(Math.floor(n / step) * step).toLocaleString("en-GB")}+`;
}
