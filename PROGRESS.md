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
