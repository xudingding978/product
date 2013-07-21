define([
    "ember",
    "text!templates/profileFollowersTemplate.html"
], function(Ember, profileFollowersTemplate) {

    Ember.TEMPLATES["profileFollowers"] = Ember.Handlebars.compile(profileFollowersTemplate);

    var ProfileFollowersView = Ember.View.extend({
        template: Ember.Handlebars.compile(profileFollowersTemplate)
    });

    return ProfileFollowersView;
});