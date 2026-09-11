// Proves the interactive diagrams are telling the truth.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS, WHEN THE DIAGRAMS ARE ALREADY LOOKED AT
//
// Every static diagram on this site was rendered and inspected, and that found
// about thirty-five real defects — a Sankey drawn as three separate boxes, a
// ray refracting the wrong way, a reflex angle labelled as its own explement.
// Looking works because a static diagram is one picture.
//
// A draggable diagram is not one picture. It is every arrangement the handles
// can reach, and the wrong ones are, by construction, the ones nobody happened
// to drag to. The angle-at-centre theorem drawn with P on the major arc looks
// perfect and stays perfect for as long as you leave P there; the bug is on the
// other side, where the centre angle should go reflex.
//
// So this re-derives every quantity a SECOND, INDEPENDENT way and asserts the
// two agree, over tens of thousands of random configurations plus the exact
// edge cases that break naive implementations. Independent matters: computing
// it the same way twice proves nothing but that the code is deterministic.
//
// Run by `npm run check`. Node runs this .ts file directly — type annotations
// are stripped, so keep to plain types (no enums, no namespaces, no parameter
// properties), same restriction the rest of the checked files live under.
// ─────────────────────────────────────────────────────────────────────────────

import {
  exactRatio,
  angleAt,
  angleLabelPlacement,
  angleOf,
  arcAwayFrom,
  bisectorPoint,
  CIRCLE,
  clampBetween,
  consistentSum,
  criticalAngle,
  degrees,
  inscribedAngle,
  interiorSweep,
  keepClear,
  norm180,
  refract,
  norm360,
  onArcCCW,
  bisectorReach,
  distance,
  HANDLE_BOX,
  onCircle,
  reachInside,
  separateLabels,
  rightAngleMark,
  sideOfLine,
} from "../app/components/diagrams/interactive/geometry.ts";

let checks = 0;
let failures = 0;

function ok(condition: boolean, what: string, detail = "") {
  checks += 1;
  if (!condition) {
    failures += 1;
    console.error(`  ✗ ${what}${detail ? ` — ${detail}` : ""}`);
  }
}

function close(actual: number, expected: number, what: string, tolerance = 1e-6) {
  ok(
    Math.abs(actual - expected) < tolerance,
    what,
    `got ${actual.toFixed(9)}, expected ${expected.toFixed(9)}`,
  );
}

// A deterministic generator, so a failure can actually be reproduced. Math.random()
// would make a rare geometric edge case impossible to investigate.
let seed = 20260910;
function random() {
  seed = (seed * 1103515245 + 12345) % 2147483648;
  return seed / 2147483648;
}
function randomAngle() {
  return random() * 360;
}

// ─── The independent second opinion ─────────────────────────────────────────
//
// These deliberately do NOT call anything in geometry.ts. They work from
// coordinates using plain trigonometry, which is the "by hand" answer a student
// would get, so agreement means the module is right rather than merely
// self-consistent.

function coordsOf(deg: number) {
  const r = (deg * Math.PI) / 180;
  return { x: CIRCLE.cx + CIRCLE.r * Math.cos(r), y: CIRCLE.cy - CIRCLE.r * Math.sin(r) };
}

/** ∠APB from the cosine rule on the three side lengths — no vectors, no atan2. */
function angleByCosineRule(
  p: { x: number; y: number },
  a: { x: number; y: number },
  b: { x: number; y: number },
) {
  const pa = Math.hypot(a.x - p.x, a.y - p.y);
  const pb = Math.hypot(b.x - p.x, b.y - p.y);
  const ab = Math.hypot(b.x - a.x, b.y - a.y);
  const cos = (pa * pa + pb * pb - ab * ab) / (2 * pa * pb);
  return (Math.acos(Math.min(1, Math.max(-1, cos))) * 180) / Math.PI;
}

console.log("Checking the angle helpers against plain trigonometry...");

