-- ============================================================================
-- ACCOUNT DELETION + HOUSEKEEPING — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once.
-- ============================================================================

-- ── 1. The deletion flag ────────────────────────────────────────────────────
--
-- Someone who asks to delete their account gets a 30 day grace period, so a
-- misclick doesn't destroy months of revision. During those 30 days the row is
-- still here, marked, and the person can log in and change their mind.
--
-- `if not exists` matters: the users table already has real accounts in it, and
-- this has to add a column without disturbing them. Existing rows get null,
-- which correctly means "not deleted".
alter table public.users
  add column if not exists deleted_at timestamptz;

-- ── 2. THE PART THAT MAKES IT HONEST ────────────────────────────────────────
--
-- A soft delete is only a delete if something comes back and finishes the job.
-- Without the schedule below, "we erase your data after 30 days" is simply a
-- false statement on the privacy page, and the row sits there forever.
--
-- pg_cron runs jobs inside the database itself, so this keeps working whether
-- or not anyone visits the site, and whether or not Vercel is having a good
-- day. Every Supabase project has it available.
create extension if not exists pg_cron;

-- One job doing both cleanups, rather than two. The free plan limits how many
-- schedules you get, and there is no reason these need separate slots.
--
-- `cron.schedule` with a name that already exists replaces it, so re-running
-- this file updates the job instead of creating a duplicate.
select cron.schedule(
  'revision-lab-nightly-cleanup',
  '17 3 * * *',  -- 03:17 every night. An odd minute on purpose: everyone
                 -- schedules things on the hour, and the database is quieter
                 -- at 3:17 than at 3:00.
  $$
    -- Erase the activity of anyone past their grace period FIRST. Doing it in
    -- this order matters: delete the user first and the activity rows are
    -- orphaned, still holding a record of what that person revised and when,
    -- with nothing left to tell you they should have gone.
    delete from public.activity
    where user_id in (
      select id from public.users
      where deleted_at is not null
        and deleted_at < now() - interval '30 days'
    );

    delete from public.users
    where deleted_at is not null
      and deleted_at < now() - interval '30 days';

    -- While we're here: throw away stale rate-limiting rows. An IP that failed
    -- to log in twice last month is of no further interest.
    delete from public.login_throttle
    where last_failure_at < now() - interval '7 days'
      and (locked_until is null or locked_until < now());
  $$
);

-- ── 3. Checking it worked ───────────────────────────────────────────────────
--
--   select jobname, schedule, active from cron.job;
--
-- should list 'revision-lab-nightly-cleanup'. To see whether it has been
-- running, and whether it succeeded:
--
--   select jobid, status, return_message, start_time
--   from cron.job_run_details order by start_time desc limit 10;
--
-- To see who is currently scheduled for deletion:
--
--   select email, deleted_at, deleted_at + interval '30 days' as erased_on
--   from public.users where deleted_at is not null;
--
-- If someone emails asking to be deleted RIGHT NOW rather than in 30 days,
-- they are entitled to that. Run:
--
--   delete from public.activity where user_id =
--     (select id from public.users where email = 'them@example.com');
--   delete from public.users where email = 'them@example.com';
