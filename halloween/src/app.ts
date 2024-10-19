import Accessor from '@arcgis/core/core/Accessor';
import { subclass, property } from '@arcgis/core/core/accessorSupport/decorators';
import MapView from '@arcgis/core/views/MapView';
import config from '@arcgis/core/config';

@subclass('app.App')
export default class App extends Accessor {
  @property()
  apikey!: string;

  @property()
  view!: MapView;

  @property()
  get loaded(): boolean {
    return this.view?.ready;
  }

  @property()
  get status(): string {
    return this.loaded ? 'loaded' : 'loading';
  }

  //private methods

  private async _init() {
    config.apiKey = this.apikey;
  }

}