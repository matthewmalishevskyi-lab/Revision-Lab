// The questions the alien game asks, drawn from the site's own practice
// questions. Server-only: it reads the content registry, and only the chosen
// topics' multiple-choice questions ever reach the browser.
//
// Two pools:
//   reload - every multiple-choice question on the chosen topics
//   easy   - the recognise/recall ones (difficulty 1-2), for the 5-second
//            "stomp" questions, which Matthew asked to be "rapid and easy"

import { getTopicContent } from "./content";
import { difficultyOf } from "./difficulty";
import { normalise } from "./normalise";
import { shuffle } from "./shuffle";
import { getSubject } from "./subjects";

export type GameQuestion = { question: string; choices: string[]; correct: number; topic: string; topicTitle: string };

const MAX_POOL = 80;
const MAX_CHOICES = 4;

/** Topics in a subject with enough multiple-choice questions to play with. */
export function playableTopics(subjectSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return [];
  return subject.years.map((y) => ({
    year: y.year,
    topics: y.topics
      .map((t) => ({ ...t, count: (getTopicContent(subjectSlug, t.slug)?.practice ?? []).filter((q) => q.choices && q.choices.length >= 2).length }))
      .filter((t) => t.count >= 3),
  })).filter((y) => y.topics.length > 0);
}

export function buildGameQuestions(subjectSlug: string, topicSlugs: string[]): { reload: GameQuestion[]; easy: GameQuestion[] } {
  const subject = getSubject(subjectSlug);
  if (!subject) return { reload: [], easy: [] };
  const titles = new Map(subject.years.flatMap((y) => y.topics).map((t) => [t.slug, t.title]));
  const reload: GameQuestion[] = [], easy: GameQuestion[] = [];
  for (const slug of topicSlugs) {
    const title = titles.get(slug); if (!title) continue;
    for (const q of getTopicContent(subjectSlug, slug)?.practice ?? []) {
      if (!q.choices || q.choices.length < 2) continue;
      const accepted = (q.accept ?? []).map(normalise);
      const right = q.choices.find((c) => accepted.includes(normalise(c)));
      if (!right) continue;
      // Four buttons, keys 1-4: keep the right answer plus up to three wrong ones.
      const wrong = shuffle(q.choices.filter((c) => c !== right)).slice(0, MAX_CHOICES - 1);
      const choices = shuffle([right, ...wrong]);
      const item = { question: q.question, choices, correct: choices.indexOf(right), topic: slug, topicTitle: title };
      reload.push(item);
      if (difficultyOf(subjectSlug, q) <= 2) easy.push(item);
    }
  }
  return { reload: shuffle(reload).slice(0, MAX_POOL), easy: shuffle(easy).slice(0, MAX_POOL) };
}
