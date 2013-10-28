HubStar.SearchsController = Ember.ArrayController.extend({
    needs: ['application', 'status', 'platformBar'],
    loginInfo: "",
    content: [],
    search_string: "",
    search_area: "",
    searchResultNum: "",
    time: "",
    newSearch: function() {
        HubStar.set("uploadMode", null);
        var d = new Date();
//            var start = d.getTime();
        var results = HubStar.Mega.find({"RquireType": "search", "region": this.get("search_area"), "search_string": this.get("search_string")});
        this.set("content", results);

//            var stats = Stat.find({"RquireType": "status", "region": this.get("search_area"), "search_string": this.get("search_string")});
//            var that = this;

    },
    defaultSearch: function() {
        this.set("loginInfo", localStorage.loginStatus);
        this.setLoginImge();
        var results = HubStar.Mega.find({"RquireType": "defaultSearch"});
        this.set("content", results);

        Ember.run.later(function() {
            var ads = HubStar.get('ads');
//            googletag.cmd.push(function() {
//                for (var i = 0; i < ads.length; i++) {
//                    var ad = ads[i];
//                    console.log(ad.size[0] + " " + ad.div);
//                    googletag.defineSlot(ad.path, [ad.size[0], ad.size[1]], ad.div).addService(googletag.pubads());
//                }
//                googletag.pubads().enableSingleRequest();
//                googletag.enableServices();
//            });
//            for (var i = 0; i < ads.length; i++) {
//                var ad = ads[i];
//                googletag.cmd.push(function() {
//                    googletag.display(ad.div);
//                });
//            }

        }, 500);

    },
    getResponseTime: function(start, end) {
        var totalTime = end - start;
        totalTime += "ms";
        this.set("time", totalTime);
    },
    //get user model data after login
    /***/     setLoginImge: function() {                                           /***/
        /***/            var ac = this.get("controllers.application");          /***/
        /***/           var st = this.get("controllers.status");                   /***/
        /***/          ac.grapData();                                                       /***/
        /***/          st.grapData();                                                        /***/
        /***/      }                                                                                /***/
    //get user model data after login

});

