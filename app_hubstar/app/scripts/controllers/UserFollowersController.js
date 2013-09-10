/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowersController = Ember.Controller.extend({
    content: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user','userFollowings'],
    test: "test",
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'Read', data, 'POST', function(params) {

            that.set("content", []);
            for (var i = 0; i < params.length; i++)
            {
                dataNew["id"] = params[i]["record_id"];
                dataNew["name"] = params[i]["name"];
                dataNew["photo_url"] = params[i]["photo_url"];
                dataNew["photo_url_large"] = params[i]["photo_url_large"];
                dataNew["collections_size"] = params[i]["collections_size"];
                dataNew["follower_size"] = params[i]["follower_size"];
                dataNew["follow_status"] = params[i]["follow_status"];
                //console.log(dataNew["follow_status"]);

                that.get("content").pushObject(dataNew);
                dataNew = new Array();
            }
            //console.log(that.get("content"));
        });

    },
    followThisUser: function(follow_object)
    {
        //console.log(follow_object.get("id"));
        if (follow_object.get("follow_status") === false)
        {
            this.followUser(follow_object.get("id"), null);
            // this.get('controllers.user')
            follow_object.set('follow_status', true);
        }
        else
        {
            this.unFollowUser(follow_object.get("id"), null);
            follow_object.set('follow_status', false);
        }
    },
    followUser: function(user_id, that) {

        var date = new Date();
        var currentUser = localStorage.loginStatus;
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
            "follower_id": currentUser, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});
        var followArray = [user_id, tempComment];
        var tempUser = HubStar.User.find(user_id);
        tempUser.get("followers").insertAt(0, tempComment);
        var thatNew = that;
        requiredBackEnd('followers', 'createUserFollower', followArray, 'POST', function() {
            if (thatNew !== null) {
                if (thatNew.get('followerTag') === true)
                {
                    thatNew.get('controllers.userFollowers').getClientId(thatNew.get("model"));
                    thatNew.set('follow_status', true);
                }
            }
        });


    },
    unFollowUser: function(user_id, that) {
        var currentUser = localStorage.loginStatus;

        var followArray = [currentUser, user_id];

        var tempUser = HubStar.User.find(user_id);

        var update_record = tempUser.get('followers');
        for (var i = 0; i < update_record.get('length'); i++)
        {
            if (update_record.objectAt(i).get("follower_id") === currentUser)
            {
                update_record.removeObject(update_record.objectAt(i));
            }
        }
        var thatNew = that;
        requiredBackEnd('followers', 'deleteUserFollower', followArray, 'POST', function(params) {
            if (thatNew !== null) {
                if (thatNew.get('followerTag') === true)
                {
                    thatNew.get('controllers.userFollowers').getClientId(that.get("model"));
                    thatNew.set('follow_status', false);
                }
            }
        });
    }
}
);
