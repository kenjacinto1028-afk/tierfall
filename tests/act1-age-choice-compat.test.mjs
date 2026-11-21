import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { test } from 'node:test';

// Released Prologue/Chapter One only. Never include unpublished chapters or hidden story data.
const directory = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(directory, '../game/tierfall-chapter1-expanded-edition.html'), 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(source, 'game story engine was not found');
const sandbox = {};
runInNewContext(source, sandbox, { timeout: 3000 });
const game = sandbox.Tierfall;
assert.ok(game?.newGame && game?.step && game?.validateState && game?.saveState);

const origins = ['ward', 'reclamation', 'farmer', 'cargo'];
const upbringings = ['family', 'communal', 'estranged'];
const ages = [27, 28, 29, 30];
const create = (origin, upbringing, age) => game.newGame('Kesh Varro', 'they', origin, upbringing, { age });

function runStory(state, seed) {
  for (let step = 0; step < 30 && !state.finished; step++) {
    const scene = game.scenes[state.sceneId];
    assert.ok(scene, 'unknown active scene');
    assert.ok(game.sceneParagraphs(state).length > 0, 'empty story scene');
    const choices = scene.choices.filter((choice) => game.pass(state, choice.when));
    assert.ok(choices.length, 'unexpected scene dead end');
    const choice = choices[(seed + step * 7) % choices.length];
    state = game.step(state, choice.id);
  }
  assert.equal(state.finished, true, 'story did not reach chapter completion');
  assert.equal(state.history.length, 11, 'all original Chapter One decisions must be preserved');
  assert.ok(Array.isArray(state.journal));
  return state;
}

test('Act I opening retains the existing scene graph and age selector', () => {
  assert.equal(game.sceneCount(), 16);
  assert.equal(Object.values(game.scenes).reduce((n, s) => n + s.choices.length, 0), 39);
  assert.match(html, /<select id="player-age"/);
  for (const age of ages) assert.match(html, new RegExp('<option value="' + age + '">' + age + '</option>'));
});

test('all 48 approved starting age/background combinations survive save/load', () => {
  for (const origin of origins) for (const upbringing of upbringings) for (const age of ages) {
    const initial = create(origin, upbringing, age);
    assert.equal(initial.age, age);
    const storage = new Map();
    const adapter = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) };
    game.saveState(initial, adapter);
    const loaded = game.loadState(adapter);
    assert.equal(loaded.age, age);
    assert.equal(loaded.origin, origin);
    assert.equal(loaded.upbringing, upbringing);
  }
});

test('legacy saves import without inventing age or losing existing decisions', () => {
  for (const origin of origins) for (const upbringing of upbringings) for (let seed = 0; seed < 40; seed++) {
    const olderSave = create(origin, upbringing, 27);
    delete olderSave.age;
    const validated = game.validateState(JSON.parse(JSON.stringify(olderSave)));
    assert.equal(Object.hasOwn(validated, 'age'), false);
    const ended = runStory(validated, seed);
    assert.equal(Object.hasOwn(ended, 'age'), false);
    assert.throws(() => game.step(ended, 'continue'), /complete/i);
  }
});

test('invalid ages are rejected', () => {
  for (const invalid of [26, 31, 0, 99, 'unknown']) {
    const state = create('ward', 'family', 27);
    state.age = invalid;
    assert.throws(() => game.validateState(state), /age/i);
  }
});
