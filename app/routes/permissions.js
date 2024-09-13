import Route from '@ember/routing/route';

export default class PermissionsRoute extends Route {
  setupController(controller, model) {
    controller.set('model', model);
  }
}
