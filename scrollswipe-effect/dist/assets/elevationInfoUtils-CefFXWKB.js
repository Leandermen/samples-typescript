import"./index-DQMEynLp.js";function r(e){return e?u:f}function t(e,o){return o!=null&&o.mode?o.mode:r(e).mode}function l(e,o){return t(e!=null&&e.hasZ,o)}function s(e,o,n){return n&&n.mode!==o?`${e} only support ${o} elevation mode`:null}function d(e,o,n){return(n==null?void 0:n.mode)===o?`${e} do not support ${o} elevation mode`:null}function p(e,o){return(o==null?void 0:o.featureExpressionInfo)!=null&&o.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function m(e,o){o&&e.warn(".elevationInfo=",o)}const u={mode:"absolute-height",offset:0},f={mode:"on-the-ground",offset:null};export{m as I,p as Z,l as i,s as x,d as y};
