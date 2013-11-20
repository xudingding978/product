
/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.CheckingLoginStatusController = Ember.Controller.extend({
    
    init: function() {

    },
    popupLogin: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('checkLoginStatus', true);
            return false;
        }
        else {
            return true;
        }
    }

});
