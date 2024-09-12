import Model, { attr } from '@ember-data/model';

export default class AdresModel extends Model {
  @attr uri;

  @attr busnummer;
  @attr huisnummer;
  @attr straatnaam;
  @attr postcode;
  @attr gemeentenaam;
  @attr land;
  @attr locatieaanduiding;
  @attr locatienaam;
  @attr postbus;
  @attr postnaam;
  @attr volledigAdres;

  get combineFullAddress() {
    let fullStreet = `${this.straatnaam || ''} ${this.huisnummer || ''} ${
      this.busnummer || ''
    }`.trim();

    let muncipalityInformation = `${this.postcode || ''} ${
      this.gemeentenaam || ''
    }`.trim();

    if (fullStreet && muncipalityInformation) {
      return `${fullStreet}, ${muncipalityInformation}`;
    } else if (fullStreet) {
      return fullStreet;
    } else if (muncipalityInformation) {
      return muncipalityInformation;
    } else {
      return null;
    }
  }
}
