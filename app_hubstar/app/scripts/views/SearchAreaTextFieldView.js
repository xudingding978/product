HubStar.SearchAreaTextFieldView = Ember.TextField.extend({
        
        
        insertNewline: function() {
            var controller = this.get('targetObject');
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
            }
            else if (controller._debugContainerKey.indexOf("comment") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.openComment(s);
        } 
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
              
                controller.setEditable("Email");
            }
            else {
       
            }
        }

    });
