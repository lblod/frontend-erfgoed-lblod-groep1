import Route from '@ember/routing/route';

import { service } from '@ember/service';
export default class PermissionsRoute extends Route {
  @service store;
  queryParams = {
    inventorisUri: {
      refreshModel: true, // Refresh model when this query param changes
    },
  };
  setupController(controller, model) {
    controller.set('model', model);
  }
  async model(params) {
    console.log(params);
    return this.store.query('change-request', {
      filter: { 'inventoris-uri': params.inventorisUri },
    });
  }
}
