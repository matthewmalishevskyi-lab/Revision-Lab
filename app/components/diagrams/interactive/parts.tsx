"use client";

// The draggable bits every interactive diagram is built from.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY POINTER EVENTS, AND WHY CAPTURE
//
// These are meant to be used on an interactive whiteboard at the front of a
// classroom, which is a touchscreen, and on a phone. Pointer events are the
// one API that treats a mouse, a finger and a stylus identically, so there is
// a single code path rather than a mouse one and a touch one that drift apart.
//
// `setPointerCapture` is what makes a drag survive the pointer leaving the
// handle. Without it, moving faster than React re-renders drops the drag the
// moment the cursor is outside the little circle — which feels broken, and is
// the single most common way a hand-rolled SVG drag is wrong.
//
// `touch-action: none` matters just as much: without it a finger drag scrolls
// the page instead of moving the point, and the diagram appears frozen on
// exactly the devices this feature is for.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY EVERY HANDLE IS ALSO A KEYBOARD CONTROL
//
// A drag-only diagram is unusable to anyone not using a pointer, and this site
// already takes the line that reduced motion means no animation rather than no
// feature. The same applies here. Each handle is a `role="slider"`: focusable,
// nudged with the arrow keys, and announced with its live value — so the
// theorem is explorable by keyboard and readable by a screen reader, not just
// watchable by someone with a mouse.
// ─────────────────────────────────────────────────────────────────────────────

import { createContext, useCallback, useContext, useRef, useState } from "react";

// ─── Getting from a screen pixel to a diagram coordinate ────────────────────
//
// The SVG is drawn on a 220×112 canvas and displayed at whatever width the
// column happens to be, so a pointer's clientX/clientY has to be pushed back
// through the element's own transform. getScreenCTM() is that transform, and
// inverting it is the only reliable way to do this — reading the bounding rect
// and scaling by hand breaks under `preserveAspectRatio` letterboxing, which
// this viewBox gets whenever the container is not exactly 220:112.

const SvgContext = createContext<React.RefObject<SVGSVGElement | null> | null>(null);

export function svgPointFromEvent(
  svg: SVGSVGElement,
  event: { clientX: number; clientY: number },
): { x: number; y: number } | null {
  const ctm = svg.getScreenCTM();
  if (!ctm) return null;
  const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse());
  return { x: p.x, y: p.y };
}

// ─── A draggable point ──────────────────────────────────────────────────────

export type HandleProps = {
  /** Where to draw it, in diagram coordinates. */
  x: number;
  y: number;
  /** Called with the pointer's position, in diagram coordinates. */
  onDragTo: (point: { x: number; y: number }) => void;
  /**
   * Called with a signed step when nudged by keyboard.
   *
   * For a point that runs along one dimension — anywhere on a circle, an angle,
   * a position on an axis — which is most of them, and which is also why those
   * handles can honestly call themselves sliders.
   */
  onNudge?: (step: number) => void;
  /**
   * The same for a point that moves freely in two.
   *
   * A triangle's corner has no single dimension to nudge along, so left/right
   * and up/down do the obvious separate things. Given instead of `onNudge`,
   * never as well — a handle is one or the other.
   */
  onNudgeXY?: (dx: number, dy: number) => void;
  /** What this handle is, for a screen reader: "point A". */
  name: string;
  /** The current value and its unit, when the handle runs along one dimension. */
  value?: number;
  valueText?: string;
  /**
   * What `value` actually runs between, for `aria-valuemin`/`max`.
   *
   * ⚠️ NOT OPTIONAL BECAUSE IT WAS GUESSED, AND THE GUESS WAS WRONG. It used
   * to be hard-coded 0-360 on the assumption that every sliding handle is an
   * angle. Most are; Pythagoras' two sides run 1.5-8.5 and refraction's ray
   * runs 6-80, and both announced themselves as a few per cent of a full turn.
   * A default would just reinstate the guess quietly, so the handle has to say.
   */
  range?: readonly [number, number];
  /** A one-letter tag drawn beside the dot, matching the figure's labels. */
  tag?: string;
  tagAt?: number;
};

