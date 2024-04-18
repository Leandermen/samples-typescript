import{cd as A,ar as D,gq as S,U as O,gr as q,s as m,bk as z,n as d,y,bj as L,ef as P,w as U,P as x,gs as C,g as _,gt as M,gu as E,dW as I,o as k,gv as j,e as N,f4 as F}from"./index-DQMEynLp.js";import{E as H}from"./ByteSizeUnit-BsxeN7wM.js";function J(e,i=!1){return e<=A?i?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(i){this._validateJSON(i);const{location:a,data:t}=i;this.location=Object.freeze(D(a));const l=this.location.width,n=this.location.height;let o=!0,r=!0;const c=Math.ceil(l*n/32),s=J(c);let h=0;for(let f=0;f<t.length;f++){const u=f%32;t[f]?(r=!1,s[h]|=1<<u):o=!1,u===31&&++h}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+S(s))}getAvailability(i,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const t=(i-this.location.top)*this.location.width+(a-this.location.left),l=t%32,n=t>>5,o=this._availability;return n<0||n>o.length?"unknown":o[n]&1<<l?"available":"unavailable"}static fromDefinition(i,a){const t=i.service.request||O,{row:l,col:n,width:o,height:r}=i,c={query:{f:"json"}};return a=a?{...c,...a}:c,t(R(i),a).then(s=>s.data).catch(s=>{if(s&&s.details&&s.details.httpStatus===422)return{location:{top:l,left:n,width:o,height:r},valid:!0,data:q(o*r,0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==o||s.location.height!==r))throw new m("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:o,height:r}});return w.fromJSON(s)})}static fromJSON(i){return Object.freeze(new w(i))}_validateJSON(i){if(!(i!=null&&i.location))throw new m("tilemap:missing-location","Location missing from tilemap response");if(i.valid===!1)throw new m("tilemap:invalid","Tilemap response was marked as invalid");if(!i.data)throw new m("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(i.data))throw new m("tilemap:data-mismatch","Data must be an array of numbers");if(i.data.length!==i.location.width*i.location.height)throw new m("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function R(e){var t;let i;if((t=e.service.tileServers)!=null&&t.length){const l=e.service.tileServers;i=`${l&&l.length?l[e.row%l.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else i=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(i=`${i}?${a}`),i}var v;let p=v=class extends L{constructor(e){super(e),this._pendingTilemapRequests={},this.request=O,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new P(2*H.MEGABYTES),this.addHandles(U(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition(),x))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,i,a,t){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new m("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,i,a,l);if(n)return Promise.resolve(n);const o=t==null?void 0:t.signal;return t={...t,signal:null},new Promise((r,c)=>{C(o,()=>c(j()));const s=$(l);let h=this._pendingTilemapRequests[s];if(!h){h=w.fromDefinition(l,t).then(u=>(this._tilemapCache.put(s,u,u.byteSize),u));const f=()=>{delete this._pendingTilemapRequests[s]};this._pendingTilemapRequests[s]=h,h.then(f,f)}h.then(r,c)})}getAvailability(e,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a})):this.fetchTilemap(e,i,a,t).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(i,a);if(n==="unavailable")throw new m("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a});return n}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,i,a,t,l){t.level=e,t.row=i,t.col=a;const n=this.layer.tileInfo;n.updateTileInfo(t);const o=this.fetchAvailability(e,i,a,l).catch(r=>{if(_(r))throw r;if(n.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t,l);throw r});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,i,a,t,l,n){if(!this._prefetchingEnabled||e==null)return;const o=`prefetch-${e}`;if(this.hasHandles(o))return;const r=new AbortController;n.then(()=>r.abort(),()=>r.abort());let c=!1;const s=N(()=>{c||(c=!0,r.abort())});if(this.addHandles(s,o),await M(10,r.signal).catch(()=>{}),c||(c=!0,this.removeHandles(o)),E(r))return;const h=new F(e,i,a,t),f={...l,signal:r.signal},u=this.layer.tileInfo;for(let T=0;v._prefetches.length<v._maxPrefetch&&u.upsampleTile(h);++T){const b=this.fetchAvailability(h.level,h.row,h.col,f);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_initializeTilemapDefinition(){var t;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:I({...e.query,...a,token:i??((t=e.query)==null?void 0:t.token)}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;const l=$(t);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(i){e._prefetchingEnabled=i},hasTilemap:(i,a,t)=>!!e._tilemapFromCache(i,a,t,e._tmpTilemapDefinition)}}};p._maxPrefetch=4,p._prefetches=new z({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],p.prototype,"layer",void 0),d([y({constructOnly:!0})],p.prototype,"minLOD",void 0),d([y({constructOnly:!0})],p.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],p.prototype,"request",void 0),d([y({constructOnly:!0})],p.prototype,"size",void 0),p=v=d([k("esri.layers.support.TilemapCache")],p);export{p as T};
