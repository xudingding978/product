define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();
    Router.map(function() {
        this.resource("index", {path: '/'}, function() {
            this.resource("indexIndex", {path: '/'});
            this.resource("lightBox", {path: '/lightBox/:profile_id'});
            this.resource("photos", {path: '/photos/:photo_id'});
            this.resource("photos", function() {
                this.resource("photo", {path: ':photo_id'});
            });
            this.resource("videos", {path: '/videos/:video_id'});
            this.resource("videos", function() {
                this.resource("video", {path: ':video_id'});
            });
            this.resource("files", {path: '/files/:file_id'});
            this.resource("articles", {path: '/articles/:article_id'});
            this.resource("articles", function() {
                this.resource("article", {path: ':article_id'});
            });
            this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});
            this.resource("discussions", {path: '/discussions/:discussion_id'});
            this.resource("users", {path: '/users/:user_id'});
            this.resource("profiles", {path: '/profiles/:profile_id'});
            this.resource("profiles", function() {
                this.resource("profileIndex", {path: '/'});
                this.resource("profileNew", {path: '/new'});
                this.resource("profile", {path: ':profile_id'
                });
            });
            this.resource("searchs", {path: "/search"}, function( ) {
                this.resource("searchIndex", {path: '/'});
                this.resource('search', {path: ':search_id'});
            });
        });

        this.resource("users", {
            path: "/users"
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
