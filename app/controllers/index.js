import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;
  @service currentSession;
  @service session;
  @service router;


  @tracked mode = '';
  @tracked serializedAddress=null;
  @action
  search() {
    const addr=this.model.address.serialize();
    this.serializedAddress=JSON.stringify(addr);
    this.mode = 'search';

  }

}
