define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var NewRoute = Ember.Route.extend({
        renderTemplate: function() {

            this.render('profileNew', {
                into: "application"
            });
        }
    });
    return NewRoute;
});