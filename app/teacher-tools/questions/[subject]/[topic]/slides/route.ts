// The .pptx download for one lesson.
//
// A Route Handler rather than a page, because the response is a file rather
// than HTML. `buildPptx` uses node:zlib, so this must run on the Node runtime
// — the Edge runtime has no zlib and would fail at build time, not at request
// time, which is at least the good kind of failure.

import { NextResponse } from "next/server";
import { buildLessonPlan } from "../../../../../lib/lesson-plan";
import { lessonPptx, lessonPptxFilename } from "../../../../../lib/lesson-slides";

export const runtime = "nodejs";

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
