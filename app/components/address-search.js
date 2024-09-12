import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddressSearchComponent extends Component {
  @service addressRegister;

  @tracked selectedAddress;
  @tracked addressWithBusNumber;
  @tracked addressesWithBusNumbers;

  constructor() {
    super(...arguments);
  }

  @action
  handleAddressChange(data) {
    const addresses = data?.addresses;
    const source = data?.source;

    this.selectedAddress = null;
    this.addressWithBusNumber = null;
    this.addressesWithBusNumbers = null;
    this.resetAddressAttributes();

    if (addresses) {
      let hasBusNumberData = addresses.length > 1;
      let firstAddress = addresses[0];
      this.selectedAddress = firstAddress;

      if (hasBusNumberData) {
        this.addressesWithBusNumbers = addresses;
        this.handleBusNumberChange(firstAddress);
      } else {
        this.updateAddressAttributes(firstAddress, source);
      }
    }
  }

  @action
  handleBusNumberChange(address) {
    this.addressWithBusNumber = address;
    this.updateAddressAttributes(address);
  }

  updateAddressAttributes(address, source) {
    this.args.address.setProperties({
      street: address.street,
      number: address.housenumber,
      boxNumber: address.busNumber,
      postcode: address.zipCode,
      source,
      municipality: address.municipality,
      province: null,
      country: address.country,
      addressRegisterUri: address.uri,
    });
  }

  resetAddressAttributes() {
    this.args.address.setProperties({
      street: null,
      number: null,
      boxNumber: null,
      postcode: null,
      source: null,
      municipality: null,
      province: null,
      country: null,
      addressRegisterUri: null,
    });
  }
}
