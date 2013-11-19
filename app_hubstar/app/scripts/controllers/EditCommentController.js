
HubStar.EditCommentController = Ember.Controller.extend({
    id: "",
    needs: ['comment', "mega","article",'video'],
    
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
    },
    closeCommentItem: function(obj) {     
        if (HubStar.get("parentController") === 'mega')
        {        
            this.get("controllers.mega").updateComment(obj);
        }
        else if(HubStar.get("parentController") === 'comment'){
            this.get("controllers.comment").closeCommentItem(obj);
        }
        else if(HubStar.get("parentController") === 'article'){
            this.get("controllers.article").updateComment(obj);
        }
         else if(HubStar.get("parentController") === 'video'){
            this.get("controllers.video").updateComment(obj);
        }
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
        else if (type === "video")
        {
            var message_id = object.get("message_id");
            var delInfo = [id, message_id, this.get("commentContent")];
            delInfo = JSON.stringify(delInfo);
            var that = this;
            object.set("content", that.get("commentContent"));
            that.closeCommentItem(object);
            requiredBackEnd('comments', 'UpdateVideoComment', delInfo, 'POST', function(params) {

            });
        }
    }
});
