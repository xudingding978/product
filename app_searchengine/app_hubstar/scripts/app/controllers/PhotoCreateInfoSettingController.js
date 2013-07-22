define(["ember"], function(Ember) {
    var PhotoCreateInfoSettingController = Ember.Controller.extend({
        needs: ['masonryCollectionItems'],
        backToDragAndDrop: function() {

            var masonryCollectionItems = this.get('controllers.masonryCollectionItems');
            masonryCollectionItems.set('uploadOrsubmit', !masonryCollectionItems.get('uploadOrsubmit'));
        }


    });
    return PhotoCreateInfoSettingController;
});
