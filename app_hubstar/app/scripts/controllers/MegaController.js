/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

            HubStar.MegaController = Ember.ArrayController.extend({
                content: [],
                megaResouce: null,
                temp: null,
                image_no: 1,
                selectedPhoto: null,
                isSelected: false,
                needs: ['application', 'addCollection', 'contact', 'permission'],
                currentUser: null,
                photo_album_id: null,
                photo_thumb_id: null,
                is_authentic_user: false,
                findSelectedItemIndex: function() {
                    content = this.get('content');
                    for (var index = 0; index <= content.get('length'); index++) {
                        if (this.get('selectedPhoto') === content.objectAt(index)) {
                            return index;
                        }
                    }
                    return 0;
                },
                previesImage: function() {
                    if (!this.get('selectedPhoto')) {
                        this.set('selectedPhoto', this.get('content').get('lastObject'));
                    }

                    var selectedIndex = this.findSelectedItemIndex();
                    selectedIndex--;
                    if (selectedIndex < 0) {
                        selectedIndex = this.get('content').get('length') - 1;
                        this.set('image_no', this.get('content').get('length'));
                    }
                    this.set('image_no', selectedIndex + 1);
                    this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
                    this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
                    this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
                    this.selectedImage(this.get('selectedPhoto').id);
                },
                nextImage: function() {
                    if (!this.get('selectedPhoto')) {
                        this.set('selectedPhoto', this.get('content').get('firstObject'));
                    }
                    var selectedIndex = this.findSelectedItemIndex();
                    selectedIndex++;
                    if (selectedIndex >= (this.get('content').get('length'))) {
                        this.set('image_no', 1);
                        selectedIndex = 0;
                    }
                    this.set('image_no', selectedIndex + 1);
                    this.set('selectedPhoto', this.get('content').objectAt(selectedIndex));
                    this.set('megaResouce', HubStar.Mega.find(this.get('selectedPhoto').id));
                    this.set("photo_album_id", "album_" + this.get('selectedPhoto').id);
                    this.set("photo_thumb_id", "thumb_" + this.get('selectedPhoto').id);
                    this.selectedImage(this.get('selectedPhoto').id);
                },
                getInitData: function(megaObject) {
                    var photoObj = megaObject.get('photo').objectAt(0);
                    this.set("currentUser", HubStar.User.find(localStorage.loginStatus));
                    this.set("content", []);
                    this.set('image_no', 1);
                    this.set("selectedPhoto", photoObj);
                    this.get("content").pushObject(photoObj);
                    var megaResouce = HubStar.Mega.find(megaObject.id);
                    this.set('megaResouce', megaResouce);
                    this.set("photo_album_id", "album_" + megaObject.id);
                    this.set("photo_thumb_id", "thumb_" + megaObject.id);
                    this.addRelatedData(megaObject);
                    this.checkAuthenticUser();
                    this.getCommentsById(megaObject.id);
                },
                selectImage: function(e) {

                    this.set('megaResouce', HubStar.Mega.find(e));
                    this.set('selectedPhoto', HubStar.Mega.find(e).get('photo').objectAt(0));
                    this.set("selectedPhoto", this.get('selectedPhoto'));
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
                    var owner_profile_id = mega.get("owner_id");
                    var isProfileIDExist = this.isParamExist(owner_profile_id);
                    var isCollectionIDExist = this.isParamExist(collection_id);
                    var that = this;
                    if (isProfileIDExist && isCollectionIDExist) {
                        var data = HubStar.Mega.find({RequireType: "collection", "collection_id": collection_id, "owner_profile_id": owner_profile_id});
                        data.addObserver('isLoaded', function() {
                            if (data.get('isLoaded')) {
                                for (var i = 0; i < this.get("content").length; i++) {
                                    var id = this.get("content").objectAt(i).id;
                                    if (HubStar.Mega.find(id).get('photo').get('length') === 1 && mega.get('id') !== id)
                                    {
                                        that.get("content").pushObject(HubStar.Mega.find(id).get("photo").objectAt(0));
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
                    var selectid = this.get('selectedPhoto').id;
                    addCollectionController.setImageID(selectid);
                    var tempUrl = this.get('selectedPhoto').get('photo_image_thumbnail_url');
                    addCollectionController.setThumbnailUrl(tempUrl);
                    addCollectionController.setUser();
                    this.set('collectable', !this.get('collectable'));
                },
                closeWindow: function() {
                    this.set('collectable', false);
                    this.set('contact', false);
                    window.history.back();
                },
                editingContactForm: function() {
                    var contactController = this.get('controllers.contact');
                    var selectid = this.get('selectedPhoto').id;
                    contactController.setSelectedMega(selectid);
                    contactController.selectionCheckBox();
                    this.set('contact', !this.get('contact'));
                },
                closeContact: function() {
                    this.set('contact', false);
                },
                addComment: function() {
                    var commentContent = this.get('commentContent');
                    if (commentContent) {


                        var comments = this.get('megaResouce').get('comments');
                        var commenter_profile_pic_url = this.get("currentUser").get('photo_url');
                        var commenter_id = this.get("currentUser").get('id');
                        var name = this.get("currentUser").get('display_name');
                        var date = new Date();
                        var tempComment = HubStar.Comment.createRecord({"commenter_profile_pic_url": commenter_profile_pic_url,
                            "commenter_id": commenter_id, "name": name, "content": commentContent, "time_stamp": date.toString(),
                            "is_delete": false, optional: this.get('megaResouce').get('type') + '/' + this.get('megaResouce').get('id')});
                        comments.insertAt(0, tempComment);
                        comments.store.save();


                        this.set('commentContent', '');
                        $('#addcommetBut').attr('style', 'display:block');
                        $('#commentBox').attr('style', 'display:none');
                    }
                },
                getCommentsById: function(id)
                {
                    var mega = HubStar.Mega.find(id);
                    var comments = mega.get('comments');
                    this.set('thisComments', comments);
                },
                editingPhotoMegaData: function() {
                    this.set('enableToEdit', !this.get('enableToEdit'));

                },
                yes: function(photoObject) {
                    var photo_title = this.get('selectedPhoto.photo_title');
                    var photo_caption = this.get('selectedPhoto.photo_caption');
                    photoObject.set('photo_title', photo_title);
                    photoObject.set('photo_caption', photo_caption);
                    photoObject.store.save();
                    this.set('enableToEdit', !this.get('enableToEdit'));
                },
                no: function() {
                    this.set('enableToEdit', !this.get('enableToEdit'));
                },
                checkAuthenticUser: function() {
                    var currentUser = HubStar.User.find(localStorage.loginStatus);
                    var current_user_email = currentUser.get('email');
                    var permissionController = this.get('controllers.permission');
                    var that = this;
                    var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("model").get("editors"), current_user_email);
                    that.set("is_authentic_user", is_authentic_user);
                    currentUser.addObserver('isLoaded', function() {
                        var current_user_email = currentUser.get('email');
                        if (currentUser.get('isLoaded')) {
                            var is_authentic_user = permissionController.checkAuthenticUser(that.get("megaResouce").get("owner_contact_email"), that.get("model").get("editors"), current_user_email);
                            that.set("is_authentic_user", is_authentic_user);
                        }
                    });


                }
            });