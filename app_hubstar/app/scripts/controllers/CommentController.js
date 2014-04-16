HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    count: null,
    isUserSelf: false,
    makeSureDelete: false,
    willDelete: false,
    objID: "",
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission', 'editComment', 'checkingLoginStatus'],
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
                addCollectionController.setRelatedController('comment');
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
                addCollectionController.setRelatedController('comment');
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
                addCollectionController.setRelatedController('comment');
                $('#addCollection_' + model.id).attr('style', 'display: block');
            }
        }
    },
    openComment: function(id) {

        if (localStorage.loginStatus) {
            this.getCommentsById(id);

            this.addComment();
        } else {
            HubStar.set('checkLoginStatus', true);
        }
    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {

            var comments = this.get('mega').get('comments');

            var commenter_profile_pic_url = 'https://s3-ap-southeast-2.amazonaws.com/develop.devbox/profile_pic/default/defaultpic1.jpg';
            if (this.get("currentUser").get('photo_url_large').indexOf('data:image') > -1) {
                commenter_profile_pic_url = HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture';
            } else {
                commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            }

            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false, optional: this.get('mega').get('type') + '/' + this.get('mega').get('id')});

            comments.insertAt(0, tempComment);
            this.get('mega').set("comment_count", comments.get("length"));
            comments.store.save();
            this.set('commentContent', "");

            var that = this;
            $(document).ready(function() {
                setTimeout(function() {
                    that.seeMore(that.get('mega').get('id'));
                    $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
                    setTimeout(function() {
                        $('#masonry_user_container').masonry();
                        $('#masonry_photo_collection_container').masonry();
                        $('#masonry_container').masonry();
                    }, 10);
                }, 5);
            });

            //this.seeMore(this.get('mega').get('id'));

            //this.closeComment(this.get('mega').get('id'));
//            $('#addcommetBut').attr('style', 'display:block');
//            $('#commentBox').attr('style', 'display:none');


        }
    },
    closeComment: function(id) {

        this.set("commentContent", "");

        $('#comment_' + id).attr('style', 'display:block');
        $('#commentBox_' + id).attr('style', 'display:none');


        setTimeout(function() {
            $('#masonry_container').masonry();
            $('#masonry_user_container').masonry();
            $('#masonry_photo_collection_container').masonry();
        }, 100);

    },
    editingCommentData: function(obj)
    {
        this.get("controllers.editComment").setRelatedController("comment");
        var id = obj.get("message_id");
        var msg = obj.get("content");
        $('#commentItem_' + id).attr('style', 'display:none');

        obj.set("isEdit", true);

        this.seeMore(this.get('content').id);

        HubStar.set("updateCommentmsg", msg);

        setTimeout(function() {
            $('#commentEdit_' + id).attr('style', 'display:block');
            $('#commentItemIn_' + id).attr('style', 'display:none');
        }, 200);
    },
    linkingUser: function(id) {

        self.location = "#/users/" + id;

    },
    getCommentsById: function(id)
    {
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('mega', mega);
        this.set('thisComments', comments);
    },
    closeCommentItem: function(obj) {
        obj.set("isEdit", false);
        var id = obj.get("message_id");
        setTimeout(function() {
            $('#commentEdit_' + id).attr('style', 'display:none');
            $('#commentItem_' + id).attr('style', 'display:block');
            $('#commentItemIn_' + id).attr('style', 'display:block');
            setTimeout(function() {
                $('#masonry_container').masonry();
                $('#masonry_user_container').masonry();
                $('#masonry_photo_collection_container').masonry();
            }, 100);
        }, 200);
    },
    removeComment: function(object)
    {
        var message = "Remove this comment?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.removeCommentItem(object);
            this.cancelDelete();
        } else {
            this.set("obj", object);
            this.set('willDelete', true);
        }
