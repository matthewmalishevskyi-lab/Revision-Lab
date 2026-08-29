"use client";

import { useActionState, useState } from "react";
import { createQuizAction, type CreateQuizState } from "../../../lib/quiz-actions";
import { FormError } from "../../../components/FormBits";
// From a tiny, zero-import file — NOT from quiz-actions.ts ("use server", so
// it can only export functions) or quiz.ts (server-only node:fs/node:crypto
// code that has no business in this Client Component's bundle) — see
// quizConfig.ts's own comment for why this specific split exists.
import { MAX_QUESTIONS, MAX_TOPICS, MIN_QUESTIONS, MIN_TOPICS } from "../../../lib/quizConfig";

export type SubjectOption = {
  slug: string;
  name: string;
  accent: string;
  topics: { slug: string; title: string; year: string; mcqCount: number }[];
};

export function HostSetupForm({ subjects }: { subjects: SubjectOption[] }) {
  const [state, action, pending] = useActionState<CreateQuizState, FormData>(
    createQuizAction,
    null,
  );

  const [subjectSlug, setSubjectSlug] = useState(subjects[0]?.slug ?? "");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const subject = subjects.find((s) => s.slug === subjectSlug) ?? subjects[0];

  function toggleTopic(slug: string) {
    setSelectedTopics((current) => {
      if (current.includes(slug)) return current.filter((s) => s !== slug);
      if (current.length >= MAX_TOPICS) return current; // silently capped — the button below explains why
      return [...current, slug];
    });
  }

  // Switching subject invalidates whatever was ticked for the old one — a
  // topic slug only means something within its own subject, so carrying a
  // Maths topic's slug across to a Biology selection would either match
  // nothing or, worse, coincidentally match something unrelated.
  function changeSubject(slug: string) {
    setSubjectSlug(slug);
    setSelectedTopics([]);
  }

  const totalMcqs = subject
    ? subject.topics
        .filter((t) => selectedTopics.includes(t.slug))
        .reduce((sum, t) => sum + t.mcqCount, 0)
    : 0;

  // Checked against the real question count too, not just how many topics
  // are ticked — createQuizAction rejects a combination that can't produce
  // at least MIN_QUESTIONS anyway (see its own comment on why that check
  // has to happen before writing anything), but catching it here means the
  // button explains itself instead of someone finding out only after a
  // round trip to the server.
  const canSubmit =
    selectedTopics.length >= MIN_TOPICS &&
    selectedTopics.length <= MAX_TOPICS &&
    totalMcqs >= MIN_QUESTIONS;

  return (
    <form action={action} className="mt-8">
      <input type="hidden" name="subjectSlug" value={subjectSlug} />
      {selectedTopics.map((slug) => (
        <input key={slug} type="hidden" name="topicSlug" value={slug} />
      ))}

      <label className="block text-sm font-semibold opacity-70">Subject</label>
      <select
        value={subjectSlug}
        onChange={(e) => changeSubject(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 dark:border-white/15 dark:bg-white/5"
      >
        {subjects.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.name}
          </option>
        ))}
      </select>

      <p className="mt-6 text-sm font-semibold opacity-70">
        Topics — pick {MIN_TOPICS} to {MAX_TOPICS}
      </p>
      <p className="mt-1 text-xs opacity-50">
        Each topic only has a handful of multiple-choice questions today, so
        picking a few is what gets you a real round rather than a very short
        one.
      </p>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {subject?.topics.map((topic) => {
          const checked = selectedTopics.includes(topic.slug);
          const disabled = !checked && selectedTopics.length >= MAX_TOPICS;
          return (
            <label
              key={topic.slug}
              className={[
                "flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition",
                checked
                  ? "border-blue-400 bg-blue-50 dark:border-blue-500/50 dark:bg-blue-500/10"
                  : "border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/5",
                disabled ? "cursor-not-allowed opacity-40" : "",
              ].join(" ")}
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  onChange={() => toggleTopic(topic.slug)}
                  className="h-4 w-4"
                />
                <span>
                  {topic.title}
                  <span className="ml-1.5 opacity-50">· {topic.year}</span>
                </span>
              </span>
              <span className="shrink-0 opacity-50">{topic.mcqCount} Qs</span>
            </label>
          );
        })}
      </div>

      <p
        className={[
          "mt-3 text-sm",
          selectedTopics.length > 0 && totalMcqs < MIN_QUESTIONS
            ? "font-semibold text-red-700 dark:text-red-400"
            : "opacity-60",
        ].join(" ")}
      >
        {selectedTopics.length === 0
          ? "No topics picked yet."
          : totalMcqs < MIN_QUESTIONS
            ? `Only ${totalMcqs} question${totalMcqs === 1 ? "" : "s"} between those topics — pick at least one more for a real round (needs ${MIN_QUESTIONS}).`
            : `${selectedTopics.length} topic${selectedTopics.length === 1 ? "" : "s"} picked — up to ${totalMcqs} questions available (the room caps at ${MAX_QUESTIONS}).`}
      </p>

      <FormError message={state?.formError} />

      {/* Not FormBits' shared SubmitButton here on purpose — that component
          shows "Just a moment…" whenever it's disabled, which would be a
          confusing thing to show someone who simply hasn't picked enough
          topics yet rather than someone who's mid-submit. The message
          above already explains why the button won't go. */}
      <button
        type="submit"
        disabled={pending || !canSubmit}
        className="mt-8 w-full rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.9)] transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Just a moment…" : "Create the room"}
      </button>
    </form>
  );
}
