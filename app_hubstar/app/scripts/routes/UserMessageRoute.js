/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageRoute = Ember.Route.extend({
    setupController: function(controller, model) {
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;

    }
});
