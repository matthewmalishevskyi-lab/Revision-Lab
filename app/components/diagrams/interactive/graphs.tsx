"use client";

// Two where the number you are being taught to CALCULATE is the thing that
// moves: y = mx + c, and Pythagoras.
//
// ─────────────────────────────────────────────────────────────────────────────
// A GRADIENT IS MEASURED, NOT GUESSED
//
// The static version of the straight-line graph already makes the right point
// — it draws the step triangle, because a gradient is up ÷ across off the axes
// rather than an impression of steepness. What it cannot do is let you get it
// wrong. Drag one end and watch a line that "looks about twice as steep" turn
// out to have a gradient of 0.8: that is the misconception, met head on, in
// the one form where a student cannot argue with it.
//
// Negative gradients get the same treatment. "It goes down, so m is negative"
// is a rule most students can recite and a surprising number cannot apply to a
// line drawn right to left.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useId, useState } from "react";
import { line as figureLine, Fig } from "../shared";
import { clampToBox, rightAngleMark, type Point } from "./geometry";
import { Handle, Holds, InteractiveFigure } from "./parts";

const VIEWBOX = "0 0 220 132";

// ─── The grid both of these are drawn on ────────────────────────────────────
//
// A real pair of numbered axes, not the unlabelled box the static plots use.
// The whole point of dragging is that you read a number off the graph and
// check it against the one in the caption, and you cannot read anything off an
// axis with no numbers on it.

const GRID = { left: 30, right: 198, top: 20, bottom: 100 };
const RANGE = { x: 10, y: 10 };

function px(x: number) {
  return GRID.left + (x / RANGE.x) * (GRID.right - GRID.left);
}
function py(y: number) {
  return GRID.bottom - (y / RANGE.y) * (GRID.bottom - GRID.top);
}
/** Back from a dragged position to graph coordinates. */
function toGraph(p: Point): Point {
  return {
    x: ((p.x - GRID.left) / (GRID.right - GRID.left)) * RANGE.x,
    y: ((GRID.bottom - p.y) / (GRID.bottom - GRID.top)) * RANGE.y,
  };
}

/** Snap to halves — fine enough to be interesting, coarse enough to read. */
function snap(v: number) {
  return Math.round(v * 2) / 2;
}

function Grid({ xLabel, yLabel }: { xLabel?: string; yLabel?: string }) {
  const ticks = [2, 4, 6, 8, 10];
  return (
    <>
      {ticks.map((t) => (
        <g key={t}>
          <path
            d={`M ${px(t)} ${GRID.top} L ${px(t)} ${GRID.bottom}`}
            className="stroke-current opacity-10"
            strokeWidth={1}
          />
          <path
            d={`M ${GRID.left} ${py(t)} L ${GRID.right} ${py(t)}`}
            className="stroke-current opacity-10"
            strokeWidth={1}
          />
          <text x={px(t)} y={GRID.bottom + 10} textAnchor="middle" className="fill-current text-[7px] opacity-50">
            {t}
          </text>
          <text x={GRID.left - 4} y={py(t) + 2.5} textAnchor="end" className="fill-current text-[7px] opacity-50">
            {t}
          </text>
        </g>
      ))}
      <Fig d={`M ${GRID.left} ${GRID.top} L ${GRID.left} ${GRID.bottom} L ${GRID.right} ${GRID.bottom}`} />

      {/* ⚠️ The axis letters sit BEYOND the last tick, not on it. Placed at the
          end of each axis they landed exactly on top of the "10" label — the
          x-axis letter shared a pixel with it — because the last tick is at the
          end of the axis by definition. Found by rendering it. */}
      {xLabel ? (
        <text x={GRID.right + 8} y={GRID.bottom + 3} className="fill-current text-[8px] opacity-60">
          {xLabel}
        </text>
      ) : null}
      {yLabel ? (
        <text x={GRID.left} y={GRID.top - 5} textAnchor="middle" className="fill-current text-[8px] opacity-60">
          {yLabel}
        </text>
      ) : null}
    </>
  );
}

// ─── y = mx + c ─────────────────────────────────────────────────────────────

const LINE_START: Point[] = [
  { x: 2, y: 3 },
  { x: 8, y: 7 },
];

