/* Deutsch A1 – app logic (vanilla JS, no build). UI in English, content in German. */
(function(){
"use strict";

/* ---------- helpers ---------- */
const $=id=>document.getElementById(id);
const view=$("view");
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pad=n=>String(n).padStart(2,"0");
const today=()=>{const d=new Date();return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`};
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`};
const words=s=>(s.trim().match(/[\p{L}\p{N}'-]+/gu)||[]).length;
// \b and \w in JS regexes only know ASCII letters, so checks like /\bgroß\b/ or /\bärztin/ never matched
const WL="[\\p{L}\\p{N}_]";
const uni=re=>new RegExp(re.source.replace(/\\b/g,`(?:(?<=${WL})(?!${WL})|(?<!${WL})(?=${WL}))`).replace(/\\w/g,WL),re.flags.replace("u","")+"u");
// wide tables scroll inside their own box instead of widening the whole page on phones
const wrapTables=el=>el.querySelectorAll(".gram table").forEach(t=>{const w=document.createElement("div");w.className="tw";t.before(w);w.append(t)});
const ICON={speaker:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10v4h4l5 4V6L7 10H3z"></path><path d="M16 9a4 4 0 0 1 0 6"></path></svg>',
 check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>',
 x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>'};

/* ---------- data ---------- */
const L=window.LESSONS||[];
const EX=window.EXAMS||[];
const V=[],_vk=new Set();L.forEach(l=>l.vocab.forEach(([de,en])=>{if(_vk.has(de))return;_vk.add(de);V.push({k:de,de,en,lid:l.id})}));
const vocabOfLesson=id=>V.filter(v=>v.lid===id);
const G=[];L.forEach(l=>l.ex.forEach(([q,a,w,e])=>G.push({k:l.id+"|"+q,q,a,w,e,lid:l.id})));
// strip plural markers for speech: "der Tisch, -e" -> "der Tisch"
const spoken=s=>s.replace(/,\s*[¨-]*[-a-zäöü]*$/i,"").replace(/\s*\(.*?\)\s*/g," ").trim();

/* ---------- storage ---------- */
const KEY="deutsch-a1-v1";
let S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
S=Object.assign({cards:{},items:{},stats:{},days:{},exam:[],done:{},voice:""},S||{});
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
function bump(cat,ok,itemKey){
 const s=S.stats[cat]||(S.stats[cat]=[0,0]);s[1]++;if(ok)s[0]++;
 S.days[today()]=(S.days[today()]||0)+1;
 if(itemKey){const it=S.items[itemKey]||(S.items[itemKey]={r:0,t:0,w:0});it.t++;if(ok){it.r++;it.w=Math.max(0,it.w-1)}else it.w+=2}
 save();
}
function pick(list,n,keyOf){
 const scored=list.map(x=>{const it=S.items[keyOf(x)];const w=!it?3:(1+it.w+(it.t-it.r));return{x,w:w*(0.5+Math.random())}});
 return scored.sort((a,b)=>b.w-a.w).slice(0,n).map(s=>s.x);
}

/* ---------- speech ---------- */
let voices=[];
function loadVoices(){try{voices=speechSynthesis.getVoices().filter(v=>/^de/i.test(v.lang))}catch(e){}}
if(window.speechSynthesis){loadVoices();speechSynthesis.onvoiceschanged=()=>{loadVoices();if(document.querySelector("#voicebox"))ROUTES.home()}}
function currentVoice(){return voices.find(v=>v.name===S.voice)||voices.find(v=>/^de[-_](DE)/i.test(v.lang))||voices.find(v=>/^de[-_]CH/i.test(v.lang))||voices[0]||null}
function say(t,rate){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="de-DE";u.rate=rate||0.9;const v=currentVoice();if(v)u.voice=v;speechSynthesis.speak(u)}catch(e){}}
view.addEventListener("click",e=>{const b=e.target.closest("[data-say]");if(b)say(b.dataset.say,parseFloat(b.dataset.rate)||0.9)});
const sayBtn=(t,label,rate,cls)=>`<button class="btn ${cls||"s"}" data-say="${esc(t)}"${rate?` data-rate="${rate}"`:""}>${ICON.speaker}${label?" "+esc(label):""}</button>`;

/* ---------- navigation ---------- */
const TABS=[["home","Home"],["lessons","Lessons"],["cards","Cards"],["quiz","Grammar"],["vq","Vocabulary"],["read","Reading"],["listen","Listening"],["speak","Speaking"],["write","Writing"],["exam","Exam"],["info","Info"]];
const ROUTES={};
function go(t,arg){
 $("nav").innerHTML=TABS.map(([k,l])=>`<button class="${k===t?"on":""}" data-go="${k}">${l}</button>`).join("");
 try{speechSynthesis.cancel()}catch(e){}
 ROUTES[t](arg);window.scrollTo(0,0);
}
$("nav").addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go)});

/* ---------- quiz engine ---------- */
function mk(q,a,w,e,cat,key,ctx){const opts=sh([a,...w]);return{q,opts,ai:opts.indexOf(a),e:e||"",cat:cat||"Grammar",key,ctx}}
function gItem(g){return mk(g.q,g.a,g.w,g.e,"Grammar",g.k)}
function vItem(v){
 const toEn=Math.random()<0.5;
 const pool=sh(V.filter(x=>x.k!==v.k&&x.lid===v.lid)).concat(sh(V.filter(x=>x.lid!==v.lid)));
 const seen=new Set([toEn?v.en:v.de]);const wr=[];
 // a word with the same English meaning (Ich möchte / Ich hätte gern) would be a second correct answer
 for(const x of pool){const c=toEn?x.en:x.de;if(!seen.has(c)&&x.en!==v.en){seen.add(c);wr.push(c)}if(wr.length===3)break}
 return mk(toEn?`What does «${v.de}» mean?`:`How do you say «${v.en}» in German?`,toEn?v.en:v.de,wr,"","Vocabulary",v.k)
}
function runQuiz(list,title,o){
 o=o||{};let i=0,score=0;
 const show=()=>{
  if(i>=list.length){
   if(o.onDone)return o.onDone(score,list.length);
   const p=Math.round(100*score/list.length);
   view.innerHTML=`<div class="card"><p class="big">${score} / ${list.length}</p><p style="text-align:center">${p}%</p><div class="row"><button class="btn p" id="ag">Again</button><button class="btn" id="hm">Home</button></div></div>`;
   $("ag").onclick=()=>o.again?o.again():go("home");$("hm").onclick=()=>go("home");return;
  }
  const q=list[i];
  view.innerHTML=`<div class="mut">${esc(title)} · ${i+1}/${list.length}${o.header||""}</div><div class="bar"><i style="width:${Math.round(100*i/list.length)}%"></i></div>
  <div class="card">${q.ctx?`<div class="text" style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--line)">${q.ctxAudio?sayBtn(q.ctxAudio,"Play")+" "+sayBtn(q.ctxAudio,"Slow",0.7):esc(q.ctx)}</div>`:""}
  <b>${esc(q.q)}</b>${q.opts.map((x,k)=>`<button class="btn opt" data-k="${k}">${esc(x)}</button>`).join("")}<div id="fb"></div></div>`;
  view.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
   const k=+b.dataset.k,ok=k===q.ai;if(ok)score++;bump(q.cat,ok,q.key);
   view.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(j===q.ai)x.classList.add("ok");else if(j===k)x.classList.add("no")});
   $("fb").innerHTML=`<div class="fb">${ok?ICON.check+" Correct.":ICON.x+" Wrong."} ${esc(q.e)}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Next</button>`;
   $("nx").onclick=()=>{i++;show()};$("nx").focus();
  });
 };
 show();
}

/* ---------- home ---------- */
ROUTES.home=function(){
 const learned=Object.values(S.cards).filter(c=>c.box>=3).length,seen=Object.keys(S.cards).length;
 let streak=0;for(let i=0;i<400;i++){const d=new Date();d.setDate(d.getDate()-i);const k=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;if(S.days[k])streak++;else if(i>0)break}
 const doneN=Object.keys(S.done).length;
 let tot=0,ok=0;Object.values(S.stats).forEach(([r,t])=>{ok+=r;tot+=t});
 const rows=Object.entries(S.stats).map(([c,[r,t]])=>{const p=Math.round(100*r/t);return `<div>${esc(c)} <span class="mut">${r}/${t} (${p}%)</span><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")||`<p class="mut">No answers yet.</p>`;
 const weak=Object.values(S.items).filter(v=>v.w>0).length;
 const last=(S.exam||[]).slice(-3).reverse().map(e=>`${e.date}: ${e.total}/100 ${e.pass?"passed":"not passed"}`).join(" · ")||"none yet";
 const next=L.find(l=>!S.done[l.id]);
 const noVoice=!voices.length;
 view.innerHTML=`
 <div class="hello"><div class="mut">Guten Tag, Momoko.</div><h2 class="brand">Deutsch A1</h2><div class="mut">Goethe-Zertifikat A1 · Start Deutsch 1</div></div>
 ${next?`<div class="card hero" id="nextL"><div class="mut" style="color:inherit;opacity:.85">Continue</div><b>Lesson ${next.id} · ${esc(next.title)}</b><div style="opacity:.85;font-size:14px">${esc(next.sub)}</div></div>`:`<div class="card"><b>All lessons completed.</b> Now revise and do the Modelltests.</div>`}
 <div class="grid">
  <div class="card"><div class="num">${doneN}/${L.length}</div><div class="mut">lessons completed</div></div>
  <div class="card"><div class="num">${learned}/${V.length}</div><div class="mut">words mastered (${seen} seen)</div></div>
  <div class="card"><div class="num">${S.days[today()]||0}</div><div class="mut">answers today · streak ${streak} day(s)</div></div>
  <div class="card"><div class="num">${weak}</div><div class="mut">items in weak-spot training</div></div>
 </div>
 <div class="card"><b>Accuracy</b>${tot?`<div class="mut" style="margin-bottom:8px">Overall ${Math.round(100*ok/tot)}% (${tot} answers)</div>`:""}${rows}</div>
 <div class="card"><b>Modelltests</b><div class="mut">${last}</div></div>
 <div class="card"><b>Today's plan (about 30 min)</b><p class="mut">1. 15 cards · 2. grammar weak spots · 3. 5 dictation sentences · 4. continue your lesson · one Modelltest a week.</p>
 <div class="row"><button class="btn p" data-go2="cards">Cards</button><button class="btn" data-go2="quiz">Grammar</button><button class="btn" data-go2="listen">Dictation</button></div></div>
 <div class="card" id="voicebox">${noVoice?`<b>No German voice found.</b><p class="mut">Listening uses your device's text-to-speech. Install a German voice: <b>macOS</b> System Settings → Accessibility → Spoken Content → System voice → Manage voices → German. <b>iPhone</b> Settings → Accessibility → Spoken Content → Voices → German. <b>Android</b> Settings → System → Languages → Text-to-speech → install German. Then reload this page.</p>`:
  `<b>German voice</b><p class="mut">${voices.length} German voice(s) available.</p><select id="vsel" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink)">${voices.map(v=>`<option value="${esc(v.name)}" ${currentVoice()&&currentVoice().name===v.name?"selected":""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select><div class="row">${sayBtn("Guten Tag, wie geht es Ihnen?","Test voice",0.9,"")}</div>`}</div>
 <p class="mut">Speaking and writing are checked only roughly (required elements, self-rating). Always compare with the model answer.</p>
 <button class="btn" id="reset">Reset progress</button>`;
 if(next)$("nextL").onclick=()=>go("lessons",next.id);
 view.querySelectorAll("[data-go2]").forEach(b=>b.onclick=()=>go(b.dataset.go2));
 const vs=$("vsel");if(vs)vs.onchange=()=>{S.voice=vs.value;save()};
 $("reset").onclick=()=>{if(confirm("Really delete all progress?")){localStorage.removeItem(KEY);location.reload()}};
};

/* ---------- lessons ---------- */
ROUTES.lessons=function(id){
 if(id)return lesson(L.find(l=>l.id===id),"gram");
 view.innerHTML=`<h2>Lessons</h2><p class="mut">Work through the lessons in order. Each lesson: grammar → vocabulary → exercises → reading → listening → writing → speaking → mini-test (70% or more completes the lesson).</p>`+
 L.map(l=>{const vs=vocabOfLesson(l.id);const known=vs.filter(v=>(S.cards[v.k]||{}).box>=3).length;const d=S.done[l.id];
  return `<div class="card click" data-l="${l.id}"><b>Lesson ${l.id}: ${esc(l.title)}</b>${d?`<span class="pill ok">${d}%</span>`:""}<div class="mut">${esc(l.sub)} · ${vs.length} words (${known} mastered) · ${l.ex.length} exercises</div></div>`}).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>go("lessons",+c.dataset.l));
};
const LTABS=[["gram","Grammar"],["voc","Vocabulary"],["ex","Exercises"],["read","Reading"],["listen","Listening"],["write","Writing"],["speak","Speaking"],["test","Mini-test"]];
function lesson(l,tab){
 view.innerHTML=`<div class="mut"><a href="#" id="back">← Lessons</a></div><div class="eyebrow">Lesson ${l.id}</div><h2>${esc(l.title)}</h2><div class="mut">${esc(l.sub)}</div>
 <div class="tabs">${LTABS.map(([k,n])=>`<button class="${k===tab?"on":""}" data-t="${k}">${n}</button>`).join("")}</div><div id="lb"></div>`;
 $("back").onclick=e=>{e.preventDefault();go("lessons")};
 view.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>lesson(l,b.dataset.t));
 const box=$("lb");
 if(tab==="gram"){box.innerHTML=`<div class="card"><b>Goals</b><ul>${l.goals.map(g=>`<li>${esc(g)}</li>`).join("")}</ul></div><div class="card gram">${l.grammar}</div><div class="row"><button class="btn p" id="n1">Next: vocabulary</button></div>`;wrapTables(box);$("n1").onclick=()=>lesson(l,"voc")}
 if(tab==="voc"){const vs=vocabOfLesson(l.id);box.innerHTML=`<div class="card"><div class="row" style="margin:0 0 12px"><button class="btn p" id="learn">Learn these words as cards</button><button class="btn" id="vt">Vocabulary test</button></div>
  <div class="vlist">${vs.map(v=>`<div><span><b>${esc(v.de)}</b> ${sayBtn(spoken(v.de))}</span><span class="mut">${esc(v.en)}</span></div>`).join("")}</div></div>`;
  $("learn").onclick=()=>cards(vs,()=>lesson(l,"voc"));$("vt").onclick=()=>runQuiz(sh(vs).slice(0,15).map(vItem),"Vocabulary L"+l.id,{again:()=>lesson(l,"voc"),onDone:(s,n)=>done(s,n,()=>lesson(l,"voc"))})}
 if(tab==="ex"){box.innerHTML=`<div class="card"><p>${l.ex.length} grammar exercises for this lesson.</p><button class="btn p" id="st">Start</button></div>`;$("st").onclick=()=>runQuiz(sh(l.ex).map(x=>mk(x[0],x[1],x[2],x[3],"Grammar",l.id+"|"+x[0])),"Exercises L"+l.id,{again:()=>lesson(l,"ex"),onDone:(s,n)=>done(s,n,()=>lesson(l,"ex"))})}
 if(tab==="read"){const r=l.read;box.innerHTML=`<div class="card"><b>${esc(r.title)}</b><div class="text" style="margin:10px 0">${esc(r.text)}</div>${sayBtn(r.text,"Read aloud")}<div class="row"><button class="btn p" id="rq">Answer the questions</button></div></div>`;
  $("rq").onclick=()=>runQuiz(r.qs.map(q=>mk(q[0],q[1],q[2],"","Reading",l.id+"|r|"+q[0],r.text)),"Reading L"+l.id,{again:()=>lesson(l,"read"),onDone:(s,n)=>done(s,n,()=>lesson(l,"read"))})}
 if(tab==="listen"){const d=l.dialog;box.innerHTML=`<div class="card"><b>Listening: dialogue</b><p class="mut">Listen (twice, as in the exam), then answer. You see the text only after the questions.</p>
  <div class="row">${sayBtn(d.text,"Play",0.9,"p")}${sayBtn(d.text,"Slow",0.7,"")}</div><div class="row"><button class="btn g" id="dq">Answer the questions</button></div></div>
  <div class="card"><b>Dictation</b><p class="mut">${l.listen.length} sentences from this lesson.</p><button class="btn p" id="dd">Start dictation</button></div>`;
  $("dq").onclick=()=>runQuiz(d.qs.map(q=>mk(q[0],q[1],q[2],"","Listening",l.id+"|d|"+q[0])),"Listening L"+l.id,{again:()=>lesson(l,"listen"),onDone:(s,n)=>{view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><b>Dialogue text</b><div class="text" style="margin:8px 0">${esc(d.text)}</div><div class="row"><button class="btn p" id="bk">Back</button></div></div>`;$("bk").onclick=()=>lesson(l,"listen")}});
  $("dd").onclick=()=>dictation(l.listen,()=>lesson(l,"listen"))}
 if(tab==="write")writeTask(l.write,box,()=>lesson(l,"write"),"Writing");
 if(tab==="speak")speakTask(l.speak,box,()=>lesson(l,"speak"));
 if(tab==="test"){box.innerHTML=`<div class="card"><b>Mini-test lesson ${l.id}</b><p class="mut">8 grammar items, 6 words, listening and reading questions. 70% completes the lesson.</p><button class="btn p" id="mt">Start</button></div>`;
  $("mt").onclick=()=>{const list=[...sh(l.ex).slice(0,8).map(x=>mk(x[0],x[1],x[2],x[3],"Grammar",l.id+"|"+x[0])),...sh(vocabOfLesson(l.id)).slice(0,6).map(vItem),...l.dialog.qs.slice(0,2).map(q=>{const it=mk(q[0],q[1],q[2],"","Listening",l.id+"|d|"+q[0],"audio");it.ctxAudio=l.dialog.text;return it}),...l.read.qs.slice(0,2).map(q=>mk(q[0],q[1],q[2],"","Reading",l.id+"|r|"+q[0],l.read.text))];
   runQuiz(sh(list),"Mini-test L"+l.id,{again:()=>lesson(l,"test"),onDone:(s,n)=>{const p=Math.round(100*s/n);if(p>=70){S.done[l.id]=Math.max(S.done[l.id]||0,p);save()}
    view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><p style="text-align:center">${p}% – ${p>=70?"lesson completed":"not yet (70% needed)"}</p><div class="row"><button class="btn" id="ag">Again</button><button class="btn p" id="nx">${p>=70&&L.find(x=>x.id===l.id+1)?"Next lesson":"Lessons"}</button></div></div>`;
    $("ag").onclick=()=>lesson(l,"test");$("nx").onclick=()=>p>=70&&L.find(x=>x.id===l.id+1)?go("lessons",l.id+1):go("lessons")}})}}
 function done(s,n,back){view.innerHTML=`<div class="card"><p class="big">${s} / ${n}</p><div class="row"><button class="btn p" id="bk">Back to lesson</button></div></div>`;$("bk").onclick=back}
}

