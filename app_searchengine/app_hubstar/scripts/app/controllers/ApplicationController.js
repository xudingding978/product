define(["ember"], function(Ember) {
    var ApplicationController = Ember.Controller.extend({
        indexPage: true,
        Profile_page: function() {
            this.set('indexPage', false);
        },
        isloggedIn: false,
        login: function() {
            this.set('isLoggedIn', true);
        },
        logout: function() {
            this.set('isLoggedIn', false);
        }
    });
    return ApplicationController;
});
