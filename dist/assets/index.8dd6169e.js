const es=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};es();function Fr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ns=Fr(ts);function xi(e){return!!e||e===""}function Lr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=G(r)?is(r):Lr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(G(e))return e;if(J(e))return e}}const rs=/;(?![^(]*\))/g,as=/:(.+)/;function is(e){const t={};return e.split(rs).forEach(n=>{if(n){const r=n.split(as);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cn(e){let t="";if(G(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Cn(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const os=e=>G(e)?e:e==null?"":F(e)||J(e)&&(e.toString===Ai||!R(e.toString))?JSON.stringify(e,wi,2):String(e),wi=(e,t)=>t&&t.__v_isRef?wi(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_i(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!F(t)&&!Oi(t)?String(t):t,Y={},vt=[],we=()=>{},ss=()=>!1,ls=/^on[^a-z]/,En=e=>ls.test(e),Rr=e=>e.startsWith("onUpdate:"),ne=Object.assign,jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fs=Object.prototype.hasOwnProperty,D=(e,t)=>fs.call(e,t),F=Array.isArray,bt=e=>Pn(e)==="[object Map]",_i=e=>Pn(e)==="[object Set]",R=e=>typeof e=="function",G=e=>typeof e=="string",zr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",ki=e=>J(e)&&R(e.then)&&R(e.catch),Ai=Object.prototype.toString,Pn=e=>Ai.call(e),cs=e=>Pn(e).slice(8,-1),Oi=e=>Pn(e)==="[object Object]",Dr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,an=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},us=/-(\w)/g,Te=Tn(e=>e.replace(us,(t,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,kt=Tn(e=>e.replace(ds,"-$1").toLowerCase()),In=Tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=Tn(e=>e?`on${In(e)}`:""),Ut=(e,t)=>!Object.is(e,t),on=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ir=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ba;const ms=()=>ba||(ba=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ce;class ps{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function hs(e,t=Ce){t&&t.active&&t.effects.push(e)}const $r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ci=e=>(e.w&Ve)>0,Ei=e=>(e.n&Ve)>0,gs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},vs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ci(a)&&!Ei(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},or=new WeakMap;let Nt=0,Ve=1;const sr=30;let ge;const rt=Symbol(""),lr=Symbol("");class Ur{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hs(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Ke=!0,Ve=1<<++Nt,Nt<=sr?gs(this):ya(this),this.fn()}finally{Nt<=sr&&vs(this),Ve=1<<--Nt,ge=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(ya(this),this.onStop&&this.onStop(),this.active=!1)}}function ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Pi=[];function At(){Pi.push(Ke),Ke=!1}function Ot(){const e=Pi.pop();Ke=e===void 0?!0:e}function ue(e,t,n){if(Ke&&ge){let r=or.get(e);r||or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=$r()),Ti(a)}}function Ti(e,t){let n=!1;Nt<=sr?Ei(e)||(e.n|=Ve,n=!Ci(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Fe(e,t,n,r,a,i){const o=or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Dr(n)&&s.push(o.get("length")):(s.push(o.get(rt)),bt(e)&&s.push(o.get(lr)));break;case"delete":F(e)||(s.push(o.get(rt)),bt(e)&&s.push(o.get(lr)));break;case"set":bt(e)&&s.push(o.get(rt));break}if(s.length===1)s[0]&&fr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);fr($r(l))}}function fr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&xa(r);for(const r of n)r.computed||xa(r)}function xa(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bs=Fr("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zr)),ys=Hr(),xs=Hr(!1,!0),ws=Hr(!0),wa=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const r=U(this)[t].apply(this,n);return Ot(),r}}),e}function Hr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zs:Li:t?Fi:Mi).get(r))return r;const o=F(r);if(!e&&o&&D(wa,a))return Reflect.get(wa,a,i);const s=Reflect.get(r,a,i);return(zr(a)?Ii.has(a):bs(a))||(e||ue(r,"get",a),t)?s:Q(s)?o&&Dr(a)?s:s.value:J(s)?e?Ri(s):Wr(s):s}}const ks=Si(),As=Si(!0);function Si(e=!1){return function(n,r,a,i){let o=n[r];if(Ht(o)&&Q(o)&&!Q(a))return!1;if(!e&&!Ht(a)&&(cr(a)||(a=U(a),o=U(o)),!F(n)&&Q(o)&&!Q(a)))return o.value=a,!0;const s=F(n)&&Dr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Ut(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function Os(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function Cs(e,t){const n=Reflect.has(e,t);return(!zr(t)||!Ii.has(t))&&ue(e,"has",t),n}function Es(e){return ue(e,"iterate",F(e)?"length":rt),Reflect.ownKeys(e)}const Ni={get:ys,set:ks,deleteProperty:Os,has:Cs,ownKeys:Es},Ps={get:ws,set(e,t){return!0},deleteProperty(e,t){return!0}},Ts=ne({},Ni,{get:xs,set:As}),Br=e=>e,Sn=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=Sn(a),s=r?Br:n?qr:Bt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Qt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function en(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",rt),Reflect.get(e,"size",e)}function _a(e){e=U(e);const t=U(this);return Sn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function ka(e,t){t=U(t);const n=U(this),{has:r,get:a}=Sn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ut(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function Aa(e){const t=U(this),{has:n,get:r}=Sn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function Oa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function tn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Br:e?qr:Bt;return!e&&ue(s,"iterate",rt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function nn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Br:t?qr:Bt;return!t&&ue(i,"iterate",l?lr:rt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function Is(){const e={get(i){return Zt(this,i)},get size(){return en(this)},has:Qt,add:_a,set:ka,delete:Aa,clear:Oa,forEach:tn(!1,!1)},t={get(i){return Zt(this,i,!1,!0)},get size(){return en(this)},has:Qt,add:_a,set:ka,delete:Aa,clear:Oa,forEach:tn(!1,!0)},n={get(i){return Zt(this,i,!0)},get size(){return en(this,!0)},has(i){return Qt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:tn(!0,!1)},r={get(i){return Zt(this,i,!0,!0)},get size(){return en(this,!0)},has(i){return Qt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=nn(i,!1,!1),n[i]=nn(i,!0,!1),t[i]=nn(i,!1,!0),r[i]=nn(i,!0,!0)}),[e,n,t,r]}const[Ss,Ns,Ms,Fs]=Is();function Yr(e,t){const n=t?e?Fs:Ms:e?Ns:Ss;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Ls={get:Yr(!1,!1)},Rs={get:Yr(!1,!0)},js={get:Yr(!0,!1)},Mi=new WeakMap,Fi=new WeakMap,Li=new WeakMap,zs=new WeakMap;function Ds(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(e){return e.__v_skip||!Object.isExtensible(e)?0:Ds(cs(e))}function Wr(e){return Ht(e)?e:Kr(e,!1,Ni,Ls,Mi)}function Us(e){return Kr(e,!1,Ts,Rs,Fi)}function Ri(e){return Kr(e,!0,Ps,js,Li)}function Kr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=$s(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Ht(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function cr(e){return!!(e&&e.__v_isShallow)}function ji(e){return yt(e)||Ht(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function zi(e){return hn(e,"__v_skip",!0),e}const Bt=e=>J(e)?Wr(e):e,qr=e=>J(e)?Ri(e):e;function Di(e){Ke&&ge&&(e=U(e),Ti(e.dep||(e.dep=$r())))}function $i(e,t){e=U(e),e.dep&&fr(e.dep)}function Q(e){return!!(e&&e.__v_isRef===!0)}function Xn(e){return Hs(e,!1)}function Hs(e,t){return Q(e)?e:new Bs(e,t)}class Bs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Bt(t)}get value(){return Di(this),this._value}set value(t){t=this.__v_isShallow?t:U(t),Ut(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Bt(t),$i(this))}}function Ys(e){return Q(e)?e.value:e}const Ws={get:(e,t,n)=>Ys(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Q(a)&&!Q(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ui(e){return yt(e)?e:new Proxy(e,Ws)}class Ks{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ur(t,()=>{this._dirty||(this._dirty=!0,$i(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Di(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=we):(r=e.get,a=e.set),new Ks(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Nn(i,t,n)}return a}function _e(e,t,n,r){if(R(e)){const i=qe(e,t,n,r);return i&&ki(i)&&i.catch(o=>{Nn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(_e(e[i],t,n,r));return a}function Nn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Vs(e,n,a,r)}function Vs(e,t,n,r=!0){console.error(e)}let gn=!1,ur=!1;const ce=[];let Ne=0;const Lt=[];let Mt=null,dt=0;const Rt=[];let Be=null,mt=0;const Hi=Promise.resolve();let Vr=null,dr=null;function Xs(e){const t=Vr||Hi;return e?t.then(this?e.bind(this):e):t}function Js(e){let t=Ne+1,n=ce.length;for(;t<n;){const r=t+n>>>1;Yt(ce[r])<e?t=r+1:n=r}return t}function Bi(e){(!ce.length||!ce.includes(e,gn&&e.allowRecurse?Ne+1:Ne))&&e!==dr&&(e.id==null?ce.push(e):ce.splice(Js(e.id),0,e),Yi())}function Yi(){!gn&&!ur&&(ur=!0,Vr=Hi.then(qi))}function Gs(e){const t=ce.indexOf(e);t>Ne&&ce.splice(t,1)}function Wi(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Yi()}function Zs(e){Wi(e,Mt,Lt,dt)}function Qs(e){Wi(e,Be,Rt,mt)}function Mn(e,t=null){if(Lt.length){for(dr=t,Mt=[...new Set(Lt)],Lt.length=0,dt=0;dt<Mt.length;dt++)Mt[dt]();Mt=null,dt=0,dr=null,Mn(e,t)}}function Ki(e){if(Mn(),Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,r)=>Yt(n)-Yt(r)),mt=0;mt<Be.length;mt++)Be[mt]();Be=null,mt=0}}const Yt=e=>e.id==null?1/0:e.id;function qi(e){ur=!1,gn=!0,Mn(e),ce.sort((n,r)=>Yt(n)-Yt(r));const t=we;try{for(Ne=0;Ne<ce.length;Ne++){const n=ce[Ne];n&&n.active!==!1&&qe(n,null,14)}}finally{Ne=0,ce.length=0,Ki(),gn=!1,Vr=null,(ce.length||Lt.length||Rt.length)&&qi(e)}}function el(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(ir))}let s,l=r[s=Vn(t)]||r[s=Vn(Te(t))];!l&&i&&(l=r[s=Vn(kt(t))]),l&&_e(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,_e(u,e,6,a)}}function Vi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=u=>{const d=Vi(u,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ne(o,i),r.set(e,o),o)}function Fn(e,t){return!e||!En(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,kt(t))||D(e,t))}let be=null,Ln=null;function vn(e){const t=be;return be=e,Ln=e&&e.type.__scopeId||null,t}function tl(e){Ln=e}function nl(){Ln=null}function rl(e,t=be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&La(-1);const i=vn(t),o=e(...a);return vn(i),r._d&&La(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:L,inheritAttrs:j}=e;let S,y;const C=vn(e);try{if(n.shapeFlag&4){const z=a||r;S=Ee(d.call(z,z,m,i,O,b,L)),y=l}else{const z=t;S=Ee(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:al(l)}}catch(z){jt.length=0,Nn(z,e,1),S=se(it)}let N=S;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:W}=N;z.length&&W&7&&(o&&z.some(Rr)&&(y=il(y,o)),N=wt(N,y))}return n.dirs&&(N=wt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,vn(C),S}const al=e=>{let t;for(const n in e)(n==="class"||n==="style"||En(n))&&((t||(t={}))[n]=e[n]);return t},il=(e,t)=>{const n={};for(const r in e)(!Rr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ol(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ca(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Fn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ca(r,o,u):!0:!!o;return!1}function Ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ll=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Qs(e)}function cl(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Gn(e,t,n=!1){const r=Z||be;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Ea={};function sn(e,t,n){return Xi(e,t,n)}function Xi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=Z;let l,u=!1,d=!1;if(Q(e)?(l=()=>e.value,u=cr(e)):yt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>yt(y)||cr(y)),l=()=>e.map(y=>{if(Q(y))return y.value;if(yt(y))return tt(y);if(R(y))return qe(y,s,2)})):R(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),_e(e,s,3,[b])}:l=we,t&&r){const y=l;l=()=>tt(y())}let m,b=y=>{m=S.onStop=()=>{qe(y,s,4)}};if(Kt)return b=we,t?n&&_e(t,s,3,[l(),d?[]:void 0,b]):l(),we;let O=d?[]:Ea;const L=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((C,N)=>Ut(C,O[N])):Ut(y,O)))&&(m&&m(),_e(t,s,3,[y,O===Ea?void 0:O,b]),O=y)}else S.run()};L.allowRecurse=!!t;let j;a==="sync"?j=L:a==="post"?j=()=>oe(L,s&&s.suspense):j=()=>Zs(L);const S=new Ur(l,j);return t?n?L():O=S.run():a==="post"?oe(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&jr(s.scope.effects,S)}}function ul(e,t,n){const r=this.proxy,a=G(e)?e.includes(".")?Ji(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Z;_t(this);const s=Xi(a,i.bind(r),n);return o?_t(o):at(),s}function Ji(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function tt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))tt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)tt(e[n],t);else if(_i(e)||bt(e))e.forEach(n=>{tt(n,t)});else if(Oi(e))for(const n in e)tt(e[n],t);return e}function Vt(e){return R(e)?{setup:e,name:e.name}:e}const ln=e=>!!e.type.__asyncLoader,Gi=e=>e.type.__isKeepAlive;function dl(e,t){Zi(e,"a",t)}function ml(e,t){Zi(e,"da",t)}function Zi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Rn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Gi(a.parent.vnode)&&pl(r,t,n,a),a=a.parent}}function pl(e,t,n,r){const a=Rn(t,e,r,!0);to(()=>{jr(r[t],a)},n)}function Rn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;At(),_t(n);const s=_e(t,n,e,o);return at(),Ot(),s});return r?a.unshift(i):a.push(i),i}}const ze=e=>(t,n=Z)=>(!Kt||e==="sp")&&Rn(e,t,n),hl=ze("bm"),Qi=ze("m"),gl=ze("bu"),eo=ze("u"),vl=ze("bum"),to=ze("um"),bl=ze("sp"),yl=ze("rtg"),xl=ze("rtc");function wl(e,t=Z){Rn("ec",e,t)}function _l(e,t){const n=be;if(n===null)return e;const r=zn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=Y]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&tt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u})}return e}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(At(),_e(l,n,8,[e.el,s,e,t]),Ot())}}const no="components";function kl(e,t){return Ol(no,e,!0,t)||e}const Al=Symbol();function Ol(e,t,n=!0,r=!1){const a=be||Z;if(a){const i=a.type;if(e===no){const s=tf(i,!1);if(s&&(s===t||s===Te(t)||s===In(Te(t))))return i}const o=Pa(a[e]||i[e],t)||Pa(a.appContext[e],t);return!o&&r?i:o}}function Pa(e,t){return e&&(e[t]||e[Te(t)]||e[In(Te(t))])}function Cl(e,t,n,r){let a;const i=n&&n[r];if(F(e)||G(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const mr=e=>e?go(e)?zn(e)||e.proxy:mr(e.parent):null,bn=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||(e.f=()=>Bi(e.update)),$nextTick:e=>e.n||(e.n=Xs.bind(e.proxy)),$watch:e=>ul.bind(e)}),El={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];pr&&(o[t]=0)}}const d=bn[t];let m,b;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(bn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let pr=!0;function Pl(e){const t=ao(e),n=e.proxy,r=e.ctx;pr=!1,t.beforeCreate&&Ta(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:L,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:C,destroyed:N,unmounted:z,render:W,renderTracked:ee,renderTriggered:le,errorCaptured:ke,serverPrefetch:re,expose:Et,inheritAttrs:lt,components:Pt,directives:Jt,filters:da}=t;if(u&&Tl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const X in o){const K=o[X];R(K)&&(r[X]=K.bind(n))}if(a){const X=a.call(n,n);J(X)&&(e.data=Wr(X))}if(pr=!0,i)for(const X in i){const K=i[X],Ie=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):we,Wn=!R(K)&&R(K.set)?K.set.bind(n):we,Tt=me({get:Ie,set:Wn});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:ft=>Tt.value=ft})}if(s)for(const X in s)ro(s[X],r,n,X);if(l){const X=R(l)?l.call(n):l;Reflect.ownKeys(X).forEach(K=>{cl(K,X[K])})}d&&Ta(d,e,"c");function ae(X,K){F(K)?K.forEach(Ie=>X(Ie.bind(n))):K&&X(K.bind(n))}if(ae(hl,m),ae(Qi,b),ae(gl,O),ae(eo,L),ae(dl,j),ae(ml,S),ae(wl,ke),ae(xl,ee),ae(yl,le),ae(vl,C),ae(to,z),ae(bl,re),F(Et))if(Et.length){const X=e.exposed||(e.exposed={});Et.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:Ie=>n[K]=Ie})})}else e.exposed||(e.exposed={});W&&e.render===we&&(e.render=W),lt!=null&&(e.inheritAttrs=lt),Pt&&(e.components=Pt),Jt&&(e.directives=Jt)}function Tl(e,t,n=we,r=!1){F(e)&&(e=hr(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=Gn(i.from||a,i.default,!0):o=Gn(i.from||a):o=Gn(i),Q(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ta(e,t,n){_e(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ro(e,t,n,r){const a=r.includes(".")?Ji(n,r):()=>n[r];if(G(e)){const i=t[e];R(i)&&sn(a,i)}else if(R(e))sn(a,e.bind(n));else if(J(e))if(F(e))e.forEach(i=>ro(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&sn(a,i,e)}}function ao(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>yn(l,u,o,!0)),yn(l,t,o)),i.set(t,l),l}function yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&yn(e,i,n,!0),a&&a.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Il[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Il={data:Ia,props:Qe,emits:Qe,methods:Qe,computed:Qe,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Qe,directives:Qe,watch:Nl,provide:Ia,inject:Sl};function Ia(e,t){return t?e?function(){return ne(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Sl(e,t){return Qe(hr(e),hr(t))}function hr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function Qe(e,t){return e?ne(ne(Object.create(null),e),t):t}function Nl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function Ml(e,t,n,r=!1){const a={},i={};hn(i,jn,1),e.propsDefaults=Object.create(null),io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Us(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Fn(e.emitsOptions,b))continue;const O=t[b];if(l)if(D(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const L=Te(b);a[L]=gr(l,s,L,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{io(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=kt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=gr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(an(l))continue;const u=t[l];let d;a&&D(a,d=Te(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Fn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=gr(a,l,m,u[m],e,!D(u,m))}}return o}function gr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(_t(a),r=u[n]=l.call(null,t),at())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===kt(n))&&(r=!0))}return r}function oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,O]=oo(m,t,!0);ne(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,vt),vt;if(F(i))for(let d=0;d<i.length;d++){const m=Te(i[d]);Sa(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Te(d);if(Sa(m)){const b=i[d],O=o[m]=F(b)||R(b)?{type:b}:b;if(O){const L=Fa(Boolean,O.type),j=Fa(String,O.type);O[0]=L>-1,O[1]=j<0||L<j,(L>-1||D(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Sa(e){return e[0]!=="$"}function Na(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ma(e,t){return Na(e)===Na(t)}function Fa(e,t){return F(t)?t.findIndex(n=>Ma(n,e)):R(t)&&Ma(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",Xr=e=>F(e)?e.map(Ee):[Ee(e)],Ll=(e,t,n)=>{if(t._n)return t;const r=rl((...a)=>Xr(t(...a)),n);return r._c=!1,r},lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if(R(i))t[a]=Ll(a,i,r);else if(i!=null){const o=Xr(i);t[a]=()=>o}}},fo=(e,t)=>{const n=Xr(t);e.slots.default=()=>n},Rl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),hn(t,"_",n)):lo(t,e.slots={})}else e.slots={},t&&fo(e,t);hn(e.slots,jn,1)},jl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,lo(t,a)),o=t}else t&&(fo(e,t),o={default:1});if(i)for(const s in a)!so(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Dl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=co(),o=new Set;let s=!1;const l=i.app={_uid:zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&R(u.install)?(o.add(u),u.install(l,...d)):R(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=se(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,zn(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function vr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,O)=>vr(b,t&&(F(t)?t[O]:t),n,r,a));return}if(ln(r)&&!a)return;const i=r.shapeFlag&4?zn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(G(u)?(d[u]=null,D(m,u)&&(m[u]=null)):Q(u)&&(u.value=null)),R(l))qe(l,s,12,[o,d]);else{const b=G(l),O=Q(l);if(b||O){const L=()=>{if(e.f){const j=b?d[l]:l.value;a?F(j)&&jr(j,i):F(j)?j.includes(i)||j.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,oe(L,n)):L()}}}const oe=fl;function $l(e){return Ul(e)}function Ul(e,t){const n=ms();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=we,cloneNode:L,insertStaticContent:j}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!St(f,c)&&(g=Gt(f),$e(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:E}=c;switch(v){case Jr:y(f,c,p,g);break;case it:C(f,c,p,g);break;case Zn:f==null&&N(c,p,g,k);break;case he:Jt(f,c,p,g,h,w,k,x,_);break;default:E&1?ee(f,c,p,g,h,w,k,x,_):E&6?da(f,c,p,g,h,w,k,x,_):(E&64||E&128)&&v.process(f,c,p,g,h,w,k,x,_,ct)}P!=null&&h&&vr(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},C=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},z=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},ee=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,w,k,x,_):Et(f,c,h,w,k,x,_)},le=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:E,shapeFlag:T,transition:M,patchFlag:$,dirs:H}=f;if(f.el&&L!==void 0&&$===-1)_=f.el=L(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),T&8?d(_,f.children):T&16&&re(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),H&&Ge(f,null,g,"created"),E){for(const q in E)q!=="value"&&!an(q)&&i(_,q,null,E[q],w,f.children,g,h,Se);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Oe(v,g,f)}ke(_,f,f.scopeId,k,g)}H&&Ge(f,null,g,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;B&&M.beforeEnter(_),r(_,c,p),((v=E&&E.onVnodeMounted)||B||H)&&oe(()=>{v&&Oe(v,g,f),B&&M.enter(_),H&&Ge(f,null,g,"mounted")},h)},ke=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;ke(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},re=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?We(f[v]):Ee(f[v]);S(null,P,c,p,g,h,w,k,x)}},Et=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const E=f.props||Y,T=c.props||Y;let M;p&&Ze(p,!1),(M=T.onVnodeBeforeUpdate)&&Oe(M,p,c,f),P&&Ge(c,f,p,"beforeUpdate"),p&&Ze(p,!0);const $=h&&c.type!=="foreignObject";if(v?lt(f.dynamicChildren,v,x,p,g,$,w):k||Ie(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)Pt(x,c,E,T,p,g,h);else if(_&2&&E.class!==T.class&&i(x,"class",null,T.class,h),_&4&&i(x,"style",E.style,T.style,h),_&8){const H=c.dynamicProps;for(let B=0;B<H.length;B++){const q=H[B],pe=E[q],ut=T[q];(ut!==pe||q==="value")&&i(x,q,pe,ut,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Pt(x,c,E,T,p,g,h);((M=T.onVnodeUpdated)||P)&&oe(()=>{M&&Oe(M,p,c,f),P&&Ge(c,f,p,"updated")},g)},lt=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===he||!St(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},Pt=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(an(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==Y)for(const x in p)!an(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Jt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),re(c.children,p,P,h,w,k,x,_)):E>0&&E&64&&T&&f.dynamicChildren?(lt(f.dynamicChildren,T,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&uo(f,c,!0)):Ie(f,c,p,P,h,w,k,x,_)},da=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Yn(c,p,g,h,w,k,_):ae(f,c,_)},Yn=(f,c,p,g,h,w,k)=>{const x=f.component=Jl(f,g,h);if(Gi(f)&&(x.ctx.renderer=ct),Gl(x),x.asyncDep){if(h&&h.registerDep(x,X),!f.el){const _=x.subTree=se(it);C(null,_,c,p)}return}X(x,f,c,p,h,w,k)},ae=(f,c,p)=>{const g=c.component=f.component;if(ol(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,Gs(g.update),g.update();else c.el=f.el,g.vnode=c},X=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:E,u:T,parent:M,vnode:$}=f,H=P,B;Ze(f,!1),P?(P.el=$.el,K(f,P,k)):P=$,E&&on(E),(B=P.props&&P.props.onVnodeBeforeUpdate)&&Oe(B,M,P,$),Ze(f,!0);const q=Jn(f),pe=f.subTree;f.subTree=q,S(pe,q,m(pe.el),Gt(pe),f,h,w),P.el=q.el,H===null&&sl(f,q.el),T&&oe(T,h),(B=P.props&&P.props.onVnodeUpdated)&&oe(()=>Oe(B,M,P,$),h)}else{let P;const{el:E,props:T}=c,{bm:M,m:$,parent:H}=f,B=ln(c);if(Ze(f,!1),M&&on(M),!B&&(P=T&&T.onVnodeBeforeMount)&&Oe(P,H,c),Ze(f,!0),E&&qn){const q=()=>{f.subTree=Jn(f),qn(E,f.subTree,f,h,null)};B?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Jn(f);S(null,q,p,g,f,h,w),c.el=q.el}if($&&oe($,h),!B&&(P=T&&T.onVnodeMounted)){const q=c;oe(()=>Oe(P,H,q),h)}(c.shapeFlag&256||H&&ln(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&oe(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Ur(x,()=>Bi(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ze(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Fl(f,c.props,g,p),jl(f,c.children,p),At(),Mn(void 0,f.update),Ot()},Ie=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:T,shapeFlag:M}=c;if(T>0){if(T&128){Tt(v,E,p,g,h,w,k,x,_);return}else if(T&256){Wn(v,E,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),E!==v&&d(p,E)):P&16?M&16?Tt(v,E,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&re(E,p,g,h,w,k,x,_))},Wn=(f,c,p,g,h,w,k,x,_)=>{f=f||vt,c=c||vt;const v=f.length,P=c.length,E=Math.min(v,P);let T;for(T=0;T<E;T++){const M=c[T]=_?We(c[T]):Ee(c[T]);S(f[T],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,E):re(c,p,g,h,w,k,x,_,E)},Tt=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let E=f.length-1,T=P-1;for(;v<=E&&v<=T;){const M=f[v],$=c[v]=_?We(c[v]):Ee(c[v]);if(St(M,$))S(M,$,p,null,h,w,k,x,_);else break;v++}for(;v<=E&&v<=T;){const M=f[E],$=c[T]=_?We(c[T]):Ee(c[T]);if(St(M,$))S(M,$,p,null,h,w,k,x,_);else break;E--,T--}if(v>E){if(v<=T){const M=T+1,$=M<P?c[M].el:g;for(;v<=T;)S(null,c[v]=_?We(c[v]):Ee(c[v]),p,$,h,w,k,x,_),v++}}else if(v>T)for(;v<=E;)$e(f[v],h,w,!0),v++;else{const M=v,$=v,H=new Map;for(v=$;v<=T;v++){const fe=c[v]=_?We(c[v]):Ee(c[v]);fe.key!=null&&H.set(fe.key,v)}let B,q=0;const pe=T-$+1;let ut=!1,ha=0;const It=new Array(pe);for(v=0;v<pe;v++)It[v]=0;for(v=M;v<=E;v++){const fe=f[v];if(q>=pe){$e(fe,h,w,!0);continue}let Ae;if(fe.key!=null)Ae=H.get(fe.key);else for(B=$;B<=T;B++)if(It[B-$]===0&&St(fe,c[B])){Ae=B;break}Ae===void 0?$e(fe,h,w,!0):(It[Ae-$]=v+1,Ae>=ha?ha=Ae:ut=!0,S(fe,c[Ae],p,null,h,w,k,x,_),q++)}const ga=ut?Hl(It):vt;for(B=ga.length-1,v=pe-1;v>=0;v--){const fe=$+v,Ae=c[fe],va=fe+1<P?c[fe+1].el:g;It[v]===0?S(null,Ae,p,va,h,w,k,x,_):ut&&(B<0||v!==ga[B]?ft(Ae,p,va,2):B--)}}},ft=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ft(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ct);return}if(k===he){r(w,c,p);for(let E=0;E<_.length;E++)ft(_[E],c,p,g);r(f.anchor,c,p);return}if(k===Zn){z(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),oe(()=>x.enter(w),h);else{const{leave:E,delayLeave:T,afterLeave:M}=x,$=()=>r(w,c,p),H=()=>{E(w,()=>{$(),M&&M()})};T?T(w,$,H):H()}else r(w,c,p)},$e=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:E,dirs:T}=f;if(x!=null&&vr(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&T,$=!ln(f);let H;if($&&(H=k&&k.onVnodeBeforeUnmount)&&Oe(H,c,f),P&6)Qo(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Ge(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,ct,g):v&&(w!==he||E>0&&E&64)?Se(v,c,p,!1,!0):(w===he&&E&384||!h&&P&16)&&Se(_,c,p),g&&ma(f)}($&&(H=k&&k.onVnodeUnmounted)||M)&&oe(()=>{H&&Oe(H,c,f),M&&Ge(f,null,c,"unmounted")},p)},ma=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===he){Zo(p,g);return}if(c===Zn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},Zo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Qo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&on(g),h.stop(),w&&(w.active=!1,$e(k,f,c,p)),x&&oe(x,c),oe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)$e(f[k],c,p,g,h)},Gt=f=>f.shapeFlag&6?Gt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),pa=(f,c,p)=>{f==null?c._vnode&&$e(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Ki(),c._vnode=f},ct={p:S,um:$e,m:ft,r:ma,mt:Yn,mc:re,pc:Ie,pbc:lt,n:Gt,o:e};let Kn,qn;return t&&([Kn,qn]=t(ct)),{render:pa,hydrate:Kn,createApp:Dl(pa,Kn)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||uo(o,s))}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Bl=e=>e.__isTeleport,he=Symbol(void 0),Jr=Symbol(void 0),it=Symbol(void 0),Zn=Symbol(void 0),jt=[];let ye=null;function Ye(e=!1){jt.push(ye=e?null:[])}function Yl(){jt.pop(),ye=jt[jt.length-1]||null}let Wt=1;function La(e){Wt+=e}function mo(e){return e.dynamicChildren=Wt>0?ye||vt:null,Yl(),Wt>0&&ye&&ye.push(e),e}function fn(e,t,n,r,a,i){return mo(Me(e,t,n,r,a,i,!0))}function cn(e,t,n,r,a){return mo(se(e,t,n,r,a,!0))}function br(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const jn="__vInternal",po=({key:e})=>e!=null?e:null,un=({ref:e,ref_key:t,ref_for:n})=>e!=null?G(e)||Q(e)||R(e)?{i:be,r:e,k:t,f:!!n}:e:null;function Me(e,t=null,n=null,r=0,a=null,i=e===he?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&po(t),ref:t&&un(t),scopeId:Ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Gr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),Wt>0&&!o&&ye&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ye.push(l),l}const se=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Al)&&(e=it),br(e)){const s=wt(e,t,!0);return n&&Gr(s,n),Wt>0&&!i&&ye&&(s.shapeFlag&6?ye[ye.indexOf(e)]=s:ye.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!G(s)&&(t.class=Cn(s)),J(l)&&(ji(l)&&!F(l)&&(l=ne({},l)),t.style=Lr(l))}const o=G(e)?1:ll(e)?128:Bl(e)?64:J(e)?4:R(e)?2:0;return Me(e,t,n,r,a,o,i,!0)}function Kl(e){return e?ji(e)||jn in e?ne({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&po(s),ref:t&&t.ref?n&&a?F(a)?a.concat(un(t)):[a,un(t)]:un(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function ho(e=" ",t=0){return se(Jr,null,e,t)}function Qn(e="",t=!1){return t?(Ye(),cn(it,null,e)):se(it,null,e)}function Ee(e){return e==null||typeof e=="boolean"?se(it):F(e)?se(he,null,e.slice()):typeof e=="object"?We(e):se(Jr,null,String(e))}function We(e){return e.el===null||e.memo?e:wt(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Gr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(jn in t)?t._ctx=be:a===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[ho(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Cn([t.class,r.class]));else if(a==="style")t.style=Lr([t.style,r.style]);else if(En(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Oe(e,t,n,r=null){_e(e,t,7,[n,r])}const Vl=co();let Xl=0;function Jl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Vl,i={uid:Xl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(r,a),emitsOptions:Vi(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=el.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const _t=e=>{Z=e,e.scope.on()},at=()=>{Z&&Z.scope.off(),Z=null};function go(e){return e.vnode.shapeFlag&4}let Kt=!1;function Gl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=go(e);Ml(e,n,a,t),Rl(e,r);const i=a?Zl(e,t):void 0;return Kt=!1,i}function Zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zi(new Proxy(e.ctx,El));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ef(e):null;_t(e),At();const i=qe(r,e,0,[e.props,a]);if(Ot(),at(),ki(i)){if(i.then(at,at),t)return i.then(o=>{Ra(e,o,t)}).catch(o=>{Nn(o,e,0)});e.asyncDep=i}else Ra(e,i,t)}else vo(e,t)}function Ra(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Ui(t)),vo(e,n)}let ja;function vo(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ja(a,u)}}e.render=r.render||we}_t(e),At(),Pl(e),Ot(),at()}function Ql(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function ef(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(e))},slots:e.slots,emit:e.emit,expose:t}}function zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ui(zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)}}))}function tf(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function nf(e){return R(e)&&"__vccOpts"in e}const me=(e,t)=>qs(e,t,Kt);function bo(e,t,n){const r=arguments.length;return r===2?J(t)&&!F(t)?br(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),se(e,t,n))}const rf="3.2.37",af="http://www.w3.org/2000/svg",et=typeof document!="undefined"?document:null,za=et&&et.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?et.createElementNS(af,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{za.innerHTML=r?`<svg>${e}</svg>`:e;const s=za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lf(e,t,n){const r=e.style,a=G(n);if(n&&!a){for(const i in n)yr(r,i,n[i]);if(t&&!G(t))for(const i in t)n[i]==null&&yr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Da=/\s*!important$/;function yr(e,t,n){if(F(n))n.forEach(r=>yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ff(e,t);Da.test(n)?e.setProperty(kt(r),n.replace(Da,""),"important"):e[r]=n}}const $a=["Webkit","Moz","ms"],er={};function ff(e,t){const n=er[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return er[t]=r;r=In(r);for(let a=0;a<$a.length;a++){const i=$a[a]+r;if(i in e)return er[t]=i}return t}const Ua="http://www.w3.org/1999/xlink";function cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ua,t.slice(6,t.length)):e.setAttributeNS(Ua,t,n);else{const i=ns(t);n==null||i&&!xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[yo,df]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let xr=0;const mf=Promise.resolve(),pf=()=>{xr=0},hf=()=>xr||(mf.then(pf),xr=yo());function pt(e,t,n,r){e.addEventListener(t,n,r)}function gf(e,t,n,r){e.removeEventListener(t,n,r)}function vf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=bf(t);if(r){const u=i[t]=yf(r,a);pt(e,s,u,l)}else o&&(gf(e,s,o,l),i[t]=void 0)}}const Ha=/(?:Once|Passive|Capture)$/;function bf(e){let t;if(Ha.test(e)){t={};let n;for(;n=e.match(Ha);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[kt(e.slice(2)),t]}function yf(e,t){const n=r=>{const a=r.timeStamp||yo();(df||a>=n.attached-1)&&_e(xf(r,n.value),t,5,[r])};return n.value=e,n.attached=hf(),n}function xf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ba=/^on[a-z]/,wf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sf(e,r,a):t==="style"?lf(e,n,r):En(t)?Rr(t)||vf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cf(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ba.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ba.test(t)&&G(n)?!1:t in e}const Ya=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>on(t,n):t};function kf(e){e.target.composing=!0}function Wa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Af={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ya(a);const i=r||a.props&&a.props.type==="number";pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=ir(s)),e._assign(s)}),n&&pt(e,"change",()=>{e.value=e.value.trim()}),t||(pt(e,"compositionstart",kf),pt(e,"compositionend",Wa),pt(e,"change",Wa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ya(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&ir(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Of=["ctrl","shift","alt","meta"],Cf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Of.some(n=>e[`${n}Key`]&&!t.includes(n))},Ka=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Cf[t[a]];if(i&&i(n,t))return}return e(n,...r)},Ef=ne({patchProp:wf},of);let qa;function Pf(){return qa||(qa=$l(Ef))}const Tf=(...e)=>{const t=Pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=If(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function If(e){return G(e)?document.querySelector(e):e}var Sf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const xo=e=>(tl("data-v-e6b9e296"),e=e(),nl(),e),Nf=xo(()=>Me("h2",null,"To Do App",-1)),Mf={class:"conteudo"},Ff={type:"submit"},Lf=xo(()=>Me("hr",null,null,-1)),Rf=["onClick"],jf=Vt({__name:"TaskList",setup(e){const t=Xn([]),n=Xn(""),r=Xn(null);function a(){if(n.value)r.value!==null?(t.value[r.value]=n.value,r.value=null):t.value.push(n.value);else return;n.value=""}function i(o){t.value.splice(o,1),r.value=null,n.value=""}return Qi(()=>{const o=localStorage.getItem("Notas")||"";t.value=JSON.parse(o)||[]}),eo(()=>{localStorage.setItem("Notas",JSON.stringify(t.value))}),(o,s)=>{const l=kl("font-awesome-icon");return Ye(),fn(he,null,[Nf,Me("div",Mf,[Me("form",{onSubmit:s[1]||(s[1]=Ka(u=>a(),["prevent"]))},[_l(Me("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=u=>n.value=u)},null,512),[[Af,n.value]]),Me("button",Ff,[r.value===null?(Ye(),cn(l,{key:0,icon:"fa-solid fa-plus"})):Qn("",!0),r.value!==null?(Ye(),cn(l,{key:1,icon:"fa-solid fa-pencil"})):Qn("",!0)])],32),Lf,Me("ul",null,[(Ye(!0),fn(he,null,Cl(t.value,(u,d)=>(Ye(),fn("li",{key:d,onClick:m=>r.value===d?(r.value=null,n.value=""):(r.value=d,n.value=u),class:Cn(["todo",d===r.value?"selected":""])},[ho(os(u)+" ",1),r.value===d?(Ye(),cn(l,{key:0,onClick:Ka(m=>i(d),["stop"]),icon:"fa-solid fa-trash-can"},null,8,["onClick"])):Qn("",!0)],10,Rf))),128))])])],64)}}});var zf=Sf(jf,[["__scopeId","data-v-e6b9e296"]]);const Df={class:"content"},$f=Vt({__name:"App",setup(e){return(t,n)=>(Ye(),fn("main",Df,[se(zf)]))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Va(Object(n),!0).forEach(function(r){Bf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function Uf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hf(e,t,n){return t&&Xa(e.prototype,t),n&&Xa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zr(e,t){return Wf(e)||qf(e,t)||wo(e,t)||Xf()}function Dn(e){return Yf(e)||Kf(e)||wo(e)||Vf()}function Yf(e){if(Array.isArray(e))return wr(e)}function Wf(e){if(Array.isArray(e))return e}function Kf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function wo(e,t){if(!!e){if(typeof e=="string")return wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wr(e,t)}}function wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ja=function(){},Qr={},_o={},ko=null,Ao={mark:Ja,measure:Ja};try{typeof window!="undefined"&&(Qr=window),typeof document!="undefined"&&(_o=document),typeof MutationObserver!="undefined"&&(ko=MutationObserver),typeof performance!="undefined"&&(Ao=performance)}catch{}var Jf=Qr.navigator||{},Ga=Jf.userAgent,Za=Ga===void 0?"":Ga,Xe=Qr,V=_o,Qa=ko,rn=Ao;Xe.document;var De=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Oo=~Za.indexOf("MSIE")||~Za.indexOf("Trident/"),Le="___FONT_AWESOME___",_r=16,Co="fa",Eo="svg-inline--fa",ot="data-fa-i2svg",kr="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",ea="data-prefix",ta="data-icon",ei="fontawesome-i2svg",Zf="async",Qf=["HTML","HEAD","STYLE","SCRIPT"],Po=function(){try{return!0}catch{return!1}}(),na={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},To={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ec={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},tc=/fa[srltdbk\-\ ]/,Io="fa-layers-text",nc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,rc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},So=[1,2,3,4,5,6,7,8,9,10],ac=So.concat([11,12,13,14,15,16,17,18,19,20]),ic=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oc=[].concat(Dn(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY]).concat(So.map(function(e){return"".concat(e,"x")})).concat(ac.map(function(e){return"w-".concat(e)})),No=Xe.FontAwesomeConfig||{};function sc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var fc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fc.forEach(function(e){var t=Zr(e,2),n=t[0],r=t[1],a=lc(sc(n));a!=null&&(No[r]=a)})}var cc={familyPrefix:Co,styleDefault:"solid",replacementClass:Eo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=A(A({},cc),No);zt.autoReplaceSvg||(zt.observeMutations=!1);var I={};Object.keys(zt).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){zt[e]=n,dn.forEach(function(r){return r(I)})},get:function(){return zt[e]}})});Xe.FontAwesomeConfig=I;var dn=[];function uc(e){return dn.push(e),function(){dn.splice(dn.indexOf(e),1)}}var He=_r,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dc(e){if(!(!e||!De)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var mc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qt(){for(var e=12,t="";e-- >0;)t+=mc[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ra(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mo(e[n]),'" ')},"").trim()}function $n(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function aa(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function hc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function gc(e){var t=e.transform,n=e.width,r=n===void 0?_r:n,a=e.height,i=a===void 0?_r:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Oo?l+="translate(".concat(t.x/He-r/2,"em, ").concat(t.y/He-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/He,"em), calc(-50% + ").concat(t.y/He,"em)) "):l+="translate(".concat(t.x/He,"em, ").concat(t.y/He,"em) "),l+="scale(".concat(t.size/He*(t.flipX?-1:1),", ").concat(t.size/He*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fo(){var e=Co,t=Eo,n=I.familyPrefix,r=I.replacementClass,a=vc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ti=!1;function tr(){I.autoAddCss&&!ti&&(dc(Fo()),ti=!0)}var bc={mixout:function(){return{dom:{css:Fo,insertCss:tr}}},hooks:function(){return{beforeDOMElementCreation:function(){tr()},beforeI2svg:function(){tr()}}}},Re=Xe||{};Re[Le]||(Re[Le]={});Re[Le].styles||(Re[Le].styles={});Re[Le].hooks||(Re[Le].hooks={});Re[Le].shims||(Re[Le].shims=[]);var xe=Re[Le],Lo=[],yc=function e(){V.removeEventListener("DOMContentLoaded",e),_n=1,Lo.map(function(t){return t()})},_n=!1;De&&(_n=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),_n||V.addEventListener("DOMContentLoaded",yc));function xc(e){!De||(_n?setTimeout(e,0):Lo.push(e))}function Xt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(pc(r),">").concat(i.map(Xt).join(""),"</").concat(t,">")}function ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},nr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?wc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function _c(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ar(e){var t=_c(e);return t.length===1?t[0].toString(16):null}function kc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Or(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ri(t);typeof xe.hooks.addPack=="function"&&!a?xe.hooks.addPack(e,ri(t)):xe.styles[e]=A(A({},xe.styles[e]||{}),i),e==="fas"&&Or("fa",t)}var Dt=xe.styles,Ac=xe.shims,Oc=Object.values(To),ia=null,Ro={},jo={},zo={},Do={},$o={},Cc=Object.keys(na);function Ec(e){return~oc.indexOf(e)}function Pc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ec(a)?a:null}var Uo=function(){var t=function(i){return nr(Dt,function(o,s,l){return o[l]=nr(s,i,{}),o},{})};Ro=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$o=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||I.autoFetchSvg,r=nr(Ac,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zo=r.names,Do=r.unicodes,ia=Un(I.styleDefault)};uc(function(e){ia=Un(e.styleDefault)});Uo();function oa(e,t){return(Ro[e]||{})[t]}function Tc(e,t){return(jo[e]||{})[t]}function ht(e,t){return($o[e]||{})[t]}function Ho(e){return zo[e]||{prefix:null,iconName:null}}function Ic(e){var t=Do[e],n=oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ia}var sa=function(){return{prefix:null,iconName:null,rest:[]}};function Un(e){var t=na[e],n=wn[e]||wn[t],r=e in xe.styles?e:null;return n||r||null}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Pc(I.familyPrefix,s);if(Dt[s]?(s=Oc.includes(s)?ec[s]:s,a=s,o.prefix=s):Cc.indexOf(s)>-1?(a=s,o.prefix=Un(s)):l?o.iconName=l:s!==I.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ho(o.iconName):{},d=ht(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Dt.far&&Dt.fas&&!I.autoFetchSvg&&(o.prefix="fas")}return o},sa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var Sc=function(){function e(){Uf(this,e),this.definitions={}}return Hf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Or(s,o[s]);var l=To[s];l&&Or(l,o[s]),Uo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ai=[],gt={},xt={},Nc=Object.keys(xt);function Mc(e,t){var n=t.mixoutsTo;return ai=e,gt={},Object.keys(xt).forEach(function(r){Nc.indexOf(r)===-1&&delete xt[r]}),ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(xt)}),n}function Cr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function st(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Er(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=ht(n,t)||t,ni(Bo.definitions,n,t)||ni(xe.styles,n,t)}var Bo=new Sc,Fc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,st("noAuto")},Lc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(st("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,xc(function(){jc({autoReplaceSvgRoot:n}),st("watch",t)})}},Rc={icon:function(t){if(t===null)return null;if(xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Un(t[0]);return{prefix:r,iconName:ht(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.familyPrefix,"-"))>-1||t.match(tc))){var a=Hn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:ht(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:ht(i,t)||t}}}},de={noAuto:Fc,config:I,dom:Lc,parse:Rc,library:Bo,findIconDefinition:Er,toHtml:Xt},jc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(xe.styles).length>0||I.autoFetchSvg)&&De&&I.autoReplaceSvg&&de.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function zc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=$n(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Dc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function la(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,L=r.found?r:n,j=L.width,S=L.height,y=a==="fak",C=[I.replacementClass,i?"".concat(I.familyPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};O&&(N.attributes[ot]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||qt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),ee=r.found&&n.found?je("generateAbstractMask",W)||{children:[],attributes:{}}:je("generateAbstractIcon",W)||{children:[],attributes:{}},le=ee.children,ke=ee.attributes;return W.children=le,W.attributes=ke,s?Dc(W):zc(W)}function ii(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ot]="");var d=A({},o.styles);aa(a)&&(d.transform=gc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=$n(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function $c(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$n(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var rr=xe.styles;function Pr(e){var t=e[0],n=e[1],r=e.slice(4),a=Zr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.familyPrefix,"-").concat(nt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(nt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.familyPrefix,"-").concat(nt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Uc={found:!1,width:512,height:512};function Hc(e,t){!Po&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Tr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=Ho(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&rr[t]&&rr[t][e]){var o=rr[t][e];return r(Pr(o))}Hc(e,t),r(A(A({},Uc),{},{icon:I.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var oi=function(){},Ir=I.measurePerformance&&rn&&rn.mark&&rn.measure?rn:{mark:oi,measure:oi},Ft='FA "6.1.1"',Bc=function(t){return Ir.mark("".concat(Ft," ").concat(t," begins")),function(){return Yo(t)}},Yo=function(t){Ir.mark("".concat(Ft," ").concat(t," ends")),Ir.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},fa={begin:Bc,end:Yo},mn=function(){};function si(e){var t=e.getAttribute?e.getAttribute(ot):null;return typeof t=="string"}function Yc(e){var t=e.getAttribute?e.getAttribute(ea):null,n=e.getAttribute?e.getAttribute(ta):null;return t&&n}function Wc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Kc(){if(I.autoReplaceSvg===!0)return pn.replace;var e=pn[I.autoReplaceSvg];return e||pn.replace}function qc(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Vc(e){return V.createElement(e)}function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?qc:Vc:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wo(o,{ceFn:r}))}),a}function Xc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wo(a),n)}),n.getAttribute(ot)===null&&I.keepOriginalSource){var r=V.createComment(Xc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ra(n).indexOf(I.replacementClass))return pn.replace(t);var a=new RegExp("".concat(I.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Xt(s)}).join(`
`);n.setAttribute(ot,""),n.innerHTML=o}};function li(e){e()}function Ko(e,t){var n=typeof t=="function"?t:mn;if(e.length===0)n();else{var r=li;I.mutateApproach===Zf&&(r=Xe.requestAnimationFrame||li),r(function(){var a=Kc(),i=fa.begin("mutate");e.map(a),i(),n()})}}var ca=!1;function qo(){ca=!0}function Sr(){ca=!1}var kn=null;function fi(e){if(!!Qa&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?mn:t,r=e.nodeCallback,a=r===void 0?mn:r,i=e.pseudoElementsCallback,o=i===void 0?mn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;kn=new Qa(function(u){if(!ca){var d=Je();Ct(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!si(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&si(m.target)&&~ic.indexOf(m.attributeName))if(m.attributeName==="class"&&Yc(m.target)){var b=Hn(ra(m.target)),O=b.prefix,L=b.iconName;m.target.setAttribute(ea,O||d),L&&m.target.setAttribute(ta,L)}else Wc(m.target)&&a(m.target)})}}),De&&kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jc(){!kn||kn.disconnect()}function Gc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Zc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Hn(ra(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Tc(a.prefix,e.innerText)||oa(a.prefix,Ar(e.innerText))),a}function Qc(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function eu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Qc(e),s=Cr("parseNodeAttributes",{},e),l=t.styleParser?Gc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var tu=xe.styles;function Vo(e){var t=I.autoReplaceSvg==="nest"?ci(e,{styleParser:!1}):ci(e);return~t.extra.classes.indexOf(Io)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(ei,"-").concat(m))},a=function(m){return n.remove("".concat(ei,"-").concat(m))},i=I.autoFetchSvg?Object.keys(na):Object.keys(tu),o=[".".concat(Io,":not([").concat(ot,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=fa.begin("onTree"),u=s.reduce(function(d,m){try{var b=Vo(m);b&&d.push(b)}catch(O){Po||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Ko(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function nu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vo(e).then(function(n){n&&Ko([n],t)})}function ru(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Er(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Er(a||{})),e(r,A(A({},n),{},{mask:a}))}}var au=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,L=O===void 0?null:O,j=n.classes,S=j===void 0?[]:j,y=n.attributes,C=y===void 0?{}:y,N=n.styles,z=N===void 0?{}:N;if(!!t){var W=t.prefix,ee=t.iconName,le=t.icon;return Bn(A({type:"icon"},t),function(){return st("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(b?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(L||qt()):(C["aria-hidden"]="true",C.focusable="false")),la({icons:{main:Pr(le),mask:l?Pr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ee,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:L,extra:{attributes:C,styles:z,classes:S}})})}},iu={mixout:function(){return{icon:ru(au)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ui,n.nodeCallback=nu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return ui(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,L){Promise.all([Tr(a,s),d.iconName?Tr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=Zr(j,2),y=S[0],C=S[1];O([n,la({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=$n(s);l.length>0&&(a.style=l);var u;return aa(o)&&(u=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},ou={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){st("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.familyPrefix,"-layers")].concat(Dn(i)).join(" ")},children:o}]})}}}},su={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),$c({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.familyPrefix,"-layers-counter")].concat(Dn(s))}})})}}}},lu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Bn({type:"text",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),ii({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(I.familyPrefix,"-layers-text")].concat(Dn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Oo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},fu=new RegExp('"',"ug"),di=[1105920,1112319];function cu(e){var t=e.replace(fu,""),n=kc(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ar(a?t[0]:t),isSecondary:r||a}}function mi(e,t){var n="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(ee){return ee.getAttribute(kr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(nc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:rc[u],O=cu(m),L=O.value,j=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=oa(b,L),C=y;if(S){var N=Ic(L);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(ea)!==b||o.getAttribute(ta)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var z=eu(),W=z.extra;W.attributes[kr]=t,Tr(y,b).then(function(ee){var le=la(A(A({},z),{},{icons:{main:ee,mask:sa()},prefix:b,iconName:C,extra:W,watchable:!0})),ke=V.createElement("svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=le.map(function(re){return Xt(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function uu(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function du(e){return e.parentNode!==document.head&&!~Qf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(!!De)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(du).map(uu),a=fa.begin("searchPseudoElements");qo(),Promise.all(r).then(function(){a(),Sr(),t()}).catch(function(){a(),Sr(),n()})})}var mu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;I.searchPseudoElements&&pi(a)}}},hi=!1,pu={mixout:function(){return{dom:{unwatch:function(){qo(),hi=!0}}}},hooks:function(){return{bootstrap:function(){fi(Cr("mutationObserverCallbacks",{}))},noAuto:function(){Jc()},watch:function(n){var r=n.observeMutationsRoot;hi?Sr():fi(Cr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hu={mixout:function(){return{parse:{transform:function(n){return gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},ar={x:0,y:0,width:"100%",height:"100%"};function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gu(e){return e.tag==="g"?e.children:[e]}var vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Hn(a.split(" ").map(function(o){return o.trim()})):sa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=hc({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:A(A({},ar),{},{fill:"white"})},j=d.children?{children:d.children.map(vi)}:{},S={tag:"g",attributes:A({},O.inner),children:[vi(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},j))]},y={tag:"g",attributes:A({},O.outer),children:[S]},C="mask-".concat(s||qt()),N="clip-".concat(s||qt()),z={tag:"mask",attributes:A(A({},ar),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:gu(b)},z]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},ar)}),{children:r,attributes:a}}}},bu={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xu=[bc,iu,ou,su,lu,mu,pu,hu,vu,bu,yu];Mc(xu,{mixoutsTo:de});de.noAuto;var Xo=de.config,wu=de.library;de.dom;var An=de.parse;de.findIconDefinition;de.toHtml;var _u=de.icon;de.layer;var ku=de.text;de.counter;function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Au(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ou(e,t){if(e==null)return{};var n=Au(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Nr(e){return Cu(e)||Eu(e)||Pu(e)||Tu()}function Cu(e){if(Array.isArray(e))return Mr(e)}function Eu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pu(e,t){if(!!e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Tu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Iu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Jo={exports:{}};(function(e){(function(t){var n=function(y,C,N){if(!u(C)||m(C)||b(C)||O(C)||l(C))return C;var z,W=0,ee=0;if(d(C))for(z=[],ee=C.length;W<ee;W++)z.push(n(y,C[W],N));else{z={};for(var le in C)Object.prototype.hasOwnProperty.call(C,le)&&(z[y(le,N)]=n(y,C[le],N))}return z},r=function(y,C){C=C||{};var N=C.separator||"_",z=C.split||/(?=[A-Z])/;return y.split(z).join(N)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},j=function(y,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?y:function(z,W){return N(z,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(j(a,C),y)},decamelizeKeys:function(y,C){return n(j(o,C),y,C)},pascalizeKeys:function(y,C){return n(j(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(Iu)})(Jo);var Su=Jo.exports,Nu=["class","style"];function Mu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Su.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ua(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Fu(d);break;case"style":l.style=Mu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ou(n,Nu);return bo(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var Go=!1;try{Go=!0}catch{}function Lu(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ie({},e,t):{}}function Ru(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ie(t,"fa-".concat(e.size),e.size!==null),ie(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ie(t,"fa-pull-".concat(e.pull),e.pull!==null),ie(t,"fa-swap-opacity",e.swapOpacity),ie(t,"fa-bounce",e.bounce),ie(t,"fa-shake",e.shake),ie(t,"fa-beat",e.beat),ie(t,"fa-fade",e.fade),ie(t,"fa-beat-fade",e.beatFade),ie(t,"fa-flash",e.flash),ie(t,"fa-spin-pulse",e.spinPulse),ie(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yi(e){if(e&&On(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(An.icon)return An.icon(e);if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ju=Vt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return yi(t.icon)}),i=me(function(){return $t("classes",Ru(t))}),o=me(function(){return $t("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=me(function(){return $t("mask",yi(t.mask))}),l=me(function(){return _u(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(d){if(!d)return Lu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=me(function(){return l.value?ua(l.value.abstract[0],{},r):null});return function(){return u.value}}});Vt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Xo.familyPrefix,i=me(function(){return["".concat(a,"-layers")].concat(Nr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return bo("div",{class:i.value},r.default?r.default():[])}}});Vt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Xo.familyPrefix,i=me(function(){return $t("classes",[].concat(Nr(t.counter?["".concat(a,"-layers-counter")]:[]),Nr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=me(function(){return $t("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=me(function(){var u=ku(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=me(function(){return ua(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zu={prefix:"fas",iconName:"pencil",icon:[512,512,[61504,9999,"pencil-alt"],"f303","M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"]},Du={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},$u={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"]};wu.add($u,Du,zu);Tf($f).component("font-awesome-icon",ju).mount("#app");
