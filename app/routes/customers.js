import Ember from 'ember';
var allCustomers=[
  {

    name: "Ivan",
    email: "iv@gmail.com",
    tel:"4556787",
    address:"Zholudeva 8.68",
    street:"Zholudeva",
    city:"Kiev",
    state: "Kievska",
    zip: "03134"
  },
  {

    name: "Dima",
    email: "di@gmail.com",
    tel:"446546467",
    address:"Zholudeva 8.68",
    street:"Zholudeva",
    city:"Kiev",
    state: "Kievska",
    zip: "03134"
  },
  {

    name: "Miha",
    email: "mi@gmail.com",
    tel:"575676787",
    address:"Zholudeva 8.68",
    street:"Zholudeva",
    city:"Kiev",
    state: "Kievska",
    zip: "03134"
  },
  {
    name: "Taran",
    email: "iv@gmail.com",
    tel:"4556787",
    address:"Zholudeva 8.68",
    street:"Zholudeva",
    city:"Kiev",
    state: "Kievska",
    zip: "03134"
  }
];
export default Ember.Route.extend({
  model(){

  return  this.store.findAll('customer');
}
});
