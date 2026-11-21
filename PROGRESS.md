# Tierfall — Progress checkpoint (player-safe)

## Portrait update — 2026-11-20
- [x] 27 characters have approved base faces, outfits, and ages (see character sheet).
- [x] The Chapter 1 HTML now supports approved portrait files and safe fallbacks without changing saves.
- [x] `game/portrait_manifest.json` documents 27 approved neutral portrait paths and expression draft paths.
- [x] Prepared 42 local WebP files (27 approved neutral portrait crops and 15 additional first-three expression candidates).
- [x] Checked image dimensions and manifest mapping locally.
- [x] **27 approved neutral portraits are uploaded and installed** at `game/assets/portraits/` on `main`; the Chapter 1 HTML resolves these URLs and falls back to embedded art if individual assets cannot be loaded.
- [ ] Complete higher-fidelity matching expression images for the remaining cast (including Matria Celen); do not deploy identity-drifting atlas thumbnails.
- [x] Verify remote GitHub has all 27 image files in the game folder and that their paths match the HTML loader and manifest.\n- [ ] Verify the deployed GitHub Pages browser rendering on the player's actual hosted URL (not yet independently confirmed).

## Art-safety rules
The repository is public. Only player-safe character appearances may be uploaded. Do not include unreleased narrative, protected plot details, or character secrets. Do not publish a release or activate Pages without permission.

## Opening cover update — 2026-11-20
- [x] Prepared a subtitle-free, spoiler-safe Tierfall cover at `game/assets/tierfall-start-cover.webp` (800 × 1200 WebP).
- [x] Updated `game/tierfall-chapter1-expanded-edition.html` to show it in the new-game setup panel; existing character creation and story scripts were preserved.
- [x] Verified cover and updated HTML are present on `main`, including mobile layout and a fallback for a standalone offline HTML without the image asset.
- [ ] Confirm visual appearance on the actual GitHub Pages deployment on desktop/mobile; browser rendering not yet independently validated.

## Protagonist signature marks — 2026-11-20
- [x] Exactly two permanent personal features across all backgrounds: thin diagonal left-eyebrow scar and pale crescent-shaped burn below right jaw.
- [x] Shared childhood origin at age twelve: Thule living-ring pressure-door accident during a power failure.
- [x] Chapter 1 uses unconditional references in the opening, Sera's memory, and checkpoint identification scene; existing Rank V wrist identifier remains distinct.
- [x] Verified JavaScript syntax and ran story-model checks for all 12 job/upbringing combinations including Skip Prologue and an opening choice transition.
- [x] Saved player-safe specification: `docs/player_safe/PROTAGONIST_APPEARANCE.md` and regression test: `tests/protagonist-marks.test.mjs`.
- [ ] No protagonist artwork has been changed; any new/modified portrait requires separate approval.
- [ ] Manual deployed-browser visual QA remains pending.

## Reading interface update — 2026-11-20
- [x] Prologue and Chapter One use a 38% artwork / 62% reading layout on desktop, stacked on narrow screens, with scalable high-contrast text.
- [x] Added four illustrated backdrop locations at `game/assets/scenes/` and mapped every one of the 16 Prologue/Chapter One scene IDs to a setting and restrained mood palette.
- [x] Major-character speakers use their approved portrait assets; minor-character speakers show names without portraits; narration and exploration are environment-first without portraits.
- [x] Added a collapsible right-side Journal/People/World/Glossary/Recap menu, an effects toggle, and reduced-motion support.
- [x] Added gentle environment movement, scene fades, choice highlighting, and mood-dependent lighting; original story choices, saves and portrait mappings remain intact.
- [x] Confirmed JS parses, 12/12 job/upbringing combinations advance through Prologue and Chapter One, 12/12 save roundtrips, and responsive browser-fixture checks at three display widths.
- [x] Verified updated HTML, four WebP scene assets, and regression test `tests/reader-presentation.test.mjs` on `main`.
- [ ] Verify the deployed GitHub Pages game visually on desktop and mobile; hosting access was unavailable during this run.
- [ ] Optional future art refinement: dedicated clinic, agricultural deck, and records-hall illustrations (these currently reuse location-family backgrounds).

