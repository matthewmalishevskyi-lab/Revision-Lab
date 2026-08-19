-- Lets a 'test' row in the `activity` table remember its score.
--
-- WHY THIS EXISTS
--
-- TEST_BADGE_SETUP.sql taught the activity table to accept kind = 'test', so
-- the "completed a test in every subject" badges could check whether a test
-- row exists for a subject. That only needed to know a test HAPPENED, not how
-- it went — so recordTestCompletion() never sent a score anywhere.
--
-- "Test score history" needs the actual result: 14/20, on this subject, on
-- this date. Rather than a new table, this adds two more columns to the same
-- event log — same reasoning as `correct` (practice) and `seconds` (time):
-- a column that's only meaningful for one kind of row, and NULL everywhere
-- else, which is exactly what NULL means.
--
-- Run this once in the Supabase SQL Editor, the same way as every other
-- *_SETUP.sql file in this project. Safe to run more than once.

alter table public.activity
  add column if not exists score_correct integer;

alter table public.activity
  add column if not exists score_total integer;

notify pgrst, 'reload schema';
