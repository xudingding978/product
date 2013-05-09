define([
    "ember",
    "text!templates/ProfileNewTemplate.html"

], function(Ember, newTemplate) {
    Ember.TEMPLATES["ProfileNew"] = Ember.Handlebars.compile(newTemplate);


    var ProfileNew = Ember.View.extend({
        template: Ember.Handlebars.compile(newTemplate),
    });
    return ProfileNew;
});
