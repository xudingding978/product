HubStar.NewConversationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('messageCenter').set("isNewConversation", true);
        this.controllerFor('messageCenter').set("isConversationItem", false);
        this.controllerFor('messageCenter').set("isNotification", false);
        this.controllerFor('messageCenter').set("isMessageBoard", false);
        HubStar.set("newConversation", true);
        this.controllerFor('conversation').set("isNewConversation", true);
        this.controllerFor('conversation').selectConversation();
        this.controllerFor('conversation').set("isInvitePeople", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);
        }, 200);
        $(window).scrollTop(550);
    },
    model: function(params) {
        var address = document.URL;
        var user_id = address.split("#")[1].split("/")[2];
        return user_id;
    }
});


