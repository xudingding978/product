
HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    count: null,
    
    needs: ['application', 'applicationFeedback', 'addCollection', 'contact', 'permission'],
    init: function()
    {

        if (localStorage.loginStatus) {

            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }

    },
    switchCollection: function(model) {

        var photoObj = model.get("photo").objectAt(0);
        var addCollectionController = this.get('controllers.addCollection');
        var selectid = model.id;
        addCollectionController.setImageID(selectid);
        var tempUrl = photoObj.get('photo_image_thumbnail_url');
        addCollectionController.setThumbnailUrl(tempUrl);
        addCollectionController.setUser();
        addCollectionController.setRelatedController('comment');
       $('#addCollection_' + model.id).attr('style', 'display: block');
    },
    addComment: function() {       
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('mega').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false, optional: this.get('mega').get('type') + '/' + this.get('mega').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', "");
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    linkingUser: function(id) {

        self.location = "#/users/" + id;

    },
    getCommentsById: function(id)
    {
        //console.log(id);
        var mega = HubStar.Mega.find(id);
        var comments = mega.get('comments');
        this.set('mega', mega);
        this.set('thisComments', comments);
    },
    deleteComment: function(object) {
        var message = "Do you wish to delete this comment ?";
        this.set("message", message);
        this.set('makeSureDelete', true);
        if (this.get('willDelete')) {
            this.getCommentsById(this.get('content').id);
            var comments = this.get("thisComments");
            HubStar.get('data').deleteRecord();
            comments.store.save();
            this.cancelDelete();
        } else {
            this.set('willDelete', true);
            HubStar.set('data', object);
        }
    },
    cancelDelete: function() {
        this.set('willDelete', false);
        this.set('makeSureDelete', false);
        HubStar.set('data', null);
    },
    addLike: function(id)
    {
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
    },
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
    shareDisplay: function(id){
        $('#share_' + id).children('ul').removeClass("hideClass");
    },   
    shareHide: function(id){
        $('#share_' + id).children('ul').addClass("hideClass");
    },  
            
          
    fbShare: function(model) {
          this.set("selectedPhoto",model.get("photo").objectAt(0));
        var that = this;
        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
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
                that.get('controllers.applicationFeedback').statusObserver(null, "Shared Unsuccessfully.", "failed");
            }
        }

        FB.ui(obj, callback);

        return false;
    },
    //share to social google plus
    gpShare: function(model) {
        this.set("selectedPhoto",model.get("photo").objectAt(0));
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


        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
        var url = 'https://plus.google.com/share?url=' + encodeURIComponent(currntUrl);

        window.open(
                url,
                'popupwindow',
                'scrollbars=yes,width=800,height=400'
                ).focus();

        return false;
    },
    //share to social twitter
    tShare: function(model) {
        this.set("selectedPhoto",model.get("photo").objectAt(0));
        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
        var url = 'https://twitter.com/share?text=' + this.get('selectedPhoto').get('photo_title') + '&url=' + encodeURIComponent(currntUrl);
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    },
      pShare: function(model) {
        this.set("selectedPhoto",model.get("photo").objectAt(0));
        var currntUrl = 'http://beta.trendsideas.com/#/photos/' + this.get('selectedPhoto').get('id');
        var url = 'http://www.pinterest.com/pin/create/button/?url=' +  encodeURIComponent(currntUrl)+          
                  '&media='+ encodeURIComponent(this.get('selectedPhoto').get('photo_image_original_url'))+
                  '&description='+encodeURIComponent(this.get('selectedPhoto').get('photo_title'));    
        window.open(
                url,
                'popupwindow',
                'height=436,width=626'
                ).focus();
        return false;
    }
});

