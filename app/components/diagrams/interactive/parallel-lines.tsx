"use client";

// Corresponding, alternate and co-interior angles — with the transversal you
// can swing and the whole pair of lines you can tilt.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THESE THREE ARE THE BEST CASE ON THE SITE FOR DRAGGING
//
// They are taught as letter shapes: F for corresponding, Z for alternate, C for
// co-interior. That is a good mnemonic and a bad definition, and the gap
// between the two is exactly where the marks go. An exam draws the Z backwards,
// as an N, and a student who learnt "look for a Z" does not see it. It slants
// the pair of parallel lines and the F falls over.
//
// So both things move here: the transversal swings, and the two parallel lines
// tilt together. The shape rotates and reflects under your finger, the letter
// stops being a letter — and the two numbers stay equal anyway. That is the
// difference between the mnemonic and the rule, demonstrated rather than
// asserted.
//
// The three share one construction, below, because they ARE one construction
// looked at three ways. Writing them separately would be three chances for the
// pictures to drift apart, when the whole point is that they are the same
// diagram.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useState } from "react";
import { wedge, Angle, Fig } from "../shared";
import {
  angleAt,
  bearing,
  bisectorPoint,
  consistentSum,
  degrees,
  HANDLE_BOX,
  interiorSweep,
  norm180,
  norm360,
  reachInside,
  separateLabels,
  type Point,
} from "./geometry";
import { Handle, Holds, InteractiveFigure } from "./parts";

const VIEWBOX = "0 0 220 124";
const O: Point = { x: 110, y: 62 };
/** Half the gap between the two parallel lines, measured across them. */
const HALF_GAP = 27;
const LINE_HALF = 88;

function unit(degrees_: number): Point {
  const r = (degrees_ * Math.PI) / 180;
  return { x: Math.cos(r), y: -Math.sin(r) };
}

function shift(from: Point, direction: Point, distance: number): Point {
  return { x: from.x + direction.x * distance, y: from.y + direction.y * distance };
}

