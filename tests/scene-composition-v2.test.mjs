import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
assert.equal(scripts.length,2,'Two self-contained scripts must remain');
scripts.forEach(script=>new vm.Script(script));
const art=fs.readFileSync(new URL('../game/assets/scenes/service-market.svg',import.meta.url),'utf8');
assert.match(art,/^<svg /,'Scene artwork must be valid SVG source');
assert.match(art,/<\/svg>$/,'Scene artwork must close');
assert.match(art,/viewBox="0 0 1000 1400"/,'Artwork should fit the tall scene panel');
assert.match(html,/'c1-ally': \['service-market','warm'/,'Food market scene must use its dedicated environment');
assert.match(html,/'service-market':'living-ring'/,'Dedicated backdrop must have a safe built-in image fallback');
for(const name of ['medical-ward','garden-deck','records-hall','checkpoint']){
  assert.ok(html.includes("'"+name+"'"),'Lost prior scene asset '+name);
}
for(const scene of ['c1-quiet','c1-ally','c1-walk']){
  assert.ok(html.includes("'"+scene+"'"),'A playable scene is missing: '+scene);
}
assert.ok(html.includes("MAJOR.has(scene.speaker)?[scene.speaker]:[]"),'Only an approved speaking character is eligible for portrait composition');
assert.ok(html.includes("scene.id==='c1-ally'?['Jalen Orr','Sera Venn']"),'Two verified characters share the market scene');
assert.match(html,/dataset\.sceneCast=cast\.length===2/,'Cast size must be reflected in the responsive art layout');
assert.match(html,/dataset\.sceneCrowd=busy\.has\(scene\.id\)/,'Only busy public scenes should receive crowds');
for(const state of ['none','sparse','busy'])
  assert.ok(html.includes('data-scene-crowd="'+state+'"'),'Missing crowd style '+state);
for(const hook of ['referenceOnScene(game,scene)','referenceSetup()','function setupControls()','function boot()','window.TierfallSceneUI.onRender(game,scene)'])
  assert.ok(html.includes(hook),'Lost control or compatibility hook '+hook);
assert.match(html,/@media\(max-width:1150px\),\(pointer:coarse\) and \(orientation:portrait\)/,'Mobile full-width reading must be preserved');
assert.match(html,/prefers-reduced-motion:reduce/,'Reduced-motion accessible setting must remain');
const engine=scripts[0],cut=engine.indexOf("var Tierfall;\n(function (Tierfall) {\n    let game = null;");
assert.ok(cut>0,'Story engine cannot be extracted for isolated tests');
const model=vm.runInNewContext(engine.slice(0,cut)+'\nTierfall;');
let variants=0;
for(const origin of Object.keys(model.origins))
for(const upbringing of Object.keys(model.upbringings)){
  let state=model.newGame('Test Player','they',origin,upbringing);
  state=model.skipPrologue(state);
  assert.equal(state.sceneId,'c1-wake');
  const choice=model.scenes[state.sceneId].choices.find(c=>model.pass(state,c.when));
  state=model.step(state,choice.id);
  assert.equal(state.sceneId,'c1-duty');
  variants++;
}
assert.equal(variants,12);
console.log('PASS: cinematic composition, public-space crowds, approved cast, 5 dedicated scene arts, 12 origin/upbringing transitions');
