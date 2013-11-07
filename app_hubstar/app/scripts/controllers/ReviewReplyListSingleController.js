
HubStar.ReviewReplyListSingleController = Ember.Controller.extend({
    currentUser: "",
       isUserself: false,
      currentOwner: "",
 
    needs: ['permission', 'applicationFeedback', 'profile', 'applicationFeedback', 'user', 'reviewListSingle', 'review'],
    init: function()
    {
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== 'undefined' && localStorage.loginStatus !== '') {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            
        }
        this.set("currentOwner", this.get('controllers.review').get("currentUser"));
        if (this.get("currentOwner") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
            console.log(this.get("isUserself"));
            console.log(this.get('currentOwner'));
        }
    }

});
