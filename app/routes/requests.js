import { service } from '@ember/service';

import Route from '@ember/routing/route';

export default class RequestsRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('change-request');
  }
}
