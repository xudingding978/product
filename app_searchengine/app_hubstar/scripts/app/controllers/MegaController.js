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
                megaResouce: null,
                temp: null,
                image_no: 1,
                percentComplete: 0,
                selected: null,
                isSelected: false,
                needs: ['photo', 'application'],
                currentUser: null,
                photo_album_id: null,
                photo_thumb_id: null,
                findSelectedItemIndex: function() {
                    content = this.get('content');
                    for (var index = 0; index <= content.get('length'); index++) {
                        if (this.get('selected') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {
                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('lastObject'));
                    }
                    selectedIndex--;
                    var selectedIndex = this.findSelectedItemIndex();
                    if (selectedIndex < 0) {
                        selectedIndex = this.get('content').get('length');
                        this.set('image_no', this.get('content').get('length'));
                    }
                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    this.set("percentComplete", this.get('selected'));
                    this.set('megaResouce', MegaModel.find(this.get('selected').id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);
                    this.selectedImage(this.get('percentComplete').id);
                },
                nextImage: function() {
                    if (!this.get('selected')) {
                        this.set('selected', this.get('content').get('firstObject'));
                    }
                    var selectedIndex = this.findSelectedItemIndex();
                    selectedIndex++;
                    if (selectedIndex >= (this.get('content').get('length'))) {
                        this.set('image_no', 1);
                        selectedIndex = 0;
                    }
                    this.set('image_no', selectedIndex + 1);
                    this.set('selected', this.get('content').objectAt(selectedIndex));
                    this.set("percentComplete", this.get('selected'));
                    this.set('megaResouce', MegaModel.find(this.get('selected').id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);
                    this.selectedImage(this.get('percentComplete').id);
                },
                getInitData: function(megaObject) {

                    this.set("content", []);
                    this.set("percentComplete", megaObject._data.hasMany.photo[0].data);
                    this.get("content").pushObject(megaObject._data.hasMany.photo[0].data);
                    this.set('megaResouce', MegaModel.find(megaObject.id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('percentComplete').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('percentComplete').id);
                    this.addRelatedData(megaObject);
                },
                selectImage: function(e) {
                    this.set('megaResouce', MegaModel.find(e)._data.attributes);
                    this.set('selected', MegaModel.find(e)._data.hasMany.photo[0].data);
                    this.set("percentComplete", this.get('selected'));
                    this.selectedImage(e);
                },
                selectedImage: function(id) {
                    var selectedImage_id = "#" + id;
                    $('.photo_original_style').removeClass('selected_image_style');
                    $(selectedImage_id).addClass('selected_image_style');
                },
                addRelatedData: function(mega)
                {
                    var collection_id = mega.get("collection_id");
                    var owner_profile_id = mega.get("owner_profile_id");
                    var isProfileIDExist = this.isParamExist(owner_profile_id);
                    var isCollectionIDExist = this.isParamExist(collection_id);
                    var that = this;
                    if (isProfileIDExist && isCollectionIDExist) {
                        var data = MegaModel.find({"collection_id": collection_id, "owner_profile_id": owner_profile_id});
                        data.addObserver('isLoaded', function() {
                            if (data.get('isLoaded')) {
                                for (var i = 0; i < this.get("content").length; i++) {
                                    var id = this.get("content").objectAt(i).id;
                                    if (MegaModel.find(id)._data.hasMany.photo.length === 1)
                                    {
                                        that.get("content").pushObject(MegaModel.find(id)._data.hasMany.photo[0].data);
                                    }
                                }
                            }
                        });
                    }
                },
                isParamExist: function(param)
                {
                    var result = (param !== null && param !== undefined);
                    return result;
                },
                addCollection: function() {
                    this.set('collectable', !this.get('collectable'));
                },
                closeWindow: function() {
                    this.set('collectable', false);
                    this.set('contact', false);
                    window.history.back();
                },
                editingContact: function() {
                    this.set('contact', !this.get('contact'));
                },
                closeContact: function() {
                    this.set('contact', !this.get('contact'));
                },
            });
            return MegaController;
        });
