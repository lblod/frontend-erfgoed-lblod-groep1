import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service router;
  @service store;
  @service currentSession;
  @service session;

  model() {
    return {
      address: this.store.createRecord('address'),
    };
  }
}
