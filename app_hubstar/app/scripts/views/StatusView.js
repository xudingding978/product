HubStar.StatusView = Ember.View.extend({
    templateName: 'status',
    didInsertElement: function() {
        $(document).ready(function() {

        });
        if (HubStar.get('isLogin')) {

            $('#login_button').attr("style", "display:none");
            $('#afterLogin').attr("style", "display:block");
            $('#welcome_message').attr("style", "display:none");
         

        } else {

            $('#login_button').attr("style", "display:inline-block");
            $('#afterLogin').attr("style", "display:none");
            $('#welcome_message').attr("style", "display:block");
        }



    },
    registerlogin: function() {
        HubStar.set('checkLoginStatus', true);

    }

});

