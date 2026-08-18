-- Lets the `activity` table accept kind = 'test'.
--
-- WHY THIS EXISTS
--
-- The activity table already logs "practice", "flashcard" and "time" events
-- (see PROGRESS_SETUP.sql) — one row per thing that happened, folded into
-- statistics rather than a state table that could drift out of sync. The new
-- "completed a test" badges need their own event kind for the same reason:
-- "did this student ever finish a {subject} test" is answered by checking
-- whether a 'test' row exists for that subject, not by storing a boolean
-- anywhere.
--
-- The table has a CHECK constraint naming the kinds it will accept, so a new
-- kind needs a migration, not just new application code. Forgetting this step
-- would make every recordTestCompletion() insert fail silently (recordActivity
-- logs and swallows write failures on purpose — see progress.ts — so the
-- symptom would be "test badges never unlock", not an error anyone notices).
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project.

alter table public.activity drop constraint if exists activity_kind_check;

alter table public.activity
  add constraint activity_kind_check
  check (kind in ('practice', 'flashcard', 'time', 'test'));

notify pgrst, 'reload schema';
