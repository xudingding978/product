
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    groupPage: true,
    profileSelectionStatus: "",
    groupNetworkStatistics:0,
    groupNetwork : false,
    init: function()
    {
    },
    setGroup: function(model)
    {
        this.set("model", model);
        this.selectPartner();
    },
    selectPartner: function()
    {
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#networkGroup').addClass('selected-user-stats');
        this.set("groupNetwork",true);
        this.set('profileSelectionStatus', 'Network');
        this.transitionToRoute('groupNetwork');
    }
}
);
