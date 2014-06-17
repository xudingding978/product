HubStar.ApplicationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
    }
    ,
    events: {
        transitionToGroup: function(id) {
            this.transitionTo("group", HubStar.Group.find(id));
        }
    }


});
