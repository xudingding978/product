define([
    'ember'
], function(
        Ember
        ) {
    var PhotoSelectButton = Ember.TextField.extend({
        type: 'file',
        classNameBindings: ['new-btn'],
        multiple: true,
        change: function(evt) {
    
//            var controller = this.get('controller');
//            controller.commitFiles(evt);
        }
    });
    return PhotoSelectButton;
});
