HubStar.DeleteFunctionView = Ember.View.extend({
    templateName: 'deleteFunction',
    didInsertElement: function() {
        //   this.$().hide().show('fast');
    },
    deleteSelection: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
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

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {
            var obj = controller.get("obj");
            controller.removeComment(obj);

        }
        else if (controller._debugContainerKey.indexOf("article") !== -1) {
            var obj = controller.get("obj");

            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("Message") !== -1 &&controller._debugContainerKey.indexOf("user")!==-1) { //userMessage must be before user
            var s = controller.get("s");
            controller.removeMessageItem(s);
        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) { //userMessage must be before user
            var s = controller.get("s");
            controller.removeReplyItem(s);
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

            var obj = controller.get("obj");

            controller.removeComment(obj);

        }

        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.removeCollectedItem();

        }
        else if (controller._debugContainerKey.indexOf("notificationTop") !== -1) {

            var s = controller.get("s");
            controller.removeNotificationItem(s);

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {

            var s = controller.get("s");
            controller.removeConversationItem(s);

        }
        else {
//            console.log("this is a deleete");
        }
    },
    cancelDelete: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
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

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


               controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("user") !== -1&&controller._debugContainerKey.indexOf("Message") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
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

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("conversation") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.cancelDelete();

        }

        else {

        }


    }


});
