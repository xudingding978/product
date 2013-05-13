define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var ProfileNewController = Ember.ObjectController.extend({
                newProfile: function(model) {
                    var newProfile = ProfileModel.createRecord({
                             id:ProfileModel.id,
                             profile_name:ProfileModel.profile_name
                    });

                    //newProfile.get('transaction').commit();
                    App.store.commit();
                    this.transitionTo('profile', newProfile);

                }
//                saveProfile: function() {
//                    App.store.commit();
//                }

            });
            return ProfileNewController;
        });
