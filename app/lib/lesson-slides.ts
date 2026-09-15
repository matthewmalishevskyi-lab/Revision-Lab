// A lesson, as slides a teacher can put on the board.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE ONE RULE: NOTHING ON A SLIDE GIVES AWAY AN ANSWER
//
// This is the same rule the printable worksheet learned the hard way. That
// sheet shipped with the "Teach this" bullets sitting under the starter
// questions, where "Translation: a slide, described by a column vector" is the
// literal answer to question 4 — found only by rendering it and reading it as
// a student would.
//
// A slide deck is worse, because thirty people read it at once and none of
// them had to turn a page to get there. So every answer, every worked step and
// every correction lives in the SPEAKER NOTES, which PowerPoint shows in
// Presenter View on the teacher's own screen and never on the projector.
//
// `scripts/check-pptx.mjs` enforces it rather than trusting this comment: it
// builds a real deck, reads the visible text of every slide, and fails if an
// answer appears in it.
// ─────────────────────────────────────────────────────────────────────────────

import type { LessonPlan, LessonPhase } from "./lesson-plan";
import type { Slide, Para, TextBox } from "./pptx";
import { buildPptx, PPTX_SLIDE_WIDTH, PPTX_SLIDE_HEIGHT } from "./pptx";

// A half-inch margin all round, in EMU.
const M = 685800;
const CONTENT_W = PPTX_SLIDE_WIDTH - M * 2;

function box(y: number, h: number, paras: Para[], shrink = false): TextBox {
  return { x: M, y, w: CONTENT_W, h, paras, shrink };
}

function line(text: string, size: number, bold = false, colour?: string): Para {
  return { runs: [{ text, size, bold, colour }] };
}

/** Question text carries real line breaks — a column vector is three lines. */
function multiline(text: string, size: number, bold = false): Para[] {
  return text.split("\n").map((part) => line(part, size, bold));
}

/**
 * ⚠️ THE SLIDE SHOWS THE QUESTION AND ITS TARIFF AND NOTHING ELSE.
 *
 * Not the topic name, not the phase name in large type, not a running total.
 * A question on a projector is being read by someone with about eight seconds
 * of attention, and every other word on the slide competes with it.
 */
function questionSlide(
  plan: LessonPlan,
  phase: LessonPhase,
  q: LessonPlan["phases"][number]["questions"][number],
  number: number,
): Slide {
  const header = `${phase.title.toUpperCase()}  ·  Q${number}`;
  const tariff = `${q.marks} mark${q.marks === 1 ? "" : "s"}`;

  const paras: Para[] = [
    { runs: [{ text: header, size: 14, bold: true, colour: "6B7280" }] },
  ];
  if (q.higherOnly) {
    paras.push(line("HIGHER TIER", 12, true, "B45309"));
  }

  const body: Para[] = multiline(q.question, 30, true);
  // Multiple choice options are lettered, because that is how a teacher refers
  // to them out loud — "hands up for B" — and how the worksheet prints them.
  const choices: Para[] =
    q.choices && q.choices.length > 0
      ? q.choices.map((choice, i) =>
          line(`${String.fromCharCode(65 + i)}.  ${choice}`, 20),
        )
      : [];

  const notes: string[] = [
    q.selfMarked ? "MODEL ANSWER (no single right wording)" : "ANSWER",
    q.answer,
    "",
    `Worth ${tariff}. At a minute a mark, allow about ${q.marks} minute${q.marks === 1 ? "" : "s"}.`,
  ];
  if (q.selfMarked) {
    notes.push(
      "Extended answer — mark for the points made, not for matching this wording.",
    );
  }

  return {
    boxes: [
      box(M, 400000, paras),
      box(M + 600000, 3000000, [...body, ...(choices.length ? [line("", 12)] : []), ...choices], true),
      box(PPTX_SLIDE_HEIGHT - M - 300000, 300000, [
        { runs: [{ text: `[${tariff}]`, size: 18, bold: true, colour: "374151" }] },
      ]),
    ],
    notes,
    secret: q.answer,
  };
}

