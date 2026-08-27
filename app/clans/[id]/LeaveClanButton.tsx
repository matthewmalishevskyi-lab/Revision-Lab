import { leaveClanAction } from "../../lib/clan-actions";

// A plain form with a server action, no client state needed — the same
// pattern SiteHeader's own "Log out" button uses. Leaving is low-stakes:
// rejoining just needs the password again, so this skips a confirmation
// dialog rather than adding one for its own sake.
export function LeaveClanButton() {
  return (
    <form action={leaveClanAction}>
      <button
        type="submit"
        className="rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold opacity-70 transition hover:bg-black/5 hover:opacity-100 dark:border-white/15 dark:hover:bg-white/10"
      >
        Leave clan
      </button>
    </form>
  );
}
