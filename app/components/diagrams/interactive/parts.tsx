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
  /** Called with a signed step when nudged by keyboard. */
  onNudge: (step: number) => void;
  /** What this handle is, for a screen reader: "point A". */
  name: string;
  /** The current value and its unit, when the handle runs along one dimension. */
  value?: number;
  valueText?: string;
  /** A one-letter tag drawn beside the dot, matching the figure's labels. */
  tag?: string;
  tagAt?: number;
};

export function Handle({
  x,
  y,
  onDragTo,
  onNudge,
  name,
  value,
  valueText,
  tag,
  tagAt = 45,
}: HandleProps) {
  const svgRef = useContext(SvgContext);
  const [active, setActive] = useState(false);

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
      role="slider"
      tabIndex={0}
      aria-label={name}
      aria-valuenow={value === undefined ? undefined : Math.round(value)}
      aria-valuetext={valueText}
      aria-valuemin={value === undefined ? undefined : 0}
      aria-valuemax={value === undefined ? undefined : 360}
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
      className="cursor-grab touch-none outline-none focus-visible:[&>.ring]:opacity-100 active:cursor-grabbing"
      style={{ touchAction: "none" }}
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
          className="h-auto w-full select-none"
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

          <span className="mt-2 flex items-center justify-center gap-3 text-xs opacity-60">
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
