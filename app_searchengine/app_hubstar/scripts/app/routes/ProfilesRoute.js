define([
    'ember',
    'controllers/ApplicationController', 
    'models/PostModel'
], function(
        Ember,
        ApplicationController,
        PostModel
        ) {
    "use strict";

    var ProfilesRoute = Ember.Route.extend({
        controller: ApplicationController,
        setupController: function(controller, Postmodel) {
            //  controller.set("indexPage",true);
            //   controller.get('application').remove();
        },
        model: function(params) {
            return [params.profile_id];
           //    return [{id:'Molly',profileName: 'Molly Brandenburg Interior'},{id:'Colin',profileName: 'Top graphic designer!'},{id:'Tao',profileName: 'web developer'}];
        },
        renderTemplate: function() {

            this.render('profiles', {
                into: "application"
            });

        }

    });
    return ProfilesRoute;
});
