define([
    "ember",
    "DragNDrop",
    "text!templates/mouseEventTemplate.html"
], function(Ember, DragNDrop, mouseEventTemplate) {


    var mouseEventView = Ember.View.extend(DragNDrop,
            {
                template: Ember.Handlebars.compile(mouseEventTemplate),
                tagName: 'div',
                classNames: ['dropTarget'],
                classNameBindings: ['cartAction'],
                helpText: null,
                // This will determine which class (if any) you should add to
                // the view when you are in the process of dragging an item.
                cartAction: Ember.computed(function(key, value) {
                    if (Ember.empty(this.get('dragContext'))) {
                        this.set('helpText', '(Drop Zone)');
                        return null;
                    }


                }).property('dragContext').cacheable(),
                drop: function(event) {
                    var viewId = event.originalEvent.dataTransfer.getData('Text'),
                            view = Ember.View.views[viewId];

                    // Set view properties
                    // Must be within `Ember.run.next` to always work
                    Ember.run.next(this, function() {
                        view.setPath('content.isAdded', !view.getPath('content.isAdded'));
                    });

                    return this._super(event);
                }
            });
    return mouseEventView;
});