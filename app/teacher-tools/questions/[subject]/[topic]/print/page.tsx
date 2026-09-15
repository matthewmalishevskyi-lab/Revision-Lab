import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "../../../../../components/PrintButton";
import { buildLessonPlan, subjectsWithLessons } from "../../../../../lib/lesson-plan";

// The photocopiable version.
//
// A separate route rather than a print stylesheet over the interactive page —
// the same call the printable revision sheets already made, and for the same
// reason: the screen version has a Show answers button, a site header and a
// mascot, none of which mean anything on paper, and hiding them all with
// `print:hidden` would tangle two designs into one file.
//
// ⚠️ THE ANSWERS ARE ALL AT THE END, NOT UNDER THEIR QUESTIONS. That is how a
// real worksheet is built, and the reason is the same one that hides them on
// screen: a photocopy handed to thirty students must not carry the answers
// beside the questions. The teacher keeps the last page.
//
// ⚠️ AND "AT THE END" HAS TO MEAN EVERY ANSWER, NOT JUST THE MARK SCHEME.
// The first version of this page printed the phases in lesson order, so the
// "Teach this" bullets landed directly under the starter questions — and one
// of those bullets is "Translation: a slide, described by a column vector",
// which is the answer to question 4 sitting four lines below question 4. The
// worked examples and the misconceptions carry answers too.
//
// Only visible once the sheet was rendered and read as a student would read
// it, top to bottom, which is the whole argument for looking at the artefact
// rather than the code. So the sheet is now split in two: questions and ruled
// space for the student, then a page break, then everything that gives an
// answer away — teaching points, worked examples, misconceptions, mark scheme
// — for the teacher.

type Params = { params: Promise<{ subject: string; topic: string }> };

