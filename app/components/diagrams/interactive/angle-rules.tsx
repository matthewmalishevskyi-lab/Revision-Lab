"use client";

// The basic angle rules, with the rays and corners you can move.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THESE FIVE
//
// The circle theorems get dragged because they are hard. These get dragged for
// the opposite reason: they are the rules a student is asked to APPLY in every
// other question, and the commonest way to lose those marks is not knowing the
// rule, it is not recognising the shape it is hiding in.
//
// The exam draws the triangle a different way up. It puts the straight line on
// a slant. It makes the "Z" of alternate angles into an "N" by reflecting it.
// A student who has only ever seen the textbook orientation has learnt the
// picture rather than the rule, and dragging is the cheapest way to find that
// out — turn the shape upside down and the numbers still add to 180.
//
// The maths, as everywhere in here, is in geometry.ts and is checked by
// scripts/check-geometry.ts. Nothing in this file computes an angle.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useState } from "react";
import { wedge, Angle, Fig } from "../shared";
import {
  angleAt,
  angleLabelPlacement,
  bearing,
  bisectorPoint,
  clampToBox,
  consistentSum,
  degrees,
  doubleArea,
  HANDLE_BOX,
  interiorSweep,
  keepClear,
  norm360,
  reachInside,
  separateLabels,
  type Point,
} from "./geometry";
import { Handle, Holds, InteractiveFigure } from "./parts";

const VIEWBOX = "0 0 220 124";

/** Where a freely-dragged corner is allowed to go: clear of the canvas edges. */
const BOX = { left: 24, right: 196, top: 20, bottom: 100 };

function Seg({ from, to, dashed = false }: { from: Point; to: Point; dashed?: boolean }) {
  return (
    <Fig
      dashed={dashed}
      d={`M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)}`}
    />
  );
}

function Value({ at, children }: { at: Point; children: React.ReactNode }) {
  return (
    <text
      x={at.x.toFixed(1)}
      y={(at.y + 3).toFixed(1)}
      textAnchor="middle"
      className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold tabular-nums"
    >
      {children}
    </text>
  );
}

function Dot({ at }: { at: Point }) {
  return <circle cx={at.x} cy={at.y} r={2.6} className="fill-current opacity-60" />;
}

function useAngles<K extends string>(initial: Record<K, number>) {
  const [angles, setAngles] = useState<Record<K, number>>(initial);
  const reset = useCallback(() => setAngles(initial), [initial]);
  const set = useCallback(
    (key: K, value: number) => setAngles((prev) => ({ ...prev, [key]: norm360(value) })),
    [],
  );
  return { angles, set, reset };
}

/** A point out along a ray from a vertex. */
function alongRay(from: Point, degrees_: number, length: number): Point {
  const r = (degrees_ * Math.PI) / 180;
  return { x: from.x + length * Math.cos(r), y: from.y - length * Math.sin(r) };
}

/**
 * The same, but pulled back if the far end would put the handle's grab area
 * off the canvas — see `reachInside`. Drawing only; the drag maths uses the
 * direction from the vertex, never this distance.
 */
function grabOn(from: Point, degrees_: number, length: number): Point {
  const r = (degrees_ * Math.PI) / 180;
  const dir = { x: Math.cos(r), y: -Math.sin(r) };
  return alongRay(from, degrees_, reachInside(from, dir, length, HANDLE_BOX));
}

// ─── 1. Angles on a straight line add to 180° ───────────────────────────────

const LINE_VERTEX: Point = { x: 110, y: 78 };
const LINE_START = { ray: 52, tilt: 0 };
const RAY_LENGTH = 52;

