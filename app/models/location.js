import Model, { attr, hasMany } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr uri;

  @attr naam;

  @hasMany('bestuurseenheid', {
    async: true,
    inverse: null,
  })
  bestuurseenheden;
}
