// The physics diagrams.
//
// Physics is the subject where a text-only explanation fails hardest. "Connect
// the ammeter in series and the voltmeter in parallel" means nothing until you
// have seen the two circuits side by side, and no amount of rewording fixes
// that — which is why every exam paper draws them.

import {
  Fig,
  Frame,
  Mark,
  angleFill,
  angleStroke,
  arc,
  arrowHead,
  label,
  line,
  plainLabel,
  polar,
  type DiagramProps,
} from "./shared";

// ─── Circuit symbols ────────────────────────────────────────────────────────
//
// Drawn as components rather than copied path data, because a circuit diagram
// is nine tenths repetition and the ONE thing that must never vary is what a
// symbol looks like. A lamp that is a circle-with-a-cross in one diagram and
// something else in the next teaches a student to distrust the drawings.

function Lamp({ x, y }: { x: number; y: number }) {
  const r = 9;
  const d = r * 0.7071;
  return (
    <>
      <circle cx={x} cy={y} r={r} className={line} strokeWidth={2} fill="none" />
      <Fig d={`M ${x - d} ${y - d} L ${x + d} ${y + d} M ${x - d} ${y + d} L ${x + d} ${y - d}`} />
    </>
  );
}

function Meter({ x, y, letter }: { x: number; y: number; letter: string }) {
  return (
    <>
      <circle cx={x} cy={y} r={9} className={angleStroke} strokeWidth={2} fill="none" />
      <text x={x} y={y + 4} textAnchor="middle" className={label}>{letter}</text>
    </>
  );
}

/** A cell on a horizontal wire. Long plate positive, short negative. */
function Cell({ x, y }: { x: number; y: number }) {
  return <Fig d={`M ${x - 4} ${y - 11} L ${x - 4} ${y + 11} M ${x + 4} ${y - 6} L ${x + 4} ${y + 6}`} />;
}

