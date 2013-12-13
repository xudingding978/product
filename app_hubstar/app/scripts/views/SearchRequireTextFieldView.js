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
            $(".Navigator-box").css('display', 'none');
            $("#top-about-menu").fadeOut("320");
            $("#search-bar").fadeIn("320");
            HubStar.set("showDiscoveryBar", false);
        }
        else if (controller._debugContainerKey.indexOf("mega") !== -1) {
            controller.addComment();
        }
        else if (controller._debugContainerKey.indexOf("contact") !== -1) {
            controller.setEditable("DesplayName");
        } else if (controller._debugContainerKey.indexOf("article") !== -1) {
            controller.addComment();
        } else if (controller._debugContainerKey.indexOf("video") !== -1) {
            controller.addComment();
        }
        else if (controller._debugContainerKey.indexOf("profile") !== -1) {
            controller.partnerSearch();
        }
        else if (controller._debugContainerKey.indexOf("message") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.addReply(s);
        }
        else if (controller._debugContainerKey.indexOf("editReply") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.updateReply(s);
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {

            var s = this.$().parents()[0].id.split("_")[1];
            controller.transitionToRoute('review', {id: s});
            controller.addReviewReply(s);
            controller.editReviewReply(s);
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {
            var s = this.$().parents()[0].id.split("_")[1];
            controller.transitionToRoute('reply', {id: s});
            controller.saveReviewReply(s);
        }
        else {
//            console.log(controller);
        }
    },
    didInsertElement: function() {
        //this.$().focus();
    }
});
