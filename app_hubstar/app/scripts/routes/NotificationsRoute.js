/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        var model = localStorage.loginStatus;
        this.controllerFor('messageCenter').selectNotification(model);
        
        $(window).scrollTop(550);

    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        this.controllerFor('notificationTop').set("notificationSeeAll", true);
        return user_id;
    }
});