function phaseDividerSlide(plan: LessonPlan, phase: LessonPhase, index: number): Slide {
  const detail = [
    `${phase.minutes} min`,
    phase.marks > 0 ? `${phase.marks} marks` : null,
  ]
    .filter(Boolean)
    .join("  ·  ");

  return {
    boxes: [
      box(PPTX_SLIDE_HEIGHT / 2 - 900000, 500000, [
        { runs: [{ text: `PART ${index + 1}`, size: 14, bold: true, colour: "6B7280" }] },
      ]),
      box(PPTX_SLIDE_HEIGHT / 2 - 500000, 900000, [line(phase.title, 40, true)], true),
      box(PPTX_SLIDE_HEIGHT / 2 + 300000, 500000, [
        { runs: [{ text: detail, size: 16, colour: "6B7280" }] },
      ]),
    ],
    // The purpose line is for the teacher, not the class: it says what this
    // part of the lesson is FOR, which is planning language, not teaching
    // language.
    notes: [phase.purpose],
  };
}

/** Teaching points ARE the lesson here, so these go on the slide by design. */
function teachingSlides(phase: LessonPhase): Slide[] {
  return phase.teachingPoints.map((block) => ({
    boxes: [
      box(M, 400000, [
        { runs: [{ text: phase.title.toUpperCase(), size: 14, bold: true, colour: "6B7280" }] },
      ]),
      box(M + 500000, 700000, [line(block.heading, 28, true)]),
      box(M + 1300000, 3800000, block.points.flatMap((point) =>
        point.split("\n").map((part, i) => ({
          runs: [{ text: part, size: 18 }],
          bullet: i === 0,
        })),
      ), true),
    ],
    notes: block.diagrams.length
      ? [`${block.diagrams.length} diagram${block.diagrams.length === 1 ? "" : "s"} for this in the Revision Lab diagram library.`]
      : [],
  }));
}

/**
 * ⚠️ A WORKED EXAMPLE SHOWS ITS QUESTION AND HIDES ITS WORKING.
 *
 * The phase is called "Model it" and its purpose line says "work these on the
 * board". Printing the finished steps on the slide is the one thing that stops
 * that happening — the class copies the answer down and nobody watches the
 * method being chosen. The steps are in the notes, for the teacher to work
 * through live.
 */
function workedExampleSlide(example: LessonPhase["workedExamples"][number]): Slide {
  return {
    boxes: [
      box(M, 400000, [
        { runs: [{ text: "WORKED EXAMPLE — work this through on the board", size: 14, bold: true, colour: "6B7280" }] },
      ]),
      box(M + 600000, 3600000, multiline(example.question, 26, true), true),
    ],
    notes: [
      "STEPS — reveal these by working them, not by showing them:",
      ...example.steps.map((step, i) => `${i + 1}. ${step}`),
      "",
      `ANSWER: ${example.answer}`,
    ],
    secret: example.answer,
  };
}

/**
 * ⚠️ THE MISCONCEPTION GOES UP, THE CORRECTION STAYS DOWN.
 *
 * "True or false: enlarging by scale factor 3 makes the area 3 times bigger"
 * is a question worth thirty seconds of argument. Printing the correction
 * beside it turns the same slide into a sentence nobody reads.
 */
function misconceptionSlide(m: LessonPhase["misconceptions"][number]): Slide {
  return {
    boxes: [
      box(M, 400000, [
        { runs: [{ text: "TRUE OR FALSE?", size: 14, bold: true, colour: "6B7280" }] },
      ]),
      box(M + 700000, 2600000, multiline(m.wrong, 28, true), true),
    ],
    notes: ["FALSE — this is a common misconception.", "", `The correction: ${m.right}`],
    secret: m.right,
  };
}

