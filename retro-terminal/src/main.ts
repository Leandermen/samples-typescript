import './style.css'
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';

const app = document.querySelector<HTMLDivElement>('#main-container')!

setTimeout(() => {
  const map = new ArcGISMap({
    basemap: 'satellite',
  })

  const view = new MapView({
    map,
    container: app,
    zoom: 4,
    center: [-73.5, -40.5],
  })

  view.when(() => console.log('Mapa y vista listos'));

  view.watch(["center", "zoom"], () => {
    const sidePanel = document.getElementById("newcontent");
    const message = `Center: ${view.center.longitude} , ${view.center.latitude} , Zoom: ${view.zoom}`;

    if (sidePanel) {
      sidePanel.textContent = message;
    }
  });
}, 10000);

setTimeout(() => {
  const loadingBar = document.getElementById("loading-bar");
  if (loadingBar) {
    loadingBar.style.display = "none";
  }
}, 10000);

window.onload = () => {
  const typingDelay = 24;
  const betweenParagraphDelay = 1000; // Delay between paragraphs in milliseconds
  const container = document.getElementById("side-panel");

  async function type(text: string) {
    let charIndex = 0;
    const p = document.createElement('p');
    container?.appendChild(p);

    for (charIndex = 0; charIndex < text.length; charIndex++) {
      p.textContent += text.charAt(charIndex);
      await new Promise(resolve => setTimeout(resolve, typingDelay));
    }
  }

  const cursorElement = document.getElementById("cursor");
  if (cursorElement) {
    cursorElement.style.animation = "blink 0.5s step-end infinite alternate";
  }

  const paragraphs = [
    '>Initiating web experience',
    '>Live demo by LEANDRO ZAMUDIO based on Abigail Rabinovitch Map for Esri France #MapsWithArcGIS competition',
    '>Loading...',
    // Add more paragraphs here
  ];

  paragraphs.reduce((promise, paragraph) => {
    return promise.then(() => new Promise(resolve => setTimeout(resolve, betweenParagraphDelay)))
                  .then(() => type(paragraph));
  }, Promise.resolve());
};