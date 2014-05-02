HubStar.ProfileVideosRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log(controller);
        var address = document.URL;
        var l = address.split("#")[1].split("/").length;
        if (l > 4) {
            if (address.split("#")[1].split("/")[4] === "videos")
            {
            }
            else
            {
                this.controllerFor('profile').selectVideo(model);
            }
        }
        else {
            this.controllerFor('profile').selectVideo(model);
        }
    },
    model: function(params) {

        var address = document.URL;
        var profile_id = address.split("#")[1].split("/")[2];
        var model = HubStar.Profile.find(profile_id);
        return model;
    }
});
