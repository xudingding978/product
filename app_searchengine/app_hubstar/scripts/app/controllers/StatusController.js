define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        //     parentControllerBinding: 'App.searchsController.',
        searchResultNum: "",
        needs: ['searchs'],
        test: function() {
            var controller = this.get("controllers.searchs");
            this.set("searchResultNum", controller.get("searchResultNum"));
        }.observes('controllers.searchs.searchResultNum')
    });
    return StatusController;
});
