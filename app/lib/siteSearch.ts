// Everything the search box can find: the site's own pages as well as its
// topics.
//
// WHY THIS EXISTS
//
// Matthew: *"you can search up the different buttons. And not just the topics.
// For example, if you write teacher tools, it gives you the teacher tools."*
// He is describing a real problem with how this site has grown. Teacher tools,
// the live quiz, clans, the wardrobe, today's practice, the accessibility
// settings and the exam-board picker are all reached from a button that lives
// on exactly one page — the footer, or the dashboard, or a chip in the header
// that disappears into a menu on a phone. If you do not already know where a
// feature lives, the only way to find it is to go looking. Search knew about
// 285 topics and nothing else.
//
// ⚠️ THE LIST OF PAGES IS HAND-WRITTEN, AND THE TOPICS ARE NOT. That asymmetry
// is deliberate and worth defending, because the rest of this codebase goes to
// real lengths to avoid hand-written lists (see teacher-tools.ts, which derives
// which topics have diagrams rather than listing them). The difference: a topic
// list can be derived from SUBJECTS, which already exists and is already the
// single source of truth. There is no equivalent source for "what a page is
// for" — the route folder knows a path and nothing else, and a search result
// that read "/teacher-tools/questions" would be worse than no result at all.
// Someone has to write the sentence. What stops it going stale is a check in
// check-security.mjs: every href here must be a real route, and every
// non-dynamic route the site has must either be listed here or be on the short
// list of pages deliberately left out, with a reason.
//
// ⚠️ /early-access IS DELIBERATELY NOT SEARCHABLE. It is the developer preview,
// gated behind a code, and it is kept out of robots.ts for exactly the same
// reason: listing a hidden page advertises it. Search is a list a visitor
// reads, so putting it here would undo the gate's whole point.

import { SUBJECTS, SUBJECT_GROUPS, getGroup, type IconName } from "./subjects";

export type SearchResult = {
  kind: "page" | "topic";
  href: string;
  title: string;
  /** The line underneath the title — what this page is actually for. */
  detail: string;
  icon: IconName;
  /** Words someone might type that are not in the title or the detail. */
  keywords?: string;
  /** Hidden from anyone not logged in, because it would only bounce them. */
  needsAccount?: boolean;
  /** Offered when the box is open and nothing has been typed yet. */
  suggested?: boolean;
};

