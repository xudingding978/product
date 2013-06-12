define(['ember', 'models/MegaModel']
        , function(Ember, MegaModel) {

    var PhotoController = Ember.ObjectController.extend({
            tempArr : [],
currentPhotoNumber :0,
        needs: ['mega'],
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
            return this.tempArr;
        },
//        getFirstPhoto: function(id) {
//            //   controllers.mega.test();
//
//            //      var relatedPhoto=
//            //       tempArr.push(photo);
//        },
        getFirstPhoto: function(id) {
            console.log("aaaa");
         var  t = MegaModel.find(id);
         tempArr.push(t);
         console.log(tempArr.length);
            //this.get("controllers.mega").test(id);
        },
        setFirestPhoto: function()
        {
            this.set('model', tempArr[currentPhotoNumber]);
        },
               
    });
    return PhotoController;
});
