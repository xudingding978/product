define([
    "ember",
    "text!templates/profileNewTemplate.html",
    'models/ProfileModel',
    'controllers/ProfileController',
], function(Ember, profileNewTemplate, ProfileModel, ProfileController) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        template: Ember.Handlebars.compile(profileNewTemplate),
        controller: ProfileController,
        save: function(router) {
            var new_name = this.$("#profile_name").val();
            var new_id = this.$("#id").val();
            ProfileController.newProfile();

            var newProfile = ProfileModel.createRecord({"id": new_id, "profile_name": new_name});

//           route.transitionTo('profile', newProfile);

        }

    });
    return ProfileNew;
});
