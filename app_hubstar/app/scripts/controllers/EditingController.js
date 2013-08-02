
            HubStar.EditingController = Ember.ObjectController.extend({
                newProfile: function(model) {
                    var profile_ID = HubStar.Profile.id;
                    var profile_NAME =  HubStar.Profile.profile_name;


                    var newProfile =  HubStar.Profile.createRecord({
                        id: profile_ID,
                        profile_name: profile_NAME,
                        type: "profile"
                    });

                    //newProfile.get('transaction').commit();
                    HubStar.store.commit();
                    this.transitionTo('profile', newProfile);

                }
//                saveProfile: function() {
//                    HubStar.store.commit();
//                }

            });
