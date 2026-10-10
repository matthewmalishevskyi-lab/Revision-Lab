// How a topic connects to the others in its subject: what it builds on, and
// what it leads to.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY
//
// Every topic page was an island. The hormones topic spends its first block
// comparing hormones with nerves and never once links to the nervous system
// topic; GCSE questions are built on exactly these joins ("compare nervous
// and hormonal control" is a six-marker), and a student revising one topic at
// a time is never shown them.
//
// ─────────────────────────────────────────────────────────────────────────────
// DERIVED FROM THE VOCABULARY, NEVER A HAND-WRITTEN MAP
//
// The same argument explainFurther.ts and teacher-tools.ts make: a hand list
// of 285 topics' prerequisites is wrong the moment a topic is rewritten, and
// nothing says so. The evidence is already in the content. A topic DEFINES
// words — its flashcards, and its own name — and other topics USE them. If
// the hormones topic uses "receptor" and "nervous system", words the nervous
// system topic teaches, the two are joined, and the page can say WHY in the
// words they share. Earlier in the subject's order is "builds on"; later is
// "leads to".
//
// Three rules keep it from being noise, each found by reading the output:
//
//   - A word used across more than a third of a subject's topics is not
//     evidence of anything — maths' "term" and "expression" are everywhere.
//   - One shared word is a coincidence. It takes two different shared words,
//     or one shared PHRASE ("scale factor") used three times.
//   - The exam-practice topics use everything, so they are never offered as
//     somewhere a topic "leads to".
//
// ⚠️ SERVER ONLY: it reads every topic in a subject. Computed once per server
// process and kept, because the content does not change while it runs.
// ─────────────────────────────────────────────────────────────────────────────

import { TOPIC_CONTENT, type TopicContent } from "./content";
import { SUBJECTS } from "./subjects";

export type TopicLink = { slug: string; title: string; year: string; shared: string[] };
export type Connections = { buildsOn: TopicLink[]; leadsTo: TopicLink[] };

/** At most this many links each way: a list of twelve is not a pointer. */
export const MAX_LINKS = 3;
const GENERIC_SHARE = 0.35;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function teachingText(c: TopicContent): string {
  return [
    c.summary,
    ...c.keyFacts.flatMap((k) => [k.heading, ...k.points]),
    ...(c.workedExamples ?? []).flatMap((w) => [w.question, ...w.steps, w.answer]),
    ...(c.misconceptions ?? []).flatMap((m) => [m.wrong, m.right]),
  ].join(" \n ").toLowerCase();
}

/** A whole-word, plural-tolerant pattern for a term, or null if too short to mean anything. */
function termPattern(term: string): RegExp | null {
  const core = term.toLowerCase().replace(/\s*\(.*?\)\s*/g, " ").replace(/&/g, "and").replace(/^the\s+/, "").trim();
  if (core.length < 4) return null;
  return new RegExp(`(?<![a-z])${escape(core)}(?:s|es)?(?![a-z])`, "g");
}

const isExamPractice = (title: string) => /exam practice/i.test(title);

let built: Map<string, Connections> | null = null;

function build(): Map<string, Connections> {
  const out = new Map<string, Connections>();
  for (const subject of SUBJECTS) {
    const topics = subject.years
      .flatMap((y) => y.topics.map((t) => ({ slug: t.slug, title: t.title, year: y.year })))
      .filter((t) => TOPIC_CONTENT[`${subject.slug}/${t.slug}`]);
    const text = topics.map((t) => teachingText(TOPIC_CONTENT[`${subject.slug}/${t.slug}`]));
    // what each topic teaches: its flashcard terms and its own name
    const defines = topics.map((t) => [...TOPIC_CONTENT[`${subject.slug}/${t.slug}`].flashcards.map((f) => f.term), t.title]
      .map((term) => ({ term, re: termPattern(term) }))
      .filter((d): d is { term: string; re: RegExp } => d.re !== null));
    const limit = Math.max(2, topics.length * GENERIC_SHARE);
    const generic = defines.map((list) => new Set(list
      .filter((d) => text.filter((body) => (body.match(d.re) ?? []).length > 0).length > limit)
      .map((d) => d.term)));

    // evidence that topic a USES what topic b teaches
    const evidence = (a: number, b: number) => {
      const own = new Set(defines[a].map((d) => d.term.toLowerCase()));
      const shared: string[] = [];
      let uses = 0;
      for (const d of defines[b]) {
        if (own.has(d.term.toLowerCase()) || generic[b].has(d.term)) continue;
        const n = (text[a].match(d.re) ?? []).length;
        if (n > 0) { shared.push(d.term === topics[b].title ? d.term.replace(/^The /, "").toLowerCase() : d.term); uses += n; }
      }
      // ⚠️ one shared word is only enough if it is a PHRASE used three times.
      // A single ordinary word was the first version's rule and the check's
      // independent noise count caught what it let through: computer
      // science's sorting algorithms "joined" to iteration on the word
      // "pass", databases to Boolean logic on "table", statistics to
      // inequalities on "range". "Scale factor" three times is a real join;
      // "table" three times is English.
      return { shared, uses, ok: shared.length >= 2 || (shared.length === 1 && uses >= 3 && /\s/.test(shared[0])) };
    };
    // ⚠️ EITHER DIRECTION JOINS THEM, AND THE ORDER DECIDES WHICH WAY ROUND.
    // The later topic usually leans on the earlier one's words — but a Year 9
    // topic that already mentions "diffusion", which a Year 10 topic teaches,
    // is pointing forward to it just as surely.
    const scored = topics.map(() => ({ buildsOn: [] as (TopicLink & { score: number })[], leadsTo: [] as (TopicLink & { score: number })[] }));
    for (let i = 0; i < topics.length; i++) {
      for (let j = i + 1; j < topics.length; j++) {
        const back = evidence(j, i), fwd = evidence(i, j);
        if (!back.ok && !fwd.ok) continue;
        const shared = [...new Set([...back.shared, ...fwd.shared])];
        const score = shared.length * 2 + back.uses + fwd.uses;
        const ti = topics[i], tj = topics[j];
        scored[j].buildsOn.push({ slug: ti.slug, title: ti.title, year: ti.year, shared, score });
        if (!isExamPractice(tj.title) && !isExamPractice(ti.title)) scored[i].leadsTo.push({ slug: tj.slug, title: tj.title, year: tj.year, shared, score });
      }
    }
    topics.forEach((t, i) => {
      const top = (list: (TopicLink & { score: number })[]) =>
        list.sort((x, y) => y.score - x.score).slice(0, MAX_LINKS).map(({ slug, title, year, shared }) => ({ slug, title, year, shared: shared.slice(0, 3) }));
      out.set(`${subject.slug}/${t.slug}`, { buildsOn: top(scored[i].buildsOn), leadsTo: top(scored[i].leadsTo) });
    });
  }
  return out;
}

export function topicConnections(subjectSlug: string, topicSlug: string): Connections {
  built ??= build();
  return built.get(`${subjectSlug}/${topicSlug}`) ?? { buildsOn: [], leadsTo: [] };
}
