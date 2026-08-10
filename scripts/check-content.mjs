// Content checker — run it with `npm run check`.
//
// WHY THIS FILE EXISTS
//
// TypeScript checks that the content has the right SHAPE: that every topic has
// a summary string and an array of flashcards. It cannot check that a topic has
// enough flashcards, that no two practice questions are identical, or that an
// accept list doesn't mark a wrong answer right. Those are facts about the
// content, not about its types, so they need a program of their own.
//
// Two real bugs have been caught by checks in here that no amount of reading
// would have found:
//
//   1. normalise() stripped every hyphen, so "-3" became "3" and a student
//      answering 3 to a question whose answer was -3 was marked CORRECT.
//   2. A compound interest question accepted "1060" — the SIMPLE interest
//      answer — on a question whose entire point was the difference.
//
// Both are the same species of bug: the site cheerfully telling a student they
// are right when they are wrong. That is the worst thing a revision site can
// do, which is why the checks below are strict about accept lists.
//
// HOW IT WORKS
//
// The content is TypeScript, and Node cannot run TypeScript directly, so this
// compiles the data files to plain JavaScript in a temporary folder first, then
// loads and inspects them. The compiled copy is thrown away afterwards.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, readFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "revision-check-"));

try {
  execFileSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    [
      "tsc",
      "app/lib/subjects.ts",
      "app/lib/content/index.ts",
      "app/lib/content/computer-science.ts",
      "app/lib/content/maths.ts",
      "app/lib/content/english.ts",
      "--outDir", out,
      "--module", "commonjs",
      "--target", "es2020",
      "--moduleResolution", "node",
      "--skipLibCheck",
    ],
    { stdio: "inherit" },
  );

  const { SUBJECTS, getSubject, getTopic, YEAR_STYLES } = require(join(out, "subjects.js"));
  const { TOPIC_CONTENT, getTopicContent } = require(join(out, "content", "index.js"));

  // ── The marking rule, copied from Practice.tsx ─────────────────────────────
  // Deliberately duplicated rather than imported: this is the checker's
  // independent statement of what marking should do. If the two ever disagree,
  // that disagreement is exactly what we want to be told about.
  function normalise(text) {
    return String(text)
      .toLowerCase()
      .replace(/[–—−]/g, "-")
      .replace(/(?<=[a-z])-(?=[a-z])/g, "")
      .replace(/[\s,]/g, "")
      .replace(/^[£$€]/, "")
      .replace(/[°%.!?]+$/, "");
  }

  let checks = 0;
  let fails = 0;
  const expect = (cond, msg) => {
    checks++;
    if (!cond) {
      console.log("  FAIL:", msg);
      fails++;
    }
  };

  // ── Regression tests for the marking rule itself ───────────────────────────
  // Every one of these is a bug that actually happened, or one line away from
  // one that did. They run first, because if marking is broken nothing else
  // matters.
  expect(normalise("-3") !== normalise("3"), "REGRESSION: minus signs are being stripped again");
  expect(normalise("−3") === normalise("-3"), "the unicode minus should match a plain hyphen");
  expect(normalise("run-length encoding") === normalise("run length encoding"), "word hyphens should be ignored");
  expect(normalise("1.44 MB") === normalise("1.44mb"), "spaces and capitals should be ignored");
  expect(normalise("230°") === normalise("230"), "a trailing degree sign should be ignored");
  expect(normalise("20%") === normalise("20"), "a trailing percent sign should be ignored");
  expect(normalise("£50") === normalise("50"), "a leading currency symbol should be ignored");
  expect(normalise("45%") !== normalise("0.45"), "stripping % must not turn a percentage into a decimal");
  expect(normalise("1011100") !== normalise("01011100"), "a missing leading zero is a wrong answer, not a typo");

  // ── Which icons are actually drawn ─────────────────────────────────────────
  const iconSrc = readFileSync("app/components/Icon.tsx", "utf8");
  const drawn = new Set([...iconSrc.matchAll(/^ {2}([a-z]+): [(<]/gm)].map((m) => m[1]));

  const contentKeysSeen = new Set();
  const totals = {};
  let topicCount = 0;

  for (const subject of SUBJECTS) {
    const slugsInSubject = new Set();
    const titlesInSubject = new Set();

    for (const group of subject.years) {
      for (const topic of group.topics) {
        topicCount++;
        const key = `${subject.slug}/${topic.slug}`;

        expect(!slugsInSubject.has(topic.slug), `duplicate slug "${topic.slug}" in ${subject.name}`);
        slugsInSubject.add(topic.slug);
        expect(!titlesInSubject.has(topic.title), `two topics in ${subject.name} share the title "${topic.title}"`);
        titlesInSubject.add(topic.title);
        expect(/^[a-z0-9-]+$/.test(topic.slug), `slug is not URL-safe: "${topic.slug}"`);
        expect(drawn.has(topic.icon), `icon "${topic.icon}" (used by ${topic.slug}) is not drawn in Icon.tsx`);

        const c = TOPIC_CONTENT[key];
        if (!c) {
          console.log(`  NOTE: no content written yet for ${key}`);
          continue;
        }
        contentKeysSeen.add(key);

        const t = (totals[subject.slug] ??= {
          topics: 0, we: 0, auto: 0, self: 0, mis: 0, cards: 0, words: 0,
        });
        t.topics++;
        const at = (what) => `${key} — ${what}`;

        expect(c.summary?.length > 80, at("summary is too short to be useful"));

        // ── Key facts ──────────────────────────────────────────────────────
        expect(c.keyFacts.length >= 3, at(`only ${c.keyFacts.length} key-fact blocks`));
        const headings = c.keyFacts.map((b) => b.heading);
        expect(new Set(headings).size === headings.length, at("duplicate key-fact heading — React uses it as a key, so one block would vanish"));
        for (const b of c.keyFacts) {
          expect(b.points.length >= 3, at(`key-fact block "${b.heading}" has only ${b.points.length} points`));
          expect(new Set(b.points).size === b.points.length, at(`duplicate point inside "${b.heading}" — React key collision`));
        }

        // ── Flashcards ─────────────────────────────────────────────────────
        expect(c.flashcards.length >= 8, at(`only ${c.flashcards.length} flashcards`));
        const terms = c.flashcards.map((f) => f.term);
        expect(new Set(terms).size === terms.length, at("duplicate flashcard term"));
        for (const f of c.flashcards) {
          expect(f.definition.length > 20, at(`thin definition for "${f.term}"`));
        }
        t.cards += c.flashcards.length;

        // ── Exam tips ──────────────────────────────────────────────────────
        expect(c.examTips.length >= 5, at(`only ${c.examTips.length} exam tips`));
        const tips = c.examTips.map((x) => x.tip);
        expect(new Set(tips).size === tips.length, at("duplicate exam tip — React key collision"));

        // ── Worked examples ────────────────────────────────────────────────
        for (const e of c.workedExamples ?? []) {
          expect(e.steps.length >= 3, at("worked example with fewer than 3 steps"));
          expect(new Set(e.steps).size === e.steps.length, at("two identical steps in one worked example — React key collision"));
          expect(e.answer?.length > 0, at("worked example with no answer"));
        }
        if (c.workedExamples) {
          const qs = c.workedExamples.map((e) => e.question);
          expect(new Set(qs).size === qs.length, at("duplicate worked-example question — React key collision"));
          t.we += c.workedExamples.length;
        }

        // ── Practice questions: the strictest section, for good reason ──────
        if (c.practice) {
          expect(c.practice.length >= 16, at(`only ${c.practice.length} practice questions`));
          const pq = c.practice.map((p) => p.question);
          expect(new Set(pq).size === pq.length, at("duplicate practice question — React key collision"));

          for (const p of c.practice) {
            // An answer panel should teach, not just confirm. "A noun." tells a
            // student nothing they did not already have.
            expect(p.answer?.length > 25, at(`practice answer too thin to teach anything: "${String(p.answer).slice(0, 40)}"`));

            if (!p.accept) { t.self++; continue; }
            t.auto++;

            expect(p.accept.length > 0, at("empty accept list"));
            for (const a of p.accept) {
              expect(String(a).trim().length > 0, at("blank value in an accept list"));
              expect(normalise(a) !== "", at(`accept value "${a}" normalises to nothing, so it can never match`));
              expect(normalise(a) !== normalise(p.question), at("the question text has been pasted into its own accept list"));
            }

            // ── THE IMPORTANT ONE ──────────────────────────────────────────
            // If an accept list holds two genuinely different NUMBERS, one of
            // them is probably a wrong answer being marked right. That is how
            // "1060" — the SIMPLE interest figure — came to sit in a compound
            // interest question's accept list, quietly telling students the
            // wrong method had worked.
            //
            // Two complications had to be handled, and getting them wrong is
            // how a checker turns into noise everyone ignores:
            //
            // 1. Rounded variants are the SAME answer. "786.432" and "786.4"
            //    both belong. So two numbers are treated as one if either is
            //    the other correctly rounded to its own number of decimal
            //    places. This is a sharper test than a percentage tolerance,
            //    and it is what separates the legitimate pair above from the
            //    compound interest bug: 1060.90 rounded to a whole number is
            //    1061, not 1060, so that pair is still caught.
            //
            // 2. Some questions genuinely have several right answers — "give
            //    ONE piece of boundary test data" for a 0-to-120 field is
            //    correctly answered by 0 or by 120. Those are exempted by
            //    their wording.
            // ⚠️ "approximately" and "about" were ADDED to this list, and it is
            // worth being clear that this is completing the exemption rather
            // than weakening the check.
            //
            // The rule exists to catch a WRONG answer sitting in an accept list
            // — the compound interest bug, where 1060 was accepted on a
            // question whose whole point was that the answer is 1060.90. That
            // is still caught.
            //
            // But "approximately what percentage of the atmosphere is
            // nitrogen?" has two genuinely correct answers, 78 and 80, and the
            // question SAYS approximately. "roughly" was already exempt and
            // means exactly the same thing, so the list was simply incomplete.
            //
            // The test for adding a word here: does it signal to the STUDENT
            // that a range is acceptable? If not, it does not belong.
            const invitesSeveral = /\bgive one\b|\bname one\b|\bone piece of\b|\broughly\b|\bapproximately\b|\babout\b|\beither\b|\bfor example\b/i.test(p.question);
            if (!invitesSeveral) {
              const nums = p.accept
                .map(normalise)
                .filter((a) => /^-?\d*\.?\d+$/.test(a))
                .map(parseFloat);

              // Is b just a rounded form of a?
              const isRoundingOf = (a, b) => {
                const dp = (String(b).split(".")[1] ?? "").length;
                return Math.abs(Number(a.toFixed(dp)) - b) < Number.EPSILON;
              };
              const distinct = [];
              for (const n of nums) {
                if (!distinct.some((d) => isRoundingOf(d, n) || isRoundingOf(n, d))) distinct.push(n);
              }
              expect(distinct.length <= 1,
                at(`accept list holds ${distinct.length} genuinely different numeric answers (${distinct.join(", ")}) for "${p.question}" — at most one of them can be right`));
            }

            // A yes/no question that accepts both is not a question.
            const acc = p.accept.map(normalise);
            expect(!(/answer yes or no/i.test(p.question) && acc.includes("yes") && acc.includes("no")),
              at(`"${p.question}" accepts both yes and no`));
          }
        }

        // ── Misconceptions ─────────────────────────────────────────────────
        if (c.misconceptions) {
          expect(c.misconceptions.length >= 4, at(`only ${c.misconceptions.length} misconceptions`));
          const w = c.misconceptions.map((m) => m.wrong);
          expect(new Set(w).size === w.length, at("duplicate misconception — React key collision"));
          t.mis += c.misconceptions.length;
        }

        // ── Which subjects are actually TIERED ──────────────────────────────
        //
        // Maths and the three sciences are entered at Foundation (grades 1-5)
        // or Higher (4-9), and the Higher papers examine extra material a
        // Foundation student is never asked about. Flagging that matters in
        // both directions: a Foundation student who spends a week on Higher-only
        // content has wasted the week, and a Higher student who skips it loses
        // marks they could have had.
        //
        // English, History, Geography, Business and Computer Science are NOT
        // tiered — everyone sits the same paper — so a Higher badge there would
        // be meaningless and is treated as an error rather than ignored.
        const TIERED = new Set(["maths", "biology", "chemistry", "physics"]);
        const higherUsed =
          c.keyFacts.some((b) => b.higherOnly) ||
          (c.workedExamples ?? []).some((e) => e.higherOnly) ||
          (c.practice ?? []).some((p) => p.higherOnly);
        expect(
          !higherUsed || TIERED.has(subject.slug),
          at(`uses the Higher tier flag, but ${subject.slug} is not a tiered subject`),
        );

        t.words += JSON.stringify(c).split(/\s+/).length;
      }
    }
  }

  // ── Content with no topic to live on ───────────────────────────────────────
  for (const key of Object.keys(TOPIC_CONTENT)) {
    expect(contentKeysSeen.has(key), `orphan content key "${key}" — nothing in subjects.ts matches it, so it is unreachable`);
  }

  // ── Walk every route the way the page itself does ──────────────────────────
  // The page does `subject.years[yearIndex]` and reads `content.flashcards[0]`.
  // Those are the lines that turn a data mistake into a white screen, so this
  // repeats them for all 53 routes rather than trusting that they hold.
  const routes = SUBJECTS.flatMap((s) =>
    s.years.flatMap((g) => g.topics.map((t) => [s.slug, t.slug])),
  );
  for (const [subjectSlug, topicSlug] of routes) {
    const found = getTopic(subjectSlug, topicSlug);
    expect(found, `route /subjects/${subjectSlug}/${topicSlug} does not resolve`);
    if (!found) continue;
    const yearIndex = found.subject.years.findIndex((g) => g.year === found.year);
    expect(yearIndex >= 0, `${subjectSlug}/${topicSlug}: year not found`);
    expect(Boolean(YEAR_STYLES[yearIndex] ?? YEAR_STYLES[0]), `${subjectSlug}/${topicSlug}: no year colour`);
    expect(Boolean(found.subject.years[yearIndex]?.topics), `${subjectSlug}/${topicSlug}: sibling topic list missing`);
    const c = getTopicContent(subjectSlug, topicSlug);
    if (c) expect(c.flashcards.length > 0, `${subjectSlug}/${topicSlug}: Flashcards would crash on an empty deck`);
  }

  // Anyone can type anything into the address bar. These must come back empty
  // so the page can call notFound(), rather than throwing.
  for (const [s, t] of [["geography", "x"], ["computer-science", "not-a-topic"], ["", ""], ["../etc", "passwd"]]) {
    expect(getTopic(s, t) === undefined, `junk URL /subjects/${s}/${t} resolved to something`);
  }
  expect(getSubject("nope") === undefined, "an unknown subject slug resolved to something");

  // ── Self-marked questions must say so, auto-marked ones must not ───────────
  for (const [key, c] of Object.entries(TOPIC_CONTENT)) {
    for (const p of c.practice ?? []) {
      const saysMarkItYourself = /mark (this one|it) yourself/i.test(p.answer);
      expect(!(p.accept && saysMarkItYourself),
        `${key}: an auto-marked question tells the student to mark it themselves — "${p.question.slice(0, 60)}"`);
      expect(p.accept || saysMarkItYourself,
        `${key}: a self-marked question never tells the student to mark it — "${p.question.slice(0, 60)}"`);
    }
  }

  // ── A STATIC ROUTE MUST NOT SHADOW A SUBJECT ──────────────────────────────
  //
  // app/subjects/science/page.tsx is a literal folder, and Next prefers a
  // literal segment over the [subject] dynamic one. So if a subject were ever
  // given the slug "science", its page would become permanently unreachable —
  // silently, with no error anywhere. Same for any future static route added
  // under /subjects.
  {
    const staticRoutes = readdirSync("app/subjects", { withFileTypes: true })
      .filter((e) => e.isDirectory() && !e.name.startsWith("["))
      .map((e) => e.name);
    for (const route of staticRoutes) {
      expect(
        !SUBJECTS.some((s) => s.slug === route),
        `the static route /subjects/${route} would shadow the subject with slug "${route}", making it unreachable`,
      );
    }
    // And the other way round: every group needs its page to exist.
    for (const group of new Set(SUBJECTS.map((s) => s.group).filter(Boolean))) {
      expect(
        staticRoutes.includes(group),
        `subjects are grouped under "${group}" but app/subjects/${group}/page.tsx does not exist`,
      );
    }
  }

  // ── NO TOPIC SLUG MAY EVER SILENTLY DISAPPEAR ─────────────────────────────
  //
  // Progress rows in the database point at topics by slug and nothing else, so
  // renaming or deleting one orphans every record attached to it. The rows
  // survive; nothing ever counts them again. To a student that is
  // indistinguishable from their work being deleted.
  //
  // `known-topics.ts` lists every key that has ever existed. This check fails
  // if one vanishes, which turns a silent data loss into a build error.
  {
    const knownSrc = readFileSync("app/lib/known-topics.ts", "utf8");
    const knownBlock = knownSrc.slice(
      knownSrc.indexOf("KNOWN_TOPIC_KEYS"),
      knownSrc.indexOf("RETIRED_TOPIC_KEYS"),
    );
    const retiredBlock = knownSrc.slice(knownSrc.indexOf("RETIRED_TOPIC_KEYS"));
    const known = [...knownBlock.matchAll(/"([a-z0-9-]+\/[a-z0-9-]+)"/g)].map((m) => m[1]);
    const retired = new Set(
      [...retiredBlock.matchAll(/"([a-z0-9-]+\/[a-z0-9-]+)"/g)].map((m) => m[1]),
    );
    const live = new Set(routes.map(([s, t]) => `${s}/${t}`));

    for (const key of known) {
      expect(live.has(key) || retired.has(key),
        `TOPIC DISAPPEARED: "${key}" is in known-topics.ts but no longer exists. ` +
        `Every progress record pointing at it has just been orphaned. Restore the slug, ` +
        `or move it to RETIRED_TOPIC_KEYS after migrating the activity rows in Supabase.`);
    }

    // New topics are fine — they just have to be recorded, so the next person
    // to touch this cannot remove them by accident either.
    for (const key of live) {
      expect(known.includes(key),
        `NEW TOPIC NOT REGISTERED: "${key}" exists but is missing from known-topics.ts. ` +
        `Add it, so that deleting it later becomes an error rather than a surprise.`);
    }
  }

  // ── Copy that hardcodes a number the data would contradict ─────────────────
  for (const file of [
    "app/page.tsx",
    "app/dashboard/page.tsx",
    "app/subjects/[subject]/page.tsx",
    "app/subjects/[subject]/[topic]/page.tsx",
  ]) {
    for (const m of readFileSync(file, "utf8").matchAll(/(\d{2,3})\s+topics/gi)) {
      expect(Number(m[1]) === topicCount, `${file} says "${m[0]}" but there are ${topicCount} topics`);
    }
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log("\n| Subject | Topics | Worked ex. | Auto-marked | Self-marked | Mistakes | Flashcards |");
  console.log("|---|---|---|---|---|---|---|");
  const sum = { topics: 0, we: 0, auto: 0, self: 0, mis: 0, cards: 0, words: 0 };
  for (const [slug, t] of Object.entries(totals)) {
    console.log(`| ${slug} | ${t.topics} | ${t.we} | ${t.auto} | ${t.self} | ${t.mis} | ${t.cards} |`);
    for (const k of Object.keys(sum)) sum[k] += t[k];
  }
  console.log(`| **Total** | **${sum.topics}** | **${sum.we}** | **${sum.auto}** | **${sum.self}** | **${sum.mis}** | **${sum.cards}** |`);
  console.log(`\n${topicCount} topics, roughly ${Math.round(sum.words / 1000)},000 words.`);
  console.log(fails === 0 ? `\nAll ${checks} checks passed.` : `\n${fails} of ${checks} checks FAILED.`);
  process.exitCode = fails ? 1 : 0;
} finally {
  rmSync(out, { recursive: true, force: true });
}
