// The drawing toolkit every subject diagram is built from.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// Matthew's note, after reading the maths topics properly: "when you explain
// the angle rules you should put the diagram of that rule" — then, in the same
// breath, "not just for the angle rules, for different stuff." He is right,
// and it was the single biggest weakness in the content. "Alternate angles are
// equal — they form a Z shape" is not an explanation to somebody who does not
// already know the rule. It is a caption for a picture that was never drawn.
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS, AND WHY IT LOOKS LIKE Icon.tsx
//
// The content files stay PLAIN DATA. A key-fact block names the diagrams it
// wants — `diagrams: ["angles-on-a-line", "animal-cell"]` — and the registry
// in ./index.tsx turns a name into a drawing, exactly the way Icon.tsx turns
// "chip" into a chip and MASCOTS turns "hoot" into an owl. Content never
// imports a component, so nothing in app/lib/content/ has to know React
// exists.
//
// A name that does not exist renders nothing at all, silently — which is the
// failure shape this codebase keeps getting caught by. So there is a check in
// scripts/check-content.mjs that fails the build if a content file names a
// diagram no subject file exports.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS FILE IS SEPARATE FROM THE DIAGRAMS THEMSELVES
//
// Everything below is shared by every subject: the angle maths, the two
// colours, the frame with its caption. The pictures live one per subject in
// ./maths.tsx, ./physics.tsx, ./chemistry.tsx and ./biology.tsx, because a
// single file holding every diagram on the site would be several thousand
// lines and nobody would ever find anything in it.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE ARCS ARE COMPUTED, NOT HAND-WRITTEN
//
// An SVG arc is `A rx ry rotation large-arc-flag sweep-flag x y`, and getting
// the two flags wrong silently draws the arc the long way round the circle —
// which on an angle diagram means labelling 135° as 225°. A wrong diagram is
// worse than no diagram, so the arcs come from `arc()` and `wedge()` below,
// which take plain degrees measured the way a maths student measures them:
// anticlockwise from the positive x-axis.
// ─────────────────────────────────────────────────────────────────────────────

// SVG puts y DOWNWARDS, maths puts it upwards. Every angle in this file is a
// normal maths angle and this one function is the only place that difference
// is dealt with.
export function polar(cx: number, cy: number, r: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180;
  return [cx + r * Math.cos(radians), cy - r * Math.sin(radians)] as const;
}

