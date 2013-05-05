define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.resource("index", {path: "/"});

        this.resource('profiles',function() {
            this.resource("profile", {path: ':profile_id'});
        });

        this.resource("users", {path: "/users"});

        this.route("selectedTab", {path: "/:tab"});
        this.route("data", {path: "/data"});
        this.resource("search", {path: "/search"}, function() {
            this.route("kitchens", {path: "/kitchens"});
        });
    });

    return Router;
});