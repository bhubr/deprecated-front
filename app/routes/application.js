import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  authBroker: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/auth/status')
  	.then(result => {
  	  console.log('ok', result.user);
      this.get('authBroker').login(result.user);
  	  return result.user;
  	})
  	.catch(err => {
  	  console.log('nok', err);
  	});
  }
});
