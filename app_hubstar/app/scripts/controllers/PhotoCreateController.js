
HubStar.PhotoCreateController = Ember.ArrayController.extend({
    content: [],
    newMegas: [],
    mode: null,
    filesNumber: null,
    profileMega: null,
    uploadOrsubmit: false,
    fileSize: null,
    collection_id: "",
    needs: ['profile', 'masonryCollectionItems', 'photoCreateInfoSetting', 'megaCreate', 'applicationFeedback'],
    actions: {
        back: function()
        {
            HubStar.set('isNewUpload', true);

            this.set("filesNumber", 0);
            $('#dragAndDroppArea').attr('style', "display:none");
            var masonryCollectionItems = this.get('controllers.masonryCollectionItems');

            masonryCollectionItems.send("back");
        }
    },
    init: function() {
        this.setMega();
    },
    fileChecking: function(filesLength) {
        HubStar.set("totalFiles", 0);
        HubStar.set("photoIds", "");

        this.set("filesNumber", this.get("filesNumber") + filesLength);

    },
    commitFiles: function(evt) {
        $('#dragAndDroppArea').attr('style', "display:block");
        var input = evt.target;
        var files = input.files;
        var that = this;
        this.fileChecking(files.length);
        this.checkingCleanBeforeUpload();
        for (var i = 0; i < files.length; i++) {
            (function(file) {
                var name = file.name;
                var type = file.type;
                var fileSize = file.size;
                var reader = new FileReader();
                reader.onload = function(e) {
                    if (fileSize >= 25000000)
                    {
                        that.get('controllers.applicationFeedback').statusObserver(null, "The limit size of uploading is 25MB");
                    }
                    else if (type !== undefined && type !== null) {
                        var t = type.split("/")[1];
                        if (t === "bmp" || t === "gif" || t === "jpg" || t === "jpeg" || t === "png")
                        {
                            that.addPhotoObject(e, name, type, fileSize);
                        }
                        else
                        {
                            that.get('controllers.applicationFeedback').statusObserver(null, "Undefined Format");
                        }
                    }
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
            evt.preventDefault();
        }
    },
    photoUpload: function()
    {
        HubStar.set('isNewUpload', false);
        var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
        this.set("fileSize", 0);
        masonryCollectionItems.photoUpload();
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
    setFileSize: function(size)
    {
        var fileSize = this.get("fileSize");
        var addPhoto = true;

        if ((fileSize === null) || (fileSize === "undefined") || (fileSize === "NaN"))
        {
            this.set("fileSize", size);
        }
        else
        {
            if (fileSize + size > 25000000)
            {
                addPhoto = false;
            }
            else
            {
                this.set("fileSize", size + fileSize);
            }
        }
        fileSize = this.get("fileSize");

        if ((fileSize <= 25000000) && (addPhoto === true))
        {
            return true;
        }
        else
        {
            return false;
        }
    },
    addPhotoObject: function(e, name, type, size) {
        if (this.setFileSize(size))
        {
            var photoName = name.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
            photoName = photoName.replace(/\s/g, '_');
            var testID = createGuid();
            var target = getTarget(e, "pural");
            var src = target.result;
            var MegaCreateController = this.get('controllers.megaCreate');
            var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, this.get('controllers.masonryCollectionItems').get('collection_id'), 'photo');
            var keywords = this.get("profileMega").get("profile_keywords");
            var file = HubStar.Photo.createRecord({
                "id": testID,
                "photo_title": photoName.toLowerCase(),
                "photo_source_id": photoName.toLowerCase().replace(/\./g, "_"),
                "photo_image_original_url": src,
                "photo_file_name": photoName.toLowerCase(),
                "photo_caption": "",
                "photo_type": type,
                "photo_keywords": keywords});
            mega.get("photo").pushObject(file);

            var that = this;
            mega.addObserver('isSaving', function() {

                if (mega.get('isSaving')) {
                    $('#' + file.get('id')).css("display", "block");
                }
                else {

                    HubStar.set("totalFiles", HubStar.get("totalFiles") + 1);

                    if (HubStar.get("photoIds") === "")
                    {
                        HubStar.set("photoIds", HubStar.get("photoIds") + testID.split("test")[1]);
                    }
                    else {
                        HubStar.set("photoIds", HubStar.get("photoIds") + "," + testID.split("test")[1]);
                    }

                    $('.' + file.get('photo_source_id')).attr("style", "display:none");

                    if (HubStar.get("totalFiles") === that.get("filesNumber")) {
                        var masonryCollectionItems = that.get('controllers.masonryCollectionItems');
                        var photoCreateInfoSettingController = that.get('controllers.photoCreateInfoSetting');
                        HubStar.set('UploadImageInfoData', masonryCollectionItems.get("uploadImageContent"));
                        that.set("filesNumber", 0);

                        photoCreateInfoSettingController.setData();
                        photoCreateInfoSettingController.set('isEditingMode', true);
                        that.saveToCollection(that.get('controllers.masonryCollectionItems').get('collection_id'), HubStar.get("photoIds"));

                        masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));

                        that.set("fileSize", 0);
                    }
                }
            });
            var masonryCollectionItemsController = this.get('controllers.masonryCollectionItems');
            masonryCollectionItemsController.get("uploadImageContent").addObject(mega);
            masonryCollectionItemsController.set("createTime", "" + new Date());
        }
        else
        {
            addPhoto = true;
            this.back();
            alert("The limit size of uploading is 25MB");
        }
    },
    checkingCleanBeforeUpload: function() {

        if (HubStar.get('isNewUpload')) {
            this.set('content', []);
            HubStar.set('isNewUpload', false);
        }
    },
    saveToCollection: function(collecitonId, testID)
    {
        var profile = this.get("profileMega");
        var collection;
        for (var i = 0; i < profile.get("collections").get("length"); i++)
        {
            if (collecitonId === profile.get("collections").objectAt(i).get("id")) {
                collection = profile.get("collections").objectAt(i);
                break;
            }
        }
        this.addCollection(collection, testID);
        var photoCreateInfoSettingController = this.get('controllers.photoCreateInfoSetting');
        photoCreateInfoSettingController.set("collection", collection);
        HubStar.set("photoIds", "");
    },
    addCollection: function(collection, photoId)
    {
        var data;
        if (HubStar.get('selectedCollection') !== undefined && HubStar.get('selectedCollection') !== null && HubStar.get('selectedCollection').id === collection.get("id"))
        {
            var content = HubStar.get('selectedCollection').collection_ids;
            if (content === null || content === undefined || content === "") {
                data = JSON.stringify([HubStar.get('selectedCollection').id, HubStar.get('selectedCollection').optional, photoId]);
                requiredBackEnd('collections', 'savePhotoCollection', data, 'POST', function(params) {
                    if (collection.get("collection_ids") === null || collection.get("collection_ids") === undefined || collection.get("collection_ids") === "") {
                        collection.set("collection_ids", params);
                    }
                    else {
                        collection.set("collection_ids", params);
                    }
                    collection.set("updated_at", new Date());
                    HubStar.get('selectedCollection').collection_ids = collection.get("collection_ids");
                    collection.save();
                });
            }
            else {
                data = JSON.stringify([collection.get("id"), collection.get("optional"), photoId]);
                requiredBackEnd('collections', 'savePhotoCollection', data, 'POST', function(params) {
                    if (collection.get("collection_ids") === null || collection.get("collection_ids") === undefined || collection.get("collection_ids") === "") {
                        collection.set("collection_ids", params);
                    }
                    else {
                        collection.set("collection_ids", params);
                    }
                    collection.set("updated_at", new Date());
                    HubStar.get('selectedCollection').collection_ids = collection.get("collection_ids");
                    collection.save();
                });
            }
        }
        else {
            data = JSON.stringify([collection.get("id"), collection.get("optional"), photoId]);
            requiredBackEnd('collections', 'savePhotoCollection', data, 'POST', function(params) {
                if (collection.get("collection_ids") === null || collection.get("collection_ids") === undefined || collection.get("collection_ids") === "") {
                    collection.set("collection_ids", params);
                }
                else {
                    collection.set("collection_ids", params);
                }
                collection.set("updated_at", new Date());
                collection.save();
            });
        }
    }
});

HubStar.PhotoCreateController.cancel = function(event) {
    event.preventDefault();
    return false;
};

HubStar.PhotoCreateController.Droppable = Ember.Mixin.create(HubStar.PhotoCreateController, {
    dragEnter: HubStar.PhotoCreateController.cancel,
    dragOver: HubStar.PhotoCreateController.cancel
});
