
/*global HubStar */
/*global Ember */
/*global $:false */

HubStar.CheckingLoginStatusController = Ember.Controller.extend({
    
    init: function() {

    },
    popupLogin: function() {

        if (localStorage.getItem("loginStatus") === null || (localStorage.loginStatus === "")) {
            
           
            return false;
        }
        else {
            HubStar.set('checkLoginStatus', true);
            return true;
        }
    
    
}
});