export function AnglesOnALine() {
  const { angles, set, reset } = useAngles(LINE_START);
  const { ray, tilt } = angles;

  // The straight line itself tilts, which is the whole point: a student who
  // has only seen this rule drawn horizontally does not recognise it at a
  // slant, and that is where the marks go.
  const left = alongRay(LINE_VERTEX, tilt + 180, 86);
  const right = alongRay(LINE_VERTEX, tilt, 86);
  const tip = alongRay(LINE_VERTEX, ray, RAY_LENGTH);

  const a = angleAt(LINE_VERTEX, tip, left);
  const b = angleAt(LINE_VERTEX, tip, right);

  const sweepA = interiorSweep(LINE_VERTEX, tip, left);
  const sweepB = interiorSweep(LINE_VERTEX, right, tip);
  // One formatting pass for the readout AND the two labels in the figure, so
  // the number beside an angle is the same number the sum underneath uses.
  const sum = consistentSum(a + b, [a, b]);
  const grabTip = grabOn(LINE_VERTEX, ray, RAY_LENGTH);
  const grabTilt = grabOn(LINE_VERTEX, tilt, 86);

  const [labelA, labelB] = separateLabels(
    [
      bisectorPoint(LINE_VERTEX, sweepA.from, sweepA.to, 30),
      bisectorPoint(LINE_VERTEX, sweepB.from, sweepB.to, 22),
    ],
    [tip],
  );

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A straight line with a ray from a point on it, splitting the 180 degrees into two angles that always add to 180"
      caption="angles on a straight line add to 180°"
      onReset={reset}
      readout={
        <>
          {sum.parts[0]} + {sum.parts[1]} = {sum.total}
          <Holds ok={Math.abs(a + b - 180) < 0.05} />
        </>
      }
    >
      <Seg from={left} to={right} />
      <Seg from={LINE_VERTEX} to={tip} />

      <Angle d={wedge(LINE_VERTEX.x, LINE_VERTEX.y, 26, sweepA.from, sweepA.to)} />
      <Angle d={wedge(LINE_VERTEX.x, LINE_VERTEX.y, 17, sweepB.from, sweepB.to)} />
      <Dot at={LINE_VERTEX} />

      <Value at={labelA}>{sum.parts[0]}</Value>
      <Value at={labelB}>{sum.parts[1]}</Value>

      <Handle
        x={grabTip.x}
        y={grabTip.y}
        onDragTo={(p) => set("ray", keepClear(bearing(LINE_VERTEX, p), [tilt, tilt + 180], 12))}
        onNudge={(step) => set("ray", keepClear(ray + step, [tilt, tilt + 180], 12))}
        name="The ray"
        value={ray}
        valueText={`Ray at ${Math.round(a)} degrees from the line`}
      />
      <Handle
        x={grabTilt.x}
        y={grabTilt.y}
        onDragTo={(p) => set("tilt", keepClear(bearing(LINE_VERTEX, p), [ray, ray + 180], 12))}
        onNudge={(step) => set("tilt", keepClear(tilt + step, [ray, ray + 180], 12))}
        name="Tilt the whole line"
        value={tilt}
        valueText={`The line is tilted ${Math.round(tilt)} degrees`}
      />
    </InteractiveFigure>
  );
}

// ─── 2. Angles around a point add to 360° ───────────────────────────────────

const POINT_CENTRE: Point = { x: 110, y: 60 };
const AROUND_START = { a: 60, b: 165, c: 275 };

