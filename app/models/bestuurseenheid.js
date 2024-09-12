import Organization from './organization';

import { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BestuurseenheidModel extends Organization {
  @attr uri;

  @attr naam;

  @belongsTo('locatie', {
    async: true,
    inverse: null,
  })
  locatie;

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
