import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task, restartableTask, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
export default class SearchComponent extends Component {
  @tracked
  address;
  @tracked
  monuments;
  @service
  store;
  @service
  inventoris;

  constructor() {
    super(...arguments);
    this.searchMonuments.perform();
  }
  @task(function* () {
    this.monuments = yield this.inventoris.searchByAddress(this.args.address);
  })
  searchMonuments;
}
