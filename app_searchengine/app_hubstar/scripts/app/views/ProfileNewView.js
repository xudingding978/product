define([
    "ember",
    "text!templates/profileNewTemplate.html",
    'controllers/ProfileNewController'
], function(
        Ember,
        profileNewTemplate,
        ProfileNewController) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        controller: ProfileNewController,
        template: Ember.Handlebars.compile(profileNewTemplate),
        save: function(e) {
            this.get("controller").send("newProfile");
        },
    });
    return ProfileNew;
});
