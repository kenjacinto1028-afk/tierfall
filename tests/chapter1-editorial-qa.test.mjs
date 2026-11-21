import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Released Prologue/Chapter One only; do not include private later-act manuscripts.
const html = fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
assert.equal(scripts.length, 2);
for (const code of scripts) new vm.Script(code);
const model = vm.runInNewContext(scripts[0] + '\nTierfall;', {});

function progress(state, choiceId) {
  const scene = model.scenes[state.sceneId];
  assert.ok(scene.choices.some(c => c.id === choiceId), 'option exists: ' + choiceId);
  return model.step(state, choiceId);
}
function newOpening(origin = 'ward', upbringing = 'communal', age = 27) {
  return model.skipPrologue(model.newGame('Reader Test', 'they', origin, upbringing, { age }));
}

test('16 unchanged scenes, 39 choices, in-memory journal and no saved progress', () => {
  assert.equal(model.sceneCount(), 16);
  assert.equal(Object.values(model.scenes).reduce((count, scene) => count + scene.choices.length, 0), 39);
  for (const api of ['saveState', 'loadState', 'validateState', 'SAVE_KEY'])
    assert.equal(model[api], undefined);
  for (const id of ['save-button', 'export-button', 'import-button', 'setup-import', 'recap-modal'])
    assert.doesNotMatch(html, new RegExp('id="' + id + '"'));
  assert.match(html, /window\.localStorage\.removeItem\('tierfall\.chapter1\.v1'\)/);
});

test('approved character and lived-work commitments are represented', () => {
  const sera = model.scenes['c1-quiet'].text.join(' ');
  const later = model.scenes['c1-walk'].text.join(' ');
  assert.match(sera, /maintenance call/);
  assert.match(later, /pump stalls/);
  assert.match(model.scenes['c1-home'].text.join(' '), /partial shift/);
  assert.match(model.scenes['c1-home'].text.join(' '), /charged to your household/);
  assert.match(model.scenes['c1-door'].text.join(' '), /notebook/);
  assert.match(model.scenes['c1-cost'].text.join(' '), /We may speak again/);
  assert.match(model.scenes['c1-wake'].text.join(' '), /left eyebrow/);
  assert.match(model.scenes['c1-wake'].text.join(' '), /right jaw/);
});

test('every occupation receives a distinct unresolved personal callback at the chapter end', () => {
  const expected = { ward: 'Mira Doss', reclamation: 'control unit', farmer: 'food crates', cargo: 'driver' };
  for (const [origin, keyword] of Object.entries(expected)) {
    const state = newOpening(origin);
    state.sceneId = 'c1-dusk';
    assert.ok(model.sceneParagraphs(state).some(text => text.includes(keyword)), origin + ' missing callback');
  }
});

test('copy and no-copy choices have correct immediate reaction provenance', () => {
  let state = newOpening();
  state = progress(state, 'quiet');
  state = progress(state, 'protect'); // memory, not a copied record
  assert.equal(state.flags.evidence, 'memory');
  assert.doesNotMatch(model.lastChoiceResponse(state), /move the worker’s name out of the report/i);
  state = progress(state, 'half');
  state = progress(state, 'rest');
  state = progress(state, 'copy'); // only notice copy
  assert.doesNotMatch(model.lastChoiceResponse(state), /two versions of the same day/i);
  state = progress(state, 'tag');
  state = progress(state, 'alone');
  state = progress(state, 'uncertain');
  state = progress(state, 'deny');
  state = progress(state, 'secure'); // write from memory if no workplace copy
  assert.match(model.lastChoiceResponse(state), /careful account/);
});

test('all 48 age, job, upbringing starts complete with their journal and decisions in memory', () => {
  for (const origin of Object.keys(model.origins))
    for (const upbringing of Object.keys(model.upbringings))
      for (const age of [27, 28, 29, 30]) {
        let state = newOpening(origin, upbringing, age);
        for (let i = 0; i < 30 && !state.finished; i++) {
          const scene = model.scenes[state.sceneId];
          assert.ok(model.sceneParagraphs(state).length > 0);
          const option = scene.choices.find(choice => model.pass(state, choice.when));
          assert.ok(option);
          state = model.step(state, option.id);
        }
        assert.equal(state.finished, true);
        assert.equal(state.history.length, 11);
        assert.ok(state.journal.length >= 1);
      }
});
