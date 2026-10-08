// The "Explain further" disclosure under a key-fact block.
//
// See app/lib/explainFurther.ts for what goes in it and the measurements that
// decided it. This file is only the rendering.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ <details> RATHER THAN REACT STATE, AND IT IS NOT LAZINESS
//
// The obvious build is a Client Component with a useState boolean. This one is
// a plain <details>/<summary>, which means:
//
//   - NO "use client", so not one byte of JavaScript ships for it. There are
//     up to ten of these on a topic page and 1,278 across the site.
//   - It works before hydration and with JavaScript off entirely, like the
//     jump menu's plain #anchors.
//   - Open/closed, the button role, aria-expanded, Enter and Space, and the
//     screen-reader announcement are all the browser's job, done properly,
//     for free. Every one of those is something a hand-rolled version gets
//     subtly wrong — and this codebase has already shipped `aria-valuetext`
//     on a role it is invalid for.
//   - Ctrl+F finds text inside a closed one in Chrome and opens it, which a
//     React-hidden panel cannot do.
//
// The cost is that it cannot animate its height, which is a cost worth paying.
//
// ⚠️ It is also why this takes plain strings as props. The matching in
// lib/explainFurther.ts reads whole topics, so it has to stay on the server —
// importing it from a Client Component would ship the content registry to the
// browser, the trap calculator-topics.ts already documents.

import type { Explanation } from "../lib/explainFurther";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider opacity-55">
      {children}
    </p>
  );
}

export function ExplainFurther({
  explanation,
  accent,
}: {
  explanation: Explanation;
  accent: string;
}) {
  const { definitions, mistake, example } = explanation;

  return (
    <details className="group mt-4">
      {/* min-h-11 and a -mx-1 px-1 hit box: this is a touch target, and the
          text alone is 20px tall. `list-none` plus the webkit rule removes the
          default triangle, which no amount of styling makes look deliberate. */}
      <summary
        className="flex min-h-11 w-full cursor-pointer list-none items-center gap-2 rounded-lg px-1 text-sm font-semibold transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
        style={{ color: accent }}
      >
        <span
          aria-hidden="true"
          className="transition-transform group-open:rotate-90"
        >
          ▸
        </span>
        {/* The words change, because "Explain further" on an open panel is a
            button offering something it has already done. */}
        <span className="group-open:hidden">Explain further</span>
        <span className="hidden group-open:inline">Hide the explanation</span>
      </summary>

      <div className="mt-3 space-y-4 rounded-xl border border-black/5 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/5">
        {definitions.length > 0 && (
          <div className="space-y-2">
            <Label>What the words mean</Label>
            <dl className="space-y-2">
              {definitions.map((d) => (
                <div key={d.term} className="leading-relaxed">
                  <dt className="inline font-semibold">{d.term} — </dt>
                  <dd className="inline opacity-80">{d.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {mistake && (
          <div className="space-y-2">
            <Label>Where people go wrong</Label>
            {/* ✗ and ✓ carry meaning, so they are not left to colour alone —
                the same rule the quiz answer buttons follow with their shapes.
                aria-hidden on the glyphs, with the sense in the text. */}
            <p className="leading-relaxed">
              <span aria-hidden="true" className="font-semibold text-red-700 dark:text-red-400">✗ </span>
              <span className="opacity-80">{mistake.wrong}</span>
            </p>
            <p className="leading-relaxed">
              <span aria-hidden="true" className="font-semibold text-green-700 dark:text-green-400">✓ </span>
              <span className="opacity-80">{mistake.right}</span>
            </p>
          </div>
        )}

        {example && (
          <div className="space-y-2">
            <Label>The method in action</Label>
            {/* whitespace-pre-line, because five worked-example answers hold
                real pseudocode with real newlines — see the 2026-09-12 note. */}
            <p className="font-medium leading-relaxed whitespace-pre-line">{example.question}</p>
            <ol className="ml-5 list-decimal space-y-1 opacity-80">
              {example.steps.map((step) => (
                <li key={step} className="leading-relaxed whitespace-pre-line">{step}</li>
              ))}
            </ol>
            <p className="leading-relaxed whitespace-pre-line">
              <span className="font-semibold">Answer: </span>
              <span className="opacity-80">{example.answer}</span>
            </p>
          </div>
        )}
      </div>
    </details>
  );
}
