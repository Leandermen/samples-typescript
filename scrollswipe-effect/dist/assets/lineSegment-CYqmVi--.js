import{cR as t,cu as e,cS as g,cT as s,cq as p,cU as R,cV as b,R as h,cW as j}from"./index-DuJN_NeP.js";import{s as q}from"./ObjectStack-D1boBQpc.js";import{c as w}from"./plane-M_K2Hyr_.js";function u(r){return r?{origin:t(r.origin),vector:t(r.vector)}:{origin:e(),vector:e()}}function T(r,n,o=u()){return g(o.origin,r),s(o.vector,n,r),o}function U(r,n,o){return x(r,n,0,1,o)}function x(r,n,o,a,c){const{vector:i,origin:v}=r,f=s(w.get(),n,v),m=p(i,f)/R(i);return b(c,i,h(m,o,a)),j(c,c,r.origin)}new q(()=>u());export{T as b,U as j,u as v};