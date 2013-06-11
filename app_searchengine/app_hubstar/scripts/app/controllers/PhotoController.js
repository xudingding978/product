define(['ember', 'models/PhotoModel']
        , function(Ember, PhotoModel) {

    var tempArr = [];
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
        getTempArr: function() {
            return tempArr;
        },
        getFirstPhoto: function(id) {
            var photo = PhotoModel.find(id);
          
            tempArr.push(photo);
        },
        setFirestPhoto: function()
        {
            this.set('model', tempArr[0]);
        }
    });
    return PhotoController;
});
