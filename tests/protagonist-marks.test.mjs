import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, 'Playable HTML must include game JavaScript');
new vm.Script(script); // Entire game compiles.
const uiStart = script.indexOf('var Tierfall;\n(function (Tierfall) {\n    let game = null;');
assert.ok(uiStart > -1, 'Story model remains separate from UI startup');
const game = vm.runInNewContext(script.slice(0, uiStart) + '\nTierfall;');
let checked = 0;
for (const origin of Object.keys(game.origins)) {
  for (const upbringing of Object.keys(game.upbringings)) {
    const state = game.skipPrologue(game.newGame('Test Player', 'they', origin, upbringing));
    assert.equal(state.sceneId, 'c1-wake');
    const opening = game.scenes['c1-wake'].text.join(' ');
    assert.match(opening, /left eyebrow/);
    assert.match(opening, /right jaw/);
    assert.match(opening, /both at twelve/);
    assert.match(game.scenes['c1-quiet'].text.join(' '), /clinic after the pressure-door accident/);
    assert.match(game.scenes['c1-door'].text.join(' '), /pale crescent beneath your right jaw/);
    assert.equal(game.step(state, game.scenes['c1-wake'].choices[0].id).sceneId, 'c1-duty');
    checked += 1;
  }
}
assert.equal(checked, 12);
console.log(`PASS: shared protagonist marks + story origin for all ${checked} background combinations`);
