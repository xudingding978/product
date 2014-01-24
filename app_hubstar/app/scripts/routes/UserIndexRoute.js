HubStar.UserIndexRoute = Ember.Route.extend({
        setupController: function(controller, model) {

            this.controllerFor('user').set('switchPhoto', true);
        },


    });
