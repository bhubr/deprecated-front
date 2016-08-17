import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    token: {
      refreshModel: true
    }
  },
  token: null,
  ajax: Ember.inject.service(),
  // authBroker: Ember.inject.service(),
  // init() {},
  model(params) {
    console.log('route:confirm-email', params);
    return this.get('ajax').request('/auth/confirm-email', {
      method: 'POST',
      data: JSON.stringify({
        token: params.token
      }),
      headers: {
        'content-type': 'application/vnd.api+json'
      }
    })
    .then(result => {
      // console.log('ok', result);
      // this.get('authBroker').login(result.user);
      return result.user;
    })
    .catch(err => {
      console.log('nok', err);
    });
  }
});
