HubStar.SearchsController = Ember.ArrayController.extend({
        needs: ['application', 'status','platformBar'],
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

