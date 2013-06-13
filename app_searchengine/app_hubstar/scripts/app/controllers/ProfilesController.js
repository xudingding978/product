define(
        ['ember', 'models/ProfileModel'],
        function(Ember, ProfileModel) {
            var ProfilesController = Ember.ArrayController.extend({
                model: function() {
                  
                    return ProfileModel.find();

                },
            }); 
            return ProfilesController;
        });
