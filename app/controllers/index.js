import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;
  @service currentSession;
  @service session;
  @service router;

  @tracked model;

  @action
  search() {
    console.log(this.model.address);
    this.router.transitionTo("search", { id: this.model.address.serialize().id })
  }
}
