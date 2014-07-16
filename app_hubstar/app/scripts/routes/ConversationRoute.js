HubStar.ConversationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
     
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        var user = HubStar.User.find(user_id);
        var conversation_id = address.split("#")[1].split("/")[5];
        
        var data = null;
        if (conversation_id === "new")
        {
            this.transitionTo("newConversation");
        }
        else if (conversation_id === "null" || conversation_id === undefined)
        {
            if (user.get('conversations').get("length") > 0)
            {
                data = user.get('conversations').objectAt(0);
                data.set("id", data.get("conversation_id"));  
                return data;
            }
            else
            {
                this.transitionTo("newConversation");
            }
        }
        else {

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversation_id) {
                    data.set("id", data.get("conversation_id"));
                    break;
                }
            }
            return data;
        }
    }
});


