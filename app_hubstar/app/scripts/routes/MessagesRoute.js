/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessagesRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('messageCenter').set("isMessageBoard", true);
        this.controllerFor('messageCenter').set("isNotification", false);
        this.controllerFor('messageCenter').set("isNewConversation", false);
        this.controllerFor('messageCenter').set("isConversationItem", false);
        this.controllerFor('conversation').selectConversation();
        $('#notificationselected').removeClass('selected-conversation');
        $('#messageBoardselected').addClass('selected-conversation');
        this.controllerFor('userMessage').getClientId(model);
        $(window).scrollTop(0);
    },
    model: function(params) {

        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