/** One decimal, and no "-0" or "3.0". */
function num(v: number): string {
  const r = Math.round(v * 100) / 100;
  const safe = Object.is(r, -0) ? 0 : r;
  return Number.isInteger(safe) ? `${safe}` : `${safe}`;
}

export function GradientIntercept() {
  // ⚠️ A generated id, not a literal one. Two of these on the same page — which
  // the teacher-tools library does whenever a topic uses the diagram twice —
  // would both define `#grid-clip`, and the browser resolves the FIRST one for
  // both, so one line gets clipped to the other's box.
  const clipId = useId();
  const [points, setPoints] = useState(LINE_START);
  const reset = useCallback(() => setPoints(LINE_START), []);

  const move = useCallback((index: number, to: Point) => {
    setPoints((prev) => {
      const g = toGraph(clampToBox(to, GRID));
      const next = prev.map((p, i) => (i === index ? { x: snap(g.x), y: snap(g.y) } : p));
      // Two points with the same x are not a function, and the gradient is a
      // division by nought: the line would be vertical and "y = mx + c" cannot
      // describe it at all. Kept a whole unit apart so the step triangle
      // stays readable too.
      return Math.abs(next[0].x - next[1].x) < 1 ? prev : next;
    });
  }, []);

  const [P, Q] = points;
  const rise = Q.y - P.y;
  const run = Q.x - P.x;
  const m = rise / run;
  const c = P.y - m * P.x;

  // Where the line leaves the visible grid, so it is drawn as a LINE rather
  // than as the segment between the two points — the intercept is usually
  // outside them, and it is the thing being read off.
  const yAt = (x: number) => m * x + c;
  const ends: [Point, Point] = [
    { x: 0, y: yAt(0) },
    { x: RANGE.x, y: yAt(RANGE.x) },
  ];

  const interceptVisible = c >= 0 && c <= RANGE.y;

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A straight line graph with two draggable points, showing its gradient and y-intercept updating"
      caption="m is up ÷ across; c is where the line crosses the y-axis"
      onReset={reset}
      readout={
        <>
          y = {num(m)}x {c < 0 ? "−" : "+"} {num(Math.abs(c))}
          <span className="mx-1.5 opacity-40">·</span>
          m = {num(rise)} ÷ {num(run)}
          <Holds ok={Math.abs(m * P.x + c - P.y) < 1e-9} />
        </>
      }
    >
      <Grid xLabel="x" yLabel="y" />

      {/* The line, clipped to the grid by drawing only between the edges. */}
      <path
        d={`M ${px(ends[0].x)} ${py(ends[0].y)} L ${px(ends[1].x)} ${py(ends[1].y)}`}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={2}
        fill="none"
        clipPath={`url(#${clipId})`}
      />
      <clipPath id={clipId}>
        <rect x={GRID.left} y={GRID.top} width={GRID.right - GRID.left} height={GRID.bottom - GRID.top} />
      </clipPath>

      {/* The step triangle — up and across, measured, which is the method. */}
      <Fig d={`M ${px(P.x)} ${py(P.y)} L ${px(Q.x)} ${py(P.y)} L ${px(Q.x)} ${py(Q.y)}`} dashed />
      <text
        x={(px(P.x) + px(Q.x)) / 2}
        y={py(P.y) + (rise > 0 ? 11 : -5)}
        textAnchor="middle"
        className="fill-current text-[8px] opacity-70"
      >
        across {num(run)}
      </text>
      <text
        x={px(Q.x) + 4}
        y={(py(P.y) + py(Q.y)) / 2 + 3}
        className="fill-current text-[8px] opacity-70"
      >
        up {num(rise)}
      </text>

      {interceptVisible ? (
        <>
          <circle cx={px(0)} cy={py(c)} r={3} className="fill-[var(--diagram-accent)]" />
          <text
            x={px(0) - 5}
            y={py(c) + 3}
            textAnchor="end"
            className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold"
          >
            c
          </text>
        </>
      ) : null}

      {points.map((p, i) => (
        <Handle
          key={i}
          x={px(p.x)}
          y={py(p.y)}
          onDragTo={(to) => move(i, to)}
          onNudgeXY={(dx, dy) =>
            move(i, { x: px(p.x) + dx * 8.5, y: py(p.y) + dy * 8.6 })
          }
          name={`Point ${i + 1}`}
          valueText={`Point ${i + 1} at ${num(p.x)}, ${num(p.y)}`}
        />
      ))}
    </InteractiveFigure>
  );
}

