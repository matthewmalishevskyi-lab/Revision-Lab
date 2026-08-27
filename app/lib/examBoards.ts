// Which exam board a student's school uses, and where that's actually known
// to matter. subjects.ts already carries this warning in its own file
// comment — "GCSE topics are NOT identical everywhere... Eventually the site
// may need to ask which exam board a student is on." This is that.
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ SCOPE, on purpose: this is ADVISORY METADATA, not new revision content.
//
// It doesn't touch anything in app/lib/content/*.ts, doesn't add or reorder
// any topic in subjects.ts, and doesn't pretend to know a school's actual
// scheme of work. All it adds is: (1) a place to remember which board a
// student is on, on this device, and (2) a short, honest, one-sentence note
// for the handful of subjects where a real, specific, well-known board
// difference exists — grounded in the same research already written into
// subjects.ts's own comments (see the History and Business entries there).
// Every other subject gets no note, deliberately, rather than a made-up one.
// ─────────────────────────────────────────────────────────────────────────────

export const EXAM_BOARD_KEY = "revision-lab:exam-board";

export type ExamBoard = "aqa" | "edexcel" | "ocr" | "wjec" | "other";

export const EXAM_BOARDS: { value: ExamBoard; label: string }[] = [
  { value: "aqa", label: "AQA" },
  { value: "edexcel", label: "Edexcel" },
  { value: "ocr", label: "OCR" },
  { value: "wjec", label: "WJEC" },
  { value: "other", label: "Another board, or not sure" },
];

// A real type guard rather than a cast — `readStorageRaw` returns whatever
// string happens to be sitting in localStorage, which could be last year's
// value, something a browser extension wrote, or nothing at all. Treating
// anything unrecognised as "no board chosen" is the same defensive shape as
// AccessibilityPanel.tsx's parseSettings.
export function isExamBoard(value: string | null): value is ExamBoard {
  return EXAM_BOARDS.some((board) => board.value === value);
}

export function boardLabel(board: ExamBoard): string {
  return EXAM_BOARDS.find((b) => b.value === board)?.label ?? "your board";
}

// One short, honest sentence per subject where boards are well known to
// genuinely diverge — not a technical spec comparison, just enough to tell a
// student "this bit is worth double-checking". Subjects absent from this
// list aren't perfectly uniform either (none of them are), but there isn't
// anything specific and true enough to say about them without writing new
// content, so they keep the plain generic notice instead.
export const BOARD_NOTES: Partial<Record<string, string>> = {
  history:
    "History is built from OPTIONS your school picks, not a shared syllabus — your depth study, period study and thematic study can be completely different from another school's, whatever board you're on. Check your school's own topic list first.",
  english:
    "Set texts vary more than anything else here — which novel, which Shakespeare play, and which poetry anthology you study is chosen by your school, not fixed by your board.",
  business:
    "AQA, Edexcel and OCR split Business up differently — Edexcel teaches it as two themes, AQA as six units across two papers, and OCR differently again — so the order topics come up in your lessons may not match the order shown here.",
  "computer-science":
    "AQA and OCR group Computer Science topics differently across their papers, so a few of these may appear in a different order, or bundled differently, in your actual course.",
  "religious-education":
    "Which religions and themes you study is mostly a school choice, not a board one — AQA, Edexcel, OCR and WJEC all offer several different combinations, so check which ones your school picked.",
};

export function boardNoteFor(subjectSlug: string): string | undefined {
  return BOARD_NOTES[subjectSlug];
}
