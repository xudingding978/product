
HubStar.GroupController = Ember.Controller.extend({
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings', 'conversation', 'messageCenter', 'invitePeople', 'conversationItem'],
    init: function()
    {
    }
}
);
