
    HubStar.IndexController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        islogin: false,
        search_string: "",
        search_area: "",
        searchResultNum: "",
        time: "",
        newSearch: function() {
            var d = new Date();
            var start = d.getTime();
            var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
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
        setLogin: function() {
            if (localStorage.loginStatus !== null && localStorage.loginStatus !== "") {
                this.set("islogin", true);
            }
        },
        defaultSearch: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();

            var results = HubStar.Mega.find({});           

            this.set("content", results);
        },
        getResponseTime: function(start, end)
        {
            var totalTime = end - start;
            totalTime += "ms";
            this.set("time", totalTime);
        }
    });
