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
            var tcontent;
            var MegaController = Ember.ArrayController.extend({
                content: [],
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
                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('lastObject'));
                    }
                    var selectedIndex = this.findSelectedItemIndex();

                    if (selectedIndex <= 0) {
                        selectedIndex = this.get('content').get('length') - 1;
                    } else {
                        selectedIndex--;
                    }

                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    console.log(this.get('selected'));



                },
                nextImage: function() {

                    this.addObjects();

                    if (!this.get('selected')) {

                        this.set('selected', this.get('content').get('firstObject'));

                    }

                    var selectedIndex = this.findSelectedItemIndex();
                    if (selectedIndex >= (this.get('content').get('length') - 1)) {

                        selectedIndex = 0;
                    } else {
                        selectedIndex++;

                    }
                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    console.log(this.get('selected'));

                },
                actionOn: function(megaObject) {
                    var content = this.get("content");

                    console.log(megaObject);
                    //     content.pushObject(megaObject);
                    setTimeout(function() {
                        var owner_profile_id = megaObject.get("owner_profile_id");
                        var collection_id = megaObject.get("collection_id");
                        tcontent = MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id});



//                        tcontent.one("didLoad", function() {
//                            tcontent.resolve(tcontent.get("firstObject"));
//                        });
                    }, 200);
                },
                imgReturn: function() {
                    //     console.log(this.get("content").get("length"));
                }.observes('selected'),
                addObjects: function() {

                    if (!this.isSelected)
                    {

                        for (var i = 0; i < tcontent.get("content").get("length"); i++) {
                            //    this.content.pushObject(tcontent);
                            this.content.pushObject(tcontent.get("content").objectAt(i));
                        }
                        this.isSelected = true;
                    }

                }




            });
            return MegaController;
        });
