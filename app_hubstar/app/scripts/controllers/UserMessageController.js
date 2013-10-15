/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserMessageController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }

    },
    setUserMessage: function(message) {

//        var model = HubStar.User.find(message);
//          var msg = model.get("messages");
//          this.set("contentMsg",msg);
//          
// The following two line is used to change the selection with dark 
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#message').addClass('selected-user-stats');
        this.getClientId(message); // It is used to get the mesage model

    },
    getClientId: function(id) {
        this.set('clientID', id);
        this.set('loadingTime', true);
        var data = this.get('clientID');
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('messages', 'Read', data, 'POST', function(params) {

            that.set("contentMsg", []);
            for (var i = 0; i < params.length; i++)
            {
                //First reply message and it is the last one of message and it contail the reply message collection
                dataNew["message_id"] = params[i]["message_id"];
                var length = params[i]["replyMessageCollection"].length - 1;
                dataNew["reply_id"] = params[i]["replyMessageCollection"][length]["reply_id"];
                dataNew["user_id"] = params[i]["replyMessageCollection"][length]["user_id"];
                dataNew["time_stamp"] = params[i]["replyMessageCollection"][length]["time_stamp"];
                dataNew["msg"] = params[i]["replyMessageCollection"][length]["msg"];
                dataNew["user_name"] = params[i]["replyMessageCollection"][length]["user_name"];
                dataNew["photo_url_large"] = params[i]["replyMessageCollection"][length]["photo_url_large"];
                dataNew["url"] = params[i]["replyMessageCollection"][length]["url"];
                dataNew["enableToEdit"] = params[i]["replyMessageCollection"][length]["enableToEdit"];
                if (params[i]["replyMessageCollection"][length]["user_id"] === localStorage.loginStatus)
                {
                    dataNew["isUserself"] = true; //dataNew["isUserself"] is true , which means it is the login users is the same as the user page owner
                }
                if (params[i]["replyMessageCollection"][length]["url"] !== null)
                {
                    dataNew["isUrl"] = true;
                }
                else
                {
                    dataNew["isUrl"] = false;
                }


                dataNew["replyMessageCollection"] = new Array();  // replyMessageCollection is used to store all the replyMessage except the last one which is the first Reply.
                for (var j = 0; j < params[i]["replyMessageCollection"].length - 1; j++)
                {
                    var dataReply = new Array();

                    dataReply["reply_id"] = params[i]["replyMessageCollection"][j]["reply_id"];

                    dataReply["user_id"] = params[i]["replyMessageCollection"][j]["user_id"];
                    dataReply["time_stamp"] = params[i]["replyMessageCollection"][j]["time_stamp"];
                    dataReply["msg"] = params[i]["replyMessageCollection"][j]["msg"];
                    dataReply["user_name"] = params[i]["replyMessageCollection"][j]["user_name"];
                    dataReply["photo_url_large"] = params[i]["replyMessageCollection"][j]["photo_url_large"];
                    dataReply["url"] = params[i]["replyMessageCollection"][j]["url"];
                    dataReply["enableToEdit"] = params[i]["replyMessageCollection"][j]["enableToEdit"];
                    if (params[i]["replyMessageCollection"][j]["url"] !== null)
                    {
                        dataReply["isUrl"] = true;
                    }
                    else
                    {
                        dataReply["isUrl"] = false;
                    }
                    if (params[i]["replyMessageCollection"][j]["user_id"] === localStorage.loginStatus)
                    {
                        dataReply["isUserself"] = true;  // isUserself is used to judge whether the reply message is written by the current login user
                    }
                    dataNew["replyMessageCollection"][j] = dataReply;
                }
                that.get("contentMsg").pushObject(dataNew);
                dataNew = new Array();
            }
            that.set('loadingTime', false);
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);

        });
    },
    removeMessage: function(Message_id)
    {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));

        var commenter_id = this.get("currentUser").get('id');// it is the login in user , it will use to check the right of delete
        var owner_id = this.get("currentOwner").get("id");// it the owner of the page, it will be used to identify  delete  which user's message item

        var tempComment = [commenter_id, owner_id, Message_id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('messages', 'RemoveMessage', tempComment, 'POST', function() {


            for (var i = 0; i < that.get("contentMsg").length; i++)
            {
                if (that.get("contentMsg").objectAt(i).get("message_id") === Message_id)
                {

                    that.get("contentMsg").removeObject(that.get("contentMsg").objectAt(i));
                    break;
                }

            }

            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        });
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
        }, 200);
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
            var replyID = createMessageid();
            var tempComment = [commenter_id, date.toString(), commentContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, replyID];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            var dataNew = new Array();

            requiredBackEnd('messages', 'CreateComment', tempComment, 'POST', function(params) {
    //params  is just one message 
                dataNew["message_id"] = params["message_id"];
                dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
                dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                dataNew["url"] = params["replyMessageCollection"][0]["url"];
                dataNew["enableToEdit"] = false;
                if (params["replyMessageCollection"][0]["user_id"] === localStorage.loginStatus)
                {
                    dataNew["isUserself"] = true;
                }
                if (params["replyMessageCollection"][0]["url"] !== null)
                {
                    dataNew["isUrl"] = true;
                }
                else
                {
                    dataNew["isUrl"] = false;
                }
                dataNew["replyMessageCollection"] = new Array();
                that.get("contentMsg").insertAt(0, dataNew);

                dataNew = new Array();


                setTimeout(function() {
                    $('#masonry_user_container').masonry("reload");
                }, 200);


                that.set('messageContent', "");
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
