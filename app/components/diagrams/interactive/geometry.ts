// The maths behind every interactive diagram. No React in this file, on purpose.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THE MATHS LIVES ON ITS OWN
//
// A static diagram that is wrong is wrong in one fixed way, and rendering it
// once and looking at it finds the mistake — which is exactly how the reflex
// angles, the backwards refraction and the bow-tie DNA were all caught.
//
// A draggable diagram is different. It is not one picture, it is every picture
// you can reach by moving the points, and you cannot look at all of them. The
// angle-at-centre theorem is easy to get right for the arrangement you happen
// to draw first and quietly wrong the moment the point crosses onto the minor
// arc and the centre angle goes reflex. Nobody would notice on screen; a
// student copying it into an exam answer would.
//
// So every number an interactive diagram displays is computed by a function in
// here, and scripts/check-geometry.ts re-derives the same quantities a
// different way over tens of thousands of random configurations and asserts
// they agree. The components below do no maths of their own — if a component
// is computing an angle inline, that angle is untested, and that is the bug.
// ─────────────────────────────────────────────────────────────────────────────

export type Point = { x: number; y: number };

/**
 * Every interactive circle diagram shares one centre and radius, so the
 * theorems can be compared against each other — the exam skill is spotting
 * WHICH one applies, and that is harder when every picture is a different
 * size.
 *
 * Bigger and lower than the static diagrams' circle, on a taller canvas. The
 * handles need a 22-unit hit area to be thumb-sized on a phone, and the point
 * labels sit outside the circumference; at the static r=40 on a 112-tall box
 * the topmost label ran off the canvas.
 */
export const CIRCLE = { cx: 110, cy: 64, r: 44 };

/** The canvas the interactive circle diagrams are drawn on. */
export const CIRCLE_VIEWBOX = "0 0 220 128";

// ─── Angle bookkeeping ──────────────────────────────────────────────────────
//
// Angles are "maths degrees" everywhere: measured anticlockwise from the
// positive x-axis, exactly as a student measures them. SVG's downward y is
// dealt with in `onCircle` and nowhere else.

/** Wrap to [0, 360). */
export function norm360(degrees: number): number {
  return ((degrees % 360) + 360) % 360;
}

/** Wrap to (-180, 180] — the signed "short way round". */
export function norm180(degrees: number): number {
  const d = norm360(degrees);
  return d > 180 ? d - 360 : d;
}

/** A point on the shared circle at a given angle. */
export function onCircle(degrees: number, circle = CIRCLE): Point {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: circle.cx + circle.r * Math.cos(radians),
    y: circle.cy - circle.r * Math.sin(radians),
  };
}

/** The angle of a point as seen from the circle's centre — the drag inverse. */
export function angleOf(p: Point, circle = CIRCLE): number {
  return norm360((Math.atan2(-(p.y - circle.cy), p.x - circle.cx) * 180) / Math.PI);
}

/** The maths-degree direction from one point to another. */
export function bearing(from: Point, to: Point): number {
  return norm360((Math.atan2(-(to.y - from.y), to.x - from.x) * 180) / Math.PI);
}

// ─── The quantities the theorems are about ──────────────────────────────────

/**
 * The angle ∠APB at vertex P, in degrees, always the non-reflex one (0…180).
 *
 * Computed from the dot product rather than by subtracting two bearings,
 * because subtracting bearings needs a wrap fix that is easy to get right for
 * the case in front of you and wrong for the one you did not try.
 */
export function angleAt(p: Point, a: Point, b: Point): number {
  const v1 = { x: a.x - p.x, y: a.y - p.y };
  const v2 = { x: b.x - p.x, y: b.y - p.y };
  const m1 = Math.hypot(v1.x, v1.y);
  const m2 = Math.hypot(v2.x, v2.y);
  if (m1 === 0 || m2 === 0) return 0;
  // Clamped because floating point can hand acos a value a hair outside [-1,1]
  // when the three points are collinear, and acos(1.0000000001) is NaN.
  const cos = Math.min(1, Math.max(-1, (v1.x * v2.x + v1.y * v2.y) / (m1 * m2)));
  return (Math.acos(cos) * 180) / Math.PI;
}

