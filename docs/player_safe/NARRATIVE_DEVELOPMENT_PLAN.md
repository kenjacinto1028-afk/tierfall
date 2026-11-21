# Tierfall — Approved Narrative Development Framework

**Player-safe planning document · 21 November 2026 · No unreleased plot details**

## Status and boundaries

- Prologue and Chapter 1 are established playable material. Protect their existing story events, choices and saved-game compatibility.
- The game targets **three acts, flexible chapters (approximately 8–12), and 6–8 hours per playthrough**.
- Branching is **balanced**: important choices change relationships, dialogue, scene access and future context; major chapters may reconverge.
- Three major turning-point functions are approved: an Act I recontextualization, an Act II increase in personal stakes, and an Act III revelation/payoff. These describe narrative functions, **not** future events.
- **Act II must last at least 3.5 hours** and carry the most character and story development.

## Pacing budget

| Act | Typical time | Narrative responsibility |
| --- | --- | --- |
| Act I (including existing opening) | 1.5–2 hours | Establish the cast, setting, agency and early tension |
| **Act II** | **3.5–4 hours** | Deep relationships, conflicts, decisions and callbacks |
| Act III | 1–2 hours | Earned payoffs and satisfying conclusions |
| **Total** | **6–8 hours** | Validate through actual playtime measurements |

The existing opening counts toward Act I; if its real duration is short, the remaining Act I writing must compensate. Chapter boundaries can shift. A nonbinding working allocation is Chapters 1–3 for Act I, 4–8 for Act II and 9–11 for Act III, with the Prologue before Chapter 1. These numbers reveal no plot events.

## Required protected outline fields

Every future chapter should have an internal, nonpublic plan covering: chronology and entry conditions; emotional objective; characters in focus; scene beats; substantial decisions and immediate responses; optional scenes and reconvergence; earlier-detail callbacks; world-state changes; reading-time estimate; and continuity checks.

The complete protected outline must be designed **before** drafting long scenes. Do not publish the filled-in outlines, character secrets or event-to-character mappings while the repository is public.

## Choice and branch rules

- Target roughly **3–5 substantial decisions per chapter**, adjusted for length; include smaller characterization choices only where natural.
- Every substantial choice deserves an immediate response and, where relevant, an earned later consequence.
- Decisions may alter trust, faction responses, optional scenes or later information without splitting into entirely separate games.
- Favor failure-forward consequences over arbitrary dead ends.
- Preserve **four starting occupations × three upbringings** as viable routes to completion.
- Keep established save keys, scene IDs, player history and choice semantics compatible; extend state carefully and regression-test export/import.
- Romance remains optional, with equivalent eligibility across approved player identities and respect for character agency.

## Major turns, callbacks and reveal quality

- Use the three approved major-turn functions without predictable scheduling; include smaller discoveries naturally.
- Maintain a **private** setup → reinforcement → payoff registry for each important reveal, including optional knowledge states and earlier-chapter callbacks.
- A revelation must be compatible with observable behavior, canonical history, world rules and prior choices; do not manufacture unseeded facts.
- Not every character needs a secret past. Give important turns believable emotional aftermath and preserve agency afterward.
- Public summaries can report verification counts but **must never explain the planted clues, hidden outcomes, future motivations or ending requirements**.

## Non-negotiable continuity rules

