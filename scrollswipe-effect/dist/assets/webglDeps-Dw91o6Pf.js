import{r as c}from"./Program-CSwkdi1j.js";import{h as g,x as y,s as j}from"./Program-CSwkdi1j.js";import{t as m}from"./NestedMap-DgiGbX8E.js";import{a as F,o as O,e as P}from"./ProgramTemplate-C_hzV7x7.js";import{m as C}from"./Texture-BEEDZAWo.js";import{eo as G}from"./index-DQMEynLp.js";import"./enums-CYMvjYBC.js";let d=class{constructor(e){this._rctx=e,this._store=new m}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLProgramObjects:e}}};function p(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function $(f){let e="";for(const t in f){const o=f[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:n,options:r,namespace:s}=o,i=s?`${s}_`:"";for(const a in r)e+=`#define ${i}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{g as BufferObject,y as FramebufferObject,c as Program,d as ProgramCache,j as Renderbuffer,F as ShaderCompiler,C as Texture,O as VertexArrayObject,G as createContext,P as createProgram,$ as glslifyDefineMap};