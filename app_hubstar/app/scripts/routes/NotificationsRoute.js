/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Notifications');
        this.controllerFor('messageCenter').set("isNewConversation", false);
        this.controllerFor('messageCenter').set("isConversationItem", false);
        this.controllerFor('messageCenter').set("isNotification", true);
        this.controllerFor('messageCenter').set("isMessageBoard", false);
        this.controllerFor('conversation').selectConversation();

         this.controllerFor('notification').getClientId(model);
         setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


