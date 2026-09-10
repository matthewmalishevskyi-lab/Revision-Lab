"use client";

// The six circle theorems, with the points you can move.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THESE SIX AND NOT A PICTURE
//
// "The angle at the centre is twice the angle at the circumference" is a
// sentence you can read twenty times without believing. The static diagram
// beside it shows ONE arrangement, and the honest reaction to it is: fine, but
// is that a coincidence of how it happens to be drawn? A student cannot tell
// the difference between a theorem and a lucky picture, and the exam question
// is always drawn differently from the textbook.
//
// Dragging answers that in about four seconds. The number at the centre stays
// exactly twice the number at the edge while both of them change, and you can
// try to break it. That is what "always" means, and it cannot be printed.
//
// ─────────────────────────────────────────────────────────────────────────────
// EVERY NUMBER ON SCREEN COMES FROM geometry.ts
//
// Nothing here computes an angle. The components position handles, choose
// colours and lay out labels; the maths is in one tested module next door, for
// the reason set out at the top of it — a draggable diagram is not one picture
// but every picture, and the wrong ones are exactly the ones nobody looks at.
//
// The specific trap, met three times while building this: a configuration is
// easy to get right for the arrangement you first draw and wrong once a point
// crosses an arc. The angle at the centre goes reflex. The tangent-chord angle
// swaps to the other side of the chord. The interior angle of the quadrilateral
// turns into its own reflex outside. All three are handled in geometry.ts and
// checked by scripts/check-geometry.ts over random configurations.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useState } from "react";
import { arc, line, wedge, Angle, Fig } from "../shared";
import {
  angleAt,
  angleLabelPlacement,
  angleOf,
  bearing,
  bisectorPoint,
  CIRCLE,
  distance,
  CIRCLE_VIEWBOX,
  clampBetween,
  degrees,
  inscribedAngle,
  interiorSweep,
  keepClear,
  norm360,
  onArcCCW,
  onCircle,
  separateLabels,
  rightAngleMark,
  sideOfLine,
  type Point,
} from "./geometry";
import { Handle, Holds, InteractiveFigure } from "./parts";

// ─── Shared scaffolding ─────────────────────────────────────────────────────

/** The circle itself, plus the centre dot when a theorem is about the centre. */
function Ring({ centre = false }: { centre?: boolean }) {
  return (
    <>
      <circle
        cx={CIRCLE.cx}
        cy={CIRCLE.cy}
        r={CIRCLE.r}
        className={line}
        strokeWidth={2}
        fill="none"
      />
      {centre ? (
        <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={2.6} className="fill-current opacity-60" />
      ) : null}
    </>
  );
}

const CENTRE: Point = { x: CIRCLE.cx, y: CIRCLE.cy };

/** A straight line between two points. */
function Seg({ from, to, dashed = false }: { from: Point; to: Point; dashed?: boolean }) {
  return (
    <Fig
      dashed={dashed}
      d={`M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)}`}
    />
  );
}

/**
 * The measured size of an angle, printed on the angle itself.
 *
 * The whole reason to make these draggable is that the number changes, so the
 * number belongs where the angle is rather than only in a caption — you should
 * be able to watch one angle grow while the other shrinks without looking away
 * from the picture.
 */
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

/**
 * State for a set of points that live on the circle.
 *
 * Each point is just an angle, because "on the circle" is one degree of
 * freedom — which is also why every handle can be a `role="slider"` and driven
 * by the arrow keys. Dragging converts the pointer's position to the angle it
 * is nearest to on the circumference, so the point follows your finger round
 * the rim rather than needing to be dragged along it exactly.
 */
function useCirclePoints<K extends string>(initial: Record<K, number>) {
  const [angles, setAngles] = useState<Record<K, number>>(initial);
  const reset = useCallback(() => setAngles(initial), [initial]);
  const set = useCallback(
    (key: K, value: number) => setAngles((prev) => ({ ...prev, [key]: norm360(value) })),
    [],
  );
  return { angles, set, reset };
}

/**
 * Everything a circle-bound handle needs: where it is, how to drag it, how to
 * nudge it, and what to announce. Passing the point through here rather than
 * repeating `x={A.x} y={A.y}` at every call site keeps the position and the
 * angle it came from impossible to get out of step.
 */