/* ---------- cards (Leitner) ---------- */
const INTERVAL=[0,1,2,4,8,16,32];
function cards(pool,back){
 const t=today();
 const due=pool.filter(v=>{const c=S.cards[v.k];return !c||c.due<=t});
 const queue=sh(due.filter(v=>S.cards[v.k])).concat(sh(due.filter(v=>!S.cards[v.k]))).slice(0,15);
 if(!queue.length){view.innerHTML=`<div class="card"><p>Nothing due today. Come back tomorrow or do a quiz.</p><div class="row"><button class="btn p" id="bk">Back</button></div></div>`;$("bk").onclick=back;return}
 let n=0;
 const show=()=>{
  if(n>=queue.length){view.innerHTML=`<div class="card"><p class="big">Done</p><p class="mut" style="text-align:center">${queue.length} cards reviewed.</p><div class="row"><button class="btn p" id="ag">Another round</button><button class="btn" id="bk">Back</button></div></div>`;$("ag").onclick=()=>cards(pool,back);$("bk").onclick=back;return}
  const v=queue[n],rev=Math.random()<0.35,front=rev?v.en:v.de,backT=rev?v.de:v.en;const box=(S.cards[v.k]||{box:0}).box;
  view.innerHTML=`<div class="mut">Card ${n+1}/${queue.length} · <span class="pill">Lesson ${v.lid}</span> <span class="pill">Level ${box+1} of 7</span></div><div class="bar"><i style="width:${Math.round(100*n/queue.length)}%"></i></div><div class="card"><div class="mut" style="text-align:center;letter-spacing:.6px;text-transform:uppercase;font-size:12px">${rev?"English":"Deutsch"}</div><div class="big">${esc(front)}</div><div id="bt" style="display:none"><div class="mut" style="text-align:center;letter-spacing:.6px;text-transform:uppercase;font-size:12px">${rev?"Deutsch":"English"}</div><div class="big" style="color:var(--acc-dark)">${esc(backT)}</div></div>
  <div class="row" id="ctl">${sayBtn(spoken(v.de),"Listen",0.9,"")}<button class="btn p" id="fl">Flip</button></div></div><p class="mut" style="text-align:center">Say the word out loud before you flip.</p>`;
  if(!rev)say(spoken(v.de));
  $("fl").onclick=()=>{$("bt").style.display="block";if(rev)say(spoken(v.de));$("ctl").innerHTML=`<button class="btn bad" id="no">Didn't know</button><button class="btn g" id="yes">Knew it</button>`;$("no").onclick=()=>rate(false);$("yes").onclick=()=>rate(true)};
 };
 const rate=ok=>{const v=queue[n];const c=S.cards[v.k]||{box:0};c.box=ok?Math.min(6,c.box+1):0;c.due=addDays(INTERVAL[c.box]);S.cards[v.k]=c;bump("Vocabulary",ok);n++;show()};
 show();
}
ROUTES.cards=function(){
 const t=today();const due=V.filter(v=>{const c=S.cards[v.k];return !c||c.due<=t}).length;
 const doneL=L.filter(l=>S.done[l.id]).map(l=>l.id);
 view.innerHTML=`<h2>Cards</h2><div class="card"><p>${due} cards due (of ${V.length}).</p><div class="row"><button class="btn p" id="all">All lessons</button><button class="btn" id="dn" ${doneL.length?"":"disabled"}>Completed lessons only</button></div></div>
 <div class="card"><b>By lesson</b><div class="row">${L.map(l=>`<button class="btn s" data-l="${l.id}">L${l.id}</button>`).join("")}</div></div>`;
 $("all").onclick=()=>cards(V,()=>go("cards"));$("dn").onclick=()=>cards(V.filter(v=>doneL.includes(v.lid)),()=>go("cards"));
 view.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>cards(vocabOfLesson(+b.dataset.l),()=>go("cards")));
};

