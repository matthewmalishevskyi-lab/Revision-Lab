// A tiny reactive layer over localStorage, shared by every component that
// stores a small preference there — which outfit Pixel is wearing, the
// preview planner's plan-ahead notes — and needs to render it correctly.
//
// THE PROBLEM THIS SOLVES: localStorage doesn't exist during server
// rendering, so a component reading it directly in its render body would
// disagree with the server's HTML the moment it hydrates — React calls
// that a hydration mismatch. Every affected component on this site used to
// solve it the same way: render a safe default, then correct it a moment
// later inside a `useEffect` that calls `setState`. That works, but
// calling setState synchronously inside an effect is exactly what the
// `react-hooks/set-state-in-effect` lint rule exists to flag (it forces an
// extra render most effects don't actually need) — which is why every one
// of those components showed up as a pre-existing eslint failure.
//
// `useSyncExternalStore` is React's own purpose-built answer to "read a
// value that lives OUTSIDE React and needs to render correctly before AND
// after hydration": no effect, no extra setState call, built into React
// itself rather than a workaround.
//
// One extra piece specific to localStorage: the browser's own "storage"
// event exists to notify OTHER tabs that a key changed, but deliberately
// never fires in the tab that made the change. Several places on this site
// show the SAME stored value more than once on one page at once — Pixel
// appears in the header and on the wardrobe page simultaneously — so
// writes made through this file also fire a same-tab custom event, and
// every reader subscribes to both.

import { useCallback, useSyncExternalStore } from "react";

const LOCAL_WRITE_EVENT = "revision-lab:local-storage-write";

function subscribe(callback: () => void): () => void {
  window.addEventListener(LOCAL_WRITE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LOCAL_WRITE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** Reads a key straight from localStorage. Never throws — a locked-down
 * browser (private mode, storage disabled) is treated the same as "nothing
 * saved yet" everywhere else on this site that touches localStorage. */
export function readStorageRaw(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Writes a key to localStorage and immediately notifies every
 * `useStoredRaw` reader of that key in THIS tab — see the file comment
 * above for why the browser's own "storage" event can't do that job by
 * itself. Never throws; a failed write just isn't remembered next visit,
 * the same trade-off as everywhere else this site touches localStorage. */
export function writeStorageRaw(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Best-effort — see above.
  }
  window.dispatchEvent(new Event(LOCAL_WRITE_EVENT));
}

/**
 * A localStorage-backed string, reactive to writes made anywhere — this
 * component, another instance of it elsewhere on the same page, or another
 * tab. `serverValue` is what every server render and the client's very
 * first paint use: the same safe default every affected component used to
 * render by hand before its own `useEffect` corrected it.
 */
export function useStoredRaw(
  key: string,
  serverValue: string | null,
): string | null {
  const getSnapshot = useCallback(() => readStorageRaw(key), [key]);
  const getServerSnapshot = useCallback(() => serverValue, [serverValue]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
