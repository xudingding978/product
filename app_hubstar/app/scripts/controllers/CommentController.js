
HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    count: null,
    isUserSelf: false,
    objID: "",
    needs: ['editComment'],
    init: function()
    {

        if (localStorage.loginStatus) {

            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }


    },
    addComment: function() {
        var commentContent = this.get('commentContent');
        if (commentContent) {
            var comments = this.get('mega').get('comments');
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url_large');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var message_id = createMessageid() + commenter_id;
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url, "message_id": message_id,
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
    editingCommentData: function(obj)
    {
        var id = obj.get("message_id");
        var msg = obj.get("content");
        $('#commentItem_' + id).attr('style', 'display:none');
      
        obj.set("isEdit", true);
       
        
        this.seeMore(this.get('content').id);
        
        HubStar.set("updateCommentmsg", msg);
        
        setTimeout(function() {
             $('#commentEdit_' + id).attr('style', 'display:block');
             $('#commentItemIn_' + id).attr('style', 'display:none');
            $('#masonry_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 200);
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
        for (var i = 0; i < comments.get("length"); i++)
        {
            if (comments.objectAt(i).get("commenter_id") === localStorage.loginStatus)
            {
                comments.objectAt(i).set("isUserSelf", true);
            }
        }
        this.set('thisComments', comments);
    },
    closeCommentItem: function(obj) {      
        obj.set("isEdit", false);
        var id = obj.get("message_id");
        $('#commentEdit_' + id).attr('style', 'display:none');
        $('#commentItem_' + id).attr('style', 'display:block');
         $('#commentItemIn_' + id).attr('style', 'display:block');
    },
    removeComment: function(object)
    {

        var id = this.get('content').id;
        var type = this.get('content').get('type');

        if (type === 'photo') {
            var commentId = object.get("commenter_id");
            var time_stamp = object.get("time_stamp");
            var message_id = object.get("message_id");
            var delInfo = [id, message_id];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            requiredBackEnd('comments', 'DeletePhotoComment', delInfo, 'POST', function(params) {

                that.get("thisComments").removeObject(object);
                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");

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
            requiredBackEnd('comments', 'DeleteProfileComment', delInfo, 'POST', function(params) {

                that.get("thisComments").removeObject(object);
                $('#masonry_user_container').masonry("reloadItems");
                $('#masonry_container').masonry("reloadItems");
                that.cancelDelete();
            });
        }
    },
//    deleteComment: function(object) {
//        var message = "Do you wish to delete this comment ?";
//        this.set("message", message);
//        this.set('makeSureDelete', true);
//        if (this.get('willDelete')) {
//            this.getCommentsById(this.get('content').id);
//            var comments = this.get("thisComments");
//            HubStar.get('data').deleteRecord();
//            comments.store.save();
//            this.cancelDelete();
//        } else {
//            this.set('willDelete', true);
//            HubStar.set('data', object);
//        }
//    },
//    cancelDelete: function() {
//        this.set('willDelete', false);
//        this.set('makeSureDelete', false);
//        HubStar.set('data', null);
//    },
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
                    //console.log(that.count);
                    //console.log("sssssssssssssssssssss");
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
    seeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:block');
        $('#showMoreComment_' + id).attr('style', 'display:none');
        $('#commentData_' + id).attr('style', 'max-height: 88px;');
        $('#commentData_' + id).stop().animate({
            maxHeight: '350px'
        }, 420, function() {
            $('#commentData_' + id).css('overflow', 'auto');
            $('#masonry_container').masonry("reload");
        });

        /* this will need to be cleaned up, using a timed for loop etc (to not repeat code) */
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");

        }, 52.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 105);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 158);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 210.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 263);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 315);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 368);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 420);
    },
    closeMore: function(id) {
        $('#closeComment_' + id).attr('style', 'display:none');
        $('#showMoreComment_' + id).attr('style', 'display:block');

        $('#commentData_' + id).stop().animate({
            maxHeight: '88px'
        }, 380, function() {
            $('#commentData_' + id).css('overflow', 'hidden');
            $('#masonry_container').masonry("reload");
        });


        /* this will need to be cleaned up, using a timed for loop etc (to not repeat code) */
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");

        }, 47.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 95);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 142.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 190);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 237.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 285);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 332.5);
        setTimeout(function() {
            $('#masonry_container').masonry("reload");
            $('#masonry_photo_collection_container').masonry("reload");
            $('#masonry_user_container').masonry("reload");
        }, 368);
    }
});
