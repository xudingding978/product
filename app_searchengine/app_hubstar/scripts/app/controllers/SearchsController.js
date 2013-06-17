define([
    'models/MegaModel',
    'models/ResultstatusModel',
    'ember'
], function(MegaModel, ResultstatusModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        needs: ['application', 'status'],
        loginInfo: "",
        content: [],
        search_string: "",
        search_key:"",
        searchResultNum: "",
        newSearch: function(area, search_key) {
            var results = MegaModel.find({"RquireType": "search", "region": area, "search_string": search_key});
            var t = MegaModel.find("1000117801371025408");
            this.set("content", results);
            var searchResultNum = ResultstatusModel.find({"RquireType": "status", "region": area, "search_string": search_key});
            console.log(searchResultNum);
        },
        test: function()
        {
       //     this.set("searchResultNum", this.get("search_string"));
      //      console.log(' todoLabel ' + this.get("search_string")+"   "+this.get('search_key'));
            this.newSearch(this.get("search_string"), this.get('search_key'));
        },
        searchModel: function() {
            this.set("loginInfo", localStorage.loginStatus);
            var ac = this.get("controllers.application");
            var st = this.get("controllers.status");
            ac.grapData();
            st.grapData();
            var data = MegaModel.find({});
        }

//        checkContent: function() {
//            if (this.get("content") !== undefined)
//            {
//                Ember.run(console.log(this.get("content")));
//            }
//        }.observes('content'),
//        init: function() {
//                 var data = MegaModel.find({});
//                    this.set("content", data);
//             console.log(data.toString());
////                    data.addObserver('isLoaded', function() {
////                        if (data.get('isLoaded')) {
////                            for (var i = 0; i < this.get("content").get("length"); i++) {
////                         console.log("aaaaaaaaa");
////                            }   
////                        }
////                    });
//
//
//        }
    });


    return SearchsController;
});
