
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
    isUserself: false,
    // enableToEdit: false,
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
    },
    editingCommentData: function(id) {
        for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {

            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).set("enableToEdit", true);
                break;
            }


        }
    },
    editingReplyData: function(id) {
         for (var i = 0; i < this.get('controllers.userMessage').get("contentMsg").length; i++)
        {
            for (var j=0; j<this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").length;j++)
            if (this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).get("reply_id") === id)
            {
                this.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").objectAt(j).set("enableToEdit", true);
                break;
            }
        }
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
            $('#masonry_container').masonry("reload");
            $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
        }, 200);
    },
    addReply: function(message_id) {

        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var replyContent = this.get('replyContent'); //replyContent is just the user input txt, it is not a whole reply object
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
//params just one message
                for (var i = 0; i < that.get('controllers.userMessage').get("contentMsg").length; i++)
                {
                    if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("message_id") === params["message_id"])
                    {
                        
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


                        if (that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection") !== undefined)
                        {
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").insertAt(0, dataNew);
                        }
                        else
                        {
                            //   that.get('controllers.userMessage').get("contentMsg").objectAt(i).get("replyMessageCollection").pushObject(dataNew);
//                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyMessageCollection", null);
                            //  that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyMessageCollection", new Array());
                            that.get('controllers.userMessage').get("contentMsg").objectAt(i).set("replyMessageCollection", dataNew);
                        }
                        dataNew["replyMessageCollection"] = new Array();

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
