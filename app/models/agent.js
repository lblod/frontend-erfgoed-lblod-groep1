import Model, { belongsTo } from '@ember-data/model';

export default class AgentModel extends Model {
  @belongsTo('location', {
    async: true,
    inverse: null,
  })
  location;

  @belongsTo('contact-point', {
    async: true,
    inverse: null,
  })
  residentie;
}