export function AnglesAroundAPoint() {
  const { angles, set, reset } = useAngles(AROUND_START);
  const rays = [angles.a, angles.b, angles.c];
  const keys = ["a", "b", "c"] as const;

  const tips = rays.map((r) => alongRay(POINT_CENTRE, r, 44));
  const grabs = rays.map((r) => grabOn(POINT_CENTRE, r, 44));

  // The three angles BETWEEN consecutive rays, going round. Taken as the gaps
  // in the sorted order rather than as `angleAt`, because these three fill the
  // whole turn and one of them is usually reflex — which `angleAt` cannot
  // report, since it only ever gives the non-reflex answer.
  const gaps = rays.map((r, i) => norm360(rays[(i + 1) % 3] - r));
  const total = gaps.reduce((n, g) => n + g, 0);
  const sum = consistentSum(total, gaps);

  const labels = separateLabels(
    rays.map((r, i) => bisectorPoint(POINT_CENTRE, r, r + gaps[i], 27)),
    tips,
  );

  const clear = (i: number) => (v: number) =>
    keepClear(v, rays.filter((_, j) => j !== i), 22);

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="Three rays from a single point, dividing the full turn into three angles that always add to 360 degrees"
      caption="angles around a point add to 360°"
      onReset={reset}
      readout={
        <>
          {sum.parts[0]} + {sum.parts[1]} + {sum.parts[2]} = {sum.total}
          <Holds ok={Math.abs(total - 360) < 0.05} />
        </>
      }
    >
      {tips.map((tip, i) => (
        <Seg key={i} from={POINT_CENTRE} to={tip} />
      ))}
      {rays.map((r, i) => (
        <Angle key={i} d={wedge(POINT_CENTRE.x, POINT_CENTRE.y, 15 + i * 3, r, r + gaps[i])} />
      ))}
      <Dot at={POINT_CENTRE} />
      {labels.map((at, i) => (
        <Value key={i} at={at}>
          {sum.parts[i]}
        </Value>
      ))}
      {grabs.map((grab, i) => (
        <Handle
          key={i}
          x={grab.x}
          y={grab.y}
          onDragTo={(p) => set(keys[i], clear(i)(bearing(POINT_CENTRE, p)))}
          onNudge={(step) => set(keys[i], clear(i)(rays[i] + step))}
          name={`Ray ${i + 1}`}
          value={rays[i]}
          valueText={`Ray ${i + 1} at ${Math.round(rays[i])} degrees`}
        />
      ))}
    </InteractiveFigure>
  );
}

// ─── 3. Vertically opposite angles are equal ────────────────────────────────

const CROSS_START = { one: 25, two: 110 };

export function VerticallyOpposite() {
  const { angles, set, reset } = useAngles(CROSS_START);
  const { one, two } = angles;

  // 56, not 78: at 78 a line standing upright ran twenty units off the top of
  // a 124-tall canvas and was silently clipped. 56 is the longest that fits at
  // every angle.
  const endsOne = [alongRay(POINT_CENTRE, one, 56), alongRay(POINT_CENTRE, one + 180, 56)];
  const endsTwo = [alongRay(POINT_CENTRE, two, 56), alongRay(POINT_CENTRE, two + 180, 56)];
  const grabOne = grabOn(POINT_CENTRE, one, 56);
  const grabTwo = grabOn(POINT_CENTRE, two, 56);

  // Four angles round the crossing; opposite pairs are the ones two apart.
  const order = [one, two, one + 180, two + 180];
  const gaps = order.map((r, i) => norm360(order[(i + 1) % 4] - r));

  const labels = separateLabels(
    order.map((r, i) => bisectorPoint(POINT_CENTRE, r, r + gaps[i], 26)),
    [...endsOne, ...endsTwo],
  );

  const equalPairs =
    Math.abs(gaps[0] - gaps[2]) < 0.05 && Math.abs(gaps[1] - gaps[3]) < 0.05;

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="Two straight lines crossing, with the two pairs of vertically opposite angles always equal"
      caption="vertically opposite angles are equal"
      onReset={reset}
      readout={
        <>
          {degrees(gaps[0])} = {degrees(gaps[2])}
          <span className="mx-1.5 opacity-40">·</span>
          {degrees(gaps[1])} = {degrees(gaps[3])}
          <Holds ok={equalPairs} />
        </>
      }
    >
      <Seg from={endsOne[0]} to={endsOne[1]} />
      <Seg from={endsTwo[0]} to={endsTwo[1]} />
      {order.map((r, i) => (
        <Angle
          key={i}
          // The opposite pair share an arc radius, which is how a textbook says
          // "these two are the same" without using a second colour — and it
          // still works for a colour-blind reader.
          d={wedge(POINT_CENTRE.x, POINT_CENTRE.y, i % 2 === 0 ? 15 : 21, r, r + gaps[i])}
        />
      ))}
      <Dot at={POINT_CENTRE} />
      {labels.map((at, i) => (
        <Value key={i} at={at}>
          {degrees(gaps[i])}
        </Value>
      ))}
      <Handle
        x={grabOne.x}
        y={grabOne.y}
        onDragTo={(p) => set("one", keepClear(bearing(POINT_CENTRE, p), [two, two + 180], 20))}
        onNudge={(step) => set("one", keepClear(one + step, [two, two + 180], 20))}
        name="First line"
        value={one}
        valueText={`First line at ${Math.round(one)} degrees`}
      />
      <Handle
        x={grabTwo.x}
        y={grabTwo.y}
        onDragTo={(p) => set("two", keepClear(bearing(POINT_CENTRE, p), [one, one + 180], 20))}
        onNudge={(step) => set("two", keepClear(two + step, [one, one + 180], 20))}
        name="Second line"
        value={two}
        valueText={`Second line at ${Math.round(two)} degrees`}
      />
    </InteractiveFigure>
  );
}

