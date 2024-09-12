import Model, { hasMany, attr } from '@ember-data/model';

export default class SkosConcept extends Model {
  @attr label;
  @hasMany('concept-scheme', {
    inverse: 'concepts',
    polymorphic: true,
    async: true,
  })
  inScheme;
}