export function generateStaticParams() {
  return subjectsWithLessons().flatMap((s) =>
    s.topics.map((t) => ({ subject: s.slug, topic: t.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject, topic } = await params;
  const plan = buildLessonPlan(subject, topic);
  if (!plan) return {};
  return {
    title: `${plan.topicTitle} — printable worksheet`,
    robots: { index: false, follow: true },
  };
}

export default async function PrintLessonPage({ params }: Params) {
  const { subject, topic } = await params;
  const plan = buildLessonPlan(subject, topic);
  if (!plan) notFound();

  // Numbered continuously across the whole sheet, the way a paper numbers its
  // questions — so "question 11" means one thing, not "the third one in the
  // fourth section".
  let n = 0;
  const numbered = plan.phases.map((phase) => ({
    phase,
    questions: phase.questions.map((q) => ({ q, number: ++n })),
  }));
  const answered = numbered.flatMap((p) => p.questions);

  return (
    <main className="mx-auto w-full max-w-3xl bg-white px-8 py-10 text-black">
      <div className="diagram-controls mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4 print:hidden">
        <Link href={`/teacher-tools/questions/${plan.subjectSlug}/${plan.topicSlug}`} className="tap-pad text-sm underline">
          ← Back to the lesson
        </Link>
        <PrintButton />
      </div>

      <header className="border-b-2 border-black pb-3">
        <h1 className="text-2xl font-bold">{plan.topicTitle}</h1>
        <p className="mt-1 text-sm">
          {plan.subjectName} · {plan.year} · {plan.totalMarks} marks · about{" "}
          {plan.totalMinutes} minutes
        </p>
        <p className="mt-3 text-xs">
          Name: ______________________________ Class: ______________
        </p>
      </header>

      {numbered.map(({ phase, questions }) =>
        questions.length === 0 ? null : (
          <section key={phase.id} className="mt-6 break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider">
              {phase.title}
              {phase.marks > 0 && (
                <span className="font-normal"> · {phase.marks} marks</span>
              )}
            </h2>

            <ol className="mt-2 space-y-3 text-sm">
              {questions.map(({ q, number }) => (
                <li key={q.question} className="break-inside-avoid">
                  <p className="whitespace-pre-line">
                    <span className="font-semibold">{number}. </span>
                    {q.question}
                    <span className="ml-2 whitespace-nowrap font-semibold tabular-nums">
                      [{q.marks} {q.marks === 1 ? "mark" : "marks"}]
                    </span>
                  </p>
                  {q.choices && q.choices.length > 0 ? (
                    <ul className="mt-1 pl-5">
                      {q.choices.map((choice, i) => (
                        <li key={choice}>
                          {String.fromCharCode(65 + i)}. {choice}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    /* Ruled space to write in, scaled to the tariff — a 1-mark
                       question gets one line and a 12-mark answer gets room to
                       plan. A fixed gap either wastes half a page or tells a
                       student their essay should be two lines long. */
                    <div className="mt-1 space-y-4 pl-5">
                      {Array.from({ length: Math.min(q.marks, 8) }).map((_, i) => (
                        <div key={i} className="border-b border-dotted border-black/40" />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ),
      )}

      {/* ── Everything below here is the teacher's, and starts on a new page ── */}
      <section className="mt-10 break-before-page border-t-2 border-black pt-4">
        <h2 className="text-lg font-bold">Teacher&apos;s notes</h2>
        <p className="mt-0.5 text-xs italic">
          Not for the students — these pages give the answers away.
        </p>

        {/* The lesson page says this above the fold; the sheet has to say it
            too, because a teacher can print straight from a link and never see
            that page. A worksheet whose questions are all the same size, handed
            over with no warning, reads as a ramp that failed rather than as a
            topic that has no ramp in it. */}
        {plan.flatDifficulty && (
          <p className="mt-2 text-xs">
            <strong>This topic is recall-heavy.</strong> Nearly every question
            is worth the same, so the sheet does not build up the way the phase
            names suggest. That is the content, not the ordering.
          </p>
        )}

        {plan.phases
          .filter((phase) => phase.teachingPoints.length > 0)
          .map((phase) => (
            <div key={phase.id} className="mt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {phase.title}
              </h3>
              <ul className="mt-1 space-y-2 text-sm">
                {phase.teachingPoints.map((block) => (
                  <li key={block.heading} className="break-inside-avoid">
                    <span className="font-semibold">{block.heading}</span>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5">
                      {block.points.map((point) => (
                        <li key={point} className="whitespace-pre-line">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {plan.phases
          .filter((phase) => phase.workedExamples.length > 0)
          .map((phase) => (
            <div key={phase.id} className="mt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {phase.title}
              </h3>
              {phase.workedExamples.map((example) => (
                <div key={example.question} className="mt-2 break-inside-avoid text-sm">
                  <p className="whitespace-pre-line font-medium">{example.question}</p>
                  <ol className="mt-1 list-decimal space-y-0.5 pl-5">
                    {example.steps.map((step) => (
                      <li key={step} className="whitespace-pre-line">
                        {step}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-1 whitespace-pre-line font-semibold">
                    Answer: {example.answer}
                  </p>
                </div>
              ))}
            </div>
          ))}

        {plan.phases
          .filter((phase) => phase.misconceptions.length > 0)
          .map((phase) => (
            <div key={phase.id} className="mt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {phase.title}
              </h3>
              <ul className="mt-1 space-y-1.5 text-sm">
                {phase.misconceptions.map((m) => (
                  <li key={m.wrong} className="break-inside-avoid">
                    <span className="font-medium">✗ {m.wrong}</span>
                    <br />
                    <span>✓ {m.right}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      {answered.length > 0 && (
        <section className="mt-8 border-t border-black/30 pt-4">
          <h2 className="text-lg font-bold">Mark scheme</h2>
          <ol className="mt-3 space-y-2 text-sm">
            {answered.map(({ q, number }) => (
              <li key={q.question} className="break-inside-avoid">
                <span className="font-semibold">
                  {number}. [{q.marks}]{" "}
                </span>
                <span className="whitespace-pre-line">{q.answer}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <p className="mt-8 border-t border-black/10 pt-3 text-xs">
        Revision Lab · Questions written for revision and arranged into a lesson
        automatically. Mark tariffs are derived from AQA&apos;s marking
        principles, not copied from a mark scheme — check anything you are going
        to hand out.
      </p>
    </main>
  );
}
