// The biology diagrams.
//
// Biology is the subject with the most labelled diagrams in the exam and the
// fewest on this site. A reflex arc is a picture with five boxes and four
// arrows; describing it in a paragraph is strictly harder to learn from and
// is not what the mark scheme is looking at.

import {
  Fig,
  Frame,
  Mark,
  angleFill,
  angleStroke,
  arrowHead,
  label,
  line,
  plainLabel,
  type DiagramProps,
} from "./shared";

/** A leader line from a label to the thing it names. */
function Leader({
  x,
  y,
  tx,
  ty,
  text,
  anchor = "start",
}: {
  x: number;
  y: number;
  tx: number;
  ty: number;
  text: string;
  anchor?: "start" | "end" | "middle";
}) {
  return (
    <>
      <Fig d={`M ${x} ${y} L ${tx} ${ty}`} />
      <text x={tx + (anchor === "end" ? -4 : anchor === "start" ? 4 : 0)} y={ty + 3} textAnchor={anchor} className={plainLabel}>
        {text}
      </text>
    </>
  );
}

// ─── Cells ──────────────────────────────────────────────────────────────────

export function AnimalCell(props: DiagramProps) {
  return (
    <Frame
      caption={"no cell wall, no chloroplasts, no permanent vacuole"}
      {...props}
      label="An animal cell labelled with its cell membrane, cytoplasm, nucleus, mitochondria and ribosomes"
    >
      <ellipse cx={86} cy={54} rx={48} ry={36} className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <circle cx={80} cy={52} r={13} className={line} strokeWidth={1.8} fill="none" />
      <text x={80} y={56} textAnchor="middle" className="fill-current text-[8px] opacity-70">n</text>
      {([[62, 74], [118, 68], [110, 32]] as const).map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx={7} ry={4} className={angleStroke} strokeWidth={1.4} fill="none" />
      ))}
      {([[66, 40], [76, 78], [124, 48]] as const).map(([x, y], i) => (
        <circle key={`r${i}`} cx={x} cy={y} r={2} className="fill-current opacity-60" />
      ))}
      <Leader x={88} y={50} tx={144} ty={20} text="nucleus" />
      <Leader x={118} y={68} tx={140} ty={88} text="mitochondria" />
      <Leader x={50} y={32} tx={26} ty={13} text="membrane" />
      <text x={106} y={106} textAnchor="middle" className={plainLabel}>everything else is cytoplasm</text>
    </Frame>
  );
}

export function PlantCell(props: DiagramProps) {
  // Labelled from OUTSIDE the cell. The first version ran three leader lines
  // diagonally across the middle to labels that were clipped by the edge of
  // the box anyway, which made the drawing harder to read than no drawing.
  return (
    <Frame
      caption={"the three extras: wall, chloroplasts, permanent vacuole"}
      {...props}
      label="A plant cell drawn as a rectangle with a thick cell wall, chloroplasts and a large permanent vacuole, the three features an animal cell does not have"
    >
      <path d="M 44 24 L 154 24 L 154 82 L 44 82 Z" className={line} strokeWidth={3} fill="none" />
      <path d="M 50 30 L 148 30 L 148 76 L 50 76 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.4} />
      <path d="M 74 40 L 128 40 L 128 66 L 74 66 Z" className={line} strokeWidth={1.6} fill="none" />
      <text x={101} y={56} textAnchor="middle" className="fill-current text-[9px] opacity-70">vacuole</text>
      <circle cx={60} cy={40} r={8} className={line} strokeWidth={1.6} fill="none" />
      {([[60, 66], [140, 40], [140, 68]] as const).map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx={6} ry={3.5} className={angleStroke} strokeWidth={1.6} fill="none" />
      ))}
      <Fig d="M 99 24 L 99 14" />
      <text x={99} y={11} textAnchor="middle" className={plainLabel}>cell wall</text>
      <Fig d="M 146 40 L 164 30" />
      <text x={168} y={26} textAnchor="middle" className={plainLabel}>chloroplast</text>
      <text x={99} y={98} textAnchor="middle" className={plainLabel}>the vacuole is permanent, and big</text>
    </Frame>
  );
}

// ─── Transport ──────────────────────────────────────────────────────────────

