/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.EditReplyController = Ember.Controller.extend({
    commenter_photo_url: null,
    replyContent: null,
    isUploadPhoto: false,
    isReply: true,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'message', 'userMessage'],
    actions: {
        updateReply: function(id) {

            this.set("currentOwner", this.get('controllers.user').getCurrentUser());
            var owner_id = this.get("currentOwner").get("id");
            var replyID = null;
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++) {
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                    {
                        if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("url") === null)
                        {
                            replyID = createMessageid();
                        }
                        var date = new Date();
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
                            imageName = imageStyleName.split('.');
                            imageType = imageName[imageName.length - 1];
                        }
                        var replyContent = this.get("replyContent");
                        var url = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("url");
                        var tempComment = [owner_id, date.toString(), replyContent, newStyleImage, imageType, imageStyleName, id, replyID, url];

                        tempComment = JSON.stringify(tempComment);
                        var that = this;
                        this.set("isReply", false);
                        requiredBackEnd('messages', 'UpdateReply', tempComment, 'POST', function(params) {
                            that.set("isReply", true);

                            for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                            {
                                for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++) {
                                    if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                                    {
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("msg", params.msg);
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("url", params.url);
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("time_stamp", params.time_stamp);
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", false);
                                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", true);
                                        if (params.url !== null)
                                        {
                                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl", true);
                                        }
                                        else
                                        {
                                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl", false);
                                        }

                                    }
                                }
                            }
                            that.get("controllers.message").set("isEdit", true);
                            that.set('replyContent', "");
                            that.set('newStyleImageSource', null);
                            that.set('newStyleImageName', "");
                            that.set("isUploadPhoto", true);
                            setTimeout(function() {
                                $('#masonry_user_container').masonry("reloadItems");
                                setTimeout(function() {
                                    $('#masonry_user_container').masonry();
                                }, 100);
                            }, 200);
                        });
                    }
                }
            }
        },
        removePic: function() {

            this.set('newStyleImageSource', null);
            this.set('newStyleImageName', "");
            this.set("isUploadPhoto", false);

            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);

        },
        removeOriginPic: function(id) {

            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id) {
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("url", null);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("isUrl", false);
                        break;
                    }
            }

            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);

        }
    },
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        if (this.get("currentOwner").get("id") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
        }
        this.set('replyContent', HubStar.get('reply'));
    },
    close: function(id) {

        this.set('replyContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");


        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id) {
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", false);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", true);
                    break;
                }
        }
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);
        }, 200);
    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);

        setTimeout(function() {
            $('#masonry_user_container').masonry();
        }, 100);

    }
}
);
