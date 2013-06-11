define([
    "ember",
    "text!templates/userTemplate.html"
], function(Ember, userTemplate) {
    Ember.TEMPLATES["user"] = Ember.Handlebars.compile(userTemplate);
    var UserView = Ember.View.extend({
        template: Ember.Handlebars.compile(userTemplate)
    });
    return UserView;
});