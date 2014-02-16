HubStar.ActivateTagFunctionView = Ember.View.extend({
    templateName: 'activateTagFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    activateTag: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("mega") !== -1) {
            var tag_id = controller.get("tag_id");
            controller.sureToActivate(tag_id);
        }
    },
    cancelActivate: function() {
        var controller = this.get('controller');

        if (controller._debugContainerKey.indexOf("mega") !== -1) {


            controller.cancelActivate();

        }
    },
    deleteTag: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("mega") !== -1) {
            var tag_id = controller.get("tag_id");
            
            controller.deleteTag(tag_id);
        }
    },
    cancelDeleteTag: function() {
        var controller = this.get('controller');

        if (controller._debugContainerKey.indexOf("mega") !== -1) {
            controller.cancelDelTag();

        }
    },
});
