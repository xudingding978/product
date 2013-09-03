HubStar.ImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    attributeBindings: ['multiple'],
    multiple: true,
    change: function(evt) {

        var controller = this.get('controller');
        var photoCreateController = controller.get('controllers.photoCreate');
        console.log(photoCreateController);
        photoCreateController.commitFiles(evt);
    }
});
