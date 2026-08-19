"use client";

// A single button: "Print this sheet". `window.print()` only exists in the
// browser, which is why this has to be its own small Client Component rather
// than living inline in the print page — that page is otherwise a plain
// Server Component with nothing else that needs one.
//
// `print:hidden` on the wrapper matters more than it looks: without it, the
// button itself would show up ON the printed page, sitting uselessly among
// the revision notes.

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
    >
      Print this sheet
    </button>
  );
}
