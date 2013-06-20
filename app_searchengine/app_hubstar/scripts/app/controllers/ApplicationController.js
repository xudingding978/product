define([
    'models/MegaModel',
    'models/StatModel',
    'ember'
], function(MegaModel, Stat, Ember) {


    var ApplicationController = Ember.ArrayController.extend({
        needs: ['searchs'],
        loginInfo: "",
        test: false,
        user: null,
        popupModal: function() {
            this.set('popup', !this.get('popup'));


        },
        closeModal: function() {

            this.set('popup', !this.get('popup'));


        },
        email_login: function() {

            this.set('mail', !this.get('mail'));
        },
        loginStatus: function() {
            var searchsController = this.get("controllers.searchs");
            this.set('loginInfo', localStorage.loginStatus);
            searchsController.set('loginInfo', localStorage.loginStatus);
        },
//        test: function() {
//            this.set('loginInfo', localStorage.loginStatus);
//        },
        grapData: function() {
            this.set("user", App.User.find(localStorage.loginStatus));
            //   console.log(this.get("user"));

        },
        reloadPage: function() {
            console.log("aqpllication " + this.get("test"));
            this.set("test", !this.get("test"));
            console.log("aqpllication " + this.get("test"));
        },
        newSearch: function() {
            var d = new Date();
            var start = d.getTime();
            var results = MegaModel.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
            console.log(results);
            this.set("content", results);
            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
            var that = this;
            stats.addObserver('isLoaded', function() {
                if (stats.get('isLoaded')) {
                    var d = new Date();
                    var end = d.getTime();
                    that.set("searchResultNum", Stat.find('hit').get("hits"));
                    that.getResponseTime(start, end);
                }
            });
        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();
            var results = MegaModel.find({});
            this.set("content", results);
        },
        getResponseTime: function(start, end) {
            var totalTime = end - start;
            totalTime += "ms";
            this.set("time", totalTime);
        }

    });

    return ApplicationController;
});