function bind<K extends string>(
  key: K,
  at: Point,
  angles: Record<K, number>,
  set: (key: K, value: number) => void,
  constrain: (value: number) => number,
) {
  return {
    x: at.x,
    y: at.y,
    onDragTo: (p: Point) => set(key, constrain(angleOf(p))),
    onNudge: (step: number) => set(key, constrain(angles[key] + step)),
    value: angles[key],
  };
}

// ─── 1. The angle at the centre is twice the angle at the circumference ─────

const CENTRE_START = { a: 200, b: 340, p: 90 };

export function CircleAngleAtCentre() {
  const { angles, set, reset } = useCirclePoints(CENTRE_START);
  const { a, b, p } = angles;

  const A = onCircle(a);
  const B = onCircle(b);
  const P = onCircle(p);

  // The arc AB that P does NOT stand on is the one the centre angle opens onto,
  // and half of it is the angle at P. When P is on the minor arc, that centre
  // angle is REFLEX — the case a fixed picture never shows and the one students
  // lose marks on, so it is allowed to happen here rather than being prevented.
  const { atCentre, atEdge, sweep } = inscribedAngle(a, b, p);
  const atP = interiorSweep(P, A, B);
  const fitP = angleLabelPlacement(P, A, B, 17);
  const [labelCentre, labelEdge] = separateLabels(
    [
      bisectorPoint(CENTRE, sweep.from, sweep.to, 26),
      bisectorPoint(P, atP.from, atP.to, fitP.label),
    ],
    [A, B, P],
  );

  const clear = (others: number[]) => (v: number) => keepClear(v, others, 18);

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="A circle where the angle at the centre is twice the angle at the circumference standing on the same arc"
      caption="angle at the centre = twice the angle at the edge"
      onReset={reset}
      readout={
        <>
          {degrees(atCentre)} at the centre = 2 × {degrees(atEdge)} at the edge
          <Holds ok={Math.abs(atCentre - 2 * atEdge) < 0.05} />
        </>
      }
    >
      <Ring centre />

      <Seg from={A} to={CENTRE} />
      <Seg from={B} to={CENTRE} />
      <Seg from={A} to={P} />
      <Seg from={B} to={P} />

      <Angle d={wedge(CIRCLE.cx, CIRCLE.cy, 16, sweep.from, sweep.to)} />
      <Angle d={wedge(P.x, P.y, fitP.arc, atP.from, atP.to)} />

      {/* The arc the two angles both stand on, picked out so it is obvious they
          are talking about the same piece of the circumference — which is the
          part of the theorem a picture usually leaves you to infer. */}
      <path
        d={arc(CIRCLE.cx, CIRCLE.cy, CIRCLE.r, sweep.from, sweep.to)}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />

      <Value at={labelCentre}>{degrees(atCentre)}</Value>
      <Value at={labelEdge}>{degrees(atEdge)}</Value>

      <Handle {...bind("a", A, angles, set, clear([b, p]))} name="Point A" tag="A" tagAt={a} valueText={`A at ${Math.round(a)} degrees`} />
      <Handle {...bind("b", B, angles, set, clear([a, p]))} name="Point B" tag="B" tagAt={b} valueText={`B at ${Math.round(b)} degrees`} />
      <Handle {...bind("p", P, angles, set, clear([a, b]))} name="Point P on the circumference" tag="P" tagAt={p} valueText={`P at ${Math.round(p)} degrees, angle ${degrees(atEdge)}`} />
    </InteractiveFigure>
  );
}

// ─── 2. The angle in a semicircle is 90° ────────────────────────────────────

// 40°, where the other theorems use 18: this triangle has a RIGHT ANGLE to
// draw at P, and its square marker needs room to be square. At 18° P sat 14
// units from the end of the diameter, the marker came out as a squashed chevron
// and the triangle as a splinter — found by dragging P against the end and
// looking at what came out, twice, because 32° was still not enough.
//
// P still travels 100° of arc on each side, which is plenty to make the point
// that the angle does not care where it is.
const SEMI_START = { d: 180, p: 65 };

