import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContactPointModel extends Model {
  @attr uri;

  @attr email;
  @attr telephone;

  @belongsTo('adres', {
    async: true,
    inverse: null,
  })
  adres;
}
