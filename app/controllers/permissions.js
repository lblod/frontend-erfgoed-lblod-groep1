import Controller from '@ember/controller';
import { sym as RDFNode } from 'rdflib';

export const GRAPHS = {
  formGraph: new RDFNode('http://data.lblod.info/form'),
  metaGraph: new RDFNode('http://data.lblod.info/metagraph'),
  sourceGraph: new RDFNode(`http://data.lblod.info/sourcegraph`),
};

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
