// Which exam board a student sits for each subject, and which topics that
// rules out.
//
// Matthew, 2026-10-14: "when a person chooses their exam board... all of the
// things that are not in their exam board are gone, and only the things in
// their exam board are left" — asked the first time a logged-in student opens
// a subject, skippable, changeable later with a button. He chose: kept ON THE
// ACCOUNT, asked on the subjects that differ (Maths and the sciences ask too
// but say they are the same everywhere), boards AQA, Edexcel, OCR, Eduqas.
//
// PURE AND IMPORT-FREE on purpose: read by server pages, the server action
// and a Node check alike. Where the choice is STORED is exam-board-store.ts.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE RULE THAT DECIDED EVERY ENTRY BELOW
//
// The two mistakes are not the same size. Showing a student a topic that is not
// on their paper costs them ten minutes. HIDING one that is on their paper
// costs them marks, and they will never know it was there. So:
//
//   1. A topic is hidden only when the board's specifications were READ and
//      the content is not in them. Every hiding below names its source.
//   2. A board counts as covering a topic if ANY of its specs in that subject
//      does — Edexcel RS A and B, OCR History A and B (SHP), Eduqas RS Route A
//      and B. A school's choice of spec is not something the site knows.
//   3. Not sure means SHOWN.
//   4. Year 9 is Key Stage 3, not any board's GCSE, so nothing there is ever
//      tagged or hidden.
//   5. A topic not listed here is on every board. Unknown means shown — the
//      lookup fails OPEN, so a new topic can never vanish by being forgotten.
//
// The research, 2026-10-13, read every board's current specification for the
// subjects that ask. What it found is smaller than "hide everything that isn't
// AQA" sounds, and that is the honest answer rather than a gap: most GCSE
// content really is shared, because the Department for Education sets it.
// English, Geography and Business hide nothing — their boards differ in
// structure, set texts and case studies, not in which of these topics exist.
// ─────────────────────────────────────────────────────────────────────────────

export const BOARDS = ["aqa", "edexcel", "ocr", "eduqas"] as const;
export type Board = (typeof BOARDS)[number];

/** A board, or "none": skipped, or not sure — show everything, don't ask again. */
export type BoardChoice = Board | "none";

export const BOARD_LABEL: Record<Board, string> = {
  aqa: "AQA",
  edexcel: "Edexcel",
  ocr: "OCR",
  // Eduqas is WJEC's brand for its English GCSEs; plain "WJEC" GCSEs are
  // the Welsh ones, with different content again, so the name matters.
  eduqas: "Eduqas (WJEC)",
};

export function isBoardChoice(value: unknown): value is BoardChoice {
  return value === "none" || (typeof value === "string" && (BOARDS as readonly string[]).includes(value));
}

export function choiceLabel(choice: BoardChoice): string {
  return choice === "none" ? "Not sure" : BOARD_LABEL[choice];
}

/**
 * The subjects that ask. The first six differ between boards (even where the
 * research found nothing to hide, they differ in structure, and asking now
 * means a later finding needs no new question). Maths and the three sciences
 * ask too, at Matthew's request, and say plainly that their content is the
 * same everywhere.
 *
 * Not asked: the languages, PE and Citizenship — not yet checked against
 * every board, so nothing there could honestly be hidden.
 */
export const BOARD_SUBJECTS = [
  "history", "english", "religious-education", "geography", "computer-science", "business",
  "maths", "biology", "chemistry", "physics",
] as const;

/** Content the Department for Education fixes for every board. */
export const SAME_ON_EVERY_BOARD = new Set<string>(["maths", "biology", "chemistry", "physics"]);

export function asksForBoard(subjectSlug: string): boolean {
  return (BOARD_SUBJECTS as readonly string[]).includes(subjectSlug);
}

type BoardOnly = { boards: readonly Board[]; why: string; sources: readonly string[] };

const AQA_HISTORY = "https://filestore.aqa.org.uk/resources/history/specifications/AQA-8145-SP-2016.PDF";
const EDEXCEL_HISTORY = "https://qualifications.pearson.com/content/dam/pdf/GCSE/History/2016/specification-and-sample-assessments/gcse-9-1-history-specification.pdf";
const OCR_HISTORY_A = "https://www.ocr.org.uk/qualifications/gcse/history-a-explaining-the-modern-world-j410-from-2016/assessment/";
const OCR_HISTORY_B = "https://www.ocr.org.uk/qualifications/gcse/history-b-schools-history-project-j411-from-2016/assessment/";
const EDUQAS_HISTORY = "https://www.eduqas.co.uk/media/qhsb4fdj/eduqas-gcse-history-spec-from-2016-may-2026.pdf";
const AQA_RS = "https://filestore.aqa.org.uk/resources/rs/specifications/AQA-8062-SP-2016.PDF";
const EDEXCEL_RS_B = "https://secure.qualifications.pearson.com/content/dam/pdf/GCSE/Religious%20Studies/2016/Specification%20and%20sample%20assessments/specification-gcse-l1-l2-religious-studies-b-june-2016-draft-4.pdf";
const OCR_RS = "https://www.ocr.org.uk/Images/240547-specification-accredited-gcse-religious-studies-j625.pdf";
const EDUQAS_RS = "https://www.eduqas.co.uk/media/wpojjvm0/eduqas-gcse-rs-spec-full-from-2016-e-14-05-2020.pdf";
const AQA_CS = "https://filestore.aqa.org.uk/resources/computing/specifications/AQA-8525-SP-2020.PDF";
const AQA_CS_SWITCHING = "https://www.aqa.org.uk/resources/computer-science-and-it/gcse/computer-science2/plan/switching-to-aqa-from-ocr";
const OCR_CS = "https://shenfield.essex.sch.uk/assets/Uploads/COMPUTER-SCIENCE-OCR-GCSE-SPECIFICATION.pdf";
const EDEXCEL_CS = "https://flhs.org.uk/Media/Docs/Opt/GCSE-Computer-Science-Specification.pdf";
const EDUQAS_CS = "https://www.eduqas.co.uk/media/tf3bvmxe/eduqas-gcse-computer-science-specification-10-02-2020.pdf";

