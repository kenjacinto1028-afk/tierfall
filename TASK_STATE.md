# TierFall task checkpoint (player-safe)

## Portrait-led page reader — 2026-11-21
- [x] Inspected GitHub main and GITHUB_SYNC.md before editing.
- [x] Replaced the visible generated-scene art panel with a portrait rail and centered story text.
- [x] Implemented context-aware approved portraits, active selection, up to three reading pages, and final-page choice gating.
- [x] Preserved story engine, saved-game format, top navigation, map, and mobile support.
- [x] Added portrait-reader UI regression test and checked source syntax and story transitions.
- [x] Synced code, test and PROGRESS.md to GitHub with small commits.
- [ ] Visually verify deployed desktop and mobile GitHub Pages screens when a browser connection becomes available.

## Restrictions
The repository is public. Do not upload unreleased narrative spoilers or replace approved portraits without permission. No releases or Pages activation without permission.

## Object focus cards + portrait clarity — 2026-11-21
- [x] Reviewed main, GITHUB_SYNC.md, previous checkpoints, current game and portrait manifest. Confirmed approved neutral portraits are only 240×300 WebP; originals remain protected.
- [x] Created 7 spoiler-safe SVG object-focus illustrations at `game/assets/focus/*.svg` (route chart, rank band, seal, ledger, notice, scanner, bell); verified upload.
- [x] Added scene/beat-aware artifact cards and descriptions, with spoiler-safe reveal timing, narrator-only wide view when no object, and responsive layout (`game/tierfall-chapter1-expanded-edition.html`).
- [x] Added 2× Canvas high-quality resampling with mild edge enhancement, in-memory cache and native-image fallback; original approved portraits remain unchanged.
- [x] Added `tests/object-focus-and-portrait-clarity.test.mjs`, checked 7 SVGs, beat gating, Canvas 2× mock, source portrait integrity, JS syntax and all 12 story background transitions; all passed.
- [x] Synced code, seven focus SVG assets, tests and PROGRESS.md to GitHub `main`; verified remote content hashes, two embedded scripts and byte-identical story engine. No portrait source files replaced.
- [ ] Browser screenshot QA (desktop and phone) when actual connected browser access is available.

## Portrait matte and premium cards — 2026-11-21
- [x] Confirmed GitHub main read/write access, read GITHUB_SYNC.md, latest game code and previous portrait patch; confirmed approved 240×300 portrait originals must remain unchanged.
- [x] Added restrained charcoal/slate/brass portrait frame, subtle illustrated texture, depth and mobile polish in `game/tierfall-chapter1-expanded-edition.html` (commit a4b732a).
- [x] Implemented light-matte detection, edge-connected background cleanup, 2× high-quality lossless in-browser rendering, and original-image fallback in `game/tierfall-chapter1-expanded-edition.html` (commit 3687fec).
- [x] Expanded `tests/object-focus-and-portrait-clarity.test.mjs` to cover safe matte removal, original image integrity, 2× PNG output, cache and all 12 starting story variants; passed against current remote source (commit 1593f16). CSS includes mobile and reduced-motion adjustments.
- [x] Verified remote GitHub `main` readback: both inline scripts parse, story engine byte-identical, approved Sera/Jalen source hashes untouched, regression test PASS, and PROGRESS.md updated. Deployed screenshot QA remains pending.

## Batch 02 emotion-sheet review (11–20) — 2026-11-21
- [x] Inspected public GitHub repository, GITHUB_SYNC.md, existing portrait_manifest.json, player-safe approved designs, and local continuation checkpoint.
- [x] Confirmed ten characters by manifest order: Ilyra Sen through Peli Serran. Reviewed exact neutral portrait references and ages/ranks before creating artwork.
- [x] Generated one combined six-expression concept image; separate native-resolution character generations did not preserve requested cast. Cropped into ten 4× resampled WebP review sheets and packaged a ZIP; *do not call these native-HD redraws*.
- [x] Synced ten individual image files under art/review/emotion-sheets-batch-02/, with gallery README. Verified Git blobs match original local bytes exactly, committing small checkpoints.
- [x] PROGRESS.md updated; live portraits, game code, and save data untouched. No story spoilers or releases published.
- [ ] Individually generated native-HD emotion sheets remain pending for character likeness fidelity. Keep current game portraits until explicit art-swap approval.

