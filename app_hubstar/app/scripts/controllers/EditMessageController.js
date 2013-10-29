/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.EditMessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    messageContent: null,
    isUploadPhoto: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'message', 'userMessage'],
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
        this.set('messageContent', HubStar.get('message'));
    },
    close: function(id) {
        this.set('messageContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", false);
                break;
            }
        }
        this.set("isUploadPhoto", false);
    },
    removePic: function(id) {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");

        this.set("isUploadPhoto", false);
    },
    removeOriginalPic: function(id) {
         for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("url", null);
                 this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", false);
                break;
            }
        }
    },
    updateMessage: function(id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentOwner").get("id");
        var replyID = null;
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("url") === null)
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
                    var imageName = imageStyleName.split('.');
                    var imageType = imageName[imageName.length - 1];
                }
                var messageContent = this.get("messageContent");
               var url = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("url");
                var tempComment = [owner_id, date.toString(), messageContent, newStyleImage, imageType, imageStyleName, id, replyID,url];

                tempComment = JSON.stringify(tempComment);
                var that = this;

                requiredBackEnd('messages', 'UpdateMessage', tempComment, 'POST', function(params) {


                    for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                    {
                        if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                        {
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("msg", params["msg"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("url", params["url"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("time_stamp", params["time_stamp"]);
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", false);
                            if (params["url"] !== null)
                            {
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", true);
                            }
                            else
                            {
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("isUrl", false);
                            }

                        }
                    }
                    that.set('messageContent', "");
                    that.set('newStyleImageSource', null);
                    that.set('newStyleImageName', "");
                    that.set("isUploadPhoto", false);
                    setTimeout(function() {
                        $('#masonry_user_container').masonry("reloadItems");
                    }, 200);



                });
            }
        }

    },
    profileStyleImageDrop: function(e, name)
    {
        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    }
}
);
