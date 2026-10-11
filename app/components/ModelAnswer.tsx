// One exam question per topic, with a modelled answer and the mark scheme
// laid against it (lib/content/model-answers.ts).
//
// ⚠️ THE ANSWER IS CLOSED UNTIL YOU OPEN IT, ON PURPOSE. Reading a model
// answer before trying is reading; trying first and then comparing is
// retrieval practice and self-marking, which is the whole value of it. A
// <details>, like Explain further: no JavaScript, works before hydration,
// and the browser does the button role and aria-expanded properly.

import type { ModelAnswer as ModelAnswerData } from "../lib/content/model-answers";
import { HigherBadge } from "./HigherBadge";

export function ModelAnswer({ model, accent }: { model: ModelAnswerData; accent: string }) {
  return (
    <section id="exam-question" className="mt-10 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight">An exam question</h2>
      <p className="mt-1 opacity-60">
        Write your answer first — on paper, or out loud — then open the model answer and mark yourself against it.
      </p>
      <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <p className="text-lg font-semibold leading-snug">
          {model.question} <span className="whitespace-nowrap text-sm font-medium opacity-60">[{model.marks} marks]</span>
          {model.higherOnly && <> <HigherBadge /></>}
        </p>
        {model.note && <p className="mt-2 text-sm opacity-70">{model.note}</p>}

        <details className="group mt-4">
          <summary
            className="flex min-h-11 w-full cursor-pointer list-none items-center gap-2 rounded-lg px-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
            style={{ color: accent }}
          >
            <span aria-hidden="true" className="transition group-open:rotate-90">›</span>
            <span className="group-open:hidden">Show the model answer and how it is marked</span>
            <span className="hidden group-open:inline">Hide the model answer</span>
          </summary>

          <div className="mt-3 space-y-5">
            {/* the answer as one paragraph, as it would be written, with a
                small number after each sentence for the scheme to point at */}
            <p className="leading-relaxed">
              {model.answer.map((sentence, i) => (
                <span key={i}>
                  {sentence}
                  <sup aria-hidden="true" className="ml-0.5 mr-1 text-xs font-bold" style={{ color: accent }}>{i + 1}</sup>
                  <span className="sr-only">(sentence {i + 1}) </span>
                </span>
              ))}
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">Where the marks come from</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {model.points.map((p) => (
                  <li key={p.point} className="flex gap-2">
                    <span aria-hidden="true" className="font-bold text-emerald-700 dark:text-emerald-400">✓</span>
                    <span>
                      {p.point}{" "}
                      <span className="opacity-60">— sentence{p.sentences.length > 1 ? "s" : ""} {p.sentences.map((n) => n + 1).join(", ")}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-500/10 p-4 text-sm">
              <p className="font-semibold">Why this reaches the top level</p>
              <p className="mt-1 opacity-85">{model.level}</p>
            </div>
            <div className="rounded-xl bg-amber-500/10 p-4 text-sm">
              <p className="font-semibold">Where marks are usually lost</p>
              <p className="mt-1 opacity-85">{model.slip}</p>
            </div>
            <p className="text-xs opacity-60">
              Six-mark science questions are marked by level: the examiner reads the whole answer against a list of
              points like the one above. Each point is shown against a sentence to make the scheme visible, not because
              every sentence is worth exactly one mark.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
