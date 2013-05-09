define([
    "ember",
    "text!templates/profileNewTemplate.html"

], function(Ember, profileNewTemplate) {
    Ember.TEMPLATES["profileNew"] = Ember.Handlebars.compile(profileNewTemplate);


    var ProfileNew = Ember.View.extend({
        template: Ember.Handlebars.compile(profileNewTemplate),
//        save: function() {
//            alert("ssss");
////                var newProfile = ProfileModel.createRecord({"id":});
////                //   var newProfile = this.modelFor('profile');
////                this.transitionTo('profile', newProfile);
//
//        }
    });
    return ProfileNew;
});
