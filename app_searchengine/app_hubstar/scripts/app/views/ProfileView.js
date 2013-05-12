define([
    "ember",
    "text!templates/profileTemplate.html",
    "controllers/ProfileController",
    "bootstrapPopover",
    "bootstrapTooltip",
    "jquery.ui",
     'bxslider'

], function(Ember, profileTemplate, ProfileController) {
    Ember.TEMPLATES["profile"] = Ember.Handlebars.compile(profileTemplate);


    var ProfileView = Ember.View.extend({
        template: Ember.Handlebars.compile(profileTemplate),

    });
    return ProfileView;
});
