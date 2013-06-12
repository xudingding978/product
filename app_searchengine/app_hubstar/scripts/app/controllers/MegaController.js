/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['models/MegaModel',
    'ember'],
        function(
                MegaModel,
                Ember
                ) {
            var MegaController = Ember.ArrayController.extend({
                content: [],
                selected: null,
                needs: ['photo'],
                findSelectedItemIndex: function() {

                    var content = this.get('content');
                    for (var index = 0; index < content.get('length'); index++) {
                        if (this.get('selected') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {

                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('lastObject'));
                    } else {
                        var selectedIndex = this.findSelectedItemIndex();

                        if (selectedIndex <= 0) {
                            selectedIndex = this.get('content').get('length') - 1;
                        } else {
                            selectedIndex--;
                        }

                        this.set('selected', this.get('content').objectAt(selectedIndex));
                        console.log(this.get('selected'));
                    }


                },
                nextImage: function() {
                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('firstObject'));


                    } else {
                        var selectedIndex = this.findSelectedItemIndex();
                        if (selectedIndex >= (this.get('content').get('length') - 1)) {

                            selectedIndex = 0;
                        } else {
                            selectedIndex++;

                        }
                        this.set('selected', this.get('content').objectAt(selectedIndex));
                        console.log(this.get('selected').get("id"));
                    }
                },
                actionOn: function(megaObject) {
                    //  console.log("aaaaa" + megaObject);
                    var content = this.get("content");

                    //     var t = MegaModel.find(megaObject);
                    //           this.get("content").pushObject(megaObject);
                    window.setTimeout(function() {
                        var owner_profile_id = megaObject.get("owner_profile_id");
                        var collection_id = megaObject.get("collection_id");
                        console.log(owner_profile_id + "    cccccccccc    " + collection_id);
                        var ddd = App.Mega.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id});
                        // var ddd = App.store.findMany(App.Mega, {"collection_id": collection_id, "owner_profile_id": owner_profile_id});
                        console.log(ddd);

                        ddd.one("didLoad", function() {
                            ddd.resolve(ddd.get("firstObject"));
                        });
                        //      console.log(ddd.objectAt(0).get('id'));
                        //         console.log(ddd.objectAt(0).get("id"));
                        content.pushObject(MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id}));
                        //      content.pushObject(MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id}));
                        console.log("aaaaaaaa   " + MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id}));
      
                    }, 200);


                    //       get("content").pushObject(MegaModel.find(model.id));
                },


            });
            return MegaController;
        });
