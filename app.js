document.documentElement.classList.add('js');
document.querySelectorAll('[data-filter]').forEach(function(i){var t=document.querySelector(i.dataset.filter),e=document.querySelector(i.dataset.empty),it=[].slice.call(t.children).filter(function(c){return c.dataset.name!==undefined&&c.dataset.name!==''}),sr='all',bs=[].slice.call(document.querySelectorAll('[data-series-btn]'));
function run(){var q=i.value.trim().toLowerCase(),n=0;it.forEach(function(c){var m=c.dataset.name.indexOf(q)>-1&&(sr==='all'||c.dataset.series===sr);c.hidden=!m;if(m)n++});if(e)e.hidden=n>0}
i.addEventListener('input',run);
bs.forEach(function(b){b.addEventListener('click',function(){sr=b.dataset.seriesBtn;bs.forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});run()})});});
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1}):null;
document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});
document.addEventListener('pointermove',function(e){var g=e.target.closest&&e.target.closest('.bcard,.mcard');if(g){var r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')}});
var f=document.getElementById('reqForm');
if(f){var b=document.getElementById('btn'),s=document.getElementById('status'),br=f.brand,md=f.model,dl=document.getElementById('models'),pk=document.getElementById('pick');
function show(c,m){s.className=c;s.textContent=m}
function fill(){dl.innerHTML='';(window.MODELS[br.value]||[]).forEach(function(m){var o=document.createElement('option');o.value=m;dl.appendChild(o)});upd()}
function upd(){if(br.value&&md.value){pk.hidden=false;pk.textContent='Selected: '+br.value+' · '+md.value}else if(br.value){pk.hidden=false;pk.textContent='Selected brand: '+br.value}else pk.hidden=true}
var p=new URLSearchParams(location.search);if(p.get('brand'))br.value=p.get('brand');fill();if(p.get('model'))md.value=p.get('model');upd();
br.addEventListener('change',function(){md.value='';fill()});md.addEventListener('input',upd);
f.addEventListener('submit',function(e){e.preventDefault();s.className='';s.textContent='';
if(!br.value||!md.value.trim()||!f.telegram.value.trim()){show('fail','Please select your brand enter your model and your Telegram username');return}
if(f.access_key.value.indexOf('YOUR_')===0){show('fail','Form is not set up yet The site owner needs to add a Web3Forms access key');return}
b.disabled=true;b.textContent='Sending…';
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)}).then(function(r){return r.json()}).then(function(d){if(d.success){show('okk','Request sent We will message you on Telegram soon ');var a=document.createElement('a');a.href=(window.SITE||{}).tg||'#';a.target='_blank';a.rel='noopener';a.textContent='Chat on Telegram now';a.style.textDecoration='underline';s.appendChild(a);f.reset();pk.hidden=true}else show('fail','Could not send your request Please try again or message us on Telegram')}).catch(function(){show('fail','Network error Check your connection and try again')}).finally(function(){b.disabled=false;b.textContent='Send request'})})}
(function(S){S=window.SITE||{};document.querySelectorAll('[data-tg]').forEach(function(a){if(S.tg)a.href=S.tg});
document.querySelectorAll('[data-wa]').forEach(function(a){if(S.wa){a.href=S.wa;a.hidden=false}});
document.querySelectorAll('[data-mail]').forEach(function(a){if(S.mail){a.href='mailto:'+S.mail;a.hidden=false}})})();
(function(){var q=document.getElementById('hq'),r=document.getElementById('hr'),M=window.MODELS;if(!M)return;var all=[];Object.keys(M).forEach(function(b){M[b].forEach(function(m){all.push({b:b,m:m,l:(b+' '+m).toLowerCase()})})});
var c=document.querySelector('[data-count="models"]'),bc=document.querySelector('[data-count="brands"]');if(c)c.textContent=all.length+'+';if(bc)bc.textContent=Object.keys(M).length;if(!q)return;
function url(x){return 'request.html?brand='+encodeURIComponent(x.b)+'&model='+encodeURIComponent(x.m)}
function render(){var v=q.value.trim().toLowerCase();if(v.length<2){r.hidden=true;r.innerHTML='';return}var t=v.split(/\s+/),h=all.filter(function(x){return t.every(function(w){return x.l.indexOf(w)>-1})}).slice(0,8);r.innerHTML='';
if(!h.length){var p=document.createElement('p');p.textContent='No model found ';var l=document.createElement('a');l.href='request.html';l.textContent='Request it here';p.appendChild(l);r.appendChild(p)}
h.forEach(function(x){var a=document.createElement('a');a.href=url(x);a.setAttribute('role','option');var s=document.createElement('b');s.textContent=x.m;var u=document.createElement('small');u.textContent=x.b;a.appendChild(s);a.appendChild(u);r.appendChild(a)});r.hidden=false}
q.addEventListener('input',render);q.addEventListener('keydown',function(e){if(e.key==='Enter'){var f=r.querySelector('a');if(f&&r.querySelector('b')){e.preventDefault();location.href=f.href}}else if(e.key==='Escape'){r.hidden=true}});
document.addEventListener('click',function(e){if(!document.getElementById('hs').contains(e.target))r.hidden=true})})();

(function(){
var S={xiaomi:'xiaomi',redmi:'redmi',poco:'poco',samsung:'samsung',realme:'realme',oppo:'oppo',vivo:'vivo',oneplus:'oneplus',motorola:'motorola',infinix:'infinix',tecno:'tecno',nokia:'nokia','google-pixel':'googlepixel',asus:'asus',sony:'sony',nothing:'nothing','red-magic':'redmagic',fairphone:'fairphone'};
function logo(b,k){
 var s=S[k]; if(!s||b.querySelector('img'))return;
 var i=new Image(); i.alt=(b.closest('a')&&b.closest('a').querySelector('b')?b.closest('a').querySelector('b').textContent:k)+' logo';
 i.decoding='async'; i.className='lg'; i.loading='eager';
 i.onerror=function(){i.remove();b.classList.remove('has-logo')};
 i.onload=function(){b.classList.add('has-logo')};
 i.src='assets/brands/'+s+'.svg';
 b.appendChild(i);
}
document.querySelectorAll('a.bcard[href^="brand-"]').forEach(function(a){var b=a.querySelector('.badge');if(b)logo(b,a.getAttribute('href').replace(/^brand-|\.html.*$/g,''))});
var m=location.pathname.match(/brand-([a-z-]+)\.html/);var big=document.querySelector('.badge.big');if(m&&big)logo(big,m[1]);
})();
