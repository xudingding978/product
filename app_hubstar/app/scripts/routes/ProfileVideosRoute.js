HubStar.ProfileVideosRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        $('#user-stats > li').removeClass('selected-user-stats');
        $('#video_tap').addClass('selected-user-stats');
        this.controllerFor('profile').selectVideo();
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
