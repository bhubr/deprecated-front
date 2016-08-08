import Ember from 'ember';

export default Ember.Controller.extend({
  hasError: false,
  actions: {
    createUser() {
      if (this.get('password') !== this.get('passwordConfirm')) {
        this.set('hasError', true);
        this.set('errorMsg', 'password mismatch :/');
        return;
      }
      this.set('hasError', false);
      let newUser = this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        birthDate: this.get('birthDate'),
        password: this.get('password')
      });
      console.log(newUser);
      newUser.save();
    }
  }
});
