export default function() {
  this.get('/customers', function () {
    return {
      data: [{
        type: 'customers',
        id: 1,
        attributes: {
          img: "assets/images/photo1.jpg",
          name: "Dima",
          email: "di@gmail.com",
          tel: "446546467",
          address: "Zholudeva 8.68",
          street: "Zholudeva",
          city: "Kiev",
          state: "Kievska",
          zip: "03134"
        }
      }, {
        type: 'customers',
        id: 2,
        attributes: {
          img: "assets/images/photo2.jpg",
          name: "Taran",
          email: "iv@gmail.com",
          tel: "4556787",
          address: "Zholudeva 8.68",
          street: "Zholudeva",
          city: "Kiev",
          state: "Kievska",
          zip: "03134"
        }
      },{
        type: 'customers',
        id: 3,
        attributes: {
          img: "assets/images/photo3.jpg",
          name: "Ivan",
          email: "iv@gmail.com",
          tel:"4556787",
          address:"Zholudeva 8.68",
          street:"Zholudeva",
          city:"Kiev",
          state: "Kievska",
          zip: "03134"
        }
      },{
        type: 'customers',
        id: 4,
        attributes: {
          img: "assets/images/photo4.jpg",
          name: "Miha",
          email: "mi@gmail.com",
          tel:"575676787",
          address:"Zholudeva 8.68",
          street:"Zholudeva",
          city:"Kiev",
          state: "Kievska",
          zip: "03134"
        }
      }
      ]
    };
  });
}
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */


/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
