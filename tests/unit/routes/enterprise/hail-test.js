import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | enterprise/hail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:enterprise/hail');
    assert.ok(route);
  });
});