export function Handle({
  x,
  y,
  onDragTo,
  onNudge,
  onNudgeXY,
  name,
  value,
  valueText,
  range = [0, 360],
  tag,
  tagAt = 45,
}: HandleProps) {
  const svgRef = useContext(SvgContext);
  const [active, setActive] = useState(false);
  // A point that moves in two dimensions is not a slider; see the roles below.
  const isSlider = !onNudgeXY;
  // ⚠️ Not Math.round. Pythagoras' sides move in halves, so rounding announced
  // "7" for a side of 6.5 — a number that is not on the diagram anywhere.
  const round1 = (v: number) => Math.round(v * 10) / 10;

  const move = useCallback(
    (event: React.PointerEvent) => {
      const svg = svgRef?.current;
      if (!svg) return;
      const point = svgPointFromEvent(svg, event);
      if (point) onDragTo(point);
    },
    [onDragTo, svgRef],
  );

  function handleKeyDown(event: React.KeyboardEvent) {
    // Shift for a coarse step, so you can get somewhere without forty presses,
    // and a plain press for the fine one you need to land on a special case.
    const big = event.shiftKey ? 5 : 1;

    if (onNudgeXY) {
      const moves: Record<string, [number, number]> = {
        ArrowRight: [big, 0],
        ArrowLeft: [-big, 0],
        // SVG y points down, so "up" is negative. Doing this here means no
        // diagram has to remember it.
        ArrowUp: [0, -big],
        ArrowDown: [0, big],
      };
      const move = moves[event.key];
      if (move) {
        event.preventDefault();
        onNudgeXY(move[0], move[1]);
      }
      return;
    }

    if (!onNudge) return;
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      onNudge(big);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      onNudge(-big);
    }
  }

  const tagOffset = 13;
  const tagRadians = (tagAt * Math.PI) / 180;

  return (
    <g
      // A point that moves in two dimensions is not a slider, and calling it
      // one would tell a screen-reader user to expect a single value that does
      // not exist. Announced as a plain focusable control instead.
      role={onNudgeXY ? "button" : "slider"}
      tabIndex={0}
      // ⚠️ `aria-valuetext` IS NOT VALID ON role="button" AND IS SILENTLY
      // DROPPED. Read back out of Chromium's accessibility tree, the two-axis
      // handles announced as `{"role":"button","name":"Corner A"}` with the
      // value gone — so a screen-reader user arrowing a triangle corner about
      // heard nothing at all about what changed. On a button the live value
      // has to go in the NAME, which is the only property the role carries.
      aria-label={onNudgeXY ? (valueText ?? name) : name}
      aria-valuenow={isSlider && value !== undefined ? round1(value) : undefined}
      aria-valuetext={isSlider ? valueText : undefined}
      // ⚠️ The range was hard-coded 0-360 for every slider, including ones
      // that are not angles: Pythagoras' "Side a" reported 6 out of 0-360 when
      // it runs 1.5 to 8.5, and refraction's ray reported 52 out of 0-360 when
      // it runs 6 to 80. A screen reader says "1.7 per cent" for a control
      // near the top of its travel, and a voice command to set it halfway
      // lands nowhere near the middle.
      aria-valuemin={isSlider && value !== undefined ? range[0] : undefined}
      aria-valuemax={isSlider && value !== undefined ? range[1] : undefined}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => {
        // Only the primary button — a right-click should open the menu, and
        // a two-finger gesture should not start a drag.
        if (event.button !== 0) return;
        event.preventDefault();
        (event.target as Element).setPointerCapture(event.pointerId);
        setActive(true);
        move(event);
      }}
      onPointerMove={(event) => {
        if (active) move(event);
      }}
      onPointerUp={(event) => {
        setActive(false);
        (event.target as Element).releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => setActive(false)}
      // No `touch-action` here — an SVG <g> has no CSS box, so it never did
      // anything. It lives on the root <svg> in InteractiveFigure now.
      className="cursor-grab outline-none focus-visible:[&>.ring]:opacity-100 active:cursor-grabbing"
    >
      {/* The hit area, invisible and much bigger than the dot: a 4-unit dot is
          about a 20px target, half what a finger needs. Grown further on small
          screens by a media query — see `.diagram-hit-area` in globals.css for
          why one radius cannot serve both a phone and a whiteboard. */}
      <circle cx={x} cy={y} r={11} fill="transparent" className="diagram-hit-area" />

      {/* Focus and hover halo. */}
      <circle
        cx={x}
        cy={y}
        r={8}
        className={`ring fill-[var(--diagram-accent-soft)] opacity-0 transition-opacity ${
          active ? "opacity-100" : ""
        }`}
      />

      <circle
        cx={x}
        cy={y}
        r={4.2}
        className="fill-[var(--diagram-accent)] stroke-[var(--diagram-handle-ring)]"
        strokeWidth={1.6}
      />

      {tag ? (
        <text
          x={x + tagOffset * Math.cos(tagRadians)}
          y={y - tagOffset * Math.sin(tagRadians) + 4}
          textAnchor="middle"
          className="fill-current text-[11px] font-semibold opacity-70"
        >
          {tag}
        </text>
      ) : null}
    </g>
  );
}

