define([
    'ember',
    'models/UserModel'

], function(
        Ember,
        UserModel

        ) {
    "use strict";

    var ApplicationRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(controller, model) {



            if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

                App.set("isLogin", false);
 
            } else {

                this.controllerFor('application').set('model', UserModel.find(localStorage.loginStatus));
                this.controllerFor('status').set('model', UserModel.find(localStorage.loginStatus));
                    App.set("isLogin", true);


            }
            
                  this.controllerFor('application').loginStatus();
            
        }

    });
    return ApplicationRoute;
});
