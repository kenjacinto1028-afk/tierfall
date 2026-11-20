# Tierfall — Chapter One Playtest Notes

**SPOILER-FREE.** This note does not reveal the chapter's events, hidden routes, character secrets, or ending conditions.

## Chapter One — Expanded Edition (November 20, 2026)
- **Your decisions get an immediate response:** each Chapter One choice has a short, relevant next-page reaction. Long-term consequences and all original choices remain unchanged.
- **Skip Prologue:** optional checkbox for a new story and a skip button on prologue pages. Skipping has no effect on stats or choices.
- **Glossary:** searchable in-world guide that grows with the terms you encounter. It does not reveal future story facts.
- **Story Recap:** sidebar recap of your actual past decisions, plus a brief welcome-back screen when resuming or importing a mid-chapter save.
- **Characters:** Sera and Jalen now have illustrated portraits, different expressions, and some clothing changes based on story context. The player can change their own name and optionally edit the visible names of encountered characters. Additional portraits will follow as the cast appears.
- **Compatibility:** existing exported save files work. If switching editions, Export from the old edition and Import into this one to be safe.
- **Testing:** 9 automated feature/regression test groups and 1 simulated browser-interface test passed. Verified all **180 playthrough variations**, original story mechanics, and legacy saves. Live desktop/mobile screenshot testing remains pending because Chromium did not start reliably in this environment.
- **Playable file:** `tierfall-chapter1-expanded-edition.html` (single HTML file; works offline).

## Chapter One — Narrative Edition (November 20, 2026)
- Rewritten Chapter One passages for smoother reading and clearer cause-and-effect between scenes, while keeping the approved original story.
- Dialogue has a more natural voice, with a little warmth and humor where it fits; the serious moments stay serious.
- Improved how the protagonist’s ordinary work, friends, and responsibilities connect to early choices.
- The four-screen prologue, World Guide, name fields, all choices, consequences, routes, and save format are unchanged.
- **Tested:** 9 automated test groups, including 180 complete playthroughs and a direct text-only versus World Edition comparison. Browser screenshot visual QA remains pending.
- Play: `tierfall-chapter1-narrative-edition.html` (standalone, works offline). Existing exported saves can be imported.

### Previous improvement proposals (now implemented in the Expanded Edition)
1. Let a few important choices lead to a short, immediate reaction scene, so the player feels the result before the next event.
2. Add a *Skip prologue* option for repeat playthroughs, keeping the World Guide available.
3. Add a short *Previously on Tierfall* recap for players who return to a save after several days.
4. After character portrait/name redesign, improve the timing of character reveals and their on-screen expressions without giving away future plot details.

## World Prologue + Chapter One — New Edition (November 20, 2026)
- Added a brief **four-screen world prologue** before Chapter One: setting, simple system map, the five social ranks, three political factions, and everyday life on Thule.
- Added a **World Guide** tab for a safe reminder of the ranks, factions, and map at any time.
- Added more context for the protagonist's ordinary friendships and local contacts, so decisions have clearer motivation.
- Smoothed choppy passages and added a few intense, emotional, or mysterious scene hooks. Existing choice effects and Chapter One routes are unchanged.
- Character creation now supports a **first name, second name/surname, and optional nickname**. Close friends can use a familiar name, while officials use the full name. The same romance access applies to every player gender/pronoun choice.
- Previous save files can be imported and will resume their prior Chapter One scene. The new prologue appears when creating a **new** character.
- File: `tierfall-chapter1-world-edition.html` (single HTML file, offline-capable).
- Regression checks: **180 complete playthrough routes**, unchanged Chapter One choice outcomes in comparison checks, and new/legacy save tests passed. Browser screenshot-based visual QA remains pending.

## Chapter One — restrained writing polish (November 20, 2026)
- Improved selected narrative paragraphs and character dialogue while keeping the core scenes and choices the same.
- Added a little natural banter and emotional tension without making the tone too dramatic or difficult to read.
- **No changes** to game rules, character creation, choice IDs, consequences, scene routes, or the save format.
- Standalone edition: `tierfall-chapter1-polished.html`. Existing saves can be exported from the earlier edition and imported into this one.
- Verified the scene graph and 180 complete automated playthrough routes. Live screenshot-based visual testing remains pending.

## What is ready
- A standalone browser-based Chapter One preview that works offline on desktop.
- Character creation: name, pronouns, four jobs, three upbringings, and random background selection.
- Visual-novel reading layout with a simple rank label, choice buttons, and a journal.
- Choices produce persistent effects, and some later passages change based on earlier decisions.
- Automatic saving after every choice, plus manual save export/import and a new-game option.
- Keyboard number shortcuts, high-contrast focus outlines, larger/smaller text controls, and responsive CSS.

## Testing
- Ten automated checks passed.
- All 12 job/upbringing combinations reached the end of Chapter One using several choice patterns.
- Save/load validation, missing links, conditional text reactions, and required interface IDs passed.
- **Not yet verified:** live visual testing in desktop and mobile browsers; the browser screenshot process could not complete in the build environment.

## Limits
- This is a short first playable preview, not the complete target 5–10-hour game.
- Sera and Jalen now have illustrations and mood/clothing variations. Other cast portraits and environment art are still planned; the setting art remains CSS-based.
- The final Chapter One length is targeted for 20–35 minutes; the current prototype is shorter.
- Saving in local files depends on the browser, especially on phones; use Export save as a backup.

## How to give useful feedback without spoilers
After playing, you can tell me whether the text was easy to read, which choices felt meaningful, whether the chapter felt too short or too slow, and whether the layout worked on your device. You do not need to tell me what happened; I can revise the underlying game content privately.

## How to play
Download and open `tierfall-chapter1-expanded-edition.html` in a desktop browser. Use the game's choices to proceed. Your decisions are remembered inside that save file.