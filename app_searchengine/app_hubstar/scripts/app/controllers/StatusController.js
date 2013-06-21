define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        //     parentControllerBinding: 'App.searchsController.',
        searchResultNum: "",
        time: "",
        user: null,
        needs: ['application'],
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
        }
    });
    return StatusController;
});
