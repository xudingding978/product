/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.FourOhFourRoute = Ember.Route.extend({
    setupController: function(controller, model) {

    },
    model: function(params) {

    },
    activate: function() {
        HubStar.set("is_404", true);
    },
    deactivate: function() {
        HubStar.set("is_404", false);
    },
    renderTemplate: function() {

        this.render('fourOhFour', {
            outlet: "fourOhFour",
            into: "application"
        });

    }
});