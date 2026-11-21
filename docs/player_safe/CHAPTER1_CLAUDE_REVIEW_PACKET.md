# TierFall — Prologue & Chapter One · Independent Narrative Review Packet

**Scope:** The already-public Prologue and Chapter One ONLY. All unreleased chapters and protected future twists are deliberately excluded.
**Source:** `game/tierfall-chapter1-expanded-edition.html` at GitHub `main`.
**Source blob SHA:** `9298f989389b25ca6d2b28c72636ef0fffd28a4d` · 2026-11-21.
**Purpose:** Readable source-equivalent review manuscript for Claude. This is an export of the actual playable scene definitions, not a revised synopsis.

## How to review

1. Review tone, continuity, dialogue, recurring character voices, timeline, and world/canon consistency.
2. Verify that each choice, conditional passage, immediate reaction and journal entry matches what the player actually did and could know.
3. Pay particular attention to the protagonist's four occupations, three upbringings, two permanent marks, ongoing shift responsibilities, Sera's maintenance work, and the checkpoint officer.
4. Note player-facing exposition that reads like design guidance, redundant scene beats, and accidentally definite outcomes.
5. The game is **no-save**: it holds choices and journal in memory while open and starts over when reloaded. No import/export is intended.
6. Do not evaluate plot payoffs for future chapters from this file alone. Keep unreleased material confidential when comparing against a separate private canon reference.

**Formatting:** Scene paragraphs appear in engine order: shared, then selected occupation, selected upbringing, then all matched conditional additions. Conditional additions appear after shared prose, rather than at their annotated subject point. Any single playthrough sees one occupation and one upbringing, not all variants. Choice reactions are displayed as the next scene opens. Tokens such as `{friendName}` and `{formalName}` resolve in the game.

## Scene and choice index

| Scene | Title | Choices |
|---|---|---:|
| `p-reach` | Welcome to the Reach | 1 |
| `p-ranks` | The Five Ranks | 1 |
| `p-powers` | Those Who Hold Power | 1 |
| `p-thule` | A Life on Thule | 1 |
| `c1-wake` | Before the First Bell | 3 |
| `c1-duty` | The Wrong Line | 3 |
| `c1-quiet` | A Familiar Face | 3 |
| `c1-home` | The People Who Know You | 3 |
| `c1-notice` | No Such Ship | 3 |
| `c1-cross` | The One Who Stayed | 4 |
| `c1-ally` | Two Ways to Help | 4 |
| `c1-walk` | A City Between Bells | 3 |
| `c1-door` | Someone Has Noticed | 3 |
| `c1-cost` | What You Can Carry | 3 |
| `c1-dusk` | A Promise for Tomorrow | 3 |
| `c1-end` | Chapter One Complete | 0 |

---

## p-reach — Welcome to the Reach

- **Location:** The Halcyon Reach · A World Before Your Story
- **Speaker:** Narrator

### Shared text

1. Human life stretches across the Halcyon Reach, a system of moons and stations connected by ships and supply routes. No single place can survive alone. Farms grow food, foundries build ships, and distant stations protect the routes between them.
2. Thule lies far from the ruling courts. Workers there repair failing machines, grow food under lamps, and keep the air flowing. Far above them, wealthy families decide which shipments arrive and which debts must be paid.
3. The Concord says this order saved humanity from the Long Dark, a time of hunger and war three hundred years ago. Many people believe that story. Others wonder why the same families still hold power.
4. Today, shipments are late and workers are asking difficult questions. At the foundries, crews wait for spare parts; on the garden moons, growers warn that food prices may rise. The Drift Guild wants the trade routes kept open, while Concord officers call for stricter checks. On Thule, those distant arguments decide whether a family has enough to eat.

### Choice options and immediate reactions

**p-reach:continue — Learn about the Five Ranks.**

- Next: `p-ranks`

---

## p-ranks — The Five Ranks

- **Location:** The Halcyon Reach · Law and Status
- **Speaker:** Narrator

### Shared text

1. Every person is born into a rank, marked on their wrist. Rank I is highest and Rank V is lowest. The mark affects where a person can live, what work they may do, and who has the power to command them.
2. Rank I · Platinum · Crestborn: noble houses and rulers. Rank II · Steel · Steelward: soldiers, officers, and guards. Rank III · Brass · Brasswright: doctors, engineers, and scientists.
3. Rank IV · Copper · Copperhand: traders, clerks, and recordkeepers. Rank V · Lead · Leadborn: farm workers, ward attendants, cargo crews, and other laborers. Leadborn does not mean a person mines lead. It is a rank assigned at birth.
4. A person may be a free worker or bound by a service contract. Rank and freedom are not the same thing. A skilled Leadborn can save lives but still be ordered around by someone born above them.

### Choice options and immediate reactions

**p-ranks:continue — Learn who holds power.**

- Next: `p-powers`

---

## p-powers — Those Who Hold Power

- **Location:** The Halcyon Reach · Three Political Forces
- **Speaker:** Narrator

### Shared text

1. The Concord governs the Reach. Its leaders say strict ranks keep the peace. Some want stronger control; others believe the laws must change before anger breaks the system apart.
2. The Undertow is a hidden network that opposes the ranks. Some members want a careful path to freedom. Others believe the Concord will never give up power without a fight.
3. The Drift Guild moves goods, ships, and information between worlds. It deals with almost everyone. Its traders value open routes, but they do not always agree on what matters more: profit, safety, or freedom.
4. A rank tells you what society expects from someone. A faction tells you what they believe. A noble can oppose the Concord, and a worker can defend it. Few people fit neatly into one side.
5. One news channel calls the growing complaints a threat to public order. A Guild report calls them a risk to trade. A private message passed between workers calls them a plea to be heard. The event is the same; the words change depending on who controls the story.

### Choice options and immediate reactions

**p-powers:continue — Return to Thule.**

- Next: `p-thule`

---

## p-thule — A Life on Thule

- **Location:** Thule · Before the First Bell
- **Speaker:** Narrator

### Shared text

