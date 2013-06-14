define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {
    var SearchsController = Ember.ArrayController.extend({
        content: [],
        newSearch: function(object) {
            //      
            console.log("serach");

//    var data = MegaModel.find(object);
//                    data.addObserver('isLoaded', function() {
//                        if (data.get('isLoaded')) {
//                            for (var i = 0; i < this.get("content").get("length"); i++) {
//                          //      midcontent.pushObject((this.get("content").objectAt(i)));
//                                    console.log(this.get("content").objectAt(i));
//                            }
//                        }
//
//                    });


                this.set("content", MegaModel.find(object));
                
                
                
     //       this.get("content").pushObject(MegaModel.find(object));            
        console.log(this.get("content").get("length"));
//            var searchResult = App.store.createRecord(App.Search, {
//                id: object.id,
//                region: object.region,
//                result: object.result
//            });


            //       this.transitionToRoute('search', searchResult);

        }

    });
    return SearchsController;
});