for (let i = 0; i < 20000; i += 1) {
  const a = randomAngle();
  const b = randomAngle();
  const p = randomAngle();
  // Skip configurations where two points are within a whisker of each other:
  // the angle at a vertex sitting on another point is genuinely undefined, and
  // `keepClear` is what stops a diagram ever reaching one. Tested separately.
  if (Math.abs(norm180(a - b)) < 1 || Math.abs(norm180(a - p)) < 1 || Math.abs(norm180(b - p)) < 1) {
    continue;
  }

  const A = coordsOf(a);
  const B = coordsOf(b);
  const P = coordsOf(p);

  close(angleAt(P, A, B), angleByCosineRule(P, A, B), "angleAt matches the cosine rule", 1e-7);

  // ── THE INSCRIBED ANGLE THEOREM ITSELF ──────────────────────────────────
  // This is the claim the diagram makes on screen, checked against an angle
  // measured from coordinates rather than from arcs. If arcAwayFrom picks the
  // wrong arc — the reflex bug — these disagree immediately.
  const { atCentre, atEdge } = inscribedAngle(a, b, p);
  close(atEdge, angleByCosineRule(P, A, B), "angle at the edge is half the arc it stands off", 1e-7);
  close(atCentre, 2 * atEdge, "the centre angle is exactly twice the edge angle", 1e-9);
  ok(atCentre >= 0 && atCentre <= 360, "the centre angle is a real angle", `${atCentre}`);

  // The reflex case is the entire point, so assert it actually happens the way
  // round it should: P on the MINOR arc means the centre angle is reflex.
  const ccw = norm360(b - a);
  const minorIsCcw = ccw < 180;
  const pOnCcw = onArcCCW(a, b, p);
  const pOnMinor = minorIsCcw ? pOnCcw : !pOnCcw;
  ok(
    pOnMinor === atCentre > 180,
    "the centre angle is reflex exactly when P stands on the minor arc",
    `p on minor: ${pOnMinor}, centre ${atCentre.toFixed(2)}`,
  );

  // ── ANGLES IN THE SAME SEGMENT ──────────────────────────────────────────
  const q = randomAngle();
  if (Math.abs(norm180(a - q)) > 1 && Math.abs(norm180(b - q)) > 1) {
    const Q = coordsOf(q);
    const atQ = angleByCosineRule(Q, A, B);
    const atP = angleByCosineRule(P, A, B);
    if (onArcCCW(a, b, p) === onArcCCW(a, b, q)) {
      close(atP, atQ, "two angles on the same arc are equal", 1e-7);
    } else {
      close(atP + atQ, 180, "two angles on opposite arcs add to 180", 1e-7);
    }
  }
}

console.log("Checking the angle in a semicircle...");

for (let i = 0; i < 5000; i += 1) {
  const d = randomAngle();
  const p = randomAngle();
  if (Math.abs(norm180(d - p)) < 1 || Math.abs(norm180(d + 180 - p)) < 1) continue;
  const A = coordsOf(d);
  const B = coordsOf(d + 180);
  const P = coordsOf(p);
  close(angleAt(P, A, B), 90, "the angle in a semicircle is a right angle", 1e-7);
}

console.log("Checking the cyclic quadrilateral...");

for (let i = 0; i < 5000; i += 1) {
  // Four points in anticlockwise order with real gaps, which is exactly the
  // invariant clampBetween maintains while a corner is being dragged.
  const start = randomAngle();
  const gaps = [0, 0, 0, 0].map(() => 20 + random() * 60);
  const total = gaps.reduce((n, g) => n + g, 0);
  const scaled = gaps.map((g) => (g / total) * 360);
  const at = [start];
  for (let k = 0; k < 3; k += 1) at.push(at[k] + scaled[k]);

  const [A, B, C, D] = at.map(coordsOf);
  const angA = angleByCosineRule(A, D, B);
  const angB = angleByCosineRule(B, A, C);
  const angC = angleByCosineRule(C, B, D);
  const angD = angleByCosineRule(D, C, A);

  close(angA + angC, 180, "opposite angles A and C add to 180", 1e-6);
  close(angB + angD, 180, "opposite angles B and D add to 180", 1e-6);
  close(angA + angB + angC + angD, 360, "the four angles of a quadrilateral add to 360", 1e-6);

  // interiorSweep must produce the INTERIOR angle, never its reflex outside —
  // the bug that made an earlier static diagram draw a 288° angle.
  close(interiorSweep(A, D, B).size, angA, "interiorSweep gives the inside angle at A", 1e-7);
  close(interiorSweep(C, B, D).size, angC, "interiorSweep gives the inside angle at C", 1e-7);
  ok(interiorSweep(A, D, B).size <= 180, "an interior angle is never reflex");
}

console.log("Checking the tangent, and the alternate segment theorem...");

