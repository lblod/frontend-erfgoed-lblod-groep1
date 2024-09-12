import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { task, restartableTask, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
export default class AddressRegisterSelectorComponent extends Component {
  @service addressRegister;
  @service store;

  @tracked addressSuggestion;
  @tracked selectedAddress;
  constructor() {
    super(...arguments);

    this.addressRegister.setup({ endpoint: '/adresses-register' });
    if (this.args.address) {
      let addressSuggestion = this.args.address;

      if (!this.addressRegister.isEmpty(addressSuggestion)) {
        this.addressSuggestion = addressSuggestion;
        this.selectedAddress = addressSuggestion;
      }
    }
  }
  @task
  *selectSuggestion(addressSuggestion) {
    this.args.onChange(null);
    this.selectedAddress = addressSuggestion;

    if (addressSuggestion) {
      const addresses = yield this.addressRegister.findAll(addressSuggestion);

      // TODO: this should probably be fixed in the API itself (, if possible)
      // avoid duplicates, e.g Liebaardstnaat 10, 8792 Waregem
      this.args.onChange({
        source: false,
        addresses: [
          ...new Map(
            addresses.map((a) => [
              `${a.street}${a.housenumber}${a.busNumber}`,
              a,
            ]),
          ).values(),
        ],
      });
    }
  }
  @restartableTask
  *handleKeydown(_, e) {
    yield timeout(400);

    let text = e.target.value || '';
    if (text.length > 0) {
      this.addressSuggestion = yield this.addressRegister.suggest(text);
    }
  }
}
