// The line at the bottom of every Teacher Tools page.
//
// Matthew asked for it on all of them, and it is doing a real job rather than
// filling space: Teacher Tools opens with one tool in it. A page that shows a
// single feature and says nothing else reads as finished, and a teacher who
// reads it that way never comes back. Saying so plainly sets the expectation
// the site can actually meet — this is the start of something, and the site is
// one fifteen-year-old, so it will grow at the speed one person can build.
//
// Kept as its own component, not copied onto each page, so the wording only
// ever exists once. When there IS more, one edit removes it everywhere.
export function MoreComingSoon() {
  return (
    <p className="mt-14 border-t border-black/5 pt-6 text-center text-sm opacity-50 dark:border-white/10">
      More coming soon.
    </p>
  );
}
