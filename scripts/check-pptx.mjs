// The slide deck a teacher downloads, checked the way the worksheet should
// have been checked the first time.
//
// ⚠️ THIS EXISTS BECAUSE THE PRINTABLE WORKSHEET SHIPPED GIVING AWAY ITS OWN
//    ANSWERS. The "Teach this" bullets sat under the starter questions, where
//    "Translation: a slide, described by a column vector" is the literal
//    answer to question 4. Nothing caught it; it was found by rendering the
//    sheet and reading it as a student would.
//
//    A deck is the same bug with a bigger audience — thirty people read a
//    projector at once. So the rule is checked rather than commented: build a
//    real deck for every topic on the site, read the VISIBLE text of every
//    slide, and fail if anything that belongs in the speaker notes is in it.
//
// It also proves the file is a file. `buildPptx` is hand-written OOXML, which
// this project allowed itself on the argument that a broken .pptx fails
// loudly and can be checked two ways. This is that check: every part is
// well-formed XML, every part a PowerPoint needs is present, and every
// relationship points at something that exists.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";
import { inflateRawSync } from "node:zlib";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "pptx-check-"));

let checks = 0;
let failures = 0;
function expect(ok, message) {
  checks += 1;
  if (!ok) {
    failures += 1;
    console.error(`  FAIL: ${message}`);
  }
}

