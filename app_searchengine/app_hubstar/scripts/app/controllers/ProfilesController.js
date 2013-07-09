define(
        ['ember', 'models/ProfileModel'],
        function(Ember, ProfileModel) {
            var ProfilesController = Ember.ArrayController.extend({
                model: []

            });
            return ProfilesController;
        });
