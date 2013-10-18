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
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'messageCenter', 'conversation'],
    isUploadPhoto: false,
    init: function()
    {
        this.set("currentOwner", this.get('controllers.user').getCurrentUser());
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            this.set("commenter_photo_url", this.get("currentUser").get("photo_url_large"));
        }
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
        this.set("conversationItemContent", this.get("conversationItem").get("ConversationCollection"));
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            $("#content_conversationItem").mCustomScrollbar({
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
        if (conversationtContent) {
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
            var tempComment = [commenter_id, date.toString(), conversationtContent, conversationItemId, newStyleImage, imageType, imageStyleName, conversationId];

            tempComment = JSON.stringify(tempComment);
            var that = this;

            //var dataNew = new Array();

            requiredBackEnd('conversations', 'AddConversationItem', tempComment, 'POST', function(params) {
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

                        that.get('controllers.conversation').get("conversationContent").objectAt(i).get("ConversationCollection").insertAt(0, conversationItems);
                        that.getClientId(conversationId);
                        break;
                    }
                }

                that.set("isUploadPhoto", false);
                that.set('messageContent', "");
                that.set('newStyleImageSource', null);
                that.set('newStyleImageName', "");
            });



            setTimeout(function() {
                $('#masonry_container').masonry("reloadItems");
            }, 200);
        }
    },
    profileStyleImageDrop: function(e, name)
    {

        this.set("isUploadPhoto", true);
        var target = getTarget(e, "single");
        var src = target.result;
        this.set('newStyleImageSource', src);
        this.set('newStyleImageName', name);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 200);
    }
}
);
