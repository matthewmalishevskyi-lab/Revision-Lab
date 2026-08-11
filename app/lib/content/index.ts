// THE CONTENT REGISTRY.
//
// Every topic has the same four parts, deliberately:
//
//   summary     - one paragraph, what this topic actually is
//   keyFacts    - the raw stuff you have to know, grouped and stripped bare
//   flashcards  - definitions, for self-testing
//   examTips    - how to not lose marks you've already earned
//
// Keeping the SHAPE identical across all 53 topics is what makes this scale.
// The page is written once and works for everything; adding a topic is writing
// content, never writing code.
//
// Content lives in one file per subject. To add a subject, write its file next
// to this one and spread it into the record below — that's the only change
// needed here.

import { BIOLOGY } from "./biology";
import { BUSINESS } from "./business";
import { CHEMISTRY } from "./chemistry";
import { CITIZENSHIP } from "./citizenship";
import { PHYSICS } from "./physics";
import { COMPUTER_SCIENCE } from "./computer-science";
import { ENGLISH } from "./english";
import { HISTORY } from "./history";
import { GEOGRAPHY } from "./geography";
import { MATHS } from "./maths";

// ─── Higher tier ────────────────────────────────────────────────────────────
//
// GCSE Maths is split into two tiers. Foundation is graded 1–5; Higher is
// graded 4–9 and covers extra material. Some topics — the cosine rule,
// completing the square, histograms with unequal class widths, circle theorems,
// vector proofs — appear ONLY on the Higher paper.
//
// Marking them matters in both directions. A Foundation student who spends a
// week on circle theorems has wasted a week on something they will never be
// asked. A Higher student who skips them loses marks they could have had.
//
// Anything flagged `higherOnly` renders with a visible badge. Which tier you
// are on is decided by your school, and the exact split varies slightly between
// exam boards — so treat the flag as a strong hint to check, not gospel.

export type TopicContent = {
  summary: string;
  keyFacts: { heading: string; points: string[]; higherOnly?: boolean }[];
  flashcards: { term: string; definition: string }[];
  examTips: { tip: string; detail: string }[];

  // ─── The three sections below are OPTIONAL ────────────────────────────────
  //
  // The `?` means a topic may leave them out entirely. That matters: it lets
  // topics be upgraded one at a time without the site ever being broken in
  // between. A topic with worked examples shows them; one without simply
  // doesn't render that section. No code changes, no half-finished pages.
  //
  // Making new fields optional is the standard way to evolve a data structure
  // that's already in use. Making them required would mean every one of the 38
  // topics had to be rewritten in the same commit or nothing would compile.

  // Show the method actually being applied, not just stated.
  workedExamples?: {
    question: string;
    steps: string[];
    answer: string;
    higherOnly?: boolean;
  }[];

  // Self-testing. You type an answer and the site marks it.
  //
  // `accept` lists every form of the right answer that should count — "75",
  // "1.44MB", "1.44 mb". Answers are compared with spaces, commas and trailing
  // full stops removed, so typing is forgiving without being wrong.
  //
  // If `accept` is MISSING, the question can't be auto-marked and the site
  // switches to self-marking instead: it shows the model answer and asks the
  // student to judge honestly. That's deliberate. A computer comparing strings
  // cannot mark "explain why hexadecimal is used" — there are thousands of
  // correct wordings. Pretending otherwise would mark good answers wrong and
  // teach students to guess magic words. Knowing what NOT to automate is part
  // of the job.
  practice?: {
    question: string;
    accept?: string[];
    answer: string;
    higherOnly?: boolean;
  }[];

  // "Students often think X, but actually Y." Targets the specific wrong ideas
  // that cost marks, rather than only stating the right ones.
  misconceptions?: {
    wrong: string;
    right: string;
  }[];
};

// Keys are "subject-slug/topic-slug", matching the URLs exactly.
// The `...` spread merges each subject's topics into one lookup.
export const TOPIC_CONTENT: Record<string, TopicContent> = {
  ...COMPUTER_SCIENCE,
  ...MATHS,
  ...ENGLISH,
  ...HISTORY,
  ...GEOGRAPHY,
  ...BUSINESS,
  ...BIOLOGY,
  ...CHEMISTRY,
  ...PHYSICS,
  ...CITIZENSHIP,
};

export function getTopicContent(
  subjectSlug: string,
  topicSlug: string,
): TopicContent | undefined {
  return TOPIC_CONTENT[`${subjectSlug}/${topicSlug}`];
}
