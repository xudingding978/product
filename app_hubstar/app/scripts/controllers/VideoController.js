HubStar.VideoController = Ember.Controller.extend({
    megaResouce: null,
    videoObject: null,
    video_iframe_code: null,
    currentUser: null,
    enableToEdit: false,
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'editComment', 'checkingLoginStatus', 'itemFunction'],
    getinitdata: function(videoObject)
    {

        setTimeout(function() {
            var mega = HubStar.Mega.find(videoObject);
                    if (mega.get("view_count") === undefined || mega.get("view_count") === null || mega.get("view_count") === "")
            {
                mega.set("view_count", 1);
            }
            else
            {
                mega.set("view_count", mega.get("view_count") + 1);
            }
            mega.store.save();
        },1000);
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
                var that = this;
        var megaResouce = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": videoObject});

        this.set('megaResouce', megaResouce.objectAt(0));
        megaResouce.addObserver('isLoaded', function() {
            if (megaResouce.get('isLoaded')) {
                that.set('megaResouce', megaResouce.objectAt(0));
                var tempVideoObject = megaResouce.objectAt(0).get('videoes').get("content").objectAt(0);
                that.set('videoObject', tempVideoObject);
                that.set('video_iframe_code', tempVideoObject.data.video_iframe_code);
                that.checkAuthenticUser();
            }
        });
    }, addComment: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get('megaResouce').get('comments');
                var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
                var commenter_id = this.get("currentUser").get('id');
                var name = this.get("currentUser").get('display_name');
                var date = new Date();
                var message_id = createMessageid() + commenter_id;
                var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                    "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                    "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
                comments.insertAt(0, tempComment);
                comments.store.save();
                this.set('commentContent', '');
                $('#addcommetBut').attr('style', 'display:block');
                $('#commentBox').attr('style', 'display:none');
            }
        }
    },
    closeWindow: function() {
        this.set('collectable', false);
        this.set('contact', false);
        window.history.back();
        $('#masonry_wrapper').attr('style', "top:100px;position:relative");
        setTimeout(function() {
            $('#masonry_container').masonry();  //masonry();
        }, 300);
    },
    removeComment: function(object)
    {
        var id = this.get('megaResouce').get("id");
        var message_id = object.get("message_id");
        var delInfo = [id, message_id];

        delInfo = JSON.stringify(delInfo);
        var that = this;
        this.get('megaResouce').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteVideoComment', delInfo, 'POST', function(params) {
        });
    },
    updateComment: function(object) {

        this.get("controllers.editComment").setRelatedController("video");
        var comments = this.get('megaResouce').get('comments');

        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("message_id") === object.get("message_id"))
            {
                object.set("isEdit", !object.get("isEdit"));
            }
            else
            {
                comments.objectAt(i).set("isEdit", false);
            }
        }
        var msg = object.get("content");
        HubStar.set("updateCommentmsg", msg);
    },
    switchCollection: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var addCollectionController = this.get('controllers.addCollection');
            var selectid = this.get('megaResouce').id;
            addCollectionController.setImageID(selectid);
            var tempUrl = this.get('megaResouce').get('object_image_url');
            addCollectionController.setThumbnailUrl(tempUrl);
            addCollectionController.setUser();
            addCollectionController.setRelatedController('video');
            this.set('collectable', !this.get('collectable'));
        }
    },
    editingContactForm: function() {


        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            var contactController = this.get('controllers.contact');
            var selectid = this.get('megaResouce').id;
            contactController.setSelectedMega(selectid);
            contactController.selectionCheckBox();

            this.set('contact', !this.get('contact'));
        }
    },
    closeContact: function() {
        this.set('contact', false);
    },
    dropdownPhotoSetting: function(param) {
        var tempUrl = this.get('megaResouce').get('object_image_url');
        this.set('sharePhotoUrl', tempUrl);
        this.set('sharePhotoName', "test");
        $('#dropdown_id_' + param).toggleClass('hideClass');
    },
    getImageURL: function()
    {
        var tempUrl = this.get('megaResouce').get('object_image_url');
        return tempUrl;
    },
    // share to social facebook
    fbShare: function(param) {
        this.dropdownPhotoSetting(param);
        var that = this;
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var caption = '';

        if (this.get('megaResouce').get('object_description') !== null)
        {
            caption = this.get('megaResouce').get('object_description');
        }
        else
        {
            caption = '';
        }

        var obj = {
            method: 'feed',
            link: currntUrl,
            picture: this.getImageURL(),
            name: this.get('videoObject').data.video_title,
            caption: 'Trends Ideas',
            description: caption
        };

        function callback(response) {
            if (response && response.post_id) {
                var mega = HubStar.Mega.find(that.get('megaResouce').get('id'));
                mega.then(function() {
                    if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
                    {
                        mega.set("share_count", 0);
                    }
                    else
                    {
                        mega.set("share_count", mega.get("share_count") + 1);
                    }
                    mega.store.save();
                });
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
            } else {
                that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function(param) {
        this.dropdownPhotoSetting(param);
        var caption = '';
        if (this.get('megaResouce').get('object_description') !== null)
        {
            caption = this.get('megaResouce').get('object_description');
        }
        else
        {
            caption = '';
        }

        $("meta[property='og\\:title']").attr("content", this.get('videoObject').data.video_title);
        $("meta[property='og\\:description']").attr("content", caption);
        $("meta[property='og\\:image']").attr("content", this.getImageURL());
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        var mega = HubStar.Mega.find(this.get('megaResouce').get('id'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });
        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function(param) {
        this.dropdownPhotoSetting(param);
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'https://twitter.com/share?text=' + this.get('videoObject').data.video_title + '&url=' + encodeURIComponent(currntUrl);
        var mega = HubStar.Mega.find(this.get('megaResouce').get('id'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    pShare: function(param) {
        this.dropdownPhotoSetting(param);
        var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
        var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                '&media=' + encodeURIComponent(this.getImageURL()) +
                '&description=' + encodeURIComponent(this.get('videoObject').data.video_title);
        var mega = HubStar.Mega.find(this.get('megaResouce').get('id'));
        mega.then(function() {
            if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
            {
                mega.set("share_count", 0);
            }
            else
            {
                mega.set("share_count", mega.get("share_count") + 1);
            }
            mega.store.save();
        });
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));

    }, checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;

        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user);
            }
        });
    },
    yes: function()
    {
        this.get('megaResouce').store.save();
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    no: function() {
        if (this.get('megaResouce').get("isDirty")) {
            this.get('megaResouce').rollback();
        }
        this.set('enableToEdit', !this.get('enableToEdit'));
    },
    addLike: function() {
        var controller = this.get('controllers.itemFunction');
        controller.addLike(this.get('megaResouce').get('id'));
    }
}

);
