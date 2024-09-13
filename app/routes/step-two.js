import Route from '@ember/routing/route';

import { sym as RDFNode } from 'rdflib';
import { GRAPHS } from '../controllers/permissions';
import { getLocalFileContentAsText } from '../utils/get-local-file-content';

export default class StepTwoRoute extends Route {
  async model() {
    return {
      graphs: GRAPHS,
      ttlCode: await getLocalFileContentAsText(
        '/forms/permissions-step-two.ttl',
      ),
      sourceNode: new RDFNode('http://hackaton-g-one/sourcenode'),
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.setup.perform(model);
  }
}
