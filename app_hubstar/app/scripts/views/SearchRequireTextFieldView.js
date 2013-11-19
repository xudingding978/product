HubStar.SearchRequireTextFieldView = Ember.TextField.extend({
       
        insertNewline: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("addCollection") !== -1)
            {
                controller.addNewCollection();
            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {
                controller.transitionToRoute('search', {id: controller.get('search_string')});
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {
                controller.addComment();
            }
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
                controller.setEditable("DesplayName");
            } else if (controller._debugContainerKey.indexOf("comment") !== -1) {               
                controller.addComment();
            }else if (controller._debugContainerKey.indexOf("article") !== -1) {            
                controller.addComment();
            }
            
            else {

            }
        },
                didInsertElement: function() {
    this.$().focus();             
}
    });
