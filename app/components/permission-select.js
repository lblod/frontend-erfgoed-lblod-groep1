import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
export default class PermissionSelectComponent extends Component {
  @service store;
  @tracked options = [];
  @tracked classification;
  constructor() {
    super(...arguments);
    this.loadOptionsTask.perform();
  }
  @task(function*() {
    try {
      let options = yield this.store.findAll('permission-classification-code');
      this.options = options;
    } catch (error) {
      console.error('Failed to load options:', error);
      this.options = [];
    }
  })
  loadOptionsTask;
  @action
  onChange(classification) {
    this.args.onChange(classification);
    this.classification = classification;
  }
}
