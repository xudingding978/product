define(['ember', 'models/MegaModel']
        , function(Ember, MegaModel) {

    var tempArr = [];
    var currentPhotoNumber = 0;
    var PhotoController = Ember.Controller.extend({
        editingContact: function() {
            this.set('contact', !this.get('contact'));
        },
        closeContact: function() {
            this.set('contact', !this.get('contact'));
        },
        tempArrPush: function() {
            tempArr.push({"cool": "34.33", "alsocool": "45454"});
            tempArr.push({"cool": "34.39", "alsocool": "45459"});

        },
        previesImage: function() {

        },
        nextImage: function() {

        },
        getTempArr: function() {
            return tempArr;
        },
        getFirstPhoto: function(id) {
            var photo = MegaModel.find(id);
               
            tempArr.push(photo);
        },
        setFirestPhoto: function()
        {
            this.set('model', tempArr[currentPhotoNumber]);
        },
        popupAibum: function() {

            this.set('oppupOpen', !this.get('oppupOpen'));


        }



    });
    return PhotoController;
});
