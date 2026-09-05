// The chemistry diagrams.
//
// Chemistry is drawn more than it is written. A dot-and-cross diagram IS the
// answer to "explain the bonding in sodium chloride" — the marks are for the
// picture, not for a sentence about the picture. Same for reaction profiles,
// electrolysis cells and the giant structures.

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
  polar,
  type DiagramProps,
} from "./shared";

// ─── Shared pieces ──────────────────────────────────────────────────────────

/**
 * One atom's electron shells, with the electrons spaced evenly round each one.
 *
 * Computed rather than placed by hand: a sodium atom has 2, 8, 1 and getting
 * that wrong by one electron turns a correct diagram into a wrong one that
 * still looks tidy, which is the worst kind of mistake a revision site can
 * make.
 */
function Shells({
  cx,
  cy,
  counts,
  symbol,
  crosses = false,
}: {
  cx: number;
  cy: number;
  counts: readonly number[];
  symbol: string;
  crosses?: boolean;
}) {
  return (
    <>
      {counts.map((n, ring) => {
        const r = 14 + ring * 11;
        return (
          <g key={ring}>
            <circle cx={cx} cy={cy} r={r} className={line} strokeWidth={1.2} fill="none" />
            {Array.from({ length: n }, (_, i) => {
              const [x, y] = polar(cx, cy, r, 90 - (360 / n) * i);
              return crosses ? (
                <path
                  key={i}
                  d={`M ${x - 2.4} ${y - 2.4} L ${x + 2.4} ${y + 2.4} M ${x - 2.4} ${y + 2.4} L ${x + 2.4} ${y - 2.4}`}
                  className={angleStroke}
                  strokeWidth={1.6}
                />
              ) : (
                <circle key={i} cx={x} cy={y} r={2.4} className="fill-current opacity-75" />
              );
            })}
          </g>
        );
      })}
      <text x={cx} y={cy + 4} textAnchor="middle" className={label}>
        {symbol}
      </text>
    </>
  );
}

// ─── Atomic structure and the periodic table ────────────────────────────────

export function ElectronShells(props: DiagramProps) {
  return (
    <Frame
      caption={"2, then 8, then 8 — sodium is 2,8,1"}
      {...props}
      label="A sodium atom drawn with three electron shells holding two, eight and one electron"
    >
      <Shells cx={92} cy={52} counts={[2, 8, 1]} symbol="Na" />
      <text x={168} y={34} textAnchor="middle" className={plainLabel}>2,8,1</text>
      <text x={168} y={54} textAnchor="middle" className={plainLabel}>group 1:</text>
      <text x={168} y={68} textAnchor="middle" className={plainLabel}>one outer</text>
      <text x={168} y={82} textAnchor="middle" className={plainLabel}>electron</text>
    </Frame>
  );
}

export function IsotopeNotation(props: DiagramProps) {
  // The two numbers, and what each one is actually counting. Students lose
  // marks by reading the wrong one, not by not knowing the definition.
  return (
    <Frame
      caption={"top is protons + neutrons; bottom is protons"}
      {...props}
      label="The symbol for carbon-12 with the mass number 12 above and the atomic number 6 below, each labelled"
    >
      <text x={96} y={40} textAnchor="end" className={label}>12</text>
      <text x={96} y={72} textAnchor="end" className={label}>6</text>
      <text x={104} y={64} className="fill-current text-[30px] font-semibold">C</text>
      <Mark d="M 100 32 L 128 20" />
      <text x={132} y={24} className={plainLabel}>mass number</text>
      <Mark d="M 100 70 L 128 84" />
      <text x={132} y={88} className={plainLabel}>atomic number</text>
      <text x={20} y={100} className={plainLabel}>neutrons = 12 − 6 = 6</text>
    </Frame>
  );
}

// ─── Bonding ────────────────────────────────────────────────────────────────

export function IonicBonding(props: DiagramProps) {
  // Sodium chloride. The electron TRANSFERS — one arrow, one direction — and
  // both ions end up with a full outer shell and a charge. Drawing the arrow
  // is what separates ionic from covalent in an exam answer.
  return (
    <Frame
      caption={"one electron transfers; both ions end up full, and charged"}
      {...props}
      label="Sodium transferring its single outer electron to chlorine, leaving a positive sodium ion and a negative chloride ion"
    >
      <Shells cx={56} cy={48} counts={[2, 8, 1]} symbol="Na" />
      <Shells cx={164} cy={48} counts={[2, 8, 7]} symbol="Cl" crosses />
      <Fig d="M 90 26 L 130 26" />
      <Fig d={arrowHead(130, 26, 0)} />
      <text x={110} y={18} textAnchor="middle" className={label}>e⁻</text>
      <text x={56} y={96} textAnchor="middle" className={label}>Na⁺</text>
      <text x={164} y={96} textAnchor="middle" className={label}>Cl⁻</text>
    </Frame>
  );
}

