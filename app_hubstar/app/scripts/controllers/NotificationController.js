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
            $("#content_notification").mCustomScrollbar({
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
    typeDisplay: function(type, name) {
        var displayString = '';
        if (type == "follow")
        {
            displayString = name + " has followed you";
        }
        else if (type == "unFollow")
        {
            displayString = name + " has unfollowed you";
        }
        else if (type == "conversation")
        {
            displayString = name + " has say something in this conversation";
        }
        else if (type == "addMessage")
        {
            displayString = name + " has leave a message for you";
        }
        else if (type == "addReply")
        {
            displayString = name + " has reply you in this message";
        }
        return displayString;
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
                    dataNew["typeDisplay"] = that.typeDisplay(dataNew["type"], dataNew["name"]);
                    dataNew["time"] = params.objectAt(i)["time"];
                    dataNew["notification_id"] = params.objectAt(i)["notification_id"];
                    dataNew["isRead"] = params.objectAt(i)["isRead"];
                    dataNew["content"] = params.objectAt(i)["content"];
                    dataNew["action_id"] = params.objectAt(i)["action_id"];
                    that.get("notificationContent").pushObject(dataNew);
                    dataNew = new Array();
                }
            }
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");

            }, 200);
            that.set('loadingTime', false);
        });
    },
    markAllRead: function() {
        //mark all read tom
        console.log("tom, come on!");
    },
    go: function(user_id) {
        console.log(user_id+"tom, come on! Finish it");
    }
}
);
