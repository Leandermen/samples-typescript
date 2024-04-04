import{bT as M,S as I,V as A}from"./index-CI45JMVu.js";import{w as b,e as v}from"./portalLayers-Dl0uvIcv.js";import{a as L}from"./lazyLayerLoader-DKG5ulDG.js";import"./associatedFeatureServiceUtils-C3nZu6Qh.js";function w(e){return u(e,"notes")}function h(e){return u(e,"markup")}function C(e){return u(e,"route")}function u(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function F(e,r,a){if(!r)return;const t=r.map(y=>x(y,a)),i=await Promise.allSettled(t);for(const y of i)y.status==="rejected"||y.value&&e.add(y.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},T={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},G={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},B={...T,LinkChartLayer:"LinkChartLayer"},D={...g},U={...G};async function x(e,r){return E(await R(e,r),e,r)}async function E(e,r,a){const t=new e;return t.read(r,a.context),t.type==="group"&&(r.layerType==="GroupLayer"?await K(t,r,a):S(r)?J(t,r,a.context):f(r)&&await P(t,r,a.context)),await M(t,a.context),t}async function R(e,r){var c,o;const a=r.context,t=N(a);let i=e.layerType||e.type;!i&&(r!=null&&r.defaultLayerType)&&(i=r.defaultLayerType);const y=t[i];let n=y?L[y]:L.UnknownLayer;if(S(e)){const s=a==null?void 0:a.portal;if(e.itemId){const l=new I({id:e.itemId,portal:s});await l.load();const p=(await b(l,new v)).className||"UnknownLayer";n=L[p]}}else i==="ArcGISFeatureLayer"?w(e)||h(e)?n=L.MapNotesLayer:C(e)?n=L.RouteLayer:f(e)&&(n=L.GroupLayer):(c=e.wmtsInfo)!=null&&c.url&&e.wmtsInfo.layerIdentifier?n=L.WMTSLayer:i==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(n=L.UnsupportedLayer);return n()}function f(e){var r,a;return e.layerType!=="ArcGISFeatureLayer"||S(e)?!1:(((a=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:a.length)??0)>1}function S(e){return e.type==="Feature Collection"}function N(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=k;break;case"ground":r=O;break;case"tables":r=V;break;default:r=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=U;break;case"tables":r=D;break;default:r=B}break;default:switch(e.layerContainerType){case"basemap":r=G;break;case"tables":r=g;break;default:r=T}}return r}async function K(e,r,a){const t=new A,i=F(t,Array.isArray(r.layers)?r.layers:[],a);try{try{if(await i,e.type==="group")return e.layers.addMany(t),e}catch(y){e.destroy();for(const n of t)n.destroy();throw y}}catch(y){throw y}}function J(e,r,a){r.itemId&&(e.portalItem=new I({id:r.itemId,portal:a==null?void 0:a.portal}),e.when(()=>{var i,y;const t=n=>{var s,l;const c=n.layerId;m(n,e,r,c,a);const o=(l=(s=r.featureCollection)==null?void 0:s.layers)==null?void 0:l[c];o&&n.read(o,a)};(i=e.layers)==null||i.forEach(t),(y=e.tables)==null||y.forEach(t)}))}async function P(e,r,a){var o;const t=L.FeatureLayer,i=await t(),y=r.featureCollection,n=y==null?void 0:y.showLegend,c=(o=y==null?void 0:y.layers)==null?void 0:o.map((s,l)=>{const p=new i;p.read(s,a);const d={...a,ignoreDefaults:!0};return m(p,e,r,l,d),n!=null&&p.read({showLegend:n},d),p});e.layers.addMany(c??[])}function m(e,r,a,t,i){var y;e.read({id:`${r.id}-sublayer-${t}`,visibility:((y=a.visibleLayers)==null?void 0:y.includes(t))??!0},i)}export{K as populateGroupLayer,F as populateOperationalLayers};
