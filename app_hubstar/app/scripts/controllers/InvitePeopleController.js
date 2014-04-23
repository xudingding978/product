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
        this.set('loadingTime', true);
        this.set('clientID', id);
        var dataNew = [];
        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i].conversationID === conversationID)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }
        var that = this;
        requiredBackEnd('followers', 'ReadPic', id, 'POST', function(params) {
            that.set("contentFollowerPhoto", []);

            if (params === undefined)
            {
            }
            else
            {

                if (conversationID !== undefined) {
                    var participation_id =[];
                    participation_id = that.get("conversationItem").get("participation_ids").split(',');

                }
                for (var i = 0; i < params.length; i++)
                {

                    if (conversationID === undefined) {
                        dataNew.isAdd = false;
                        dataNew.id = params[i].record_id;
                        dataNew.name = params[i].name;
                        
                        dataNew.photo_url = params[i].photo_url;
                        that.get("contentFollowerPhoto").pushObject(dataNew);
                    }
                    else {

                        var flag = false;
                        for (var j = 0; j < participation_id.length; j++)
                        {
                            if (participation_id[j] === params[i].record_id)
                            {
                                flag = true;

                                break;
                            }
                        }
                        if (flag !== true)
                        {
                            dataNew.isAdd = false;
                            dataNew.id = params[i].record_id;
                            dataNew.name = params[i].name;
                            dataNew.photo_url = params[i].photo_url;
                            that.get("contentFollowerPhoto").pushObject(dataNew);
                        }
                    }
                    dataNew = [];
                }
            }
            that.set('loadingTime', false);
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
            //console.log(this.get("contentFollowerPhoto"));
          //  this.get("controllers.conversationItem").set("contentFollowerPhotoOld", this.get("contentFollowerPhoto"));
            this.get("controllers.newConversation").set("isInvitePeople", false);

        }
        else if (this.get("owner") === "conversationItem")
        {
            this.get("controllers.conversationItem").set("isAdded", true);
            this.get("controllers.conversationItem").set("contentFollowerPhoto", this.get("contentFollowerPhoto"));
            this.get("controllers.conversationItem").set("isNewPeople", true);
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