export function CircleSemicircle() {
  const { angles, set, reset } = useCirclePoints(SEMI_START);
  const { d, p } = angles;

  const A = onCircle(d);
  const B = onCircle(d + 180);
  const P = onCircle(p);

  const atP = angleAt(P, A, B);
  const sweep = interiorSweep(P, A, B);
  const fit = angleLabelPlacement(P, A, B, 14);
  // The square that means 90° has to stay square and stay inside the corner,
  // so it shrinks with the shorter of the two sides meeting there.
  const markSize = Math.min(9, 0.3 * Math.min(distance(P, A), distance(P, B)));
  const [labelP] = separateLabels(
    [bisectorPoint(P, sweep.from, sweep.to, fit.label + 4)],
    [A, B, P],
  );

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="A triangle drawn on a diameter of a circle, with the angle at the circumference always a right angle"
      caption="the angle in a semicircle is 90°"
      onReset={reset}
      readout={
        <>
          angle at P = {degrees(atP)} — wherever P goes
          <Holds ok={Math.abs(atP - 90) < 0.05} />
        </>
      }
    >
      <Ring centre />

      {/* The diameter, and the triangle standing on it. */}
      <Seg from={A} to={B} />
      <Seg from={A} to={P} />
      <Seg from={B} to={P} />

      <Angle d={wedge(P.x, P.y, fit.arc, sweep.from, sweep.to)} />
      <path
        d={rightAngleMark(P, bearing(P, A), bearing(P, B), markSize)}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={1.6}
        fill="none"
      />
      <Value at={labelP}>{degrees(atP)}</Value>

      {/* Dragging either end spins the whole diameter, because the two ends are
          one object: a diameter whose ends move independently is just a chord,
          and the theorem stops being true. */}
      <Handle
        x={A.x}
        y={A.y}
        onDragTo={(pt) => set("d", keepClear(angleOf(pt), [p, p + 180], 40))}
        onNudge={(step) => set("d", keepClear(d + step, [p, p + 180], 40))}
        name="One end of the diameter"
        value={d}
        valueText={`Diameter at ${Math.round(d)} degrees`}
        tag="A"
        tagAt={d}
      />
      <Handle
        x={B.x}
        y={B.y}
        onDragTo={(pt) => set("d", keepClear(angleOf(pt) + 180, [p, p + 180], 40))}
        onNudge={(step) => set("d", keepClear(d + step, [p, p + 180], 40))}
        name="The other end of the diameter"
        value={norm360(d + 180)}
        valueText={`Diameter at ${Math.round(norm360(d + 180))} degrees`}
        tag="B"
        tagAt={d + 180}
      />
      <Handle
        x={P.x}
        y={P.y}
        onDragTo={(pt) => set("p", keepClear(angleOf(pt), [d, d + 180], 40))}
        onNudge={(step) => set("p", keepClear(p + step, [d, d + 180], 40))}
        name="Point P on the circumference"
        value={p}
        valueText={`P at ${Math.round(p)} degrees, angle ${degrees(atP)}`}
        tag="P"
        tagAt={p}
      />
    </InteractiveFigure>
  );
}

// ─── 3. Angles in the same segment are equal ────────────────────────────────

const SEGMENT_START = { a: 200, b: 340, p: 60, q: 120 };

