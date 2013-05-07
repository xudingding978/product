define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
//        this.resource("index", {path: "/"});
        
        //profile route
        this.resource('profiles', function() {
          this.resource("profile", {path: '/:profile_id'});
        });
        
        // photos route
        this.resource("photos", function() {
            this.resource("photo", {path: "/:photo_id"}, function() {
                this.route("comments");
                this.route("comment", {path: "/comments/:comment_id"});
            });
        });
        
        // users route
        this.resource("users", {path: "/users"});

        this.route("selectedTab", {path: "/:tab"});

        this.route("data", {path: "/data"});

        this.resource("search", {path: "/search"}, function() {
            this.route("kitchens", {path: "/kitchens"});
        });
    });

    return Router;
});