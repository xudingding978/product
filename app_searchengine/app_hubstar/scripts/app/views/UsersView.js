define([
    "ember",
    "text!templates/usersTemplate.html"
], function(Ember, usersTemplate) {
    Ember.TEMPLATES["users"] = Ember.Handlebars.compile(usersTemplate);
    var UsersView = Ember.View.extend({
        template: Ember.Handlebars.compile(usersTemplate)
    });
    return UsersView;
});