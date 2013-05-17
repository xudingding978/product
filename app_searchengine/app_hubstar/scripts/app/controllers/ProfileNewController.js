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


                    var newProfile = App.store.createRecord(App.Profile, {
                        id: profile_ID,
                        profile_name: profile_NAME,
                        type: "profile",
                        profile_bg_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_bg/default/defaultbg6.jpg",
                        profile_cover_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_cover/default/defaultcover4.jpg",
                        profile_pic_url: "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic4.jpg"
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
