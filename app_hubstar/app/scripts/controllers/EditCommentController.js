
HubStar.EditCommentController = Ember.Controller.extend({
    id: "",
    needs: ['comment'],
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
        this.set("commentContent", HubStar.get("updateCommentmsg"));
    },
    closeCommentItem: function(obj) {
        this.get("controllers.comment").closeCommentItem(obj);
    },
    updateComment: function(object) {
        var id = object.get("optional").split('/')[1];
        var mega = HubStar.Mega.find(id);
        var type = mega.get('type');

        
        if (type === 'photo') {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", this.get("commentContent"));
               that.closeCommentItem(object);
//               object.store.save();
            requiredBackEnd('comments', 'UpdatePhotoComment', delInfo, 'POST', function(params) {
             
            });
        }
        else if (type === "profile")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
                that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateProfileComment', delInfo, 'POST', function(params) {
                
            });
        }
        else if (type === "article")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
                that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateArticleComment', delInfo, 'POST', function(params) {
                
            });
        }
    }
});
