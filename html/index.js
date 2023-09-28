const Ze=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Ze();function S(){}function et(r,e){for(const n in e)r[n]=e[n];return r}function Ue(r){return r()}function _e(){return Object.create(null)}function W(r){r.forEach(Ue)}function tt(r){return typeof r=="function"}function I(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function rt(r){return Object.keys(r).length===0}function nt(r,...e){if(r==null)return S;const n=r.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function O(r,e,n){r.$$.on_destroy.push(nt(e,n))}function ot(r,e,n,t){if(r){const o=qe(r,e,n,t);return r[0](o)}}function qe(r,e,n,t){return r[1]&&t?et(n.ctx.slice(),r[1](t(e))):n.ctx}function lt(r,e,n,t){if(r[2]&&t){const o=r[2](t(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],l=Math.max(e.dirty.length,o.length);for(let s=0;s<l;s+=1)i[s]=e.dirty[s]|o[s];return i}return e.dirty|o}return e.dirty}function it(r,e,n,t,o,i){if(o){const l=qe(e,n,t,i);r.p(l,o)}}function st(r){if(r.ctx.length>32){const e=[],n=r.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function at(r,e,n){return r.set(n),e}function d(r,e){r.appendChild(e)}function _(r,e,n){r.insertBefore(e,n||null)}function w(r){r.parentNode.removeChild(r)}function Q(r,e){for(let n=0;n<r.length;n+=1)r[n]&&r[n].d(e)}function h(r){return document.createElement(r)}function g(r){return document.createTextNode(r)}function N(){return g(" ")}function Z(){return g("")}function j(r,e,n,t){return r.addEventListener(e,n,t),()=>r.removeEventListener(e,n,t)}function m(r,e,n){n==null?r.removeAttribute(e):r.getAttribute(e)!==n&&r.setAttribute(e,n)}function ct(r){return Array.from(r.childNodes)}function R(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function E(r,e,n,t){n===null?r.style.removeProperty(e):r.style.setProperty(e,n,t?"important":"")}let ne;function re(r){ne=r}function He(){if(!ne)throw new Error("Function called outside component initialization");return ne}function Ge(r){He().$$.on_mount.push(r)}function ft(r){He().$$.on_destroy.push(r)}const ee=[],ve=[],se=[],ye=[],ut=Promise.resolve();let pe=!1;function dt(){pe||(pe=!0,ut.then(We))}function he(r){se.push(r)}const ue=new Set;let le=0;function We(){const r=ne;do{for(;le<ee.length;){const e=ee[le];le++,re(e),pt(e.$$)}for(re(null),ee.length=0,le=0;ve.length;)ve.pop()();for(let e=0;e<se.length;e+=1){const n=se[e];ue.has(n)||(ue.add(n),n())}se.length=0}while(ee.length);for(;ye.length;)ye.pop()();pe=!1,ue.clear(),re(r)}function pt(r){if(r.fragment!==null){r.update(),W(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(he)}}const ae=new Set;let H;function U(){H={r:0,c:[],p:H}}function q(){H.r||W(H.c),H=H.p}function b(r,e){r&&r.i&&(ae.delete(r),r.i(e))}function v(r,e,n,t){if(r&&r.o){if(ae.has(r))return;ae.add(r),H.c.push(()=>{ae.delete(r),t&&(n&&r.d(1),t())}),r.o(e)}}function L(r){r&&r.c()}function B(r,e,n,t){const{fragment:o,on_mount:i,on_destroy:l,after_update:s}=r.$$;o&&o.m(e,n),t||he(()=>{const a=i.map(Ue).filter(tt);l?l.push(...a):W(a),r.$$.on_mount=[]}),s.forEach(he)}function A(r,e){const n=r.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(r,e){r.$$.dirty[0]===-1&&(ee.push(r),dt(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Y(r,e,n,t,o,i,l,s=[-1]){const a=ne;re(r);const c=r.$$={fragment:null,ctx:null,props:i,update:S,not_equal:o,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:_e(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(r,e.props||{},(u,p,...k)=>{const z=k.length?k[0]:p;return c.ctx&&o(c.ctx[u],c.ctx[u]=z)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](z),f&&ht(r,u)),p}):[],c.update(),f=!0,W(c.before_update),c.fragment=t?t(c.ctx):!1,e.target){if(e.hydrate){const u=ct(e.target);c.fragment&&c.fragment.l(u),u.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&b(r.$$.fragment),B(r,e.target,e.anchor,e.customElement),We()}re(a)}class M{$destroy(){A(this,1),this.$destroy=S}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const o=t.indexOf(n);o!==-1&&t.splice(o,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function te(r,e){const n=t=>{const{action:o,data:i}=t.data;o===r&&e(i)};Ge(()=>window.addEventListener("message",n)),ft(()=>window.removeEventListener("message",n))}const K=[];function D(r,e=S){let n;const t=new Set;function o(s){if(I(r,s)&&(r=s,n)){const a=!K.length;for(const c of t)c[1](),K.push(c,r);if(a){for(let c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}function i(s){o(s(r))}function l(s,a=S){const c=[s,a];return t.add(c),t.size===1&&(n=e(o)||S),s(r),()=>{t.delete(c),t.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:l}}const J=D(!1),G=D(!1),X=D(!1),Ke=D(null),fe=D(null),we=D(null),Je=D(0),ce=D(!1),be=D("");let me=!1;ce.subscribe(r=>{me=r});let Xe="";be.subscribe(r=>{Xe=r});async function bt(r,e={},n){if(me==!0&&n||me==!0)return Promise.resolve(n||{});const t={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},o=window.GetParentResourceName?window.GetParentResourceName():Xe;return await(await fetch(`https://${o}/${r}`,t)).json()}function ke(r){let e,n;const t=r[2].default,o=ot(t,r,r[1],null);return{c(){e=h("main"),o&&o.c(),m(e,"class","svelte-1afztrv")},m(i,l){_(i,e,l),o&&o.m(e,null),n=!0},p(i,l){o&&o.p&&(!n||l&2)&&it(o,t,i,i[1],n?lt(t,i[1],l,null):st(i[1]),null)},i(i){n||(b(o,i),n=!0)},o(i){v(o,i),n=!1},d(i){i&&w(e),o&&o.d(i)}}}function mt(r){let e,n,t=r[0]&&ke(r);return{c(){t&&t.c(),e=Z()},m(o,i){t&&t.m(o,i),_(o,e,i),n=!0},p(o,[i]){o[0]?t?(t.p(o,i),i&1&&b(t,1)):(t=ke(o),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(U(),v(t,1,1,()=>{t=null}),q())},i(o){n||(b(t),n=!0)},o(o){v(t),n=!1},d(o){t&&t.d(o),o&&w(e)}}}function gt(r,e,n){let{$$slots:t={},$$scope:o}=e,i,l;return ce.subscribe(s=>{l=s}),J.subscribe(s=>{n(0,i=s)}),te("setVisible",s=>{J.set(s),X.set(!1),G.set(!1)}),te("setPlayerVisible",s=>{J.set(s.show),X.set(s.show),G.set(!1),s.show&&(Ke.set(s.config),fe.set(s.data))}),te("setRobberyVisible",s=>{J.set(s.show),G.set(s.show),X.set(!1),s.show&&(Je.set(s.data.cooldown),we.set(s.data))}),te("setBrowserMode",s=>{ce.set(s),console.log("browser mode enabled")}),Ge(()=>{const s=a=>{i&&["Escape"].includes(a.code)&&(bt("hideUI"),J.set(!1),X.set(!1),G.set(!1)),!i&&["Escape"].includes(a.code)&&l===!0&&J.set(!0)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)}),r.$$set=s=>{"$$scope"in s&&n(1,o=s.$$scope)},[i,o,t]}class wt extends M{constructor(e){super(),Y(this,e,gt,mt,I,{})}}const _t=()=>!window.invokeNative,ge=(r,e=0)=>{if(_t())for(const n of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:n.action,data:n.data}}))},e)};function $e(r,e,n){const t=r.slice();return t[6]=e[n],t}function Ee(r,e,n){const t=r.slice();return t[9]=e[n],t}function xe(r){let e,n=r[1],t=[];for(let o=0;o<n.length;o+=1)t[o]=Se($e(r,n,o));return{c(){e=h("div");for(let o=0;o<t.length;o+=1)t[o].c();m(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(o,i){_(o,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(o,i){if(i&2){n=o[1];let l;for(l=0;l<n.length;l+=1){const s=$e(o,n,l);t[l]?t[l].p(s,i):(t[l]=Se(s),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},d(o){o&&w(e),Q(t,o)}}}function Re(r){let e,n=r[9].name+"",t,o,i;function l(){return r[3](r[9])}return{c(){e=h("button"),t=g(n),m(e,"class","bg-blue-500 text-white p-2")},m(s,a){_(s,e,a),d(e,t),o||(i=j(e,"click",l),o=!0)},p(s,a){r=s},d(s){s&&w(e),o=!1,i()}}}function Se(r){let e,n,t=r[6].component+"",o,i,l,s=r[6].actions,a=[];for(let c=0;c<s.length;c+=1)a[c]=Re(Ee(r,s,c));return{c(){e=h("div"),n=h("p"),o=g(t),i=N();for(let c=0;c<a.length;c+=1)a[c].c();l=N(),m(n,"class","text-white"),m(e,"class","flex flex-row gap-2 items-center m-1")},m(c,f){_(c,e,f),d(e,n),d(n,o),d(e,i);for(let u=0;u<a.length;u+=1)a[u].m(e,null);d(e,l)},p(c,f){if(f&2){s=c[6].actions;let u;for(u=0;u<s.length;u+=1){const p=Ee(c,s,u);a[u]?a[u].p(p,f):(a[u]=Re(p),a[u].c(),a[u].m(e,l))}for(;u<a.length;u+=1)a[u].d(1);a.length=s.length}},d(c){c&&w(e),Q(a,c)}}}function vt(r){let e,n,t,o,i,l=r[0]&&xe(r);return{c(){e=h("div"),n=h("button"),n.textContent="Show",t=N(),l&&l.c(),m(n,"class","bg-red-500 text-white p-2"),m(e,"class","absolute top-0 left-1/2 z-[1000]")},m(s,a){_(s,e,a),d(e,n),d(e,t),l&&l.m(e,null),o||(i=j(n,"click",r[2]),o=!0)},p(s,[a]){s[0]?l?l.p(s,a):(l=xe(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:S,o:S,d(s){s&&w(e),l&&l.d(),o=!1,i()}}}function yt(r,e,n){let t=!1,o=[],i=[];for(let c=1;c<=30;c++){let f={id:c,steam2:`STEAM_0:${c%2}:556300038`,name:`player${c}`,steam3:`11000014250ee${c}`,discord:`${c}26987939540893705`,license:`ef42b10d5f159589df750d4eecaeb55${c}925687e6`,color:c%5==0?[255,69,58]:[255,255,255]};o.push(f)}for(let c=1;c<=5;c++){let f={id:c+10,steam2:`STEAM_0:${c%2}:556300038`,name:`player${c+10}`,steam3:`11000014250ee${c+10}`,discord:`${c+10}26987939540893705`,license:`ef42b10d5f159589df750d4eecaeb55${c+10}925687e6`,color:c%5==0?[255,69,58]:[255,255,255]};i.push(f)}return[t,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Player List",actions:[{name:"show",action:"setPlayerVisible",data:{show:!0,config:{player:{header:"license",list:["name","steam3"]},recent:{header:"steam2",list:["name","steam3","license","discord"]}},data:{players:o,recent:i}}},{name:"hide",action:"setPlayerVisible",data:{show:!1}}]},{component:"Robbery Status",actions:[{name:"show",action:"setRobberyVisible",data:{show:!0,data:{robbery:[{name:"FLEECA BANK ROBBERY",status:!1},{name:"STORE ROBBERY",status:!0},{name:"PACIFIC BANK ROBBERY",status:!1}],services:[{color:[0,0,255],name:"Police",amount:5},{color:[255,0,0],name:"Ambulance",amount:5},{color:[255,255,255],name:"Mechanic",amount:5}]}}},{name:"hide",action:"setRobberyVisible",data:{show:!1}}]}],()=>{n(0,t=!t)},c=>{if(c.custom==!0){c.customFunction();return}ge([{action:c.action,data:c.data}])}]}class kt extends M{constructor(e){super(),Y(this,e,yt,vt,I,{})}}function $t(r){return ge([{action:"setVisible",data:!0}]),ge([{action:"setBrowserMode",data:!0}]),[]}class Et extends M{constructor(e){super(),Y(this,e,$t,null,I,{})}}function xt(r){let e,n,t,o,i;return{c(){e=h("div"),n=h("div"),t=g(r[0]),m(n,"class","bg-lg-s h-[3vh] text-[1.8vh] font-bold uppercase font flex items-center tracking-[1px] svelte-fkepwz"),m(e,"class","w-[20vw] rounded-[5px] bg-black px-[2vh] text-white")},m(l,s){_(l,e,s),d(e,n),d(n,t),o||(i=j(e,"click",r[2]),o=!0)},p(l,[s]){s&1&&R(t,l[0])},i:S,o:S,d(l){l&&w(e),o=!1,i()}}}function Rt(r,e,n){let{tab:t="DC"}=e,{onTabChange:o=()=>{}}=e;const i=()=>{o()};return r.$$set=l=>{"tab"in l&&n(0,t=l.tab),"onTabChange"in l&&n(1,o=l.onTabChange)},[t,o,i]}class St extends M{constructor(e){super(),Y(this,e,Rt,xt,I,{tab:0,onTabChange:1})}}var oe="./background.png";function zt(r){let e,n,t,o,i,l,s=r[1]?"PRIORITY":"TOTAL PLAYERS ONLINE",a,c,f,u=(r[1]?r[2]+"mins":r[3].players.length)+"",p;return{c(){e=h("div"),n=h("div"),t=g(r[0]),o=N(),i=h("div"),l=h("div"),a=g(s),c=N(),f=h("div"),p=g(u),m(n,"class","flex justify-center items-center font text-[6vh] h-[8vh] letter-spacing-[1px] bg-lg grow mt-3 mr-2 svelte-1yjx1hz"),m(l,"class","bg-lg-s text-[1.5vh] font font-bold svelte-1yjx1hz"),m(f,"class","bg-lg-s text-[1.5vh] font font-bold svelte-1yjx1hz"),m(i,"class","h-[2vh] w-full bg-black rounded-b-[8px] flex items-center px-[1vw] justify-between"),E(e,"background","url("+oe+")"),m(e,"class","w-[20vw] h-[10vh] rounded-[8px] flex flex-col justify-between")},m(k,z){_(k,e,z),d(e,n),d(n,t),d(e,o),d(e,i),d(i,l),d(l,a),d(i,c),d(i,f),d(f,p)},p(k,[z]){z&1&&R(t,k[0]),z&2&&s!==(s=k[1]?"PRIORITY":"TOTAL PLAYERS ONLINE")&&R(a,s),z&14&&u!==(u=(k[1]?k[2]+"mins":k[3].players.length)+"")&&R(p,u)},i:S,o:S,d(k){k&&w(e)}}}function Nt(r,e,n){let t,o,i;O(r,G,s=>n(1,t=s)),O(r,Je,s=>n(2,o=s)),O(r,fe,s=>n(3,i=s));let{title:l="SCOREBOARD"}=e;return r.$$set=s=>{"title"in s&&n(0,l=s.title)},[l,t,o,i]}class Tt extends M{constructor(e){super(),Y(this,e,Nt,zt,I,{title:0})}}function Ct(r){let e,n,t,o,i=r[0].id+"",l,s,a=r[0][r[2].player.header]+"",c,f,u,p,k,z,F,x=r[2].player.list[0]&&ze(r),y=r[2].player.list[1]&&Ne(r),T=r[2].player.list[2]&&Te(r),C=r[2].player.list[3]&&Ce(r);return{c(){e=h("div"),n=h("div"),t=h("div"),o=g("["),l=g(i),s=g("]\xA0\xA0"),c=g(a),f=N(),x&&x.c(),u=N(),y&&y.c(),p=N(),T&&T.c(),k=N(),C&&C.c(),E(t,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(t,"class","text-[1.5vh] font-medium uppercase font flex items-center"),m(n,"class","max-h-[15vh] py-3"),E(e,"background","url("+oe+")"),E(e,"background-size","cover"),m(e,"class","w-[20vw] rounded-[10px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-100")},m($,V){_($,e,V),d(e,n),d(n,t),d(t,o),d(t,l),d(t,s),d(t,c),d(n,f),x&&x.m(n,null),d(n,u),y&&y.m(n,null),d(n,p),T&&T.m(n,null),d(n,k),C&&C.m(n,null),z||(F=[j(e,"click",r[12]),j(e,"mouseleave",r[13])],z=!0)},p($,V){V&1&&i!==(i=$[0].id+"")&&R(l,i),V&5&&a!==(a=$[0][$[2].player.header]+"")&&R(c,a),V&1&&E(t,"color",P($[0].color[0],$[0].color[1],$[0].color[2])),$[2].player.list[0]?x?x.p($,V):(x=ze($),x.c(),x.m(n,u)):x&&(x.d(1),x=null),$[2].player.list[1]?y?y.p($,V):(y=Ne($),y.c(),y.m(n,p)):y&&(y.d(1),y=null),$[2].player.list[2]?T?T.p($,V):(T=Te($),T.c(),T.m(n,k)):T&&(T.d(1),T=null),$[2].player.list[3]?C?C.p($,V):(C=Ce($),C.c(),C.m(n,null)):C&&(C.d(1),C=null)},d($){$&&w(e),x&&x.d(),y&&y.d(),T&&T.d(),C&&C.d(),z=!1,W(F)}}}function Ot(r){let e,n,t,o=r[0].id+"",i,l,s=r[0][r[2].player.header]+"",a,c,f;return{c(){e=h("div"),n=h("div"),t=g("["),i=g(o),l=g("]\xA0\xA0"),a=g(s),E(n,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(n,"class","h-[3.5vh] text-[1.5vh] font-medium uppercase font flex items-center"),E(e,"background","url("+oe+")"),m(e,"class","w-[20vw] rounded-[8px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90")},m(u,p){_(u,e,p),d(e,n),d(n,t),d(n,i),d(n,l),d(n,a),c||(f=[j(e,"click",r[6]),j(e,"mouseleave",r[7])],c=!0)},p(u,p){p&1&&o!==(o=u[0].id+"")&&R(i,o),p&5&&s!==(s=u[0][u[2].player.header]+"")&&R(a,s),p&1&&E(n,"color",P(u[0].color[0],u[0].color[1],u[0].color[2]))},d(u){u&&w(e),c=!1,W(f)}}}function ze(r){let e,n=r[3][r[2].player.list[0]]+"",t,o,i,l=r[0][r[2].player.list[0]]+"",s,a,c;return{c(){e=h("div"),t=g(n),o=g(":\xA0\xA0"),i=h("span"),s=g(l),E(e,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(e,"class","text-[1.5vh] font-medium uppercase font flex items-center")},m(f,u){_(f,e,u),d(e,t),d(e,o),d(e,i),d(i,s),a||(c=j(e,"click",r[8]),a=!0)},p(f,u){u&4&&n!==(n=f[3][f[2].player.list[0]]+"")&&R(t,n),u&5&&l!==(l=f[0][f[2].player.list[0]]+"")&&R(s,l),u&1&&E(e,"color",P(f[0].color[0],f[0].color[1],f[0].color[2]))},d(f){f&&w(e),a=!1,c()}}}function Ne(r){let e,n=r[3][r[2].player.list[1]]+"",t,o,i,l=r[0][r[2].player.list[1]]+"",s,a,c;return{c(){e=h("div"),t=g(n),o=g(":\xA0\xA0"),i=h("span"),s=g(l),E(e,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(e,"class","text-[1.5vh] font-medium uppercase font flex items-center")},m(f,u){_(f,e,u),d(e,t),d(e,o),d(e,i),d(i,s),a||(c=j(e,"click",r[9]),a=!0)},p(f,u){u&4&&n!==(n=f[3][f[2].player.list[1]]+"")&&R(t,n),u&5&&l!==(l=f[0][f[2].player.list[1]]+"")&&R(s,l),u&1&&E(e,"color",P(f[0].color[0],f[0].color[1],f[0].color[2]))},d(f){f&&w(e),a=!1,c()}}}function Te(r){let e,n=r[3][r[2].player.list[2]]+"",t,o,i,l=r[0][r[2].player.list[2]]+"",s,a,c;return{c(){e=h("div"),t=g(n),o=g(":\xA0\xA0"),i=h("span"),s=g(l),E(e,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(e,"class","text-[1.5vh] font-medium uppercase font flex items-center")},m(f,u){_(f,e,u),d(e,t),d(e,o),d(e,i),d(i,s),a||(c=j(e,"click",r[10]),a=!0)},p(f,u){u&4&&n!==(n=f[3][f[2].player.list[2]]+"")&&R(t,n),u&5&&l!==(l=f[0][f[2].player.list[2]]+"")&&R(s,l),u&1&&E(e,"color",P(f[0].color[0],f[0].color[1],f[0].color[2]))},d(f){f&&w(e),a=!1,c()}}}function Ce(r){let e,n=r[3][r[2].player.list[3]]+"",t,o,i,l=r[0][r[2].player.list[3]]+"",s,a,c;return{c(){e=h("div"),t=g(n),o=g(":\xA0\xA0"),i=h("span"),s=g(l),E(e,"color",P(r[0].color[0],r[0].color[1],r[0].color[2])),m(e,"class","text-[1.5vh] font-medium uppercase font flex items-center")},m(f,u){_(f,e,u),d(e,t),d(e,o),d(e,i),d(i,s),a||(c=j(e,"click",r[11]),a=!0)},p(f,u){u&4&&n!==(n=f[3][f[2].player.list[3]]+"")&&R(t,n),u&5&&l!==(l=f[0][f[2].player.list[3]]+"")&&R(s,l),u&1&&E(e,"color",P(f[0].color[0],f[0].color[1],f[0].color[2]))},d(f){f&&w(e),a=!1,c()}}}function Bt(r){let e;function n(i,l){return i[1]?Ct:Ot}let t=n(r),o=t(r);return{c(){o.c(),e=Z()},m(i,l){o.m(i,l),_(i,e,l)},p(i,[l]){t===(t=n(i))&&o?o.p(i,l):(o.d(1),o=t(i),o&&(o.c(),o.m(e.parentNode,e)))},i:S,o:S,d(i){o.d(i),i&&w(e)}}}function ie(r){let e=r.target.innerText.toLowerCase();const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}function de(r){var e=r.toString(16);return e.length==1?"0"+e:e}function P(r,e,n){return"#"+de(r)+de(e)+de(n)}function At(r,e,n){let t;O(r,Ke,y=>n(2,t=y));let{player:o={id:1,steam2:"steam2",name:"name",steam3:"steam3",discord:"discord",license:"license",color:[255,255,255]}}=e,i={steam2:"STEAM ID",name:"NAME",steam3:"COMMUNITY ID",discord:"DISCORD",license:"R* LICENSE"},l=!1;te("mouseleft",()=>{n(1,l=!1)});function s(){n(1,l=!0)}function a(){n(1,l=!1)}const c=()=>{s()},f=()=>{a()},u=y=>{ie(y)},p=y=>{ie(y)},k=y=>{ie(y)},z=y=>{ie(y)},F=()=>{s()},x=()=>{a()};return r.$$set=y=>{"player"in y&&n(0,o=y.player)},[o,l,t,i,s,a,c,f,u,p,k,z,F,x]}class Qe extends M{constructor(e){super(),Y(this,e,At,Bt,I,{player:0})}}function Oe(r,e,n){const t=r.slice();return t[1]=e[n],t}function Be(r){let e,n,t=r[0].players,o=[];for(let l=0;l<t.length;l+=1)o[l]=Ae(Oe(r,t,l));const i=l=>v(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=Z()},m(l,s){for(let a=0;a<o.length;a+=1)o[a].m(l,s);_(l,e,s),n=!0},p(l,s){if(s&1){t=l[0].players;let a;for(a=0;a<t.length;a+=1){const c=Oe(l,t,a);o[a]?(o[a].p(c,s),b(o[a],1)):(o[a]=Ae(c),o[a].c(),b(o[a],1),o[a].m(e.parentNode,e))}for(U(),a=t.length;a<o.length;a+=1)i(a);q()}},i(l){if(!n){for(let s=0;s<t.length;s+=1)b(o[s]);n=!0}},o(l){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)v(o[s]);n=!1},d(l){Q(o,l),l&&w(e)}}}function Ae(r){let e,n;return e=new Qe({props:{player:r[1]}}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,o){const i={};o&1&&(i.player=t[1]),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function It(r){let e,n,t=r[0]!=null&&r[0].players.length!=0&&Be(r);return{c(){e=h("div"),t&&t.c(),m(e,"class","w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center pb-1 pt-3")},m(o,i){_(o,e,i),t&&t.m(e,null),n=!0},p(o,[i]){o[0]!=null&&o[0].players.length!=0?t?(t.p(o,i),i&1&&b(t,1)):(t=Be(o),t.c(),b(t,1),t.m(e,null)):t&&(U(),v(t,1,1,()=>{t=null}),q())},i(o){n||(b(t),n=!0)},o(o){v(t),n=!1},d(o){o&&w(e),t&&t.d()}}}function Lt(r,e,n){let t;return O(r,fe,o=>n(0,t=o)),[t]}class Pt extends M{constructor(e){super(),Y(this,e,Lt,It,I,{})}}function Ie(r,e,n){const t=r.slice();return t[1]=e[n],t}function Le(r){let e,n,t=r[0].recent,o=[];for(let l=0;l<t.length;l+=1)o[l]=Pe(Ie(r,t,l));const i=l=>v(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=Z()},m(l,s){for(let a=0;a<o.length;a+=1)o[a].m(l,s);_(l,e,s),n=!0},p(l,s){if(s&1){t=l[0].recent;let a;for(a=0;a<t.length;a+=1){const c=Ie(l,t,a);o[a]?(o[a].p(c,s),b(o[a],1)):(o[a]=Pe(c),o[a].c(),b(o[a],1),o[a].m(e.parentNode,e))}for(U(),a=t.length;a<o.length;a+=1)i(a);q()}},i(l){if(!n){for(let s=0;s<t.length;s+=1)b(o[s]);n=!0}},o(l){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)v(o[s]);n=!1},d(l){Q(o,l),l&&w(e)}}}function Pe(r){let e,n;return e=new Qe({props:{player:r[1]}}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,o){const i={};o&1&&(i.player=t[1]),e.$set(i)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Yt(r){let e,n,t=r[0]!=null&&r[0].recent.length!=0&&Le(r);return{c(){e=h("div"),t&&t.c(),m(e,"class","w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center py-1")},m(o,i){_(o,e,i),t&&t.m(e,null),n=!0},p(o,[i]){o[0]!=null&&o[0].recent.length!=0?t?(t.p(o,i),i&1&&b(t,1)):(t=Le(o),t.c(),b(t,1),t.m(e,null)):t&&(U(),v(t,1,1,()=>{t=null}),q())},i(o){n||(b(t),n=!0)},o(o){v(t),n=!1},d(o){o&&w(e),t&&t.d()}}}function Mt(r,e,n){let t;return O(r,fe,o=>n(0,t=o)),[t]}class jt extends M{constructor(e){super(),Y(this,e,Mt,Yt,I,{})}}function Ye(r,e,n){const t=r.slice();return t[1]=e[n],t}function Me(r){let e,n,t=r[1].name+"",o,i;return{c(){e=h("div"),n=h("div"),o=g(t),i=N(),E(n,"color",r[1].status?"#FF2020":"#1BF83D"),m(n,"class","h-[3.5vh] text-[1.8vh] font-medium uppercase font flex items-center"),E(e,"background","url("+oe+")"),m(e,"class","w-[20vw] rounded-[5px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90")},m(l,s){_(l,e,s),d(e,n),d(n,o),d(e,i)},p(l,s){s&1&&t!==(t=l[1].name+"")&&R(o,t),s&1&&E(n,"color",l[1].status?"#FF2020":"#1BF83D")},d(l){l&&w(e)}}}function Vt(r){let e,n=r[0].robbery,t=[];for(let o=0;o<n.length;o+=1)t[o]=Me(Ye(r,n,o));return{c(){e=h("div");for(let o=0;o<t.length;o+=1)t[o].c();m(e,"class","w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center pb-1 pt-3")},m(o,i){_(o,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(o,[i]){if(i&1){n=o[0].robbery;let l;for(l=0;l<n.length;l+=1){const s=Ye(o,n,l);t[l]?t[l].p(s,i):(t[l]=Me(s),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:S,o:S,d(o){o&&w(e),Q(t,o)}}}function Dt(r,e,n){let t;return O(r,we,o=>n(0,t=o)),[t]}class Ft extends M{constructor(e){super(),Y(this,e,Dt,Vt,I,{})}}function je(r,e,n){const t=r.slice();return t[1]=e[n],t}function Ve(r){let e,n,t,o=r[1].name+"",i,l,s,a=r[1].amount+"",c,f;return{c(){e=h("div"),n=h("div"),t=h("span"),i=g(o),l=N(),s=h("span"),c=g(a),f=N(),E(n,"color",r[1].color),m(n,"class","h-[3.5vh] text-[1.8vh] font-medium uppercase font flex items-center justify-between"),E(e,"background","url("+oe+")"),m(e,"class","w-[20vw] rounded-[5px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90")},m(u,p){_(u,e,p),d(e,n),d(n,t),d(t,i),d(n,l),d(n,s),d(s,c),d(e,f)},p(u,p){p&1&&o!==(o=u[1].name+"")&&R(i,o),p&1&&a!==(a=u[1].amount+"")&&R(c,a),p&1&&E(n,"color",u[1].color)},d(u){u&&w(e)}}}function Ut(r){let e,n=r[0].services,t=[];for(let o=0;o<n.length;o+=1)t[o]=Ve(je(r,n,o));return{c(){e=h("div");for(let o=0;o<t.length;o+=1)t[o].c();m(e,"class","w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center pb-1 pt-3")},m(o,i){_(o,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(o,[i]){if(i&1){n=o[0].services;let l;for(l=0;l<n.length;l+=1){const s=je(o,n,l);t[l]?t[l].p(s,i):(t[l]=Ve(s),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:S,o:S,d(o){o&&w(e),Q(t,o)}}}function qt(r,e,n){let t;return O(r,we,o=>n(0,t=o)),[t]}class Ht extends M{constructor(e){super(),Y(this,e,qt,Ut,I,{})}}function Gt(r){let e,n;return e=new Ft({}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Wt(r){let e,n;return e=new Ht({}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Kt(r){let e,n;return e=new Pt({}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Jt(r){let e,n;return e=new jt({}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Xt(r){let e,n,t,o,i,l,s,a;n=new Tt({props:{title:r[2]?"ROBBERY STATUS":"PLAYER LIST"}});const c=[Jt,Kt,Wt,Gt],f=[];function u(p,k){return p[1]=="PLAYER LIST"&&p[3]?0:p[1]=="RECENT DISCONNECTS"&&p[3]?1:p[1]=="ROBBERY STATUS"&&p[2]?2:p[1]=="EMERGENCY SERVICES"&&p[2]?3:-1}return~(o=u(r))&&(i=f[o]=c[o](r)),s=new St({props:{tab:r[1],onTabChange:r[0]}}),{c(){e=h("div"),L(n.$$.fragment),t=N(),i&&i.c(),l=N(),L(s.$$.fragment),m(e,"class","absolute flex flex-col gap-[5px] top-[7.5vh] right-[2vw] justify-center items-center w-[23vw]")},m(p,k){_(p,e,k),B(n,e,null),d(e,t),~o&&f[o].m(e,null),d(e,l),B(s,e,null),a=!0},p(p,[k]){const z={};k&4&&(z.title=p[2]?"ROBBERY STATUS":"PLAYER LIST"),n.$set(z);let F=o;o=u(p),o!==F&&(i&&(U(),v(f[F],1,1,()=>{f[F]=null}),q()),~o?(i=f[o],i||(i=f[o]=c[o](p),i.c()),b(i,1),i.m(e,l)):i=null);const x={};k&2&&(x.tab=p[1]),s.$set(x)},i(p){a||(b(n.$$.fragment,p),b(i),b(s.$$.fragment,p),a=!0)},o(p){v(n.$$.fragment,p),v(i),v(s.$$.fragment,p),a=!1},d(p){p&&w(e),A(n),~o&&f[o].d(),A(s)}}}function Qt(r,e,n){let t,o;O(r,G,a=>n(2,t=a)),O(r,X,a=>n(3,o=a));let i=["RECENT DISCONNECTS","PLAYER LIST"];t&&(i=["EMERGENCY SERVICES","ROBBERY STATUS"]);let l=i[0];function s(){n(1,l=l==i[0]?i[1]:i[0])}return[s,l,t,o]}class Zt extends M{constructor(e){super(),Y(this,e,Qt,Xt,I,{onTabChange:0})}get onTabChange(){return this.$$.ctx[0]}}function De(r){let e,n;return e=new Zt({}),{c(){L(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function er(r){let e,n,t=(r[0]||r[1])&&De();return{c(){t&&t.c(),e=Z()},m(o,i){t&&t.m(o,i),_(o,e,i),n=!0},p(o,i){o[0]||o[1]?t?i&3&&b(t,1):(t=De(),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(U(),v(t,1,1,()=>{t=null}),q())},i(o){n||(b(t),n=!0)},o(o){v(t),n=!1},d(o){t&&t.d(o),o&&w(e)}}}function Fe(r){let e,n,t,o;return e=new kt({}),{c(){L(e.$$.fragment),n=N(),t=h("div"),m(t,"class","absolute w-screen h-screen top-0 left-0 dev-image svelte-1qdkxzp")},m(i,l){B(e,i,l),_(i,n,l),_(i,t,l),o=!0},i(i){o||(b(e.$$.fragment,i),o=!0)},o(i){v(e.$$.fragment,i),o=!1},d(i){A(e,i),i&&w(n),i&&w(t)}}}function tr(r){let e,n,t,o,i,l;e=new wt({props:{$$slots:{default:[er]},$$scope:{ctx:r}}}),t=new Et({});let s=r[2]&&Fe();return{c(){L(e.$$.fragment),n=N(),L(t.$$.fragment),o=N(),s&&s.c(),i=Z()},m(a,c){B(e,a,c),_(a,n,c),B(t,a,c),_(a,o,c),s&&s.m(a,c),_(a,i,c),l=!0},p(a,[c]){const f={};c&19&&(f.$$scope={dirty:c,ctx:a}),e.$set(f),a[2]?s?c&4&&b(s,1):(s=Fe(),s.c(),b(s,1),s.m(i.parentNode,i)):s&&(U(),v(s,1,1,()=>{s=null}),q())},i(a){l||(b(e.$$.fragment,a),b(t.$$.fragment,a),b(s),l=!0)},o(a){v(e.$$.fragment,a),v(t.$$.fragment,a),v(s),l=!1},d(a){A(e,a),a&&w(n),A(t,a),a&&w(o),s&&s.d(a),a&&w(i)}}}function rr(r,e,n){let t,o,i,l;return O(r,be,s=>n(3,t=s)),O(r,G,s=>n(0,o=s)),O(r,X,s=>n(1,i=s)),O(r,ce,s=>n(2,l=s)),at(be,t="mm_scoreboard",t),[o,i,l]}class nr extends M{constructor(e){super(),Y(this,e,rr,tr,I,{})}}new nr({target:document.getElementById("app")});