## Narrative architecture approval — 2026-11-21 (player-safe)
- [x] Reviewed repository sync policy, playable Chapter 1 state model and approved player-safe world/character canon.
- [x] Recorded three acts, flexible chapter count, 6–8 hours total and a minimum 3.5-hour Act II.
- [x] Approved balanced meaningful choices and three structural turning-point functions (no event details disclosed).
- [x] Added `docs/player_safe/NARRATIVE_DEVELOPMENT_PLAN.md`, updated `docs/player_safe/PLAYER_BRIEF.md` and `PROGRESS.md`.
- [ ] Confidential act-by-act plot beats, character-secret arc cards, clue/payoff ledger and unpublished long-form drafts: create only in **private** storage, not the public repository.
- [ ] Later validate continuity and route length against the actual integrated narrative.
- [x] No game, portraits, saves, releases or Pages settings changed in this planning phase.

## Phase 1 — Narrative consistency audit (2026-11-21; player-safe)
- [x] Read current sync instructions, checkpoint, approved world/character references, Prologue/Chapter 1 source and portrait manifest.
- [x] Audited 27-character baseline, 12 starting combinations, 16 current scene nodes, choice/flag/save structure and established timeline constraints.
- [x] Stored full internal continuity/choice reference in a **private personal ChatGPT Page** named `TierFall — Private Canon & Continuity Bible (Phase 1)`; verified no direct or inherited collaborators.
- [x] Logged 10 follow-up items in private working material. No future plots, character secrets or endings disclosed.
- [x] Published `docs/player_safe/PHASE1_CONTINUITY_STATUS.md` and updated `PROGRESS.md`; readback verified.
- [ ] Next: private three-act narrative outlining; no unreleased scripts or spoilers may go into this public repository.
- [ ] Future integration needs compatibility checks for character-creation fields and existing Chapter 1 completed saves.
- [x] No existing game story/code, portrait asset, save data, GitHub Pages setting or release changed.

## Phase 2 — private whole-story outline (2026-11-21; player-safe)
- [x] Rechecked canonical GitHub main, public repo restrictions, approved characters/world and private Phase 1 continuity Bible.
- [x] Locked protagonist starting age **27–30** in four player-safe reference documents and preserved childhood friend Sera Venn at **27**.
- [x] Logged separate future portrait/HD-emotion audit against 27 approved original designs; do not change installed portraits until approved.
- [x] Prepared protected 11-chapter/three-act storyline, 27 character-development arcs, branch/choice continuity matrix and clue/payoff index. Approximate pacing: 100/230/90 minutes; Act II at least 3.5 hours.
- [x] All 19 Phase 2 static planning checks passed (not gameplay testing). Private material stored as five verified files in personal ChatGPT Library, indexed by a private ChatGPT Page; sharing checked with no collaborators.
- [x] Published public-safe Phase 2 status `docs/player_safe/PHASE2_OUTLINE_STATUS.md` (commit `9c41dea`) and `PROGRESS.md` (commit `5301a69`), avoiding all confidential plot content.
- [ ] Future: write and edit long-form scene drafts, integrate save-compatible Chapter 2 continuation, measure narrative duration and test all branching routes.
- [x] No existing game, unreleased story, portrait, save, release or Pages settings changed.

