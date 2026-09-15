"use client";

// The lesson itself, with one switch on it.
//
// ⚠️ ANSWERS ARE HIDDEN UNTIL ASKED FOR, AND THAT IS THE WHOLE REASON THIS IS A
// CLIENT COMPONENT.
//
// Matthew's answer to "what does a teacher actually do with this page" was
// both — project it and print it. Those two pull in opposite directions on
// exactly one thing. A page on a whiteboard has thirty people reading it, so an
// answer printed under its question is the answer given away before anyone has
// thought; a page on paper in the teacher's hand needs the answers or it is
// useless to them.
//
// So the screen starts closed and opens on request, and the printable version
// (a separate route) puts every answer in one section at the end — the same
// arrangement a real worksheet uses, for the same reason.
//
// Deliberately NOT remembered between visits. `browserStore` is right for a
// setting somebody chose about themselves — dark mode, reduced motion — and
// wrong for this: the safe state is closed, and a teacher who revealed answers
// in their free period must not have them already on screen when the projector
// comes on next lesson. Forgetting is the feature.

import { useState } from "react";
import Link from "next/link";
import { Icon } from "../../../../components/Icon";
import { HigherBadge } from "../../../../components/HigherBadge";
import { MarkTariff } from "../../../../components/MarkTariff";
import type { LessonPlan, LessonPhase } from "../../../../lib/lesson-plan";
import { CopyButton } from "../../../../components/CopyButton";
import { phaseText } from "../../../../lib/lesson-text";

