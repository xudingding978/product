/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationController = Ember.Controller.extend({
    notificationContent: null,
    commenter_photo_url: null,
    photo_url: "",
    isTag: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem', 'notificationTop', 'conversation', 'application'],
    isUploadPhoto: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }

    },
    typeDisplay: function(type, name) {
        var displayString = '';
        if (type === "follow")
        {
            displayString = " is now following you";
        }
        else if (type === "unFollow")
        {
            displayString = " is no longer following you";
        }
        else if (type === "conversation")
        {
            displayString = " sent you a message";
        }
        else if (type === "addMessage")
        {
            displayString = " sent you a message";
        }
        else if (type === "addReply")
        {
            displayString = " sent you a message";
        }
        else if (type === "addTag")
        {
            displayString = " add a tag on your photo, please activate";
        }
        else if (type === "authority")
        {
            if (name.split(',')[0] === "add")
            {
                displayString = " added you as a " + name.split(',')[1];
            }
            else
            {
                displayString = " removed you as a " + name.split(',')[1];
            }
        }
        return displayString;
    },
    buttonDisplay: function(type, name) {
        var b = false;
        if (type === "authority")
        {
            if (name.split(',')[0] === "add" && name.split(',').length <= 2)
            {
                b = true;
            }
        }
        return b;
    },
    getClientId: function(id) {
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("notificationContent", []);
        requiredBackEnd('notifications', 'ReadNotification', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.typeDisplay(dataNew["type"], params.objectAt(i)["content"]);
                    dataNew["isButton"] = that.buttonDisplay(dataNew["type"], params.objectAt(i)["content"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];

                    dataNew["content"] = params.objectAt(i)["content"];

                    if (dataNew["type"] === "addTag")
                    {
                        that.set("photo_url", params.objectAt(i)["content"]);
                        that.set("isTag", true);
                    }
                    else
                    {
                        that.set("isTag", false);
                    }
                    if (dataNew["type"] !== "authority") {
                        dataNew["content"] = params.objectAt(i)["content"];
                    }
                    else
                    {
                        dataNew["content"] = "";
                    }
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            //that.unReadCount();
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    decline: function(id){
         var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'Decline', tempComment, 'POST', function(params) {
            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").objectAt(i).set("isButton", false);                   
                    break;
                }
            }
            that.get('controllers.applicationFeedback').statusObserver(null, params);
            that.markRead(id);
        });
    },
    accept: function(id) {
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        var profile_id = "";
        var displayString = "";
        requiredBackEnd('notifications', 'Accept', tempComment, 'POST', function(params) {
            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").objectAt(i).set("isButton", false);
                    profile_id = that.get("notificationContent").objectAt(i).get("user_id");
                    displayString = that.get("notificationContent").objectAt(i).get("typeDisplay");
                    break;
                }
            }
            if (params.indexOf('now') !== -1) {
                requiredBackEnd('notifications', 'ReadProfiles', profile_id, 'POST', function(params) {
                    var profile_name = params["profile_name"];
                    var profile_pic = params["profile_pic"];
                    var type = displayString.split(" ")[displayString.split(" ").length - 1];
                    var isAdministrator = false;
                    var isEditor = false;
                    var isCreator = false;
                    if (type === "administrator")
                    {
                        isAdministrator = true;
                    }
                    else if (type === "editor")
                    {
                        isEditor = true;
                    }
                    else if (type === "creator")
                    {
                        isCreator = true;
                    }

                    var url = profile_pic.split("_");
                    var length = url.length;
                    var width = Math.ceil(url[length - 1].split(".")[0].split("x")[0]);
                    var height = Math.ceil(url[length - 1].split(".")[0].split("x")[1]);
                    var widthTop = Math.ceil(0);
                    var heightTop = Math.ceil(0);
                    if (width > height)
                    {
                        height = Math.ceil(135 / width * height);
                        width = 135;
                        heightTop = Math.ceil(50 / width * height);
                        widthTop = 50;
                    }
                    else
                    {
                        width = Math.ceil(135 / height * width);
                        height = 135;
                        widthTop = Math.ceil(50 / height * width);
                        heightTop = 50;
                    }
                    width = width + "px";
                    height = height + "px";
                    widthTop = widthTop + "px";
                    heightTop = heightTop + "px";


                    HubStar.get("profiles").pushObject({'profile_id': profile_id, 'profile_name': profile_name, "profile_pic": profile_pic, "type": type,
                        'isAdministrator': isAdministrator, "isEditor": isEditor, "isCreator": isCreator,
                        "height": height, "width": width,
                        "heightTop": heightTop, "widthTop": widthTop
                    });
                });
            }
            that.get('controllers.applicationFeedback').statusObserver(null, params);
            that.markRead(id);
        });
    },
    markRead: function(id) {
        var dataNew = new Array();
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'MarkRead', tempComment, 'POST', function() {
            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").objectAt(i).set("isRead", true);
                }
            }
            that.unReadCount();
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    deleteNotification: function(id) {
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'DeleteNotification', tempComment, 'POST', function() {

            for (var i = 0; i < that.get("notificationContent").length; i++)
            {
                if (that.get("notificationContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationContent").removeObject(that.get("notificationContent").objectAt(i));
                }
            }
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));

            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    markAllRead: function() {
        this.set('clientID', localStorage.loginStatus);
        var data = this.get('clientID');
        var ids = "";
        for (var j = 0; j < this.get("notificationContent").get("length"); j++)
        {
            if (j === 0)
            {
                ids = this.get("notificationContent").objectAt(j)["notification_id"];
            }
            else {
                ids = ids + "," + this.get("notificationContent").objectAt(j)["notification_id"];
            }
        }
        var tempComment = [data, ids];
        this.set('loadingTime', true);
        tempComment = JSON.stringify(tempComment);
        var that = this;
        var dataNew = new Array();
        requiredBackEnd('notifications', 'MarkAllRead', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.typeDisplay(dataNew["type"], params.objectAt(i)["content"]);
                    dataNew["isButton"] = that.buttonDisplay(dataNew["type"], params.objectAt(i)["content"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.unReadCount();
            that.get("controllers.notificationTop").set("notificationTopContent", that.get("notificationContent"));
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    go: function(notification_id) {
        for (var i = 0; i < this.get("notificationContent").get("length"); i++)
        {
            if (this.get("notificationContent").objectAt(i)["notification_id"] === notification_id && this.get("notificationContent").objectAt(i)["isButton"] === false)
            {
                //console.log(this.get("notificationContent").objectAt(i));
                this.goto(this.get("notificationContent").objectAt(i));
                this.markRead(this.get("notificationContent").objectAt(i)["notification_id"]);
                break;
            }
        }
    },
    unReadCount: function()
    {
        var count = 0;
        for (var i = 0; i < this.get("notificationContent").get("length"); i++)
        {
            if (this.get("notificationContent").objectAt(i)["isRead"] === false)
            {
                count++;
            }
        }

        this.get("controllers.application").set("unReadCount", count);
        this.get("controllers.messageCenter").set("unReadCount", count);
    },
    goto: function(obj) {
        if (obj.get("type") === "follow" || obj.get("type") === "unFollow")
        {

            this.gotoUser(obj.get("user_id"));
        }
        else if (obj.get("type") === "conversation")
        {
            this.gotoConversation(obj.get("user_id"), obj.get("action_id"));
        }
        else if (obj.get("type") === "addMessage")
        {
            this.gotoMessage(obj.get("action_id"));
        }
        else if (obj.get("type") === "addReply")
        {
            this.gotoReply(obj.get("action_id"));
        }
        else if (obj.get("type") === "addTag")
        {

            this.set("photo_url", obj.get("content"));
            this.set("isTag", true);
        }


    },
    gotoUser: function(id) {
        var user = HubStar.User.find(id);
        this.transitionToRoute('user', user);
    },
    gotoConversation: function(id, conversationID) {

        var user = HubStar.User.find(id);
        var that = this;
        if (user.get('isLoaded')) {
            var data = null;

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversationID) {

                    data.set("id", data.get("conversation_id"));
                    break;
                }

            }
            // this.get("controllers.conversation").selectConversation(conversationID);
            this.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
            this.transitionToRoute('conversation', data);
        }
        user.addObserver('isLoaded', function() {
            if (user.get('isLoaded')) {
                var data = null;

                for (var i = 0; i < user.get('conversations').get("length"); i++) {
                    data = user.get('conversations').objectAt(i);
                    if (data.get("conversation_id") === conversationID) {

                        data.set("id", data.get("conversation_id"));
                        break;
                    }

                }
                that.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
                //that.get("controllers.conversation").selectConversation(conversationID);
                that.transitionToRoute('conversation', data);
            }
        });
        $(window).scrollTop(550);
    },
    gotoNotification: function(id, notificationID)
    {
        var user = HubStar.User.find(id);

        var data = null;
        for (var i = 0; i < user.get('conversations').get("length"); i++) {
            data = user.get('conversations').objectAt(i);
            if (data.get("conversation_id") === "conversationID") {
                data.set("id", data.get("conversation_id"));
                break;
            }
        }
    },
    gotoMessage: function(id)
    {
        this.set("goMessage", '#message_' + id);
        this.transitionToRoute('userPost');
        $(window).scrollTop(550);
    },
    gotoReply: function(id)
    {
        var reply = id.split(",");
        var user = HubStar.User.find(reply[2]);
        this.set("reply_ids", reply[2]);
        this.set("reply", reply[1]);
        if (localStorage.loginStatus !== reply[2]) {
            var that = this;
            if (user.get('isLoaded')) {
                this.set("goMessage", '#message_' + reply[1]);
                this.transitionToRoute('userPost');
            }
            user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {
                    that.set("goMessage", '#message_' + reply[1]);
                    that.transitionToRoute('userPost');
                }
            });
        }
        else
        {
            this.set("goMessage", '#message_' + reply[1]);
            this.transitionToRoute('userPost');
        }
        $(window).scrollTop(550);
    }
}
);
