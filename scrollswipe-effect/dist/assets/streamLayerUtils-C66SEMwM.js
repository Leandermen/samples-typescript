import{$ as m,j as c}from"./utils-B1r3t00d.js";import{l as u,b as y,f as i,i as p}from"./index-DQMEynLp.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-Cec2YJS5.js";import"./saveAPIKeyUtils-DI6vNpAu.js";import"./saveUtils-CLYaXZd3.js";const s="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function o(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:l,fullExtent:a}=r;e.url=t.path,e.title||(e.title=l),e.extent=null,a!=null&&(e.extent=await u(a)),y(e,i.METADATA),p(e,i.SINGLE_LAYER)}async function N(r,e){return m({layer:r,itemType:s,additionalItemType:f,validateLayer:n,createItemData:o,errorNamePrefix:d},e)}async function P(r,e,t){return c({layer:r,itemType:s,validateLayer:n,createItemData:o,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{N as save,P as saveAs};
