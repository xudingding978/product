define([
    'models/ProfileModel',
    'ember'],
        function(
                ProfileModel,
                Ember
                ) {
            var ProfileNewController = Ember.ObjectController.extend({
                newProfile: function() {
                    var profile_ID = ProfileModel.id;
                    var profile_NAME = ProfileModel.profile_name;


                    var newProfile = App.store.createRecord(App.Profile,{
                        id: profile_ID,
                        profile_name: profile_NAME,
                        type: "profile"
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
