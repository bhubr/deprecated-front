import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  loggedIn: false,
  currentUser: null,

  init() {
  	this._super(...arguments);
  	return this.get('ajax').request('/auth/status')
  	.then(result => {
  	  console.log('ok', result.user);
  	  this.login(result.user);
  	})
  	.catch(err => {
  	  console.log('nok', err);
  	});
  },

  login(user) {
  	this.set('loggedIn', true);
  	this.set('currentUser', user);
  }
});
