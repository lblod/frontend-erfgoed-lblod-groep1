import Controller from '@ember/controller';

import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

import {
  ForkingStore,
  validateForm,
} from '@lblod/ember-submission-form-fields';
import { FORM, RDF } from '@lblod/submission-form-helpers';
import { task } from 'ember-concurrency';

export default class StepOneController extends Controller {
  @service toaster;
  @service router;
  @tracked formStore;
  @tracked form;
  @tracked showForcedErrors;

  setup = task(async (model) => {
    this.formStore = new ForkingStore();
    this.formStore.parse(model.ttlCode, model.graphs.formGraph, 'text/turtle');
    this.formStore.parse(model.metaTtl, model.graphs.metaGraph, 'text/turtle');

    this.form = this.formStore.any(
      undefined,
      RDF('type'),
      FORM('Form'),
      model.graphs.formGraph,
    );
  });

  validateAndTransition = task(async () => {
    this.showForcedErrors = validateForm(this.form, {
      ...this.model.graphs,
      soureNode: this.model.sourceNode,
      store: this.formStore,
    });
    if (!this.showForcedErrors) {
      this.toaster.error(
        'Please select the kind of permission you need',
        'Missing information',
        { timeout: 2000 },
      );
    } else {
      this.router.transitionTo('step-two');
    }
  });
}
