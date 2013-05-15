define([
    "ember"


], function(Ember) {

    var PreviewImageView = Ember.View.extend({
        attributeBindings: ['name', 'width', 'height', 'src'],
        tagName: 'img',
        viewName: 'previewImageView',
        printme: function() {
            console.log('in previewImageView');
        }
    });

    return PreviewImageView;
});