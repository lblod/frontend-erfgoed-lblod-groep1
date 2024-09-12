import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task, restartableTask, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
export default class SearchComponent extends Component {
  @tracked
  address;
  @service
  store;

  constructor() {
    super(...arguments);
    const json = JSON.parse(this.args.serializedAddress);

    const addr = this.store.createRecord('address');
    addr.setProperties(json.data.attributes);
    this.address = addr;
  }
}
