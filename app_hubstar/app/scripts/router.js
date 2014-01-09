
var Router = Ember.Router.extend( );


HubStar.Router.map(function() {
    this.route("fourOhFour", {path: "*:"});
    this.resource("index", {path: '/'}, function() {

        this.resource("indexIndex", {path: '/'});
        this.resource("verifyId", {path: '/verify/:verify_id'});

//        this.resource("videoes", function() {
//            this.resource("video", {path: ':video_id'});
//        });
        this.resource("article", {path: '/articles/:article_id'}, function() {
            this.resource("searchArticlePhoto", {path: '/photos/:photo_id'});
        });
        this.resource("video", {path: '/videos/:video_id'});
        this.resource("pdf", {path: '/pdf/:video_id'});
        this.resource("photo", {path: '/photos/:photo_id'});


        // ### business profile start 
        this.resource("profile", {path: '/profiles/:profile_id'}, function() {
            this.resource("profileFollowers", {path: '/followers'});
            this.resource("profileVideos", {path: '/videos'},function(){
                 this.resource("videoVideo", {path: '/videos/:video_id'});
            });
            this.resource("profileCollections", {path: '/collections'}, function() {
                //this.resource("photo", {path: '/photoes/:photo_id'});

                // business profiles collections data
                this.resource("profileCollection", {path: ':profileCollection_id'}, function() {
                    this.resource("profilePhoto", {path: '/photos/:photo_id'});
                    this.resource("profileVideo", {path: '/videos/:video_id'});
                    this.resource("profileArticle", {path: '/article/:article_id'}, function() {
                        this.resource("profileArticlePhoto", {path: '/photos/:photo_id'});
                    });
                });
            });
            this.resource("profilePdf", {path: '/pdf'}, function() {
                this.resource('pdfUploader', {path: '/upload'});
            });

            // business profile partners start

            this.resource("partners", {path: '/network'});
            this.resource("reviews", {path: '/reviews'}, function() {
                this.resource("review", {path: ':review_id'}, function() {
                    this.resource("replys", {path: '/replys'}, function() {
                        this.resource("reply", {path: ':review_reply_id'});
                    });
                });
            }); // business profile partners end
        }); // ### business profile end 


        // ### create [NEW] business profile start
        this.resource("profiles", function() {
            this.resource("index", {path: '/'});
            this.resource("profileNew", {path: '/new'});

        }); // ### create [NEW] business profile end 


        this.resource("user", {path: '/users/:user_id'}, function() {
            this.resource("following", {path: '/following'});
            this.resource("followers", {path: '/followers'});
            this.resource("userCollections", {path: '/collections'}, function() {
                this.resource("collection", {path: ':collection_id'}, function() {
                    this.resource("userPhoto", {path: '/photos/:photo_id'});
                    this.resource("userVideo", {path: '/video/:video_id'});
                    this.resource("userArticle", {path: '/article/:article_id'}, function() {
                        this.resource("articlePhoto", {path: '/photos/:photo_id'});
                    });

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
            this.resource("userPost", {path: '/post'});
        });
        this.resource("users", function() {
            this.resource("usersIndex", {path: '/'});
        });

        this.resource("searchs", {path: "/search"}, function() {
            this.resource("searchIndex", {path: '/default'}, function()
            {
                this.resource("searchDefaultArticle", {path: '/articles/:article_id'}, function() {
                    this.resource("searchDefaultArticlePhoto", {path: '/photos/:photo_id'});
                });
//                this.resource("video", {path: '/videos/:video_id'});
//                this.resource("photo", {path: '/photos/:photo_id'});
            });

            this.resource('search', {path: ':search_id'}, function() {
                this.resource("searchIndexArticle", {path: '/articles/:article_id'}, function() {
                    this.resource("searchIndexArticlePhoto", {path: '/photos/:photo_id'});
                });

                this.resource("newSearchVideo", {path: '/videos/:video_id'});
                this.resource("newSearchPhoto", {path: '/photos/:photo_id'});
            });
        });


        this.resource("welcome", {
            path: "/welcome"
        });


        this.resource("register", {
            path: "/register"
        });
    });
});

HubStar.Router.reopen({
    didTransition: function(infos) {
        this._super(infos);
        Ember.run.next(function() {

            ga('create', 'UA-235915-17', {'name': 'Trends'});
            ga('Trends.send', 'pageview');

            ga('create', 'UA-46481605-1', {'name': 'HubStar'});
            ga('HubStar.send', 'pageview', window.location.href);
        });
    }
});
