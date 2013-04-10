/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
App = Ember.Application.create();

App.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: function() {
    return this.get('firstName') +
           " " + this.get('lastName');
  }.property('firstName', 'lastName')
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    var people = [
      App.Person.create({
        firstName: "Tom",
        lastName: "Dale"
      }),
      App.Person.create({
        firstName: "Yehuda",
        lastName: "Katz"
      })
    ];
    return people;
  }
});