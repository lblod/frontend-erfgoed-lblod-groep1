import Organization from './organization';

import { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AdministrativeUnitModel extends Organization {
  @attr uri;

  @attr naam;

  @belongsTo('location', {
    async: true,
    inverse: null,
  })
  location;

  @belongsTo('bestuurseenheid-classificatie-code', {
    async: true,
    inverse: null,
  })
  classificatie;

  @hasMany('agent', {
    async: true,
    inverse: null,
  })
  agents;
}
