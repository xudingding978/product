define(["ember"], function(Ember) {

    var StatusController = Ember.Controller.extend({
        searchResultNum: "",
        time: "",
        user: null,
        myUserProfile: null,
        response: 'Start searching for ideas now.',
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        },
        changeDescription: function()
        {
//          this.set('response','dddddddddddd')
//console.log(3333333333333333);
         this.set('response',  "You've got "+this.get('searchResultNum')+" results in "+this.get('time')+".");

        }

    });
    return StatusController;
});
