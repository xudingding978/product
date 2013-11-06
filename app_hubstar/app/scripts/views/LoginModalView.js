HubStar.LoginModalView = Ember.View.extend({
    templateName: 'loginModal',
    didInsertElement: function() {

        $("#loginModal").on("click", function() {
            HubStar.set('checkLoginStatus', false);

        });

    }

});

