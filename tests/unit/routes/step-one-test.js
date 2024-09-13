import { module, test } from 'qunit';
import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Route | step-one', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:step-one');
    assert.ok(route);
  });
});
