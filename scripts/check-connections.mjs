// "How this connects" (app/lib/connections.ts): the joins between topics,
// derived from the words they share. Checked on the real content.
//
// The structural rules can all stay true while the matching quietly gets
// worse, so — the same device as Explain further's "Insulin must land under
// blood glucose" — there are NAMED cases a person checked by hand, and a noise
// rule recomputed independently here rather than trusting the module's own
// idea of what a generic word is.

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "connections-check-"));
let checks = 0, failures = 0;
const expect = (ok, msg) => { checks++; if (!ok) { failures++; if (failures <= 25) console.error(`  FAIL: ${msg}`); } };

try {
  execFileSync(process.execPath, [
    "node_modules/typescript/bin/tsc", "app/lib/connections.ts", "--outDir", out,
    "--module", "commonjs", "--target", "es2022", "--moduleResolution", "node", "--skipLibCheck",
  ], { stdio: "inherit" });
  const { topicConnections, MAX_LINKS } = require_(join(out, "connections.js"));
  const { SUBJECTS } = require_(join(out, "subjects.js"));
  const { TOPIC_CONTENT } = require_(join(out, "content", "index.js"));

  // ── named cases, each read and agreed by a person ───────────────────────
  const builds = (s, t) => topicConnections(s, t).buildsOn.map((l) => l.slug);
  // the case that started it: hormones compares itself with nerves in its
  // first block, and never linked to the nervous system topic
  expect(builds("biology", "hormones-and-homeostasis").includes("the-nervous-system"), "hormones does not build on the nervous system");
  expect(builds("biology", "genetics-and-inheritance").includes("dna-and-reproduction"), "genetics does not build on DNA");
  expect(builds("history", "the-russian-revolution").includes("the-first-world-war"), "the Russian Revolution does not build on the First World War");
  expect(builds("maths", "equations-and-inequalities").includes("algebra-basics"), "equations do not build on algebra basics");

  let total = 0, isolated = 0, links = 0;
  for (const s of SUBJECTS) {
    const order = s.years.flatMap((y) => y.topics.map((t) => t.slug));
    const texts = order.map((slug) => {
      const c = TOPIC_CONTENT[`${s.slug}/${slug}`];
      return c ? JSON.stringify([c.summary, c.keyFacts, c.workedExamples ?? [], c.misconceptions ?? []]).toLowerCase() : "";
    });
    for (const slug of order) {
      if (!TOPIC_CONTENT[`${s.slug}/${slug}`]) continue;
      total++;
      const c = topicConnections(s.slug, slug), here = order.indexOf(slug);
      if (!c.buildsOn.length && !c.leadsTo.length) isolated++;
      expect(c.buildsOn.length <= MAX_LINKS && c.leadsTo.length <= MAX_LINKS, `${s.slug}/${slug} has more than ${MAX_LINKS} links one way`);
      for (const [dir, list] of [["builds on", c.buildsOn], ["leads to", c.leadsTo]]) {
        for (const l of list) {
          links++;
          const there = order.indexOf(l.slug);
          expect(there >= 0 && l.slug !== slug, `${s.slug}/${slug} ${dir} "${l.slug}", which is not another topic in ${s.slug}`);
          // the direction is the course order, both ways round
          expect(dir === "builds on" ? there < here : there > here, `${s.slug}/${slug} ${dir} ${l.slug}, which comes ${there < here ? "before" : "after"} it`);
          expect(l.shared.length > 0, `${s.slug}/${slug} ${dir} ${l.slug} with no shared word to say why`);
          // ⚠️ NOISE, recomputed here: at least one of the words a link shows
          // must be one most of the subject does NOT use, or the link is
          // standing on a word like "term" that joins everything to everything
          const rare = l.shared.some((w) => texts.filter((t) => t.includes(w.toLowerCase().replace(/\s*\(.*?\)\s*/g, " ").trim())).length <= Math.max(2, order.length * 0.4));
          expect(rare, `${s.slug}/${slug} ${dir} ${l.slug} only on words most of the subject uses (${l.shared.join(", ")})`);
          if (dir === "leads to") expect(!/exam-practice/.test(l.slug), `${s.slug}/${slug} "leads to" an exam-practice topic, which uses everything`);
        }
      }
    }
  }
  // a feature that links nothing has stopped working; one that links
  // everything has stopped meaning anything
  expect(isolated / total < 0.25, `${isolated} of ${total} topics connect to nothing — the matching has stopped finding joins`);
  expect(links / total < 4, `${(links / total).toFixed(1)} links per topic — too many to be a pointer`);
  console.log(`  ${total} topics, ${links} links shown, ${isolated} with none`);

  // and it reads whole subjects, so it must never reach the browser
  const client = execFileSync("grep", ["-rlE", "^[\"']use client[\"']", "app"], { encoding: "utf8" }).trim().split("\n").filter(Boolean);
  for (const f of client) expect(!/^import (?!type )[^\n]*lib\/connections["']/m.test(readFileSync(f, "utf8")), `${f} imports lib/connections, which reads every topic in a subject`);
} finally {
  rmSync(out, { recursive: true, force: true });
}
if (failures) { console.error(`\n${failures} of ${checks} connection checks FAILED.`); process.exit(1); }
console.log(`All ${checks} connection checks passed.`);
