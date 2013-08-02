HubStar.ComingSoonRoute = Ember.Route.extend({
        redirect: function() {





        },
        setupController: function() {

        },
        activate: function() {
            this.controllerFor('application').set('comingsoon', true);
        },
        deactivate: function() {
            this.controllerFor('application').set('comingsoon', false);

        },
        renderTemplate: function() {
            this.render('comingSoon', {
                outlet: 'comingsoon',
                into: 'application'
            });
        }
    });
