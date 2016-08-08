import Ember from 'ember';
import AuthBrokerInitializer from 'servex-front/initializers/auth-broker';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | auth broker', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AuthBrokerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