//        setTimeout(function() {
//            $('#masonry_container').masonry("reload");
//            $('#masonry_user_container').masonry("reload");
//        }, 200);
        setTimeout(function() {
            $('#masonry_user_container').masonry("reloadItems");
            $('#masonry_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_user_container').masonry();
                $('#masonry_photo_collection_container').masonry();
                $('#masonry_container').masonry();
            }, 100);
        }, 200);
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
    },
    removeCommentItem: function(object)
    {

        var id = this.get('content').id;
        var type = this.get('content').get('type');
        this.getCommentsById(id);
        if (type === 'photo') {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeletePhotoComment', delInfo, 'POST', function(params) {

            });
        }
        else if (type === "profile")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeleteProfileComment', delInfo, 'POST', function(params) {


            });
        }
        else if (type === "article")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            that.get("thisComments").removeObject(object);
            requiredBackEnd('comments', 'DeleteArticleComment', delInfo, 'POST', function(params) {


            });
        }
        else if (type === "video")
        {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            requiredBackEnd('comments', 'DeleteVideoComment', delInfo, 'POST', function(params) {
                that.get("thisComments").removeObject(object);

            });
        }
        this.get('mega').set("comment_count", this.get("thisComments").get("length"));
    },
//    addLike: function(id)
//    {
//        if (this.get("controllers.checkingLoginStatus").popupLogin()) {
//            var mega = HubStar.Mega.find(id);
//            var type = mega.get("type");
//            var people_like = mega.get("people_like");
//            if (people_like === null || people_like === undefined) {
//                people_like = "";
//            }
//            if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
//            {
//                if (people_like.indexOf(localStorage.loginStatus) !== -1)
//                {
//                    this.count = mega.get('likes_count');
//
//                }
//                else {
//                    var likeArray = [localStorage.loginStatus, id, type];
//                    likeArray = JSON.stringify(likeArray);
//                    var that = this;
//                    requiredBackEnd('megas', 'addlike', likeArray, 'POST', function(params) {
//                        params = params + "";
//                        var like = params.split(",");
//                        mega.set("likes_count", like.length);
//                        mega.set("people_like", params);
//                        that.count = like.length;
//                    });
//                }
//            }
//        }
//    },
    pushComment: function(comment)
    {
        var tempurl = getRestAPIURL();
        $.ajax({
            url: tempurl + '/megas/addcomment',
            type: 'POST',
            data: JSON.stringify(comment),
            success: function() {
            }
        });
    },
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:block');
        $('#showMoreComment_' + id).attr('style', 'display:none');

        $("#commentScrollBar_" + this.get('model').get('getID')).mCustomScrollbar("disable", true);

        $('#commentData_' + this.get('model').get('getID')).attr('style', 'display:block');
        $('#commentScrollBar_' + this.get('model').get('getID')).removeClass('comment-scroll-bar');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div').attr('class', '');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div').attr('style', 'position: relative; height: 100%; overflow: hidden; max-width: 100%;');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div > .mCSB_container').attr('style', 'position: relative; top: 0px;');

        setTimeout(function() {
            $('#masonry_container').masonry();
            $('#masonry_user_container').masonry();
            $('#masonry_photo_collection_container').masonry();
        }, 20);

//        setTimeout(function() {
//            $('#masonry_container').masonry("reload");
//            $('#masonry_photo_collection_container').masonry("reload");
//            $('#masonry_user_container').masonry("reload");
//        }, 200);
    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:block');

                       
        $('#commentScrollBar_' + this.get('model').get('getID')).addClass('comment-scroll-bar');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div').attr('class', '');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div').attr('class', 'mCustomScrollBox mCS-dark-2');
        $('#commentScrollBar_' + this.get('model').get('getID') + ' > div').attr('style', 'position: relative; height: 100%; overflow: hidden; max-width: 100%;max-height: 360px;');

        $("#commentScrollBar_" + this.get('model').get('getID')).mCustomScrollbar("update");

        setTimeout(function() {
            $('#masonry_container').masonry();
            $('#masonry_user_container').masonry();
            $('#masonry_photo_collection_container').masonry();
        }, 20);
    },
    shareDisplay: function(id) {
        $('#share_' + id).children('ul').removeClass("hideClass");
    },
    shareHide: function(id) {
        $('#share_' + id).children('ul').addClass("hideClass");
    },
    fbShare: function(model) {
        this.shareHide(model.id);
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
                    that.get('controllers.applicationFeedback').statusObserver(null, "Share cancelled.", "failed");
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
                picture: this.get('selectedArticle').get('article_image_url'),
                name: this.get('selectedArticle').get('article_headline'),
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

    },
    //share to social google plus
    gpShare: function(model) {
        this.shareHide(model.id);
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
});
