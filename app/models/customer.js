import DS from 'ember-data';

export default
DS.Model.extend({

  img:  DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  tel: DS.attr(),
  address: DS.attr(),
  street: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr()

});

