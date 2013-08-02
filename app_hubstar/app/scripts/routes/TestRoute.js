HubStar.TestRoute = Ember.Route.extend({

        renderTemplate: function() {
            this.render('image', {
                into: 'application'
            });
        }
    });