1. This is where you live. Your name is {name}, and the wrist mark you have carried since childhood reads Rank V · Lead · Leadborn. People in the upper rings rarely ask what you want. They usually ask whether your work is done.
2. You know Sera Venn from childhood. She is quick to speak, slower to give up, and one of the few people who remembers who you were before work became your whole life.
3. You also know of Jalen Orr. He is a local worker organizer, not a secret leader: when wages go missing or families need food, he helps people make requests and find support. You have crossed paths while helping neighbors. You have not joined his group or any political movement.
4. Your work and home have shaped what you notice and whom you trust. Tomorrow will begin as an ordinary shift. At least, that is what you expect.

### Occupation variants (exactly one is shown)

**Ward Attendant:**

> You care for patients in the crowded wards. You have learned how to listen when someone is frightened and the doctors are too busy to notice.

**Reclamation Worker:**

> You salvage parts from broken machines. You know that one small piece of equipment can keep an entire work ring running.

**Farmer:**

> You grow food beneath artificial light. You know how quickly an empty supply crate becomes an empty table.

**Cargo Runner:**

> You move crates through the loading bays. You recognize the crews, cargo marks, and doors most people never think about.


### Upbringing variants (exactly one is shown)

**Family Household:**

> Your family lives close enough to ask you for help and worry when you come home late. Their lives are tied to your choices.

**Communal Upbringing:**

> You were raised among neighbors who share work, food, and hard times. You learned early that family does not always mean blood.

**Estranged Household:**

> You have family somewhere in the Reach, but you are no longer close. Even so, old ties can be hard to forget.


### Choice options and immediate reactions

**p-thule:begin — Begin Chapter One.**

- Next: `c1-wake`

---

## c1-wake — Before the First Bell

- **Location:** Thule · Workers’ Ring
- **Speaker:** Narrator

### Shared text

1. The first bell sounds before the station lights reach full strength. You pull your coat tight as cold rises through the floor, then glance through the thick window at the ice fields outside. Another day on Thule is starting early, and nobody looks pleased about it.
2. The lift door catches your reflection: a thin diagonal scar breaks your left eyebrow, and a small pale crescent-shaped burn rests just beneath your right jaw. You got both at twelve, when a pressure door failed during a power cut in the living ring. The broken latch cut your brow; escaping steam burned your jaw. The clinic treated both, but the marks stayed.
3. The mark on your wrist reads Rank V · Lead · Leadborn. To the Concord, that means you work where you are told and sleep where you are allowed. You have lived with the mark all your life, but it has never told the whole story of who you are.
4. An order flashes across the wall: “All Leadborn workers must report early. Missed shifts will be charged to the household.” Someone has written “We are not machines” underneath. A cleaning unit rolls by, scrubbing away the words while the people waiting for the lift pretend not to watch.
5. The people waiting at the lift have invented a system that works better than the official signs. One person keeps a space for those coming off the night shift; another tells the new arrivals which side of the corridor stays warmer. Nobody calls it an organization. They simply move when someone needs to pass. A child carrying a food tin asks whether the bell is early again. Their mother counts the minutes on the wall clock before answering. Even a small change in the schedule has a cost somebody will pay.
6. A man near the scanner rubs at the mark on his wrist until the skin around it reddens. He stops when he notices you looking. You turn away without asking him to explain. There are enough reasons to be tired before a shift starts, and you don't know which one is his.
7. A worker ahead of you struggles to stay upright, one hand pressed against the lift rail. The guard at the gate looks half asleep until the next bell sounds. Then he stands straight, lifts his scanner, and calls for everyone to move faster.

### Occupation variants (exactly one is shown)

**Ward Attendant:**

> In the medical wards, you move patients, clean rooms, and do the work that busy doctors rarely have time for. You know the sound of someone trying not to cry behind a closed curtain, and you know when to check on them anyway.

**Reclamation Worker:**

> In Reclamation, you pull useful parts from machines that other people have given up on. A broken panel or old memory unit can still be valuable, especially on Thule, where a replacement might take months to arrive.

**Farmer:**

> In the farm domes, you tend crops beneath artificial lights and keep a close watch on the water lines. Every harvest is counted before it leaves the dome, because a missing food crate can mean an empty table somewhere else.

**Cargo Runner:**

> As a Cargo Runner, you move freight between storage rooms, lifts, and loading bays. You know which guards enjoy making people wait, which doors jam in the cold, and how much trouble one misplaced crate can cause.


### Choice options and immediate reactions

**c1-wake:help — Help the tired worker reach the lift.**

- Hint: You may be late.
- Next: `c1-duty`
- State effects: `[{"key":"workerTrust","add":1},{"key":"caution","add":1}]`
- Journal: You helped a worker before your shift, even though it could cost you time.
- Immediate reaction: The worker grips your arm as you guide them toward the lift. “Thanks,” they say, still catching their breath. You arrive a little late, but you know they made it safely.

**c1-wake:quiet — Keep your head down and go to work.**

- Hint: Avoid trouble this morning.
- Next: `c1-duty`
- State effects: `[{"key":"caution","add":1}]`
- Immediate reaction: You stay with the shift crowd and pass the lift without stopping. Behind you, the worker calls for help again, but the work bell is already sounding.

**c1-wake:ask — Ask the guard why the shift began early.**

- Hint: Find out what changed.
- Next: `c1-duty`
- State effects: `[{"key":"officialAttention","add":1}]`
- Journal: You questioned an early work order. A guard noticed your interest.
- Immediate reaction: The guard turns toward you, surprised that a Leadborn would question the schedule. “Orders changed,” he says. He studies your face before waving you onward.

---

## c1-duty — The Wrong Line

- **Location:** Thule · Work Sector
- **Speaker:** Narrator

### Shared text

1. Your work area is already busy when you arrive. Warning tones cut through the steady noise of the pumps, and people keep checking the time as if they have been told something you have not.
2. At first, the problem is easy to miss: a record that should be part of the ordinary shift paperwork has been changed. You check it again, not quite trusting what you see.
3. The entry belongs to Transit 17, a worker ship scheduled to leave Thule during the night. Someone has marked the record for removal, and the next system check will wipe away the departure as though it never happened.
4. The normal forms are almost as worn as the machines they describe. A half-printed maintenance reminder has been taped over a newer notice, and someone has written the correct shift number in pen. On Thule, people often fix a process just well enough to work another day. You understand why. The alternative can be to stop working while someone far away approves an official repair.
5. A coworker asks whether you can help finish a routine check before the next bell. You do what you can without leaving them alone with the problem. The exchange is brief, but it steadies you: there are real people here who depend on ordinary records being right, not just an argument about a screen.
6. A coworker notices you staring at the screen. “Everything all right?” Before you can answer, a warning appears: the record check begins in moments. If you want to save what you found, ask a question, or protect the person beside you, now is your chance.

