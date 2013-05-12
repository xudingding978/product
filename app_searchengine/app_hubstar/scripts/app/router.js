define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.resource("index", {
            path: "/"
        });
        this.resource("profiles", {
            path: "/profiles"
        });
        this.resource("users", {
            path: "/users"
        });
        this.resource("test", {
            path: "/test"
        });
    });

    return Router;
});