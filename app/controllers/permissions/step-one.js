import Controller from '@ember/controller';

import { tracked } from '@glimmer/tracking';

import { ForkingStore } from '@lblod/ember-submission-form-fields';
import { FORM, RDF } from '@lblod/submission-form-helpers';
import { task } from 'ember-concurrency';

export default class PermissionsStepOneController extends Controller {
  @tracked formStore;
  @tracked form;

  setup = task(async (model) => {
    this.formStore = new ForkingStore();
    this.formStore.parse(model.ttlCode, model.graphs.formGraph, 'text/turtle');

    this.form = this.formStore.any(
      undefined,
      RDF('type'),
      FORM('Form'),
      model.graphs.formGraph,
    );
  });
}
