import Model, { belongsTo } from '@ember-data/model';

export default class AgentModel extends Model {
  @belongsTo('locatie', {
    async: true,
    inverse: null,
  })
  locatie;

  @belongsTo('contact-point', {
    async: true,
    inverse: null,
  })
  residentie;
}
