import{p as S,s as y,ag as I,ah as T,aE as f,U as d,aF as b}from"./index-DQMEynLp.js";async function L(e,n){const a=S(e);if(!a)throw new y("invalid-url","Invalid scene service url");const r={...n,sceneServerUrl:a.url.path,layerId:a.sublayer??void 0};if(r.sceneLayerItem??(r.sceneLayerItem=await q(r)),r.sceneLayerItem==null)return g(r.sceneServerUrl.replace("/SceneServer","/FeatureServer"),r);const t=await F(r);if(!(t!=null&&t.url))throw new y("related-service-not-found","Could not find feature service through portal item relationship");r.featureServiceItem=t;const o=await g(t.url,r);return o.portalItem=t,o}async function q(e){const n=(await U(e)).serviceItemId;if(!n)return null;const a=new I({id:n,apiKey:e.apiKey}),r=await E(e);r!=null&&(a.portal=new T({url:r}));try{return a.load({signal:e.signal})}catch(t){return f(t),null}}async function U(e){if(e.rootDocument)return e.rootDocument;const n={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const a=await d(e.sceneServerUrl,n);e.rootDocument=a.data}catch{e.rootDocument={}}return e.rootDocument}async function E(e){var r;const n=(r=b)==null?void 0:r.findServerInfo(e.sceneServerUrl);if(n!=null&&n.owningSystemUrl)return n.owningSystemUrl;const a=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await d(a,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(t){f(t)}return null}async function g(e,n){var v,w,h;const a=S(e);if(!a)throw new y("invalid-feature-service-url","Invalid feature service url");const r=a.url.path,t=n.layerId;if(t==null)return{serverUrl:r};const o=U(n),s=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,j=(h=((v=s==null?void 0:s.layers)==null?void 0:v[0])||((w=s==null?void 0:s.tables)==null?void 0:w[0]))==null?void 0:h.customParameters,m=i=>{const A={query:{f:"json",...j},responseType:"json",authMode:i,signal:n.signal};return d(r,A)},D=m("anonymous").catch(()=>m("no-prompt")),[p,c]=await Promise.all([D,o]),u=c==null?void 0:c.layers,l=p.data&&p.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(u)){for(let i=0;i<Math.min(u.length,l.length);i++)if(u[i].id===t)return{serverUrl:r,layerId:l[i].id}}else if(t!=null&&t<l.length)return{serverUrl:r,layerId:l[t].id};throw new Error("could not find matching associated sublayer")}async function F({sceneLayerItem:e,signal:n}){if(!e)return null;try{const a=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n})).find(t=>t.type==="Feature Service")||null;if(!a)return null;const r=new I({portal:a.portal,id:a.id});return await r.load(),r}catch(a){return f(a),null}}export{L as s};
