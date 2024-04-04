import{hY as Ot,hZ as St,hi as Et,d7 as jt,h_ as Gt,d1 as ft,h0 as Nt,D as m,E as F,F as Lt,bJ as zt,cL as J,h$ as It,cM as Vt,d6 as C,i0 as Wt,i1 as pt,ee as X,i2 as Bt,aG as kt,C as U,ef as G,i3 as tt,fa as et,f9 as rt,i4 as Ut,cK as Yt,i5 as qt,i6 as Ht,i7 as Dt,hW as L,i8 as gt,i9 as Jt,eM as Kt,ia as Zt,h3 as nt,ib as Qt,hj as Xt,bl as te,ic as ee}from"./index-CI45JMVu.js";import{e as yt}from"./mat3f64-q3fE-ZOt.js";import{e as b,o as E}from"./mat4f64-CSKppSlJ.js";import{a as R,R as N}from"./computeTranslationToOriginAndRotation-BCHICmlc.js";import{t as ot,o as re}from"./DoubleArray-jzA3T-15.js";import{v as ht,I as Y,x as ne}from"./quat-DM-4khch.js";import{e as K}from"./quatf64-Bdb9ZJJK.js";import{g as z,f as oe,u as mt}from"./meshVertexSpaceUtils-BpYWj1qy.js";import{n as M,s as $t,i as ae,r as w}from"./vec3-7Jxj9Gdz.js";import{i as $,T as A}from"./BufferView-CCt4q1Lj.js";function d(t=dt){return[t[0],t[1],t[2],t[3]]}function j(t,e,r=d()){return jt(r,t),r[3]=e,r}function Le(t,e=d()){const r=Gt(v,t);return At(e,ft(ht(e,r))),e}function at(t,e,r=d()){return Y(v,t,q(t)),Y(it,e,q(e)),ne(v,it,v),At(r,ft(ht(r,v)))}function ze(t,e,r,n=d()){return j(Ot,t,_),j(St,e,st),j(Et,r,lt),at(_,st,_),at(_,lt,n),n}function Ie(t){return t}function ie(t){return t[3]}function q(t){return Nt(t[3])}function At(t,e){return t[3]=e,t}const dt=[0,0,1,0],v=K(),it=K();d();const _=d(),st=d(),lt=d();var H;let y=H=class extends zt{constructor(t){super(t),this.translation=J(),this.rotationAxis=It(dt),this.rotationAngle=0,this.scale=Vt(1,1,1)}get rotation(){return j(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=C(t),this.rotationAngle=ie(t)}get localMatrix(){const t=b();return Y(ct,this.rotation,q(this.rotation)),Wt(t,ct,this.translation,this.scale),t}get localMatrixInverse(){return pt(b(),this.localMatrix)}applyLocal(t,e){return X(e,t,this.localMatrix)}applyLocalInverse(t,e){return X(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Bt(this.localMatrix,t.localMatrix)}clone(){const t={translation:C(this.translation),rotationAxis:C(this.rotationAxis),rotationAngle:this.rotationAngle,scale:C(this.scale)};return new H(t)}};m([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),m([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),m([F({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),m([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),m([F()],y.prototype,"rotation",null),m([F()],y.prototype,"localMatrix",null),m([F()],y.prototype,"localMatrixInverse",null),y=H=m([Lt("esri.geometry.support.MeshTransform")],y);const ct=K(),ut=y;function xt(t,e){return t.isGeographic||t.isWebMercator&&(e??!0)}function Ft(t,e){switch(t.type){case"georeferenced":return e.isGeographic;case"local":return e.isGeographic||e.isWebMercator}}function Ve(t,e,r,n){if(n!==void 0){kt(U.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const o=e.type==="local";if(!z(e)||n===o)return r.isGeographic||r.isWebMercator&&n;U.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}return Ft(e,r)}const I=()=>U.getLogger("esri.geometry.support.meshUtils.normalProjection");function se(t,e,r,n,o){return W(n)?(V(h.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o)),o):(I().error("Cannot convert spatial reference to PCPF"),o)}function le(t,e,r,n,o){return W(n)?(V(h.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o)),o):(I().error("Cannot convert to spatial reference from PCPF"),o)}function ce(t,e,r){return G(t,e,0,r,R(e),0,t.length/3),r}function ue(t,e,r){return G(t,R(r),0,e,r,0,t.length/3),e}function fe(t,e,r){return L(u,r),M(e,t,u),gt(u)||$t(e,e),e}function pe(t,e,r){if(L(u,r),M(e,t,u,4),gt(u)||$t(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function ge(t,e,r,n,o){if(!W(n))return I().error("Cannot convert spatial reference to PCPF"),o;V(h.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function ye(t,e,r,n,o){if(!W(n))return I().error("Cannot convert to spatial reference from PCPF"),o;V(h.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,e,r,n,o,a){if(!e)return;const l=r.count,c=R(o);if(Pt(o))for(let i=0;i<l;i++)n.getVec(i,O),e.getVec(i,g),N(c,O,S,c),tt(u,S),t===h.FROM_PCPF&&et(u,u),rt(g,g,u),a.setVec(i,g);else for(let i=0;i<l;i++){n.getVec(i,O),e.getVec(i,g),N(c,O,S,c),tt(u,S);const s=Ut(r.get(i,1));let f=Math.cos(s);t===h.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===h.FROM_PCPF&&et(u,u),rt(g,g,u),Yt(g,g),a.setVec(i,g)}return a}function W(t){return Pt(t)||he(t)}function Pt(t){return t.isWGS84||qt(t)||Ht(t)||Dt(t)}function he(t){return t.isWebMercator}var h;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const O=J(),g=J(),S=b(),u=yt();function Z(t,e,r){return xt(e.spatialReference,r==null?void 0:r.geographic)?Q(t,e,!1,r):de(t,e,r)}function Mt(t,e=E){const{position:r,normal:n,tangent:o}=t;return{position:w(new Float64Array(r.length),r,e),normal:n!=null?fe(n,new Float32Array(n.length),e):null,tangent:o!=null?pe(o,new Float32Array(o.length),e):null}}function Tt(t,e,r,n){const{position:o,normal:a,tangent:l}=t;if(!z(e))return{position:o,normal:a,tangent:l};const c=mt(e,n);return Z(Mt(t,r==null?void 0:r.localMatrix),c,{geographic:e.type==="local"})}function me(t,e,r){const n=oe(e,r),o=e.spatialReference,a=z(n);if(!a)return{vertexAttributes:Z(t,e,r),vertexSpace:n,transform:null};const{position:l,normal:c,tangent:i}=t,s=Ft(n,o);switch(n.type){case"georeferenced":return s?{vertexAttributes:Q(t,e,a,r),vertexSpace:n,transform:null}:{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut};case"local":return{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut}}}function D(t,e,r){return xt(e.spatialReference,r==null?void 0:r.geographic)?bt(t,e,r):vt(t,e,r)}function $e(t,e,r,n,o){if(!z(e))return D(t,n,o);const{spatialReference:a}=n,l=Tt(t,e,r,a);return n.equals(mt(e,a))?vt(l,n,o):D(l,n,o)}function Ae({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:l}){const c=r.origin??nt,i=r.origin!=null?(e==null?void 0:e.localMatrix)??E:E;if(r.type==="georeferenced"){const p=a??ot(t.length);if(Qt(i,E)?re(p,t):w(p,t,i),!Xt(c,nt)){const[k,Ct,_t]=c;for(let T=0;T<p.length;T+=3)p[T]+=k,p[T+1]+=Ct,p[T+2]+=_t}return G(p,n,0,p,o,0,p.length/3),p}let s=n;const f=R(n);s=o.isWebMercator&&l||!te(n,f)?s:f,N(n,c,P,s),ee(P,P,i);const x=a??ot(t.length);return w(x,t,P),G(x,s,0,x,o,0,x.length/3),x}function de(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,l=e.y,c=e.z??0,i=B(r?r.unit:null,e.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=o[s]*i+a,n[s+1]=o[s+1]*i+l,n[s+2]=o[s+2]*i+c;return{position:n,normal:t.normal,tangent:t.tangent}}function Q(t,e,r,n){const o=e.spatialReference,a=wt(e,n,P),l=new Float64Array(t.position.length),c=xe(t.position,a,o,l),i=L(Rt,a),s=Fe(c,l,t.normal,i,o),f=Pe(c,l,t.tangent,i,o);if(r){const{x,y:p,z:k}=e;ae(c,c,[-x,-p,-(k??0)])}return{position:c,normal:s,tangent:f}}function xe(t,e,r,n){w(n,t,e);const o=new Float64Array(t.length);return ue(n,o,r)}function Fe(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return M(a,r,n),le(a,t,e,o,a),a}function Pe(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);M(a,r,n,4);for(let l=3;l<a.length;l+=4)a[l]=r[l];return ye(a,t,e,o,a),a}function vt(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,l=e.y,c=e.z??0,i=B(r?r.unit:null,e.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=(o[s]-a)/i,n[s+1]=(o[s+1]-l)/i,n[s+2]=(o[s+2]-c)/i;return{position:n,normal:t.normal,tangent:t.tangent}}function bt(t,e,r){const n=e.spatialReference;wt(e,r,P);const o=pt(be,P),a=new Float64Array(t.position.length),l=Me(t.position,n,o,a),c=L(Rt,o);return{position:l,normal:Te(t.normal,t.position,a,n,c),tangent:ve(t.tangent,t.position,a,n,c)}}function wt(t,e,r){N(t.spatialReference,[t.x,t.y,t.z??0],r,R(t.spatialReference));const n=B(e?e.unit:null,t.spatialReference);return Jt(r,r,[n,n,n]),r}function Me(t,e,r,n){const o=ce(t,e,n),a=new Float64Array(o.length);return w(a,o,r),a}function Te(t,e,r,n,o){if(t==null)return null;const a=se(t,e,r,n,new Float32Array(t.length));return M(a,a,o),a}function ve(t,e,r,n,o){if(t==null)return null;const a=ge(t,e,r,n,new Float32Array(t.length));return M(a,a,o,4),a}function B(t,e){if(t==null)return 1;const r=Kt(e);return 1/Zt(r,"meters",t)}const P=b(),be=b(),Rt=yt(),We=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:Mt,georeference:Z,georeferenceApplyTransform:Tt,georeferenceByTransform:me,georeferenceGlobal:Q,getUnitScale:B,project:Ae,ungeoreference:D,ungeoreferenceByTransform:$e,ungeoreferenceGlobal:bt},Symbol.toStringTag,{value:"Module"}));export{q as A,$e as C,ue as E,Ae as G,Q as I,Mt as O,Tt as P,bt as Q,me as V,B as _,ce as a,d as b,Ve as c,ut as d,le as e,ye as f,We as g,ge as h,se as j,Le as k,ze as w,Ie as y};