/** An arc of a circle, from one angle to another, anticlockwise. */
export function arc(cx: number, cy: number, r: number, from: number, to: number) {
  const [x1, y1] = polar(cx, cy, r, from);
  const [x2, y2] = polar(cx, cy, r, to);
  const largeArc = Math.abs(to - from) > 180 ? 1 : 0;
  // Increasing maths angle is anticlockwise, and because y is flipped that is
  // sweep-flag 0 in SVG. Going backwards through the angles is sweep-flag 1.
  const sweep = to > from ? 0 : 1;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/** The filled slice of pie between two angles — the shaded bit of an angle. */
export function wedge(cx: number, cy: number, r: number, from: number, to: number) {
  return `${arc(cx, cy, r, from, to)} L ${cx} ${cy} Z`;
}

/** A short line from one point in a given direction — for extending a side. */
export function ray(cx: number, cy: number, r: number, degrees: number) {
  const [x, y] = polar(cx, cy, r, degrees);
  return `M ${cx} ${cy} L ${x.toFixed(2)} ${y.toFixed(2)}`;
}

// ─── Shared styling ─────────────────────────────────────────────────────────
//
// Two colours only. The FIGURE is `currentColor`, so it takes the page's own
// text colour and is therefore correct in dark mode without a single extra
// rule. The ANGLES are the site's blue, which is the one thing that should
// stand out from the lines it sits between.
//
// Equal angles are marked with matching numbers of arcs, not with different
// colours — that is what a real textbook does, and it is the version that
// still works for a colour-blind student.
export const line = "stroke-current opacity-60";
export const angleStroke = "stroke-blue-600 dark:stroke-blue-400";
export const angleFill = "fill-blue-600/10 dark:fill-blue-400/20";
export const label = "fill-blue-700 dark:fill-blue-300 text-[13px] font-semibold";
export const plainLabel = "fill-current text-[11px] opacity-70";

export function Angle({ d }: { d: string }) {
  return <path d={d} className={`${angleFill} ${angleStroke}`} strokeWidth={1.6} />;
}

export function Mark({ d }: { d: string }) {
  return <path d={d} className={angleStroke} strokeWidth={1.6} fill="none" />;
}

export function Fig({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      className={line}
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={dashed ? "5 4" : undefined}
    />
  );
}

// A small square in the corner, the standard way of saying "this is 90°".
export function RightAngle({ x, y, dx, dy }: { x: number; y: number; dx: number; dy: number }) {
  const s = 9;
  return (
    <path
      d={`M ${x + dx * s} ${y} L ${x + dx * s} ${y + dy * s} L ${x} ${y + dy * s}`}
      className={angleStroke}
      strokeWidth={1.6}
      fill="none"
    />
  );
}

export type DiagramProps = { className?: string };

export function Frame({
  label: ariaLabel,
  caption: captionText,
  children,
  className,
}: {
  label: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 220 112"
        role="img"
        aria-label={ariaLabel}
        className="h-auto w-full"
      >
        {children}
      </svg>

      {/* The caption used to be an SVG <text> inside the picture, and on over
          half the diagrams it was CLIPPED — the viewBox is 220 units wide, so
          anything longer than about forty characters ran off both ends and
          "the exterior angle = the two opposite interior angles" rendered as
          "terior angle = the two opposite interior a".

          Found by rendering all 28 and looking at them, which is the only way
          this kind of thing ever gets found. As real HTML it wraps instead of
          clipping, scales with the reader's font size rather than with the
          width of the column, and can be selected and read aloud. */}
      {captionText ? (
        <figcaption className="mt-1.5 text-center text-sm leading-snug opacity-70">
          {captionText}
        </figcaption>
      ) : null}
    </figure>
  );
}


// ─── Axes, for anything plotted ─────────────────────────────────────────────
//
// Statistics graphs, motion graphs and straight-line graphs all want the same
// pair of axes, and all want to talk in graph coordinates rather than SVG
// ones. PLOT gives every such diagram the same box to draw in, and `gx`/`gy`
// convert a 0-100 graph coordinate into a point inside it — including the
// y-flip, so a bigger number really is further UP the page.
export const PLOT = { left: 30, right: 202, top: 16, bottom: 88 };

export function gx(v: number) {
  return PLOT.left + (v / 100) * (PLOT.right - PLOT.left);
}

export function gy(v: number) {
  return PLOT.bottom - (v / 100) * (PLOT.bottom - PLOT.top);
}

export function Axes({ x, y }: { x?: string; y?: string }) {
  return (
    <>
      <Fig d={`M ${PLOT.left} ${PLOT.top} L ${PLOT.left} ${PLOT.bottom} L ${PLOT.right} ${PLOT.bottom}`} />
      {x ? (
        <text x={PLOT.right} y={PLOT.bottom + 13} textAnchor="end" className={plainLabel}>
          {x}
        </text>
      ) : null}
      {y ? (
        <text x={PLOT.left - 4} y={PLOT.top + 2} textAnchor="end" className={plainLabel}>
          {y}
        </text>
      ) : null}
    </>
  );
}

/** A polyline through graph coordinates — the usual way to draw a plotted line. */
export function plot(points: readonly (readonly [number, number])[]) {
  return points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${gx(x).toFixed(1)} ${gy(y).toFixed(1)}`)
    .join(" ");
}

/** An arrowhead at the end of a line, pointing along it. */
export function arrowHead(x: number, y: number, degrees: number, size = 7) {
  const [ax, ay] = polar(x, y, size, degrees + 150);
  const [bx, by] = polar(x, y, size, degrees - 150);
  return `M ${ax.toFixed(1)} ${ay.toFixed(1)} L ${x.toFixed(1)} ${y.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`;
}
