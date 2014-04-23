HubStar.NewConversationController = Ember.Controller.extend({
    contentMsg: null,
    commenter_photo_url: null,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    isUploadPhoto: false,
    isInvitePeople: false,
    isAdded: false,
    contentFollowerPhoto: null,
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
    addComment: function() {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var commentContent = this.get('messageContent');
        if (commentContent) {
            this.set("isPosting", false);
            var commenter_id = this.get("currentUser").get('id');
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
                imageName = imageStyleName.split('.');
                imageType = imageName[imageName.length - 1];
            }
            var conversationID = createMessageid();
            var conversationItemID = createMessageid();

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

            var tempComment = [commenter_id, date.toString(), commentContent, newStyleImage, imageType, imageStyleName, conversationID, conversationItemID, participation_ids];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            var dataNew = [];

            requiredBackEnd('conversations', 'CreateConversation', tempComment, 'POST', function(params) {
                dataNew.conversationID = params.conversationID;
                dataNew.participation_ids = params.participation_ids;

                dataNew.names = params.names;

                dataNew.ConversationCollection = [];
                dataNew.msg = params.ConversationCollection[0].msg;
                dataNew.time_stamp = params.ConversationCollection[0].time_stamp;
                dataNew.conversationPhoto = [];
                dataNew.conversationPhoto = params.conversationPhoto;
                if (dataNew.conversationPhoto.length === 1)
                {
                    dataNew.one = true;
                    dataNew.two = false;
                    dataNew.three = false;
                    dataNew.four = false;
                    dataNew.onePic = params.conversationPhoto[0].photo_url;
                }
                else if (dataNew.conversationPhoto.length === 2)
                {
                    dataNew.one = false;
                    dataNew.two = true;
                    dataNew.three = false;
                    dataNew.four = false;
                    dataNew.onePic = params.conversationPhoto[0].photo_url;
                    dataNew.twoPic = params.conversationPhoto[1].photo_url;
                }
                else if (dataNew.conversationPhoto.length === 3)
                {
                    dataNew.one = false;
                    dataNew.two = false;
                    dataNew.three = true;
                    dataNew.four = false;
                    dataNew.onePic = params.conversationPhoto[0].photo_url;
                    dataNew.twoPic = params.conversationPhoto[1].photo_url;
                    dataNew.threePic = params.conversationPhoto[2].photo_url;
                }
                else
                {
                    dataNew.one = false;
                    dataNew.two = false;
                    dataNew.three = false;
                    dataNew.four = true;
                    dataNew.onePic = params.conversationPhoto[0].photo_url;
                    dataNew.twoPic = params.conversationPhoto[1].photo_url;
                    dataNew.threePic = params.conversationPhoto[2].photo_url;
                    dataNew.fourPic = params.conversationPhoto[3].photo_url;
                }
                for (var j = 0; j < params.ConversationCollection.length; j++)
                {

                    var conversationItem = [];
                    conversationItem.item_id = params.ConversationCollection[j].item_id;
                    conversationItem.sender_id = params.ConversationCollection[j].sender_id;
                    conversationItem.time_stamp = params.ConversationCollection[j].time_stamp;
                    conversationItem.msg = params.ConversationCollection[j].msg;
                    conversationItem.name = params.ConversationCollection[j].name;

                    conversationItem.sender_photo_url_large = params.ConversationCollection[j].sender_photo_url_large;
                    if (params.ConversationCollection[j].url === null)
                    {
                        conversationItem.isUrl = false;
                    }
                    else
                    {
                        conversationItem.isUrl = true;
                    }
                    conversationItem.url = params.ConversationCollection[j].url;

                    dataNew.ConversationCollection.pushObject(conversationItem);
                }

                that.get('controllers.conversation').get("conversationContent").insertAt(0, dataNew);
                dataNew = [];

                that.set("isUploadPhoto", false);
                that.set("isAdded", false);
                that.set('messageContent', "");
                that.set("contentFollowerPhoto", null);
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
                that.set("isPosting", true);
                setTimeout(function() {
                    $('#masonry_user_container').masonry("reloadItems");
                    setTimeout(function() {
                        $('#masonry_user_container').masonry();
                    }, 100);
                }, 200);
            });

        }
    },
    invitePeople: function()
    {
        this.get("controllers.invitePeople").set("owner", "newConversation");
        this.set("isInvitePeople", true);
        this.get("controllers.invitePeople").getClientId(localStorage.loginStatus);
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
