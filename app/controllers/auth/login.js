import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  authBroker: Ember.inject.service(),
  hasError: false,
  needs: ['application'],
  actions: {
    authentifyUser() {
      console.log(this.get('userName'));
      return this.get('ajax').request('/auth/login', {
        method: 'POST',
        data: JSON.stringify({
          username: this.get('userName'),
          password: this.get('password')
        }),
        headers: {
          'content-type': 'application/vnd.api+json'
        }
      })
      .then(result => {
        console.log('ok', result.user);
        this.get('authBroker').login(result.user);
      })
      .catch(err => {
        console.log('nok', err);
      });
    }
  }
});
