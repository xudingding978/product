define(["ember"], function(Ember) {
    var ArticleController = Ember.Controller.extend({
        getInitData: function(megaObject) {
            var articleObj = megaObject.get('article').objectAt(0);
            this.set("currentUser", App.User.find(localStorage.loginStatus));
            this.set("content", []);
            this.set("selectedMega", articleObj);
            this.get("content").pushObject(articleObj);
            this.set('megaResouce', App.Mega.find(megaObject.id)._data.attributes);
//            this.set("photo_album_id", "album_" + this.get('selectedMega').id);
//            this.set("photo_thumb_id", "thumb_" + this.get('selectedMega').id);
        }









    });
    return ArticleController;
});
