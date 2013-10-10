HubStar.RegisterRoute = Ember.Route.extend({
        redirect: function() {

        },
        setupController: function() {

        },
        activate: function() {
            this.controllerFor('application').set('register', true);
        },
        deactivate: function() {
            this.controllerFor('application').set('register', false);

        },
        renderTemplate: function() {
            this.render('register', {
                outlet: 'register',
                into: 'application'
            });
        }
    });
