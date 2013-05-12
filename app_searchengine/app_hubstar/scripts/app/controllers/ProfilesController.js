define(
        'controllers/ProfilesController',    'models/ProfileModel'
    ['ember' ],
    function (ProfilesController,ProfileModel) {
    var ProfilesController = Ember.ArrayController.extend({
        model: function() {
       //      console.log("profileModel 111111111    "+ProfileModel.find());
            return ProfileModel.find();

        },
    });
    return ProfilesController;
});
