"use client";

// Small, synthesised sound effects for the live quiz — a countdown tick, a
// correct/wrong chime, a fanfare on the final results. NO AUDIO FILES and
// NO NEW PACKAGES: every sound here is a couple of oscillator tones built
// with the Web Audio API that ships in every browser, the same "read every
// line, nothing hidden in a dependency" choice users.ts's password hashing
// and quiz.ts's Supabase client already make for their own reasons.
//
// Muting is a real preference, not an afterthought — a classroom running
// this on a shared screen might not want any noise at all — so it's stored
// the same reactive-localStorage way the theme toggle and Pixel's outfit
// already are (see browserStore.ts's own header comment for why that
// pattern exists), checked by every function below before it makes a
// sound.

import { readStorageRaw, useStoredRaw, writeStorageRaw } from "./browserStore";

const MUTE_KEY = "revision-lab:quiz-sound-muted";

export function isQuizSoundMuted(): boolean {
  return readStorageRaw(MUTE_KEY) === "1";
}

export function setQuizSoundMuted(muted: boolean): void {
  writeStorageRaw(MUTE_KEY, muted ? "1" : "0");
}

/** Reactive to the mute toggle, wherever it's flipped — same
 * `useSyncExternalStore`-backed hook every other stored preference on this
 * site reads through. */
export function useQuizSoundMuted(): boolean {
  return useStoredRaw(MUTE_KEY, null) === "1";
}

// One shared AudioContext, created the first time a sound is actually
// needed rather than on page load — browsers refuse to make noise before a
// visitor has interacted with the page at all, and there is no reason to
// even try until the first tick or chime is due.
let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    // Safari (and old iOS) only exposes this constructor under a vendor
    // prefix — `webkitAudioContext` isn't in TypeScript's own DOM types,
    // so it's read through an explicit narrow type rather than `any`.
    type LegacyWindow = Window & { webkitAudioContext?: typeof AudioContext };
    const Ctor = window.AudioContext ?? (window as LegacyWindow).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  // A context can start (or drift back into) "suspended" if it was created
  // before any user gesture landed on the page — resuming is a no-op if
  // it's already running, so this is safe to call every time.
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

// One short tone, faded in and out rather than switched on/off abruptly —
// a hard on/off click is audibly harsh; the exponential ramp down is the
// standard Web Audio way to avoid it. Every effect below is one or two of
// these layered together, the same "one small building block, reused"
// shape QuizShapeIcon's six shapes already follow for the visual side.
function tone(
  audio: AudioContext,
  freq: number,
  startAt: number,
  duration: number,
  type: OscillatorType,
  peakGain: number,
) {
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const t0 = audio.currentTime + startAt;
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.linearRampToValueAtTime(peakGain, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(audio.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

function playIfAllowed(build: (audio: AudioContext) => void): void {
  if (isQuizSoundMuted()) return;
  const audio = getContext();
  if (!audio) return;
  try {
    build(audio);
  } catch {
    // Best-effort, the same "a blocked browser API just means silence, not
    // a broken feature" trade-off as everywhere else this site touches one.
  }
}

/** A short tick for the last few seconds of a question's countdown — only
 * the tail end, the same restraint Kahoot's own countdown uses, so it
 * reads as urgency near the end rather than a metronome for all 20
 * seconds. Call once per second (on the integer changing), not every
 * animation frame — see HostQuizScreen.tsx / PlayQuizScreen.tsx's own
 * comment at the call site. */
export function playCountdownTick(secondsLeft: number): void {
  if (secondsLeft > 5 || secondsLeft <= 0) return;
  playIfAllowed((audio) => tone(audio, 880, 0, 0.09, "square", 0.05));
}

export function playCorrect(): void {
  playIfAllowed((audio) => {
    tone(audio, 523.25, 0, 0.16, "triangle", 0.15); // C5
    tone(audio, 783.99, 0.09, 0.24, "triangle", 0.15); // G5
  });
}

export function playWrong(): void {
  playIfAllowed((audio) => tone(audio, 146.83, 0, 0.35, "sawtooth", 0.12)); // a low buzz, not a shout
}

/** The "you made it" finish — four ascending notes, reused whether it's
 * the host's shared screen or a player's own device that just reached the
 * final leaderboard. */
export function playFanfare(): void {
  playIfAllowed((audio) => {
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, i) => tone(audio, freq, i * 0.12, 0.5, "triangle", 0.13));
  });
}
