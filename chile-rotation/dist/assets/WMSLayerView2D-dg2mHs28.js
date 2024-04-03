import{n as a,y as h,bi as $,o as S,D as F,s as f,an as C,g as E,k as R,w as q,aJ as U}from"./index-cznwfwyj.js";import{a as M}from"./BitmapContainer-B1CLfsRO.js";import{m as V,u as L}from"./LayerView-x7CXRdWY.js";import{v as W}from"./ExportStrategy-iyh6GZbd.js";import{i as A}from"./RefreshableLayerView-Bo35eSwe.js";import{a as H}from"./ExportWMSImageParameters-sKGcHb-r.js";import"./WGLContainer-Bu3qFyUW.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-C2IHxd3g.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CrLhXg0d.js";import"./Program-CZXxfsC_.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-CXGBG2_1.js";import"./Container-Btkezz6u.js";import"./highlightReasons-DS6LCTJp.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-CuG_E1un.js";import"./featureConversionUtils-70tWmhDi.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-CA5b_-QW.js";import"./Bitmap-pZovSX7S.js";const z=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,o){const{layer:s}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return C(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h($)],t.prototype,"timeExtent",void 0),t=a([S("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends z(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new M}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new M,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:s}=e,{spatialReference:d}=t;let i,p=0,n=0;if(r.children.some(g=>{const{width:w,height:v,resolution:b,x:l,y:x}=g,I=l+b*w,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(i=new U({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([S("esri.views.2d.layers.WMSLayerView2D")],u);const ht=u;export{ht as default};
