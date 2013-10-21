/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.InvitePeopleController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter','newConversation'],
    isUploadPhoto: false,
    isInvitePeople: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    getClientId: function(id) {
        $('#invitepeople').attr('style', 'display: block');
        $('#invite_box').attr('style', 'display: block');
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];

        tempComment = JSON.stringify(tempComment);
        var that = this;
//        requiredBackEnd('conversations', 'ReadConversation', tempComment, 'POST', function(params) {
//        });
    },
    reviewCancel: function() {
        this.get("controllers.newConversation").set("isInvitePeople",false);
    }
}
);
