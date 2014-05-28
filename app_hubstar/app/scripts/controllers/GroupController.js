
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    groupPage: true,
    profileSelectionStatus: "",
    groupNetworkStatistics: 0,
    groupNetwork: false,
    createTime: "",
    editGroup: false,
    groupStepTwo: true,
    groupStepThree: false,
    init: function()
    {
    },
    setGroup: function(model)
    {
        this.set("model", model);
        console.log(model);
        var createTime = model.get("collections").objectAt(0).get("created_at");
        var date = new Date(createTime * 1000);
        this.set("createTime", date + "");
        this.selectPartner();
        this.setPic();
    },
    setPic: function() {
        var that = this;
        $(document).ready(function() {
            setTimeout(function() {
                console.log(that.get("model").get("width"));
                console.log(that.get("model").get("height"));
                $("#group_pic").css("height", that.get("model").get("height"));
                $("#group_pic").css("width", that.get("model").get("width"));
            }, 2);
        });
    },
    goToGroupDashboard: function() {
        this.set("editGroup", true);
    },
    backToFront: function() {
        this.set("editGroup", false);
    },
    groupStep: function(number) {

        if (number === "2") {

            this.set("groupStepTwo", true);
            this.set("groupStepThree", false);

        } else if (number === "3") {

            this.set("groupStepTwo", false);
            this.set("groupStepThree", true);
        }
    },
    selectPartner1: function() {
        $(document).ready(function() {
            setTimeout(function() {
                $('.new-masonry-bar > ul > li').removeClass('new-selected');
                $('#networkGroup1').addClass('new-selected');
            }, 2);
        });
    },
    selectPartner: function()
    {
        this.set("groupNetworkStatistics", 0);
        $(document).ready(function() {
            setTimeout(function() {
                $('.new-masonry-bar > ul > li').removeClass('new-selected');
                $('#networkGroup').addClass('new-selected');
            }, 2);
        });
        this.set("groupNetwork", true);
        this.set('profileSelectionStatus', 'Network');
        this.transitionToRoute('groupNetwork');
    }
}
);
