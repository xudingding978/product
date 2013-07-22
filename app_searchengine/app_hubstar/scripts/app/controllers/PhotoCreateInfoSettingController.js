define(["ember"], function(Ember) {
    var PhotoCreateInfoSettingController = Ember.Controller.extend({
        needs: ['masonryCollectionItems'],
        uploadedImage: "",
        content: [],
        init: function() {
            this.set('content', []);


//            App.set("UploadedImage", App.get("UploadedImage").substring(1, App.get("UploadedImage").length - 1));
            this.set("uploadedImage", App.get("UploadedImage"));
            this.set("uploadedImage", this.get("uploadedImage").substring(1, this.get("uploadedImage").length));

            console.log(this.get("uploadedImage"));



            var data = App.Mega.find({RequireType: "uploadPhotoIDs", "uploadPhotoIDs": this.get("uploadedImage")});
            var that = this;
            data.addObserver('isLoaded', function() {
                that.checkAuthenticUser();
                if (data.get('isLoaded')) {
                    for (var i = 0; i < data.get("length"); i++) {
                        var tempmega = data.objectAt(i);
                        that.get("content").pushObject(tempmega);
                    }
                }
            });
            console.log(this.get('content'));

 
        },
        backToDragAndDrop: function() {

            var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
            masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
        }


    });
    return PhotoCreateInfoSettingController;
});