/** Every slide of the deck, in the order a teacher would advance through them. */
export function lessonSlides(plan: LessonPlan): Slide[] {
  const slides: Slide[] = [];

  slides.push({
    boxes: [
      box(PPTX_SLIDE_HEIGHT / 2 - 1100000, 1400000, multiline(plan.topicTitle, 44, true), true),
      box(PPTX_SLIDE_HEIGHT / 2 + 400000, 500000, [
        {
          runs: [
            {
              text: `${plan.subjectName}  ·  ${plan.year}  ·  ${plan.totalMarks} marks  ·  about ${plan.totalMinutes} minutes`,
              size: 16,
              colour: "6B7280",
            },
          ],
        },
      ]),
    ],
    notes: [
      plan.summary,
      "",
      "HOW THIS DECK IS ARRANGED",
      "Every answer is in the speaker notes, never on the slide, so the deck is safe to project as it stands.",
      "Open Presenter View (Slide Show → Presenter View, or Alt+F5) to see the notes while the class sees the slide.",
      "",
      "Running order:",
      ...plan.phases.map(
        (p) => `· ${p.title} — ${p.minutes} min${p.marks > 0 ? `, ${p.marks} marks` : ""}: ${p.purpose}`,
      ),
      "",
      plan.flatDifficulty
        ? "NOTE: this topic is recall-heavy — nearly every question is worth the same, so the lesson does not build up the way the part names suggest. That is the content, not the ordering."
        : "Questions are ordered by mark tariff, so the lesson gets harder as it goes.",
      "",
      "Tariffs are derived from AQA's marking principles rather than copied from a mark scheme — treat one as within a mark of the real thing.",
    ],
  });

  // ⚠️ A SLIDE WHOSE ANSWER IS ALREADY ON AN EARLIER SLIDE IS NOT A QUESTION.
  //
  // Computer Science's databases topic teaches
  //   "Example: SELECT Name, Grade FROM Students WHERE Grade > 5 ORDER BY Name ASC;"
  // as a key fact, and three slides later asks the class to write exactly that
  // statement as a worked example. On the revision page the two sit in
  // different sections and a student meets them minutes apart; projected in
  // sequence, the second one is already answered on the board behind it.
  //
  // Rather than edit content that is correct where it lives, the deck drops a
  // slide whose secret has already been shown. `shownSoFar` is the visible
  // text of every slide already pushed — the same thing the class has seen.
  // `check-pptx.mjs` asserts that none survive, so this cannot quietly stop
  // working.
  let shownSoFar = "";
  const push = (slide: Slide): void => {
    if (slide.secret && slide.secret.length >= 25 && shownSoFar.includes(slide.secret)) return;
    slides.push(slide);
    shownSoFar += slide.boxes
      .flatMap((b) => b.paras.flatMap((para) => para.runs.map((r) => r.text)))
      .join("\n");
  };
  slides.forEach((slide) => {
    shownSoFar += slide.boxes
      .flatMap((b) => b.paras.flatMap((para) => para.runs.map((r) => r.text)))
      .join("\n");
  });

  let questionNumber = 0;
  plan.phases.forEach((phase, index) => {
    push(phaseDividerSlide(plan, phase, index));
    teachingSlides(phase).forEach(push);
    phase.workedExamples.forEach((example) => push(workedExampleSlide(example)));
    phase.questions.forEach((q) => {
      questionNumber += 1;
      push(questionSlide(plan, phase, q, questionNumber));
    });
    phase.misconceptions.forEach((m) => push(misconceptionSlide(m)));
  });

  if (plan.examTips.length > 0) {
    slides.push({
      boxes: [
        box(M, 700000, [line("Before you go", 32, true)]),
        box(M + 900000, 4200000, plan.examTips.map((tip) => ({
          runs: [{ text: tip.tip, size: 18 }],
          bullet: true,
        })), true),
      ],
      notes: plan.examTips.map((tip) => `${tip.tip} — ${tip.detail}`),
    });
  }

  return slides;
}

export function lessonPptx(plan: LessonPlan): Buffer {
  return buildPptx(lessonSlides(plan));
}

/** `maths-vectors-and-transformations-lesson.pptx` — sortable, and obvious in a downloads folder. */
export function lessonPptxFilename(plan: LessonPlan): string {
  return `${plan.subjectSlug}-${plan.topicSlug}-lesson.pptx`;
}