export function CovalentBonding(props: DiagramProps) {
  // A water molecule, drawn as two overlapping outer shells. The shared pair
  // sits IN the overlap — that is the whole idea, and it is why dots and
  // crosses are used: you can see which atom each electron came from.
  const o = [110, 46] as const;
  const h1 = [82, 68] as const;
  const h2 = [138, 68] as const;
  const pair = (cx: number, cy: number, other: readonly [number, number]) => {
    const ang = (Math.atan2(-(other[1] - cy), other[0] - cx) * 180) / Math.PI;
    const [ax, ay] = polar(cx, cy, 20, ang + 8);
    const [bx, by] = polar(cx, cy, 20, ang - 8);
    return { ax, ay, bx, by };
  };
  const p1 = pair(o[0], o[1], h1);
  const p2 = pair(o[0], o[1], h2);
  return (
    <Frame
      caption={"a shared pair in the overlap — one from each atom"}
      {...props}
      label="A water molecule drawn as an oxygen atom sharing an electron pair with each of two hydrogen atoms, the shared pairs sitting in the overlapping region"
    >
      <circle cx={o[0]} cy={o[1]} r={22} className={line} strokeWidth={1.4} fill="none" />
      <circle cx={h1[0]} cy={h1[1]} r={16} className={line} strokeWidth={1.4} fill="none" />
      <circle cx={h2[0]} cy={h2[1]} r={16} className={line} strokeWidth={1.4} fill="none" />
      <text x={o[0]} y={o[1] - 4} textAnchor="middle" className={label}>O</text>
      <text x={h1[0] - 6} y={h1[1] + 12} textAnchor="middle" className={label}>H</text>
      <text x={h2[0] + 6} y={h2[1] + 12} textAnchor="middle" className={label}>H</text>
      {[p1, p2].map((p, i) => (
        <g key={i}>
          <circle cx={p.ax} cy={p.ay} r={2.6} className="fill-current opacity-75" />
          <path
            d={`M ${p.bx - 2.4} ${p.by - 2.4} L ${p.bx + 2.4} ${p.by + 2.4} M ${p.bx - 2.4} ${p.by + 2.4} L ${p.bx + 2.4} ${p.by - 2.4}`}
            className={angleStroke}
            strokeWidth={1.6}
          />
        </g>
      ))}
      <text x={110} y={100} textAnchor="middle" className={plainLabel}>H₂O — two shared pairs</text>
    </Frame>
  );
}

export function MetallicBonding(props: DiagramProps) {
  // Positive ions in rows, electrons wandering between them. The delocalised
  // electrons are why metals conduct and why the layers can slide, which is
  // two exam answers from one picture.
  const ions: (readonly [number, number])[] = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 5; c++) ions.push([56 + c * 26, 28 + r * 24] as const);
  }
  return (
    <Frame
      caption={"positive ions in a lattice, electrons free to move"}
      {...props}
      label="A metal drawn as rows of positive ions with delocalised electrons scattered between them"
    >
      {ions.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={8} className={`${angleFill} ${angleStroke}`} strokeWidth={1.4} />
          <text x={x} y={y + 3} textAnchor="middle" className="fill-current text-[8px] opacity-75">+</text>
        </g>
      ))}
      {ions.slice(0, 12).map(([x, y], i) => (
        <circle key={`e${i}`} cx={x + 13} cy={y + 12} r={2.4} className="fill-current opacity-70" />
      ))}
      <text x={110} y={100} textAnchor="middle" className={plainLabel}>
        the free electrons carry the charge
      </text>
    </Frame>
  );
}

// ─── Giant structures ───────────────────────────────────────────────────────

