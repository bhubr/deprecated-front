import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scientists');
  this.route('auth', function() {
  	this.route('login');
    this.route('confirm-email');
    this.route('lostpass');
  	this.route('register');
  });
  this.route('users');

  this.route('user', function() {
    this.route('profile');
  });
  this.route('admin', function() {
    this.route('users');
  });
});

export default Router;
