// A lesson as plain text, for pasting into somebody else's slide template.
//
// The .pptx download assumes a teacher wants our file. Plenty do not: most
// schools have a house template with the school's logo on every slide, and a
// teacher who has to rebuild that around our deck will simply not bother. For
// them the useful unit is one question on the clipboard, ready to paste into
// the slide they are already looking at.
//
// ⚠️ NO ANSWERS, ANYWHERE IN HERE, AND THAT IS A DELIBERATE LIMIT.
// The same rule as the deck and the worksheet: what a teacher pastes onto a
// slide is what thirty people read. A "copy with answers" button would be one
// mis-click away from projecting the mark scheme, and the answers are already
// a keystroke away on the page itself.
//
// Kept separate from the components that use it, and free of any React, so
// `scripts/check-pptx.mjs` can assert that rule over all 285 topics rather
// than trusting this comment.

import type { LessonPlan, LessonPhase, LessonQuestion } from "./lesson-plan";

function tariff(marks: number): string {
  return `[${marks} mark${marks === 1 ? "" : "s"}]`;
}

/** One question, numbered as it is numbered on the page and the worksheet. */
export function questionText(q: LessonQuestion, number: number): string {
  const lines = [`${number}. ${q.question}  ${tariff(q.marks)}`];
  if (q.higherOnly) lines.unshift("(Higher tier)");
  if (q.choices && q.choices.length > 0) {
    lines.push("");
    q.choices.forEach((choice, i) =>
      lines.push(`${String.fromCharCode(65 + i)}. ${choice}`),
    );
  }
  return lines.join("\n");
}

/** Every question in one phase, with the phase's own heading above them. */
export function phaseText(phase: LessonPhase, firstNumber: number): string {
  const head = [
    phase.title.toUpperCase(),
    [
      `${phase.minutes} min`,
      phase.marks > 0 ? `${phase.marks} marks` : null,
    ]
      .filter(Boolean)
      .join(" · "),
  ].join("  —  ");

  const body = phase.questions.map((q, i) => questionText(q, firstNumber + i));
  return [head, "", ...(body.length ? [body.join("\n\n")] : ["(no questions in this part)"])].join("\n");
}

/** The whole lesson, in the order it runs. */
export function lessonText(plan: LessonPlan): string {
  const out: string[] = [
    plan.topicTitle,
    `${plan.subjectName} · ${plan.year} · ${plan.totalMarks} marks · about ${plan.totalMinutes} minutes`,
    "",
  ];
  let n = 1;
  for (const phase of plan.phases) {
    if (phase.questions.length === 0) continue;
    out.push(phaseText(phase, n), "");
    n += phase.questions.length;
  }
  out.push(
    "— Questions from Revision Lab. Answers are on the lesson page and in the",
    "  speaker notes of the PowerPoint download, deliberately not here.",
  );
  return out.join("\n");
}

/** What number the first question of a phase carries. Mirrors LessonView. */
export function firstQuestionNumber(plan: LessonPlan, index: number): number {
  return (
    1 +
    plan.phases.slice(0, index).reduce((n, phase) => n + phase.questions.length, 0)
  );
}
