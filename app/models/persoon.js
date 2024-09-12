import Agent from './agent';

import { attr } from '@ember-data/model';

export default class PersoonModel extends Agent {
  @attr uri;

  @attr achternaam;
  @attr gebruikteVoornaam;

  get fullName() {
    return `${this.gebruikteVoornaam ?? ''} ${this.achternaam ?? ''}`;
  }
}
