"use client";

// Refraction, with the incoming ray you can swing.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS ONE ESPECIALLY
//
// The static version of this diagram was WRONG when it first shipped — it bent
// the ray away from the normal on the way into the glass, which is what happens
// on the way out — and it took rendering it and looking at it to notice. It is
// the single most-often-drawn-backwards diagram in GCSE physics, and a student
// who has memorised one picture of it has memorised a coin flip.
//
// Dragging fixes that in a way a corrected picture cannot. "Towards the normal
// going in, away from it coming out" stops being two sentences to remember and
// becomes something you watch happen while the angle changes, with both numbers
// on screen and Snell's law written underneath in the numbers you can see.
//
// The angles are real. θ₂ comes from n₁ sin θ₁ = n₂ sin θ₂ in geometry.ts, with
// n = 1.5 for glass, so the picture is to scale rather than suggestive — at 52°
// in air it really is 31.7° in the glass.
//
// That figure was 31.3 in the first draft of this comment, and check-geometry
// failed on it. Worth keeping the note: the check computes what Snell's law
// requires and compares, so a number written from memory into a comment gets
// caught the same as a number written into the code.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useState } from "react";
import { angleFill, angleStroke, arrowHead, wedge, Angle, Fig } from "../shared";
import {
  bearing,
  bisectorPoint,
  degrees,
  refract,
  separateLabels,
  type Point,
} from "./geometry";
import { Handle, Holds, InteractiveFigure } from "./parts";

const VIEWBOX = "0 0 220 132";

/** The refractive index of the glass block, the value GCSE questions use. */
const N_GLASS = 1.5;
const N_AIR = 1;

const BLOCK = { left: 44, right: 176, top: 44, bottom: 92 };
/** Where the ray meets the top face. Fixed: the angle is what this is about. */
const ENTRY: Point = { x: 86, y: BLOCK.top };

const START = { incidence: 52 };

function unit(deg: number): Point {
  const r = (deg * Math.PI) / 180;
  return { x: Math.cos(r), y: -Math.sin(r) };
}
function shift(from: Point, direction: Point, distance: number): Point {
  return { x: from.x + direction.x * distance, y: from.y + direction.y * distance };
}
function path(...points: Point[]) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

