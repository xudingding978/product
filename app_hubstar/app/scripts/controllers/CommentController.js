
HubStar.CommentController = Ember.Controller.extend({
    commentLength: null,
    thisComments: null,
    stringFiedTime_stamp: null,
    mega: null,
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
            var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
            var commenter_id = this.get("currentUser").get('id');
            var name = this.get("currentUser").get('display_name');
            var date = new Date();
            var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false, optional: this.get('mega').get('type') + '/' + this.get('mega').get('id')});
            comments.insertAt(0, tempComment);
            comments.store.save();
            this.set('commentContent', '');
            $('#addcommetBut').attr('style', 'display:block');
            $('#commentBox').attr('style', 'display:none');
            setTimeout(function() {
                $('#masonry_container').masonry("reload");
                $('.user_comment_' + localStorage.loginStatus).attr('style', 'display:block');
            }, 200);
        }
    },
    getCommentsById: function(id)
    {
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
        var people_like = mega.get("people_like");
        if (people_like === null || people_like === undefined) {
            people_like = "";
        }
        if (localStorage.loginStatus !== null && localStorage.loginStatus !== undefined && localStorage.loginStatus !== "")
        {
            if (people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                this.addPeopleLike(mega);
            }
        }
    }, addPeopleLike: function(mega) {
        var people_like = mega.get("people_like");
        if (people_like === null || people_like === undefined || people_like === "")
        {
            people_like = localStorage.loginStatus;
            mega.set("likes_count", 1);
        } else {
            people_like = people_like + "," + localStorage.loginStatus;
            mega.set("likes_count", people_like.split(",").length);
        }
        mega.set("people_like", people_like);
        mega.updateMegaWithUrl(mega, 'addlike');
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