// ─── 4. The angles of a triangle add to 180° ────────────────────────────────

const TRIANGLE_START: Point[] = [
  { x: 40, y: 94 },
  { x: 186, y: 94 },
  { x: 122, y: 30 },
];

/** Shared state for a triangle whose corners move freely. */
function useTriangle(initial: Point[]) {
  const [points, setPoints] = useState(initial);
  const reset = useCallback(() => setPoints(initial), [initial]);

  const move = useCallback(
    (index: number, to: Point) => {
      setPoints((prev) => {
        const next = prev.map((p, i) => (i === index ? clampToBox(to, BOX) : p));
        // ⚠️ Refuse to flatten. Three corners in a line still "add to 180" in
        // the arithmetic, but the picture is a line segment with two angles of
        // nought and one of 180, and the diagram would be claiming to
        // demonstrate a rule with a shape that is not a triangle. 900 is about
        // the area of a very slim but still honest triangle on this canvas.
        return doubleArea(next[0], next[1], next[2]) < 900 ? prev : next;
      });
    },
    [],
  );

  return { points, move, reset };
}

export function AnglesInATriangle() {
  const { points, move, reset } = useTriangle(TRIANGLE_START);
  const [A, B, C] = points;

  const at = [angleAt(A, B, C), angleAt(B, C, A), angleAt(C, A, B)];
  const total = at[0] + at[1] + at[2];
  const sum = consistentSum(total, at);

  const sweeps = [interiorSweep(A, B, C), interiorSweep(B, C, A), interiorSweep(C, A, B)];
  const fits = [
    angleLabelPlacement(A, B, C, 16),
    angleLabelPlacement(B, C, A, 16),
    angleLabelPlacement(C, A, B, 16),
  ];
  const labels = separateLabels(
    points.map((p, i) => bisectorPoint(p, sweeps[i].from, sweeps[i].to, fits[i].label)),
    points,
  );

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A triangle whose three corners can be moved, with its three angles always adding to 180 degrees"
      caption="the angles of a triangle add to 180°"
      onReset={reset}
      readout={
        <>
          {sum.parts[0]} + {sum.parts[1]} + {sum.parts[2]} = {sum.total}
          <Holds ok={Math.abs(total - 180) < 0.05} />
        </>
      }
    >
      <Fig
        d={`M ${A.x.toFixed(1)} ${A.y.toFixed(1)} L ${B.x.toFixed(1)} ${B.y.toFixed(1)} L ${C.x.toFixed(1)} ${C.y.toFixed(1)} Z`}
      />
      {points.map((p, i) => (
        <Angle key={i} d={wedge(p.x, p.y, fits[i].arc, sweeps[i].from, sweeps[i].to)} />
      ))}
      {labels.map((l, i) => (
        <Value key={i} at={l}>
          {sum.parts[i]}
        </Value>
      ))}
      {points.map((p, i) => (
        <Handle
          key={i}
          x={p.x}
          y={p.y}
          onDragTo={(to) => move(i, to)}
          onNudgeXY={(dx, dy) => move(i, { x: p.x + dx, y: p.y + dy })}
          name={`Corner ${"ABC"[i]}`}
          valueText={`Corner ${"ABC"[i]}, angle ${degrees(at[i])}`}
          tag={"ABC"[i]}
          tagAt={bearing({ x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 }, p)}
        />
      ))}
    </InteractiveFigure>
  );
}

