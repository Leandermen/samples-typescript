import{e as L}from"./mat3f64-q3fE-ZOt.js";import{e as _}from"./quatf64-Bdb9ZJJK.js";import{ce as j,cf as O,cg as S,ch as T,ci as Y,cj as k,ck as w,cl as W,cm as X,cn as Z,co as B,cp as C,cq as D,cr as d,cs as F,ct as G,cu as H,cv as x,cw as J}from"./index-cznwfwyj.js";function K(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function A(a,c,e){e*=.5;const o=Math.sin(e);return a[0]=o*c[0],a[1]=o*c[1],a[2]=o*c[2],a[3]=Math.cos(e),a}function N(a,c){const e=2*Math.acos(c[3]),o=Math.sin(e/2);return o>j()?(a[0]=c[0]/o,a[1]=c[1]/o,a[2]=c[2]/o):(a[0]=1,a[1]=0,a[2]=0),e}function b(a,c,e){const o=c[0],s=c[1],r=c[2],t=c[3],i=e[0],u=e[1],n=e[2],h=e[3];return a[0]=o*h+t*i+s*n-r*u,a[1]=s*h+t*u+r*i-o*n,a[2]=r*h+t*n+o*u-s*i,a[3]=t*h-o*i-s*u-r*n,a}function Q(a,c,e){e*=.5;const o=c[0],s=c[1],r=c[2],t=c[3],i=Math.sin(e),u=Math.cos(e);return a[0]=o*u+t*i,a[1]=s*u+r*i,a[2]=r*u-s*i,a[3]=t*u-o*i,a}function R(a,c,e){e*=.5;const o=c[0],s=c[1],r=c[2],t=c[3],i=Math.sin(e),u=Math.cos(e);return a[0]=o*u-r*i,a[1]=s*u+t*i,a[2]=r*u+o*i,a[3]=t*u-s*i,a}function U(a,c,e){e*=.5;const o=c[0],s=c[1],r=c[2],t=c[3],i=Math.sin(e),u=Math.cos(e);return a[0]=o*u+s*i,a[1]=s*u-o*i,a[2]=r*u+t*i,a[3]=t*u-r*i,a}function V(a,c){const e=c[0],o=c[1],s=c[2];return a[0]=e,a[1]=o,a[2]=s,a[3]=Math.sqrt(Math.abs(1-e*e-o*o-s*s)),a}function g(a,c,e,o){const s=c[0],r=c[1],t=c[2],i=c[3];let u,n,h,f,l,m=e[0],$=e[1],p=e[2],q=e[3];return n=s*m+r*$+t*p+i*q,n<0&&(n=-n,m=-m,$=-$,p=-p,q=-q),1-n>j()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-o)*u)/h,l=Math.sin(o*u)/h):(f=1-o,l=o),a[0]=f*s+l*m,a[1]=f*r+l*$,a[2]=f*t+l*p,a[3]=f*i+l*q,a}function aa(a){const c=J,e=c(),o=c(),s=c(),r=Math.sqrt(1-e),t=Math.sqrt(e);return a[0]=r*Math.sin(2*Math.PI*o),a[1]=r*Math.cos(2*Math.PI*o),a[2]=t*Math.sin(2*Math.PI*s),a[3]=t*Math.cos(2*Math.PI*s),a}function ca(a,c){const e=c[0],o=c[1],s=c[2],r=c[3],t=e*e+o*o+s*s+r*r,i=t?1/t:0;return a[0]=-e*i,a[1]=-o*i,a[2]=-s*i,a[3]=r*i,a}function oa(a,c){return a[0]=-c[0],a[1]=-c[1],a[2]=-c[2],a[3]=c[3],a}function v(a,c){const e=c[0]+c[4]+c[8];let o;if(e>0)o=Math.sqrt(e+1),a[3]=.5*o,o=.5/o,a[0]=(c[5]-c[7])*o,a[1]=(c[6]-c[2])*o,a[2]=(c[1]-c[3])*o;else{let s=0;c[4]>c[0]&&(s=1),c[8]>c[3*s+s]&&(s=2);const r=(s+1)%3,t=(s+2)%3;o=Math.sqrt(c[3*s+s]-c[3*r+r]-c[3*t+t]+1),a[s]=.5*o,o=.5/o,a[3]=(c[3*r+t]-c[3*t+r])*o,a[r]=(c[3*r+s]+c[3*s+r])*o,a[t]=(c[3*t+s]+c[3*s+t])*o}return a}function sa(a,c,e,o){const s=.5*Math.PI/180;c*=s,e*=s,o*=s;const r=Math.sin(c),t=Math.cos(c),i=Math.sin(e),u=Math.cos(e),n=Math.sin(o),h=Math.cos(o);return a[0]=r*u*h-t*i*n,a[1]=t*i*h+r*u*n,a[2]=t*u*n-r*i*h,a[3]=t*u*h+r*i*n,a}function ea(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}const ra=O,ta=S,ia=T,ua=b,na=Y,ha=k,Ma=w,z=W,fa=z,E=X,la=E,P=Z,ma=B,$a=C;function pa(a,c,e){const o=D(c,e);return o<-.999999?(d(M,qa,c),F(M)<1e-6&&d(M,ga,c),G(M,M),A(a,M,Math.PI),a):o>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(d(M,c,e),a[0]=M[0],a[1]=M[1],a[2]=M[2],a[3]=1+o,P(a,a))}const M=H(),qa=x(1,0,0),ga=x(0,1,0);function da(a,c,e,o,s,r){return g(y,c,s,r),g(I,e,o,r),g(a,y,I,2*r*(1-r)),a}const y=_(),I=_();function Pa(a,c,e,o){const s=ya;return s[0]=e[0],s[3]=e[1],s[6]=e[2],s[1]=o[0],s[4]=o[1],s[7]=o[2],s[2]=-c[0],s[5]=-c[1],s[8]=-c[2],P(a,v(a,s))}const ya=L();Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:V,conjugate:oa,copy:ra,dot:ha,equals:$a,exactEquals:ma,fromEuler:sa,fromMat3:v,getAxisAngle:N,identity:K,invert:ca,len:fa,length:z,lerp:Ma,mul:ua,multiply:b,normalize:P,random:aa,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:pa,scale:na,set:ta,setAxes:Pa,setAxisAngle:A,slerp:g,sqlerp:da,sqrLen:la,squaredLength:E,str:ea},Symbol.toStringTag,{value:"Module"}));export{A as I,ma as N,oa as O,sa as T,ta as X,N as v,b as x};
