HubStar.ConversationsRoute = Ember.Route.extend({
    setupController: function(controller, model) {
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


