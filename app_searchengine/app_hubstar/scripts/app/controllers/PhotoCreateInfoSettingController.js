define(["ember"], function(Ember) {
    var PhotoCreateInfoSettingController = Ember.Controller.extend({
        needs: ['masonryCollectionItems', 'photoCreate'],
        uploadedImage: "",
        //  content: [],
        photoInfo: [],
        isEditingMode: false,
        setData: function() {


            var content = App.get('UploadImageInfoData');

            //   console.log(this.get("content"));

            if (this.get("photoInfo") !== undefined)
            {
                this.set('photoInfo', []);

                var objectLength = content.get('length');
                for (var i = 0; i < objectLength; i++) {
                    var raw_id = content.objectAt(i).get('id');
                    raw_id = raw_id.replace("test", "");
                    this.get('photoInfo').pushObject({
                        id: raw_id,
                        url: content.objectAt(i).get('photo_image_original_url'),
                        title: content.objectAt(i).get('photo_title'),
                        caption: content.objectAt(i).get('photo_caption')
                    });
                    console.log(this.get('photoInfo'));

                }

            }
            console.log(this.get('isEditingMode'));
            this.set('isEditingMode', false);
        },
        submitPhotoInfo: function() {
            var objectLength = this.get("photoInfo").get('length');
            console.log(objectLength);
            for (var i = 0; i < objectLength; i++) {
                var data = this.get('photoInfo').objectAt(i);
                var photoInfo = App.Photo.find(data.id);
                this.photoSave(photoInfo, data);
            }
            
            this.finishUploadingAndInfo();
        },

        photoSave: function(photoInfo, data)

        {
            photoInfo.addObserver('isLoaded', function() {
                if (photoInfo.get('isLoaded')) {
                    photoInfo.set('photo_title', data.title);
                    photoInfo.set('photo_caption', data.caption);
                    photoInfo.store.save();
                }
            });
        },
        backToDragAndDrop: function() {

//            var photoCreate = this.get('controllers.photoCreate');
//            photoCreate.set('uploadOrsubmit', !photoCreate.get('uploadOrsubmit'));
            //     this.resetContent();
        },
        finishUploadingAndInfo: function() {
            var photoCreate = this.get('controllers.photoCreate');
            photoCreate.back();
        }
    });
    return PhotoCreateInfoSettingController;
});