export function LessonView({ plan }: { plan: LessonPlan }) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <>
      <div className="diagram-controls mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setShowAnswers((on) => !on)}
          aria-pressed={showAnswers}
          className="min-h-11 rounded-full px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          style={{ backgroundColor: plan.accent }}
        >
          {showAnswers ? "Hide answers" : "Show answers"}
        </button>
        <p className="text-sm opacity-55">
          {showAnswers
            ? "Answers are on screen — hide them before projecting."
            : "Safe to put on the board."}
        </p>
      </div>

      {/* ⚠️ QUESTIONS ARE NUMBERED CONTINUOUSLY, AND THE NUMBERS MATCH THE
          PRINTED SHEET EXACTLY.
          The screen version had no numbers at all until this was looked at on a
          real page. That breaks the one thing both outputs have to share: a
          teacher projecting the board says "everyone do question four", and the
          worksheet in front of the class has to agree with them. Numbering per
          phase would have been easier and just as wrong — "question 2" would
          mean four different questions down the page. */}
      <ol className="mt-8 space-y-8">
        {plan.phases.map((phase, index) => (
          <li key={phase.id}>
            <PhaseBlock
              phase={phase}
              number={index + 1}
              firstQuestionNumber={firstQuestionNumber(plan, index)}
              accent={plan.accent}
              subjectSlug={plan.subjectSlug}
              topicSlug={plan.topicSlug}
              showAnswers={showAnswers}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

/**
 * What number the first question of a phase carries.
 *
 * ⚠️ A RUNNING COUNTER WOULD HAVE BEEN THE OBVIOUS WAY AND IS FORBIDDEN HERE.
 * The first attempt kept `let asked = 0` outside the map and added to it as it
 * went; eslint refused it with `Cannot reassign variable after render
 * completes` — this codebase runs the React Compiler rules, and a variable
 * mutated during render is exactly what they exist to stop, because React may
 * render a component twice or throw a render away. Counting the phases before
 * this one instead is pure, gives the same answer, and costs nothing on a list
 * that is never longer than eight.
 */
function firstQuestionNumber(plan: LessonPlan, index: number): number {
  return (
    1 +
    plan.phases
      .slice(0, index)
      .reduce((n, phase) => n + phase.questions.length, 0)
  );
}

/** The mark range in a phase, so a teacher can see the ramp without counting. */
function markRange(phase: LessonPhase): string | null {
  if (phase.questions.length === 0) return null;
  const marks = phase.questions.map((q) => q.marks);
  const low = Math.min(...marks);
  const high = Math.max(...marks);
  if (low === high) return `${low} mark${low === 1 ? "" : "s"} each`;
  return `${low}–${high} marks each`;
}

function PhaseBlock({
  phase,
  number,
  firstQuestionNumber,
  accent,
  subjectSlug,
  topicSlug,
  showAnswers,
}: {
  phase: LessonPhase;
  number: number;
  firstQuestionNumber: number;
  accent: string;
  subjectSlug: string;
  topicSlug: string;
  showAnswers: boolean;
}) {
  const range = markRange(phase);

  return (
    <section aria-labelledby={`phase-${phase.id}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          {number}
        </span>
        <h2 id={`phase-${phase.id}`} className="text-2xl font-bold tracking-tight">
          {phase.title}
        </h2>
        <span className="text-sm tabular-nums opacity-55">
          {phase.minutes} min
          {phase.marks > 0 && ` · ${phase.marks} marks`}
          {range && ` · ${range}`}
        </span>
      </div>
      <p className="mt-1.5 max-w-2xl text-sm opacity-70">{phase.purpose}</p>

      {/* Per part, not per question. A copy button on every one of seventeen
          questions is seventeen more things to look at on a page whose job is
          to be scanned, and a teacher building a slide for one part wants the
          part. The whole lesson is copyable from the top of the page. */}
      {phase.questions.length > 0 && (
        <p className="diagram-controls mt-3">
          <CopyButton
            text={phaseText(phase, firstQuestionNumber)}
            label={`Copy these ${phase.questions.length} question${phase.questions.length === 1 ? "" : "s"}`}
            copiedLabel="Copied"
            title={`Copy the ${phase.title} questions as plain text`}
          />
        </p>
      )}

      {/* ── Teach this ─────────────────────────────────────────────────── */}
      {phase.teachingPoints.length > 0 && (
        <ul className="mt-4 space-y-3">
          {phase.teachingPoints.map((block) => (
            <li
              key={block.heading}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-semibold">{block.heading}</p>
              <ul className="mt-2 space-y-1.5 text-sm opacity-80">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" style={{ color: accent }}>
                      •
                    </span>
                    <span className="whitespace-pre-line">{point}</span>
                  </li>
                ))}
              </ul>
              {block.diagrams.length > 0 && (
                <p className="mt-3 text-sm">
                  <Link
                    href={`/teacher-tools/diagrams/${subjectSlug}/${topicSlug}`}
                    className="tap-pad font-medium hover:underline"
                    style={{ color: accent }}
                  >
                    {block.diagrams.length} diagram
                    {block.diagrams.length === 1 ? "" : "s"} to project →
                  </Link>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* ── Model it ───────────────────────────────────────────────────── */}
      {phase.workedExamples.length > 0 && (
        <ol className="mt-4 space-y-3">
          {phase.workedExamples.map((example) => (
            <li
              key={example.question}
              className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="px-5 py-4" style={{ backgroundColor: `${accent}12` }}>
                {example.higherOnly && (
                  <p className="mb-2">
                    <HigherBadge />
                  </p>
                )}
                <p className="whitespace-pre-line font-medium">{example.question}</p>
              </div>
              <ol className="space-y-2 px-5 py-4">
                {example.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-bold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre-line opacity-80">{step}</span>
                  </li>
                ))}
              </ol>
              <p
                className="whitespace-pre-line border-t border-black/5 px-5 py-3 text-sm font-semibold dark:border-white/10"
                style={{ color: accent }}
              >
                Answer: {example.answer}
              </p>
            </li>
          ))}
        </ol>
      )}

      {/* ── Questions ──────────────────────────────────────────────────── */}
      {phase.questions.length > 0 && (
        <ol className="mt-4 space-y-3">
          {phase.questions.map((q, i) => (
            <li
              key={q.question}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              {q.higherOnly && (
                <p className="mb-2">
                  <HigherBadge />
                </p>
              )}
              <p className="whitespace-pre-line font-medium leading-relaxed">
                <span className="mr-1.5 font-bold tabular-nums" style={{ color: accent }}>
                  {firstQuestionNumber + i}.
                </span>
                {q.question}
                <MarkTariff marks={q.marks} />
              </p>

              {q.choices && q.choices.length > 0 && (
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {q.choices.map((choice, i) => (
                    <li
                      key={choice}
                      className="rounded-xl border border-black/10 px-3 py-2 text-sm dark:border-white/15"
                    >
                      <span className="mr-2 font-semibold opacity-45">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {choice}
                    </li>
                  ))}
                </ul>
              )}

              {showAnswers ? (
                <div
                  className="mt-3 rounded-xl px-4 py-3 text-sm"
                  style={{ backgroundColor: `${accent}14` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-50">
                    {q.selfMarked ? "Model answer" : "Answer"}
                  </p>
                  <p className="mt-1 whitespace-pre-line leading-relaxed opacity-85">
                    {q.answer}
                  </p>
                </div>
              ) : (
                q.selfMarked && (
                  <p className="mt-2 text-xs uppercase tracking-wider opacity-40">
                    Extended answer — no single right wording
                  </p>
                )
              )}
            </li>
          ))}
        </ol>
      )}

      {/* ── Watch out for ──────────────────────────────────────────────── */}
      {phase.misconceptions.length > 0 && (
        <ul className="mt-4 space-y-3">
          {phase.misconceptions.map((m) => (
            <li
              key={m.wrong}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="flex gap-2 font-medium text-red-700 dark:text-red-400">
                <span aria-hidden="true">✗</span>
                <span>{m.wrong}</span>
              </p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed opacity-80">
                <span aria-hidden="true" className="text-green-700 dark:text-green-400">
                  ✓
                </span>
                <span>{m.right}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Small helper so the page and the print sheet agree on how to say the time. */
export function LessonSummaryLine({ plan }: { plan: LessonPlan }) {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm opacity-70">
      <span className="flex items-center gap-1.5">
        <Icon name={plan.topicIcon} className="h-4 w-4" />
        {plan.year}
      </span>
      <span className="tabular-nums">
        about {plan.totalMinutes} minutes
      </span>
      <span className="tabular-nums">{plan.totalMarks} marks</span>
    </p>
  );
}
