define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {

    var SearchsController = Ember.ArrayController.extend({
        content: [],
        newSearch: function(object) {
            this.set("content", MegaModel.find(object));
            console.log(MegaModel.find(object).toString());
            console.log(this.get("content"));
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
