define(["ember"], function(Ember) {

    var Router = Ember.Router.extend();

    Router.map(function() {
        this.resource("index", {
            path: "/"
        });
        this.resource("profiles", function() {
            this.resource('profile', {path: ':profile_id'});
            this.route('new');
        });

        this.resource("users", {
            path: "/users"
        });
    });

    return Router;
});