## Phase 3 — private first-pass manuscript (2026-11-21; player-safe)
- [x] Checked workspace TASK_STATE, current GitHub main, GITHUB_SYNC, approved world/cast references and protected Phase 1–2 continuity/outline files before drafting.
- [x] Authored ten private first-pass future chapter manuscripts, Chapter 2 through Chapter 11, with 82 scene sections and 30 substantial choice groups.
- [x] Ran 35/35 static narrative checks. No game integration or actual playtime testing has occurred.
- [x] Saved and verified 10 confidential manuscripts and 5 internal supporting files in the user's private personal ChatGPT Library; private index Page verified without collaborators at check time.
- [x] Published and verified spoiler-free `docs/player_safe/PHASE3_DRAFT_STATUS.md` (commit `75d9fd8`) and `PROGRESS.md` (commit `a5a6e50`).
- [ ] Next Phase 3 work: substantial editorial/prose expansion with **Act II at least 3.5h measured** and whole-game **6–8h measured**; deepen route-specific character interactions, romance consent routes and epilogue quality.
- [ ] After script approval: compatible Chapter 1 completion-to-Chapter 2 transition, chosen-age UI and route/save testing; no current game changes.
- [x] Confidential plots/twists/character arcs/endings kept OUT of the PUBLIC repository. No live portraits or releases changed.

## Phase 3 — Act II expansion and lore QA (2026-11-21; player-safe)
- [x] Rechecked current canonical GitHub rules, repository state and local private story checkpoints; resumed previous unfinished Phase 3 expansion work without altering live game files.
- [x] Expanded Chapters 4–8 by +9,812 aggregate draft words through 14 additional interludes; ten future chapters total 39,769 aggregate words including alternatives and notes.
- [x] Reconciled private chronology, historical/choice callbacks, character/faction/rank restrictions and forward-only state dependencies. No secrets or future events published.
- [x] Passed 19/19 Phase 2, 35/35 Phase 3 structural and 44/44 new lore/cohesion static checks; actual playable route tests and reading-time tests remain pending.
- [x] Uploaded and byte-size-verified 5 revised confidential manuscripts and 9 private continuity/QA/index/metrics files in personal ChatGPT Library; private Phase 3 checkpoint Page updated.
- [x] Published spoiler-safe Phase 3 expansion/QA status `docs/player_safe/PHASE3_EXPANSION_QA_STATUS.md` (commit `de380bd`) and updated `PROGRESS.md` (commit `1c967e2`). Both remotely verified.
- [ ] Next: continue long-form scene expansion and prose editing until Act II reaches >=3.5h and the full game 6–8h on measured paths; then implement/test game transitions and save compatibility.
- [x] No live portraits, game code, shipped Chapter 1 narrative, releases, or Pages settings changed.

## Phase 3 — second dialogue and later-chapter expansion (2026-11-21; spoiler-safe)
- [x] Read current public GitHub sync policy, status, latest published game state and private working continuity/manuscript checkpoints before editing.
- [x] Expanded 8 confidential chapter manuscripts (Chapters 4–11) with **21 character-led story passages**: **11 Act II**, **10 Act III**, about **10,200 added aggregate words** including conditional alternatives and author notes.
- [x] Preserved existing 82 core scenes, 30 primary future decisions, 12 starting combinations and established canon; fixed three duplicate new scene IDs, relationship-boundary and choice-dependent venue issues.
- [x] Reconciled newer private Library chronology updates rather than replacing them with older local work.
- [x] Private static QA PASS: **19/19 Phase 2**, **35/35 manuscript**, **44/44 lore/cohesion**, **82/82 second-pass**. Complete playable player routes and timed reading remain pending.
- [x] Uploaded 8 updated manuscripts plus private QA/index/source files to personal ChatGPT Library and verified all eight uploaded manuscript SHA-256 hashes against local revisions. Updated personal private checkpoint Page with no collaborators when checked.
- [x] Published only player-safe `docs/player_safe/PHASE3_DIALOGUE_EXPANSION_STATUS.md` (commit `67b2449`) and `PROGRESS.md` (commit `81a1d37`).
- [ ] Future: additional targeted prose/editing, then implement a backward-compatible Chapter 2+ continuation and run **complete route-by-route reading/playtime tests** to measure 6–8h total and Act II >=3.5h; current aggregate words cannot establish those durations.
- [x] No spoiler-protected story uploads to PUBLIC GitHub, live portrait replacement, game code alteration, save changes, release or Pages activation.

