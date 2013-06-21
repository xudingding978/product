define([
    "ember"

], function(Ember) {

    var AddChildViewButton = Ember.View.extend({
        tagName: 'button',
        render: function(buffer) {
            buffer.push('Add Child Viewwwwwwwwwwwwwwwwwwwwwww');
        },
        click: function() {
         alert(444);
        }
    });

    return AddChildViewButton;
});
