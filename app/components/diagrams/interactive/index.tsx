// Which diagrams have a draggable version.
//
// ─────────────────────────────────────────────────────────────────────────────
// A SECOND REGISTRY, DELIBERATELY, RATHER THAN A FLAG ON THE FIRST
//
// The obvious design is to give each diagram an `interactive` variant field and
// let one registry hold both. That breaks the property the whole diagram system
// rests on: DIAGRAMS is imported by the PRINT pages and by check-content.mjs,
// which is plain Node with no React and no browser. A registry whose values are
// sometimes client components with pointer handlers and state is no longer safe
// in either place.
//
// So this is a separate, OPTIONAL layer keyed by the same names. A diagram with
// an entry here gets the draggable version wherever interactivity makes sense;
// everything else — and every diagram, on paper — renders exactly the static
// picture it always did. Nothing had to change about the existing registry, and
// a page that wants the static one can simply not ask for this.
//
// The keys are typed as `DiagramName`, so an interactive version of a diagram
// that does not exist is a compile error rather than a picture that silently
// never appears. (A type-only import, so there is no runtime cycle with the
// registry that imports this back.)
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY NOT ALL 142
//
// Matthew's steer was "think where it's appropriate, and when it's actually
// nice." Most diagrams have nothing to drag: a labelled plant cell, the pH
// scale, a flowchart's shapes. Dragging is worth building where MOVING
// something demonstrates that a rule keeps holding — which is exactly the set
// of diagrams where a static picture leaves you unsure whether you are looking
// at a theorem or at one lucky arrangement.
// ─────────────────────────────────────────────────────────────────────────────

import type { DiagramName } from "..";
import * as circles from "./circle-theorems";

export const INTERACTIVE: Partial<Record<DiagramName, () => React.ReactElement>> = {
  "circle-angle-at-centre": circles.CircleAngleAtCentre,
  "circle-semicircle": circles.CircleSemicircle,
  "circle-same-segment": circles.CircleSameSegment,
  "circle-cyclic-quadrilateral": circles.CircleCyclicQuadrilateral,
  "circle-tangent-radius": circles.CircleTangentRadius,
  "circle-alternate-segment": circles.CircleAlternateSegment,
};

/** Is there a draggable version of this diagram? */
export function interactiveDiagram(name: string) {
  return INTERACTIVE[name as DiagramName];
}

/** Every name that has one — used by the teacher-tools library to say so. */
export const INTERACTIVE_NAMES = Object.keys(INTERACTIVE);