export function CircleSameSegment() {
  const { angles, set, reset } = useCirclePoints(SEGMENT_START);
  const { a, b, p, q } = angles;

  const A = onCircle(a);
  const B = onCircle(b);
  const P = onCircle(p);
  const Q = onCircle(q);

  const atP = angleAt(P, A, B);
  const atQ = angleAt(Q, A, B);
  const sweepP = interiorSweep(P, A, B);
  const sweepQ = interiorSweep(Q, A, B);
  const fitP = angleLabelPlacement(P, A, B, 15);
  const fitQ = angleLabelPlacement(Q, A, B, 15);
  const [labelP, labelQ] = separateLabels(
    [
      bisectorPoint(P, sweepP.from, sweepP.to, fitP.label),
      bisectorPoint(Q, sweepQ.from, sweepQ.to, fitQ.label),
    ],
    [A, B, P, Q],
  );

  // Which side of the chord each point stands on. Letting P and Q end up on
  // OPPOSITE arcs is deliberate rather than prevented: the angles then add to
  // 180 instead of being equal, which is the cyclic-quadrilateral theorem
  // showing up on its own. Blocking the drag would hide the connection and
  // leave a student thinking the rule is about any two angles on a chord.
  const together = onArcCCW(a, b, p) === onArcCCW(a, b, q);

  const clear = (others: number[]) => (v: number) => keepClear(v, others, 18);

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="Two angles standing on the same chord from different points on the circumference"
      caption={
        together
          ? "angles in the same segment are equal"
          : "on opposite arcs, the two angles add to 180° instead"
      }
      onReset={reset}
      readout={
        together ? (
          <>
            both {degrees(atP)} — same segment
            <Holds ok={Math.abs(atP - atQ) < 0.05} />
          </>
        ) : (
          <>
            {degrees(atP)} + {degrees(atQ)} = {degrees(atP + atQ)}
            <Holds ok={Math.abs(atP + atQ - 180) < 0.05} />
          </>
        )
      }
    >
      <Ring />

      <Seg from={A} to={B} />
      <Seg from={A} to={P} />
      <Seg from={B} to={P} />
      <Seg from={A} to={Q} />
      <Seg from={B} to={Q} />

      <Angle d={wedge(P.x, P.y, fitP.arc, sweepP.from, sweepP.to)} />
      <Angle d={wedge(Q.x, Q.y, fitQ.arc, sweepQ.from, sweepQ.to)} />

      <Value at={labelP}>{degrees(atP)}</Value>
      <Value at={labelQ}>{degrees(atQ)}</Value>

      <Handle {...bind("a", A, angles, set, clear([b, p, q]))} name="Chord end A" tag="A" tagAt={a} valueText={`A at ${Math.round(a)} degrees`} />
      <Handle {...bind("b", B, angles, set, clear([a, p, q]))} name="Chord end B" tag="B" tagAt={b} valueText={`B at ${Math.round(b)} degrees`} />
      <Handle {...bind("p", P, angles, set, clear([a, b, q]))} name="Point P" tag="P" tagAt={p} valueText={`P at ${Math.round(p)} degrees, angle ${degrees(atP)}`} />
      <Handle {...bind("q", Q, angles, set, clear([a, b, p]))} name="Point Q" tag="Q" tagAt={q} valueText={`Q at ${Math.round(q)} degrees, angle ${degrees(atQ)}`} />
    </InteractiveFigure>
  );
}

// ─── 4. Opposite angles of a cyclic quadrilateral add to 180° ───────────────

const QUAD_START = { a: 60, b: 150, c: 220, d: 320 };

export function CircleCyclicQuadrilateral() {
  const { angles, set, reset } = useCirclePoints(QUAD_START);
  const { a, b, c, d } = angles;

  const A = onCircle(a);
  const B = onCircle(b);
  const C = onCircle(c);
  const D = onCircle(d);

  const atA = interiorSweep(A, D, B);
  const atB = interiorSweep(B, A, C);
  const atC = interiorSweep(C, B, D);
  const atD = interiorSweep(D, C, A);
  const fitA = angleLabelPlacement(A, D, B, 14);
  const fitB = angleLabelPlacement(B, A, C, 14);
  const fitC = angleLabelPlacement(C, B, D, 14);
  const fitD = angleLabelPlacement(D, C, A, 14);
  const [labelA, labelB, labelC, labelD] = separateLabels(
    [
      bisectorPoint(A, atA.from, atA.to, fitA.label),
      bisectorPoint(B, atB.from, atB.to, fitB.label),
      bisectorPoint(C, atC.from, atC.to, fitC.label),
      bisectorPoint(D, atD.from, atD.to, fitD.label),
    ],
    [A, B, C, D],
  );

  // Each corner is penned in between its two neighbours. Dragged past one, the
  // quadrilateral turns into a self-intersecting bow tie whose "opposite
  // angles" genuinely do not add to 180 — and the diagram would sit there
  // stating a false thing with total confidence. The theorem is about a
  // quadrilateral, so the figure has to stay one.
  const between = (after: number, before: number) => (v: number) => clampBetween(v, after, before, 40);

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="A quadrilateral with all four corners on a circle, with each pair of opposite angles adding to 180 degrees"
      caption="opposite angles of a cyclic quadrilateral add to 180°"
      onReset={reset}
      readout={
        <>
          A + C = {degrees(atA.size)} + {degrees(atC.size)} = {degrees(atA.size + atC.size)}
          <Holds ok={Math.abs(atA.size + atC.size - 180) < 0.05} />
          <span className="mx-1.5 opacity-40">·</span>
          B + D = {degrees(atB.size + atD.size)}
          <Holds ok={Math.abs(atB.size + atD.size - 180) < 0.05} />
        </>
      }
    >
      <Ring />

      <Seg from={A} to={B} />
      <Seg from={B} to={C} />
      <Seg from={C} to={D} />
      <Seg from={D} to={A} />

      <Angle d={wedge(A.x, A.y, fitA.arc, atA.from, atA.to)} />
      <Angle d={wedge(C.x, C.y, fitC.arc, atC.from, atC.to)} />
      {/* The second pair drawn as an outline only, so the marked pair reads as
          the one the caption is about while the other is still visibly there. */}
      <path d={arc(B.x, B.y, fitB.arc, atB.from, atB.to)} className="stroke-[var(--diagram-accent)] opacity-50" strokeWidth={1.4} fill="none" />
      <path d={arc(D.x, D.y, fitD.arc, atD.from, atD.to)} className="stroke-[var(--diagram-accent)] opacity-50" strokeWidth={1.4} fill="none" />

      <Value at={labelA}>{degrees(atA.size)}</Value>
      <Value at={labelC}>{degrees(atC.size)}</Value>
      <Value at={labelB}>{degrees(atB.size)}</Value>
      <Value at={labelD}>{degrees(atD.size)}</Value>

      <Handle {...bind("a", A, angles, set, between(d, b))} name="Corner A" tag="A" tagAt={a} valueText={`A at ${Math.round(a)} degrees, angle ${degrees(atA.size)}`} />
      <Handle {...bind("b", B, angles, set, between(a, c))} name="Corner B" tag="B" tagAt={b} valueText={`B at ${Math.round(b)} degrees, angle ${degrees(atB.size)}`} />
      <Handle {...bind("c", C, angles, set, between(b, d))} name="Corner C" tag="C" tagAt={c} valueText={`C at ${Math.round(c)} degrees, angle ${degrees(atC.size)}`} />
      <Handle {...bind("d", D, angles, set, between(c, a))} name="Corner D" tag="D" tagAt={d} valueText={`D at ${Math.round(d)} degrees, angle ${degrees(atD.size)}`} />
    </InteractiveFigure>
  );
}

