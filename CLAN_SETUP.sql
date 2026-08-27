-- ============================================================================
-- CLANS — run this once in Supabase → SQL Editor.
--
-- Safe to run more than once: everything is "if not exists" or a repeated
-- grant, so running it again changes nothing.
-- ============================================================================
--
-- TWO TABLES, because a clan and "who's in it" are genuinely different kinds
-- of fact. `clans` is one row per clan — its name, its banner, its join
-- password. `clan_members` is one row per PERSON IN a clan — who, and when
-- they joined.
--
-- This is NOT the "one event log" pattern activity/flashcard_reviews use.
-- Those store things that HAPPENED, added up after the fact. Clan membership
-- isn't a history of events — it's a plain fact about right now ("is this
-- user currently in this clan"), the same kind of fact the `users` table
-- itself stores. An ordinary table is the right tool for that, not a log.

create table if not exists public.clans (
  id            uuid        primary key,
  name          text        not null,

  -- The clan's own join password, checked the same way an account password
  -- is — see hashPassword/verifyPassword in lib/users.ts, reused here rather
  -- than reinvented. NEVER the plain password itself, for the same reason
  -- account passwords aren't stored plain: this table could leak.
  password_hash text        not null,

  -- The banner. Three small choices (a colour, a shape, an icon) rather than
  -- an uploaded image — nothing to moderate, nothing to store as a file,
  -- and every combination looks intentional because every combination was
  -- designed together. See lib/clanBanners.ts for the fixed lists these
  -- values are chosen from; not enforced by a CHECK constraint here, the
  -- same choice the `activity.subject` column makes for topic slugs — the
  -- lists can grow later without a migration.
  banner_color  text        not null,
  banner_shape  text        not null,
  banner_icon   text        not null,

  created_by    uuid        not null,
  created_at    timestamptz not null default now()
);

-- ── Icon size and position, added after the banner picker shipped ──────────
--
-- `add column if not exists ... default` is the same idiom ACCOUNT_SETUP.sql
-- uses to add `deleted_at` to an already-live `users` table: safe to run
-- against a `clans` table that already has real rows in it, and Postgres
-- backfills the default onto every existing row in the same statement — so
-- every clan made before resizing existed gets iconScale=1, offsets=0,
-- which lib/clanBanners.ts's own comment notes is deliberately the exact
-- fixed look those clans always had, not a new default appearance.
alter table public.clans
  add column if not exists banner_icon_scale   double precision not null default 1,
  add column if not exists banner_icon_offset_x double precision not null default 0,
  add column if not exists banner_icon_offset_y double precision not null default 0;

-- Searching by name is the whole point of the browse/search page — without
-- this, every search does a full table scan. `text_pattern_ops` is what lets
-- Postgres use the index for a "starts with" / "contains" search rather than
-- only exact matches.
create index if not exists clans_name_search
  on public.clans (lower(name) text_pattern_ops);

create table if not exists public.clan_members (
  clan_id   uuid        not null,
  user_id   uuid        not null,
  joined_at timestamptz not null default now(),

  primary key (clan_id, user_id),

  -- ONE CLAN AT A TIME. Letting the database enforce this, the same way
  -- `users.email` being UNIQUE is what actually stops two accounts sharing
  -- an email — application code checking first has the same race-condition
  -- gap createUser's own comment warns about: two "join" clicks in the same
  -- instant could otherwise both succeed before either write lands.
  unique (user_id)
);

create index if not exists clan_members_clan
  on public.clan_members (clan_id);

alter table public.clans enable row level security;
alter table public.clan_members enable row level security;

grant usage on schema public to service_role;
grant all privileges on table public.clans to service_role;
grant all privileges on table public.clan_members to service_role;

notify pgrst, 'reload schema';
