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
    makeSureDelete: false,
    willDelete: false,
    isTag: false,
    photo_url: "",
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
                    if (dataNew["type"] === "addTag")
                    {
           
                        that.set("photo_url", params.objectAt(i)["content"]);
                        that.set("isTag", true);
                    }
                    else
                    {
                        that.set("isTag", false);
                    }
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationTopContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            that.get("controllers.notification").set("notificationContent", that.get("notificationTopContent"));
            that.unReadCount();
        });
    },
    removeNotificationItem: function(s)
    {
        var message = "Remove this notification?";
        this.set("message", message);

        this.set('makeSureDelete', true);
        if (this.get('willDelete') === true) {
            this.deleteNotification(s);
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
        var user = HubStar.User.find(localStorage.loginStatus);
        this.transitionToRoute('user', user);
        this.set("notificationSeeAll", true);
        this.transitionToRoute('messageCenter');
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
        if (count <= 0)
        {
            this.get("controllers.application").set("isUnReadCountZero", false);
        }
        else
        {
            this.get("controllers.application").set("isUnReadCountZero", true);
        }
        this.get("controllers.messageCenter").set("unReadCount", count);
        this.get("controllers.messageCenter").set("isUnReadCountZero", this.get("controllers.application").get("isUnReadCountZero"));
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
        else if (obj.get("type") === "addReply")
        {
            this.gotoTagPhoto(obj.get("action_id"));
        }
        else if (obj.get("type") === "addTag")
        {

            this.set("photo_url", obj.get("content"));
            this.set("isTag", true);
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
        if (address.split("#")[1].split("/").length >= 4) {
            var page = address.split("#")[1].split("/")[3];
            if (page === "post")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        this.reviewCancel();
        var user = HubStar.User.find(localStorage.loginStatus);
        this.transitionToRoute('user', user);
        //this.transitionToRoute('messageCenter');
        this.transitionToRoute('userPost');
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
                this.transitionToRoute('userPost');

            }
            user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {
                    that.set("goMessage", '#message_' + reply[1]);
                    var userID = HubStar.User.find(reply[2]);
                    that.transitionToRoute('user', userID);
                    that.transitionToRoute('userPost');
                }
            });
        }
        else
        { //login user is the person who left the reply           
            this.set("goMessage", '#message_' + reply[1]);
            var userID = HubStar.User.find(reply[2]);
            this.transitionToRoute('user', userID);
            //this.transitionToRoute('messageCenter');
            this.transitionToRoute('userPost');
        }
        var address = document.URL;
        if (address.split("#")[1].split("/").length >= 4) {
            var page = address.split("#")[1].split("/")[3];
            if (page === "post")
            {
                this.get("controllers.userMessage").goToMessageTop(this.get("goMessage"));
            }
        }
        $(window).scrollTop(550);
    },
    reviewCancel: function() {
        this.get("controllers.application").set("isNotification", false);
        $('#Geo-Filter').toggleClass('Geo-Filter-active');
    }
}
);