export function Osmosis(props: DiagramProps) {
  // WATER moves, the solute does not — and it moves towards the concentrated
  // side. Both halves of that get muddled in exams, so the arrow and the
  // barrier are the whole diagram.
  const dots = (x0: number, n: number) =>
    Array.from({ length: n }, (_, i) => [x0 + (i % 3) * 16, 34 + Math.floor(i / 3) * 16] as const);
  return (
    <Frame
      caption={"water crosses the membrane; the solute cannot"}
      {...props}
      label="A partially permeable membrane with dilute solution on one side and concentrated on the other, and an arrow showing water moving towards the concentrated side"
    >
      <Fig d="M 22 18 L 198 18 L 198 88 L 22 88 Z" />
      <path d="M 108 18 L 108 88" className={angleStroke} strokeWidth={2.4} strokeDasharray="3 3" fill="none" />
      {dots(38, 3).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} className={`${angleFill} ${angleStroke}`} strokeWidth={1.3} />
      ))}
      {dots(126, 9).map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r={4} className={`${angleFill} ${angleStroke}`} strokeWidth={1.3} />
      ))}
      <Mark d="M 76 78 L 140 78" />
      <Mark d={arrowHead(140, 78, 0)} />
      <text x={108} y={100} textAnchor="middle" className={label}>water moves this way</text>
      <text x={56} y={26} textAnchor="middle" className={plainLabel}>dilute</text>
      <text x={162} y={26} textAnchor="middle" className={plainLabel}>concentrated</text>
    </Frame>
  );
}

// ─── Enzymes ────────────────────────────────────────────────────────────────

export function EnzymeLockAndKey(props: DiagramProps) {
  // The active site is a SOCKET, not a bump. The first version drew it sticking
  // out with the substrate perched on top, which is the opposite of the idea.
  //
  // Denaturing is not "the enzyme dies" — the active site changes shape so the
  // substrate no longer fits, and that has to be visible rather than asserted.
  const socket = (x: number, y: number, w: number) =>
    `M ${x - 30} ${y + 20} L ${x - 30} ${y - 8} L ${x - w} ${y - 8} L ${x - w} ${y + 6} L ${x + w} ${y + 6} L ${x + w} ${y - 8} L ${x + 30} ${y - 8} L ${x + 30} ${y + 20} Z`;
  return (
    <Frame
      caption={"denatured means the active site changed shape"}
      {...props}
      label="An enzyme whose active site is a socket that the substrate fits into, beside a denatured enzyme whose socket has changed shape so the same substrate no longer fits"
    >
      <path d={socket(58, 54, 12)} className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <path d="M 46 60 L 70 60 L 70 44 L 46 44 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={58} y={92} textAnchor="middle" className={plainLabel}>substrate fits</text>
      <path
        d="M 132 74 L 130 46 L 146 44 L 148 58 L 172 60 L 172 44 L 190 46 L 188 74 Z"
        className={`${angleFill} ${angleStroke}`}
        strokeWidth={1.8}
      />
      <path d="M 148 34 L 172 34 L 172 18 L 148 18 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={160} y={92} textAnchor="middle" className={label}>no longer fits</text>
    </Frame>
  );
}

// ─── The leaf ───────────────────────────────────────────────────────────────

