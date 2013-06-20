

define(["ember"], function(Ember) {

    var ApplicationController = Ember.Controller.extend({
        needs: ['searchs'],
        loginInfo: "",
        user: null,
        popupModal: function() {
            this.set('popup', !this.get('popup'));


        },
        closeModal: function() {

            this.set('popup', !this.get('popup'));


        },
        email_login: function() {

            this.set('mail', !this.get('mail'));
        },
        loginStatus: function() {
            var searchsController = this.get("controllers.searchs");
            this.set('loginInfo', localStorage.loginStatus);
            searchsController.set('loginInfo', localStorage.loginStatus);
        },
//        test: function() {
//            this.set('loginInfo', localStorage.loginStatus);
//        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
         //   console.log(this.get("user"));

        }
                


    });

    return ApplicationController;
});
