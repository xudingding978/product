
HubStar.PhotoCreateInfoSettingController = Ember.Controller.extend({
    needs: ['masonryCollectionItems', 'photoCreate'],
    uploadedImage: "",
    //  content: [],
    photoInfo: [],
    isEditingMode: false,
    init: function() {

    },
    setData: function() {
        var content = HubStar.get('UploadImageInfoData');
        if (this.get("photoInfo") !== undefined)
        {
            this.set('photoInfo', []);

            var objectLength = content.get('length');
            for (var i = 0; i < objectLength; i++) {
                var raw_id = content.objectAt(i).get('id');
                raw_id = raw_id.replace("test", "");

                this.get('photoInfo').pushObject({
                    id: raw_id,
                    url: content.objectAt(i).get("photo").objectAt(0).get('photo_image_original_url'),
                    filename: content.objectAt(i).get("photo").objectAt(0).get('photo_file_name'),
                    title: content.objectAt(i).get("photo").objectAt(0).get('photo_title'),
                    caption: content.objectAt(i).get("photo").objectAt(0).get('photo_caption')
                            //keywords: content.objectAt(i).get("photo").objectAt(0).get('photo_keywords')
                });
            }
        }
        this.get('controllers.masonryCollectionItems').reLayout();
        this.set('isEditingMode', false);
    },
    submitPhotoInfo: function() {
        var that = this;
        var objectLength = this.get("photoInfo").get('length');
        this.set("photoLength", 0);
        for (var i = 0; i < objectLength; i++) {
            var data = this.get('photoInfo').objectAt(i);
            var photoInfo = HubStar.Photo.find(data.id);
            that.photoSave(photoInfo, data);
        }


//        setTimeout(function() {
//            
//        }, objectLength * 500);

    },
    photoSave: function(photoInfo, data)
    {
        var objectLength = this.get("photoInfo").get('length');
        if (data.caption === undefined)
        {
            data.caption = null;
        }
        var that = this;
        photoInfo.then(function() {
            photoInfo.set('photo_title', data.title);
            photoInfo.set('photo_caption', data.caption);
            //photoInfo.set('photo_keywords', data.keywords);
            photoInfo.save();
            that.set("photoLength", that.get("photoLength") + 1);
            if (that.get("photoLength") === objectLength)
            {
                var url = photoInfo.get('photo_image_original_url');
                var defaulturl = "https://s3-ap-southeast-2.amazonaws.com/develop.devbox/Defaultcollection-cover.png";
                var currentCover=that.get("collection").get("cover");
                if (currentCover === defaulturl) {
                    that.get("collection").set("cover", url);
                    var a = that.get("collection").save();
                    that.get("collection").get("isSaving");
                    a.then(function() {
                        that.finishUploadingAndInfo();
                    });
                } else {
                    that.finishUploadingAndInfo();
                }
            }
        });
    },
    backToDragAndDrop: function() {
        this.finishUploadingAndInfo();
        var masonryCollectionItems = this.get('controllers.masonryCollectionItems');

        masonryCollectionItems.newUpload();
        setTimeout(function() {
            $('#masonry_container').masonry("reloadItems");
            setTimeout(function() {
                $('#masonry_container').masonry();
            }, 200);
        }, 250);

    },
    finishUploadingAndInfo: function() {
        var photoCreate = this.get('controllers.photoCreate');
        photoCreate.back();
    }
});