for (let i = 0; i < 20000; i += 1) {
  const t = randomAngle();
  const a = randomAngle();
  const b = randomAngle();
  if (
    Math.abs(norm180(t - a)) < 2 ||
    Math.abs(norm180(t - b)) < 2 ||
    Math.abs(norm180(a - b)) < 2
  ) {
    continue;
  }

  const T = coordsOf(t);
  const A = coordsOf(a);
  const B = coordsOf(b);

  // ── TANGENT ⟂ RADIUS ────────────────────────────────────────────────────
  // The tangent's direction is built as "the radius, turned a quarter turn",
  // so this checks the construction really is perpendicular rather than just
  // asserting the thing it was built from.
  const along = t + 90;
  const rad = (along * Math.PI) / 180;
  const end1 = { x: T.x + 40 * Math.cos(rad), y: T.y - 40 * Math.sin(rad) };
  const end2 = { x: T.x - 40 * Math.cos(rad), y: T.y + 40 * Math.sin(rad) };
  const O = { x: CIRCLE.cx, y: CIRCLE.cy };
  close(angleAt(T, O, end1), 90, "the tangent meets the radius at 90 degrees", 1e-7);

  // ── THE TANGENT HAS TO FIT ON THE CANVAS ────────────────────────────────
  // The far end of a tangent sits √(44² + h²) from the centre, and the canvas
  // only gives 64 either way. At the half-length the diagrams first used, the
  // worst angle left three tenths of a unit — a clipped line waiting to happen.
  for (const half of [40, 38]) {
    for (const s2 of [-half, half]) {
      const x = T.x + s2 * Math.cos(rad);
      const y = T.y - s2 * Math.sin(rad);
      ok(
        x >= 2 && x <= 218 && y >= 2 && y <= 126,
        "the tangent stays on the canvas",
        `half ${half}: ${x.toFixed(1)},${y.toFixed(1)}`,
      );
    }
  }

  // Every point of the tangent line except T is strictly outside the circle —
  // which is what makes it a tangent rather than a chord.
  for (const s of [-40, -13, 13, 40]) {
    const x = T.x + s * Math.cos(rad);
    const y = T.y - s * Math.sin(rad);
    ok(
      Math.hypot(x - CIRCLE.cx, y - CIRCLE.cy) > CIRCLE.r,
      "the tangent touches the circle only at the point of contact",
    );
  }

  // ── THE ALTERNATE SEGMENT THEOREM ───────────────────────────────────────
  // Reproduce exactly the choice the component makes: the tangent ray on the
  // OPPOSITE side of the chord from B. Then check the resulting angle really
  // does equal the inscribed angle at B — which is the theorem, and which the
  // component must never be allowed to "prove" by picking whichever matched.
  const sideB = sideOfLine(T, A, B);
  ok(sideB !== 0, "B is not on the chord itself");
  const towards = sideOfLine(T, A, end1) !== sideB ? end1 : end2;

  const tangentChord = angleAt(T, towards, A);
  const inAlternate = angleAt(B, T, A);
  close(tangentChord, inAlternate, "tangent-chord equals the angle in the alternate segment", 1e-6);

  // And the OTHER tangent ray gives the supplement, so picking the wrong one
  // would be visibly wrong rather than silently close.
  const other = towards === end1 ? end2 : end1;
  close(angleAt(T, other, A) + tangentChord, 180, "the two tangent-chord angles add to 180", 1e-6);
}

console.log("Checking the drag constraints...");

for (let i = 0; i < 20000; i += 1) {
  // keepClear must actually leave the gap, from wherever it started.
  const others = [randomAngle(), randomAngle()];
  const kept = keepClear(randomAngle(), others, 8);
  for (const other of others) {
    // A point squeezed between two neighbours less than 2×gap apart cannot
    // satisfy both; the function moves it clear of the last one it checks,
    // which keeps the figure drawable. Only assert the achievable case.
    const room = Math.abs(norm180(others[0] - others[1]));
    if (room > 17) {
      ok(
        Math.abs(norm180(kept - other)) > 8 - 1e-9,
        "keepClear leaves the requested gap",
        `${kept.toFixed(2)} vs ${other.toFixed(2)}`,
      );
    }
  }
  ok(kept >= 0 && kept < 360, "keepClear returns a normalised angle", `${kept}`);

  // clampBetween must keep a corner strictly between its neighbours, which is
  // what stops the quadrilateral turning into a bow tie.
  const after = randomAngle();
  const span = 40 + random() * 280;
  const before = after + span;
  const clamped = clampBetween(randomAngle(), after, before, 8);
  const offset = norm360(clamped - after);
  ok(
    offset >= 8 - 1e-9 && offset <= span - 8 + 1e-9,
    "clampBetween keeps a corner between its neighbours",
    `offset ${offset.toFixed(3)} in a span of ${span.toFixed(3)}`,
  );
}

console.log("Checking the round trip from a dragged point back to an angle...");

for (let i = 0; i < 5000; i += 1) {
  const deg = randomAngle();
  close(angleOf(onCircle(deg)), norm360(deg), "dragging to a point recovers its angle", 1e-9);
  // Dragging anywhere on the ray from the centre lands on the same angle, which
  // is what lets a finger slightly off the rim still move the point sensibly.
  const r = (deg * Math.PI) / 180;
  for (const distance of [8, 30, 70, 140]) {
    const off = { x: CIRCLE.cx + distance * Math.cos(r), y: CIRCLE.cy - distance * Math.sin(r) };
    close(angleOf(off), norm360(deg), "a drag off the rim still picks the right angle", 1e-9);
  }
}