## Act-by-act narrative priority — 2026-11-21 (player-safe)
- [x] Reviewed canonical repository rules, latest TASK_STATE and PROGRESS, published Chapter 1, existing private Act I drafts and phase architecture.
- [x] Confirmed both private Chapter 2/3 drafts match latest personal Library bytes; each has nine core sections and three primary decisions.
- [x] Approved new priority: **complete and test Act I first; then bridge and complete Act II; then bridge and complete Act III; then full-game QA.** Later-act manuscripts preserved and frozen for now.
- [x] Created private Act I editorial/continuity checklist in personal ChatGPT Library; no protected story pushed to public GitHub.
- [x] Created/verified public-safe `docs/player_safe/ACT_SEQUENTIAL_DEVELOPMENT_PLAN.md` (commit `9f0cc2c`), amended narrative framework (commit `8ebd730`), and PROGRESS (commit `3e6ed90`).
- [ ] **Active: Act I writing/pacing/continuity:** polish playable Prologue/Chapter 1 without disrupting save history; expand private Chapters 2/3; measure 1.5–2h on complete Act I player routes.
- [ ] **Act I integration gate:** backwards-compatible Chapter 1 end-to-Chapter 2 continuation, 12 start backgrounds, major choice consequence tests, reveal-gated recap and lore consistency before Act II resumes.
- [ ] Later: reconcile final Act I into Act II, complete/test Act II (>=3.5h); reconcile final Act II into Act III, complete/test Act III; full-game target 6–8h.
- [x] No game source, live portraits, saved games, GitHub Pages/release settings or spoiler-protected writing changed in this scheduling checkpoint.

## Act I focused development — 2026-11-21 (player-safe)
- [x] Reviewed current public repo, GITHUB_SYNC, latest checkpoints, protected outline, private Chapters 2–3 and established Chapter 1 scenes before writing.
- [x] Expanded released Chapter 1 with 22 additional dialogue/narration paragraphs (~1,488 words), preserving all original choices, paths, effects and save states. Published/verified commit `fcee4a6`; 480 simulated routes matched existing outcomes.
- [x] Implemented selectable 27/28/29/30 protagonist starting age in new-game UI and save payload with legacy saves retaining unspecified age. Published/verified commit `a283ff4`; tested 48 new backgrounds/ages, 480 legacy-save paths and five invalid inputs.
- [x] Privately expanded Chapter 2 and Chapter 3 with 8 interludes each (~7,700 extra aggregate words); 9 existing core scene sections and 3 primary decisions each preserved; no future story content committed to public GitHub.
- [x] Private static tests: 81/81 checks, 1,200 sampled conditional variants; 2,000 branch-aware volume estimates. Combined Act I estimated visible prose ~16,000 words (actual playtime NOT measured).
- [x] Uploaded expanded Ch2/Ch3, private QA scripts/results, source additions, bridge review and updated private manuscript index to personal ChatGPT Library. Independently re-materialized both manuscripts and checked SHA-256 byte identity.
- [x] Published/verified spoiler-free `docs/player_safe/ACT1_WRITING_AND_QA_STATUS.md` (commit `5abbcc7`), `docs/player_safe/PLAYER_BRIEF.md` (commit `0d9463f`), `PROGRESS.md` (commit `72df4d3`).
- [ ] Next: final line edit, safely connect completed Chapter 1 saves to private Chapters 2–3 without exposing unreleased plot on PUBLIC GitHub; retain old save history/flags, allow legacy age selection, and test real routes.
- [ ] Measure human/browser 90–120-minute Act I complete routes and perform full lore/recap reveal and character identity checks before declaring Act I complete.
- [ ] After Act I certification, connect and resume Act II; Act III follows. Preserve later drafts unchanged until then.
- [x] No approved live portrait swap, release publication, Pages setting change, or future plot upload occurred.

