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
            var midcontent = [];
            var MegaController = Ember.ArrayController.extend({
                content: midcontent,
                temp: null,
                percentComplete: 0,
                test: "test",
                selected: null,
                isSelected: false,
                needs: ['photo'],
                findSelectedItemIndex: function() {
                    content = this.get('content');
                    for (var index = 0; index < content.get('length'); index++) {
                        if (this.get('selected') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {
                    this.addObjects();
//                    if (!this.get('selected')) {
//                        this.set('selected', this.get('content').get('lastObject'));
//                    }
                    var selectedIndex = this.findSelectedItemIndex();

                    if (selectedIndex <= 0) {
                        selectedIndex = this.get('content').get('length') - 1;
                    } else {
                        selectedIndex--;
                    }

                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    //         console.log(this.get('selected'));

                    this.set("percentComplete", this.get('content').objectAt(selectedIndex));


                },
                nextImage: function() {

                    this.addObjects();

//                    if (!this.get('selected')) {
//
//                        this.set('selected', this.get('content').get('firstObject'));
//
//                    }

                    var selectedIndex = this.findSelectedItemIndex();
                    if (selectedIndex >= (this.get('content').get('length') - 1)) {

                        selectedIndex = 0;
                    } else {

                        selectedIndex++;

                    }
                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    console.log(this.get('content').objectAt(selectedIndex).record._data);
                    //      this.set("percentComplete", this.get('content').objectAt(selectedIndex).data.photo[0]);
                    //    console.log(this.get('content'));
                    //   console.log(this.get('content').objectAt(selectedIndex).editors);
                    //        console.log(this.get('selected'));

                },
                actionOn: function(megaObject) {
                    var content = this.get("content");
                    console.log(megaObject);
                    console.log("owner_profile_id: " + megaObject.get("owner_profile_id"));
                    console.log("collection_id: " + megaObject.get("collection_id"));
                    //                 console.log(megaObject);
                    //      content.pushObject(megaObject);

                    //            setTimeout(function() {
                    var owner_profile_id = megaObject.get("owner_profile_id");
                    var collection_id = megaObject.get("collection_id");
                    //   this.set("temp" ,MegaModel.query({"collection_id": collection_id, "owner_profile_id": owner_profile_id}));
                    var data = MegaModel.query({"collection_id": collection_id, "owner_profile_id": owner_profile_id});
                    data.addObserver('isLoaded', function() {
                        if (data.get('isLoaded')) {
                            for (var i = 0; i < this.get("content").get("length"); i++) {
                                midcontent.pushObject((this.get("content").objectAt(i)));
                            }
                        }
                        console.log(midcontent.length);
                    });

//                    this.get("temp").one("didLoad", function() {
//                  //      console.log(this);
//              //          console.log(   this.get("temp").get("content").get("length"));
//                    });

                    this.set("isSelected", true);
                    console.log("done");
                },
                addObjects: function() {
                    console.log(this.get("temp").get("content").length);
                    console.log(this.get("temp").get("content").get("length"));

                }.observes('App.Mega.didLoad')




            });
            return MegaController;
        });
