define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();
    Router.map(function() {
        this.resource("index", {
            path: "/"
        });
        this.resource("profiles", function() {
            this.resource("profileIndex", {path: '/'});
            this.resource("profileNew", {path: '/new'});
            this.resource("profile", {path: ':profile_id'});
        });

        this.route("data", {
            path: '/data'
        });
        this.resource("users", {
            path: "/users"
        });
    });
    return Router;
});
