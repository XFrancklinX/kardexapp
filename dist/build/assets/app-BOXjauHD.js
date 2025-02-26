function Ur(t,e){return function(){return t.apply(e,arguments)}}const{toString:ul}=Object.prototype,{getPrototypeOf:Di}=Object,Sn=(t=>e=>{const n=ul.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),le=t=>(t=t.toLowerCase(),e=>Sn(e)===t),Tn=t=>e=>typeof e===t,{isArray:at}=Array,Rt=Tn("undefined");function dl(t){return t!==null&&!Rt(t)&&t.constructor!==null&&!Rt(t.constructor)&&ee(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Br=le("ArrayBuffer");function hl(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Br(t.buffer),e}const fl=Tn("string"),ee=Tn("function"),Vr=Tn("number"),In=t=>t!==null&&typeof t=="object",pl=t=>t===!0||t===!1,Zt=t=>{if(Sn(t)!=="object")return!1;const e=Di(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},_l=le("Date"),ml=le("File"),gl=le("Blob"),yl=le("FileList"),wl=t=>In(t)&&ee(t.pipe),vl=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ee(t.append)&&((e=Sn(t))==="formdata"||e==="object"&&ee(t.toString)&&t.toString()==="[object FormData]"))},El=le("URLSearchParams"),[bl,Cl,Sl,Tl]=["ReadableStream","Request","Response","Headers"].map(le),Il=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vt(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),at(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Wr(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ke=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hr=t=>!Rt(t)&&t!==ke;function li(){const{caseless:t}=Hr(this)&&this||{},e={},n=(i,s)=>{const r=t&&Wr(e,s)||s;Zt(e[r])&&Zt(i)?e[r]=li(e[r],i):Zt(i)?e[r]=li({},i):at(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Vt(arguments[i],n);return e}const Rl=(t,e,n,{allOwnKeys:i}={})=>(Vt(e,(s,r)=>{n&&ee(s)?t[r]=Ur(s,n):t[r]=s},{allOwnKeys:i}),t),Al=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Nl=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},xl=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Di(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Pl=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},kl=t=>{if(!t)return null;if(at(t))return t;let e=t.length;if(!Vr(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Dl=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Di(Uint8Array)),Ol=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},Fl=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Ml=le("HTMLFormElement"),Ll=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Ts=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$l=le("RegExp"),qr=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Vt(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},Ul=t=>{qr(t,(e,n)=>{if(ee(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(ee(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bl=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return at(t)?i(t):i(String(t).split(e)),n},Vl=()=>{},Wl=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,qn="abcdefghijklmnopqrstuvwxyz",Is="0123456789",jr={DIGIT:Is,ALPHA:qn,ALPHA_DIGIT:qn+qn.toUpperCase()+Is},Hl=(t=16,e=jr.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function ql(t){return!!(t&&ee(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const jl=t=>{const e=new Array(10),n=(i,s)=>{if(In(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=at(i)?[]:{};return Vt(i,(o,a)=>{const c=n(o,s+1);!Rt(c)&&(r[a]=c)}),e[s]=void 0,r}}return i};return n(t,0)},zl=le("AsyncFunction"),Gl=t=>t&&(In(t)||ee(t))&&ee(t.then)&&ee(t.catch),zr=((t,e)=>t?setImmediate:e?((n,i)=>(ke.addEventListener("message",({source:s,data:r})=>{s===ke&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ke.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ee(ke.postMessage)),Kl=typeof queueMicrotask<"u"?queueMicrotask.bind(ke):typeof process<"u"&&process.nextTick||zr,f={isArray:at,isArrayBuffer:Br,isBuffer:dl,isFormData:vl,isArrayBufferView:hl,isString:fl,isNumber:Vr,isBoolean:pl,isObject:In,isPlainObject:Zt,isReadableStream:bl,isRequest:Cl,isResponse:Sl,isHeaders:Tl,isUndefined:Rt,isDate:_l,isFile:ml,isBlob:gl,isRegExp:$l,isFunction:ee,isStream:wl,isURLSearchParams:El,isTypedArray:Dl,isFileList:yl,forEach:Vt,merge:li,extend:Rl,trim:Il,stripBOM:Al,inherits:Nl,toFlatObject:xl,kindOf:Sn,kindOfTest:le,endsWith:Pl,toArray:kl,forEachEntry:Ol,matchAll:Fl,isHTMLForm:Ml,hasOwnProperty:Ts,hasOwnProp:Ts,reduceDescriptors:qr,freezeMethods:Ul,toObjectSet:Bl,toCamelCase:Ll,noop:Vl,toFiniteNumber:Wl,findKey:Wr,global:ke,isContextDefined:Hr,ALPHABET:jr,generateString:Hl,isSpecCompliantForm:ql,toJSONObject:jl,isAsyncFn:zl,isThenable:Gl,setImmediate:zr,asap:Kl};function b(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}f.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.status}}});const Gr=b.prototype,Kr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Kr[t]={value:t}});Object.defineProperties(b,Kr);Object.defineProperty(Gr,"isAxiosError",{value:!0});b.from=(t,e,n,i,s,r)=>{const o=Object.create(Gr);return f.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),b.call(o,t.message,e,n,i,s),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const Yl=null;function ci(t){return f.isPlainObject(t)||f.isArray(t)}function Yr(t){return f.endsWith(t,"[]")?t.slice(0,-2):t}function Rs(t,e,n){return t?t.concat(e).map(function(s,r){return s=Yr(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function Ql(t){return f.isArray(t)&&!t.some(ci)}const Jl=f.toFlatObject(f,{},null,function(e){return/^is[A-Z]/.test(e)});function Rn(t,e,n){if(!f.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,m){return!f.isUndefined(m[g])});const i=n.metaTokens,s=n.visitor||d,r=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(e);if(!f.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(f.isDate(p))return p.toISOString();if(!c&&f.isBlob(p))throw new b("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(p)||f.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,g,m){let y=p;if(p&&!m&&typeof p=="object"){if(f.endsWith(g,"{}"))g=i?g:g.slice(0,-2),p=JSON.stringify(p);else if(f.isArray(p)&&Ql(p)||(f.isFileList(p)||f.endsWith(g,"[]"))&&(y=f.toArray(p)))return g=Yr(g),y.forEach(function(S,R){!(f.isUndefined(S)||S===null)&&e.append(o===!0?Rs([g],R,r):o===null?g:g+"[]",l(S))}),!1}return ci(p)?!0:(e.append(Rs(m,g,r),l(p)),!1)}const u=[],h=Object.assign(Jl,{defaultVisitor:d,convertValue:l,isVisitable:ci});function _(p,g){if(!f.isUndefined(p)){if(u.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));u.push(p),f.forEach(p,function(y,v){(!(f.isUndefined(y)||y===null)&&s.call(e,y,f.isString(v)?v.trim():v,g,h))===!0&&_(y,g?g.concat(v):[v])}),u.pop()}}if(!f.isObject(t))throw new TypeError("data must be an object");return _(t),e}function As(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Oi(t,e){this._pairs=[],t&&Rn(t,this,e)}const Qr=Oi.prototype;Qr.append=function(e,n){this._pairs.push([e,n])};Qr.toString=function(e){const n=e?function(i){return e.call(this,i,As)}:As;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Xl(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jr(t,e,n){if(!e)return t;const i=n&&n.encode||Xl;f.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let r;if(s?r=s(e,n):r=f.isURLSearchParams(e)?e.toString():new Oi(e,n).toString(i),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Ns{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){f.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Xr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zl=typeof URLSearchParams<"u"?URLSearchParams:Oi,ec=typeof FormData<"u"?FormData:null,tc=typeof Blob<"u"?Blob:null,nc={isBrowser:!0,classes:{URLSearchParams:Zl,FormData:ec,Blob:tc},protocols:["http","https","file","blob","url","data"]},Fi=typeof window<"u"&&typeof document<"u",ui=typeof navigator=="object"&&navigator||void 0,ic=Fi&&(!ui||["ReactNative","NativeScript","NS"].indexOf(ui.product)<0),sc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rc=Fi&&window.location.href||"http://localhost",oc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fi,hasStandardBrowserEnv:ic,hasStandardBrowserWebWorkerEnv:sc,navigator:ui,origin:rc},Symbol.toStringTag,{value:"Module"})),z={...oc,...nc};function ac(t,e){return Rn(t,new z.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,r){return z.isNode&&f.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function lc(t){return f.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cc(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function Zr(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=r>=n.length;return o=!o&&f.isArray(s)?s.length:o,c?(f.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!f.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&f.isArray(s[o])&&(s[o]=cc(s[o])),!a)}if(f.isFormData(t)&&f.isFunction(t.entries)){const n={};return f.forEachEntry(t,(i,s)=>{e(lc(i),s,n,0)}),n}return null}function uc(t,e,n){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Wt={transitional:Xr,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=f.isObject(e);if(r&&f.isHTMLForm(e)&&(e=new FormData(e)),f.isFormData(e))return s?JSON.stringify(Zr(e)):e;if(f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)||f.isReadableStream(e))return e;if(f.isArrayBufferView(e))return e.buffer;if(f.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ac(e,this.formSerializer).toString();if((a=f.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rn(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),uc(e)):e}],transformResponse:[function(e){const n=this.transitional||Wt.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(f.isResponse(e)||f.isReadableStream(e))return e;if(e&&f.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?b.from(a,b.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:z.classes.FormData,Blob:z.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};f.forEach(["delete","get","head","post","put","patch"],t=>{Wt.headers[t]={}});const dc=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hc=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&dc[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},xs=Symbol("internals");function ft(t){return t&&String(t).trim().toLowerCase()}function en(t){return t===!1||t==null?t:f.isArray(t)?t.map(en):String(t)}function fc(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const pc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function jn(t,e,n,i,s){if(f.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!f.isString(e)){if(f.isString(i))return e.indexOf(i)!==-1;if(f.isRegExp(i))return i.test(e)}}function _c(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function mc(t,e){const n=f.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let X=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,c,l){const d=ft(c);if(!d)throw new Error("header name must be a non-empty string");const u=f.findKey(s,d);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=en(a))}const o=(a,c)=>f.forEach(a,(l,d)=>r(l,d,c));if(f.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(f.isString(e)&&(e=e.trim())&&!pc(e))o(hc(e),n);else if(f.isHeaders(e))for(const[a,c]of e.entries())r(c,a,i);else e!=null&&r(n,e,i);return this}get(e,n){if(e=ft(e),e){const i=f.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return fc(s);if(f.isFunction(n))return n.call(this,s,i);if(f.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ft(e),e){const i=f.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||jn(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=ft(o),o){const a=f.findKey(i,o);a&&(!n||jn(i,i[a],a,n))&&(delete i[a],s=!0)}}return f.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||jn(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return f.forEach(this,(s,r)=>{const o=f.findKey(i,r);if(o){n[o]=en(s),delete n[r];return}const a=e?_c(r):String(r).trim();a!==r&&delete n[r],n[a]=en(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return f.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&f.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[xs]=this[xs]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=ft(o);i[a]||(mc(s,o),i[a]=!0)}return f.isArray(e)?e.forEach(r):r(e),this}};X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.reduceDescriptors(X.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});f.freezeMethods(X);function zn(t,e){const n=this||Wt,i=e||n,s=X.from(i.headers);let r=i.data;return f.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function eo(t){return!!(t&&t.__CANCEL__)}function lt(t,e,n){b.call(this,t??"canceled",b.ERR_CANCELED,e,n),this.name="CanceledError"}f.inherits(lt,b,{__CANCEL__:!0});function to(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gc(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function yc(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),d=i[r];o||(o=l),n[s]=c,i[s]=l;let u=r,h=0;for(;u!==s;)h+=n[u++],u=u%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),l-o<e)return;const _=d&&l-d;return _?Math.round(h*1e3/_):void 0}}function wc(t,e){let n=0,i=1e3/e,s,r;const o=(l,d=Date.now())=>{n=d,s=null,r&&(clearTimeout(r),r=null),t.apply(null,l)};return[(...l)=>{const d=Date.now(),u=d-n;u>=i?o(l,d):(s=l,r||(r=setTimeout(()=>{r=null,o(s)},i-u)))},()=>s&&o(s)]}const sn=(t,e,n=3)=>{let i=0;const s=yc(50,250);return wc(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,c=o-i,l=s(c),d=o<=a;i=o;const u={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&d?(a-o)/l:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(u)},n)},Ps=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},ks=t=>(...e)=>f.asap(()=>t(...e)),vc=z.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,z.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(z.origin),z.navigator&&/(msie|trident)/i.test(z.navigator.userAgent)):()=>!0,Ec=z.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const o=[t+"="+encodeURIComponent(e)];f.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),f.isString(i)&&o.push("path="+i),f.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bc(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Cc(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function no(t,e){return t&&!bc(e)?Cc(t,e):e}const Ds=t=>t instanceof X?{...t}:t;function Ue(t,e){e=e||{};const n={};function i(l,d,u,h){return f.isPlainObject(l)&&f.isPlainObject(d)?f.merge.call({caseless:h},l,d):f.isPlainObject(d)?f.merge({},d):f.isArray(d)?d.slice():d}function s(l,d,u,h){if(f.isUndefined(d)){if(!f.isUndefined(l))return i(void 0,l,u,h)}else return i(l,d,u,h)}function r(l,d){if(!f.isUndefined(d))return i(void 0,d)}function o(l,d){if(f.isUndefined(d)){if(!f.isUndefined(l))return i(void 0,l)}else return i(void 0,d)}function a(l,d,u){if(u in e)return i(l,d);if(u in t)return i(void 0,l)}const c={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,d,u)=>s(Ds(l),Ds(d),u,!0)};return f.forEach(Object.keys(Object.assign({},t,e)),function(d){const u=c[d]||s,h=u(t[d],e[d],d);f.isUndefined(h)&&u!==a||(n[d]=h)}),n}const io=t=>{const e=Ue({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=X.from(o),e.url=Jr(no(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(f.isFormData(n)){if(z.hasStandardBrowserEnv||z.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...d]=c?c.split(";").map(u=>u.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...d].join("; "))}}if(z.hasStandardBrowserEnv&&(i&&f.isFunction(i)&&(i=i(e)),i||i!==!1&&vc(e.url))){const l=s&&r&&Ec.read(r);l&&o.set(s,l)}return e},Sc=typeof XMLHttpRequest<"u",Tc=Sc&&function(t){return new Promise(function(n,i){const s=io(t);let r=s.data;const o=X.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,d,u,h,_,p;function g(){_&&_(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function y(){if(!m)return;const S=X.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),D={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:S,config:t,request:m};to(function(he){n(he),g()},function(he){i(he),g()},D),m=null}"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(y)},m.onabort=function(){m&&(i(new b("Request aborted",b.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new b("Network Error",b.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let R=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||Xr;s.timeoutErrorMessage&&(R=s.timeoutErrorMessage),i(new b(R,D.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,t,m)),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&f.forEach(o.toJSON(),function(R,D){m.setRequestHeader(D,R)}),f.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),l&&([h,p]=sn(l,!0),m.addEventListener("progress",h)),c&&m.upload&&([u,_]=sn(c),m.upload.addEventListener("progress",u),m.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(d=S=>{m&&(i(!S||S.type?new lt(null,t,m):S),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const v=gc(s.url);if(v&&z.protocols.indexOf(v)===-1){i(new b("Unsupported protocol "+v+":",b.ERR_BAD_REQUEST,t));return}m.send(r||null)})},Ic=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(l){if(!s){s=!0,a();const d=l instanceof Error?l:this.reason;i.abort(d instanceof b?d:new lt(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,r(new b(`timeout ${e} of ms exceeded`,b.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>l.addEventListener("abort",r));const{signal:c}=i;return c.unsubscribe=()=>f.asap(a),c}},Rc=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},Ac=async function*(t,e){for await(const n of Nc(t))yield*Rc(n,e)},Nc=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Os=(t,e,n,i)=>{const s=Ac(t,e);let r=0,o,a=c=>{o||(o=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:l,value:d}=await s.next();if(l){a(),c.close();return}let u=d.byteLength;if(n){let h=r+=u;n(h)}c.enqueue(new Uint8Array(d))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},An=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",so=An&&typeof ReadableStream=="function",xc=An&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),ro=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Pc=so&&ro(()=>{let t=!1;const e=new Request(z.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Fs=64*1024,di=so&&ro(()=>f.isReadableStream(new Response("").body)),rn={stream:di&&(t=>t.body)};An&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!rn[e]&&(rn[e]=f.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new b(`Response type '${e}' is not supported`,b.ERR_NOT_SUPPORT,i)})})})(new Response);const kc=async t=>{if(t==null)return 0;if(f.isBlob(t))return t.size;if(f.isSpecCompliantForm(t))return(await new Request(z.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(f.isArrayBufferView(t)||f.isArrayBuffer(t))return t.byteLength;if(f.isURLSearchParams(t)&&(t=t+""),f.isString(t))return(await xc(t)).byteLength},Dc=async(t,e)=>{const n=f.toFiniteNumber(t.getContentLength());return n??kc(e)},Oc=An&&(async t=>{let{url:e,method:n,data:i,signal:s,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:d,withCredentials:u="same-origin",fetchOptions:h}=io(t);l=l?(l+"").toLowerCase():"text";let _=Ic([s,r&&r.toAbortSignal()],o),p;const g=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let m;try{if(c&&Pc&&n!=="get"&&n!=="head"&&(m=await Dc(d,i))!==0){let D=new Request(e,{method:"POST",body:i,duplex:"half"}),V;if(f.isFormData(i)&&(V=D.headers.get("content-type"))&&d.setContentType(V),D.body){const[he,Ke]=Ps(m,sn(ks(c)));i=Os(D.body,Fs,he,Ke)}}f.isString(u)||(u=u?"include":"omit");const y="credentials"in Request.prototype;p=new Request(e,{...h,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:i,duplex:"half",credentials:y?u:void 0});let v=await fetch(p);const S=di&&(l==="stream"||l==="response");if(di&&(a||S&&g)){const D={};["status","statusText","headers"].forEach(Ss=>{D[Ss]=v[Ss]});const V=f.toFiniteNumber(v.headers.get("content-length")),[he,Ke]=a&&Ps(V,sn(ks(a),!0))||[];v=new Response(Os(v.body,Fs,he,()=>{Ke&&Ke(),g&&g()}),D)}l=l||"text";let R=await rn[f.findKey(rn,l)||"text"](v,t);return!S&&g&&g(),await new Promise((D,V)=>{to(D,V,{data:R,headers:X.from(v.headers),status:v.status,statusText:v.statusText,config:t,request:p})})}catch(y){throw g&&g(),y&&y.name==="TypeError"&&/fetch/i.test(y.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,t,p),{cause:y.cause||y}):b.from(y,y&&y.code,t,p)}}),hi={http:Yl,xhr:Tc,fetch:Oc};f.forEach(hi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ms=t=>`- ${t}`,Fc=t=>f.isFunction(t)||t===null||t===!1,oo={getAdapter:t=>{t=f.isArray(t)?t:[t];const{length:e}=t;let n,i;const s={};for(let r=0;r<e;r++){n=t[r];let o;if(i=n,!Fc(n)&&(i=hi[(o=String(n)).toLowerCase()],i===void 0))throw new b(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(Ms).join(`
`):" "+Ms(r[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:hi};function Gn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new lt(null,t)}function Ls(t){return Gn(t),t.headers=X.from(t.headers),t.data=zn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),oo.getAdapter(t.adapter||Wt.adapter)(t).then(function(i){return Gn(t),i.data=zn.call(t,t.transformResponse,i),i.headers=X.from(i.headers),i},function(i){return eo(i)||(Gn(t),i&&i.response&&(i.response.data=zn.call(t,t.transformResponse,i.response),i.response.headers=X.from(i.response.headers))),Promise.reject(i)})}const ao="1.7.9",Nn={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Nn[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const $s={};Nn.transitional=function(e,n,i){function s(r,o){return"[Axios v"+ao+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new b(s(o," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!$s[o]&&($s[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Nn.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Mc(t,e,n){if(typeof t!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],c=a===void 0||o(a,r,t);if(c!==!0)throw new b("option "+r+" must be "+c,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+r,b.ERR_BAD_OPTION)}}const tn={assertOptions:Mc,validators:Nn},ce=tn.validators;let Fe=class{constructor(e){this.defaults=e,this.interceptors={request:new Ns,response:new Ns}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ue(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&tn.assertOptions(i,{silentJSONParsing:ce.transitional(ce.boolean),forcedJSONParsing:ce.transitional(ce.boolean),clarifyTimeoutError:ce.transitional(ce.boolean)},!1),s!=null&&(f.isFunction(s)?n.paramsSerializer={serialize:s}:tn.assertOptions(s,{encode:ce.function,serialize:ce.function},!0)),tn.assertOptions(n,{baseUrl:ce.spelling("baseURL"),withXsrfToken:ce.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&f.merge(r.common,r[n.method]);r&&f.forEach(["delete","get","head","post","put","patch","common"],p=>{delete r[p]}),n.headers=X.concat(o,r);const a=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(c=c&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let d,u=0,h;if(!c){const p=[Ls.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),h=p.length,d=Promise.resolve(n);u<h;)d=d.then(p[u++],p[u++]);return d}h=a.length;let _=n;for(u=0;u<h;){const p=a[u++],g=a[u++];try{_=p(_)}catch(m){g.call(this,m);break}}try{d=Ls.call(this,_)}catch(p){return Promise.reject(p)}for(u=0,h=l.length;u<h;)d=d.then(l[u++],l[u++]);return d}getUri(e){e=Ue(this.defaults,e);const n=no(e.baseURL,e.url);return Jr(n,e.params,e.paramsSerializer)}};f.forEach(["delete","get","head","options"],function(e){Fe.prototype[e]=function(n,i){return this.request(Ue(i||{},{method:e,url:n,data:(i||{}).data}))}});f.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Ue(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Fe.prototype[e]=n(),Fe.prototype[e+"Form"]=n(!0)});let Lc=class lo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new lt(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new lo(function(s){e=s}),cancel:e}}};function $c(t){return function(n){return t.apply(null,n)}}function Uc(t){return f.isObject(t)&&t.isAxiosError===!0}const fi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fi).forEach(([t,e])=>{fi[e]=t});function co(t){const e=new Fe(t),n=Ur(Fe.prototype.request,e);return f.extend(n,Fe.prototype,e,{allOwnKeys:!0}),f.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return co(Ue(t,s))},n}const M=co(Wt);M.Axios=Fe;M.CanceledError=lt;M.CancelToken=Lc;M.isCancel=eo;M.VERSION=ao;M.toFormData=Rn;M.AxiosError=b;M.Cancel=M.CanceledError;M.all=function(e){return Promise.all(e)};M.spread=$c;M.isAxiosError=Uc;M.mergeConfig=Ue;M.AxiosHeaders=X;M.formToJSON=t=>Zr(f.isHTMLForm(t)?new FormData(t):t);M.getAdapter=oo.getAdapter;M.HttpStatusCode=fi;M.default=M;const{Axios:um,AxiosError:dm,CanceledError:hm,isCancel:fm,CancelToken:pm,VERSION:_m,all:mm,Cancel:gm,isAxiosError:ym,spread:wm,toFormData:vm,AxiosHeaders:Em,HttpStatusCode:bm,formToJSON:Cm,getAdapter:Sm,mergeConfig:Tm}=M;window.axios=M;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var Us={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw ct(e)},ct=function(t){return new Error("Firebase Database ("+uo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(h=64)),i.push(n[d],n[u],n[h],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ho(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new Vc;const h=r<<2|a>>4;if(i.push(h),l!==64){const _=a<<4&240|l>>2;if(i.push(_),u!==64){const p=l<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fo=function(t){const e=ho(t);return Mi.encodeByteArray(e,!0)},on=function(t){return fo(t).replace(/\./g,"")},pi=function(t){try{return Mi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return po(void 0,t)}function po(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hc(n)||(t[n]=po(t[n],e[n]));return t}function Hc(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=()=>qc().__FIREBASE_DEFAULTS__,zc=()=>{if(typeof process>"u"||typeof Us>"u")return;const t=Us.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pi(t[1]);return e&&JSON.parse(e)},_o=()=>{try{return jc()||zc()||Gc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kc=t=>{var e,n;return(n=(e=_o())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yc=t=>{const e=Kc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},mo=()=>{var t;return(t=_o())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[on(JSON.stringify(n)),on(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function go(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jc())}function Xc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eu(){return uo.NODE_ADMIN===!0}function yo(){try{return typeof indexedDB=="object"}catch{return!1}}function wo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function tu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="FirebaseError";class je extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=nu,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?iu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new je(s,a,i)}}function iu(t,e){return t.replace(su,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const su=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return JSON.parse(t)}function B(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=At(pi(r[0])||""),n=At(pi(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},ru=function(t){const e=vo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ou=function(t){const e=vo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function an(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ln(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Vs(r)&&Vs(o)){if(!ln(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Vs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Pn(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,w(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=1e3,du=2,hu=4*60*60*1e3,fu=.5;function Ws(t,e=uu,n=du){const i=e*Math.pow(n,t),s=Math.round(fu*i*(Math.random()-.5)*2);return Math.min(hu,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class _e{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ht;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mu(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_u(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _u(t){return t===xe?void 0:t}function mu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(P||(P={}));const yu={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},wu=P.INFO,vu={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Eu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=vu[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Li{constructor(e){this.name=e,this._logLevel=wu,this._logHandler=Eu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const bu=(t,e)=>e.some(n=>t instanceof n);let Hs,qs;function Cu(){return Hs||(Hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Su(){return qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eo=new WeakMap,_i=new WeakMap,bo=new WeakMap,Kn=new WeakMap,$i=new WeakMap;function Tu(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(be(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eo.set(n,t)}).catch(()=>{}),$i.set(e,t),e}function Iu(t){if(_i.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_i.set(t,e)}let mi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _i.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ru(t){mi=t(mi)}function Au(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Yn(this),e,...n);return bo.set(i,e.sort?e.sort():[e]),be(i)}:Su().includes(t)?function(...e){return t.apply(Yn(this),e),be(Eo.get(this))}:function(...e){return be(t.apply(Yn(this),e))}}function Nu(t){return typeof t=="function"?Au(t):(t instanceof IDBTransaction&&Iu(t),bu(t,Cu())?new Proxy(t,mi):t)}function be(t){if(t instanceof IDBRequest)return Tu(t);if(Kn.has(t))return Kn.get(t);const e=Nu(t);return e!==t&&(Kn.set(t,e),$i.set(e,t)),e}const Yn=t=>$i.get(t);function Co(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=be(o);return i&&o.addEventListener("upgradeneeded",c=>{i(be(o.result),c.oldVersion,c.newVersion,be(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const xu=["get","getKey","getAll","getAllKeys","count"],Pu=["put","add","delete","clear"],Qn=new Map;function js(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qn.get(e))return Qn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Pu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||xu.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qn.set(e,r),r}Ru(t=>({...t,get:(e,n,i)=>js(e,n)||t.get(e,n,i),has:(e,n)=>!!js(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Du(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Du(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gi="@firebase/app",zs="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Li("@firebase/app"),Ou="@firebase/app-compat",Fu="@firebase/analytics-compat",Mu="@firebase/analytics",Lu="@firebase/app-check-compat",$u="@firebase/app-check",Uu="@firebase/auth",Bu="@firebase/auth-compat",Vu="@firebase/database",Wu="@firebase/data-connect",Hu="@firebase/database-compat",qu="@firebase/functions",ju="@firebase/functions-compat",zu="@firebase/installations",Gu="@firebase/installations-compat",Ku="@firebase/messaging",Yu="@firebase/messaging-compat",Qu="@firebase/performance",Ju="@firebase/performance-compat",Xu="@firebase/remote-config",Zu="@firebase/remote-config-compat",ed="@firebase/storage",td="@firebase/storage-compat",nd="@firebase/firestore",id="@firebase/vertexai",sd="@firebase/firestore-compat",rd="firebase",od="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]",ad={[gi]:"fire-core",[Ou]:"fire-core-compat",[Mu]:"fire-analytics",[Fu]:"fire-analytics-compat",[$u]:"fire-app-check",[Lu]:"fire-app-check-compat",[Uu]:"fire-auth",[Bu]:"fire-auth-compat",[Vu]:"fire-rtdb",[Wu]:"fire-data-connect",[Hu]:"fire-rtdb-compat",[qu]:"fire-fn",[ju]:"fire-fn-compat",[zu]:"fire-iid",[Gu]:"fire-iid-compat",[Ku]:"fire-fcm",[Yu]:"fire-fcm-compat",[Qu]:"fire-perf",[Ju]:"fire-perf-compat",[Xu]:"fire-rc",[Zu]:"fire-rc-compat",[ed]:"fire-gcs",[td]:"fire-gcs-compat",[nd]:"fire-fst",[sd]:"fire-fst-compat",[id]:"fire-vertex","fire-js":"fire-js",[rd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Map,ld=new Map,wi=new Map;function Gs(t,e){try{t.container.addComponent(e)}catch(n){me.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ie(t){const e=t.name;if(wi.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;wi.set(e,t);for(const n of cn.values())Gs(n,t);for(const n of ld.values())Gs(n,t);return!0}function qt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cd(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new xn("app","Firebase",ud);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=od;function So(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ce.create("bad-app-name",{appName:String(s)});if(n||(n=mo()),!n)throw Ce.create("no-options");const r=cn.get(s);if(r){if(ln(n,r.options)&&ln(i,r.config))return r;throw Ce.create("duplicate-app",{appName:s})}const o=new gu(s);for(const c of wi.values())o.addComponent(c);const a=new dd(n,i,o);return cn.set(s,a),a}function To(t=yi){const e=cn.get(t);if(!e&&t===yi&&mo())return So();if(!e)throw Ce.create("no-app",{appName:t});return e}function ue(t,e,n){var i;let s=(i=ad[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(a.join(" "));return}Ie(new _e(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firebase-heartbeat-database",pd=1,Nt="firebase-heartbeat-store";let Jn=null;function Io(){return Jn||(Jn=Co(fd,pd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ce.create("idb-open",{originalErrorMessage:t.message})})),Jn}async function _d(t){try{const n=(await Io()).transaction(Nt),i=await n.objectStore(Nt).get(Ro(t));return await n.done,i}catch(e){if(e instanceof je)me.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(n.message)}}}async function Ks(t,e){try{const i=(await Io()).transaction(Nt,"readwrite");await i.objectStore(Nt).put(e,Ro(t)),await i.done}catch(n){if(n instanceof je)me.warn(n.message);else{const i=Ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});me.warn(i.message)}}}function Ro(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=1024,gd=30;class yd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ys();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>gd){const o=Ed(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){me.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ys(),{heartbeatsToSend:i,unsentEntries:s}=wd(this._heartbeatsCache.heartbeats),r=on(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return me.warn(n),""}}}function Ys(){return new Date().toISOString().substring(0,10)}function wd(t,e=md){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Qs(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yo()?wo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _d(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qs(t){return on(JSON.stringify({version:2,heartbeats:t})).length}function Ed(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){Ie(new _e("platform-logger",e=>new ku(e),"PRIVATE")),Ie(new _e("heartbeat",e=>new yd(e),"PRIVATE")),ue(gi,zs,t),ue(gi,zs,"esm2017"),ue("fire-js","")}bd("");var Cd="firebase",Sd="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(Cd,Sd,"app");var Js={};const Xs="@firebase/database",Zs="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="";function Td(t){Ao=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:At(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Id(e)}}catch{}return new Rd},De=No("localStorage"),Ad=No("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Li("@firebase/database"),Nd=function(){let t=1;return function(){return t++}}(),xo=function(t){const e=cu(t),n=new lu;n.update(e);const i=n.digest();return Mi.encodeByteArray(i)},jt=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=jt.apply(null,i):typeof i=="object"?e+=B(i):e+=i,e+=" "}return e};let Et=null,er=!0;const xd=function(t,e){w(!0,"Can't turn on custom loggers persistently."),Ze.logLevel=P.VERBOSE,Et=Ze.log.bind(Ze)},q=function(...t){if(er===!0&&(er=!1,Et===null&&Ad.get("logging_enabled")===!0&&xd()),Et){const e=jt.apply(null,t);Et(e)}},zt=function(t){return function(...e){q(t,...e)}},vi=function(...t){const e="FIREBASE INTERNAL ERROR: "+jt(...t);Ze.error(e)},ge=function(...t){const e=`FIREBASE FATAL ERROR: ${jt(...t)}`;throw Ze.error(e),new Error(e)},Q=function(...t){const e="FIREBASE WARNING: "+jt(...t);Ze.warn(e)},Pd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ui=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kd=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nt="[MIN_NAME]",Be="[MAX_NAME]",ze=function(t,e){if(t===e)return 0;if(t===nt||e===Be)return-1;if(e===nt||t===Be)return 1;{const n=tr(t),i=tr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Dd=function(t,e){return t===e?0:t<e?-1:1},pt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+B(e))},Bi=function(t){if(typeof t!="object"||t===null)return B(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=B(e[i]),n+=":",n+=Bi(t[e[i]]);return n+="}",n},Po=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ko=function(t){w(!Ui(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Od=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fd=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Md(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Ld=new RegExp("^-?(0*)\\d{1,10}$"),$d=-2147483648,Ud=2147483647,tr=function(t){if(Ld.test(t)){const e=Number(t);if(e>=$d&&e<=Ud)return e}return null},ut=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Q("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,cd(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="5",Do="v",Oo="s",Fo="r",Mo="f",Lo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$o="ls",Uo="p",Ei="ac",Bo="websocket",Vo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=De.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&De.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Hd(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ho(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let i;if(e===Bo)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vo)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hd(t)&&(n.ns=t.namespace);const s=[];return j(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.counters_={}}incrementCounter(e,n=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={},Zn={};function Wi(t){const e=t.toString();return Xn[e]||(Xn[e]=new qd),Xn[e]}function jd(t,e){const n=t.toString();return Zn[n]||(Zn[n]=e()),Zn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ut(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="start",Gd="close",Kd="pLPCommand",Yd="pRTLPCB",qo="id",jo="pw",zo="ser",Qd="cb",Jd="seg",Xd="ts",Zd="d",eh="dframe",Go=1870,Ko=30,th=Go-Ko,nh=25e3,ih=3e4;class Xe{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zt(e),this.stats_=Wi(n),this.urlFn=c=>(this.appCheckToken&&(c[Ei]=this.appCheckToken),Ho(n,Vo,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ih)),kd(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hi((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===nr)this.id=a,this.password=c;else if(o===Gd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[nr]="t",i[zo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Qd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Do]=Vi,this.transportSessionId&&(i[Oo]=this.transportSessionId),this.lastSessionId&&(i[$o]=this.lastSessionId),this.applicationId&&(i[Uo]=this.applicationId),this.appCheckToken&&(i[Ei]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lo.test(location.hostname)&&(i[Fo]=Mo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xe.forceAllow_=!0}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){return Xe.forceAllow_?!0:!Xe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Od()&&!Fd()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=B(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fo(n),s=Po(i,th);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[eh]="t",i[qo]=e,i[jo]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=B(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hi{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nd(),window[Kd+this.uniqueCallbackIdentifier]=e,window[Yd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){q("frame writing exception"),a.stack&&q(a.stack),q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qo]=this.myID,e[jo]=this.myPW,e[zo]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ko+i.length<=Go;){const o=this.pendingSegs.shift();i=i+"&"+Jd+s+"="+o.seg+"&"+Xd+s+"="+o.ts+"&"+Zd+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(nh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=16384,rh=45e3;let un=null;typeof MozWebSocket<"u"?un=MozWebSocket:typeof WebSocket<"u"&&(un=WebSocket);class re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zt(this.connId),this.stats_=Wi(n),this.connURL=re.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Do]=Vi,typeof location<"u"&&location.hostname&&Lo.test(location.hostname)&&(o[Fo]=Mo),n&&(o[Oo]=n),i&&(o[$o]=i),s&&(o[Ei]=s),r&&(o[Uo]=r),Ho(e,Bo,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,De.set("previous_websocket_failure",!0);try{let i;eu(),this.mySock=new un(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&un!==null&&!re.forceDisallow_}static previouslyFailed(){return De.isInMemoryStorage||De.get("previous_websocket_failure")===!0}markConnectionHealthy(){De.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=At(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=B(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Po(n,sh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{static get ALL_TRANSPORTS(){return[Xe,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=re&&re.isAvailable();let i=n&&!re.previouslyFailed();if(e.webSocketOnly&&(n||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[re];else{const s=this.transports_=[];for(const r of xt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);xt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=6e4,ah=5e3,lh=10*1024,ch=100*1024,ei="t",ir="d",uh="s",sr="r",dh="e",rr="o",or="a",ar="n",lr="p",hh="h";class fh{constructor(e,n,i,s,r,o,a,c,l,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zt("c:"+this.id+":"),this.transportManager_=new xt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=bt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ch?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ei in e){const n=e[ei];n===or?this.upgradeIfSecondaryHealthy_():n===sr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pt("t",e),i=pt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:or,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ar,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pt("t",e),i=pt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pt(ei,e);if(ir in e){const i=e[ir];if(n===hh){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ar){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uh?this.onConnectionShutdown_(i):n===sr?this.onReset_(i):n===dh?vi("Server Error: "+i):n===rr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vi!==i&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),bt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ah))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(De.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Qo{static getInstance(){return new dn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!go()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=32,ur=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function A(){return new N("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Re(t){return t.pieces_.length-t.pieceNum_}function k(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function qi(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ph(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jo(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function O(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof N)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new N(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function Y(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return Y(k(t),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _h(t,e){const n=Pt(t,0),i=Pt(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=ze(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Xo(t,e){if(Re(t)!==Re(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ie(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Re(t)>Re(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class mh{constructor(e,n){this.errorPrefix_=n,this.parts_=Pt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=kn(this.parts_[i]);Zo(this)}}function gh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kn(e),Zo(t)}function yh(t){const e=t.parts_.pop();t.byteLength_-=kn(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zo(t){if(t.byteLength_>ur)throw new Error(t.errorPrefix_+"has a key path longer than "+ur+" bytes ("+t.byteLength_+").");if(t.parts_.length>cr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cr+") or object contains a cycle "+Pe(t))}function Pe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Qo{static getInstance(){return new ji}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=1e3,wh=60*5*1e3,dr=30*1e3,vh=1.3,Eh=3e4,bh="server_kill",hr=3;class pe extends Yo{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=pe.nextPersistentConnectionId_++,this.log_=zt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_t,this.maxReconnectDelay_=wh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ji.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(B(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ht,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;pe.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&de(e,"w")){const i=tt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ou(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ru(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vi("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Eh&&(this.reconnectDelay_=_t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new fh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{Q(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(bh)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Q(u),c())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bs(this.interruptReasons_)&&(this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Bi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new N(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){q("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hr&&(this.reconnectDelay_=dr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){q("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ao.replace(/\./g,"-")]=1,go()?e["framework.cordova"]=1:Zc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dn.getInstance().currentlyOnline();return Bs(this.interruptReasons_)&&e}}pe.nextPersistentConnectionId_=0;pe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new C(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new C(nt,e),s=new C(nt,n);return this.compare(i,s)!==0}minPost(){return C.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;class ea extends Dn{static get __EMPTY_NODE(){return Jt}static set __EMPTY_NODE(e){Jt=e}compare(e,n){return ze(e.name,n.name)}isDefinedOn(e){throw ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return C.MIN}maxPost(){return new C(Be,Jt)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new C(e,Jt)}toString(){return".key"}}const et=new ea;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class H{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??H.RED,this.left=s??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,n,i,s,r){return new H(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}H.RED=!0;H.BLACK=!1;class Ch{copy(e,n,i,s,r){return this}insert(e,n,i){return new H(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,n=J.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new J(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,H.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,H.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xt(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new Ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){return ze(t.name,e.name)}function zi(t,e){return ze(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;function Th(t){bi=t}const ta=function(t){return typeof t=="number"?"number:"+ko(t):"string:"+t},na=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else w(t===bi||t.isEmpty(),"priority of unexpected type.");w(t===bi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class W{static set __childrenNodeConstructor(e){fr=e}static get __childrenNodeConstructor(){return fr}constructor(e,n=W.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),na(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new W(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:I(e)===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:W.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,W.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ta(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ko(this.value_):e+=this.value_,this.lazyHash_=xo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===W.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof W.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=W.VALUE_TYPE_ORDER.indexOf(n),r=W.VALUE_TYPE_ORDER.indexOf(i);return w(s>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}W.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia,sa;function Ih(t){ia=t}function Rh(t){sa=t}class Ah extends Dn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ze(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return C.MIN}maxPost(){return new C(Be,new W("[PRIORITY-POST]",sa))}makePost(e,n){const i=ia(e);return new C(n,new W("[PRIORITY-POST]",i))}toString(){return".priority"}}const F=new Ah;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=Math.log(2);class xh{constructor(e){const n=r=>parseInt(Math.log(r)/Nh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(t,e,n,i){t.sort(e);const s=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=t[c],h=n?n(u):u,new H(h,u.node,H.BLACK,null,null);{const _=parseInt(d/2,10)+c,p=s(c,_),g=s(_+1,l);return u=t[_],h=n?n(u):u,new H(h,u.node,H.BLACK,p,g)}},r=function(c){let l=null,d=null,u=t.length;const h=function(p,g){const m=u-p,y=u;u-=p;const v=s(m+1,y),S=t[m],R=n?n(S):S;_(new H(R,S.node,g,null,v))},_=function(p){l?(l.left=p,l=p):(d=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(p+1));g?h(m,H.BLACK):(h(m,H.BLACK),h(m,H.RED))}return d},o=new xh(t.length),a=r(o);return new J(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;const Ye={};class fe{static get Default(){return w(Ye&&F,"ChildrenNode.ts has not been loaded"),ti=ti||new fe({".priority":Ye},{".priority":F}),ti}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=tt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof J?n:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,n){w(e!==et,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(C.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=hn(i,e.getCompare()):a=Ye;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new fe(d,l)}addToIndexes(e,n){const i=an(this.indexes_,(s,r)=>{const o=tt(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),s===Ye)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(C.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),hn(a,o.getCompare())}else return Ye;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new C(e.name,a))),c.insert(e,e.node)}});return new fe(i,this.indexSet_)}removeFromIndexes(e,n){const i=an(this.indexes_,s=>{if(s===Ye)return s;{const r=n.get(e.name);return r?s.remove(new C(e.name,r)):s}});return new fe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt;class E{static get EMPTY_NODE(){return mt||(mt=new E(new J(zi),null,fe.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&na(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mt}updatePriority(e){return this.children_.isEmpty()?this:new E(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new C(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?mt:this.priorityNode_;return new E(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{w(I(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(k(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(F,(o,a)=>{n[o]=a.val(e),i++,r&&E.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ta(this.getPriority().val())+":"),this.forEachChild(F,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":xo(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new C(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new C(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new C(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gt?-1:0}withIndex(e){if(e===et||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new E(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===et||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(F),s=n.getIterator(F);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===et?null:this.indexMap_.get(e.toString())}}E.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ph extends E{constructor(){super(new J(zi),E.EMPTY_NODE,fe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return E.EMPTY_NODE}isEmpty(){return!1}}const Gt=new Ph;Object.defineProperties(C,{MIN:{value:new C(nt,E.EMPTY_NODE)},MAX:{value:new C(Be,Gt)}});ea.__EMPTY_NODE=E.EMPTY_NODE;W.__childrenNodeConstructor=E;Th(Gt);Rh(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=!0;function U(t,e=null){if(t===null)return E.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new W(n,U(e))}if(!(t instanceof Array)&&kh){const n=[];let i=!1;if(j(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=U(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new C(o,c)))}}),n.length===0)return E.EMPTY_NODE;const r=hn(n,Sh,o=>o.name,zi);if(i){const o=hn(n,F.getCompare());return new E(r,U(e),new fe({".priority":o},{".priority":F}))}else return new E(r,U(e),fe.Default)}else{let n=E.EMPTY_NODE;return j(t,(i,s)=>{if(de(t,i)&&i.substring(0,1)!=="."){const r=U(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(U(e))}}Ih(U);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Dn{constructor(e){super(),this.indexPath_=e,w(!T(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ze(e.name,n.name):r}makePost(e,n){const i=U(e),s=E.EMPTY_NODE.updateChild(this.indexPath_,i);return new C(n,s)}maxPost(){const e=E.EMPTY_NODE.updateChild(this.indexPath_,Gt);return new C(Be,e)}toString(){return Pt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends Dn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ze(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return C.MIN}maxPost(){return C.MAX}makePost(e,n){const i=U(e);return new C(n,i)}toString(){return".value"}}const Fh=new Oh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){return{type:"value",snapshotNode:t}}function it(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Mh(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(kt(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(it(n,i)):o.trackChildChange(Dt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(F,(s,r)=>{n.hasChild(s)||i.trackChildChange(kt(s,r))}),n.isLeafNode()||n.forEachChild(F,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Dt(s,r,o))}else i.trackChildChange(it(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?E.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.indexedFilter_=new Gi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ot.getStartPost_(e),this.endPost_=Ot.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new C(n,i))||(i=E.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=E.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(E.EMPTY_NODE);const r=this;return n.forEachChild(F,(o,a)=>{r.matches(new C(o,a))||(s=s.updateImmediateChild(o,E.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ot(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new C(n,i))||(i=E.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=E.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=E.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(E.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,E.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,_)=>u(_,h)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const c=new C(n,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,c);if(d&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Dt(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(kt(n,u));const g=a.updateImmediateChild(n,E.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(it(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return i.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(kt(l.name,l.node)),r.trackChildChange(it(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(l.name,E.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nt}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new Ki;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $h(t){return t.loadsAllData()?new Gi(t.getIndex()):t.hasLimit()?new Lh(t):new Ot(t)}function pr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===F?n="$priority":t.index_===Fh?n="$value":t.index_===et?n="$key":(w(t.index_ instanceof Dh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=B(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=B(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+B(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=B(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+B(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _r(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==F&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Yo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=zt("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fn.getListenId_(e,i),a={};this.listens_[o]=a;const c=pr(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),tt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,n){const i=fn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=pr(e._queryParams),i=e._path.toString(),s=new Ht;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+au(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=At(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.rootNode_=E.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return{value:null,children:new Map}}function oa(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,pn());const s=t.children.get(i);e=k(e),oa(s,e,n)}}function Ci(t,e,n){t.value!==null?n(e,t.value):Bh(t,(i,s)=>{const r=new N(e.toString()+"/"+i);Ci(s,r,n)})}function Bh(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&j(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=10*1e3,Wh=30*1e3,Hh=5*60*1e3;class qh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vh(e);const i=mr+(Wh-mr)*Math.random();bt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;j(e,(s,r)=>{r>0&&de(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),bt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Yi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ji(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=oe.ACK_USER_WRITE,this.source=Yi()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new _n(A(),n,this.revert)}}else return w(I(this.path)===e,"operationForChild called for unrelated child."),new _n(k(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.source=e,this.path=n,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new Ft(this.source,A()):new Ft(this.source,k(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=oe.OVERWRITE}operationForChild(e){return T(this.path)?new Ve(this.source,A(),this.snap.getImmediateChild(e)):new Ve(this.source,k(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=oe.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new Ve(this.source,A(),n.value):new st(this.source,A(),n)}else return w(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new st(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zh(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Mh(o.childName,o.snapshotNode))}),gt(t,s,"child_removed",e,i,n),gt(t,s,"child_added",e,i,n),gt(t,s,"child_moved",r,i,n),gt(t,s,"child_changed",e,i,n),gt(t,s,"value",e,i,n),s}function gt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Kh(t,a,c)),o.forEach(a=>{const c=Gh(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Gh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Kh(t,e,n){if(e.childName==null||n.childName==null)throw ct("Should only compare child_ events.");const i=new C(e.childName,e.snapshotNode),s=new C(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){return{eventCache:t,serverCache:e}}function Ct(t,e,n,i){return On(new Ae(e,n,i),t.serverCache)}function aa(t,e,n,i){return On(t.eventCache,new Ae(e,n,i))}function mn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function We(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;const Yh=()=>(ni||(ni=new J(Dd)),ni);class x{static fromObject(e){let n=new x(null);return j(e,(i,s)=>{n=n.set(new N(i),s)}),n}constructor(e,n=Yh()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:A(),value:this.value};if(T(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(k(e),n);return r!=null?{path:O(new N(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(k(e)):new x(null)}}set(e,n){if(T(e))return new x(n,this.children);{const i=I(e),r=(this.children.get(i)||new x(null)).set(k(e),n),o=this.children.insert(i,r);return new x(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new x(null):new x(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(k(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new x(null):new x(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(k(e)):null}}setTree(e,n){if(T(e))return n;{const i=I(e),r=(this.children.get(i)||new x(null)).setTree(k(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new x(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(O(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,A(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(T(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(k(e),O(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,A(),n)}foreachOnPath_(e,n,i){if(T(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(k(e),O(n,s),i):new x(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(O(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new x(null))}}function St(t,e,n){if(T(e))return new ae(new x(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Y(s,e);return r=r.updateChild(o,n),new ae(t.writeTree_.set(s,r))}else{const s=new x(n),r=t.writeTree_.setTree(e,s);return new ae(r)}}}function Si(t,e,n){let i=t;return j(n,(s,r)=>{i=St(i,O(e,s),r)}),i}function gr(t,e){if(T(e))return ae.empty();{const n=t.writeTree_.setTree(e,new x(null));return new ae(n)}}function Ti(t,e){return Ge(t,e)!=null}function Ge(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Y(n.path,e)):null}function yr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(F,(i,s)=>{e.push(new C(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new C(i,s.value))}),e}function Se(t,e){if(T(e))return t;{const n=Ge(t,e);return n!=null?new ae(new x(n)):new ae(t.writeTree_.subtree(e))}}function Ii(t){return t.writeTree_.isEmpty()}function rt(t,e){return la(A(),t.writeTree_,e)}function la(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=la(O(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(O(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){return ha(e,t)}function Qh(t,e,n,i,s){w(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=St(t.visibleWrites,e,n)),t.lastWriteId=i}function Jh(t,e,n,i){w(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Si(t.visibleWrites,e,n),t.lastWriteId=i}function Xh(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Zh(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ef(a,i.path)?s=!1:ie(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return tf(t),!0;if(i.snap)t.visibleWrites=gr(t.visibleWrites,i.path);else{const a=i.children;j(a,c=>{t.visibleWrites=gr(t.visibleWrites,O(i.path,c))})}return!0}else return!1}function ef(t,e){if(t.snap)return ie(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ie(O(t.path,n),e))return!0;return!1}function tf(t){t.visibleWrites=ca(t.allWrites,nf,A()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nf(t){return t.visible}function ca(t,e,n){let i=ae.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ie(n,o)?(a=Y(n,o),i=St(i,a,r.snap)):ie(o,n)&&(a=Y(o,n),i=St(i,A(),r.snap.getChild(a)));else if(r.children){if(ie(n,o))a=Y(n,o),i=Si(i,a,r.children);else if(ie(o,n))if(a=Y(o,n),T(a))i=Si(i,A(),r.children);else{const c=tt(r.children,I(a));if(c){const l=c.getChild(k(a));i=St(i,A(),l)}}}else throw ct("WriteRecord should have .snap or .children")}}return i}function ua(t,e,n,i,s){if(!i&&!s){const r=Ge(t.visibleWrites,e);if(r!=null)return r;{const o=Se(t.visibleWrites,e);if(Ii(o))return n;if(n==null&&!Ti(o,A()))return null;{const a=n||E.EMPTY_NODE;return rt(o,a)}}}else{const r=Se(t.visibleWrites,e);if(!s&&Ii(r))return n;if(!s&&n==null&&!Ti(r,A()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(ie(l.path,e)||ie(e,l.path))},a=ca(t.allWrites,o,e),c=n||E.EMPTY_NODE;return rt(a,c)}}}function sf(t,e,n){let i=E.EMPTY_NODE;const s=Ge(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(F,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Se(t.visibleWrites,e);return n.forEachChild(F,(o,a)=>{const c=rt(Se(r,new N(o)),a);i=i.updateImmediateChild(o,c)}),yr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Se(t.visibleWrites,e);return yr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function rf(t,e,n,i,s){w(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=O(e,n);if(Ti(t.visibleWrites,r))return null;{const o=Se(t.visibleWrites,r);return Ii(o)?s.getChild(n):rt(o,s.getChild(n))}}function of(t,e,n,i){const s=O(e,n),r=Ge(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Se(t.visibleWrites,s);return rt(o,i.getNode().getImmediateChild(n))}else return null}function af(t,e){return Ge(t.visibleWrites,e)}function lf(t,e,n,i,s,r,o){let a;const c=Se(t.visibleWrites,e),l=Ge(c,A());if(l!=null)a=l;else if(n!=null)a=rt(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=h.getNext();for(;_&&d.length<s;)u(_,i)!==0&&d.push(_),_=h.getNext();return d}else return[]}function cf(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function gn(t,e,n,i){return ua(t.writeTree,t.treePath,e,n,i)}function Xi(t,e){return sf(t.writeTree,t.treePath,e)}function wr(t,e,n,i){return rf(t.writeTree,t.treePath,e,n,i)}function yn(t,e){return af(t.writeTree,O(t.treePath,e))}function uf(t,e,n,i,s,r){return lf(t.writeTree,t.treePath,e,n,i,s,r)}function Zi(t,e,n){return of(t.writeTree,t.treePath,e,n)}function da(t,e){return ha(O(t.treePath,e),t.writeTree)}function ha(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Dt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,kt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,it(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Dt(i,e.snapshotNode,s.oldSnap));else throw ct("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const fa=new hf;class es{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ae(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zi(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:We(this.viewCache_),r=uf(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){return{filter:t}}function pf(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _f(t,e,n,i,s){const r=new df;let o,a;if(n.type===oe.OVERWRITE){const l=n;l.source.fromUser?o=Ri(t,e,l.path,l.snap,i,s,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!T(l.path),o=wn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===oe.MERGE){const l=n;l.source.fromUser?o=gf(t,e,l.path,l.children,i,s,r):(w(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Ai(t,e,l.path,l.children,i,s,a,r))}else if(n.type===oe.ACK_USER_WRITE){const l=n;l.revert?o=vf(t,e,l.path,i,s,r):o=yf(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===oe.LISTEN_COMPLETE)o=wf(t,e,n.path,i,r);else throw ct("Unknown operation type: "+n.type);const c=r.getChanges();return mf(e,o,c),{viewCache:o,changes:c}}function mf(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=mn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ra(mn(e)))}}function pa(t,e,n,i,s,r){const o=e.eventCache;if(yn(i,n)!=null)return e;{let a,c;if(T(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=We(e),d=l instanceof E?l:E.EMPTY_NODE,u=Xi(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=gn(i,We(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=I(n);if(l===".priority"){w(Re(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=wr(i,n,d,c);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=k(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=wr(i,n,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=Zi(i,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,d,s,r):a=o.getNode()}}return Ct(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function wn(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const d=o?t.filter:t.filter.getIndexedFilter();if(T(n))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,i);l=d.updateFullNode(c.getNode(),_,null)}else{const _=I(n);if(!c.isCompleteForPath(n)&&Re(n)>1)return e;const p=k(n),m=c.getNode().getImmediateChild(_).updateChild(p,i);_===".priority"?l=d.updatePriority(c.getNode(),m):l=d.updateChild(c.getNode(),_,m,p,fa,null)}const u=aa(e,l,c.isFullyInitialized()||T(n),d.filtersNodes()),h=new es(s,u,r);return pa(t,u,n,s,h,a)}function Ri(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const d=new es(s,e,r);if(T(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ct(e,l,!0,t.filter.filtersNodes());else{const u=I(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ct(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=k(n),_=a.getNode().getImmediateChild(u);let p;if(T(h))p=i;else{const g=d.getCompleteChild(u);g!=null?qi(h)===".priority"&&g.getChild(Jo(h)).isEmpty()?p=g:p=g.updateChild(h,i):p=E.EMPTY_NODE}if(_.equals(p))c=e;else{const g=t.filter.updateChild(a.getNode(),u,p,h,d,o);c=Ct(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function vr(t,e){return t.eventCache.isCompleteForChild(e)}function gf(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const d=O(n,c);vr(e,I(d))&&(a=Ri(t,a,d,l,s,r,o))}),i.foreach((c,l)=>{const d=O(n,c);vr(e,I(d))||(a=Ri(t,a,d,l,s,r,o))}),a}function Er(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ai(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;T(n)?l=i:l=new x(null).setTree(n,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=Er(t,_,h);c=wn(t,c,new N(u),p,s,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),g=Er(t,p,h);c=wn(t,c,new N(u),g,s,r,o,a)}}),c}function yf(t,e,n,i,s,r,o){if(yn(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(T(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return wn(t,e,n,c.getNode().getChild(n),s,r,a,o);if(T(n)){let l=new x(null);return c.getNode().forEachChild(et,(d,u)=>{l=l.set(new N(d),u)}),Ai(t,e,n,l,s,r,a,o)}else return e}else{let l=new x(null);return i.foreach((d,u)=>{const h=O(n,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),Ai(t,e,n,l,s,r,a,o)}}function wf(t,e,n,i,s){const r=e.serverCache,o=aa(e,r.getNode(),r.isFullyInitialized()||T(n),r.isFiltered());return pa(t,o,n,i,fa,s)}function vf(t,e,n,i,s,r){let o;if(yn(i,n)!=null)return e;{const a=new es(i,e,s),c=e.eventCache.getNode();let l;if(T(n)||I(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gn(i,We(e));else{const u=e.serverCache.getNode();w(u instanceof E,"serverChildren would be complete if leaf node"),d=Xi(i,u)}d=d,l=t.filter.updateFullNode(c,d,r)}else{const d=I(n);let u=Zi(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=t.filter.updateChild(c,d,u,k(n),a,r):e.eventCache.getNode().hasChild(d)?l=t.filter.updateChild(c,d,E.EMPTY_NODE,k(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gn(i,We(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||yn(i,A())!=null,Ct(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gi(i.getIndex()),r=$h(i);this.processor_=ff(r);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(E.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(E.EMPTY_NODE,a.getNode(),null),d=new Ae(c,o.isFullyInitialized(),s.filtersNodes()),u=new Ae(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=On(u,d),this.eventGenerator_=new jh(this.query_)}get query(){return this.query_}}function bf(t){return t.viewCache_.serverCache.getNode()}function Cf(t){return mn(t.viewCache_)}function Sf(t,e){const n=We(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function br(t){return t.eventRegistrations_.length===0}function Tf(t,e){t.eventRegistrations_.push(e)}function Cr(t,e,n){const i=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Sr(t,e,n,i){e.type===oe.MERGE&&e.source.queryId!==null&&(w(We(t.viewCache_),"We should always have a full cache before handling merges"),w(mn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=_f(t.processor_,s,e,n,i);return pf(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,_a(t,r.changes,r.viewCache.eventCache.getNode(),null)}function If(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(F,(r,o)=>{i.push(it(r,o))}),n.isFullyInitialized()&&i.push(ra(n.getNode())),_a(t,i,n.getNode(),e)}function _a(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return zh(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class ma{constructor(){this.views=new Map}}function Rf(t){w(!vn,"__referenceConstructor has already been defined"),vn=t}function Af(){return w(vn,"Reference.ts has not been loaded"),vn}function Nf(t){return t.views.size===0}function ts(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return w(r!=null,"SyncTree gave us an op for an invalid query."),Sr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Sr(o,e,n,i));return r}}function ga(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=gn(n,s?i:null),c=!1;a?c=!0:i instanceof E?(a=Xi(n,i),c=!1):(a=E.EMPTY_NODE,c=!1);const l=On(new Ae(a,c,!1),new Ae(i,s,!1));return new Ef(e,l)}return o}function xf(t,e,n,i,s,r){const o=ga(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tf(o,n),If(o,n)}function Pf(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ne(t);if(s==="default")for(const[c,l]of t.views.entries())o=o.concat(Cr(l,n,i)),br(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(s);c&&(o=o.concat(Cr(c,n,i)),br(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ne(t)&&r.push(new(Af())(e._repo,e._path)),{removed:r,events:o}}function ya(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Te(t,e){let n=null;for(const i of t.views.values())n=n||Sf(i,e);return n}function wa(t,e){if(e._queryParams.loadsAllData())return Mn(t);{const i=e._queryIdentifier;return t.views.get(i)}}function va(t,e){return wa(t,e)!=null}function Ne(t){return Mn(t)!=null}function Mn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;function kf(t){w(!En,"__referenceConstructor has already been defined"),En=t}function Df(){return w(En,"Reference.ts has not been loaded"),En}let Of=1;class Tr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new x(null),this.pendingWriteTree_=cf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ea(t,e,n,i,s){return Qh(t.pendingWriteTree_,e,n,i,s),s?dt(t,new Ve(Yi(),e,n)):[]}function Ff(t,e,n,i){Jh(t.pendingWriteTree_,e,n,i);const s=x.fromObject(n);return dt(t,new st(Yi(),e,s))}function Ee(t,e,n=!1){const i=Xh(t.pendingWriteTree_,e);if(Zh(t.pendingWriteTree_,e)){let r=new x(null);return i.snap!=null?r=r.set(A(),!0):j(i.children,o=>{r=r.set(new N(o),!0)}),dt(t,new _n(i.path,r,n))}else return[]}function Kt(t,e,n){return dt(t,new Ve(Qi(),e,n))}function Mf(t,e,n){const i=x.fromObject(n);return dt(t,new st(Qi(),e,i))}function Lf(t,e){return dt(t,new Ft(Qi(),e))}function $f(t,e,n){const i=is(t,n);if(i){const s=ss(i),r=s.path,o=s.queryId,a=Y(r,e),c=new Ft(Ji(o),a);return rs(t,r,c)}else return[]}function ba(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||va(o,e))){const c=Pf(o,e,n,i);Nf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,_)=>Ne(_));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const _=Wf(h);for(let p=0;p<_.length;++p){const g=_[p],m=g.query,y=Ia(t,g);t.listenProvider_.startListening(Tt(m),Mt(t,m),y.hashFn,y.onComplete)}}}!u&&l.length>0&&!i&&(d?t.listenProvider_.stopListening(Tt(e),null):l.forEach(h=>{const _=t.queryToTagMap.get(Ln(h));t.listenProvider_.stopListening(Tt(h),_)}))}Hf(t,l)}return a}function Ca(t,e,n,i){const s=is(t,i);if(s!=null){const r=ss(s),o=r.path,a=r.queryId,c=Y(o,e),l=new Ve(Ji(a),c,n);return rs(t,o,l)}else return[]}function Uf(t,e,n,i){const s=is(t,i);if(s){const r=ss(s),o=r.path,a=r.queryId,c=Y(o,e),l=x.fromObject(n),d=new st(Ji(a),c,l);return rs(t,o,d)}else return[]}function Bf(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,_)=>{const p=Y(h,s);r=r||Te(_,p),o=o||Ne(_)});let a=t.syncPointTree_.get(s);a?(o=o||Ne(a),r=r||Te(a,A())):(a=new ma,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=E.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,p)=>{const g=Te(p,A());g&&(r=r.updateImmediateChild(_,g))}));const l=va(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Ln(e);w(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=qf();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=Fn(t.pendingWriteTree_,s);let u=xf(a,e,n,d,r,c);if(!l&&!o&&!i){const h=wa(a,e);u=u.concat(jf(t,e,h))}return u}function ns(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Y(o,e),l=Te(a,c);if(l)return l});return ua(s,e,r,n,!0)}function Vf(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(l,d)=>{const u=Y(l,n);i=i||Te(d,u)});let s=t.syncPointTree_.get(n);s?i=i||Te(s,A()):(s=new ma,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Ae(i,!0,!1):null,a=Fn(t.pendingWriteTree_,e._path),c=ga(s,e,a,r?o.getNode():E.EMPTY_NODE,r);return Cf(c)}function dt(t,e){return Sa(e,t.syncPointTree_,null,Fn(t.pendingWriteTree_,A()))}function Sa(t,e,n,i){if(T(t.path))return Ta(t,e,n,i);{const s=e.get(A());n==null&&s!=null&&(n=Te(s,A()));let r=[];const o=I(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,d=da(i,o);r=r.concat(Sa(a,c,l,d))}return s&&(r=r.concat(ts(s,t,i,n))),r}}function Ta(t,e,n,i){const s=e.get(A());n==null&&s!=null&&(n=Te(s,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=da(i,o),d=t.operationForChild(o);d&&(r=r.concat(Ta(d,a,c,l)))}),s&&(r=r.concat(ts(s,t,i,n))),r}function Ia(t,e){const n=e.query,i=Mt(t,n);return{hashFn:()=>(bf(e)||E.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?$f(t,n._path,i):Lf(t,n._path);{const r=Md(s,n);return ba(t,n,null,r)}}}}function Mt(t,e){const n=Ln(e);return t.queryToTagMap.get(n)}function Ln(t){return t._path.toString()+"$"+t._queryIdentifier}function is(t,e){return t.tagToQueryMap.get(e)}function ss(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function rs(t,e,n){const i=t.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const s=Fn(t.pendingWriteTree_,e);return ts(i,n,s,null)}function Wf(t){return t.fold((e,n,i)=>{if(n&&Ne(n))return[Mn(n)];{let s=[];return n&&(s=ya(n)),j(i,(r,o)=>{s=s.concat(o)}),s}})}function Tt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Df())(t._repo,t._path):t}function Hf(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Ln(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function qf(){return Of++}function jf(t,e,n){const i=e._path,s=Mt(t,e),r=Ia(t,n),o=t.listenProvider_.startListening(Tt(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)w(!Ne(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!T(l)&&d&&Ne(d))return[Mn(d).query];{let h=[];return d&&(h=h.concat(ya(d).map(_=>_.query))),j(u,(_,p)=>{h=h.concat(p)}),h}});for(let l=0;l<c.length;++l){const d=c[l];t.listenProvider_.stopListening(Tt(d),Mt(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new os(n)}node(){return this.node_}}class as{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=O(this.path_,e);return new as(this.syncTree_,n)}node(){return ns(this.syncTree_,this.path_)}}const zf=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ir=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Gf(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Kf(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Gf=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Kf=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const s=e.node();if(w(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Ra=function(t,e,n,i){return ls(e,new as(n,t),i)},Aa=function(t,e,n){return ls(t,new os(e),n)};function ls(t,e,n){const i=t.getPriority().val(),s=Ir(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ir(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new W(a,U(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new W(s))),o.forEachChild(F,(a,c)=>{const l=ls(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function us(t,e){let n=e instanceof N?e:new N(e),i=t,s=I(n);for(;s!==null;){const r=tt(i.node.children,s)||{children:{},childCount:0};i=new cs(s,i,r),n=k(n),s=I(n)}return i}function ht(t){return t.node.value}function Na(t,e){t.node.value=e,Ni(t)}function xa(t){return t.node.childCount>0}function Yf(t){return ht(t)===void 0&&!xa(t)}function $n(t,e){j(t.node.children,(n,i)=>{e(new cs(n,t,i))})}function Pa(t,e,n,i){n&&e(t),$n(t,s=>{Pa(s,e,!0)})}function Qf(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Yt(t){return new N(t.parent===null?t.name:Yt(t.parent)+"/"+t.name)}function Ni(t){t.parent!==null&&Jf(t.parent,t.name,t)}function Jf(t,e,n){const i=Yf(n),s=de(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ni(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ni(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=/[\[\].#$\/\u0000-\u001F\u007F]/,Zf=/[\[\].#$\u0000-\u001F\u007F]/,ii=10*1024*1024,ds=function(t){return typeof t=="string"&&t.length!==0&&!Xf.test(t)},ka=function(t){return typeof t=="string"&&t.length!==0&&!Zf.test(t)},ep=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ka(t)},tp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ui(t)||t&&typeof t=="object"&&de(t,".sv")},Da=function(t,e,n,i){i&&e===void 0||Un(Pn(t,"value"),e,n)},Un=function(t,e,n){const i=n instanceof N?new mh(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pe(i));if(typeof e=="function")throw new Error(t+"contains a function "+Pe(i)+" with contents = "+e.toString());if(Ui(e))throw new Error(t+"contains "+e.toString()+" "+Pe(i));if(typeof e=="string"&&e.length>ii/3&&kn(e)>ii)throw new Error(t+"contains a string greater than "+ii+" utf8 bytes "+Pe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(j(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ds(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gh(i,o),Un(t,a,i),yh(i)}),s&&r)throw new Error(t+' contains ".value" child '+Pe(i)+" in addition to actual children.")}},np=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=Pt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ds(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_h);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&ie(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},ip=function(t,e,n,i){const s=Pn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];j(e,(o,a)=>{const c=new N(o);if(Un(s,a,O(n,c)),qi(c)===".priority"&&!tp(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),np(s,r)},Oa=function(t,e,n,i){if(!ka(n))throw new Error(Pn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sp=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oa(t,e,n)},Fa=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rp=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ds(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ep(n))throw new Error(Pn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hs(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Xo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function se(t,e,n){hs(t,n),ap(t,i=>ie(i,e)||ie(e,i))}function ap(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(lp(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lp(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Et&&q("event: "+n.toString()),ut(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="repo_interrupt",up=25;class dp{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new op,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pn(),this.transactionQueueTree_=new cs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hp(t,e,n){if(t.stats_=Wi(t.repoInfo_),t.forceRestClient_||Bd())t.server_=new fn(t.repoInfo_,(i,s,r,o)=>{Rr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ar(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pe(t.repoInfo_,e,(i,s,r,o)=>{Rr(t,i,s,r,o)},i=>{Ar(t,i)},i=>{fp(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=jd(t.repoInfo_,()=>new qh(t.stats_,t.server_)),t.infoData_=new Uh,t.infoSyncTree_=new Tr({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=Kt(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fs(t,"connected",!1),t.serverSyncTree_=new Tr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);se(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Ma(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bn(t){return zf({timestamp:Ma(t)})}function Rr(t,e,n,i,s){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=an(n,l=>U(l));o=Uf(t.serverSyncTree_,r,c,s)}else{const c=U(n);o=Ca(t.serverSyncTree_,r,c,s)}else if(i){const c=an(n,l=>U(l));o=Mf(t.serverSyncTree_,r,c)}else{const c=U(n);o=Kt(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=ot(t,r)),se(t.eventQueue_,a,o)}function Ar(t,e){fs(t,"connected",e),e===!1&&gp(t)}function fp(t,e){j(e,(n,i)=>{fs(t,n,i)})}function fs(t,e,n){const i=new N("/.info/"+e),s=U(n);t.infoData_.updateSnapshot(i,s);const r=Kt(t.infoSyncTree_,i,s);se(t.eventQueue_,i,r)}function ps(t){return t.nextWriteId_++}function pp(t,e,n){const i=Vf(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=U(s).withIndex(e._queryParams.getIndex());Bf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Kt(t.serverSyncTree_,e._path,r);else{const a=Mt(t.serverSyncTree_,e);o=Ca(t.serverSyncTree_,e._path,r,a)}return se(t.eventQueue_,e._path,o),ba(t.serverSyncTree_,e,n,null,!0),r},s=>(Qt(t,"get for query "+B(e)+" failed: "+s),Promise.reject(new Error(s))))}function _p(t,e,n,i,s){Qt(t,"set",{path:e.toString(),value:n,priority:i});const r=Bn(t),o=U(n,i),a=ns(t.serverSyncTree_,e),c=Aa(o,a,r),l=ps(t),d=Ea(t.serverSyncTree_,e,c,l,!0);hs(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const p=h==="ok";p||Q("set at "+e+" failed: "+h);const g=Ee(t.serverSyncTree_,l,!p);se(t.eventQueue_,e,g),xi(t,s,h,_)});const u=ms(t,e);ot(t,u),se(t.eventQueue_,u,[])}function mp(t,e,n,i){Qt(t,"update",{path:e.toString(),value:n});let s=!0;const r=Bn(t),o={};if(j(n,(a,c)=>{s=!1,o[a]=Ra(O(e,a),U(c),t.serverSyncTree_,r)}),s)q("update() called with empty data.  Don't do anything."),xi(t,i,"ok",void 0);else{const a=ps(t),c=Ff(t.serverSyncTree_,e,o,a);hs(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,d)=>{const u=l==="ok";u||Q("update at "+e+" failed: "+l);const h=Ee(t.serverSyncTree_,a,!u),_=h.length>0?ot(t,e):e;se(t.eventQueue_,_,h),xi(t,i,l,d)}),j(n,l=>{const d=ms(t,O(e,l));ot(t,d)}),se(t.eventQueue_,e,[])}}function gp(t){Qt(t,"onDisconnectEvents");const e=Bn(t),n=pn();Ci(t.onDisconnect_,A(),(s,r)=>{const o=Ra(s,r,t.serverSyncTree_,e);oa(n,s,o)});let i=[];Ci(n,A(),(s,r)=>{i=i.concat(Kt(t.serverSyncTree_,s,r));const o=ms(t,s);ot(t,o)}),t.onDisconnect_=pn(),se(t.eventQueue_,A(),i)}function yp(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cp)}function Qt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),q(n,...e)}function xi(t,e,n,i){e&&ut(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function La(t,e,n){return ns(t.serverSyncTree_,e,n)||E.EMPTY_NODE}function _s(t,e=t.transactionQueueTree_){if(e||Vn(t,e),ht(e)){const n=Ua(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&wp(t,Yt(e),n)}else xa(e)&&$n(e,n=>{_s(t,n)})}function wp(t,e,n){const i=n.map(l=>l.currentWriteId),s=La(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const d=n[l];w(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Y(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Qt(t,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ee(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Vn(t,us(t.transactionQueueTree_,e)),_s(t,t.transactionQueueTree_),se(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)ut(u[h])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Q("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}ot(t,e)}},o)}function ot(t,e){const n=$a(t,e),i=Yt(n),s=Ua(t,n);return vp(t,s,i),i}function vp(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Y(n,c.path);let d=!1,u;if(w(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,s=s.concat(Ee(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=up)d=!0,u="maxretry",s=s.concat(Ee(t.serverSyncTree_,c.currentWriteId,!0));else{const h=La(t,c.path,o);c.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){Un("transaction failed: Data returned ",_,c.path);let p=U(_);typeof _=="object"&&_!=null&&de(_,".priority")||(p=p.updatePriority(h.getPriority()));const m=c.currentWriteId,y=Bn(t),v=Aa(p,h,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=v,c.currentWriteId=ps(t),o.splice(o.indexOf(m),1),s=s.concat(Ea(t.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),s=s.concat(Ee(t.serverSyncTree_,m,!0))}else d=!0,u="nodata",s=s.concat(Ee(t.serverSyncTree_,c.currentWriteId,!0))}se(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Vn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)ut(i[a]);_s(t,t.transactionQueueTree_)}function $a(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&ht(i)===void 0;)i=us(i,n),e=k(e),n=I(e);return i}function Ua(t,e){const n=[];return Ba(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Ba(t,e,n){const i=ht(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);$n(e,s=>{Ba(t,s,n)})}function Vn(t,e){const n=ht(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Na(e,n.length>0?n:void 0)}$n(e,i=>{Vn(t,i)})}function ms(t,e){const n=Yt($a(t,e)),i=us(t.transactionQueueTree_,e);return Qf(i,s=>{si(t,s)}),si(t,i),Pa(i,s=>{si(t,s)}),n}function si(t,e){const n=ht(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ee(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Na(e,void 0):n.length=r+1,se(t.eventQueue_,Yt(e),s);for(let o=0;o<i.length;o++)ut(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function bp(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Q(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nr=function(t,e){const n=Cp(t),i=n.namespace;n.domain==="firebase.com"&&ge(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Pd();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wo(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new N(n.pathString)}},Cp=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=Ep(t.substring(d,u)));const h=bp(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const _=e.slice(0,l);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sp=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=xr.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=xr.charAt(e[s]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class Ip{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return T(this._path)?null:qi(this._path)}get ref(){return new we(this._repo,this._path)}get _queryIdentifier(){const e=_r(this._queryParams),n=Bi(e);return n==="{}"?"default":n}get _queryObject(){return _r(this._queryParams)}isEqual(e){if(e=ye(e),!(e instanceof gs))return!1;const n=this._repo===e._repo,i=Xo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ph(this._path)}}class we extends gs{constructor(e,n){super(e,n,new Ki,!1)}get parent(){const e=Jo(this._path);return e===null?null:new we(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new N(e),i=L(this.ref,e);return new Lt(this._node.getChild(n),i,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Lt(s,L(this.ref,i),F)))}hasChild(e){const n=new N(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ne(t,e){return t=ye(t),t._checkNotDeleted("ref"),e!==void 0?L(t._root,e):t._root}function L(t,e){return t=ye(t),I(t._path)===null?sp("child","path",e):Oa("child","path",e),new we(t._repo,O(t._path,e))}function yt(t,e){t=ye(t),Fa("push",t._path),Da("push",e,t._path,!0);const n=Ma(t._repo),i=Sp(n),s=L(t,i),r=L(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function wt(t,e){t=ye(t),Fa("set",t._path),Da("set",e,t._path,!1);const n=new Ht;return _p(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Qe(t,e){ip("update",e,t._path);const n=new Ht;return mp(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function G(t){t=ye(t);const e=new Rp(()=>{}),n=new ys(e);return pp(t._repo,t,n).then(i=>new Lt(i,new we(t._repo,t._path),t._queryParams.getIndex()))}class ys{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Tp("value",this,new Lt(e.snapshotNode,new we(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ip(this,e,n):null}matches(e){return e instanceof ys?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Rf(we);kf(we);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="FIREBASE_DATABASE_EMULATOR_HOST",Pi={};let Np=!1;function xp(t,e,n,i){t.repoInfo_=new Wo(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Pp(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nr(r,s),a=o.repoInfo,c;typeof process<"u"&&Js&&(c=Js[Ap]),c?(r=`http://${c}?ns=${a.namespace}`,o=Nr(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new Wd(t.name,t.options,e);rp("Invalid Firebase Database URL",o),T(o.path)||ge("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Dp(a,t,l,new Vd(t,n));return new Op(d,t)}function kp(t,e){const n=Pi[e];(!n||n[t.key]!==t)&&ge(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yp(t),delete n[t.key]}function Dp(t,e,n,i){let s=Pi[e.name];s||(s={},Pi[e.name]=s);let r=s[t.toURLString()];return r&&ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dp(t,Np,n,i),s[t.toURLString()]=r,r}class Op{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new we(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ge("Cannot call "+e+" on a deleted database.")}}function ve(t=To(),e){const n=qt(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Yc("database");i&&Fp(n,...i)}return n}function Fp(t,e,n,i={}){t=ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ge("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new nn(nn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Qc(i.mockUserToken,t.app.options.projectId);r=new nn(o)}xp(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){Td(hd),Ie(new _e("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pp(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ue(Xs,Zs,t),ue(Xs,Zs,"esm2017")}pe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Mp();const Va="@firebase/installations",ws="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=1e4,Ha=`w:${ws}`,qa="FIS_v2",Lp="https://firebaseinstallations.googleapis.com/v1",$p=60*60*1e3,Up="installations",Bp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},He=new xn(Up,Bp,Vp);function ja(t){return t instanceof je&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za({projectId:t}){return`${Lp}/projects/${t}/installations`}function Ga(t){return{token:t.token,requestStatus:2,expiresIn:Hp(t.expiresIn),creationTime:Date.now()}}async function Ka(t,e){const i=(await e.json()).error;return He.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ya({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Wp(t,{refreshToken:e}){const n=Ya(t);return n.append("Authorization",qp(e)),n}async function Qa(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Hp(t){return Number(t.replace("s","000"))}function qp(t){return`${qa} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=za(t),s=Ya(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:qa,appId:t.appId,sdkVersion:Ha},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Qa(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ga(l.authToken)}}else throw await Ka("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=/^[cdef][\w-]{21}$/,ki="";function Kp(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Yp(t);return Gp.test(n)?n:ki}catch{return ki}}function Yp(t){return zp(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;function Za(t,e){const n=Wn(t);el(n,e),Qp(n,e)}function el(t,e){const n=Xa.get(t);if(n)for(const i of n)i(e)}function Qp(t,e){const n=Jp();n&&n.postMessage({key:t,fid:e}),Xp()}let Oe=null;function Jp(){return!Oe&&"BroadcastChannel"in self&&(Oe=new BroadcastChannel("[Firebase] FID Change"),Oe.onmessage=t=>{el(t.data.key,t.data.fid)}),Oe}function Xp(){Xa.size===0&&Oe&&(Oe.close(),Oe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebase-installations-database",e_=1,qe="firebase-installations-store";let ri=null;function vs(){return ri||(ri=Co(Zp,e_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qe)}}})),ri}async function bn(t,e){const n=Wn(t),s=(await vs()).transaction(qe,"readwrite"),r=s.objectStore(qe),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Za(t,e.fid),e}async function tl(t){const e=Wn(t),i=(await vs()).transaction(qe,"readwrite");await i.objectStore(qe).delete(e),await i.done}async function Hn(t,e){const n=Wn(t),s=(await vs()).transaction(qe,"readwrite"),r=s.objectStore(qe),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Za(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){let e;const n=await Hn(t.appConfig,i=>{const s=t_(i),r=n_(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===ki?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function t_(t){const e=t||{fid:Kp(),registrationStatus:0};return nl(e)}function n_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(He.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=i_(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:s_(t)}:{installationEntry:e}}async function i_(t,e){try{const n=await jp(t,e);return bn(t.appConfig,n)}catch(n){throw ja(n)&&n.customData.serverCode===409?await tl(t.appConfig):await bn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function s_(t){let e=await Pr(t.appConfig);for(;e.registrationStatus===1;)await Ja(100),e=await Pr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Es(t);return i||n}return e}function Pr(t){return Hn(t,e=>{if(!e)throw He.create("installation-not-found");return nl(e)})}function nl(t){return r_(t)?{fid:t.fid,registrationStatus:0}:t}function r_(t){return t.registrationStatus===1&&t.registrationTime+Wa<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_({appConfig:t,heartbeatServiceProvider:e},n){const i=a_(t,n),s=Wp(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ha,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Qa(()=>fetch(i,a));if(c.ok){const l=await c.json();return Ga(l)}else throw await Ka("Generate Auth Token",c)}function a_(t,{fid:e}){return`${za(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e=!1){let n;const i=await Hn(t.appConfig,r=>{if(!il(r))throw He.create("not-registered");const o=r.authToken;if(!e&&u_(o))return r;if(o.requestStatus===1)return n=l_(t,e),r;{if(!navigator.onLine)throw He.create("app-offline");const a=h_(r);return n=c_(t,a),a}});return n?await n:i.authToken}async function l_(t,e){let n=await kr(t.appConfig);for(;n.authToken.requestStatus===1;)await Ja(100),n=await kr(t.appConfig);const i=n.authToken;return i.requestStatus===0?bs(t,e):i}function kr(t){return Hn(t,e=>{if(!il(e))throw He.create("not-registered");const n=e.authToken;return f_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function c_(t,e){try{const n=await o_(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await bn(t.appConfig,i),n}catch(n){if(ja(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tl(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bn(t.appConfig,i)}throw n}}function il(t){return t!==void 0&&t.registrationStatus===2}function u_(t){return t.requestStatus===2&&!d_(t)}function d_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$p}function h_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function f_(t){return t.requestStatus===1&&t.requestTime+Wa<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(t){const e=t,{installationEntry:n,registrationPromise:i}=await Es(e);return i?i.catch(console.error):bs(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e=!1){const n=t;return await m_(n),(await bs(n,e)).token}async function m_(t){const{registrationPromise:e}=await Es(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){if(!t||!t.options)throw oi("App Configuration");if(!t.name)throw oi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw oi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function oi(t){return He.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="installations",y_="installations-internal",w_=t=>{const e=t.getProvider("app").getImmediate(),n=g_(e),i=qt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},v_=t=>{const e=t.getProvider("app").getImmediate(),n=qt(e,sl).getImmediate();return{getId:()=>p_(n),getToken:s=>__(n,s)}};function E_(){Ie(new _e(sl,w_,"PUBLIC")),Ie(new _e(y_,v_,"PRIVATE"))}E_();ue(Va,ws);ue(Va,ws,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="analytics",b_="firebase_id",C_="origin",S_=60*1e3,T_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cs="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Li("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},te=new xn("analytics","Analytics",I_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){if(!t.startsWith(Cs)){const e=te.create("invalid-gtag-resource",{gtagURL:t});return Z.warn(e.message),""}return t}function rl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function A_(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function N_(t,e){const n=A_("firebase-js-sdk-policy",{createScriptURL:R_}),i=document.createElement("script"),s=`${Cs}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function x_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function P_(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await rl(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Z.error(a)}t("config",s,r)}async function k_(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await rl(n);for(const c of o){const l=a.find(u=>u.measurementId===c),d=l&&e[l.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){Z.error(r)}}function D_(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,c]=o;await k_(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await P_(t,e,n,i,a,c)}else if(r==="consent"){const[a,c]=o;t("consent",a,c)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){Z.error(a)}}return s}function O_(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=D_(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function F_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cs)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=30,L_=1e3;class $_{constructor(e={},n=L_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ol=new $_;function U_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function B_(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:U_(i)},r=T_.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw te.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function V_(t,e=ol,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw te.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw te.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new q_;return setTimeout(async()=>{a.abort()},S_),al({appId:i,apiKey:s,measurementId:r},o,a,e)}async function al(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=ol){var r;const{appId:o,measurementId:a}=t;try{await W_(i,e)}catch(c){if(a)return Z.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await B_(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!H_(l)){if(s.deleteThrottleMetadata(o),a)return Z.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const d=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ws(n,s.intervalMillis,M_):Ws(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,u),Z.debug(`Calling attemptFetch again in ${d} millis`),al(t,u,i,s)}}function W_(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(te.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function H_(t){if(!(t instanceof je)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class q_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function j_(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(){if(yo())try{await wo()}catch(t){return Z.warn(te.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Z.warn(te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function G_(t,e,n,i,s,r,o){var a;const c=V_(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Z.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Z.error(_)),e.push(c);const l=z_().then(_=>{if(_)return i.getId()}),[d,u]=await Promise.all([c,l]);F_(r)||N_(r,d.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[C_]="firebase",h.update=!0,u!=null&&(h[b_]=u),s("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.app=e}_delete(){return delete It[this.app.options.appId],Promise.resolve()}}let It={},Dr=[];const Or={};let ai="dataLayer",Y_="gtag",Fr,ll,Mr=!1;function Q_(){const t=[];if(Xc()&&t.push("This is a browser extension environment."),tu()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=te.create("invalid-analytics-context",{errorInfo:e});Z.warn(n.message)}}function J_(t,e,n){Q_();const i=t.options.appId;if(!i)throw te.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Z.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw te.create("no-api-key");if(It[i]!=null)throw te.create("already-exists",{id:i});if(!Mr){x_(ai);const{wrappedGtag:r,gtagCore:o}=O_(It,Dr,Or,ai,Y_);ll=r,Fr=o,Mr=!0}return It[i]=G_(t,Dr,Or,e,Fr,ai,n),new K_(t)}function X_(t=To()){t=ye(t);const e=qt(t,Cn);return e.isInitialized()?e.getImmediate():Z_(t)}function Z_(t,e={}){const n=qt(t,Cn);if(n.isInitialized()){const s=n.getImmediate();if(ln(e,n.getOptions()))return s;throw te.create("already-initialized")}return n.initialize({options:e})}function em(t,e,n,i){t=ye(t),j_(ll,It[t.app.options.appId],e,n,i).catch(s=>Z.error(s))}const Lr="@firebase/analytics",$r="0.10.11";function tm(){Ie(new _e(Cn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return J_(i,s,n)},"PUBLIC")),Ie(new _e("analytics-internal",t,"PRIVATE")),ue(Lr,$r),ue(Lr,$r,"esm2017");function t(e){try{const n=e.getProvider(Cn).getImmediate();return{logEvent:(i,s,r)=>em(n,i,s,r)}}catch(n){throw te.create("interop-component-reg-failed",{reason:n})}}}tm();var nm='<button class="btn btn-primary col-2 mb-2 rounded newProduct" type="button" data-toogle="tootip" title="Nuevo Artículo">Nuevo</button><button class="btn btn-danger col-1 mb-2 rounded" type="button" id="kardexPDF">PDF</button>';const im={apiKey:"AIzaSyDHAVINZspNS6ChUIvK5jVHCQ8tOtQ1L7w",authDomain:"kardex-b2d64.firebaseapp.com",databaseURL:"https://kardex-b2d64-default-rtdb.firebaseio.com",projectId:"kardex-b2d64",storageBucket:"kardex-b2d64.firebasestorage.app",messagingSenderId:"1073459110441",appId:"1:1073459110441:web:2495fd8db3158eacadb238",measurementId:"G-E5QF4TQE52"},sm=So(im);X_(sm);const K=ne(ve());var $t=$("#inventoryTable").DataTable({autoWidth:!1,responsive:!0,deferRender:!0,columnDefs:[{width:"10%",targets:[0,3,4],className:"text-center"},{width:"25%",targets:5,className:"text-center"},{width:"25%",targets:2},{responsivePriority:1,targets:-1}]}),Ut=$("#inTable").DataTable({autoWidth:!1,responsive:!0,deferRender:!0,columnDefs:[{width:"10%",targets:[0,3,4],className:"text-center"},{width:"15%",targets:5,className:"text-center"},{width:"25%",targets:1},{responsivePriority:1,targets:-1}]}),Bt=$("#outTable").DataTable({autoWidth:!1,responsive:!0,deferRender:!0,columnDefs:[{width:"10%",targets:[0,3,4],className:"text-center"},{width:"15%",targets:5,className:"text-center"},{width:"25%",targets:1},{responsivePriority:1,targets:-1}]}),Me=0,Le=0,$e=0;const rm=new Date,Je=rm.toLocaleDateString("en-GB");$("#newProduct").on("hidden.bs.modal",function(){$("#productFormNew")[0].reset()});$("#addProduct").on("hidden.bs.modal",function(){$("#productFormAdd")[0].reset()});$("#updateProduct").on("hidden.bs.modal",function(){$("#productFormUpdate")[0].reset()});$("#sellProduct").on("hidden.bs.modal",function(){$("#productFormSell")[0].reset()});cl();$("#unlock").click(function(){om()});async function om(){const{value:t}=await Swal.fire({title:"Acceder",html:`
          <label class="swal2-input-label">Usuario</label>
          <input id="swal-input1" class="swal2-input" placeholder="Ingresa tu usuario">
          <label class="swal2-input-label">Contraseña</label>
          <input id="swal-input2" class="swal2-input" placeholder="Ingresa tu contraseña" type="password">
        `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Ingresar",cancelButtonText:"Cancelar",preConfirm:()=>{const e=document.getElementById("swal-input1").value,n=document.getElementById("swal-input2").value;return(!e||!n)&&Swal.showValidationMessage("Todos los campos son obligatorios."),[e,n]}});t&&G(L(K,"accesos")).then(e=>{e.exists()?$.each(e.val(),function(n,i){i!=null&&i.user==t[0]&&i.pass==t[1]&&(Swal.fire({title:"Acceso Exitoso 🔓",text:`¡Bienvenido, ${i.name}!`,icon:"success",timer:2e3,showConfirmButton:!1}),$("#unlock").hide(),$("#lock").prop("hidden",!1).show(),$("#component-newProduct").append(nm),$t.clear().draw(),Ut.clear().draw(),Bt.clear().draw(),Me=0,Le=0,$e=0,vt(),$(".newProduct").on("click",function(){$("#newProduct").modal("show"),$("#newProduct").on("shown.bs.modal",function(){$("#productFormNew").off("submit").on("submit",function(s){s.preventDefault();var r=i.name,o=$("#id").val(),a=$("#articulo").val(),c=$("#detalle").val(),l=$("#cantidadTotal").val(),d=$("#precioCompra").val(),u=$("#precioVenta").val();if(o==""){const h=ve(),_=ne(h,"inventarios"),p=yt(_);wt(p,{articulo:a,detalle:c,cantidadTotal:l,precioVenta:u,tipo:"E"});const g=ne(h,"entradas"),m=yt(g);wt(m,{cantidadTotal:l,precioCompra:d,fechaIngreso:Je,idInventario:p.key,user:r});const y=ne(h,"report"),v=yt(y);wt(v,{articulo:a,detalle:c,cantidadEntrada:l,precioEntradaVU:d,precioEntradaVT:(parseFloat(l)*parseFloat(d)).toFixed(2),cantidadSalida:0,precioSalidaVU:u,precioSalidaVT:0,fechaReport:Je,idInventario:p.key}),$("#newProduct").modal("hide"),$("#newProduct").on("hidden.bs.modal",function(){$("#productFormNew")[0].reset()}),Swal.fire({title:"¡Producto Agregado!",text:"El producto fue agregado exitosamente.",icon:"success",confirmButtonText:"Aceptar",timer:2e3,showConfirmButton:!1}),vt()}else alert("Todos los campos son obligatorios")})})}),$(document).on("click",".inventoryAdd",function(){const s=$(this).data("id"),r=$(this).closest("tr").find("td").eq(1).text(),o=$(this).closest("tr").find("td").eq(2).text(),a=$(this).closest("tr").find("td").eq(3).text(),c=$(this).closest("tr").find("td").eq(4).text();$("#addProduct").modal("show"),$("#addProduct").on("shown.bs.modal",function(){$("#articuloAdd").prop("readonly",!0),$("#detalleAdd").prop("readonly",!0),$("#idAdd").val(s),$("#articuloAdd").val(r),$("#detalleAdd").val(o),G(L(K,"entradas")).then(l=>{l.exists()&&$.each(l.val(),function(d,u){u.idInventario==s&&$("#precioCompraAdd").val(u.precioCompra).prop("readonly",!0)})})}),$("#productFormAdd").off("submit").on("submit",function(l){l.preventDefault();var d=i.name,u=$("#idAdd").val(),h=$("#articuloAdd").val(),_=$("#detalleAdd").val(),p=$("#cantidadTotalAdd").val(),g=$("#precioCompraAdd").val();G(L(K,"report")).then(m=>{m.exists()&&$.each(m.val(),function(y,v){if(console.log(u,v),u==v.idInventario){const S=ve();let R=parseFloat(v.cantidadEntrada)+parseFloat(p);const D={articulo:v.articulo,detalle:v.detalle,cantidadEntrada:R,precioEntradaVU:v.precioEntradaVU,precioEntradaVT:(parseFloat(R)*parseFloat(v.precioEntradaVU)).toFixed(2),cantidadSalida:v.cantidadSalida,precioSalidaVU:v.precioSalidaVU,precioSalidaVT:v.precioSalidaVT,fechaReport:Je,idInventario:v.idInventario},V={};V["/report/"+y]=D,Qe(ne(S),V)}})}),G(L(K,"inventarios")).then(m=>{m.exists()?$.each(m.val(),function(y,v){if(v!=null&&u==y){const R=ve();var S=parseFloat(p)+parseFloat(a);const D={articulo:h,detalle:_,cantidadTotal:S,precioVenta:c,tipo:"E"},V={};V["/inventarios/"+y]=D,Qe(ne(R),V);const he=ne(R,"entradas"),Ke=yt(he);wt(Ke,{cantidadTotal:p,precioCompra:g,fechaIngreso:Je,idInventario:y,user:d}),vt(),$("#addProduct").modal("hide"),$("#addProduct").on("hidden.bs.modal",function(){$("#productFormAdd")[0].reset()}),Swal.fire({title:"¡Stock Adicionado!",text:"El stock fue aumentado exitosamente.",icon:"success",confirmButtonText:"Aceptar",timer:2e3,showConfirmButton:!1})}}):console.log("No data available")}).catch(m=>{console.error(m)})})}),$(document).on("click",".inventoryUpdate",function(){const s=$(this).data("id"),r=$(this).closest("tr").find("td").eq(1).text(),o=$(this).closest("tr").find("td").eq(2).text(),a=$(this).closest("tr").find("td").eq(3).text(),c=$(this).closest("tr").find("td").eq(4).text();$("#updateProduct").modal("show"),$("#updateProduct").on("shown.bs.modal",function(){$("#idUpdate").val(s),$("#articuloUpdate").val(r),$("#detalleUpdate").val(o),$("#cantidadTotalUpdate").val(a).prop("readonly",!0),$("#precioVentaUpdate").val(c).prop("readonly",!0)}),$("#productFormUpdate").off("submit").on("submit",function(l){l.preventDefault();var d=$("#idUpdate").val(),u=$("#articuloUpdate").val(),h=$("#detalleUpdate").val(),_=$("#cantidadTotalUpdate").val(),p=$("#precioVentaUpdate").val();G(L(K,"report")).then(g=>{g.exists()&&$.each(g.val(),function(m,y){if(y!=null&&y.idInventario==d){const v=ve(),S={articulo:u,detalle:h,cantidadEntrada:y.cantidadEntrada,precioEntradaVU:y.precioEntradaVU,precioEntradaVT:y.precioEntradaVT,cantidadSalida:y.cantidadSalida,precioSalidaVU:y.precioSalidaVU,precioSalidaVT:y.precioSalidaVT,fechaReport:y.fechaReport,idInventario:y.idInventario},R={};R["/report/"+m]=S,Qe(ne(v),R)}})}).catch(g=>{console.error(g)}),G(L(K,"inventarios")).then(g=>{g.exists()?$.each(g.val(),function(m,y){if(y!=null&&d==m){const v=ve(),S={articulo:u,detalle:h,cantidadTotal:_,precioVenta:p,tipo:"E"},R={};R["/inventarios/"+m]=S,Qe(ne(v),R),vt(),$("#updateProduct").modal("hide"),$("#updateProduct").on("hidden.bs.modal",function(){$("#productFormUpdate")[0].reset()}),Swal.fire({title:"¡Producto Modificado!",text:"El producto fue modificado exitosamente.",icon:"success",confirmButtonText:"Aceptar",timer:2e3,showConfirmButton:!1})}}):console.log("No data available")}).catch(g=>{console.error(g)})})}),$(document).on("click",".inventorySell",function(){const s=$(this).data("id"),r=$(this).closest("tr").find("td").eq(1).text(),o=$(this).closest("tr").find("td").eq(2).text(),a=$(this).closest("tr").find("td").eq(3).text(),c=$(this).closest("tr").find("td").eq(4).text();$("#sellProduct").modal("show"),$("#sellProduct").on("shown.bs.modal",function(){$("#idSell").val(s),$("#articuloSell").val(r).prop("readonly",!0),$("#detalleSell").val(o).prop("readonly",!0),$("#cantidadTotalSell").val(a).prop("max",a),$("#precioVentaSell").val(c).prop("readonly",!0)}),$("#productFormSell").off("submit").on("submit",function(l){l.preventDefault();var d=i.name,u=$("#idSell").val(),h=$("#articuloSell").val(),_=$("#detalleSell").val(),p=$("#cantidadTotalSell").val();$("#precioCompraSell").val(),G(L(K,"report")).then(g=>{g.exists()&&$.each(g.val(),function(m,y){if(y!=null&&u==y.idInventario){const v=ve();let S=parseFloat(y.cantidadSalida)+parseFloat(p);const R={articulo:h,detalle:_,cantidadEntrada:y.cantidadEntrada,precioEntradaVU:y.precioEntradaVU,precioEntradaVT:y.precioEntradaVT,cantidadSalida:S,precioSalidaVU:y.precioSalidaVU,precioSalidaVT:parseFloat(y.precioSalidaVU)*parseFloat(S),fechaReport:Je,idInventario:y.idInventario},D={};D["/report/"+m]=R,Qe(ne(v),D)}})}),G(L(K,"inventarios")).then(g=>{g.exists()?$.each(g.val(),function(m,y){if(i!=null&&u==m){const v=ve(),S={articulo:h,detalle:_,cantidadTotal:parseFloat(a)-p,precioVenta:c,tipo:"E"},R={};R["/inventarios/"+m]=S,Qe(ne(v),R);const D=ne(v,"salidas"),V=yt(D);wt(V,{cantidadTotal:p,precioVenta:c,fechaSalida:Je,idInventario:m,user:d}),vt(),$("#sellProduct").modal("hide"),$("#sellProduct").on("hidden.bs.modal",function(){$("#productFormSell")[0].reset()}),Swal.fire({title:"¡Producto Vendido!",text:"El producto fue vendido exitosamente.",icon:"success",confirmButtonText:"Aceptar",timer:2e3,showConfirmButton:!1})}}):console.log("No data available")}).catch(g=>{console.error(g)})})}),$("#kardexPDF").click(function(){am()}))}):console.log("No data available")}).catch(e=>{console.error("Error al Validar Usuario",e)})}function vt(){$t.clear().draw(),Ut.clear().draw(),Bt.clear().draw(),Me=0,Le=0,$e=0,G(L(K,"inventarios")).then(t=>{t.exists()?$.each(t.val(),function(e,n){if(n!=null){Me++;var i=Me,s=n.articulo,r=n.detalle,o=n.precioVenta;if(n.cantidadTotal==0)var a='<span class="text-danger fw-bold">'+n.cantidadTotal+"</span>",c='<button type="button" class="btn btn-sm btn-primary rounded m-1 inventoryAdd" data-id="'+e+'"> Ingreso</button><button type="button" class="btn btn-sm btn-warning rounded m-1 inventoryUpdate" data-id="'+e+'"> Modificar</button> ';else var a=n.cantidadTotal,c='<button type="button" class="btn btn-sm btn-primary rounded m-1 inventoryAdd" data-id="'+e+'"> Ingreso</button><button type="button" class="btn btn-sm btn-warning rounded m-1 inventoryUpdate" data-id="'+e+'"> Modificar</button> <button type="button" class="btn btn-sm btn-success rounded m-1 inventorySell" data-id="'+e+'"> Salida</button>';$t.row.add([i,s,r,a,o,c]).draw(),G(L(K,"entradas")).then(l=>{l.exists()?$.each(l.val(),function(d,u){if(u!=null&&u.idInventario==e){Le++;var h=Le,_=n.articulo,p=n.detalle,g=u.cantidadTotal,m=u.precioCompra,y=u.fechaIngreso;Ut.row.add([h,_,p,g,m,y]).draw()}}):console.log("No data available")}).catch(l=>{console.error(l)}),G(L(K,"salidas")).then(l=>{l.exists()?$.each(l.val(),function(d,u){if(u!=null&&u.idInventario==e){$e++;var h=$e,_=n.articulo,p=n.detalle,g=u.cantidadTotal,m=u.precioVenta,y=u.fechaSalida;Bt.row.add([h,_,p,g,m,y]).draw()}}):console.log("No data available")}).catch(l=>{console.error(l)})}}):console.log("No data available")}).catch(t=>{console.error(t)})}document.getElementById("fecha").innerText=new Date().toLocaleDateString();function am(){const{jsPDF:t}=window.jspdf,e=new t("landscape");e.setFont("courier","bold"),e.setFontSize(16),e.text("Kardex de Inventario",148,15,null,null,"center"),e.setFontSize(12),e.text(`Fecha: ${new Date().toLocaleDateString()}`,148,25,null,null,"center");let n=40,i=10,s=10,r=[15,80,30,30,30,30,30,30];e.setFontSize(10),e.text("Entradas",i+r[0]+r[1]+(r[2]+r[3]+r[4])/2,n+7,null,null,"center"),e.text("Salidas",i+r[0]+r[1]+r[2]+r[3]+r[4]+(r[5]+r[6]+r[7])/2,n+7,null,null,"center"),n+=s;let o=["N°","Detalle","Cantidad","V. Unitario","V. Total","Cantidad","V. Unitario","V. Total"],a=i;o.forEach((u,h)=>{e.rect(a,n,r[h],s),e.text(u,a+r[h]/2,n+7,null,null,"center"),a+=r[h]}),n+=s;let c=0;var l=0,d=0;G(L(K,"report")).then(u=>{if(u.exists()){$("#kardexTable thead").empty(),$("#kardexTable thead").append(`<tr>
                    <th colspan="2"></th>
                    <th colspan="3">Entradas</th>
                    <th colspan="3">Salidas</th>
                </tr>
                <tr>
                    <th>N°</th>
                    <th>Detalle</th>
                    <th>Cantidad</th>
                    <th>V. Unitario</th>
                    <th>V. Total</th>
                    <th>Cantidad</th>
                    <th>V. Unitario</th>
                    <th>V. Total</th>
                </tr>`),$.each(u.val(),function(m,y){c++,$("#kardexTable thead").append(`<tr>
                            <th>${c}</th>
                            <th>${y.articulo}</th>
                            <th>${y.cantidadEntrada}</th>
                            <th>${parseFloat(y.precioEntradaVU||0).toFixed(2)}</th>
                            <th>${parseFloat(y.precioEntradaVT||0).toFixed(2)}</th>
                            <th>${y.cantidadSalida}</th>
                            <th>${parseFloat(y.precioSalidaVU||0).toFixed(2)}</th>
                            <th>${parseFloat(y.precioSalidaVT||0).toFixed(2)}</th>
                        </tr>`),l+=parseFloat(y.precioEntradaVT||0),d+=parseFloat(y.precioSalidaVT||0),a=i,[c,y.articulo,y.cantidadEntrada,parseFloat(y.precioEntradaVU||0).toFixed(2),parseFloat(y.precioEntradaVT||0).toFixed(2),y.cantidadSalida,parseFloat(y.precioSalidaVU||0).toFixed(2),parseFloat(y.precioSalidaVT||0).toFixed(2)].forEach((S,R)=>{e.rect(a,n,r[R],s);let D=R===1?"left":"center",V=R===1?a+2:a+r[R]/2;e.text(String(S),V,n+7,null,null,D),a+=r[R]}),n+=s}),a=i,["Total","-","-","-",l.toFixed(2),"-","-",d.toFixed(2)].forEach((m,y)=>{e.rect(a,n,r[y],s),e.text(String(m),a+r[y]/2,n+7,null,null,"center"),a+=r[y]});const g=`Kardex_${new Date().toISOString().split("T")[0]}.pdf`;e.save(g),$("#kardexTable thead").append(`<tr>
                    <th colspan="2">Total</th>
                    <th>-</th>
                    <th>-</th>
                    <th>${parseFloat(l||0).toFixed(2)}</th>
                    <th>-</th>
                    <th>-</th>
                    <th>${parseFloat(d||0).toFixed(2)}</th>
                </tr>`)}}).catch(u=>{console.error("Error obteniendo datos de report:",u)})}function cl(){G(L(K,"inventarios")).then(t=>{t.exists()?$.each(t.val(),function(e,n){if(n!=null){Me++;var i=Me,s=n.articulo,r=n.detalle,o=n.precioVenta;if(n.cantidadTotal>0)var a=n.cantidadTotal,c="Locked";else var a='<span class="text-danger fw-bold">¡Agotado!</span>',c="Locked";$t.row.add([i,s,r,a,o,c]).draw(),G(L(K,"entradas")).then(l=>{l.exists()?$.each(l.val(),function(d,u){if(u!=null&&u.idInventario==e){Le++;var h=Le,_=n.articulo,p=n.detalle,g=u.cantidadTotal,m=u.precioCompra,y=u.fechaIngreso;Ut.row.add([h,_,p,g,m,y]).draw()}}):console.log("No data available")}).catch(l=>{console.error(l)}),G(L(K,"salidas")).then(l=>{l.exists()?$.each(l.val(),function(d,u){if(u!=null&&u.idInventario==e){$e++;var h=$e,_=n.articulo,p=n.detalle,g=u.cantidadTotal,m=u.precioVenta,y=u.fechaSalida;Bt.row.add([h,_,p,g,m,y]).draw()}}):console.log("No data available")}).catch(l=>{console.error(l)})}}):console.log("No data available")}).catch(t=>{console.error(t)})}$("#lock").click(function(){$("#component-newProduct").empty(),$("#lock").prop("hidden",!0).hide(),$("#unlock").show(),$t.clear(),Ut.clear(),Bt.clear(),Me=0,Le=0,$e=0,cl(),Swal.fire({title:"Sesión Cerrada 🔒",text:"¡Hasta Pronto!",icon:"error",timer:2e3,showConfirmButton:!1})});
