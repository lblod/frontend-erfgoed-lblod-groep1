import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import { service } from '@ember/service';
import { action } from '@ember/object';
export default class SearchController extends Controller {
  @tracked model;

  @service router;
  @action
  permissionFor(monument) {
    this.router.transitionTo('permissions').then((route) => {
      console.log(monument);
      route.setupController(route.controller, {
        address: this.model.address,
        monument: monument,
      });
    });
  }
}
