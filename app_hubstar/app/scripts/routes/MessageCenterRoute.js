/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('user').set('profileSelectionStatus', 'Messages');
        this.controllerFor('user').set('collectionTag', false);
        this.controllerFor('user').set('postTag', false);  //it is used to solve the problem of visit conversation from notificationTop,but show the posts
        this.controllerFor('user').set('followerTag', false);
        this.controllerFor('user').set('followingTag', false);
        this.controllerFor('user').set('messageTag', true);

        // The following two line is used to change the selection with dark 
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#message').addClass('selected-user-stats');
        var address = document.URL;
        var conversation_id = "";

        if (this.controllerFor('notificationTop').get("notificationSeeAll") === true)
        {
            model = localStorage.loginStatus;
            this.controllerFor('notificationTop').set("notificationSeeAll", false);
        }

        if (this.controllerFor('notificationTop').get("goConversation") === true)
        {

            model = localStorage.loginStatus;
            this.controllerFor('notificationTop').set("goConversation", false);
            this.controllerFor('messageCenter').getClientId(localStorage.loginStatus);
        }
        else if (address.split("#")[1].split("/").length === 6 && address.split("#")[1].split("/")[4] === "conversations") {

            conversation_id = address.split("#")[1].split("/")[5];
            this.controllerFor('messageCenter').getClientId(localStorage.loginStatus, conversation_id);
        }
        else {
            this.controllerFor('messageCenter').getClientId(model);
        }
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    },
    redirect: function() {
        if ((localStorage.getItem("loginStatus") === null) || (localStorage.loginStatus === "")) {

            this.transitionTo('indexIndex');
            this.controllerFor('application').set('popup', true);
        }
        else
        {
            var address = document.URL;
            var items = address.split("#")[1].split("/");

            if (items[2] !== localStorage.loginStatus)
            {
                this.transitionTo('user');
            }
        }
    },
    events: {
        transitionToConversation: function(conversation_id) {
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            var user = HubStar.User.find(user_id);

            var data = null;
            var isNewConversation = HubStar.get("newConversation");
            var isTalk = HubStar.get("talkConversation");
            this.controllerFor('conversation').set("isNewConversation", false);
            if (isNewConversation || isTalk)
            {
                data = this.controllerFor('conversation').get("conversationContent").objectAt(0);
                data.set("id", data.get("conversationID")); //it is use for the new conversation
            }
            else {
                for (var i = 0; i < this.controllerFor('conversation').get("conversationContent").length; i++) {
                    data = this.controllerFor('conversation').get("conversationContent").objectAt(i);

                    if (data.get("conversationID") === conversation_id) {

                        data.set("id", data.get("conversationID"));
                        break;
                    }
                }
            }
            HubStar.set("newConversation", false);
            HubStar.set("talkConversation", false);
            this.controllerFor("conversation").selectConversation(data.get("id"));
            this.transitionTo("conversation", data);
        }
    }
});


