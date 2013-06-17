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
                megaResouce: null,
                temp: null,
                percentComplete: 0,
                test: "test",
                selected: null,
                isSelected: false,
                needs: ['photo'],
                photo_album_id: null,
                photo_thumb_id: null,
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
                    this.set("percentComplete", this.get('selected'));
                    this.set('megaResouce', MegaModel.find(this.get('selected').id)._data.attributes);
                    console.log(this.get('selected'));
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);
                    this.selectedImage(this.get('percentComplete').id);

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
                    this.set("percentComplete", this.get('selected'));
                    this.set('megaResouce', MegaModel.find(this.get('selected').id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);
                    this.selectedImage(this.get('percentComplete').id);
                },
                actionOn: function(megaObject) {
                    var data = MegaModel.find({"collection_id": megaObject.get("collection_id"), "owner_profile_id": megaObject.get("owner_profile_id")});
                    this.set("percentComplete", megaObject._data.hasMany.photo[0].data);
                    this.set('megaResouce', MegaModel.find(megaObject.id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);

                    this.selectedImage(megaObject.id);
                    //            console.log(this.get("percentComplete"));
                    data.addObserver('isLoaded', function() {
                        if (data.get('isLoaded')) {
                            for (var i = 0; i < this.get("content").get("length"); i++) {
                                if (this.get("content").objectAt(i).data.materialized) {
                                    midcontent.pushObject(this.get("content").objectAt(i).record._data.hasMany.photo[0].data);
                                    //       console.log(this.get("content"));

                                }
                                else {
                                    midcontent.pushObject(this.get("content").objectAt(i).data.photo[0]);
                                    //        console.log(this.get("content"));
                                }
                            }
                        }
                    });
                },
                selectImage: function(e) {

                    //               console.log(MegaModel.find(e)._data.attributes);

                    this.set('megaResouce', MegaModel.find(e)._data.attributes);
                    this.set('selected', MegaModel.find(e)._data.hasMany.photo[0].data);
                    this.set("percentComplete", this.get('selected'));



                    this.selectedImage(e);




                },
                addObjects: function() {
                    console.log('addobject');

                }.observes('isSelected'),
                selectedImage: function(id) {
                    var selectedImage_id = "#" + id;
                    $('.photo_original_style').removeClass('selected_image_style');
                    $(selectedImage_id).addClass('selected_image_style');

                }

            });
            return MegaController;
        });
