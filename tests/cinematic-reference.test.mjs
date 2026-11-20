import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const game=new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url);
const html=fs.readFileSync(game,'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
assert.equal(scripts.length,2,'Keep self-contained game and presentation controller');
scripts.forEach(code=>new vm.Script(code));
for(const hook of [
 'referenceSetup()', 'referenceOnScene(game,scene)', 'tf-reference-links',
 'tf-reference-footer', 'tf-reference-people', 'tf-reference-extras',
 'tf-reference-settings', 'tf-reference-progress', 'tf-reference-phase',
 'tf-reference-dots', 'data-scene-mood', 'prefers-reduced-motion',
 'portraitFor(game,name)', 'window.TierfallSceneUI.onRender(game,scene)',
 'function exportSave()', 'function importSave(file)'
])assert.ok(html.includes(hook),'Missing reader hook: '+hook);
for(const mode of ['narration','major','minor'])assert.ok(html.includes("'"+mode+"'"));
const sceneIds=[
 'p-reach','p-ranks','p-powers','p-thule',
 'c1-wake','c1-duty','c1-quiet','c1-home','c1-notice','c1-cross',
 'c1-ally','c1-walk','c1-door','c1-cost','c1-dusk','c1-end'
];
for(const id of sceneIds){
 assert.ok(html.includes("'"+id+"':"),'Missing scene mapping: '+id);
}
for(const name of ['medical-ward','garden-deck','records-hall','checkpoint']){
 const svg=fs.readFileSync(new URL('../game/assets/scenes/'+name+'.svg',import.meta.url),'utf8');
 assert.ok(svg.startsWith('<svg')&&svg.endsWith('</svg>'),name+' has invalid SVG bounds');
 assert.ok(svg.includes('viewBox="0 0 1000 1400"'),name+' viewport changed');
 assert.ok(html.includes("'"+name+"'"),name+' not connected to reader');
}
for(const id of ['font-up','font-down','save-button','tf-menu-toggle','export-button','import-button']){
 assert.ok(html.includes('id="'+id+'"'),'Existing control removed: '+id);
}
assert.match(html,/body\.tf-playing #game \.story-panel\{[^}]*grid-template-columns:/);
assert.match(html,/@media\(max-width:1150px\),\(pointer:coarse\) and \(orientation:portrait\)/);
console.log('PASS: 16 scenes, 4 new SVG backgrounds, saved-game controls, speaker modes, cinematic frame, mobile reading');
