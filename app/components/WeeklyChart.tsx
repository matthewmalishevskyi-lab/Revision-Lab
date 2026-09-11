"use client";

// The weekly bar chart: seven days, one bar per subject, side by side.
//
// The number of subjects is NOT baked in — `series` is a prop and everything
// below maps over it, which is why adding History, Geography and Business
// needed no change here at all.
//
// Hand-drawn with divs rather than an installed chart library. A grouped bar
// chart is genuinely simple — the whole job is "scale each value against the
// biggest one and give it that share of the height" — and a library for this
// would be a large dependency to avoid twenty lines of arithmetic.
//
// It is a Client Component only because of the Time / Questions toggle. The
// bars themselves need no JavaScript at all.

import { useState } from "react";
import type { DayTotals } from "../lib/progress";

type Series = { slug: string; name: string; colour: string };

export function WeeklyChart({
  week,
  series,
}: {
  week: DayTotals[];
  series: Series[];
}) {
  const [mode, setMode] = useState<"seconds" | "questions">("seconds");

  const valueFor = (day: DayTotals, slug: string) =>
    mode === "seconds" ? (day.seconds[slug] ?? 0) : (day.questions[slug] ?? 0);

  // ───────────────────────────────────────────────────────────────────────────
  // THE SCALE, AND THE ONE BUG EVERY BAR CHART HAS
  //
  // Bar height is value ÷ largest value. If every value is zero, that is a
  // division by zero, which in JavaScript gives NaN — and a NaN height renders
  // as an invisible, broken chart rather than an error anyone would notice.
  //
  // `Math.max(1, ...)` makes the divisor at least 1, so an empty week draws as
  // seven honest flat lines. The most common day to see this page is the first
  // one, when everything IS zero, so this is the normal case rather than an
  // edge case.
  // ───────────────────────────────────────────────────────────────────────────
  const highest = Math.max(
    1,
    ...week.flatMap((day) => series.map((s) => valueFor(day, s.slug))),
  );

  const axisLabel = (value: number) =>
    mode === "seconds"
      ? value >= 3600
        ? `${Math.round((value / 3600) * 10) / 10}h`
        : `${Math.round(value / 60)}m`
      : String(Math.round(value));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold">Weekly study time</h3>
          <p className="text-sm opacity-50">The last seven days.</p>
        </div>

        {/* Two buttons rather than a dropdown: with exactly two options, a
            dropdown hides one of them behind a click for no reason. */}
        <div
          className="flex rounded-lg border border-black/10 p-0.5 text-sm dark:border-white/15"
          role="group"
          aria-label="What the chart shows"
        >
          {(["seconds", "questions"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMode(option)}
              aria-pressed={mode === option}
              // 28px was the smallest tap target on the whole progress page,
              // and this pair is the only control on it. min-h-9 inside a
              // segmented control that is itself only ~36px tall keeps the
              // pill shape while giving a thumb something to hit.
              className={`min-h-9 rounded-md px-3 py-1 font-medium transition ${
                mode === option
                  ? "bg-blue-600 text-white"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {option === "seconds" ? "Time" : "Questions"}
            </button>
          ))}
        </div>
      </div>

      {/* Key */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {series.map((s) => (
          <span key={s.slug} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: s.colour }}
            />
            <span className="opacity-70">{s.name}</span>
          </span>
        ))}
      </div>

      {/* ⚠️ THE SMALLEST PHONE HAS TO FIT SEVEN DAY NAMES, AND IT DIDN'T.
          Measured at 320px: this card's min-content is 292 units inside a
          272-unit column, so /progress scrolled sideways by 21px and the
          right-hand edge of the card — and the ends of the subject names
          beside it — were off screen. Seven three-letter labels, six gaps, a
          scale column and 20px of card padding each side simply do not fit in
          232px at 12px type.
          Nothing here can shrink below its text, so the space has to come out
          of the chrome: tighter gaps, tighter padding, and a smaller axis type
          size below `sm` only. `0.625rem` rather than `10px` so it still grows
          with the site's own large-text setting.
          The earlier phone pass recorded "no page overflows horizontally at
          any of the four widths" — true when it was written, and this page has
          gained a subject since. check-security cannot see layout, so the
          browser sweep in check-interactive.mjs now measures it every run. */}
      <div className="mt-4 flex gap-2 sm:gap-3">
        {/* The scale down the left. Four labels is enough to read a value
            approximately, which is all a bar chart is for. */}
        <div className="flex h-40 flex-col justify-between pb-6 text-right text-[0.625rem] opacity-40 sm:text-xs">
          {[1, 0.66, 0.33, 0].map((fraction) => (
            <span key={fraction}>{axisLabel(highest * fraction)}</span>
          ))}
        </div>

        <div className="flex-1">
          {/* gap-0.5 below sm, measured: the seven day columns and their six
              gaps were still 3 units over the 320px budget at gap-1. */}
          <div className="flex h-40 items-end gap-0.5 sm:gap-3">
            {week.map((day) => (
              <div key={day.date} className="flex flex-1 flex-col items-center">
                <div className="flex h-full w-full items-end justify-center gap-0.5 sm:gap-1">
                  {series.map((s) => {
                    const value = valueFor(day, s.slug);
                    const height = (value / highest) * 100;
                    return (
                      <div
                        key={s.slug}
                        // A tooltip on hover, using the browser's own, so it
                        // works on keyboard and screen readers without any
                        // extra code.
                        title={`${s.name}, ${day.day}: ${
                          mode === "seconds"
                            ? `${Math.round(value / 60)} min`
                            : `${value} question${value === 1 ? "" : "s"}`
                        }`}
                        className="w-full max-w-[14px] rounded-t transition-all"
                        style={{
                          backgroundColor: s.colour,
                          // A 2px floor so a day with nothing still shows a
                          // faint mark. A bar of literally zero height looks
                          // like a rendering fault rather than a quiet day.
                          height: `${Math.max(height, value > 0 ? 4 : 1.5)}%`,
                          opacity: value > 0 ? 1 : 0.25,
                        }}
                      />
                    );
                  })}
                </div>
                <span className="mt-2 text-[0.625rem] opacity-50 sm:text-xs">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