console.log("Checking the label placement and the right-angle mark...");

for (let i = 0; i < 2000; i += 1) {
  const from = randomAngle();
  const delta = (random() - 0.5) * 700;
  const to = from + delta;
  const at = bisectorPoint({ x: 0, y: 0 }, from, to, 20);
  close(Math.hypot(at.x, at.y), 20, "a label sits at the radius it was asked for", 1e-9);
  // The bisector of a REFLEX sweep must point into the reflex side, not the
  // short side — labelling a 240° angle on the 120° side is the same class of
  // mistake as drawing the arc the wrong way round.
  const mid = norm360((from + to) / 2);
  close(norm360((Math.atan2(-at.y, at.x) * 180) / Math.PI), mid, "the label is on the bisector", 1e-7);

  // The right-angle mark is a real square: two equal sides at a right angle.
  const v = { x: 50, y: 50 };
  const d1 = randomAngle();
  const mark = rightAngleMark(v, d1, d1 + 90, 9);
  const nums = mark.match(/-?\d+\.\d+/g)!.map(Number);
  const p1 = { x: nums[0], y: nums[1] };
  const p3 = { x: nums[4], y: nums[5] };
  // Read back out of the path STRING, which rounds to 2dp — so the tolerance
  // here is what 2dp can express (0.005 per coordinate), not what the maths is
  // capable of. At the size these render, 0.01 of a unit is a fortieth of a
  // pixel; tightening this would only be testing Number.prototype.toFixed.
  close(Math.hypot(p1.x - v.x, p1.y - v.y), 9, "the right-angle mark's first arm is the right length", 0.02);
  close(Math.hypot(p3.x - v.x, p3.y - v.y), 9, "the right-angle mark's second arm is the right length", 0.02);
  close(angleAt(v, p1, p3), 90, "the right-angle mark really is a right angle", 0.2);
}

console.log("Checking that a label always fits inside its own angle...");

// The defect this guards against was found by rendering it: a 110-degree angle
// with a fixed label radius printed its number straight through the chord it
// was standing on. The rule is that the number sits outside its own arc and
// inside its own angle, whatever the shape has been dragged into.
for (let i = 0; i < 20000; i += 1) {
  const v = randomAngle();
  const a = randomAngle();
  const b = randomAngle();
  if (Math.abs(norm180(v - a)) < 8 || Math.abs(norm180(v - b)) < 8 || Math.abs(norm180(a - b)) < 8) {
    continue;
  }
  const V = coordsOf(v);
  const A = coordsOf(a);
  const B = coordsOf(b);

  const fit = angleLabelPlacement(V, A, B, 15);
  const room = Math.min(bisectorReach(V, A, B), distance(V, A), distance(V, B));

  ok(fit.arc > 0 && Number.isFinite(fit.arc), "the arc has a real radius", `${fit.arc}`);
  ok(fit.label > fit.arc, "the number sits outside its own arc", `label ${fit.label.toFixed(2)} vs arc ${fit.arc.toFixed(2)}`);
  ok(
    fit.label < room || room < 12,
    "the number sits inside its own angle",
    `label ${fit.label.toFixed(2)} in room ${room.toFixed(2)}`,
  );
  ok(fit.arc <= 15 + 1e-9, "the arc never grows past the size asked for", `${fit.arc}`);

  // bisectorReach must genuinely land on the segment AB, not past either end.
  const reach = bisectorReach(V, A, B);
  if (Number.isFinite(reach)) {
    const sweep = interiorSweep(V, A, B);
    const mid = (((sweep.from + sweep.to) / 2) * Math.PI) / 180;
    const hit = { x: V.x + reach * Math.cos(mid), y: V.y - reach * Math.sin(mid) };
    close(
      distance(A, hit) + distance(hit, B),
      distance(A, B),
      "the bisector meets the far side between its two ends",
      1e-6,
    );
  }
}

console.log("Checking that labels landing on each other are separated...");

// The property that matters is that no two TEXT BOXES overlap — measuring the
// distance between their centres is what the first version got wrong, and it
// let two numbers print through each other while passing its own test.
// The same box the components use, and it is a MEASURED size: getBBox() in a
// real browser reports "127.5°" — the widest value these diagrams print — as
// 28.25 × 11.84 units on this canvas.
const W = 34;
const H = 13;
function boxesClear(points: { x: number; y: number }[]) {
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const dx = Math.abs(points[j].x - points[i].x);
      const dy = Math.abs(points[j].y - points[i].y);
      if (dx < W - 1e-9 && dy < H - 1e-9) return false;
    }
  }
  return true;
}

