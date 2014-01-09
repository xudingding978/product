
HubStar.PdfUploaderController = Ember.ObjectController.extend({
    needs: ["profilePdf", "applicationFeedback", 'profile', 'megaCreate'],
    newPdfName: null,
    newPdfSource: null,
    newPdfCover: null,
    newPdfDesc: null,
    profileMega: null,
    pdfInfromationEdit: false,
    init: function() {
        this.setMega();
    },
    canel: function() {
        this.reset();
        var profilePdf = this.get('controllers.profilePdf');
        profilePdf.pdfCreateModeSwitch();
    },
//    getVideoFromYoutube: function()
//    {
//
//        this.set('videoid', this.getVideoId());
//        var that = this;
//
//        if (this.get('videoid') !== null) {
//            $.ajax({
//                url: "http://gdata.youtube.com/feeds/api/videos/" + this.get('videoid') + "?v=2&alt=jsonc",
//                type: 'get',
//                success: function(feedback) {
//                    that.set('videoImg', feedback.data.thumbnail.hqDefault);
//                    that.set('videoTitle', feedback.data.title);
//                    that.set('videoDesc', feedback.data.description);
//                }, error: function() {
//                    that.set('videoid', null);
////                    console.log("some wrong with youtube id");
//                }
//            });
//        }
//    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        var src = target.result;
//        var that = this;
        this.set('newPdfSource',src);
        this.set('newPdfName',name);
        console.log(name);
        console.log(src);
        this.set('pdfInfromationEdit', true);
    },
    reset: function() {
        this.set('newPdfName', '');
        this.set('newPdfSource', '');
        this.set('newPdfCover', '');
        this.set('newPdfDesc', '');
    },
    addPdfObject: function(e, name, type, size) {
        if (size <= 25000000)
        {
            var pdfName = name.replace(/[)\(]/gi, '');
            pdfName = pdfName.replace(/\s/g, '_');
            var testID = createGuid();
            var target = getTarget(e, "pural");
            var src = target.result;
            var MegaCreateController = this.get('controllers.megaCreate');
            var mega = MegaCreateController.createNewMega(this.get("profileMega"), testID, this.get('controllers.masonryCollectionItems').get('collection_id'), 'photo');
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
    getVideoId: function() {
        var videoid = null;
        var videoUrl = this.get("videoUrl");
        var videoUrlObjects = videoUrl.split("&");
        videoUrl = videoUrlObjects[0];
        if (videoUrl.indexOf("http://www.youtube.com/") !== -1)
        {
            var tmpId = videoUrl.split("v=");
            videoid = tmpId[1];
        }
        else if (videoUrl.indexOf("http://youtu.be/") !== -1)
        {
            var tmpId = videoUrl.split("be/");
            videoid = tmpId[1];
        }

        return videoid;
    },
    getIframeCode: function(width, height, videoid)
    {
        var iframeCode = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + videoid + '" frameborder="0" allowfullscreen></iframe>';
        return iframeCode;
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
    }
});
