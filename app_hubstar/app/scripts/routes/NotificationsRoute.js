/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {


        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
        // The following two line is used to change the selection with dark 
  
        this.controllerFor('messageCenter').getClientId(model);

        this.controllerFor('user').set('profileSelectionStatus', 'notifications');

        
        this.controllerFor('messageCenter').set("isNewConversation", false);
        this.controllerFor('messageCenter').set("isConversationItem", false);
        this.controllerFor('messageCenter').set("isNotification", true);
        this.controllerFor('messageCenter').set("isMessageBoard", false);
        this.controllerFor("conversation").selectConversation();
        this.controllerFor("notification").getClientId(model);
        $(window).scrollTop(0);


    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