// ─── The frame around an interactive diagram ────────────────────────────────

export function InteractiveFigure({
  label,
  caption,
  readout,
  onReset,
  children,
  className,
  viewBox = "0 0 220 112",
}: {
  /** The one-line description of the picture, for a screen reader. */
  label: string;
  /** The rule being demonstrated — fixed text, the same as the static one. */
  caption: string;
  /** The live numbers. Re-read by screen readers as they change. */
  readout: React.ReactNode;
  onReset: () => void;
  children: React.ReactNode;
  className?: string;
  /** Taller than the static 220×112 where handles and their labels need room. */
  viewBox?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <SvgContext.Provider value={svgRef}>
      <figure className={className}>
        <svg
          ref={svgRef}
          viewBox={viewBox}
          role="img"
          aria-label={label}
          // ⚠️ `touch-action` GOES HERE, NOT ON THE HANDLE.
          //
          // It used to sit on the handle's <g>, which is an SVG element with no
          // CSS box — so every browser ignored the declaration and a finger
          // drag moved the point AND scrolled the page underneath it, on
          // exactly the phones and classroom touchscreens this whole feature
          // exists for. Measured: the point followed the finger while the page
          // slid 90px. A root <svg> DOES generate a box, so the rule takes
          // effect here; verified against a control page where the same
          // declaration on a <g> scrolled and on an <svg> did not.
          //
          // On the whole figure rather than per handle: a fingertip that lands
          // slightly off a dot should not start scrolling the page either.
          className="h-auto w-full touch-none select-none"
          style={{ touchAction: "none" }}
        >
          {children}
        </svg>

        <figcaption className="mt-1.5 text-center text-sm leading-snug">
          {/* The live numbers first and in full strength: they are the thing
              that changes, and the reason to look down here at all. */}
          <span role="status" aria-live="polite" className="block font-medium tabular-nums">
            {readout}
          </span>
          <span className="mt-0.5 block opacity-60">{caption}</span>

          {/* ⚠️ `diagram-controls` IS WHAT KEEPS THIS OFF PAPER.
              The /print route is clean because it never asks for the
              interactive version — but Ctrl+P on an ordinary topic page is the
              discoverable way to print, and that page DOES. Measured under
              print emulation: 18 grab dots, 12 "Drag the blue points" and a
              bordered Reset button on the printout.
              The drawing and the readout stay, because both are true of the
              figure as it stands. What goes is the instruction to do something
              paper cannot do, and a button. See @media print in globals.css. */}
          <span className="diagram-controls mt-2 flex items-center justify-center gap-3 text-xs opacity-60">
            {/* Says what to do without a paragraph about it. Hidden from
                screen readers because the handles announce themselves as
                sliders, which is the accurate instruction for that reader. */}
            <span aria-hidden="true">Drag the blue points</span>
            <button
              type="button"
              onClick={onReset}
              className="tap-pad rounded-lg border border-[var(--diagram-border)] px-2 py-0.5 font-medium transition hover:bg-[var(--diagram-hover)]"
            >
              Reset
            </button>
          </span>
        </figcaption>
      </figure>
    </SvgContext.Provider>
  );
}

/** A "✓" that only appears when the rule really does hold, to 0.1°. */
export function Holds({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="ml-1 text-[var(--diagram-good)]" aria-label="which is correct">
      ✓
    </span>
  ) : null;
}
