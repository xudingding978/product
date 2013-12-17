HubStar.SearchAreaTextFieldView = Ember.TextField.extend({

        insertNewline: function() {
            var controller = this.get('targetObject');
            if (controller._debugContainerKey.indexOf("addCollection") !== -1)
            {
                //this.get("controller").get("controllers.addCollection").addNewCollection(s);
                controller.addNewCollection();
            }
            else if (controller._debugContainerKey.indexOf("application") !== -1)
            {
                //this.get("controller").get("controllers.application").newSearch(s);
                controller.newSearch();
            }
            else if (controller._debugContainerKey.indexOf("mega") !== -1) {
                //this.get("controller").get("controllers.mega").addComment(s);
                controller.addComment();
            }
            else if (controller._debugContainerKey.indexOf("comment") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            //this.get("controller").get("controllers.comment").openComment(s);
            controller.openComment(s);
        } 
            else if (controller._debugContainerKey.indexOf("contact") !== -1) {
                //this.get("controller").get("controllers.contact").setEditable("Email");
                controller.setEditable("Email");
            }
            else {
       
            }
        }

    });
