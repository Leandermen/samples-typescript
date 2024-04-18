import{n as r,y as o,bi as g,o as m,c as l,g as d,k as u,w as c}from"./index-DQMEynLp.js";import{a as y}from"./BitmapContainer-BJXj6MwG.js";import{m as f,u as w}from"./LayerView-CME3g9rP.js";import{$ as x}from"./GraphicsView2D-D3f24g1o.js";import{h as _}from"./HighlightGraphicContainer-BEPzsj5o.js";import{v}from"./ExportStrategy-CieS3PW5.js";import{m as H}from"./ExportImageParameters-BpEMBEjm.js";import{i as I}from"./RefreshableLayerView-DlRf0TiE.js";import{U,r as V}from"./drapedUtils-ATEFKym3.js";import"./WGLContainer-Czs1tlQw.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-Db0YPptB.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-BEEDZAWo.js";import"./Program-CSwkdi1j.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-C_hzV7x7.js";import"./Container-CeOHXViL.js";import"./highlightReasons-B_7v1-X0.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-CfUdRu7w.js";import"./featureConversionUtils-mCO6_gJ8.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-mW4pzHbQ.js";import"./UpdateTracking2D-DxaNkYtL.js";import"./TurboLine-C_2jme3n.js";import"./GeometryUtils-XOKofNyW.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-DkCS8-vN.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-eLB0_y9s.js";import"./TimeOnly-CKki0_dt.js";import"./timeSupport-BrBf9Irm.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-Cr2VcYgR.js";import"./normalizeUtilsSync-DxDzidWa.js";import"./AGraphicContainer-BsTauZ4g.js";import"./TechniqueInstance-CUXJ-2oE.js";import"./TileContainer-DD7ZIzm0.js";import"./vec3f32-nZdmKIgz.js";import"./Bitmap-DfG8miqj.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BbGnSYdy.js";import"./popupUtils-BQXSN9ns.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends P(I(f(w))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const vt=s;export{vt as default};
