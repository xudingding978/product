
/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.CheckingLoginStatusController = Ember.Controller.extend({
    
    init: function() {

    },
    popupLogin: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            HubStar.set('checkLoginStatus', true);
        //    $("#body_id").css("overflow","hidden");
            return false;
        }
        else {
            return true;
        }
    }

});
