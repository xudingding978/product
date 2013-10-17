/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageCenterController = Ember.Controller.extend({
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage','conversation'],
    isMessageBoard: true,
    isNotification: false,
    isNewConversation:false,
    isUserself: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    //  setUserFollowers: function(followers) {
//        $('#user-stats > li').removeClass('selected-user-stats');
//        $('#ufollower').addClass('selected-user-stats');
    //    console.log(followers);
    //    var model = HubStar.User.find(followers);
    //   this.getClientId(model); // It is used to get the mesage model
    // },
    getClientId: function(id) {    
        if (id === localStorage.loginStatus)
        {
            this.set("isUserself", true);
             this.get('controllers.conversation').getClientId(id);        
        }
        else
        {
            this.set("isUserself", false);
        }
        this.selectMessage();
        this.get('controllers.userMessage').getClientId(id);        
    },
    selectMessage: function() {       
        this.set("isMessageBoard", true);
        this.set("isNotification", false);
        this.set("isNewConversation",false);
    },
    selectNotification: function() {
        this.set("isNewConversation",false);
        this.set("isNotification", true);
        this.set("isMessageBoard", false);
    },
     selectNewConversation: function() {
        this.set("isNewConversation",true);
        this.set("isNotification", false);
        this.set("isMessageBoard", false);
    }
    
}
);
