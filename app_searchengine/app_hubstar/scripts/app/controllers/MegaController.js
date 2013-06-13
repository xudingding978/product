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
                 
               //     setTimeout(function() {
                        var owner_profile_id = megaObject.get("owner_profile_id");
                        var collection_id = megaObject.get("collection_id");
                        tcontent = MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id});
                        console.log(tcontent);
                        this.addObjects(tcontent);

                },
                addObjects: function(tcontent) {
console.log("aaaaa");
console.log(tcontent.self);
                        for (var i = 0; i < tcontent.get("content").get("length"); i++) {
console.log(i);
                            this.content.pushObject(tcontent.get("content").objectAt(i));
                        }
                        this.isSelected = true;                    
                }




            });
            return MegaController;
        });
