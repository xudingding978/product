

HubStar.ItemFunctionController = Ember.Controller.extend({
    currentUser: null,
    needs: ['checkingLoginStatus', 'addCollection', 'applicationFeedback', 'shareEmail'],
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
    },
    switchCollection: function(model) {

        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var photoObj;
            var addCollectionController;
            var selectid;
            var tempUrl;
            if (model.get("type") === "photo") {
                photoObj = model.get("photo").objectAt(0);
                addCollectionController = this.get('controllers.addCollection');
                selectid = model.id;
                addCollectionController.setImageID(selectid);
                tempUrl = photoObj.get('photo_image_thumbnail_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
            else if (model.get("type") === "article")
            {
                photoObj = model.get("article").objectAt(0);
                addCollectionController = this.get('controllers.addCollection');
                selectid = model.id;
                addCollectionController.setImageID(selectid);
                tempUrl = photoObj.get('article_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }

            else if (model.get("type") === "video")
            {
                addCollectionController = this.get('controllers.addCollection');
                selectid = model.id;
                addCollectionController.setImageID(selectid);
                tempUrl = model.get('object_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
            $("#body_id").css("overflow", "hidden");
        }
    },
    addLike: function(id)
    {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var mega = HubStar.Mega.find(id);
            var type = mega.get("type");
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined) {
                people_like = "";
            }
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
            {
                if (people_like.indexOf(localStorage.loginStatus) !== -1)
                {
                    this.count = mega.get('likes_count');
                }
                else {
                    var likeArray = [localStorage.loginStatus, id, type];
                    likeArray = JSON.stringify(likeArray);
                    var that = this;
                    requiredBackEnd('megas', 'addlike', likeArray, 'POST', function(params) {
                        params = params + "";
                        var like = params.split(",");
                        mega.set("likes_count", like.length);
                        mega.set("people_like", params);
                        that.count = like.length;
                        mega.set("isLike", true);
                        mega.store.save();
                    });
                }
            }
        }
    },
    unLike: function(id)
    {
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            var mega = HubStar.Mega.find(id);
            var type = mega.get("type");
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined) {
                people_like = "";
            }
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
            {
                if (people_like.indexOf(localStorage.loginStatus) !== -1)
                {
                    var likeArray = [localStorage.loginStatus, id, type];
                    likeArray = JSON.stringify(likeArray);
                    var that = this;
                    requiredBackEnd('megas', 'unlike', likeArray, 'POST', function(params) {
                        if (params === "") {
                            mega.set("likes_count", 0);
                            that.count = 0;
                        } else {
                            params = params + "";
                            var like = params.split(",");
                            mega.set("likes_count", like.length);
                            that.count = like.length;
                        }
                        mega.set("people_like", params);
                        mega.set("isLike", false);
                        mega.store.save();
                    });

                }
                else {
                    this.count = mega.get('likes_count');
                }
            }
        }

    },
    shareDisplay: function(id) {

        $('#share_' + id).children('ul').removeClass("hideClass");
    },
    shareHide: function(id) {
        $('#share_' + id).children('ul').addClass("hideClass");
    },
    fbShare: function(model) {

        this.shareHide(model.id);
        var that = this;
        var currntUrl = '';
        var caption = '';
        var mega = model;
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {


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
            if (model.get("type") === "photo") {
                this.set("selectedPhoto", model.get("photo").objectAt(0));
                currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
                caption = '';
                if (this.get('selectedPhoto').get('photo_caption') !== null)
                {
                    caption = this.get('selectedPhoto').get('photo_caption');
                }
                else
                {
                    caption = '';
                }
                var obj = {
                    method: 'feed',
                    link: currntUrl,
                    picture: this.get('selectedPhoto').get('photo_image_thumbnail_url'),
                    name: this.get('selectedPhoto').get('photo_title'),
                    caption: 'Trends Ideas',
                    description: caption
                };

                function callback(response) {
                    if (response && response.post_id) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                    } else {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
                    }
                }

                FB.ui(obj, callback);

                return false;
            }
            if (model.get("type") === "video") {
                this.set("selectedVideo", model._data.videoes[0]);
                currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo').id;
                caption = '';
                if (this.get('selectedVideo').data.video_desc !== null)
                {
                    caption = this.get('selectedVideo').data.video_desc;
                }
                else
                {
                    caption = '';
                }
                var obj = {
                    method: 'feed',
                    link: currntUrl,
                    picture: this.get('selectedVideo').data.video_img,
                    name: this.get('selectedVideo').data.video_title,
                    caption: 'Trends Ideas',
                    description: caption
                };

                function callback(response) {
                    if (response && response.post_id) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                    } else {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                    }
                }

                FB.ui(obj, callback);

                return false;
            }
            if (model.get("type") === "article") {
                this.set("selectedArticle", model.get("article").objectAt(0));
                currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
                caption = '';

                if (this.get('selectedArticle').get('article_body') !== null)
                {
                    caption = this.get('selectedArticle').get('article_body');
                }
                else
                {
                    caption = '';
                }
                var obj = {
                    method: 'feed',
                    link: currntUrl,
                    picture: model.get('object_image_url'),
                    name: this.get('selectedArticle').get('article_headline'),
                    caption: 'Trends Ideas',
                    description: caption
                };

                function callback(response) {
                    if (response && response.post_id) {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Shared Successfully.");
                    } else {
                        that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessful.", "failed");
                    }
                }

                FB.ui(obj, callback);

                return false;
            }
        }

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
        var caption = '';
        var currntUrl = '';
        var url = '';
        var mega = model;
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
            if (model.get("type") === "photo") {
                this.set("selectedPhoto", model.get("photo").objectAt(0));
                caption = '';
                if (this.get('selectedPhoto').get('photo_caption') !== null)
                {
                    caption = this.get('selectedPhoto').get('photo_caption');
                }
                else
                {
                    caption = '';
                }
                $("meta[property='og\\:title']").attr("content", this.get('selectedPhoto').get('photo_title'));
                $("meta[property='og\\:description']").attr("content", caption);
                $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));

                currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
                url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

                window.open(
                        url,
                        'popupwindow',
                        'scrollbars=yes,width=800,height=400'
                        ).focus();


                return false;
            }
            else if (model.get("type") === "article") {
                this.set("selectedArticle", model.get("article").objectAt(0));
                caption = '';
                if (this.get('selectedArticle').get('article_body') !== null)
                {
                    caption = this.get('selectedArticle').get('article_body');
                }
                else
                {
                    caption = '';
                }

                $("meta[property='og\\:title']").attr("content", this.get('selectedArticle').get('article_headline'));
                $("meta[property='og\\:description']").attr("content", caption);
                $("meta[property='og\\:image']").attr("content", this.get('selectedArticle').get('article_image_url'));

                currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
                url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

                window.open(
                        url,
                        'popupwindow',
                        'scrollbars=yes,width=800,height=400'
                        ).focus();

                return false;
            }
            else if (model.get("type") === "video") {
                this.set("selectedVideo", model._data.videoes[0]);
                caption = '';
                if (this.get('selectedVideo').data.video_desc !== null)
                {
                    caption = this.get('selectedVideo').data.video_desc;
                }
                else
                {
                    caption = '';
                }

                $("meta[property='og\\:title']").attr("content", this.get('selectedVideo').data.video_title);
                $("meta[property='og\\:description']").attr("content", caption);
                $("meta[property='og\\:image']").attr("content", this.get('selectedVideo').data.video_img);

                currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo').id;
                url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

                window.open(
                        url,
                        'popupwindow',
                        'scrollbars=yes,width=800,height=400'
                        ).focus();

                return false;
            }
        }

    },
    //share to social twitter
    tShare: function(model) {

        this.shareHide(model.id);
        var currntUrl = '';
        var url = '';
        var mega = model;
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
            if (model.get("type") === "photo") {
                this.set("selectedPhoto", model.get("photo").objectAt(0));
                var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
                var url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;
            }
            else if (model.get("type") === "article") {
                this.set("selectedArticle", model.get("article").objectAt(0));
                currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
                url = 'https://twitter.com/share?text=' + this.get('selectedArticle').get('article_headline') + '&url=' + encodeURIComponent(currntUrl);
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;
            }
            else if (model.get("type") === "video") {
                this.set("selectedVideo", model._data.videoes[0]);
                currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo').id;
                url = 'https://twitter.com/share?text=' + this.get('selectedVideo').data.video_title + '&url=' + encodeURIComponent(currntUrl);
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;
            }
        }

    },
    pShare: function(model) {

        this.shareHide(model.id);
        var currntUrl = '';
        var url = '';
        var mega = model;
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
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
            if (model.get("type") === "photo") {
                this.set("selectedPhoto", model.get("photo").objectAt(0));
                var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
                var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                        '&media=' + encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url')) +
                        '&description=' + encodeURIComponent(this.get('selectedPhoto').get('photo_title'));
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;

            }
            else if (model.get("type") === "video") {
                this.set("selectedVideo", model._data.videoes[0]);
                currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo').id;
                url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                        '&media=' + encodeURIComponent(this.get('selectedVideo').data.video_img) +
                        '&description=' + encodeURIComponent(this.get('selectedVideo').data.video_title);
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;
            }
            else if (model.get("type") === "article") {
                this.set("selectedArticle", model.get("article").objectAt(0));
                currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
                url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                        '&media=' + encodeURIComponent(this.get('selectedArticle').get('article_image_url')) +
                        '&description=' + encodeURIComponent(this.get('selectedArticle').get('article_headline'));
                window.open(
                        url,
                        'popupwindow',
                        'height=436,width=626'
                        ).focus();
                return false;
            }
        }

    },
    eShare: function(model) {
        this.shareHide(model.id);
        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
            var photoObj;
            var shareEmailController;
            var mega = model;
            var selectid = '';
            var tempUrl = '';
            var currentUrl = '';

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
            if (model.get("type") === "photo") {
                photoObj = model.get("photo").objectAt(0);
                shareEmailController = this.get('controllers.shareEmail');
                selectid = model.id;
                shareEmailController.setImageID(selectid);
                tempUrl = photoObj.get('photo_image_thumbnail_url');
                this.set("selectedPhoto", model.get("photo").objectAt(0));
                currentUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
                shareEmailController.setThumbnailUrl(tempUrl);
                shareEmailController.setUrl(currentUrl);
                shareEmailController.setUser();
                shareEmailController.setRelatedController('itemFunction');
                shareEmailController.setSelectedMega(selectid);
                shareEmailController.setTitle(this.get('selectedPhoto').get('photo_title'));
                $('#addEmail_' + model.id).attr('style', 'display: block');
                this.set("isShareEmail", true);
            }
            else if (model.get("type") === "article")
            {
                photoObj = model.get("article").objectAt(0);
                shareEmailController = this.get('controllers.shareEmail');
                selectid = model.id;
                shareEmailController.setImageID(selectid);
                tempUrl = photoObj.get('article_image_url');
                this.set("selectedArticle", model.get("article").objectAt(0));
                currentUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
                shareEmailController.setThumbnailUrl(tempUrl);
                console.log(tempUrl);
                shareEmailController.setUrl(currentUrl);
                shareEmailController.setUser();
                shareEmailController.setRelatedController('itemFunction');
                shareEmailController.setTitle(this.get('selectedArticle').get('article_headline'));
                shareEmailController.setSelectedMega(selectid);
                $('#addEmail_' + model.id).attr('style', 'display: block');
                this.set("isShareEmail", true);
            }

            else if (model.get("type") === "video")
            {
                shareEmailController = this.get('controllers.shareEmail');
                selectid = model.id;
                shareEmailController.setImageID(selectid);
                tempUrl = model.get('object_image_url');
                this.set("selectedVideo", model._data.videoes[0]);
                currentUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo').id;
                shareEmailController.setThumbnailUrl(this.get('selectedVideo').data.video_img);
                shareEmailController.setUrl(currentUrl);
                shareEmailController.setUser();
                shareEmailController.setRelatedController('itemFunction');
                shareEmailController.setTitle(this.get('selectedVideo').data.video_title);
                shareEmailController.setSelectedMega(selectid);
                $('#addEmail_' + model.id).attr('style', 'display: block');
                this.set("isShareEmail", true);
            }
            $("#body_id").css("overflow", "hidden");
        }
//        if (this.get("controllers.checkingLoginStatus").popupLogin())
//        {
//
//            var mega = HubStar.Mega.find(this.get('currentUserID'));
//            mega.then(function() {
//                if (mega.get("share_count") === undefined || mega.get("share_count") === null || mega.get("share_count") === "")
//                {
//                    mega.set("share_count", 0);
//                }
//                else
//                {
//                    mega.set("share_count", mega.get("share_count") + 1);
//                }
//                mega.store.save();
//            });
////            this.sendEventTracking('event', 'button', 'click', 'Contact us');
////            var shareEmailController = this.get('controllers.shareEmail');
////            shareEmailController.setSelectedMega(this.get('currentUserID'));
//            this.set("isShareEmail", true);
////        this.get("controllers.shareEmail").getClientId(this.get("Id"));
//
//
////            this.set('contactChecking', !this.get('contactChecking'));
//            //return false;
//        }
    },
    closeShareEmail: function() {
        this.set('shareEmail', false);
    }
}
);
