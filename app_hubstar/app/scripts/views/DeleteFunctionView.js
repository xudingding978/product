HubStar.DeleteFunctionView = Ember.View.extend({
    templateName: 'deleteFunction',
    didInsertElement: function() {
    },
    deleteSelection: function() {
        var controller = this.get('controller');
        var obj = controller.get("obj");
        console.log(controller);
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
        }
        else if (controller._debugContainerKey.indexOf("profileVideos") !== -1) {

            controller.deleteConfirm();
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {

            controller.deleteConfirm();
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {

            controller.deleteConfirm();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {
            controller.removeComment(obj);

        }
        else if (controller._debugContainerKey.indexOf("article") !== -1) {
            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("Message") !== -1 && controller._debugContainerKey.indexOf("user") !== -1) { //userMessage must be before user
            controller.removeMessageItem(controller.get("s"));
        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) { //userMessage must be before user
            
            controller.removeReplyItem(controller.get("s"));
        }
        else if (controller._debugContainerKey.indexOf("user") !== -1) {

            controller.deleteSelectedCollection();
        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {

            controller.deleteSelectedPartner();

        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {

            controller.deleteSelectedCollection();

        }

        else if (controller._debugContainerKey.indexOf("comment") !== -1) {
            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {
            controller.removeCollectedItem();

        }
        else if (controller._debugContainerKey.indexOf("notificationTop") !== -1) {


            controller.removeNotificationItem(obj);

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {
            controller.removeConversationItem(controller.get("s"));

        }
        else {
        }
    },
    cancelDelete: function() {
        var controller = this.get('controller');

        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
        }
        else if (controller._debugContainerKey.indexOf("profileVideos") !== -1) {

            controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {

            controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {

            controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("user") !== -1 && controller._debugContainerKey.indexOf("Message") !== -1) {

            //  var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) {

            //     var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();
        }
        else if (controller._debugContainerKey.indexOf("article") !== -1) {
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("notificationTop") !== -1) {

            //   var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {

            //     var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }

        else {

        }


    }


});