// ─── 5. The exterior angle equals the two opposite interior angles ──────────

const EXTERIOR_START: Point[] = [
  { x: 44, y: 92 },
  { x: 150, y: 92 },
  { x: 96, y: 34 },
];

export function ExteriorAngleTriangle() {
  const { points, move, reset } = useTriangle(EXTERIOR_START);
  const [A, B, C] = points;

  // Side AB extended past B — the exterior angle sits between that extension
  // and the side BC.
  const beyond = (() => {
    const d = bearing(A, B);
    const reach = Math.min(58, BOX.right - B.x + 12);
    return alongRay(B, d, Math.max(26, reach));
  })();

  const exterior = angleAt(B, beyond, C);
  const opposite = [angleAt(A, B, C), angleAt(C, A, B)];
  const sum = consistentSum(exterior, opposite);

  const sweepExt = interiorSweep(B, beyond, C);
  const sweeps = [interiorSweep(A, B, C), interiorSweep(C, A, B)];
  const fits = [angleLabelPlacement(A, B, C, 15), angleLabelPlacement(C, A, B, 15)];

  const [labelExt, labelA, labelC] = separateLabels(
    [
      bisectorPoint(B, sweepExt.from, sweepExt.to, 24),
      bisectorPoint(A, sweeps[0].from, sweeps[0].to, fits[0].label),
      bisectorPoint(C, sweeps[1].from, sweeps[1].to, fits[1].label),
    ],
    [...points, beyond],
  );

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A triangle with one side extended, showing the exterior angle equal to the sum of the two opposite interior angles"
      caption="the exterior angle = the two opposite interior angles"
      onReset={reset}
      readout={
        <>
          {sum.total} = {sum.parts[0]} + {sum.parts[1]}
          <Holds ok={Math.abs(exterior - opposite[0] - opposite[1]) < 0.05} />
        </>
      }
    >
      <Fig
        d={`M ${A.x.toFixed(1)} ${A.y.toFixed(1)} L ${B.x.toFixed(1)} ${B.y.toFixed(1)} L ${C.x.toFixed(1)} ${C.y.toFixed(1)} Z`}
      />
      {/* The extension, dashed, because it is a construction line rather than
          a side of the shape — the distinction the question depends on. */}
      <Seg from={B} to={beyond} dashed />

      <Angle d={wedge(B.x, B.y, 18, sweepExt.from, sweepExt.to)} />
      <Angle d={wedge(A.x, A.y, fits[0].arc, sweeps[0].from, sweeps[0].to)} />
      <Angle d={wedge(C.x, C.y, fits[1].arc, sweeps[1].from, sweeps[1].to)} />

      <Value at={labelExt}>{sum.total}</Value>
      <Value at={labelA}>{sum.parts[0]}</Value>
      <Value at={labelC}>{sum.parts[1]}</Value>

      {points.map((p, i) => (
        <Handle
          key={i}
          x={p.x}
          y={p.y}
          onDragTo={(to) => move(i, to)}
          onNudgeXY={(dx, dy) => move(i, { x: p.x + dx, y: p.y + dy })}
          name={`Corner ${"ABC"[i]}`}
          valueText={`Corner ${"ABC"[i]}`}
          tag={"ABC"[i]}
          tagAt={bearing({ x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 }, p)}
        />
      ))}
    </InteractiveFigure>
  );
}
