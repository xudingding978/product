define([
    'ember'
], function(
        Ember
        ) {
    var PhotoSelectButton = Ember.TextField.extend({
        type: 'file',
        classNameBindings: ['new-btn'],
        attributeBindings: ['multiple'],
        multiple: true,
        change: function(evt) {
            var input = evt.target;
            var files = input.files;
            var controller = this.get('controller');
            controller.commitFiles(files);
        }
    });
    return PhotoSelectButton;
});
