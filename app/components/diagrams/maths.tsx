// The maths diagrams.
//
// Drawing tools, colours and the captioned frame all come from ./shared.tsx;
// the registry that maps a name to one of these lives in ./index.tsx. Add a
// diagram here, then register it there — check-content.mjs fails the build if
// content names one that is not registered.

import {
  Angle,
  Axes,
  Fig,
  Frame,
  Mark,
  PLOT,
  RightAngle,
  angleFill,
  angleStroke,
  arc,
  arrowHead,
  gx,
  gy,
  label,
  line,
  plainLabel,
  plot,
  polar,
  ray,
  wedge,
  type DiagramProps,
} from "./shared";

// ─── Basic angle facts ──────────────────────────────────────────────────────

export function AnglesOnALine(props: DiagramProps) {
  return (
    <Frame
      caption={"a + b = 180°"}
      {...props}
      label="A straight line with a ray from a point on it, splitting the 180 degrees into two angles a and b"
    >
      <Fig d="M 20 80 L 200 80" />
      <Fig d={ray(100, 80, 72, 45)} />
      <Angle d={wedge(100, 80, 34, 45, 180)} />
      <Angle d={wedge(100, 80, 23, 0, 45)} />
      <circle cx={100} cy={80} r={2.6} className="fill-current opacity-60" />
      <text x={74} y={62} className={label}>a</text>
      <text x={130} y={73} className={label}>b</text>
    </Frame>
  );
}

