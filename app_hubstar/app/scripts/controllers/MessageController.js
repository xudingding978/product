/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.MessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage'],
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }

    },
    addReply: function(message_id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
          this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var replyContent = this.get('replyContent');
        if (replyContent) {
            var commenter_id = this.get("currentUser").get('id');
            var date = new Date();
            var owner_id = this.get("currentOwner").get("id");
            var newStyleImage = "";
            var imageStyleName = "";
            if (this.get("newStyleImageSource") !== undefined || this.get("newStyleImageSource") !== null || this.get("newStyleImageSource") !== "")
            {
                newStyleImage = this.get("newStyleImageSource");
            }
            else
            {
                newStyleImage = null;
            }
            if (this.get('newStyleImageName') !== undefined || this.get('newStyleImageName') !== null || this.get('newStyleImageName') !== "")
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
            var messageID = createMessageid();
            var tempComment = [commenter_id, date.toString(), replyContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, message_id];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            var dataNew = new Array();
            requiredBackEnd('messages', 'CreateReply', tempComment, 'POST', function(params) {

                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    console.log(that.get('controllers.userMessage').get("contentMsg"));
                    console.log(params);
                    console.log("sssssssssssssssss");
                    if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === params["message_id"])
                    {

                        dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                        dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                        dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                        dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                        dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                        dataNew["url"] = params["replyMessageCollection"][0]["url"];
                        if (params["replyMessageCollection"][0]["url"] !== null)
                        {
                            dataNew["isUrl"] = true;
                        }
                        else
                        {
                            dataNew["isUrl"] = false;
                        }
                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").insertAt(0, dataNew);

                    }
                }
                dataNew = new Array();
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);
                that.set('replyContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });


            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    close: function() {
        this.set('replyContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);
