import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChangeRequestModel extends Model {
  @attr uri;

  @attr naam;
  @attr eventType;
  @attr('datetime') createdAt;
  @attr('datetime') approvedAt;

  @belongsTo('location', {
    async: true,
    inverse: null,
  })
  location;

  @belongsTo('agent', {
    async: true,
    inverse: null,
  })
  requester;
}
