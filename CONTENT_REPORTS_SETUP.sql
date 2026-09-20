-- "This looks wrong" — where a reported question goes.
--
-- WHY THIS EXISTS
--
-- 651,000 words of revision content and no subject teacher has read any of it.
-- That has been the project's biggest standing risk since the site had three
-- subjects, and it grew by 1,155 questions in September alone. Waiting for one
-- teacher with a spare hour has not worked; this turns every reader into a
-- proofreader instead.
--
-- ⚠️ WHY A TABLE AND NOT JUST AN EMAIL
--
-- The obvious build is "email Matthew and be done". It is also exactly the
-- shape of the worst bug this project has had. `password_resets` did not exist
-- on the live database for weeks: someone asked for a reset link, the screen
-- said "check your email", the insert threw, the error was caught and logged,
-- and the function returned success anyway. Nobody ever received one, and
-- nobody found out, because a failure that apologises politely looks exactly
-- like a success.
--
-- A report is worth more than a reset link. It is a student telling us
-- something on the site is WRONG, and the whole point of the feature is that
-- the message arrives. So the row is written first and the email is sent
-- second: if Gmail is unreachable, if GMAIL_USER was never set in Vercel, if
-- the app password expired — the report is still sitting here, and
-- /admin/reports still lists it.
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project. Safe to run more than once.

create table if not exists public.content_reports (
  id uuid primary key default gen_random_uuid(),

  -- Who reported it. Reporting is login-only, so this is never null — see
  -- the comment in content-report-actions.ts for why that was chosen over
  -- letting a visiting teacher report anonymously.
  user_id uuid not null references public.users(id) on delete cascade,

  -- Where. `subject` and `topic` are slugs, matching the `activity` table's
  -- own convention so the two can be read together.
  subject text not null,
  topic text not null,

  -- WHAT was reported, stored as TEXT rather than as an index into the
  -- content. A question's position in its array changes every time somebody
  -- adds a question above it, and this site added 1,155 in one go — an index
  -- recorded today would point at a different question next week. The text is
  -- stable, and it is also what Matthew needs to see in order to find the
  -- thing being complained about.
  question text not null,

  -- The student's own words. Optional: a tap with no message still tells us
  -- which question somebody doubted, and demanding an essay would lose most
  -- of the reports that are worth having.
  message text,

  -- Set when it has been dealt with, so the list can hide what is done.
  resolved_at timestamptz,

  created_at timestamptz not null default now()
);

create index if not exists content_reports_created_idx
  on public.content_reports (created_at desc);

-- ⚠️ SINCE APRIL 2026 A NEW TABLE IN `public` IS NOT AUTOMATICALLY EXPOSED TO
-- THE API, and every tutorial written before then leaves this out. Without it
-- the insert fails with PGRST205 "Could not find the table in the schema
-- cache" — which is exactly how this project lost an afternoon when the
-- `users` table was first created. See DEPLOYING.md step 5b.
grant usage on schema public to service_role;
grant all privileges on table public.content_reports to service_role;

-- The publishable key is in every visitor's browser by design, so anon and
-- authenticated get nothing here: reports are written by the server, using the
-- service role, after it has checked who is logged in. A table strangers can
-- write to is a table strangers can fill.
revoke all on table public.content_reports from anon, authenticated;

notify pgrst, 'reload schema';
