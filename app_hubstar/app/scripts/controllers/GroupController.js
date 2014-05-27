
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    init: function()
    {
        console.log(this.get("model"));
    },
    setGroup: function(model)
    {
        this.set("model", model);
        console.log(this.get("model"));
    }
}
);
