import Route from '@ember/routing/route';

import { sym as RDFNode } from 'rdflib';
import { getLocalFileContentAsText } from '../utils/get-local-file-content';
import { GRAPHS } from '../controllers/permissions';

export default class StepThreeRoute extends Route {
  async model() {
    return {
      graphs: GRAPHS,
      ttlCode: await getLocalFileContentAsText(
        '/forms/permissions-step-three.ttl',
      ),
      metaTtl: await getLocalFileContentAsText('/forms/meta.ttl'),
      sourceNode: new RDFNode('http://hackaton-g-one/sourcenode'),
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.setup.perform(model);
  }
}
