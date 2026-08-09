// The percentage rings on the progress page.
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW A RING CHART ACTUALLY WORKS — it is one clever line of CSS-adjacent maths
//
// It looks like an arc has been drawn from 0% round to 68%. It hasn't. A FULL
// circle is drawn, and then most of it is made invisible using the same
// mechanism that draws dashed lines.
//
// `strokeDasharray` sets a dash pattern: dash length, then gap length. Set the
// dash to the length of the coloured part and the gap to everything else, and
// you get exactly one dash — the visible arc — followed by a gap that swallows
// the rest of the circle.
//
// The length of the whole circle is its circumference, 2πr. So:
//
//     dash = circumference × percent
//     gap  = circumference − dash
//
// The rotation is because SVG circles start at 3 o'clock, and every ring chart
// anyone has ever seen starts at 12 o'clock. Turning it a quarter turn
// anticlockwise fixes that.
//
// Drawing it by hand rather than installing a chart library keeps the site at
// zero dependencies, and this is genuinely about six lines of real work.
// ─────────────────────────────────────────────────────────────────────────────

export function ProgressRing({
  percent,
  colour,
  size = 96,
  thickness = 9,
  label,
}: {
  percent: number;
  colour: string;
  size?: number;
  thickness?: number;
  /** What to show in the middle. Defaults to the percentage. */
  label?: string;
}) {
  // Clamped because a bug elsewhere producing 137% should render as a full
  // ring, not as a nonsense dash pattern.
  const safe = Math.max(0, Math.min(100, percent));

  // The radius has to allow for the stroke, which straddles the path — half of
  // it sits outside. Forget this and the ring is clipped at the edges.
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (circumference * safe) / 100;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={label ? `${label}, ${safe}%` : `${safe}%`}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* The track: the full circle, faint, so an empty ring still reads as
            a ring rather than as nothing at all. */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          className="opacity-10"
        />
        {/* The value. */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colour}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference - dash}`}
        />
      </svg>

      {/* The number sits in a separate, unrotated layer on top — rotating the
          SVG would have turned the text on its side too. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-lg font-bold tabular-nums"
          style={{ color: colour }}
        >
          {label ?? `${safe}%`}
        </span>
      </div>
    </div>
  );
}
