HubStar.VerifyIdRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log("000045444444444444");
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var account = user_id.split("?")[0];
        var password = user_id.split("?")[1];
        this.controllerFor('application').verify(account,password);

    },
    model: function() {
        return 0;
    }
});
