
define([
    'ember'


], function(
        Ember

        ) {
    "use strict";

    var ComingSoonRoute = Ember.Route.extend({
        redirect: function() {





        },
        renderTemplate: function() {
            this.render('comingSoon', {
                into: 'application'
            });
        }
    });
    return ComingSoonRoute;
});
