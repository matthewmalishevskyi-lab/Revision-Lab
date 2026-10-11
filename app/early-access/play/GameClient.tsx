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
import { readStorageRaw, writeStorageRaw } from "../../lib/browserStore";
import { foldRun, parseLog, SHIPS_LOG_KEY } from "../../lib/shipsLog";
import { Game } from "../game/game";
import { SavesPanel } from "./SavesPanel";
import { deleteGameSaveAction, saveGameAction } from "../../lib/game-save-actions";
import type { GameSave, SaveSetup, SaveSummary } from "../../lib/gameSave";

export function GameClient({ subject, mascot, mascotName, reload, easy, startLevel = 0, topicWeights, setup, saves: initialSaves = [], savesEnabled = false, save, saveName }: {
  subject: string; mascot: keyof typeof MASCOTS; mascotName: string; reload: GameQuestion[]; easy: GameQuestion[]; startLevel?: number; topicWeights?: Record<string, number>;
  /** What this game was set up with, stored beside each save so it reloads with the same questions. */
  setup: SaveSetup;
  saves?: SaveSummary[]; savesEnabled?: boolean;
  /** A saved moment to carry on from (already checked on the server). */
  save?: GameSave; saveName?: string;
}) {
  const gameRef = useRef<HTMLCanvasElement>(null);
  const bloomRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const game = useRef<Game | null>(null);
  // ── saves ──
  const [saves, setSaves] = useState(initialSaves);
  const [menu, setMenu] = useState<null | ReturnType<Game["saveStatus"]>>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);
  const savesButton = useRef<HTMLButtonElement>(null);
  const openSaves = useCallback(() => {
    const g = game.current; if (!g) return;
    g.pauseForMenu();
    setMessage(null);
    setMenu(g.saveStatus());
  }, []);
  const closeSaves = useCallback(() => { setMenu(null); game.current?.menuClosed(); savesButton.current?.focus(); }, []);
  const doSave = useCallback(async (slot: number, name: string) => {
    const g = game.current; if (!g) return;
    // the state is taken at the moment of the click, from a paused world
    const state = g.snapshot();
    if (!state) { setMessage({ text: "You can't save right now.", ok: false }); return; }
    setBusy(true);
    const res = await saveGameAction(slot, name, setup, state).catch(() => ({ ok: false as const, error: "Couldn't reach the site just now. Try again in a moment." }));
    setBusy(false);
    if (res.ok) {
      setSaves((list) => [...list.filter((s) => s.slot !== slot), res.summary].sort((a, b) => a.slot - b.slot));
      setMessage({ text: `Saved to slot ${slot}.`, ok: true });
    } else setMessage({ text: res.error, ok: false });
  }, [setup]);
  const doDelete = useCallback(async (slot: number) => {
    setBusy(true);
    const res = await deleteGameSaveAction(slot).catch(() => ({ ok: false as const, error: "Couldn't reach the site just now. Try again in a moment." }));
    setBusy(false);
    if (res.ok) { setSaves((list) => list.filter((s) => s.slot !== slot)); setMessage({ text: `Slot ${slot} is empty now.`, ok: true }); }
    else setMessage({ text: res.error, ok: false });
  }, []);
  const [full, setFull] = useState(false);
  // ⚠️ iOS Safari only puts a <video> full screen, so on an iPhone the button
  // below was visible and did nothing at all. Read the capability rather than
  // sniffing the browser, and read it in an effect: `document` does not exist
  // while this renders on the server, and a value that differs between the
  // server's HTML and the first client render is a hydration mismatch.
  const [canFullscreen, setCanFullscreen] = useState(true);
  useEffect(() => {
    setCanFullscreen(typeof document !== "undefined" && document.fullscreenEnabled !== false && typeof shellRef.current?.requestFullscreen === "function");
  }, []);

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
    const g = new Game(cv, ov, {
      reload, easy, startLevel, mascotName, topicWeights, save, saveName,
      // clicking the title screen asks for full screen as well as the mouse
      onStart: () => {
        // ⚠️ iOS Safari will not put an arbitrary element full screen, so a
        // phone stays in the page and the game has to be scrolled to instead —
        // otherwise the controls along the bottom edge start below the fold.
        shellRef.current?.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
        if (!document.fullscreenElement) shellRef.current?.requestFullscreen?.().catch(() => {});
      },
      onAnswer: (q, correct) => { recordAnswer(subject, q.topic, correct, q.question).catch(() => {}); },
      // The ship's log lives in this browser (see lib/shipsLog.ts for why).
      // ⚠️ Both of these read the store at the moment they are called, never
      // a copy taken when the game mounted: a session can finish four decks
      // without a reload, and a stale copy would throw away the first three.
      best: (level) => parseLog(readStorageRaw(SHIPS_LOG_KEY))[level],
      onLevelDone: (run) => {
        try { writeStorageRaw(SHIPS_LOG_KEY, JSON.stringify(foldRun(parseLog(readStorageRaw(SHIPS_LOG_KEY)), run))); }
        catch { /* a full or blocked store must never interrupt the game */ }
      },
    }, bloomRef.current ?? undefined);
    game.current = g;
    g.init().catch((error) => { console.error("[game]", error); setFailed(true); });
    const onFullscreen = () => setFull(document.fullscreenElement === shellRef.current);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => { document.removeEventListener("fullscreenchange", onFullscreen); g.destroy(); if (game.current === g) game.current = null; };
  }, [subject, reload, easy, startLevel, mascotName, topicWeights, save, saveName]);

  if (failed) return <p role="alert" className="rounded-xl bg-red-900/40 p-4">The game couldn&apos;t start in this browser.</p>;

  return (
    <div ref={shellRef} className={`group relative select-none bg-black shadow-2xl ${full ? "flex h-screen w-screen items-center justify-center" : ""}`}>
      <div className={`game-frame relative aspect-video w-full overflow-hidden ${full ? "" : "rounded-2xl"}`} style={full ? { maxHeight: "100vh", maxWidth: "calc(100vh * 16 / 9)" } : undefined}>
      <canvas ref={gameRef} className="absolute inset-0 h-full w-full" style={{ imageRendering: "pixelated" }} aria-label="The game" />
      <canvas ref={bloomRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-40 mix-blend-screen blur-[2px]" aria-hidden />
      {/* ⚠️ touch-action: none, or dragging to look also scrolls the page under
          it. A canvas is an ordinary CSS box so the declaration is honoured —
          unlike the SVG <g> this project got caught by once (PROJECT_NOTES,
          2026-09-11). */}
      <canvas ref={overlayRef} className="absolute inset-0 h-full w-full cursor-crosshair touch-none" />
      {/* ⚠️ NOT pointer-events-none. The controls are laid out for a 16:9
          landscape visor, so in portrait the stick and FIRE are ~29 CSS px and
          half of them are off the picture — but the canvas underneath still
          took every tap, so the game started and ran behind the notice telling
          you to turn the phone round. It has to block, not advise. */}
      <div className="touch-portrait-only absolute inset-0 z-20 items-center justify-center bg-black/80 p-6 text-center">
        <p className="text-lg font-semibold text-white">Turn your phone sideways to play.</p>
      </div>
      {/* the mascot on the visor's comms screen (COMMS_BOX in hud.ts: 26,26 104x104 of 1280x720) */}
      {/* The mascot is TALLER AND WIDER than its window on purpose (you see its
          head and shoulders), so it has to be centred by position, not by
          margin: an element wider than its box ignores mx-auto and hangs off
          the right, which is why it used to sit off to one side. */}
      <div className="pointer-events-none absolute overflow-hidden rounded-[1.2%]" style={{ left: "2.03%", width: "8.13%", top: "3.61%", height: "14.44%" }}>
        <MascotDisplay mascot={mascot} className="absolute left-1/2 top-[8%] h-[150%] w-auto max-w-none -translate-x-1/2" />
      </div>
      {/* ⚠️ Hidden where the browser will not do it. iOS Safari refuses
          requestFullscreen on anything but a <video>, so on an iPhone this was
          a button that visibly did nothing at all — worse than no button. */}
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        {/* Saves: pauses the game and opens the five slots. On a computer the
            mouse is captured while you play, so Esc first — the pause screen
            says so. */}
        <button
          ref={savesButton} type="button" onClick={openSaves}
          className="min-h-11 rounded-xl border border-white/25 bg-black/50 px-3 text-sm font-semibold text-white opacity-60 transition hover:bg-black/80 hover:opacity-100 focus-visible:opacity-100"
        >
          Saves
        </button>
        {canFullscreen && (
          <button
            type="button" onClick={toggleFullscreen}
            className="min-h-11 rounded-xl border border-white/25 bg-black/50 px-3 text-sm font-semibold text-white opacity-60 transition hover:bg-black/80 hover:opacity-100 focus-visible:opacity-100"
          >
            {full ? "Leave full screen" : "Full screen ⛶"}
          </button>
        )}
      </div>
      {menu && (
        <SavesPanel saves={saves} status={menu} enabled={savesEnabled} busy={busy} message={message}
          onSave={doSave} onDelete={doDelete} onClose={closeSaves} />
      )}
      </div>
    </div>
  );
}
