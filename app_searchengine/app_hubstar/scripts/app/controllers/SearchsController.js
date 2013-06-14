define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {
    var midContent = [];
    var SearchsController = Ember.ArrayController.extend({
        content: midContent,
        newSearch: function(object) {
            //      
            midContent = [];
            this.set("content", midContent);
            var data = MegaModel.find(object);
            data.addObserver('isLoaded', function() {
                if (data.get('isLoaded')) {

                    for (var i = 0; i < this.get("content").get("length"); i++) {
                        if (this.get("content").objectAt(i).data.materialized) {
                            midContent.pushObject(this.get("content").objectAt(i).record._data.hasMany.photo[0].data);
                        }
                        else {
                            midContent.pushObject(this.get("content").objectAt(i).data.photo[0]);
                        }
                    }
                }

            });




            //       this.get("content").pushObject(MegaModel.find(object));            

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
