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
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversationItem', 'application', 'notification'],
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
            setTimeout(function() {
                $("#notititopbar").mCustomScrollbar({
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
                    set_height: 500
                });
            }, 200);
        });
    },
    markAllRead: function() {
        //mark all read tom
        console.log("tom, come on!");
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
        console.log(ids);
        var tempComment = [data, ids];

        tempComment = JSON.stringify(tempComment);
        var that = this;
//        requiredBackEnd('notifications', 'MarkAllRead', tempComment, 'POST', function(params) {
//            for (var i = 0; i < that.get("notificationContent").get("length"); i++)
//            {
//                that.get("notificationTopContent").objectAt(i).set("isRead", true);
//            }
//        });
    },
    go: function(user_id) {
        console.log(user_id + "tom, come on! Finish it");
    },
    reviewCancel: function() {
        this.get("controllers.application").set("isNotification", false);
    }
}
);