/**
 * Is the point at angle `p` on the anticlockwise arc from `a` to `b`?
 *
 * This is the question every circle theorem turns on: which of the two arcs
 * cut off by a chord is the point standing on. Everything else follows.
 */
export function onArcCCW(a: number, b: number, p: number): boolean {
  const span = norm360(b - a);
  const offset = norm360(p - a);
  return offset > 0 && offset < span;
}

/**
 * The arc AB that does NOT contain P, as a sweep to hand to `arc()`.
 *
 * Returned as a start angle and an end angle that may be less than the start
 * (a clockwise sweep) or more than 360 apart in the reflex case — which is
 * what the drawing helpers want, and why this returns a sweep rather than
 * just a size.
 */
export function arcAwayFrom(
  a: number,
  b: number,
  p: number,
): { from: number; to: number; measure: number } {
  const ccw = norm360(b - a);
  // If P sits on the anticlockwise arc a→b, the arc we want is the other one,
  // which runs clockwise from a to b.
  if (onArcCCW(a, b, p)) {
    return { from: a, to: a - (360 - ccw), measure: 360 - ccw };
  }
  return { from: a, to: a + ccw, measure: ccw };
}

/**
 * The inscribed-angle theorem, from first principles.
 *
 * ∠APB is half the arc AB that P does not stand on. Returning both together
 * keeps the 2:1 relationship the diagram is claiming in ONE place, so the
 * picture cannot drift from the caption.
 */
export function inscribedAngle(
  a: number,
  b: number,
  p: number,
): { atCentre: number; atEdge: number; sweep: { from: number; to: number } } {
  const away = arcAwayFrom(a, b, p);
  return {
    atCentre: away.measure,
    atEdge: away.measure / 2,
    sweep: { from: away.from, to: away.to },
  };
}

/**
 * The interior angle of a polygon at vertex `here`, and the sweep that draws
 * it — always the inside of the shape, never the reflex outside.
 *
 * The sweep is the short way round from one neighbour to the other, which is
 * the interior angle exactly when the polygon is convex. Every polygon these
 * diagrams draw is inscribed in a circle with its vertices in order, so it is.
 */
export function interiorSweep(
  here: Point,
  prev: Point,
  next: Point,
): { from: number; to: number; size: number } {
  const from = bearing(here, prev);
  const to = bearing(here, next);
  const delta = norm180(to - from);
  return { from, to: from + delta, size: Math.abs(delta) };
}

// ─── Keeping a dragged point somewhere sensible ─────────────────────────────

/**
 * Keep `value` at least `gap` degrees away from each angle in `others`.
 *
 * Two points of a triangle on top of each other is not a triangle, and the
 * angle at a vertex you are standing on is undefined — the picture collapses
 * to a line and the readout says NaN. Rather than letting that happen and
 * showing a broken figure, a dragged point stops just short.
 */
