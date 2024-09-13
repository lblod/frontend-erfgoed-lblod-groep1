import { module, test } from 'qunit';
import { setupTest } from 'frontend-hackathon/tests/helpers';

module('Unit | Route | step-two', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:step-two');
    assert.ok(route);
  });
});
