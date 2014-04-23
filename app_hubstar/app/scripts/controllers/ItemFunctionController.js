/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.ItemFunctionController = Ember.Controller.extend({
    currentUser: null,
    needs: ['checkingLoginStatus', 'addCollection', 'applicationFeedback'],
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
                    });
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
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
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
                picture: this.get('selectedArticle').get('article_image_url'),
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

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
        var caption = '';
        var currntUrl = '';
        var url = '';

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


            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
    },
    //share to social twitter
    tShare: function(model) {
        this.shareHide(model.id);
        var currntUrl = '';
        var url = '';
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
            url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
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
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            url = 'https://twitter.com/share?text=' + this.get('selectedVideo').data.video_title + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
    },
    pShare: function(model) {
        this.shareHide(model.id);
        var currntUrl = '';
        var url = '';
        if (model.get("type") === "photo") {
            this.set("selectedPhoto", model.get("photo").objectAt(0));
            currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
            url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
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
            currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
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
}
);
