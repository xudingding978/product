define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {
    var SearchsController = Ember.ArrayController.extend({
        newSearch: function(object) {
            
            
            
      
            
         this.set("controller",[]);
            console.log("sssssssssss");
            App.Mega.find(object);
            
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
