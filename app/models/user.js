import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr(),
  userName: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  birthDate: DS.attr(),
  password: DS.attr(),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
