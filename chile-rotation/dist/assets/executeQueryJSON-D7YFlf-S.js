import{z as e,as as f,at as i}from"./index-cznwfwyj.js";import{c as m}from"./query-J6BvmzsL.js";async function w(a,t,r){const n=await u(a,t,r);return e.fromJSON(n)}async function u(a,t,r){const n=f(a),s={...r},o=i.from(t),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{u as a,w as s};
