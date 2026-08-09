# Project Notes — Revision Lab (GCSE revision website)

> **Renamed 2026-08-08:** the site was called *Revision Hub* until deployment day; Matthew settled on **Revision Lab** as the official name. All 19 mentions were changed, plus the session cookie name and the fallback site URL. The local folder and this repo's older commit messages still say "revision-site" — that's cosmetic and harmless. Older notes below may still refer to Revision Hub.

This file is our shared memory. Read it at the start of every session before doing anything else. Update it whenever we make a decision, finish something, or learn a gotcha — don't let this go stale.

## The team

- **Matthew** — 15, studying CS at school, knows some Python, new to web dev. Building this to *learn*, not just to ship. Wants things explained, not just done.
- **Jennifer (ChatGPT)** — teaches concepts, explains code, helps plan architecture, debugs, makes sure Matthew understands rather than copy-pastes.
- **Claude (me)** — larger coding tasks, component/design work, code review, alternative approaches.

Rule for both AIs: explain the *why*, not just the *what*. Matthew should be able to explain any code we write back to us.

## Stack

- Next.js **16.3.0** (App Router) — this is a very recent version. Its own docs warn that AI training data may be stale for it; check `node_modules/next/dist/docs/` before assuming an API works the way older tutorials say.
- React 19.2.8, TypeScript, ESLint, Tailwind CSS v4
- Dev server: `npm run dev` → http://localhost:3000

## Gotchas learned so far

- In this Next.js version, `params` in a page/layout is a `Promise` — you `await params` (or `use(params)` in a Client Component), not access it directly. Don't trust older tutorials on this.
- Route folders use square brackets for dynamic segments, e.g. `app/subjects/[subject]/page.tsx`.

## Progress log

- **2026-08-07**: Environment set up (Node, Git, Next.js app with TS/ESLint/Tailwind/App Router). Dev server runs. Edited `app/page.tsx` and confirmed hot reload works.
- **2026-08-08**: Claude joined the project, connected to the repo, added this notes file.
- **2026-08-08**: Matthew sketched the homepage layout (header w/ Login/Register, centred welcome box, three subject cards). Claude built it in `app/page.tsx`. Deliberately **no colour scheme yet** — greyscale only, styling comes later. Page title in `layout.tsx` changed to "Revision Lab". Typecheck passes.

## Design decisions

