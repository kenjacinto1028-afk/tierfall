import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
assert.equal(scripts.length,2,'Narrative and presentation scripts remain separate');
scripts.forEach(s=>new vm.Script(s));
const ui=scripts[1];
assert.ok(ui.includes('function updateFocusCard(scene,beat)'),'Object focus changes with reading beat');
assert.ok(ui.includes('function improvePortraitDisplay(image)'),'Portrait rendering enhancement is installed');
assert.ok(ui.includes("Tierfall.applyPortrait(img,game,canonical,fallback)"),'Approved portrait loader remains');
assert.ok(ui.includes("canvas.toDataURL('image/webp',.96)"),'Higher quality render cache remains');
assert.ok(ui.includes("image.dataset.tfHd='1'"),'Enhanced image must not reprocess indefinitely');
assert.ok(ui.includes('if(image.naturalWidth>480||image.naturalHeight>600)return'),'Large original portraits must not be resampled');
assert.ok(ui.includes("updateFocusCard(Tierfall.scenes[$('#game')?.dataset.sceneId],portraitCurrentPage)"),'Focus follows visible page');
assert.ok(ui.includes("scene.id+':'+item.art"),'Focus card identity must change on scene transition');
assert.ok(html.includes('max-width:650px'),'Mobile UI must be defined');
assert.ok(html.includes('tf-focus-card'),'Object card styles must exist');
assert.ok(html.includes('tf-portrait-rail'),'Portrait rail remains');

const imageFiles=['reach-chart','rank-band','concord-seal','shift-ledger','official-notice','checkpoint-reader','station-bell'];
for(const name of imageFiles){
 const svg=fs.readFileSync(new URL('../game/assets/focus/'+name+'.svg',import.meta.url),'utf8');
 assert.match(svg,/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/,'Scalable vector '+name+' missing');
 assert.ok(svg.trimEnd().endsWith('</svg>'),name+' vector lacks closing tag');
 assert.ok(!/<script/i.test(svg),name+' embeds executable script');
 assert.ok(ui.includes("art:'"+name+"'"),name+' not used in an actual story beat');
}
const map=ui.match(/const sceneFocusArt=Object\.freeze\((\{[\s\S]*?\})\);/);
assert.ok(map,'Scene focus mapping is missing');
const chooser=ui.match(/function focusForBeat\(scene,beat\)\{[\s\S]*?\n  \}/);
assert.ok(chooser,'Focus gating helper is missing');
const choose=vm.runInNewContext('const sceneFocusArt='+map[1]+';'+chooser[0]+';focusForBeat;');
assert.equal(choose({id:'c1-wake'},0).art,'station-bell');
assert.equal(choose({id:'c1-wake'},1).art,'rank-band');
assert.equal(choose({id:'c1-duty'},0),null,'Work log should not be presented before it appears in the narration');
assert.equal(choose({id:'c1-duty'},1).art,'shift-ledger');
assert.equal(choose({id:'c1-notice'},0).art,'official-notice');
assert.equal(choose({id:'c1-quiet'},1),null,'Dialogue keeps portraits without invented objects');
assert.equal(choose({id:'c1-home'},0),null,'Ordinary narration without a relevant object remains full-width');

const source=Buffer.from(fs.readFileSync(new URL('../game/assets/portraits/01-sera-venn/neutral.webp',import.meta.url)));
assert.equal(source.toString('ascii',0,4),'RIFF','Approved source portrait must remain WebP');
assert.equal(source.toString('ascii',8,12),'WEBP');
assert.equal(source.toString('ascii',12,16),'VP8 ');
assert.equal(source.readUInt16LE(26)&0x3fff,240,'Approved portrait should not be replaced without permission');
assert.equal(source.readUInt16LE(28)&0x3fff,300);

const engineEnd=scripts[0].indexOf('var Tierfall;\n(function (Tierfall) {\n    let game = null;');
assert.ok(engineEnd>0,'Story data must remain isolated from presentation');
const engine=vm.runInNewContext(scripts[0].slice(0,engineEnd)+'\nTierfall;');
let variants=0;
for(const origin of Object.keys(engine.origins))
for(const upbringing of Object.keys(engine.upbringings)){
 let st=engine.skipPrologue(engine.newGame('Reader QA','they',origin,upbringing));
 const choice=engine.scenes[st.sceneId].choices.find(c=>engine.pass(st,c.when));
 st=engine.step(st,choice.id);
 assert.equal(st.sceneId,'c1-duty');
 variants++;
}
assert.equal(variants,12);
console.log('PASS: 7 vector object cards, safe beat reveals, approved portrait integrity, clarity fallback, 12 story variants');