export function keepClear(value: number, others: number[], gap = 8): number {
  // ⚠️ THE OBVIOUS VERSION OF THIS DOES NOT CONVERGE, AND IT PUT A TICKED,
  // MEANINGLESS STATEMENT ON SCREEN.
  //
  // It used to walk the list once, pushing `out` clear of each `other` in turn.
  // Pushing clear of the second neighbour can shove it straight back into the
  // first, and nothing looked again. Swept over the whole domain: 3,960 of
  // 129,600 calls came back breaching the minimum, and the worst case came
  // back at a gap of EXACTLY ZERO — two points of the circle drawn on top of
  // each other. The diagram then showed no triangle, printed
  // "0° at the centre = 2 × 0° at the edge ✓", and the point underneath could
  // never be grabbed again because the other one's hit area covered it.
  //
  // Neither existing check could see it. check-geometry.ts tested the module
  // but never with two mutually-close neighbours; check-interactive.mjs drags
  // ONE handle to ONE random place, and this needs a two-step setup — and at
  // the degenerate point the rule assertion is satisfied, because 0 really is
  // 2 × 0.
  //
  // So this now SEARCHES rather than nudges. The legal positions are the ones
  // at least `gap` from every neighbour; the candidates that matter are the
  // two edges of each neighbour's forbidden arc, plus `value` itself. Pick the
  // legal candidate nearest to where the finger actually is.
  const out = norm360(value);
  if (others.length === 0) return out;

  const clearOf = (candidate: number) =>
    Math.min(...others.map((other) => Math.abs(norm180(candidate - other))));

  if (clearOf(out) >= gap - 1e-9) return out;

  const candidates = [out, ...others.flatMap((other) => [other + gap, other - gap])].map(norm360);

  let best: number | null = null;
  let bestTravel = Infinity;
  for (const candidate of candidates) {
    if (clearOf(candidate) < gap - 1e-9) continue;
    const travel = Math.abs(norm180(candidate - out));
    if (travel < bestTravel) {
      bestTravel = travel;
      best = candidate;
    }
  }
  if (best !== null) return best;

  // No legal position exists — the neighbours are themselves closer together
  // than 2 × gap, so every point is too near one of them. Take the roomiest
  // spot available rather than the first one tried, which is what stops two
  // points landing on each other in the case that caused this.
  let roomiest = candidates[0];
  let mostRoom = -1;
  for (const candidate of candidates) {
    const room = clearOf(candidate);
    if (room > mostRoom + 1e-9) {
      mostRoom = room;
      roomiest = candidate;
    }
  }
  return roomiest;
}

/**
 * Clamp a point's angle to stay strictly between its two neighbours, going
 * anticlockwise — what stops a dragged quadrilateral from turning inside out.
 *
 * Without this, dragging one corner of a cyclic quadrilateral past the next
 * one produces a self-intersecting bow tie whose "opposite angles" no longer
 * add to 180, and the diagram sits there confidently displaying a false
 * statement. The theorem is about a quadrilateral, so the figure has to stay
 * one.
 */
export function clampBetween(
  value: number,
  after: number,
  before: number,
  gap = 8,
): number {
  const span = norm360(before - after);
  // No room between the neighbours at all: sit in the middle of what there is.
  if (span <= 2 * gap) return norm360(after + span / 2);
  const offset = norm360(value - after);
  if (offset < gap) return norm360(after + gap);
  if (offset > span - gap) return norm360(after + span - gap);
  return norm360(value);
}

// ─── Rounding for display ───────────────────────────────────────────────────

/**
 * One decimal place, and never "-0.0" or "180.0°" when it means 180°.
 *
 * Whole numbers matter here: a student dragging towards the special case wants
 * to see it land on 90°, not 90.0°, and "89.96°" rounded to "90.0°" while the
 * shape is visibly not a right angle is worse than either.
 */
export function degrees(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  const safe = Object.is(rounded, -0) ? 0 : rounded;
  return Number.isInteger(safe) ? `${safe}°` : `${safe.toFixed(1)}°`;
}

// ─── Placing things around an angle ─────────────────────────────────────────

/**
 * A point out along the bisector of a sweep — where an angle's label goes.
 *
 * Works for a reflex sweep too, because the sweep carries its direction in the
 * sign of `to - from` rather than being normalised away. Labelling a 240°
 * angle at the midpoint of the 120° side is the same class of mistake as
 * drawing the arc the wrong way round, and it is made by the same shortcut.
 */
export function bisectorPoint(
  vertex: Point,
  from: number,
  to: number,
  radius: number,
): Point {
  const mid = (from + to) / 2;
  const radians = (mid * Math.PI) / 180;
  return {
    x: vertex.x + radius * Math.cos(radians),
    y: vertex.y - radius * Math.sin(radians),
  };
}

/**
 * The little square that means 90°, drawn between two arbitrary directions
 * rather than only along the axes.
 *
 * The static toolkit's RightAngle takes dx/dy of ±1, which is all a fixed
 * picture ever needs. A tangent whose point of contact you can drag is at a
 * different angle every frame, and an axis-aligned square floating beside a
 * slanted corner is worse than no marker at all.
 */
