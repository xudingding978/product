define([
    "ember",
    "text!templates/usersTemplate.html"
], function(Ember, usersTemplate) {
    var UsersView = Ember.View.extend({
        template: Ember.Handlebars.compile(usersTemplate)
    });
    return UsersView;
});