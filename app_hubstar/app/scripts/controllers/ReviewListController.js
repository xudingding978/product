
HubStar.ReviewListController = Ember.Controller.extend({
     currentUser:"",
    user_name:"",
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user'],
    init: function()
    {
        
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));

        }
        
    }
});
