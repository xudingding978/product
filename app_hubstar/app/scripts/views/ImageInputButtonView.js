HubStar.PhotoSelectButtonView = Ember.TextField.extend({
      templateName: 'photoSelectButton',
        type: 'file',
        classNameBindings: ['new-btn'],
        attributeBindings: ['multiple'],
        multiple: true,
        change: function(evt) {
 
            var controller = this.get('controller');
            controller.commitFiles(evt);
        }
    });
