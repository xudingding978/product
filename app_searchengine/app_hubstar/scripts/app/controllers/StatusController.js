define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        //     parentControllerBinding: 'App.searchsController.',
        searchResultNum: "",
        time: "",
        user: null,
        needs: ['searchs'],
        getSearchResultNum: function() {
            var controller = this.get("controllers.searchs");
            this.set("searchResultNum", controller.get("searchResultNum"));
        }.observes('controllers.searchs.searchResultNum'),
        getSearchResultTime: function() {
            var controller = this.get("controllers.searchs");
            this.set("time", controller.get("time"));
        }.observes('controllers.searchs.time'),
                grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            //      console.log(this.get("user"));

        }
    });
    return StatusController;
});
