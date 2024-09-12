import Controller from '@ember/controller';

import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  get isProcessRoute() {
    const processRoutes = ['search', 'permissions', 'requests'];

    return processRoutes.includes(this.router.currentRouteName);
  }
}
