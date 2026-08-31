// Writing a JSON file without anyone ever seeing it half-written.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE BUG THIS EXISTS TO KILL, WHICH WAS REPRODUCED RATHER THAN GUESSED AT
//
// `writeFile` is not one action. It TRUNCATES the file to nothing, then writes
// the new contents into it. For a few milliseconds the file on disk is empty,
// or holds half a JSON document.
//
// That is invisible right up until two things touch the same file at once —
// which is exactly what the live quiz does. Every player's screen polls the
// same session 1.2 seconds apart, and every answer is a read-modify-write of
// data/quiz.json. Playing a real two-player game locally reliably produced
// `QUIZ_FILE_CORRUPTED` 500s on the players' screens: one request was reading
// the file while another was mid-write, and caught it torn in half.
//
// `rename` IS one action. The operating system guarantees it either happened
// or it didn't — there is no moment where a reader sees a partial rename. So:
// write the whole document to a temporary file first, then rename it over the
// real one. A reader either gets the complete old file or the complete new
// one, and never anything in between.
//
// WHAT THIS DOES NOT FIX, DELIBERATELY: two requests that both read, both
// modify, and both write will still have the second one overwrite the first's
// change ("lost update"). That needs locking, and it is not worth it here —
// the local JSON store is a laptop convenience for seeing what got saved, and
// the live site uses Supabase, where the database's own constraints do this
// properly. A lost answer in local dev is a shrug; a 500 in a player's face
// is not, and that is the half this fixes.
// ─────────────────────────────────────────────────────────────────────────────

import { rename, unlink, writeFile } from "node:fs/promises";

export async function writeJsonAtomic(filePath: string, value: unknown): Promise<void> {
  // The temporary file has to sit in the SAME DIRECTORY as its target.
  // `rename` is only atomic within one filesystem, and somewhere like /tmp is
  // very often a different one — which would silently turn this back into a
  // copy, and back into the bug above.
  //
  // The pid and a random suffix are what stop two writers landing on the same
  // temporary path and corrupting each other on the way to fixing corruption.
  const temporaryPath = `${filePath}.${process.pid}-${Math.random().toString(36).slice(2)}.tmp`;

  try {
    await writeFile(temporaryPath, JSON.stringify(value, null, 2), "utf8");
    await rename(temporaryPath, filePath);
  } catch (error) {
    // Don't leave scratch files lying next to real data if this failed
    // partway. The unlink is itself allowed to fail — if the temporary file
    // was never created, there is nothing to clean up and that is fine.
    await unlink(temporaryPath).catch(() => {});
    throw error;
  }
}