### Occupation variants (exactly one is shown)

**Ward Attendant:**

> A patient named Mira Doss has vanished from the ward list. Her bed is still warm, and her cup is beside it, but a new entry says she was never admitted. The earlier transfer note names Transit 17.
> The night nurse glances toward the camera before speaking. “Mira was frightened. She made me promise not to tell anyone where her little brother lives.” Her voice drops further. “Please don’t put my name in a report.”

**Reclamation Worker:**

> A damaged control unit arrives in a bin stamped EMPTY. Its memory light is still blinking, and when you test it, a saved tag appears on the screen: Transit 17, Bay Six, 03:40.
> Your supervisor reaches for the unit before you can turn it off. “That was supposed to be destroyed.” He looks toward the open door and lowers his voice. “Put it back. I mean it.”

**Farmer:**

> One shipment sheet lists thirty food crates loaded onto Transit 17. Another says those crates were never packed, although you carried three of them to the loading cart yourself.
> Nearby, the farm officer speaks quietly into her comm. “The totals have to match.” When she sees you reading the sheets, she ends the call. “Those are old records. Put them away.”

**Cargo Runner:**

> A route sheet shows Transit 17 leaving Bay Six at 03:40, but the main departures board shows nothing at that time. Someone has scratched out the driver’s initials. You recognize them anyway.
> Another runner leans close enough to speak without being heard. “I loaded that ship myself.” A guard passes, and the runner steps back. “Forget I said anything. I’ve got children at home.”


### Conditional passages (if state matches)

**When:** `workerTrust min=1`

> The worker you helped at the lift notices what you are doing. Without a word, they move between your screen and the nearest camera. It may give you only a few seconds, but that is more than you had a moment ago.

**When:** `officialAttention min=1`

> The guard who noticed you at the lift passes the entrance and slows down. His eyes move from the workers to the open terminals. You look back at your screen, suddenly aware of how long you have been standing there.


### Choice options and immediate reactions

**c1-duty:copy — Make a private copy of what you found.**

- Hint: Keep proof, but risk being seen.
- Next: `c1-quiet`
- State effects: `[{"key":"evidence","set":"copy"},{"key":"officialAttention","add":1}]`
- Journal: You kept a copy of a work record linked to Transit 17.
- Immediate reaction: You keep a copy of the changed entry before the terminal closes. Someone could still notice that you accessed it, so you put the file out of sight.

**c1-duty:protect — Protect the person who may be blamed.**

- Hint: Their safety matters more than a clean record.
- Next: `c1-quiet`
- State effects: `[{"key":"witnessProtected","set":true},{"key":"workerTrust","add":1},{"key":"evidence","set":"memory"}]`
- Journal: You chose to protect a person connected to the strange record. You remember what you saw.
- Immediate reaction: You turn the screen away from the open passage and let your coworker return to work without being named. The record closes before you can keep a copy, but you remember what you saw.

**c1-duty:ask — Ask a careful question before you leave.**

- Hint: Learn more, but draw attention.
- Next: `c1-quiet`
- State effects: `[{"key":"officialAttention","add":2},{"key":"evidence","set":"memory"}]`
- Journal: You asked about Transit 17. Someone may remember that you asked.
- Immediate reaction: “Transit 17?” the clerk repeats, suddenly careful with their words. They tell you the list is closed and look toward the door before you can ask anything else.

---

## c1-quiet — A Familiar Face

- **Location:** Thule · Service Walk
- **Speaker:** Sera Venn

### Shared text

1. Sera Venn is waiting on the service walk with two cups of bitter tea and a canvas tool pouch over her shoulder. She has just finished a maintenance call in the living ring; a faint streak of sealant darkens one cuff. She sees your face, raises one eyebrow, and offers you a cup before you can invent an excuse to leave.
2. “You only walk that fast, {friendName}, when you’re hiding something,” she says. “Or when you owe me money.” She watches you take the tea. “Please tell me it’s the money. That problem I can solve.”
3. You grew up a few doors apart, sharing meals when supplies ran short and helping neighbors who could not manage alone. Sera still laughs about the time you tried to ride a cargo lift without holding the rail. People in the upper rings know your rank; she remembers the person you were before work took over your life.
4. Sera was beside you at the clinic after the pressure-door accident, arguing with an attendant who wanted her to wait outside. Later she walked you home, your eyebrow stitched and the burn beneath your jaw freshly dressed. She was your friend before either mark had healed.
5. Sera passes you the warmer of the two cups as though it is an accident. You remember her doing the same thing when you were children, claiming that she disliked hot tea and then stealing yours whenever it cooled. She does not ask you to thank her. The favor is too old to need a receipt.
6. Someone shouts her name from the far end of the service walk. She lifts a hand without turning, an economical greeting from a person who knows too many neighbors to stop for all of them. When she faces you again, her expression is lighter, but her attention has not wandered. You can tell her as much or as little as you choose; she has never been good at pretending she isn't worried.
7. “Everyone says the morning ship was canceled,” she adds, her smile fading. “But I heard a launch during the night. Maybe I’m wrong.” She waits beside you, leaving room for an answer instead of asking twice.

### Conditional passages (if state matches)

**When:** `evidence equals="copy"`

> You can still recall every detail of the record you copied. Showing Sera would mean letting someone else carry part of the danger, even if neither of you knows how serious it is yet.

**When:** `witnessProtected equals=true`

> You remember the frightened person at work. Sera would want to help if she knew who they were, but her courage sometimes moves faster than her caution.


### Choice options and immediate reactions

**c1-quiet:tell — Tell Sera what you found.**

- Hint: Trust your oldest friend.
- Next: `c1-home`
- State effects: `[{"key":"friendTrust","add":2},{"key":"seraKnows","set":true}]`
- Journal: You trusted Sera with the first clue about Transit 17.
- Immediate reaction: Sera stops joking. She lets you finish without interrupting, then lowers her voice. “All right,” she says. “Start from the beginning.”

