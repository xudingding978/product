define(["ember"], function(Ember) {
    var CommentController = Ember.Controller.extend({
        commentLength: null,
        thisComments: null,
        stringFiedTime_stamp: null,
        init: function()
        {
            this.set("currentUser", App.User.find(localStorage.loginStatus));
        },
        addComment: function() {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get("thisComments");
                var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
                var commenter_id = this.get("currentUser").get('id');
                var name = this.get("currentUser").get('display_name');
                var date = new Date();
                var tempComment = App.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                    "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false});
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
            var mega = App.Mega.find(id);
            var comments = mega.get('comments');
            this.set('thisComments', comments);
        },
        deleteComment: function(object) {
            var message = "Do you wish to delete this comment ?";
            this.set("message", message);
            this.set('makeSureDelete', true);
            if (this.get('willDelete')) {
                this.getCommentsById(this.get('content').id);
                var comments = this.get("thisComments");
                App.get('data').deleteRecord();
                comments.store.save();
                this.cancelDelete();
            } else {
                this.set('willDelete', true);
                App.set('data', object);
            }
        },
        cancelDelete: function() {
            this.set('willDelete', false);
            this.set('makeSureDelete', false);
            App.set('data', null);
        },
        addLike: function(id)
        {
            var mega = App.Mega.find(id);
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined) {
                people_like = "";
            }
            if (people_like.indexOf(localStorage.loginStatus) !== -1)
            {
            }
            else {
                this.addPeopleLike(mega);
            }
        }, addPeopleLike: function(mega) {
            var people_like = mega.get("people_like");
            if (people_like === null || people_like === undefined||people_like==="")
            {
                people_like = localStorage.loginStatus;
                mega.set("likes_count", 1);
            } else {
                people_like = people_like + "," + localStorage.loginStatus;
                mega.set("likes_count",people_like.split(",").length);
            }
            mega.set("people_like", people_like);
           App.store.save();
        }
    });
    return CommentController;
});
