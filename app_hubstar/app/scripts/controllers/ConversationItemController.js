/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ConversationItemController = Ember.Controller.extend({
    conversationItemContent: null,
    conversationItem: null,
    commenter_photo_url: null,
    contentFollowerPhoto: null,
    contentFollowerPhotoOld: null,
    isAdded: false,
    isInvitePeople: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversation', 'invitePeople', 'newConversation'],
    isUploadPhoto: false,
    isNewPeople: false,
    isPosting: true,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
    },
    removePic: function() {
        this.set('newStyleImageSource', null);
        this.set('newStyleImageName', "");
        this.set("isUploadPhoto", false);
    },
    getClientIdAdd: function(id) {
        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        this.set("id", id);
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i]["conversationID"] === id)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }

        if (this.get("conversationItem").get("conversationPhoto").length === 0)
        {
            this.set("isAdded", false);
        }
        else
        {
            this.set("isAdded", true);
        }
        this.set("contentFollowerPhotoOld", this.get("conversationItem").get("conversationPhoto"));
        this.set("conversationItemContent", this.get("conversationItem").get("ConversationCollection"));
    },
    getClientId: function(id) {

        var conversationContent = this.get('controllers.conversation').get("conversationContent");
        this.set("id", id);
        for (var i = 0; i < conversationContent.length; i++)
        {
            if (conversationContent[i]["conversationID"] === id)
            {
                this.set("conversationItem", conversationContent[i]);
                break;
            }
        }
        if (this.get("conversationItem").get("conversationPhoto").length === 0)
        {
            this.set("isAdded", false);
        }
        else
        {
            this.set("isAdded", true);
        }

        this.set("contentFollowerPhotoOld", this.get("conversationItem").get("conversationPhoto"));
        this.set("conversationItemContent", this.get("conversationItem").get("ConversationCollection"));
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
            }, 100);
            $("#content_conversationItem_" + id).mCustomScrollbar({
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
                set_height: 1000
            });
        }, 200);
    },
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var conversationtContent = this.get('messageContent');
        var conversationImageSource=this.get("newStyleImageSource");
        var  conversationImageName = this.get('newStyleImageName');

        if(conversationtContent||conversationImageSource||conversationImageName){
        
        this.set("isPosting", false);
        var commenter_id = this.get("currentUser").get('id');
        var conversationId = this.get("id");
        var date = new Date();
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
        var conversationItemId = createMessageid();
        var participation_ids = '';
        if (this.get("contentFollowerPhoto") !== null) {
            for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
            {
                if (this.get("contentFollowerPhoto").objectAt(i).get("isAdd") === true)
                {
                    if (participation_ids === "")
                    {
                        participation_ids = participation_ids + this.get("contentFollowerPhoto").objectAt(i).get("id");
                    }
                    else
                    {
                        participation_ids = participation_ids + ',' + this.get("contentFollowerPhoto").objectAt(i).get("id");
                    }
                }
            }
        }
        var tempComment = [commenter_id, date.toString(), conversationtContent, conversationItemId, newStyleImage, imageType, imageStyleName, conversationId, participation_ids];

        tempComment = JSON.stringify(tempComment);
        var that = this;

        //var dataNew = new Array();

        requiredBackEnd('conversations', 'AddConversationItem', tempComment, 'POST', function(params) {
            that.set("isPosting", true);
            var conversationContent = that.get('controllers.conversation').get("conversationContent");
            for (var i = 0; i < conversationContent.length; i++)
            {
                if (conversationContent[i]["conversationID"] === conversationId)
                {


                    var conversationItems = new Array();

                    conversationItems = params;

                    if (params["url"] !== null)
                    {
                        conversationItems["isUrl"] = true;
                    }
                    else
                    {
                        conversationItems["isUrl"] = false;
                    }
                    if (params["msg"] !== null) {
                        conversationItems["msg"] = multiRow(params["msg"]);
                    }

                    that.get('controllers.conversation').get("conversationContent").objectAt(i).get("ConversationCollection").insertAt(0, conversationItems);
                    if (that.get("contentFollowerPhoto") !== null) {
                        for (var j = 0; j < that.get("contentFollowerPhoto").length; j++)
                        {
                            if (that.get("contentFollowerPhoto").objectAt(j).get("isAdd") === true)
                            {
                                that.get('controllers.conversation').get("conversationContent").objectAt(i).get("conversationPhoto").pushObject(that.get("contentFollowerPhoto").objectAt(j));
                            }
                        }
                    }
                    that.getClientIdAdd(conversationId);
                    break;
                }
            }
            that.set("contentFollowerPhoto", null);
            that.set("isUploadPhoto", false);
            that.set('messageContent', "");
            that.set('newStyleImageSource', null);
            that.set('newStyleImageName', "");
            setTimeout(function() {
                $('#masonry_user_container').masonry("reloadItems");
                setTimeout(function() {
                    $('#masonry_user_container').masonry();
                }, 100);
            }, 200);
        });

    }

    },
    invitePeople: function(id)
    {
        this.get("controllers.invitePeople").set("owner", "conversationItem");
        this.set("isInvitePeople", true);
        this.get("controllers.invitePeople").getClientId(localStorage.loginStatus, id);
    },
    addToList: function(id) {
        var count = 0;
        for (var i = 0; i < this.get("contentFollowerPhoto").length; i++)
        {
            if (this.get("contentFollowerPhoto").objectAt(i).get("id") === id)
            {
                this.get("contentFollowerPhoto").objectAt(i).set("isAdd", !this.get("contentFollowerPhoto").objectAt(i).get("isAdd"));
            }
            if (this.get("contentFollowerPhoto").objectAt(i).get("isAdd") === true)
            {
                count++;
            }
        }
        if (count !== 0)
        {
            this.set("isNewPeople", true);
        }
        else
        {
            this.set("isNewPeople", false);
        }
    },
    seeMore: function(id) {
        $('#closeComment').attr('style', 'display:inline-block');
        $('#showMoreComment').attr('style', 'display:none');
        $('#messageData').attr('style', 'display: block; padding: 5px 20px;');
        $('#masonry_user_container').masonry();
    },
    closeMore: function(id) {
        $('#closeComment').attr('style', 'display:none');
        $('#showMoreComment').attr('style', 'display:inline-block');
        $('#messageData').attr('style', 'display: none');
        $('#masonry_user_container').masonry();
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);

    }
}
);