export function AnglesAroundAPoint(props: DiagramProps) {
  const cx = 110;
  const cy = 58;
  const rays = [70, 155, 235, 320];
  const radii = [30, 20, 30, 20];
  const names = ["a", "b", "c", "d"];
  return (
    <Frame
      caption={"a + b + c + d = 360°"}
      {...props}
      label="Four rays from a single point, dividing the full turn into four angles a, b, c and d"
    >
      {rays.map((deg) => (
        <Fig key={deg} d={ray(cx, cy, 62, deg)} />
      ))}
      {rays.map((deg, i) => {
        const next = i === rays.length - 1 ? rays[0] + 360 : rays[i + 1];
        const mid = (deg + next) / 2;
        const [lx, ly] = polar(cx, cy, radii[i] + 12, mid);
        return (
          <g key={`a${deg}`}>
            {/* Outlined arcs, not filled wedges. Four filled wedges tile
                the whole turn, so their union is a solid disc and you cannot
                see where one angle stops and the next starts — which is the
                one thing this diagram exists to show. Found by rendering it. */}
            <Mark d={arc(cx, cy, radii[i], deg, next)} />
            <text x={lx} y={ly + 4} textAnchor="middle" className={label}>
              {names[i]}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={2.6} className="fill-current opacity-60" />
    </Frame>
  );
}

export function VerticallyOpposite(props: DiagramProps) {
  const cx = 110;
  const cy = 55;
  return (
    <Frame
      caption={"opposite angles are equal"}
      {...props}
      label="Two straight lines crossing, showing that the two pairs of opposite angles are equal"
    >
      <Fig d={`${ray(cx, cy, 88, 25)} ${ray(cx, cy, 88, 205)}`} />
      <Fig d={`${ray(cx, cy, 88, 145)} ${ray(cx, cy, 88, 325)}`} />
      {/* One arc each: the top and bottom angles are the equal pair. */}
      <Angle d={wedge(cx, cy, 14, 25, 145)} />
      <Angle d={wedge(cx, cy, 14, 205, 325)} />
      {/* Two arcs each: the left and right pair, equal to each other but not
          to the first pair. Matching arc COUNTS is how a textbook says "these
          two are equal", and unlike colour it still works in black and white
          on the printable sheet. */}
      <Mark d={arc(cx, cy, 20, 325, 385)} />
      <Mark d={arc(cx, cy, 25, 325, 385)} />
      <Mark d={arc(cx, cy, 20, 145, 205)} />
      <Mark d={arc(cx, cy, 25, 145, 205)} />
      <text x={106} y={18} className={label}>a</text>
      <text x={106} y={100} className={label}>a</text>
      <text x={168} y={62} className={label}>b</text>
      <text x={44} y={62} className={label}>b</text>
    </Frame>
  );
}

export function AnglesInATriangle(props: DiagramProps) {
  return (
    <Frame
      caption={"a + b + c = 180°"}
      {...props}
      label="A triangle with its three interior angles a, b and c marked"
    >
      <Fig d="M 30 92 L 190 92 L 120 26 Z" />
      <Angle d={wedge(30, 92, 26, 0, 37.9)} />
      <Angle d={wedge(190, 92, 26, 135, 180)} />
      <Angle d={wedge(120, 26, 22, 217.9, 315)} />
      <text x={57} y={86} className={label}>a</text>
      <text x={165} y={86} className={label}>b</text>
      <text x={115} y={54} className={label}>c</text>
    </Frame>
  );
}

// ─── Parallel lines ─────────────────────────────────────────────────────────
//
// All three share one figure: two parallel lines and a transversal cutting
// them. Only the shaded pair changes, which is the whole point — students mix
// these up precisely because the picture is the same every time and only the
// position of the pair differs.

const PARALLEL_TOP = 32;
const PARALLEL_BOTTOM = 86;
const CUT_LOWER = { x: 76.1, y: PARALLEL_BOTTOM };
const CUT_UPPER = { x: 128.9, y: PARALLEL_TOP };
const CUT_ANGLE = 43.5;

export function ParallelFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Fig d={`M 16 ${PARALLEL_TOP} L 204 ${PARALLEL_TOP}`} />
      <Fig d={`M 16 ${PARALLEL_BOTTOM} L 204 ${PARALLEL_BOTTOM}`} />
      <Fig d="M 55 105 L 150 15" />
      {/* The little arrowheads that mean "these lines are parallel". Students
          are expected to read them in the exam, so they belong here. */}
      <Mark d="M 34 27 L 41 32 L 34 37" />
      <Mark d={`M 34 ${PARALLEL_BOTTOM - 5} L 41 ${PARALLEL_BOTTOM} L 34 ${PARALLEL_BOTTOM + 5}`} />
      {children}
    </>
  );
}

export function ParallelCorresponding(props: DiagramProps) {
  return (
    <Frame
      caption={"corresponding — equal (F shape)"}
      {...props}
      label="Two parallel lines cut by a transversal, with the two equal corresponding angles shaded in the same position at each crossing, forming an F shape"
    >
      <ParallelFrame>
        <Angle d={wedge(CUT_LOWER.x, CUT_LOWER.y, 24, 0, CUT_ANGLE)} />
        <Angle d={wedge(CUT_UPPER.x, CUT_UPPER.y, 24, 0, CUT_ANGLE)} />
        <text x={104} y={82} className={label}>a</text>
        <text x={157} y={28} className={label}>a</text>
      </ParallelFrame>
    </Frame>
  );
}

export function ParallelAlternate(props: DiagramProps) {
  return (
    <Frame
      caption={"alternate — equal (Z shape)"}
      {...props}
      label="Two parallel lines cut by a transversal, with the two equal alternate angles shaded on opposite sides of the transversal between the lines, forming a Z shape"
    >
      <ParallelFrame>
        <Angle d={wedge(CUT_LOWER.x, CUT_LOWER.y, 26, CUT_ANGLE, 180)} />
        <Angle d={wedge(CUT_UPPER.x, CUT_UPPER.y, 26, 223.5, 360)} />
        <text x={52} y={76} className={label}>a</text>
        <text x={152} y={48} className={label}>a</text>
      </ParallelFrame>
    </Frame>
  );
}

export function ParallelCoInterior(props: DiagramProps) {
  return (
    <Frame
      caption={"co-interior — a + b = 180° (C shape)"}
      {...props}
      label="Two parallel lines cut by a transversal, with the two co-interior angles shaded on the same side of the transversal between the lines, forming a C shape"
    >
      <ParallelFrame>
        <Angle d={wedge(CUT_LOWER.x, CUT_LOWER.y, 26, CUT_ANGLE, 180)} />
        <Angle d={wedge(CUT_UPPER.x, CUT_UPPER.y, 26, 180, 223.5)} />
        <text x={52} y={76} className={label}>a</text>
        <text x={104} y={44} className={label}>b</text>
      </ParallelFrame>
    </Frame>
  );
}

// ─── Triangles and polygons ─────────────────────────────────────────────────

export function ExteriorAngleTriangle(props: DiagramProps) {
  return (
    <Frame
      caption={"the exterior angle = the two opposite interior angles"}
      {...props}
      label="A triangle with one side extended, showing that the exterior angle equals the sum of the two opposite interior angles"
    >
      <Fig d="M 35 88 L 150 88 L 95 28 Z" />
      <Fig d="M 150 88 L 205 88" dashed />
      <Angle d={wedge(35, 88, 24, 0, 45)} />
      <Angle d={wedge(95, 28, 20, 225, 312.5)} />
      <Angle d={wedge(150, 88, 30, 0, 132.5)} />
      <text x={60} y={83} className={label}>a</text>
      <text x={90} y={58} className={label}>b</text>
      <text x={160} y={70} className={label}>a + b</text>
    </Frame>
  );
}

export function PolygonExteriorAngles(props: DiagramProps) {
  // Generated rather than hand-drawn. Five exterior angles worked out by hand
  // is five chances to put an arc in the wrong place — and the loop also makes
  // the point the diagram is teaching: it does not matter how many sides there
  // are, because every extra side adds a turn and the total stays 360°.
  const cx = 110;
  const cy = 56;
  const r = 40;
  const n = 5;
  const points = Array.from({ length: n }, (_, i) => polar(cx, cy, r, 90 + (360 / n) * i));

  return (
    <Frame
      caption={"the exterior angles always add to 360°"}
      {...props}
      label="A regular pentagon with each side extended and the five exterior angles shaded, which together make one full turn"
    >
      <Fig d={`M ${points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L ")} Z`} />
      {points.map(([x, y], i) => {
        const [px] = points[(i + n - 1) % n];
        const [, py] = points[(i + n - 1) % n];
        const [nx, ny] = points[(i + 1) % n];
        // Direction the previous side was travelling, continued past this
        // corner — that extension is one arm of the exterior angle.
        const incoming = (Math.atan2(-(y - py), x - px) * 180) / Math.PI;
        const outgoing = (Math.atan2(-(ny - y), nx - x) * 180) / Math.PI;
        // The exterior angle is the TURN from one side to the next, and a turn
        // is only ever the short way round. atan2 returns values in (-180, 180],
        // so at one corner of the pentagon incoming and outgoing land on
        // opposite sides of that wrap and their raw difference came out as
        // -288° instead of +72° — arc() dutifully drew the 288° reflex angle,
        // which is exactly what the diagram was showing before this line.
        let turn = outgoing - incoming;
        while (turn > 180) turn -= 360;
        while (turn <= -180) turn += 360;
        return (
          <g key={i}>
            <Fig d={ray(x, y, 22, incoming)} dashed />
            <Angle d={wedge(x, y, 15, incoming, incoming + turn)} />
          </g>
        );
      })}
    </Frame>
  );
}

// ─── Area ───────────────────────────────────────────────────────────────────

export function TrianglePerpendicularHeight(props: DiagramProps) {
  return (
    <Frame
      caption={"area = ½ × base × perpendicular height"}
      {...props}
      label="A triangle with the perpendicular height drawn as a dashed line from the apex down to the base, meeting it at a right angle, next to the slanted side which is not the height"
    >
      <Fig d="M 30 92 L 185 92 L 120 30 Z" />
      <Fig d="M 120 30 L 120 92" dashed />
      <RightAngle x={120} y={92} dx={1} dy={-1} />
      <text x={98} y={64} textAnchor="end" className={label}>h</text>
      <text x={100} y={108} textAnchor="middle" className={plainLabel}>base</text>
      <text x={162} y={56} className={plainLabel}>not h</text>
    </Frame>
  );
}

export function TrapeziumArea(props: DiagramProps) {
  return (
    <Frame
      caption={"area = ½ × (a + b) × h"}
      {...props}
      label="A trapezium with its two parallel sides labelled a and b and the perpendicular height h drawn as a dashed line between them"
    >
      <Fig d="M 30 90 L 190 90 L 155 32 L 68 32 Z" />
      <Fig d="M 100 32 L 100 90" dashed />
      <RightAngle x={100} y={90} dx={1} dy={-1} />
      <Mark d="M 68 26 L 155 26" />
      <Mark d="M 30 96 L 190 96" />
      <text x={111} y={22} textAnchor="middle" className={label}>a</text>
      <text x={110} y={108} textAnchor="middle" className={label}>b</text>
      <text x={92} y={64} textAnchor="end" className={label}>h</text>
    </Frame>
  );
}


// ─── Circles ────────────────────────────────────────────────────────────────
//
// Circle theorems are the clearest case in the whole subject for this file
// existing. "The angle at the centre is twice the angle at the circumference"
// is not a sentence anybody has ever learned from. It is a caption.
//
// Every circle below uses the same centre and radius, so the theorems can be
// compared against each other — the exam skill is spotting WHICH one applies,
// and that is much harder when every picture is a different size.

const CIRCLE = { cx: 110, cy: 56, r: 40 };

function onCircle(degrees: number) {
  return polar(CIRCLE.cx, CIRCLE.cy, CIRCLE.r, degrees);
}

export function CircleFrame({ children }: { children: React.ReactNode }) {
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
      {children}
    </>
  );
}

function chord(a: number, b: number) {
  const [x1, y1] = onCircle(a);
  const [x2, y2] = onCircle(b);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

/** The angle, in maths degrees, from the point at `from` to the point at `to`. */
function bearingBetween(from: number, to: number) {
  const [x1, y1] = onCircle(from);
  const [x2, y2] = onCircle(to);
  return (Math.atan2(-(y2 - y1), x2 - x1) * 180) / Math.PI;
}

export function CircleParts(props: DiagramProps) {
  return (
    <Frame
      caption={"a tangent touches at exactly one point"} {...props} label="A circle labelled with its radius, diameter, chord and tangent">
      <CircleFrame>
        <Fig d={`M ${CIRCLE.cx} ${CIRCLE.cy} L ${onCircle(125)[0].toFixed(1)} ${onCircle(125)[1].toFixed(1)}`} />
        <Fig d={chord(0, 180)} />
        <Fig d={chord(300, 240)} />
        <Fig d="M 150 96 L 190 16" />
        <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={2.6} className="fill-current opacity-60" />
        {/* Every one of these sat ON the line it was naming until the
            diagrams were rendered and looked at. They are now pushed clear:
            radius above its own line, diameter below the horizontal, chord
            outside the circle with a leader of white space. */}
        <text x={62} y={26} textAnchor="middle" className={plainLabel}>radius</text>
        <text x={104} y={74} className={plainLabel}>diameter</text>
        <text x={96} y={108} textAnchor="middle" className={plainLabel}>chord</text>
        <text x={172} y={40} className={plainLabel}>tangent</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleAngleAtCentre(props: DiagramProps) {
  const A = 210;
  const B = 330;
  const P = 90;
  const [ax, ay] = onCircle(A);
  const [bx, by] = onCircle(B);
  const [px, py] = onCircle(P);
  return (
    <Frame
      caption={"angle at the centre = twice the angle at the edge"}
      {...props}
      label="A circle where the angle subtended at the centre by a chord is twice the angle subtended at the circumference by the same chord"
    >
      <CircleFrame>
        <Fig d={`M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${CIRCLE.cx} ${CIRCLE.cy} L ${bx.toFixed(1)} ${by.toFixed(1)}`} />
        <Fig d={`M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${px.toFixed(1)} ${py.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`} />
        <Angle d={wedge(CIRCLE.cx, CIRCLE.cy, 18, A, B - 360)} />
        <Angle d={wedge(px, py, 22, bearingBetween(P, A), bearingBetween(P, B))} />
        <text x={110} y={88} textAnchor="middle" className={label}>2x</text>
        <text x={110} y={45} textAnchor="middle" className={label}>x</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleSemicircle(props: DiagramProps) {
  const [ax, ay] = onCircle(180);
  const [bx, by] = onCircle(0);
  const [px, py] = onCircle(70);
  return (
    <Frame
      caption={"the angle in a semicircle is 90°"}
      {...props}
      label="A triangle drawn on a diameter of a circle, with the angle at the circumference marked as a right angle"
    >
      <CircleFrame>
        <Fig d={chord(180, 0)} />
        <Fig d={`M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${px.toFixed(1)} ${py.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`} />
        <Angle d={wedge(px, py, 13, bearingBetween(70, 0), bearingBetween(70, 180))} />
        <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={2.6} className="fill-current opacity-60" />
        <text x={116} y={48} textAnchor="middle" className={label}>90°</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleSameSegment(props: DiagramProps) {
  const A = 200;
  const B = 340;
  return (
    <Frame
      caption={"angles in the same segment are equal"}
      {...props}
      label="Two angles standing on the same chord from different points on the same arc, marked as equal"
    >
      <CircleFrame>
        <Fig d={chord(A, B)} />
        {[60, 115].map((P) => {
          const [ax, ay] = onCircle(A);
          const [bx, by] = onCircle(B);
          const [px, py] = onCircle(P);
          return (
            <g key={P}>
              <Fig d={`M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${px.toFixed(1)} ${py.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`} />
              <Angle d={wedge(px, py, 15, bearingBetween(P, B), bearingBetween(P, A))} />
            </g>
          );
        })}
        <text x={124} y={40} className={label}>x</text>
        <text x={80} y={44} className={label}>x</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleCyclicQuadrilateral(props: DiagramProps) {
  const pts = [55, 145, 215, 325];
  const [p0, p1, p2, p3] = pts.map((d) => onCircle(d));
  return (
    <Frame
      caption={"opposite angles: a + b = 180°"}
      {...props}
      label="A quadrilateral with all four corners on a circle, with one pair of opposite angles marked as adding to 180 degrees"
    >
      <CircleFrame>
        <Fig
          d={`M ${p0[0].toFixed(1)} ${p0[1].toFixed(1)} L ${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L ${p2[0].toFixed(1)} ${p2[1].toFixed(1)} L ${p3[0].toFixed(1)} ${p3[1].toFixed(1)} Z`}
        />
        <Angle d={wedge(p0[0], p0[1], 15, bearingBetween(55, 145), bearingBetween(55, 325) + 360)} />
        <Angle d={wedge(p2[0], p2[1], 15, bearingBetween(215, 325), bearingBetween(215, 145))} />
        <text x={144} y={44} className={label}>a</text>
        <text x={68} y={82} className={label}>b</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleTangentRadius(props: DiagramProps) {
  const [tx, ty] = onCircle(0);
  return (
    <Frame
      caption={"a tangent meets a radius at 90°"}
      {...props}
      label="A tangent meeting a circle, with the radius drawn to the point of contact and a right angle marked between them"
    >
      <CircleFrame>
        <Fig d={`M ${CIRCLE.cx} ${CIRCLE.cy} L ${tx.toFixed(1)} ${ty.toFixed(1)}`} />
        <Fig d={`M ${tx.toFixed(1)} 14 L ${tx.toFixed(1)} 98`} />
        <RightAngle x={tx} y={ty} dx={-1} dy={-1} />
        <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={2.6} className="fill-current opacity-60" />
        <text x={96} y={72} className={plainLabel}>radius</text>
        <text x={156} y={24} className={plainLabel}>tangent</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleAlternateSegment(props: DiagramProps) {
  const T = 270;
  const A = 20;
  const B = 160;
  const [tx, ty] = onCircle(T);
  const [ax, ay] = onCircle(A);
  const [bx, by] = onCircle(B);
  return (
    <Frame
      caption={"tangent–chord = the angle in the alternate segment"}
      {...props}
      label="The angle between a tangent and a chord, marked equal to the angle in the alternate segment"
    >
      <CircleFrame>
        <Fig d={`M 46 ${ty.toFixed(1)} L 174 ${ty.toFixed(1)}`} />
        <Fig d={`M ${tx.toFixed(1)} ${ty.toFixed(1)} L ${ax.toFixed(1)} ${ay.toFixed(1)}`} />
        <Fig d={`M ${bx.toFixed(1)} ${by.toFixed(1)} L ${ax.toFixed(1)} ${ay.toFixed(1)}`} />
        <Fig d={`M ${bx.toFixed(1)} ${by.toFixed(1)} L ${tx.toFixed(1)} ${ty.toFixed(1)}`} />
        <Angle d={wedge(tx, ty, 20, 0, bearingBetween(T, A))} />
        <Angle d={wedge(bx, by, 16, bearingBetween(B, T), bearingBetween(B, A))} />
        <text x={132} y={90} className={label}>x</text>
        <text x={78} y={54} className={label}>x</text>
      </CircleFrame>
    </Frame>
  );
}

export function CircleSectorArc(props: DiagramProps) {
  return (
    <Frame
      caption={"arc = (θ ÷ 360) × circumference"}
      {...props}
      label="A shaded sector of a circle with the angle at the centre marked and the arc highlighted"
    >
      <CircleFrame>
        <path
          d={wedge(CIRCLE.cx, CIRCLE.cy, CIRCLE.r, 25, 115)}
          className={angleFill}
          stroke="none"
        />
        <Fig d={`M ${CIRCLE.cx} ${CIRCLE.cy} L ${onCircle(25)[0].toFixed(1)} ${onCircle(25)[1].toFixed(1)}`} />
        <Fig d={`M ${CIRCLE.cx} ${CIRCLE.cy} L ${onCircle(115)[0].toFixed(1)} ${onCircle(115)[1].toFixed(1)}`} />
        <path
          d={arc(CIRCLE.cx, CIRCLE.cy, CIRCLE.r, 25, 115)}
          className={angleStroke}
          strokeWidth={3}
          fill="none"
        />
        <Mark d={arc(CIRCLE.cx, CIRCLE.cy, 15, 25, 115)} />
        <text x={124} y={48} className={label}>θ</text>
        <text x={150} y={22} className={plainLabel}>arc</text>
      </CircleFrame>
    </Frame>
  );
}

// ─── Pythagoras and trigonometry ────────────────────────────────────────────

export function Pythagoras(props: DiagramProps) {
  return (
    <Frame
      caption={"a² + b² = c² — c is always the longest side"}
      {...props}
      label="A right-angled triangle with the two shorter sides labelled a and b and the hypotenuse labelled c"
    >
      <Fig d="M 45 92 L 165 92 L 45 26 Z" />
      <RightAngle x={45} y={92} dx={1} dy={-1} />
      <text x={105} y={107} textAnchor="middle" className={label}>b</text>
      <text x={34} y={62} textAnchor="end" className={label}>a</text>
      <text x={112} y={52} className={label}>c</text>
    </Frame>
  );
}

export function Sohcahtoa(props: DiagramProps) {
  return (
    <Frame
      caption={"opposite and adjacent are named from θ, not from the page"}
      {...props}
      label="A right-angled triangle with an angle marked, and the sides labelled opposite, adjacent and hypotenuse relative to that angle"
    >
      {/* The triangle is narrower than it looks like it should be, on purpose:
          "opposite" has to be written OUTSIDE the vertical side, and at the
          old width it ran off the edge of the box and rendered as "opposit". */}
      <Fig d="M 30 92 L 150 92 L 150 30 Z" />
      <RightAngle x={150} y={92} dx={-1} dy={-1} />
      <Angle d={wedge(30, 92, 26, 0, 27.3)} />
      <text x={60} y={86} className={label}>θ</text>
      <text x={90} y={107} textAnchor="middle" className={plainLabel}>adjacent</text>
      <text x={156} y={64} className={plainLabel}>opposite</text>
      <text x={82} y={52} textAnchor="middle" className={plainLabel}>hypotenuse</text>
    </Frame>
  );
}

export function SineRule(props: DiagramProps) {
  return (
    <Frame
      caption={"side a is opposite angle A"}
      {...props}
      label="A triangle with no right angle, showing that each side is labelled with the lower-case letter of the angle opposite it"
    >
      <Fig d="M 30 90 L 190 90 L 132 26 Z" />
      <Angle d={wedge(30, 90, 22, 0, 32.2)} />
      <Angle d={wedge(190, 90, 22, 132.2, 180)} />
      <Angle d={wedge(132, 26, 18, 209.3, 312.2)} />
      <text x={54} y={84} className={label}>A</text>
      <text x={168} y={84} className={label}>B</text>
      <text x={127} y={52} className={label}>C</text>
      <text x={110} y={105} textAnchor="middle" className={plainLabel}>c</text>
      <text x={166} y={54} className={plainLabel}>a</text>
      <text x={72} y={54} className={plainLabel}>b</text>
    </Frame>
  );
}

export function CosineRule(props: DiagramProps) {
  return (
    <Frame
      caption={"a² = b² + c² − 2bc cos A — a is opposite A"}
      {...props}
      label="A triangle with the angle A marked between the two known sides b and c, and side a opposite it"
    >
      <Fig d="M 30 90 L 190 90 L 132 26 Z" />
      <Angle d={wedge(30, 90, 24, 0, 32.2)} />
      <text x={56} y={84} className={label}>A</text>
      <text x={110} y={105} textAnchor="middle" className={plainLabel}>c</text>
      <text x={72} y={54} className={plainLabel}>b</text>
      <text x={166} y={54} className={label}>a</text>
    </Frame>
  );
}

// ─── Constructions and bearings ─────────────────────────────────────────────

export function PerpendicularBisector(props: DiagramProps) {
  return (
    <Frame
      caption={"keep the arcs — they are the method mark"}
      {...props}
      label="A line segment with compass arcs drawn from each end, crossing above and below, and the perpendicular bisector drawn through the crossings"
    >
      <Fig d="M 55 58 L 165 58" />
      <Mark d={arc(55, 58, 72, -55, 55)} />
      <Mark d={arc(165, 58, 72, 125, 235)} />
      <Fig d="M 110 12 L 110 104" dashed />
      <RightAngle x={110} y={58} dx={1} dy={-1} />
      <circle cx={55} cy={58} r={2.6} className="fill-current opacity-60" />
      <circle cx={165} cy={58} r={2.6} className="fill-current opacity-60" />
    </Frame>
  );
}

export function AngleBisector(props: DiagramProps) {
  return (
    <Frame
      caption={"the bisector cuts the angle into two equal halves"}
      {...props}
      label="An angle with compass arcs used to bisect it, and the bisector drawn from the vertex"
    >
      <Fig d={ray(45, 88, 150, 0)} />
      <Fig d={ray(45, 88, 150, 52)} />
      <Mark d={arc(45, 88, 46, -6, 58)} />
      <Mark d={arc(91, 88, 44, 0, 66)} />
      <Mark d={arc(73.3, 51.7, 44, -30, 30)} />
      <Fig d={ray(45, 88, 150, 26)} dashed />
      <Angle d={wedge(45, 88, 22, 0, 26)} />
      <Angle d={wedge(45, 88, 30, 26, 52)} />
    </Frame>
  );
}

export function Bearing(props: DiagramProps) {
  return (
    <Frame
      caption={"from north, clockwise, always three figures"}
      {...props}
      label="A bearing measured clockwise from a north line at point A to point B, written with three figures"
    >
      <Fig d="M 78 96 L 78 18" dashed />
      <Mark d="M 73 25 L 78 15 L 83 25" />
      <text x={78} y={12} textAnchor="middle" className={plainLabel}>N</text>
      <Fig d="M 78 96 L 172 60" />
      <Angle d={wedge(78, 96, 34, 21, 90)} />
      <Mark d={arc(78, 96, 34, 90, 21)} />
      <circle cx={78} cy={96} r={3} className="fill-current opacity-70" />
      <circle cx={172} cy={60} r={3} className="fill-current opacity-70" />
      <text x={68} y={104} textAnchor="end" className={plainLabel}>A</text>
      <text x={180} y={58} className={plainLabel}>B</text>
      <text x={104} y={62} className={label}>069°</text>
    </Frame>
  );
}

// ─── Probability ────────────────────────────────────────────────────────────

export function TreeDiagram(props: DiagramProps) {
  return (
    <Frame
      caption={"multiply along the branches, add down the ends"}
      {...props}
      label="A two-stage probability tree diagram, showing that probabilities multiply along a branch and each pair of branches adds to one"
    >
      <Fig d="M 26 58 L 84 30" />
      <Fig d="M 26 58 L 84 88" />
      <Fig d="M 88 28 L 150 14" />
      <Fig d="M 88 28 L 150 46" />
      <Fig d="M 88 90 L 150 72" />
      <Fig d="M 88 90 L 150 104" />
      <text x={48} y={36} className={plainLabel}>0.3</text>
      <text x={48} y={82} className={plainLabel}>0.7</text>
      <text x={112} y={14} className={plainLabel}>0.3</text>
      <text x={112} y={44} className={plainLabel}>0.7</text>
      <text x={112} y={74} className={plainLabel}>0.3</text>
      <text x={112} y={104} className={plainLabel}>0.7</text>
      <text x={156} y={17} className={label}>0.09</text>
    </Frame>
  );
}

export function VennTwoSets(props: DiagramProps) {
  return (
    <Frame
      caption={"every outcome sits in exactly one region"}
      {...props}
      label="A Venn diagram of two overlapping sets inside a rectangle, with the overlap and the outside region labelled"
    >
      <Fig d="M 12 10 L 208 10 L 208 100 L 12 100 Z" />
      <circle cx={84} cy={55} r={33} className={line} strokeWidth={2} fill="none" />
      <circle cx={136} cy={55} r={33} className={line} strokeWidth={2} fill="none" />
      <text x={62} y={59} textAnchor="middle" className={plainLabel}>A only</text>
      <text x={158} y={59} textAnchor="middle" className={plainLabel}>B only</text>
      <text x={110} y={59} textAnchor="middle" className={label}>both</text>
      <text x={30} y={92} className={plainLabel}>neither</text>
    </Frame>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// The registry. Content names a diagram; this is where the name becomes a
// picture. Adding one means adding it here and nowhere else.
// ════════════════════════════════════════════════════════════════════════════

// ─── Statistics ─────────────────────────────────────────────────────────────

export function BoxPlot(props: DiagramProps) {
  // The five-figure summary, drawn to scale on its own axis. The whole point
  // of a box plot is that the WIDTHS mean something — the box is the middle
  // half of the data — so these positions are the numbers underneath, not a
  // shape that looks about right.
  const min = 24;
  const q1 = 68;
  const med = 92;
  const q3 = 148;
  const max = 190;
  const mid = 44;
  return (
    <Frame
      caption={"the box holds the middle half of the data"}
      {...props}
      label="A box plot showing the minimum, lower quartile, median, upper quartile and maximum"
    >
      <Fig d={`M ${min} ${mid} L ${q1} ${mid}`} />
      <Fig d={`M ${q3} ${mid} L ${max} ${mid}`} />
      <Fig d={`M ${min} ${mid - 9} L ${min} ${mid + 9}`} />
      <Fig d={`M ${max} ${mid - 9} L ${max} ${mid + 9}`} />
      <path
        d={`M ${q1} ${mid - 16} L ${q3} ${mid - 16} L ${q3} ${mid + 16} L ${q1} ${mid + 16} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={1.8}
      />
      <Mark d={`M ${med} ${mid - 16} L ${med} ${mid + 16}`} />
      <text x={min} y={mid + 30} textAnchor="middle" className={plainLabel}>min</text>
      <text x={q1} y={mid + 30} textAnchor="middle" className={plainLabel}>Q1</text>
      <text x={med} y={mid - 22} textAnchor="middle" className={label}>median</text>
      <text x={q3} y={mid + 30} textAnchor="middle" className={plainLabel}>Q3</text>
      <text x={max} y={mid + 30} textAnchor="middle" className={plainLabel}>max</text>
      {/* This marker runs Q1 to Q3, not min to max. An earlier version spanned
          the whole plot while being labelled "interquartile range", which is a
          diagram that teaches the wrong definition — the IQR is the width of
          the BOX. Caught by rendering it and looking. */}
      <Mark d={`M ${q1} 78 L ${q3} 78`} />
      <Mark d={`M ${q1} 74 L ${q1} 82 M ${q3} 74 L ${q3} 82`} />
      <text x={(q1 + q3) / 2} y={95} textAnchor="middle" className={label}>
        interquartile range
      </text>
    </Frame>
  );
}

export function CumulativeFrequency(props: DiagramProps) {
  // Cumulative frequency curves are always plotted at the TOP of each class,
  // never the middle, and they only ever go up. Both of those are marks.
  const curve: (readonly [number, number])[] = [
    [0, 0], [14, 4], [28, 14], [42, 34], [56, 62], [70, 82], [84, 94], [100, 100],
  ];
  return (
    <Frame
      caption={"read the median across from half the total"}
      {...props}
      label="A cumulative frequency curve with a dashed line showing the median being read off at half of the total frequency"
    >
      <Axes x="value" y="c.f." />
      <path d={plot(curve)} className={angleStroke} strokeWidth={2} fill="none" strokeLinecap="round" />
      <Fig d={`M ${PLOT.left} ${gy(50)} L ${gx(50)} ${gy(50)} L ${gx(50)} ${PLOT.bottom}`} dashed />
      <text x={PLOT.left + 4} y={gy(50) - 5} className={label}>half the total</text>
      <text x={gx(50)} y={PLOT.bottom + 13} textAnchor="middle" className={label}>median</text>
    </Frame>
  );
}

export function Histogram(props: DiagramProps) {
  // The bars have DIFFERENT WIDTHS on purpose. That is the whole reason a
  // histogram exists and the whole reason the y-axis is frequency density
  // rather than frequency: it is the AREA of a bar that is the frequency.
  const bars = [
    { from: 0, to: 15, h: 30 },
    { from: 15, to: 30, h: 70 },
    { from: 30, to: 60, h: 88 },
    { from: 60, to: 100, h: 40 },
  ];
  return (
    <Frame
      caption={"area = frequency, so the y-axis is frequency density"}
      {...props}
      label="A histogram with bars of unequal width, showing that frequency is the area of a bar rather than its height"
    >
      <Axes x="value" y="f.d." />
      {bars.map((b) => (
        <path
          key={b.from}
          d={`M ${gx(b.from)} ${PLOT.bottom} L ${gx(b.from)} ${gy(b.h)} L ${gx(b.to)} ${gy(b.h)} L ${gx(b.to)} ${PLOT.bottom} Z`}
          className={`${angleFill} ${angleStroke}`}
          strokeWidth={1.6}
        />
      ))}
    </Frame>
  );
}

export function ScatterCorrelation(props: DiagramProps) {
  const points: (readonly [number, number])[] = [
    [6, 14], [14, 26], [20, 20], [28, 40], [34, 34], [44, 52],
    [50, 46], [58, 64], [66, 58], [74, 76], [84, 72], [92, 88],
  ];
  return (
    <Frame
      caption={"positive correlation — the line of best fit goes through the middle"}
      {...props}
      label="A scatter graph showing positive correlation with a line of best fit drawn through the points"
    >
      <Axes />
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={gx(x)} cy={gy(y)} r={2.6} className="fill-current opacity-60" />
      ))}
      <path d={plot([[2, 12], [96, 90]])} className={angleStroke} strokeWidth={2} fill="none" />
    </Frame>
  );
}

// ─── Straight-line graphs ───────────────────────────────────────────────────

export function GradientIntercept(props: DiagramProps) {
  // The step triangle is the point. A gradient is a number you MEASURE off the
  // graph — up divided by across — not one you guess from how steep it looks.
  return (
    <Frame
      caption={"gradient m = up ÷ across, and c is where it crosses"}
      {...props}
      label="A straight line graph showing the y-intercept c and a step triangle measuring the gradient as rise over run"
    >
      <Axes />
      <path d={plot([[0, 20], [96, 92]])} className={angleStroke} strokeWidth={2} fill="none" />
      <Fig d={`M ${gx(30)} ${gy(42)} L ${gx(66)} ${gy(42)} L ${gx(66)} ${gy(69)}`} dashed />
      <text x={gx(48)} y={gy(42) + 13} textAnchor="middle" className={plainLabel}>across</text>
      <text x={gx(66) + 5} y={gy(56)} className={plainLabel}>up</text>
      <circle cx={gx(0)} cy={gy(20)} r={3} className="fill-blue-600 dark:fill-blue-400" />
      <text x={gx(0) - 5} y={gy(20) + 4} textAnchor="end" className={label}>c</text>
    </Frame>
  );
}

export function ParallelPerpendicular(props: DiagramProps) {
  // Drawn in raw SVG coordinates rather than on the plot grid, because the
  // plot box is wider than it is tall — so a pair of lines that really are
  // perpendicular (gradients 2 and −½) come out looking like they are not.
  // A diagram whose whole job is to show a right angle has to be drawn on
  // equal scales. Gradients 1 and −1 for the same reason: 1 × −1 = −1 is
  // true, and it is the pair a reader can check by eye.
  const meet = [106, 52] as const;
  const u = 5.7; // 8 / root 2 — the diagonal right-angle marker
  return (
    <Frame
      caption={"parallel: same gradient. perpendicular: m × m = −1"}
      {...props}
      label="Two parallel lines of gradient 1 and a third line of gradient minus 1 crossing one of them at a right angle"
    >
      <Fig d="M 30 84 L 88 26" />
      <Fig d="M 74 84 L 132 26" />
      <path d="M 88 34 L 140 86" className={angleStroke} strokeWidth={2} fill="none" />
      <Mark
        d={`M ${meet[0] + u} ${meet[1] + u} L ${meet[0] + 2 * u} ${meet[1]} L ${meet[0] + u} ${meet[1] - u}`}
      />
      <text x={26} y={96} className={plainLabel}>m = 1</text>
      <text x={70} y={96} className={plainLabel}>m = 1</text>
      <text x={146} y={90} className={label}>m = −1</text>
    </Frame>
  );
}

// ─── Vectors and transformations ────────────────────────────────────────────

export function VectorAddition(props: DiagramProps) {
  const A = [30, 84] as const;
  const B = [110, 40] as const;
  const C = [190, 62] as const;
  const ang = (p: readonly [number, number], q: readonly [number, number]) =>
    (Math.atan2(-(q[1] - p[1]), q[0] - p[0]) * 180) / Math.PI;
  return (
    <Frame
      caption={"a then b gets you to the same place as a + b"}
      {...props}
      label="Two vectors a and b drawn nose to tail, with their sum drawn as a single vector from start to finish"
    >
      <Fig d={`M ${A[0]} ${A[1]} L ${B[0]} ${B[1]}`} />
      <Fig d={arrowHead(B[0], B[1], ang(A, B))} />
      <Fig d={`M ${B[0]} ${B[1]} L ${C[0]} ${C[1]}`} />
      <Fig d={arrowHead(C[0], C[1], ang(B, C))} />
      <path d={`M ${A[0]} ${A[1]} L ${C[0]} ${C[1]}`} className={angleStroke} strokeWidth={2} fill="none" />
      <Mark d={arrowHead(C[0], C[1], ang(A, C))} />
      <text x={62} y={56} className={plainLabel}>a</text>
      <text x={152} y={42} className={plainLabel}>b</text>
      <text x={104} y={82} className={label}>a + b</text>
    </Frame>
  );
}

export function TransformationReflection(props: DiagramProps) {
  return (
    <Frame
      caption={"every point is the same distance from the mirror line"}
      {...props}
      label="A triangle reflected in a vertical mirror line, with the image the same distance from the line as the object"
    >
      <Fig d="M 105 12 L 105 84" dashed />
      <Fig d="M 62 26 L 92 26 L 62 68 Z" />
      <path d="M 148 26 L 118 26 L 148 68 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <text x={105} y={98} textAnchor="middle" className={plainLabel}>mirror line x = 3</text>
    </Frame>
  );
}

export function TransformationRotation(props: DiagramProps) {
  // The centre is deliberately OUTSIDE the shape. With the centre on a corner
  // the object and its image share an edge and overlap into one unreadable
  // blob — which is exactly what the first version of this drawing did.
  //
  // The image is computed, not drawn by eye: a 90° anticlockwise turn about
  // (cx, cy) sends the offset (dx, dy) to (dy, −dx) on a screen whose y points
  // down. Drawing it by hand is how you end up with a "rotation" that isn't.
  const cx = 110;
  const cy = 80;
  const object = [
    [124, 60],
    [160, 60],
    [124, 30],
  ] as const;
  const image = object.map(([x, y]) => [cx + (y - cy), cy - (x - cx)] as const);
  const path = (pts: readonly (readonly [number, number])[]) =>
    `M ${pts.map((p) => p.join(" ")).join(" L ")} Z`;

  return (
    <Frame
      caption={"say the angle, the direction AND the centre"}
      {...props}
      label="A triangle rotated 90 degrees anticlockwise about a marked centre of rotation outside the shape"
    >
      <Fig d={path(object)} />
      <path d={path(image)} className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      {/* Rays to one matching pair of corners, with the turn marked between
          them. Sweeping a big arc across the whole picture put the arrowhead
          through both triangles; this shows the same 90° and touches nothing. */}
      <Fig d={`M ${cx} ${cy} L ${object[0][0]} ${object[0][1]}`} dashed />
      <Fig d={`M ${cx} ${cy} L ${image[0][0]} ${image[0][1]}`} dashed />
      <Mark d={arc(cx, cy, 15, 55, 145)} />
      <circle cx={cx} cy={cy} r={3.4} className="fill-blue-600 dark:fill-blue-400" />
      <text x={cx - 6} y={cy + 14} textAnchor="end" className={label}>centre</text>
      <text x={cx + 24} y={cy - 22} className={plainLabel}>90° anticlockwise</text>
    </Frame>
  );
}

export function TransformationTranslation(props: DiagramProps) {
  return (
    <Frame
      caption={"a column vector: across on top, up underneath"}
      {...props}
      label="A triangle translated by a column vector, with an arrow showing the movement"
    >
      <Fig d="M 26 30 L 62 30 L 26 62 Z" />
      <path d="M 128 46 L 164 46 L 128 78 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <Fig d="M 46 48 L 122 60" dashed />
      <Fig d={arrowHead(122, 60, -9)} />
      <text x={97} y={26} textAnchor="middle" className={label}>6 across, 2 down</text>
    </Frame>
  );
}

export function TransformationEnlargement(props: DiagramProps) {
  // The rays from the centre are what makes this an enlargement rather than a
  // "make it bigger". Every image point is exactly twice as far from the
  // centre as the point it came from.
  const c = [24, 84] as const;
  const small = [[62, 66], [86, 66], [62, 48]] as const;
  const big = [[100, 48], [148, 48], [100, 12]] as const;
  return (
    <Frame
      caption={"scale factor 2 — twice as far from the centre"}
      {...props}
      label="A triangle enlarged by scale factor 2 from a centre of enlargement, with rays drawn from the centre through matching corners"
    >
      {big.map((pt, i) => (
        <Fig key={i} d={`M ${c[0]} ${c[1]} L ${pt[0]} ${pt[1]}`} dashed />
      ))}
      <Fig d={`M ${small.map((p) => p.join(" ")).join(" L ")} Z`} />
      <path
        d={`M ${big.map((p) => p.join(" ")).join(" L ")} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={2}
      />
      <circle cx={c[0]} cy={c[1]} r={3.4} className="fill-blue-600 dark:fill-blue-400" />
      <text x={c[0] + 2} y={c[1] + 14} className={label}>centre</text>
    </Frame>
  );
}

// ─── Volume and surface area ────────────────────────────────────────────────

export function PrismCrossSection(props: DiagramProps) {
  return (
    <Frame
      caption={"volume = area of cross-section × length"}
      {...props}
      label="A triangular prism with the cross-section shaded, showing that its volume is the area of that cross-section multiplied by the length"
    >
      <path d="M 34 78 L 74 78 L 54 30 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <Fig d="M 34 78 L 130 60 M 74 78 L 170 60 M 54 30 L 150 12" />
      <Fig d="M 130 60 L 170 60 L 150 12 Z" />
      <Mark d="M 74 92 L 170 74" />
      <Mark d="M 74 88 L 74 96 M 170 70 L 170 78" />
      <text x={126} y={100} textAnchor="middle" className={plainLabel}>length</text>
      <text x={40} y={22} className={label}>cross-section</text>
    </Frame>
  );
}

export function Cylinder(props: DiagramProps) {
  return (
    <Frame
      caption={"volume = πr²h — the circle, then push it up"}
      {...props}
      label="A cylinder with its radius and height marked, showing that its volume is the area of the circular end times the height"
    >
      <ellipse cx={78} cy={26} rx={38} ry={13} className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <Fig d="M 40 26 L 40 76" />
      <Fig d="M 116 26 L 116 76" />
      <path d="M 40 76 A 38 13 0 0 0 116 76" className={line} strokeWidth={2} fill="none" />
      <Mark d="M 78 26 L 116 26" />
      <circle cx={78} cy={26} r={2.4} className="fill-blue-600 dark:fill-blue-400" />
      <text x={98} y={40} textAnchor="middle" className={label}>r</text>
      <Fig d="M 132 26 L 132 76" dashed />
      <text x={140} y={54} className={label}>h</text>
    </Frame>
  );
}

export function CuboidNet(props: DiagramProps) {
  // Surface area is easier to get right from a net, because a net makes the
  // six faces countable instead of imagined.
  //
  // The three dimensions are deliberately DIFFERENT. An earlier version drew
  // six identical squares, which is the net of a cube — on a diagram captioned
  // "cuboid", teaching that every face is the same, which is the exact mistake
  // it is meant to prevent.
  const w = 38;
  const h = 24;
  const d = 20;
  const x0 = 46;
  const y0 = 34;
  const faces = [
    { x: x0, y: y0, w, h, front: true },
    { x: x0 + w, y: y0, w: d, h },
    { x: x0 + w + d, y: y0, w, h },
    { x: x0 + 2 * w + d, y: y0, w: d, h },
    { x: x0, y: y0 - d, w, h: d },
    { x: x0, y: y0 + h, w, h: d },
  ];
  return (
    <Frame
      caption={"surface area = add up the six faces of the net"}
      {...props}
      label="The net of a cuboid opened out flat, showing six rectangles in three different sizes"
    >
      {faces.map((f, i) => (
        <path
          key={i}
          d={`M ${f.x} ${f.y} L ${f.x + f.w} ${f.y} L ${f.x + f.w} ${f.y + f.h} L ${f.x} ${f.y + f.h} Z`}
          className={f.front ? `${angleFill} ${angleStroke}` : line}
          strokeWidth={1.8}
          fill={f.front ? undefined : "none"}
        />
      ))}
      <text x={x0 + w / 2} y={y0 + h / 2 + 4} textAnchor="middle" className={label}>front</text>
    </Frame>
  );
}

// ─── Similarity ─────────────────────────────────────────────────────────────

export function SimilarTriangles(props: DiagramProps) {
  return (
    <Frame
      caption={"same angles, sides all multiplied by the same number"}
      {...props}
      label="Two similar triangles, the second twice the size of the first, with matching angles marked"
    >
      <Fig d="M 20 74 L 68 74 L 20 42 Z" />
      <Mark d={arc(68, 74, 12, 180, 146)} />
      <Fig d="M 106 86 L 202 86 L 106 22 Z" />
      <Mark d={arc(202, 86, 14, 180, 146)} />
      <text x={44} y={86} textAnchor="middle" className={plainLabel}>6</text>
      <text x={154} y={98} textAnchor="middle" className={plainLabel}>12</text>
      <text x={14} y={60} textAnchor="end" className={plainLabel}>4</text>
      <text x={100} y={56} textAnchor="end" className={plainLabel}>8</text>
    </Frame>
  );
}

export function AreaVolumeScaleFactors(props: DiagramProps) {
  // The one every year gets wrong: doubling the lengths does NOT double the
  // area. It quadruples it. Drawn rather than stated, because you can count
  // the four small squares inside the big one.
  return (
    <Frame
      caption={"lengths ×2, area ×4, volume ×8"}
      {...props}
      label="A small square next to a square with twice the side length, divided up to show that it contains four copies of the small one"
    >
      <path d="M 26 44 L 60 44 L 60 78 L 26 78 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <text x={43} y={94} textAnchor="middle" className={plainLabel}>×1</text>
      <path d="M 108 10 L 176 10 L 176 78 L 108 78 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <Fig d="M 142 10 L 142 78 M 108 44 L 176 44" dashed />
      <text x={142} y={94} textAnchor="middle" className={plainLabel}>×4</text>
      <text x={84} y={48} textAnchor="middle" className={label}>×2</text>
    </Frame>
  );
}
