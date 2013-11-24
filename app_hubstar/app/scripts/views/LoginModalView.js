HubStar.LoginModalView = Ember.View.extend({
    templateName: 'loginModal',
    didInsertElement: function() {
console.log("login modal view");
        $("#loginModal").on("click", function() {
            alert('aaaaaaaaaaa');
            HubStar.set('checkLoginStatus', false);

        });

    }

});

