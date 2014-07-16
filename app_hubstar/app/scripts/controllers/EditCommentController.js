
HubStar.EditCommentController = Ember.Controller.extend({
    id: "",
    needs: ['comment', "mega", "article", 'video'],
    actions: {
        closeCommentItem: function(obj) {
            if (HubStar.get("parentController") === 'mega')
            {
                var c = this.get("controllers.mega");
                c.send("updateComment", obj);
            }
            else if (HubStar.get("parentController") === 'comment') {
                //this.get("controllers.comment").closeCommentItem(obj);
                var c = this.get("controllers.comment");
                c.send("closeCommentItem", obj);
            }
            else if (HubStar.get("parentController") === 'article') {
                //this.get("controllers.article").updateComment(obj);
                var c = this.get("controllers.article");
                c.send("updateComment", obj);
            }
            else if (HubStar.get("parentController") === 'video') {
                //this.get("controllers.video").updateComment(obj);
                var c = this.get("controllers.video");
                c.send("updateComment", obj);
            }
        },
        updateComment: function(object) {
            var id = object.get("optional").split('/')[1];
            var mega = HubStar.Mega.find(id);
            var type = mega.get('type');
            var message_id;
            var that = this;
            var delInfo = [];
            if (type === 'photo') {
                message_id = object.get("message_id");
                delInfo = [id, message_id, this.get("commentContent")];
                delInfo = JSON.stringify(delInfo);

                object.set("content", this.get("commentContent"));
                that.send("closeCommentItem", object);
                requiredBackEnd('comments', 'UpdatePhotoComment', delInfo, 'POST', function() {

                });
            }
            else if (type === "profile")
            {
                message_id = object.get("message_id");
                delInfo = [id, message_id, this.get("commentContent")];
                delInfo = JSON.stringify(delInfo);

                object.set("content", that.get("commentContent"));
                that.send("closeCommentItem", object);
                requiredBackEnd('comments', 'UpdateProfileComment', delInfo, 'POST', function() {

                });
            }
            else if (type === "article")
            {
                message_id = object.get("message_id");
                delInfo = [id, message_id, this.get("commentContent")];
                delInfo = JSON.stringify(delInfo);

                object.set("content", that.get("commentContent"));
                that.send("closeCommentItem", object);
                requiredBackEnd('comments', 'UpdateArticleComment', delInfo, 'POST', function() {

                });
            }
            else if (type === "video")
            {
                message_id = object.get("message_id");
                delInfo = [id, message_id, this.get("commentContent")];
                delInfo = JSON.stringify(delInfo);

                object.set("content", that.get("commentContent"));
                that.send("closeCommentItem", object);
                requiredBackEnd('comments', 'UpdateVideoComment', delInfo, 'POST', function() {
                });
            }
        }
    },
    init: function()
    {
        if (localStorage.loginStatus) {
            this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
        }
        this.set("commentContent", HubStar.get("updateCommentmsg"));
    },
    setRelatedController: function(parentController)
    {
        HubStar.set('parentController', parentController);
    }
});
