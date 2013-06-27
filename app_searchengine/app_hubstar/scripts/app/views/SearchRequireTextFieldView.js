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

            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {
                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {

            }
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
                controller.setEditable("DesplayName");
            }
            else {
                console.log(controller);
            }
        }
    });
    return SearchTextField;
});