**c1-quiet:half — Say you saw a record that makes no sense.**

- Hint: Be careful without lying.
- Next: `c1-home`
- State effects: `[{"key":"friendTrust","add":1},{"key":"seraKnows","set":false}]`
- Journal: You told Sera that something seemed wrong, but kept the details to yourself.
- Immediate reaction: “A record that makes no sense?” Sera asks. She waits for more, but you give her nothing. “Fine. I’m here when you’re ready,” she says.

**c1-quiet:deflect — Ask how her own shift went.**

- Hint: Keep the worry private.
- Next: `c1-home`
- State effects: `[{"key":"friendTrust","add":0},{"key":"seraKnows","set":false}]`
- Immediate reaction: Sera talks about a broken water pump, but she knows you changed the subject. When you part, she squeezes your shoulder and says, “You can still tell me.”

---

## c1-home — The People Who Know You

- **Location:** Thule · Living Ring
- **Speaker:** Narrator

### Shared text

1. The living ring smells of warm bread, machine oil, and clothes that never quite dry. Few visitors come this far down the station. The halls are crowded, the doors are thin, and the lights begin to dim long before people are ready for bed.
2. Your early shift has ended, but you cannot stop thinking about the altered record. Someone was frightened enough to beg for silence, and a ship that may have carried workers away is being removed from the system.
3. A shared heater ticks inside the wall. From an open doorway comes the smell of a simple meal and somebody trying to teach a child a song they keep getting wrong. A neighbor laughs and corrects the last line; the child deliberately sings it wrong again. For a moment you are only someone coming home from work, tired and hungry, carrying a day that would have been easier if it had stayed ordinary.
4. An old message board beside the stairwell lists small requests for help: move a table, mend a latch, watch an elderly neighbor's door until a relative comes back from a shift. The list changes every day. The people who live here know that help is often exchanged before anyone can afford to call it a favor. You touch the railing and make yourself return to the present.
5. Your wrist terminal flashes tomorrow’s rota. You can ask to work a partial shift or arrange for someone to cover the remaining hours, but an uncovered absence can be charged to your household. For now, the people at home need you too. You can help them, tell them what is troubling you, or keep your worry to yourself until you understand it better.

### Upbringing variants (exactly one is shown)

**Family Household:**

> Your family shares a few small rooms behind the laundry pipes. A relative is struggling with the heater again, holding a worn filter that should have been replaced weeks ago. “The shop won’t give us another until we pay the old bill,” they say.
> They set the filter down and study your face. “That look usually means work was bad.” There is no pressure to explain, just a space beside the table where you can sit.

**Communal Upbringing:**

> You were raised in shared kitchens and crowded halls, among neighbors who call one another family without needing the same name. The kitchen is short of food today, and someone asks whether you can help move the water containers.
> An older worker greets you with a tired smile. “You used to be too small to reach this table,” they say. “Now everyone thinks you can fix the station. Start with that water pump.”

**Estranged Household:**

> Your rented room is quiet, except for the loose door that rattles whenever the air pumps start. A message waits on the terminal, sent by a family member you have not spoken to in years.
> “I heard they’re checking people at the port. Tell me you’re safe when you can.” There is no apology for the last argument, and perhaps that is why you read the message more than once.


### Choice options and immediate reactions

**c1-home:care — Help the people connected to your home.**

- Hint: Make time for someone else.
- Next: `c1-notice`
- State effects: `[{"key":"homeCommitment","set":"care"},{"key":"workerTrust","add":1}]`
- Journal: You made time for the people who have been part of your life on Thule.
- Immediate reaction: You spend your break helping at home instead of chasing the missing record. Someone thanks you for staying. The question about the ship has to wait.

**c1-home:truth — Share that something strange happened at work.**

- Hint: Ask for advice, but spread the risk.
- Next: `c1-notice`
- State effects: `[{"key":"homeCommitment","set":"confided"},{"key":"officialAttention","add":1}]`
- Journal: You shared a worry from your shift with someone from home.
- Immediate reaction: You tell someone close to you that the work records may have been altered. They listen, then ask you to lower your voice because the hallway door is open.

**c1-home:rest — Rest briefly and keep your worry to yourself.**

- Hint: Save your strength.
- Next: `c1-notice`
- State effects: `[{"key":"homeCommitment","set":"private"},{"key":"caution","add":1}]`
- Immediate reaction: For a short while, you sit in silence and let your hands stop shaking. The rest helps, even though you still have no answer when you stand again.

---

## c1-notice — No Such Ship

- **Location:** Thule · Public Records Hall
- **Speaker:** Narrator

### Shared text

1. By midday, workers have gathered outside the public records hall. A new notice fills the largest screen, and people press close enough to read it without having to speak to the guards posted nearby.
2. The Concord’s statement is plain: “There was no worker transport from Thule during the last night cycle. All claims of a departure are false. Anyone spreading such claims may be questioned.”
3. You read it twice. The notice does not explain the changed records or the people who remember a departure. Instead, it warns anyone who asks about the ship that the asking itself could bring trouble.
4. A woman standing beside you grips the edge of the screen. “My husband was on that ship,” she says, loud enough for several people to hear. A guard turns toward her, and the nearby workers quickly look away.
5. A man in a patched work coat reads the public notice aloud for someone who cannot see the upper lines. At first his voice is matter-of-fact; by the last sentence it has become careful. He does not add an opinion. The person beside him asks him to read the first line again, and he does. Behind them, an officer checks the crowd without approaching anyone who is merely listening.
6. A records clerk inside the glass booth keeps directing people toward the proper request window. Some follow the directions. Others stay beside the screen, hoping another announcement will explain the first. You recognize both impulses. An office can be the only place where a question is officially acknowledged, and still be a place where a frightened person is made to feel that asking it is wrong.
7. Until now, you could have hoped the record was a mistake. Looking at the woman’s face and the guard moving through the crowd, that hope feels much harder to hold on to.

### Conditional passages (if state matches)

**When:** `evidence equals="copy"`

> You have a saved record from work. It might help this woman, but taking it out in front of the guards would also tell them who kept it.

**When:** `evidence equals="memory"`

