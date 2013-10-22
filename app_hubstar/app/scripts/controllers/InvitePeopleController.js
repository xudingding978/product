/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.InvitePeopleController = Ember.Controller.extend({
    contentFollowerPhoto: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'newConversation', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    owner: "newConversation",
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    getClientId: function(id, conversationID) {
        this.set('clientID', id);
        var dataNew = new Array();

        var that = this;
        requiredBackEnd('followers', 'ReadPic', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);

            if (params === undefined)
            {
            }
            else
            {
                for (var i = 0; i < params.length; i++)
                {
                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];
                    if (conversationID === null) {
                        dataNew["isAdd"] = false;
                    }
                    else {
                    }
                    that.get("contentFollowerPhoto").pushObject(dataNew);

                    dataNew = new Array();
                }
            }
        });
    },
    addToList: function(id) {
        for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
        {
            if (this.get("contentFollowerPhoto").objectAt(i).get("id") === id)
            {
                this.get("contentFollowerPhoto").objectAt(i).set("isAdd", !this.get("contentFollowerPhoto").objectAt(i).get("isAdd"));
            }
        }

    },
    reviewPost: function() {
        if (this.get("owner") === "newConversation") {
            this.get("controllers.newConversation").set("isAdded", true);
            this.get("controllers.newConversation").set("contentFollowerPhoto", this.get("contentFollowerPhoto"));
            this.get("controllers.newConversation").set("isInvitePeople", false);

        }
        else if (this.get("owner") === "conversationItem")
        {
            this.get("controllers.conversationItem").set("isAdded", true);
            this.get("controllers.conversationItem").set("contentFollowerPhoto", this.get("contentFollowerPhoto"));
            this.get("controllers.conversationItem").set("isInvitePeople", false);
        }
        this.set("contentFollowerPhoto", null);
    },
    reviewCancel: function() {
        if (this.get("owner") === "newConversation") {
            this.get("controllers.newConversation").set("isInvitePeople", false);
        }
        else if (this.get("owner") === "conversationItem")
        {
            this.get("controllers.conversationItem").set("isInvitePeople", false);
        }
        
        this.set("contentFollowerPhoto", null);
    }
}
);
