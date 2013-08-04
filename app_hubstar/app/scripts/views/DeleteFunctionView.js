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
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            //    controller.addComment();

        } else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.deleteSelectedCollection();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.deleteComment();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.deletePartner();

        }
        else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.removeCollectedItem();

        }
        else {

        }
    },
    cancelDelete: function() {
        var controller = this.get('controller');
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            //     controller.addNewCollection();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {

            //       controller.newSearch();
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {


            //    controller.addComment();

        } else if (controller._debugContainerKey.indexOf("user") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("comment") !== -1) {


            controller.cancelDelete();

        }
        else if (controller._debugContainerKey.indexOf("profilePartners") !== -1) {


            controller.cancelDelete();

        } else if (controller._debugContainerKey.indexOf("masonryCollectionItems") !== -1) {


            controller.cancelDelete();

        }
        else {

        }


    }


});
