import{$ as m,j as c}from"./utils-DkFDcgBl.js";import{r as u,a as y,e as i,i as p}from"./index-CI45JMVu.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-BHDnHZBI.js";import"./saveUtils-C5INeh5T.js";const s="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),y(e,i.METADATA),p(e,i.SINGLE_LAYER)}async function N(r,e){return m({layer:r,itemType:s,additionalItemType:f,validateLayer:n,createItemData:l,errorNamePrefix:d},e)}async function P(r,e,a){return c({layer:r,itemType:s,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{N as save,P as saveAs};
