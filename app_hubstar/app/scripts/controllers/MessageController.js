
HubStar.MessageController = Ember.Controller.extend({
    commenter_photo_url: null,
    messagecms: '',
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'userMessage'],
    isUserself: false,
    isUploadPhoto: false,
    isReply: true,
    makeSureDelete:false,
    isMessage:false,
    willDelete:false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("isReply", true);
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        if (this.get("currentOwner").get("id") === localStorage.loginStatus)
        {
            this.set("isUserself", true);
        }
        this.set("isEdit", true);
    },
    setEditReply: function() {


        this.set("isEdit", true);
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    editingCommentData: function(id, msg) {
        var enableEditCount = 0;
        var messageId = null;

        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {

            var enableEdit = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("enableToEdit");
            if (enableEdit === true)
            {
                enableEditCount = 1;
                messageId = this.get('controllers.userMessage').get("contentMsg").objectAt(i);
                break;
            }


        }
        if (enableEditCount === 1)
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                {
                    messageId.set("enableToEdit", false);
                    var s = '#message_' + id;
                    var thatthat = this;
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");

                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", true);

                    break;
                }
            }
        }
        else
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
                {
                    var s = '#message_' + id;
                    var thatthat = this;
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");
//                        console.log(old);
//                        console.log(s);
                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);
                    this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", true);
                    break;
                }
            }
        }
        HubStar.set('message', msg);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
        }, 200);
    },
    editingReplyData: function(id, msg) {
        var enableEditReply = 0;
        var reply_id = null;
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
            {
                var enableToReply = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("enableToEdit");
                if (enableToReply === true)
                {
                    reply_id = this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j);
                    enableEditReply = 1;
                    break;
                }
            }
        }
        if (enableEditReply === 1)
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                    {
                        var s = '#message_' + this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id");
                        var thatthat = this;
                        setTimeout(function() {
                            var old = thatthat.get("controllers.userMessage").get("oldPost");
                            $(old).removeClass("post-focus");

                            $(s).addClass("post-focus");
                            thatthat.get("controllers.userMessage").set("oldPost", s);
                        }, 200);
                        reply_id.set("enableToEdit", false);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", true);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", false);
                        break;
                    }
            }
        }
        else
        {
            for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                for (var j = 0; j < this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
                    {
                        var s = '#message_' + this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id");
                        var thatthat = this;
                        setTimeout(function() {
                            var old = thatthat.get("controllers.userMessage").get("oldPost");
                            $(old).removeClass("post-focus");

                            $(s).addClass("post-focus");
                            thatthat.get("controllers.userMessage").set("oldPost", s);
                        }, 200);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", true);
                        this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyEdit", false);
                        break;
                    }
            }
        }


        HubStar.set('reply', msg);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    },
//    removePic: function(id) {
//        this.set('newStyleImageSource', null);
//        this.set('newStyleImageName', "");
//
//        this.set("isUploadPhoto", false);
//    },
    removeReplyItem: function(s)
    {
        var message = "Are you sure you want to delete this notification?";
        this.set("message", message);

        this.set('makeSureDelete', true); 
         this.set('isMessage', true);
        if (this.get('willDelete') === true) {
            this.removeReply(s);
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
    removeReply: function(reply_id)
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));

        var commenter_id = this.get("currentUser").get('id');// it is the login in user , it will use to check the right of delete
        var owner_id = this.get("currentOwner").get("id");// it the owner of the page, it will be used to identify  delete  which user's message item

        var tempComment = [commenter_id, owner_id, reply_id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('messages', 'RemoveReply', tempComment, 'POST', function() {


            if (commenter_id === owner_id)
            {
                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    {
                        if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === reply_id)
                        {
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").removeObject(that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j));

                            var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount");
                            ;
                            if (replyLength >= 1)
                            {
                                replyLength = replyLength - 1;
                            }
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);
                            break;
                        }
                    }

                }
            }
            else
            {

                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    for (var j = 0; j < that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length; j++)
                    {
                        if ((that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === reply_id) && (
                                that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("user_id") === commenter_id)) {
                            var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount");
                            if (replyLength >= 1)
                            {
                                replyLength = replyLength - 1;
                            }
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);

                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").removeObject(that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j));
                            break;
                        }
                    }

                }
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reload");
            }, 200);
        });
        $('#addcommetBut').attr('style', 'display:block');
        $('#commentBox').attr('style', 'display:none');
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
        }, 200);
    },
    addReply: function(message_id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var replyContent = this.get('replyContent'); //replyContent is just the user input txt, it is not a whole reply object
        this.set("isReply", false);
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
        var tempComment = [commenter_id, date.toString(), replyContent, owner_id, newStyleImage, imageType, imageStyleName, messageID, message_id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        var dataNew = new Array();
        requiredBackEnd('messages', 'CreateReply', tempComment, 'POST', function(params) {
//params just one message
            that.set("isReply", true);
            for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
            {
                if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === params["message_id"])
                {
                    that.seeMore(params["message_id"]);
                    dataNew["reply_id"] = params["replyMessageCollection"][0]["reply_id"];
                    dataNew["user_id"] = params["replyMessageCollection"][0]["user_id"];
                    dataNew["time_stamp"] = params["replyMessageCollection"][0]["time_stamp"];
                    dataNew["msg"] = params["replyMessageCollection"][0]["msg"];
                    dataNew["user_name"] = params["replyMessageCollection"][0]["user_name"];
                    dataNew["photo_url_large"] = params["replyMessageCollection"][0]["photo_url_large"];
                    dataNew["url"] = params["replyMessageCollection"][0]["url"];
                    dataNew["enableToEdit"] = false;


                    var replyLength = that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyCount") + 1;
                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);

                    that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyCount", replyLength);
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

                    var thatthat = that;
                    var s = '#message_' + params["message_id"];
                    setTimeout(function() {
                        var old = thatthat.get("controllers.userMessage").get("oldPost");
                        $(old).removeClass("post-focus");

                        $(s).addClass("post-focus");
                        thatthat.get("controllers.userMessage").set("oldPost", s);
                    }, 200);

                    if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection") !== undefined)
                    {
                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").insertAt(0, dataNew);
                    }
                    else
                    {
                        that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyMessageCollection", dataNew);
                    }
                    dataNew["replyMessageCollection"] = new Array();

                }
                that.set("isUploadPhoto", false);
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
            $('#masonry_container').masonry("reloadItems");

        }, 200);
    },
    close: function() {
        this.set('replyContent', "");
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
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
    },
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:inline-block;cursor: pointer');
        $('#showMoreComment_' + id).attr('style', 'display:none;cursor: pointer');
        $('#messageData_' + id).attr('style', 'display: block');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 50);

    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none;cursor: pointer');
        $('#showMoreComment_' + id).attr('style', 'display:inline-block;cursor: pointer');
        $('#messageData_' + id).attr('style', 'display: none');
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 50);
    }
}
);
