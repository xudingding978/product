define([
    "ember",
    "text!templates/profileNewTemplate.html",
    'controllers/ProfileNewController',
], function(
        Ember, 
        profileNewTemplate, 
        ProfileNewController) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        controller: ProfileNewController,
        template: Ember.Handlebars.compile(profileNewTemplate),
        save: function(e) {
//            var new_name = this.$("#profile_name").val();
//            var new_id = this.$("#id").val();
//
//          //      var controller=this.get("controller");
//          var object={"id":new_id,"profile_name":new_name};
            this.get("controller").send("newProfile");
            
            
         //       controller.newProfile({"name":new_name});
         //   var newProfile = ProfileModel.createRecord({"id": new_id, "profile_name": new_name});

//           route.transitionTo('profile', newProfile);

        }

    });
    return ProfileNew;
});
