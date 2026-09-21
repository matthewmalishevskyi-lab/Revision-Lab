-- "Bring back the questions you got wrong" — where each answer is remembered.
--
-- WHY THIS EXISTS
--
-- Spaced repetition has existed for flashcards since August: get one wrong and
-- it comes back in ten minutes, then a day, three days, a week. Practice
-- questions never had it. A question you got wrong was simply gone — the
-- `activity` table records that you answered SOMETHING in a topic and whether
-- it was right, but never WHICH question, so there was nothing to bring back.
-- This table is that missing fact.
--
-- ⚠️ A NEW TABLE, NOT A NEW COLUMN ON `activity`, AND THAT IS THE IMPORTANT
-- DECISION IN THIS FILE.
--
-- Adding `question` to `activity` was the obvious build and would have broken
-- the site. Code deploys the moment it is pushed; this SQL runs whenever
-- somebody gets round to it. In that gap every practice answer would have
-- tried to write a column that did not exist, the insert would have failed,
-- and ALL progress tracking would have stopped — the dashboard, streaks, XP,
-- today's practice. That is exactly the shape of the clan `heir_id` incident
-- in PROJECT_NOTES.md, where selecting one missing column 404'd every clan
-- page.
--
-- A separate table fails ALONE. Until this is run, the app tries to write
-- here, gets refused, logs it, and carries on; the only visible effect is that
-- the "revisit" list stays empty. Nothing that already works can break.
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project. Safe to run more than once.

create table if not exists public.question_reviews (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null references public.users(id) on delete cascade,

  -- Slugs, matching `activity` and `flashcard_reviews`, so all three read
  -- together.
  subject text not null,
  topic text not null,

  -- The question's own TEXT is its identity, the same choice
  -- flashcard_reviews makes with a card's term. There is no question id to
  -- use, and a position in the content array changes every time a question is
  -- added above it — September added 1,155 in one go. The cost, stated
  -- honestly: rewording a question resets that one question's history.
  question text not null,

  correct boolean not null,

  created_at timestamptz not null default now()
);

-- Every read asks for one user's answers, newest first.
create index if not exists question_reviews_user_created
  on public.question_reviews (user_id, created_at desc);

-- RLS on with no policies, like every other table here: only the server's
-- service_role key can touch it, and that key bypasses RLS entirely.
alter table public.question_reviews enable row level security;

-- ⚠️ Since April 2026 a new table in `public` is not exposed to the API until
-- it is granted — see DEPLOYING.md step 5b and the PGRST205 afternoon.
grant usage on schema public to service_role;
grant all privileges on table public.question_reviews to service_role;
revoke all on table public.question_reviews from anon, authenticated;

notify pgrst, 'reload schema';
