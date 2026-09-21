"use client";

// "Download PNG" under each diagram in Teacher Tools.
//
// A teacher who can grab a diagram in one click is far more likely to use it
// than one who has to screenshot and crop — and the PNG carries the "Revision
// Lab · address" credit drawn inside the SVG (see credit.tsx), so every copy
// that ends up on a slide or worksheet says where it came from.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE STYLES HAVE TO BE COPIED IN, OR THE PNG COMES OUT BLACK.
// These diagrams are coloured by CSS — `currentColor`, Tailwind classes and
// the --diagram-ink variables in globals.css — and none of that exists once
// the SVG is lifted out of the page into an image. Serialised as-is, every
// stroke falls back to black and every soft fill to solid black, so the
// picture turns into ink blots. Each element's COMPUTED style is written onto
// the copy as plain attributes first, which is what the page was showing.
//
// Drawn at 8× the canvas (1760 px wide) on white: sharp on a projector and in
// print, and white because a transparent PNG dropped onto a dark slide theme
// makes dark strokes vanish.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState } from "react";

const COPIED = [
  "fill", "fill-opacity", "stroke", "stroke-opacity", "stroke-width", "stroke-dasharray",
  "stroke-linecap", "stroke-linejoin", "opacity", "visibility", "display",
  "font-family", "font-size", "font-weight", "font-style", "letter-spacing",
  "text-anchor", "dominant-baseline",
] as const;

const SCALE = 8;

function copyComputedStyles(source: Element, target: Element) {
  const cs = getComputedStyle(source);
  const style = COPIED.map((p) => `${p}:${cs.getPropertyValue(p)}`).join(";");
  target.setAttribute("style", style);
  target.removeAttribute("class");
  const s = source.children;
  const t = target.children;
  for (let i = 0; i < s.length; i++) copyComputedStyles(s[i], t[i]);
}

export async function svgToPngBlob(svg: SVGSVGElement): Promise<Blob> {
  const vb = svg.viewBox.baseVal;
  const width = Math.round(vb.width * SCALE);
  const height = Math.round(vb.height * SCALE);

  const clone = svg.cloneNode(true) as SVGSVGElement;
  copyComputedStyles(svg, clone);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(width));
  clone.setAttribute("height", String(height));

  const markup = new XMLSerializer().serializeToString(clone);
  const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("The diagram could not be drawn as an image."));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("This browser cannot make images.");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("The image could not be made."))), "image/png"),
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function DiagramDownload({
  name,
  title,
  children,
}: {
  /** Registry name, used for the file name: "circle-semicircle-revision-lab.png". */
  name: string;
  /** Read out on the button: "Download Angle in a semicircle as a picture". */
  title: string;
  children: React.ReactNode;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "working" | "failed">("idle");

  async function download() {
    const svg = holder.current?.querySelector("svg");
    if (!svg) return;
    setState("working");
    try {
      const blob = await svgToPngBlob(svg);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${name}-revision-lab.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
      setState("idle");
    } catch (error) {
      console.error("[diagram-download]", error);
      setState("failed");
    }
  }

  return (
    <>
      <div ref={holder}>{children}</div>
      <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
        {state === "failed" && (
          <p role="status" className="text-sm text-red-700">
            That didn&apos;t work in this browser — a screenshot will do the same job.
          </p>
        )}
        <button
          type="button"
          onClick={download}
          disabled={state === "working"}
          aria-label={`Download ${title} as a picture`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 bg-white px-4 text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50 disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
          </svg>
          {state === "working" ? "Making the picture…" : "Download PNG"}
        </button>
      </div>
    </>
  );
}
