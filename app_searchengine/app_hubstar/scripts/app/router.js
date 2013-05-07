define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.resource("index", {
            path: "/"
        });
        this.resource("profiles", {
            path: '/profiles/:profile_id'
        });



        this.resource("users", {
            path: "/users"
        });
    });

    return Router;
});