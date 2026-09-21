// Which topics get Hoot's calculator.
//
// Matthew: "in every topic where you have to do calculations, just add that
// calculator." So this is DERIVED from the content, not a list — the same
// choice this codebase makes for badges, marks and the diagram library. A
// Business topic that gains a break-even question tomorrow gets the button
// tomorrow, with nobody remembering to add it.
//
// ⚠️ SERVER ONLY. This reads the whole content registry, which is megabytes.
// Pages work the answer out and hand the client components a plain boolean;
// importing this from a "use client" file would ship every topic on the site
// to every browser.

import { getTopicContent } from "./content";
import { getSubject } from "./subjects";

/**
 * A real sum: a number, an operator, another number. "7 × 0.5", "220 − 16",
 * "£12,000 + £3,000", "3 x 5". Deliberately NOT "/" (m/s, 3/4 as a fraction,
 * il/elle) or a bare hyphen ("2019-2020"); a hyphen only counts with spaces
 * round it, which is how the content writes a subtraction.
 */
export const CALCULATION = /\d[\d.,]*\s*(?:[×÷+−*x]|\s-\s)\s*[£$(]?\d/;

/**
 * Topics whose sums are not the kind a calculator is for, each with a reason.
 * Fail-closed: anything not listed here that contains a sum gets the button.
 */
const NOT_CALCULATOR_TOPICS: Record<string, string> = {
  // Tracing a loop ("total = 3 + 3 = 6") is mental arithmetic, and following
  // it by hand IS the skill being tested. A calculator beside a trace table
  // answers the wrong question.
  "computer-science/programming": "code trace",
  "computer-science/programming-input-and-output": "code trace (MOD and DIV worked by hand)",
  "computer-science/programming-iteration": "code trace",
  "computer-science/programming-lists-and-arrays": "code trace",
};

export function topicNeedsCalculator(subjectSlug: string, topicSlug: string): boolean {
  // Maths and the sciences: every topic, as before — their papers are
  // calculator papers and a student may reach for one on any question.
  if (getSubject(subjectSlug)?.calculator) return true;
  if (NOT_CALCULATOR_TOPICS[`${subjectSlug}/${topicSlug}`]) return false;

  const content = getTopicContent(subjectSlug, topicSlug);
  if (!content) return false;
  const texts = [
    ...(content.practice ?? []).map((q) => q.answer),
    ...(content.workedExamples ?? []).flatMap((w) => [w.answer, ...(w.steps ?? [])]),
  ];
  return texts.some((t) => typeof t === "string" && CALCULATION.test(t));
}
