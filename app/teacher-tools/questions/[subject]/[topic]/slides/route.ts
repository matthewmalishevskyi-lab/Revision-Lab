// The .pptx download for one lesson.
//
// A Route Handler rather than a page, because the response is a file rather
// than HTML. `buildPptx` uses node:zlib, so this must run on the Node runtime
// — the Edge runtime has no zlib and would fail at build time, not at request
// time, which is at least the good kind of failure.

import { NextResponse } from "next/server";
import { buildLessonPlan, subjectsWithLessons } from "../../../../../lib/lesson-plan";
import { lessonPptx, lessonPptxFilename } from "../../../../../lib/lesson-slides";

export const runtime = "nodejs";

// ⚠️ BUILT AT DEPLOY TIME, NOT PER REQUEST — AND THIS WAS A REAL HOLE.
//
// This route was the only one in the feature without `generateStaticParams`,
// so every hit rebuilt a whole .pptx: 176 synchronous `deflateRawSync` calls,
// measured at 13.4 ms of CPU for the worst topic and a 986x amplification
// (a 120-byte request returns 116 KB). `deflateRawSync` BLOCKS THE EVENT LOOP,
// so during those milliseconds the instance cannot serve a login or a session
// check either — one core tops out around 75 requests a second.
//
// It needed no account and had no throttle, and the `Cache-Control` header it
// set was worth nothing against anyone deliberate: the route ignores the query
// string entirely while a CDN keys on the full URL, so `?n=<random>` was a
// guaranteed origin hit every time. On a Hobby plan that is billed invocations
// and egress as well as downtime.
//
// Pre-rendering all 285 decks costs 2.3 seconds of build time and 25 MB of
// static output, and leaves nothing to attack: the file is on the CDN before
// anyone asks for it. Every sibling route here already does this; this one was
// simply missed.
export const dynamic = "force-static";

export function generateStaticParams() {
  return subjectsWithLessons().flatMap((s) =>
    s.topics.map((t) => ({ subject: s.slug, topic: t.slug })),
  );
}

type Params = { params: Promise<{ subject: string; topic: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { subject, topic } = await params;
  const plan = buildLessonPlan(subject, topic);
  if (!plan) {
    return new NextResponse("No lesson for that topic.", { status: 404 });
  }

  const file = lessonPptx(plan);
  const name = lessonPptxFilename(plan);

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      // `attachment` rather than `inline`: a browser asked to display a pptx
      // inline has nothing to display it with, and what the teacher gets is a
      // blank tab rather than a file.
      "Content-Disposition": `attachment; filename="${name}"`,
      "Content-Length": String(file.length),
      // The deck is derived entirely from content in the repo, so it only
      // changes when the site is redeployed.
      "Cache-Control": "public, max-age=3600",
    },
  });
}