## Act I — playable opening polish and protected Chapters 2–3 expansion (2026-11-21; player-safe)
- [x] Checked current canonical GitHub, GITHUB_SYNC, existing checkpoints, private Act I manuscripts and approved 3-act outline before work.
- [x] Released Chapter 1: added 22 already-released-scene text paragraphs (~1,488 words) in 11 decision scenes. Existing 16 scenes, four Prologue advances, 35 major choices, flags and saved outcomes unchanged; 480 script-driven regression paths matched. GitHub code commit `fcee4a6`.
- [x] Implemented 27–30 starting-age selector (48 age/background configurations), new-game save persistence and legacy age-unspecified import with 480 old-save/choice checks and five rejection tests. GitHub code commit `a283ff4`.
- [x] Privately expanded Chapter 2 and Chapter 3 by 8 substantial interludes each (~7,700 aggregate draft words). Original nine core scenes and three main decisions per chapter preserved.
- [x] Private static narrative QA 81/81, with 1,200 sampled conditional states; 2,000 conditional reading-volume estimates. Combined Act I route-visible text estimated ~16,000 words; actual **90–120 minute playtime not certified**.
- [x] Saved and independently SHA-256 verified the two revised manuscripts in personal private ChatGPT Library, with protected continuity and bridge review, QA results, source additions and updated index.
- [x] Published spoiler-safe `docs/player_safe/ACT1_WRITING_AND_QA_STATUS.md` (commit `5abbcc7`), updated player brief (commit `0d9463f`), and reusable source regression test `tests/act1-age-choice-compat.test.mjs` (commit `690a16e`). Node test runner execution remains a separate check; script-driven game tests already completed.
- [x] Created private Act I handoff checkpoint Page with no direct or inherited collaborators; `PROGRESS.md` updated (commit `70b08b4`).
- [ ] Next: finish line editing, create protected playable bridge from Chapter 1 completed saves to Chapters 2–3, and test end-to-end backgrounds/major choices/legacy age selection.
- [ ] Obtain actual measured Act I playtime within 1.5–2 hours. Keep Acts II and III private/frozen until Act I passes; never commit unreleased story scripts while GitHub is PUBLIC.
- [x] No live approved portraits, releases, or Pages settings changed.

## Act I third private writing expansion — 2026-11-21 (player-safe)
- [x] Reviewed current repository/GITHUB_SYNC/checkpoints and latest two confidential Chapter 2–3 Library manuscripts; verified source SHA-256 against local copies before edits.
- [x] Chapter 2: six substantial new private interludes with individual character dialogue and conditionally relevant choice/background reactions, **+3,193 aggregate source words**. Source preserved; uploaded private.
- [x] Chapter 3: six substantial new private interludes with distinctive dialogue and an earned Act I ending, **+3,146 aggregate source words**. All existing major decisions and reveal timing preserved; uploaded private.
- [x] Fixed older QA script's parsing to distinguish new interludes; passed 85/85 prior checks and 72/72 additional checks, including 34,992 exhaustive static background/decision/legacy-flag configurations. Completed 2,000 sampled route-volume estimates.
- [x] Individually materialized both updated private manuscripts from ChatGPT Library and compared SHA-256 against local drafts. Uploaded private editorial review/QA reports/scripts and updated protected manuscript index.
- [x] Published and remotely verified only spoiler-safe `docs/player_safe/ACT1_DIALOGUE_EXPANSION_ROUND3_STATUS.md` (commit `219b612`) and `PROGRESS.md` (commit `7372c6a`).
- [ ] Next: final narrative line edit and save-compatible *private* Act I interactive reader for Chapters 2–3; keep historical Chapter 1 state and age-unknown imported saves intact; test real branches and measure actual 90–120min Act I duration.
- [ ] Act II/III remain held. Do not publish protected scripts or change approved portraits, releases or Pages settings.
- [x] Released Chapter 1 source and portraits not changed during this expansion pass.

