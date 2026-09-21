// The little "Revision Lab · <address>" line at the foot of every diagram.
//
// Matthew: "on every single diagram they would want to use or download,
// somewhere there is a very little sign that says Revision Lab... and I'll get
// teachers to actually use it." Diagrams get screenshotted into worksheets and
// slides, and a credit travels with every copy. The ADDRESS, not only the name:
// someone who sees a screenshot should know where to go, not have to search.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ IN ITS OWN STRIP BELOW THE DRAWING, NEVER ON TOP OF IT.
// Every diagram fills its 220 × 112 canvas edge to edge — axis names, labels,
// the lot — and a credit dropped into a corner would sit on something on some
// of the 124. So the canvas is made CREDIT_STRIP units taller and the line goes
// in the new space. Nothing already drawn moves, and the draggable diagrams
// convert pointer positions through the SVG's own transform (getScreenCTM), so
// a taller canvas does not shift where a drag lands.
//
// It is INSIDE the <svg>, not a caption under it, because a screenshot of the
// picture or the PNG download must carry it — that is the whole point.
// ─────────────────────────────────────────────────────────────────────────────

import { SITE_HOST, SITE_NAME } from "../../lib/site";

/** Extra canvas height, in diagram units, for the credit line. */
export const CREDIT_STRIP = 8;

/**
 * Derived from SITE_URL rather than typed out, so if the site ever moves to a
 * real domain every diagram follows it without anyone remembering.
 */
export const CREDIT_TEXT = `${SITE_NAME} · ${SITE_HOST}`;

/** "0 0 220 112" → "0 0 220 120": the same canvas with room for the credit. */
export function withCreditStrip(viewBox: string): string {
  const [x, y, w, h] = viewBox.trim().split(/[\s,]+/).map(Number);
  return `${x} ${y} ${w} ${h + CREDIT_STRIP}`;
}

/** The credit line itself, right-aligned in the strip under a canvas. */
export function DiagramCredit({ viewBox }: { viewBox: string }) {
  const [x, y, w, h] = viewBox.trim().split(/[\s,]+/).map(Number);
  return (
    <text
      x={x + w - 3}
      y={y + h + CREDIT_STRIP - 2.2}
      textAnchor="end"
      fontSize={4.4}
      fill="currentColor"
      opacity={0.45}
      className="diagram-credit"
      // Decoration for sighted readers; the figure's aria-label already
      // describes the picture, and "revision lab dot vercel dot app" read out
      // after every diagram would be noise.
      aria-hidden="true"
    >
      {CREDIT_TEXT}
    </text>
  );
}
