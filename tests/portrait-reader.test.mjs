import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../game/tierfall-chapter1-expanded-edition.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
assert.equal(scripts.length,2,'Story engine and presentation controller remain separate');
for(const code of scripts)new vm.Script(code);
for(const marker of [
 'Portrait-led story reader, v3',
 'portraitReaderOnScene(game,scene)',
 'function showPortraitPage(requested,scroll)',
 'tf-portrait-rail','tf-cast-card','tf-beat-pager',
 'tf-reader-solo','tf-page-off',
 'body.tf-playing #game .scene-art{display:none!important}',
 'Tierfall.applyPortrait(img,game,canonical,fallback)',
 'function setupControls()', 'function boot()'
])assert.ok(html.includes(marker),'Missing portrait UI marker '+marker);
assert.ok(html.includes('event.stopImmediatePropagation()'),'Keyboard choices must be blocked until final page');
assert.ok(html.includes('data-tf-tab'),'Existing side-panel navigation must remain');
assert.ok(html.includes('@media(max-width:650px)'),'Responsive portrait cards missing');
assert.ok(html.includes('prefers-reduced-motion:reduce'),'Reduced motion support missing');
// New presentation branch must short-circuit obsolete scene image loading.
const present=scripts[1].slice(scripts[1].indexOf('function renderPresentation(game,scene)'));
assert.ok(present.indexOf('portraitReaderOnScene(game,scene)')<present.indexOf('stage.style.setProperty'), 'Reader must not load scene art');
// 12 player background choices must still be able to advance.
const cut=scripts[0].indexOf('var Tierfall;\n(function (Tierfall) {\n    let game = null;');
assert.ok(cut>0,'Narrative model boundary missing');
const game=vm.runInNewContext(scripts[0].slice(0,cut)+'\nTierfall;');
let combinations=0;
for(const origin of Object.keys(game.origins))
for(const upbringing of Object.keys(game.upbringings)){
 let state=game.skipPrologue(game.newGame('Reader QA','they',origin,upbringing));
 assert.equal(state.sceneId,'c1-wake');
 const choice=game.scenes[state.sceneId].choices.find(c=>game.pass(state,c.when));
 state=game.step(state,choice.id);
 assert.equal(state.sceneId,'c1-duty');
 combinations++;
}
assert.equal(combinations,12);
// Exercise the real beat-paging function with a tiny DOM fake.
function extract(name){
 const start=scripts[1].indexOf('function '+name+'(');
 assert.ok(start>=0,'Missing '+name);
 const brace=scripts[1].indexOf('{',start);
 let depth=0;
 for(let i=brace;i<scripts[1].length;i++){
   if(scripts[1][i]==='{')depth++;
   if(scripts[1][i]==='}'&&--depth===0)return scripts[1].slice(start,i+1);
   if(scripts[1][i]!=='}')depth+=0;
 }
 throw Error('Unclosed '+name);
}
function makeNode(){
 const flags={};
 return {flags,attrs:{},classList:{toggle(k,v){flags[k]=v}},setAttribute(k,v){this.attrs[k]=v},replaceChildren(){this.children=[]},appendChild(n){(this.children??=[]).push(n)}};
}
const fn=extract('showPortraitPage');
for(const total of [3,4,5,6,7]){
 const paragraphs=Array.from({length:total},makeNode);
 const cards=[makeNode(),makeNode()];
 const selectorMap=Object.fromEntries(['#choice-response','#game .choice-heading','#choices','#save-status','#tf-beat-previous','#tf-beat-next','#tf-beat-dots','#tf-beat-count'].map(key=>[key,makeNode()]));
 const context={
  portraitPageCount:3,portraitCurrentPage:0,portraitCharacters:['Jalen Orr','Sera Venn'],
  document:{querySelectorAll(q){return q==='#prose > .narrative-paragraph'?paragraphs:q==='#tf-portrait-list .tf-cast-card'?cards:[]}},
  $:s=>selectorMap[s]||null,
  readerNode:(tag,classes)=>{const n=makeNode();n.className=classes;return n;},
  effectsAllowed:()=>false,window:{scrollY:0}
 };
 const show=vm.runInNewContext('('+fn+')',context);
 let totalVisible=0;
 for(let page=0;page<3;page++){
   show(page,false);
   const visible=paragraphs.filter(x=>!x.flags['tf-page-off']).length;
   assert.ok(visible>=1,'Beat '+page+' has no text with '+total+' paragraphs');
   totalVisible+=visible;
   assert.equal(!selectorMap['#choices'].flags['tf-page-off'],page===2,'Choices gated to final beat');
   assert.equal(selectorMap['#tf-beat-next'].hidden,page===2,'Next hidden on final beat');
   assert.equal(selectorMap['#tf-beat-previous'].disabled,page===0,'Previous disabled on opening beat');
 }
 assert.equal(totalVisible,total,'Every story paragraph must appear exactly once');
}
console.log('PASS: approved portrait reader, 3 readable beats, choice gating, responsive hooks, 12 character backgrounds');