export function LeafCrossSection(props: DiagramProps) {
  return (
    <Frame
      caption={"palisade at the top, where the light is"}
      {...props}
      label="A cross-section of a leaf showing the waxy cuticle, palisade layer, spongy layer with air spaces, and a stoma with guard cells on the underside"
    >
      <path d="M 24 20 L 196 20 L 196 32 L 24 32 Z" className={line} strokeWidth={1.4} fill="none" />
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M ${74 + i * 14} 32 L ${86 + i * 14} 32 L ${86 + i * 14} 54 L ${74 + i * 14} 54 Z`}
          className={`${angleFill} ${angleStroke}`}
          strokeWidth={1.3}
        />
      ))}
      {([[86, 66], [112, 70], [140, 64], [166, 70]] as const).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={8} className={`${angleFill} ${angleStroke}`} strokeWidth={1.3} />
      ))}
      <Fig d="M 24 82 L 96 82 M 124 82 L 196 82" />
      <path d="M 96 82 A 12 8 0 0 0 124 82" className={angleStroke} strokeWidth={1.8} fill="none" />
      <text x={196} y={16} textAnchor="end" className={plainLabel}>waxy cuticle</text>
      <text x={110} y={104} textAnchor="middle" className={label}>stoma</text>
      <text x={26} y={46} className={plainLabel}>palisade</text>
      <text x={26} y={70} className={plainLabel}>spongy</text>
    </Frame>
  );
}

// ─── Nervous system ─────────────────────────────────────────────────────────

export function ReflexArc(props: DiagramProps) {
  // Five boxes, four arrows, in order. The exam question is almost always
  // "describe the pathway", and the answer is this sequence — including the
  // relay neurone, which is the bit people leave out.
  const boxes = [
    { x: 6, t: "stimulus" },
    { x: 50, t: "receptor" },
    { x: 94, t: "relay" },
    { x: 138, t: "motor" },
    { x: 182, t: "effector" },
  ];
  return (
    <Frame
      caption={"stimulus to response without the brain deciding"}
      {...props}
      label="The reflex arc drawn as a sequence: stimulus, receptor, sensory neurone, relay neurone in the spinal cord, motor neurone, effector, response"
    >
      {boxes.map((b, i) => (
        <g key={b.x}>
          <path
            d={`M ${b.x} 34 L ${b.x + 32} 34 L ${b.x + 32} 62 L ${b.x} 62 Z`}
            className={i === 2 ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1.8}
            fill={i === 2 ? undefined : "none"}
          />
          <text x={b.x + 16} y={52} textAnchor="middle" className="fill-current text-[8px]">
            {b.t}
          </text>
          {i < boxes.length - 1 ? (
            <>
              <Mark d={`M ${b.x + 32} 48 L ${b.x + 44} 48`} />
              <Mark d={arrowHead(b.x + 44, 48, 0)} />
            </>
          ) : null}
        </g>
      ))}
      <text x={110} y={24} textAnchor="middle" className={plainLabel}>sensory → relay → motor</text>
      <text x={110} y={84} textAnchor="middle" className={plainLabel}>the relay neurone is in the spinal cord</text>
    </Frame>
  );
}

export function Synapse(props: DiagramProps) {
  return (
    <Frame
      caption={"a chemical crosses the gap, so signals go one way only"}
      {...props}
      label="A synapse with the end of one neurone releasing chemical transmitter across a gap to receptors on the next neurone"
    >
      <path d="M 12 36 L 76 36 L 90 50 L 76 64 L 12 64 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <path d="M 130 30 L 208 30 L 208 70 L 130 70 L 118 50 Z" className={line} strokeWidth={1.8} fill="none" />
      {([[98, 42], [104, 54], [110, 46], [98, 60]] as const).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} className="fill-blue-600 dark:fill-blue-400" />
      ))}
      <Mark d="M 92 50 L 114 50" />
      <Mark d={arrowHead(114, 50, 0)} />
      <text x={106} y={22} textAnchor="middle" className={label}>gap</text>
      <text x={44} y={84} textAnchor="middle" className={plainLabel}>impulse in</text>
      <text x={170} y={88} textAnchor="middle" className={plainLabel}>impulse out</text>
    </Frame>
  );
}

// ─── Circulation ────────────────────────────────────────────────────────────

export function DoubleCirculation(props: DiagramProps) {
  // Why it is called DOUBLE: blood goes through the heart twice on one full
  // trip. Two boxes and four arrows, rather than the two overlapping ellipses
  // the first version drew, which cut straight through the heart and left the
  // arrowheads floating as stray ticks.
  return (
    <Frame
      caption={"through the heart twice — lungs first, then the body"}
      {...props}
      label="Double circulation drawn as a heart in the middle with one loop of arrows to the lungs and another to the body"
    >
      <path d="M 88 40 L 132 40 L 132 72 L 88 72 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <text x={110} y={60} textAnchor="middle" className={label}>heart</text>
      <path d="M 14 40 L 58 40 L 58 72 L 14 72 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={36} y={60} textAnchor="middle" className={plainLabel}>lungs</text>
      <path d="M 162 40 L 206 40 L 206 72 L 162 72 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={184} y={60} textAnchor="middle" className={plainLabel}>body</text>
      <Mark d="M 86 46 L 62 46" />
      <Mark d={arrowHead(62, 46, 180)} />
      <Mark d="M 62 66 L 86 66" />
      <Mark d={arrowHead(86, 66, 0)} />
      <Mark d="M 134 46 L 158 46" />
      <Mark d={arrowHead(158, 46, 0)} />
      <Mark d="M 158 66 L 134 66" />
      <Mark d={arrowHead(134, 66, 180)} />
      <text x={110} y={96} textAnchor="middle" className={plainLabel}>two loops, one pump</text>
    </Frame>
  );
}

export function BloodVessels(props: DiagramProps) {
  // Wall thickness and lumen size, side by side, because the comparison is
  // the question: thick wall for pressure, valve for low pressure, one cell
  // thick for exchange.
  const vessels = [
    { x: 38, wall: 11, name: "artery", note: "thick wall" },
    { x: 110, wall: 4, name: "vein", note: "has valves" },
    { x: 182, wall: 1.4, name: "capillary", note: "one cell thick" },
  ];
  return (
    <Frame
      caption={"thick for pressure, valves for low pressure, thin for exchange"}
      {...props}
      label="An artery, a vein and a capillary drawn in cross-section, showing a thick muscular wall, a thinner wall with a valve, and a wall one cell thick"
    >
      {vessels.map((v) => (
        <g key={v.name}>
          <circle cx={v.x} cy={44} r={22} className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
          <circle cx={v.x} cy={44} r={22 - v.wall} className={line} strokeWidth={1.6} fill="none" />
          <text x={v.x} y={82} textAnchor="middle" className={label}>{v.name}</text>
          <text x={v.x} y={96} textAnchor="middle" className={plainLabel}>{v.note}</text>
        </g>
      ))}
    </Frame>
  );
}

// ─── Genetics ───────────────────────────────────────────────────────────────

export function PunnettSquare(props: DiagramProps) {
  // Bb × Bb. The 3:1 falls out of the grid, which is the point of drawing one
  // rather than remembering a ratio.
  const cells = [
    ["BB", "Bb"],
    ["Bb", "bb"],
  ];
  const x0 = 74;
  const y0 = 30;
  const s = 32;
  return (
    <Frame
      caption={"Bb × Bb gives 3 dominant to 1 recessive"}
      {...props}
      label="A Punnett square for two heterozygous parents, giving BB, Bb, Bb and bb — a three to one ratio"
    >
      <text x={x0 + s / 2} y={22} textAnchor="middle" className={label}>B</text>
      <text x={x0 + s + s / 2} y={22} textAnchor="middle" className={label}>b</text>
      <text x={x0 - 8} y={y0 + s / 2 + 4} textAnchor="end" className={label}>B</text>
      <text x={x0 - 8} y={y0 + s + s / 2 + 4} textAnchor="end" className={label}>b</text>
      {cells.map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}${c}`}>
            <path
              d={`M ${x0 + c * s} ${y0 + r * s} L ${x0 + (c + 1) * s} ${y0 + r * s} L ${x0 + (c + 1) * s} ${y0 + (r + 1) * s} L ${x0 + c * s} ${y0 + (r + 1) * s} Z`}
              className={v === "bb" ? `${angleFill} ${angleStroke}` : line}
              strokeWidth={1.6}
              fill={v === "bb" ? undefined : "none"}
            />
            <text
              x={x0 + c * s + s / 2}
              y={y0 + r * s + s / 2 + 4}
              textAnchor="middle"
              className="fill-current text-[12px] font-semibold"
            >
              {v}
            </text>
          </g>
        )),
      )}
      <text x={110} y={106} textAnchor="middle" className={plainLabel}>only bb shows the recessive feature</text>
    </Frame>
  );
}