> You remember what you saw at work, but you have no clear copy to show anyone. In a hall full of official records, that makes your word dangerously easy to dismiss.

**When:** `homeCommitment equals="care"`

> You still feel the ache from helping at home. The ordinary needs of the people you love have not stopped just because this notice appeared.

**When:** `homeCommitment equals="confided"`

> Someone at home already knows you are worried. As the guard steps closer to the woman, you wonder whether telling them was a comfort or a risk.

**When:** `homeCommitment equals="private"`

> You had hoped for a few quiet hours after work. The crowd and the guard have put an end to that.


### Choice options and immediate reactions

**c1-notice:copy — Record the public notice before it changes.**

- Hint: Keep a second piece of evidence.
- Next: `c1-cross`
- State effects: `[{"key":"noticeCopy","set":true},{"key":"officialAttention","add":1}]`
- Journal: You saved the official denial. It conflicts with what you saw at work.
- Immediate reaction: You record the public notice before the screen refreshes. At least the Concord’s exact words can no longer change in your memory, even if the hall displays something different tomorrow.

**c1-notice:woman — Help the frightened woman move away from the guard.**

- Hint: Protect a stranger.
- Next: `c1-cross`
- State effects: `[{"key":"witnessProtected","set":true},{"key":"workerTrust","add":1},{"key":"noticeCopy","set":false}]`
- Journal: You helped a witness leave the records hall before the guard could question her.
- Immediate reaction: You step between the woman and the guard long enough for her to reach a side passage. She looks back once, as if trying to remember your face.

**c1-notice:guard — Ask the guard where families can request answers.**

- Hint: Use the official process.
- Next: `c1-cross`
- State effects: `[{"key":"officialAttention","add":2},{"key":"noticeCopy","set":false}]`
- Journal: You asked the authorities how families could check a missing transport.
- Immediate reaction: The guard points to an office that is already closed. “Leave a request,” he says, loud enough for the people nearby to hear. Several faces turn toward you.

---

## c1-cross — The One Who Stayed

- **Location:** Thule · Narrow Service Lane
- **Speaker:** Narrator

### Shared text

1. A few streets from the records hall, the woman calls to you from a service doorway. She introduces herself as Ada, a worker at the food counter near the docks. She recognizes you from the records hall, where the guard turned toward her.
2. “I walked my husband to Bay Six,” she tells you. “He had his lunch tin. He joined the line, and they told us the ship would be back in five days.” She says the last part carefully, as if repeating a promise might make it true.
3. Ada shows you a passenger tag with a printed name and number. One corner has been torn away, and her hand trembles as she holds it out. “They can erase a notice. They can’t tell me I wasn’t there.”
4. Two officers turn into the lane behind you. Ada closes her fist around the tag, tearing its damaged edge a little further, and looks toward the nearest door.
5. Ada keeps the worn passenger tag in her own hand. “I don’t want to lose this,” she says. “I just want somebody to remember what I saw.” She folds its damaged corner away from the officers’ view, careful not to cover the name printed beneath it. You can hear how hard she is working to keep her voice steady.
6. A door opens halfway along the lane and closes again when a resident sees the officers. Nobody gives a signal. People here have practiced deciding when a corridor is safe to use, and sometimes they make the decision in a heartbeat. Ada looks from you to the doorway. The choice in front of you matters because somebody else will have to live with it after you walk away.
7. You have only moments to help Ada, record the tag, or ask someone you trust to meet her. Before you move, your wrist terminal flashes with a message from Sera: “Meet me at the closed food stall after the afternoon bell. Jalen can help us figure out what to do.”

### Choice options and immediate reactions

**c1-cross:hide — Help Ada reach a safe door.**

- Hint: Protect the witness; the tag may be lost.
- Next: `c1-ally`
- State effects: `[{"key":"witnessProtected","set":true},{"key":"workerTrust","add":2},{"key":"adaSafe","set":true}]`
- Journal: You helped Ada avoid questioning. She knows a passenger was on Transit 17.
- Immediate reaction: You guide Ada through a side door and wait until the footsteps pass. She catches her breath, then thanks you before slipping into the workers’ ring.

**c1-cross:tag — Take a clear copy of the tag.**

- Hint: Keep proof; Ada must find her own way.
- Next: `c1-ally`
- State effects: `[{"key":"evidence","set":"copy"},{"key":"adaSafe","set":false},{"key":"officialAttention","add":1}]`
- Journal: You kept a clear image of a passenger tag, but Ada was left to avoid the officers herself.
- Immediate reaction: You take a clear image of the tag while Ada keeps watch. She leaves as soon as you finish, heading down the passage without anyone beside her.

**c1-cross:sera — Ask Sera to meet Ada and help her.**

- Hint: Share the risk with your friend.
- Next: `c1-ally`
- State effects: `[{"key":"friendTrust","add":1},{"key":"witnessProtected","set":true},{"key":"adaSafe","set":true}]`
- Journal: You trusted Sera to help a witness. Your friend is now part of the risk.
- Immediate reaction: Sera answers your message almost at once. She agrees to meet Ada, but warns you that bringing another person into this means putting them at risk too.

**c1-cross:jalen — Call Jalen, who knows the worker shelters.**

- Hint: Bring in a local organizer.
- Next: `c1-ally`
- State effects: `[{"key":"workerTrust","add":1},{"key":"witnessProtected","set":true},{"key":"adaSafe","set":true},{"key":"jalenContact","set":true}]`
- Journal: You involved Jalen in protecting Ada from the officers.
- Immediate reaction: Jalen sends the location of a shelter and says he will find Ada a safe place. His quick answer tells you he has handled frightened families before.

---

## c1-ally — Two Ways to Help

- **Location:** Thule · Closed Food Stall
- **Speaker:** Jalen Orr

### Shared text

