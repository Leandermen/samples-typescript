import{g as s,k as p,n as r,y as a,o as m}from"./index-cznwfwyj.js";import{a as n}from"./BitmapContainer-B1CLfsRO.js";import{m as h,u as d}from"./LayerView-x7CXRdWY.js";import{v as c}from"./ExportStrategy-iyh6GZbd.js";import{i as g}from"./RefreshableLayerView-Bo35eSwe.js";import"./WGLContainer-Bu3qFyUW.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-C2IHxd3g.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CrLhXg0d.js";import"./Program-CZXxfsC_.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-CXGBG2_1.js";import"./Container-Btkezz6u.js";import"./highlightReasons-DS6LCTJp.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-CuG_E1un.js";import"./featureConversionUtils-70tWmhDi.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-CA5b_-QW.js";import"./Bitmap-pZovSX7S.js";let t=class extends g(h(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const z=t;export{z as default};