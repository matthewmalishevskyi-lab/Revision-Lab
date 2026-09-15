// The shape of the lesson, before any of the content.
//
// ⚠️ A TEACHER DECIDING WHETHER TO USE THIS HAS ABOUT TWENTY SECONDS.
//
// The lesson below this is thousands of words long and answers "what are the
// questions". It does not answer the question actually being asked at the top
// of a free period, which is "what IS this, and does it fit my hour". Before
// this existed the only way to find out was to scroll the whole page and add
// the timings up.
//
// So: every part, what it is for, how long it takes, on one screen. It is
// derived from the same phases the lesson renders, so it cannot describe a
// lesson other than the one underneath it.

import type { LessonPlan } from "../../../../lib/lesson-plan";

export function RunningOrder({ plan }: { plan: LessonPlan }) {
  return (
    <section aria-labelledby="running-order" className="mt-8">
      <h2
        id="running-order"
        className="text-sm font-semibold uppercase tracking-[0.14em] opacity-50"
      >
        How the hour runs
      </h2>

      <ol className="mt-3 overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        {plan.phases.map((phase, index) => (
          <li
            key={phase.id}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-black/5 px-5 py-3 last:border-0 dark:border-white/10"
          >
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: plan.accent }}
            >
              {index + 1}
            </span>
            <span className="font-semibold">{phase.title}</span>
            {/* tabular-nums so the minutes form a column that can be scanned
                down rather than read line by line. */}
            <span className="tabular-nums text-sm opacity-55">
              {phase.minutes} min
              {phase.marks > 0 && ` · ${phase.marks} marks`}
              {phase.questions.length > 0 &&
                ` · ${phase.questions.length} question${phase.questions.length === 1 ? "" : "s"}`}
            </span>
            <span className="w-full text-sm opacity-70 sm:w-auto sm:flex-1 sm:basis-full">
              {phase.purpose}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-2 text-sm opacity-55">
        <span className="tabular-nums">{plan.totalMinutes} minutes</span> and{" "}
        <span className="tabular-nums">{plan.totalMarks} marks</span> in total.
        Timings come from one minute per mark, which is the rule students are
        taught for the exam itself — so they are a guide to the questions, not
        to how long your class will actually take.
      </p>
    </section>
  );
}

/**
 * What the page is and what to do with it, for a teacher who arrived from a
 * link and has never seen Revision Lab.
 *
 * A <details> rather than a panel: it is the most valuable thing here exactly
 * once, and clutter every time after that.
 */
export function HowThisWorks({ plan }: { plan: LessonPlan }) {
  return (
    <details className="mt-4 rounded-2xl border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
      <summary className="tap-pad cursor-pointer list-none px-5 py-4 font-medium">
        <span aria-hidden="true" className="mr-2 opacity-50">
          ?
        </span>
        New here — what is this page, and how do I use it?
      </summary>

      <div className="space-y-4 px-5 pb-5 text-sm opacity-80">
        <p>
          Every question below already existed on Revision Lab&apos;s{" "}
          {plan.topicTitle.toLowerCase()} revision page, written for students
          working on their own. This page puts them in a teaching order —
          easiest first, building up — and adds the timings. Nothing here was
          written specially, which is the point: it is the same material your
          students revise from.
        </p>

        <div>
          <p className="font-semibold opacity-100">There are four ways out of here</p>
          <ul className="mt-1.5 space-y-1.5">
            <li>
              <strong className="font-medium">PowerPoint</strong> — downloads
              the whole lesson as a .pptx with one question per slide. It is
              deliberately unstyled so it drops into your school template, and
              every answer is in the speaker notes rather than on the slide.
              Open Presenter View (Alt+F5) to see them.
            </li>
            <li>
              <strong className="font-medium">Present</strong> — puts the
              questions on the board straight from this page, one at a time,
              with no file to download. Arrow keys move, space shows the answer.
            </li>
            <li>
              <strong className="font-medium">Copy</strong> — the buttons beside
              each part put its questions on your clipboard as plain text, for
              pasting into slides you have already made.
            </li>
            <li>
              <strong className="font-medium">Printable worksheet</strong> — the
              questions with writing space, and the answers on a separate page
              at the back so you can hand the front out.
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold opacity-100">What the marks mean</p>
          <p className="mt-1.5">
            The number beside each question is how many marks it would be worth
            on a real paper. It is worked out from the command word and the
            tariffs {plan.subjectName} papers actually use — AQA publishes no
            table mapping command words to marks, and says so — so treat one as
            within about a mark of the real thing rather than as a mark scheme.
            The ordering of this lesson comes from those numbers.
          </p>
        </div>

        <div>
          <p className="font-semibold opacity-100">Before you use it with a class</p>
          <p className="mt-1.5">
            Revision Lab is a student project and its content has not been
            checked by a subject teacher. Read anything you are going to hand
            out. If something is wrong, that is worth telling us about — the
            contact address is in the footer.
          </p>
        </div>
      </div>
    </details>
  );
}
