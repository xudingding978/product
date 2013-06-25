define([
    'ember'
], function(
        Ember
        ) {
    var SearchTextField = Ember.TextField.extend({
        insertNewline: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("addCollection") !== -1)
            {
                controller.addNewCollection();
            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {

                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {
                controller.addComment();
                
                 //      console.log(controller);
            }
            else {
                console.log(controller);
            }
        }
    });
    return SearchTextField;
});
