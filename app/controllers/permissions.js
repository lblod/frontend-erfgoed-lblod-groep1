import Controller from '@ember/controller';

import { service } from '@ember/service';
export default class PermissionsController extends Controller {
  queryParams = ['inventorisUri', 'address'];
  inventorisUri = '';
  address = '';
  @service currentSession;

  get hasAccess() {
    return this.currentSession.hasEditorRole;
  }
}
