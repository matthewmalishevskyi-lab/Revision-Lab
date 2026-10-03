"use client";

// The jump menu that sits at the top of every topic page.
//
// Topic pages got long — six sections and sometimes 2,000+ words. Someone who
// came to do the practice questions shouldn't have to scroll past a thousand
// words of key facts to reach them. This is a sticky row of links that jumps
// straight to a section, and highlights whichever one you're currently reading.
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW JUMPING TO A SECTION ACTUALLY WORKS
//
// There's no JavaScript in the jump itself. Every section on the page carries
// an `id`, and a link to `#practice` tells the browser to scroll to the element
// with `id="practice"`. That behaviour is built into HTML and has been since
// 1993. It also means the links still work with JavaScript switched off, and
// the address bar ends up holding a shareable link to that exact section.
//
// Two CSS properties finish the job, both in globals.css:
//   scroll-behavior: smooth  — glides instead of teleporting
//   scroll-margin-top        — stops this very bar covering the heading it
//                              just jumped to, because the browser would
//                              otherwise put the heading at y=0, underneath us
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

export type NavSection = { id: string; label: string };

export function TopicNav({
  sections,
  colour,
}: {
  sections: NavSection[];
  colour: string;
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  // A ref to the scrolling strip, so the active pill can be kept in view on a
  // narrow screen where the strip scrolls sideways.
  const stripRef = useRef<HTMLDivElement>(null);

  // ⚠️ A STRIP THAT SCROLLS WITH NOTHING SAYING SO IS A MENU WITH ITEMS NOBODY
  // FINDS. Measured on a 320px screen: the five sections are 605px wide inside
  // a 272px strip, so barely two fit — and the scrollbar is deliberately
  // hidden (it would sit across the pills), which leaves no clue at all that
  // "Definitions" and "Exam technique" exist. These two say which way there is
  // more to see, with a soft fade at that edge.
  const [more, setMore] = useState({ left: false, right: false });

  useEffect(() => {
    // ─────────────────────────────────────────────────────────────────────────
    // WORKING OUT WHICH SECTION YOU'RE IN
    //
    // The rule: the active section is the LAST one whose top edge has passed
    // the line 140px down the screen. Walking the list backwards and stopping
    // at the first match is the same thing, and stops earlier.
    //
    // Why a line partway down rather than the very top of the screen: a heading
    // sitting just below the top of the window is one you're about to read, and
    // it feels wrong for the menu to still be highlighting the section above.
    // 140px is roughly "just under the sticky bar".
    //
    // WHY requestAnimationFrame: a scroll fires events far faster than the
    // screen can redraw — well over a hundred a second. Doing this work on
    // every one of them wastes effort nobody can see. Instead the event only
    // sets a flag, and the real work happens once per screen refresh. This is
    // the same trick the ladder companion uses, for the same reason.
    // ─────────────────────────────────────────────────────────────────────────
    let queued = false;

    function measure() {
      queued = false;

      const line = 140;
      let current = sections[0]?.id ?? "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= line) {
          current = sections[i].id;
          break;
        }
      }

      // Bottom of the page is a special case. The final section is often short,
      // so it can be impossible to scroll its heading up past the line — you
      // run out of page first, and the menu would never highlight it. If we're
      // within a few pixels of the bottom, the last section wins.
      // documentElement rather than body: body is a flex column here, and its
      // scrollHeight does not always account for margins the way the scrolling
      // element's does. documentElement IS the thing that scrolls.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length > 0) {
        current = sections[sections.length - 1].id;
      }

      // Only call setState when the answer has actually changed. Setting state
      // to the value it already holds would re-render for nothing, sixty times
      // a second, the entire time someone is scrolling.
      setActive((previous) => (previous === current ? previous : current));
    }

    function onScroll() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Cleanup. Without this, navigating to another topic would leave this
    // listener attached to a component that no longer exists — and every visit
    // would add another one.
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  // Keep the highlighted pill visible when the strip is scrolled sideways on a
  // phone. Without this the active pill drifts off the edge and the menu looks
  // like it has stopped working.
  //
  // ───────────────────────────────────────────────────────────────────────────
  // WHY THIS SETS scrollLeft BY HAND INSTEAD OF CALLING scrollIntoView
  //
  // The obvious version was `pill.scrollIntoView({ block: "nearest" })`, and it
  // had a bug that would have been baffling to report: opening a topic page
  // sometimes scrolled you down the page on its own.
  //
  // The reason is that scrollIntoView scrolls whatever ancestors it needs to,
  // including the WINDOW. On first render this effect runs while the menu is
  // still below the fold, so the browser helpfully scrolled the page to bring
  // it into view — helpful in general, wrong here.
  //
  // Writing scrollLeft on the strip cannot do that: it moves one element's own
  // horizontal scroll and nothing else. Narrower tool, no side effects.
  // ───────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const pill = strip.querySelector<HTMLElement>(`[data-nav-id="${active}"]`);
    if (!pill) return;

    // Nothing to do if the strip isn't actually scrollable (the desktop case).
    if (strip.scrollWidth <= strip.clientWidth) return;

    // Where the pill sits relative to the strip's own left edge.
    const left = pill.offsetLeft - strip.offsetLeft;
    const right = left + pill.offsetWidth;

    // Scroll only if the pill has drifted out of view, and only far enough to
    // bring it back — with a small margin so it doesn't sit flush to the edge.
    const margin = 16;
    if (left < strip.scrollLeft + margin) {
      strip.scrollLeft = left - margin;
    } else if (right > strip.scrollLeft + strip.clientWidth - margin) {
      strip.scrollLeft = right - strip.clientWidth + margin;
    }
  }, [active]);

  // Which edges have more beyond them. Recomputed when the strip is scrolled,
  // when the window resizes, and when the active pill moves (because the
  // effect above may have scrolled the strip itself).
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    function update() {
      const el = stripRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      // A couple of pixels of slack: a strip scrolled to its end can land a
      // fraction short, and a fade that never quite goes away looks broken.
      const left = el.scrollLeft > 2;
      const right = el.scrollLeft < max - 2;
      setMore((previous) =>
        previous.left === left && previous.right === right ? previous : { left, right },
      );
    }
    update();
    strip.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      strip.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [active, sections]);

  if (sections.length < 2) return null;

  return (
    // `sticky top-0` means it scrolls normally until it reaches the top of the
    // window, then stays put. The negative margin cancels the page padding so
    // the frosted background reaches the full width of the column.
    // The background colour is the page background at 85%, and the blur behind
    // it lets content show through faintly as it slides underneath — so the bar
    // reads as frosted glass rather than a solid lid stuck on top.
    // ⚠️ 0.97 OPAQUE, NOT 0.85, AND THE BLUR WAS NEVER THE PROBLEM.
    //
    // Matthew, reporting this: a question card sliding underneath stayed
    // readable THROUGH the bar, its words colliding with the section labels.
    // Measured before changing anything, because "the frosted effect is
    // broken" was the obvious diagnosis and it was wrong: the computed style
    // really is `backdrop-filter: blur(12px)`, and nothing up the ancestor
    // chain breaks it (a `filter`, `transform` or `contain` on any parent
    // would, which is the usual cause and is worth checking first).
    //
    // The actual arithmetic is simpler. At 0.85 opacity, fifteen per cent of
    // near-black body text still comes through, and twelve pixels of blur
    // smears 16px text without destroying its word shapes — so you get grey
    // ghost words directly under black labels, which is harder to read than
    // either layer alone. Frosted glass in a window is thick; this was tinted
    // film.
    //
    // 0.97 leaves just enough of the colour wash moving underneath to still
    // read as glass, and nothing legible. The blur stays because it costs
    // nothing and softens the colour as it passes; the shadow is what now
    // says "this sits above the page", a job the transparency used to do
    // badly.
    <nav
      aria-label="Sections on this page"
      className="sticky top-0 z-30 -mx-6 mt-8 border-y border-black/5 bg-[#f2f4fa]/97 px-6 py-2.5 shadow-[0_6px_16px_-12px_rgba(15,23,42,0.5)] backdrop-blur-md dark:border-white/10 dark:bg-[#0a0d1a]/97 dark:shadow-[0_6px_16px_-12px_rgba(0,0,0,0.8)]"
    >
      {/* `relative` so the two fades can be pinned to the strip's own edges.
          They are pointer-events-none, or they would eat a tap aimed at the
          pill underneath — which on a phone is most of the last pill. */}
      <div className="relative">
        {more.left && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f2f4fa] to-transparent dark:from-[#0a0d1a]"
          />
        )}
        {more.right && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f2f4fa] to-transparent dark:from-[#0a0d1a]"
          />
        )}
        <div
          ref={stripRef}
          className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
        {sections.map((section) => {
          const isActive = section.id === active;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-nav-id={section.id}
              // aria-current tells a screen reader which one you're on. The
              // colour alone conveys nothing to someone who can't see it.
              aria-current={isActive ? "true" : undefined}
              // ── 44px, not 32 ────────────────────────────────────────────
              // These chips are how you move around a topic on a phone, and
              // they were 32px tall: under Apple's 44pt minimum and under
              // Google's 48dp one, in a horizontally scrolling strip where a
              // slightly low tap scrolls the strip instead of following the
              // link. `min-h` rather than more padding so the text stays
              // vertically centred and the strip keeps its height on a laptop.
              className={`flex min-h-11 shrink-0 items-center rounded-full px-3.5 text-sm font-medium transition ${
                isActive
                  ? "text-white"
                  : "opacity-60 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
              }`}
              style={isActive ? { backgroundColor: colour } : undefined}
            >
              {section.label}
            </a>
          );
        })}
        </div>
      </div>
    </nav>
  );
}
