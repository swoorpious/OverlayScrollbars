(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.4.3
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const xt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const i=(l,d)=>{const y=c,$=l,x=d||(o?!o(y,$):y!==$);return(x||s)&&(c=$,r=y),[c,x,r]};return[e?l=>i(e(c,r),l):i,l=>[c,!!l,r]]},Pn=typeof window<"u",yo=Pn&&Node.ELEMENT_NODE,{toString:Qo,hasOwnProperty:cn}=Object.prototype,ts=/^\[object (.+)\]$/,Nt=t=>t===void 0,qe=t=>t===null,es=t=>Nt(t)||qe(t)?`${t}`:Qo.call(t).replace(ts,"$1").toLowerCase(),$t=t=>typeof t=="number",xe=t=>typeof t=="string",vo=t=>typeof t=="boolean",Ht=t=>typeof t=="function",ht=t=>Array.isArray(t),ge=t=>typeof t=="object"&&!ht(t)&&!qe(t),Ve=t=>{const e=!!t&&t.length,n=$t(e)&&e>-1&&e%1==0;return ht(t)||!Ht(t)&&n?e>0&&ge(t)?e-1 in t:!0:!1},pn=t=>{if(!t||!ge(t)||es(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=cn.call(t,n),r=s&&cn.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return Nt(e)||cn.call(t,e)},fe=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===yo:!1},Ue=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===yo:!1};function Z(t,e){if(Ve(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&Z(Object.keys(t),n=>e(t[n],n,t));return t}const We=(t,e)=>t.indexOf(e)>=0,_t=(t,e)=>t.concat(e),K=(t,e,n)=>(!n&&!xe(e)&&Ve(e)?Array.prototype.push.apply(t,e):t.push(e),t),ce=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{K(n,o)}):Z(t,o=>{K(n,o)}),n)},ze=t=>!!t&&!t.length,qn=t=>ce(new Set(t)),St=(t,e,n)=>{Z(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Xe=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Lt=t=>t?Object.keys(t):[],J=(t,e,n,o,s,c,r)=>{const i=[e,n,o,s,c,r];return(typeof t!="object"||qe(t))&&!Ht(t)&&(t={}),Z(i,a=>{Z(a,(u,l)=>{const d=a[l];if(t===d)return!0;const y=ht(d);if(d&&pn(d)){const $=t[l];let x=$;y&&!ht($)?x=[]:!y&&!pn($)&&(x={}),t[l]=J(x,d)}else t[l]=y?d.slice():d})}),t},Ln=t=>{for(const e in t)return!1;return!0},dt=(t,e,n)=>{if(Nt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},mo=(t,e)=>new Set((dt(t,e)||"").split(" ")),ft=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=mo(t,e);s[o?"add":"delete"](n);const c=ce(s).join(" ").trim();dt(t,e,c)}},ns=(t,e,n)=>mo(t,e).has(n),yn=Pn&&Element.prototype,go=(t,e)=>{const n=[],o=e?Ue(e)&&e:document;return o?K(n,o.querySelectorAll(t)):n},os=(t,e)=>{const n=e?Ue(e)&&e:document;return n?n.querySelector(t):null},Be=(t,e)=>Ue(t)?(yn.matches||yn.msMatchesSelector).call(t,e):!1,vn=t=>t?ce(t.childNodes):[],Tt=t=>t&&t.parentElement,te=(t,e)=>{if(Ue(t)){const n=yn.closest;if(n)return n.call(t,e);do{if(Be(t,e))return t;t=Tt(t)}while(t)}},ss=(t,e,n)=>{const o=te(t,e),s=t&&os(n,o),c=te(s,e)===o;return o&&s?o===t||s===t||c&&te(te(t,n),e)!==o:!1},bt=()=>{},Pt=t=>{if(Ve(t))Z(ce(t),e=>Pt(e));else if(t){const e=Tt(t);e&&e.removeChild(t)}},In=(t,e,n)=>{if(n&&t){let o=e,s;return Ve(n)?(s=document.createDocumentFragment(),Z(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null),()=>Pt(n)}return bt},gt=(t,e)=>In(t,null,e),cs=(t,e)=>In(Tt(t),t,e),Vn=(t,e)=>In(Tt(t),t&&t.nextSibling,e),Gt=t=>{const e=document.createElement("div");return dt(e,"class",t),e},bo=t=>{const e=Gt();return e.innerHTML=t.trim(),Z(vn(e),n=>Pt(n))},pt=Pn?window:{},pe=Math.max,rs=Math.min,be=Math.round,ho=pt.cancelAnimationFrame,So=pt.requestAnimationFrame,Me=pt.setTimeout,mn=pt.clearTimeout,gn=t=>t.charAt(0).toUpperCase()+t.slice(1),ls=()=>Gt().style,is=["-webkit-","-moz-","-o-","-ms-"],as=["WebKit","Moz","O","MS","webkit","moz","o","ms"],rn={},ln={},us=t=>{let e=ln[t];if(Xe(ln,t))return e;const n=gn(t),o=ls();return Z(is,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,gn(c)+n].find(i=>o[i]!==void 0))}),ln[t]=e||""},Ge=t=>{let e=rn[t]||pt[t];return Xe(rn,t)||(Z(as,n=>(e=e||pt[n+gn(t)],!e)),rn[t]=e),e},ds=Ge("MutationObserver"),Un=Ge("IntersectionObserver"),ke=Ge("ResizeObserver"),bn=Ge("ScrollTimeline"),I=(t,...e)=>t.bind(0,...e),Ut=t=>{let e;const n=t?Me:So,o=t?mn:ho;return[s=>{o(e),e=n(s,Ht(t)?t():t)},()=>o(e)]},wo=(t,e)=>{let n,o,s,c=bt;const{v:r,p:i,g:a}=e||{},u=function(x){c(),mn(n),n=o=void 0,c=bt,t.apply(this,x)},l=$=>a&&o?a(o,$):$,d=()=>{c!==bt&&u(l(s)||s)},y=function(){const x=ce(arguments),v=Ht(r)?r():r;if($t(v)&&v>=0){const L=Ht(i)?i():i,m=$t(L)&&L>=0,O=v>0?Me:So,H=v>0?mn:ho,N=l(x)||x,M=u.bind(0,N);c();const V=O(M,v);c=()=>H(V),m&&!n&&(n=Me(d,L)),o=s=N}else u(x)};return y.m=d,y},fs=/[^\x20\t\r\n\f]+/g,xo=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&xe(e)){const i=e.match(fs)||[];for(r=i.length>0;s=i[c++];)r=!!n(o,s)&&r}return r},zn=(t,e)=>{xo(t,e,(n,o)=>n.remove(o))},Rt=(t,e)=>(xo(t,e,(n,o)=>n.add(o)),I(zn,t,e)),ps={opacity:1,zIndex:1},Ae=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},ys=(t,e)=>!ps[t]&&$t(e)?`${e}px`:e,Wn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),vs=(t,e,n)=>{try{const{style:o}=t;Nt(o[e])?o.setProperty(e,n):o[e]=ys(e,n)}catch{}};function ut(t,e){const n=xe(e);if(ht(e)||n){let s=n?"":{};if(t){const c=pt.getComputedStyle(t,null);s=n?Wn(t,c,e):e.reduce((r,i)=>(r[i]=Wn(t,c,i),r),s)}return s}t&&Z(e,(s,c)=>vs(t,c,e[c]))}const he=t=>ut(t,"direction")==="rtl",Xn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,i=`${o}bottom${s}`,a=`${o}left${s}`,u=ut(t,[c,r,i,a]);return{t:Ae(u[c],!0),r:Ae(u[r],!0),b:Ae(u[i],!0),l:Ae(u[a],!0)}},Qt=(t,e)=>`translate${ge(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,Oo="paddingTop",Bn="paddingRight",Mn="paddingLeft",_e="paddingBottom",Re="marginLeft",De="marginRight",ye="marginBottom",ue="overflowX",de="overflowY",It="width",zt="height",se="hidden",ms={w:0,h:0},Ye=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:ms,gs=t=>Ye("inner",t||pt),ve=I(Ye,"offset"),Ie=I(Ye,"client"),Ne=I(Ye,"scroll"),Fe=t=>{const e=parseFloat(ut(t,It))||0,n=parseFloat(ut(t,zt))||0;return{w:e-be(e),h:n-be(n)}},Ct=t=>t.getBoundingClientRect(),hn=t=>!!(t&&(t[zt]||t[It])),Eo=(t,e)=>{const n=hn(t);return!hn(e)&&n},Je=(t,e,n,o)=>{if(t&&e){let s=!0;return Z(n,c=>{const r=o?o(t[c]):t[c],i=o?o(e[c]):e[c];r!==i&&(s=!1)}),s}return!1},Co=(t,e)=>Je(t,e,["w","h"]),$o=(t,e)=>Je(t,e,["x","y"]),bs=(t,e)=>Je(t,e,["t","r","b","l"]),Gn=(t,e,n)=>Je(t,e,[It,zt],n&&(o=>be(o)));let Te;const Yn="passive",hs=()=>{if(Nt(Te)){Te=!1;try{pt.addEventListener(Yn,bt,Object.defineProperty({},Yn,{get(){Te=!0}}))}catch{}}return Te},Ho=t=>t.split(" "),Jn=(t,e,n,o)=>{Z(Ho(e),s=>{t.removeEventListener(s,n,o)})},ct=(t,e,n,o)=>{var s;const c=hs(),r=(s=c&&o&&o.S)!=null?s:c,i=o&&o.$||!1,a=o&&o.O||!1,u=c?{passive:r,capture:i}:i;return I(St,Ho(e).map(l=>{const d=a?y=>{Jn(t,l,d,i),n(y)}:n;return t.addEventListener(l,d,u),I(Jn,t,l,d,i)}))},Ao=t=>t.stopPropagation(),Kn=t=>t.preventDefault(),Ss={x:0,y:0},an=t=>{const e=t&&Ct(t);return e?{x:e.left+pt.pageYOffset,y:e.top+pt.pageXOffset}:Ss},To=(t,e,n)=>n?n.n?-t:n.i?e-t:t:t,ws=(t,e)=>[e&&e.i?t:0,To(t,t,e)],Yt=(t,e)=>{const{x:n,y:o}=$t(e)?{x:e,y:e}:e||{};$t(n)&&(t.scrollLeft=n),$t(o)&&(t.scrollTop=o)},Ke=t=>({x:t.scrollLeft,y:t.scrollTop}),Zn=(t,e)=>{Z(ht(e)?e:[e],t)},Sn=t=>{const e=new Map,n=(c,r)=>{if(c){const i=e.get(c);Zn(a=>{i&&i[a?"delete":"clear"](a)},r)}else e.forEach(i=>{i.clear()}),e.clear()},o=(c,r)=>{if(xe(c)){const u=e.get(c)||new Set;return e.set(c,u),Zn(l=>{Ht(l)&&u.add(l)},r),I(n,c,r)}vo(r)&&r&&n();const i=Lt(c),a=[];return Z(i,u=>{const l=c[u];l&&K(a,o(u,l))}),I(St,a)},s=(c,r)=>{Z(ce(e.get(c)),i=>{r&&!ze(r)?i.apply(0,r):i()})};return o(t||{}),[o,n,s]},Qn=t=>JSON.stringify(t,(e,n)=>{if(Ht(n))throw 0;return n}),to=(t,e)=>t?`${e}`.split(".").reduce((n,o)=>n&&Xe(n,o)?n[o]:void 0,t):void 0,xs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Po=(t,e)=>{const n={},o=_t(Lt(e),Lt(t));return Z(o,s=>{const c=t[s],r=e[s];if(ge(c)&&ge(r))J(n[s]={},Po(c,r)),Ln(n[s])&&delete n[s];else if(Xe(e,s)&&r!==c){let i=!0;if(ht(c)||ht(r))try{Qn(c)===Qn(r)&&(i=!1)}catch{}i&&(n[s]=r)}}),n},Os=(t,e,n)=>o=>[to(t,o),n||to(e,o)!==void 0],Oe="data-overlayscrollbars",Lo="os-environment",Io=`${Lo}-flexbox-glue`,Es=`${Io}-max`,zo="os-scrollbar-hidden",un=`${Oe}-initialize`,Ot=Oe,Bo=`${Ot}-overflow-x`,Mo=`${Ot}-overflow-y`,ne="overflowVisible",Cs="scrollbarHidden",eo="scrollbarPressed",je="updating",kt=`${Oe}-viewport`,dn="arrange",ko="scrollbarHidden",oe=ne,wn=`${Oe}-padding`,$s=oe,no=`${Oe}-content`,kn="os-size-observer",Hs=`${kn}-appear`,As=`${kn}-listener`,Ts="os-trinsic-observer",Ps="os-no-css-vars",Ls="os-theme-none",vt="os-scrollbar",Is=`${vt}-rtl`,zs=`${vt}-horizontal`,Bs=`${vt}-vertical`,_o=`${vt}-track`,_n=`${vt}-handle`,Ms=`${vt}-visible`,ks=`${vt}-cornerless`,oo=`${vt}-transitionless`,so=`${vt}-interaction`,co=`${vt}-unusable`,xn=`${vt}-auto-hide`,ro=`${xn}-hidden`,lo=`${vt}-wheel`,_s=`${_o}-interactive`,Rs=`${_n}-interactive`,Ro={},Do={},Ds=t=>{Z(t,e=>Z(e,(n,o)=>{Ro[o]=e[o]}))},No=(t,e,n)=>Lt(t).map(o=>{const{static:s,instance:c}=t[o],[r,i,a]=n||[],u=n?c:s;if(u){const l=n?u(r,i,e):u(e);return(a||Do)[o]=l}}),re=t=>Do[t],Ns="__osOptionsValidationPlugin",Fs="__osSizeObserverPlugin",Rn="__osScrollbarsHidingPlugin",js="__osClickScrollPlugin";let fn;const io=(t,e,n,o)=>{gt(t,e);const s=Ie(e),c=ve(e),r=Fe(n);return o&&Pt(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},qs=t=>{let e=!1;const n=Rt(t,zo);try{e=ut(t,us("scrollbar-width"))==="none"||pt.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},Vs=(t,e)=>{ut(t,{[ue]:se,[de]:se,direction:"rtl"}),Yt(t,{x:0});const n=an(t),o=an(e);Yt(t,{x:-999});const s=an(e);return{i:n.x===o.x,n:o.x!==s.x}},Us=(t,e)=>{const n=Rt(t,Io),o=Ct(t),s=Ct(e),c=Gn(s,o,!0),r=Rt(t,Es),i=Ct(t),a=Ct(e),u=Gn(a,i,!0);return n(),r(),c&&u},Ws=()=>{const{body:t}=document,n=bo(`<div class="${Lo}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=Sn(),[r,i]=xt({o:io(t,n,o),u:$o},I(io,t,n,o,!0)),[a]=i(),u=qs(n),l={x:a.x===0,y:a.y===0},d={elements:{host:null,padding:!u,viewport:T=>u&&T===T.ownerDocument.body&&T,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},y=J({},xs),$=I(J,{},y),x=I(J,{},d),v={L:a,I:l,H:u,A:ut(n,"zIndex")==="-1",P:!!bn,V:Vs(n,o),U:Us(n,o),B:I(s,"r"),j:x,N:T=>J(d,T)&&x(),G:$,q:T=>J(y,T)&&$(),F:J({},d),W:J({},y)};return ft(n,"style"),Pt(n),pt.addEventListener("resize",()=>{let T;if(!u&&(!l.x||!l.y)){const L=re(Rn);T=!!(L?L.R():bt)(v,r)}c("r",[T])}),v},yt=()=>(fn||(fn=Ws()),fn),Dn=(t,e)=>Ht(e)?e.apply(0,t):e,Xs=(t,e,n,o)=>{const s=Nt(o)?n:o;return Dn(t,s)||e.apply(0,t)},Fo=(t,e,n,o)=>{const s=Nt(o)?n:o,c=Dn(t,s);return!!c&&(fe(c)?c:e.apply(0,t))},Gs=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{I:s,H:c,j:r}=yt(),{nativeScrollbarsOverlaid:i,body:a}=r().cancel,u=n??i,l=Nt(o)?a:o,d=(s.x||s.y)&&u,y=t&&(qe(l)?!c:l);return!!d||!!y},Nn=new WeakMap,Ys=(t,e)=>{Nn.set(t,e)},Js=t=>{Nn.delete(t)},jo=t=>Nn.get(t),Ks=(t,e,n)=>{let o=!1;const s=n?new WeakMap:!1,c=()=>{o=!0},r=i=>{if(s&&n){const a=n.map(u=>{const[l,d]=u||[];return[d&&l?(i||go)(l,t):[],d]});Z(a,u=>Z(u[0],l=>{const d=u[1],y=s.get(l)||[];if(t.contains(l)&&d){const x=ct(l,d.trim(),v=>{o?(x(),s.delete(l)):e(v)});s.set(l,K(y,x))}else St(y),s.delete(l)}))}};return r(),[c,r]},ao=(t,e,n,o)=>{let s=!1;const{X:c,Y:r,J:i,K:a,Z:u,tt:l}=o||{},d=wo(()=>s&&n(!0),{v:33,p:99}),[y,$]=Ks(t,d,i),x=c||[],v=r||[],T=_t(x,v),L=(O,H)=>{if(!ze(H)){const G=u||bt,N=l||bt,M=[],V=[];let k=!1,E=!1;if(Z(H,C=>{const{attributeName:U,target:F,type:_,oldValue:j,addedNodes:Q,removedNodes:W}=C,Y=_==="attributes",nt=_==="childList",tt=t===F,P=Y&&U,g=P?dt(F,U||""):null,b=P&&j!==g,A=We(v,U)&&b;if(e&&(nt||!tt)){const f=Y&&b,R=f&&a&&Be(F,a),ot=(R?!G(F,U,j,g):!Y||f)&&!N(C,!!R,t,o);Z(Q,p=>K(M,p)),Z(W,p=>K(M,p)),E=E||ot}!e&&tt&&b&&!G(F,U,j,g)&&(K(V,U),k=k||A)}),$(C=>qn(M).reduce((U,F)=>(K(U,go(C,F)),Be(F,C)?K(U,F):U),[])),e)return!O&&E&&n(!1),[!1];if(!ze(V)||k){const C=[qn(V),k];return!O&&n.apply(0,C),C}}},m=new ds(I(L,!1));return[()=>(m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:T,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(y(),m.disconnect(),s=!1)}),()=>{if(s)return d.m(),L(!0,m.takeRecords())}]},qo=(t,e,n)=>{const{nt:s,ot:c}=n||{},r=re(Fs),{V:i}=yt(),a=I(he,t),[u]=xt({o:!1,_:!0});return()=>{const l=[],y=bo(`<div class="${kn}"><div class="${As}"></div></div>`)[0],$=y.firstChild,x=v=>{const T=v instanceof ResizeObserverEntry,L=!T&&ht(v);let m=!1,O=!1,H=!0;if(T){const[G,,N]=u(v.contentRect),M=hn(G),V=Eo(G,N);O=!N||V,m=!O&&!M,H=!m}else L?[,H]=v:O=v===!0;if(s&&H){const G=L?v[0]:he(y);Yt(y,{x:To(3333333,3333333,G&&i),y:3333333})}m||e({st:L?v:void 0,et:!L,ot:O})};if(ke){const v=new ke(T=>x(T.pop()));v.observe($),K(l,()=>{v.disconnect()})}else if(r){const[v,T]=r($,x,c);K(l,_t([Rt(y,Hs),ct(y,"animationstart",v)],T))}else return bt;if(s){const[v]=xt({o:void 0},a);K(l,ct(y,"scroll",T=>{const L=v(),[m,O,H]=L;O&&(zn($,"ltr rtl"),Rt($,m?"rtl":"ltr"),x([!!m,O,H])),Ao(T)}))}return I(St,K(l,gt(t,y)))}},Zs=(t,e)=>{let n;const o=a=>a.h===0||a.isIntersecting||a.intersectionRatio>0,s=Gt(Ts),[c]=xt({o:!1}),r=(a,u)=>{if(a){const l=c(o(a)),[,d]=l;return d&&!u&&e(l)&&[l]}},i=(a,u)=>r(u.pop(),a);return[()=>{const a=[];if(Un)n=new Un(I(i,!1),{root:t}),n.observe(s),K(a,()=>{n.disconnect()});else{const u=()=>{const l=ve(s);r(l)};K(a,qo(s,u)()),u()}return I(St,K(a,gt(t,s)))},()=>n&&i(!0,n.takeRecords())]},Qs=(t,e)=>{let n,o,s,c,r;const{H:i}=yt(),a=`[${Ot}]`,u=`[${kt}]`,l=["tabindex"],d=["wrap","cols","rows"],y=["id","class","style","open"],$={ct:!1,rt:he(t.lt)},{lt:x,it:v,ut:T,ft:L,_t:m,dt:O,vt:H}=t,{U:G,B:N}=yt(),[M]=xt({u:Co,o:{w:0,h:0}},()=>{const P=O(oe,ne),g=O(dn,""),b=g&&Ke(v);H(oe,ne),H(dn,""),H("",je,!0);const A=Ne(T),f=Ne(v),R=Fe(v);return H(oe,ne,P),H(dn,"",g),H("",je),Yt(v,b),{w:f.w+A.w+R.w,h:f.h+A.h+R.h}}),V=L?d:_t(y,d),k=wo(e,{v:()=>n,p:()=>o,g(P,g){const[b]=P,[A]=g;return[_t(Lt(b),Lt(A)).reduce((f,R)=>(f[R]=b[R]||A[R],f),{})]}}),E=P=>{Z(P||l,g=>{if(We(l,g)){const b=dt(x,g);xe(b)?dt(v,g,b):ft(v,g)}})},C=(P,g)=>{const[b,A]=P,f={ht:A};return J($,{ct:b}),!g&&e(f),f},U=({et:P,st:g,ot:b})=>{const f=!(P&&!b&&!g)&&i?k:e,[R,D]=g||[];g&&J($,{rt:R}),f({et:P||b,ot:b,gt:D})},F=(P,g)=>{const[,b]=M(),A={bt:b};return b&&!g&&(P?e:k)(A),A},_=(P,g,b)=>{const A={wt:g};return g&&!b?k(A):m||E(P),A},[j,Q]=T||!G?Zs(x,C):[],W=!m&&qo(x,U,{ot:!0,nt:!0}),[Y,nt]=ao(x,!1,_,{Y:y,X:_t(y,l)}),tt=m&&ke&&new ke(P=>{const g=P[P.length-1].contentRect;U({et:!0,ot:Eo(g,r)}),r=g});return[()=>{E(),tt&&tt.observe(x);const P=W&&W(),g=j&&j(),b=Y(),A=N(f=>{const[,R]=M();k({yt:f,bt:R})});return()=>{tt&&tt.disconnect(),P&&P(),g&&g(),c&&c(),b(),A()}},({St:P,$t:g,xt:b})=>{const A={},[f]=P("update.ignoreMutation"),[R,D]=P("update.attributes"),[ot,p]=P("update.elementEvents"),[h,S]=P("update.debounce"),z=p||D,w=g||b,q=B=>Ht(f)&&f(B);if(z){s&&s(),c&&c();const[B,X]=ao(T||v,!0,F,{X:_t(V,R||[]),J:ot,K:a,tt:(et,rt)=>{const{target:lt,attributeName:mt}=et;return(!rt&&mt&&!m?ss(lt,a,u):!1)||!!te(lt,`.${vt}`)||!!q(et)}});c=B(),s=X}if(S)if(k.m(),ht(h)){const B=h[0],X=h[1];n=$t(B)&&B,o=$t(X)&&X}else $t(h)?(n=h,o=!1):(n=!1,o=!1);if(w){const B=nt(),X=Q&&Q(),et=s&&s();B&&J(A,_(B[0],B[1],w)),X&&J(A,C(X[0],w)),et&&J(A,F(et[0],w))}return A},$]},On=(t,e,n)=>pe(t,rs(e,n)),tc=(t,e,n)=>{const o=be(e),[s,c]=ws(o,n),r=(c-t)/c,i=t/s,a=t/c,u=n?n.n?r:n.i?i:a:a;return On(0,1,u)},Vo=(t,e,n,o)=>{if(o){const i=n?"x":"y",{Ot:a,Ct:u}=o,l=u[i],d=a[i];return On(0,1,l/(l+d))}const s=n?It:zt,c=Ct(t)[s],r=Ct(e)[s];return On(0,1,c/r)},uo=(t,e,n,o)=>{const s=Vo(t,e,o);return 1/s*(1-s)*n},ec=(t,e,n)=>{const{j:o,A:s}=yt(),{scrollbars:c}=o(),{slot:r}=c,{Ht:i,lt:a,it:u,zt:l,It:d,At:y,_t:$}=e,{scrollbars:x}=l?{}:t,{slot:v}=x||{},T=new Map,L=p=>bn&&new bn({source:d,axis:p}),m=L("x"),O=L("y"),H=Fo([i,a,u],()=>$&&y?i:a,r,v),G=p=>$&&!y&&Tt(p)===u,N=p=>{T.forEach((h,S)=>{(p?We(ht(p)?p:[p],S):!0)&&((h||[]).forEach(w=>{w&&w.cancel()}),T.delete(S))})},M=(p,h,S)=>{const z=S?Rt:zn;Z(p,w=>{z(w.Et,h)})},V=(p,h)=>{Z(p,S=>{const[z,w]=h(S);ut(z,w)})},k=p=>`${(p*100).toFixed(3)}%`,E=p=>`${p}px`,C=(p,h,S)=>{V(p,z=>{const{Tt:w,kt:q}=z;return[w,{[S?It:zt]:k(Vo(w,q,S,h))}]})},U=(p,h,S)=>{V(p,z=>{const{Tt:w,kt:q,Et:B}=z,{V:X}=yt(),et=S?"x":"y",rt=S?"Left":"Top",{Ot:lt}=h,mt=he(B),wt=uo(w,q,tc(d[`scroll${rt}`],lt[et],S&&mt&&X),S);return[w,{transform:Qt(k(wt),S)}]})},F=p=>{const{Et:h}=p,S=G(h)&&h,{x:z,y:w}=Ke(d);return[S,{transform:S?Qt({x:E(z),y:E(w)}):""}]},_=(p,h,S,z)=>h&&p.animate(S,{timeline:h,composite:z}),j=(p,h,S,z)=>_(p,h,{transform:[Qt(E(0),z),Qt(E(pe(0,S-.5)),z)]},"add"),Q=[],W=[],Y=[],nt=(p,h,S)=>{const z=vo(S),w=z?S:!0,q=z?!S:!0;w&&M(W,p,h),q&&M(Y,p,h)},tt=p=>{C(W,p,!0),C(Y,p)},P=p=>{!m&&!O&&(U(W,p,!0),U(Y,p))},g=()=>{const p=(h,{Et:S,kt:z,Tt:w})=>{const q=h&&he(S),B=I(uo,w,z),X=B(q?1:0,h),et=B(q?0:1,h);N(w),T.set(w,[_(w,h?m:O,J({transform:[Qt(k(X),h),Qt(k(et),h)]},q?{clear:["left"]}:{}))])};W.forEach(I(p,!0)),Y.forEach(I(p,!1))},b=()=>{!O&&!O&&($&&V(W,F),$&&V(Y,F))},A=({Ot:p})=>{_t(Y,W).forEach(({Et:h})=>{N(h),G(h)&&T.set(h,[j(h,m,p.x,!0),j(h,O,p.y)])})},f=p=>{const h=p?zs:Bs,S=p?W:Y,z=ze(S)?oo:"",w=Gt(`${vt} ${h} ${z}`),q=Gt(_o),B=Gt(_n),X={Et:w,kt:q,Tt:B};return s||Rt(w,Ps),K(S,X),K(Q,[gt(w,q),gt(q,B),I(Pt,w),N,n(X,nt,p)]),X},R=I(f,!0),D=I(f,!1),ot=()=>(gt(H,W[0].Et),gt(H,Y[0].Et),Me(()=>{nt(oo)},300),I(St,Q));return R(),D(),[{Dt:tt,Mt:P,Rt:g,Lt:A,Pt:b,Vt:nt,Ut:{P:m,Bt:W,jt:R,Nt:I(V,W)},Gt:{P:O,Bt:Y,jt:D,Nt:I(V,Y)}},ot]},nc=(t,e,n)=>{const{lt:o,It:s,qt:c}=e,r=(i,a)=>{const{Tt:u,kt:l}=i,d=`scroll${a?"Left":"Top"}`,y=`client${a?"X":"Y"}`,$=a?It:zt,x=a?"left":"top",v=a?"w":"h",T=a?"x":"y",L="pointerup pointerleave pointercancel lostpointercapture",m=(O,H)=>G=>{const{Ot:N}=n,M=ve(l)[v]-ve(u)[v],k=H*G/M*N[T];s[d]=O+k};return ct(l,"pointerdown",O=>{const H=te(O.target,`.${_n}`)===u,G=H?u:l,N=t.scrollbars,{button:M,isPrimary:V,pointerType:k}=O,{pointers:E}=N,C=M===0&&V&&N[H?"dragScroll":"clickScroll"]&&(E||[]).includes(k);if(Xt(o,Ot,eo,!0),C){const U=!H&&O.shiftKey,F=I(Ct,u),_=I(Ct,l),j=(D,ot)=>(D||F())[x]-(ot||_())[x],Q=be(Ct(s)[$])/ve(s)[v]||1,W=m(s[d]||0,1/Q),Y=O[y],nt=F(),tt=_(),P=nt[$],g=j(nt,tt)+P/2,b=Y-tt[x],A=H?0:b-g,f=D=>{St(R),G.releasePointerCapture(D.pointerId)},R=[I(Xt,o,Ot,eo),ct(c,L,f),ct(c,"selectstart",D=>Kn(D),{S:!1}),ct(l,L,f),ct(l,"pointermove",D=>{const ot=D[y]-Y;(H||U)&&W(A+ot)})];if(U)W(A);else if(!H){const D=re(js);D&&K(R,D(W,j,A,P,b))}G.setPointerCapture(O.pointerId)}})};return(i,a,u)=>{const{Et:l}=i,[d,y]=Ut(333),$=!!s.scrollBy;let x=!0;return I(St,[ct(l,"pointerenter",()=>{a(so,!0)}),ct(l,"pointerleave pointercancel",()=>{a(so,!1)}),ct(l,"wheel",v=>{const{deltaX:T,deltaY:L,deltaMode:m}=v;$&&x&&m===0&&Tt(l)===o&&s.scrollBy({left:T,top:L,behavior:"smooth"}),x=!1,a(lo,!0),d(()=>{x=!0,a(lo)}),Kn(v)},{S:!1,$:!0}),ct(l,"mousedown",I(ct,c,"click",Ao,{O:!0,$:!0}),{$:!0}),r(i,u),y])}},oc=(t,e,n,o,s,c)=>{let r,i,a,u,l,d=bt,y=0;const[$,x]=Ut(),[v,T]=Ut(),[L,m]=Ut(100),[O,H]=Ut(100),[G,N]=Ut(100),[M,V]=Ut(()=>y),[k,E]=ec(t,s,nc(e,s,o)),{lt:C,Ft:U,At:F}=s,{Vt:_,Dt:j,Mt:Q,Rt:W,Lt:Y,Pt:nt}=k,tt=f=>{_(xn,f,!0),_(xn,f,!1)},P=(f,R)=>{if(V(),f)_(ro);else{const D=I(_,ro,!0);y>0&&!R?M(D):D()}},g=f=>f.pointerType==="mouse",b=f=>{g(f)&&(u=i,u&&P(!0))},A=[m,V,H,N,T,x,()=>d(),ct(C,"pointerover",b,{O:!0}),ct(C,"pointerenter",b),ct(C,"pointerleave",f=>{g(f)&&(u=!1,i&&P(!1))}),ct(C,"pointermove",f=>{g(f)&&r&&$(()=>{m(),P(!0),O(()=>{r&&P(!1)})})}),ct(U,"scroll",f=>{v(()=>{Q(o),a&&P(!0),L(()=>{a&&!u&&P(!1)})}),c(f),nt()})];return[()=>I(St,K(A,E())),({St:f,xt:R,Wt:D,Xt:ot})=>{const{Yt:p,Jt:h,Kt:S}=ot||{},{gt:z,ot:w}=D||{},{rt:q}=n,{I:B}=yt(),{Ot:X,Zt:et,Qt:rt}=o,[lt,mt]=f("showNativeOverlaidScrollbars"),[wt,At]=f("scrollbars.theme"),[Ft,it]=f("scrollbars.visibility"),[at,st]=f("scrollbars.autoHide"),[Bt,jt]=f("scrollbars.autoHideSuspend"),[Mt]=f("scrollbars.autoHideDelay"),[Ee,Ce]=f("scrollbars.dragScroll"),[Jt,$e]=f("scrollbars.clickScroll"),Ze=w&&!R,Qe=rt.x||rt.y,tn=p||h||z||R,en=S||it,Et=lt&&B.x&&B.y,le=(He,ie)=>{const ae=Ft==="visible"||Ft==="auto"&&He==="scroll";return _(Ms,ae,ie),ae};if(y=Mt,Ze&&(Bt&&Qe?(tt(!1),d(),G(()=>{d=ct(U,"scroll",I(tt,!0),{O:!0})})):tt(!0)),mt&&_(Ls,Et),At&&(_(l),_(wt,!0),l=wt),jt&&!Bt&&tt(!0),st&&(r=at==="move",i=at==="leave",a=at!=="never",P(!a,!0)),Ce&&_(Rs,Ee),$e&&_(_s,Jt),en){const He=le(et.x,!0),ie=le(et.y,!1);_(ks,!(He&&ie))}tn&&(j(o),Q(o),W(o),nt(),Y(o),_(co,!X.x,!0),_(co,!X.y,!1),_(Is,q&&!F))},{},k]},sc=t=>{const e=yt(),{j:n,H:o}=e,s=re(Rn),c=s&&s.C,{elements:r}=n(),{host:i,padding:a,viewport:u,content:l}=r,d=fe(t),y=d?{}:t,{elements:$}=y,{host:x,padding:v,viewport:T,content:L}=$||{},m=d?t:y.target,O=Be(m,"textarea"),H=m.ownerDocument,G=H.documentElement,N=m===H.body,M=H.defaultView,V=I(Xs,[m]),k=I(Fo,[m]),E=I(Dn,[m]),C=I(Gt,""),U=I(V,C,u),F=I(k,C,l),_=U(T),j=_===m,Q=j&&N,W=!j&&F(L),Y=!j&&fe(_)&&_===W,nt=Y&&!!E(l),tt=nt?U():_,P=nt?W:F(),b=Q?G:Y?tt:_,A=O?V(C,i,x):m,f=Q?b:A,R=Y?P:W,D=H.activeElement,ot=!j&&M.top===M&&D===m,p={Ht:m,lt:f,it:b,tn:!j&&k(C,a,v),ut:R,nn:!j&&!o&&c&&c(e),It:Q?G:b,Ft:Q?H:b,sn:M,qt:H,ft:O,At:N,zt:d,_t:j,en:Y,dt:(it,at)=>ns(b,j?Ot:kt,j?at:it),vt:(it,at,st)=>Xt(b,j?Ot:kt,j?at:it,st)},h=Lt(p).reduce((it,at)=>{const st=p[at];return K(it,st&&fe(st)&&!Tt(st)?st:!1)},[]),S=it=>it?We(h,it):null,{Ht:z,lt:w,tn:q,it:B,ut:X,nn:et}=p,rt=[()=>{ft(w,Ot),ft(w,un),ft(z,un),N&&(ft(G,Ot),ft(G,un))}],lt=O&&S(w);let mt=O?z:vn([X,B,q,w,z].find(it=>S(it)===!1));const wt=Q?z:X||B,At=I(St,rt);return[p,()=>{dt(w,Ot,j?"viewport":"host"),dt(q,wn,""),dt(X,no,""),j||dt(B,kt,"");const it=N&&!j?Rt(Tt(m),zo):bt,at=st=>{gt(Tt(st),vn(st)),Pt(st)};if(lt&&(Vn(z,w),K(rt,()=>{Vn(w,z),Pt(w)})),gt(wt,mt),gt(w,q),gt(q||w,!j&&B),gt(B,X),K(rt,()=>{it(),ft(q,wn),ft(X,no),ft(B,Bo),ft(B,Mo),ft(B,kt),S(X)&&at(X),S(B)&&at(B),S(q)&&at(q)}),o&&!j&&(Xt(B,kt,ko,!0),K(rt,I(ft,B,kt))),et&&(cs(B,et),K(rt,I(Pt,et))),ot){const st="tabindex",Bt=dt(B,st);dt(B,st,"-1"),B.focus();const jt=()=>Bt?dt(B,st,Bt):ft(B,st),Mt=ct(H,"pointerdown keydown",()=>{jt(),Mt()});K(rt,[jt,Mt])}else D&&D.focus&&D.focus();return mt=0,At},At]},cc=({ut:t})=>({Wt:e,cn:n,xt:o})=>{const{U:s}=yt(),{ht:c}=e||{},{ct:r}=n;(t||!s)&&(c||o)&&ut(t,{[zt]:r?"":"100%"})},rc=({lt:t,tn:e,it:n,_t:o},s)=>{const[c,r]=xt({u:bs,o:Xn()},I(Xn,t,"padding",""));return({St:i,Wt:a,cn:u,xt:l})=>{let[d,y]=r(l);const{H:$,U:x}=yt(),{et:v,bt:T,gt:L}=a||{},{rt:m}=u,[O,H]=i("paddingAbsolute");(v||y||(l||!x&&T))&&([d,y]=c(l));const N=!o&&(H||L||y);if(N){const M=!O||!e&&!$,V=d.r+d.l,k=d.t+d.b,E={[De]:M&&!m?-V:0,[ye]:M?-k:0,[Re]:M&&m?-V:0,top:M?-d.t:0,right:M?m?-d.r:"auto":0,left:M?m?"auto":-d.l:0,[It]:M?`calc(100% + ${V}px)`:""},C={[Oo]:M?d.t:0,[Bn]:M?d.r:0,[_e]:M?d.b:0,[Mn]:M?d.l:0};ut(e||n,E),ut(n,C),J(s,{tn:d,rn:!M,k:e?C:J({},E,C)})}return{ln:N}}},lc=({lt:t,tn:e,it:n,nn:o,_t:s,vt:c,At:r,sn:i},a)=>{const u=I(pe,0),l="visible",d=42,y={u:Co,o:{w:0,h:0}},$={u:$o,o:{x:se,y:se}},x=(g,b)=>{const A=pt.devicePixelRatio%1!==0?1:0,f={w:u(g.w-b.w),h:u(g.h-b.h)};return{w:f.w>A?f.w:0,h:f.h>A?f.h:0}},v=g=>g.indexOf(l)===0,{L:T,U:L,H:m,I:O}=yt(),H=re(Rn),G=!s&&!m&&(O.x||O.y),N=r&&s,[M,V]=xt(y,I(Fe,n)),[k,E]=xt(y,I(Ne,n)),[C,U]=xt(y),[F,_]=xt(y),[j]=xt($),Q=(g,b)=>{if(ut(n,{[zt]:""}),b){const{rn:A,tn:f}=a,{an:R,D}=g,ot=Fe(t),p=Ie(t),h=ut(n,"boxSizing")==="content-box",S=A||h?f.b+f.t:0,z=!(O.x&&h);ut(n,{[zt]:p.h+ot.h+(R.x&&z?D.x:0)-S})}},W=(g,b)=>{const A=!m&&!g?d:0,f=(q,B,X)=>{const et=ut(n,q),lt=(b?b[q]:et)==="scroll";return[et,lt,lt&&!m?B?A:X:0,B&&!!A]},[R,D,ot,p]=f(ue,O.x,T.x),[h,S,z,w]=f(de,O.y,T.y);return{Zt:{x:R,y:h},an:{x:D,y:S},D:{x:ot,y:z},M:{x:p,y:w}}},Y=(g,b,A,f)=>{const R=(S,z)=>{const w=v(S),q=z&&w&&S.replace(`${l}-`,"")||"";return[z&&!w?S:"",v(q)?"hidden":q]},[D,ot]=R(A.x,b.x),[p,h]=R(A.y,b.y);return f[ue]=ot&&p?ot:D,f[de]=h&&D?h:p,W(g,f)},nt=(g,b,A,f)=>{const{D:R,M:D}=g,{x:ot,y:p}=D,{x:h,y:S}=R,{k:z}=a,w=b?Re:De,q=b?Mn:Bn,B=z[w],X=z[ye],et=z[q],rt=z[_e];f[It]=`calc(100% + ${S+B*-1}px)`,f[w]=-S+B,f[ye]=-h+X,A&&(f[q]=et+(p?S:0),f[_e]=rt+(ot?h:0))},[tt,P]=H?H.T(G,L,n,o,a,W,nt):[()=>G,()=>[bt]];return({St:g,Wt:b,cn:A,xt:f},{ln:R})=>{const{et:D,wt:ot,bt:p,ht:h,gt:S,yt:z}=b||{},{ct:w,rt:q}=A,[B,X]=g("showNativeOverlaidScrollbars"),[et,rt]=g("overflow"),lt=B&&O.x&&O.y,mt=!s&&!L&&(D||p||ot||X||h),wt=D||R||p||S||z||X,At=v(et.x),Ft=v(et.y),it=At||Ft;let at=V(f),st=E(f),Bt=U(f),jt=_(f),Mt;if(X&&m&&c(ko,Cs,!lt),mt&&(Mt=W(lt),Q(Mt,w)),wt){it&&c(oe,ne,!1);const[qt,Kt]=P(lt,q,Mt),[Vt,Jo]=at=M(f),[Zt,Ko]=st=k(f),nn=Ie(n);let on=Zt,sn=nn;qt(),(Ko||Jo||X)&&Kt&&!lt&&tt(Kt,Zt,Vt,q)&&(sn=Ie(n),on=Ne(n));const Fn=gs(i),Zo={w:u(pe(Zt.w,on.w)+Vt.w),h:u(pe(Zt.h,on.h)+Vt.h)},jn={w:u((N?Fn.w:sn.w+u(nn.w-Zt.w))+Vt.w),h:u((N?Fn.h:sn.h+u(nn.h-Zt.h))+Vt.h)};jt=F(jn),Bt=C(x(Zo,jn),f)}const[Ee,Ce]=jt,[Jt,$e]=Bt,[Ze,Qe]=st,[tn,en]=at,Et={x:Jt.w>0,y:Jt.h>0},le=At&&Ft&&(Et.x||Et.y)||At&&Et.x&&!Et.y||Ft&&Et.y&&!Et.x;if(R||S||z||en||Qe||Ce||$e||rt||X||mt||wt){const qt={[De]:0,[ye]:0,[Re]:0,[It]:"",[ue]:"",[de]:""},Kt=Y(lt,Et,et,qt),Vt=tt(Kt,Ze,tn,q);s||nt(Kt,q,Vt,qt),mt&&Q(Kt,w),s?(dt(t,Bo,qt[ue]),dt(t,Mo,qt[de])):ut(n,qt)}Xt(t,Ot,ne,le),Xt(e,wn,$s,le),s||Xt(n,kt,oe,it);const[ie,ae]=j(W(lt).Zt);return J(a,{Zt:ie,Ct:{x:Ee.w,y:Ee.h},Ot:{x:Jt.w,y:Jt.h},Qt:Et}),{Kt:ae,Yt:Ce,Jt:$e}}},ic=t=>{const[e,n,o]=sc(t),s={tn:{t:0,r:0,b:0,l:0},rn:!1,k:{[De]:0,[ye]:0,[Re]:0,[Oo]:0,[Bn]:0,[_e]:0,[Mn]:0},Ct:{x:0,y:0},Ot:{x:0,y:0},Zt:{x:se,y:se},Qt:{x:!1,y:!1}},{Ht:c,it:r,vt:i,_t:a}=e,{H:u,I:l,U:d}=yt(),y=!u&&(l.x||l.y),$=[cc(e),rc(e,s),lc(e,s)];return[n,x=>{const v={},L=(y||!d)&&Ke(r);return i("",je,!0),Z($,m=>{J(v,m(x,v)||{})}),i("",je),Yt(r,L),!a&&Yt(c,0),v},s,e,o]},ac=(t,e,n,o)=>{const[s,c,r,i,a]=ic(t),[u,l,d]=Qs(i,L=>{T({},L)}),[y,$,,x]=oc(t,e,d,r,i,o),v=L=>Lt(L).some(m=>!!L[m]),T=(L,m)=>{const{un:O,xt:H,$t:G,fn:N}=L,M=O||{},V=!!H,k={St:Os(e,M,V),un:M,xt:V};if(N)return $(k),!1;const E=m||l(J({},k,{$t:G})),C=c(J({},k,{cn:d,Wt:E}));$(J({},k,{Wt:E,Xt:C}));const U=v(E),F=v(C),_=U||F||!Ln(M)||V;return _&&n(L,{Wt:E,Xt:C}),_};return[()=>{const{Ht:L,it:m,qt:O,At:H}=i,G=H?O.documentElement:L,N=Ke(G),M=[u(),s(),y()];return Yt(m,N),I(St,M)},T,()=>({_n:d,dn:r}),{vn:i,hn:x},a]},Dt=(t,e,n)=>{const{G:o}=yt(),s=fe(t),c=s?t:t.target,r=jo(c);if(e&&!r){let i=!1;const a=[],u={},l=E=>{const C=re(Ns);return C?C(E,!0):E},d=J({},o(),l(e)),[y,$,x]=Sn(),[v,T,L]=Sn(n),m=(E,C)=>{L(E,C),x(E,C)},[O,H,G,N,M]=ac(t,d,({un:E,xt:C},{Wt:U,Xt:F})=>{const{et:_,gt:j,ht:Q,bt:W,wt:Y,ot:nt}=U,{Yt:tt,Jt:P,Kt:g}=F;m("updated",[k,{updateHints:{sizeChanged:!!_,directionChanged:!!j,heightIntrinsicChanged:!!Q,overflowEdgeChanged:!!tt,overflowAmountChanged:!!P,overflowStyleChanged:!!g,contentMutation:!!W,hostMutation:!!Y,appear:!!nt},changedOptions:E||{},force:!!C}])},E=>m("scroll",[k,E])),V=E=>{Js(c),St(a),i=!0,m("destroyed",[k,E]),$(),T()},k={options(E,C){if(E){const U=C?o():{},F=Po(d,J(U,l(E)));Ln(F)||(J(d,F),H({un:F}))}return J({},d)},on:v,off:(E,C)=>{E&&C&&T(E,C)},state(){const{_n:E,dn:C}=G(),{rt:U}=E,{Ct:F,Ot:_,Zt:j,Qt:Q,tn:W,rn:Y}=C;return J({},{overflowEdge:F,overflowAmount:_,overflowStyle:j,hasOverflow:Q,padding:W,paddingAbsolute:Y,directionRTL:U,destroyed:i})},elements(){const{Ht:E,lt:C,tn:U,it:F,ut:_,It:j,Ft:Q}=N.vn,{Ut:W,Gt:Y}=N.hn,nt=P=>{const{Tt:g,kt:b,Et:A}=P;return{scrollbar:A,track:b,handle:g}},tt=P=>{const{Bt:g,jt:b}=P,A=nt(g[0]);return J({},A,{clone:()=>{const f=nt(b());return H({fn:!0}),f}})};return J({},{target:E,host:C,padding:U||F,viewport:F,content:_||F,scrollOffsetElement:j,scrollEventElement:Q,scrollbarHorizontal:tt(W),scrollbarVertical:tt(Y)})},update:E=>H({xt:E,$t:!0}),destroy:I(V,!1),plugin:E=>u[Lt(E)[0]]};return K(a,[M]),Ys(c,k),No(Ro,Dt,[k,y,u]),Gs(N.vn.At,!s&&t.cancel)?(V(!0),k):(K(a,O()),m("initialized",[k]),k.update(!0),k)}return r};Dt.plugin=t=>{const e=ht(t),n=e?t:[t],o=n.map(s=>No(s,Dt)[0]);return Ds(n),e?o:o[0]};Dt.valid=t=>{const e=t&&t.elements,n=Ht(e)&&e();return pn(n)&&!!jo(n.target)};Dt.env=()=>{const{L:t,I:e,H:n,V:o,U:s,A:c,P:r,F:i,W:a,j:u,N:l,G:d,q:y}=yt();return J({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:i,staticDefaultOptions:a,getDefaultInitialization:u,setDefaultInitialization:l,getDefaultOptions:d,setDefaultOptions:y})};const uc=document.querySelector("#eventsSection"),fo=document.querySelector("#events"),dc=t=>{uc.style.display="",fo.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,fo.append(o)})},fc=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,dc({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const i=e[r];e[r]=typeof i=="number"?i+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const a=new Set(t);a.delete(r),s(Array.from(a))},500)}};let Wt,En=!1,Cn=!1,$n=!0;const Pe=fc(),ee=document.querySelector("#target"),po=document.querySelector("#targetContent"),Le=document.querySelector("#impostor"),Hn=document.querySelector("#scrollButton"),Se=document.querySelector("#toggleContentButton"),we=document.querySelector("#toggleElementButton"),An=document.querySelector("#toggleOverlayScrollbarsButton"),Uo=()=>{En?(po.style.display="none",Se.textContent="Show Content"):(po.style.display="",Se.textContent="Hide Content")},Wo=()=>{Cn?(ee.style.display="none",we.textContent="Show Element"):(ee.style.display="",we.textContent="Hide Element")},Xo=()=>{var t,e;$n?((t=Le.parentElement)==null||t.append(ee),Le.remove(),Hn.style.display="",Se.style.display="",we.style.display="",An.textContent="Destroy OverlayScrollbars",Wt=Dt(ee,{},{initialized:()=>Pe("initialized"),destroyed:()=>Pe("destroyed"),updated:()=>Pe("updated"),scroll:()=>Pe("scroll")})):(Wt==null||Wt.destroy(),(e=ee.parentElement)==null||e.append(Le),ee.remove(),Le.style.display="",Hn.style.display="none",Se.style.display="none",we.style.display="none",An.textContent="Initialize OverlayScrollbars")};Hn.addEventListener("click",()=>{if(!Wt)return;const{overflowAmount:t}=Wt.state(),{scrollOffsetElement:e}=Wt.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});Se.addEventListener("click",()=>{En=!En,Uo()});we.addEventListener("click",()=>{Cn=!Cn,Wo()});An.addEventListener("click",()=>{$n=!$n,Xo()});Uo();Wo();Xo();let me=null;const Go=t=>Dt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,pc=document.querySelector("#toggleBodyOverlayScrollbarsSection"),Tn=document.querySelector("#toggleBodyOverlayScrollbarsButton"),Yo=()=>{me===null&&(me=!Go()),pc.style.display="",Tn.style.display="",Tn.textContent=`${me?"Destroy":"Initialize"} Body OverlayScrollbars`};Tn.addEventListener("click",()=>{const t=Dt(document.body);t?(t.destroy(),me=!1):me=!Go(!0),Yo()});Yo();
