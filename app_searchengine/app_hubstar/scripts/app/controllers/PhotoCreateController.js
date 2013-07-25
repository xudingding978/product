define(["ember", "helper"],
        function(Ember) {
            var PhotoCreateController = Ember.ArrayController.extend({
                content: [],
                newMegas: [],
                mode: null,
                //      isNewUpload:false,
                filesNumber: null,
                profileMega: null,
                uploadOrsubmit: false,
                collection_id: "",
                needs: ['profile', 'masonryCollectionItems', 'photoCreateInfoSetting'],
                init: function() {
                    this.setMega();
                },
                fileChecking: function(filesLength) {
                    App.set("totalFiles", 0);
                    this.set("filesNumber", filesLength);

                },
                commitFiles: function(evt) {
                    $('#dragAndDroppArea').attr('style', "display:block");
                    var input = evt.target;
                    var files = input.files;
                    var that = this;
                    this.fileChecking(files.length);

                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            var name = file.name;
                            var type = file.type;
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                that.addPhotoObject(e, that, name, type);
                            }, reader.readAsDataURL(files[i]);
                        })(files[i]);
                        evt.preventDefault();
                    }
                },
                submit: function() {
                    App.store.commit();
                },
                back: function()
                {

                    App.set('isNewUpload', true);
                    $('#dragAndDroppArea').attr('style', "display:none");
                    var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
                    masonryCollectionItems.back();
                },
                setMega: function() {
                    var profileController = this.get('controllers.profile');
                    var tempmega = profileController.get("model");
                    var that = this;
                    that.set("profileMega", tempmega);
                    if (that.get("profileMega") === null) {
                        tempmega.addObserver('isLoaded', function() {
                            if (tempmega.get('isLoaded')) {
                                that.set("profileMega", tempmega);
                            }
                        });
                    }
                },
                createNewMega: function(ProfileMega, testID)
                {
                    var photoMega = App.Mega.createRecord({
                        "id": testID,
                        "accessed": ProfileMega.get("accessed"),
                        "boost": ProfileMega.get("boost"),
                        "owner_type": "profiles",
                        "is_active": false,
                        "region": ProfileMega.get("profile_regoin"),
                        "topic": null,
                        "type": "photo",
                        "category": ProfileMega.get("category"),
                        "creator": localStorage.loginStatus,
                        "country": ProfileMega.get("country"),
                        "collection_id": this.get('controllers.masonryCollectionItems').get('title'),
                        "deleted": null,
                        "domains": getDomain(),
                        "editors": "",
                        "geography": ProfileMega.get("country"),
                        "is_indexed": false,
                        "object_image_url": ProfileMega.get("object_image_url"),
                        "object_title": null,
                        "object_description": null,
                        "owner_profile_id": this.get("profileMega").id,
                        "owner_profile_pic": ProfileMega.get("profile_pic_url"),
                        "owner_title": ProfileMega.get("profile_name"),
                        "owner_url": ProfileMega.get("owner_url"),
                        "owners": ProfileMega.get("owners"),
                        "owner_id": ProfileMega.id,
                        "owner_contact_email": ProfileMega.get("owner_contact_email"),
                        "owner_contact_cc_emails": ProfileMega.get("owner_contact_cc_emails"),
                        "owner_contact_bcc_emails": ProfileMega.get("owner_contact_bcc_emails"),
                        "keywords": ProfileMega.get("profile_keywords"),
                        "status_id": null,
                        "uri_url": ProfileMega.get("uri_url"),
                        "view_count": null
                    });
                    return photoMega;
                }, addPhotoObject: function(e, that, name, type) {
                    var testID = createGuid();


                    var target = that.getTarget(e);
                    var src = target.result;
                    var mega = that.createNewMega(that.get("profileMega"), testID);
                    var file = App.Photo.createRecord({
                        "id": testID,
                        "photo_title": name.toLowerCase(),
                        "photo_source_id": name.toLowerCase().replace('.', "_"),
                        "photo_image_original_url": src,
                        "photo_file_name": name.toLowerCase(),
                        "photo_type": type,
                        "photo_keywords": that.get("profileMega").get("keywords")});
                    mega.get("photo").pushObject(file);
                    var thatP = this;
                    mega.addObserver('isSaving', function() {
                        if (mega.get('isSaving')) {
                            $('.' + file.get('photo_source_id')).attr("style", "display:block");
                        }
                        else {
                            App.set("totalFiles", App.get("totalFiles") + 1);
                            $('.' + file.get('photo_source_id')).attr("style", "display:none");

                            if (App.get("totalFiles") === thatP.get("filesNumber")) {
                                var masonryCollectionItems = thatP.get('controllers.masonryCollectionItems');

                                var photoCreateInfoSettingController = thatP.get('controllers.photoCreateInfoSetting');
                                App.set('UploadImageInfoData', that.get("content"));

                                photoCreateInfoSettingController.setData();
                                photoCreateInfoSettingController.set('isEditingMode', true);

                                masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
                            }
                        }
                    });
                    that.get("content").addObject(file);
                },
                getTarget: function(obj) {
                    var targ;
                    var e = obj;
                    if (e.target)
                        targ = e.target;
                    else if (e.srcElement)
                        targ = e.srcElement;
                    if (targ.nodeType === 3) // defeat Safari bug
                        targ = targ.parentNode;
                    return targ;
                },
                checkingCleanBeforeUpload: function() {

                    if (App.get('isNewUpload')) {
                        this.set('content', []);
                        App.set('isNewUpload', false);
                    }
                }


            });
            PhotoCreateController.cancel = function(event) {
                event.preventDefault();
                return false;
            };
            PhotoCreateController.Droppable = Ember.Mixin.create(PhotoCreateController, {
                dragEnter: PhotoCreateController.cancel,
                dragOver: PhotoCreateController.cancel,
                test: function() {

                }

            });


            return PhotoCreateController;
        });
