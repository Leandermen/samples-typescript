// Import necessary modules from the ArcGIS API
import './style.css';
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import Swipe from "@arcgis/core/widgets/Swipe.js";

// Get the app and containermap elements from the DOM
const app = document.querySelector<HTMLDivElement>('#app')!
const containermap = document.getElementById('containermap');
const containermapHeight = containermap ? containermap.clientHeight : 0;

// Log the window's inner height, scroll position, and the containermap's height
console.log(window.innerHeight);
console.log(window.scrollY);
console.log(containermapHeight);

// Calculate the initial position for the swipe widget
let position = ((((window.innerHeight * 4/5)+window.scrollY)/containermapHeight) * 100);

// Add an event listener to the window's resize event to log the new dimensions
window.addEventListener('resize', function() {
  console.log(window.innerHeight);
  console.log(window.scrollY);
  console.log(containermapHeight);
});

// Create three feature layers for the map
const bglayer = new FeatureLayer({
  url: 'https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/GlobalBackground/FeatureServer/0',
  blendMode: "multiply",
  title: "Background",
  opacity: 0.5,
})

const layer2 = new FeatureLayer({
  url: 'https://services8.arcgis.com/x3OYmfTujNHGdoex/arcgis/rest/services/Damage_Buildings/FeatureServer/0',
  title: 'Damage Points',
  effect: "bloom(10, 0px, 0.1)",
})

const layer3 = new FeatureLayer({
  url: 'https://services3.arcgis.com/tuNLpt6Wfhd22qmO/arcgis/rest/services/GazaMappingWork_2024_WFL1/FeatureServer/10',
  title: 'Buildings',
  blendMode: "overlay",
  opacity: 0.7,
})

// Create a new map with the satellite basemap and the three feature layers
const map = new ArcGISMap({
  basemap: 'satellite',
  layers: [bglayer,layer2,layer3],
})

// Create a new map view with the map, the app as the container, and some initial settings
const view = new MapView({
  map,
  container: app,
  zoom: 16,
  center: [34.44, 31.51],
  rotation: 45,
  constraints:{rotationEnabled: false},  
})

// Create a new swipe widget with the view, the leading layers, and the initial position
const swipe = new Swipe({
  view: view,
  leadingLayers: [layer2,layer3],
  trailingLayers: [],
  position: position,
  direction: "vertical"
});

// Disable mouse wheel zoom and remove the zoom UI
view.navigation.mouseWheelZoomEnabled = false;
view.ui.remove('zoom');

// Prevent the default drag behavior
view.on("drag", (event) => {
  event.stopPropagation();
});

// Add an event listener to the window's scroll event to update the swipe position
window.addEventListener("scroll", function(){
  let pos = (((window.innerHeight) * 4/5)+ window.scrollY) / containermapHeight * 100;
  console.log(pos);
  swipe.position = pos;

  // Ensure the position stays within bounds
  if (swipe.position < 0) swipe.position = 0;
  if (swipe.position > 100) swipe.position = 100;
});