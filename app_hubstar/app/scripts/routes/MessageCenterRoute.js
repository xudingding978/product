/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false);

        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);
        // The following two line is used to change the selection with dark 
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#message').addClass('selected-user-stats');
        var address = document.URL;
        var conversation_id = "";
        if (this.controllerFor('notificationTop').get("goMessage") !== undefined && this.controllerFor('notificationTop').get("goMessage") !== null && this.controllerFor('notificationTop').get("goMessage") !== "")
        {
            model = localStorage.loginStatus;
        }
        if (this.controllerFor('notification').get("reply_ids") !== undefined && this.controllerFor('notification').get("reply_ids") !== null && this.controllerFor('notification').get("reply_ids") !== "")
        {
            model = this.controllerFor('notification').get("reply_ids");        
        }
         if (this.controllerFor('notificationTop').get("reply_ids") !== undefined && this.controllerFor('notificationTop').get("reply_ids") !== null && this.controllerFor('notificationTop').get("reply_ids") !== "")
        {
            model = this.controllerFor('notificationTop').get("reply_ids");        
        }
        if (address.split("#")[1].split("/").length === 6 && address.split("#")[1].split("/")[4] === "conversations") {
            conversation_id = address.split("#")[1].split("/")[5];
            this.controllerFor('messageCenter').getClientId(model, conversation_id);
        }
        else {
            this.controllerFor('messageCenter').getClientId(model);
        }
        $(window).scrollTop(0);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    },
    events: {
        transitionToConversation: function(conversation_id) {


            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            var data = null;
            var isNewConversation = HubStar.get("newConversation");
            if (isNewConversation)
            {
                data = this.controllerFor('conversation').get("conversationContent").objectAt(0);
                data.set("id", data.get("conversationID")); //it is use for the new conversation

            }
            else {
                for (var i = 0; i < user.get('conversations').get("length"); i++) {
                    data = user.get('conversations').objectAt(i);

                    if (data.get("conversation_id") === conversation_id) {

                        data.set("id", data.get("conversation_id"));
                        break;
                    }
                }
            }
            HubStar.set("newConversation", false);
            this.controllerFor("conversation").selectConversation(data.get("id"));
            this.transitionTo("conversation", data);
        }
    }
});


