var Router = Ember.Router.extend(


        );


HubStar.Router.map(function() {
    this.resource("index", {path: '/'}, function() {
        this.resource("indexIndex", {path: '/'});
        this.resource("article", {path: '/articles/:article_id'});
        this.resource("video", {path: '/videos/:video_id'});
        this.resource("photo", {path: '/photos/:photo_id'});
//        this.resource("videoes", function() {
//            this.resource("video", {path: ':video_id'});
//        });
        this.resource("files", {path: '/files/:file_id'});
        this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});
        this.resource("profile", {path: '/profiles/:profile_id'}, function() {
            this.resource("profileFollowers", {path: '/followers'});
            this.resource("profileVideos", {path: '/videos'});
            this.resource("profileCollections", {path: '/collections'}, function() {
                //this.resource("photo", {path: '/photoes/:photo_id'});
                this.resource("profileCollection", {path: ':profileCollection_id'});
            });
            this.resource("partners", {path: '/partners'});


        });
        this.resource("profiles", function() {
            this.resource("profileNew", {path: '/new'});

        });


        this.resource("user", {path: '/users/:user_id'}, function() {
            this.resource("following", {path: '/following'});
            this.resource("followers", {path: '/followers'});
            this.resource("userCollections", {path: '/collections'}, function() {
                this.resource("collection", {path: ':collection_id'}, function() {
                    this.resource("userPhoto", {path: '/photos/:photo_id'});
                    this.resource("userArticle", {path: '/article/:article_id'});
                    this.resource("userVideo", {path: '/video/:video_id'});
                });
            });
            this.resource("messageCenter", {path: '/messagecenter'}, function() {
                //  this.resource("messageCenter.index", {path: '/messages'});
                this.resource("messages", {path: '/messages'});
                this.resource("notifications", {path: '/notifications'});
                this.resource("conversations", {path: '/conversations'}, function() {
                    this.resource("newConversation", {path: '/new'});
                    this.resource("conversation", {path: ':conversation_id'});

                });
            });

        });
        this.resource("users", function() {
            this.resource("usersIndex", {path: '/'});
        });

        this.resource("searchs", {path: "/search"}, function() {
            this.resource("searchIndex", {path: '/'});
            this.resource('search', {path: ':search_id'});
        });
        this.resource("welcome", {
            path: "/welcome"
        });
        this.resource("quickstart", {
            path: "/quickstart"
        });
        this.resource("register", {
            path: "/register"
        });
    });
});