// ─── Pythagoras ─────────────────────────────────────────────────────────────

const PYTH_START = { a: 6, b: 8 };
/**
 * The right angle sits one square IN from the corner of the grid, not on it.
 *
 * ⚠️ The first version put it at the origin, so both shorter sides lay exactly
 * along the axes and were completely invisible — the render showed a lone
 * hypotenuse floating over a grid, with no triangle at all. Set in a square,
 * all three sides are drawn lines and the lengths are still countable off the
 * scale beside them.
 */
const PYTH_ORIGIN = { x: 1, y: 1 };

export function Pythagoras() {
  const [legs, setLegs] = useState(PYTH_START);
  const reset = useCallback(() => setLegs(PYTH_START), []);

  const { a, b } = legs;
  const c = Math.hypot(a, b);

  const corner: Point = { x: px(PYTH_ORIGIN.x), y: py(PYTH_ORIGIN.y) };
  const up: Point = { x: px(PYTH_ORIGIN.x), y: py(PYTH_ORIGIN.y + a) };
  const across: Point = { x: px(PYTH_ORIGIN.x + b), y: py(PYTH_ORIGIN.y) };

  const clamp = (v: number) => Math.min(8.5, Math.max(1.5, snap(v)));
  const setA = (v: number) => setLegs((s) => ({ ...s, a: clamp(v) }));
  const setB = (v: number) => setLegs((s) => ({ ...s, b: clamp(v) }));

  const sumOfSquares = a * a + b * b;

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A right-angled triangle with two draggable side lengths, showing that the squares on the two shorter sides always add to the square on the hypotenuse"
      caption="a² + b² = c², in every right-angled triangle"
      onReset={reset}
      readout={
        <>
          {num(a)}² + {num(b)}² = {num(sumOfSquares)} = {num(c)}²
          <Holds ok={Math.abs(sumOfSquares - c * c) < 1e-9} />
        </>
      }
    >
      {/* No axis letters here: the sides name themselves, and a second "a" and
          "b" out at the ends of the axes only read as a duplicate. */}
      <Grid />

      <path
        d={`M ${corner.x} ${corner.y} L ${across.x} ${across.y} L ${up.x} ${up.y} Z`}
        className={figureLine}
        strokeWidth={2}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={rightAngleMark(corner, 0, 90, 8)}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={1.6}
        fill="none"
      />

      {/* The hypotenuse picked out, because "which one is c" is the question
          students actually get wrong — c is opposite the right angle, always,
          however the triangle is turned. */}
      <path
        d={`M ${across.x} ${across.y} L ${up.x} ${up.y}`}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />

      {/* Both side labels sit INSIDE the triangle. Outside, "a = 6" ran across
          the y-axis and "b = 8" across the row of tick numbers — the triangle
          starts one square in, so there is no room out there. Inside is also
          where a textbook puts them. */}
      <text
        x={corner.x + 5}
        y={(corner.y + up.y) / 2 + 3}
        className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold tabular-nums"
      >
        a = {num(a)}
      </text>
      <text
        x={(corner.x + across.x) / 2}
        y={corner.y - 5}
        textAnchor="middle"
        className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold tabular-nums"
      >
        b = {num(b)}
      </text>
      <text
        x={(across.x + up.x) / 2 + 8}
        y={(across.y + up.y) / 2 - 4}
        className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold tabular-nums"
      >
        c = {num(Math.round(c * 100) / 100)}
      </text>

      <Handle
        x={up.x}
        y={up.y}
        onDragTo={(p) => setA(toGraph(clampToBox(p, GRID)).y - PYTH_ORIGIN.y)}
        onNudge={(step) => setA(a + step * 0.5)}
        name="Side a"
        value={a}
        valueText={`Side a is ${num(a)}`}
      />
      <Handle
        x={across.x}
        y={across.y}
        onDragTo={(p) => setB(toGraph(clampToBox(p, GRID)).x - PYTH_ORIGIN.x)}
        onNudge={(step) => setB(b + step * 0.5)}
        name="Side b"
        value={b}
        valueText={`Side b is ${num(b)}`}
      />
    </InteractiveFigure>
  );
}