// ── The site's own pages ────────────────────────────────────────────────────
//
// `keywords` matters more than it looks. People search for what a thing DOES,
// not what this site decided to call it: "kahoot" for the live quiz, "dyslexia"
// for the accessibility settings, "aqa" for the exam-board picker, "xp" for the
// progress page. A search that only matches our own vocabulary only helps
// people who already know it.
const PAGES: SearchResult[] = [
  {
    kind: "page", href: "/", title: "Home", icon: "house",
    detail: "Every subject, and where everything starts",
    keywords: "homepage front page subjects start",
  },
  {
    kind: "page", href: "/teacher-tools", title: "Teacher tools", icon: "toolbox",
    detail: "Diagrams and ready-made lessons, free and with no account",
    keywords: "teacher teachers classroom school staff teaching resources",
    suggested: true,
  },
  {
    kind: "page", href: "/teacher-tools/diagrams", title: "Diagram library", icon: "layers",
    detail: "Every diagram on the site, by subject and topic",
    keywords: "diagrams pictures figures images projector whiteboard download png teacher",
    suggested: true,
  },
  {
    kind: "page", href: "/teacher-tools/questions", title: "Lesson question examples", icon: "scroll",
    detail: "A whole lesson built from a topic's own questions, easiest first",
    keywords: "lesson plan starter plenary exit ticket worksheet powerpoint pptx slides print teacher",
  },
  {
    kind: "page", href: "/quiz", title: "Live quiz", icon: "dice",
    detail: "Host or join a head-to-head quiz in the room",
    keywords: "kahoot multiplayer room code class compete game head to head play together",
    suggested: true,
  },
  {
    kind: "page", href: "/quiz/join", title: "Join a live quiz", icon: "speech",
    detail: "Type the room code and play — no account needed",
    keywords: "join room code guest enter play",
  },
  {
    kind: "page", href: "/quiz/host/new", title: "Host a live quiz", icon: "mic",
    detail: "Pick a subject and topics, then share the room code",
    keywords: "host start create room quiz class", needsAccount: true,
  },
  {
    kind: "page", href: "/clans", title: "Clans", icon: "crown",
    detail: "Small leaderboards you make with friends",
    keywords: "clan group team friends leaderboard join search compete",
    suggested: true,
  },
  {
    kind: "page", href: "/clans/new", title: "Create a clan", icon: "castle",
    detail: "Make your own clan, with a banner you design",
    keywords: "new clan start make banner icon", needsAccount: true,
  },
  {
    kind: "page", href: "/dashboard", title: "Dashboard", icon: "grid",
    detail: "Your streak, your level and what to revise next",
    keywords: "home overview my account logged in", needsAccount: true,
  },
  {
    kind: "page", href: "/today", title: "Today's practice", icon: "clock",
    detail: "Ten questions picked for you, and the ones you got wrong before",
    keywords: "daily recommended revisit mistakes practice set today", needsAccount: true,
    suggested: true,
  },
  {
    kind: "page", href: "/progress", title: "Your progress", icon: "gauge",
    detail: "Coverage, accuracy, study time, XP, levels and badges",
    keywords: "stats statistics xp level badges streak accuracy chart history test scores delete",
    needsAccount: true, suggested: true,
  },
  {
    kind: "page", href: "/revise", title: "Revise next", icon: "compass",
    detail: "The queue: which topic to do next, and why",
    keywords: "what to revise queue next up suggestion", needsAccount: true,
  },
  {
    kind: "page", href: "/review", title: "Flashcard review", icon: "book",
    detail: "The cards that are due today, on a spaced-repetition schedule",
    keywords: "spaced repetition due cards leitner flashcards recall", needsAccount: true,
  },
  {
    kind: "page", href: "/wardrobe", title: "Pixel's wardrobe", icon: "mask",
    detail: "Unlock outfits with XP, streaks and badges, and dress Pixel up",
    keywords: "outfits cosmetics dress up costume skins character mascot pixel unlock",
    needsAccount: true,
  },
  {
    kind: "page", href: "/account", title: "Your account", icon: "cog",
    detail: "Change your password, or delete your account",
    keywords: "settings password email sign out log out delete close account",
    needsAccount: true,
  },
  {
    kind: "page", href: "/accessibility", title: "Accessibility", icon: "heart",
    detail: "Larger text, a dyslexia-friendly font, and less motion",
    keywords: "bigger text font dyslexia dyslexic reduce motion animation contrast settings",
  },
  {
    kind: "page", href: "/exam-board", title: "Exam board", icon: "scales",
    detail: "Tell the site whether you sit AQA, Edexcel, OCR or WJEC",
    keywords: "aqa edexcel ocr wjec specification spec board settings",
  },
  {
    kind: "page", href: "/privacy", title: "Privacy", icon: "shield",
    detail: "What the site stores about you, and how to get rid of it",
    keywords: "data gdpr cookies delete account contact legal",
  },
  {
    kind: "page", href: "/login", title: "Log in", icon: "power",
    detail: "Sign in to save your progress",
    keywords: "sign in signin log on enter", needsAccount: false,
  },
  {
    kind: "page", href: "/register", title: "Create an account", icon: "feather",
    detail: "Free, and it takes a minute",
    keywords: "sign up signup join register new account",
  },
];

/** Pages that only make sense when you are NOT already logged in. */
const LOGGED_OUT_ONLY = new Set(["/login", "/register"]);

