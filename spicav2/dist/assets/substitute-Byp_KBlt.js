import{a$ as l,b0 as d,b1 as u,b2 as a,C as b}from"./index-CI45JMVu.js";const m=()=>b.getLogger("esri.intl.substitute");function h(e,t,r={}){const{format:n={}}=r;return l(e,s=>p(s,t,n))}function p(e,t,r){let n,s;const o=e.indexOf(":");if(o===-1?n=e.trim():(n=e.slice(0,o).trim(),s=e.slice(o+1).trim()),!n)return"";const i=d(n,t);if(i==null)return"";const f=(s?r==null?void 0:r[s]:null)??(r==null?void 0:r[n]);return f?g(i,f):s?w(i,s):c(i)}function g(e,t){switch(t.type){case"date":return a(e,t.intlOptions);case"number":return u(e,t.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(e)}}function w(e,t){switch(t.toLowerCase()){case"dateformat":return a(e);case"numberformat":return u(e);default:return m().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?a(e):/^numberformat/i.test(t)?u(e):c(e)}}function c(e){switch(typeof e){case"string":return e;case"number":return u(e);case"boolean":return""+e;default:return e instanceof Date?a(e):""}}export{h as s};
