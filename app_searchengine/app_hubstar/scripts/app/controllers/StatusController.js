define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        //     parentControllerBinding: 'App.searchsController.',
        searchResultNum: "",
        user: null,
        needs: ['searchs'],
        dontDoTest: function() {
            var controller = this.get("controllers.searchs");
            this.set("searchResultNum", controller.get("searchResultNum"));
        }.observes('controllers.searchs.searchResultNum'),
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            //      console.log(this.get("user"));

        }
    });
    return StatusController;
});