// The domain this function actually operates on: label positions are computed
// along an angle's bisector from a vertex ON the circle, so they always land
// within the circle's own bounding box, never off the side of the canvas.
// Feeding it x = 233 tests nothing a diagram can reach — and the function
// rightly prefers dragging such a label back on screen to separating it, which
// is asserted separately below.
function somewhereALabelCanBe() {
  return { x: 60 + random() * 100, y: 22 + random() * 84 };
}

for (let i = 0; i < 10000; i += 1) {
  // Two labels, often overlapping.
  const a = somewhereALabelCanBe();
  const b = { x: a.x + (random() - 0.5) * 40, y: a.y + (random() - 0.5) * 20 };
  const out = separateLabels([a, b], [], W, H);
  ok(boxesClear(out), "two labels no longer overlap");
  // Each label stays over its own angle: it may only move vertically, and only
  // by enough to clear. A label that wandered sideways would sit on the wrong
  // angle, which is worse than overlapping.
  ok(distance(out[0], a) <= 34, "a label stays near the angle it belongs to", `${distance(out[0], a).toFixed(1)}`);
  ok(distance(out[1], b) <= 34, "and so does the other one", `${distance(out[1], b).toFixed(1)}`);

  // Four labels, the cyclic quadrilateral's case, where separating one pair can
  // push a label into a third.
  const four = [0, 1, 2, 3].map(() => ({ x: 100 + (random() - 0.5) * 30, y: 60 + (random() - 0.5) * 20 }));
  ok(boxesClear(separateLabels(four, [], W, H)), "four crowded labels all end up clear");
}

// A number half off the canvas is not merely hard to read, it is not there —
// the defect that hit over half the static diagrams once. So being pulled back
// on screen outranks being separated, and this is where that is stated.
for (let i = 0; i < 4000; i += 1) {
  const stray = { x: 4 + random() * 6, y: 2 + random() * 8 };
  const [fixed] = separateLabels([stray], [], W, H);
  ok(fixed.y - H / 2 >= 0, "a label near the top edge is pulled fully on screen", `${fixed.y}`);
  const low = { x: 110, y: 122 + random() * 6 };
  const [fixedLow] = separateLabels([low], [], W, H);
  ok(fixedLow.y + H / 2 <= 128, "and so is one near the bottom edge", `${fixedLow.y}`);
}
{
  // Already clear: left exactly alone rather than nudged anyway.
  const out = separateLabels([{ x: 40, y: 64 }, { x: 160, y: 64 }], [], W, H);
  ok(out[0].y === 64 && out[1].y === 64, "labels that already clear each other are not moved");
  ok(out[0].x === 40 && out[1].x === 160, "nor moved sideways");
  // Exactly coincident: still separated rather than both pushed the same way.
  const same = separateLabels([{ x: 110, y: 64 }, { x: 110, y: 64 }], [], W, H);
  ok(boxesClear(same), "two labels in exactly the same place are separated");
}

console.log("Checking that a label never ends up under a handle...");

// The second version of the overlap bug: labels cleared each other and then sat
// on top of a draggable dot instead. A handle is 10 units of solid blue; a
// number printed over one is exactly as unreadable as one printed over another
// number.
const HANDLE = 10;
function clearOfHandles(labels: { x: number; y: number }[], handles: { x: number; y: number }[]) {
  for (const l of labels) {
    for (const h of handles) {
      const cx = Math.max(l.x - W / 2, Math.min(h.x, l.x + W / 2));
      const cy = Math.max(l.y - H / 2, Math.min(h.y, l.y + H / 2));
      if (Math.hypot(h.x - cx, h.y - cy) < HANDLE - 1e-6) return false;
    }
  }
  return true;
}

for (let i = 0; i < 10000; i += 1) {
  const handles = [0, 1, 2].map(() => coordsOf(randomAngle()));
  const labels = [0, 1].map(somewhereALabelCanBe);
  const out = separateLabels(labels, handles, W, H, HANDLE);
  ok(clearOfHandles(out, handles), "a label is moved out from under a handle");
  ok(boxesClear(out), "and the labels still clear each other afterwards");
  for (let k = 0; k < out.length; k += 1) {
    ok(distance(out[k], labels[k]) <= 34, "and stays near the angle it belongs to");
  }
}

console.log("Checking Snell's law...");

