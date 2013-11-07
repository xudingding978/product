
HubStar.EditCommentController = Ember.Controller.extend({
    id:"",
     needs: ['comment'],
   
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
        this.set("commentContent",HubStar.get("updateCommentmsg"));
    },
    closeCommentItem: function(obj) {      
        this.get("controllers.comment").closeCommentItem(obj);
    },
    updateComment: function(object) {      
         var id = HubStar.get("updateCommentId"+object.get("message_id"));
         var mega = HubStar.Mega.find(id);
         var type = mega.get('type');
         
      
        if (type === 'photo') {
             var message_id = object.get("message_id");
            var delInfo = [id, message_id,this.get("commentContent")];
            
            delInfo = JSON.stringify(delInfo);
            var that = this;
            requiredBackEnd('comments', 'UpdatePhotoComment', delInfo, 'POST', function(params) {

                for (var i = 0; i < that.get("thisComments").get("length"); i++)
                {
                    var commentId = that.get("thisComments").objectAt(i).get("commenter_id") + that.get("thisComments").objectAt(i).get("time_stamp");
                    if (that.contentID === commentId)
                    {
                        that.get("thisComments").objectAt(i).set("content", that.content);
                    }
                }

                $('#masonry_user_container').masonry("reload");
                that.cancelDelete();
            });
        }
//        else if (type === "profile")
//        {
//            var commentId = object.get("commenter_id");
//            var time_stamp = object.get("time_stamp");
//            var content = object.get("content");
//            var contentID = commentId + time_stamp;
//            var delInfo = [id, commentId, time_stamp, content];
//
//            delInfo = JSON.stringify(delInfo);
//            var that = this;
//            requiredBackEnd('comments', 'UpdatePhotoComment', delInfo, 'POST', function(params) {
//
//                for (var i = 0; i < that.get("thisComments").get("length"); i++)
//                {
//                    var commentId = that.get("thisComments").objectAt(i).get("commenter_id") + that.get("thisComments").objectAt(i).get("time_stamp");
//                    if (that.contentID === commentId)
//                    {
//                        that.get("thisComments").objectAt(i).set("content", that.content);
//                    }
//                }
//
//                $('#masonry_user_container').masonry("reload");
//                that.cancelDelete();
//            });
//        }
    } 
});