- Subject colours: Computer Science = **blue**, Maths = **orange**, English = **violet/purple** (Claude's pick; emerald green was runner-up, Matthew may still swap it).
- Cards are not flat fills. Each uses a 3-stop gradient, a white gloss fade at the top, two blurred light blobs, a hairline inner ring, and a shadow tinted with the card's own colour. Hover lifts the card and brightens the glow.
- Page background is no longer white: three faint radial washes (blue / orange / violet) sit behind everything, matching the card colours at ~10% strength. Fixed attachment so they stay put while content scrolls.
- Hero box and Login button use a "frosted glass" treatment (semi-transparent white + `backdrop-blur`) so the colour wash shows through instead of being covered.
- Body font switched from Arial to the Geist font already installed by create-next-app.
### The characters

All three are ORIGINAL designs, not copies of anyone else's mascots — the site is meant to be deployed publicly, and shipping someone else's character would be a real problem. These are ours.

- **Pixel** (Computer Science) — humanoid robot, CRT television for a head, gold specs.
- **Hoot** (Maths) — owl in big round glasses.
- **Quill** (English) — Elizabethan scholar, ruff collar, hand on beard, mid-thought. *Note: Shakespeare is late 16th / early 17th century, not 18th — the 1700s look (tricorn hat, frock coat, powdered wig) would read as "founding father" instead.*
- Glasses on all three is the deliberate thread that makes them a set.

**CURRENT VERSION: smooth vector art** (`app/components/Mascots.tsx`). Built from circles, rounded rectangles and curved paths — no pixel grid. Resolution-independent: sharp at any size, on any screen, forever. There is no resolution to run out of.

*Why we switched:* Matthew twice asked for "better resolution" while pointing at smooth illustrated mascots. The real gap wasn't pixel count — it was the medium. Pixel art at high resolution doesn't become smooth art, it just becomes a big picture of blocky art, because the blockiness IS the art form. Two grid upgrades (16x18 → 32x36) couldn't fix that; changing medium did.

House style keeping the three a family: chunky proportions, big heads, flat fills with one darker shade, thick rounded strokes, no sharp corners, everyone in glasses.

**The pixel version is preserved, not deleted** — `characters-pixel.ts` + `PixelSprite.tsx`. To switch back, import from those instead in `page.tsx`. Nothing was lost.

**How the pixel version was built (kept for reference):** `app/components/PixelSprite.tsx` renders a grid of letters into SVG squares, one square per pixel — the same idea as an old console sprite sheet. The sprites themselves live as text art in `app/components/characters.ts`. To edit a character, change a letter; each letter is one pixel and each row must stay exactly **32 characters, 36 rows**. `shapeRendering="crispEdges"` is the one line that keeps them chunky instead of blurry when scaled up.

**Resolution history:** started at 16x18, upgraded to **32x36** (4x the pixels) on 2026-08-08. That's roughly Super Nintendo territory and is about the ceiling before the art stops reading as pixel art and just looks like a small picture. At 32x36 there's room for scanlines on Pixel's screen, pupils in Hoot's eyes, and buttons on Quill's doublet.

*Terminology note for Matthew: "8-bit" and "16-bit" refer to a console's processor, not its sprite resolution — an NES sprite was 8x8 or 16x16. So "64-bit" isn't a resolution. The thing you were asking for is grid size.*

**Sprites are generated, not typed.** They were plotted with a Python script (`draw.py` / `gen.py`, kept in the scratch outputs folder, not the repo) that draws the left half with rectangle/disc/line helpers, mirrors it for perfect symmetry, then adds the deliberately asymmetric bits (Quill's raised hand). Hand-typing 36 rows of 32 characters is where mistakes live. If a character needs a real redesign rather than a tweak, regenerate rather than hand-edit. A verification step checks every row is 32 chars, there are 36 rows, and every letter used has a palette entry.

**Animation:** they pace from one bottom corner of their card to the other and turn round. Two nested elements — the outer one does `walk` (moves + flips via `scaleX(-1)`), the inner does `bob` (bounce). They must be separate because both animations want to control `transform`. The bob uses `steps(2, end)` for a deliberately snappy two-frame retro feel. Each character has a different duration so they don't march in sync. All motion is disabled under `prefers-reduced-motion`.
- **Tailwind gotcha (important):** Tailwind reads source files as plain text to decide what CSS to generate. Dynamically built class names like `` shadow-[${colour}] `` produce nothing. Any per-item classes must be written as complete literal strings (see the `subjects` array in `app/page.tsx`).

## Accounts / authentication (built 2026-08-08)

Email + password login and registration, working, with **zero new packages** — all built on Node's own `crypto` module so every line is readable.

**Files**

- `app/lib/users.ts` — account storage + password hashing
- `app/lib/session.ts` — signed cookie sessions
- `app/lib/actions.ts` — Server Actions: `register`, `login`, `logout`, `getCurrentUser`
- `app/login/`, `app/register/`, `app/forgot-password/` — the pages
- `app/components/AuthShell.tsx`, `FormBits.tsx`, `Logo.tsx` — shared UI

**Decisions Matthew made:** accounts stored in a JSON file for now (not a database); login is optional, anyone can browse without an account.

**The security ideas worth being able to explain:**

- Passwords are never stored — only a **salted scrypt hash**. Salt = a random value per password so identical passwords don't produce identical hashes. scrypt is deliberately *slow* to make brute-forcing painful.
- `timingSafeEqual` instead of `===` for comparing secrets, to avoid **timing attacks** (a normal comparison leaks information through how long it takes to fail).
- Sessions are **signed** with an HMAC, so a user can't edit their cookie to become someone else. Signed, not encrypted — the contents are readable, they just can't be forged.
- Login failure says "Email or password is incorrect" whether or not the email exists, so nobody can probe for which addresses have accounts.
- Cookies are `httpOnly` (page scripts can't read them), `sameSite: lax` (blocks cross-site request forgery), and `secure` in production.
- `/data` is gitignored — it holds real email addresses and the session signing key. Never commit it.

**Known limits / next steps**

- JSON file storage will NOT survive deployment (hosts give each request a fresh read-only filesystem, and simultaneous writes overwrite each other). Swap `users.ts` for a database before going public — the rest of the code shouldn't need to change, which is exactly why storage is isolated in one file.
- No password reset (needs an email service). `/forgot-password` is an honest placeholder rather than a dead button.
- No rate limiting on login attempts yet.
- Session secret should come from a `SESSION_SECRET` environment variable in production; locally it auto-generates into `/data`.

**Verification done:** 16 automated checks passed covering hashing, salting, case-insensitive email, duplicate rejection, plaintext never touching disk, cookie forgery rejection, and expiry. Note: `next build` could not be run in Claude's sandbox (no network access to fetch a Linux build binary) — Matthew should run `npm run dev` locally to confirm the pages render.

## Subject & topic pages (built 2026-08-08)

From Jennifer's Computer Science mockup, generalised to all three subjects.

- `app/lib/subjects.ts` — **the single source of truth.** Three subjects, each with Year 9/10/11 topic lists, colours, and mascot. Add a topic here and its page, URL and links all appear automatically. Nothing else needs editing.
- `app/subjects/[subject]/page.tsx` — one file serving all three subject pages. Square brackets = a variable part of the URL.
- `app/subjects/[subject]/[topic]/page.tsx` — one file serving all 53 topic pages, each with an honest "content coming soon" note, breadcrumbs and links to sibling topics.
- `app/dashboard/page.tsx` — login required (checked on the server, so a logged-out visitor never receives the page). Shows account details and subjects; progress is shown as an honest empty state rather than invented numbers.
- `app/components/SiteHeader.tsx` — shared header on every page. Works out who's logged in itself.
- `app/components/Icon.tsx` — 25 topic icons, all on the same 24x24 grid with the same stroke width, drawn in `currentColor` so they take the colour of whatever they sit next to.
- `app/components/YearArt.tsx` — the book and exam-paper artwork. Deliberately generic: the mockup's monitor and laptop look great on Computer Science and odd on English. Year 9 gets the subject's mascot, Year 10 a book, Year 11 an exam paper — learn, study, sit the exam.

**Year colours are fixed** (Year 9 blue, Year 10 orange, Year 11 violet) on every subject page, as in the mockup — so the colours mean "which year", not "which subject".

**⚠️ Topic lists are a best guess.** GCSE content is split differently by exam board (AQA, Edexcel, OCR, WJEC) and schools teach topics in different years. English set texts vary most of all. These lists are a sensible common denominator — Matthew should check them against his own school's scheme of work. A note saying so appears at the bottom of every subject page. One day the site may need to ask which exam board a student is on.

**Verification:** 171 automated checks — every slug URL-safe, no duplicate URLs, every generated route resolves back through the same lookup the pages use, unknown subjects/topics correctly return nothing (the 404 path), and every icon referenced actually exists. 41 routes generated. TypeScript and ESLint both clean.

## Revision content (started 2026-08-08)

**ALL 53 TOPICS ARE COMPLETE IN THE FULL FORMAT.** Every topic has six sections: summary, key facts, worked examples, common mistakes, practice questions and flashcards, plus exam technique.

| | Worked examples | Auto-marked Qs | Self-marked Qs | Mistakes | Flashcards |
|---|---|---|---|---|---|
| Computer Science (18) | 75 | 288 | 36 | 108 | 277 |
| Maths (19) | 76 | 305 | 37 | 114 | 234 |
| English (16) | 64 | 256 | 32 | 96 | 191 |
| **Total** | **215** | **849** | **105** | **318** | **702** |

~108,000 words of content. 6,769 automated checks pass.

**15 topics added 2026-08-09** to fill genuine gaps against the specifications, after an audit against AQA / OCR / Edexcel content:

- **Computer Science (+5):** Memory & storage, System software, Protocols & layers, Defensive design & testing, Languages & IDEs. (OCR J277 sections 1.2, 1.5, 1.4, 2.3 and 2.5 had no home before this.)
- **Maths (+6):** Indices & standard form, Perimeter/area/volume, Straight-line graphs, Similarity & congruence, Constructions/loci/bearings, Compound measures & rates. Mensuration and y = mx + c were the two biggest holes — both are heavily examined and neither existed.
- **English (+4):** Grammar/punctuation/spelling, Comparing texts, Spoken language, Context & themes.

12 new icons drawn for them, in the same 24×24 stroke style.

**Higher tier labelling** — `higherOnly` can be set on a key-fact block, a worked example or a practice question. It renders an amber badge, and any topic containing one shows an explanatory notice at the top. 26 items flagged, all in Maths (circle theorems, sine/cosine rules, quadratic formula, quadratic sequences, histograms, vector proofs, inverse proportion). Only Maths is tiered — a check enforces that no other subject uses the flag.

## Verification: `npm run check`

One command runs everything: `tsc --noEmit`, then `eslint --max-warnings=0`, then `scripts/check-content.mjs`. **Run it before every push.** Currently ~14,900 checks.

The content checker is worth reading (`scripts/check-content.mjs`) — it exists because TypeScript can only check the SHAPE of the content. It cannot notice that a topic has too few flashcards, that two practice questions are identical (React uses the question as a key, so one would vanish), or that an accept list marks a wrong answer right. Node cannot run TypeScript directly, so the script compiles the data files to a temporary folder first, inspects them, then deletes the copy.

It also holds **regression tests for the marking rule**, each one a bug that actually happened.

## Accounts on the live site — Supabase (2026-08-09)

**Matthew's call: Supabase, no new packages.** Supabase exposes every table as an HTTP API, so `fetch` is the entire client — the same reasoning as building the password hashing on Node's own `crypto`.

`app/lib/users.ts` now has **two backends behind one set of functions**, chosen automatically by whether `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set:

- **Laptop** → the JSON file in `/data`, unchanged, so you can still open it and see what got saved.
- **Live site** → a Supabase table over REST.

Nothing else in the app changed. The login page, register page, session code and dashboard are untouched — which is the payoff for isolating storage in one file on day one.

**The `unique` constraint on `email` is the important line of SQL.** The old file store checked "does this email exist?" and then inserted, and two people registering at the same instant could both pass the check. The database refuses the second insert whatever the timing and returns error 23505, which the code turns back into `EMAIL_TAKEN`. Only the database can make that promise.

**Setup is `DEPLOYING.md` Step 5** — the SQL, which two settings to copy, and how to test it. Three environment variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SESSION_SECRET`. None start with `NEXT_PUBLIC_`, deliberately: that prefix ships a value to the browser, and the service role key can read and write every row.

**Tested against a fake Supabase server** (a small Node server mimicking PostgREST, including the unique constraint): 16 checks pass — lowercasing, hashing, case-insensitive lookup, snake_case↔camelCase translation, duplicate rejection, and the login timing staying level. The local file path was re-run through the same suite: 7 more pass. Scripts were throwaway; recreate from this description if needed.

**Login is now robust to the database being unreachable** — a network blip returns "We couldn't reach the accounts service" instead of a 500. `redirect()` stays outside the try/catch, because it works by throwing a signal Next has to catch.

## Second, deeper bug hunt (2026-08-09, auth and infrastructure)

1. **User enumeration by timing — measured, not guessed.** `login()` returned instantly when no account matched the email, but ran scrypt (~30ms) when one did. The error wording was identical either way, which was supposed to stop the page revealing who has an account; the clock revealed it instead. Measured on this machine: **29.4ms for an existing email vs 0.4ms for an unregistered one — a 72x difference**, easily readable over the network. Anyone could feed in a list of addresses and learn which ones are registered without guessing a single password. Fixed with `spendPasswordCheckTime()` in `users.ts`, which hashes against a decoy so both paths cost the same. **Re-measured after the fix: 27.7ms vs 27.2ms, a ratio of 1.02.**

2. **A 500 error waiting for the day we add a database.** `getSecret()` falls back to generating a signing key and writing it to `/data`. Deployed filesystems are read-only, and that write throws `EACCES` (tested directly). `login()` does not wrap `createSession()` in a try/catch, so a visitor typing the **correct** password would have got an error page. It cannot happen today because accounts switch off in production without a `DATABASE_URL` — it would have happened the moment one was added and `SESSION_SECRET` was forgotten, which is the very next job. `ACCOUNTS_ENABLED` now requires both variables, and `getSecret()` throws a legible message in production instead.

3. **JSON-LD could have been broken out of.** `StructuredData` inserted `JSON.stringify(data)` raw into a `<script>` tag. A browser looks for the literal `</script>` before any JSON is parsed, so content containing that text would end the tag early. **Checked: no topic contains `</script>`, `<script` or `<!--` today, so this was not a live hole** — but this is a Computer Science revision site and a topic about HTML is an obvious thing to add. `<` is now escaped as `<`, which browsers and search engines read identically.

4. **No upper length limits on the registration form.** Only minimums were checked, so a megabyte-long name would have been written straight to storage. The obvious worry turned out to be wrong and worth recording: **hashing a huge password is not slow — measured, scrypt takes ~33ms for both a 12-character and a 1,000,000-character password**, because the input is condensed before the expensive part. The real issue was unbounded storage. Limits added: name 100, email 254 (the internet standard maximum), password 200.

**Checked and found clean:** `data/` has never been committed and nothing sensitive is tracked by git; every shape in all three mascots sits inside its canvas; all 849 auto-marked questions were replayed through the *shipped* `normalise()` — none fail to match themselves, none accept a blank answer, none accept junk.

**Known and deliberately NOT changed — decide together:**

- **No rate limiting on login.** Nothing stops thousands of password guesses. Fixing it properly needs shared storage, so it belongs with the database work rather than before it.
- **Accounts will make all 53 topic pages dynamic.** `SiteHeader` calls `getCurrentUser()`, which reads `cookies()`, and Next 16's own docs say: *"Using it in a layout or page will opt a route into dynamic rendering."* Today `ACCOUNTS_ENABLED` is false in production so `cookies()` is never reached and the pages stay static. Once accounts are on, every topic page renders per request instead of being served as a prebuilt file. **This was not measured — `next build` cannot run in Claude's sandbox (no network for the SWC binary), so it rests on the documentation.** The fix has a real cost (the account buttons would have to leave topic pages, or the header would need splitting), so it is Matthew's call, not an automatic change.

## Bugs found and fixed (first bug hunt, 2026-08-09)

1. **Degree signs, percent signs and currency broke marking.** Asked "the bearing of A from B?", a student typing `230°` was marked WRONG, because the accepted answer was `230`. Same for `20%` and `£50`. Fixed centrally in `normalise()` — a trailing `°`/`%` and a leading `£$€` are stripped, because they decorate a number without changing it. Doing it in the marking rule rather than by adding variants to hundreds of accept lists means it cannot be forgotten next time. It deliberately cannot turn a percentage into a decimal: "write 45% as a decimal" wants 0.45, and `45%` still reduces to `45`, which still does not match.

2. **A compound interest question accepted the SIMPLE interest answer.** `£1000 at 3% for 2 years` accepted `1060` alongside `1060.90` — on a question whose entire point is that compound is not simple. Removed, and a permanent check now flags any accept list holding two genuinely different numbers. Rounded variants (`786.432` and `786.4`) are correctly allowed; the test is whether one value is the other properly rounded to its own number of decimal places, which is exactly what separates the legitimate pair from `1060` vs `1060.90` (which rounds to 1061).

3. **The jump menu could scroll the page on load.** `pill.scrollIntoView({ block: "nearest" })` scrolls whatever ancestors it needs to, *including the window* — and on first render the menu is still below the fold, so the browser scrolled the page down to reach it. Replaced with a direct write to the strip's own `scrollLeft`, which cannot move anything else.

4. **The ladder companion was thrashing layout.** Its scroll handler called `rails.offsetHeight`, which forces the browser to recompute layout on the spot — a hundred-plus times a second while scrolling. Moved into the animation frame, which is the rule the rest of that component already followed.

**Checked and found fine:** Next.js 16 disables smooth scrolling during route transitions itself (`disableSmoothScrollDuringRouteTransition` in `layout-router.js`), so `scroll-behavior: smooth` does not make navigation crawl. All 53 routes resolve, junk URLs return nothing rather than throwing, no React key collisions, no orphan content keys, no Higher-tier flags outside Maths.

**Two earlier bugs, from 2026-08-08:**

1. **Marking bug.** `normalise()` in `Practice.tsx` stripped every hyphen so "run-length" matched "run length" — but it also stripped MINUS SIGNS, so a student answering `3` to a question whose answer was `-3` was marked correct. Now hyphens are only removed between two letters. Regression tests added.
2. **State-persistence bugs.** React reuses a component in the same tree position, so navigating between topic pages did NOT recreate `Flashcards` or `Practice`. Flashcards CRASHED (card 21 of a 23-card topic → 10-card topic → undefined → white screen), and Practice showed old answers against new questions. Both fixed with React's "adjust state when props change" pattern.



Earlier snapshot, kept for the record (before the six-section rewrite and before the 15 new topics):

| Subject | Topics | Words | Facts | Flashcards | Exam tips |
|---|---|---|---|---|---|
| Computer Science | 13 | 13,763 | 364 | 201 | 95 |
| Maths | 13 | 11,398 | 355 | 158 | 90 |
| English | 12 | 9,513 | 327 | 138 | 84 |
| **Total** | **38** | **34,674** (~77 pages) | **1,046** | **497** | **269** |

Content lives in `app/lib/content/`: `index.ts` is the registry and the type; one file per subject alongside it. To add a fourth subject, write its file and spread it into the registry — that's the only code change.

**Subject-specific caveats, all noted at the top of each content file:**

- **Maths** — Foundation and Higher tiers differ. Cosine rule, completing the square, histograms and vector proofs are Higher-only on most boards. Formula sheets have changed in recent years; check which formulae your board provides versus expects memorised.
- **English** — set texts vary more than in any other subject. The content teaches SKILLS and terminology that transfer to any text, naming common set texts (Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde) only as examples. Matthew must check which texts his school actually studies. Assessment Objective numbering also varies slightly by board.
- **Computer Science** — boards differ on register names, whether 1 KB is 1000 or 1024 bytes, and which sorting algorithms are examinable. Every topic has the same four parts on purpose — summary, key facts, flashcards, exam technique — so the page is written once and works for all 53. Adding a topic is writing content, never writing code. Key format: `"subject-slug/topic-slug"`. Split into one file per subject once this grows past a handful.

`app/components/Flashcards.tsx` — flip on click, previous/next, Fisher–Yates shuffle. It's a `<button>` rather than a clickable `<div>`, so keyboard and screen-reader support come free.

**On the "10 pages per topic" target:** each topic is ~1,000-1,700 words, roughly 2-4 pages of *dense* material. Deliberately. Students don't read 10 pages of prose the week before an exam — they skim, self-test and panic. Stripping to bare facts is what makes it useful. If it needs to be longer, the right way is worked examples and practice questions, not more prose.

**Known overlap:** Year 9 "Binary & data" and Year 11 "Data representation" cover much of the same ground. That's intentional — Y9 teaches it, Y11 is exam-level application and revision — but if it feels repetitive, merging or re-scoping them is a fair call.

**Timing, measured:** first topic ~40 minutes (included building the flashcard component). Remaining 12 topics averaged well under that. Maths and English (25 topics) ≈ a similar-sized effort again.

**Video licensing — researched, and the answer matters:**
- Matthew's three conditions (legal + no attribution + monetisable) are essentially unobtainable for third-party video. Every open licence permitting commercial use still requires credit.
- **Khan Academy: ruled out.** CC BY-NC-SA — the NC forbids commercial use entirely.
- **Oak National Academy: the best real option.** Lessons published after 1 Sept 2022 are under Open Government Licence v3.0, which explicitly permits commercial use. Requires acknowledging the source. Third-party material inside their lessons is excluded.
- **YouTube embeds:** fine through their player, but the channel name is always visible.
- **Writing our own text sidesteps all of this** — original content, we own it outright.
- Claude is not a lawyer. If real money gets involved, get someone who is to check.

**⚠️ Accuracy:** content should be checked by someone who teaches the subject before students rely on it — especially if the site ever earns money. Wrong content stops being embarrassing and starts being harmful.

## 🚀 THE SITE IS LIVE (2026-08-08)

**https://revision-lab-sigma.vercel.app**

Deployed successfully from `main`, commit `f71e786`. Status: Ready. Homepage renders correctly with all three mascots and subject cards.

- GitHub repo: `https://github.com/matthewmalishevskyi-lab/Revision-Lab` (branch `main`)
- Vercel project: `revision-lab`, team `matthewmalishevskyi-lab`, **Hobby (free, non-commercial)** plan
- **Every `git push` to `main` now redeploys the live site automatically.**

### 📋 THE PLAN (agreed 2026-08-08) — two of three now done

1. **Personal targets and achievement tracking** — ⏳ STILL OUTSTANDING. Users manage their own progress: what they've revised, what they've scored, what's left. **BLOCKED ON THE DATABASE.** Progress must be saved per user, which needs `DATABASE_URL` set up first (see Step 5 of `DEPLOYING.md`). Worth Matthew signing up to Neon or Supabase before we start, so the connection string is ready. The practice questions already produce a score — that's the natural first thing to record.
2. **In-page navigation** — ✅ DONE 2026-08-09. See "Jump menu" below.
3. **Expand** — ✅ FIRST PASS DONE 2026-08-09: 15 new topics across the three existing subjects, taking the site from 38 to 53. Still open: a fourth subject entirely (one new content file plus one line in the registry).

### Jump menu on topic pages (built 2026-08-09)

`app/components/TopicNav.tsx` — a sticky row of pills under the title card, linking to each section of the page and highlighting whichever one is currently being read.

**Worth understanding:**

- **The jump itself uses no JavaScript.** Each section carries an `id`, and `<a href="#practice">` is a browser feature from 1993. It works with JS off, and the URL becomes a shareable link to that section.
- **Two CSS properties finish the job**, both in `globals.css`: `scroll-behavior: smooth` (so you SEE the page travel and learn where things are, rather than teleporting), and `scroll-margin-top` on each section (without it, jumping puts the heading at y=0 — directly underneath the sticky bar that's covering it). Reduced-motion preference disables the smooth scroll.
- **Which section is active** is measured once per screen refresh inside `requestAnimationFrame`, not on every scroll event — same reasoning as the ladder companion. It also only calls `setState` when the answer has actually changed, otherwise it would re-render 60 times a second to draw an identical bar.
- The section list is **derived from the content**, so a topic with no worked examples never gets a link to a section that doesn't exist.

### ⚠️ START HERE NEXT SESSION — three things, in order

1. **Set the environment variable.** Vercel → Settings → Environment Variables → add `NEXT_PUBLIC_SITE_URL` = `https://revision-lab-sigma.vercel.app` (no trailing slash), then redeploy. Until this is done the sitemap and link previews point at a guessed address. The code fallback has been corrected to the real URL as a stopgap, but the env var is the proper fix.

2. **There is one unpushed commit** fixing that fallback URL. Run `git push` to send it.

3. **Check the live site works**: click into a subject, open a topic, flip a flashcard. Confirm the Login button is ABSENT — that's the `ACCOUNTS_ENABLED` safety switch doing its job, not a bug.

### Then, in rough priority order

- **Google Search Console** — verify the site, submit `https://revision-lab-sigma.vercel.app/sitemap.xml`. Deploying does not put you in Google; you must ask, then wait days-to-weeks.
- **Database (Neon or Supabase)** — required before login can be turned back on. Only `app/lib/users.ts` needs rewriting; add `DATABASE_URL` and `SESSION_SECRET` to Vercel and accounts re-enable themselves automatically.
- **Progress tracking** — the reason accounts exist. The dashboard has an empty state waiting for it.
- **Get the content checked by teachers** before students rely on it, especially Maths (tier differences) and English (set texts vary).

### Ladder companion (Matthew's idea, built 2026-08-08)

`app/components/LadderCompanion.tsx` — a ladder down the left of every topic page with the subject's mascot climbing it to follow the mouse. Leans into the direction of travel and sways side to side while moving, so it reads as climbing rather than gliding. Ladder colour matches the topic's year colour.

Hidden below the `xl` breakpoint (no room beside the content, and no mouse on a touchscreen). `aria-hidden` and `pointer-events-none` — decorative only, never intercepts a click.

**Worth understanding, and the reason the file is commented heavily:** it deliberately does NOT use React state for the mouse position. A mouse fires 100+ events a second; calling `setState` on each one would re-render the component a hundred times a second to move one image. Instead the position lives in a plain variable and the mascot is moved by writing `element.style.transform` inside `requestAnimationFrame`, which runs once per screen refresh. React renders this component once and never again. The `useEffect` cleanup removes the listener and cancels the animation frame — without it, every page visit would leak another loop.

### Loose end from this session

Matthew accidentally signed into a third-party service called **DeployWise** with his GitHub account while looking for Vercel. Worth revoking at github.com/settings/applications since it isn't needed.

## Going public (started 2026-08-08)

**See `DEPLOYING.md`** for the full step-by-step. Summary of decisions and blockers:

- **Vercel free (Hobby) plan, non-commercial.** Matthew's choice for now. Note: Hobby is explicitly non-commercial — the moment the site earns money it needs Pro (~$20/mo).
- **Age:** Vercel requires account holders to be 16+. Matthew is 15, so a parent/guardian owns the account. Parent is on board.
- **Everything is committed to git** (was previously only the create-next-app commit). `data/` correctly excluded — verified no email, password hash or session key was committed.

**SEO work done (all verified, 14 checks):**

- `app/lib/site.ts` — single source for site URL/name/description, reads `NEXT_PUBLIC_SITE_URL` so the same code works locally and live.
- Title template in the layout: pages set just their own title, "· Revision Lab" is appended automatically.
- Descriptions and canonical URLs on subject and topic pages; topic descriptions use the real content summary, truncated at a word boundary to ~155 chars (Google's display limit).
- `app/sitemap.ts` — generated from the same SUBJECTS data as the pages, so it can never fall out of date. 42 URLs.
- `app/robots.ts` — allows crawling, points at the sitemap, disallows private pages.
- Login/register/dashboard/forgot-password marked `noindex`.
- Open Graph tags — matters more than search here, since students share links in group chats.
- `app/components/StructuredData.tsx` — JSON-LD marking topics as GCSE `LearningResource`. Uses `dangerouslySetInnerHTML`, which is safe here ONLY because every value comes from our own content files, never user input.

**Still blocking a full launch with accounts:** the JSON file store. Login must stay off, or `app/lib/users.ts` must be migrated to Postgres (Neon or Supabase). Everything else was built so only that one file needs rewriting.

**Reality check on Google:** deploying doesn't put you in search results. Search Console verification + sitemap submission, then days-to-weeks to appear and months to rank for competitive terms. Early users will arrive from shared links, not search.

## Roadmap (rough order)

1. Decide overall architecture (routing structure for subjects/topics)
2. Design look & feel (colours, layout, typography)
3. Build homepage
4. Add GCSE subjects (data + pages)
5. Subject/topic pages
6. Revision tools: flashcards, notes, quizzes
7. Polish UX
8. Deploy

## Open decisions (not yet made)

- ~~Which GCSE subjects to launch with?~~ → Computer Science, Maths, English (from Matthew's homepage sketch)
- Site name decided: **Revision Lab**
- Login/Register button exists in the UI but does nothing yet — real accounts are a big job (needs a backend), park it for now
- Where subject/topic content lives — hardcoded in code, JSON/Markdown files, or a database? (leaning towards simple data files to start, database later if needed)
- Styling approach: plain Tailwind utility classes vs. a component library?