## Act I — private playable candidate (2026-11-21; spoiler-safe)
- [x] Rechecked canonical GitHub sync/privacy state, public Chapter 1, personal private Chapters 2–3 and continuity outlines.
- [x] Assembled private browser playable Prologue/Chapters 1–3 with direct chapter handoffs and the 35 original Chapter 1 immediate-choice reactions.
- [x] Preserved 16 original public story nodes, all saved Chapter 1 decisions, 46 connected private Chapter 2–3 reading sections, six major private decision groups and export/import support.
- [x] Verified valid old completed/in-progress Chapter 1 JSON saves retain history/flags/journal/aliases, with missing age explicitly selected before Chapter 2; private saves use a separate browser key.
- [x] Browser: 48/48 full private Act I simulated paths, 6/6 UI tests, 11 original Ch1 choice-reaction replay checks; 27,000 independent conditional prose checks; no author-only notes or prematurely visible major revelation detected.
- [x] Branch reading volume measured in browser by word count (not actual human time): Chapter 2–3 = 16,218–16,510 words; full Act I approx. 21,171 route-visible words.
- [x] Privately uploaded and independently SHA-256 verified the playable HTML, ZIP, protected editorial report and supporting compiler/test files in personal ChatGPT Library.
- [x] Published only spoiler-safe `docs/player_safe/ACT1_PRIVATE_PLAYABLE_STATUS.md` (commit `0b09f7b`) and `PROGRESS.md` (commit `244134c`), verified readback.
- [ ] Final Act I production gate: test fresh-game original public source loading in normal networked browser, have player/human measure one real 90–120-minute route and review dialogue quality. Browser route tests use canonical-shape original-source fixture, not direct live internet.
- [ ] Do not publish private Act I chapters or their build to PUBLIC GitHub; wait for privacy-safe release approval. Acts II/III remain paused.
- [x] No live portrait replacements, public game code modifications, release actions or Pages changes.

## Act I minimum-five chapter expansion (2026-11-21; spoiler-safe)
- [x] Read canonical public GitHub sync/privacy policy, existing checkpoints, released Chapter 1, current private Act I builds/manuscripts and approved world/cast constraints.
- [x] Updated public chapter scope to **Act I >=5, Act II >=8, Act III >=5** (minimum 18 + Prologue). Old 11-chapter/time allocation superseded. Public plan commits `127424e`, `f5db4af`, `c9e04f5`.
- [x] Authored two substantial **private new Act I chapters**, ~10,500 aggregate manuscript words, 33 additional connected sections, six new decision groups / 18 options, preserving all earlier approved story choices and confidentiality.
- [x] Compiled five-chapter **private playable reader**, retained original published Chapter 1 source requirement, original Ch2/3 decision semantics, and supported automatic continuation from old completed three-chapter private saves. No future plot uploaded to PUBLIC GitHub.
- [x] Tested **48/48** full Chapter 2–5 browser routes across all 12 background combinations and four ages; **6/6** mobile/export/back-forward/import scenarios; **26/26** static lore/structure checks; **68,000 independent conditional dialogue comparisons**.
- [x] Uploaded 17 protected manuscripts/code/build/QA files to personal ChatGPT Library, independently read back and matched SHA-256 on both new chapters, private HTML, ZIP and private chapter-map. Created private personal handoff Page (no direct/inherited collaborators).
- [x] Published and verified spoiler-free `docs/player_safe/ACT1_FIVE_CHAPTER_EXPANSION_STATUS.md` (commit `c82e4c4`) and updated public PROGRESS (commit `8936bfb`).
- [ ] Remaining gate: real human-timed full Act I reading and subjective dialogue/pacing review; fresh official-source network fetch in a real player browser. Do not call these complete based on automated tests.
- [ ] Once Act I is accepted, privately reconcile older Act II/III manuscripts into the approved 8+ and 5+ chapter minimums. These acts remain held.
- [x] No public game code, published Prologue/Chapter 1 scenes, live portraits, releases or Pages changes.

