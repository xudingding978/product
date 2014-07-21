HubStar.GroupNetworkController = Ember.Controller.extend({
    contentData: [],
    profileIds: "",
    needs: ['permission', 'applicationFeedback', 'group'],
    getClientId: function(model) {
        this.set('contentData', []);
        this.set('loadingTime', false);
        this.set('profileIds', model);
        if (this.get('profileIds') !== null && this.get('profileIds') !== 'undefined' && this.get('profileIds') !== "") {
            this.set('loadingTime', true);
            var data = HubStar.Mega.find({RequireType: "partner", profile_partner_ids: this.get('profileIds')});
            var that = this;
            data.then(function() {
                that.setContent(data);
                that.get('controllers.group').set("groupNetworkStatistics", data.get("length"));
                that.set('loadingTime', false);
                $(document).ready(function() {
                    setTimeout(function() {
                        $('#masonry_user_container').masonry("reloadItems");
                        setTimeout(function() {
                            $('#masonry_user_container').masonry();
                        }, 20);
                    }, 20);
                });
            });
        }
    },
    setContent: function(data)
    {
        var that = this;
        for (var i = 0; i < data.get("length"); i++) {
            var tempmega = data.objectAt(i);
            var isFollow = false;
            for (var j = 0; j < tempmega.get("profile").objectAt(0).get("followers").get("length"); j++)
            {
                if (tempmega.get("profile").objectAt(0).get("followers").objectAt(j).get("follower_id") === localStorage.loginStatus)
                {
                    isFollow = true;
                    break;
                }
            }
            tempmega.get("profile").objectAt(0).set("isFollowCurrentUser", isFollow);
            that.get("contentData").pushObject(tempmega);
        }
    }
}
);
