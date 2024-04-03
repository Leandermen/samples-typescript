import './style.css'
import MapView from "@arcgis/core/views/MapView.js";
import WebMap from "@arcgis/core/WebMap.js"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import  SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";

const app = document.querySelector<HTMLDivElement>('#viewDiv')!

const countryGraphicsLayer = new GraphicsLayer({
  effect: "bloom(1.1, 0.2px, 0.2)",
});
let zz = new SimpleFillSymbol({
  color: [227, 139, 79, 0.8],
  outline: {
      "color": [110, 110, 110],
      "width": 1
  }
})

let layerdpa = new FeatureLayer({
  url:"https://arcgis.mma.gob.cl/server/rest/services/SIMBIO/SIMBIO_DIVISION_ADMINISTRATIVA/MapServer/0",
  definitionExpression:"",
  copyright:"Datos: Subsecretaría de Desarrollo Regional y Administrativo",
  effect: "drop-shadow(-10px, 10px, 6px)"
})

let map = new WebMap({
    layers:[layerdpa,countryGraphicsLayer],
})

let view = new MapView({
    container: app,
    map:map,
    rotation:290,
    center: [-67,-43],
    scale:15500000,
    constraints:{rotationEnabled: false},
    background:{color:"#353535"},
    ui:{
        components:[],
    },
})
 


function freezeMap(view: __esri.MapView) {
    view.popup.dockEnabled = true;
    view.popup.actions = []; // Removes the zoom action on the popup
    function stopEvtPropagation(event) {event.stopPropagation();}// stops propagation of default behavior when an event fires
    view.ui.components = ["attribution"];// exclude the zoom widget from the default UI
    view.on("mouse-wheel", stopEvtPropagation);// disable mouse wheel scroll zooming on the view
    view.on("double-click", stopEvtPropagation);// disable zooming via double-click on the view
    // disable zooming out via double-click + Control on the view
    view.on("double-click", ["Control"], stopEvtPropagation);
    // disables pinch-zoom and panning on the view
    view.on("drag", stopEvtPropagation);
    // disable the view's zoom box to prevent the Shift + drag
    // and Shift + Control + drag zoom gestures.
    view.on("drag", ["Shift"], stopEvtPropagation);
    view.on("drag", ["Shift", "Control"], stopEvtPropagation);

    // prevents zooming with the + and - keys
    view.on("key-down", (event) => {
      const prohibitedKeys = [
        "+",
        "-",
        "Shift",
        "_",
        "=",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft"
      ];
      const keyPressed = event.key;
      if (prohibitedKeys.indexOf(keyPressed) !== -1) {
        event.stopPropagation();
      }
    });

    return view;
  }

view.when(freezeMap);

view.on('click', function(event){
    console.log(event.mapPoint)
});

let oid: number;
view.on('pointer-move', (event) =>{
  const opts = {
    include: layerdpa
  }
  view.hitTest(event, opts).then((response) => {
    if (response.results.length) {
      let pi = response.results[0]
      if (pi.type==="graphic"){
        let grafo = pi.graphic
        if (countryGraphicsLayer.graphics.length==0){
          grafo.symbol=zz
          countryGraphicsLayer.graphics.add(grafo)
          oid = pi.graphic.attributes["OBJECTID"]
          console.log(oid)
        } else if (grafo.attributes["OBJECTID"]!=oid){
          countryGraphicsLayer.graphics.removeAll();
          grafo.symbol=zz
          oid = grafo.attributes["OBJECTID"]
          console.log(oid)
          countryGraphicsLayer.graphics.add(grafo);
        }        
      } 
    } else {
      countryGraphicsLayer.graphics.removeAll();
    }
  });
});