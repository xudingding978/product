define([
    'models/MegaModel',
    'models/StatModel',
    'ember'
], function(MegaModel, Stat, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        search_string: "",
        search_area: "",
        searchResultNum: "",
        time: "",
        newSearch: function() {
            App.set("uploadMode", null);
            var d = new Date();
            var start = d.getTime();
            var results = MegaModel.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
            this.set("content", results);
            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
            var that = this;
            console.log(Stat.find('hit').get("hits"));
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


    return SearchsController;
});
