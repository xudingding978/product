var Router = Ember.Router.extend(
        {
            checkPath: function(path) {
                path = path.replace(this.get('rootURL'), '').replace(/^(?=[^\/])/, "/");
                var resolvedStates = this.get("states.root").resolvePath(this, path);
                var lastState = resolvedStates.get("lastObject");
                return lastState.match.remaining === "";
            },
            route: function(path) {
                if (this.checkPath(path)) {
                    this._super(path);
                } else {
                    this.transitionTo("404page");
                }
            }
        }

);

HubStar.Router.map(function() {
    this.resource("index", {path: '/'}, function() {
        this.resource("indexIndex", {path: '/'});
        this.resource("photo", {path: '/photos/:photo_id'});
        this.resource("article", {path: '/articles/:article_id'});
        this.resource("videos", {path: '/videos/:video_id'});
        this.resource("videos", function() {
            this.resource("video", {path: ':video_id'});
        });
        this.resource("files", {path: '/files/:file_id'});
        this.resource("ideabooks", {path: '/ideabooks/:ideabook_id'});

        this.resource("profile", {path: '/profiles/:profile_id'}, function() {

            this.resource("profileCollection", {path: ':profileCollection_id'});
        });
        this.resource("profiles", function() {
            this.resource("profileNew", {path: '/new'});
        });

        this.resource("user", {path: '/users/:user_id'}, function() {
            this.resource("collection", {path: ':collection_id'});

        });
        this.resource("users", function() {
            this.resource("usersIndex", {path: '/'});

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



});