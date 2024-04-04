import{ab as f,s as y,D as n,E as d,dx as j,f as S,bH as m,a_ as w,ht as P,dz as L,bI as O,F as K,H as $,ga as U,m as V,hu as M,hv as C,C as x,hw as q,I as z,S as k,Q as F,o as N}from"./index-CI45JMVu.js";import{i as R}from"./originUtils-D69mHv66.js";import{p as J,n as D}from"./resourceUtils-BGRXgoVb.js";import{i as T}from"./saveAPIKeyUtils-BHDnHZBI.js";import{t as B}from"./saveUtils-C5INeh5T.js";async function H(c,a,e,t,i,r,o){let s=null;if(e!=null){const h=`${c}/nodepages/`,b=h+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(b,{query:{f:"json",...t,token:i},responseType:"json",signal:o})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:h}}catch(E){r!=null&&r.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",b,E),s=E}}if(!a)return null;const l=a==null?void 0:a.split("/").pop(),p=`${c}/nodes/`,u=p+l;try{return{type:"node",rootNode:(await f(u,{query:{f:"json",...t,token:i},responseType:"json",signal:o})).data,urlPrefix:p}}catch(h){throw new y("sceneservice:root-node-missing","Root node missing.",{pageError:s,nodeError:h,url:u})}}let Z=null;function Q(){return Z}const te=c=>{let a=class extends c{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=$(async(e,t,i)=>{switch(e){case v.SAVE:return this._save(t);case v.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return S.fromJSON(e.spatialReference);const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new S(r):null}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const s=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return w.fromJSON(s,i)}const r=t.store,o=this._readSpatialReference(t);return o==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(s=>s<I)?null:new w({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var o;const i=(o=this.portalItem)==null?void 0:o.title;if(this.sublayerTitleMode==="item-title")return U(this.url,t.name);let r=t.name;if(!r&&this.url){const s=V(this.url);s!=null&&(r=s.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),M(r)}set url(e){const t=C({layer:this,url:e,nonStandardUrlAllowed:!1,logger:x.getLogger(this)});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){q(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=z(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=H(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,x.getLogger(this),t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,o;if((e==null?void 0:e.type)==="page"){const s=e.rootIndex%e.pageSize,l=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[s];if(((r=l==null?void 0:l.obb)==null?void 0:r.center)==null||l.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<I||this.fullExtent==null||this.fullExtent.hasZ)return;const p=l.obb.halfSize,u=l.obb.center[2],h=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);this.fullExtent.zmin=u-h,this.fullExtent.zmax=u+h}else if((e==null?void 0:e.type)==="node"){const s=(o=e.rootNode)==null?void 0:o.mbs;if(!Array.isArray(s)||s.length!==4||s[0]<I)return;const l=s[2],p=s[3],{fullExtent:u}=this;u&&(u.zmin=l-p,u.zmax=l+p)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var o;const t=await f(((o=this.parsedUrl)==null?void 0:o.path)??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await f(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const o of r)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((o,s,l)=>l.indexOf(o)===s),i===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(o=>o!=="Hosted Service")))}async _saveAs(e,t){var p;const i={...A,...t};let r=k.from(e);if(!r)throw new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");T(r),r.id&&(r=r.clone(),r.id=null);const o=r.portal||F.getDefault();await this._ensureLoadBeforeSave(),r.type=_,r.portal=o;const s=N(r,"portal-item",!0),l={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(l,s,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,g.newItem),await o.signIn(),await((p=o.user)==null?void 0:p.addItem({item:r,folder:i==null?void 0:i.folder,data:l})),await J(this.resourceReferences,s),this.portalItem=r,R(s),s.portalItem=r,r}async _save(e){const t={...A,...e};if(!this.portalItem)throw new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(T(this.portalItem),this.portalItem.type!==_)throw new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`);await this._ensureLoadBeforeSave();const i=N(this.portalItem,"portal-item",!0),r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await D(this.portalItem,r,this.resourceReferences,i),R(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const r=i==null?void 0:i.validationOptions;B(t,{errorName:"sceneservice:save"},{ignoreUnsupported:r==null?void 0:r.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const o=r==null?void 0:r.enabled,s=Q();if(o&&s){const l=(await s()).validate(e,i.portalItemLayerType);if(!l.length)return;const p=`Layer item did not validate:
${l.join(`
`)}`;if(x.getLogger(this).error(`_validateAgainstJSONSchema(): ${p}`),r.failPolicy==="throw"){const u=l.map(h=>new y("sceneservice:schema-validation",h));throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:u})}}}};return n([d(j)],a.prototype,"id",void 0),n([d({type:S})],a.prototype,"spatialReference",void 0),n([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),n([d({type:w})],a.prototype,"fullExtent",void 0),n([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),n([d({readOnly:!0,type:P})],a.prototype,"heightModelInfo",void 0),n([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),n([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),n([d({readOnly:!0})],a.prototype,"version",void 0),n([m("version",["store.version"])],a.prototype,"readVersion",null),n([d({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),n([d({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),n([d({type:String})],a.prototype,"title",void 0),n([m("portal-item","title")],a.prototype,"readTitlePortalItem",null),n([m("service","title",["name"])],a.prototype,"readTitleService",null),n([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),n([d(L)],a.prototype,"url",null),n([O("url")],a.prototype,"writeUrl",null),n([d()],a.prototype,"parsedUrl",null),n([d({readOnly:!0})],a.prototype,"store",void 0),n([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=n([K("esri.layers.mixins.SceneService")],a),a},I=-1e38;var g;(function(c){c[c.existingItem=0]="existingItem",c[c.newItem=1]="newItem"})(g||(g={}));const _="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var v;(function(c){c[c.SAVE=0]="SAVE",c[c.SAVE_AS=1]="SAVE_AS"})(v||(v={}));export{te as L,v as P,H as r};
