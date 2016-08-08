export function initialize(application) {
  application.inject('route', 'auth', 'service:auth-broker');
}

export default {
  name: 'auth-broker',
  initialize
};
