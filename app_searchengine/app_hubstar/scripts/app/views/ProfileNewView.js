define([
    "ember",
    "text!templates/profileNewTemplate.html"

], function(Ember, profileNewTemplate) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        template: Ember.Handlebars.compile(profileNewTemplate),
    });
    return ProfileNew;
});