## Act II eight-chapter working candidate (2026-11-21; spoiler-safe)
- [x] Checked GitHub sync/privacy policy, repository checkpoints, approved private five-chapter Act I, original protected Act II drafts and current story/cast authority.
- [x] Reconciled and line-edited five older private Act II chapter scripts for Chapters 6, 8, 10, 11, 13; wrote three new substantial connecting private Chapters 7, 9, 12. Preserved original story secrets from PUBLIC GitHub.
- [x] Built private playable Acts I–II reader with 112 Act II sections (6–13), 24 primary decision groups and one optional personal scene; save key separate from original public game.
- [x] Preserved original published Ch1 choice graph, existing Act I private flags, old five/three-chapter private save migration, age-unknown original Chapter 1 import and old decision history.
- [x] Removed author-facing prose and corrected consent-dependent witness text; private lore/character and chronological-reveal audit passed.
- [x] End-to-end browser routes **48/48**, UI/old-save/mobile/export cases **8/8**, full Act II individual decision options **75/75**, lore and continuity guardrails **28/28**. Live public-source network and human-timed runs not yet validated.
- [x] Uploaded private HTML/ZIP, all eight protected manuscripts, compiler, editorial review and test reports into personal ChatGPT Library. Re-downloaded and SHA-256 checked 12 key artifacts successfully.
- [x] Published only spoiler-safe `docs/player_safe/ACT2_EIGHT_CHAPTER_WORKING_STATUS.md` (commit `9444093`) and `PROGRESS.md` (commit `c9989e4`), verified main branch readback.
- [ ] **Next active Act II task:** Expand route-visible character and social life stories, enrich choice consequences, perform human-paced 3.5h minimum reading/playtest, and test live pinned public Chapter 1 source loading. Current reading-volume estimate alone does not meet/verify target.
- [ ] Leave Act III on hold; preserve spoiler protection until repo confirmed private or another approved private route.
- [x] No live portrait replacement, public game code/story change, release publication or Pages activation.

## Act I audit follow-up — approved implementation / outstanding work (2026-11-21, player-safe)
- [x] Reviewed current GitHub main, `GITHUB_SYNC.md`, `PROGRESS.md`, private audit findings and owner answers; public repo confirmed.
- [x] Recorded spoiler-free revision plan in `docs/player_safe/ACT1_AUDIT_REVISION_PLAN.md` (commit `f3b12e4`).
- [x] Removed save/load/import/export UI and persistent story progress from `game/tierfall-chapter1-expanded-edition.html` (commit `50c2ae7`).
- [x] Corrected three released Chapter One continuity/wording issues (commit `6e2736b`).
- [x] Compiled both scripts, tested 48 routes per story-code commit, then ran 960 varied choice routes on final main. Remote source readback verified.
- [x] Updated existing compatibility/reader tests to no-save design (six separate file commits); remote file content read back for all six.
- [x] Updated `docs/player_safe/ACT_SEQUENTIAL_DEVELOPMENT_PLAN.md` and `PROGRESS.md` to match the approved direction.
- [ ] Run local Node test suite and deployed browser/phone interaction QA; current route checks were code-level.
- [ ] Edit confidential Act I Chapters 2–5 based on approved private audit repairs; keep drafts private, never publish unreleased scripts to the PUBLIC repository.
- [ ] Full Act I conditional-route, chronology, cast/voice and real reading-time acceptance pass (target ~2–2.5 hours).
- [x] No portrait swaps, GitHub Pages configuration, public release or private narrative uploads.
