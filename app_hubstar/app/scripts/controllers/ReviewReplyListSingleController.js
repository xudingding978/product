
HubStar.ReviewReplyListSingleController = Ember.Controller.extend({
    currentUser: "",

    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewListSingle', 'review'],
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));   
        }
    }

});
