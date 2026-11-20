import fs from 'node:fs';
import assert from 'node:assert/strict';
const manifest=JSON.parse(fs.readFileSync(new URL('../game/portrait_manifest.json',import.meta.url),'utf8'));
const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
assert.equal(manifest.characters.length,27);
assert.equal(new Set(manifest.characters.map(x=>x.name)).size,27);
assert.deepEqual(manifest.characters.map(x=>x.id),Array.from({length:27},(_,i)=>i+1));
assert.equal(manifest.characters.reduce((n,x)=>n+Object.keys(x.files).length,0),42);
assert.ok(html.includes('Tierfall.approvedPortraitIds = '));
assert.ok(html.includes('Tierfall.applyPortrait'));
assert.ok(html.includes('image.onerror=function()'));
for(const x of manifest.characters){
 assert.equal(x.files.neutral.startsWith('assets/portraits/'),true);
 assert.ok(html.includes(JSON.stringify(x.name)+':'));
}
console.log('PASS: 27 portrait paths, 42 planned files, safe in-game fallback');
