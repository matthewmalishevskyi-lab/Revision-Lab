// The topics the person reading this page has ruled out by choosing an exam
// board — for pages that build mixed lists (tests, past papers) and have no
// other reason to know who is reading. Empty for a visitor, and empty when the
// store can't be read: it fails open (see exam-board-store.ts).

import { ACCOUNTS_ENABLED } from "./site";
import { getViewer } from "./viewer";
import { getHiddenTopics } from "./exam-board-store";

export async function viewerHiddenTopics(): Promise<Set<string>> {
  const viewer = ACCOUNTS_ENABLED ? await getViewer() : null;
  return viewer ? getHiddenTopics(viewer.id) : new Set();
}
