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
            else if (controller._debugContainerKey.indexOf("searchs") !== -1)
            {
                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("user") !== -1) {
                controller.addNewCollection();
            }
            else {
                console.log(controller._debugContainerKey);
            }
        }
    });
    return SearchTextField;
});