## Mobile reading layout correction — 2026-11-20
- [x] Corrected the live hybrid layout after phone screenshot revealed that artwork and text were squeezed into a desktop split.
- [x] On narrow or portrait touch screens, show location artwork above a full-width reading panel; no permanent icon rail reduces reading space.
- [x] Added Save and Visual Effects controls to the collapsible right menu when compact top controls are hidden.
- [x] Preserved the desktop 38/62 hybrid layout, approved character portraits, story text, choices, and existing save schema.
- [x] Tested mobile (390 px), simulated desktop-site phone viewport (980 px touch), tablet (1024 px) and desktop (1440 px) using Chromium: no horizontal overflow, full-width text on compact screens, functional menu/effects/save, narrator and major portrait presentation.
- [x] Verified updated HTML and `tests/mobile-reader.test.mjs` on GitHub `main`.
- [ ] Confirm visual appearance on an actual Android/Brave browser and clear cached content if necessary; automated local fixtures cannot reproduce every browser setting.

## Cinematic reader visual reference — 2026-11-20
- [x] Revised desktop Chapter One/Prologue game frame to match the requested concept: wide illustrated left scene, larger dark reading panel, brass edge detailing, top story navigation, bottom Previous/Next reading navigation, clear speaker presentation and uncluttered choices.
- [x] Preserved narrator/major/minor presentation modes, existing game state, portrait manifest, player choices and local saves.
- [x] Added scene-aware color grading, background positioning, anonymous ambient silhouettes, and group composition using **existing approved portraits** only where characters actually appear; no approved portrait files were replaced.
- [x] Added **four additional spoiler-safe scene illustrations** at \`game/assets/scenes/{medical-ward,garden-deck,records-hall,checkpoint}.svg\`, wired to appropriate chapters and origin-specific work scenes. Existing WebP illustrations remain as fallback.
- [x] Narrow/portrait screens retain stacked illustration and full-width reading text with a fixed page-navigation bar. New controls use the original map/people/journal/settings/save actions.
- [x] Added \`tests/cinematic-reference.test.mjs\`. GitHub source readback, JS parsing, artwork existence, scene-map and presentation-mode checks passed.
- [ ] Automated browser visual QA on the actual hosted GitHub Pages URL and portrait-in-scene composition remains pending; the test browser could not access the deployed URL in this session.
- [ ] Further bespoke painterly character/environment refinement can follow player feedback. No release or GitHub Pages configuration was changed.

## Scene art and character composition refinement — 2026-11-21
- [x] Added a dedicated spoiler-safe illustrated service-market scene at \`game/assets/scenes/service-market.svg\`; the scene uses the pre-existing living-ring illustration as a fallback.
- [x] Refined character staging in illustrated scenes. Only approved faces belonging to characters actually present in the scene are used; approved portrait files and game saves are unchanged.
- [x] Limited background silhouettes to populated scenes, with reduced density in quiet spaces and no silhouettes in empty nighttime or narrator-only scenes.
- [x] Kept desktop 43/57 cinematic layout, tall scene artwork, readable story panel, mobile full-width reading and reduced-motion controls.
- [x] Added optional support for \`game/assets/scenes/reach-yard-v2.webp\` with automatic fallback to the original work-sector illustration. **The optional WebP is not yet on GitHub**; a user-downloadable optimized artwork copy was created locally.
- [x] Added \`tests/scene-composition-v2.test.mjs\`; verified from GitHub that both embedded JS scripts parse, the original story engine is byte-for-byte unchanged, and 12 origin/upbringing starting transitions still work.
- [ ] Upload the optional high-fidelity WebP asset to the public GitHub repository using a binary-capable upload route; the connected GitHub text-file tools were not suitable for transferring this generated binary directly.
- [ ] Visually verify actual deployed GitHub Pages desktop and Android rendering, as the connected browser did not expose an active browser context this session.

## Portrait-led story reader — 2026-11-21 (current)
- [x] Replaced the illustrated gameplay split-screen with a centered, portrait-led reading panel styled after the player-provided three-beat example. The existing environment backgrounds remain in the repository but are not requested or displayed during reading.
- [x] Added a compact cast rail using only already-approved in-game portrait sources, highlighting the current character. A narrator-only scene uses a wider reading surface without an empty portrait panel.
- [x] Divided each scene's original paragraphs into one, two or three reading beats, keeping all source text, prior-choice response, location, and original narrative decisions intact. Decisions are visible only on the last beat.
- [x] Added Previous/Next page navigation, progress dots, final-beat indicator, arrow-key reading, and protection against number-key shortcuts making a choice before its page is visible.
- [x] Retained existing journal, people, world map, glossary, save/export/import and responsive mobile reading mode. Game model and save schema unchanged; live portrait files untouched.
- [x] Added \`tests/portrait-reader.test.mjs\`; verified both game scripts parse, 12/12 character background transitions, and non-empty/complete 3-beat paragraph distribution across 3–7 paragraph scene lengths.
- [x] Verified code and test commits on GitHub \`main\` using content hash readbacks.
- [ ] Live GitHub Pages screenshot and hands-on phone test still require browser access; there was no connected browser context in this run. No Pages configuration or release was changed.

## Scene-focus objects and sharper portraits — 2026-11-21
- [x] Added seven spoiler-safe, scalable vector illustrations under \`game/assets/focus/\`: route chart, rank band, civic seal, shift ledger, public notice, checkpoint reader, and station bell. Art reflects already playable, public scenes and does not add unreleased details.
- [x] Narrator beats with important objects now show a Scene Focus card in the left rail (object picture, title, category, location, short description); when no relevant object exists, the text retains the full-width reader. Existing character portrait cards remain for character dialogue.
- [x] The object view updates when advancing beats, so scene items are not revealed before their relevant beat. Repeated artwork also updates its description when the scene changes. Mobile stacks the compact focus card above the prose.
- [x] Confirmed that uploaded neutral character portraits are only 240 × 300 WebP. Improved their presentation with 2× high-quality Canvas rendering, a mild sharpening pass and safe in-memory caching. The original approved art files, manifest and character identities were not altered.
- [x] Added \`tests/object-focus-and-portrait-clarity.test.mjs\`; remote test checks all seven SVGs, beat appearance, portrait fallback, resampling behavior, and 12 background story transitions.
- [ ] Genuine newly painted high-resolution character source art remains unavailable: resampling improves on-screen definition but cannot recreate detail absent from the small approved source files.
- [ ] Confirm the live GitHub Pages appearance on desktop and phone; repository checks do not constitute a real-browser visual test.

## Premium portrait presentation — 2026-11-21
- [x] Reworked approved character portrait cards with charcoal/slate illustrated backdrops, restrained brass framing, depth, and mobile proportions; removed the plain flat-card appearance.
- [x] Added safe runtime background removal for pale, near-uniform backdrops using edge-connected pixels only, preserving interior face/clothing colors. Dark or irregular images skip cutout automatically.
- [x] In-game display uses 2× high-quality, lossless PNG rendering, mild edge enhancement, a capped image cache and original-image fallback. No approved portrait files were modified, and game story/save logic is unchanged.
- [x] Expanded `tests/object-focus-and-portrait-clarity.test.mjs` to cover pale/dark matte handling, preservation of the face region, lossless two-canvas resampling, caching and 12 starting story variants; verified PASS against the current GitHub source.
- [x] Verified unchanged live approved Sera/Jalen portrait hashes and byte-identical story engine. Existing narration object cards, map, reading beats, choices and mobile UI remain in place.
- [ ] Desktop/mobile screenshot verification of the *deployed* GitHub Pages game remains pending; source-level tests are not a substitute for visual QA. Original portrait resolution is only 240×300, so this improves presentation, not native facial detail.

## Emotion sheet review — characters 11–20 (2026-11-21)
- [x] Confirmed IDs 11–20 and approved neutral identity references using the current player-safe portrait manifest and art-design documents.
- [x] Prepared a ten-character concept overview and isolated one six-expression sheet per character in a separate **review-only** art collection. Exported WebP files are approximately 1,212 × 2,032 px.
- [x] Uploaded ten binary sheets to `art/review/emotion-sheets-batch-02/` using verified Git blob hashes, with a preview gallery README. GitHub history contains small artwork checkpoints.
- [x] Verified that all ten uploaded blob SHAs match local bytes. No live game portraits, saved-game data, or story engine files changed; repository remains public and no release was published.
- [ ] **Quality limitation:** Source artwork came from a single 1,536 × 1,024 collage. These are carefully upscaled HD-sized *draft previews*, not ten independently generated native-HD paintings. Native-resolution likeness-preserving redraws remain outstanding.
- [ ] New emotion sheets are **not activated in the game**. Approval/likeness review is needed before any live portrait replacement.

## Approved long-form narrative direction — 2026-11-21
- [x] Locked three-act framework, flexible approximately 8–12 chapters, and 6–8 hours per playthrough.
- [x] Assigned Act I 1.5–2 hours, Act II **at least 3.5 hours** (target 3.5–4), and Act III 1–2 hours.
- [x] Approved balanced meaningful branches and three major turning-point functions without publicizing any future events.
- [x] Created public-safe narrative architecture at `docs/player_safe/NARRATIVE_DEVELOPMENT_PLAN.md`; updated `docs/player_safe/PLAYER_BRIEF.md`.
- [x] Defined protected workflow for full-series beats, character arcs, timeline/canon ledger, long-form scene drafts, choice dependencies and playtest checks.
- [ ] Prepare confidential full-series plot, hidden character arcs and dense unreleased prose in a **private** storage location; public GitHub must not receive this material.
- [ ] Measure actual route reading time and run continuity/saving regression tests when future chapters are integrated.
- [x] No game code, character portraits, Chapter 1 scenes, player saves or release settings changed by this documentation-only update.

## Phase 1 — Narrative consistency baseline (2026-11-21)
- [x] Audited the current Prologue/Chapter 1, approved world rules, 27-character roster and 12 starting background combinations.
- [x] Indexed 16 current scene nodes and 39 existing options (including four Prologue navigation buttons) and documented continuity/save constraints in a **private** ChatGPT reference.
- [x] Identified 10 source/integration follow-ups. No story details or future outcomes were published.
- [x] Saved spoiler-free report at `docs/player_safe/PHASE1_CONTINUITY_STATUS.md` and verified GitHub readback.
- [x] Verified the detailed continuity reference is in a personal ChatGPT Page with no collaborators at the time of checking.
- [ ] Next: private three-act outlining, with all future beats, callbacks and character secrets kept out of this public GitHub repository.
- [ ] Before later integration, resolve or safely defer character-creation state compatibility, end-of-Chapter-1 save continuation and approved art metadata inconsistencies.
- [x] No game source, existing scenes, portraits, saves or release configuration modified by Phase 1.

## Phase 2 — protected narrative architecture (2026-11-21)
- [x] Approved protagonist starting age **27–30** and confirmed Sera Venn remains **27**. Updated four player-safe reference documents; playable age selection remains a separate future implementation task.
- [x] Queued a future **all-27-portrait and emotion-sheet consistency review** against approved character sheet; no live art replacement authorized.
- [x] Built a protected three-act working outline covering 11 flexible chapters, within approved 8–12 range.
- [x] Targeted ~7 hours total reading/decisions (Act I 100m, **Act II 230m**, Act III 90m); **these are estimates, not playtest results**.
- [x] Built private narrative plans for 12 major and 15 secondary character arcs, 10 future chapter choice clusters, background/choice continuity, and a foreshadowing ledger.
- [x] Ran 19/19 static Phase 2 checks. Readback-verified five private files in personal ChatGPT Library and private index Page with zero collaborators at verification.
- [x] Published only player-safe summary: `docs/player_safe/PHASE2_OUTLINE_STATUS.md` (commit `9c41dea`), with no future plot, hidden character arc, twist or ending specifics.
- [ ] Next phase: complete long-form chapter writing, editorial continuity review and later save-compatible game integration with actual playtime and path testing.
- [x] Existing Prologue/Chapter 1 game code, published story, portraits, saved-game structure and Pages/release settings untouched.

## Phase 3 — spoiler-safe first-pass manuscript checkpoint (2026-11-21)
- [x] Drafted 10 future chapter manuscripts (Chapters 2–11) in private ChatGPT storage; no future plot details published.
- [x] First pass contains 82 scene sections and 30 substantial decision groups across the future chapters.
- [x] Static narrative review: 35/35 checks passed, including key existing-world, starting-background and choice-continuity safeguards. These are NOT gameplay tests.
- [x] Saved 10 private manuscripts and five internal protocol/editing/QA files in personal ChatGPT Library; verified filenames and byte counts. Owner-only private index Page was checked with no direct/inherited collaborators.
- [x] Published safe status at `docs/player_safe/PHASE3_DRAFT_STATUS.md` (commit `75d9fd8`).
- [ ] **Important:** manuscripts are first-pass and materially shorter than the approved 6–8h playthrough; expand Act II to at least 3.5h **as measured**, then conduct developmental editing and detailed consequence QA.
- [ ] Implement a compatible completed-Chapter-1 continuation, approved protagonist age 27–30 selection, and tested manuscript/game integration only after writing review.
- [ ] Separate deferred portrait identity/HD-emotion sheet correction must follow approved character sheet and explicit live-asset replacement approval.
- [x] Prologue/Chapter 1 game source, live portraits, saves, releases and GitHub Pages settings untouched by this narrative draft.

## Phase 3 — expanded Act II and lore/cohesion QA (2026-11-21)
- [x] Expanded 5 private Act II chapter manuscripts with **14 additional narrative interludes**, +9,812 aggregate words. Chapters 2–11 now contain **39,769 aggregate words**, including mutually exclusive alternatives and writer notes, not single-route reading length.
- [x] Kept 82 original scene sections, 30 primary future decision groups, 12 starting backgrounds and established character/lore constraints.
- [x] Revised private chapter chronology and earlier-choice guard placement. Added more world/rank/faction texture and route-dependent dialogue without altering any shipped Chapter 1 scene.
- [x] Passed **19/19 Phase 2 outline**, **35/35 Phase 3 structure**, and **44/44 new lore/cohesion static checks**. These are draft checks, not playable route tests.
- [x] Privately stored and byte-size-verified revised manuscripts, continuity references, editorial review and QA scripts in personal ChatGPT Library.
- [x] Published and verified player-safe status `docs/player_safe/PHASE3_EXPANSION_QA_STATUS.md` (commit `de380bd`). Future plot content intentionally omitted from public GitHub.
- [ ] Continue substantive story/character expansion and dialogue revision; **the measured 6–8h story and >=3.5h Act II are not yet achieved or verified**.
- [ ] Perform actual route/reading QA and save-compatible Chapter 2+ game integration only after manuscript improvements.
- [x] Live game code, existing Prologue/Chapter 1 scenes, portraits, saves, releases and GitHub Pages settings remain untouched.

## Phase 3 — second dialogue expansion and cohesion checks (2026-11-21)
- [x] Expanded **21 additional narrative passages** in private Chapters 4–11: **11 in Act II** and **10 in Act III**, focusing on character voice, ordinary-life moments, player-choice boundaries, and later-act emotional consequences.
- [x] Added ~10,200 aggregate manuscript words. Total confidential Chapters 2–11 manuscript set is ~50,000 words (all branches and notes included); Act II ~28,700 aggregate words. **Neither is a measured single-route length.**
- [x] Preserved 82 core scene sections, 30 primary decisions, all 12 background combinations, and established Chapter 1 canon.
- [x] Fixed issues found during drafting: three duplicate subscene identifiers, relationship-boundary defaults, choice-dependent venue descriptions, and timeline metadata conflicts with newer private Library versions.
- [x] Static checks PASS: **19/19 outline**, **35/35 structural**, **44/44 lore/cohesion**, and **82/82 second-pass**. These are manuscript checks, not playable simulations or full route-by-route reviews.
- [x] Overwrote 8 protected manuscripts and added private QA/source files in personal ChatGPT Library; **verified all 8 manuscript uploads byte-for-byte using independent SHA-256 readback**.
- [x] Published/verified spoiler-safe update at `docs/player_safe/PHASE3_DIALOGUE_EXPANSION_STATUS.md` (commit `67b2449`).
- [ ] Additional prose/editing as needed to achieve the agreed 6–8h playthrough / Act II >=3.5h **when measured on actual playable routes**.
- [ ] Integrate Chapters 2–11 into the game with backward-compatible saves, then test all backgrounds and meaningful player branches.
- [ ] Deferred 27-character portrait/HD-expression conformity check against approved character sheet. No live portrait changes without explicit approval.
- [x] No current playable code, existing Prologue/Chapter 1 narrative, portrait assets, save format, releases, or GitHub Pages configuration changed in this draft expansion.

## Approved change: act-by-act narrative priority (2026-11-21)
- [x] Changed the writing sequence to **Act I → connect/finish Act II → connect/finish Act III → whole-game QA**.
- [x] Paused further expansion of confidential Acts II/III drafts until Act I reaches approved writing, transition, continuity and **measured 1.5–2h** completion gates.
- [x] Audited private Chapters 2 and 3 against their Library versions; each has **9 core scenes and 3 main decisions**, and neither has been integrated into the playable game. The Prologue and Chapter 1 remain playable but need final pacing polish.
- [x] Saved a private Act I editorial gap/acceptance checklist in personal ChatGPT Library; no unreleased plot details included in public reports.
- [x] Published/verified `docs/player_safe/ACT_SEQUENTIAL_DEVELOPMENT_PLAN.md` and updated `docs/player_safe/NARRATIVE_DEVELOPMENT_PLAN.md`.
- [ ] **CURRENT ACTIVE TASK:** polish/expand Act I Chapters 1–3, implement backward-compatible Chapter 1→2 continuation, test all 12 background combinations and major Chapter 1 choice histories, and measure 90–120 minutes per representative Act I route.
- [ ] Only after Act I passes, audit its link into Act II and resume Act II drafting; repeat for Act III.
- [x] Current game, existing Chapter 1 text, portrait assets, saves, GitHub Pages and releases unchanged by this sequence decision.

## Act I — focused manuscript and released-opening improvement (2026-11-21)
- [x] **Chapter 1 polished** with 22 additional released-scene narrative/dialogue paragraphs (~1,488 words) across eleven existing decision scenes; all original event IDs, choices, effects and save outcomes preserved. Published game commit `fcee4a6`.
- [x] **Starting age 27–30** implemented for new games with persistent selected age and old-save import compatibility. Passed 48 age/background checks, 480 legacy-save/choice route checks and 5 invalid-age tests; game commit `a283ff4`.
- [x] **Private Chapters 2 and 3** each expanded by 8 substantial interludes (16 total; ~7,700 aggregate words added). Their original nine core scenes and three significant choices each are intact.
- [x] Private Act I static QA: **81/81 checks passed** with **1,200 sampled condition combinations**; 2,000 static branch-aware reading-volume samples analyzed. This is NOT actual playable route or reading-time certification.
- [x] Combined estimated route-visible Act I text ~16,000 words (not all alternatives); real human/browser playtime is still required to verify 90–120 minutes.
- [x] Verified private new manuscript bytes against re-downloaded ChatGPT Library uploads with SHA-256; updated private manuscript index and protected continuity/bridge review.
- [x] Published and verified spoiler-safe progress at `docs/player_safe/ACT1_WRITING_AND_QA_STATUS.md` (commit `5abbcc7`); player brief revised for the shipped age selector (commit `0d9463f`).
- [ ] **Active:** Final Act I line editing and privacy-safe playable integration of Chapters 2–3, including a backward-compatible continuation for completed Chapter 1 exports and legacy age-unspecified saves.
- [ ] Run playable end-to-end branch/character/save and measured 90–120-minute Act I tests. Static checks alone do not establish completion.
- [ ] Acts II/III remain preserved but frozen until Act I passes acceptance. Public GitHub must not receive unpublished story manuscripts or secrets.
- [x] Approved live portrait assets, GitHub Pages configuration and release settings unchanged.

## Act I regression-test follow-up — 2026-11-21
- [x] Added reusable public `tests/act1-age-choice-compat.test.mjs` regression coverage for approved age 27–30, valid legacy saves, current scene graph and random Chapter 1 decision paths (commit `690a16e`). Live-source behavior was verified separately in 480 isolated script runs; full Node test execution on a checked-out source remains an additional verification step.
- [x] Created/verified personal private Act I checkpoint with no direct/inherited collaborators. Confidential manuscripts and QA are indexed there, not published on PUBLIC GitHub.
- [ ] Full private Chapter 2–3 playable integration, actual human/browser timed routes and editorial review remain required before marking Act I complete.

## Act I third expansion checkpoint (2026-11-21)
- [x] Act I remains the only active story focus. **Expanded private Chapters 2 and 3 by six substantial interludes each** (12 total, approximately **6,339 additional aggregate words**). Both retain nine original core scenes and three primary choices; earlier scene text and decision definitions byte-identical after new interludes are removed.
- [x] Extended natural dialogue, character-specific voices, work/home details, legal/privacy boundaries and choices that respect already-known information. Preserved Act I's existing major turning-point timing; no new future revelations.
- [x] Quality: **85/85 updated prior-manuscript checks**, **72/72 new static checks**, **34,992 exhaustive background/decision/legacy-flag configurations**, plus **2,000 sampled path-aware volume estimates**; all passed as **static**, not playable, tests.
- [x] Average estimated Act I route-visible reading load ~20,985 words including existing Prologue/Chapter 1; raw reading at 180–220 words/min suggests ~95–117min. **Actual interactive/playtime certification remains outstanding**.
- [x] Both private Ch2/Ch3 manuscripts independently read back from personal ChatGPT Library and verified with SHA-256; saved private cohesion review, QA scripts/results and updated private manuscript index.
- [x] Published safe report `docs/player_safe/ACT1_DIALOGUE_EXPANSION_ROUND3_STATUS.md` (commit `219b612`), with no protected plot material.
- [ ] **ACTIVE NEXT:** Final Act I line-edit and secure playable Chapter 1→2→3 continuation that preserves completed/legacy saves, then real full-route and timed 90–120-minute tests.
- [ ] Acts II and III continue on hold until Act I passes; approved portrait consistency work remains separately deferred.
- [x] Live game, Prologue/Chapter 1, portrait files, releases and Pages configuration unchanged by this round.

## Act I private playable candidate and browser QA (2026-11-21)
- [x] Built confidential playable Act I Prologue/Chapters 1–3 with original published Chapter 1 choice graph (16 scene nodes, 39 buttons, 35 reactions) and private Chapters 2–3 (46 reading sections, 6 primary decisions).
- [x] Original Chapter 1 save migration: import both completed/incomplete saved JSON, preserve history/flags/journal/aliases; ask for starting age 27–30 if omitted; use separate private browser save key and compatible Chapter 1 snapshot export.
- [x] Passed **48/48 browser end-to-end routes** (12 backgrounds × 4 ages), **6/6 browser UI smoke categories**, 11 published Chapter 1 decision/reaction replay checks, and 27,000 conditional narrator/knowledge tests.
- [x] Verified pinned original public HTML against current GitHub: 16 scenes, 39 buttons and 35 immediate reactions. Browser routing used an equivalent published-source fixture; a real fresh-game network check remains pending.
- [x] Estimated ~21,171 words visible on a representative Act I route incl. opening; 16,218–16,510 of those words arise from private Chapters 2–3. **Real measured 1.5–2h human playtime and subjective pacing review remain pending**.
- [x] Saved private playable HTML/ZIP, detailed editorial review, source and QA in owner's private ChatGPT Library. Independently re-materialized HTML and ZIP; SHA-256 matched. No protected story uploaded to public GitHub.
- [x] Published/verified spoiler-safe `docs/player_safe/ACT1_PRIVATE_PLAYABLE_STATUS.md` (commit `0b09f7b`).
- [ ] Production acceptance: manual fresh-game public source loading, complete human-timed Act I playthrough, final pacing/dialogue sign-off. **Do not declare production-ready before these pass**.
- [ ] Act II/III writing resumes only after Act I acceptance; future chapter bridge work remains private.
- [x] No existing published game code, live portraits, GitHub Pages configuration, or release changed by this private build task.

## Act I five-chapter playable expansion (2026-11-21)
- [x] Approved **minimum five Act I chapters plus Prologue, eight Act II chapters and five Act III chapters** = at least 18 numbered chapters total. Updated public narrative framework and sequential development plan (commits `f5db4af`, `c9e04f5`).
- [x] Drafted **two confidential new Act I chapters** with ~10,500 aggregate source words, 33 connected new story sections, six meaningful choices and 18 options. All future plot content remains in private ChatGPT Library.
- [x] Extended private playable Act I reader from three to **five chapters**. Preserved original published Chapter 1 scene graph, all Chapters 2–3 choices, original save history/flags and supported legacy three-chapter private save continuation.
- [x] Automated browser validation: **48/48 complete Chapter 2–5 routes** across 12 starting backgrounds × four approved ages, **6/6 UI/mobile/export/legacy-save checks**, **26/26 narrative structure and lore checks**, **68,000/68,000 independent conditional-logic comparisons**.
- [x] Validated new private chapter manuscripts, compiled build and ZIP via personal ChatGPT Library upload, independent readback and SHA-256. Private handoff Page scope checked personal, no collaborators at verification.
- [x] Published/verified only spoiler-free `docs/player_safe/ACT1_FIVE_CHAPTER_EXPANSION_STATUS.md` (commit `c82e4c4`). Public GitHub remains spoiler-safe.
- [ ] **Final acceptance:** One or more real human-timed, full five-chapter playthroughs and editorial pacing review. Automated page/word counts are not real playtime.
- [ ] Revised 18+ chapter duration must be measured; old 6–8h total and 1.5–2h Act I assumptions are superseded. Act II/III private drafts are paused pending the Act I player review and later numbering reconciliation.
- [x] No public game source modifications, no live portrait replacements, no release or Pages activation.

## Act II eight-chapter private working build (2026-11-21)
- [x] Started **Act II Chapters 6–13** from the approved five-chapter Act I. Reconciled **five existing protected manuscripts** and wrote **three new connecting chapters**, with correct chapter-specific state and chronology.
- [x] Private playable Acts I–II reader contains **112 Act II narrative sections**, **24 main decision groups** plus a genuinely optional personal conversation. All original Act I Ch1–5 history/flags are preserved.
- [x] Protected writer-facing narration and consent overreach were identified and line-edited before QA reruns. Cross-chapter lore/revelation boundaries and character identities checked.
- [x] Automated private browser checks: **48/48 full routes** across 12 backgrounds × four approved ages, **8/8 UI/import/export/mobile/consent checks**, **75/75 individual choice options**, and **28/28 private structural/lore checks**. All after final source corrections.
- [x] Converted five- and three-chapter private saves and original Chapter 1 exports continue; missing legacy age requires explicit 27–30 choice. Ch1 browser source tests use a controlled fixture; live online download remains unverified.
- [x] Private library upload of playable HTML, ZIP, eight manuscripts and supporting source/QA complete; **12/12 key files independently SHA-256 verified after re-materialization**. No spoiler materials sent to PUBLIC GitHub.
- [x] Published/read back safe `docs/player_safe/ACT2_EIGHT_CHAPTER_WORKING_STATUS.md` (commit `9444093`).
- [ ] **Act II pacing is not yet accepted**: 48 route samples contain ~29,485 visible Act II words (range 29,340–29,609), about 134–164 minutes raw reading at 180–220 wpm. Approved minimum **3.5 hours** is not achieved/verified. Expand *route-visible* story and measure real human-paced routes.
- [ ] Production acceptance requires another substantive editorial expansion, actual human-duration/character-flow tests and a live browser fetch of published Chapter 1 source. Act III remains paused.
- [x] Public game, published Prologue/Chapter 1 source, approved portraits, releases and GitHub Pages settings unchanged.

## Act I audit decisions — 2026-11-21 (player-safe; CURRENT)
- [x] Eight owner clarifications approved. Act I revision order documented at `docs/player_safe/ACT1_AUDIT_REVISION_PLAN.md`; no unreleased plot content published.
- [x] Removed saving, loading, import/export, resume modal, saved-game UI and automatic progress persistence from `game/tierfall-chapter1-expanded-edition.html`. On reload the story starts fresh, and any prior Chapter One local save is cleared. Current-session journal and choices remain.
- [x] Fixed three small public Chapter One prose/choice continuity issues; story decisions, scene graph and portrait source files unchanged.
- [x] Compiled both embedded JavaScript scripts; 48 initial routes passed for each story-code commit, then 960 varied choice routes passed against the final GitHub source. Remote SHA verified.
- [x] Updated six existing automated test source files to no-save expectations; completed content readback on GitHub main.
- [ ] Run the complete Node test suite and real browser/phone QA. Code compilation and route simulation are not substitutes for these tests.
- [ ] Revise protected Act I Chapters 2–5 privately for temporal continuity, character consistency, consequence propagation, origin variation and dramatized chapter endings. **No unreleased manuscripts may be committed while the repo is public.**
- [ ] Complete full Act I branch and lore QA and human-timed representative routes (approximately 2–2.5 hours preferred, not yet measured).
- [x] No live portrait replacement, protected story upload, GitHub Pages activation or release publication.

## Chapter One second-pass revision and external review packet — 2026-11-21 (player-safe)
- [x] Rechecked current public main, sync rules, project checkpoints, approved decisions and released Chapter One source.
- [x] Revised 21 released-scene/reaction/conditional-prose details, strengthening work/day chronology, established character occupation, recognizable recurring officer, choice-evidence provenance, background echoes and witness consent. **No scene IDs, choices, effects, journal definitions or approved portraits changed.**
- [x] Game source verified on `main`: `game/tierfall-chapter1-expanded-edition.html` (commits `bf043972`, `de7dc849`; final blob `9298f989389b25ca6d2b28c72636ef0fffd28a4d`).
- [x] Exported and remotely verified **all 16 published Prologue/Chapter One scenes**, 39 choice definitions, 35 Chapter One immediate reactions, and variant conditions as a readable manuscript: `docs/player_safe/CHAPTER1_CLAUDE_REVIEW_PACKET.md` (commit `dfd4788`).
- [x] Source-level QA: 2/2 embedded scripts compile, 960/960 varied complete Chapter One routes, 35/35 Chapter One choices exercised, 4/4 distinct origin callbacks, identical published choice/effect/journal graph compared with previous release. Review packet source SHA matches remote game file.
- [x] New regression source: `tests/chapter1-editorial-qa.test.mjs` (commit `827f3eb`). Player brief corrected to no-save and current chapter guidance.
- [ ] External human/Claude narrative review and deployed browser/mobile QA still pending. Connected code-level checks do **not** certify live browser behavior or full Act I continuity.
- [ ] Private Chapters 2–5 still need audit repairs and follow-through on approved commitments. Preserve secrets; do not upload private scripts to public GitHub.
- [x] No live portraits replaced, no releases published, no GitHub Pages settings changed.
