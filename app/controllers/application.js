import Controller from '@ember/controller';

import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service currentSession;

  get hasAccess() {
    return this.currentSession.hasEditorRole;
  }
  get isProcessRoute() {
    const processRoutes = ['search', 'permissions', 'requests'];

    return processRoutes.includes(this.router.currentRouteName);
  }
}
