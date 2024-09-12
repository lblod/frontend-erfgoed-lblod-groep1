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
        this.updateAddressAttributes(firstAddress);
      }
    }
  }

  @action
  handleBusNumberChange(address) {
    this.addressWithBusNumber = address;
    this.updateAddressAttributes(address);
  }

  updateAddressAttributes(address) {
    this.args.address.setProperties({
      straatnaam: address.street,
      huisnummer: address.housenumber,
      busnummer: address.busNumber,
      postbus: address.zipCode,
      gemeentenaam: address.municipality,
      land: address.country,
      lat: address.lat,
      lon: address.lon,
    });
  }

  resetAddressAttributes() {
    this.args.address.setProperties({
      straatnaam: null,
      huisnummer: null,
      busnummer: null,
      postbus: null,
      gemeentenaam: null,
      land: null,
      lat: null,
      lon: null,
    });
  }
}
