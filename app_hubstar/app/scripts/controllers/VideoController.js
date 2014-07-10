HubStar.VideoController = Ember.Controller.extend({
    megaResouce: null,
    videoObject: null,
    video_iframe_code: null,
    currentUser: null,
    enableToEdit: false,
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'editComment', 'checkingLoginStatus', 'itemFunction', 'shareEmail'],
    getinitdata: function(videoObject)
    {
        this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        var that = this;
        var megaResouce = HubStar.Mega.find({"RequireType": "singleVideo", "videoid": videoObject});
        this.set('megaResouce', megaResouce.objectAt(0));

        megaResouce.then(function() {
            var megaModel = HubStar.Mega.find(videoObject);
            megaModel.then(function() {
                that.set('megaResouce', megaModel);
                that.ads();
                var tempVideoObject = megaModel.get('videoes').objectAt(0);
                that.set('videoObject', tempVideoObject);
                var videoIframe = tempVideoObject.get("videoIframeCode");
                var height = $(window).height() - 54;
                var width = 480 / 360 * height;
                if (width > $(window).width() - 320)
                {
                    width = $(window).width() - 320;
                    height = 360 / 480 * width;
                }
                var v = videoIframe.split(" src=\"")[1].split("\" frameborder")[0];
                var old = v;
                if (v.indexOf("?rel=0") === -1)
                {
                    v = v + "?rel=0";
                }
                videoIframe = videoIframe.replace(old, v);
                videoIframe = videoIframe.replace("480", Math.ceil(width));
                videoIframe = videoIframe.replace("360", Math.ceil(height));
                that.set('video_iframe_code', videoIframe);
                $(window).resize(function() {
                    var videoIframe = that.get('video_iframe_code');
                    var width = videoIframe.split("width=\"")[1].split("\" height=\"")[0];
                    var height = videoIframe.split("width=\"")[1].split("\" height=\"")[1].split("\"")[0];
                    var heightNew = $(window).height() - 54;
                    var widthNew = 480 / 360 * heightNew;
                    if (widthNew > $(window).width() - 320)
                    {
                        widthNew = $(window).width() - 320;
                        heightNew = 360 / 480 * widthNew;
                    }
                    videoIframe = videoIframe.replace(width, Math.ceil(widthNew));
                    videoIframe = videoIframe.replace(height, Math.ceil(heightNew));

                    that.set('video_iframe_code', videoIframe);
                });
                var tempComment = [that.get('megaResouce').id];
                requiredBackEnd('megas', 'SetViewCount', tempComment, 'POST', function() {
                });
                that.checkAuthenticUser();
            }, function() {
                that.transitionTo('fourOhFour', "404");
            });
        }
        );
         if (HubStar.get("checkLoginStatus")) {
            if (HubStar.get('showDiscoveryBar')) {
                HubStar.set('ctaView', false);
            } else {
                HubStar.set('ctaView', true);
            }
        }
    },
    ads: function() {
        var type = this.get("megaResouce").get("classification");

        $(document).ready(function() {
            setTimeout(function() {
                if (HubStar.get("object_ad_display") === true) {
                    var photo = document.getElementById("video_view_ads");
                    for (var i = 0; i < HubStar.get('objectAds')[2].length; i++)
                    {
                        var ad = HubStar.get('objectAds')[2][i];
                        if (ad.type === type)
                        {

                            var adDiv = document.createElement('div');
                            adDiv.id = ad.div;
                            var height = ad.size[1];
                            var width = ad.size[0];
                            adDiv.style.display = "block";
                            adDiv.style.height = height + "px";
                            adDiv.style.width = width + "px";
                            photo.appendChild(adDiv);
                            if (ad.isNew === true) {
                                googletag.cmd.push(function() {
                                    var slot1 = googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
                                    ad.slot1 = slot1;
                                    googletag.pubads().enableSingleRequest();
                                    googletag.enableServices();
                                    googletag.display(ad.div);
                                    googletag.pubads().refresh([slot1]);
                                });
                                ad.isNew = false;
                            }
                            else
                            {
                                googletag.cmd.push(function() {
                                    googletag.pubads().enableSingleRequest();
                                    googletag.enableServices();
                                    googletag.display(ad.div);
                                    googletag.pubads().refresh([ad.slot1]);
                                });
                            }
                        }
                    }
                }
            }, 300);
        });
    },
    addComment: function() {

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
        
         HubStar.set('ctaView', false);
       setTimeout(function(){
           if ($(window).width() > 1200) {
                    $("#cta-popup").removeClass("cta-popup-small-top");
                } else {
                    $("#cta-popup").addClass("cta-popup-small-top");
                }
       },1);                
           
       
        this.set('collectable', false);
        this.set('contact', false);
        var address = document.URL;
        var object_type = address.split("#")[1].split("/")[1];
        var search_id = address.split("#")[1].split("/")[2];
        var collection_id = address.split("#")[1].split("/")[6];
        if (object_type === "photos" || object_type === "articles" || object_type === "videos")
        {
            var m = HubStar.Mega.find(search_id);
            this.transitionTo("search", {id: m.get("owner_title")});
        }
        else if (object_type === "search") //search from the seach board
        {
            if (search_id === "default") //it is the search index
            {
                this.transitionTo("searchIndexTom");
            }
            else
            {
                HubStar.set("escVideo", true);
                this.transitionTo("search", {id: search_id}); // go to search page, this can  work, but it is too slowlly.
            }
             
        }
        else if (object_type === "users")
        {
            var photoObject = HubStar.Mega.find(collection_id);

            this.transitionTo("userPhoto", photoObject); //user photo
            
        }
        else if (object_type === "profiles")
        {
            if (address.split("#")[1].split("/")[4] === "videos")
            {
                var that = this;
                that.transitionTo("profile");
                setTimeout(function() {
                    that.transitionTo("profileVideos");
                }, 30);
            } else {
                var photoObject = HubStar.Mega.find(collection_id);

                this.transitionTo("profilePhoto", photoObject); // profile photo
            }
             
        }
        else {
            window.history.back();
        }
       
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
        this.get('megaResouce').get('comments').removeObject(object);
        requiredBackEnd('comments', 'DeleteVideoComment', delInfo, 'POST', function() {
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
    closeShareEmail: function() {
        this.set('shareEmail', false);
    },
    dropdownPhotoSetting: function(param) {
        console.log("111");
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
            name: this.get('videoObject').get("videoTitle"),
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
                that.get('controllers.applicationFeedback').statusObserver(null, "Video shared successfully!");
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

        $("meta[property='og\\:title']").attr("content", this.get('videoObject').get("videoTitle"));
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
        var url = 'https://twitter.com/share?text=' + this.get('videoObject').get("videoTitle") + '&url=' + encodeURIComponent(currntUrl);
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
                '&description=' + encodeURIComponent(this.get('videoObject').get("videoTitle"));
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
    eShare: function() {
        if (this.get("controllers.checkingLoginStatus").popupLogin())
        {
            this.set('descript', this.get('videoObject').get("videoTitle"));
            var currentUrl = 'http://' + document.domain + '/#/videos/' + this.get('megaResouce').get('id');
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

            var shareEmailController = this.get('controllers.shareEmail');
            var selectid = this.get('megaResouce').id;
            ;
            shareEmailController.setImageID(selectid);
            var tempUrl = this.get('megaResouce').get('object_image_url');
            shareEmailController.setThumbnailUrl(tempUrl);
            shareEmailController.setUrl(currentUrl);
            shareEmailController.setUser();
            shareEmailController.setRelatedController('video');
            shareEmailController.setSelectedMega(selectid);
            shareEmailController.setTitle(this.get('descript'));
            this.set("isShareEmail", true);
//        this.get("controllers.shareEmail").getClientId(this.get("Id"));

        }
    },
    editingPhotoMegaData: function() {
        this.set('enableToEdit', !this.get('enableToEdit'));

    }, checkAuthenticUser: function() {
        var currentUser = HubStar.User.find(localStorage.loginStatus);
        var current_user_email = currentUser.get('email');
        var permissionController = this.get('controllers.permission');
        var that = this;
        var role = permissionController.checkAuthenticEdit(that.get("megaResouce").get("profile_creator"), that.get("megaResouce").get("profile_administrator"), that.get("megaResouce").get("profile_editor"));
        var is_edit = false;
        if (role !== "")
        {
            is_edit = true;
        }
        var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
        that.set("is_authentic_user", is_authentic_user || is_edit);
        currentUser.addObserver('isLoaded', function() {
            var current_user_email = currentUser.get('email');
            if (currentUser.get('isLoaded')) {
                var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("megaResouce").get("editors"), current_user_email);
                that.set("is_authentic_user", is_authentic_user || is_edit);
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
    },
    unLike: function() {
        var controller = this.get('controllers.itemFunction');
        controller.unLike(this.get('megaResouce').get('id'));
    }
}

);
