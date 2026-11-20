import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
assert.equal(scripts.length,2,'Original story engine and supplementary reader must remain separate');
for(const script of scripts)new vm.Script(script);
assert.match(html,/Mobile\/portrait reading correction/,'A dedicated responsive reader correction exists');
assert.match(html,/\(pointer:\s*coarse\) and \(orientation:\s*portrait\)/,'Portrait mobile browser desktop-view fallback');
assert.match(html,/#game \.story-panel \{ display:flex; flex-direction:column;/,'Narrative stacks below landscape in compact portrait');
assert.match(html,/#game \.tf-side-rail \{ display:none; \}/,'Permanent icon rail is hidden on mobile');
assert.match(html,/setupPanelShortcuts\(\)/,'Mobile drawer includes accessible controls');
assert.match(html,/id='tf-menu-effects'/,'Effects available inside collapsed menu');
assert.match(html,/id='tf-menu-save'/,'Save available inside collapsed menu');
assert.match(html,/window\.TierfallSceneUI\.onRender\(game,scene\)/,'The 16 scene integrations remain wired');
assert.match(html,/function importSave\(file\)/,'Import save remains available');
assert.match(html,/function exportSave\(\)/,'Export save remains available');
console.log('PASS mobile portrait reader, collapsible controls, preserved game and save paths');