"use client";

// The save menu: five slots, over the game, with the world paused behind it.
//
// Built as HTML over the canvas rather than drawn on the visor, because it has
// a text box in it (the save's name) and a canvas cannot be typed into — and
// because a real <dialog>-shaped panel gets focus, Tab, Escape and a screen
// reader's attention right for free, which a hand-drawn one would not.
//
// ⚠️ Every serious action is two steps: replacing a full slot and deleting
// one both turn the button into "Sure?" first — the same idiom as deleting an
// account or ending a quiz early. A misplaced tap here throws away a run.

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { deckName, savedAt } from "./saveLabels";
import { SAVE_NAME_MAX, SAVE_SLOTS, saveHref, type SaveSummary } from "../../lib/gameSave";

type Status = { can: true; level: number; title: string } | { can: false; reason: string };

export function SavesPanel({ saves, status, enabled, busy, message, onSave, onDelete, onClose }: {
  saves: SaveSummary[];
  status: Status;
  enabled: boolean;
  busy: boolean;
  message: { text: string; ok: boolean } | null;
  onSave: (slot: number, name: string) => void;
  onDelete: (slot: number) => void;
  onClose: () => void;
}) {
  const titleId = useId();
  const nameId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  // which slot is waiting for its "Sure?", and for what
  const [confirm, setConfirm] = useState<{ slot: number; what: "replace" | "delete" } | null>(null);
  const bySlot = new Map(saves.map((s) => [s.slot, s]));
  const fallback = status.can ? deckName(status.level) : "";

  // focus in on open, Escape closes, Tab stays inside — it covers the game,
  // so the page behind it is not somewhere the keyboard should wander off to
  useEffect(() => {
    const panel = panelRef.current; if (!panel) return;
    panel.querySelector<HTMLElement>("input:not([disabled]), button:not([disabled])")?.focus();
    // ⚠️ On the WINDOW, not the panel: a "Sure?" button that disappears once
    // pressed leaves focus on <body>, outside the panel, and Escape and Tab
    // then never reached a listener on the panel at all — found by a test.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key !== "Tab") return;
      const items = [...panel.querySelectorAll<HTMLElement>("input, button, a[href]")].filter((el) => !el.hasAttribute("disabled"));
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (!panel.contains(document.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const canSave = enabled && status.can && !busy;
  const button = "min-h-11 rounded-xl px-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 p-2 sm:p-4">
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId}
        className="max-h-full w-full max-w-xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b1220] p-4 text-white shadow-2xl sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 id={titleId} className="text-xl font-bold">Saves</h2>
            <p className="mt-1 text-sm text-white/70">
              {!enabled ? "Saves aren't switched on yet — GAME_SAVES_SETUP.sql still needs running in Supabase."
                : status.can ? `Saving now keeps this exact moment on ${deckName(status.level)}.` : status.reason}
            </p>
          </div>
          <button type="button" onClick={onClose} className={`${button} shrink-0 border border-white/20 hover:bg-white/10`}>Back to game</button>
        </div>

        <label htmlFor={nameId} className="mt-4 block text-sm font-semibold">Name <span className="font-normal text-white/50">(optional)</span></label>
        <input id={nameId} value={name} onChange={(e) => setName(e.target.value)} maxLength={SAVE_NAME_MAX}
          placeholder={fallback || "Name this save"} disabled={!canSave}
          className="mt-1 min-h-11 w-full rounded-xl border border-white/20 bg-black/40 px-3 text-base text-white placeholder:text-white/40 disabled:opacity-50" />

        <ul className="mt-4 space-y-2">
          {Array.from({ length: SAVE_SLOTS }, (_, i) => i + 1).map((slot) => {
            const s = bySlot.get(slot);
            const sure = confirm?.slot === slot ? confirm.what : null;
            return (
              <li key={slot} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{slot} · {s ? s.name : <span className="font-normal text-white/50">Empty</span>}</p>
                    {s && <p className="text-xs text-white/60">{deckName(s.level)} · {s.health}% health · {savedAt(s.updatedAt)}</p>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sure === "replace" ? (
                      <>
                        <button type="button" disabled={!canSave} onClick={() => { setConfirm(null); onSave(slot, name); }} className={`${button} bg-amber-500 text-black hover:bg-amber-400`}>Replace it</button>
                        <button type="button" onClick={() => setConfirm(null)} className={`${button} border border-white/20 hover:bg-white/10`}>Keep it</button>
                      </>
                    ) : sure === "delete" ? (
                      <>
                        <button type="button" disabled={busy} onClick={() => { setConfirm(null); onDelete(slot); }} className={`${button} bg-red-600 hover:bg-red-500`}>Delete it</button>
                        <button type="button" onClick={() => setConfirm(null)} className={`${button} border border-white/20 hover:bg-white/10`}>Keep it</button>
                      </>
                    ) : (
                      <>
                        <button type="button" disabled={!canSave} onClick={() => (s ? setConfirm({ slot, what: "replace" }) : onSave(slot, name))} className={`${button} bg-emerald-600 hover:bg-emerald-500`}>Save here</button>
                        {s && <Link href={saveHref(s)} onClick={onClose} className={`${button} flex items-center bg-blue-600 hover:bg-blue-500`}>Load</Link>}
                        {s && <button type="button" disabled={busy || !enabled} onClick={() => setConfirm({ slot, what: "delete" })} className={`${button} border border-white/20 hover:bg-white/10`}>Delete</button>}
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p role="status" className={`mt-3 min-h-5 text-sm ${message?.ok === false ? "text-red-300" : "text-emerald-300"}`}>{busy ? "One moment…" : message?.text ?? ""}</p>
        <p className="mt-1 text-xs text-white/50">Loading leaves this game, so save it first if you want to keep it. Saves are kept on your account, so they work on any device you log in on.</p>
      </div>
    </div>
  );
}
