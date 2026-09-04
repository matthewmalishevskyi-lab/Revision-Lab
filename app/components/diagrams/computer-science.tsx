// The computer science diagrams.
//
// Two of the three things a programming student most needs to see cannot be
// written as a sentence at all. A flowchart is a picture by definition, and a
// trace table is a grid — describing either in prose is strictly harder to
// learn from than showing it, which is why every exam paper prints them.

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

// ─── Flowcharts ─────────────────────────────────────────────────────────────

export function FlowchartShapes(props: DiagramProps) {
  // The four shapes, with what each one means. Marks are given for the RIGHT
  // shape in the right place, so this is a diagram about a diagram.
  //
  // Two by two, with each label UNDER its shape. Laying the four out in one
  // row ran the captions into each other; putting the labels beside the
  // shapes instead pushed "decision" off the right-hand edge. Under is the
  // only arrangement that fits in a 220-unit box.
  const shapes = [
    { cx: 58, cy: 26, name: "start / stop" },
    { cx: 162, cy: 26, name: "process" },
    { cx: 58, cy: 68, name: "input / output" },
    { cx: 162, cy: 68, name: "decision" },
  ];
  return (
    <Frame
      caption={"the shape carries meaning, and a decision always has two arrows out"}
      {...props}
      label="The four flowchart shapes: an oval for start and stop, a rectangle for a process, a parallelogram for input and output, and a diamond for a decision"
    >
      <rect x={30} y={15} width={56} height={22} rx={11} className={line} strokeWidth={1.8} fill="none" />
      <text x={58} y={29} textAnchor="middle" className="fill-current text-[9px]">start</text>

      <rect x={134} y={15} width={56} height={22} className={line} strokeWidth={1.8} fill="none" />
      <text x={162} y={29} textAnchor="middle" className="fill-current text-[9px]">x &lt;- 1</text>

      <path d="M 38 57 L 94 57 L 78 79 L 22 79 Z" className={line} strokeWidth={1.8} fill="none" />
      <text x={58} y={71} textAnchor="middle" className="fill-current text-[9px]">input</text>

      <path d="M 162 55 L 192 68 L 162 81 L 132 68 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <text x={162} y={71} textAnchor="middle" className="fill-current text-[7px]">x &gt; 6?</text>

      {shapes.map((sh) => (
        <text
          key={sh.name}
          x={sh.cx}
          y={sh.cy + 26}
          textAnchor="middle"
          className={sh.name === "decision" ? label : plainLabel}
        >
          {sh.name}
        </text>
      ))}
    </Frame>
  );
}

export function FlowchartSelection(props: DiagramProps) {
  // The same IF/ELSE a student has already written as pseudocode, drawn. The
  // two paths rejoining at the bottom is the part that makes selection click:
  // exactly one branch runs, and then the program carries on either way.
  return (
    <Frame
      caption={"exactly one branch runs, then the paths rejoin"}
      {...props}
      label="A flowchart of an if-else decision, with a Yes path and a No path that rejoin below before the program continues"
    >
      <path d="M 110 10 L 152 26 L 110 42 L 68 26 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <text x={110} y={29} textAnchor="middle" className="fill-current text-[8px]">mark &gt;= 40?</text>
      <Fig d="M 68 26 L 40 26 L 40 52" />
      <Fig d={arrowHead(40, 52, 270)} />
      <text x={52} y={22} textAnchor="middle" className={label}>Yes</text>
      <Fig d="M 152 26 L 180 26 L 180 52" />
      <Fig d={arrowHead(180, 52, 270)} />
      <text x={168} y={22} textAnchor="middle" className={label}>No</text>
      <rect x={14} y={54} width={52} height={20} className={line} strokeWidth={1.8} fill="none" />
      <text x={40} y={68} textAnchor="middle" className="fill-current text-[9px]">Pass</text>
      <rect x={154} y={54} width={52} height={20} className={line} strokeWidth={1.8} fill="none" />
      <text x={180} y={68} textAnchor="middle" className="fill-current text-[9px]">Fail</text>
      <Fig d="M 40 74 L 40 88 L 180 88 L 180 74" />
      <Fig d="M 110 88 L 110 100" />
      <Fig d={arrowHead(110, 100, 270)} />
    </Frame>
  );
}

export function FlowchartLoop(props: DiagramProps) {
  // A loop as a picture: the arrow going BACK UP is the loop. Once that is
  // seen, "the condition is checked before each pass" stops being a rule to
  // memorise and becomes something obvious from the shape.
  return (
    <Frame
      caption={"the arrow going back up is the loop"}
      {...props}
      label="A flowchart of a while loop, where the No path leaves the loop and the Yes path runs the body and returns to the condition above it"
    >
      <Fig d="M 110 8 L 110 20" />
      <Fig d={arrowHead(110, 20, 270)} />
      <path d="M 110 22 L 156 40 L 110 58 L 64 40 Z" className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <text x={110} y={43} textAnchor="middle" className="fill-current text-[8px]">x &gt; 6?</text>
      <Fig d="M 156 40 L 196 40 L 196 92" />
      <Fig d={arrowHead(196, 92, 270)} />
      <text x={176} y={34} textAnchor="middle" className={label}>No</text>
      <text x={196} y={104} textAnchor="middle" className={plainLabel}>carry on</text>
      <Fig d="M 110 58 L 110 68" />
      <Fig d={arrowHead(110, 68, 270)} />
      <text x={122} y={66} className={label}>Yes</text>
      <rect x={78} y={70} width={64} height={20} className={line} strokeWidth={1.8} fill="none" />
      <text x={110} y={84} textAnchor="middle" className="fill-current text-[9px]">x &lt;- x - 2</text>
      <Mark d="M 78 80 L 30 80 L 30 40 L 62 40" />
      <Mark d={arrowHead(62, 40, 0)} />
      <text x={30} y={100} textAnchor="middle" className={label}>loop</text>
    </Frame>
  );
}

