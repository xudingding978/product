define([
    "ember",
    "text!templates/profileTemplate.html",
    "controllers/ProfileController",


], function(Ember, profileTemplate, ProfileController) {
    Ember.TEMPLATES["profile"] = Ember.Handlebars.compile(profileTemplate);


    var ProfileView = Ember.View.extend({
        template: Ember.Handlebars.compile(profileTemplate),

    });
    return ProfileView;
});