/* ---------- grammar / vocabulary ---------- */
ROUTES.quiz=function(){
 view.innerHTML=`<h2>Grammar</h2><div class="card"><p>${G.length} items from all lessons. Weak-spot training prefers items you got wrong or have not seen.</p><div class="row"><button class="btn p" id="weak">Weak spots (20)</button><button class="btn" id="rnd">Random (20)</button></div></div>`;
 $("weak").onclick=()=>runQuiz(pick(G,20,g=>g.k).map(gItem),"Grammar",{again:()=>go("quiz")});
 $("rnd").onclick=()=>runQuiz(sh(G).slice(0,20).map(gItem),"Grammar",{again:()=>go("quiz")});
};
ROUTES.vq=function(){
 view.innerHTML=`<h2>Vocabulary</h2><div class="card"><p>${V.length} words. Wrong options come from the same lesson where possible.</p><div class="row"><button class="btn p" id="weak">Weak spots (20)</button><button class="btn" id="rnd">Random (20)</button></div></div>`;
 $("weak").onclick=()=>runQuiz(pick(V,20,v=>v.k).map(vItem),"Vocabulary",{again:()=>go("vq")});
 $("rnd").onclick=()=>runQuiz(sh(V).slice(0,20).map(vItem),"Vocabulary",{again:()=>go("vq")});
};