function Resistor({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M ${x - 16} ${y - 7} L ${x + 16} ${y - 7} L ${x + 16} ${y + 7} L ${x - 16} ${y + 7} Z`}
      className={line}
      strokeWidth={2}
      fill="none"
    />
  );
}

// ─── Circuits ───────────────────────────────────────────────────────────────

export function SeriesCircuit(props: DiagramProps) {
  return (
    <Frame
      caption={"one loop — the same current everywhere"}
      {...props}
      label="A series circuit: a cell and two lamps connected in a single loop"
    >
      <Fig d="M 26 24 L 71 24 M 89 24 L 131 24 M 149 24 L 194 24" />
      <Fig d="M 194 24 L 194 88 M 194 88 L 118 88 M 106 88 L 26 88 M 26 88 L 26 24" />
      <Lamp x={80} y={24} />
      <Lamp x={140} y={24} />
      <Cell x={112} y={88} />
      <text x={110} y={58} textAnchor="middle" className={label}>same current</text>
    </Frame>
  );
}

export function ParallelCircuit(props: DiagramProps) {
  return (
    <Frame
      caption={"each branch gets the full voltage"}
      {...props}
      label="A parallel circuit: a cell with two lamps on separate branches, so each lamp gets the full voltage"
    >
      <Fig d="M 26 22 L 101 22 M 119 22 L 194 22" />
      <Fig d="M 26 58 L 101 58 M 119 58 L 194 58" />
      <Fig d="M 26 22 L 26 94 M 194 22 L 194 94" />
      {/* These two segments must NOT overlap: the gap between them is where the
          cell sits. An earlier version ran the wire straight through it. */}
      <Fig d="M 26 94 L 104 94 M 120 94 L 194 94" />
      <Lamp x={110} y={22} />
      <Lamp x={110} y={58} />
      <Cell x={112} y={94} />
      <text x={60} y={82} textAnchor="middle" className={label}>current splits</text>
    </Frame>
  );
}

export function AmmeterVoltmeter(props: DiagramProps) {
  // The one that is worth a mark every single year. An ammeter goes IN the
  // wire; a voltmeter goes ACROSS the component, on its own little bridge.
  return (
    <Frame
      caption={"ammeter in the loop, voltmeter across the component"}
      {...props}
      label="A circuit showing an ammeter connected in series in the loop and a voltmeter connected in parallel across a resistor"
    >
      <Fig d="M 26 46 L 76 46 M 108 46 L 194 46" />
      <Fig d="M 26 46 L 26 92 M 194 46 L 194 92" />
      <Fig d="M 26 92 L 101 92 M 119 92 L 194 92" />
      <Resistor x={92} y={46} />
      <Meter x={110} y={92} letter="A" />
      {/* The bridge legs sit clear of the resistor's own corners. Put them on
          the corners and the whole thing reads as a box drawn round it. */}
      <Fig d="M 64 46 L 64 22 M 120 46 L 120 22" />
      <Fig d="M 64 22 L 83 22 M 101 22 L 120 22" />
      <Meter x={92} y={22} letter="V" />
    </Frame>
  );
}

// ─── Forces ─────────────────────────────────────────────────────────────────

export function FreeBodyDiagram(props: DiagramProps) {
  // Forces are drawn from the middle of the object, and the LENGTH is the
  // size. Here the two horizontal arrows are equal — so the car is at a
  // steady speed, not speeding up. That is the reading the diagram is for.
  const cx = 110;
  const cy = 52;
  const arrow = (deg: number, len: number) => {
    const [x, y] = polar(cx, cy, len, deg);
    return `M ${cx} ${cy} L ${x.toFixed(1)} ${y.toFixed(1)}`;
  };
  const tip = (deg: number, len: number) => {
    const [x, y] = polar(cx, cy, len, deg);
    return arrowHead(x, y, deg);
  };
  return (
    <Frame
      caption={"equal and opposite — so it stays at a steady speed"}
      {...props}
      label="A free body diagram with four force arrows: weight down, normal contact force up, thrust forward and drag backward, drawn in balanced pairs"
    >
      <path
        d={`M ${cx - 22} ${cy - 12} L ${cx + 22} ${cy - 12} L ${cx + 22} ${cy + 12} L ${cx - 22} ${cy + 12} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={2}
      />
      {([[90, 34], [270, 34], [0, 48], [180, 48]] as const).map(([deg, len]) => (
        <g key={deg}>
          <Mark d={arrow(deg, len)} />
          <Mark d={tip(deg, len)} />
        </g>
      ))}
      <text x={cx} y={cy - 40} textAnchor="middle" className={plainLabel}>normal contact</text>
      <text x={cx} y={cy + 50} textAnchor="middle" className={plainLabel}>weight</text>
      <text x={cx + 52} y={cy + 4} className={plainLabel}>thrust</text>
      <text x={cx - 52} y={cy + 4} textAnchor="end" className={plainLabel}>drag</text>
    </Frame>
  );
}

export function ResultantForce(props: DiagramProps) {
  // 3 and 4 at right angles give 5, so the numbers are checkable and the
  // drawing is to scale — 12 units per newton.
  const o = [46, 84] as const;
  const a = [94, 84] as const;
  const b = [94, 48] as const;
  return (
    <Frame
      caption={"two forces at right angles: 3 and 4 give 5"}
      {...props}
      label="A force of 4 newtons to the right and 3 newtons upward, with the resultant of 5 newtons drawn as the diagonal"
    >
      <Fig d={`M ${o[0]} ${o[1]} L ${a[0]} ${a[1]}`} />
      <Fig d={arrowHead(a[0], a[1], 0)} />
      <Fig d={`M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`} />
      <Fig d={arrowHead(b[0], b[1], 90)} />
      <path d={`M ${o[0]} ${o[1]} L ${b[0]} ${b[1]}`} className={angleStroke} strokeWidth={2} fill="none" />
      <Mark d={arrowHead(b[0], b[1], 36.87)} />
      <text x={70} y={97} textAnchor="middle" className={plainLabel}>4 N</text>
      <text x={100} y={66} className={plainLabel}>3 N</text>
      <text x={54} y={58} className={label}>5 N</text>
    </Frame>
  );
}