// The refraction diagram claims a scale drawing, not a suggestive one, so the
// angle it draws has to satisfy n1 sin(θ1) = n2 sin(θ2) exactly. Checked here
// by putting the result back INTO the law rather than by recomputing it the
// same way — which would only prove the function is deterministic.
for (let i = 0; i < 20000; i += 1) {
  const theta1 = random() * 89.9;
  const n1 = 1 + random() * 1.5;
  const n2 = 1 + random() * 1.5;
  const theta2 = refract(theta1, n1, n2);

  if (theta2 === null) {
    // No refracted ray: that is total internal reflection, and it can only
    // happen going from denser to less dense, past the critical angle.
    ok(n1 > n2, "light only fails to emerge when leaving the denser material");
    const critical = criticalAngle(n1, n2);
    ok(critical !== null && theta1 > critical - 1e-9, "and only past the critical angle");
    continue;
  }

  close(
    n1 * Math.sin((theta1 * Math.PI) / 180),
    n2 * Math.sin((theta2 * Math.PI) / 180),
    "the refracted angle satisfies Snell's law",
    1e-9,
  );

  // The direction of the bend is the thing students get backwards, so assert
  // it explicitly rather than trusting the arithmetic to imply it.
  if (n2 > n1) {
    ok(theta2 <= theta1 + 1e-9, "into a denser material, the ray bends TOWARDS the normal");
  } else if (n2 < n1) {
    ok(theta2 >= theta1 - 1e-9, "into a less dense material, it bends AWAY from the normal");
  } else {
    close(theta2, theta1, "with no change of material, it does not bend at all", 1e-9);
  }
}
{
  // The values the diagram itself uses: air into crown glass at 52 degrees.
  const inGlass = refract(52, 1, 1.5);
  ok(inGlass !== null, "air into glass always gives a refracted ray");
  close(inGlass as number, 31.6912, "52 degrees in air is about 31.7 in glass", 1e-3);
  // And a slab puts it back out at the angle it came in — the "emerges
  // parallel" claim the caption makes.
  const backOut = refract(inGlass as number, 1.5, 1);
  close(backOut as number, 52, "and it leaves the far side at the angle it arrived", 1e-9);
  // Glass to air has a critical angle around 41.8 degrees.
  close(criticalAngle(1.5, 1) as number, 41.8103, "the critical angle for glass is about 41.8", 1e-3);
  ok(refract(45, 1.5, 1) === null, "past it, the light does not get out at all");
  ok(criticalAngle(1, 1.5) === null, "and there is no critical angle going the other way");
}

console.log("Checking that a printed sum actually adds up...");

// The defect: "133° = 48.1° + 84.8°", printed by a diagram whose geometry was
// exact to nine decimal places. The parts rounded down and the total rounded
// up. Whatever else is true, the numbers on the screen have to add up, because
// a student checking the arithmetic has no way to know which half is at fault.
for (let i = 0; i < 20000; i += 1) {
  const count = 2 + Math.floor(random() * 3);
  const parts = [];
  for (let k = 0; k < count; k += 1) parts.push(random() * 180);
  const total = parts.reduce((n, p) => n + p, 0);

  const shown = consistentSum(total, parts);
  const asNumber = (s: string) => Number(s.replace("°", ""));
  const partsSum = shown.parts.reduce((n, p) => n + asNumber(p), 0);
  close(partsSum, asNumber(shown.total), "the printed parts add to the printed total", 1e-9);
  ok(shown.parts.length === parts.length, "every part is printed");

  // And the printed values are still the real ones, not something invented to
  // make the line balance.
  for (let k = 0; k < parts.length; k += 1) {
    ok(
      Math.abs(asNumber(shown.parts[k]) - parts[k]) < 0.51,
      "a printed part is still the value it stands for",
      `${shown.parts[k]} vs ${parts[k].toFixed(4)}`,
    );
  }
  ok(Math.abs(asNumber(shown.total) - total) < 0.51, "and so is the printed total");
}
{
  // The exact case that was wrong on screen.
  const shown = consistentSum(132.954592, [48.12213, 84.832461]);
  const sum = shown.parts.reduce((n, p) => n + Number(p.replace("°", "")), 0);
  close(sum, Number(shown.total.replace("°", "")), "the exterior-angle line now balances");
  // A tidy arrangement still prints tidily rather than gaining decimals it
  // does not need.
  const tidy = consistentSum(180, [128, 52]);
  ok(tidy.total === "180°" && tidy.parts[0] === "128°", "whole degrees stay whole", tidy.total);
}

console.log("Checking that a handle is never drawn off the canvas...");

