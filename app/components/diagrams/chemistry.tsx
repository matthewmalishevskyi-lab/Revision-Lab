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
      {[36, 62, 88].map((y) => (
        <g key={y}>
          <Fig d={hex(134, y, 11)} />
          <Fig d={hex(153, y, 11)} />
          <Fig d={hex(172, y, 11)} />
        </g>
      ))}
      <text x={156} y={100} textAnchor="middle" className={plainLabel}>weak between layers</text>
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
      <text x={110} y={92} textAnchor="middle" className={plainLabel}>solvent</text>
      <Mark d="M 52 66 L 168 66" />
      <text x={110} y={106} textAnchor="middle" className={label}>pencil baseline</text>
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
      <text x={58} y={(reactants + peak) / 2 + 4} textAnchor="end" className={label}>Ea</text>
      <Mark d={`M 176 ${reactants} L 176 ${products}`} />
      <text x={180} y={(reactants + products) / 2 + 4} className={label}>ΔH</text>
      <text x={44} y={reactants + 14} className={plainLabel}>reactants</text>
      <text x={192} y={products - 6} textAnchor="end" className={plainLabel}>products</text>
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
