define(["ember"], function(Ember) {
    var CommentController = Ember.Controller.extend({
        commentLength: null,
        thisComments: null,
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
                }, 200);
            }
        },
        getCommentsById: function(id)
        {
            var mega = App.Mega.find(id);
            var comments = mega.get('comments');
            this.set('thisComments', comments);
         
        }


    });
    return CommentController;
});
