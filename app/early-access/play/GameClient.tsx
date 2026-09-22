"use client";

// The game on the page, three canvases stacked:
//   1. the 3D view, small and pixelated
//   2. a soft glow: a tiny copy of the view, blurred up and "screen"-blended
//      over it, so lights bloom rather than every pixel being hard-edged
//   3. the visor (readouts, compass, quizzes), sharp at 1280x720
// and the player's mascot on the visor's comms screen, top left. All the game
// logic lives in ../game/game.ts; this only mounts it and passes answers back
// to the site so wrong ones come back in "Revisit your mistakes".

import { useEffect, useRef, useState } from "react";
import { MascotDisplay } from "../../components/MascotDisplay";
import type { MASCOTS } from "../../components/Mascots";
import { recordAnswer } from "../../lib/progress-actions";
import type { GameQuestion } from "../../lib/game-questions";
import { Game } from "../game/game";

export function GameClient({ subject, mascot, mascotName, reload, easy, startLevel = 0 }: { subject: string; mascot: keyof typeof MASCOTS; mascotName: string; reload: GameQuestion[]; easy: GameQuestion[]; startLevel?: number }) {
  const gameRef = useRef<HTMLCanvasElement>(null);
  const bloomRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cv = gameRef.current, ov = overlayRef.current;
    if (!cv || !ov) return;
    const game = new Game(cv, ov, {
      reload, easy, startLevel, mascotName,
      onAnswer: (q, correct) => { recordAnswer(subject, q.topic, correct, q.question).catch(() => {}); },
    }, bloomRef.current ?? undefined);
    game.init().catch((error) => { console.error("[game]", error); setFailed(true); });
    return () => game.destroy();
  }, [subject, reload, easy, startLevel, mascotName]);

  if (failed) return <p role="alert" className="rounded-xl bg-red-900/40 p-4">The game couldn&apos;t start in this browser.</p>;

  return (
    <div className="relative aspect-video w-full select-none overflow-hidden rounded-2xl bg-black shadow-2xl">
      <canvas ref={gameRef} className="absolute inset-0 h-full w-full" style={{ imageRendering: "pixelated" }} aria-label="The game" />
      <canvas ref={bloomRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-40 mix-blend-screen blur-[2px]" aria-hidden />
      <canvas ref={overlayRef} className="absolute inset-0 h-full w-full cursor-crosshair" />
      {/* the mascot on the visor's comms screen (COMMS_BOX in hud.ts: 26,26 104x104 of 1280x720) */}
      <div className="pointer-events-none absolute overflow-hidden rounded-[1.2%]" style={{ left: "2.03%", width: "8.13%", top: "3.61%", height: "14.44%" }}>
        <MascotDisplay mascot={mascot} className="mx-auto mt-[6%] h-[150%] w-auto" />
      </div>
    </div>
  );
}
