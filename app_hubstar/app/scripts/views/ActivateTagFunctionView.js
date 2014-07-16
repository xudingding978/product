HubStar.ActivateTagFunctionView = Ember.View.extend({
    templateName: 'activateTagFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    actions: {
        activateTag: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("mega") !== -1 || controller._debugContainerKey.indexOf("article") !== -1) {
                var tag_id = controller.get("tag_id");
                controller.send("sureToActivate", tag_id);
            }
        },
        cancelActivate: function() {
            var controller = this.get('controller');

            if (controller._debugContainerKey.indexOf("mega") !== -1 || controller._debugContainerKey.indexOf("article") !== -1) {
                controller.send("cancelActivate");
            }
        },
        deleteTag: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("mega") !== -1 || controller._debugContainerKey.indexOf("article") !== -1) {
                var tag_id = controller.get("tag_id");
                controller.send("deleteTag", tag_id);
            }
        },
        cancelDeleteTag: function() {
            var controller = this.get('controller');
            if (controller._debugContainerKey.indexOf("mega") !== -1 || controller._debugContainerKey.indexOf("article") !== -1) {
                controller.send("cancelDelTag");
            }
        }
    }
});
