import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext, Script } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { test } from 'node:test';

// Released Chapter One only. Unpublished narrative remains outside the PUBLIC repository.
const directory = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(directory, '../game/tierfall-chapter1-expanded-edition.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x => x[1]);
assert.equal(scripts.length, 2, 'game model and reader presentation are present');
for (const source of scripts) new Script(source);
const sandbox = {};
runInNewContext(scripts[0], sandbox, { timeout: 3000 });
const game = sandbox.Tierfall;
assert.ok(game?.newGame && game?.step && game?.sceneParagraphs);

const origins = ['ward', 'reclamation', 'farmer', 'cargo'];
const upbringings = ['family', 'communal', 'estranged'];
const ages = [27, 28, 29, 30];

function runStory(state, seed) {
  for (let step = 0; step < 40 && !state.finished; step++) {
    const scene = game.scenes[state.sceneId];
    assert.ok(scene, 'unknown scene');
    assert.ok(game.sceneParagraphs(state).length > 0, 'empty story scene');
    const choices = scene.choices.filter(choice => game.pass(state, choice.when));
    assert.ok(choices.length > 0, 'unexpected dead end');
    state = game.step(state, choices[(seed + step * 7) % choices.length].id);
  }
  assert.equal(state.finished, true, 'chapter was not completed');
  assert.equal(state.history.length, 11, 'expected original Chapter One decisions');
  assert.ok(Array.isArray(state.journal), 'journal stays active in current memory');
}

test('opening scene graph and approved age selector remain intact', () => {
  assert.equal(game.sceneCount(), 16);
  assert.equal(Object.values(game.scenes).reduce((sum, scene) => sum + scene.choices.length, 0), 39);
  assert.match(html, /<select id="player-age"/);
  for (const age of ages)
    assert.match(html, new RegExp('<option value="' + age + '">' + age + '</option>'));
});

test('all 48 age, occupation, upbringing starts reach Chapter One ending', () => {
  for (const origin of origins) for (const upbringing of upbringings) for (const age of ages) {
    const state = game.newGame('Kesh Varro', 'they', origin, upbringing, { age });
    assert.equal(state.age, age);
    runStory(game.skipPrologue(state), age + origins.indexOf(origin));
  }
});

test('sampled chapter choices continue to work with no save system', () => {
  for (const origin of origins) for (const upbringing of upbringings)
    for (let seed = 0; seed < 40; seed++)
      runStory(game.skipPrologue(game.newGame('Kesh Varro', 'they', origin, upbringing)), seed);
});

test('no persistent progress, resume/import/export API or game controls', () => {
  for (const property of ['saveState', 'loadState', 'validateState', 'SAVE_KEY'])
    assert.equal(game[property], undefined, 'disabled saving API: ' + property);
  for (const element of ['save-button', 'setup-import', 'export-button', 'import-button', 'import-file', 'recap-modal'])
    assert.ok(!html.includes('id="' + element + '"'), 'disabled saving element: ' + element);
  assert.match(html, /game = null;\s*render\(\);\s*}\s*Tierfall\.boot = boot;/);
  assert.doesNotMatch(html, /Tierfall\.loadState|Tierfall\.saveState|function importSave\(|function exportSave\(/);
});

test('invalid age settings safely default to 27', () => {
  for (const value of [26, 31, 0, 99, 'unknown']) {
    const state = game.newGame('Kesh Varro', 'they', 'ward', 'family', { age: value });
    assert.equal(state.age, 27);
  }
});