1. The food stall is closed when you arrive, but Sera is waiting beside it with Jalen Orr. You recognize Jalen from the workers’ ring: he helps families challenge missing wages and find food when their rations are cut. You have seen his supply drives bring neighbors together, though you have never joined a political group. “Thanks for coming, {first},” he says.
2. “I heard you were at the records hall,” Jalen says. “Families are asking me where their people went, and I don’t have an answer. You saw the notice, and you may know someone who saw the ship. Tell us what you can.” He sounds tired rather than demanding.
3. Sera folds her arms. “And if we gather everyone in one place, the guards will know exactly whom to question. We need facts before we ask people to take that risk.”
4. “I know,” Jalen replies. “But some of those families are waiting by the port right now. They deserve more than another day of silence.”
5. Jalen finds a loose fastener on the table and turns it between his fingers while Sera speaks. He looks more worn than the public notices ever suggest, and you wonder how many small problems people have carried to him today. When Sera finishes, he sets the fastener down rather than dismissing her concern. 'If we ask families to stand together,' he says, 'we have to tell them what the risk is before they arrive.'
6. Sera rubs a trace of sealant from her thumb. “When a cooling line fails, somebody tells me which valve is leaking. Nobody gets safer if I guess.” She looks at Jalen. “We can ask questions without handing the guards a list of people to frighten.” Jalen nods, but neither of them has an easy answer for the waiting families.
7. They turn toward you, not because you have any authority, but because you were close enough to see what happened. Sera wants to protect people who might be named, and Jalen wants to help families who cannot afford to wait. Both are asking for your judgment, and neither can promise that your answer will be safe.

### Conditional passages (if state matches)

**When:** `seraKnows equals=true`

> Sera glances at you but keeps quiet about the first record. She knows more than she is saying, and for now she is leaving that decision to you.

**When:** `seraKnows equals=false`

> Sera watches you for a moment, as though she can tell there is more to the story. She does not press you in front of Jalen.

**When:** `adaSafe equals=true`

> When you explain how you helped Ada leave the lane, Jalen nods. “First we make sure she reached somewhere safe. After that, we can ask what she needs, if she wants to speak.”

**When:** `adaSafe equals=false`

> When you explain that Ada had to leave on her own, Sera looks toward the nearest passage. “I’ll check on her when we’re done,” she says. Jalen nods, but his worried expression does not change.


### Choice options and immediate reactions

**c1-ally:sera — Work quietly with Sera first.**

- Hint: Protect the people close to you.
- Next: `c1-walk`
- State effects: `[{"key":"route","set":"sera"},{"key":"friendTrust","add":1}]`
- Journal: You chose to investigate quietly with Sera rather than make the issue public.
- Immediate reaction: Sera nods and pulls you away from the open street. “Then we do this quietly,” she says. “And we tell each other when something goes wrong.”

**c1-ally:jalen — Help Jalen speak for the missing families.**

- Hint: Bring people together.
- Next: `c1-walk`
- State effects: `[{"key":"route","set":"jalen"},{"key":"workerTrust","add":1},{"key":"officialAttention","add":1}]`
- Journal: You agreed to help Jalen gather the workers who need answers.
- Immediate reaction: Jalen asks you to help reach the missing workers’ families. Before you leave, he gives you three names and warns you that some people are afraid to be seen.

**c1-ally:office — File an official request for the ship record.**

- Hint: Leave a formal trail.
- Next: `c1-walk`
- State effects: `[{"key":"route","set":"office"},{"key":"officialAttention","add":2}]`
- Journal: You chose to ask the Concord for a formal answer.
- Immediate reaction: Jalen looks uneasy, but he does not stop you. At the records office, the clerk accepts your request and gives you a number instead of an answer.

**c1-ally:alone — Keep the clue and investigate alone for now.**

- Hint: Trust fewer people.
- Next: `c1-walk`
- State effects: `[{"key":"route","set":"alone"},{"key":"caution","add":1}]`
- Journal: You held back the clue and chose to search alone.
- Immediate reaction: You keep the clue and leave without making a promise. Sera watches you go, worried, while Jalen turns back to the families waiting outside.

---

## c1-walk — A City Between Bells

- **Location:** Thule · Night Walk
- **Speaker:** Sera Venn

### Shared text

1. By the evening bell, the shift lanes have begun to empty. You walk with Sera past the smaller homes and storage rooms. The air pumps keep working behind the walls, steady enough that most people forget to hear them. If they stopped, every person on Thule would remember why they mattered.
2. A little garden sits behind a wire gate, kept alive with borrowed water and lamps older than either of you. Someone has left a broken toy ship among the plants. You remember children arguing over who would get to fly it next.
3. “Remember when we thought the upper ring had a real sky?” Sera asks. “You said the rich were hiding the sun behind a window.” She smiles at the memory. “I told everyone you’d seen it. Nobody believed me, of course.”
4. Her smile fades as you reach the gate. “I can tell you why a pump stalls,” she says. “It’s the people who write the orders I can’t work out.” She rests a hand on the cold rail before turning to you. “I keep thinking there must be a reason they’ll explain if we ask the right way.”
5. A small service robot struggles to carry a crate over a floor join. Sera steps aside to let it pass, then watches it roll backward and try again. 'That's me getting out of bed tomorrow,' she says. You point out that the robot has a better attitude. 'Only because nobody has asked it to attend a meeting.' When the machine finally clears the join, the two of you give it a quiet cheer it cannot possibly appreciate.
6. The joke fades without either of you forcing it to last. Beyond the garden gate, the last light from the work ring turns the metal leaves a dull gold. You have shared years of ordinary walks, half-finished arguments, and silences that never needed explaining. Tonight Sera is making space for a more difficult conversation, and the familiar path makes that both easier and harder.
7. “Whatever you do next, {friendName}, remember the people who have to live with it. You don’t have to be sure about everything, but at least look them in the eye.”

### Conditional passages (if state matches)

**When:** `route equals="jalen"`

> Sera knows people are considering a gathering. She does not ask you to stop them, only to make sure they understand the danger before they show up.

**When:** `route equals="office"`

> “You asked an office for answers?” Sera says. “Maybe someone there will help. Just don’t forget they keep a record of everyone who asks.”

**When:** `route equals="alone"`

> Sera notices how much you have kept to yourself. “You’re allowed to be careful,” she says. “That doesn’t mean you have to do everything alone.”

**When:** `route equals="sera"`

> Sera opens the garden gate and waits for you to follow. “We can work quietly,” she says. “But if somebody needs help, I want to hear about it.”


### Choice options and immediate reactions

**c1-walk:promise — Promise Sera you will not forget the people here.**

