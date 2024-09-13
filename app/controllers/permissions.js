import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import { action } from '@ember/object';
export default class PermissionsController extends Controller {
  queryParams = ['inventorisUri', 'address'];
  inventorisUri = '';
  address = '';
}
