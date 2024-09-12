import Agent from './agent';

import { attr } from '@ember-data/model';

export default class OrganizationModel extends Agent {
  @attr uri;

  @attr voorkeursnaam;
}
