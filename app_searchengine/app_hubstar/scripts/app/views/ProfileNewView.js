define([
    "ember",
    "text!templates/profileNewTemplate.html", 
    'models/ProfileModel'
   

], function(Ember, profileNewTemplate, ProfileModel) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        template: Ember.Handlebars.compile(profileNewTemplate),
        save: function(router) {
            var new_name = this.$("#profile_name").val();
            var new_id = this.$("#id").val();
            alert(new_name);
            console.log(ProfileModel.find("leo"));
            var newProfile = ProfileModel.createRecord({"id": new_id, "profile_name": new_name});
            
//           route.transitionTo('profile', newProfile);

        }

    });
    return ProfileNew;
});