try {
  execFileSync(
    process.execPath,
    [
      "node_modules/typescript/bin/tsc",
      "app/lib/subjects.ts",
      "app/lib/content/index.ts",
      "app/lib/marks.ts",
      "app/lib/lesson-plan.ts",
      "app/lib/pptx.ts",
      "app/lib/lesson-slides.ts",
      "--outDir", out,
      "--module", "commonjs",
      "--target", "es2020",
      "--moduleResolution", "node",
      "--skipLibCheck",
    ],
    { stdio: "inherit" },
  );

  const { subjectsWithLessons, buildLessonPlan } = require_(join(out, "lesson-plan.js"));
  const { lessonSlides, lessonPptx, lessonPptxFilename, CREDIT_TEXT, CREDIT_TOP } = require_(join(out, "lesson-slides.js"));

  // ── 1. Nothing on a slide gives away an answer ────────────────────────────
  //
  // ⚠️ THE THRESHOLD IS DELIBERATE AND THE CHECK IS WORSE WITHOUT IT.
  //    A one-word answer like "13" or "Translation" appears legitimately all
  //    over a topic's own question text, and a rule that fired on those would
  //    be a rule that fires on the CORRECT answer — which this project has now
  //    recorded four separate times as worse than no rule at all. What is
  //    being guarded against is a whole answer, step or correction landing in
  //    a text box, and those are sentences. 25 characters is comfortably below
  //    the shortest of them and far above any coincidence.
  const MIN_SECRET = 25;

  let topics = 0;
  let slideCount = 0;

  for (const subject of subjectsWithLessons()) {
    for (const topic of subject.topics) {
      const plan = buildLessonPlan(subject.slug, topic.slug);
      if (!plan) continue;
      topics += 1;

      const slides = lessonSlides(plan);
      slideCount += slides.length;

      // The credit at the foot of every slide, and nothing sitting on it.
      for (const [i, slide] of slides.entries()) {
        const last = slide.boxes[slide.boxes.length - 1];
        const text = last?.paras.flatMap((p) => p.runs.map((r) => r.text)).join("");
        expect(text === CREDIT_TEXT, `${subject.slug}/${topic.slug}: slide ${i + 1} has no Revision Lab credit`);
        for (const b of slide.boxes.slice(0, -1)) {
          expect(b.y + b.h <= CREDIT_TOP,
            `${subject.slug}/${topic.slug}: slide ${i + 1} has a text box reaching into the credit strip at the bottom`);
        }
      }

      // ⚠️ THE RULE IS ORDER-AWARE, AND THE BLUNT VERSION FIRED ON GOOD
      //    TEACHING. The first version asserted that an answer never appears
      //    on any slide, and it failed on History's first-world-war deck:
      //    "Gavrilo Princip, a Bosnian Serb nationalist" is the answer to a
      //    STARTER question and also a line in the teaching that follows it.
      //    Asking a class what they remember and then teaching it properly is
      //    retrieval practice, not a leak — and a check that punishes it is a
      //    check that fires on the correct answer, which this project has
      //    recorded four times as worse than no check at all.
      //
      //    What actually matters is that nobody meets an answer BEFORE the
      //    question. So this walks the deck in the order a teacher advances
      //    through it, accumulating what the class has seen, and only asks
      //    whether each slide's own answer was already on the board.
      const textOf = (slide) =>
        slide.boxes.flatMap((b) => b.paras.flatMap((p) => p.runs.map((r) => r.text))).join("\n");

      let shown = "";
      for (const slide of slides) {
        if (slide.secret && slide.secret.length >= MIN_SECRET) {
          expect(
            !shown.includes(slide.secret),
            `${subject.slug}/${topic.slug}: an answer is on the board before the question is asked — "${slide.secret.slice(0, 60)}…"`,
          );
        }
        shown += textOf(slide);
      }

      const noted = slides.map((s) => (s.notes ?? []).join("\n")).join("\n");

      // A question slide must never print its own answer, whatever the order.
      for (const slide of slides) {
        if (!slide.secret || slide.secret.length < MIN_SECRET) continue;
        expect(
          !textOf(slide).includes(slide.secret),
          `${subject.slug}/${topic.slug}: a slide prints the answer it is asking for — "${slide.secret.slice(0, 60)}…"`,
        );
      }

      // The mirror of the rule above: hiding an answer is only right if the
      // teacher can still get at it. An answer in neither place is lost.
      for (const phase of plan.phases) {
        for (const q of phase.questions) {
          expect(
            noted.includes(q.answer),
            `${subject.slug}/${topic.slug}: an answer is in no slide's speaker notes — "${q.question.slice(0, 50)}…"`,
          );
        }
      }

      // Every slide must carry a notes part, even an empty one — see the
      // comment on buildPptx about Google Slides dropping the pane otherwise.
      expect(
        slides.every((s) => Array.isArray(s.notes)),
        `${subject.slug}/${topic.slug}: a slide has no notes array`,
      );

      expect(slides.length >= 5, `${subject.slug}/${topic.slug}: only ${slides.length} slides`);
      expect(
        /^[a-z0-9-]+\.pptx$/.test(lessonPptxFilename(plan)),
        `${subject.slug}/${topic.slug}: unsafe download filename "${lessonPptxFilename(plan)}"`,
      );
    }
  }

  // ── 1b. The lesson the deck is built from actually climbs ─────────────────
  //
  // ⚠️ CHECKED IN FULL, BECAUSE A NARROW VERSION OF THIS ALREADY LIED ONCE.
  // When the lesson builder moved from marks to difficulty, the first check
  // compared only Guided with Independent, and reported zero problems while
  // computer-science/networks-basics put LEVEL-2 recall in Stretch, straight
  // after level-5 Independent practice — the hardest phase easier than the one
  // before it. The metric had been chosen to measure the defect already known
  // about, and could not see the one the fix introduced.
  //
  // So this walks every phase in lesson order and requires that no phase's
  // easiest question is easier than the previous phase's hardest. The exit
  // ticket is excluded on purpose: it is a check that the method landed, not
  // the summit of the lesson, and it comes last on the page for a different
  // reason than difficulty.
  //
  // Measured against the old mark-ordered builder on this same rule: 179 of 285
  // lessons went backwards somewhere, and 21 had Guided identical to
  // Independent. Marks were never a difficulty scale; they were hiding it.
  {
    const RAMP = ["starter", "guided", "independent", "stretch"];
    let lessons = 0;
    for (const subject of subjectsWithLessons()) {
      for (const topic of subject.topics) {
        const plan = buildLessonPlan(subject.slug, topic.slug);
        if (!plan) continue;
        lessons += 1;
        const phases = RAMP
          .map((id) => plan.phases.find((p) => p.id === id))
          .filter((p) => p && p.questions.length > 0);

        for (let i = 1; i < phases.length; i++) {
          const prevHardest = Math.max(...phases[i - 1].questions.map((q) => q.difficulty));
          const curEasiest = Math.min(...phases[i].questions.map((q) => q.difficulty));
          expect(
            curEasiest >= prevHardest,
            `${subject.slug}/${topic.slug}: the lesson goes backwards — ${phases[i - 1].id} reaches level ${prevHardest}, then ${phases[i].id} drops to level ${curEasiest}`,
          );
        }

        const levels = (id) =>
          JSON.stringify((plan.phases.find((p) => p.id === id)?.questions ?? []).map((q) => q.difficulty));
        const g = plan.phases.find((p) => p.id === "guided");
        const ind = plan.phases.find((p) => p.id === "independent");
        if (g?.questions.length && ind?.questions.length) {
          expect(
            levels("guided") !== levels("independent"),
            `${subject.slug}/${topic.slug}: Guided and Independent practice are the same exercise twice (${levels("guided")})`,
          );
        }

        // The exit ticket must not be easier than the practice it follows.
        const exit = plan.phases.find((p) => p.id === "exit");
        if (exit?.questions.length && g?.questions.length) {
          expect(
            exit.questions[0].difficulty >= Math.min(...g.questions.map((q) => q.difficulty)),
            `${subject.slug}/${topic.slug}: the exit ticket (level ${exit.questions[0].difficulty}) is easier than every question in Guided practice`,
          );
        }
      }
    }
    console.log(`${lessons} lessons checked: each climbs, no phase repeats, no exit ticket undercuts the practice.`);
  }

  // ── 2. The file is a real .pptx ───────────────────────────────────────────
  const plan = buildLessonPlan("maths", "vectors-and-transformations");
  const buf = lessonPptx(plan);

  // Read the ZIP back out by hand rather than shelling out, so this runs
  // anywhere `npm run check` runs.
  const parts = new Map();
  {
    // Walk the central directory backwards from the end-of-central-directory
    // record, which is the only reliable way to find where entries start.
    let eocd = buf.length - 22;
    while (eocd >= 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd -= 1;
    expect(eocd >= 0, "the .pptx has no end-of-central-directory record");
    const count = buf.readUInt16LE(eocd + 10);
    let p = buf.readUInt32LE(eocd + 16);
    for (let i = 0; i < count; i++) {
      expect(buf.readUInt32LE(p) === 0x02014b50, `central directory entry ${i} has a bad signature`);
      const method = buf.readUInt16LE(p + 10);
      const compSize = buf.readUInt32LE(p + 20);
      const nameLen = buf.readUInt16LE(p + 28);
      const extraLen = buf.readUInt16LE(p + 30);
      const commentLen = buf.readUInt16LE(p + 32);
      const localOff = buf.readUInt32LE(p + 42);
      const name = buf.toString("utf8", p + 46, p + 46 + nameLen);
      const lNameLen = buf.readUInt16LE(localOff + 26);
      const lExtraLen = buf.readUInt16LE(localOff + 28);
      const start = localOff + 30 + lNameLen + lExtraLen;
      const raw = buf.subarray(start, start + compSize);
      parts.set(name, method === 8 ? inflateRawSync(raw) : raw);
      p += 46 + nameLen + extraLen + commentLen;
    }
  }

  const required = [
    "[Content_Types].xml",
    "_rels/.rels",
    "ppt/presentation.xml",
    "ppt/_rels/presentation.xml.rels",
    "ppt/slideMasters/slideMaster1.xml",
    "ppt/slideLayouts/slideLayout1.xml",
    "ppt/notesMasters/notesMaster1.xml",
    "ppt/theme/theme1.xml",
    "ppt/slides/slide1.xml",
    "ppt/notesSlides/notesSlide1.xml",
  ];
  for (const name of required) {
    expect(parts.has(name), `the .pptx is missing ${name}, so PowerPoint will not open it`);
  }

  // Well-formedness, checked the crude way: every part must parse as XML.
  // DOMParser is in Node 22 only behind a flag, so this counts tags instead —
  // enough to catch an unescaped "<" from question text, which is the failure
  // this is really guarding against.
  for (const [name, body] of parts) {
    if (!name.endsWith(".xml") && !name.endsWith(".rels")) continue;
    const text = body.toString("utf8");
    const opens = (text.match(/</g) ?? []).length;
    const closes = (text.match(/>/g) ?? []).length;
    expect(opens === closes, `${name}: ${opens} "<" against ${closes} ">" — an unescaped angle bracket from content`);
    expect(!/<a:t>[^<]*<(?![/]a:t>)/.test(text), `${name}: a raw "<" inside slide text`);
  }

  // Every relationship target must exist, or PowerPoint reports the file as
  // damaged and repairs it by throwing the part away.
  for (const [name, body] of parts) {
    if (!name.endsWith(".rels")) continue;
    const dir = name.replace(/_rels\/[^/]+$/, "");
    for (const m of body.toString("utf8").matchAll(/Target="([^"]+)"/g)) {
      const target = m[1];
      if (/^https?:/.test(target)) continue;
      const resolved = new URL(target, `file:///${dir}`).pathname.replace(/^\//, "");
      expect(parts.has(resolved), `${name}: points at ${resolved}, which is not in the file`);
    }
  }

  console.log(`\n${topics} lessons, ${slideCount} slides, ${parts.size} parts in the sample deck.`);
  if (failures > 0) {
    console.error(`\n${failures} of ${checks} slide-deck checks FAILED.`);
    process.exit(1);
  }
  console.log(`All ${checks} slide-deck checks passed.`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
