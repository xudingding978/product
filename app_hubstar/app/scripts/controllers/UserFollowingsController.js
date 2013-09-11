/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsController = Ember.Controller.extend({
    content: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowers', 'profile'],
    test: "test",
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadFollowing', data, 'POST', function(params) {

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
                dataNew["type"] = params[i]["type"];
                dataNew["following_status"] = params[i]["following_status"];
                if (dataNew["type"] === "user")
                {
                    dataNew["displayOrNot"] = true;
                }
                else
                {
                    dataNew["displayOrNot"] = false;
                }
                //console.log(dataNew);
                that.get("content").pushObject(dataNew);
                dataNew = new Array();
            }
            //console.log(that.get("content"));
        });

    },
    followThisUser: function(follow_object)
    {
        if (follow_object.get("follow_status") === false)
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").followUser(follow_object.get("id"), null, follow_object);
            }
            else
            {
                this.followProfile(follow_object.get("id"));
                follow_object.set('follow_status', true);
            }
        }
        else
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").unFollowUser(follow_object.get("id"), null, follow_object);
            }
            else
            {
                this.unFollowProfile(follow_object.get("id"));
                follow_object.set('follow_status', false);
            }
        }
    },
    followProfile: function(profile_id) {
        //console.log(profile_id);
        //var currentUser = HubStar.User.find(localStorage.loginStatus);
        var tempUser = HubStar.Profile.find(profile_id);
        if (tempUser.get('isLoaded')) {
            console.log(tempUser.get("isLoaded"));
            var commenter_profile_pic_url = null;
            var commenter_id = localStorage.loginStatus;
            var name = null;
            var date = new Date();
            var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
            var followArray = [profile_id, tempComment];

            tempUser.get("followers").insertAt(0, tempComment);
            requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
            });
        }
        else
        {
            tempUser.addObserver('isLoaded', function() {

                if (tempUser.get('isLoaded')) {
                    console.log(tempUser.get("isLoaded"));
                    var commenter_profile_pic_url = null;
                    var commenter_id = localStorage.loginStatus;
                    var name = null;
                    var date = new Date();
                    var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                        "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
                    var followArray = [profile_id, tempComment];

                    tempUser.get("followers").insertAt(0, tempComment);
                    requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
                    });

                }
            });
        }


    },
    unFollowProfile: function(profile_id) {
        //console.log(profile_id);
        var tempUser = HubStar.Profile.find(profile_id);
        if (tempUser.get('isLoaded')) {

            console.log(tempUser.get("isLoaded"));
            //var currentUser = HubStar.User.find(localStorage.loginStatus);
            var commenter_id = localStorage.loginStatus;
            //console.log(tempUser);
            var followArray = [profile_id, commenter_id];
            var update_record = tempUser.get('followers');
            for (var i = 0; i < update_record.get('length'); i++)
            {
                if (update_record.objectAt(i).get("follower_id") === commenter_id)
                {
                    update_record.removeObject(update_record.objectAt(i));
                }
            }
            requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
            });

        }
        else {
            tempUser.addObserver('isLoaded', function() {

                console.log(tempUser.get("isLoaded"));
                //var currentUser = HubStar.User.find(localStorage.loginStatus);
                var commenter_id = localStorage.loginStatus;
                //console.log(tempUser);
                var followArray = [profile_id, commenter_id];
                var update_record = tempUser.get('followers');
                for (var i = 0; i < update_record.get('length'); i++)
                {
                    if (update_record.objectAt(i).get("follower_id") === commenter_id)
                    {
                        update_record.removeObject(update_record.objectAt(i));
                    }
                }
                requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
                });
            });
        }

    }


}
);
