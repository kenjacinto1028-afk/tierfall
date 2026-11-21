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
assert.ok(ui.includes("output.toDataURL('image/png')"),'Higher quality render cache remains');
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
// Safety: remove only edge-connected pale mattes, leaving faces and dark artworks intact.
const sharpStart=ui.indexOf('  const clarityCache=new Map();');
const sharpEnd=ui.indexOf('  function paintPortraitCards(',sharpStart);
assert.ok(sharpStart>=0&&sharpEnd>sharpStart,'Clarity helper cannot be isolated');
const sharpCode=ui.slice(sharpStart,sharpEnd);
const matte=vm.runInNewContext(sharpCode+'\nclearPortraitMatte;');
const W=120,H=150;
function portraitPixels(background=[232,224,215]){
 const d=new Uint8ClampedArray(W*H*4);
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){
   const i=(y*W+x)*4;
   const inside=x>=40&&x<80&&y>=26&&y<145;
   const color=inside?(x<60?[33,46,57]:[207,132,84]):background;
   for(let c=0;c<3;c++)d[i+c]=color[c];
   d[i+3]=255;
 }
 return {data:d};
}
const pale=portraitPixels();
assert.equal(matte(pale,W,H),true,'Pale uniform artwork should allow safe background removal');
assert.equal(pale.data[3],0,'Top-left bright backdrop must become transparent');
assert.equal(pale.data[((45*W+50)*4)+3],255,'Dark portrait area must be preserved');
assert.equal(pale.data[((45*W+65)*4)+3],255,'Face colors must be preserved');
const dark=portraitPixels([17,30,45]);
assert.equal(matte(dark,W,H),false,'Dark source artworks must never be cut out');
assert.equal(dark.data[3],255,'Dark backgrounds remain opaque');
const unsafe=portraitPixels();
unsafe.data[(4*W+W-5)*4]=65;
assert.equal(matte(unsafe,W,H),false,'Mismatched corner colors must disable matte cleanup');

// Verify the real 2x renderer with a Canvas substitute. Do not touch source art.
const canvasCreated=[];
const fakeDocument={createElement(tag){
 assert.equal(tag,'canvas');
 const canvas={
   width:0,height:0,
   getContext(){return{
     drawImage(){},
     getImageData(){return {data:new Uint8ClampedArray(canvas.width*canvas.height*4)};},
     putImageData(){}
   };},
   toDataURL(type){assert.equal(type,'image/png');return 'data:image/png;base64,c2hhcnA=';}
 };
 canvasCreated.push(canvas);return canvas;
}};
const sharpen=vm.runInNewContext(sharpCode+'\nimprovePortraitDisplay;',{document:fakeDocument});
const image={
 naturalWidth:240,naturalHeight:300,
 currentSrc:'https://example.test/assets/portraits/01-sera-venn/neutral.webp',
 src:'https://example.test/assets/portraits/01-sera-venn/neutral.webp',
 dataset:{},addEventListener(event,handler){if(event==='load')this.onload=handler;}
};
sharpen(image);assert.equal(typeof image.onload,'function');image.onload();
assert.equal(canvasCreated.length,2,'Both native and upscale canvases are used');
assert.equal(canvasCreated[0].width,240);
assert.equal(canvasCreated[0].height,300);
assert.equal(canvasCreated[1].width,480);
assert.equal(canvasCreated[1].height,600);
assert.equal(image.dataset.tfHd,'1');
assert.ok(image.src.startsWith('data:image/png;base64,'));
image.onload();assert.equal(canvasCreated.length,2,'Upscaled image must not reprocess itself');
const cachedImage={naturalWidth:240,naturalHeight:300,currentSrc:image.currentSrc,
 src:image.currentSrc,dataset:{},addEventListener(event,handler){if(event==='load')this.onload=handler;}};
sharpen(cachedImage);cachedImage.onload();
assert.equal(canvasCreated.length,2,'Identical portrait source should use a cache');

console.log('PASS: 7 vector objects, edge-safe matte, transparent cutout, cached 2x PNG, 12 story variants');