- Hint: Give your friend your word.
- Next: `c1-door`
- State effects: `[{"key":"friendTrust","add":2},{"key":"seraPromise","set":true}]`
- Journal: You promised Sera you would remember the people of Thule, even if your life changed.
- Immediate reaction: Sera takes your promise seriously. “I’ll remind you,” she says, with a small smile. You know she means it, even if that reminder comes at the worst time.

**c1-walk:uncertain — Admit that you do not know what is right yet.**

- Hint: Be honest about your doubt.
- Next: `c1-door`
- State effects: `[{"key":"friendTrust","add":1},{"key":"seraPromise","set":false}]`
- Journal: You told Sera that you were unsure what the right action would be.
- Immediate reaction: “That makes two of us,” Sera says. She does not ask you to pretend otherwise, and the two of you walk on without needing to settle the question.

**c1-walk:focus — Tell Sera the facts matter more than promises.**

- Hint: Stay focused on finding proof.
- Next: `c1-door`
- State effects: `[{"key":"seraPromise","set":false},{"key":"caution","add":1}]`
- Immediate reaction: Sera lets the words sit between you. “Facts matter,” she says at last. “Just remember they belong to people.”

---

## c1-door — Someone Has Noticed

- **Location:** Thule · Checkpoint Nine
- **Speaker:** Narrator

### Shared text

1. You are nearly home when the checkpoint light turns red. A checkpoint officer you have never met steps across the passage. His coat is cleaner than anything in the workers’ ring, but the corners of his small paper notebook are worn from use.
2. “There’s been a report about a missing transport,” he says. “You were at the records hall.” He moves to one side, but his position still blocks the narrow path. “I need to ask you a few questions.”
3. Two workers wait behind him to cross. One lowers their eyes, while the other looks at you for a moment before turning away. You cannot tell whether they are afraid for you or for themselves.
4. The guard glances at the thin scar through your left eyebrow and the pale crescent beneath your right jaw, checking your face against the description in his notebook.
5. The guard's scanner flashes green when a worker passes through the next lane. He is not shouting, and the people waiting behind him would probably describe the scene as routine. You have learned that routines can still be frightening when one person decides the questions and another person has to answer them. You hold your work badge where he can see it without offering him anything he has not asked for.
6. A cleaner pauses at the junction with a cart of empty containers. The guard moves the cart through before turning back to you. For a few seconds the corridor looks normal again, crowded with people trying to reach home. You do not know whether the interruption is kindness, habit, or only impatience. You do know that the questions have not ended.
7. The officer squares the notebook against his palm, then reads your name without asking for it. “{formalName}. Did you see anything that proves a ship left Thule last night?” Your shift number is already written beside your name. You have no idea who gave it to him.

### Conditional passages (if state matches)

**When:** `route equals="office"`

> He turns the page. “You filed a request. Tell me what you were hoping to find.” Your name is written beneath the entry.

**When:** `route equals="jalen"`

> He taps a note with his finger. “I’m told you’ve been speaking to people about the missing transport.” His voice stays polite, which does nothing to make the question easier.

**When:** `route equals="sera"`

> He glances toward the hall behind you. “A friend was seen with you.” You resist the urge to look back, wondering whether Sera has made it home.

**When:** `route equals="alone"`

> He checks his notebook once more. There is little written about you, and for the moment you hope to keep it that way.


### Choice options and immediate reactions

**c1-door:plain — Tell him you saw a record that did not match.**

- Hint: Speak carefully, without naming a witness.
- Next: `c1-cost`
- State effects: `[{"key":"officialAttention","add":1},{"key":"toldGuard","set":true}]`
- Journal: You told a guard that the official records did not match what you saw.
- Immediate reaction: You explain the broken record as plainly as you can. The guard writes something down and asks who else heard you speak about it.

**c1-door:deny — Say you cannot prove any ship left.**

- Hint: Protect the people who spoke to you.
- Next: `c1-cost`
- State effects: `[{"key":"caution","add":1},{"key":"toldGuard","set":false}]`
- Journal: You avoided naming witnesses or giving the guard useful proof.
- Immediate reaction: You say you cannot prove the ship left. The guard waits for you to change your answer, then steps aside without saying whether he believes you.

**c1-door:rights — Ask for the reason you are being questioned.**

- Hint: Stand up for your right to an answer.
- Next: `c1-cost`
- State effects: `[{"key":"officialAttention","add":2},{"key":"workerTrust","add":1},{"key":"toldGuard","set":false}]`
- Journal: You asked the guard to explain the questioning before answering.
- Immediate reaction: You ask why you are being stopped. The officer studies your wrist mark before answering. “Because I’m asking,” he says, and makes a short note without looking up.

---

## c1-cost — What You Can Carry

- **Location:** Thule · Home Passage
- **Speaker:** Narrator

### Shared text

1. The officer finally lets you pass. He folds a corner of his notebook before closing it. “We may speak again,” he says, without raising his voice. Somehow, that makes the short walk home feel longer.
2. The workday is over, yet the missing transport has followed you from one end of Thule to the other. People remember a ship leaving, but the records say it never happened. Now the guards are asking who has been talking about it.
3. You think about what remains in your hands: perhaps a saved record, perhaps only a memory. There is also a witness who spoke because she was desperate, and a friend who may now be taking risks because you trusted her.
4. On the way home you pass a workshop where a tired mechanic is arguing with a young apprentice about an incorrectly stamped part. 'The part works,' the apprentice says. 'It does,' the mechanic answers, 'but the next person has to know what was changed.' You keep walking before they notice you listening. Their problem has nothing to do with the missing ship, and it sounds uncomfortably familiar.
5. A light is on above the shared kitchen. Two neighbors are dividing a portion of rice while a third counts who has not returned from the late shift. Nobody looks up when you pass. You cannot solve their worries with a record or a promise, but you can choose what you protect first. That choice may tell the people around you as much about you as anything you eventually discover.
6. You cannot make everyone safe tonight. You can, however, decide what matters most before the station wakes and asks the same questions again.

### Conditional passages (if state matches)

**When:** `evidence equals="copy"`

> You still have a copy linked to the transport. It could help convince someone else, but it could also bring an officer to your door.

**When:** `evidence equals="memory"`

