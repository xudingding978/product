/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('user').set('profileSelectionStatus', 'Conversations');

        this.controllerFor('messageCenter').set("isNewConversation", false);

        this.controllerFor('messageCenter').set("isConversationItem", true);

        this.controllerFor('messageCenter').set("isNotification", false);

        this.controllerFor('messageCenter').set("isMessageBoard", false);
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


