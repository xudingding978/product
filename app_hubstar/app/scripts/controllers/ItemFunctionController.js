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
            if (model.get("type") === "photo") {
                var photoObj = model.get("photo").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('photo_image_thumbnail_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
            else if (model.get("type") === "article")
            {
                var photoObj = model.get("article").objectAt(0);
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = photoObj.get('article_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }

            else if (model.get("type") === "video")
            {
                var addCollectionController = this.get('controllers.addCollection');
                var selectid = model.id;
                addCollectionController.setImageID(selectid);
                var tempUrl = model.get('object_image_url');
                addCollectionController.setThumbnailUrl(tempUrl);
                addCollectionController.setUser();
                addCollectionController.setRelatedController('itemFunction');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
        }
    },
    addLike: function(id)
    {
        console.log("in ItemFunctionController.js addLike()");
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
                        mega.set("isLike",true);                       
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
                        if(params === ""){
                            mega.set("likes_count",0);
                            that.count = 0;
                        }else{
                            params = params + "";                      
                            var like = params.split(",");                      
                            mega.set("likes_count", like.length);
                            that.count = like.length;
                        }
                        mega.set("people_like", params); 
                        mega.set("isLike",false);                       
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
        var mega = model;
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
            var that = this;
            var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
            var caption = '';

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
            var that = this;
            var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            var caption = '';
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
            var that = this;
            var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
            var caption = '';

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

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
        var mega = model;
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
            var caption = '';
            if (this.get('selectedPhoto').get('photo_caption') !== null)
            {
                caption = this.get('selectedPhoto').get('photo_caption');
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedPhoto').get('photo_title'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedPhoto').get('photo_image_thumbnail_url'));


            var currntUrl = 'http://' + document.domain + '/#/photos/' + this.get('selectedPhoto').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();


            return false;
        }
        else if (model.get("type") === "article") {
            this.set("selectedArticle", model.get("article").objectAt(0));
            var caption = '';
            if (this.get('selectedArticle').get('article_body') !== null)
            {
                caption = this.get('selectedArticle').get('article_body');
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedArticle').get('article_headline'));
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedArticle').get('article_image_url'));


            var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

            window.open(
                    url,
                    'popupwindow',
                    'scrollbars=yes,width=800,height=400'
                    ).focus();

            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var caption = '';
            if (this.get('selectedVideo').data.video_desc !== null)
            {
                caption = this.get('selectedVideo').data.video_desc;
            }
            else
            {
                caption = '';
            }

//        var meta = document.getElementsByTagName('meta');
//        for (var i = 0; i < meta.length; i++) {
//            console.log(meta[i]);
//        }
            $("meta[property='og\\:title']").attr("content", this.get('selectedVideo').data.video_title);
            $("meta[property='og\\:description']").attr("content", caption);
            $("meta[property='og\\:image']").attr("content", this.get('selectedVideo').data.video_img);


            var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

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
        var mega = model;
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
            var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'https://twitter.com/share?text=' + this.get('selectedArticle').get('article_headline') + '&url=' + encodeURIComponent(currntUrl);
            window.open(
                    url,
                    'popupwindow',
                    'height=436,width=626'
                    ).focus();
            return false;
        }
        else if (model.get("type") === "video") {
            this.set("selectedVideo", model._data.videoes[0]);
            var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'https://twitter.com/share?text=' + this.get('selectedVideo').data.video_title + '&url=' + encodeURIComponent(currntUrl);
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
        var mega = model;
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
            var currntUrl = 'http://' + document.domain + '/#/videos/' + this.get('selectedVideo')['id'];
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
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
            var currntUrl = 'http://' + document.domain + '/#/articles/' + this.get('selectedArticle').get('id');
            var url = 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(currntUrl) +
                    '&media=' + encodeURIComponent(model.get('object_image_url')) +
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
