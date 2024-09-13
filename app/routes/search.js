import Route from '@ember/routing/route';

import { service } from '@ember/service';
export default class SearchRoute extends Route {
  setupController(controller, model) {
    controller.set('model', model);
  }
}