// ─── 5. A tangent meets a radius at 90° ─────────────────────────────────────

const TANGENT_START = { t: 20 };

// ⚠️ HOW LONG A TANGENT CAN BE WITHOUT RUNNING OFF THE CANVAS.
//
// The point of contact is 44 from the centre and the tangent is perpendicular
// to that radius, so the far end of a half-length h sits √(44² + h²) from the
// centre. The canvas gives 64 above and below. At h = 46 that came to 63.7 —
// inside by three tenths of a unit, which is not a margin, it is a coincidence.
// 40 leaves four and a half units at the worst angle. Checked in check-geometry.
const TANGENT_HALF = 40;

export function CircleTangentRadius() {
  const { angles, set, reset } = useCirclePoints(TANGENT_START);
  const { t } = angles;

  const T = onCircle(t);
  // A tangent is perpendicular to the radius at the point of contact, so its
  // direction is simply the radius turned a quarter turn. Drawing it from the
  // definition rather than positioning a line by hand is what makes it stay a
  // tangent while T is dragged.
  const along = t + 90;
  const rad = (along * Math.PI) / 180;
  const end1: Point = { x: T.x + TANGENT_HALF * Math.cos(rad), y: T.y - TANGENT_HALF * Math.sin(rad) };
  const end2: Point = { x: T.x - TANGENT_HALF * Math.cos(rad), y: T.y + TANGENT_HALF * Math.sin(rad) };

  const measured = angleAt(T, CENTRE, end1);
  const markSweep = interiorSweep(T, CENTRE, end1);
  const [labelT] = separateLabels(
    [bisectorPoint(T, markSweep.from, markSweep.to, 24)],
    [T, end1, end2],
  );

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="A tangent touching a circle, with the radius drawn to the point of contact meeting it at a right angle"
      caption="a tangent meets the radius at 90°"
      onReset={reset}
      readout={
        <>
          radius to tangent = {degrees(measured)} — at every point of contact
          <Holds ok={Math.abs(measured - 90) < 0.05} />
        </>
      }
    >
      <Ring centre />

      <Seg from={CENTRE} to={T} />
      <Seg from={end1} to={end2} />

      <path
        d={rightAngleMark(T, bearing(T, CENTRE), bearing(T, end1), 9)}
        className="stroke-[var(--diagram-accent)]"
        strokeWidth={1.6}
        fill="none"
      />

      <Value at={labelT}>{degrees(measured)}</Value>

      <Handle
        x={T.x}
        y={T.y}
        onDragTo={(p) => set("t", angleOf(p))}
        onNudge={(step) => set("t", t + step)}
        name="Point of contact"
        value={t}
        valueText={`Point of contact at ${Math.round(t)} degrees`}
        tag="T"
        tagAt={t}
      />
    </InteractiveFigure>
  );
}

