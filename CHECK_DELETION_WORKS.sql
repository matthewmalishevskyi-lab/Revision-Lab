-- ============================================================================
-- IS "DELETE MY ACCOUNT" ACTUALLY DELETING ANYTHING?
--
-- Paste this whole file into Supabase → SQL Editor and press Run. It CHANGES
-- NOTHING — every statement below is a read. It exists to answer one question
-- that nobody can answer by looking at the website.
--
-- ── Why this needs asking at all ────────────────────────────────────────────
--
-- Pressing "delete my account" does not delete anything. It sets a timestamp
-- (`deleted_at`) and starts a 30-day countdown, so that somebody who clicks it
-- by mistake can get months of revision back. That was a deliberate choice.
--
-- The row is actually erased by a scheduled job inside the database, created by
-- ACCOUNT_SETUP.sql. If that file was never run — or was run before pg_cron was
-- switched on — then nothing ever comes back to finish the job, the row sits
-- there for ever, and the privacy page is promising something that isn't
-- happening. That is not a bug that shows up on the site; the only place it is
-- visible is here.
--
-- This is the same shape of problem as the quiz being broken for a week: a .sql
-- file that was written but never run. That one at least threw errors. This one
-- fails completely silently, which is why it is worth checking on purpose.
-- ============================================================================


-- ── 1. Does the nightly cleanup job exist, and is it switched on? ───────────
--
-- WHAT YOU WANT TO SEE: exactly one row, jobname
-- 'revision-lab-nightly-cleanup', active = true.
--
-- NO ROWS AT ALL means the job was never created: run ACCOUNT_SETUP.sql.
-- An ERROR saying cron.job does not exist means pg_cron isn't enabled at all:
-- Database → Extensions → search "pg_cron" → enable, then run
-- ACCOUNT_SETUP.sql.
select jobname, schedule, active
from cron.job
where jobname = 'revision-lab-nightly-cleanup';


-- ── 2. Has it actually RUN, and did it work? ───────────────────────────────
--
-- WHAT YOU WANT TO SEE: rows with status 'succeeded', the newest within the
-- last day or so. A job that exists but has never run, or that fails every
-- night, deletes exactly as much as no job at all.
select
  start_time,
  status,
  return_message
from cron.job_run_details
where jobid in (
  select jobid from cron.job where jobname = 'revision-lab-nightly-cleanup'
)
order by start_time desc
limit 10;


-- ── 3. Is anybody stuck past their grace period? ───────────────────────────
--
-- This is the one that actually matters, because it is the direct answer:
-- accounts that asked to be deleted MORE than 30 days ago and are still here.
--
-- WHAT YOU WANT TO SEE: no rows.
--
-- ANY ROW here is somebody who asked to be erased over a month ago and has not
-- been. If that happens, running ACCOUNT_SETUP.sql fixes it going forward, and
-- the job clears the backlog on its next run — but it is worth knowing that it
-- happened rather than finding out from the person it happened to.
select
  id,
  email,
  deleted_at,
  date_part('day', now() - deleted_at) as days_since_they_asked
from public.users
where deleted_at is not null
  and deleted_at < now() - interval '30 days'
order by deleted_at;


-- ── 4. And anyone currently inside the grace period ─────────────────────────
--
-- Not a problem — these are working exactly as intended, counting down. Shown
-- so that "no rows in section 3" can be read as "the job is working" rather
-- than "nobody has ever pressed the button", which look identical otherwise.
select
  email,
  deleted_at,
  (deleted_at + interval '30 days') as will_be_erased_on
from public.users
where deleted_at is not null
  and deleted_at >= now() - interval '30 days'
order by deleted_at;
