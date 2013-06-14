define([
    'models/MegaModel',
    'ember'
], function(MegaModel, Ember) {
    var stores = [];
    var midContent = [];
    var SearchsController = Ember.ArrayController.extend({
        content: midContent,
        newSearch: function(object) {


            this.set("content", MegaModel.find(object));
        },
        searchModelLoad: function() {



            if (stores.length === 0) {
//{"region": "", "search_string": "home"}
                var d = MegaModel.find();
                      midContent.pushObject(d);
      //          this.get('content'));
                console.log(midContent);
              //  d.addObserver('isLoaded', function() {
             //       console.log(d.get('isLoaded'));
                    if (d.get('isLoaded')) {
                        console.log(d.get("content").get("length"));
                        for (var i = 0; i < d.get("content").get("length"); i++) {
                            if (d.get("content").objectAt(i).data.materialized) {
                                stores.pushObject(d.get("content").objectAt(i).record._data.hasMany.photo[0].data);
                            }
                            else {
                                stores.pushObject(d.get("content").objectAt(i).data.photo[0]);
                            }
                        }
                    }else{
                        
                        console.log("else");
                    }

           
            //    });






                //      this.set("content", stores);
                //     console.log(stores);
            } else {
                console.log("bbbbbbbbbbb");
                this.set("content", null);
                this.set("content", stores);

                console.log(stores.get('length'));
                console.log(stores.get('content'));
            }


        }
    });
    return SearchsController;
});
