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
    },
    selectConversation: function(id) {    
        var idOld = this.get("selectId");

        this.get("controllers.messageCenter").selectedNone();
        setTimeout(function() {
            $('#conversation_' + idOld).removeClass('selected-conversation');
            $('#conversation_' + id).addClass('selected-conversation');
        },200);
        this.set("selectId", id);
        if (id !== null && id !== undefined) {
            this.get('controllers.messageCenter').selectConversationItem(id);
            this.get('controllers.conversationItem').getClientId(id);
        }
    },
    deleteConversationItem: function(id)
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        var owner_id = this.get("currentUser").get('id');

        var tempComment = [owner_id, id];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        requiredBackEnd('conversations', 'DeleteConversation', tempComment, 'POST', function(params) {
            that.get("controllers.messageCenter").selectNewConversation();
            for (var i = 0; i < that.get("conversationContent").length; i++)
            {
                if (that.get("conversationContent").objectAt(i).get("conversationID") === id)
                {
                    that.get("conversationContent").removeObject(that.get("conversationContent").objectAt(i));
                    break;
                }
            }
        });
    },
    getClientId: function(id, conversation_id) {
        this.set("routerFlag", false);
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("conversationContent", []);
        requiredBackEnd('conversations', 'ReadConversation', tempComment, 'POST', function(params) {
            that.set("routerFlag", true);
            if (params !== undefined) {
                that.set("conversationContent", []);
                for (var i = 0; i < params.length; i++)
                {
                    //First reply message and it is the last one of message and it contail the reply message collection
                    dataNew["conversationID"] = params[i]["conversationID"];
                    dataNew["participation_ids"] = params[i]["participation_ids"];

                    dataNew["names"] = params[i]["names"];
                    dataNew["conversationPhoto"] = new Array();
                    dataNew["conversationPhoto"] = params[i]["conversationPhoto"];
                    if (dataNew["conversationPhoto"].length === 1)
                    {
                        dataNew["one"] = true;
                        dataNew["two"] = false;
                        dataNew["three"] = false;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                    }
                    else if (dataNew["conversationPhoto"].length === 2)
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = true;
                        dataNew["three"] = false;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                    }
                    else if (dataNew["conversationPhoto"].length === 3)
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = false;
                        dataNew["three"] = true;
                        dataNew["four"] = false;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                        dataNew["threePic"] = params[i]["conversationPhoto"][2]["photo_url"];
                    }
                    else
                    {
                        dataNew["one"] = false;
                        dataNew["two"] = false;
                        dataNew["three"] = false;
                        dataNew["four"] = true;
                        dataNew["onePic"] = params[i]["conversationPhoto"][0]["photo_url"];
                        dataNew["twoPic"] = params[i]["conversationPhoto"][1]["photo_url"];
                        dataNew["threePic"] = params[i]["conversationPhoto"][2]["photo_url"];
                        dataNew["fourPic"] = params[i]["conversationPhoto"][3]["photo_url"];
                    }
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
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");

            }, 200);
            that.set('loadingTime', false);
            if (conversation_id !== "" && conversation_id !== null && conversation_id !== undefined)
            {
                that.selectConversation(conversation_id);
            }
        });
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
