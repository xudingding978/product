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


                controller.setLoginOut();
            } else {

                this.controllerFor('application').set('model', UserModel.find(localStorage.loginStatus));
                this.controllerFor('status').set('model', UserModel.find(localStorage.loginStatus));
                //    console.log("dataaaaaaaaaaaaaaa   "+UserModel.find(localStorage.loginStatus));
                controller.setLoginIn();

            }
        }

    });
    return ApplicationRoute;
});
