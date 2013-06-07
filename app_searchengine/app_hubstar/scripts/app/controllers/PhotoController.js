define(['ember', 'models/PhotoModel']
        , function(Ember, PhotoModel) {
    var PhotoController = Ember.Controller.extend({
        editingContact: function() {
            this.set('contact', !this.get('contact'));
        },
        closeContact: function() {
            this.set('contact', !this.get('contact'));
        }


    });
    return PhotoController;
});