// ── Per-subject destinations ────────────────────────────────────────────────
//
// "maths test" and "physics past paper" are things people go looking for, and
// before this they were three clicks deep with no way to search for them.
// Derived from SUBJECTS, so a new subject brings its own four entries.
function subjectPages(): SearchResult[] {
  const out: SearchResult[] = [];

  for (const group of SUBJECT_GROUPS) {
    const members = SUBJECTS.filter((s) => s.group === group.slug).map((s) => s.name);
    out.push({
      kind: "page", href: `/subjects/${group.slug}`, title: group.name, icon: "layers",
      detail: members.join(", "),
      keywords: "subject choose " + members.join(" ").toLowerCase(),
    });
  }

  for (const subject of SUBJECTS) {
    const group = subject.group ? getGroup(subject.group) : undefined;
    const label = group ? `${group.name} · ${subject.name}` : subject.name;
    const topics = subject.years.reduce((n, y) => n + y.topics.length, 0);

    out.push({
      kind: "page", href: `/subjects/${subject.slug}`, title: subject.name, icon: "book",
      detail: `All ${topics} ${subject.name} topics, by year`,
      keywords: "subject topics revision " + label.toLowerCase(),
    });
    out.push({
      kind: "page", href: `/subjects/${subject.slug}/exam`, title: `${subject.name} test`, icon: "clock",
      detail: "A quick timed test from across the whole subject",
      keywords: "test exam quiz timed mock quick practice " + subject.name.toLowerCase(),
    });
    out.push({
      kind: "page", href: `/subjects/${subject.slug}/past-paper`, title: `${subject.name} past paper`, icon: "scroll",
      detail: "A full-length timed paper, longer than the quick test",
      keywords: "past paper full exam mock timed real " + subject.name.toLowerCase(),
    });
    out.push({
      kind: "page", href: `/subjects/${subject.slug}/stats`, title: `${subject.name} statistics`, icon: "chart",
      detail: `Your coverage and accuracy, topic by topic`,
      keywords: "stats statistics progress accuracy coverage " + subject.name.toLowerCase(),
      needsAccount: true,
    });
  }

  return out;
}

function topicEntries(): SearchResult[] {
  return SUBJECTS.flatMap((subject) => {
    const group = subject.group ? getGroup(subject.group) : undefined;
    const label = group ? `${group.name} · ${subject.name}` : subject.name;

    return subject.years.flatMap((yearGroup) =>
      yearGroup.topics.map((topic): SearchResult => ({
        kind: "topic",
        href: `/subjects/${subject.slug}/${topic.slug}`,
        title: topic.title,
        detail: `${label} · ${yearGroup.year}`,
        icon: topic.icon,
        keywords: `${label} ${yearGroup.year}`.toLowerCase(),
      })),
    );
  });
}

/** Built once, at module load, exactly as the topic index always was. */
export const SEARCH_INDEX: SearchResult[] = [...PAGES, ...subjectPages(), ...topicEntries()];

/** Every page href the index points at — for check-security.mjs to verify.
 *  ⚠️ Taken from the built index, not from PAGES. It listed only the
 *  hand-written pages at first, so the check that every route is searchable
 *  reported /subjects/science and /subjects/languages as missing when they
 *  were in fact there — a check lying about the thing it is guarding. */
export const SEARCHABLE_PAGE_HREFS: string[] = SEARCH_INDEX.filter((e) => e.kind === "page").map((e) => e.href);

