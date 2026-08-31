# Project Notes — Revision Lab (GCSE revision website)

## Playing the live quiz properly, and a name filter (2026-08-31)

Matthew: "just try this whole live quiz hosting yourself and look for bugs and
problems in it... take as much time as you want and make sure everything is
great," plus "can you please deny the access for any swear words or dirty
words in the names?" So: an actual played game rather than a code read — a
dev server, two real browser contexts, a host and players, all ten questions
through to the final leaderboard, then a pass of deliberately hostile inputs.

**FIRST, WHAT ALREADY WORKED**, checked rather than assumed, so it's on record:
a full ten-question two-player game runs start to finish; the 30-character cap
on guest names holds; `<img src=x onerror=...>` in a name is escaped and
rendered as literal text (React's default, verified with a real flag on
`window`, not taken on trust); a nonexistent room code, a room that's already
started, answering twice and answering after the reveal are all refused with
a sentence a human can read; refreshing mid-game keeps a player's identity;
and "End quiz early" genuinely ends it for everyone (an earlier run suggested
it didn't — that was a bad selector in the test, not a bug in the site).

**Bug 1 — players got 500s in a real game, and it was the file store tearing.**
Two players answering seconds apart produced `QUIZ_FILE_CORRUPTED` on both
their screens. `writeFile` is not one action: it truncates the file, then
writes. A poll landing in that gap reads half a JSON document. With every
screen polling `data/quiz.json` every 1.2 seconds and every answer being a
read-modify-write of it, the gap gets hit constantly. New `atomicWrite.ts`
writes to a temporary file beside the target and `rename`s it over — one
action the OS can't split, so a reader gets the whole old file or the whole
new one. Applied to quiz.ts, clans.ts AND users.ts, which all had the
identical line; `users.json` holds accounts, so that one mattered most even
though the quiz is what exposed it. Measured with a control rather than
asserted: 1800 concurrent reads against the old way tore **607 times**,
against the new way **0**. Live-site behaviour is unchanged either way —
Supabase was never affected — but this is what Matthew hits every time he
runs the site on his own laptop, which is most of the time.

**Bug 2 — a removed player was never told, and didn't know.** The host's ✕
removes someone and the host's own lobby updates correctly. The removed
player's screen carried on saying "You're in! 🎉" and listing the players
still in the room, indefinitely: they'd wait for a game they weren't in, and
find out only when the quiz started and their answers had nowhere to go —
the same shape of silence the earlier "believing you'd answered when you
hadn't" fix already went after. `PlayQuizScreen` now checks its own id
against the room's player list and says so plainly, with a "Join again"
button. It updates on the ordinary poll, no refresh needed.

**Bug 3 — two people could both be "Sam".** Both got in, and the lobby and
every leaderboard afterwards showed "Sam" twice with no way to tell them
apart. A guest is now asked for a different name (they typed it, the box is
right there — this is what Kahoot does); a logged-in player, whose name comes
from their account and isn't editable from the join screen, gets a number
appended instead, because refusing them would be a dead end with no way out.
Case-insensitive, so "sam" doesn't sneak past "Sam".

**The name filter, and the trap it walked into first.** New `cleanName.ts`,
zero imports for the same reason `quizConfig.ts` has none. It squashes a name
to bare letters (accents off, leetspeak mapped back, spaces and punctuation
removed) so "f u c k", "f.u.c.k", "sh1t" and "@ss" all collapse to the word
they're hiding, and matches rude words as patterns that tolerate repeated
letters, so "fuuuck" is caught too.

The first version of it **blocked Jason, Ashley, Chase, Cassie and Cassius**.
That is the Scunthorpe problem, and the file's own header comment warned
about it before the code went and did it anyway — the cause was squashing
repeats out of the NAME as well as the word, which shortens "ass" to "as"
and "boob" to "bob". Caught only because the test suite checks 200+ real
first names and surnames rather than just checking that swear words fail.
Fixed by tolerating repeats in the pattern instead, dropping the bare "ass"
root in favour of the compounds people actually use as insults (plus "arse",
which a UK classroom would type anyway and which carries no such risk), and
matching the genuinely ambiguous short words only as WHOLE words — so "a$$"
and "dumb ass" are blocked while Cassie is not. There's also a list of
innocent carriers (class, bass, assassin, analysis, Hancock, Cockburn,
Dickens, shiitake, Pakistan, Saturday, flagship, Bagshaw…) stripped out
before anything is searched for. 345 checks: every obfuscation blocked, every
real name allowed.

Wired in at the three places a name enters the site: guest names on the quiz
join form, clan names (the most public text on the site — it shows in the
browse list to everyone), and account names at registration. Checking it at
registration is what lets the quiz trust a logged-in player's name without
re-checking something they can't edit from there.

**Verified:** `npm run check` clean (tsc, eslint --max-warnings=0, 87,603
content checks, 57 security checks); a full ten-question two-player game with
zero console errors; every fix above re-confirmed in a real browser (rude
names refused, ordinary names admitted, duplicates refused, the removed
player told, no corruption under five concurrent players). Throwaway tests
deleted afterwards.

**Changed:** `app/lib/atomicWrite.ts` (new), `app/lib/cleanName.ts` (new),
`app/lib/quiz.ts` (atomic write, duplicate-name resolution),
`app/lib/quiz-actions.ts` (profanity check, NAME_TAKEN message),
`app/lib/clans.ts` + `app/lib/users.ts` (atomic write),
`app/lib/clan-actions.ts` + `app/lib/actions.ts` (profanity check),
`app/quiz/play/[code]/PlayQuizScreen.tsx` (removed-player screen).

## Bug hunt: the spaced-repetition review page earned zero credit for reviewing (2026-08-29)

Matthew asked for a fresh bug hunt, no particular area named. Picked
spaced-repetition flashcards (`/review`) since it hadn't had a dedicated
pass since it shipped on 2026-08-18, and read every file involved fresh —
`flashcard-review.ts`, `flashcard-actions.ts`, `ReviewQueue.tsx`,
`Flashcards.tsx`, `review/page.tsx` — the same "reason about it, then
verify before fixing" approach every earlier bug hunt here has used.

**The actual review page did the reviewing, but none of the crediting.**
`Flashcards.tsx` (the ordinary browsing deck) has always done TWO things
when a card is flipped and judged: `reviewFlashcard` schedules it for
spaced repetition, and `recordFlashcard` logs a `kind: "flashcard"`
activity row — the row `getProgress`'s `flashcardsReviewed` count, the
"Flashcard fanatic" badge ("Review 100 flashcards"), streak-day activity,
and flashcard XP (5 per card) all read from. `ReviewQueue.tsx` — the
`/review` page, i.e. actually working through what's DUE — only ever
called `reviewFlashcard`. It never called `recordFlashcard` at all. The
result: doing your due spaced-repetition reviews, arguably the single
most "using this feature correctly" behaviour on the whole site, earned
no XP, didn't move the streak, didn't count toward "flashcards reviewed"
anywhere, and could never earn Flashcard fanatic — while idly flipping
through an ordinary deck without ever testing yourself got full credit
for all of it.

**Fixed** by calling `recordFlashcard` from `ReviewQueue.tsx` too, on the
same "first reveal only" moment `Flashcards.tsx` already uses — guarded by
a `countedIndex` so flipping a card back and forth doesn't count it twice.
`Flashcards.tsx` needs a `Set` for this because Shuffle can put a
previously-seen card into a fresh position (see its own long comment on
why); `ReviewQueue` never reorders or revisits a card, so a single number
tracking "which index already counted" is enough — one card at a time,
strictly forward.

**Verified**: `npm run check` (tsc, eslint --max-warnings=0, content,
security) all clean. Couldn't exercise this through a real browser session
against a live server the way earlier bug hunts here have — both
`recordFlashcard` and the due-card list it would need to actually show a
queue (`getDueFlashcards`) require Supabase, and faking that would mean
also mocking users/clans/quiz's own Supabase calls (they all flip to
"live" mode off the same two env vars) just to test one small counting
fix. Instead simulated the exact flip/guard state machine standalone — 8
checks (a first flip records once with the right subject/topic; flipping
back doesn't record; re-flipping the same card forward again doesn't
double-count even after several more back-and-forths; moving to a new
card lets it record independently, with ITS OWN subject/topic, not the
previous card's; the double-flip guard re-arms per card) — all passed,
then deleted.

**Changed**: `app/components/ReviewQueue.tsx` only.

## "The clan I made didn't save" — almost certainly the same missing-column shape as before (2026-08-29)

Matthew: a clan he created didn't save. Couldn't check his live Supabase
directly from here, but the code points squarely at a repeat of the
2026-08-27 incident ("A missing schema migration..." entry below) rather
than a new bug.

**The likely mechanics.** `createClan`'s own INSERT never touches
`heir_id` (there's nothing to write yet — see its own comment), so it
would succeed even against a `clans` table missing that column. But
`createClanAction` redirects straight to `/clans/[id]`, whose page calls
`getClanById` — and THAT does `select=...,heir_id` (it's in
`CLAN_SELECT_COLUMNS`, used for every ordinary read). If the live table
never got the `heir_id` column added when the 2026-08-27 leadership-handover
feature shipped, that read fails, `getClanById` was returning a bare
`null` with nothing logged, and `/clans/[id]/page.tsx` turns a `null` clan
into `notFound()` — a genuine 404. From Matthew's side: click "Create,"
land on a 404 page, look for the clan, it's not there. Very likely still
sitting in the database the whole time.

**Asked Matthew to re-run `CLAN_SETUP.sql`** in Supabase's SQL editor —
it's idempotent (every column add is `if not exists`), so running it again
changes nothing if the column is already there, and fixes exactly this if
it isn't. Waiting to hear back on whether that was it.

**Fixed regardless of the outcome: the actual silent-failure gap.**
`getClanById`, `getUserClan`, `getClanMemberIds`, and the initial lookups
in `joinClan`, `updateClanBanner`, and `designateClanHeir` all did
`if (!res.ok) return null / [] / {ok:false,...}` with NO logging —
`searchClans`, right above `getClanById` in the same file, already had
the correct version of this (`console.error` before returning). A request
that outright FAILED (bad schema, an expired key, Supabase down) was
indistinguishable from a legitimate "no such row" everywhere except that
one function. Added the same `console.error(status, body)` to all six —
behavior is unchanged (still returns the same fallback value to the
caller), but the NEXT time this shape of bug happens, the real Postgres
error shows up in Vercel's function logs immediately, rather than needing
another round of temporarily hacking a debug line into the catch block
and reverting it (which is what the 2026-08-27 fix had to do, by its own
account).

`npm run check` (tsc, eslint --max-warnings=0, content, security) all
clean. Changed: `app/lib/clans.ts` only. Not yet shipped — his computer
is still not connected.

## A round of function-and-design improvements to the quiz, after the redesign (2026-08-29)

Matthew liked the redesigned answer buttons and asked me to think of any
other ways to improve the quiz's function and design. Went back through
every quiz file with that specific question in mind, the same "read it
fresh, reason about what's actually missing or fragile" approach the
earlier bug hunt used. Three real fixes, three additive pieces of polish,
and one thing (sound) checked with Matthew first since it's genuinely
subjective rather than a clear improvement — he said yes.

**The real fix, and the one that mattered most: a stuck or closed host tab
could freeze the game for everyone else.** `HostQuizScreen.tsx`'s own
countdown effect is what moves a question from "question" to "reveal"
once the 20 seconds are up — but that only runs inside the HOST'S one
specific browser tab. Close the laptop lid, background the tab, lose the
connection, and nothing else was ever going to call
`revealCurrentQuestion` — every player's own device would sit there
politely polling a question that had already expired, forever. Fixed with
a new `autoRevealIfExpired` in `quiz.ts`, called from `getQuizView` —
"the one function everyone's screen polls" per its own comment — so
whichever device happens to poll first after the deadline (host or
player, doesn't matter) is the one that flips the phase for the room.
Purely time-based against the session's own server-recorded
`phaseStartedAt`; nothing a player's device sends or controls. Reveal
itself stays host-paced on purpose — this only generalises the ONE
transition that already had a hard deadline attached. Verified with 7
throwaway checks compiling the real `quiz.ts` (a fresh question phase is
left alone, an expired one flips to reveal, a session already past
"question" is never touched, a missing timestamp doesn't crash, and the
flip genuinely persists to `data/quiz.json` and not just the return
value) — all passed, then deleted.

**Two smaller fixes, both "tell someone before the server has to."**
`HostSetupForm.tsx` only checked topic COUNT client-side; a topic
combination that totals under `MIN_QUESTIONS` (rare, but the code's own
comment already flagged it as possible) only failed after a full submit
round-trip. The "Create the room" button and its helper text now also
check the real question total, same as the server does. `JoinQuizForm.tsx`
had the same shape of gap — the button only checked the room code's
length, even though `joinQuizAction` already rejects an empty guest name
server-side — so it's now disabled until a guest has actually typed
something, mirroring what the server was already enforcing.

**Three additive pieces of polish, each built on what was already there.**
A "Copy invite link" button on the host's lobby screen — the join page
already reads a `?code=` query param to pre-fill the room code (its own
comment says so — "handy for a QR code or a link shared straight from the
host's own lobby screen"), but nothing ever actually offered that link.
Every player now gets a small coloured "avatar" — one of the same six
shapes and colours the answer buttons use, picked by hashing their own
player id (`quizAvatar.ts`) so it's stable without storing anything new —
shown next to their name in both lobby chip lists and every leaderboard
row (`QuizPlayerAvatar.tsx`), tying the whole redesign together rather
than leaving it confined to the answer buttons. And the reveal-phase
tally, previously only a number in the corner, now also draws as a
proportional fill bar behind each choice (`QuizChoiceButton.tsx`'s new
`tallyFraction` prop) — readable at a glance from across a room, not just
up close.

**Sound — checked with Matthew first, since a classroom running this on a
shared screen might genuinely not want noise, unlike the changes above.**
He said yes. `quizSound.ts` synthesises everything with the Web Audio API
that ships in every browser — NO audio files, no new packages, the same
"read every line, nothing hidden in a dependency" choice this codebase
already makes for password hashing and the Supabase client. A tick for the
last five seconds of a question's countdown (once per second, not once per
250ms internal timer tick — see the ref guard at each call site), a
correct/wrong chime the instant a player's own answer is revealed, and a
four-note fanfare when the game ends, on both the host's screen and every
player's own device. A `QuizSoundToggle` (🔊/🔇) sits top-right on both
screens, backed by the same reactive-localStorage pattern the theme toggle
already uses, so muting it is remembered and never fights the
`prefers-reduced-motion`-respecting confetti that was already there.

**Verified:** `npm run check` (tsc, eslint --max-warnings=0, content,
security) all pass clean. Screenshots re-taken with the same seeded-session
technique confirm the avatars, copy-link button, sound toggle icon, and
tally bars all actually render — not just compile.

**Changed:** `app/lib/quiz.ts` (`autoRevealIfExpired`), `app/lib/quiz-actions.ts`
(wired into `getQuizView`), `app/lib/quizSound.ts` (new),
`app/quiz/host/new/HostSetupForm.tsx` (question-count gating),
`app/quiz/join/JoinQuizForm.tsx` (guest-name gating),
`app/components/quiz/QuizChoiceButton.tsx` (`tallyFraction` fill bar),
`app/components/quiz/QuizLeaderboard.tsx` (avatar per row),
`app/components/quiz/QuizPlayerAvatar.tsx` (new),
`app/components/quiz/quizAvatar.ts` (new),
`app/components/quiz/QuizSoundToggle.tsx` (new),
`app/quiz/host/[code]/HostQuizScreen.tsx` (copy-link, avatars, tick/fanfare
sound, sound toggle, tally-fraction wiring),
`app/quiz/play/[code]/PlayQuizScreen.tsx` (avatars, tick/chime/fanfare
sound, sound toggle). Not yet shipped to Matthew's own machine — see the
note at the bottom of the previous two entries; his computer still wasn't
connected when this was done.

## Screenshots, then a redesign so the answer buttons stop reading as Kahoot (2026-08-29)

Matthew asked for a few screenshots of the quiz feature's design. The
dev server here kept timing out on real form submissions partway through
registration and room creation (looks like Turbopack cold-compile delay on
first-hit routes in this sandbox, not an app bug — never reproduced against
the live site), so rather than keep fighting flaky clicks, I seeded a few
quiz sessions directly into `data/*.json` in a throwaway local copy — one
per screen state (empty lobby, lobby with players, live question, reveal,
final leaderboard) — built a matching signed session cookie by hand using
`session.ts`'s own HMAC algorithm, and used Playwright purely for
navigation and screenshotting against the real, unmodified components. That
scratch data never touched Matthew's own machine or got anywhere near git.

Looking at the screenshots together, the answer buttons were a much closer
copy of Kahoot than intended: the exact same four colours
(`#e21b3c`/`#1368ce`/`#d89e00`/`#26890c`) and the exact same shapes, in the
exact same order (triangle/diamond/circle/square). Matthew asked for it to
stop looking like a straight rip-off, so `quizChoiceStyles.ts` now uses six
colours pulled from `subjects.ts`'s own accent palette instead (the same
indigo/rust/teal/fuchsia/lime/slate already used for Science, Maths,
Business, Chemistry, Biology, and Physics elsewhere on the site) paired
with six brand-new shapes drawn in `QuizShapeIcon.tsx` — hexagon, bolt,
droplet, ring, plus, wave — none shared with Kahoot's set. `QuizChoiceButton.tsx`
also puts each icon inside its own translucent white "coin" instead of
sitting bare on the flat colour, and rounds the corners a little softer
(`rounded-[1.75rem]`) than before. The colour+shape pairing itself (so
colour-blind players can still tell answers apart, especially during
reveal) is unchanged — only which colours and which shapes.

**Verified:** `npm run check` (tsc, eslint --max-warnings=0, the content
checker, the security checker) all pass clean against the new files —
nothing here touches content or auth, only three small quiz-UI files, so
the content/security checks passing is expected rather than a deep test of
this specific change. Re-ran the same seeded-session screenshot technique
afterwards to confirm the new colours and shapes actually render correctly
across every phase (question, reveal with correct/wrong highlighting,
faded-out wrong answers) rather than just checking it compiles.

**Changed:** `app/components/quiz/quizChoiceStyles.ts` (new palette +
shape names), `app/components/quiz/QuizShapeIcon.tsx` (six new hand-drawn
SVG shapes), `app/components/quiz/QuizChoiceButton.tsx` (icon now sits in a
translucent circle, softer corner radius). Not yet shipped to Matthew's own
machine — see the note at the bottom of the previous entry; his computer
still wasn't connected when this was done.

## Quiz bug hunt — a real security gap, and a silent-failure bug (2026-08-29)

Matthew asked me to review the just-shipped live quiz feature and improve
whatever I could, since he "kinda looks alright, but I don't really know
how to check it properly." Read through every quiz file fresh, the same
"reason about it, then reproduce before fixing" approach the earlier deep
bug hunts on this site used. Five real things found and fixed, in order of
how much they mattered.

**Room codes could be brute-forced — the single biggest issue.** Login
attempts and clan-join passwords are both rate-limited; joining a quiz by
room code had NO limit at all. That matters more here than it sounds,
because unlike a clan (a stable target plus a separate password), a quiz
room code IS the whole secret — there's nothing else standing between a
stranger and a live room. With only 900,000 possible 6-digit codes and no
throttle, a script could scan the entire space and drop into any open
room. Fixed with a new per-IP-only limiter in `throttle.ts` —
`checkQuizJoinAllowed`/`recordFailedQuizJoin`, same tiered shape and
numbers as clan-join (6 free guesses, then 1/5/15-minute lockouts), but
keyed on IP alone rather than IP-plus-target, since every wrong guess is a
*different* target — there's no stable "room" to also count against. Only
a genuinely wrong code (`NOT_FOUND`) counts as a failure; a correct code
someone was actually handed doesn't cost them anything. Verified with a
throwaway test compiling the real throttle.ts and stubbing `next/headers`
(the same technique `check-security.mjs` already uses for login's own
limiter) — 8 checks: fresh IP allowed, 5 wrong guesses free, the 6th locks
it, a *different* IP is unaffected, persistent guessing caps at 15
minutes. All passed, then deleted.

**A player could believe they'd answered and actually hadn't.**
`PlayQuizScreen.tsx`'s answer button turned "selected" the instant it was
clicked and never once looked at whether `submitAnswerAction` actually
succeeded. A countdown ending a beat before the tap landed, a network
hiccup, anything — the screen looked identical to a real, scored answer:
no error, no correction, silence, and 0 points with no way to ever find
out why. Fixed: the result is checked now. A genuine failure reverts the
optimistic selection and shows why ("Too slow — the question moved on
before that got through," or a generic retry message); `ALREADY_ANSWERED`
(most likely a doubled tap racing itself) is left alone, since a real
answer already exists and the next poll's `myAnswer` will show it.

**The host saw raw internal error codes.** `joinQuizAction` already mapped
its failure codes to human sentences; `startQuizAction`/`revealAction`/
`advanceAction` never got the same treatment, so any host-side hiccup
printed the literal text `WRONG_PHASE` or `NOT_HOST` onto the screen.
Fixed with a shared `hostActionErrorMessage()` mapping, the same pattern
`joinQuizAction` already used. Also fixed while there: once shown, that
error banner never cleared on a later SUCCESSFUL action, so one early hiccup
stayed on screen for the rest of the game even after everything recovered
fine — each handler now clears it before trying again.

**Two numbers were duplicated as literals waiting to drift.** `MIN_TOPICS`/
`MAX_TOPICS` existed separately in both `quiz-actions.ts` (the real
server-side enforcement) and `HostSetupForm.tsx` (the client-side UI copy
and disabling logic) — exactly the "same fact, two places" shape this
project has been bitten by before (the 30-day account-deletion window is
the standing example). Same for `MAX_QUESTIONS`, hardcoded as `20` inside
`quiz.ts` and separately hand-typed as the literal "20" in the form's
helper text. All three now live in one new file, `app/lib/quizConfig.ts`
— deliberately with ZERO imports of its own, for the identical reason
`chipStyles.ts` exists: `quiz-actions.ts` is a `"use server"` file (which
can only export functions, not constants) and `quiz.ts` pulls in
server-only `node:fs`/`node:crypto` code that a Client Component has no
business bundling. Importing plain numbers from either would have risked
quietly repeating the exact dark-mode-toggle bundling bug from 2026-08-14.

**A topic combination producing too few real questions used to still
create a dead database row.** `createQuizAction` called `createQuizSession`
(which writes to the database) FIRST, then checked afterwards whether the
result had any questions — so a combination that failed the check had
already left an orphan session behind, despite the code's own comment
claiming otherwise. Also, the check was only "zero questions," which let a
technically-valid but silly one-or-two-question "round" through. Fixed by
exporting `buildQuestionSet` from `quiz.ts` and having `createQuizAction`
build and check the question count BEFORE calling `createQuizSession` at
all (which now takes the already-built `questions` array as a plain
argument instead of building it internally) — nothing is written unless
there are at least `MIN_QUESTIONS` (3) real questions to show.

**Also considered and deliberately left alone:** a rare TOCTOU window
where an answer submitted in the last few milliseconds before a host's
"reveal" click could theoretically land just after the phase officially
changed — vanishingly unlikely and low-stakes for a casual game, not worth
the added complexity of a stricter guard. And local-file-backend races
under concurrent writes (two guests joining at literally the same instant
on a laptop with no Supabase configured) — the live site always uses
Supabase, where the real constraints (`unique(session_code, user_id)`, the
`quiz_answers` composite primary key) already do the real work; the local
file store is a laptop dev convenience, not what real players ever touch.

**Two open product questions raised with Matthew rather than guessed at —
and he said yes to both:** should the host be able to remove a player from
the lobby before starting, and should the host have a way to end a game
early if it needs abandoning partway through. Both built:

**Remove a player, lobby only.** A small ✕ next to each name in the lobby
player list, host-only (this whole screen already is), no confirmation
step — removing someone before a game has even started is exactly the
low-stakes, easily-undone (they can just rejoin with the code) action
`LeaveClanButton`'s own comment already argues doesn't need one.
Deliberately refuses once the game has actually started
(`removePlayer(...)` returns `WRONG_PHASE`) rather than extending into a
live game, where removing someone raises a real question this doesn't try
to answer — what happens to their existing answers and score — that a
pre-start removal never has to, since nothing has been recorded for
anyone yet.

**End the quiz early, from question or reveal.** A quiet "End quiz early"
link below the question, host-only, that jumps straight to the final
leaderboard using whatever answers already exist — nothing is discarded,
an early-ended game simply has fewer questions counted than a full one
would. THIS one gets a confirmation step, unlike removing a lobby player —
a stray tap here ends the game for every other player in the room, not
just something about the host's own account — but still not a native
`confirm()` dialog: the same "click reveals the real, serious step" idiom
`DeleteAccountForm` already uses for account deletion (see
`AccountForms.tsx`), reused rather than reinvented.

`checkHostAction` (the shared three-part "does this exist, is this really
the host, is it in the right phase" checker every host action already
funnelled through) now accepts either one status or a short list of
them — needed because ending the quiz is valid from EITHER "question" or
"reveal", and duplicating the whole checker into a second copy for that
one case would have been exactly the kind of drift this review was
already fixing elsewhere.

Verified: `tsc --noEmit` and `eslint --max-warnings=0` clean across the
whole project, `check-content.mjs` (87,603 checks, untouched) and
`check-security.mjs` (57 checks) both pass, plus four throwaway
functional tests — the throttle test above (8 checks), a full re-run of
the original two-player end-to-end game simulation against the refactored
`createQuizSession` signature (12 checks), one confirming
`buildQuestionSet`/`createQuizSession` still work with `MAX_QUESTIONS`
moved into the shared config file (3 checks), and one covering both new
host controls (11 checks — a non-host blocked from removing a player or
ending the quiz, a removed player actually gone while the other is
untouched, removal refused once the game has started, ending early
actually reaches "finished" with the clock cleared, and ending an
already-finished quiz refused rather than silently no-op-succeeding) —
all passed, then deleted along with their compiled output.

New file: `app/lib/quizConfig.ts`. Changed: `app/lib/throttle.ts` (the new
quiz-join limiter), `app/lib/quiz.ts` (`buildQuestionSet` now exported,
`createQuizSession` takes a pre-built `questions` array, `MAX_QUESTIONS`
moved out, `checkHostAction` accepts a status list, new `removePlayer`/
`endQuizNow`), `app/lib/quiz-actions.ts` (the throttle wired into
`joinQuizAction`, friendly host-action error messages, the MIN_QUESTIONS
gate moved before the database write, new `removePlayerAction`/
`endQuizAction`), `app/quiz/host/new/HostSetupForm.tsx` (imports the
shared constants instead of its own copies), `app/quiz/host/[code]/
HostQuizScreen.tsx` (clears its error banner before each new action, the
remove-player ✕ and the end-quiz-early control), `app/quiz/play/[code]/
PlayQuizScreen.tsx` (actually checks whether an answer submission
succeeded).

## Live head-to-head quiz — a Kahoot-style multiplayer round (2026-08-27)

Matthew's ask, transcribed from voice and genuinely ambiguous in two places
that mattered enough to stop and ask about rather than guess: one host,
join by room code, questions shown one at a time (not all at once, so
per-question timing can actually be tracked), a final ranking by points,
points that reward both correctness AND speed, and — twice, for emphasis —
"make it a huge style... like Kahoot. People love that." **Needs
`QUIZ_SETUP.sql` run once in Supabase → SQL Editor** before this works on
the live site, the same pattern as every other feature that added a table.

**The literal request didn't fit the content that exists, so I asked rather
than reinterpreted it.** "Twenty questions... about one of the topics" only
works if a topic has 20 real multiple-choice questions — every topic on
this site has somewhere between 5 and 9. Rather than silently deciding
what to build (a shorter round? one topic stretched with repeats? pulling
from the whole subject instead?), I asked Matthew directly. His answers,
which shaped the whole feature: **the host picks 2–4 topics within one
subject** (not the whole subject, not one topic alone) to build a pool big
enough for up to 20 questions from; and **anyone with the room code can
join by typing a name, no account needed — guest join, like Kahoot** — a
logged-in player still gets real XP and progress recorded, a guest just
plays for the leaderboard with nothing persisted afterwards.

**What it does.** `/quiz` is the landing page (Host / Join). Hosting
(`/quiz/host/new`, login required) picks a subject and 2–4 of its topics;
`buildQuestionSet` pools every real multiple-choice question across just
those topics, shuffles it, and keeps up to 20 — capped by whatever the
chosen topics actually have, same honesty `revisionWeight` and the
past-paper duration already practise elsewhere on this site: a smaller
pool genuinely produces a shorter round rather than padding one out.
`/quiz/host/[code]` is the host's own screen — a big room code, then each
question shown full-screen with a live countdown, a "reveal" step showing
the correct answer and a running leaderboard, then the next question, then
final results. Anyone types the room code into `/quiz/join`, gives a name
(or plays under their real logged-in name), and answers from
`/quiz/play/[code]` on their own device — four to six shape-and-colour
coded answer buttons (never colour alone, for the same accessibility
reason icons already exist), never the host's screen.

**Scoring:** 1000 points for an instant correct answer, decaying to a
floor of 500 as the clock runs out, 0 for wrong or no answer — so getting
it right always beats getting it right slowly, but nobody who's correct is
ever punished down to nothing just for using the last available second.
Computed from `elapsedSeconds` measured against the SERVER's own clock and
`phaseStartedAt`, never trusted from whatever a player's own browser
reports its timing as — the same "never trust the client with a number
that decides a score" reasoning `recordStudyTime` already applies to
seconds spent studying.

**Live, but polling — not Realtime/WebSockets, and deliberately so.** Every
other "live-feeling" number on this site (clan leaderboards, progress,
test history) already works by "fetch the current state, show it," and
that's genuinely fast enough here too: the host's and every player's screen
poll a single shared `getQuizView` every 1.2–1.5 seconds, and each screen's
own on-screen countdown is computed LOCALLY from a shared `phaseStartedAt`
timestamp rather than pushed — so the timer itself never drifts just
because a poll landed a little late, and a poll interval was never in
tension with "the clock has to be accurate." The full, already-shuffled
question set is resolved once and stored as JSON on the session row at
creation time, not a re-derivable seed — the same reasoning as everywhere
else data is written once rather than recomputed: there's only ever one
true answer to "what is question 7," sitting in the row.

**A guest player is a genuine, documented trade-off, not an oversight.**
With no account, a guest has no session cookie to prove who they are —
their `playerId`, handed back once on joining, works as a bearer
capability: whoever holds it can act as that player for the rest of the
game. Fine for a casual classroom/friend-group game where everyone already
knows the room code; explicitly NOT the security model any account page on
this site uses, and said so in the code rather than left implicit.

**Progress recording had to happen on each player's OWN device, and here's
why that wasn't a choice.** `recordAnswer`/`recordTestCompletion` (the same
Server Actions ordinary practice and mock exams already use) can only ever
record against whoever's own session cookie is calling them — there's no
way for the host to record "on behalf of" someone else's account, by
design, the same boundary that keeps one person's login from touching
another's data anywhere else on the site. So `PlayQuizScreen.tsx` calls
them itself, from each player's own browser, the instant that question's
result is known — a logged-in player accumulates real XP and topic
coverage from a quiz exactly as if they'd answered those same questions in
ordinary practice; a guest's identical calls just quietly do nothing, per
`progress-actions.ts`'s own "not logged in: nothing to record against, not
an error" comment.

**One real bug caught by a functional test before it ever shipped:**
`buildQuestionSet` originally set a question's correct choice directly from
its `answer` field. Wrong — this site's own marking rule (documented at the
top of `Practice.tsx`) is that the correct choice is whichever option
matches the question's `accept` list under `normalise()`, not necessarily
identical text to `answer`. Fixed by extracting `normalise()` out of
`Practice.tsx` into a new, plain `app/lib/normalise.ts` (the original lived
in a "use client" file, which server-only `quiz.ts` has no business
importing from) and rewriting the correct-choice lookup to actually use it.
A 27-check throwaway test against the data layer caught this; a second,
32-check end-to-end throwaway test afterwards played two simulated players
through an entire game — join, a non-host blocked from starting/revealing,
double-answering blocked, correct scoring above the floor, wrong answers
scoring zero, advancing through every question to a real "finished" state,
and the final leaderboard correctly ranking the player who got everything
right above the one who got nothing right — all passed, then deleted along
with the throwaway compiled output before shipping.

**This codebase's stricter React Compiler lint rules
(`react-hooks/set-state-in-effect`, `react-hooks/purity`) shaped the two
screen components more than anything else did.** Both `HostQuizScreen.tsx`
and `PlayQuizScreen.tsx` poll on a timer and run their own once-a-quarter-
second countdown tick — exactly the kind of code that wants to call
`setState` directly inside a `useEffect` body, which this codebase's lint
config now forbids. The pattern that satisfies it, applied consistently
across both files: a poll's very first call is deferred via
`setTimeout(fn, 0)` rather than called directly, with `setInterval`
handling every call after that; `Date.now()` is only ever read inside a
`setInterval`-invoked tick callback, never during render; and resetting a
piece of state when a prop-like value changes (the countdown when leaving
the question phase, a player's selected answer when the question index
moves on) uses React's own "adjust state during render" idiom —
comparing against a tracked previous value directly in the render body —
the exact same pattern `Practice.tsx` already established for a different
reset, rather than an effect that calls `setState` in its own body.

**Verified:** `tsc --noEmit` and `eslint --max-warnings=0` clean across the
whole project (not just the new files); `check-content.mjs` (87,603 checks,
content genuinely untouched) and `check-security.mjs` (57 checks) both
pass; plus the two throwaway functional tests described above, both
deleted afterwards along with their compiled output and local test data.

New files: `QUIZ_SETUP.sql`, `app/lib/quiz.ts`, `app/lib/quiz-actions.ts`,
`app/lib/normalise.ts`, `app/components/quiz/quizChoiceStyles.ts`,
`app/components/quiz/QuizShapeIcon.tsx`,
`app/components/quiz/QuizChoiceButton.tsx`,
`app/components/quiz/QuizLeaderboard.tsx`,
`app/components/quiz/QuizConfetti.tsx`, `app/quiz/page.tsx`,
`app/quiz/quizStorage.ts`, `app/quiz/host/new/page.tsx`,
`app/quiz/host/new/HostSetupForm.tsx`, `app/quiz/host/[code]/page.tsx`,
`app/quiz/host/[code]/HostQuizScreen.tsx`, `app/quiz/join/page.tsx`,
`app/quiz/join/JoinQuizForm.tsx`, `app/quiz/play/[code]/page.tsx`,
`app/quiz/play/[code]/PlayQuizScreen.tsx`. Changed:
`app/components/Practice.tsx` and `app/components/MockExam.tsx` (now
import `normalise` from the new shared file instead of each other),
`app/components/SiteFooter.tsx` (a "Live quiz" link, reachable logged
out), `app/dashboard/page.tsx` (a "Host a live quiz" card), `app/robots.ts`
(added `/quiz` to the disallow list, matching every noindex quiz page's own
metadata).

## Clan leadership can now be handed over (2026-08-27)

Closes the gap flagged when the Leader badge shipped earlier today: "if
the creator ever leaves their own clan, nobody currently inherits the
leader role." Matthew's design, verbatim: "let's let the leader choose
the person, but by default, it should be the second person who joins the
clan." Built exactly that — two mechanisms, for two different moments.

**By choice, any time.** A "Make leader" button now appears next to every
OTHER member's row on the leaderboard, visible only to the clan's current
leader. One click hands `created_by` straight to that member — no
confirmation dialog, same low-stakes reasoning `LeaveClanButton`'s own
comment already gives for skipping one there.

**Automatically, if nobody ever chose.** `leaveClan` now checks whether
the person leaving IS the clan's leader before removing their membership,
and if so hands leadership to whoever joined earliest among everyone else
— "the second person to join," in the ordinary case where leadership was
never transferred by hand. A clan where the leader was the only member
has nobody to hand off to; `created_by` is simply left as it was, same as
this always behaved before today.

**Made "who joined when" a real, ordered fact rather than an assumption.**
`getClanMemberIds` previously returned members in whatever order storage
happened to hand them back — nothing depended on that order meaning
anything, so nothing had ever needed it to. Both the automatic handover
above and a new "Next in line to lead" label on the leaderboard (shown
under whoever would inherit leadership by default) depend on it actually
being join order, so it's now sorted earliest-first everywhere it's read
— `order=joined_at.asc` on the live database, an explicit sort on the
local-file backend.

**No SQL to run this time** — `created_by` and `joined_at` already
existed as ordinary columns on the live tables; this is pure application
logic on top of data that was already there.

Verified: `tsc --noEmit` and `eslint --max-warnings=0` clean,
`check-content.mjs` (87,603 checks, untouched) and `check-security.mjs`
(57 checks) both pass, plus a throwaway 15-check functional test against
the local-file backend — join order, a non-creator blocked from
transferring, transferring to a non-member blocked, transferring to
yourself blocked, a successful explicit transfer, the automatic handover
correctly picking the earliest remaining joiner when the leader leaves,
an ordinary member leaving never touching who's the creator, and the
very-last-member-leaving case correctly leaving `created_by` untouched —
all passed, then deleted.

New: `transferClanLeadership` and the automatic-handover logic inside
`leaveClan` (`app/lib/clans.ts`), `transferLeadershipAction` (`app/lib/
clan-actions.ts`). Changed: `getClanMemberIds` (now join-ordered),
`app/clans/[id]/page.tsx` (the "Make leader" button and "Next in line"
label).

## Past paper mode — a longer, full-length sibling of the quick test (2026-08-27)

Matthew, after seeing the `/ideas_1` competitor research: "just do past
paper style simulation... possible for now. I trust you with that" —
picking idea #8 (of 8) and giving broad latitude on the details, same as
the exam-board picker earlier. `/subjects/<subject>/past-paper` — new,
alongside the existing `/subjects/<subject>/exam` ("{Subject} test").

**Worth being upfront about: this substantially overlaps with a feature
that already existed.** The 2026-08-18 "mock exam" entry already built
exactly what idea #8 describes — a timed, mixed-topic set pulled from
across a whole subject rather than one topic at a time — and it was
renamed to "{Subject} test" shortly after shipping. Rather than silently
rebuild something close to a duplicate, or ship nothing and just point
this out, the honest middle path: keep the existing quick test exactly as
it is (still useful — a five-minute check), and add a genuinely LONGER,
more paper-like sibling next to it, reusing the same battle-tested
`MockExam` component rather than writing a second one.

**What's actually different:** up to 50 questions instead of 20, and 90
seconds allowed per question instead of 60 (a full paper mixes in more
extended, self-marked answers, not just short factual recall) — both
still explicitly NOT claiming to reproduce any specific exam board's real
paper timing, the same caution `revisionWeight`'s own comment in
subjects.ts applies to its workload ranking; 14 subjects across 4 boards
genuinely differ too much to state one figure as fact without risking
telling someone the wrong thing about their own exam. The duration is
computed from however many questions the pool and cap actually produce
(`questions.length × 90`), not a fixed number — a smaller pool (one year
ticked, or a subject with less written so far) correctly produces a
shorter paper rather than the same clock regardless.

**Shared code, not copied code.** `collectQuestionPool` and
`normalizeQueryValue` — both needed identically by the new page — were
pulled out of `exam/page.tsx` into a new `lib/examPool.ts` rather than
pasted a second time; `exam/page.tsx` itself is otherwise completely
unchanged, still builds its 20-question/20-minute test exactly as before.

**One real near-bug caught before shipping:** `MockExam`'s finish screen
had a hardcoded "Try another {subject} test" button linking to `/exam` —
fine for the test it was built for, but finishing a 50-question past paper
would have landed on a button advertising the SHORT version instead of
another past paper, a genuine bait-and-switch. Fixed with two new
optional props, `retryHref`/`retryLabel`, defaulting to the exact original
behaviour (so the existing test page needed zero changes) and overridden
by the new past-paper page to point back at itself.

Verified: `tsc --noEmit` and `eslint --max-warnings=0` clean,
`check-content.mjs` (87,603 checks, content untouched) and
`check-security.mjs` (57 checks) both pass, plus a throwaway functional
smoke test (11 checks — the pool genuinely pulls real questions with
topic tags attached, a single-year pool is a proper subset of the full
one, the question cap is respected, and the duration math scales with the
actual question count rather than staying fixed) all passed, then
deleted.

New files: `app/lib/examPool.ts`, `app/subjects/[subject]/past-paper/
page.tsx`. Changed: `app/components/MockExam.tsx` (the `retryHref`/
`retryLabel` props), `app/subjects/[subject]/exam/page.tsx` (now imports
the shared pool helpers instead of defining its own copy), `app/subjects/
[subject]/page.tsx` (a new "Full past paper" button next to "Try a
{subject} test").

## A missing schema migration, and a "Leader" badge for the clan's creator (2026-08-27)

**Bug: creating a clan failed with "Something went wrong."** Not a code
bug — the live Supabase database was simply missing the three columns the
resize/reposition feature above needs (`banner_icon_scale`,
`banner_icon_offset_x`, `banner_icon_offset_y`). Diagnosed properly rather
than guessed at: the create-clan action's catch block temporarily surfaced
the *real* error to the screen (the exact same move `PROJECT_NOTES.md`
already records for the 2026-08-09 login-timing bug — "the real error was
caught and discarded... turned it into a one-line answer"), which showed
Postgres's actual complaint: `PGRST204 — Could not find the
'banner_icon_offset_x' column of 'clans' in the schema cache`. That
confirmed the fix needed was running the updated `CLAN_SETUP.sql` in
Supabase, not a code change — the debug text was reverted immediately
once that was confirmed (`d1d71c4`), so nothing user-facing leaks internal
error detail going forward.

**Leader badge.** Matthew: "make the curator the owner of the [clan]...
only he can change stuff, and he has the leader name under his name at
the clan area." The "only the creator can change it" half was already
true and needed no new code — `updateClanBanner` already checks
`clan.createdBy` and rejects anyone else (see the resize feature above) —
so this was purely the visible half: a small amber "👑 Leader" badge now
appears directly under the clan creator's name on their row in the
`/clans/[id]` leaderboard, wherever that row happens to rank. Deliberately
does NOT affect ranking — the badge says who OWNS the clan, not who's
best at it, and conflating the two would reward making a clan over
actually revising in it.

**One real limitation worth knowing about, not yet fixed because it
wasn't asked for and needs a real design decision:** `created_by` never
changes once a clan exists, including if the creator later leaves their
own clan via "Leave" — nothing currently transfers leadership. Today that
would mean nobody left in the clan can edit its banner any more (the
Leader badge also just wouldn't appear on anyone, since the row only
renders for current members). Worth raising with Matthew before it
actually happens to someone, rather than after.

`tsc --noEmit`, `eslint --max-warnings=0`, and `check-security.mjs` (57
checks) all clean. Changed: `app/lib/clan-actions.ts` (temporary debug,
reverted), `app/clans/[id]/page.tsx` (the Leader badge).

## Clan banners: resize/reposition the icon, plus 7 more icons (2026-08-27)

Matthew, right after the centering-bug fix above: "make us able to resize
it and move it around... add a few other icons, which will include a
microphone, a guitar... and another five stuff that can relate to small
stuff in any way." **Needs the updated `CLAN_SETUP.sql` re-run in
Supabase** — it's an idempotent `alter table ... add column if not exists`
block, safe against the live table with real clans already in it, but
without it the three new columns don't exist and every clan reads back
`iconScale=1, offsets=0` (the exact old fixed look) until it's run.

**Seven new icons:** microphone and guitar (named explicitly), plus
paintbrush, football, camera, chess pawn and lightning — chosen to cover
hobbies the first 15 didn't (music, sport, art, photography, strategy games,
plus one general "energy" symbol). Same 24×24 stroke style as every
existing icon, in `ClanBadgeIcon.tsx`'s `CLAN_ICON_PATHS`.

**Resize and reposition are two new numbers, not a redesign.** `iconScale`
(0.6–1.8×) and `iconOffsetX`/`iconOffsetY` (±24, in the banner's own 0–100
space) sit alongside the existing colour/shape/icon choice — clamped in
`lib/clanBanners.ts` (`clampIconScale`/`clampIconOffset`) so the same
clamp function runs in the picker's own sliders AND again in the server
action, the identical "never trust a submitted number is one the slider
could have produced" reasoning already applied to colour/shape/icon.
`ClanBanner.tsx`'s transform math solves for the translate that keeps the
icon centred at any scale (`centred = 50 - 12 × scale`) rather than a fixed
translate that only centred one specific size — this is also exactly what
makes a clan with no saved scale/offset (`?? 1`, `?? 0`) render pixel-
identical to how it always looked, so nothing changes for a clan nobody
ever resizes.

**Existing clans can now be resized too, not just new ones** — new
`updateClanBanner` in `lib/clans.ts`, restricted to the clan's CREATOR
(same "one person can touch this" boundary as changing an account
password), reachable from a new "Edit banner" link on a clan's own page
(shown only to its creator) leading to `/clans/[id]/edit`. Deliberately a
*separate* action from creating a clan (`updateClanBannerAction`, not a
reuse of `createClanAction`) — the checks genuinely differ: no name or
password field at all, but a creator check `createClanAction` has no
reason to make.

**A near-miss caught before shipping:** the clan list page, the clan's own
page, and the dashboard's clan card all called `<ClanBanner>` with only
colour/shape/icon — none of them passed the three new fields through. Since
`ClanBanner` already defaulted missing scale/offset to the untouched
look, this would have compiled and looked completely fine for every clan
that had never been resized, and only broken the moment someone actually
used the new sliders: their own resized banner would show correctly on the
edit form's live preview, then silently revert to the old fixed appearance
everywhere else it's shown. Fixed by passing `iconScale`/`iconOffsetX`/
`iconOffsetY` through at all three call sites.

**Verified three ways:** `tsc --noEmit` and `eslint --max-warnings=0`
clean; `check-content.mjs` (87,603 checks, content untouched) and
`check-security.mjs` (57 checks) both pass; a throwaway functional smoke
test against the local-file backend (18 checks — creating a clan with a
scale/offset, reading it back, a non-creator rejected from editing the
banner, the creator's edit actually landing, a missing clan reported
correctly) all passed, then deleted; and, given the last bug here was a
real visual regression, a headless-Chromium screenshot of the actual SHAPES
and CLAN_ICON_PATHS data transcribed verbatim from the shipped files — all
7 new icons render centred and recognisable, and resize/reposition at both
extremes (max scale + full positive offset, min scale + full negative
offset) moves the icon exactly as expected without garbling it, clipping
at the shape's edge only when deliberately pushed to a corner.

New files: `app/clans/[id]/edit/page.tsx`, `app/clans/[id]/
EditClanBannerForm.tsx`. Changed: `CLAN_SETUP.sql` (new column migration),
`app/lib/clanBanners.ts` (7 icons, scale/offset types + clamps), `app/
components/ClanBadgeIcon.tsx` (7 new icon paths), `app/components/
ClanBanner.tsx` (scale/offset transform math), `app/components/
ClanBannerPicker.tsx` (three sliders, an `initial` prop so the same picker
serves both creating and editing), `app/lib/clans.ts` (new
`updateClanBanner`, extended `createClan`/`Clan`/`ClanRow`), `app/lib/
clan-actions.ts` (extended `createClanAction`, new
`updateClanBannerAction`), `app/clans/page.tsx`, `app/clans/[id]/page.tsx`
and `app/dashboard/page.tsx` (passing the new fields to `<ClanBanner>`, the
near-miss above).

## Clans — small self-made leaderboards with custom banners (2026-08-27)

Matthew asked for the small-group leaderboard idea, then specifically: a
"clan" system with a create button, a customisable banner (colour, shape,
and a character/object on it — his examples were a laptop, mouse, pen,
calculator), clans discoverable by search, and joining gated by a password
he described mid-conversation ("they would have to put in the clan
password so they can join it") rather than a hidden invite link. Built end
to end this session; **not yet pushed from this side**, same standing
limitation as always — Matthew still needs to `git push` from his own
machine. **Needs `CLAN_SETUP.sql` run once in Supabase → SQL Editor**
before this works on the live site, the same way `PROGRESS_SETUP.sql` and
`ACCOUNT_SETUP.sql` did for their own features.

**What it does.** `/clans` lists and searches clans by name; `/clans/new`
creates one (name, a join password, and a banner built from 15 colours × 6
shapes × 15 icons — see `lib/clanBanners.ts`); `/clans/[id]` shows a clan's
banner, its member count, and a leaderboard ranked by total XP (the same
number that fills the level bar on the dashboard), plus a join form gated
by the clan's password or a leave button if you're already in it. A user
is in at most one clan at a time, enforced by a real database constraint
(`unique(user_id)` on `clan_members`) rather than just an application
check — the same reasoning `users.email` being UNIQUE is what actually
stops duplicate accounts, not a lookup beforehand. The dashboard shows a
small card either linking to your clan or inviting you to join/create one.

**Two things worth knowing were found and fixed while building this, not
by a separate audit:**

The password hash for a clan very nearly leaked into the data returned to
pages. The local-file backend's "one clan record" object naturally wanted
to carry its hash alongside everything else, and a `{ ...clan, memberCount
}` spread would have copied it straight into everything this file hands
back — the exact shape of bug the `passwordHash` field on the real
`users` table has always been kept away from by `fromRow` only ever
copying out named safe fields. Fixed the same way: `withCount` in
`lib/clans.ts` now builds its return value field by field, so an object
that happens to carry an extra property can't leak it regardless of what
future code passes through.

Clan join passwords had **no rate limiting at all**, unlike login
passwords — and a clan password can be as short as 4 characters, a much
smaller space than an account's 8-character minimum. `throttle.ts` gained
`checkClanJoinAllowed`/`recordFailedClanJoin`, reusing the exact per-target
+ per-IP shape login already uses (see that file's own big comment for why
both are needed), under separate key prefixes so a mistyped clan password
never pushes someone toward being locked out of their actual account.

New files: `CLAN_SETUP.sql`, `app/lib/clanBanners.ts`, `app/lib/clans.ts`,
`app/lib/clan-actions.ts`, `app/components/ClanBadgeIcon.tsx`,
`app/components/ClanBanner.tsx`, `app/components/ClanBannerPicker.tsx`,
`app/clans/page.tsx`, `app/clans/new/page.tsx`,
`app/clans/CreateClanForm.tsx`, `app/clans/[id]/page.tsx`,
`app/clans/[id]/JoinClanForm.tsx`, `app/clans/[id]/LeaveClanButton.tsx`.
Changed: `app/lib/throttle.ts` (clan-join rate limiting), `app/dashboard/
page.tsx` (the new clan card), `app/robots.ts` (added `/clans` to the
disallow list — every clan page is noindex, same reasoning as everything
else already in that list).

Verified: `tsc --noEmit` clean, `eslint --max-warnings=0` clean (twice),
`check-content.mjs` 87,603 checks pass, `check-security.mjs` 57 checks
pass, plus a throwaway end-to-end smoke test against the local-file
backend (create, wrong password rejected, correct password joins, can't
join a second clan while in one, search finds by partial name, leaving
frees you to join elsewhere, password hash never appears in anything
returned) — all passed, then deleted along with its test data before
shipping.

## Exam board picker (2026-08-27)

Matthew asked to start on the "varying exam boards" idea from the
competitive-ideas list, and gave broad latitude on how to do it ("I honestly
want you to change it the way you want to... it's for you to decide"). Built
end to end this session; **not yet pushed from this side**, same standing
limitation as always — Matthew still needs to `git push` from his own
machine.

**What it does.** A new `/exam-board` settings page (linked from the footer,
next to Accessibility) lets a student pick AQA / Edexcel / OCR / WJEC / "not
sure," remembered on-device the same way the accessibility settings are —
`lib/browserStore.ts`'s `useStoredRaw`/`writeStorageRaw`, no account needed.
Every subject page's old, flat "topic lists vary between boards" sentence at
the bottom is now `ExamBoardNote.tsx`: it renders that exact same sentence
(plus a quiet link to set a board) until a board is actually chosen, so
nobody who never visits the new page sees anything different — and once one
is set, it swaps in a short, specific note for the five subjects where a
real, well-known board difference exists (History's options, English's set
texts, Business's AQA/Edexcel/OCR split, Computer Science's paper grouping,
and RE's religion/theme choice) — see `lib/examBoards.ts`'s `BOARD_NOTES`.

**Deliberately scoped to stay clear of the content freeze.** Everything here
is new structural files (`lib/examBoards.ts`, `ExamBoardPanel.tsx`,
`ExamBoardNote.tsx`, `/exam-board/page.tsx`) plus a link in the footer and a
one-line swap in the subject page — nothing in `app/lib/content/*.ts` was
touched, and no topic in `subjects.ts` was added, removed or reordered. The
five `BOARD_NOTES` sentences are short and advisory, not new revision
content, and are grounded in comments already written into `subjects.ts`
(the History and Business entries specifically) plus well-known,
easily-checked facts about how those boards structure their specs — not
guesses. Worth Matthew double-checking those five sentences against his own
school's actual board/scheme, the same "check and tell us what to change"
spirit as the original disclaimer.

New files: `app/lib/examBoards.ts`, `app/components/ExamBoardPanel.tsx`,
`app/components/ExamBoardNote.tsx`, `app/exam-board/page.tsx`. Changed:
`app/components/SiteFooter.tsx` (new "Exam board" link),
`app/subjects/[subject]/page.tsx` (swapped the static disclaimer for
`<ExamBoardNote>`). Verified: `tsc --noEmit` clean, `eslint --max-warnings=0`
clean (twice), `check-content.mjs` 87,603 checks pass, `check-security.mjs`
57 checks pass.

## Deep bug hunt — auth, gamification, mock exams, SEO (2026-08-25)

Matthew asked for another periodic "deep bug fix" pass, same shape as the
2026-08-09 hunts above. Six parallel searches covered auth/security,
progress/gamification math, exam/practice marking, localStorage/state
components (checking the recent `useSyncExternalStore` refactor for
regressions), page routes, and the generated SEO files. Every finding was
then re-read against the real code by hand before being trusted — a
subagent's report is a lead, not a verdict — and two plausible-sounding ones
turned out to be non-issues. Nine files changed; **not yet pushed from this
side, same standing limitation as always (see the git section below)** —
Matthew still needs to `git push` from his own machine.

**A transient Supabase blip could have crashed every page on the site, not
just login.** `getCurrentUser()` (wrapped by `getViewer` in viewer.ts, which
`SiteHeader` — present on literally every page — calls unconditionally) never
caught the exception `findUserById` throws on a database problem. `login()`
already treats exactly this as "show a friendly error," but nothing carried
that same care to the function every single page depends on. Now wrapped in
try/catch, failing safely as "nobody's logged in" rather than a site-wide
500. The same unguarded call existed twice more, in `changePassword` and
`requestDeletion` (account-actions.ts) — fixed the same way.

**A mock exam's free-text answers could be edited and re-checked until they
read "correct," inflating the score permanently written to the database.**
`MockExam.tsx`'s free-text input let you keep retyping after Check, and
`status` (which the score, the live tally, and `recordTestCompletion` all
read straight off) updated on every attempt with no gate — unlike multiple
choice questions in the same exam, which were already locked after one
click. Now locked the same way: the input and Check button disable once
answered. (Practice.tsx has the identical-looking "reset to unanswered on
edit" behaviour, but its own comment says plainly that's deliberate — later
attempts are a free retry aid and only the first is ever recorded to the
database — so that one was left alone.)

**The streak freeze could be spent twice within two days, not once a
week.** `computeStreak`'s "one freeze per rolling week" reset a counter
every 7 days *processed by the walk*, not 7 days since a freeze was
actually used — so a freeze landing exactly on that 7th-day boundary reset
the allowance on the same iteration it was spent, handing out a second one
almost immediately. Reproduced: six active days, a freeze-bridged gap on
day 6, one active day, then a second freeze-bridged gap on day 8. Fixed by
tracking real days elapsed since the last freeze instead of a fixed block
counter.

**`formatDuration` could print "60m" or "1h 60m."** Rounding
seconds-within-the-hour to the nearest minute happened *after* splitting
off the hour, so a value just under a full hour (or just under a full extra
hour) rounded up without carrying. Fixed by rounding to a total-minute count
first, then splitting that into hours/minutes.

**A corrupted local `users.json` would have been silently wiped on the next
registration.** `readUsers()` caught a JSON parse failure the same way as a
missing file — both returned `[]`. `createUser`'s local-file path reads this
list, pushes one new user, and writes the whole thing back, so a genuinely
corrupted (not missing) file would have been overwritten with a file
containing only that one new account, permanently losing everyone else's on
that laptop. Now only a genuinely missing file (ENOENT) is treated as "nobody's
registered yet"; anything else is logged and re-thrown. Local-file-only —
the live site uses Supabase and never reaches this path.

**Probing which emails already have an account was completely unthrottled.**
`checkRegistrationAllowed` only ever counted *successful* registrations
(`recordRegistration()` was called after `createUser` succeeded, never in
the `EMAIL_TAKEN` branch), so someone could submit unlimited candidate
emails to find out which ones exist without ever tripping the per-IP limit
— the exact enumeration this codebase otherwise goes to real lengths to
prevent (the login timing fix, the identical wrong-password/unknown-email
wording). Now an `EMAIL_TAKEN` failure counts the same as a real signup.

**Flashcard spaced-repetition state could freeze permanently for a heavy
user.** `flashcard-review.ts`'s `readReviews` fetched oldest-first
(`created_at.asc`) with the same 5000-row cap `progress.ts` uses — but
`progress.ts` fetches *newest*-first for exactly this reason: if the cap is
ever hit, keep the recent history, not the stale end. Ascending order with a
fixed limit does the opposite — a user who ever passed 5000 lifetime
flashcard judgements would have every review after that point permanently
invisible, freezing every card's box/due-date forever. Fixed by fetching
newest-first (matching progress.ts) and reversing in JS to restore the
oldest-first order the box-folding logic actually needs.

**Two SEO files had quietly gone stale as the site grew.** `sitemap.ts` was
built from `SUBJECTS` alone, so the two group "chooser" pages
(`/subjects/science`, `/subjects/languages` — added when Science and
Languages were grouped, well after the sitemap was written) were never
listed despite being real, indexable pages. Added. Separately, `robots.ts`'s
disallow list — described in its own comment as belt-and-braces alongside
each page's `noindex` metadata — had drifted out of sync with which pages
actually carry `robots: { index: false, follow: false }`: `/account`,
`/progress`, `/review`, `/revise`, `/wardrobe` and every `/pro-preview`
page were missing. Added (deliberately NOT the dynamic `/subjects/*/exam`,
`/subjects/*/print` and `/subjects/*/stats` routes — those use
`follow: true` on purpose, so crawlers can still follow their links back to
real topic pages; disallowing them would break that).

**DashboardCelebrations had regressed back into the exact hydration-mismatch
bug the recent `useSyncExternalStore` refactor was meant to eliminate
everywhere.** It read `localStorage` directly inside a plain `useMemo`,
which runs during render — including the server's render and the client's
very first render during hydration. The server always saw "nothing to
celebrate" (no `localStorage`); the client's first render legitimately
could see something different, which is a hydration mismatch. Fixed by
routing its three "have I seen this" reads through `browserStore.ts`'s
existing `useStoredRaw` — the same fix already used by ThemeToggle and
everything else on the site that reads localStorage. ⚠️ The first attempt
at this fix moved the read into a `useEffect` + `setState` instead, which
eslint immediately flagged as `react-hooks/set-state-in-effect` — the exact
rule the prior session's whole refactor existed to stop tripping. `useStoredRaw`
is the actual fix; an effect-plus-setState is the pattern it replaces.

**Investigated and rejected as false positives:**
- `changePassword`'s "that's the same password you already have" check
  compares the raw submitted current/new password strings before verifying
  the current one is correct. Sounds like a bypass; isn't — `verifyPassword`
  still runs afterwards and is the only thing that actually authorises a
  change, so a wrong "current password" that happens to equal the new one
  either way ends in "that isn't your current password," never a silent
  change. At worst a slightly confusing error ordering, not a security gap.
- Practice.tsx resetting `status` to "unanswered" on every keystroke after
  an answer was checked, letting the on-screen "X out of Y correct" figure
  rise or fall on retries. Explicitly intentional per that file's own
  comment ("Later attempts still work normally on screen. They just aren't
  measured.") — only the first attempt is ever sent to the database, so
  nothing persisted is affected. This is the opposite of the MockExam bug
  above specifically because MockExam's on-screen tally IS what gets
  persisted (via `recordTestCompletion`) and Practice's is not.

**Verification.** `tsc -p tsconfig.json --noEmit`, `eslint --max-warnings=0`
(three consecutive clean runs), `scripts/check-content.mjs` (87,603 checks,
content untouched), and `scripts/check-security.mjs` (57 checks, including
the registration-throttle simulation) all passed clean against the fixed
code. `next build` still cannot run from this environment (this sandbox's
`node_modules` mismatch, not a code issue) — worth Matthew confirming with
his own `npm run dev`/`npm run build`, as always.

## Science content (2026-08-10)

**Biology COMPLETE** — 20 topics, all three years, 305 flashcards.
**Chemistry COMPLETE** — 19 topics, all three years, 269 flashcards.
**Physics: NOT STARTED** — 19 topics listed, no content.

**The tier principle, applied throughout.** The two mistakes are not
symmetrical: failing to flag Higher-only content wastes a Foundation student a
little revision; wrongly flagging it tells them to SKIP something that will be
on their paper. So both files deliberately UNDER-flag. Biology carries 11 flags,
Chemistry 16, and Year 9 of both carries almost none — which is the honest
position, not a gap.

**A checker rule was completed, not weakened.** "Approximately what percentage
of the atmosphere is nitrogen?" has two correct answers, 78 and 80, and the
accept-list rule flagged it. `roughly` was already exempt and means the same
thing, so `approximately` and `about` were added. ⚠️ The test for adding a word
to that list: does it signal to the STUDENT that a range is acceptable? Verified
afterwards by reintroducing a genuinely wrong accept list (Mr of H₂O accepting
17) and confirming it still fails.

---

## Science — three subjects behind one card (2026-08-10)

**Iris**, the Science mascot: lab coat, goggles pushed up on her forehead, two
test tubes. Hair tied back, because loose hair in a lab is a safety failure and
that detail is what separates "dressed as a scientist" from "scientist".
⚠️ Goggles are on her FOREHEAD, not over her eyes — worn properly they hide the
eyes, and eyes carry nearly all of a character's expression.
⚠️ Pale glass on a white coat was invisible in the first render; the tubes only
read once they were OUTLINED. Transparency has to be implied by a highlight.

**The structure.** Biology, Chemistry and Physics are ORDINARY subjects with
ordinary slugs — progress tracking, the sitemap, pre-rendering and topic pages
all work on them unchanged. `group: "science"` only removes them from the
homepage; `app/subjects/science/page.tsx` is the chooser between them.

⚠️ A literal folder beats a `[subject]` dynamic segment in Next's routing, so a
subject with the slug "science" would become permanently unreachable. There is
now a check for that collision, and for the reverse — a group with no page.

**Colours were chosen by LOOKING at rendered swatches, not by reasoning.** It
changed two of four picks: Physics was going to be indigo and was
indistinguishable from Computer Science's blue, so it is SLATE; Chemistry was
going to be gold and was indistinguishable from Maths' rust, so it is MAGENTA.
Biology is a yellow-green because Geography already owns emerald. Nine subjects
now share one progress chart, where colour is the ONLY identifier on a ring.

**Foundation vs Higher is now supported beyond Maths.** `higherOnly` is allowed
on maths, biology, chemistry and physics — the four tiered subjects — and is
still an ERROR anywhere else, because English and History are not tiered and a
Higher badge there would be meaningless. Content still to be written.

**A mistake worth keeping:** the science slugs were first added to
`known-topics.ts` by regex over a fixed-size window of subjects.ts, which ran
past the end of Chemistry and handed it two of Physics's slugs. The
disappearance guard caught it on the first run. They are now generated from the
COMPILED data, where one subject's topics cannot leak into the next.

---

## ⏭️ NEXT SESSION — what Matthew asked for (2026-08-09, end of day)

0. **CONTENT for Biology, Chemistry and Physics** — the layout is built and all
   58 topics are listed, but none of them have content yet. Remember Foundation
   vs Higher: mark Higher-only material with `higherOnly` so Foundation students
   can skip it.
1. **More subjects beyond the sciences.** He wants to expand further.
   Each one needs: a mascot in the house style, a colour distinct from the six
   already used, year groups, and full content. **Colour is now the binding
   constraint** — blue, orange, violet, red, green and teal are taken, and the
   remaining well-separated hues are roughly: deep gold/amber, magenta/pink,
   slate/navy, brown and lime. Pick them all at once and check them together
   rather than one at a time, or the last few will be indistinguishable.
2. **Make the site more usable.** His words. Worth asking what specifically
   frustrated him before building anything.
3. **Improve the design.**

Still outstanding from earlier and NOT yet done:

- **Per-subject statistics pages** — asked for when progress tracking was first
  built; only the site-wide page exists.
- **Two SQL files to run in Supabase:** `THROTTLE_SETUP.sql` and
  `ACCOUNT_SETUP.sql`. The second matters most — without its scheduled job,
  "delete my account" never actually deletes anything and the privacy page is
  untrue.
- **Password reset** is still a placeholder page; needs an email service.
- **A teacher needs to read the content**, Geography and Business above all,
  since nobody involved studies either.

---


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

## Bug hunt — 2026-08-09 (after rate limiting, accounts and Business)

Two real user-facing bugs, both invisible to the compiler:

1. **The subject-card grids were `xl:grid-cols-4`.** Right for four subjects;
   with six it laid out 4 + 2 and left two empty cells on the second row — the
   exact ragged gap Matthew complained about on the Business page, sitting on
   the homepage, dashboard and progress page the whole time. Now
   `lg:grid-cols-3`: two even rows of three.
2. **`SITE_DESCRIPTION` still said "Computer Science, Maths and English".** That
   is the sentence Google prints under the link, so the site was actively
   telling searchers it did not cover History, Geography or Business. Now
   DERIVED from `SUBJECTS`, like the sitemap, so it cannot go stale again.

Checked and found **correct**, rather than assumed: the sitemap and
`generateStaticParams` both derive from `SUBJECTS`, so all 26 Business pages are
indexed and pre-rendered with no change; `WeeklyChart` takes its series as a
prop and never assumed three subjects.

**New permanent checks** (`scripts/check-security.mjs`, now 57):
- The limiter driven END TO END, not just its tier table — including that the
  limit follows an account through capitals and stray spaces, and that an email
  with no account is throttled identically so lockouts cannot reveal who has one.
- `redirect()` never inside a `try` block, where the catch would swallow it.
- No Tailwind class built by string interpolation. ⚠️ The first version of this
  check fired on the comment EXPLAINING the trap; it now strips comments rather
  than being relaxed, because weakening a check to silence it is how checks die.
- `SITE_DESCRIPTION` stays derived.

---

## Business — the sixth subject (added 2026-08-09)

**Sterling**, teal. **26 topics across Years 10 and 11, 419 flashcards** — the most
flashcard-heavy subject on the site, at Matthew's request, because Business
loses more marks to imprecise definitions than to anything else.

**No Year 9, on purpose.** Business is a GCSE option chosen at the end of Year 9
and begun in Year 10. Inventing a Year 9 would have meant padding with material
no student is set. Year 10 is broadly Edexcel's Theme 1 (starting a business);
Year 11 is Theme 2 (building a business).

**Teal because every other hue was taken** — blue, orange, violet, red, green.
Teal is the only remaining colour far enough from all five to be told apart at
the size of a progress ring.

**A real bug this exposed:** year colours were chosen by ARRAY POSITION
(`YEAR_STYLES[index]`), which works only while every subject starts at Year 9.
Business starts at Year 10, so its first year group sat at index 0 and would
have rendered in the Year 9 blue with "Year 10" written on it. Now looked up by
name via `yearStyle()`. Note the deliberate split: colour follows the year NAME,
artwork still follows POSITION, because "the first column gets the mascot" is a
fact about layout rather than about the year.

**Matthew's brief for the mascot:** a person in a suit with a briefcase, "cute
but obviously not Teletubby cute, simple features but not baby-like and not too
adulty". No glasses — that thread has now been cut on three of six characters.

**Revised after he saw it:** suit black (not teal — the tie stays teal, and is
now the only thing carrying the subject colour, which makes it work harder).
Feet turned OUT with a gap between them; the first version was two mirrored
ovals meeting at the centre line, so he stood pigeon-toed. Hair changed from a
rounded cap with a side parting to a textured crop with a swept fringe.
⚠️ The black is #1e1e26, not #000000 — a flat black swallows every shadow and
turns the figure into a silhouette.

**`scripts/preview-mascot.py` was written to do this properly.** It renders a
mascot from Mascots.tsx to a PNG so it can actually be LOOKED at. The first
render found a hand hovering beside a briefcase holding nothing, and lapels with
so little contrast the suit read as a dressing gown — neither visible in the
code. ⚠️ It composites layers itself because ImageMagick IGNORES the `opacity`
attribute, which made every 10% shadow render solid black and sent me chasing
problems that did not exist.

**Arithmetic was verified independently** — all 38 calculations recomputed in a
throwaway script rather than trusted. That was a one-off check, not a regression
test: editing a number in the content later would not be caught by anything.

---

## Accounts: privacy, password change, deletion (built 2026-08-09)

`/privacy`, `/account`, `app/lib/account-actions.ts`, `ACCOUNT_SETUP.sql`.
Checked by `scripts/check-security.mjs`.

**Matthew's decisions:** contact address is his personal Gmail (will get
scraped; swapping it is a one-line change in `site.ts`). Deletion has a **30 day
grace period** rather than being instant.

**The rule every account action follows:** identity comes from the signed
session cookie, NEVER from the form. `changePassword(email, ...)` with the email
in a hidden field would work perfectly in testing and let anyone change anyone's
password, because the form belongs to the visitor. There's a check that fails if
an account action ever reads an email out of `formData`.

**A soft delete is only a delete if something finishes the job.** The pg_cron
job in `ACCOUNT_SETUP.sql` is not housekeeping — without it the row sits there
forever and the privacy page is untrue. Activity rows are deleted BEFORE the
user row, or they're orphaned with nothing left to identify them by.

**The drift bug that check-security.mjs guards:** the 30 days is written in five
places (the constant, three pages, and the SQL). Change one and the others
silently keep promising something different. Verified by changing the constant
to 14 and watching five checks fail.

**Known limitation, stated on the page rather than hidden:** changing your
password does not sign you out on other devices. Sessions are signed cookies,
not rows, so there's no list to revoke. Fixing it needs a version number on the
user, checked every request.

---

## Login rate limiting (built 2026-08-09)

Stops password guessing. `app/lib/throttle.ts`, table created by
`THROTTLE_SETUP.sql`, tested by `scripts/check-throttle.mjs` (in `npm run check`).

**Measured, not estimated:** an attacker gets **113 guesses a day** against one
account, down from ~1.7 million. The 10,000 commonest passwords go from 8
minutes to 88 days. The test simulates the attack against the real code and
fails if anyone retunes the tiers and makes it worse.

**Two limits, because they catch different attacks.** Per-account catches one
account / many passwords. Per-IP catches *password spraying* — one likely
password tried against thousands of accounts, where each account sees only a
single failure and a per-account limit never fires.

**Three decisions worth not undoing:**

1. **Account lockouts cap at 15 minutes.** Matthew suggested a day. A long
   account lockout is a weapon: anyone who knows your email can lock you out of
   your own site with fifteen deliberately wrong guesses, every morning,
   forever. IP lockouts go to 2 hours because those punish the machine doing the
   guessing, not the account being guessed at. The question to ask of any
   lockout is *who does this hurt if I'm wrong?*
2. **The window slides from the LAST failure, not the first.** The first version
   measured from the start of the run, which quietly handed the attacker a fresh
   allowance every hour — 437 guesses a day instead of 113. The simulation
   caught it; reading the code would not have.
3. **Failures are recorded for unknown emails too.** If only real accounts were
   counted, being throttled would prove an account exists, undoing the careful
   work that makes a wrong password and an unknown email indistinguishable.

**Fails open.** If the database is unreachable the attempt is allowed and the
error logged. A blip should not lock every user out of the site. The cost is
that someone who can knock Supabase over also removes the limit — an acceptable
trade here, but a real one.

**One dependency on the host:** the client IP comes from `x-real-ip` /
`x-forwarded-for`, which are normally forgeable. They're trustworthy *because
Vercel overwrites them at its edge*. Move off Vercel to a host that passes
through what the visitor sent and the IP limit silently becomes decorative.

---

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

## History added as a fourth subject (2026-08-09) — structure only

15 topics across Years 9–11, **no content written yet on purpose**. Every page works and shows the honest "content coming soon" panel. Site is now **68 topics**, 53 of them written.

**Gaunt**, the knight, is the mascot — original artwork in the house style, like the other three. The reference picture Matthew and Jennifer found was a starting point for the idea, not something to trace. His visor is UP because the family thread is glasses, and a closed helmet is a grille with no face behind it.

Colour: a deep warm red (`#dc2626` family, accent `#b91c1c`). Deliberately not in the same family as Maths's orange — two adjacent warm cards blur together on the homepage, and colour is how you tell the cards apart before reading a word.

**⚠️ History varies far more than any other subject here.** The others share a broad syllabus; History is built from OPTIONS each school picks. Two students both "doing GCSE History" can have almost no overlap. This list is the most widely taught options across AQA/Edexcel/OCR plus the usual Year 9 topics. Swap anything his school doesn't do — one line each.

**The ladder needed no work at all.** `LadderCompanion` takes `subject.mascot` and looks it up in `MASCOTS`, so adding `knight: Knight` to that one object put him on the ladder on every History topic page automatically. Matthew expected this to be a separate job; it was the payoff for the data-driven design.

**Two things this exposed, both now fixed:**

- **Subject colours were borrowed from `YEAR_STYLES`**, which has exactly three entries — so the fourth subject silently came out blue on the progress page. Subjects now carry their own `accent`. Colours that mean "which subject" belong to the subject.
- **Three grids were hardcoded to `grid-cols-3`.** Now `sm:grid-cols-2 xl:grid-cols-4`.
- The mascot union was also written out twice (in `Subject` and in `SubjectProgress`); the second now says `Subject["mascot"]`.

## Protecting progress across updates (2026-08-09)

Matthew reported that progress looked like it had partially disappeared. **Investigated: nothing was lost from the database.** Two separate things made it look that way.

**1. The ring percentage fell when topics were added.** It was topics covered ÷ topics in the subject, so growing the subject grew the denominator. Identical work displayed as 4/13 = 31% one week and 4/18 = 22% the next. Checked against git: the site went 38 → 53 → 68 → 72 topics, so this happened to every subject. **Fixed** — the ring now shows the COUNT (`4/18`), which can only go up, while still filling by percentage so subjects stay comparable. The percentage moved to a caption, with an explanation on the page.

**2. "This week" is a rolling seven days**, so a session from eight days ago drops out by design. Total questions and flashcards never fall.

**The real danger, now guarded against: `app/lib/known-topics.ts`.** Progress rows point at topics by SLUG and nothing else, so renaming or deleting one silently orphans every record attached to it — the rows survive, nothing ever counts them again, and to a student that is indistinguishable from deletion. That file lists every key that has ever existed, and `npm run check` fails if one disappears or if a new one is unregistered. **Verified by deliberately deleting a topic: the check failed with the right message.** Checked the whole git history too — no slug has ever been renamed or removed.

If a topic genuinely has to go: move its key to `RETIRED_TOPIC_KEYS`, and migrate the activity rows in Supabase first. Never just delete the line.

## History bug check (2026-08-09)

- All 320 auto-marked History questions replayed through the shipped `normalise()`: none fail to match themselves, none accept blanks or junk.
- No implausible years in any accept list; no answer text contradicting the year its question accepts.
- Respectful-language check across all 19 topics: "slaves" is never used as a noun for people (the one match was the exam tip telling students not to use it).
- The Year 9 "rise of the Nazis" and Year 10 "Germany 1890–1945" topics share **zero** identical questions and one flashcard term — they complement rather than duplicate, as intended.
- All 19 have the full six-section format.

## ⚠️ THE BIGGEST OUTSTANDING RISK — content accuracy (2026-08-09)

**No subject teacher has checked any of this site.** There are ~191,000 words across five subjects, all written with AI assistance. Matthew studies Computer Science, Maths, English AND History, so he can sanity-check four of the five subjects. He does **not** take Geography — so nobody involved can catch an error in those 17 topics, and the other 72 have had a student's eye on them but not a teacher's.

**Correction, 2026-08-09:** I previously recorded that he did not study History. He does. Getting a fact about the person you work with wrong, in the file you read at the start of every session, is exactly the kind of error that compounds — hence the correction rather than a silent edit.

That is not a reason to take it down — the content is carefully written, cites real figures, and names disagreements where they exist. It IS a reason to say so where readers see it.

**Done about it:**

- `app/components/ContentNotice.tsx` now appears at the foot of every topic page with content. It says the material was AI-written and not teacher-checked, that boards differ, that some figures date, and that a teacher should be the final word. Deliberately at the FOOT — someone here to revise reaches the revision first; someone deciding whether to trust it will scroll. Deliberately calm in tone: a frightening warning would put people off material that is genuinely useful, and no warning would be dishonest.
- **A stale figure was found and fixed.** Climate change said CO₂ was "over 420 ppm". Checked against NOAA and Scripps: the Mauna Loa record passed **432 ppm in May 2026**, with the 2026 annual average forecast around 429. Corrected to "over 430", with an explicit warning that it rises ~2 ppm a year and should be looked up rather than quoted from here.

**Still outstanding, and it matters more than any feature:**

- **Get a teacher to read some of it**, Geography above all, since nobody here studies it. Matthew plans to do this when school restarts. One teacher spending an hour is worth more than any amount of further writing.
- **Time-sensitive figures have no maintenance mechanism.** Populations, CO₂, development statistics and casualty estimates all drift. There is currently nothing that flags them for review.
- The privacy policy and delete-account page are still missing, and still gate sharing the site widely.

## Geography complete — a fifth subject (2026-08-09)

**Every topic on the site is written: 89 of 89, ~190,000 words, 25,175 checks passing.**

| Subject | Topics | Worked ex. | Auto-marked | Self-marked | Mistakes | Flashcards |
|---|---|---|---|---|---|---|
| Computer Science | 18 | 75 | 288 | 36 | 108 | 277 |
| Maths | 19 | 76 | 305 | 37 | 114 | 234 |
| English | 16 | 64 | 256 | 32 | 96 | 191 |
| History | 19 | 77 | 320 | 39 | 114 | 269 |
| Geography | 17 | 68 | 272 | 34 | 102 | 245 |
| **Total** | **89** | **360** | **1441** | **178** | **534** | **1216** |

**Atlas** is the mascot — the planet IS the body, not a head on a torso. That breaks the house rule the other four follow (head at ~40% of height) and Matthew was right to insist: a globe on a body looked like someone in a costume. No glasses either, so the family link is carried by proportion, shading, the eye treatment and one deliberate asymmetry (one arm raised). Two fixes worth remembering: feet drawn as ellipses read as balls, because an ellipse has no front or back — they are now paths with a heel and toe; and arms are stroked lines with round caps rather than closed blobs, so thickness stays even and the cap does the work of a wrist.

**Year balance was corrected on Matthew's instruction.** Year 9 originally had ten topics, more than any other year on the site. Now 6 / 6 / 5. Three topics that duplicated GCSE ones were RETIRED rather than deleted, and climate change moved from Year 9 to Year 11 — moving between years needs no migration because the slug does not change.

**The slug guard did its job.** Deleting those three would have failed the build; they had to go into `RETIRED_TOPIC_KEYS` with a note confirming no progress rows pointed at them.

**The numeric accept-list rule caught something in almost every batch** — 2007/2008 for urbanisation passing 50%, ±25% for a percentage decrease, 3/4 figures per case study. Each was reworded rather than the rule relaxed. Thin practice answers were caught repeatedly too. Those two checks have now paid for themselves many times over.

## History complete — all 19 topics (2026-08-09)

**Every topic on the site is now written: 72 of 72, ~152,000 words, 20,066 checks passing.**

| Subject | Topics | Worked ex. | Auto-marked | Self-marked | Mistakes | Flashcards |
|---|---|---|---|---|---|---|
| Computer Science | 18 | 75 | 288 | 36 | 108 | 277 |
| Maths | 19 | 76 | 305 | 37 | 114 | 234 |
| English | 16 | 64 | 256 | 32 | 96 | 191 |
| History | 19 | 77 | 320 | 39 | 114 | 269 |
| **Total** | **72** | **292** | **1169** | **144** | **432** | **971** |

**Year placement was corrected on Matthew's instruction.** The British Empire moved from Year 10 to Year 9 where it is actually taught. Four widely taught topics were missing entirely and were added: the Industrial Revolution and the transatlantic slave trade (both KS3), crime and punishment (the commonest alternative to Medicine as a thematic study), and migration to Britain (a GCSE unit in its own right).

**Medicine through time got 33 practice questions** rather than the usual 18, at Matthew's request — it covers a thousand years and genuinely needs it. Five key-fact blocks and five worked examples too.

**How the difficult material is handled:** the slave trade, the Holocaust and the world wars are written plainly and without dramatic language. That is both respectful and what earns marks — examiners reward precision, not adjectives. "Enslaved people" throughout, never "slaves". Contested figures are flagged as contested rather than stated with false confidence.

**Where historians disagree, the disagreement is named.** "Lions led by donkeys" is presented as a 1960s interpretation to be weighed, not a fact. The Empire topic sets out both cases and says why the argument is live. That is what interpretation questions actually test.

**The checker caught one real error** during this work: an accept list on a revision question allowed both "2" and "3" minutes. Reworded to "Roughly how many minutes...", which is both honest and exempt from the rule — a question with a genuinely approximate answer should say so.

## Bug hunt on the tracking (2026-08-09, same day it was built)

Four real bugs, all found by reasoning then **reproduced before being fixed**.

1. **Practice recorded an answer on EVERY press of Check.** Press it twice because nothing seemed to happen, or hold Enter — key repeat fires ~10×/second — and one answered question became twenty events. Reproduced: 20 presses → 20 recorded events, so the page would have said "Questions answered: 20" and computed accuracy from twenty copies of one answer. Now only the **first attempt per question per visit** is recorded, which is the better statistic anyway: first-attempt accuracy is what "do I know this?" means, and counting retries would let anyone reach 100% by guessing until the tick appeared.

2. **Flashcard de-duplication keyed on the SLOT, not the card.** Shuffle rearranges `order`, so slot 3 afterwards holds a different card. Reproduced both failures at once: a brand-new card landing in a used slot was *not* counted, and an already-reviewed card landing in a fresh slot was counted *twice*. Now keyed on `order[safePosition]` — the card's own index. Identity belongs to the thing, not to where it currently sits.

3. **Late-night revision landed on the wrong day.** Times are stored in UTC (correct), but "what day was it" is a question about where the *person* is, and Vercel runs in UTC while the UK is an hour ahead all summer. Verified: 00:30 Monday UK → UTC calendar day Sunday. An hour a day, at exactly the time a teenager is most likely to be revising. Day keys now come from `toLocaleDateString("en-CA", { timeZone: "Europe/London" })`. Proven correct with the server pretending to be in UTC, New York and Tokyo. Stepping back through the week uses **noon**, not midnight, so the two clock-change days can't duplicate or skip a date.

4. **Every page did two identical database lookups.** The page asked who was logged in; `SiteHeader` inside it asked again. Both reasonable, together wasteful. Fixed with `getViewer` in `app/lib/viewer.ts` — React's `cache()`, which remembers the answer for one request and discards it when the request ends, so one person's login can never leak into another's page. Rule: in Server Components, don't pass data down to avoid re-fetching — fetch where needed and deduplicate.

**Also:** the study timer no longer runs for logged-out visitors. The Server Action already refused to record for them, so it was safe but wasteful — every anonymous reader fired a request every 30 seconds for it to be thrown away. And the progress page now says plainly when no database is configured (running locally), rather than showing zeros that look like a fault.

## Progress tracking (built 2026-08-09, from Jennifer's mockup)

**Setup: run `PROGRESS_SETUP.sql` in Supabase → SQL Editor.** One table, `activity`. Safe to re-run.

**Design decisions Matthew made:**

- The ring on each subject card = **topics covered**, not accuracy. It only goes up, so a bad session can't undo visible progress. Accuracy drives the Learning / Confident pill instead.
- **Both time and question counts are tracked**, and the weekly chart toggles between them.
- `Confident` deliberately needs *both* ≥3 topics covered and ≥80% accuracy.

**One event log, not five tables.** `activity` stores one row per thing that happened (`practice` / `flashcard` / `time`) and every figure is derived from it. A new statistic later needs no migration, because the raw history is already there. The cost is adding up on every read — right at this size, wrong at a million users, at which point the aggregation moves into a SQL view. `MAX_EVENTS_READ = 5000` in `progress.ts` marks where that line is.

**Honest measurement was the hard part, not the charts:**

- *Study time* only counts while the tab is visible AND something has happened in the last 5 minutes. A tab left open over lunch adds nothing. It heartbeats every 30s rather than reporting at the end, because "the end" never reliably runs — closing a tab guarantees nothing.
- *Accuracy* counts every checked answer, right or wrong. Only counting correct ones would quietly reward guessing.
- *Flashcards* count once per card per visit, so flipping back and forth measures nothing.
- Server Actions **never trust their arguments**: the user id comes from the session cookie, topics are checked against real content, and seconds are clamped to 120. A Server Action is reachable by anything that can make an HTTP request, not only by our buttons.

**Empty states are real.** The mockup shows 447 questions because a design needs numbers in it; a real dashboard starts at zero. Encouragement is tied to the actual figure — no "Great work!" under 41%.

**Charts are hand-drawn, no library.** `ProgressRing` uses `strokeDasharray` on a full circle: dash = circumference × percent, gap = the rest. `WeeklyChart` is scaled divs, with `Math.max(1, …)` as the divisor so an empty week doesn't divide by zero and render NaN.

**A React rule the linter caught:** the flashcard "already reviewed" set started as a `useRef`, written during render. That is forbidden — during render a component must be a pure function of props and state, and React may render more than once or throw a render away. Moved to state, which costs nothing because flipping already re-renders.

**Tested:** 26 checks against known events — coverage ignoring deleted topics, accuracy, "this week" excluding a 30-day-old session, empty days appearing in the chart as zero rather than vanishing, and the whole empty-history first-day case.

**Still to build:** the per-subject statistics pages (Matthew asked for these; the main page came first).

## ✅ LOGIN IS LIVE (2026-08-09)

Matthew registered and logged back in on the deployed site. Accounts are stored in Supabase. Project `Revision-Lab`, ID `jtthyslcvkldrozftbkg`, region eu-west-2 (London), free tier.

**The one thing that went wrong, worth remembering:** creating the table was not enough. Registration failed with `PGRST205 "Could not find the table 'public.users' in the schema cache"`. **Since April 2026, new tables in the `public` schema are no longer automatically exposed to Supabase's API** — they need an explicit `grant`. Every tutorial written before then omits it. Fixed with `grant usage on schema public to service_role;` plus `grant all privileges on table public.users to service_role;` and `notify pgrst, 'reload schema';`. The corrected block is in `DEPLOYING.md` step 5b and is safe to re-run.

**How it was diagnosed, because the method generalises:** the first symptom was "Something went wrong. Please try again." and nothing else — the real error was caught and discarded. Adding `console.error` in the catch block, plus a `describeFailure()` helper reporting status, URL, key KIND and Supabase's own message, turned it into a one-line answer. Logging privately while apologising publicly is the pattern; the helper is tested to never print the key itself.

### Still outstanding now that real accounts exist

- **Privacy policy and account deletion.** Legally required in the UK once other people's data is stored. Nothing should be shared widely until these exist.
- **No rate limiting on login.** Nothing stops unlimited password guesses.
- **Password reset is a placeholder page.** It needs an email service.
- **Progress tracking** — the actual reason accounts exist. The dashboard has an empty state waiting for it.

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

## Multiple-choice rollout (in progress)

Every topic needs at least 5 multiple-choice questions, 4-6 choices each.

**How it works:** add `choices: [...]` to a practice question and it renders as
buttons instead of a text box. The correct answer is whichever choice also
appears in `accept` — there is deliberately no separate `correctIndex`, so
multiple choice reuses the existing marking code rather than adding a second
way of being right.

**To add more:** write them into a JSON file keyed by topic and run
`node scripts/expand-topic.mjs additions.json`. It inserts by counting
brackets, not by matching text, and refuses to insert anything already
present. Write the JSON to disk BEFORE validating — otherwise one duplicate
question costs the whole batch.

**COMPLETE.** All 185 topics across all ten subjects have at least five, and
the checker rule is now unconditional — any new topic must meet it too.

When rewording a question to dodge a duplicate, CHECK THE CHOICES STILL FIT.
Three times now a reworded stem has been left with the old options underneath —
"which part of the UK..." followed by four voting systems. The duplicate guard
catches repeated questions; nothing catches a stem that no longer matches its
own answers except reading it.

Adding a subject to MCQ_DONE is the LAST step, and it must be its own command.
Chaining it after `expand-topic.mjs` with `&&` means a failed insert silently
skips the lock — the checker then passes because the rule was never switched
on, which looks identical to passing because the work was done.

Distractors must be real misconceptions, not filler. A wrong option nobody
would pick turns a five-option question into a two-option one. "None of the
above" is banned by the checker: it tests exam tactics, not the subject.

## Religious Education COMPLETE (2026-08-13)

Registered in salmon with Lumen, a lantern mascot — deliberately not a person,
because any human character would have to be dressed and every choice of dress
reads as a claim about whose subject RE is.

Written as AQA Religious Studies A, Christianity and Islam as the two studied
religions. Year 9 surveys six religions so it does not depend on that choice;
Year 10 is the part that would need swapping for a different pairing.

Three rules the content checker CANNOT enforce, so they live in the header
comment of app/lib/content/religious-education.ts:
  1. Attribute every belief — "Christians believe X", never "X is true".
  2. Give non-religious views their strongest form; they carry marks.
  3. Diversity WITHIN a religion matters as much as difference between them.

All 18 topics done, all three years: what-is-religion, introducing-christianity,
introducing-islam, introducing-judaism, dharmic-religions, big-questions-and-ethics
(Year 9); christian-beliefs, christian-practices, muslim-beliefs, muslim-practices,
relationships-and-families, religion-and-life (Year 10); the-existence-of-god,
peace-and-conflict, crime-and-punishment, human-rights-and-social-justice,
sources-of-authority, re-exam-practice (Year 11). 260 flashcards, 90 misconceptions,
269 auto/self-marked practice questions across the subject.

`node scripts/check-content.mjs` passes clean (75,022 checks) after two rounds:
the first pass had 7 topics short of the 5-multiple-choice-question minimum and
`re-exam-practice` one question short of the 16-question minimum — all fixed by
adding one targeted question to each, not by padding.

⚠️ known-topics.ts contains TWO arrays — KNOWN_TOPIC_KEYS and
RETIRED_TOPIC_KEYS. Appending "to the end of the file" puts new slugs in the
RETIRED list, which registers them as deleted. New topics go at the end of the
FIRST array. This cost a real bug; the checker caught it. (Not an issue this
round — all 18 RE slugs were already registered from the original build-out.)

**Not yet done:** Physics content (0 of 19 topics) is now the only subject with
zero content, per the Science section above.

## Dark mode toggle (2026-08-14)

Manual light/dark switch in the header. Light stays the true default —
nothing follows the OS preference; a visitor has to click the button, and only
then is the choice remembered (localStorage).

**How it actually works, three pieces:** `globals.css` redefines Tailwind's
`dark:` variant with `@custom-variant dark (&:where(.dark, .dark *));`, so it
fires off a CLASS on `<html>` instead of the OS media query — retroactively
turning on every `dark:` utility already written across the site with one
line. `layout.tsx` runs a tiny blocking script in `<head>`, before React
loads, that re-adds the class on refresh if dark was the last choice — that's
what stops a flash of light mode. `ThemeToggle.tsx` is the only thing that
ever adds or removes the class after that.

⚠️ **The bug that only showed up on Matthew's real machine.** `chipClasses`
used to live inside `SiteHeader.tsx`, a Server Component that reads the
session via `next/headers`. The moment `ThemeToggle` (a Client Component)
imported anything from that file, Next tried to pull the whole server-only
module graph into the browser bundle. `tsc` and `eslint` both passed clean —
neither understands the React Server/Client boundary — so this shipped
looking fine and then did nothing when clicked. Fixed by extracting
`chipClasses` into `chipStyles.ts`, a file with zero imports of its own that
both components can depend on safely. **Lesson:** a sandbox that can't run
`next build` (this one can't — see below) can't catch this class of bug by
itself; it needed a real report from the real machine.

⚠️ **Committing is not optional follow-through.** Twice now, files were
written to disk and left "for Matthew to review and commit," and twice that
caused real confusion (`git push` sending nothing; VS Code showing changes
that looked uncommitted). The fix going forward: commit locally from this
side whenever a change is finished, every time, and say so plainly — never
leave that step implicit.

## Spanish, French & German (2026-08-16)

Three new full subjects: **Spanish** and **French**, Years 9–11 (18 topics
each); **German**, Years 10–11 only (12 topics) — no Year 9, the same shape
Business already uses for a GCSE option started a year later.

**Topic shape, all three:** six topics per year — introductions, family &
friends, free time & hobbies, school life, home & daily routine, and a
dedicated grammar topic in Year 9/10; then technology, customs/festivals,
town/region, holidays/travel, food, and a second grammar topic in Year 10/11
(11 for German); then school system, post-16 choices, jobs, volunteering,
global issues, and exam practice in Year 11. Two topics per subject are pure
grammar reference ("Grammar toolkit: the present" / "...past & future") rather
than vocabulary — the AQA-style themes don't have anywhere else for verb
conjugation tables to live, and burying them inside a vocab topic made both
worse.

**Every practice list is a deliberate mix**, not just vocabulary recall:
straight translation both directions, gap-fill verb conjugation ("complete
with the correct form of..."), part-of-speech identification (often as
multiple choice), and the usual vocab/MCQ questions — this was Matthew's
explicit brief, not an add-on.

**No `higherOnly` flag anywhere in these three subjects.** GCSE MFL tiering is
about which speaking/writing TASKS a student attempts, not a block of
vocabulary being off-limits the way circle theorems are in Maths — flagging
individual facts would misrepresent how it actually works, and the checker's
`TIERED` set does not include spanish/french/german, so using the flag here
would fail the build anyway.

**Colours** were picked the same way as Science's — CIE Lab distance against
all existing subjects, not by eye: Spanish gold `#ca8a04`, French cornflower
`#1e6fbf`, German lime `#84cc16`.

**Three new mascots — Sol, Plume, Reise** — one "travel girl" per language,
sharing a skeleton (same head oval, same eyes, a backpack) so they read as a
matched set, the way the goggles/glasses thread ties Pixel/Hoot/Quill/Iris
together. Each carries her country's colour exactly once, in the
backpack/hat, and wears real everyday clothing (a sun hat, a beret, an alpine
hiking hat) rather than a costume — the same test Quill's Elizabethan dress
and Knight's armour already pass.

⚠️ **Repeated the exact "Pixel's antenna" mistake, and caught it before
shipping.** All three hats were first drawn with parts of the crown at
negative y-coordinates — outside the `0 0 120 140` viewBox, so the browser
would have silently clipped them. Every hat was shifted down a few units to
clear y=0; documented inline at each fix so it isn't repeated a third time.

**Content was written by three parallel subagents** (Spanish topics 2–18,
French, German), each given the fully-worked `spanish/greetings-and-introductions`
topic as a format/rigor template plus the complete checker rule set. One real
bug survived their own self-checks and was caught by the actual
`scripts/check-content.mjs` run: a German MCQ distractor ("zwei und zwanzig")
normalised identically to its correct answer once spaces were stripped,
producing a duplicate choice. Fixed with a genuinely different wrong option.

`node scripts/check-content.mjs` passes clean — **all 87,554 checks** — and
`tsc`/`eslint` are clean on every changed file, including `Mascots.tsx` and
`Icon.tsx`, which the checker's own `tsc` invocation doesn't cover (it only
type-checks the data files, not the components), so those two were verified
separately by hand.

**Not yet done:** Physics content is still the only subject with zero
content written.

*(Correction below, 2026-08-18 — this went stale. Physics was finished after
this note was written and never updated here.)*

## Physics content COMPLETE, topic search, and "Revise this next" (2026-08-18)

**Physics turned out to already be finished.** All 19 topics, all three
years, matching Biology/Chemistry in depth (370 auto-marked, 91 mistakes,
273 flashcards). Git history shows seven commits finishing it — the last
titled "Finish Physics multiple choice and lock the subject into the
checker" — so it's locked into the checker's MCQ rule the same as every
other subject. The "not yet done" note two sections up was simply never
updated when the work landed; nothing was actually missing. `physics.ts`'s
own header comment still says "Year 9 being written" for the same reason —
worth fixing next time that file is open, it's just stale text now.

**Topic search.** A Search chip in the header (press `/` anywhere on the
site too) opens a box that filters topics by name as you type and jumps
straight to `/subjects/<subject>/<topic>` on Enter or click. Built as
`app/components/SearchBox.tsx`, a Client Component. The searchable list is
built once from `SUBJECTS` — nothing hand-typed, so a new topic is
searchable the moment it's added to `subjects.ts`, same guarantee as every
other page. Topic-title matches rank above subject-name-only matches.

**"Revise this next" on the dashboard.** This suggestion already existed on
`/progress` (`getProgress`'s `nextUp`: least-covered subject, first
untouched topic, or the weakest-answered one once everything's touched) but
never appeared on `/dashboard` — the page you actually land on right after
logging in. Rather than invent a second opinion about what to revise, the
dashboard now just calls the same `getProgress()` and shows the same
recommendation as a hero card above the subject grid.

**Verification note for this environment:** `npm run build` cannot run from
the Linux VM this bridge uses — `node_modules` was installed on Windows, so
the native SWC binary is missing (`Failed to load SWC binary for
linux/x64`). Not a code bug, just this sandbox. `tsc -p tsconfig.json`,
`eslint`, and `scripts/check-content.mjs` all passed clean instead, which is
the strongest check available here — a real `npm run dev`/`npm run build`
on Matthew's actual machine is still the final word.

## Note for Jennifer (ChatGPT) — welcome to the folder (2026-08-18)

Matthew's just connected you to this folder too. This file is the shared
log both of us are meant to read and add to — Matthew's own convention,
written up top of this document. If you're looking for *why* something is
built the way it is rather than just *what* it does, this is where that
lives: dated sections in rough chronological order, each one covering what
changed and the reasoning/mistakes behind it. `CLAUDE.md` at the repo root
just points here and at `AGENTS.md` (that second one's auto-generated by
Next.js itself, not a project note — ignore it for context).

A few things worth knowing before you start:
- `app/lib/subjects.ts` is the single source of truth for every subject,
  topic, mascot and colour. Nothing elsewhere should hardcode a topic list.
- `scripts/check-content.mjs` is the automated checker for all content —
  run it after any content change, it currently enforces ~87,500 checks.
- The mascot cuteness rules (head size, oval eyes, no blush, one shading
  tone) are documented at the top of `app/components/Mascots.tsx` — worth
  reading before drawing a new one, it's caught real mistakes twice.
- If you make a change, please leave a dated section here the same way
  the rest of this file does, so neither of us has to reverse-engineer the
  other's work from a diff.

## Streak & daily goal on the dashboard (2026-08-18)

First of three features Matthew picked in one go — mock exam mode and
spaced-repetition flashcards are next, see the roadmap section for where
things stand.

**No schema change.** Both are derived from the same `activity` rows
`getProgress` already reads — no new table, no new Server Action.

**The streak is deliberately forgiving about "today."** A naive
consecutive-days count would show 0 the moment midnight passes and nothing's
been done yet, which is discouraging and wrong — nothing has actually been
broken. `computeStreak` in `lib/progress.ts` handles this: if today already
has activity, the count runs backward from today; if not, it runs backward
from YESTERDAY instead, so the streak survives until the day genuinely ends
empty. `activeToday` on the result tells the dashboard which case it's in,
so the wording changes ("4 days in a row" vs "4 days — revise today to keep
it going") rather than just showing a number that might be about to vanish.

**The daily goal counts practice answers OR flashcard flips, not one
specific kind**, and stays modest on purpose — 15, a five-minute commitment,
not a wall. Counting only one kind would mean a day spent purely on
flashcards (a perfectly good way to revise) doesn't count towards the goal,
which punishes people for revising the "wrong" way.

`node scripts/check-content.mjs` still passes clean (87,556 checks — content
wasn't touched), `tsc -p tsconfig.json` and `eslint` both clean on the two
changed files (`lib/progress.ts`, `dashboard/page.tsx`).

## Mock exam mode (2026-08-18)

Second of the three features Matthew picked. `/subjects/<subject>/exam` — a
timed set of 20 questions pulled at random from EVERY written topic in a
subject, not just one, closer to what an actual paper feels like.

**A static route living next to a dynamic one, again.** `exam/` sits inside
`app/subjects/[subject]/`, alongside `[topic]/`. Next checks static segments
before dynamic ones, so `/subjects/maths/exam` reaches the exam page rather
than being read as topic slug `exam` — same trick `/subjects/science`
already uses to beat `/subjects/[subject]`. Checked there's no topic
anywhere actually slugged `exam` before relying on this.

**Deliberately NOT statically generated.** Every other subject/topic page
has a `generateStaticParams` so Next can build it once at deploy time. This
page skips that on purpose and sets `export const dynamic =
"force-dynamic"` instead — a mock exam that showed the same 20 questions
every single visit until the next deploy would defeat the entire point of
"try another one." The random pick genuinely has to happen fresh, per
request.

**Marking reuses `normalise()` from `Practice.tsx`** — exported rather than
copied. Two slightly different implementations of "how forgiving is this
comparison" is exactly the kind of bug the codebase has already hit once
(the hyphen-vs-minus-sign bug, documented at the top of `Practice.tsx`);
reusing the one, tested function is what stops exam mode marking an answer
correct that ordinary practice would call wrong, or the reverse.

**Each question still records against its OWN topic**, not against "the
exam" as a whole — `MockExam.tsx` tags every pulled question with the
`topicSlug` it came from and calls `recordAnswer` per-question, same Server
Action ordinary practice uses. A mock exam is a different way of ANSWERING
questions, not a different kind of question, so it feeds the exact same
progress data — coverage, accuracy, streaks, all of it — as answering them
one topic at a time would.

**The finish screen links straight back to whichever topics the wrong
answers came from** — turning a score into something actionable rather
than just a number.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

**Renamed to "\<Subject\> test" shortly after shipping**, per Matthew's
feedback that "mock exam" didn't read naturally — "Computer Science test",
"Chemistry test", and so on. Only the wording changed: the URL is still
`/subjects/<subject>/exam`, unchanged, and everything above still applies.

## Spaced-repetition flashcards (2026-08-18)

Third and last of the three features Matthew picked in one go. New
`/review` page, plus "Got it" / "Still learning" buttons on every ordinary
flashcard deck.

**Needs a database step Matthew has to do himself** — `FLASHCARD_SETUP.sql`,
same pattern as `THROTTLE_SETUP.sql` and `ACCOUNT_SETUP.sql` before it. Until
he runs it, judging a card silently does nothing (the Server Action checks
`FLASHCARD_REVIEW_ENABLED` the same way `recordActivity` checks
`PROGRESS_ENABLED` — missing config fails quiet, not loud).

**An event log, not a state table — on purpose, and it's worth being
explicit about why this wasn't the obvious "one row per card" design.**
PROGRESS_SETUP.sql already argues for event logs over pre-computed state for
the activity table; `flashcard_reviews` follows the same shape: one row per
judgement, and `flashcard-review.ts` FOLDS a card's own history into its
current box and next due date, the exact way `getProgress` already folds
`activity` rows into coverage and accuracy. Consistency was the deciding
factor over a marginally simpler upsert — the codebase now has exactly one
pattern for "how do we store what someone did," not two.

**A plain five-box Leitner system.** Box 1 → 10 minutes, box 2 → a day, box
3 → three days, box 4 → a week, box 5 → 16 days. Get it right, climb a box;
get it wrong, fall straight back to box 1. Box 5 isn't "solved forever" —
memory fades even for things once known cold, so it keeps resurfacing every
16 days rather than dropping out of rotation.

**The card's identity is its own TERM TEXT**, not a database id — there was
no id to use, every other identifier on the site (topic slugs, subject
slugs) already exists, and inventing a new one just for this would be a
second thing to keep in sync with the content files by hand. The cost:
rewording a flashcard's term resets that one card's spaced-repetition
history. Judged an acceptable, rare trade rather than a reason to add
per-card ids to every content file.

**Spaced repetition only tracks cards you've actually judged at least
once** — flipping a card in the ordinary browsing view (Flashcards.tsx)
still counts toward "flashcards reviewed" on the progress page as before,
but doesn't put anything in the review queue. Only clicking "Got it" or
"Still learning" schedules a card. Seeding every unreviewed flashcard on the
site into "due" on day one would have buried the two or three cards someone
has actually struggled with under hundreds they've never even seen.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

**All three of Matthew's picks from this session are now done:** streaks
and a daily goal, subject tests (formerly "mock exam"), and
spaced-repetition flashcards.

## XP, levels, badges, streak freeze, celebrations (2026-08-18)

Duolingo-style layer on top, requested after seeing the streak feature.
Everything here is DERIVED from figures `getProgress` was already
computing — no new table, no new column, nothing to migrate.

**XP is deliberately linear** — 10 XP per question, 5 per flashcard, and a
flat 100 XP per level, not a curve that demands more each level. A growing
requirement rewards people who were already doing a lot; flat means the
tenth question tonight is worth exactly what the first was, which felt like
the more honest message for a revision site specifically.

**Badges are a fixed list of 8, always all returned, each with an `earned`
flag** — First steps, Week warrior, Month master, Century, Flashcard
fanatic, Subject master, All-rounder, Perfectionist. A locked badge is shown
dimmed rather than hidden, on purpose: something to aim for, not a surprise
that appears from nowhere.

**The streak freeze forgives one missed day per rolling week, automatically
— there's no currency or inventory to manage**, unlike Duolingo's own
freeze tokens. Worth reading `computeStreak`'s comment in full if this is
ever touched again: the first version had a real bug, caught before it
shipped, where a freeze got "spent" on a brand-new user's very first
(completely empty) day, and could manufacture a streak out of a single
stray active day from weeks ago with nothing near it. The fix is a
one-day look-ahead — a freeze is only actually spent if it bridges to more
real activity just beyond the gap, never spent on a dead end.

**Celebrations always show Pixel**, regardless which subject or mascot the
moment came from — Matthew's explicit call: Pixel was the first mascot
ever designed on this site and the one the whole visual style grew out of,
so it's Pixel's job to celebrate, the way a game's mascot shows up at a
results screen no matter which level you were playing. Confetti is a CSS
keyframe added to `globals.css` (`animate-celebration-fall`), following the
exact pattern the walk-cycle/bob animations already used there, not a new
way of writing animations. `localStorage` remembers what's already been
shown (level, each streak milestone, today's goal) — same tool
`ThemeToggle.tsx` already uses, for the same kind of reason: this is a fact
about the browser, not something the site's data needs to remember anywhere
else.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Four more badges, and a "languages count as one" rule (2026-08-18)

Matthew asked for four more badges on top of the original eight: **Double
century** (200 practice questions), **Test ace** (completed a test in every
subject), **Grand master** (100% topic coverage AND a completed test, in
every subject), and **Marathon reviser** (10 hours revising, all-time —
not just this week, which is all `secondsThisWeek` tracked before now).

**"Completed a test" needed a new kind of event.** Tests weren't being
recorded anywhere — MockExam only ever called `recordAnswer` per question,
same as ordinary practice. Added `kind: "test"` to `ActivityKind`, one row
per finished test (recorded against the subject as a whole, since a test
spans every topic rather than belonging to one), written by a new
`recordTestCompletion(subject)` Server Action and fired from MockExam's
existing "finished" effect. **This needed a database change** —
`TEST_BADGE_SETUP.sql` widens the `activity` table's CHECK constraint to
allow `'test'` alongside the existing three kinds. Matthew needs to run
this one in the Supabase SQL Editor, the same way as the others — until
then, `recordActivity` fails quietly on every test completion (by design,
so a database hiccup never blocks the finish screen) and the two new
test-based badges just never unlock.

**The languages rule Matthew asked for:** "if a person does only one of
the languages, count it as they do all of the languages, because people
learn only one of the languages in school." Added a helper,
`allSubjectsSatisfy`, used everywhere a badge means "every subject" —
Spanish, French and German are treated as satisfied if the student has
done the thing in ANY ONE of them, not all three, because a real GCSE
student studies exactly one modern foreign language and the site lists all
three only because it can't know in advance which one that is. This does
**not** extend to Biology/Chemistry/Physics — those are three separate
GCSEs everyone here actually takes, so "every subject" stays literal for
the sciences. Retrofitted the existing **All-rounder** badge to use the
same rule, since it was already an "every subject" badge and would have
been inconsistent otherwise.

**One judgement call worth flagging, since I was interrupted before I
could ask:** "another badge for completing every single subject hundred
percent, including the tasks" was ambiguous between "100% topic coverage"
alone and "100% coverage AND the tests done too." Went with the second,
stricter reading (Grand master needs both) — partly because "including the
tasks" reads most naturally as an extra requirement, and partly because a
badge that's just a rename of "Subject master, but for every subject" felt
like it needed its own reason to exist. Matthew — if you meant just
coverage, say so and it's a one-line change (drop the `testedSubjects.has`
half of the condition).

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## The streak moved to the homepage (2026-08-18)

Matthew's ask: the streak already existed, but buried on `/dashboard` it
wasn't doing its job — nobody sees a stat on a page they don't visit. "Make
it more visible... give it the purpose of making people scared of losing
it." Picked the boldest of three options offered (a small always-there
header badge, a big homepage takeover, or both): the homepage takeover.

**`StreakSpotlight` (new component) replaces the "Welcome back" box on the
homepage for logged-in visitors.** Logged-out visitors still see the old
plain welcome box — there's no streak to show someone who hasn't got an
account. For everyone logged in, it's now the first thing on the page: a
huge flame and streak number, a headline, today's goal bar, and a button
straight into revising. The rest of the homepage (subject cards) just
moved down to make room — nothing was removed, only reordered.

**The "scared of losing it" part is a colour and a sentence, driven by one
new condition: `atRisk` (`streak.current > 0 && !streak.activeToday`)** —
there's a real streak, and nothing has been done yet today to protect it.
Only then does the card turn amber/warning and say "Don't lose your N-day
streak!" with a "Save your streak →" button. A brand-new streak of 0 isn't
"at risk", it hasn't started yet — that gets an invitation ("Start your
streak today"), not a warning. Getting this distinction right mattered: a
warning on someone's very first visit, before they've ever done anything,
would just be confusing.

**`FlameIcon` moved out of `dashboard/page.tsx` into its own file**
(`components/FlameIcon.tsx`) since two places now draw the exact same
flame (the homepage spotlight and the dashboard strip) — pulling it out
once means they can never quietly drift into two different-looking flames.
The dashboard's own streak strip is untouched otherwise; it's still there,
so the streak is now visible in two places instead of one, not moved from
one to the other.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Pixel's wardrobe, and a focus timer (2026-08-18)

Two more of Matthew's picks from the same "any ideas?" round as the streak
spotlight above.

**Pixel's wardrobe.** Matthew's original phrase was "spend the XP you're
already earning to unlock cosmetics" — read as XP (and the streak, and
badges) being the UNLOCK CONDITION rather than a currency with a balance to
manage. `PixelOutfits.tsx` defines five outfits (Classic, Shades, Party
hat, Cape, Crown), each unlocked by a different existing figure —
`getProgress` already computes level, streak and badges, so nothing new is
stored for "is this unlocked", same "derive, don't store" reasoning as
badges themselves. Deliberately varied conditions (a level, a streak
length, a badge count) rather than all four gated on the same number, so
unlocking one has nothing to do with what you were already doing to get
another.

**Which outfit is EQUIPPED, though, is a genuine preference with nothing
server-side to check** — nobody else ever sees it, and getting it wrong
costs nothing. That lives in `localStorage`, the same call already made for
the theme toggle and for which celebrations have been shown. `/wardrobe`
(new page) is where it's chosen; a "Dress up Pixel — N/5 unlocked" banner
on the dashboard is how it's found, styled and positioned the same as the
existing flashcards-due banner, except always shown — there's always
another outfit worth working toward.

**The actual payoff is in `Celebration.tsx`**, not the wardrobe page
itself: Pixel now shows up wearing whatever's equipped every time something
gets celebrated (a level-up, a streak milestone, the daily goal), so
dressing Pixel up isn't a gallery you have to remember to go look at — it's
what's waiting the next time there's something worth celebrating.

**Outfits are a separate layer drawn on top of (or, for the cape, behind)
the ordinary `<Pixel>`, not a change to Pixel's own SVG.** Every existing
place Pixel already appears — subject cards, the topic-page ladder, the
dashboard grid — renders through the untouched original component, so
there was zero risk of an outfit change affecting any of them. The new
`PixelWithOutfit` wrapper forces its box to Pixel's own 120:140 aspect
ratio (`aspectRatio` in `style`) so an accessory positioned "over the eyes"
or "above the head" as a percentage lines up correctly regardless of what
height class a caller uses.

**Focus timer.** A visible 25-minutes-on/5-minutes-off Pomodoro timer,
shown on every topic page with real content. Deliberately does **not**
call `recordStudyTime` itself — `StudyTimer` (unchanged) already records
every second a topic page is visible and being used, focus timer running
or not, so this would have double-counted the exact same minutes. Its only
job is structure: a countdown, a clear focus/break label, and a chime
(built with the Web Audio API, no audio file to ship) when a phase ends.
Shown to every visitor, not just logged-in ones — unlike `StudyTimer`,
using it needs no account and records nothing, so there was no reason to
gate it.

No new database tables, no new Server Actions, and no new Supabase SQL for
either feature — everything here is either derived from figures that
already existed, or a browser-only preference, in keeping with how
everything else on this site is either "stored, once, as an event" or
"computed fresh every time".

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Pixel, everywhere (2026-08-18)

Follow-up to the wardrobe, same day: "since Pixel is now our website
character, put him in different parts of the pages... make sure he changes
outfits depending on what's chosen." Before this, the only place a chosen
outfit actually showed was the celebration popup — real, but easy to miss
for days at a time. The wardrobe existed; Pixel wearing the result of it
mostly didn't.

**New shared component, `PixelCompanion.tsx`**, used everywhere below —
one place that reads the equipped outfit from `localStorage` (see
`PixelOutfits.tsx`) and renders `PixelWithOutfit`, rather than five copies
of the same read-after-mount logic slowly drifting apart. Takes a size
class and an optional `linkToWardrobe` (on by default — clicking Pixel
anywhere takes you to the wardrobe to change him; off on the wardrobe page
itself, since linking to the page you're already on is pointless).

Five placements, each sized to the page it's on:

- **The header** (`SiteHeader.tsx`) — small, first in the row before the
  name greeting. This is the one that actually delivers "everywhere":
  `SiteHeader` renders on every single page, so this alone puts Pixel on
  every subject page, every topic page, the dashboard, progress, the
  wardrobe — all of it — without touching any of those pages individually.
- **The homepage** (`StreakSpotlight.tsx`) — centred above "Welcome back",
  since that card is the first thing anyone logged in sees on the whole
  site.
- **The dashboard** — bigger, next to "Hi, {name}", the page you land on
  right after logging in.
- **The progress page** — same treatment as the dashboard, next to "Your
  progress".
- **The wardrobe page itself** — biggest of all, no link (see above),
  since showing Pixel off IS this page's job.

Only shown when logged in everywhere except the wardrobe page (which
already redirects logged-out visitors away) — there's no outfit to wear
without an account, so a logged-out visitor sees the exact same header,
homepage and so on as before any of this existed.

Zero changes to Pixel's own component or to any of the many places he
already appeared as the Computer Science subject's mascot (subject cards,
the topic-page ladder, mock exam screens) — those all render the original,
untouched `<Pixel>` exactly as they did before the wardrobe existed.
`PixelCompanion` is additive, not a replacement.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Retracting that last line: every Pixel now wears the outfit (2026-08-18)

Same day, immediate follow-up. Matthew: "make sure that every single Pixel
has an outfit equipped by the user" — and he was right to ask. The note
directly above this one said the CS-subject-mascot places were untouched
"on purpose", but that reasoning didn't survive contact with what he
actually wanted: he doesn't think of Pixel as "the Computer Science icon
that happens to also cameo elsewhere" any more, he thinks of Pixel as the
site's character, full stop — so every one of those places was actually a
gap, not a deliberate boundary.

**Found every remaining spot with `grep -rn "MASCOTS\["`:** the homepage
subject cards, the dashboard's subject grid, the "next up" mascot on both
the dashboard and the progress page, the progress page's subject cards,
the subject page's hero, the {subject} test intro screen, and the
topic-page ladder — eight render sites across six files, all sharing the
exact same generic pattern (`const Mascot = MASCOTS[x.mascot]; ...
<Mascot />`), because every one of them draws whichever subject's mascot
is relevant, Pixel included, with no special case for Pixel at all.

**New shared `MascotDisplay.tsx` replaces every one of those sites.** Given
a mascot key, it renders `PixelWithOutfit` with the equipped outfit if
(and only if) that key is `"pixel"`, and otherwise renders the exact same
plain mascot component `MASCOTS[mascot]` always rendered — so Hoot, Quill,
Knight and the rest of the cast look precisely as they always have,
everywhere. The special-casing lives in ONE place now, not duplicated
across six files each deciding for themselves whether this particular
mascot happens to be Pixel.

Confirmed nothing was missed by re-running the same grep afterwards — the
only `MASCOTS[` lookups left are `MascotDisplay`'s own fallback and the two
subject-group picker pages (`subjects/languages`, `subjects/science`),
which can only ever show Spanish/French/German or Biology/Chemistry/
Physics and so never touch Pixel regardless.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Homepage sorted by rough GCSE workload (2026-08-18)

Matthew: "sort out the subjects... by how much [revision] people are
usually doing on them, roughly" (heard as "supervision" — read as
"revision" and confirmed with him before touching anything, since getting
that one word wrong would have meant reordering the whole homepage on a
guess). Asked what the ranking should actually be based on — his own
recorded time, subject content volume, or a general workload estimate — and
he picked the general estimate, applied to the homepage only.

**New optional `revisionWeight` field on `Subject`, and a required one on
`SubjectGroup`** (every group card always appears on the homepage, so it
always needs one; a subject INSIDE a group like Biology or Spanish never
appears as its own card, so it never gets one — a number nothing would ever
read). Documented at length, right above `SUBJECT_GROUPS`, as exactly what
it is: a rough, hand-judged ranking from ordinary GCSE study-time guidance —
paper counts and content breadth, roughly — not anything measured from the
site's own data, and not gospel. The comment says outright that the fix for
a wrong-feeling order is just editing the numbers.

**The actual ranking, heaviest to lightest:** Science (10, three GCSEs'
worth of content behind one card), Maths (9, cumulative, three papers),
English (8, Language + Literature combined, texts to memorise), History
(7, widely reckoned one of the most content-heavy essay subjects),
Languages (6, four skills each demanding ongoing vocabulary work),
Geography (5), Computer Science (4), Business (3), Religious Education
(2), Citizenship (1, commonly one of the lightest GCSEs on offer). Worth
saying plainly: this is my best general read of typical GCSE workload, not
authoritative — if any of it doesn't match Matthew's own school or exam
board, the numbers are the whole mechanism and easy to change.

**Sorted only in `app/page.tsx`, not inside `homepageCards()` itself** —
that function is shared with the dashboard's own subject grid, and Matthew
asked for this on the homepage specifically. `.sort()` mutates the array
it's called on, which is safe here only because `homepageCards()` already
builds a fresh array on every call; the dashboard's own call is completely
unaffected.

`tsc -p tsconfig.json`, `eslint`, and `scripts/check-content.mjs` (87,556
checks, content untouched) all clean.

## Three more: test score history, printable sheets, accessibility (2026-08-19)

Matthew was out of ideas again and asked what's next. Offered four options;
he picked three of the four — test score history, printable revision
sheets, accessibility settings — and left "GCSE countdown & planner"
unbuilt for now.

### Test score history

`recordTestCompletion` only ever recorded THAT a test happened, never how it
went — no score existed anywhere to show a history of. **New
`TEST_SCORE_SETUP.sql`** adds two more nullable columns to the `activity`
table, `score_correct` and `score_total`, meaningful only for `kind =
'test'` — the same "a column that's only meaningful for one kind of row"
pattern as `correct` (practice) and `seconds` (time). **Matthew still needs
to run this in Supabase**, the same as `TEST_BADGE_SETUP.sql` before it —
until then, tests keep recording fine (badges still work), they just won't
have a score attached, and the history stays empty.

`recordTestCompletion(subject, correct, total)` now takes the score,
clamped the same defensive way `recordStudyTime` clamps seconds (a Server
Action is reachable by anything that can make an HTTP request, not just
MockExam's own finish handler). `MockExam.tsx` passes its own `correct`/
`markable` figures — declared further down the component than the effect
that reads them, which is fine: the effect only actually reads them once it
RUNS, by which point the whole render has finished and they've settled.

`getProgress()` gained `testHistory`: every `'test'` row with a real score,
newest first, capped at the last 30, shaped with the subject's name/mascot/
colour already attached rather than making the page look them up. A test
row with a missing score (recorded before the SQL above runs, or a subject
whose pool has zero auto-marked questions) is filtered out rather than shown
as a hollow "0/0". Rendered on `/progress` as a new section — mascot,
subject, date, a short percentage bar, X/Y — that only appears once
there's something in it.

### Printable revision sheets

**New route, `/subjects/[subject]/[topic]/print`**, not a print stylesheet
bolted onto the ordinary topic page. The ordinary page is built for
revising ON screen — a sticky jump menu, flip-to-reveal flashcards, a
climbing mascot in the margin — none of which means anything on paper, and
hiding all of it with `print:hidden` everywhere would mean two designs
tangled into one file. The print route reads the exact same
`getTopicContent`, lays out key facts, worked examples, common mistakes,
plain term/definition pairs and exam technique as a plain black-on-white
sheet, and leaves out the interactive practice questions and flip cards —
there's nowhere on paper for the site to mark an answer. `break-inside-
avoid` on each block stops a heading being stranded at the bottom of a page
with its content on the next one. A small `PrintButton.tsx` Client
Component is the only bit that needs the browser (`window.print()`).
Linked from the ordinary topic page as "Printable revision sheet", next to
the focus timer.

Also added a real `@media print` block to `globals.css` for the rest of the
site — if anyone hits Ctrl+P on an ordinary page, it now prints as ink on
paper instead of the on-screen dark gradient background, which would have
wasted a page of a printer's ink turning it almost solid dark.

### Accessibility settings

Three independent toggles — larger text, a dyslexia-friendly font, reduced
motion — stored together as one PREFERENCE object in localStorage, the same
category as dark mode: a fact about the visitor's browser, not the site's
data. **New `AccessibilityPanel.tsx`** (three switches, same shape as
`ThemeToggle`) and **new `/accessibility` page**, reachable from the
footer next to Privacy since it works whether or not you're logged in.

Same "no flash on reload" problem dark mode already solved, solved the same
way: **`layout.tsx` gained a second bootstrap `<script>`** that reads the
stored preferences and adds the matching classes to `<html>` before React
ever hydrates. It's a hand-written copy of the panel's own read/apply logic
rather than an import, because a raw `<head>` script runs before any JS
bundle has loaded — the same trade-off the theme script already makes, and
the same risk: if the stored key or class names ever change, both copies
need updating together.

`.a11y-large-text` scales the root font-size, which reaches Tailwind's
spacing utilities too since almost all of them are rem-based, not just
text. `.a11y-dyslexia` swaps to Verdana/Tahoma with extra letter and line
spacing — not a dedicated dyslexia typeface (none is bundled), but the same
practical wins with fonts every device already has. `.a11y-reduce-motion`
is the exact same rule the `prefers-reduced-motion` media query already
uses, just reachable by a class instead of only an OS setting, for a
visitor who wants the choice sitting inside the site itself.

### Verification, and one wrinkle worth recording

`tsc -p tsconfig.json --noEmit` and `scripts/check-content.mjs` (87,556
checks, content untouched) both ran clean. **`eslint` did not finish this
round** — every invocation, even a single trivial file with a stripped-down
non-type-aware config, ran past the 45-second ceiling this device session
allows per command, and background processes (`nohup`/`disown`, and a
detached `tmux` session) were both found to get killed the moment the
device_bash call that launched them returns, rather than surviving to be
polled from a later call the way earlier verification in this project
assumed they would. Worth flagging rather than quietly skipping: this is an
environment change, not a decision to skip checking. Every file was
re-read and reasoned through by hand instead, and `MockExam.tsx`
specifically carries an `eslint-disable-next-line react-hooks/exhaustive-
deps` with a comment explaining exactly why (it should fire once per exam,
not once per answered question) — the one rule most likely to actually
flag something in this batch. Worth running `eslint` for real from a
normal terminal before trusting this fully.

One stray file: a throwaway `lint-fast.config.mjs`, used to attempt the
faster non-type-aware eslint run above, couldn't be deleted from here (this
bridge can't delete files on your machine) and was moved to
`_to_delete/lint-fast.config.mjs` in the project root instead — safe to
delete that file and the `_to_delete` folder yourself, and it was NOT
committed to git.

## The multiple-choice bug: every correct answer was "A" (2026-08-20)

Matthew, after a mock exam: every multiple-choice question he could answer
by just clicking option A. Checked it properly rather than taking it on
faith — sampled the `choices`/`accept` pairs across several subjects'
content files, and the correct answer sat in `choices[0]` on 85–100% of
multiple-choice questions in every subject checked (Physics: the whole
sample; Spanish 96/110; French 93/94; German 64/65; Religious Education
91/91). Not bad luck — content is naturally WRITTEN with the right answer
first (you think of the correct one, then invent three wrong ones to go
with it), and nothing ever reordered the choices before showing them on
screen. A student could pass most multiple-choice quizzes on the site
without knowing a single fact, which is about as bad as a revision site's
marking can be wrong.

**Fixed at the display layer, not in the content.** Editing the correct
answer's position across roughly a thousand multiple-choice questions in
14 content files would be slow, error-prone, and would still need
discipline forever afterwards to avoid the same bias creeping back in the
next time someone (or something) writes a question. Instead, both places
that render multiple choice — `Practice.tsx` (topic pages) and
`MockExam.tsx` (mock exams) — now shuffle each question's `choices` array
into a random display order the moment it's shown, once per question, not
once per render (so the buttons don't reorder themselves under someone's
finger mid-decision). `accept` still matches by the choice's TEXT, never
its position, so marking needed no changes at all — this is purely "what
order the buttons happen to appear in."

**New shared `app/lib/shuffle.ts`**, holding the Fisher–Yates shuffle that
used to live only inside the exam page (picking which questions appear in
a mock exam). Same operation, two different arrays to apply it to — the
exam page now imports it instead of keeping its own copy.

`Practice.tsx` shuffles via a bit of state reset alongside its existing
`states`/`recorded` reset (the same "topic changed under me" pattern
already documented in that file), since the same component instance can be
reused across topic navigations and needs fresh shuffles for fresh
questions. `MockExam.tsx` shuffles via `useMemo` keyed on `questions`
instead, since a mock exam's question list never changes mid-exam the way
Practice's does between topics — simpler is correct there.

`tsc -p tsconfig.json --noEmit` ran clean. `scripts/check-content.mjs`
could not be run this round — the device connection kept timing out
partway through the command after several retries — but nothing here
touches the content files themselves (only how three components RENDER
existing content), so there's no reason to expect it not to still pass;
worth running it yourself to be sure. `eslint` still could not be verified
from here either, for the same reason as the previous entry.

## Fixing "always A" and the missing test history (2026-08-20)

Two real bugs came out of actually using the site after the last update, which is exactly the kind of thing that only shows up once someone plays with the finished thing rather than reading the code.

**Bug one: every multiple-choice question could be answered by clicking "A".** Matthew reported this after taking a real test — every question he saw, the correct answer was the first option. Checked a sample of subjects (physics, spanish, french, german, religious education) directly in the content files, and it wasn't his imagination: 85–100% of multiple-choice questions in every sampled subject have the correct answer authored as `choices[0]`. That's not a bug in the content — nobody writing questions thinks to scramble the options, and there was never any reason to until a website started showing them in a fixed order.

The fix doesn't touch content at all, because the content isn't wrong — a printed worksheet with the answer always in position A would be fine, since nobody reads worksheets in reliable serial order across dozens of questions and remembers the pattern. The problem is purely a display one: the same fixed order shown on a screen, repeatedly, effectively hands out the answer. So the fix is a shuffle at render time only — a new shared `shuffle.ts` (Fisher–Yates, the same algorithm the exam page already used to pick which questions to include) is now also used in `Practice.tsx` and `MockExam.tsx` to scramble the order the multiple-choice options are displayed in, per question, computed once when the question set loads. Marking logic is untouched — it still checks against the real correct answer, whichever position it now happens to be shown in.

**Bug two: test score history never showed up, even after running the setup SQL and completing a real test.** This one took longer to track down, and needed going through the Supabase Table Editor by hand together to actually see what was and wasn't in the database — the app was silently failing to write anything, without showing any error to the user, so there was nothing wrong on screen to point at.

Walking through the `activity` table row by row (all 84 rows, sorted and re-sorted a few different ways) showed zero rows with `kind = 'test'` anywhere, despite `TEST_SCORE_SETUP.sql` having been run correctly and a full mock exam having been completed. That narrowed it down to the database rejecting the write itself rather than the app failing to send it. The actual cause: an earlier migration, `TEST_BADGE_SETUP.sql`, was supposed to widen the database's CHECK constraint on `activity.kind` to allow `'test'` as a valid value alongside `'practice'`, `'flashcard'`, and `'time'` — but it had never actually been run in Supabase. Every attempt to record a completed test was being silently rejected by Postgres at the database level, with the failure caught and logged rather than shown, so nothing ever appeared to go wrong.

Fixed by re-running `TEST_BADGE_SETUP.sql`, which drops and recreates the constraint to include `'test'`. Confirmed working immediately after: completing another test produced two real rows in `activity` with `kind = 'test'` and real scores attached (maths 2/16, citizenship 0/19), and the Test Score History section on the site started showing them.

**Verification.** `tsc -p tsconfig.json --noEmit` passes clean against the committed state, and `scripts/check-content.mjs` still passes all 87,556 checks (expected — this round of fixes didn't touch content, only how multiple-choice options render and one database constraint). `eslint` still couldn't be verified from this environment for the same reason noted in the previous entry, but the change here is small and mechanical enough (a shuffle applied at render time, a one-line SQL constraint fix) that this is a low-risk gap. Both fixes are committed (`15f2aaa`) and pushed to `origin/main`.

One housekeeping note: there's a leftover `_to_delete/lint-fast.config.mjs` sitting in the project folder from an earlier attempt to speed up an `eslint` check — it's not part of the app and isn't committed to git, just delete that file (and the `_to_delete` folder, if it's empty afterwards) whenever convenient.
