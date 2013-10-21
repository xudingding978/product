/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationController = Ember.Controller.extend({
    conversationContent: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem'],
    isUploadPhoto: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
        setTimeout(function() {
            $("#conversation_content").mCustomScrollbar({
                scrollButtons: {
                    enable: false,
                    scrollSpeed: "auto"
                },
                advanced: {
                    updateOnBrowserResize: true,
                    updateOnContentResize: true,
                    autoScrollOnFocus: false,
                    normalizeMouseWheelDelta: false
                },
                autoHideScrollbar: true,
                mouseWheel: true,
                theme: "dark-2",
                set_height: 950
            });
        }, 200);
    },
    selectConversation: function(id) {
        this.get('controllers.messageCenter').selectConversationItem();

        this.get('controllers.conversationItem').getClientId(id);
    },
    deleteConversationItem: function(id)
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentUser").get('id');

        var tempComment = [owner_id, id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('conversations', 'DeleteConversation', tempComment, 'POST', function(params) {
            that.getClientId(owner_id);

        });
    },
    getClientId: function(id) {
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];

        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('conversations', 'ReadConversation', tempComment, 'POST', function(params) {
            that.set("conversationContent", []);
            for (var i = 0; i < params.length; i++)
            {
                //First reply message and it is the last one of message and it contail the reply message collection
                dataNew["conversationID"] = params[i]["conversationID"];
                dataNew["participation_ids"] = params[i]["participation_ids"];

                dataNew["names"] = params[i]["names"];
                dataNew["conversationPhoto"] = new Array();              
                dataNew["conversationPhoto"]= params[i]["conversationPhoto"];             
                dataNew["ConversationCollection"] = new Array();
                dataNew["msg"] = params[i]["ConversationCollection"][0]["msg"];
                dataNew["time_stamp"] = params[i]["ConversationCollection"][0]["time_stamp"];

                for (var j = 0; j < params[i]["ConversationCollection"].length; j++)
                {

                    var conversationItem = new Array();
                    conversationItem["item_id"] = params[i]["ConversationCollection"][j]["item_id"];
                    conversationItem["sender_id"] = params[i]["ConversationCollection"][j]["sender_id"];
                    conversationItem["time_stamp"] = params[i]["ConversationCollection"][j]["time_stamp"];
                    conversationItem["msg"] = params[i]["ConversationCollection"][j]["msg"];
                    conversationItem["name"] = params[i]["ConversationCollection"][j]["name"];

                    conversationItem["sender_photo_url_large"] = params[i]["ConversationCollection"][j]["sender_photo_url_large"];
                    if (params[i]["ConversationCollection"][j]["url"] === null)
                    {
                        conversationItem["isUrl"] = false;
                    }
                    else
                    {
                        conversationItem["isUrl"] = true;
                    }
                    conversationItem["url"] = params[i]["ConversationCollection"][j]["url"];

                    dataNew["ConversationCollection"].pushObject(conversationItem);
                }
                that.get("conversationContent").pushObject(dataNew);
                dataNew = new Array();
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");

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
                $('#masonry_user_container').masonry("reloadItems");
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
                that.get("controllers.conversationItem").set("contentFollowerPhoto", that.get("controllers.newConversation").get("contentFollowerPhoto"));
                dataNew["replyMessageCollection"] = new Array();
                that.get("contentMsg").insertAt(0, dataNew);
                that.set("isUploadPhoto", false);
                dataNew = new Array();


                setTimeout(function() {
                    $('#masonry_user_container').masonry("reloadItems");
                }, 200);


                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });
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
