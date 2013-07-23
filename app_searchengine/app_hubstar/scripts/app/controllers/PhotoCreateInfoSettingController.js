define(["ember"], function(Ember) {
    var PhotoCreateInfoSettingController = Ember.Controller.extend({
        needs: ['masonryCollectionItems'],
        uploadedImage: "",
        content: [],
        init: function() {
            // this.set('content', []);
            if (this.get("content").objectAt(0) !== undefined)
            {


                var objectLength = this.get("content").get('length');

                for (var i = 0; i < objectLength; i++) {

                    console.log(this.get("content").objectAt(i).get('photo_image_original_url'));
                }




            }

//            this.set("uploadedImage", App.get("UploadedImage"));
//            this.set("uploadedImage", this.get("uploadedImage").substring(1, this.get("uploadedImage").length));
//
//
//            var data = App.Mega.find({RequireType: "uploadPhotoIDs", "uploadPhotoIDs": this.get("uploadedImage")});
//            var that = this;
//            data.addObserver('isLoaded', function() {
//                that.checkAuthenticUser();
//                if (data.get('isLoaded')) {
//                    for (var i = 0; i < data.get("length"); i++) {
//                        var tempmega = data.objectAt(i);
//                        that.get("content").pushObject(tempmega);
//                    }
//                }
//            });

        },
        submitPhotoInfo: function() {
            App.store.save();
        },
        backToDragAndDrop: function() {

            var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
            masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
        }


    });
    return PhotoCreateInfoSettingController;
});
