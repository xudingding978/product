define(['ember', 'models/MegaModel']
        , function(Ember, MegaModel) {

    var PhotoController = Ember.ObjectController.extend({
     //   needs: ['mega'],
        //   content: Ember.computed.alias('controllers.application.currentUser'),

        previesImage: function() {
            console.log("previesImage");
        },
        nextImage: function() {
            console.log("nextImage");
        },
        getTempArr: function() {
            return this.tempArr;
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