export function Moments(props: DiagramProps) {
  return (
    <Frame
      caption={"balanced when force × distance is equal both sides"}
      {...props}
      label="A balanced beam on a pivot with a large force close to the pivot on one side and a small force further away on the other"
    >
      <Fig d="M 24 48 L 196 48" />
      <path d="M 110 50 L 100 70 L 120 70 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <Mark d="M 62 48 L 62 84" />
      <Mark d={arrowHead(62, 84, 270)} />
      <Mark d="M 176 48 L 176 72" />
      <Mark d={arrowHead(176, 72, 270)} />
      <Fig d="M 62 34 L 110 34" dashed />
      <Fig d="M 110 22 L 176 22" dashed />
      <text x={86} y={30} textAnchor="middle" className={plainLabel}>2 m</text>
      <text x={143} y={18} textAnchor="middle" className={plainLabel}>4 m</text>
      <text x={62} y={97} textAnchor="middle" className={label}>20 N</text>
      <text x={176} y={97} textAnchor="middle" className={label}>10 N</text>
    </Frame>
  );
}

// ─── Waves ──────────────────────────────────────────────────────────────────

export function TransverseWave(props: DiagramProps) {
  // Generated from an actual sine, not drawn by eye, so that the wavelength
  // marker really does span one whole wave and the amplitude marker really
  // does reach the crest.
  //
  // It stops at i = 130.5 on purpose: exactly two and a quarter wavelengths,
  // so it finishes ON a crest and leaves the right-hand quarter of the box
  // free for the amplitude label, which used to run off the edge as
  // "amplitud".
  const mid = 50;
  const amp = 26;
  const x0 = 22;
  const wavelength = 58;
  const pts: string[] = [];
  for (let i = 0; i <= 130.5; i += 1.5) {
    const x = x0 + i;
    const y = mid - amp * Math.sin((2 * Math.PI * i) / wavelength);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const crest = x0 + wavelength / 4;
  return (
    <Frame
      caption={"wavelength is crest to crest; amplitude is from the middle"}
      {...props}
      label="A transverse wave with one wavelength marked from crest to crest and the amplitude marked from the centre line up to a crest"
    >
      <Fig d={`M ${x0} ${mid} L ${x0 + 138} ${mid}`} dashed />
      <path d={pts.join(" ")} className={angleStroke} strokeWidth={2} fill="none" />
      <Mark d={`M ${crest} ${mid - amp} L ${crest + wavelength} ${mid - amp}`} />
      <text x={crest + wavelength / 2} y={mid - amp - 8} textAnchor="middle" className={label}>
        wavelength
      </text>
      <Mark d={`M ${x0 + 130.5} ${mid} L ${x0 + 130.5} ${mid - amp}`} />
      <text x={x0 + 136} y={mid - amp / 2 + 4} className={label}>amplitude</text>
    </Frame>
  );
}

export function LongitudinalWave(props: DiagramProps) {
  // Sound. The particles move ALONG the direction of travel, so the picture is
  // spacing rather than height — bunched up is a compression, spread out is a
  // rarefaction.
  const bars: number[] = [];
  for (let i = 0; i < 34; i++) {
    const t = i / 33;
    bars.push(20 + t * 180 + 9 * Math.sin(2 * Math.PI * t * 3));
  }
  return (
    <Frame
      caption={"bunched up = compression, spread out = rarefaction"}
      {...props}
      label="A longitudinal wave drawn as vertical lines, bunched together at compressions and spread apart at rarefactions"
    >
      {bars.map((x, i) => (
        <line key={i} x1={x} y1={26} x2={x} y2={62} className={line} strokeWidth={1.8} />
      ))}
      <Fig d="M 60 82 L 160 82" />
      <Fig d={arrowHead(160, 82, 0)} />
      <text x={110} y={98} textAnchor="middle" className={plainLabel}>direction of travel</text>
    </Frame>
  );
}

export function ReflectionLaw(props: DiagramProps) {
  const p = [110, 78] as const;
  return (
    <Frame
      caption={"angle of incidence = angle of reflection, both from the normal"}
      {...props}
      label="A ray reflecting off a mirror, with the normal drawn at right angles to the mirror and the angles of incidence and reflection marked as equal"
    >
      <Fig d="M 30 78 L 190 78" />
      {[40, 56, 72, 88, 104, 120, 136, 152, 168, 184].map((x) => (
        <line key={x} x1={x} y1={78} x2={x - 7} y2={86} className={line} strokeWidth={1.4} />
      ))}
      <Fig d={`M ${p[0]} ${p[1]} L ${p[0]} 16`} dashed />
      <path d={`M 46 22 L ${p[0]} ${p[1]}`} className={angleStroke} strokeWidth={2} fill="none" />
      <path d={`M ${p[0]} ${p[1]} L 174 22`} className={angleStroke} strokeWidth={2} fill="none" />
      {/* Both arcs stop short of the normal. Run them right up to it and the
          two merge into one dome that reads as a single angle. */}
      <Mark d={arc(p[0], p[1], 30, 95, 133)} />
      <Mark d={arc(p[0], p[1], 30, 47, 85)} />
      <text x={82} y={44} className={label}>i</text>
      <text x={134} y={44} className={label}>r</text>
      <text x={p[0] + 4} y={20} className={plainLabel}>normal</text>
    </Frame>
  );
}

export function Refraction(props: DiagramProps) {
  // Rebuilt, because the first version was wrong physics — it drew vertical
  // normals against the block's vertical side, and bent the ray AWAY from the
  // normal on the way in, which is what happens leaving glass, not entering.
  //
  // The ray now goes in through the TOP face, so the normal really is vertical
  // there, and the angles come from actual refraction: about 52° in air
  // becomes about 31° in glass. Towards the normal on the way in, away on the
  // way out, and leaving PARALLEL to how it arrived — the detail exam answers
  // drop.
  const top = 30;
  const bottom = 66;
  const enter = [86, top] as const;
  const exit = [enter[0] + 21.6, bottom] as const;
  return (
    <Frame
      caption={"into glass it bends towards the normal, out again away from it"}
      {...props}
      label="A light ray entering the top of a glass block, bending towards the vertical normal inside it, then leaving through the bottom parallel to the direction it arrived in"
    >
      <path
        d={`M 50 ${top} L 170 ${top} L 170 ${bottom} L 50 ${bottom} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={1.6}
      />
      <Fig d={`M ${enter[0]} 10 L ${enter[0]} ${top + 16}`} dashed />
      <Fig d={`M ${exit[0]} ${bottom - 16} L ${exit[0]} 88`} dashed />
      <path
        d={`M 58 8 L ${enter[0]} ${top} L ${exit[0]} ${bottom} L ${(exit[0] + 22).toFixed(1)} ${(bottom + 17.3).toFixed(1)}`}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
      />
      <Fig d={arrowHead(exit[0] + 22, bottom + 17.3, -38)} />
      <text x={30} y={22} className={plainLabel}>air</text>
      <text x={140} y={52} textAnchor="middle" className={plainLabel}>glass</text>
      <text x={30} y={84} className={plainLabel}>air</text>
    </Frame>
  );
}

// ─── Motion graphs ──────────────────────────────────────────────────────────

export function DistanceTimeGraph(props: DiagramProps) {
  return (
    <Frame
      caption={"the gradient is the speed; flat means stopped"}
      {...props}
      label="A distance-time graph with a steady section, a flat stationary section and a steeper faster section"
    >
      <Fig d="M 30 16 L 30 88 L 200 88" />
      <path d="M 30 88 L 84 58 L 128 58 L 186 20" className={angleStroke} strokeWidth={2} fill="none" />
      <text x={34} y={60} className={plainLabel}>steady</text>
      <text x={106} y={52} textAnchor="middle" className={plainLabel}>stopped</text>
      <text x={150} y={62} className={label}>faster</text>
      <text x={26} y={18} textAnchor="end" className={plainLabel}>d</text>
      <text x={200} y={101} textAnchor="end" className={plainLabel}>t</text>
    </Frame>
  );
}

export function VelocityTimeGraph(props: DiagramProps) {
  return (
    <Frame
      caption={"gradient = acceleration, area underneath = distance"}
      {...props}
      label="A velocity-time graph showing acceleration, constant velocity and deceleration, with the area under the line shaded to show the distance travelled"
    >
      <path d="M 30 88 L 86 34 L 140 34 L 190 88 Z" className={angleFill} strokeWidth={0} />
      <Fig d="M 30 16 L 30 88 L 200 88" />
      <path d="M 30 88 L 86 34 L 140 34 L 190 88" className={angleStroke} strokeWidth={2} fill="none" />
      <text x={110} y={68} textAnchor="middle" className={label}>area = distance</text>
      <text x={26} y={18} textAnchor="end" className={plainLabel}>v</text>
      <text x={200} y={101} textAnchor="end" className={plainLabel}>t</text>
    </Frame>
  );
}

// ─── Magnetism ──────────────────────────────────────────────────────────────

export function BarMagnetField(props: DiagramProps) {
  // Field lines run OUT of north and IN to south, never cross, and sit closer
  // together where the field is stronger. All three are marks.
  //
  // Two wide loops each side, not three tight ones — tight loops read as a
  // coil wrapped round the magnet rather than as a field. The arrowheads
  // matter too: without them this is a picture of some lines, and the
  // direction is half the point.
  const n = [70, 152] as const;
  const mid = 52;
  const loops = [26, 46];
  return (
    <Frame
      caption={"out of north, round, and into south"}
      {...props}
      label="A bar magnet with field lines looping out of the north pole, around the outside, and back into the south pole, with arrows showing the direction"
    >
      {loops.map((k) => (
        <g key={k}>
          <Fig d={`M ${n[0]} ${mid - 4} C ${n[0] - k} ${mid - k}, ${n[1] + k} ${mid - k}, ${n[1]} ${mid - 4}`} />
          <Fig d={`M ${n[0]} ${mid + 4} C ${n[0] - k} ${mid + k}, ${n[1] + k} ${mid + k}, ${n[1]} ${mid + 4}`} />
        </g>
      ))}
      {loops.map((k) => (
        <g key={`arrow-${k}`}>
          <Fig d={arrowHead(111, mid - 4 - k * 0.75, 0, 7)} />
          <Fig d={arrowHead(111, mid + 4 + k * 0.75, 0, 7)} />
        </g>
      ))}
      <path
        d={`M ${n[0]} ${mid - 11} L 111 ${mid - 11} L 111 ${mid + 11} L ${n[0]} ${mid + 11} Z`}
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={2}
      />
      <path
        d={`M 111 ${mid - 11} L ${n[1]} ${mid - 11} L ${n[1]} ${mid + 11} L 111 ${mid + 11} Z`}
        className={line}
        strokeWidth={2}
        fill="none"
      />
      <text x={90} y={mid + 5} textAnchor="middle" className={label}>N</text>
      <text x={132} y={mid + 5} textAnchor="middle" className={plainLabel}>S</text>
    </Frame>
  );
}

// ─── Atomic structure ───────────────────────────────────────────────────────

export function AtomShells(props: DiagramProps) {
  const cx = 110;
  const cy = 50;
  const shells = [
    { r: 20, n: 2 },
    { r: 34, n: 8 },
  ];
  return (
    <Frame
      caption={"almost all the mass in a nucleus that is almost all empty space"}
      {...props}
      label="An atom drawn with a small central nucleus and two electron shells holding two and eight electrons"
    >
      {shells.map((s) => (
        <g key={s.r}>
          <circle cx={cx} cy={cy} r={s.r} className={line} strokeWidth={1.4} fill="none" />
          {Array.from({ length: s.n }, (_, i) => {
            const [x, y] = polar(cx, cy, s.r, (360 / s.n) * i + 90);
            return <circle key={i} cx={x} cy={y} r={2.8} className="fill-[var(--diagram-accent)]" />;
          })}
        </g>
      ))}
      <circle cx={cx} cy={cy} r={6} className="fill-current opacity-70" />
      <Fig d={`M ${cx + 8} ${cy - 6} L ${cx + 46} ${cy - 26}`} />
      <text x={cx + 50} y={cy - 26} className={plainLabel}>nucleus</text>
      <text x={cx - 50} y={cy + 40} textAnchor="end" className={plainLabel}>electrons</text>
      <Fig d={`M ${cx - 48} ${cy + 36} L ${cx - 20} ${cy + 24}`} />
    </Frame>
  );
}

// ─── Pressure ───────────────────────────────────────────────────────────────

export function PressureInLiquids(props: DiagramProps) {
  // The arrows get longer further down, because that is the entire rule:
  // pressure depends on depth. Drawn to scale off the depth.
  const rows = [30, 46, 62, 78];
  return (
    <Frame
      caption={"deeper means more liquid above you, so more pressure"}
      {...props}
      label="A tank of liquid with sideways arrows that get longer further down, showing that pressure increases with depth"
    >
      <Fig d="M 60 16 L 60 90 L 160 90 L 160 16" />
      <path d="M 60 26 L 160 26 L 160 90 L 60 90 Z" className={angleFill} strokeWidth={0} />
      <Fig d="M 60 26 L 160 26" />
      {rows.map((y, i) => {
        const len = 12 + i * 11;
        return (
          <g key={y}>
            <Mark d={`M 160 ${y} L ${160 + len} ${y}`} />
            <Mark d={arrowHead(160 + len, y, 0)} />
          </g>
        );
      })}
      <text x={106} y={104} textAnchor="middle" className={plainLabel}>depth increases downwards</text>
    </Frame>
  );
}

// ─── Energy ─────────────────────────────────────────────────────────────────

export function SankeyDiagram(props: DiagramProps) {
  // The width of each arm is the energy in it, which is the whole point of a
  // Sankey — a fat waste branch IS the answer to "is this efficient?".
  // Drawn to scale: 100 in, 25 useful, 75 wasted.
  //
  // One continuous shape rather than three rectangles. Drawn as separate
  // boxes it read as three unrelated blocks sitting on top of each other,
  // which is exactly what a Sankey is not.
  return (
    <Frame
      caption={"the width is the energy — this one is 25% efficient"}
      {...props}
      label="A Sankey diagram for a filament lamp with one hundred joules in, twenty five leaving as light and seventy five branching away as wasted heat, drawn to scale"
    >
      <path
        d="M 10 18 L 70 18 L 70 33 L 200 33 L 200 48 L 70 48 L 70 78 L 10 78 Z"
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={1.6}
      />
      <path d="M 70 48 L 124 48 L 150 86 L 96 86 Z" className={line} strokeWidth={1.6} fill="none" />
      <text x={38} y={52} textAnchor="middle" className={label}>100 J</text>
      <text x={150} y={29} textAnchor="middle" className={label}>25 J light</text>
      <text x={124} y={78} textAnchor="middle" className={plainLabel}>75 J heat</text>
      <text x={110} y={106} textAnchor="middle" className={plainLabel}>efficiency = useful ÷ total</text>
    </Frame>
  );
}

export function StatesOfMatter(props: DiagramProps) {
  // Arrangement, spacing and movement, side by side. Every particle-model
  // question is really asking you to read one of these three pictures.
  const grid = (x0: number, jitter: number, gap: number, n: number) => {
    const out: [number, number][] = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed / 2147483647 - 0.5) * jitter;
    };
    for (let r = 0; r < n; r++)
      for (let c = 0; c < n; c++) out.push([x0 + c * gap + rnd(), 34 + r * gap + rnd()]);
    return out;
  };
  const panels = [
    { x: 12, name: "solid", pts: grid(22, 0, 11, 4) },
    { x: 82, name: "liquid", pts: grid(92, 7, 11, 4) },
    { x: 152, name: "gas", pts: grid(160, 22, 18, 3) },
  ];
  return (
    <Frame
      caption={"same particles — the arrangement and the energy change"}
      {...props}
      label="Particles drawn in a solid as a fixed regular lattice, in a liquid as close but disordered, and in a gas as far apart and random"
    >
      {panels.map((p) => (
        <g key={p.name}>
          <rect x={p.x} y={24} width={56} height={54} className={line} strokeWidth={1.4} fill="none" />
          {p.pts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={3.4} className={`${angleFill} ${angleStroke}`} strokeWidth={1} />
          ))}
          <text x={p.x + 28} y={92} textAnchor="middle" className={label}>{p.name}</text>
        </g>
      ))}
      <text x={110} y={16} textAnchor="middle" className={plainLabel}>
        heating gives the particles more energy
      </text>
    </Frame>
  );
}

// ─── Mains electricity ──────────────────────────────────────────────────────

export function ThreePinPlug(props: DiagramProps) {
  // Which wire goes where. Asked most years, and it is pure recall that a
  // picture fixes instantly — but only if it actually looks like a plug,
  // which the first version did not.
  return (
    <Frame
      caption={"brown live, blue neutral, green and yellow earth"}
      {...props}
      label="A three pin plug seen from inside: the longer earth pin at the top centre, live on the right with the fuse beside it, and neutral on the left"
    >
      {/* the pins */}
      <rect x={104} y={8} width={9} height={26} className={line} strokeWidth={1.6} fill="none" />
      <rect x={62} y={20} width={9} height={16} className={line} strokeWidth={1.6} fill="none" />
      <rect x={148} y={20} width={9} height={16} className={line} strokeWidth={1.6} fill="none" />
      {/* the body */}
      <path d="M 40 36 L 178 36 L 178 92 L 40 92 Z" className={line} strokeWidth={2} fill="none" />
      {/* the fuse, in the live side */}
      <rect x={144} y={44} width={18} height={26} className={`${angleFill} ${angleStroke}`} strokeWidth={1.6} />
      <text x={153} y={60} textAnchor="middle" className="fill-current text-[7px]">fuse</text>
      {/* the wires */}
      <Fig d="M 66 36 L 66 74 L 109 74" />
      <Fig d="M 153 70 L 153 74 L 109 74" />
      <Fig d="M 109 34 L 109 74" />
      <text x={36} y={50} textAnchor="end" className={plainLabel}>blue</text>
      <text x={184} y={50} className={plainLabel}>brown</text>
      <text x={109} y={88} textAnchor="middle" className={label}>earth</text>
      <text x={110} y={106} textAnchor="middle" className={plainLabel}>the fuse is always in the live wire</text>
    </Frame>
  );
}

// ─── The electromagnetic spectrum ───────────────────────────────────────────

export function EmSpectrum(props: DiagramProps) {
  const bands = ["radio", "micro", "IR", "vis", "UV", "X-ray", "gamma"];
  const w = 196 / bands.length;
  return (
    <Frame
      caption={"one order: radio, micro, infrared, visible, UV, X-ray, gamma"}
      {...props}
      label="The electromagnetic spectrum in order from radio waves to gamma rays, with wavelength decreasing and frequency and energy increasing from left to right"
    >
      {bands.map((b, i) => (
        <g key={b}>
          <rect
            x={12 + i * w}
            y={34}
            width={w}
            height={22}
            className={b === "vis" ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1.2}
            fill={b === "vis" ? undefined : "none"}
          />
          <text x={12 + i * w + w / 2} y={48} textAnchor="middle" className="fill-current text-[7px]">{b}</text>
        </g>
      ))}
      <Mark d="M 12 24 L 100 24" />
      <Mark d={arrowHead(12, 24, 180)} />
      <text x={104} y={27} className={plainLabel}>longer wavelength</text>
      <Mark d="M 208 70 L 120 70" />
      <Mark d={arrowHead(208, 70, 0)} />
      <text x={116} y={73} textAnchor="end" className={plainLabel}>more energy</text>
      <text x={110} y={94} textAnchor="middle" className={plainLabel}>
        visible light is a very narrow band
      </text>
    </Frame>
  );
}

// ─── Radioactivity ──────────────────────────────────────────────────────────

export function HalfLifeGraph(props: DiagramProps) {
  // Halving, then halving again, drawn so the equal steps along the bottom
  // are visible. "It never quite reaches zero" is the other half of the idea.
  const pts: [number, number][] = [];
  for (let t = 0; t <= 100; t += 2) pts.push([t, 100 * Math.pow(0.5, t / 25)]);
  return (
    <Frame
      caption={"each half-life halves what is left — it never reaches zero"}
      {...props}
      label="A radioactive decay curve halving every quarter of the axis, with dashed lines showing the count falling from one hundred to fifty to twenty five"
    >
      <Fig d="M 30 14 L 30 88 L 200 88" />
      <path
        d={pts.map(([t, v], i) => `${i === 0 ? "M" : "L"} ${(30 + t * 1.7).toFixed(1)} ${(88 - v * 0.72).toFixed(1)}`).join(" ")}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
      />
      <Fig d="M 30 52 L 72 52 L 72 88" dashed />
      <Fig d="M 30 70 L 115 70 L 115 88" dashed />
      <text x={26} y={20} textAnchor="end" className={plainLabel}>100</text>
      <text x={26} y={56} textAnchor="end" className={plainLabel}>50</text>
      <text x={26} y={74} textAnchor="end" className={plainLabel}>25</text>
      <text x={72} y={100} textAnchor="middle" className={label}>1</text>
      <text x={115} y={100} textAnchor="middle" className={label}>2</text>
      <text x={168} y={100} textAnchor="middle" className={plainLabel}>half-lives</text>
    </Frame>
  );
}

export function RadiationPenetration(props: DiagramProps) {
  const rows = [
    { y: 26, name: "alpha", stops: 74 },
    { y: 50, name: "beta", stops: 122 },
    { y: 74, name: "gamma", stops: 186 },
  ];
  return (
    <Frame
      caption={"alpha stopped by paper, beta by aluminium, gamma needs lead"}
      {...props}
      label="Alpha radiation stopped by paper, beta radiation stopped by aluminium, and gamma radiation only reduced by thick lead"
    >
      {[["paper", 74], ["aluminium", 122], ["lead", 170]].map(([n, x]) => (
        <g key={n as string}>
          <rect x={x as number} y={16} width={10} height={70} className={line} strokeWidth={1.4} fill="none" />
          <text x={(x as number) + 5} y={100} textAnchor="middle" className={plainLabel}>{n as string}</text>
        </g>
      ))}
      {rows.map((r) => (
        <g key={r.name}>
          <Mark d={`M 16 ${r.y} L ${r.stops} ${r.y}`} />
          <Mark d={arrowHead(r.stops, r.y, 0)} />
          <text x={14} y={r.y - 5} className={label}>{r.name}</text>
        </g>
      ))}
    </Frame>
  );
}

// ─── Space ──────────────────────────────────────────────────────────────────

export function StarLifeCycle(props: DiagramProps) {
  // Two endings, and which one you get depends only on the mass. That fork
  // is the examinable idea and it is why this is a diagram, not a list.
  const box = (x: number, y: number, w: number, t: string, hi = false) => (
    <g key={t}>
      <rect x={x} y={y} width={w} height={18} className={hi ? `${angleFill} ${angleStroke}` : line} strokeWidth={1.4} fill={hi ? undefined : "none"} />
      <text x={x + w / 2} y={y + 12} textAnchor="middle" className="fill-current text-[7.5px]">{t}</text>
    </g>
  );
  return (
    <Frame
      caption={"the mass of the star decides which ending it gets"}
      {...props}
      label="A star's life cycle branching after the main sequence: smaller stars become a red giant then a white dwarf, larger stars a red supergiant then a supernova and a neutron star or black hole"
    >
      {box(8, 42, 40, "nebula")}
      {box(56, 42, 52, "main sequence", true)}
      <Mark d="M 48 51 L 54 51" />
      <Mark d={arrowHead(54, 51, 0)} />
      <Fig d="M 108 51 L 118 51 L 118 22 L 128 22 M 118 51 L 118 80 L 128 80" />
      {box(130, 13, 40, "red giant")}
      {box(130, 70, 52, "supergiant")}
      {box(178, 13, 36, "dwarf")}
      {box(132, 90, 68, "supernova")}
      <Mark d="M 156 88 L 156 90" />
      <Fig d="M 156 80 L 156 88" />
      <Fig d={arrowHead(156, 88, 270)} />
      <Mark d="M 170 22 L 176 22" />
      <Mark d={arrowHead(176, 22, 0)} />
      <text x={128} y={9} className={plainLabel}>smaller</text>
      <text x={128} y={68} className={label}>bigger</text>
    </Frame>
  );
}
