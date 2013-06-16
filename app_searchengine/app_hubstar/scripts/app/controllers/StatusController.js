define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        user: null,
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            //      console.log(this.get("user"));

        }
    });

    return StatusController;
});