/* ---------- reading ---------- */
ROUTES.read=function(){
 view.innerHTML=`<h2>Reading</h2><p class="mut">Texts as in the exam: emails, ads, opening hours, menus, signs.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>${esc(l.read.title)}</b><div class="mut">Lesson ${l.id} · ${l.read.qs.length} questions</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"read"));
};

/* ---------- listening / dictation ---------- */
const norm=s=>s.toLowerCase().replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
function dictation(items,back){
 let n=0;items=sh(items).slice(0,8);
 const show=()=>{
  if(n>=items.length){view.innerHTML=`<div class="card"><p class="big">Done</p><div class="row"><button class="btn p" id="ag">Again</button><button class="btn" id="bk">Back</button></div></div>`;$("ag").onclick=()=>dictation(items,back);$("bk").onclick=back;return}
  const [de,en]=items[n];
  view.innerHTML=`<div class="mut">Dictation ${n+1}/${items.length} – listen and type the sentence</div><div class="bar"><i style="width:${Math.round(100*n/items.length)}%"></i></div><div class="card"><div class="row" style="margin:0">${sayBtn(de,"Play",0.9,"p")}${sayBtn(de,"Slow",0.6,"")}</div>
  <p></p><input type="text" id="in" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Satz auf Deutsch…"><p class="mut">Umlauts: you may type ae/oe/ue and ss.</p><button class="btn g" style="width:100%" id="ck">Check</button><div id="fb"></div></div>`;
  setTimeout(()=>say(de),250);$("in").focus();
  const check=()=>{const ok=norm($("in").value)===norm(de);bump("Listening",ok,"dict|"+de);
   $("fb").innerHTML=`<div class="fb">${ok?ICON.check+" Correct!":ICON.x+" Not quite."}<br><b>${esc(de)}</b><br><span class="mut">${esc(en)}</span>${ok?"":`<br><span class="mut">You typed: ${esc($("in").value)}</span>`}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Next</button>`;
   $("ck").disabled=true;$("nx").onclick=()=>{n++;show()};$("nx").focus()};
  // preventDefault: otherwise the same Enter also clicks the freshly focused Next button and the feedback is skipped
  $("ck").onclick=check;$("in").onkeydown=e=>{if(e.key==="Enter"&&!$("ck").disabled){e.preventDefault();check()}};
 };
 show();
}
ROUTES.listen=function(){
 const all=[];L.forEach(l=>l.listen.forEach(x=>all.push(x)));
 view.innerHTML=`<h2>Listening</h2><div class="card"><b>Dictation</b><p class="mut">${all.length} sentences from all lessons, 8 per round.</p><button class="btn p" id="d">Start dictation</button></div>
 <div class="card"><b>Dialogues (exam format)</b><div class="row" style="margin:0">${L.map(l=>`<button class="btn s" data-l="${l.id}">L${l.id}</button>`).join("")}</div></div>`;
 $("d").onclick=()=>dictation(all,()=>go("listen"));
 view.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>lesson(L.find(l=>l.id===+b.dataset.l),"listen"));
};

