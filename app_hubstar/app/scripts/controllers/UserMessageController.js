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
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'notification', 'message', 'notificationTop'],
    isUploadPhoto: false,
    isEdit: true,
    isPosting: true,
    makeSureDelete: false,
    isUserMessage: false,
    willDelete: false,
    oldPost: "",
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var that = this;
        if (localStorage.loginStatus) {
            var loginUser = HubStar.User.find(localStorage.loginStatus);
            loginUser.addObserver('isLoaded', function() {

                if (loginUser.get('isLoaded')) {
                    that.set("commenter_photo_url", that.get("currentUser").get("photo_url_large"));
                }
            });
        }
//    this.set("isPosting", true);
    },
    setUserMessage: function(message) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        this.getClientId(message); // It is used to get the mesage model      
    },
    getClientId: function(id) {
        this.set("isPosting", true);
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
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
                dataNew["enableToEdit"] = false;
                dataNew["replyEdit"] = true;
                dataNew["replyCount"] = params[i]["replyMessageCollection"].length - 1;
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


                dataNew["replyMessageCollection"] = new Array(); // replyMessageCollection is used to store all the replyMessage except the last one which is the first Reply.
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
                    dataReply["enableToEdit"] = false;
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
                        dataReply["isUserself"] = true; // isUserself is used to judge whether the reply message is written by the current login user
                    }
                    dataNew["replyMessageCollection"][j] = dataReply;
                }
                that.get("contentMsg").pushObject(dataNew);


                dataNew = new Array();
            }
            that.set('loadingTime', false);

            if (that.get('controllers.notification').get("goMessage") !== undefined && that.get('controllers.notification').get("goMessage") !== null && that.get('controllers.notification').get("goMessage") !== "") {
                var s = that.get('controllers.notification').get("goMessage");
                that.goToMessage(s);
            }
            if (that.get('controllers.notificationTop').get("goMessage") !== undefined && that.get('controllers.notificationTop').get("goMessage") !== null && that.get('controllers.notificationTop').get("goMessage") !== "") {
                var s = that.get('controllers.notificationTop').get("goMessage");

                that.goToMessageTop(s);
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry();
                $('#masonry_user_container').masonry("reload");
            }, 200);
        });
    },
    goToMessage: function(s)
    {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                var old = that.get("oldPost");
                $(old).removeClass("post-focus");
                $(s).addClass("post-focus");
                that.set("oldPost", s);
                if (that.get("controllers.notification").get("reply_ids") !== undefined && that.get("controllers.notification").get("reply_ids") !== null && that.get("controllers.notification").get("reply_ids") !== "")
                {

                    var thatthat = that;
                    setTimeout(function() {
                        thatthat.get('controllers.message').seeMore(that.get("controllers.notification").get("reply"));
                    }, 50);
                    that.get('controllers.notification').set("reply_ids", "");
                }
                that.get('controllers.notification').set("goMessage", "");
            });
        }, 50);
    },
    goToMessageTop: function(s)
    {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                var old = that.get("oldPost");
                $(old).removeClass("post-focus");
                $(s).addClass("post-focus");
                that.set("oldPost", s);
                if (that.get("controllers.notificationTop").get("reply_ids") !== undefined && that.get("controllers.notificationTop").get("reply_ids") !== null && that.get("controllers.notificationTop").get("reply_ids") !== "")
                {
                    var thatthat = that;
                    setTimeout(function() {
                        thatthat.get('controllers.message').seeMore(that.get("controllers.notificationTop").get("reply"));
                    }, 50);
                    that.get('controllers.notificationTop').set("reply_ids", "");
                }

                that.get('controllers.notificationTop').set("goMessage", "");
            }, 50);
        });
    }
    ,
    removeMessageItem: function(s)
    {
        var message = "Delete this message?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        this.set('isUserMessage', true);
        if (this.get('willDelete') === true) {
            this.removeMessage(s);
            this.cancelDelete();
        } else {
            this.set("s", s);
            this.set('willDelete', true);
        }
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeMessage: function(Message_id)
    {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commenter_id = this.get("currentUser").get('id'); // it is the login in user , it will use to check the right of delete
        var owner_id = this.get("currentOwner").get("id"); // it the owner of the page, it will be used to identify  delete  which user's message item

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
        }, 200);
    }
    ,
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    addComment: function() {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {

            this.set("isPosting", false);
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
            var messageID = createMessageid();
            var replyID = createMessageid();
            var tempComment = [commenter_id, date.toString(), commentContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, replyID];
            tempComment = JSON.stringify(tempComment);
            var that = this;
            var dataNew = new Array();
            requiredBackEnd('messages', 'CreateComment', tempComment, 'POST', function(params) {

                that.set("isPosting", true);
                dataNew["message_id"] = params["message_id"];
                dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
                dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                dataNew["url"] = params["replyMessageCollection"][0]["url"];
                dataNew["enableToEdit"] = false;
                dataNew["replyEdit"] = true;
                dataNew["replyCount"] = 0;
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
                var thatthat = that;
                var s = '#message_' + dataNew["message_id"];
                setTimeout(function() {
                    var old = thatthat.get("oldPost");
                    $(old).removeClass("post-focus");

                    $(s).addClass("post-focus");
                    thatthat.set("oldPost", s);
                }, 200);
                that.set("isUploadPhoto", false);
                dataNew = new Array();
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
        this.set("isUploadPhoto", true);
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
