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
                    //                      console.log(this.get('selected'));
                    this.set("percentComplete", this.get('selected'));

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
                    //     console.log(this.get('selected'));

                    this.set("percentComplete", this.get('selected'));

                },
                actionOn: function(megaObject) {

                    var data = MegaModel.find({"collection_id": megaObject.get("collection_id"), "owner_profile_id": megaObject.get("owner_profile_id")});
                    var currentImage;
                    var checkMaterial;

                    this.set("percentComplete", megaObject._data.hasMany.photo[0].data);
                    console.log("aaaaaaaa");
                    console.log(this.get("percentComplete"));
                    data.addObserver('isLoaded', function() {
                        if (data.get('isLoaded')) {
                            for (var i = 0; i < this.get("content").get("length"); i++) {
                                if (i === 0 || i === this.get("content").get("length") - 1) {

                                    if (this.get("content").objectAt(i).id === megaObject.id) {
                                        currentImage = i;
                                        checkMaterial = true;

                                    } else {
                                        midcontent.pushObject(this.get("content").objectAt(i).record._data.hasMany.photo[0].data);
                                    }
                                } else {

                                    if (this.get("content").objectAt(i).id === megaObject.id) {
                                        currentImage = i;

                                    } else {
                                        midcontent.pushObject(this.get("content").objectAt(i).data.photo[0]);
                                    }
                                }
                            }
                            if (checkMaterial) {
                                midcontent.pushObject(this.get("content").objectAt(currentImage).record._data.hasMany.photo[0].data);
                            } else {
                                midcontent.pushObject(this.get("content").objectAt(currentImage).data.photo[0]);
                            }
                        }

                    });

                },
                addObjects: function() {
                    console.log("addObjects");

                }.observes('isSelected')
            });
            return MegaController;
        });
