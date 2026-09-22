"use client";

// The game on the page: a small pixelated canvas for the 3D view, a sharp
// overlay canvas for the status bar and quizzes, and the player's mascot in
// the face slot of the status bar (like Doom's face). All the game logic
// lives in ../game/game.ts; this only mounts it and passes answers back to
// the site so wrong ones come back in "Revisit your mistakes".

import { useEffect, useRef, useState } from "react";
import { MascotDisplay } from "../../components/MascotDisplay";
import type { MASCOTS } from "../../components/Mascots";
import { recordAnswer } from "../../lib/progress-actions";
import type { GameQuestion } from "../../lib/game-questions";
import { Game } from "../game/game";

export function GameClient({ subject, mascot, reload, easy, startLevel = 0 }: { subject: string; mascot: keyof typeof MASCOTS; reload: GameQuestion[]; easy: GameQuestion[]; startLevel?: number }) {
  const gameRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cv = gameRef.current, ov = overlayRef.current;
    if (!cv || !ov) return;
    const game = new Game(cv, ov, {
      reload, easy, startLevel,
      onAnswer: (q, correct) => { recordAnswer(subject, q.topic, correct, q.question).catch(() => {}); },
    });
    game.init().catch((error) => { console.error("[game]", error); setFailed(true); });
    return () => game.destroy();
  }, [subject, reload, easy, startLevel]);

  if (failed) return <p role="alert" className="rounded-xl bg-red-900/40 p-4">The game couldn&apos;t start in this browser.</p>;

  return (
    <div className="relative aspect-video w-full select-none overflow-hidden rounded-2xl bg-black shadow-2xl">
      <canvas ref={gameRef} className="absolute inset-0 h-full w-full" style={{ imageRendering: "pixelated" }} aria-label="The game" />
      <canvas ref={overlayRef} className="absolute inset-0 h-full w-full cursor-crosshair" />
      {/* the mascot's face, in the middle box of the status bar */}
      <div className="pointer-events-none absolute overflow-hidden" style={{ left: "46.4%", width: "7.2%", top: "89.1%", height: "9.4%" }}>
        <MascotDisplay mascot={mascot} className="mx-auto h-[140%] w-auto" />
      </div>
    </div>
  );
}
