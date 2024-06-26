import{gp as X,K as q,P as $,gq as I,J as Z,gr as ee,C as B,s as te,fb as se,gs as re,f5 as ie,gt as ne,e_ as ae,f3 as oe,e$ as le,f0 as he,gu as me,f1 as ce,an as de,gv as pe,V as ue,a2 as U,x as fe,y as ye,gw as _e,A as ge,a_ as ve,em as we,D as A,E as L,F as xe,am as Re,gx as $e}from"./index-CI45JMVu.js";import{j as Me,m as z}from"./perspectiveUtils-D9cFzIID.js";import"./GeometryUtils-WQ-WU3PD.js";import"./UpdateTracking2D-BBORXY9t.js";import{d as D}from"./enums-BRqP_wXA.js";import"./definitions-C14Q9bsB.js";import"./floatRGBA-BdtOh7fb.js";import{i as Ee,E as Ve}from"./Container-Cy0V7311.js";import{n as be,h as Te}from"./WGLContainer-BP9CtOyz.js";import{e as Ce,m as W}from"./Texture-BHPkEOnh.js";import{D as Se,F as Q}from"./enums-CYMvjYBC.js";import{h as k}from"./Program-CmkQ5lgC.js";import"./LabelMetric-B_qrnqJ4.js";import"./StyleDefinition-pu9RBNlY.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-BmhjuTQL.js";import"./pbf-CewZkgHM.js";import"./FeatureCommandQueue-DQmvV9Yy.js";import"./OrderIndependentTransparency-D0wfjx-a.js";import"./testSVGPremultipliedAlpha-Bm1jpgTj.js";import"./GraphicsView2D-BcxV-Umq.js";import"./earcut-G_ZtLlzG.js";import{r as qe}from"./vec3f32-nZdmKIgz.js";import{e as Ae}from"./mat3f64-q3fE-ZOt.js";import{f as De}from"./utils-CKBG5ggT.js";import{o as Pe}from"./ProgramTemplate-DJ04oH2k.js";import{m as Ge,u as Oe}from"./LayerView-XPLjBV0L.js";import"./normalizeUtilsSync-DmdcbJ2h.js";import"./TurboLine-BG7UPvy_.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-hoVmiG9-.js";import"./highlightReasons-BeZqPJaK.js";import"./constants-D5zmR9t2.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BPPRiZbz.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-DfLrgW_-.js";import"./AttributeStore-D9QLrkDp.js";import"./TimeOnly-CsywDJaQ.js";import"./timeSupport-CQP39dd0.js";import"./json-Wa8cmqdu.js";import"./basicInterfaces-GbxEOYtk.js";import"./scaleUtils-D_GRB4Er.js";const y=Ae(),He={none:D.None,loop:D.Loop,oscillate:D.Oscillate};function je(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?He[s.repeatType]:void 0}:{}}class Ie extends Ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=X(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(q(()=>this.elementView.element.opacity,t=>this.opacity=t,$),q(()=>[this.elementView.coords],()=>{this.requestRender()},$),q(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=I(this.texture),this.requestRender()},$),Z(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(ee(t.content,"play",()=>this.requestRender()))},$)),e.element.load().catch(t=>{B.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new te("element-load-error","Element cannot be displayed",{element:e,error:t}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=I(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,h=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(h,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else{const m=new Ce;if(m.wrapMode=Se.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=h,m.height=a,"getFrame"in r){const l=o=>{this.texture?this.texture.setData(o):this.texture=new W(t,m,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=De(r,je(this.elementView.element.animationOptions),null,l))}else this.texture=new W(t,m,r);this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,h,a]=r.rings[0],m=this._vertices,{x:l,y:o}=e,p=t!==0;p?m.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o,a[0]-l,a[1]-o,n[0]+t-l,n[1]-o,n[0]+t-l,n[1]-o,i[0]+t-l,i[1]-o,h[0]+t-l,h[1]-o,a[0]+t-l,a[1]-o]):m.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o]),this.isWrapAround=p}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=k.createVertex(e,Q.DYNAMIC_DRAW,i);const n=k.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new Pe(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Me(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),se(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}}class Ue extends be{constructor(){super(...arguments),this._localOrigin=re(0,0),this._viewStateId=-1,this._dvsMat3=ie()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Te.overlay],target:()=>this.children,drawPhase:Ve.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:h,rotation:a,viewpoint:m,displayMat3:l}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,p=n*i[0],f=n*i[1],{x:M,y:v}=m.targetGeometry,E=ne(M,t.spatialReference);this._localOrigin.x=E,this._localOrigin.y=v;const V=h*p,w=h*f,c=ae(this._dvsMat3);oe(c,c,l),le(c,c,he(p/2,f/2)),me(c,c,qe(p/V,-f/w,1)),ce(c,c,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:h,size:a,viewpoint:m}=r,l=this._localOrigin;let o=0;const p=de(n);if(p&&n.isWrappable){const f=a[0],M=a[1],v=180/Math.PI*i,E=Math.abs(Math.cos(v)),V=Math.abs(Math.sin(v)),w=Math.round(f*E+M*V),[c,b]=p.valid,u=pe(n),{x:P,y:N}=m.targetGeometry,J=[P,N],T=[0,0];r.toScreen(T,J);const x=[0,0];let C;C=w>h?.5*h:.5*w;const G=Math.floor((P+.5*u)/u),K=c+G*u,Y=b+G*u,S=[T[0]+C,0];r.toMap(x,S),x[0]>Y&&(o=u),S[0]=T[0]-C,r.toMap(x,S),x[0]<K&&(o=-u);for(const R of t){const O=R.elementView.bounds;if(O==null)continue;const[H,,j]=O;H<c&&j>c?R.updateDrawCoords(l,u):j>b&&H<b?R.updateDrawCoords(l,-u):R.updateDrawCoords(l,o)}}else for(const f of t)f.updateDrawCoords(l,o)}}let g=class extends Ge(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new ue}attach(){this.addAttachHandles([U(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),U(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new Ue,this.container.addChild(this._overlayContainer),this._fetchQueue=new fe({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new ye({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:h}}of this._elementReferences.values())n!=null&&_e(n.rings,i)&&t.push({type:"media",element:h,layer:this.layer,mapPoint:s,sourcePoint:h.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new Le(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{ge(e)||B.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(d,s,!0);const r=new ve({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){we(this._elementReferences,e.uid,()=>{const t=new z({element:e,spatialReference:this.view.spatialReference}),r=new Ie(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],h=[];for(const a of this._tileStrategy.tiles){const m=F(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||h.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of h)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new z({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)F(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};A([L()],g.prototype,"layer",void 0),A([L({readOnly:!0})],g.prototype,"elements",void 0),g=A([xe("esri.views.2d.layers.MediaLayerView2D")],g);const d=Re(),_={xmin:0,ymin:0,xmax:0,ymax:0};function F(s,e,t){return s.getTileBounds(d,e.key,!0),_.xmin=d[0],_.ymin=d[1],_.xmax=d[2],_.ymax=d[3],$e(_,t)}class Le{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Pt=g;export{Pt as default};