export function DnaDoubleHelix(props: DiagramProps) {
  // Base pairing is the examinable bit: A with T, C with G, always. The twist
  // is decoration; the rungs are the content.
  //
  // Two full turns, not one. With a single period the two strands are mirror
  // images that meet exactly twice, and the whole thing renders as a bow tie
  // rather than a helix.
  const n = 17;
  const rungs = Array.from({ length: n }, (_, i) => 26 + i * 10.5);
  const yOf = (i: number, sign: number) => 42 + sign * 15 * Math.sin((i / (n - 1)) * Math.PI * 4);
  const strand = (sign: number) =>
    rungs.map((x, i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${yOf(i, sign).toFixed(1)}`).join(" ");
  return (
    <Frame
      caption={"A pairs with T, C pairs with G — always"}
      {...props}
      label="A DNA double helix drawn as two twisting strands joined by base pairs, A with T and C with G"
    >
      {rungs.map((x, i) => (
        <Mark key={x} d={`M ${x.toFixed(1)} ${yOf(i, -1).toFixed(1)} L ${x.toFixed(1)} ${yOf(i, 1).toFixed(1)}`} />
      ))}
      <path d={strand(-1)} className={line} strokeWidth={2.4} fill="none" />
      <path d={strand(1)} className={line} strokeWidth={2.4} fill="none" />
      <text x={110} y={82} textAnchor="middle" className={label}>A–T   C–G   T–A   G–C</text>
      <text x={110} y={100} textAnchor="middle" className={plainLabel}>the order of bases is the code</text>
    </Frame>
  );
}

// ─── Ecology ────────────────────────────────────────────────────────────────

export function FoodChain(props: DiagramProps) {
  // Arrows point the way the ENERGY goes, not the way the eating goes. That
  // is the single most common mistake, and an arrow is the only way to fix it.
  const links = [
    { x: 12, t: "grass", note: "producer" },
    { x: 66, t: "rabbit", note: "primary" },
    { x: 120, t: "fox", note: "secondary" },
    { x: 174, t: "owl", note: "tertiary" },
  ];
  return (
    <Frame
      caption={"arrows point the way the energy goes"}
      {...props}
      label="A food chain from grass to rabbit to fox to owl, with arrows pointing in the direction energy flows"
    >
      {links.map((l, i) => (
        <g key={l.x}>
          <path
            d={`M ${l.x} 34 L ${l.x + 34} 34 L ${l.x + 34} 60 L ${l.x} 60 Z`}
            className={i === 0 ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1.8}
            fill={i === 0 ? undefined : "none"}
          />
          <text x={l.x + 17} y={50} textAnchor="middle" className="fill-current text-[10px]">{l.t}</text>
          <text x={l.x + 17} y={74} textAnchor="middle" className="fill-current text-[8px] opacity-60">{l.note}</text>
          {i < links.length - 1 ? (
            <>
              <Mark d={`M ${l.x + 34} 47 L ${l.x + 52} 47`} />
              <Mark d={arrowHead(l.x + 52, 47, 0)} />
            </>
          ) : null}
        </g>
      ))}
      <text x={110} y={98} textAnchor="middle" className={plainLabel}>
        about 10% passes on at each step
      </text>
    </Frame>
  );
}

export function PhotosynthesisLimitingFactors(props: DiagramProps) {
  // Rises, then flattens. The flat part is the examinable bit: something ELSE
  // has become the limiting factor, and the graph is how you say which.
  return (
    <Frame
      caption={"it levels off when something else runs short"}
      {...props}
      label="A graph of photosynthesis rate against light intensity, rising and then levelling off where another factor becomes limiting"
    >
      <Fig d="M 28 14 L 28 90 L 200 90" />
      <path d="M 28 90 C 62 90, 84 40, 116 34 L 192 34" className={angleStroke} strokeWidth={2} fill="none" />
      <Fig d="M 116 34 L 116 90" dashed />
      <text x={44} y={30} className={label}>light limits</text>
      <text x={196} y={104} textAnchor="end" className={plainLabel}>something else limits</text>
      <text x={24} y={14} textAnchor="end" className={plainLabel}>rate</text>
      <text x={200} y={103} textAnchor="end" className={plainLabel}>light</text>
    </Frame>
  );
}

// ─── Practical ──────────────────────────────────────────────────────────────

export function MicroscopeMagnification(props: DiagramProps) {
  return (
    <Frame
      caption={"total = eyepiece × objective"}
      {...props}
      label="A microscope magnification calculation showing a ten times eyepiece multiplied by a forty times objective giving four hundred times"
    >
      <path d="M 20 34 L 66 34 L 66 66 L 20 66 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={43} y={48} textAnchor="middle" className={plainLabel}>eyepiece</text>
      <text x={43} y={62} textAnchor="middle" className={label}>×10</text>
      <text x={78} y={54} textAnchor="middle" className={label}>×</text>
      <path d="M 90 34 L 140 34 L 140 66 L 90 66 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={115} y={48} textAnchor="middle" className={plainLabel}>objective</text>
      <text x={115} y={62} textAnchor="middle" className={label}>×40</text>
      <text x={152} y={54} textAnchor="middle" className={label}>=</text>
      <path d="M 164 34 L 208 34 L 208 66 L 164 66 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <text x={186} y={56} textAnchor="middle" className={label}>×400</text>
      <text x={110} y={94} textAnchor="middle" className={plainLabel}>
        real size = image size ÷ magnification
      </text>
    </Frame>
  );
}
