
HubStar.PhotoCreateController = Ember.ArrayController.extend({
    content: [],
    newMegas: [],
    mode: null,
    filesNumber: null,
    profileMega: null,
    uploadOrsubmit: false,
    fileSize: null,
    collection_id: "",
    needs: ['profile', 'masonryCollectionItems', 'photoCreateInfoSetting'],
    init: function() {
        this.setMega();
    },
    fileChecking: function(filesLength) {
        HubStar.set("totalFiles", 0);
        this.set("filesNumber", filesLength);

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
                    that.addPhotoObject(e, name, type, fileSize);
                }, reader.readAsDataURL(files[i]);
            })(files[i]);
            evt.preventDefault();
        }
    },
    back: function()
    {
        HubStar.set('isNewUpload', true);
        $('#dragAndDroppArea').attr('style', "display:none");
        var masonryCollectionItems = this.get('controllers.masonryCollectionItems');

        masonryCollectionItems.back();
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
    createNewMega: function(ProfileMega, testID)
    {

        var photoMega = HubStar.Mega.createRecord({
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
            "collection_id": this.get('controllers.masonryCollectionItems').get('collection_id'),
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

    },
    setFileSize: function(size)
    {
        var fileSize = this.get("fileSize");
        var addPhoto = true;
        //  console.log(fileSize+"size");
        if ((fileSize === null) || (fileSize === "undefined") || (fileSize === "NaN"))
        {
            this.set("fileSize", size);
        }
        else
        {
            if (fileSize + size > 25000000)
            {
                addPhoto = false;
                //  alert("please select a small image");
            }
            else
            {
                this.set("fileSize", size + fileSize);
            }
        }
        fileSize = this.get("fileSize");

        //   console.log(fileSize+"sdfdsf");

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
            var photoName = name.replace(/[)\(]/gi, ''); 
            photoName = photoName.replace(/\s/g,'_');    
            var testID = createGuid();
            var target = getTarget(e, "pural");
            var src = target.result;
            var mega = this.createNewMega(this.get("profileMega"), testID);
            console.log(testID);
            var keywords = this.get("profileMega").get("profile_keywords");
            var file = HubStar.Photo.createRecord({
                "id": testID,
                "photo_title": photoName.toLowerCase(),
                "photo_source_id": photoName.toLowerCase().replace('.', "_"),
                "photo_image_original_url": src,
                "photo_file_name": photoName.toLowerCase(),
                "photo_type": type,
                "photo_keywords": keywords});
            mega.get("photo").pushObject(file);
            var that = this;      
            mega.addObserver('isSaving', function() {
                if (mega.get('isSaving')) {
                    $('.' + file.get('photo_source_id')).attr("style", "display:block");
                }
                else {
                    HubStar.set("totalFiles", HubStar.get("totalFiles") + 1);
                    $('.' + file.get('photo_source_id')).attr("style", "display:none");
                    if (HubStar.get("totalFiles") === that.get("filesNumber")) {
                        var masonryCollectionItems = that.get('controllers.masonryCollectionItems');
                        var photoCreateInfoSettingController = that.get('controllers.photoCreateInfoSetting');
                        HubStar.set('UploadImageInfoData', masonryCollectionItems.get("uploadImageContent"));
                        photoCreateInfoSettingController.setData();
                        photoCreateInfoSettingController.set('isEditingMode', true);
                        masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
                        this.set("fileSize", 0);

                    }
                }
            });
            var masonryCollectionItemsController = this.get('controllers.masonryCollectionItems');
            masonryCollectionItemsController.get("uploadImageContent").addObject(file);
        }
        else
        {
            addPhoto = true;
            alert("The limit size of uploading is 25MB");
        }
    },
    checkingCleanBeforeUpload: function() {

        if (HubStar.get('isNewUpload')) {
            this.set('content', []);
            HubStar.set('isNewUpload', false);
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
