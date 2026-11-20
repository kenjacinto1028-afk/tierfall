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
