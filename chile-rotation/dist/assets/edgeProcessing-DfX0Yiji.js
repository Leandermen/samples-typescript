import{e as St}from"./deduplicate-mCR8zmlf.js";import{H as x}from"./InterleavedLayout-D2OOHR3g.js";import{e as g}from"./VertexAttribute-BlT9lbVY.js";import{C as R}from"./enums-CYMvjYBC.js";import{t as ht}from"./VertexElementDescriptor-BOD-G50G.js";import{gJ as ot,iI as Ot,h3 as Et,eU as H,cS as rt,cq as z,h1 as At,iJ as Tt,cr as gt,cT as st,ct as mt,cu as w,R as wt,cW as vt,ij as yt}from"./index-cznwfwyj.js";function Y(t,e=0){const n=t.stride;return Array.from(t.fields.keys()).map(s=>{const r=t.fields.get(s),i=r.constructor.ElementCount,l=$t(r.constructor.ElementType),c=r.offset,p=!(!r.optional||!r.optional.glNormalized);return new ht(s,i,l,c,n,p,e)})}function $t(t){const e=Mt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const Mt={u8:R.UNSIGNED_BYTE,u16:R.UNSIGNED_SHORT,u32:R.UNSIGNED_INT,i8:R.BYTE,i16:R.SHORT,i32:R.INT,f32:R.FLOAT},Rt=x().vec3f(g.POSITION).u16(g.COMPONENTINDEX),Pt=x().vec2u8(g.SIDENESS);Y(Pt);const K=x().vec3f(g.POSITION0).vec3f(g.POSITION1).vec2i16(g.NORMALCOMPRESSED).u16(g.COMPONENTINDEX).u8(g.VARIANTOFFSET,{glNormalized:!0}).u8(g.VARIANTSTROKE).u8(g.VARIANTEXTENSION,{glNormalized:!0}),G=x().vec3f(g.POSITION0).vec3f(g.POSITION1).vec2i16(g.NORMALCOMPRESSED).vec2i16(g.NORMAL2COMPRESSED).u16(g.COMPONENTINDEX).u8(g.VARIANTOFFSET,{glNormalized:!0}).u8(g.VARIANTSTROKE).u8(g.VARIANTEXTENSION,{glNormalized:!0});g.POSITION0,g.POSITION1,g.COMPONENTINDEX,g.VARIANTOFFSET,g.VARIANTSTROKE,g.VARIANTEXTENSION,g.NORMALCOMPRESSED,g.NORMAL2COMPRESSED,g.SIDENESS;const P=-1;var it;function Dt(t,e,n,s=_t){const r=t.vertices.position,i=t.vertices.componentIndex,l=ot(s.anglePlanar),c=ot(s.angleSignificantEdge),p=Math.cos(c),f=Math.cos(l),u=k.edge,I=u.position0,S=u.position1,d=u.faceNormal0,v=u.faceNormal1,h=Ft(t),y=xt(t),o=y.length/4,a=e.allocate(o);let m=0;const N=o,O=n.allocate(N);let T=0,$=0,E=0;const Z=Ot(0,o),_=new Float32Array(o);_.forEach((D,A,F)=>{r.getVec(y[4*A],I),r.getVec(y[4*A+1],S),F[A]=Et(I,S)}),Z.sort((D,A)=>_[A]-_[D]);const tt=new Array,et=new Array;for(let D=0;D<o;D++){const A=Z[D],F=_[A],W=y[4*A],dt=y[4*A+1],V=y[4*A+2],b=y[4*A+3],nt=b===P;if(r.getVec(W,I),r.getVec(dt,S),nt)H(d,h[3*V],h[3*V+1],h[3*V+2]),rt(v,d),u.componentIndex=i.get(W),u.cosAngle=z(d,v);else{if(H(d,h[3*V],h[3*V+1],h[3*V+2]),H(v,h[3*b],h[3*b+1],h[3*b+2]),u.componentIndex=i.get(W),u.cosAngle=z(d,v),Ct(u,f))continue;u.cosAngle<-.9999&&rt(v,d)}$+=F,E++,nt||Vt(u,p)?(e.write(a,m++,u),tt.push(F)):Lt(u,l)&&(n.write(O,T++,u),et.push(F))}const pt=new Float32Array(tt.reverse()),It=new Float32Array(et.reverse());return{regular:{instancesData:e.trim(a,m),lodInfo:{lengths:pt}},silhouette:{instancesData:n.trim(O,T),lodInfo:{lengths:It}},averageEdgeLength:$/E}}function Vt(t,e){return t.cosAngle<e}function Ct(t,e){return t.cosAngle>e}function Lt(t,e){const n=At(t.cosAngle),s=k.fwd,r=k.ortho;return Tt(s,t.position1,t.position0),n*(z(gt(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function xt(t){const e=t.faces.length/3,n=t.faces,s=t.neighbors;let r=0;for(let c=0;c<e;c++){const p=s[3*c],f=s[3*c+1],u=s[3*c+2],I=n[3*c],S=n[3*c+1],d=n[3*c+2];r+=p===P||I<S?1:0,r+=f===P||S<d?1:0,r+=u===P||d<I?1:0}const i=new Int32Array(4*r);let l=0;for(let c=0;c<e;c++){const p=s[3*c],f=s[3*c+1],u=s[3*c+2],I=n[3*c],S=n[3*c+1],d=n[3*c+2];(p===P||I<S)&&(i[l++]=I,i[l++]=S,i[l++]=c,i[l++]=p),(f===P||S<d)&&(i[l++]=S,i[l++]=d,i[l++]=c,i[l++]=f),(u===P||d<I)&&(i[l++]=d,i[l++]=I,i[l++]=c,i[l++]=u)}return i}function Ft(t){const e=t.faces.length/3,n=t.vertices.position,s=t.faces,r=X.v0,i=X.v1,l=X.v2,c=new Float32Array(3*e);for(let p=0;p<e;p++){const f=s[3*p],u=s[3*p+1],I=s[3*p+2];n.getVec(f,r),n.getVec(u,i),n.getVec(I,l),st(i,i,r),st(l,l,r),gt(r,i,l),mt(r,r),c[3*p]=r[0],c[3*p+1]=r[1],c[3*p+2]=r[2]}return c}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(it||(it={}));const k={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},X={v0:w(),v1:w(),v2:w()},_t={anglePlanar:4,angleSignificantEdge:35};function ct(t,e,n){const s=e/3,r=new Uint32Array(n+1),i=new Uint32Array(n+1),l=(o,a)=>{o<a?r[o+1]++:i[a+1]++};for(let o=0;o<s;o++){const a=t[3*o],m=t[3*o+1],N=t[3*o+2];l(a,m),l(m,N),l(N,a)}let c=0,p=0;for(let o=0;o<n;o++){const a=r[o+1],m=i[o+1];r[o+1]=c,i[o+1]=p,c+=a,p+=m}const f=new Uint32Array(6*s),u=r[n],I=(o,a,m)=>{if(o<a){const N=r[o+1]++;f[2*N]=a,f[2*N+1]=m}else{const N=i[a+1]++;f[2*u+2*N]=o,f[2*u+2*N+1]=m}};for(let o=0;o<s;o++){const a=t[3*o],m=t[3*o+1],N=t[3*o+2];I(a,m,o),I(m,N,o),I(N,a,o)}const S=(o,a)=>{const m=2*o,N=a-o;for(let O=1;O<N;O++){const T=f[m+2*O],$=f[m+2*O+1];let E=O-1;for(;E>=0&&f[m+2*E]>T;E--)f[m+2*E+2]=f[m+2*E],f[m+2*E+3]=f[m+2*E+1];f[m+2*E+2]=T,f[m+2*E+3]=$}};for(let o=0;o<n;o++)S(r[o],r[o+1]),S(u+i[o],u+i[o+1]);const d=new Int32Array(3*s),v=(o,a)=>o===t[3*a]?0:o===t[3*a+1]?1:o===t[3*a+2]?2:-1,h=(o,a)=>{const m=v(o,a);d[3*a+m]=-1},y=(o,a,m,N)=>{const O=v(o,a);d[3*a+O]=N;const T=v(m,N);d[3*N+T]=a};for(let o=0;o<n;o++){let a=r[o];const m=r[o+1];let N=i[o];const O=i[o+1];for(;a<m&&N<O;){const T=f[2*a],$=f[2*u+2*N];T===$?(y(o,f[2*a+1],$,f[2*u+2*N+1]),a++,N++):T<$?(h(o,f[2*a+1]),a++):(h($,f[2*u+2*N+1]),N++)}for(;a<m;)h(o,f[2*a+1]),a++;for(;N<O;)h(f[2*u+2*N],f[2*u+2*N+1]),N++}return d}function q(t,e,n,s,r,i=2){const l=1/(Math.abs(n)+Math.abs(s)+Math.abs(r)),c=n*l,p=s*l,f=r<=0?(c>=0?1:-1)*(1-Math.abs(p)):c,u=r<=0?(p>=0?1:-1)*(1-Math.abs(c)):p,I=e*i;t[I]=at(f),t[I+1]=at(u)}function at(t){return wt(Math.round(32767*t),-32767,32767)}class Nt{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Bt:bt}write(e,n,s){const r=this._edgeHashFunction(s);B.seed=r;const i=B.getIntRange(0,255),l=B.getIntRange(0,this.settings.variants-1),c=.7,p=B.getFloat(),f=255*(.5*Ut(-(1-Math.min(p/c,1))+Math.max(0,p-c)/(1-c),1.2)+.5);e.position0.setVec(n,s.position0),e.position1.setVec(n,s.position1),e.componentIndex.set(n,s.componentIndex),e.variantOffset.set(n,i),e.variantStroke.set(n,l),e.variantExtension.set(n,f)}trim(e,n){return e.slice(0,n)}}const Q=new Float32Array(6),U=new Uint32Array(Q.buffer),M=new Uint32Array(1);function bt(t){const e=Q;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],M[0]=5381;for(let n=0;n<U.length;n++)M[0]=31*M[0]+U[n];return M[0]}function Bt(t){const e=Q;e[0]=C(t.position0[0]),e[1]=C(t.position0[1]),e[2]=C(t.position0[2]),e[3]=C(t.position1[0]),e[4]=C(t.position1[1]),e[5]=C(t.position1[2]),M[0]=5381;for(let n=0;n<U.length;n++)M[0]=31*M[0]+U[n];return M[0]}const ft=1e4;function C(t){return Math.round(t*ft)/ft}function Ut(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}class J{constructor(){this._commonWriter=new Nt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,n,s){this._commonWriter.write(e,n,s),vt(L,s.faceNormal0,s.faceNormal1),mt(L,L);const{typedBuffer:r,typedBufferStride:i}=e.normalCompressed;q(r,n,L[0],L[1],L[2],i)}trim(e,n){return this._commonWriter.trim(e,n)}}J.Layout=K,J.glLayout=Y(K,1);class j{constructor(){this._commonWriter=new Nt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,n,s){this._commonWriter.write(e,n,s);{const{typedBuffer:r,typedBufferStride:i}=e.normalCompressed;q(r,n,s.faceNormal0[0],s.faceNormal0[1],s.faceNormal0[2],i)}{const{typedBuffer:r,typedBufferStride:i}=e.normal2Compressed;q(r,n,s.faceNormal1[0],s.faceNormal1[1],s.faceNormal1[2],i)}}trim(e,n){return this._commonWriter.trim(e,n)}}j.Layout=G,j.glLayout=Y(G,1);const L=w(),B=new yt;function Jt(t){const e=Wt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return lt.updateSettings(t.writerSettings),ut.updateSettings(t.writerSettings),Dt(e,lt,ut)}function Wt(t,e,n,s){if(e){const l=ct(n,s,t.count);return new Ht(n,s,l,t)}const r=St(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:s}),i=ct(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:Rt.createView(r.buffer)}}class Ht{constructor(e,n,s,r){this.faces=e,this.facesLength=n,this.neighbors=s,this.vertices=r}}const lt=new J,ut=new j,jt=x().vec3f(g.POSITION0).vec3f(g.POSITION1),Yt=x().vec3f(g.POSITION0).vec3f(g.POSITION1).u16(g.COMPONENTINDEX);export{Rt as I,Dt as a,jt as d,Jt as f,Yt as m,Wt as u};
