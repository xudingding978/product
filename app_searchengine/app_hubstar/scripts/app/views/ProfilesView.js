define([
    "ember",
    "text!templates/profilesTemplate.html",
    "controllers/ProfilesController",
    "jquery.ui",
    'helpers'

], function(Ember, profilesTemplate, ProfilesController) {
    Ember.TEMPLATES["profiles"] = Ember.Handlebars.compile(profilesTemplate);


    var ProfilesView = Ember.View.extend({
        template: Ember.Handlebars.compile(profilesTemplate),
        classNames: ["nothingHere"]
    });
    return ProfilesView;
});
