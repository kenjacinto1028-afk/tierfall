# TierFall — Act I Private Playable Build and Continuity Status

**Player-safe report · November 21, 2026 · No unreleased plot information**

## Delivered privately

- Built a private, browser-playable **Act I (Prologue + Chapters 1–3)** with connected chapters and continuing choice consequences.
- Preserved the original released Prologue/Chapter 1 source data: **16 scene nodes, 39 navigation/choice buttons and 35 original immediate choice reactions**. The private Chapter 2–3 portion adds **46 connected reading sections and six major decision groups**.
- New-game ages **27–30**, four starting occupations and three upbringings are retained. Completed and in-progress original Chapter 1 JSON saves can be imported; missing ages from old saves require an explicit player selection, not an invented default.
- Preserved earlier decision flags, relationships, journal and history across chapter transitions. The private build uses a separate browser-save key and supports private save export and an original-compatible Chapter 1 snapshot.
- Included review navigation, journal, encountered-character records and responsive reader styling. Existing approved neutral portrait identities remain untouched.

## Testing

| Validation | Result |
|---|---:|
| Complete browser route simulations through Act I | **48/48 passed** (12 backgrounds × four ages) |
| Browser interface smoke cases | **6/6 passed** |
| Published Chapter 1 choice/reaction replay | **11 decision steps checked** |
| Independent conditional dialogue and knowledge-gate comparisons | **27,000 passed** |
| Original Chapter 1 data verification | **16 scenes; 39 choices/buttons; 35 reactions** |
| Reader output for future Chapters 2–3 | **16,218–16,510 words** on tested routes |
| Estimated complete Act I route-visible text | **~21,171 words**, including Prologue/Chapter 1 |
| Human-timed 90–120-minute acceptance | **Not yet verified** |

Automated browser tests used a source-shape-equivalent Chapter 1 fixture for browser routing. The exact pinned published Chapter 1 version was independently verified against GitHub. Real browser network loading of that public source and a human-timed playthrough remain review requirements; do not misrepresent automated checks as those tests.

## Access and protection

The private playable HTML, ZIP bundle, source/QA, and detailed confidential editorial report are stored in the owner's private ChatGPT Library. The downloadable HTML and ZIP were independently re-materialized and SHA-256 verified against local files.

**The repository remains PUBLIC.** The playable private build contains unreleased chapters and therefore **must not be uploaded to this repository or deployed to GitHub Pages** without a separately approved safe publication plan. Public GitHub receives only this spoiler-free report.

### Reader requirements

- For a fresh Chapter 1 run, the private reader first loads the already-released Chapter 1 scene source from a pinned public GitHub commit. If this is unavailable, select a previously downloaded official Chapter 1 HTML file.
- A completed exported Chapter 1 save can continue into private Chapter 2 offline.
- The downloadable ZIP includes a player-safe readme with instructions.

## Completion boundary

The **private playable Act I candidate is assembled and automated continuity checks pass**. Final production acceptance still requires at least one human-paced complete reading session, confirmation of the 1.5–2-hour target, and final subjective dialogue/pacing review. Acts II and III remain on hold, and no live portrait assets, published game code, releases or Pages settings were changed during private assembly.
