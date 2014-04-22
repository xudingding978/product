HubStar.SearchRequireTextFieldView = Ember.TextField.extend({
    insertNewline: function() {
        var controller = this.get('targetObject');
          var s = this.$().parents()[0].id.split("_")[1];
        if (controller._debugContainerKey.indexOf("addCollection") !== -1)
        {
            controller.addNewCollection();
        }
        else if (controller._debugContainerKey.indexOf("application") !== -1)
        {
            if (controller.get('search_string') !== null && controller.get('search_string') !== "" && controller.get('search_string') !== undefined)
            {
                if (controller.get('loadingTime') === false) {
                    HubStar.set("escVideo", false);
                    controller.transitionToRoute('search', {id: controller.get('search_string')});
                    $(".Navigator-box").css('display', 'none');
                    $("#top-about-menu").fadeOut("320");
                    $("#search-bar").fadeIn("320");
                    HubStar.set("showDiscoveryBar", false);
                }
            }
            else {
            }

        }
        else if (controller._debugContainerKey.indexOf("fourOhFour") !== -1)
        {
            if (controller.get('search_string') !== null && controller.get('search_string') !== "" && controller.get('search_string') !== undefined)
            {
                HubStar.set("escVideo", false);
                controller.transitionToRoute('search', {id: controller.get('search_string')});
                setTimeout(function() {
                    $(".Navigator-box").css('display', 'none');
                    $("#top-about-menu").fadeOut("320");
                    $("#search-bar").fadeIn("320");
                }, 10);
                HubStar.set("showDiscoveryBar", false);
            }
            else {
            }
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
          
            controller.addReply(s);
        }
        else if (controller._debugContainerKey.indexOf("editReply") !== -1) {
          
            controller.updateReply(s);
        }
        else if (controller._debugContainerKey.indexOf("reviewListSingle") !== -1) {

        
            controller.transitionToRoute('review', {id: s});
            controller.addReviewReply(s);
           
        }
        else if (controller._debugContainerKey.indexOf("reviewReplyListSingle") !== -1) {
          
            controller.transitionToRoute('reply', {id: s});
            controller.saveReviewReply(s);
        }
        else {

        }
    },
    didInsertElement: function() {

    }
});
