import{$ as n,j as o}from"./utils-B1r3t00d.js";import{l as c,b as p,f as i,i as u}from"./index-DQMEynLp.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-Cec2YJS5.js";import"./saveAPIKeyUtils-DI6vNpAu.js";import"./saveUtils-CLYaXZd3.js";const s="Image Service",g="imagery-layer-save",v="imagery-layer-save-as",f="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function l(r){var t;if(r.type==="imagery")return{isValid:!0};const{raster:e}=r,a=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(a==null?void 0:a.datasetFormat)==="RasterTileServer"&&(a.tileType==="Raster"||a.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function y(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function T(r,e){const{parsedUrl:a,title:t,fullExtent:m}=r;e.url=a.path,e.title||(e.title=t);try{e.extent=await c(m)}catch{e.extent=void 0}p(e,i.METADATA),r.type==="imagery-tile"&&u(e,i.TILED_IMAGERY)}async function P(r,e){const a=r.type==="imagery"?g:f;return n({layer:r,itemType:s,validateLayer:l,createItemData:y,errorNamePrefix:a},e)}async function R(r,e,a){const t=r.type==="imagery"?v:d;return o({layer:r,itemType:s,validateLayer:l,createItemData:y,errorNamePrefix:t,newItem:e,setItemProperties:T},a)}export{P as save,R as saveAs};
