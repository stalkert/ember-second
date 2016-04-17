import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addCustomer(){
			this.store.createRecord('customer',{
				name: this.get('inputName'),
				  email: this.get('inputEmail'),
				  tel: this.get('inputTel'),
				  address: this.get('inputAddress'),
				  street: this.get('inputStreet'),
				  city: this.get('inputCity'),
				  state: this.get('inputState'),
				  zip: this.get('inputZip')
			})
		}
	}

	
});