function words(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

/**
 * Does a word in the text answer a word that was typed?
 *
 * ⚠️ THE PREFIX TEST HAS TO WORK BOTH WAYS, and it did not. Only asking
 * "does the indexed word start with what was typed" means "diagram" answers
 * "diagrams" and nothing else: searching the plural scored the Diagram library
 * no higher than every other page whose description happens to contain the
 * word, and Teacher tools won on a tie. People type plurals constantly.
 *
 * ⚠️ AND THE WAY BACK NEEDS A TIGHT LEASH, WHICH THE FIRST VERSION DID NOT
 * HAVE. With only a three-letter floor, searching "wardrobe" returned THE
 * FIRST WORLD WAR — "wardrobe" starts with "war", so a history topic answered
 * a query about Pixel's outfits. The reverse direction exists for a plural or
 * a short suffix, nothing more, so the typed word may only be a couple of
 * characters longer than the word it is matching: "diagrams" still finds
 * "diagram", "wardrobe" no longer finds "war".
 */
const SUFFIX_SLACK = 2;
function wordMatch(indexed: string, typed: string): boolean {
  if (indexed.startsWith(typed)) return true;
  return (
    indexed.length >= 4 &&
    typed.startsWith(indexed) &&
    typed.length - indexed.length <= SUFFIX_SLACK
  );
}

/**
 * How well an entry answers a query. 0 means it does not.
 *
 * ⚠️ TITLE MATCHES HAVE TO BEAT KEYWORD MATCHES BY A LOT, not a little. The
 * word "test" appears in the keywords of fifteen subject tests and in the
 * detail line of several other pages; typing "maths test" has to put
 * "Maths test" first rather than burying it among things that merely mention
 * testing. Hence the gap between the bands below rather than a tidy 5/4/3/2/1.
 */
export function scoreEntry(entry: SearchResult, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const title = entry.title.toLowerCase();
  if (title === q) return 1000;
  if (title.startsWith(q)) return 700;
  if (title.includes(q)) return 500;

  const qWords = words(q);
  if (qWords.length === 0) return 0;

  const titleWords = words(title);
  if (qWords.every((w) => titleWords.some((t) => wordMatch(t, w)))) return 400;

  const haystack = `${title} ${entry.detail} ${entry.keywords ?? ""}`.toLowerCase();
  const hayWords = words(haystack);
  if (qWords.every((w) => hayWords.some((h) => wordMatch(h, w)))) {
    // A partial title match still counts for something: "maths statistics"
    // should beat "statistics and charts" in physics.
    const inTitle = qWords.filter((w) => titleWords.some((t) => wordMatch(t, w))).length;
    return 150 + inTitle * 40;
  }

  return 0;
}

export const MAX_RESULTS = 8;
const MAX_PAGES = 4;

/**
 * Pages and topics for a query, each already trimmed to what will fit.
 *
 * They are kept apart rather than merged into one ranked list because they are
 * different KINDS of answer: "take me to the wardrobe" and "teach me circle
 * theorems" are not competing for the same slot, and a merged list makes the
 * one you wanted depend on a scoring tie-break you cannot see. Whichever side
 * has nothing to show gives its room to the other.
 */
export function searchSite(query: string, signedIn: boolean): { pages: SearchResult[]; topics: SearchResult[] } {
  const q = query.trim();
  if (!q) return { pages: [], topics: [] };

  const scored: { entry: SearchResult; score: number }[] = [];
  for (const entry of SEARCH_INDEX) {
    if (entry.needsAccount && !signedIn) continue;
    if (signedIn && LOGGED_OUT_ONLY.has(entry.href)) continue;
    const score = scoreEntry(entry, q);
    if (score > 0) scored.push({ entry, score });
  }
  // A stable sort, so two entries on the same score keep the order the index
  // was built in — pages before subject pages before topics.
  scored.sort((a, b) => b.score - a.score);

  const pages = scored.filter((s) => s.entry.kind === "page").map((s) => s.entry);
  const topics = scored.filter((s) => s.entry.kind === "topic").map((s) => s.entry);

  let shownPages = pages.slice(0, MAX_PAGES);
  const shownTopics = topics.slice(0, MAX_RESULTS - shownPages.length);
  if (shownTopics.length < MAX_RESULTS - shownPages.length) {
    shownPages = pages.slice(0, MAX_RESULTS - shownTopics.length);
  }
  return { pages: shownPages, topics: shownTopics };
}

/** What to offer before anything has been typed, so the box teaches what it can do.
 *
 *  ⚠️ Filter FIRST, then take four. Slicing first gave a logged-out visitor two
 *  suggestions, because half the list needs an account — and two is the case
 *  where the section looks broken rather than helpful. */
export function suggestions(signedIn: boolean): SearchResult[] {
  return SEARCH_INDEX.filter((e) => e.suggested && !(e.needsAccount && !signedIn)).slice(0, 4);
}
