import{n as s,y as n,o as l,bY as h,dG as i,cD as f,f2 as S,as as g,bW as y,U as R,f3 as w}from"./index-cznwfwyj.js";let o=class extends h{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=i(this.outSpatialReference),r.inSR=i(t.spatialReference),r.geometries=JSON.stringify({geometryType:f(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([n()],o.prototype,"geometries",void 0),s([n({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([n()],o.prototype,"transformation",void 0),s([n()],o.prototype,"transformForward",void 0),o=s([l("esri.rest.support.ProjectParameters")],o);const j=o,F=S(j);async function N(e,t,r){t=F(t);const a=g(e),p={...a.query,f:"json",...t.toJSON()},c=t.outSpatialReference,m=f(t.geometries[0]),u=y(p,r);return R(a.path+"/project",u).then(({data:{geometries:d}})=>w(d,m,c))}export{N as n,j as p};