function Seg({ from, to }: { from: Point; to: Point }) {
  return (
    <Fig d={`M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)}`} />
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

/**
 * Keep the transversal from lying down on top of the parallel lines.
 *
 * At a shallow angle the two crossings shoot off the canvas — `reach` above is
 * 27 ÷ sin(angle), which at 5° is over 300 units — and the "angle" being
 * demonstrated is a slither nobody can read. 28° keeps both crossings on
 * screen and every wedge legible.
 */
function clampCut(cut: number, dir: number): number {
  const delta = norm180(cut - dir);
  const sign = delta >= 0 ? 1 : -1;
  const size = Math.abs(delta);
  if (size < 28) return norm360(dir + sign * 28);
  if (size > 152) return norm360(dir + sign * 152);
  return norm360(cut);
}

type Which = "corresponding" | "alternate" | "co-interior";

function ParallelPair({ which }: { which: Which }) {
  const [state, setState] = useState({ dir: 0, cut: 62 });
  const reset = useCallback(() => setState({ dir: 0, cut: 62 }), []);
  const { dir, cut } = state;

  const along = unit(dir);
  const across = unit(dir + 90);
  const beam = unit(cut);

  const phi = (norm180(cut - dir) * Math.PI) / 180;
  const reach = HALF_GAP / Math.abs(Math.sin(phi));
  const forwardHitsSecond = Math.sin(phi) > 0;

  const X1 = shift(O, beam, forwardHitsSecond ? -reach : reach);
  const X2 = shift(O, beam, forwardHitsSecond ? reach : -reach);
  const toSecond: Point = forwardHitsSecond ? beam : { x: -beam.x, y: -beam.y };
  const back: Point = { x: -toSecond.x, y: -toSecond.y };

  const line1 = [shift(X1, along, -LINE_HALF), shift(X1, along, LINE_HALF)] as const;
  const line2 = [shift(X2, along, -LINE_HALF), shift(X2, along, LINE_HALF)] as const;
  const beamEnds = [shift(X1, back, 32), shift(X2, toSecond, 32)] as const;

  // Where the two grab dots are DRAWN. The crossings slide a long way along
  // the transversal at a shallow cut, and a handle at the end of a line was
  // ending up with a third of its touch area clipped off the canvas.
  const grabSwing = shift(X2, toSecond, reachInside(X2, toSecond, 32, HANDLE_BOX));
  const grabTilt = shift(X2, along, reachInside(X2, along, LINE_HALF, HANDLE_BOX));

  // ── WHICH TWO ANGLES, AND WHY ────────────────────────────────────────────
  // At X1 the reference angle is always between "along the line" and "towards
  // the other line". The three rules differ only in which angle at X2 they put
  // beside it:
  //   corresponding  the same pair again — matching position at each crossing
  //   alternate      both directions reversed — the Z, or the N
  //   co-interior    towards the FIRST line, so both sit in the space between
  const armsAt1: [Point, Point] = [shift(X1, along, 30), shift(X1, toSecond, 30)];
  const armsAt2: [Point, Point] =
    which === "corresponding"
      ? [shift(X2, along, 30), shift(X2, toSecond, 30)]
      : which === "alternate"
        ? [shift(X2, { x: -along.x, y: -along.y }, 30), shift(X2, back, 30)]
        : [shift(X2, along, 30), shift(X2, back, 30)];

  const first = angleAt(X1, armsAt1[0], armsAt1[1]);
  const second = angleAt(X2, armsAt2[0], armsAt2[1]);

  const sweep1 = interiorSweep(X1, armsAt1[0], armsAt1[1]);
  const sweep2 = interiorSweep(X2, armsAt2[0], armsAt2[1]);
  const [label1, label2] = separateLabels(
    [
      bisectorPoint(X1, sweep1.from, sweep1.to, 26),
      bisectorPoint(X2, sweep2.from, sweep2.to, 26),
    ],
    [X1, X2, beamEnds[0], beamEnds[1]],
  );

  const equal = which !== "co-interior";
  const pairSum = consistentSum(first + second, [first, second]);
  const holds = equal
    ? Math.abs(first - second) < 0.05
    : Math.abs(first + second - 180) < 0.05;

  const captions: Record<Which, string> = {
    corresponding: "corresponding angles are equal — the F shape",
    alternate: "alternate angles are equal — the Z shape",
    "co-interior": "co-interior angles add to 180° — the C shape",
  };
  const labels: Record<Which, string> = {
    corresponding:
      "Two parallel lines cut by a transversal, with the two corresponding angles marked and always equal",
    alternate:
      "Two parallel lines cut by a transversal, with the two alternate angles marked and always equal",
    "co-interior":
      "Two parallel lines cut by a transversal, with the two co-interior angles marked, always adding to 180 degrees",
  };

  const tilt = (v: number) => setState((s) => ({ dir: norm360(v), cut: clampCut(s.cut, norm360(v)) }));
  const swing = (v: number) => setState((s) => ({ ...s, cut: clampCut(v, s.dir) }));

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label={labels[which]}
      caption={captions[which]}
      onReset={reset}
      readout={
        equal ? (
          <>
            {degrees(first)} = {degrees(second)}
            <Holds ok={holds} />
          </>
        ) : (
          <>
            {pairSum.parts[0]} + {pairSum.parts[1]} = {pairSum.total}
            <Holds ok={holds} />
          </>
        )
      }
    >
      <Seg from={line1[0]} to={line1[1]} />
      <Seg from={line2[0]} to={line2[1]} />
      <Seg from={beamEnds[0]} to={beamEnds[1]} />

      {/* The arrowheads that say "these two are parallel" — the marking a
          question uses to tell you the rule applies at all, so the diagram
          should carry it rather than leaving it to the caption. */}
      {[line1, line2].map((l, i) => {
        const mid = { x: (l[0].x + l[1].x) / 2, y: (l[0].y + l[1].y) / 2 };
        const tipA = shift(mid, along, 5);
        const wingA = shift(shift(tipA, along, -6), across, 4);
        const wingB = shift(shift(tipA, along, -6), across, -4);
        return (
          <path
            key={i}
            d={`M ${wingA.x.toFixed(1)} ${wingA.y.toFixed(1)} L ${tipA.x.toFixed(1)} ${tipA.y.toFixed(1)} L ${wingB.x.toFixed(1)} ${wingB.y.toFixed(1)}`}
            className="stroke-current opacity-60"
            strokeWidth={1.6}
            fill="none"
            strokeLinecap="round"
          />
        );
      })}

      <Angle d={wedge(X1.x, X1.y, 17, sweep1.from, sweep1.to)} />
      <Angle d={wedge(X2.x, X2.y, 17, sweep2.from, sweep2.to)} />

      <Value at={label1}>{equal ? degrees(first) : pairSum.parts[0]}</Value>
      <Value at={label2}>{equal ? degrees(second) : pairSum.parts[1]}</Value>

      <Handle
        x={grabSwing.x}
        y={grabSwing.y}
        onDragTo={(p) => swing(bearing(O, p))}
        onNudge={(step) => swing(cut + step)}
        name="Swing the transversal"
        value={cut}
        valueText={`The transversal cuts at ${Math.round(first)} degrees`}
      />
      <Handle
        x={grabTilt.x}
        y={grabTilt.y}
        onDragTo={(p) => tilt(bearing(O, p))}
        onNudge={(step) => tilt(dir + step)}
        name="Tilt both parallel lines"
        value={dir}
        valueText={`The parallel lines are tilted ${Math.round(dir)} degrees`}
      />
    </InteractiveFigure>
  );
}

export function ParallelCorresponding() {
  return <ParallelPair which="corresponding" />;
}

export function ParallelAlternate() {
  return <ParallelPair which="alternate" />;
}

export function ParallelCoInterior() {
  return <ParallelPair which="co-interior" />;
}