1. **Setting:** Thule and the established Halcyon Reach. Five inherited social ranks: I Crestborn, II Steelward, III Brasswright, IV Copperhand, V Leadborn. Rank, job and political faction are separate. Three major factions contain internal disagreement; allegiances may change.
2. **Protagonist:** Starts at Rank V; age 27–30; custom name/nickname/pronouns; one of Ward Attendant, Reclamation Worker, Farmer, Cargo Runner; one of Family, Communal, Estranged upbringings.
3. **Permanent features:** Exactly the thin diagonal scar through the left eyebrow and pale crescent-shaped healed burn below the right jaw, acquired in the ordinary living-ring pressure-door accident at age twelve. The rank wrist identifier is separate. Do not retroactively invent secret destiny or supernatural origins.
4. **Cast:** Preserve established identities, ages, ranks, occupations, character histories and approved visual directions for the 12 major and 15 secondary characters.
5. **Existing choices:** Respect actual Chapter 1 decisions and their consequences. A later reveal may add meaning but cannot erase what the player did.
6. **Voice:** Natural, emotionally credible, accessible English; varied pace, ordinary warmth, restrained exposition, no repetitive cliffhangers or constant shocks.
7. **Relationship logic:** Trust, conflicts, romance and faction changes must depend on the actual route, not a universal default.
8. **Timeline:** Track elapsed time, scene order, travel, injuries, knowledge, objects, ages and relationship states in a consistent internal ledger.
9. **Reveal gating:** Recaps, glossary entries, art, text and character pages must not surface knowledge the player's route has not earned.
10. **Canon control:** Mark new facts as **Approved**, **Proposed** or **Unresolved**; proposals never silently become fixed lore.

## Protected writing workspace (not public GitHub)

Future nonpublic files should include the act/scene beat board, 12 major-character arc cards, supporting-cast continuity, world chronology, decision dependency matrix, callback registry, dense chapter prose, route checks and narrative issues. These materials must remain private until a suitable protected sync location is available.

## Long-form drafting sequence

1. **Canon audit:** Extract fixed opening facts, choices, conditional branches and save constraints.
2. **Full-series plotting:** Build the three-act beats, multi-character arcs and turning-point functions in a protected outline.
3. **Branch/continuity pass:** Map dependencies, chronology, reconvergence and route-specific character knowledge.
4. **Dense prose draft:** Write complete coherent chapter-length scene sequences instead of isolated fragments; include dialogue, interaction, consequences and transitions.
5. **Editorial pass:** Check distinct voice, foreshadowing, comprehension, pacing and emotional variety; measure playtime rather than padding word count.
6. **Integration and QA:** After approval, test all 12 backgrounds, important choice families, journals, recap gating, save/load and full playable routes.

## Safe reporting and current implementation status

Only report scene/chapter counts, drafting and editing status, route tests, continuity issue counts, save compatibility and measured reading time. Never disclose future story premises, arc resolutions, twist mechanics, character secrets or endings.

The shared repository was confirmed **public on 21 November 2026**. This file is safe to publish. Detailed unreleased outlines, hidden character histories, confidential drafts and spoiler-bearing scripts **must not** be committed there while public.

**This is planning only:** No game code, approved portraits, existing scenes or saves have been changed.

## Deferred art identity repair (approved backlog, not part of Phase 2)

- Treat `docs/player_safe/Tierfall_Character_Sheet.md` and the user's approved original portrait references as the appearance authority; portrait manifest option letters are not reliable approvals.
- Audit **all 27 characters' live neutral portraits and every HD/emotion variation** for likeness, age, facial marks, hairstyle, costume and identity consistency before reworking artwork.
- Prior review found option-letter mismatches for **Sera Venn, Maren Oth, Oren Vask, Ilyra Sen and Ysolde Kaine** between the approved character sheet and current portrait manifest. Verify visually against the actual approved originals rather than inferring identity from a letter.
- Produce side-by-side comparison samples and native-resolution consistent expression sheets; require explicit player approval **before replacing any live portraits**.
- **Status: planned for a separate future art phase. No portrait file, image manifest, or game scene changed by this planning update.**

## Approved sequential writing workflow (21 November 2026)

**Act I first, then connect/complete Act II, then connect/complete Act III.** Later-act private drafts are preserved but put on hold until the preceding act's writing, lore, continuity, compatible save transition and representative playtime tests pass. Do not mark an act completed because a first-pass draft or static checks exist.

See [ACT_SEQUENTIAL_DEVELOPMENT_PLAN.md](ACT_SEQUENTIAL_DEVELOPMENT_PLAN.md) for player-safe acceptance gates. This sequencing does not authorize posting unreleased story material to the public repository.
