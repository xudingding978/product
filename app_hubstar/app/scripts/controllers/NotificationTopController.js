/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.NotificationTopController = Ember.Controller.extend({
    notificationTopContent: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem', 'application', 'notification', 'userMessage', 'application'],
    isUploadPhoto: false,
    init: function()
    {
    },
    getClientId: function(id) {
        this.set('clientID', id);
        var data = this.get('clientID');
        var dataNew = new Array();
        var tempComment = [data];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        this.set("notificationTopContent", []);
        requiredBackEnd('notifications', 'ReadNotification', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationTopContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.get("controllers.notification").typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationTopContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
        });
    },
    deleteNotification: function(id) {
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'DeleteNotification', tempComment, 'POST', function() {

            for (var i = 0; i < that.get("notificationTopContent").length; i++)
            {
                if (that.get("notificationTopContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationTopContent").removeObject(that.get("notificationTopContent").objectAt(i));
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    seeAll: function()
    {
        this.transitionToRoute("notifications");
        this.reviewCancel();
    },
    markAllRead: function() {
        //mark all read tom       
        this.set('clientID', localStorage.loginStatus);
        var data = this.get('clientID');
        var ids = "";
        for (var j = 0; j < this.get("notificationTopContent").get("length"); j++)
        {
            if (j === 0)
            {
                ids = this.get("notificationTopContent").objectAt(j)["notification_id"];
            }
            else {
                ids = ids + "," + this.get("notificationTopContent").objectAt(j)["notification_id"];
            }
        }
        var tempComment = [data, ids];

        tempComment = JSON.stringify(tempComment);
        var that = this;
        var dataNew = new Array();
        requiredBackEnd('notifications', 'MarkAllRead', tempComment, 'POST', function(params) {
            if (params !== undefined) {
                that.set("notificationTopContent", []);
                for (var i = 0; i < params.get("length"); i++)
                {
                    dataNew["name"] = params.objectAt(i)["display_name"];
                    dataNew["photo_url"] = params.objectAt(i)["photo_url_large"];
                    dataNew["user_id"] = params.objectAt(i)["user_id"];
                    dataNew["type"] = params.objectAt(i)["type"];
                    dataNew["typeDisplay"] = that.get("controllers.notification").typeDisplay(dataNew["type"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationTopContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
        });
    },
    markRead: function(id) {
        var dataNew = new Array();
        var tempComment = [localStorage.loginStatus, id];
        tempComment = JSON.stringify(tempComment);
        var that = this;
        requiredBackEnd('notifications', 'MarkRead', tempComment, 'POST', function() {
            for (var i = 0; i < that.get("notificationTopContent").length; i++)
            {
                if (that.get("notificationTopContent").objectAt(i).get("notification_id") === id)
                {
                    that.get("notificationTopContent").objectAt(i).set("isRead", true);
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
            }, 200);
            that.set('loadingTime', false);
        });
    },
    unReadCount: function()
    {
        var count = 0;
        for (var i = 0; i < this.get("notificationTopContent").get("length"); i++)
        {
            if (this.get("notificationTopContent").objectAt(i)["isRead"] === false)
            {
                count++;

            }
        }
        this.get("controllers.application").set("unReadCount", count);
        this.get("controllers.messageCenter").set("unReadCount", count);
    },
    go: function(notification_id) {
        for (var i = 0; i < this.get("notificationTopContent").get("length"); i++)
        {
            if (this.get("notificationTopContent").objectAt(i)["notification_id"] === notification_id)
            {
                this.goto(this.get("notificationTopContent").objectAt(i));
                this.markRead(this.get("notificationTopContent").objectAt(i)["notification_id"]);
                break;
            }
        }
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

    },
    gotoUser: function(id) {
        var user = HubStar.User.find(id);
        this.reviewCancel();
        this.transitionToRoute('user', user);
    },
    gotoConversation: function(id, conversationID) {
        var user = HubStar.User.find(localStorage.loginStatus);
        var that = this;
        this.set("goConversation", true);
        if (user.get('isLoaded')) {
            var data = null;

            for (var i = 0; i < user.get('conversations').get("length"); i++) {
                data = user.get('conversations').objectAt(i);
                if (data.get("conversation_id") === conversationID) {

                    data.set("id", data.get("conversation_id"));
                    break;
                }
            }
            this.transitionToRoute('user', user);
            this.transitionToRoute('conversation', data);
            this.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
            //   $(window).scrollTop(2000);
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
                that.transitionToRoute('user', user);
                that.transitionToRoute('messageCenter');
                that.get('controllers.messageCenter').getClientId(localStorage.loginStatus, conversationID);
                that.transitionToRoute('conversation', data);
            }
            $(window).scrollTop(550);
        });
        this.reviewCancel();
    },
    gotoMessage: function(id)
    {
        this.set("goMessage", '#message_' + id);

        var address = document.URL;
        if (address.split("#")[1].split("/").length >= 5) {
            var page = address.split("#")[1].split("/")[4];
            if (page === "messages")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        this.reviewCancel();
        var user = HubStar.User.find(localStorage.loginStatus);
        this.transitionToRoute('user', user);
        this.transitionToRoute('messageCenter');
        $(window).scrollTop(550);
    },
    gotoReply: function(id)
    {
        var reply = id.split(",");
        var user = HubStar.User.find(reply[2]);
        this.set("reply_ids", reply[2]);
        this.set("reply", reply[1]);
        this.reviewCancel();
         this.set("goReply", false);
        if (localStorage.loginStatus !== reply[2]) {
            var that = this;
            if (user.get('isLoaded')) {
                this.set("goMessage", '#message_' + reply[1]);
                this.transitionToRoute('messageCenter', user);
            }
            user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {
                    that.set("goMessage", '#message_' + reply[1]);
                    var userID = HubStar.User.find(reply[2]);
                    that.transitionToRoute('user', userID);
                    that.transitionToRoute('messageCenter', user);
                }
            });
        }
        else
        { //login user is the person who left the reply
            console.log("ssssss");
            this.set("goMessage", '#message_' + reply[1]);
            var userID = HubStar.User.find(reply[2]);
            this.transitionToRoute('user', userID);
            this.transitionToRoute('messageCenter');
        }
        var address = document.URL;
        if (address.split("#")[1].split("/").length >= 5) {
            var page = address.split("#")[1].split("/")[4];
            if (page === "messages")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        $(window).scrollTop(550);
    },
    reviewCancel: function() {
        this.get("controllers.application").set("isNotification", false);
    }
}
);
