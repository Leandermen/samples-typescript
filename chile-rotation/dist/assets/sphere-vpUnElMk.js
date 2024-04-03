import{cq as w,gX as a,h1 as E,cR as P,cu as l,cS as W,cT as g,cW as $,cV as h,gU as U,cp as Z,cf as R,h2 as j,k as B,ce as D,h3 as v,cr as _,h4 as F,dZ as G,cU as H,h5 as p,ct as I,h6 as L,eU as O,h7 as J,h8 as K,gY as Q}from"./index-cznwfwyj.js";import{s as tt}from"./ObjectStack-BOm1bupE.js";import{c as f,f as nt}from"./plane-BxnsCpAU.js";function et(t,e){const n=w(t,e)/(a(t)*a(e));return-E(n)}function z(t){return t?T(P(t.origin),P(t.direction)):T(l(),l())}function T(t,e){return{origin:t,direction:e}}function Tt(t,e){const n=it.get();return n.origin=t,n.direction=e,n}function ot(t,e,n=z()){return W(n.origin,t),g(n.direction,e,t),n}function rt(t,e,n){const o=w(t.direction,g(n,e,t.origin));return $(n,t.origin,h(n,t.direction,o)),n}const it=new tt(()=>z()),ct=q();function q(){return U()}const st=Z,ut=Z;function C(t,e){return R(e,t)}function at(t,e){return j(t[0],t[1],t[2],e)}function ft(t){return t}function gt(t){t[0]=t[1]=t[2]=t[3]=0}function lt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function M(t){return t[3]}function ht(t){return t}function dt(t,e,n,o){return j(t,e,n,o)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function mt(t,e,n){return B.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&C(t,n),n}function S(t,e,n){if(e==null||!V(t,e,m))return!1;let{t0:o,t1:r}=m;if((o<0||r<o&&r>0)&&(o=r),o<0)return!1;if(n){const{origin:i,direction:c}=e;n[0]=i[0]+c[0]*o,n[1]=i[1]+c[1]*o,n[2]=i[2]+c[2]*o}return!0}function $t(t,e,n){const o=ot(e,n);if(!V(t,o,m))return[];const{origin:r,direction:i}=o,{t0:c,t1:s}=m,u=d=>{const y=l();return Q(y,r,i,d),A(t,y,y)};return Math.abs(c-s)<D()?[u(c)]:[u(c),u(s)]}const m={t0:0,t1:0};function V(t,e,n){const{origin:o,direction:r}=e,i=Mt;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(c===0)return!1;const s=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),u=s*s-4*c*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const d=Math.sqrt(u);return n.t0=(-s-d)/(2*c),n.t1=(-s+d)/(2*c),!0}const Mt=l();function St(t,e){return S(t,e,null)}function yt(t,e,n){if(S(t,e,n))return n;const o=X(t,e,f.get());return $(n,e.origin,h(f.get(),e.direction,v(e.origin,o)/a(e.direction))),n}function X(t,e,n){const o=f.get(),r=nt.get();_(o,e.origin,e.direction);const i=M(t);_(n,o,e.origin),h(n,n,1/a(n)*i);const c=Y(t,e.origin),s=et(e.origin,n);return F(r,s+c,o),G(n,n,r),n}function xt(t,e,n){return S(t,e,n)?n:(rt(e,t,n),A(t,n,n))}function A(t,e,n){const o=g(f.get(),e,t),r=h(f.get(),o,t[3]/a(o));return $(n,r,t)}function Rt(t,e){const n=g(f.get(),e,t),o=H(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function Y(t,e){const n=g(f.get(),e,t),o=a(n),r=M(t),i=r+Math.abs(r-o);return E(r/i)}const x=l();function k(t,e,n,o){const r=g(x,e,t);switch(n){case p.X:{const i=L(r,x)[2];return O(o,-Math.sin(i),Math.cos(i),0)}case p.Y:{const i=L(r,x),c=i[1],s=i[2],u=Math.sin(c);return O(o,-u*Math.cos(s),-u*Math.sin(s),Math.cos(c))}case p.Z:return I(o,r);default:return}}function N(t,e){const n=g(b,e,t);return a(n)-t[3]}function bt(t,e,n,o){const r=N(t,e),i=k(t,e,p.Z,b),c=h(b,i,n-r);return $(o,e,c)}function qt(t,e){const n=J(t,e),o=M(t);return n<=o*o}function At(t,e,n=U()){const o=v(t,e),r=t[3],i=e[3];return o+i<r?(R(n,t),n):o+r<i?(R(n,e),n):(K(n,t,e,(o+i-r)/(2*o)),n[3]=(o+r+i)/2,n)}const b=l(),Pt=q();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:N,angleToSilhouette:Y,axisAt:k,clear:gt,closestPoint:xt,closestPointOnSilhouette:X,containsPoint:qt,copy:C,create:q,distanceToSilhouette:Rt,elevate:pt,equals:ut,exactEquals:st,fromCenterAndRadius:at,fromRadius:lt,fromValues:dt,getCenter:ht,getRadius:M,intersectLine:$t,intersectRay:S,intersectRayClosestSilhouette:yt,intersectsRay:St,projectPoint:A,setAltitudeAt:bt,setExtent:mt,tmpSphere:Pt,union:At,wrap:ft},Symbol.toStringTag,{value:"Module"}));export{St as I,C as O,M as V,ht as Z,z as d,Tt as p,qt as s,q as w};
