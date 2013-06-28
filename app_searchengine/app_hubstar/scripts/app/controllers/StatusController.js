define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        searchResultNum: "",
        time: "",
        user: null,
        needs: ['application'],
        myUserProfile:null,
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/"+localStorage.loginStatus);
        },

    });
    return StatusController;
});
