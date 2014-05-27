
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    groupPage: true,
    profileSelectionStatus: "",
    groupNetworkStatistics:0,
    groupNetwork : false,
    createTime: "",
    init: function()
    {
    },
    setGroup: function(model)
    {
        this.set("model", model);       
        console.log(model);
        var createTime = model.get("collections").objectAt(0).get("created_at");
        var date = new Date(createTime * 1000);
        this.set("createTime",date+"");
        this.selectPartner();
    },
    selectPartner: function()
    {
        this.set("groupNetworkStatistics",0);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#networkGroup').addClass('selected-user-stats');
        this.set("groupNetwork",true);
        this.set('profileSelectionStatus', 'Network');
        this.transitionToRoute('groupNetwork');
    }
}
);
