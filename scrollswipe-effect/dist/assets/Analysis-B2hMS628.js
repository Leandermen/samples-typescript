import{d9 as a,da as r,db as l,q as o,n as s,y as i,o as p,bj as c}from"./index-DQMEynLp.js";let d=0,t=class extends a(r(l(c))){constructor(n){super(n),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(n){const e=this.parent;if(e!=null)switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",n)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};s([i({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),s([i({type:String})],t.prototype,"title",void 0),s([i({clonable:!1,value:null})],t.prototype,"parent",null),s([i({readOnly:!0})],t.prototype,"isEditable",null),t=s([p("esri.analysis.Analysis")],t);const u=t;export{u as c};
