-- Each student's exam board, one row per subject.
--
-- Matthew, 2026-10-14: the first time a logged-in student opens a subject, it
-- asks which board they sit; topics not on that board are hidden. He chose to
-- keep the choice ON THE ACCOUNT, so it follows them from laptop to phone.
--
-- A TABLE OF ITS OWN, for the reason QUESTION_REVIEW_SETUP.sql gives: code
-- deploys the moment it is pushed and this runs whenever somebody gets round to
-- it. Until it is run, the chooser simply does not appear and every topic is
-- shown, exactly as before — nothing else is affected.
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project. Safe to run more than once.

create table if not exists public.exam_boards (
  -- ⚠️ on delete cascade: when an account is deleted (ACCOUNT_SETUP.sql's
  -- nightly job), its choices go with it, as the privacy page promises.
  user_id uuid not null references public.users(id) on delete cascade,

  -- A subject slug from app/lib/subjects.ts. The app only ever writes the ten
  -- subjects that ask; the length cap is so nothing else can be stuffed in.
  subject text not null check (char_length(subject) between 1 and 40),

  -- "none" means skipped, or not sure: show everything, and don't ask again.
  board text not null check (board in ('aqa', 'edexcel', 'ocr', 'eduqas', 'none')),

  updated_at timestamptz not null default now(),

  -- What makes choosing again REPLACE the old choice rather than add a row.
  primary key (user_id, subject)
);

-- RLS on with no policies, like every other table here: only the server's
-- service_role key can touch it, and that key bypasses RLS entirely.
alter table public.exam_boards enable row level security;

-- ⚠️ Since April 2026 a new table in `public` is not exposed to the API until
-- it is granted — see DEPLOYING.md step 5b and the PGRST205 afternoon.
grant usage on schema public to service_role;
grant all privileges on table public.exam_boards to service_role;
revoke all on table public.exam_boards from anon, authenticated;

notify pgrst, 'reload schema';
