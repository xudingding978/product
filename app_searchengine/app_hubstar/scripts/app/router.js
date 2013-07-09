define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();
    Router.map(function() {
        this.resource("index", {path: '/'}, function() {
            this.resource("indexIndex", {path: '/'});

            this.resource("photo", {path: '/photos/:photo_id'});
            this.resource("article", {path: '/articles/:article_id'});
//            this.resource("photos", function() {
//                this.resource("photo", {path: ':photo_id'});
//            });
            this.resource("videos", {path: '/videos/:video_id'});
            this.resource("videos", function() {
                this.resource("video", {path: ':video_id'});
            });
            this.resource("files", {path: '/files/:file_id'});
//            this.resource("articles", {path: '/articles/:article_id'});
//            this.resource("articles", function() {
//                this.resource("article", {path: ':article_id'});
//            });
            this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});
            this.resource("discussions", {path: '/discussions/:discussion_id'});
        


            this.resource("profile", {path: '/profiles/:profile_id'},function(){
                
                 this.resource("profileCollection", {path: ':profileCollection_id'});
            });
            this.resource("profiles", function() {
                this.resource("profilesIndex", {path: '/'});
                this.resource("profileNew", {path: '/new'});
//                this.resource("profile", {path: ':profile_id'}, function() {
//           
//                    this.resource("profileCollection", {path: ':profileCollection_id'});
//
//                });
            });
            this.resource("user", {path: '/users/:user_id'},function(){
                   this.resource("userIndex", {path: '/'});
                    this.resource("collection", {path: ':collection_id'});
                
            });
            this.resource("users", function() {
                this.resource("usersIndex", {path: '/'});
//                this.resource("user", {path: ':user_id'}, function() {
//                    this.resource("userIndex", {path: '/'});
//                    this.resource("collection", {path: ':collection_id'});
//
//                });
            });
            this.resource("searchs", {path: "/search"}, function( ) {
                this.resource("searchIndex", {path: '/'});
                this.resource('search', {path: ':search_id'});
            });


            this.resource("welcome", {
                path: "/welcome"
            });
            this.resource("quickstart", {
                path: "/quickstart"
            });
            this.resource("comingSoon", {
                path: "/comingsoon"
            });
        });


        this.resource("test", {
            path: "/test"
        });
        this.resource("photoUpload", {
            path: "/photoupload"
        });
    });
    return Router;
});
