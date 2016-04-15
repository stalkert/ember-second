import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("customers", function(){
    this.route("onecustomer",{path:'/:customer_id'});
  });

  this.route('about');
});

export default Router;
