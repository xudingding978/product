
HubStar.PdfUploaderController = Ember.ObjectController.extend({
    needs: ["profilePdf", "applicationFeedback", 'profile', 'megaCreate'],
    pdfArray: [],
//    newPdfName: null,
//    newPdfSource: null,
//    newPdfCover: 'http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=499&w=300&tabid=101&h=0',
//    newPdfDesc: null,
    profileMega: null,
    pdfInfromationEdit: false,
    init: function() {
        this.setMega();
    },
    cancel: function() {
        this.reset();
        var profilePdf = this.get('controllers.profilePdf');
        profilePdf.pdfCreateModeSwitch();
    },
    closeUploader: function() {
        console.log('close');
         this.get('controllers.profilePdf').set('is_pdf_create_mode', false);
         this.set('pdfInfromationEdit', false);
         this.reset();
         this.transitionTo("profilePdf");
    //     $("#pdfUploaderData").attr("style","position: relative; bottom: 540px;background-color: white; height: auto; z-index: 99; width: 600px; line-height: 20px;");
    },
    modifyDetail: function(param) {
       console.log('show');
       $('#'+param).slideToggle(1000);
    },
    changeCover: function(param) {
        console.log(param);
    },
    profileStyleImageDrop: function(e, name)
    {
        var target = getTarget(e, "single");
        console.log(target);
        var src = target.result;
        var pdf = HubStar.Pdf.createRecord({
            'pdf_cover_image': "http://shop.trendsideas.co.nz/DesktopModules/NB_Store/makethumbnail.ashx?Image=499&w=300&tabid=101&h=0", 'pdf_title': name.split('.')[0],
            'pdf_desc': "", 'pdf_url': src, 'pdf_profile_id': this.get('controllers.profile').get('model').get('id')
        });
        this.get("pdfArray").pushObject(pdf);
//        this.set('newPdfSource',src);
//        this.set('newPdfName',name);
        console.log(name);
        console.log(src);
  //    $('#pdfUploaderContent').attr("style","display:none;");
      $("#pdfUploaderData").attr("style","position: relative; bottom: 540px;background-color: white; height: auto; z-index: 100; width: 600px; line-height: 20px;");
        this.set('pdfInfromationEdit', true);
        
    },
    reset: function() {
        this.set('pdfArray', []);
    },
    submit: function() {
       for (var i=0; i < this.get('pdfArray').get('length'); i ++){
           this.get('pdfArray').objectAt(i).store.save();
       }
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
