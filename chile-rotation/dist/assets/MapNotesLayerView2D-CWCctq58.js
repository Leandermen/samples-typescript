import{E as u,V as f,q as w,e as c,w as a,P as o,J as y,n as _,o as V}from"./index-cznwfwyj.js";import{t as v}from"./highlightReasons-DS6LCTJp.js";import{m as C,u as H}from"./LayerView-x7CXRdWY.js";import{t as g}from"./GraphicContainer-CK7cPL1R.js";import{$ as d}from"./GraphicsView2D-DRfZaCq_.js";import"./scaleUtils-CA5b_-QW.js";import"./Container-Btkezz6u.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-CrLhXg0d.js";import"./AGraphicContainer-5BAVzSG-.js";import"./TechniqueInstance-DD4kPIq8.js";import"./UpdateTracking2D-6RYyLFzb.js";import"./TurboLine-oPwZiOPT.js";import"./enums-BRqP_wXA.js";import"./earcut-CuG_E1un.js";import"./GeometryUtils-BkiSYwUa.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-C2IHxd3g.js";import"./Program-CZXxfsC_.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DaUFLV6P.js";import"./constants-D5zmR9t2.js";import"./TileContainer-Dy9h6-cP.js";import"./WGLContainer-Bu3qFyUW.js";import"./ProgramTemplate-CXGBG2_1.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-70tWmhDi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CN4obBNn.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-B8vB3hAE.js";import"./TimeOnly-Br3o_OCt.js";import"./timeSupport-D94YaxKl.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Cf7EMUFT.js";const m="sublayers",n="layerView";let l=class extends C(H){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const ni=l;export{ni as default};