// ─── Trace tables ───────────────────────────────────────────────────────────

export function TraceTable(props: DiagramProps) {
  // A filled-in trace table for the loop above, so the technique is shown
  // rather than described. One row per pass, and the last row is the one that
  // ends the loop — which is where most trace-table marks are lost.
  const rows = [
    ["start", "10", "—"],
    ["1", "8", "10 > 6 true"],
    ["2", "6", "8 > 6 true"],
    ["3", "6", "6 > 6 FALSE"],
  ];
  const x = [16, 66, 116];
  const w = [50, 50, 88];
  const y0 = 22;
  const h = 18;
  return (
    <Frame
      caption={"one row per pass — the last row is the check that ends it"}
      {...props}
      label="A completed trace table for a while loop, with a column for the pass number, the value of x, and the result of the condition check"
    >
      {["pass", "x", "condition"].map((head, c) => (
        <g key={head}>
          <rect x={x[c]} y={y0} width={w[c]} height={h} className={`${angleFill} ${angleStroke}`} strokeWidth={1.4} />
          <text x={x[c] + w[c] / 2} y={y0 + 13} textAnchor="middle" className={label}>{head}</text>
        </g>
      ))}
      {rows.map((row, r) =>
        row.map((cell, c) => (
          <g key={`${r}-${c}`}>
            <rect
              x={x[c]}
              y={y0 + h * (r + 1)}
              width={w[c]}
              height={h}
              className={line}
              strokeWidth={1.2}
              fill="none"
            />
            <text
              x={x[c] + w[c] / 2}
              y={y0 + h * (r + 1) + 13}
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

// ─── Arrays ─────────────────────────────────────────────────────────────────

export function ArrayIndexing(props: DiagramProps) {
  // Zero-based indexing, drawn. This causes more off-by-one errors than
  // anything else at GCSE, and the fix is almost always just seeing the
  // indexes written under the values once.
  const values = ["12", "45", "7", "30", "22"];
  const w = 36;
  const x0 = 20;
  return (
    <Frame
      caption={"5 items means indexes 0 to 4 — the last is length minus one"}
      {...props}
      label="An array of five values with the indexes zero to four written underneath, showing that the first index is zero and the last is one less than the length"
    >
      {values.map((v, i) => (
        <g key={i}>
          <rect
            x={x0 + i * w}
            y={26}
            width={w}
            height={28}
            className={i === 0 ? `${angleFill} ${angleStroke}` : line}
            strokeWidth={1.8}
            fill={i === 0 ? undefined : "none"}
          />
          <text x={x0 + i * w + w / 2} y={45} textAnchor="middle" className="fill-current text-[12px]">{v}</text>
          <text x={x0 + i * w + w / 2} y={70} textAnchor="middle" className={label}>{i}</text>
        </g>
      ))}
      <text x={110} y={18} textAnchor="middle" className={plainLabel}>scores</text>
      <text x={110} y={90} textAnchor="middle" className={plainLabel}>scores[0] is 12, and scores[5] does not exist</text>
    </Frame>
  );
}

// ─── Subprograms ────────────────────────────────────────────────────────────

export function SubprogramCall(props: DiagramProps) {
  // Where the arguments go and what comes back. Parameter against argument is
  // asked almost every year, and it is a labelling problem more than a
  // conceptual one.
  //
  // Redrawn: the first version crossed the two arrows over each other and put
  // the word "arguments" half off the left-hand edge.
  return (
    <Frame
      caption={"arguments go in by position; the return value comes back"}
      {...props}
      label="A call to a function showing the arguments five and three being passed into the parameters width and height, and the value fifteen being returned"
    >
      <rect x={12} y={12} width={82} height={22} className={line} strokeWidth={1.8} fill="none" />
      <text x={53} y={27} textAnchor="middle" className="fill-current text-[9px]">total &lt;- area(5, 3)</text>

      <rect x={112} y={54} width={96} height={34} className={`${angleFill} ${angleStroke}`} strokeWidth={1.8} />
      <text x={160} y={68} textAnchor="middle" className="fill-current text-[8px]">FUNCTION area(w, h)</text>
      <text x={160} y={81} textAnchor="middle" className="fill-current text-[8px]">RETURN w * h</text>

      <Mark d="M 94 23 L 134 23 L 134 50" />
      <Mark d={arrowHead(134, 50, 270)} />
      <text x={138} y={26} className={label}>5, 3 in</text>

      <Fig d="M 112 71 L 40 71 L 40 38" />
      <Fig d={arrowHead(40, 38, 90)} />
      <text x={44} y={62} className={plainLabel}>returns 15</text>

      <text x={110} y={104} textAnchor="middle" className={plainLabel}>
        5 and 3 are the arguments
      </text>
    </Frame>
  );
}