export function rightAngleMark(
  vertex: Point,
  towards1: number,
  towards2: number,
  size = 9,
): string {
  const r1 = (towards1 * Math.PI) / 180;
  const r2 = (towards2 * Math.PI) / 180;
  const u1 = { x: Math.cos(r1) * size, y: -Math.sin(r1) * size };
  const u2 = { x: Math.cos(r2) * size, y: -Math.sin(r2) * size };
  const a = { x: vertex.x + u1.x, y: vertex.y + u1.y };
  const b = { x: vertex.x + u1.x + u2.x, y: vertex.y + u1.y + u2.y };
  const c = { x: vertex.x + u2.x, y: vertex.y + u2.y };
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} L ${b.x.toFixed(2)} ${b.y.toFixed(2)} L ${c.x.toFixed(2)} ${c.y.toFixed(2)}`;
}

/**
 * Which side of the line through P and Q a point falls on: +1, -1, or 0 on it.
 *
 * The alternate segment theorem is entirely a question about sides — the
 * tangent-chord angle equals the inscribed angle in the segment on the OTHER
 * side of the chord — so this is the whole of that theorem's logic.
 */
export function sideOfLine(p: Point, q: Point, x: Point): number {
  const cross = (q.x - p.x) * (x.y - p.y) - (q.y - p.y) * (x.x - p.x);
  if (Math.abs(cross) < 1e-9) return 0;
  return cross > 0 ? 1 : -1;
}

// ─── Fitting an angle's arc and its number into the space there is ──────────
//
// ⚠️ THIS EXISTS BECAUSE A FIXED LABEL RADIUS IS WRONG FOR A SHAPE THAT MOVES.
//
// The static diagrams place every angle label by hand, at a distance chosen by
// looking at that one picture. A draggable diagram has no one picture to look
// at, and a fixed radius that suits a narrow angle puts a wide one's label
// straight through the far side of the triangle: dragging Q round to face a
// 110° angle printed "110°" directly on top of the chord it was standing on.
//
// So the radius is computed from the room actually available — how far along
// the bisector the shape closes — and the arc shrinks with it, so the number is
// always outside its own arc and always inside its own angle.

/** Plain distance between two points. */
export function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

/**
 * How far along the interior bisector of ∠AVB the segment AB is.
 *
 * That is the depth of the angle: the point where the triangle closes and past
 * which a label is no longer inside the shape at all.
 */
export function bisectorReach(vertex: Point, a: Point, b: Point): number {
  const sweep = interiorSweep(vertex, a, b);
  const mid = ((sweep.from + sweep.to) / 2) * (Math.PI / 180);
  const dx = Math.cos(mid);
  const dy = -Math.sin(mid);

  // Ray/segment intersection, solved as vertex + t·d = a + u·(b − a).
  const ex = b.x - a.x;
  const ey = b.y - a.y;
  const denominator = dx * ey - dy * ex;
  if (Math.abs(denominator) < 1e-9) return Infinity; // parallel: never closes
  const t = ((a.x - vertex.x) * ey - (a.y - vertex.y) * ex) / denominator;
  return t > 0 ? t : Infinity;
}

/**
 * The arc radius and label radius to use for one angle.
 *
 * Ordered so the number always sits outside its own arc, and both always sit
 * inside the angle they belong to, however the points have been dragged.
 */
export function angleLabelPlacement(
  vertex: Point,
  a: Point,
  b: Point,
  preferredArc = 15,
): { arc: number; label: number } {
  const room = Math.min(
    bisectorReach(vertex, a, b),
    distance(vertex, a),
    distance(vertex, b),
  );
  const arc = Math.max(6, Math.min(preferredArc, room * 0.42));
  const label = Math.min(arc + 10, Math.max(arc + 5, room * 0.66));
  return { arc, label };
}

/**
 * Move a set of angle labels apart until none of them overlaps another.
 *
 * ⚠️ SEPARATION IS ABOUT BOXES OF TEXT, NOT ABOUT DISTANCE BETWEEN POINTS.
 *
 * The first version of this pushed the label CENTRES a fixed distance apart,
 * and it did not work, because "127.5°" is about 28 units wide and 11 tall on
 * this canvas — two centres 22 units apart still print one number straight
 * through the other. Rendering it and looking is what showed that: the
 * quadrilateral's 85° and 134° overlapped into something that read as "234°",
 * and I believed it was a wrong angle for a good few seconds. A label that can
 * be misread as a different number is worse than no label.
 *
 * The default box is 34 × 13, measured rather than guessed: the widest value
 * these diagrams print is "127.5°", and getBBox() reports it as 28.25 × 11.84
 * units on this canvas. The extra few units are the gap that makes two numbers
 * read as two numbers rather than as one crowded smudge.
 *
 * So the test is the actual overlap of two text boxes, and the push is VERTICAL
 * — for text this wide and this short, moving a couple of units up and down
 * clears an overlap that would need fifteen sideways, and it keeps each number
 * roughly over the angle it belongs to.
 */
export function separateLabels(
  points: Point[],
  obstacles: Point[] = [],
  width = 34,
  height = 13,
  obstacleRadius = 10,
  bounds = { width: 220, height: 128 },
): Point[] {
  // ⚠️ WHY A SEARCH AND NOT A NUDGE LOOP.
  //
  // The first version pushed overlapping pairs a little apart and repeated. It
  // does not converge: a label shoved clear of one handle lands on the next,
  // gets shoved back, and after six passes some arrangements are still
  // overlapping. The check caught that on about one random configuration in
  // fifty — which is roughly "a student will see it within a minute".
  //
  // So instead each label takes the smallest vertical offset that is actually
  // clear of everything, chosen by trying them in order. Deterministic, always
  // terminates, and the label ends up as close to its own angle as it can.
  const placed: Point[] = [];

  // Candidate positions, nearest first, so a label that is already fine is not
  // moved at all and one that must move goes as little as possible.
  //
  // Vertical is tried before sideways at every distance: a label belongs over
  // its own angle, and sliding it sideways moves it towards a neighbouring one.
  // Sideways is still there as a fallback, because with four crowded corners
  // there are arrangements where no vertical offset is clear at all — and a
  // label placed slightly off to one side beats one left sitting on a handle.
  // Sixteen directions rather than eight, and out to 40 units: with three
  // handles around a label there are arrangements where the only clear spot is
  // a diagonal one, and a coarse fan misses it. Measured — a coarser search
  // left three of six hundred thousand random arrangements still overlapping.
  const directions = [90, 270, 68, 112, 248, 292, 45, 135, 225, 315, 22, 158, 202, 338, 0, 180];
  const offsets: Point[] = [{ x: 0, y: 0 }];
  for (let step = 2; step <= 40; step += 2) {
    for (const d of directions) {
      const r = (d * Math.PI) / 180;
      offsets.push({ x: step * Math.cos(r), y: -step * Math.sin(r) });
    }
  }

  /** How much room this position has — bigger is better, negative is a clash. */
  function score(at: Point): number {
    let worst = Infinity;

    for (const o of obstacles) {
      const cx = Math.max(at.x - width / 2, Math.min(o.x, at.x + width / 2));
      const cy = Math.max(at.y - height / 2, Math.min(o.y, at.y + height / 2));
      worst = Math.min(worst, Math.hypot(o.x - cx, o.y - cy) - obstacleRadius);
    }

    for (const other of placed) {
      const dx = Math.abs(other.x - at.x);
      const dy = Math.abs(other.y - at.y);
      // Clear if EITHER axis clears; the slack is how far past clearing it is.
      worst = Math.min(worst, Math.max(dx - width, dy - height));
    }

    // Running off the canvas is worse than any overlap: a clipped number is not
    // merely hard to read, it is not there. Half a line of padding kept inside.
    const inset = Math.min(
      at.y - height / 2 - 1,
      bounds.height - 1 - (at.y + height / 2),
      at.x - width / 2 + 6,
      bounds.width + 6 - (at.x + width / 2),
    );
    if (inset < 0) worst = Math.min(worst, inset * 10);

    return worst;
  }

  for (const point of points) {
    let best = { ...point };
    let bestScore = -Infinity;

    for (const offset of offsets) {
      const at = { x: point.x + offset.x, y: point.y + offset.y };
      const s = score(at);
      if (s >= 0) {
        best = at;
        bestScore = s;
        break; // the smallest offset that genuinely clears everything
      }
      if (s > bestScore) {
        bestScore = s;
        best = at;
      }
    }

    placed.push(best);
  }

  return placed;
}

// ─── For the diagrams whose points are not on a circle ──────────────────────

/** Keep a freely-dragged point inside the drawing area. */
export function clampToBox(
  p: Point,
  box: { left: number; right: number; top: number; bottom: number },
): Point {
  return {
    x: Math.min(box.right, Math.max(box.left, p.x)),
    y: Math.min(box.bottom, Math.max(box.top, p.y)),
  };
}

/**
 * How far a triangle is from being a triangle: the area of it, doubled.
 *
 * Three points in a line have an angle sum that is still 180° on paper and a
 * picture that is a line segment, with two of its angles undefined. Dragging a
 * corner onto the opposite side is easy to do by accident, so the diagrams
 * refuse the last little bit of the way.
 */
export function doubleArea(a: Point, b: Point, c: Point): number {
  return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
}

/**
 * Snell's law: n₁ sin θ₁ = n₂ sin θ₂, angles measured from the NORMAL.
 *
 * Returns the refracted angle in degrees, or null when there isn't one —
 * past the critical angle, going from dense to less dense, the light does not
 * emerge at all and is totally internally reflected. Returning null rather
 * than a NaN or a clamped 90° is the point: total internal reflection is a
 * real answer that the diagram has to draw differently, not an error.
 */
export function refract(incidenceDeg: number, n1: number, n2: number): number | null {
  const sinOut = (n1 * Math.sin((incidenceDeg * Math.PI) / 180)) / n2;
  if (Math.abs(sinOut) > 1) return null;
  return (Math.asin(sinOut) * 180) / Math.PI;
}

/** The angle past which light cannot leave the denser material at all. */
export function criticalAngle(n1: number, n2: number): number | null {
  if (n2 >= n1) return null;
  return (Math.asin(n2 / n1) * 180) / Math.PI;
}

/**
 * Format a total and its parts so that the numbers ON SCREEN actually add up.
 *
 * ⚠️ ROUNDING EACH NUMBER SEPARATELY BREAKS THE VERY IDENTITY THE DIAGRAM IS
 * DEMONSTRATING.
 *
 * The exterior-angle diagram printed "133° = 48.1° + 84.8°", and 48.1 + 84.8 is
 * 132.9. The geometry was exact — the three values agreed to nine decimal
 * places — but 132.954 rounds up to 133 while both parts round down, so the one
 * line whose entire job is to show a sum working showed a sum not working. On a
 * revision site that is worse than useless: a student checking the arithmetic
 * finds it wrong and has no way to know the picture is right and the printing
 * is at fault.
 *
 * So the precision is chosen rather than fixed: the fewest decimal places at
 * which the rounded parts really do add to the rounded total. Nice arrangements
 * still read "128° + 52° = 180°"; awkward ones quietly show a second decimal
 * instead of lying.
 */
export function consistentSum(
  total: number,
  parts: number[],
): { total: string; parts: string[] } {
  // The total is printed as the sum of the ROUNDED parts, so the line balances
  // by construction rather than by luck. The only question is how many decimal
  // places to use, and the answer is the fewest at which that printed total is
  // still an honest rounding of the real one.
  for (const places of [1, 2, 3, 4]) {
    const factor = 10 ** places;
    const roundedParts = parts.map((p) => Math.round(p * factor) / factor);
    const printedTotal = Math.round(roundedParts.reduce((n, p) => n + p, 0) * factor) / factor;
    // Half a unit in the last place is what "rounds to" means; the slack is for
    // floating point, not for licence.
    if (Math.abs(printedTotal - total) <= 0.5 / factor + 1e-9) {
      return { total: show(printedTotal), parts: roundedParts.map(show) };
    }
  }

  // Four decimal places is far below anything the picture can express; at that
  // point print what the parts add to and accept the last digit.
  const roundedParts = parts.map((p) => Math.round(p * 10000) / 10000);
  return {
    total: show(Math.round(roundedParts.reduce((n, p) => n + p, 0) * 10000) / 10000),
    parts: roundedParts.map(show),
  };
}

/** A rounded value as text: no trailing zeros, and never "-0". */
function show(value: number): string {
  const safe = Object.is(value, -0) ? 0 : value;
  // `toFixed` then strip, rather than String(), so 132.95000000000002 does not
  // print itself in full.
  const text = safe.toFixed(4).replace(/\.?0+$/, "");
  return `${text === "" || text === "-" ? "0" : text}°`;
}

/**
 * How far along a ray you can go and still be inside the drawing area.
 *
 * ⚠️ A HANDLE HALF OFF THE CANVAS IS HALF A HANDLE.
 *
 * The grab areas are 18 units of invisible circle on a phone, and SVG clips
 * anything past the viewBox — so a handle drawn at the end of a long line put
 * a third of its own touch target outside the picture, where no finger can
 * reach it. Found by measuring every element's box against its canvas rather
 * than by looking, because the part that goes missing is transparent.
 *
 * The fix is not a shorter line: a line should look like a line. It is to draw
 * the handle at the furthest point along that line which is still comfortably
 * inside — the drag maths only ever uses the DIRECTION from the centre, so
 * where the grab dot sits changes nothing about the geometry.
 */
export function reachInside(
  from: Point,
  direction: Point,
  max: number,
  box: { left: number; right: number; top: number; bottom: number },
): number {
  let t = max;
  if (direction.x > 1e-9) t = Math.min(t, (box.right - from.x) / direction.x);
  if (direction.x < -1e-9) t = Math.min(t, (box.left - from.x) / direction.x);
  if (direction.y > 1e-9) t = Math.min(t, (box.bottom - from.y) / direction.y);
  if (direction.y < -1e-9) t = Math.min(t, (box.top - from.y) / direction.y);
  return Math.max(0, t);
}

/**
 * Where a handle may be drawn on a 220×124 canvas.
 *
 * Inset by the radius of the grab area at its largest — 18 units, which is
 * what the small-screen media query grows it to — so the whole target is on
 * screen at every size.
 */
export const HANDLE_BOX = { left: 18, right: 202, top: 18, bottom: 106 };

/**
 * A rational number written exactly — as an integer, a terminating decimal, or
 * a fraction — never as a rounded decimal pretending to be exact.
 *
 * ⚠️ A ROUNDED GRADIENT DESCRIBES A DIFFERENT LINE.
 *
 * The browser check caught "y = 0.67x + 1.67" on a line through (2, 3) and
 * (8, 7). Substitute x = 2 and that equation gives y = 3.01, so neither point
 * the reader can see is actually on the line the caption claims. Worse than
 * untidy: this diagram exists to show that the two points DETERMINE the
 * equation, and a rounded m quietly breaks the only thing it is proving.
 *
 * The graph coordinates snap to halves, so every gradient and intercept is a
 * ratio of two integers and can be printed exactly. A denominator built only
 * from 2s and 5s terminates in decimal and is printed that way, because 1.5
 * reads better than 3/2 in an equation; anything else stays a fraction, where
 * 2/3 is right and 0.67 is not.
 */
export function exactRatio(numerator: number, denominator: number): string {
  if (denominator === 0) return "undefined";
  // Sign lives on the numerator, so a negative denominator does not print as
  // "1/-3".
  const sign = denominator < 0 ? -1 : 1;
  let n = Math.round(numerator) * sign;
  let d = Math.round(denominator) * sign;

  const divisor = gcd(Math.abs(n), d);
  if (divisor > 1) {
    n /= divisor;
    d /= divisor;
  }
  if (d === 1) return `${n === 0 ? 0 : n}`;

  // How many decimal places a terminating expansion needs: the larger of the
  // counts of 2 and 5 in the denominator. If anything else is left over the
  // decimal recurs, and only a fraction is honest.
  let rest = d;
  let twos = 0;
  let fives = 0;
  while (rest % 2 === 0) {
    rest /= 2;
    twos += 1;
  }
  while (rest % 5 === 0) {
    rest /= 5;
    fives += 1;
  }
  if (rest !== 1) return `${n}/${d}`;

  const places = Math.max(twos, fives);
  return (n / d).toFixed(places);
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x === 0 ? 1 : x;
}
