import Route from '@ember/routing/route';

import { sym as RDFNode } from 'rdflib';
import { getLocalFileContentAsText } from '../../utils/get-local-file-content';
import { GRAPHS } from '../../controllers/permissions';

export default class PermissionsStepOneRoute extends Route {
  async model() {
    return {
      graphs: GRAPHS,
      ttlCode: await getLocalFileContentAsText('/permissions-step-one.ttl'),
      sourceNode: new RDFNode('http://hackaton-g-one/sourcenode'),
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.setup.perform(model);
  }
}
