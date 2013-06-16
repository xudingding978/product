define([
    'models/MegaModel',
    'models/ResultstatusModel',
    'ember'
], function(MegaModel,ResultstatusModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        search_string: "",
        searchResultNum: "",
        newSearch: function(area, search_key) {
            var results = MegaModel.find({"RquireType": "search", "region": area, "search_string": search_key});
            this.set("content", results);
            var searchResultNum = ResultstatusModel.find({"RquireType": "status", "region": area, "search_string": search_key});

        },
        test: function()
        {
            this.set("searchResultNum", this.get("search_string"));
            console.log(' todoLabel ' + this.get("search_string"));
        },

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
