define(["ember"], function(Ember) {
    var ArticleController = Ember.Controller.extend({
        getInitData: function(megaObject) {
            var articleObj = megaObject.get('article').objectAt(0);
            this.set("currentUser", App.User.find(localStorage.loginStatus));
            this.set("content", []);


            var megaResouce = App.Mega.find(megaObject.id);
            //  console.log(megaResouce.get('article').objectAt(0));

            this.set('articleResouce', megaResouce.get('article').objectAt(0));
            this.set('megaResouce', megaResouce);
            this.addRelatedData(megaObject);
            this.getCommentsById(megaObject.id);
//            this.set("photo_album_id", "album_" + this.get('selectedMega').id);
//            this.set("photo_thumb_id", "thumb_" + this.get('selectedMega').id);
        },
        addComment: function() {
            var commentContent = this.get('commentContent');
            if (commentContent) {
                var comments = this.get('megaResouce').get('comments');
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
            }
        },
        addRelatedData: function(mega)
        {
            var collection_id = mega.get("collection_id");
            var owner_profile_id = mega.get("owner_id");
            var isProfileIDExist = this.isParamExist(owner_profile_id);
            var isCollectionIDExist = this.isParamExist(collection_id);
            var that = this;
            if (isProfileIDExist && isCollectionIDExist) {
                var data = App.Mega.find({RequireType: "articleRelatedImage", "article_id": collection_id, "owner_id": owner_profile_id});
                data.addObserver('isLoaded', function() {
                    if (data.get('isLoaded')) {
                        for (var i = 0; i < this.get("content").length; i++) {
                            var id = this.get("content").objectAt(i).id;
                            if (App.Mega.find(id)._data.hasMany.photo.length === 1)
                            {
                                that.get("content").pushObject(App.Mega.find(id).get("photo").objectAt(0));
                            }
                        }
                    }
                });
            }
        },
        getCommentsById: function(id)
        {
            var mega = App.Mega.find(id);
            var comments = mega.get('comments');
            this.set('thisComments', comments);
        },
        isParamExist: function(param)
        {
            var result = (param !== null && param !== undefined);
            return result;
        },
    });
    return ArticleController;
});
