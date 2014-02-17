/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.TalkController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    isAdded: false,
    contentFollowerPhoto: null,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("owner_photo_url", this.get("currentOwner").get("photo_url_large"));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
            this.set("displayName", this.get("currentOwner").get("display_name"));
        }
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
    },
    cancelTalk: function()
    {
        this.set('messageContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.get("controllers.user").set("isTalk", false);
    },
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {
            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined && this.get("newStyleImageSource") !== null && this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined && this.get('newStyleImageName') !== null && this.get('newStyleImageName') !== "")
            {
                imageStyleName = this.get('newStyleImageName');

            }
            else
            {
                imageStyleName = "";
            }
            var imageName = "";
            var imageType = "";
            if (imageStyleName !== undefined && imageStyleName !== null && imageStyleName !== "")
            {
                var imageName = imageStyleName.split('.');
                var imageType = imageName[imageName.length - 1];
            }
            var conversationID = createMessageid();
            var conversationItemID = createMessageid();

            var participation_ids = this.get("currentOwner").get("id");


            var tempComment = [commenter_id, date.toString(), commentContent, newStyleImage, imageType, imageStyleName, conversationID, conversationItemID, participation_ids];

            tempComment = JSON.stringify(tempComment);
            var that = this;
            requiredBackEnd('conversations', 'CreateConversation', tempComment, 'POST', function(params) {

                that.get('controllers.applicationFeedback').statusObserver(null, "Message sent.");
                HubStar.set("talkConversation",true);

                that.reviewCancel();
                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");

            });

        }
    },
    reviewCancel: function() {
        this.get("controllers.user").set("isTalk", false);
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);       
    }
}
);
