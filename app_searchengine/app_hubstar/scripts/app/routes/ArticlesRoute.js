define([
    'ember',
    'models/ProfileModel'
], function(
        Ember,
        ProfileModel
        ) {
    "use strict";

    var LightBoxRoute = Ember.Route.extend({
        //     controller: ApplicationController,
        setupController: function(IndexController, model) {

        },
        model: function(params) {
            return ProfileModel.find(params.profile_id);
        },
        activate: function() {
             $("body").css("overflow", "hidden");
             $('#footer').attr("style", "display:none");
        },
        deactivate: function() {
             $("body").css("overflow", "auto");
             $('#footer').attr("style", "display:block");
        },
        renderTemplate: function() {
            this.render('articles', {
                into: "index"
            });
        }

    });
    return LightBoxRoute;
});
