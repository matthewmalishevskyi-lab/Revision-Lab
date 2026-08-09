import { cache } from "react";
import { getCurrentUser } from "./actions";

// Who is looking at this page — asked once per request, not once per component.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE PROBLEM THIS SOLVES, WHICH IS EASY TO CREATE BY ACCIDENT
//
// Server Components each fetch their own data, which is the whole point of
// them — no passing props down through layers that do not care. The homepage
// asks who is logged in; the header inside it independently asks the same
// thing.
//
// Both are reasonable. Together they meant TWO cookie reads and TWO database
// round trips to answer one question, on every single page load. Nothing looked
// wrong; the page just quietly did twice the work.
//
// `cache()` from React fixes it in one line. It remembers the result for the
// duration of a single request, so the first caller pays for the lookup and
// everyone else gets the answer for free. When the request ends, the memory is
// discarded — so one person's login can never leak into another's page, which
// is the obvious worry with anything called a cache and the reason this is a
// React feature rather than a plain variable.
//
// The rule worth taking away: in Server Components, do not pass data down to
// avoid re-fetching it. Fetch it where it is needed and deduplicate here.
// ─────────────────────────────────────────────────────────────────────────────
export const getViewer = cache(getCurrentUser);