export function Refraction() {
  const [state, setState] = useState(START);
  const reset = useCallback(() => setState(START), []);

  // Kept off both extremes: at 0° there is no bending to see and the two
  // normals sit on top of the ray, and beyond about 80° the ray skims the
  // surface and the entry angle is unreadable.
  const setIncidence = (v: number) =>
    setState({ incidence: Math.min(80, Math.max(6, v)) });

  const theta1 = state.incidence;
  // Air into glass: always a real angle, because glass is the denser of the
  // two. `refract` can return null — that is total internal reflection — but
  // it cannot happen in this direction, and the type makes us say so.
  const theta2 = refract(theta1, N_AIR, N_GLASS) ?? 0;

  // Straight down is 270°; turning towards +x adds. The ray travels down-right
  // throughout, bending TOWARDS the vertical normal inside the glass and back
  // out to its original direction on the way out. The path inside the glass is
  // not a direction here but a destination — `exit` below, found by running
  // θ₂ across the thickness of the block.
  const incoming = unit(270 + theta1);

  const source = shift(ENTRY, unit(90 + theta1), 44);
  const exit: Point = {
    x: ENTRY.x + (BLOCK.bottom - BLOCK.top) * Math.tan((theta2 * Math.PI) / 180),
    y: BLOCK.bottom,
  };
  const emerges = shift(exit, incoming, 26);

  // ⚠️ Placed on each angle's own bisector and then pushed clear of the ray and
  // the handle, rather than at hand-picked offsets. The first version used
  // fixed offsets that suited 52° and put "31.7°" straight through the dashed
  // normal, and the exit angle through the arrowhead, as soon as the ray moved.
  const [labelIn, labelRefracted, labelOut] = separateLabels(
    [
      bisectorPoint(ENTRY, 90, 90 + theta1, 27),
      bisectorPoint(ENTRY, 270, 270 + theta2, 25),
      bisectorPoint(exit, 270, 270 + theta1, 25),
    ],
    [ENTRY, exit, source, emerges],
  );

  const normalUpE = shift(ENTRY, unit(90), 26);
  const normalDownE = shift(ENTRY, unit(270), 22);
  const normalUpX = shift(exit, unit(90), 20);
  const normalDownX = shift(exit, unit(270), 26);

  return (
    <InteractiveFigure
      viewBox={VIEWBOX}
      label="A light ray entering a glass block, bending towards the normal inside it and leaving parallel to the direction it arrived in, with both angles measured from the normal"
      caption="towards the normal going in, away from it coming out — and it leaves parallel"
      onReset={reset}
      readout={
        <>
          air {degrees(theta1)} → glass {degrees(theta2)}
          <span className="mx-1.5 opacity-40">·</span>
          {/* ⚠️ "=" WOULD BE A LIE HERE, AND IT IS NOT THE PHYSICS THAT IS AT
              FAULT. θ₂ is derived from θ₁ exactly (see `refract`), so the law
              holds to nine decimal places — but the two angles are each PRINTED
              to one decimal place, and no pair of 1-d.p. angles satisfies
              Snell's law exactly. A reader checking "sin 61.2° = 1.50 sin 35.8°"
              on a calculator gets 0.8767 against 0.8775 and concludes the
              diagram is wrong, when only the printing is approximate.
              Elsewhere the fix was to choose a precision at which the printed
              line balances (`consistentSum`); a sine cannot be made to do that,
              because the rounding happens before the function is applied. So
              the honest move is the smaller one: say "approximately", which is
              exactly what a measured pair of angles gives you in a real
              experiment. The ✓ beside it still tests the unrounded values. */}
          1.00 sin {degrees(theta1)} ≈ 1.50 sin {degrees(theta2)}
          <Holds
            ok={
              Math.abs(
                N_AIR * Math.sin((theta1 * Math.PI) / 180) -
                  N_GLASS * Math.sin((theta2 * Math.PI) / 180),
              ) < 1e-9
            }
          />
        </>
      }
    >
      {/* The block. Filled with the angle colour at low strength, which is how
          every other diagram on the site says "this is the material". */}
      <path
        d={`M ${BLOCK.left} ${BLOCK.top} L ${BLOCK.right} ${BLOCK.top} L ${BLOCK.right} ${BLOCK.bottom} L ${BLOCK.left} ${BLOCK.bottom} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={1.6}
      />

      {/* The normals: dashed, perpendicular to the SURFACE, and drawn on both
          sides of it. Getting these wrong — drawing them vertical against a
          vertical face — is what made the first static version nonsense. */}
      <Fig d={path(normalUpE, normalDownE)} dashed />
      <Fig d={path(normalUpX, normalDownX)} dashed />

      {/* The ray itself, one continuous path in, through and out. */}
      <path
        d={path(source, ENTRY, exit, emerges)}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={arrowHead(emerges.x, emerges.y, bearing(exit, emerges))}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
      />

      {/* θ₁ between the normal and the incoming ray, θ₂ between the normal and
          the ray inside — both measured from the NORMAL, which is the thing
          exam answers get wrong by measuring from the surface instead. */}
      <Angle d={wedge(ENTRY.x, ENTRY.y, 17, 90, 90 + theta1)} />
      <Angle d={wedge(ENTRY.x, ENTRY.y, 13, 270 + theta2, 270)} />
      <Angle d={wedge(exit.x, exit.y, 15, 270 + theta1, 270)} />

      {[
        [labelIn, degrees(theta1)],
        [labelRefracted, degrees(theta2)],
        [labelOut, degrees(theta1)],
      ].map(([at, text], i) => (
        <text
          key={i}
          x={(at as Point).x.toFixed(1)}
          y={((at as Point).y + 3).toFixed(1)}
          textAnchor="middle"
          className="fill-[var(--diagram-accent-text)] text-[9px] font-semibold tabular-nums"
        >
          {text as string}
        </text>
      ))}

      <text x={8} y={22} className="fill-current text-[9px] opacity-70">
        air
      </text>
      <text x={BLOCK.right - 26} y={BLOCK.top + 14} className="fill-current text-[9px] opacity-70">
        glass
      </text>
      <text x={8} y={BLOCK.bottom + 22} className="fill-current text-[9px] opacity-70">
        air
      </text>

      <Handle
        x={source.x}
        y={source.y}
        // Dragged anywhere above the surface, the incidence angle is just how
        // far the pointer is from straight up — so the ray follows a finger
        // round rather than needing to be kept exactly 44 units away.
        onDragTo={(p) => setIncidence(bearing(ENTRY, p) - 90)}
        onNudge={(step) => setIncidence(theta1 + step)}
        name="The incoming ray"
        value={theta1}
        valueText={`Angle of incidence ${degrees(theta1)}, refracting to ${degrees(theta2)}`}
      />
    </InteractiveFigure>
  );
}
