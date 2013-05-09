define([
    'ember', 'models/ProfileModel'

], function(
        Ember, ProfileModel

        ) {
    "use strict";

    var NewRoute = Ember.Route.extend({
        renderTemplate: function() {

            this.render('profileNew', {
                into: "application"
            });
        },
        model: function() {
            //      console.log("profileModel 111111111    "+ProfileModel.find());
            return ProfileModel.find();

        },
        events: {
            save: function() {
                 var new_name = this.$("input").val();
                 alert(new_name);
                var newProfile = ProfileModel.createRecord({"id":new_name});
                //   var newProfile = this.modelFor('profile');
                this.transitionTo('profile', newProfile);

            }
        }
    });
    return NewRoute;
});