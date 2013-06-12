define(['ember', 'models/MegaModel']
        , function(Ember, MegaModel) {

    var tempArr = [];
    var currentPhotoNumber = 0;
    var PhotoController = Ember.ObjectController.extend({
     //   needs: ['mega'],
        //   content: Ember.computed.alias('controllers.application.currentUser'),
        editingContact: function() {
            this.set('contact', !this.get('contact'));
        },
        closeContact: function() {
            this.set('contact', !this.get('contact'));
        },
        previesImage: function() {
            console.log("previesImage");
        },
        nextImage: function() {
            console.log("nextImage");
        },
        getTempArr: function() {
            return tempArr;
        },
//        getFirstPhoto: function(id) {
//            //   controllers.mega.test();
//
//            //      var relatedPhoto=
//            //       tempArr.push(photo);
//        },
        getFirstPhoto: function(id) {


          //  this.get("controllers.mega").test(id);
        },
        setFirestPhoto: function()
        {
            this.set('model', tempArr[currentPhotoNumber]);
        }



    });
    return PhotoController;
});
