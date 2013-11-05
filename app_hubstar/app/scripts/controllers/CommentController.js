
HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
    count: null,
    isUserSelf:false,
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
    editingCommentData: function()
    {

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
        for(var i =0 ;i < comments.get("length");i++)
            {
                if(comments.objectAt(i).get("commenter_id")===localStorage.loginStatus)
                    {
                        comments.objectAt(i).set("isUserSelf",true);
                        console.log(comments.objectAt(i));
                    }
            }
        this.set('thisComments', comments);
    },
  removeComment:function(object)
  {
      
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
    }
});
