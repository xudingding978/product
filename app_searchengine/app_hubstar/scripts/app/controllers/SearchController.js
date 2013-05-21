define(
        'models/ProfileModel'
        ['ember' ],
        function(ProfileModel) {
            var SearchController = Ember.ArrayController.extend({
                model: function() {
                    //      console.log("profileModel 111111111    "+ProfileModel.find());
                    return ProfileModel.find();

                },

            });
            return SearchController;
        });
