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
                selectedMega: null,
                isSelected: false,
                needs: ['application', 'addCollection'],
                currentUser: null,
                photo_album_id: null,
                photo_thumb_id: null,
                findSelectedItemIndex: function() {
                    content = this.get('content');
                    for (var index = 0; index <= content.get('length'); index++) {
                        if (this.get('selectedMega') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {
                    if (!this.get('selectedMega')) {
                        this.set('selectedMega', this.get('content').get('lastObject'));
                    }
                    selectedIndex--;
                    var selectedIndex = this.findSelectedItemIndex();
                    if (selectedIndex < 0) {
                        selectedIndex = this.get('content').get('length');
                        this.set('image_no', this.get('content').get('length'));
                    }
                    this.set('selectedMega', this.get('content').objectAt(selectedIndex));
                    this.set('megaResouce', MegaModel.find(this.get('selectedMega').id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('selectedMega').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('selectedMega').id);
                    this.selectedImage(this.get('selectedMega').id);
                },
                nextImage: function() {
                    if (!this.get('selectedMega')) {
                        this.set('selectedMega', this.get('content').get('firstObject'));
                    }
                    var selectedIndex = this.findSelectedItemIndex();
                    selectedIndex++;
                    if (selectedIndex >= (this.get('content').get('length'))) {
                        this.set('image_no', 1);
                        selectedIndex = 0;
                    }
                    this.set('image_no', selectedIndex + 1);
                    this.set('selectedMega', this.get('content').objectAt(selectedIndex));
                    this.set('megaResouce', MegaModel.find(this.get('selectedMega').id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('selectedMega').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('selectedMega').id);
                    this.selectedImage(this.get('selectedMega').id);
                },
                getInitData: function(megaObject) {
                    this.set("currentUser", App.User.find(localStorage.loginStatus));
                    this.set("content", []);
                    this.set("selectedMega", megaObject._data.hasMany.photo[0].data);
                    this.get("content").pushObject(megaObject._data.hasMany.photo[0].data);
                    this.set('megaResouce', MegaModel.find(megaObject.id)._data.attributes);
                    this.set("photo_album_id", "album_" + this.get('selectedMega').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('selectedMega').id);
                    this.addRelatedData(megaObject);
                    this.getCommentsById(megaObject.id);
                },
                selectImage: function(e) {
                    this.set('megaResouce', MegaModel.find(e)._data.attributes);
                    this.set('selectedMega', MegaModel.find(e)._data.hasMany.photo[0].data);
                    this.set("selectedMega", this.get('selectedMega'));
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
                switchCollection: function() {
                    var addCollectionController = this.get('controllers.addCollection');
                    var selectid = this.get('selectedMega').id;
                    addCollectionController.setImageID(selectid);
                    addCollectionController.setUser();
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
                addComment: function() {
                    var commentContent = this.get('commentContent');
                    if (commentContent) {
                        var comments = this.get("thisComments");
                        var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
                        var commenter_id = this.get("currentUser").get('id');

                        var name = this.get("currentUser").get('display_name');
                        var date = new Date();
                        var tempComment = App.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                            "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(), "is_delete": false});
                        comments.pushObject(tempComment);
                        comments.store.save();
                        this.set('commentContent', '');
                        $('#addcommetBut').attr('style', 'display:block');
                        $('#commentBox').attr('style', 'display:none');



                    }

                },
                getCommentsById: function(id)
                {
                    console.log(id);
                    var mega = App.Mega.find(id);
                    var comments = mega.get('comments');
                    this.set('thisComments', comments);
                }
            });
            return MegaController;
        });
