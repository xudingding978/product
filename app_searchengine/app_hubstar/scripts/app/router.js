define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.route("index", {path: "/"});
        this.route("selectedTab", {path: "/:tab"});
        this.route("data", {path: "/data"});
        this.resource("search", {path: "/search"}, function() {
            this.route("kitchens", {path: "/kitchens"});
        });
    });

    return Router;
});