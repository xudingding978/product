define(["ember"], function(Ember) {
    var ApplicationController = Ember.Controller.extend({
        loginStatus: false,
        logout: function() {
            this.set('loginStatus', false);
            console.log(this.loginStatus);
        },
        login: function() {
            this.set('loginStatus', true);
            console.log(this.loginStatus);
        },
        getLoginStatus: function() {
            return this.loginStatus;
        }
    }

    );
    return ApplicationController;
});