// ─── 6. The alternate segment theorem ───────────────────────────────────────

const ALTERNATE_START = { t: 270, a: 15, b: 150 };
const ALT_TANGENT_HALF = 38;

export function CircleAlternateSegment() {
  const { angles, set, reset } = useCirclePoints(ALTERNATE_START);
  const { t, a, b } = angles;

  const T = onCircle(t);
  const A = onCircle(a);
  const B = onCircle(b);

  const along = t + 90;
  const rad = (along * Math.PI) / 180;
  const dx = ALT_TANGENT_HALF * Math.cos(rad);
  const dy = -ALT_TANGENT_HALF * Math.sin(rad);
  const end1: Point = { x: T.x + dx, y: T.y + dy };
  const end2: Point = { x: T.x - dx, y: T.y - dy };

  // ── WHICH of the two tangent-chord angles ───────────────────────────────
  // The chord TA makes two angles with the tangent, and they add to 180. The
  // theorem is about the one in the segment on the OTHER side of the chord
  // from B — "alternate" is doing real work in the name. So: find which side
  // of the line TA the point B is on, and take the tangent ray pointing the
  // other way. Picking whichever happens to match B's angle would make the
  // diagram prove itself, which is worth nothing.
  const sideB = sideOfLine(T, A, B);
  const towards = sideOfLine(T, A, end1) !== sideB ? end1 : end2;

  const tangentChord = angleAt(T, towards, A);
  const inAlternate = angleAt(B, T, A);

  const sweepT = interiorSweep(T, towards, A);
  const sweepB = interiorSweep(B, T, A);
  const fitT = angleLabelPlacement(T, towards, A, 18);
  const fitB = angleLabelPlacement(B, T, A, 16);

  // ⚠️ Both labels point into the gap between T and B, and with a short chord
  // they land on top of each other — found by rendering it and reading "127.5"
  // printed through "127.5". Each is correctly placed for its own angle; they
  // are just both correct in the same place, so they get pushed apart.
  const [labelT, labelB] = separateLabels(
    [
      bisectorPoint(T, sweepT.from, sweepT.to, fitT.label),
      bisectorPoint(B, sweepB.from, sweepB.to, fitB.label),
    ],
    [T, A, B],
  );

  // 14° let A and B crowd into a sliver with their letters overlapping.
  const clear = (others: number[]) => (v: number) => keepClear(v, others, 38);

  return (
    <InteractiveFigure
      viewBox={CIRCLE_VIEWBOX}
      label="The angle between a tangent and a chord, equal to the angle in the alternate segment"
      caption="tangent–chord angle = the angle in the alternate segment"
      onReset={reset}
      readout={
        <>
          tangent–chord {degrees(tangentChord)} = {degrees(inAlternate)} in the alternate segment
          <Holds ok={Math.abs(tangentChord - inAlternate) < 0.05} />
        </>
      }
    >
      <Ring />

      <Seg from={end1} to={end2} />
      <Seg from={T} to={A} />
      <Seg from={T} to={B} />
      <Seg from={A} to={B} />

      <Angle d={wedge(T.x, T.y, fitT.arc, sweepT.from, sweepT.to)} />
      <Angle d={wedge(B.x, B.y, fitB.arc, sweepB.from, sweepB.to)} />

      <Value at={labelT}>{degrees(tangentChord)}</Value>
      <Value at={labelB}>{degrees(inAlternate)}</Value>

      <Handle {...bind("t", T, angles, set, clear([a, b]))} name="Point of contact T" tag="T" tagAt={t} valueText={`T at ${Math.round(t)} degrees`} />
      <Handle {...bind("a", A, angles, set, clear([t, b]))} name="Chord end A" tag="A" tagAt={a} valueText={`A at ${Math.round(a)} degrees`} />
      <Handle {...bind("b", B, angles, set, clear([t, a]))} name="Point B in the alternate segment" tag="B" tagAt={b} valueText={`B at ${Math.round(b)} degrees, angle ${degrees(inAlternate)}`} />
    </InteractiveFigure>
  );
}
