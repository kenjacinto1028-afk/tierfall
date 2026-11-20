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
- [ ] Add regression tests and run model/UI checks.
- [ ] Sync and verify all new code, assets, tests, and status notes on GitHub main.
- [ ] Browser screenshot QA (desktop and phone) when actual connected browser access is available.
