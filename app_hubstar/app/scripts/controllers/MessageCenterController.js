/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterController = Ember.Controller.extend({
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage', 'conversation', 'newConversation', 'notification'],
    isMessageBoard: true,
    isNotification: false,
    isNewConversation: false,
    isConversationItem: false,
    isUserself: false,

    unReadCount: 0,

    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },

    getClientId: function(id, conversation_id) {


        if (id === localStorage.loginStatus)
        {
            this.set("isUserself", true);           
            this.get('controllers.conversation').getClientId(id, conversation_id);
        }
        else
        {
            this.set("isUserself", false);
        }
        this.selectMessage(id, true);
        this.set("id", id);

    },
    selectMessage: function(id, b) {


        this.set("isMessageBoard", true);
        this.set("isNotification", false);
        this.set("isNewConversation", false);
        this.set("isConversationItem", false);
        this.get("controllers.conversation").selectConversation();

        $('#notificationselected').removeClass('selected-conversation');
        $('#messageBoardselected').addClass('selected-conversation');
        this.get('controllers.userMessage').getClientId(id);
        if (b !== true) {
            this.transitionToRoute("messages");
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    selectedNone: function() {
        $('#messageBoardselected').removeClass('selected-conversation');
        $('#notificationselected').removeClass('selected-conversation');
    },
    selectNotification: function(id) {
        this.set("isNewConversation", false);
        this.set("isConversationItem", false);
        this.set("isNotification", true);
        this.set("isMessageBoard", false);
        this.get("controllers.conversation").selectConversation();

        $('#messageBoardselected').removeClass('selected-conversation');
        $('#notificationselected').addClass('selected-conversation');
        this.get("controllers.notification").getClientId(id);
        this.transitionToRoute("notifications");

        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    selectNewConversation: function() {
        this.transitionToRoute("newConversation");
    },
    selectConversationItem: function() {

        this.set("isNewConversation", false);
        this.set("isConversationItem", true);
        this.set("isNotification", false);
        this.set("isMessageBoard", false);

        this.transitionToRoute("conversation");
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);