// The grab area is 18 units of invisible circle, and SVG clips past the
// viewBox — so a handle near an edge silently loses part of its own touch
// target. Measured rather than eyeballed, because the missing part is
// transparent.
for (let i = 0; i < 20000; i += 1) {
  const from = { x: 20 + random() * 180, y: 20 + random() * 84 };
  const deg = randomAngle();
  const r = (deg * Math.PI) / 180;
  const dir = { x: Math.cos(r), y: -Math.sin(r) };
  const max = 20 + random() * 120;

  const t = reachInside(from, dir, max, HANDLE_BOX);
  const at = { x: from.x + dir.x * t, y: from.y + dir.y * t };

  ok(t >= 0 && t <= max + 1e-9, "never further than asked for", `${t} of ${max}`);
  ok(
    at.x >= HANDLE_BOX.left - 1e-6 &&
      at.x <= HANDLE_BOX.right + 1e-6 &&
      at.y >= HANDLE_BOX.top - 1e-6 &&
      at.y <= HANDLE_BOX.bottom + 1e-6,
    "and always lands somewhere a whole handle fits",
    `${at.x.toFixed(2)},${at.y.toFixed(2)}`,
  );
  // The full distance is used whenever it is available — the handle is not
  // dragged in towards the middle for no reason.
  const full = { x: from.x + dir.x * max, y: from.y + dir.y * max };
  const fullFits =
    full.x >= HANDLE_BOX.left && full.x <= HANDLE_BOX.right &&
    full.y >= HANDLE_BOX.top && full.y <= HANDLE_BOX.bottom;
  if (fullFits) close(t, max, "and goes the whole way when the whole way fits", 1e-9);
}
{
  // The whole handle, not just its centre: 18 units of grab area either side.
  const box = HANDLE_BOX;
  ok(box.left >= 18 && box.top >= 18, "the box insets by the grab radius");
  ok(box.right <= 220 - 18 && box.bottom <= 124 - 18, "on the far sides too");
}

console.log("Checking how angles are written out...");

ok(degrees(90) === "90°", "a whole number of degrees has no decimal point", degrees(90));
ok(degrees(90.04) === "90°", "a value that rounds to a whole number prints as one", degrees(90.04));
ok(degrees(47.25) === "47.3°", "a fraction of a degree keeps one decimal place", degrees(47.25));
ok(degrees(-0.001) === "0°", "a value a hair below zero never prints as minus zero", degrees(-0.001));
ok(degrees(179.96) === "180°", "a value just under 180 prints as 180", degrees(179.96));

// ─── Named edge cases: the arrangements that break naive implementations ────

console.log("Checking the specific arrangements that break a naive version...");

// P exactly opposite the midpoint of a semicircular chord: the centre angle is
// exactly 180, the boundary between "reflex" and "not" where a > or >= differs.
{
  const { atCentre, atEdge } = inscribedAngle(0, 180, 90);
  close(atCentre, 180, "a chord through the centre gives a straight angle at the centre");
  close(atEdge, 90, "and a right angle at the circumference");
}

// A chord whose ends straddle 0°/360°, where subtracting bearings wraps.
{
  const { atCentre, atEdge } = inscribedAngle(350, 10, 180);
  close(atCentre, 20, "a chord straddling zero degrees still measures 20 at the centre");
  close(atEdge, 10, "and 10 at the circumference");
}

// The reflex case, stated concretely: a 20° arc with P standing ON it means the
// centre angle is the other 340°.
{
  const { atCentre, atEdge } = inscribedAngle(350, 10, 0);
  close(atCentre, 340, "P on the minor arc makes the centre angle reflex");
  close(atEdge, 170, "and the angle at the edge is half of the reflex angle");
}

// arcAwayFrom must return a sweep the drawing code can use directly: a clockwise
// one when it goes clockwise, and a difference over 180 for a reflex angle.
{
  const away = arcAwayFrom(350, 10, 0);
  close(Math.abs(away.to - away.from), 340, "a reflex sweep spans more than 180 degrees");
  ok(away.to < away.from, "and runs clockwise, so SVG draws it the right way round");
}

// interiorSweep across the 0/360 boundary.
{
  const here = coordsOf(90);
  const prev = coordsOf(355);
  const next = coordsOf(185);
  close(
    interiorSweep(here, prev, next).size,
    angleByCosineRule(here, prev, next),
    "interiorSweep is right across the zero boundary",
    1e-7,
  );
}

// clampBetween with neighbours too close to fit the gap: it must still return
// something drawable rather than an angle outside the span or a NaN.
{
  const squeezed = clampBetween(200, 0, 10, 8);
  ok(Number.isFinite(squeezed), "a corner with no room still gets a real angle", `${squeezed}`);
  const offset = norm360(squeezed - 0);
  ok(offset >= 0 && offset <= 10, "and stays inside what room there is", `${offset}`);
}

// angleAt with a degenerate vertex must not produce NaN and take the readout
// with it — the acos clamp.
{
  ok(Number.isFinite(angleAt({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 })), "collinear points give a real angle");
  close(angleAt({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }), 0, "collinear the same way is zero degrees");
  close(angleAt({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 0 }), 180, "collinear opposite ways is 180 degrees");
  close(angleAt({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }), 0, "a zero-length arm does not produce NaN");
}

