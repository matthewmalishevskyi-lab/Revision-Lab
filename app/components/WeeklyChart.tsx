"use client";

// The weekly bar chart: seven days, three subjects, side by side.
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
              className={`rounded-md px-3 py-1 font-medium transition ${
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

      <div className="mt-4 flex gap-3">
        {/* The scale down the left. Four labels is enough to read a value
            approximately, which is all a bar chart is for. */}
        <div className="flex h-40 flex-col justify-between pb-6 text-right text-xs opacity-40">
          {[1, 0.66, 0.33, 0].map((fraction) => (
            <span key={fraction}>{axisLabel(highest * fraction)}</span>
          ))}
        </div>

        <div className="flex-1">
          <div className="flex h-40 items-end gap-1 sm:gap-3">
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
                <span className="mt-2 text-xs opacity-50">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
