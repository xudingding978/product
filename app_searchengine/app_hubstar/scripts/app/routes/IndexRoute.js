define([
    'ember'

], function(
        Ember

        ) {
    "use strict";

    var IndexRoute = Ember.Route.extend({
        redirect: function() {

            this.transitionTo('profiles');
        }

    });
    return IndexRoute;
});
