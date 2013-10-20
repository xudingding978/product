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
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage', 'conversation','newConversation'],
    isMessageBoard: true,
    isNotification: false,
    isNewConversation: false,
    isConversationItem:false,
    isUserself: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },

    getClientId: function(id) {
        if (id === localStorage.loginStatus)
        {
            this.set("isUserself", true);
            this.get('controllers.conversation').getClientId(id);
        }
        else
        {
            this.set("isUserself", false);
        }

        this.selectMessage(id);
        this.set("id",id);      

    },
    selectMessage: function(id) {
        this.set("isMessageBoard", true);
        this.set("isNotification", false);
        this.set("isNewConversation", false);       
         this.set("isConversationItem", false);
        this.get('controllers.userMessage').getClientId(id);
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    },
    selectNotification: function() {
        this.set("isNewConversation", false);
        this.set("isConversationItem", false);
        this.set("isNotification", true);
        this.set("isMessageBoard", false);
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    },
    selectNewConversation: function() {
        this.set("isNewConversation", true);
        this.set("isConversationItem", false);
        this.set("isNotification", false);
        this.set("isMessageBoard", false);
         //this.get('controllers.newConversation').getClientId(id);
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    },
     selectConversationItem: function() {
        this.set("isNewConversation", false);
        this.set("isConversationItem", true);
        this.set("isNotification", false);
        this.set("isMessageBoard", false);
         //this.get('controllers.newConversation').getClientId(id);
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    }
}
);
