import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
assert.equal(scripts.length,2,'Both original narrative engine and presentation controller must be embedded');
for(const code of scripts)new vm.Script(code);
assert.ok(html.includes('id="tf-sidebar"'),'Collapsible sidebar exists');
assert.ok(html.includes('id="tf-menu-toggle"'),'Topbar menu button exists');
assert.ok(html.includes('id="tf-effects-toggle"'),'Effects toggle exists');
assert.ok(html.includes('class="tf-side-rail"'),'Icon navigation rail exists');
assert.ok(html.includes('window.TierfallSceneUI.onRender(game,scene)'),'Original game rendering triggers presentation update');
for(const mode of ['major','minor','narration'])assert.ok(html.includes(`'${mode}'`),`Presentation mode ${mode} exists`);
const expected=['p-reach','p-ranks','p-powers','p-thule','c1-wake','c1-duty','c1-quiet','c1-home','c1-notice','c1-cross','c1-ally','c1-walk','c1-door','c1-cost','c1-dusk','c1-end'];
for(const id of expected) assert.ok(html.includes(`'${id}': [`),`Backdrop mapping missing for ${id}`);
for(const art of ['reach-routes','civic-concourse','living-ring','work-sector']){
 const path=new URL(`../game/assets/scenes/${art}.webp`,import.meta.url);
 const bytes=fs.readFileSync(path);
 assert.ok(bytes.length>10000,`Missing or empty ${art} illustration`);
 assert.equal(bytes.toString('ascii',0,4),'RIFF',`${art} is a valid WebP container`);
}
const allSubtitles=html.match(/<script>([\s\S]*?)<\/script>/g)?.[0]||'';
assert.ok(allSubtitles.includes('Tierfall.skipPrologue'),'Original skip prologue remains');
assert.ok(allSubtitles.includes('function exportSave()'),'Save export remains');
assert.ok(allSubtitles.includes('function importSave(file)'),'Save import remains');
console.log('PASS: 16 scene-art mappings, 3 portrait modes, 4 WebP scene assets, responsive sidebar/effects hooks, preserved core save functions');