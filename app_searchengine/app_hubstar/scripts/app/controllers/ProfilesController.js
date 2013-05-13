define(
        'models/ProfileModel'
        ['ember' ],
        function(ProfileModel) {
            var ProfilesController = Ember.ArrayController.extend({
                model: function() {
                    //      console.log("profileModel 111111111    "+ProfileModel.find());
                    return ProfileModel.find();

                },

            });
            return ProfilesController;
        });