/* ---------- speaking ---------- */
function speakTask(s,box,back){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 box.innerHTML=`<div class="card"><p>${esc(s.p)}</p><ul>${s.cues.map(c=>`<li>${esc(c)}</li>`).join("")}</ul>
 ${SR?`<button class="btn" id="mic">Record (transcript)</button><div id="tr" class="fb" style="display:none"></div>`:`<p class="mut">Speech recognition is not available in this browser (use Chrome or Safari). Just speak out loud.</p>`}
 <p></p><button class="btn p" id="sh" style="width:100%">Show model answer</button><div id="mo"></div></div>`;
 if(SR)$("mic").onclick=()=>{try{const r=new SR();r.lang="de-DE";r.continuous=true;const t=$("tr");t.style.display="block";t.textContent="Listening… (click again to stop)";let txt="";
  r.onresult=e=>{txt="";for(let i=0;i<e.results.length;i++)txt+=e.results[i][0].transcript+" ";t.textContent=txt};r.onerror=()=>{t.textContent="Recognition failed."};r.start();$("mic").onclick=()=>r.stop()}catch(e){}};
 $("sh").onclick=()=>{$("mo").innerHTML=`<div class="fb"><b>${esc(s.m)}</b></div><div class="row">${sayBtn(s.m,"Listen",0.85,"")}</div><p class="mut">Self-rating: did you say all points, understandably, in full sentences?</p><div class="row"><button class="btn" id="bad">Practise again</button><button class="btn g" id="good">Went well</button></div>`;say(s.m,0.85);
  $("bad").onclick=()=>{bump("Speaking",false);back()};$("good").onclick=()=>{bump("Speaking",true);back()}};
}
ROUTES.speak=function(){
 view.innerHTML=`<h2>Speaking</h2><p class="mut">Exam-style tasks: introduce yourself and spell, ask and answer questions, make requests. Always speak out loud.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>L${l.id} · ${esc(l.title)}</b><div class="mut">${esc(l.speak.p.slice(0,90))}…</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"speak"));
};

/* ---------- writing ---------- */
function writeTask(w,box,back,cat,onScore){
 box.innerHTML=`<div class="card"><p>${esc(w.p)}</p><textarea id="tx" rows="7" placeholder="Schreiben Sie hier…"></textarea><div class="mut" id="wc">0 words</div><p></p><button class="btn g" style="width:100%" id="ck">Check</button><div id="fb"></div></div>`;
 $("tx").oninput=()=>$("wc").textContent=words($("tx").value)+" words";
 $("ck").onclick=()=>{const t=$("tx").value;const res=w.req.map(([n,re])=>[n,uni(re).test(t)]);const got=res.filter(r=>r[1]).length;const wc=words(t);const tooShort=w.min&&wc<w.min;
  bump(cat||"Writing",got===res.length&&!tooShort);
  $("fb").innerHTML=`<div class="fb">${res.map(([n,ok])=>`${ok?ICON.check:ICON.x} ${esc(n)}`).join("<br>")}${w.min?`<br>${tooShort?ICON.x:ICON.check} Length: ${wc} words (min. ${w.min})`:""}</div><div class="fb"><span class="mut">Model answer:</span><br><b class="text">${esc(w.m)}</b></div><p class="mut">The app only checks that the required elements are present. Compare spelling, articles and verb forms with the model answer yourself.</p>
  <div class="row"><button class="btn" id="ag">Again</button><button class="btn p" id="bk">${onScore?"Next":"Back"}</button></div>`;
  $("ag").onclick=()=>writeTask(w,box,back,cat,onScore);$("bk").onclick=()=>onScore?onScore(got/res.length*(tooShort?0.5:1)):back()};
}
ROUTES.write=function(){
 view.innerHTML=`<h2>Writing</h2><p class="mut">Exam formats: forms, short emails and notes (invitation, apology, appointment, request). Count your words as in the exam.</p>`+L.map(l=>`<div class="card click" data-l="${l.id}"><b>L${l.id} · ${esc(l.title)}</b><div class="mut">${esc(l.write.p.slice(0,90))}…</div></div>`).join("");
 view.querySelectorAll("[data-l]").forEach(c=>c.onclick=()=>lesson(L.find(l=>l.id===+c.dataset.l),"write"));
};

/* ---------- Goethe exam simulation ---------- */
ROUTES.exam=function(){
 view.innerHTML=`<h2>Modelltest</h2><p class="mut">Format of the Goethe-Zertifikat A1: Hören, Lesen, Schreiben, Sprechen, 25 points each, pass mark 60/100. Time limits per part. Audio is played as in the exam (Teil 1 and 3 twice, Teil 2 once), text hidden.</p>`+
 EX.map(e=>{const hist=(S.exam||[]).filter(x=>x.id===e.id).slice(-1)[0];return `<div class="card click" data-e="${e.id}"><b>${esc(e.title)}</b><div class="mut">Hören · Lesen · Schreiben · Sprechen${hist?` · last result ${hist.total}/100 (${hist.pass?"passed":"not passed"})`:""}</div></div>`}).join("");
 view.querySelectorAll("[data-e]").forEach(c=>c.onclick=()=>exam(EX.find(e=>e.id===+c.dataset.e)));
};
let timerId=null,timerLeft=0;
// head() renders the remaining time right away, so the timer is not blank for up to a second on every new item
const timerText=()=>`${pad(Math.floor(timerLeft/60))}:${pad(timerLeft%60)}`;
function startTimer(min,onEnd){clearInterval(timerId);timerLeft=Math.round(min*60);const tick=()=>{const e=$("tm");if(!e){clearInterval(timerId);return}e.textContent=timerText();e.classList.toggle("low",timerLeft<=60);if(timerLeft<=0){clearInterval(timerId);onEnd&&onEnd()}timerLeft--};tick();timerId=setInterval(tick,1000)}
const tfOpts=["richtig (true)","falsch (false)"];
function exam(e){
 const sc={};let expired=null;
 const head=(name)=>`<span class="timer${timerLeft<=60?" low":""}" id="tm">${timerText()}</span><div class="mut">${esc(e.title)} · ${name}</div>`;
 const next=()=>{if(sc.hoeren===undefined)return hoeren();if(sc.lesen===undefined)return lesen();if(sc.schreiben===undefined)return schreiben();if(sc.sprechen===undefined)return sprechen();return summary()};
 function intro(name,min,desc,start){clearInterval(timerId);view.innerHTML=`${expired?`<div class="fb">Time for ${expired} is over. Points so far were saved.</div>`:""}<div class="card"><h2>${name}</h2><p>${desc}</p><p class="mut">Time: ${min} minutes.</p><button class="btn p" id="st">Start</button></div>`;expired=null;$("st").onclick=start}
 // generic list runner with timer: items have {render, check}
 function runItems(name,min,items,onDone){
  let i=0,score=0;const total=items.length;
  const finish=()=>{clearInterval(timerId);onDone(score,total)};
  const show=()=>{if(i>=total)return finish();const it=items[i];
   view.innerHTML=head(name)+`<div class="mut">${esc(it.part)} · ${i+1}/${total}</div><div class="bar"><i style="width:${Math.round(100*i/total)}%"></i></div><div class="card">${it.html}</div>`;
   if(i===0)startTimer(min,()=>{expired=name;finish()});
   it.bind(ok=>{if(ok)score++;bump(it.cat,ok,"ex|"+e.id+"|"+name+"|"+i);const d=document.createElement("div");d.innerHTML=`<div class="fb">${ok?ICON.check+" Correct.":ICON.x+" Wrong."}${it.reveal?` <span class="mut">${esc(it.reveal)}</span>`:""}</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Next</button>`;view.querySelector(".card").appendChild(d);$("nx").onclick=()=>{i++;show()}})};
  show();
 }
 function mcHtml(q,opts){return `<b>${esc(q)}</b>${opts.map(o=>`<button class="btn opt" data-o="${esc(o)}">${esc(o)}</button>`).join("")}`}
 function bindMc(correct,cb){view.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const ok=b.dataset.o===correct;view.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(x.dataset.o===correct)x.classList.add("ok");else if(x===b)x.classList.add("no")});cb(ok)})}
 function audioCtl(text,plays){return `<div class="row" style="margin:0 0 12px"><button class="btn p" id="pl">${ICON.speaker} Play (${plays} left)</button></div>`}
 function bindAudio(text,max){let plays=0;const pl=$("pl");pl.onclick=()=>{if(plays>=max)return;plays++;say(text,0.85);pl.innerHTML=`${ICON.speaker} Play (${max-plays} left)`;if(plays>=max)pl.disabled=true}}
 function hoeren(){const h=e.hoeren;intro("Hören",h.min,"Teil 1: 6 dialogues (played twice). Teil 2: 4 announcements, true or false (played once). Teil 3: 5 voicemail messages (played twice). 15 items.",()=>{
  const items=[];
  h.t1.forEach(x=>items.push({part:"Teil 1",cat:"Listening",html:audioCtl(x.audio,2)+mcHtml(x.q,sh([x.a,...x.w])),bind:cb=>{bindAudio(x.audio,2);bindMc(x.a,cb)},reveal:x.audio}));
  h.t2.forEach(x=>items.push({part:"Teil 2",cat:"Listening",html:audioCtl(x.audio,1)+mcHtml(x.s,tfOpts),bind:cb=>{bindAudio(x.audio,1);bindMc(x.ok?tfOpts[0]:tfOpts[1],cb)},reveal:x.audio}));
  h.t3.forEach(x=>items.push({part:"Teil 3",cat:"Listening",html:audioCtl(x.audio,2)+mcHtml(x.q,sh([x.a,...x.w])),bind:cb=>{bindAudio(x.audio,2);bindMc(x.a,cb)},reveal:x.audio}));
  runItems("Hören",h.min,items,(s,n)=>{sc.hoeren=Math.round(s*25/n);next()})})}
 function lesen(){const r=e.lesen;intro("Lesen",r.min,"Teil 1: two texts, true/false. Teil 2: five situations, choose ad a or b. Teil 3: five signs, true/false. 15 items.",()=>{
  const items=[];
  r.t1.forEach(t=>t.items.forEach(x=>items.push({part:"Teil 1",cat:"Reading",html:`<div class="text" style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--line)">${esc(t.text)}</div>`+mcHtml(x.s,tfOpts),bind:cb=>bindMc(x.ok?tfOpts[0]:tfOpts[1],cb)})));
  r.t2.forEach(x=>items.push({part:"Teil 2",cat:"Reading",html:`<b>${esc(x.sit)}</b><div class="text" style="margin:10px 0"><b>a)</b> ${esc(x.a)}<br><br><b>b)</b> ${esc(x.b)}</div>`+mcHtml("Which ad fits?",["a","b"]),bind:cb=>bindMc(x.correct,cb)}));
  r.t3.forEach(x=>items.push({part:"Teil 3",cat:"Reading",html:`<div class="sign">${esc(x.sign)}</div>`+mcHtml(x.s,tfOpts),bind:cb=>bindMc(x.ok?tfOpts[0]:tfOpts[1],cb)}));
  runItems("Lesen",r.min,items,(s,n)=>{sc.lesen=Math.round(s*25/n);next()})})}
 function schreiben(){const w=e.schreiben;intro("Schreiben",w.min,"Teil 1: fill in 5 fields of a form (5 points). Teil 2: a message of about 30 words with 3 content points (10 points). The app checks content and length; judge grammar yourself with the model answer.",()=>{
  let pts=0;
  const t1=()=>{view.innerHTML=head("Schreiben")+`<div class="mut">Teil 1 · Formular</div><div class="card"><p>${esc(w.t1.intro)}</p>${w.t1.fields.map((f,i)=>`<label style="display:block;margin:10px 0 4px;font-weight:600">${esc(f[0])}</label><input type="text" id="f${i}" autocomplete="off">`).join("")}<p></p><button class="btn g" style="width:100%" id="ck">Check</button><div id="fb"></div></div>`;
   startTimer(w.min,()=>{expired="Schreiben";sc.schreiben=Math.round(pts*25/15);next()});
   // leading zeros in dates are optional: 2.11.1990 = 02.11.1990 (phone numbers keep their 0)
   const field=s=>norm(s.replace(/\b0(\d)\./g,"$1.")).replace(/\s|\./g,"");
   $("ck").onclick=()=>{let got=0;const rows=w.t1.fields.map((f,i)=>{const v=$("f"+i).value;const ok=field(v)===field(f[1]);if(ok)got++;return `${ok?ICON.check:ICON.x} ${esc(f[0])}: <b>${esc(f[1])}</b>`});pts+=got;bump("Writing",got===5);
    $("fb").innerHTML=`<div class="fb">${rows.join("<br>")}<br>${got}/5 points</div><button class="btn p" style="margin-top:10px;width:100%" id="nx">Next: Teil 2</button>`;$("ck").disabled=true;$("nx").onclick=t2}};
  const t2=()=>{view.innerHTML=head("Schreiben")+`<div class="mut">Teil 2 · Mitteilung</div><div id="box"></div>`;writeTask(w.t2,$("box"),null,"Writing",frac=>{pts+=frac*10;sc.schreiben=Math.round(pts*25/15);next()})};
  t1()})}
 function sprechen(){const o=e.sprechen;intro("Sprechen",o.min,"Three parts as in the oral exam. Speak out loud (record yourself), compare with the model answer and rate yourself honestly: Teil 1 up to 3 points, Teil 2 and 3 up to 6 points each.",()=>{
  let i=0,pts=0;const max=[3,6,6];
  const show=()=>{if(i>=o.parts.length){sc.sprechen=Math.round(pts*25/15);return next()}const p=o.parts[i];
   view.innerHTML=head("Sprechen")+`<div class="card"><b>${esc(p.t)}</b><p>${esc(p.p)}</p><button class="btn p" id="sh">Show model answer</button><div id="mo"></div></div>`;if(i===0)startTimer(o.min,()=>{expired="Sprechen";sc.sprechen=Math.round(pts*25/15);next()});
   $("sh").onclick=()=>{$("mo").innerHTML=`<div class="fb"><b>${esc(p.m)}</b></div><div class="row">${sayBtn(p.m,"Listen",0.85,"")}</div><p class="mut">Your points (0 = nothing, ${max[i]} = everything, understandable):</p><div class="row">${Array.from({length:max[i]+1},(_,k)=>`<button class="btn" data-pt="${k}">${k}</button>`).join("")}</div>`;
    view.querySelectorAll("[data-pt]").forEach(b=>b.onclick=()=>{const v=+b.dataset.pt;pts+=v;bump("Speaking",v>=max[i]*0.6);i++;show()})}};show()})}
 function summary(){clearInterval(timerId);const parts=[["Hören",sc.hoeren],["Lesen",sc.lesen],["Schreiben",sc.schreiben],["Sprechen",sc.sprechen]];const total=parts.reduce((a,p)=>a+p[1],0);const pass=total>=60;
  const grade=total>=90?"sehr gut":total>=80?"gut":total>=70?"befriedigend":total>=60?"ausreichend":"nicht bestanden";
  (S.exam=S.exam||[]).push({id:e.id,date:today(),total,pass,parts:parts.map(p=>p[1])});save();
  view.innerHTML=`<div class="card"><h2>${esc(e.title)} – result</h2><table class="res">${parts.map(([n,v])=>`<tr><td>${n}</td><td><b>${v}</b> / 25</td></tr>`).join("")}<tr><td><b>Total</b></td><td><b>${total}</b> / 100 · ${grade}</td></tr></table>
  <p class="mut">Pass mark: 60 points. Parts under 15: revise with the lessons and weak-spot training.</p><div class="row"><button class="btn p" id="hm">Home</button></div></div>`;$("hm").onclick=()=>go("home")}
 next();
}

/* ---------- info ---------- */
ROUTES.info=function(){view.innerHTML=`<h2>Exam info</h2><div class="card gram">${window.EXAMINFO||""}</div>`;wrapTables(view)};

go("home");
})();