/**
 * The only topics NOT on every board: "subject/topic" → the boards that DO
 * cover it. `why` is written for the student whose board leaves it out.
 */
export const BOARD_ONLY: Record<string, BoardOnly> = {
  "history/conflict-and-tension-1918-1939": {
    boards: ["aqa", "ocr", "eduqas"],
    why: "Edexcel's History options have no study of inter-war international relations — Versailles comes up only as a cause of Weimar's problems.",
    sources: [AQA_HISTORY, EDEXCEL_HISTORY, OCR_HISTORY_A, EDUQAS_HISTORY],
  },
  "history/crime-and-punishment": {
    boards: ["edexcel", "ocr", "eduqas"],
    why: "AQA's thematic studies are health, power and migration — there is no crime and punishment option.",
    sources: [AQA_HISTORY, EDEXCEL_HISTORY, OCR_HISTORY_B, EDUQAS_HISTORY],
  },
  "history/norman-england-1066-1100": {
    boards: ["aqa", "edexcel", "ocr"],
    why: "Eduqas's British depth studies start in 1337 — none covers the Norman Conquest.",
    sources: [AQA_HISTORY, EDEXCEL_HISTORY, OCR_HISTORY_B, EDUQAS_HISTORY],
  },
  "religious-education/peace-and-conflict": {
    boards: ["aqa", "edexcel", "ocr"],
    why: "Neither of Eduqas's routes has a peace and conflict theme — war, pacifism and just war are not in its specification.",
    sources: [AQA_RS, EDEXCEL_RS_B, OCR_RS, EDUQAS_RS],
  },
  "religious-education/crime-and-punishment": {
    boards: ["aqa", "edexcel", "eduqas"],
    why: "OCR's four themes are relationships, the existence of God, peace and conflict, and dialogue — crime and punishment is not one of them.",
    sources: [AQA_RS, EDEXCEL_RS_B, EDUQAS_RS, OCR_RS],
  },
  "religious-education/re-exam-practice": {
    boards: ["aqa"],
    why: "This page teaches AQA's paper layout and question tariffs. Your board's papers are set out differently, so it would teach the wrong format.",
    sources: [AQA_RS, EDEXCEL_RS_B, OCR_RS, EDUQAS_RS],
  },
  "computer-science/programming-file-handling": {
    boards: ["ocr", "edexcel", "eduqas"],
    why: "AQA's specification covers keyboard input and screen output only — file handling is not on it.",
    sources: [AQA_CS, AQA_CS_SWITCHING, OCR_CS, EDEXCEL_CS, EDUQAS_CS],
  },
  "computer-science/databases": {
    boards: ["aqa", "ocr"],
    why: "Neither Edexcel's nor Eduqas's specification covers databases or SQL — SQL appears only as 'SQL injection', a cyber-security threat.",
    sources: [AQA_CS, OCR_CS, EDEXCEL_CS, EDUQAS_CS],
  },
};

/** Whether a topic is on this choice of board. Fails OPEN — see rule 5. */
export function onBoard(subjectSlug: string, topicSlug: string, choice: BoardChoice | null | undefined): boolean {
  if (!choice || choice === "none") return true;
  const entry = BOARD_ONLY[`${subjectSlug}/${topicSlug}`];
  return !entry || entry.boards.includes(choice);
}

/** Why a topic is off a board, for the notice on its page; null if it isn't. */
export function whyNotOnBoard(subjectSlug: string, topicSlug: string, choice: BoardChoice | null | undefined): string | null {
  if (onBoard(subjectSlug, topicSlug, choice)) return null;
  return BOARD_ONLY[`${subjectSlug}/${topicSlug}`]?.why ?? null;
}

/** How many of a subject's topics a board leaves out — for the chooser's buttons. */
export function hiddenCount(subjectSlug: string, board: Board): number {
  return Object.entries(BOARD_ONLY).filter(([key, e]) => key.startsWith(`${subjectSlug}/`) && !e.boards.includes(board)).length;
}

/**
 * Every "subject/topic" to keep out of mixed lists (tests, today's practice,
 * the game, the revision queue) for one student's choices.
 */
export function hiddenTopicKeys(choices: ReadonlyMap<string, BoardChoice>): Set<string> {
  const out = new Set<string>();
  for (const [key, entry] of Object.entries(BOARD_ONLY)) {
    const choice = choices.get(key.slice(0, key.indexOf("/")));
    if (choice && choice !== "none" && !entry.boards.includes(choice)) out.add(key);
  }
  return out;
}

// One short sentence per subject where the real difference between boards is
// not WHICH topics but how a school picks among them — still true after a
// board is chosen, so it stays under the chooser.
export const BOARD_NOTES: Partial<Record<string, string>> = {
  history:
    "Even on one board, History is built from options your school picks, so you won't sit every topic left here. Check your school's own list.",
  english:
    "Set texts are chosen by your school, not fixed by your board — which novel, which play and which poetry anthology.",
  business:
    "Boards split Business up differently — Edexcel as two themes, AQA as six units — so topics may come up in a different order.",
  "computer-science":
    "Boards group these topics differently across their papers, so the order may not match your course.",
  "religious-education":
    "Which religions and themes you study is mostly your school's choice, so check which ones it picked.",
  geography:
    "Every board covers these topics, but with different case studies — learn the ones your teacher gives you.",
};