export function DiamondGraphite(props: DiagramProps) {
  // Same element, different structure, opposite properties. Side by side is
  // the only way this lands: four bonds each and rigid, versus three bonds
  // each in sheets with a spare electron.
  const hex = (cx: number, cy: number, r: number) =>
    `M ${Array.from({ length: 6 }, (_, i) => {
      const [x, y] = polar(cx, cy, r, 90 + 60 * i);
      return `${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" L ")} Z`;
  return (
    <Frame
      caption={"diamond: 4 bonds, rigid. graphite: 3 bonds, sheets that slide"}
      {...props}
      label="Diamond drawn as a rigid network where each carbon has four bonds, beside graphite drawn as flat hexagonal layers with gaps between them"
    >
      <text x={54} y={16} textAnchor="middle" className={label}>diamond</text>
      {([[54, 40], [34, 62], [74, 62], [54, 84]] as const).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5} className={`${angleFill} ${angleStroke}`} strokeWidth={1.4} />
      ))}
      <Fig d="M 54 40 L 34 62 M 54 40 L 74 62 M 34 62 L 54 84 M 74 62 L 54 84 M 54 40 L 54 22 M 54 84 L 54 98" />
      <text x={156} y={16} textAnchor="middle" className={label}>graphite</text>
      {[30, 54, 78].map((y) => (
        <g key={y}>
          <Fig d={hex(134, y, 11)} />
          <Fig d={hex(153, y, 11)} />
          <Fig d={hex(172, y, 11)} />
        </g>
      ))}
      <text x={156} y={104} textAnchor="middle" className={plainLabel}>weak between layers</text>
    </Frame>
  );
}

// ─── Separating mixtures ────────────────────────────────────────────────────

export function FractionalDistillation(props: DiagramProps) {
  // The column, hot at the bottom and cool at the top. Short chains have low
  // boiling points so they climb; long ones condense straight away. Both
  // facts are read off the picture rather than memorised as a list.
  const rows = [
    { y: 24, name: "gases" },
    { y: 42, name: "petrol" },
    { y: 60, name: "kerosene" },
    { y: 78, name: "diesel" },
  ];
  return (
    <Frame
      caption={"cool at the top, hot at the bottom — short chains rise highest"}
      {...props}
      label="A fractionating column with gases leaving at the cool top, petrol, kerosene and diesel below, and bitumen at the hot bottom"
    >
      <path d="M 70 16 L 130 16 L 130 96 L 70 96 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      {rows.map((r) => (
        <g key={r.y}>
          <Fig d={`M 130 ${r.y} L 158 ${r.y}`} />
          <Fig d={arrowHead(158, r.y, 0)} />
          <text x={162} y={r.y + 4} className={plainLabel}>{r.name}</text>
        </g>
      ))}
      <Fig d="M 70 90 L 52 90" />
      <Fig d={arrowHead(52, 90, 180)} />
      <text x={48} y={93} textAnchor="end" className={plainLabel}>bitumen</text>
      <text x={64} y={26} textAnchor="end" className={label}>cool</text>
      <text x={64} y={70} textAnchor="end" className={label}>hot</text>
    </Frame>
  );
}

export function Chromatography(props: DiagramProps) {
  // The pencil baseline sits ABOVE the solvent. Draw it in ink or below the
  // solvent line and the experiment is wrong — which is a mark, and is the
  // reason this diagram is worth having.
  const spots = [62, 90, 118, 146];
  return (
    <Frame
      caption={"pencil baseline, above the solvent — never in ink"}
      {...props}
      label="A chromatography paper in a beaker, with a pencil baseline above the solvent level and separated spots that have travelled different distances"
    >
      <Fig d="M 32 16 L 32 96 L 188 96 L 188 16" />
      <path d="M 44 20 L 176 20 L 176 92 L 44 92 Z" className={line} strokeWidth={1.4} fill="none" />
      <path d="M 44 78 L 176 78 L 176 92 L 44 92 Z" className={angleFill} strokeWidth={0} />
      <Fig d="M 44 78 L 176 78" />
      <text x={110} y={90} textAnchor="middle" className={plainLabel}>solvent</text>
      <Mark d="M 52 66 L 168 66" />
      <text x={180} y={62} textAnchor="end" className={label}>baseline</text>
      {spots.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={66} r={3} className="fill-current opacity-50" />
          <circle cx={x} cy={62 - i * 9} r={4} className={`${angleFill} ${angleStroke}`} strokeWidth={1.4} />
        </g>
      ))}
    </Frame>
  );
}

// ─── Energy changes ─────────────────────────────────────────────────────────

export function ReactionProfileExothermic(props: DiagramProps) {
  // Rebuilt: the first version wrote "reactants", "Ea" and the y-axis label on
  // top of one another, and put the activation-energy bar nowhere near the
  // hump it is supposed to measure. Ea now runs from the reactant level to the
  // peak, which is what it means.
  const reactants = 46;
  const peak = 22;
  const products = 74;
  return (
    <Frame
      caption={"products lower than reactants — energy given out"}
      {...props}
      label="An exothermic reaction profile with the products at a lower energy than the reactants, the activation energy marked from the reactant level up to the peak, and the overall energy change negative"
    >
      <Fig d={`M 30 14 L 30 92 L 200 92`} />
      <path
        d={`M 42 ${reactants} L 72 ${reactants} C 92 ${reactants}, 92 ${peak}, 112 ${peak} C 132 ${peak}, 134 ${products}, 156 ${products} L 192 ${products}`}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
      />
      <Fig d={`M 42 ${reactants} L 176 ${reactants}`} dashed />
      <Mark d={`M 66 ${reactants} L 66 ${peak}`} />
      <Mark d={`M 62 ${peak} L 70 ${peak}`} />
      <text x={58} y={peak + 8} textAnchor="end" className={label}>Ea</text>
      <Mark d={`M 176 ${reactants} L 176 ${products}`} />
      <text x={180} y={(reactants + products) / 2 + 4} className={label}>ΔH</text>
      <text x={40} y={reactants + 16} className={plainLabel}>reactants</text>
      <text x={168} y={products + 16} textAnchor="end" className={plainLabel}>products</text>
    </Frame>
  );
}

export function ReactionProfileEndothermic(props: DiagramProps) {
  const reactants = 74;
  const peak = 20;
  const products = 46;
  return (
    <Frame
      caption={"products higher than reactants — energy taken in"}
      {...props}
      label="An endothermic reaction profile with the products at a higher energy than the reactants and the overall energy change positive"
    >
      <Fig d={`M 30 14 L 30 92 L 200 92`} />
      <path
        d={`M 42 ${reactants} L 72 ${reactants} C 92 ${reactants}, 92 ${peak}, 112 ${peak} C 132 ${peak}, 134 ${products}, 156 ${products} L 192 ${products}`}
        className={angleStroke}
        strokeWidth={2}
        fill="none"
      />
      <Fig d={`M 42 ${reactants} L 176 ${reactants}`} dashed />
      <Mark d={`M 176 ${reactants} L 176 ${products}`} />
      <text x={180} y={(reactants + products) / 2 + 4} className={label}>ΔH</text>
      <text x={44} y={reactants + 12} className={plainLabel}>reactants</text>
      <text x={192} y={products - 6} textAnchor="end" className={plainLabel}>products</text>
    </Frame>
  );
}

// ─── Electrolysis ───────────────────────────────────────────────────────────

export function ElectrolysisCell(props: DiagramProps) {
  // Which electrode is which is the thing people get backwards. Positive ions
  // go to the negative electrode — that is the whole rule, and it is drawn
  // here rather than stated.
  return (
    <Frame
      caption={"positive ions go to the negative cathode"}
      {...props}
      label="An electrolysis cell with a positive anode and a negative cathode dipped into molten electrolyte, positive ions moving towards the cathode and negative ions towards the anode"
    >
      <Fig d="M 40 34 L 40 92 L 180 92 L 180 34" />
      <path d="M 40 46 L 180 46 L 180 92 L 40 92 Z" className={angleFill} strokeWidth={0} />
      <Fig d="M 40 46 L 180 46" />
      <Fig d="M 72 20 L 72 82 M 148 20 L 148 82" />
      <Fig d="M 72 20 L 148 20" />
      <text x={72} y={16} textAnchor="middle" className={label}>−</text>
      <text x={148} y={16} textAnchor="middle" className={label}>+</text>
      <text x={72} y={104} textAnchor="middle" className={plainLabel}>cathode</text>
      <text x={148} y={104} textAnchor="middle" className={plainLabel}>anode</text>
      <Mark d="M 108 60 L 84 60" />
      <Mark d={arrowHead(84, 60, 180)} />
      <text x={112} y={63} className={label}>+</text>
      <Mark d="M 116 74 L 138 74" />
      <Mark d={arrowHead(138, 74, 0)} />
      <text x={112} y={77} textAnchor="end" className={label}>−</text>
    </Frame>
  );
}

// ─── Rates ──────────────────────────────────────────────────────────────────

export function RateGraph(props: DiagramProps) {
  // Two curves that finish at the SAME height. That is the point: a catalyst
  // or a higher concentration changes how fast you get there, not how much
  // product you end up with. Reading the flat part as "the reaction sped up"
  // is the classic wrong answer.
  return (
    <Frame
      caption={"steeper = faster, but the same amount of product"}
      {...props}
      label="Two rate curves reaching the same final amount of product, one rising more steeply than the other and both levelling off at the same height"
    >
      <Fig d="M 28 14 L 28 90 L 200 90" />
      <Fig d="M 28 26 L 196 26" dashed />
      <path d="M 28 90 C 52 34, 70 26, 120 26" className={angleStroke} strokeWidth={2} fill="none" />
      <path d="M 28 90 C 80 60, 110 26, 190 26" className={line} strokeWidth={2} fill="none" />
      <text x={82} y={44} className={label}>faster</text>
      <text x={140} y={54} className={plainLabel}>slower</text>
      <text x={30} y={10} textAnchor="middle" className={plainLabel}>product</text>
      <text x={200} y={103} textAnchor="end" className={plainLabel}>time</text>
    </Frame>
  );
}

export function CollisionTheory(props: DiagramProps) {
  // Concentration, drawn. Same box, more particles, more collisions. It is
  // almost too simple to draw — and it is exactly the answer the mark scheme
  // wants, so it is worth drawing.
  const grid = (x0: number, cols: number, rows: number, step: number) => {
    const out: (readonly [number, number])[] = [];
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) out.push([x0 + c * step + (r % 2) * (step / 2), 30 + r * step] as const);
    return out;
  };
  return (
    <Frame
      caption={"more particles in the same space = more collisions"}
      {...props}
      label="Two identical boxes, the second containing many more particles than the first, showing that a higher concentration means more frequent collisions"
    >
      <Fig d="M 20 20 L 98 20 L 98 92 L 20 92 Z" />
      {grid(30, 3, 3, 24).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} className={`${angleFill} ${angleStroke}`} strokeWidth={1.3} />
      ))}
      <Fig d="M 122 20 L 200 20 L 200 92 L 122 92 Z" />
      {grid(132, 4, 4, 15).map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r={4} className={`${angleFill} ${angleStroke}`} strokeWidth={1.3} />
      ))}
      <text x={59} y={106} textAnchor="middle" className={plainLabel}>dilute</text>
      <text x={161} y={106} textAnchor="middle" className={label}>concentrated</text>
    </Frame>
  );
}

// ─── Organic ────────────────────────────────────────────────────────────────

export function AlkaneAlkene(props: DiagramProps) {
  // The double bond is the entire difference, and it is why one decolourises
  // bromine water and the other does not.
  return (
    <Frame
      caption={"the double bond is why alkenes decolourise bromine water"}
      {...props}
      label="Ethane drawn with a single carbon to carbon bond beside ethene drawn with a double bond, each carbon's hydrogens shown"
    >
      <text x={56} y={16} textAnchor="middle" className={plainLabel}>ethane</text>
      <text x={38} y={58} textAnchor="middle" className={label}>C</text>
      <text x={78} y={58} textAnchor="middle" className={label}>C</text>
      <Fig d="M 45 54 L 71 54" />
      <Fig d="M 34 48 L 24 38 M 34 60 L 24 70 M 82 48 L 92 38 M 82 60 L 92 70 M 38 44 L 38 32 M 78 44 L 78 32" />
      <text x={56} y={92} textAnchor="middle" className={plainLabel}>single bond</text>
      <text x={164} y={16} textAnchor="middle" className={plainLabel}>ethene</text>
      <text x={146} y={58} textAnchor="middle" className={label}>C</text>
      <text x={186} y={58} textAnchor="middle" className={label}>C</text>
      <Mark d="M 153 51 L 179 51 M 153 57 L 179 57" />
      <Fig d="M 142 48 L 132 38 M 142 60 L 132 70 M 190 48 L 200 38 M 190 60 L 200 70" />
      <text x={164} y={92} textAnchor="middle" className={label}>double bond</text>
    </Frame>
  );
}

// ─── The periodic table ─────────────────────────────────────────────────────

export function PeriodicTableLayout(props: DiagramProps) {
  // Not the whole table — the SHAPE of it, which is what the questions are
  // about. Group number is the outer electrons, period number is the shells,
  // and the metals are everything left of the staircase.
  const w = 10.5;
  const h = 11;
  const x0 = 8;
  const y0 = 30;
  // Which cells are filled, row by row, as a real periodic table is shaped.
  const filled: [number, number][] = [];
  const push = (row: number, from: number, to: number) => {
    for (let c = from; c <= to; c++) filled.push([row, c]);
  };
  push(0, 1, 1); push(0, 18, 18);
  push(1, 1, 2); push(1, 13, 18);
  push(2, 1, 2); push(2, 13, 18);
  push(3, 1, 18);
  push(4, 1, 18);
  return (
    <Frame
      caption={"group = outer electrons, period = number of shells"}
      {...props}
      label="The shape of the periodic table with group 1 and group 7 and group 0 picked out, and the staircase dividing metals from non-metals"
    >
      {filled.map(([r, c]) => {
        const highlight = c === 1 || c === 17 || c === 18;
        return (
          <rect
            key={`${r}-${c}`}
            x={x0 + (c - 1) * w}
            y={y0 + r * h}
            width={w - 1}
            height={h - 1}
            className={highlight ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={0.8}
            fill={highlight ? undefined : "none"}
          />
        );
      })}
      <text x={x0 + 4} y={y0 - 4} textAnchor="middle" className={label}>1</text>
      <text x={x0 + 16 * w + 4} y={y0 - 4} textAnchor="middle" className={label}>7</text>
      <text x={x0 + 17.6 * w} y={y0 - 4} textAnchor="middle" className={label}>0</text>
      <text x={110} y={y0 - 14} textAnchor="middle" className={plainLabel}>group</text>
      <text x={60} y={98} textAnchor="middle" className={plainLabel}>metals</text>
      <text x={168} y={98} textAnchor="middle" className={plainLabel}>non-metals</text>
      <Mark d={`M ${x0 + 12 * w} ${y0 + 2 * h} L ${x0 + 12 * w} ${y0 + 5 * h}`} />
    </Frame>
  );
}

// ─── Equations ──────────────────────────────────────────────────────────────

export function BalancingEquations(props: DiagramProps) {
  // Balancing is counting atoms, and counting is much easier to do when the
  // atoms are drawn. The numbers here are for CH4 + 2O2 -> CO2 + 2H2O.
  const rows = [
    ["C", "1", "1"],
    ["H", "4", "4"],
    ["O", "4", "4"],
  ];
  const x = [46, 96, 146];
  const w = 50;
  const y0 = 40;
  const hh = 17;
  return (
    <Frame
      caption={"balanced means the same count of every atom on both sides"}
      {...props}
      label="A table counting the carbon, hydrogen and oxygen atoms on each side of a balanced equation, showing the totals match"
    >
      <text x={110} y={22} textAnchor="middle" className={label}>
        CH₄ + 2O₂ → CO₂ + 2H₂O
      </text>
      {["atom", "left", "right"].map((head, c) => (
        <g key={head}>
          <rect x={x[c]} y={y0} width={w} height={hh} className={`${angleFill} ${angleStroke}`} strokeWidth={1.2} />
          <text x={x[c] + w / 2} y={y0 + 12} textAnchor="middle" className="fill-current text-[9px] font-semibold">
            {head}
          </text>
        </g>
      ))}
      {rows.map((row, r) =>
        row.map((cell, c) => (
          <g key={`${r}-${c}`}>
            <rect x={x[c]} y={y0 + hh * (r + 1)} width={w} height={hh} className={line} strokeWidth={1} fill="none" />
            <text
              x={x[c] + w / 2}
              y={y0 + hh * (r + 1) + 12}
              textAnchor="middle"
              className="fill-current text-[9px]"
            >
              {cell}
            </text>
          </g>
        )),
      )}
    </Frame>
  );
}

export function MoleTriangle(props: DiagramProps) {
  return (
    <Frame
      caption={"cover the one you want and read off the other two"}
      {...props}
      label="A formula triangle with mass on top, and moles and relative formula mass underneath, for rearranging the moles equation"
    >
      <path d="M 110 12 L 178 88 L 42 88 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={2} />
      <Fig d="M 62 62 L 158 62" />
      <Fig d="M 110 62 L 110 88" />
      <text x={110} y={50} textAnchor="middle" className={label}>mass</text>
      <text x={84} y={80} textAnchor="middle" className={label}>mol</text>
      <text x={138} y={80} textAnchor="middle" className={label}>Mr</text>
      <text x={110} y={104} textAnchor="middle" className={plainLabel}>moles = mass ÷ Mr</text>
    </Frame>
  );
}

// ─── Acids ──────────────────────────────────────────────────────────────────

export function PhScale(props: DiagramProps) {
  // Drawn as a strip with the numbers under it. Deliberately not coloured
  // like a universal indicator chart: the site uses two colours everywhere,
  // and a colour-blind student would get nothing from a rainbow anyway.
  const x0 = 12;
  const wide = 196;
  const cell = wide / 15;
  return (
    <Frame
      caption={"7 is neutral; every step is ten times stronger"}
      {...props}
      label="The pH scale from 0 to 14 with the acidic, neutral and alkaline regions marked"
    >
      {Array.from({ length: 15 }, (_, i) => (
        <g key={i}>
          <rect
            x={x0 + i * cell}
            y={34}
            width={cell}
            height={20}
            className={i === 7 ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1}
            fill={i === 7 ? undefined : "none"}
          />
          {i % 2 === 0 || i === 7 ? (
            <text
              x={x0 + i * cell + cell / 2}
              y={66}
              textAnchor="middle"
              className="fill-current text-[8px] opacity-70"
            >
              {i}
            </text>
          ) : null}
        </g>
      ))}
      <text x={x0 + 3.5 * cell} y={26} textAnchor="middle" className={plainLabel}>acidic</text>
      <text x={x0 + 7.5 * cell} y={26} textAnchor="middle" className={label}>neutral</text>
      <text x={x0 + 11.5 * cell} y={26} textAnchor="middle" className={plainLabel}>alkaline</text>
      <text x={110} y={90} textAnchor="middle" className={plainLabel}>
        pH 3 is ten times more acidic than pH 4
      </text>
    </Frame>
  );
}

// ─── Reactivity ─────────────────────────────────────────────────────────────

export function ReactivitySeries(props: DiagramProps) {
  // Ordered top to bottom, because "more reactive" and "higher up" is the
  // mental model every displacement question relies on.
  const metals = ["potassium", "sodium", "calcium", "magnesium", "CARBON", "zinc", "iron", "copper", "gold"];
  return (
    <Frame
      caption={"a metal displaces any metal below it"}
      {...props}
      label="The reactivity series listed from potassium at the top down to gold at the bottom, with an arrow showing reactivity decreasing downwards"
    >
      {metals.map((m, i) => (
        <text
          key={m}
          x={82}
          y={16 + i * 11}
          textAnchor="end"
          className={i === 4 ? label : "fill-current text-[9px]"}
        >
          {m === "CARBON" ? "carbon" : m}
        </text>
      ))}
      <Mark d="M 92 8 L 92 104" />
      <Mark d={arrowHead(92, 104, 270)} />
      <text x={100} y={26} className={plainLabel}>less</text>
      <text x={100} y={38} className={plainLabel}>reactive</text>
      {/* Carbon is in the list, so the line it marks means something.
          Without it the dashed rule floated between two metals for no
          visible reason. */}
      <Fig d="M 98 56 L 214 56" dashed />
      <text x={100} y={72} className={plainLabel}>carbon extracts</text>
      <text x={100} y={84} className={plainLabel}>anything below</text>
    </Frame>
  );
}

// ─── Equilibrium ────────────────────────────────────────────────────────────

export function DynamicEquilibrium(props: DiagramProps) {
  // Two rates converging and then staying level. Equilibrium is not "the
  // reaction stopped" — both directions are still going, at the same rate,
  // which is exactly what the graph shows and a sentence does not.
  return (
    <Frame
      caption={"both reactions continue — at equal rates"}
      {...props}
      label="A graph of forward and backward reaction rates converging to the same value, showing that at equilibrium both continue at an equal rate"
    >
      <Fig d="M 30 14 L 30 88 L 200 88" />
      <path d="M 30 22 C 60 22, 80 52, 130 52 L 192 52" className={angleStroke} strokeWidth={2} fill="none" />
      <path d="M 30 86 C 70 86, 86 52, 130 52 L 192 52" className={line} strokeWidth={2} fill="none" />
      <text x={36} y={18} className={label}>forward</text>
      <text x={36} y={78} className={plainLabel}>backward</text>
      <Fig d="M 130 52 L 130 88" dashed />
      <text x={132} y={44} className={label}>equilibrium</text>
      <text x={26} y={12} textAnchor="end" className={plainLabel}>rate</text>
    </Frame>
  );
}

// ─── Polymers ───────────────────────────────────────────────────────────────

export function AdditionPolymerisation(props: DiagramProps) {
  // Many monomers, one polymer, nothing else produced. The "nothing else"
  // is the whole difference from condensation polymerisation.
  return (
    <Frame
      caption={"many monomers, one polymer, nothing else made"}
      {...props}
      label="Three ethene monomers with double bonds joining into a length of poly(ethene) with single bonds, producing no other product"
    >
      {[20, 62, 104].map((x) => (
        <g key={x}>
          <text x={x} y={40} textAnchor="middle" className="fill-current text-[9px]">C=C</text>
          <rect x={x - 16} y={26} width={32} height={20} className={line} strokeWidth={1.4} fill="none" />
        </g>
      ))}
      <text x={62} y={16} textAnchor="middle" className={plainLabel}>monomers</text>
      <Mark d="M 128 36 L 150 36" />
      <Mark d={arrowHead(150, 36, 0)} />
      <path d="M 20 62 L 200 62 L 200 84 L 20 84 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.6} />
      <text x={110} y={77} textAnchor="middle" className="fill-current text-[9px]">
        —C—C—C—C—C—C—
      </text>
      <text x={110} y={100} textAnchor="middle" className={label}>polymer: the double bonds open up</text>
    </Frame>
  );
}

// ─── Chemical analysis ──────────────────────────────────────────────────────

export function GasTests(props: DiagramProps) {
  const rows = [
    ["oxygen", "relights a glowing splint"],
    ["hydrogen", "squeaky pop with a lit splint"],
    ["CO₂", "turns limewater cloudy"],
    ["chlorine", "bleaches damp litmus paper"],
  ];
  const x0 = 12;
  const w1 = 54;
  const w2 = 142;
  const y0 = 18;
  const h = 20;
  return (
    <Frame
      caption={"name the test AND the result — both are marks"}
      {...props}
      label="A table of the four gas tests: oxygen relights a glowing splint, hydrogen gives a squeaky pop, carbon dioxide turns limewater cloudy, and chlorine bleaches damp litmus paper"
    >
      {rows.map(([gas, test], r) => (
        <g key={gas}>
          <rect x={x0} y={y0 + r * h} width={w1} height={h} className={`${angleFill} ${angleStroke}`} strokeWidth={1} />
          <text x={x0 + w1 / 2} y={y0 + r * h + 13} textAnchor="middle" className="fill-current text-[9px] font-semibold">
            {gas}
          </text>
          <rect x={x0 + w1} y={y0 + r * h} width={w2} height={h} className={line} strokeWidth={1} fill="none" />
          <text x={x0 + w1 + 6} y={y0 + r * h + 13} className="fill-current text-[9px]">
            {test}
          </text>
        </g>
      ))}
    </Frame>
  );
}

// ─── The atmosphere ─────────────────────────────────────────────────────────

export function GreenhouseEffect(props: DiagramProps) {
  // Short-wave in, long-wave out, some of it trapped. The two different
  // wavelengths are the mechanism, and the reason a diagram beats a sentence.
  return (
    <Frame
      caption={"short-wave in, long-wave out, some of it trapped"}
      {...props}
      label="Short wavelength radiation from the Sun passing through the atmosphere to the Earth, and longer wavelength radiation leaving, with some re-radiated back down by greenhouse gases"
    >
      <Fig d="M 14 88 L 206 88" />
      <text x={110} y={100} textAnchor="middle" className={plainLabel}>Earth</text>
      <Fig d="M 14 34 L 206 34" dashed />
      <text x={62} y={26} className={plainLabel}>greenhouse gases</text>
      <Fig d="M 16 8 L 56 88" />
      <Fig d={arrowHead(56, 88, -63)} />
      <text x={10} y={64} className={plainLabel}>in</text>
      <Mark d="M 112 88 L 146 34" />
      <Mark d={arrowHead(146, 34, 58)} />
      <Mark d="M 146 34 L 176 88" />
      <Mark d={arrowHead(176, 88, -61)} />
      <text x={182} y={62} className={label}>back</text>
      <Mark d="M 146 34 L 158 10" />
      <Mark d={arrowHead(158, 10, 63)} />
      <text x={164} y={14} className={plainLabel}>out</text>
    </Frame>
  );
}

// ─── Resources ──────────────────────────────────────────────────────────────

export function WaterTreatment(props: DiagramProps) {
  const steps = ["filter", "sterilise", "safe to drink"];
  return (
    <Frame
      caption={"potable means safe to drink, not pure"}
      {...props}
      label="The stages of treating fresh water to make it potable: filtering out solids, then sterilising to kill microbes"
    >
      <text x={110} y={20} textAnchor="middle" className={plainLabel}>fresh water</text>
      {steps.map((s, i) => (
        <g key={s}>
          <rect
            x={12 + i * 70}
            y={38}
            width={62}
            height={26}
            className={i === 2 ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1.8}
            fill={i === 2 ? undefined : "none"}
          />
          <text x={43 + i * 70} y={55} textAnchor="middle" className="fill-current text-[9px]">{s}</text>
          {i < 2 ? (
            <>
              <Mark d={`M ${74 + i * 70} 51 L ${80 + i * 70} 51`} />
              <Mark d={arrowHead(80 + i * 70, 51, 0)} />
            </>
          ) : null}
        </g>
      ))}
      <text x={110} y={86} textAnchor="middle" className={plainLabel}>
        potable water still contains dissolved salts
      </text>
    </Frame>
  );
}
