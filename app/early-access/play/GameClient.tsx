"use client";

// The game on the page, three canvases stacked:
//   1. the 3D view, small and pixelated
//   2. a soft glow: a tiny copy of the view, blurred up and "screen"-blended
//      over it, so lights bloom rather than every pixel being hard-edged
//   3. the visor (readouts, compass, quizzes), sharp at 1280x720
// and the player's mascot on the visor's comms screen, top left. All the game
// logic lives in ../game/game.ts; this only mounts it and passes answers back
// to the site so wrong ones come back in "Revisit your mistakes".

import { useCallback, useEffect, useRef, useState } from "react";
import { MascotDisplay } from "../../components/MascotDisplay";
import type { MASCOTS } from "../../components/Mascots";
import { recordAnswer } from "../../lib/progress-actions";
import type { GameQuestion } from "../../lib/game-questions";
import { Game } from "../game/game";

export function GameClient({ subject, mascot, mascotName, reload, easy, startLevel = 0 }: { subject: string; mascot: keyof typeof MASCOTS; mascotName: string; reload: GameQuestion[]; easy: GameQuestion[]; startLevel?: number }) {
  const gameRef = useRef<HTMLCanvasElement>(null);
  const bloomRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [full, setFull] = useState(false);

  // Full screen: the shell element goes full screen and the 16:9 picture is
  // centred in it, so a screen that isn't 16:9 gets black bars rather than a
  // stretched, wrong-shaped world. Clicking to start asks for it too, so the
  // ordinary way in is one click.
  const toggleFullscreen = useCallback(() => {
    const el = shellRef.current; if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    else el.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const cv = gameRef.current, ov = overlayRef.current;
    if (!cv || !ov) return;
    const game = new Game(cv, ov, {
      reload, easy, startLevel, mascotName,
      // clicking the title screen asks for full screen as well as the mouse
      onStart: () => { if (!document.fullscreenElement) shellRef.current?.requestFullscreen?.().catch(() => {}); },
      onAnswer: (q, correct) => { recordAnswer(subject, q.topic, correct, q.question).catch(() => {}); },
    }, bloomRef.current ?? undefined);
    game.init().catch((error) => { console.error("[game]", error); setFailed(true); });
    const onFullscreen = () => setFull(document.fullscreenElement === shellRef.current);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => { document.removeEventListener("fullscreenchange", onFullscreen); game.destroy(); };
  }, [subject, reload, easy, startLevel, mascotName]);

  if (failed) return <p role="alert" className="rounded-xl bg-red-900/40 p-4">The game couldn&apos;t start in this browser.</p>;

  return (
    <div ref={shellRef} className={`group relative select-none bg-black shadow-2xl ${full ? "flex h-screen w-screen items-center justify-center" : ""}`}>
      <div className={`relative aspect-video w-full overflow-hidden ${full ? "" : "rounded-2xl"}`} style={full ? { maxHeight: "100vh", maxWidth: "calc(100vh * 16 / 9)" } : undefined}>
      <canvas ref={gameRef} className="absolute inset-0 h-full w-full" style={{ imageRendering: "pixelated" }} aria-label="The game" />
      <canvas ref={bloomRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-40 mix-blend-screen blur-[2px]" aria-hidden />
      <canvas ref={overlayRef} className="absolute inset-0 h-full w-full cursor-crosshair" />
      {/* the mascot on the visor's comms screen (COMMS_BOX in hud.ts: 26,26 104x104 of 1280x720) */}
      {/* The mascot is TALLER AND WIDER than its window on purpose (you see its
          head and shoulders), so it has to be centred by position, not by
          margin: an element wider than its box ignores mx-auto and hangs off
          the right, which is why it used to sit off to one side. */}
      <div className="pointer-events-none absolute overflow-hidden rounded-[1.2%]" style={{ left: "2.03%", width: "8.13%", top: "3.61%", height: "14.44%" }}>
        <MascotDisplay mascot={mascot} className="absolute left-1/2 top-[8%] h-[150%] w-auto max-w-none -translate-x-1/2" />
      </div>
      <button
        type="button" onClick={toggleFullscreen}
        className="absolute right-3 top-3 z-10 min-h-11 rounded-xl border border-white/25 bg-black/50 px-3 text-sm font-semibold text-white opacity-60 transition hover:bg-black/80 hover:opacity-100 focus-visible:opacity-100"
      >
        {full ? "Leave full screen" : "Full screen ⛶"}
      </button>
      </div>
    </div>
  );
}
