import './style.css';
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import { watch } from '@arcgis/core/core/reactiveUtils.js';
//Only if you are using an API key
//import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';

const app = document.querySelector<HTMLDivElement>('#app')!

//Only if you are using an API key
//esriConfig.apiKey = 'AAPK186a83caa95d407bb6f7dfb77ade59b3cJhAe6UvpDaLsyBgL_okul9Ta2i9ugPDE-v9vWhIbCgcaYm3scprVY8kIRbemSLw'

// Create a map and add a feature layer
const layer = new FeatureLayer({
  url: 'https://services1.arcgis.com/LsoiDXzijohT7g97/arcgis/rest/services/Chile_ZonasNaturales/FeatureServer',
})
const map = new ArcGISMap({
  basemap: 'streets-vector',
  layers: [layer],
})

// Set the initial rotation of the map view
let rotation: number;
if (window.innerWidth <= 480) {
  rotation = 0;
} else {
  rotation = -90;
}

// Create a map view
const view = new MapView({
  map,
  container: app,
  zoom: 4,
  center: [-73.5, -40.5],
  rotation: rotation,
  constraints:{rotationEnabled: false,}
})

//view.when(() => console.log('Map and View are ready'));

// Watch the width breakpoint of the view and update the view accordingly
watch(
  () => view.widthBreakpoint,
  (breakpoint) => {
    console.log('Width breakpoint:', breakpoint);
    switch (breakpoint) {
      case 'xsmall':
        view.ui.remove('zoom');
        view.rotation = 0;
        break;
      default:
        view.rotation = -90;
  }
  },
);