> You remember the record clearly, but without a copy, an official can dismiss your account as a mistake. You may need another witness.

**When:** `witnessProtected equals=true`

> At least one frightened person is safer because of what you did. You wish that meant you also knew where the missing workers were.

**When:** `toldGuard equals=true`

> You told the guard part of what you knew. He might check the records himself, or he might return to ask who else knows.

**When:** `toldGuard equals=false`

> You gave the guard little to work with. The silence may protect you tonight, but it will not stop him from asking other people.


### Choice options and immediate reactions

**c1-cost:secure — Secure a copy or write down what you remember.**

- Hint: Protect the information you still have.
- Next: `c1-dusk`
- State effects: `[{"key":"evidenceSecured","set":true},{"key":"caution","add":1}]`
- Journal: You secured the evidence you have, or wrote down a clear memory to preserve it.
- Immediate reaction: You make a careful account of what you know and hide it where a casual search will not find it. A few lines on a page may not be much protection, but they will still be there tomorrow.

**c1-cost:people — Check whether the witnesses are safe.**

- Hint: Put people before paper.
- Next: `c1-dusk`
- State effects: `[{"key":"witnessProtected","set":true},{"key":"evidenceSecured","set":false},{"key":"workerTrust","add":1}]`
- Journal: You spent the evening checking on the people whose words might put them at risk.
- Immediate reaction: You check on the people caught up in the missing transport. Not everyone answers, but one familiar voice tells you they are safe for tonight.

**c1-cost:message — Write a careful message about what happened.**

- Hint: Create a record that may outlast you.
- Next: `c1-dusk`
- State effects: `[{"key":"messageWritten","set":true},{"key":"officialAttention","add":1}]`
- Journal: You made a private written account of the day and stored a copy.
- Immediate reaction: You write down the day’s events while you still remember them clearly. Before sending the message, you read it again and remove the names that could hurt someone.

---

## c1-dusk — A Promise for Tomorrow

- **Location:** Thule · Sleeping Ring
- **Speaker:** Narrator

### Shared text

1. The final bell sounds, and the living ring grows quiet. Your room is warm enough to sleep, but you sit awake, listening to the familiar hum of air moving through the walls.
2. This morning, the station’s records show one version of what happened to Transit 17. Tonight, the Concord’s notice tells everyone a different one. The people you met today will have to live with the difference, and some of them have already paid for speaking up.
3. A gentle knock comes from the door. When you open it, the corridor is empty except for an envelope lying on the floor. It has no name, no official stamp, and no sign of who left it.
4. Inside is a small card bearing four words: “Ask who wrote it.” You read them again, trying to decide whether the message is meant to help you or warn you away.
5. The air unit clicks once, rattles, and finds its rhythm again. Somewhere down the corridor a child complains that the lights have dimmed too early. A tired adult promises that tomorrow will be better, then laughs softly at how often they have made that promise. The ordinary sounds continue around your room. Whatever you choose to do next, Thule will still need its water, its repairs, and the people who keep one another fed.
6. You remember small moments from the day that will not appear in any report: a warm cup handed over without a question, a stranger trying to speak while a guard watched, an office full of people waiting their turn. None of those moments proves what happened to the ship. They tell you why the answer matters.
7. You place the card beside your bed, but the unanswered question stays with you. Someone knows you have been asking about Transit 17, and they have found a way to reach your door without being seen.

### Occupation variants (exactly one is shown)

**Ward Attendant:**

> You keep seeing Mira Doss’s empty bed and the cup left beside it. The night nurse asked you not to put a name in a report; you still have no answer that would make the request easier to carry.

**Reclamation Worker:**

> You remember the control unit’s blinking light in the bin marked EMPTY. Your supervisor wanted it gone, but you cannot make yourself forget what its tag said.

**Farmer:**

> You carried three of those food crates yourself. No correction on a shipment sheet can erase their weight from your arms, or explain why the totals were made to match.

**Cargo Runner:**

> You recognized the scratched-out driver’s initials. You still know them now, and the runner’s fear for his children gives you another reason to be careful with that knowledge.


### Conditional passages (if state matches)

**When:** `seraPromise equals=true`

> You remember your promise to Sera. It was easy to make beside a quiet garden; keeping it may be harder if the truth gives you a reason to run.

**When:** `homeCommitment equals="care"`

> Someone at home is safer or more comfortable because you made time for them today. You hope tomorrow gives you the chance to do it again.

**When:** `evidenceSecured equals=true`

> Your notes are hidden where you left them. Whether that place is safe is a question you cannot answer tonight.


### Choice options and immediate reactions

**c1-dusk:search — Find out who changed the record.**

- Hint: Follow the truth wherever it leads.
- Next: `c1-end`
- State effects: `[{"key":"promise","set":"search"}]`
- Journal: You decided to search for the person who changed the transport record.
- Immediate reaction: You set aside a fresh page and write one question at the top: Who changed the manifest? It is the first thing you plan to pursue tomorrow.

**c1-dusk:families — Stand beside the families asking for answers.**

- Hint: Protect people before chasing power.
- Next: `c1-end`
- State effects: `[{"key":"promise","set":"families"},{"key":"workerTrust","add":1}]`
- Journal: You decided to help the families who want answers about the missing workers.
- Immediate reaction: You decide that the families deserve someone willing to stand beside them. You may not know where their loved ones went, but you know where to begin.

**c1-dusk:careful — Move carefully and learn who can be trusted.**

- Hint: Protect your future while investigating.
- Next: `c1-end`
- State effects: `[{"key":"promise","set":"careful"},{"key":"caution","add":1}]`
- Journal: You decided to keep investigating, but to watch whom you trust.
- Immediate reaction: You make a short list of people you might trust, then cross out two names. Tomorrow you will ask better questions and listen closely to the answers.

---

## c1-end — Chapter One Complete

- **Location:** Thule · End of Day
- **Speaker:** Narrator

### Shared text

1. Chapter One is complete. Some people will remember what you did today, while others will remember only what they think you did.
2. Your journal keeps track of your decisions, and your work and upbringing remain part of your character’s story. Those choices will matter as Tierfall continues.
3. The next chapter is still in development. You can start again with a different background.

### Choice options and immediate reactions

*End of the released Chapter One prototype.*

---
