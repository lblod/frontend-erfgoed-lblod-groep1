import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;
  @service currentSession;
  @service session;

  @tracked model;

  @action
  search() {
    // this.transitionTo("search")
    console.log(this.model.address.serialize());
  }
}
