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
