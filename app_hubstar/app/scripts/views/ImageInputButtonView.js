HubStar.ImageInputButtonView = Ember.TextField.extend({
    type: 'file',
    classNameBindings: ['new-btn'],
    attributeBindings: ['multiple'],
    multiple: true,
    change: function(evt) {

        var controller = this.get('targetObject');
        console.log(controller);
        var photoCreateController = controller.get('controllers.photoCreate');
        photoCreateController.commitFiles(evt);
    }
});
