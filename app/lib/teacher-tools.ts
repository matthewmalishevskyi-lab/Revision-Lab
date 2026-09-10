// What Teacher Tools knows about: which topics have diagrams, and which.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS IS A DERIVED INDEX AND NOT A NEW LIST TO MAINTAIN
//
// The obvious way to build a diagram library is to write down which topics have
// diagrams. That list is wrong the moment somebody adds a diagram and forgets
// to update it, and nothing tells you — the library just quietly stops showing
// the newest pictures, which is the exact failure mode a teacher would never
// report because they cannot know what is missing.
//
// So nothing is written down. Every topic's content already declares its own
// diagrams (`keyFacts[].diagrams`, see lib/content/index.ts), and this file
// walks that, in the order subjects and years are already defined. Add a
// diagram to a topic and it appears here; remove one and it goes. There is no
// second place to keep in step.
//
// Names that are not in the registry are dropped rather than shown as a gap.
// `check-content.mjs` already fails the build on an unknown diagram name, so
// this is belt and braces — but a teacher standing in front of a class is not
// the person who should discover a typo.
// ─────────────────────────────────────────────────────────────────────────────

import { DIAGRAMS, type DiagramName } from "../components/diagrams";
import { getTopicContent } from "./content";
import { SUBJECTS, type IconName } from "./subjects";

/** One diagram, plus the key-fact heading it sits under in the topic. */
export type DiagramEntry = {
  name: DiagramName;
  /** The heading of the block it illustrates — the caption a teacher needs. */
  heading: string;
};

export type TopicDiagrams = {
  slug: string;
  title: string;
  icon: IconName;
  year: string;
  diagrams: DiagramEntry[];
};

export type SubjectDiagrams = {
  slug: string;
  name: string;
  accent: string;
  gradient: string;
  mascot: (typeof SUBJECTS)[number]["mascot"];
  topics: TopicDiagrams[];
  /** Total across every topic in this subject. */
  diagramCount: number;
};

const isKnown = (name: string): name is DiagramName => name in DIAGRAMS;

/** Every topic in one subject that has at least one diagram, in course order. */
function topicsWithDiagrams(subject: (typeof SUBJECTS)[number]): TopicDiagrams[] {
  const out: TopicDiagrams[] = [];

  for (const group of subject.years) {
    for (const topic of group.topics) {
      const content = getTopicContent(subject.slug, topic.slug);
      if (!content) continue;

      const diagrams: DiagramEntry[] = [];
      for (const block of content.keyFacts) {
        for (const name of block.diagrams ?? []) {
          if (isKnown(name)) diagrams.push({ name, heading: block.heading });
        }
      }

      if (diagrams.length > 0) {
        out.push({
          slug: topic.slug,
          title: topic.title,
          icon: topic.icon,
          year: group.year,
          diagrams,
        });
      }
    }
  }

  return out;
}

/**
 * Every subject that has any diagrams at all, in the site's own subject order.
 *
 * Subjects with none are left out entirely rather than shown empty: "Spanish —
 * 0 diagrams" is a row that only ever wastes a tap.
 */
export function subjectsWithDiagrams(): SubjectDiagrams[] {
  const out: SubjectDiagrams[] = [];

  for (const subject of SUBJECTS) {
    const topics = topicsWithDiagrams(subject);
    if (topics.length === 0) continue;

    out.push({
      slug: subject.slug,
      name: subject.name,
      accent: subject.accent,
      gradient: subject.gradient,
      mascot: subject.mascot,
      topics,
      diagramCount: topics.reduce((n, t) => n + t.diagrams.length, 0),
    });
  }

  return out;
}

/** One subject's entry, or undefined for a slug with no diagrams (or no subject). */
export function subjectDiagrams(subjectSlug: string): SubjectDiagrams | undefined {
  return subjectsWithDiagrams().find((s) => s.slug === subjectSlug);
}

/** One topic's diagrams, or undefined if that topic has none. */
export function topicDiagrams(
  subjectSlug: string,
  topicSlug: string,
): { subject: SubjectDiagrams; topic: TopicDiagrams } | undefined {
  const subject = subjectDiagrams(subjectSlug);
  const topic = subject?.topics.find((t) => t.slug === topicSlug);
  return subject && topic ? { subject, topic } : undefined;
}

/** Totals for the landing page, so it can say what is actually in there. */
export function diagramLibraryTotals(): {
  subjects: number;
  topics: number;
  diagrams: number;
} {
  const subjects = subjectsWithDiagrams();
  return {
    subjects: subjects.length,
    topics: subjects.reduce((n, s) => n + s.topics.length, 0),
    diagrams: subjects.reduce((n, s) => n + s.diagramCount, 0),
  };
}

/**
 * Every diagram on the site as one flat, searchable list.
 *
 * Derived from the same walk as everything else in this file, so a diagram
 * added to a topic becomes searchable with no second place to update — the
 * whole reason this module exists.
 *
 * `label` is the registry name with its hyphens opened out, so
 * "circle-angle-at-centre" is searchable as "circle angle at centre" and a
 * teacher typing what they can see gets a hit. It is derived rather than
 * written down for the same reason as the rest.
 */
export type SearchableDiagram = {
  name: DiagramName;
  label: string;
  heading: string;
  topicSlug: string;
  topicTitle: string;
  subjectSlug: string;
  subjectName: string;
  year: string;
};

export function searchableDiagrams(): SearchableDiagram[] {
  const out: SearchableDiagram[] = [];

  for (const subject of subjectsWithDiagrams()) {
    for (const topic of subject.topics) {
      for (const entry of topic.diagrams) {
        out.push({
          name: entry.name,
          label: entry.name.replace(/-/g, " "),
          heading: entry.heading,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          subjectSlug: subject.slug,
          subjectName: subject.name,
          year: topic.year,
        });
      }
    }
  }

  return out;
}
