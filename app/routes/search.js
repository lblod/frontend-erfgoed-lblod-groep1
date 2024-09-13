import Route from '@ember/routing/route';

export default class SearchRoute extends Route {
  setupController(controller, model) {
    console.log(model);
    controller.set('model', model);
  }
}
