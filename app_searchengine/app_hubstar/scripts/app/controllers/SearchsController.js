define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        search_string: "",
        searchResultNum: "",
        newSearch: function(area,search_key) {
            var results = MegaModel.find({"region":area , "search_string": search_key});
            this.set("content", results);

                 var searchResultNum = MegaModel.find({"RquireType": "hits","region": area, "search_string": search_key});

        },
        test: function()
        {
            console.log(' todoLabel ' + this.get("search_string"));
        },
        rrr: function()
        {
            var searchResultNum = MegaModel.find({"RquireType": "hits","region": "", "search_string": ""});
        }.observes("content")
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
