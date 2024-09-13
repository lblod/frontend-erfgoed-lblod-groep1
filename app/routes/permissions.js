import Route from '@ember/routing/route';

import { service } from '@ember/service';
export default class PermissionsRoute extends Route {
  @service store;
  queryParams = {
    inventorisUri: {
      refreshModel: true,
    },
    address: {
      refreshModel: false,
    },
  };

  async model(params) {
    return this.store.query('change-request', {
      filter: { 'inventoris-uri': params.inventorisUri },
    });
  }
}
