import{dc as V,gp as $,cL as h,hb as X,hj as F,d8 as A,cK as T,cH as b}from"./index-CI45JMVu.js";import{e as L}from"./mat3f64-q3fE-ZOt.js";import{e as x}from"./mat4f64-CSKppSlJ.js";import{e as C}from"./quatf64-Bdb9ZJJK.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&V(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r($)}static createVec3f64(){return new r(h)}static createVec4f64(){return new r(X)}static createMat3f64(){return new r(L)}static createMat4f64(){return new r(x)}static createQuatf64(){return new r(C)}get test(){return{length:this._items.length}}}r.createVec2f64();const G=r.createVec3f64();r.createVec4f64();r.createMat3f64();const H=r.createMat4f64(),K=r.createQuatf64();function d(t=j){return[t[0],t[1],t[2],t[3]]}function Y(t){return t}function y(t,e,c,s=d()){const f=c[0]-e[0],I=c[1]-e[1],a=c[2]-e[2],i=t[0]-e[0],p=t[1]-e[1],w=t[2]-e[2],_=I*w-a*p,E=a*i-f*w,P=f*p-I*i,l=_*_+E*E+P*P,g=Math.abs(l-1)>1e-5&&l>1e-12?1/Math.sqrt(l):1;return s[0]=_*g,s[1]=E*g,s[2]=P*g,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function O(t,e,c,s=0,f=Math.floor(c*(1/3)),I=Math.floor(c*(2/3))){if(c<3)return!1;e(o,s);let a=f,i=!1;for(;a<c-1&&!i;)e(n,a),a++,i=!F(o,n);if(!i)return!1;for(a=Math.max(a,I),i=!1;a<c&&!i;)e(N,a),a++,A(u,o,n),T(u,u),A(m,n,N),T(m,m),i=!F(o,N)&&!F(n,N)&&Math.abs(b(u,m))<Q;return i?(y(o,n,N,t),!0):(s!==0||f!==1||I!==2)&&O(t,e,c,0,1,2)}const Q=.99619469809,o=h(),n=h(),N=h(),u=h(),m=h(),j=[0,0,1,0];var M;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(M||(M={}));M.INFINITE_MIN|M.INFINITE_MAX;M.INFINITE_MAX;export{d as E,Y as F,O as X,G as c,H as f,K as o};