define([
    'ember',
    'controllers/ApplicationController', 'models/Postmodel'
], function(
        Ember,
        ApplicationController,
        Postmodel
        ) {
    "use strict";

    var ProfilesRoute = Ember.Route.extend({
        controller: ApplicationController,
        setupController: function(controller, Postmodel) {
            //  controller.set("indexPage",true);
            //   controller.get('application').remove();
        },
        model: function(params) {
          //  console.log(params);
            return {id:params.profile_id,profileName: 'Molly Brandenburg Interior'};

            //    return [{id:'Molly',profileName: 'Molly Brandenburg Interior'},{id:'Colin',profileName: 'Top graphic designer!'},{id:'Tao',profileName: 'web developer'}];
        },
        renderTemplate: function() {

            this.render('profiles', {
                into: "application",
            });

        }

    });
    return ProfilesRoute;
});