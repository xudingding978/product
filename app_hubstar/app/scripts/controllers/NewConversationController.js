/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NewConversationController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
    isUploadPhoto:false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        console.log("sssssssssssss");
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
            var tempComment = [commenter_id, date.toString(), commentContent, newStyleImage, imageType, imageStyleName, conversationID, conversationItemID];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            var dataNew = new Array();

            requiredBackEnd('conversations', 'CreateConversation', tempComment, 'POST', function(params) {
//    //params  is just one message 
//                dataNew["message_id"] = params["message_id"];
//                dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
//                dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
//                dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
//                dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
//                dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
//                dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
//                dataNew["url"] = params["replyMessageCollection"][0]["url"];
//                dataNew["enableToEdit"] = false;
//                if (params["replyMessageCollection"][0]["user_id"] === localStorage.loginStatus)
//                {
//                    dataNew["isUserself"] = true;
//                }
//                if (params["replyMessageCollection"][0]["url"] !== null)
//                {
//                    dataNew["isUrl"] = true;
//                }
//                else
//                {
//                    dataNew["isUrl"] = false;
//                }
//                dataNew["replyMessageCollection"] = new Array();
//                that.get("contentMsg").insertAt(0, dataNew);
//                 that.set("isUploadPhoto",false);
//                dataNew = new Array();
//
//
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);


                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });


         
            setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");              
            }, 200);
        }
    },
    profileStyleImageDrop: function(e, name)
    {
        
         this.set("isUploadPhoto",true);
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
