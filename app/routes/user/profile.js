import Ember from 'ember';

export default Ember.Route.extend({
  authBroker: Ember.inject.service(),
  model() {
    return this.get('store').find('user', this.get('authBroker.currentUser.id'));
  }
});