// Every point the diagrams can draw has to stay inside the canvas, or a label
// silently clips — the defect that hit over half the static diagrams once.
{
  const viewW = 220;
  const viewH = 128;
  for (let i = 0; i < 720; i += 1) {
    const p = onCircle(i / 2);
    ok(
      p.x >= 0 && p.x <= viewW && p.y >= 0 && p.y <= viewH,
      "the circle fits the canvas",
      `${p.x.toFixed(1)},${p.y.toFixed(1)}`,
    );
    // Plus the room a handle's tag needs outside the circumference.
    const r = ((i / 2) * Math.PI) / 180;
    const tag = { x: p.x + 13 * Math.cos(r), y: p.y - 13 * Math.sin(r) + 4 };
    ok(
      tag.x >= 0 && tag.x <= viewW && tag.y >= 0 && tag.y <= viewH,
      "a point's label fits the canvas too",
      `${tag.x.toFixed(1)},${tag.y.toFixed(1)}`,
    );
  }
}

// ─── exactRatio: the printed equation has to be the real one ────────────────
//
// This is the fix for "y = 0.67x + 1.67" on a line through (2, 3) and (8, 7).
// The property that matters is not "does it look tidy" but "does parsing the
// printed text back give the exact value" — so that is what is checked, over
// every pair of coordinates the diagram can actually produce.

/** Read back what a reader (or the browser check) would read. */
function parseRatio(text: string): number {
  const parts = text.split("/");
  return parts.length === 2 ? Number(parts[0]) / Number(parts[1]) : Number(text);
}

{
  ok(exactRatio(4, 6) === "2/3", "two thirds prints as a fraction, not 0.67", exactRatio(4, 6));
  ok(exactRatio(3, 2) === "1.5", "a half prints as a decimal", exactRatio(3, 2));
  ok(exactRatio(6, 3) === "2", "an integer prints bare", exactRatio(6, 3));
  ok(exactRatio(0, 7) === "0", "zero prints as 0, never -0", exactRatio(0, 7));
  ok(exactRatio(1, -3) === "-1/3", "the sign lives on the numerator", exactRatio(1, -3));
  ok(exactRatio(-2, -4) === "0.5", "two negatives cancel", exactRatio(-2, -4));
  ok(exactRatio(1, 8) === "0.125", "eighths terminate", exactRatio(1, 8));
  ok(exactRatio(1, 40) === "0.025", "fortieths terminate", exactRatio(1, 40));
  ok(exactRatio(1, 7) === "1/7", "sevenths never terminate", exactRatio(1, 7));

  // The real domain: every pair of grid points the y = mx + c diagram allows.
  // Coordinates snap to halves in [0, 10]; the two x values are kept at least
  // one whole unit apart.
  for (let px2 = 0; px2 <= 20; px2 += 1) {
    for (let qx2 = 0; qx2 <= 20; qx2 += 1) {
      if (Math.abs(qx2 - px2) < 2) continue;
      for (let py2 = 0; py2 <= 20; py2 += 5) {
        for (let qy2 = 0; qy2 <= 20; qy2 += 5) {
          const riseHalves = qy2 - py2;
          const runHalves = qx2 - px2;
          const mText = exactRatio(riseHalves, runHalves);
          const cNumerator = py2 * runHalves - riseHalves * px2;
          const cText = exactRatio(Math.abs(cNumerator), 2 * Math.abs(runHalves));
          const m = parseRatio(mText);
          const c = (cNumerator * runHalves < 0 ? -1 : 1) * parseRatio(cText);

          // The whole point: the printed equation passes through BOTH printed
          // points, exactly — not to a tolerance a reader would have to grant.
          close(m * (px2 / 2) + c, py2 / 2, "the printed line passes through the first point", 1e-9);
          close(m * (qx2 / 2) + c, qy2 / 2, "the printed line passes through the second point", 1e-9);
          ok(!/e[+-]/i.test(mText) && !/e[+-]/i.test(cText), "no exponent notation leaks out", `${mText} / ${cText}`);
          // ⚠️ The first version of this asserted `!startsWith("-0")`, which
          // fails on the perfectly good gradient -0.3125. The thing that must
          // never appear is the VALUE negative zero, not a leading "-0.".
          ok(mText !== "-0" && cText !== "-0", "no negative zero on screen", `${mText} / ${cText}`);
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} geometry check${failures === 1 ? "" : "s"} FAILED out of ${checks}.`);
  process.exit(1);
}

console.log(`\nAll ${checks.toLocaleString("en-GB")} geometry checks passed.`);
