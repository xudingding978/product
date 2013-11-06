/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowingsController = Ember.Controller.extend({
    contentUser: [],
    contentProfile: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowers', 'profile'],
    test: "test",
    followings: "",
    setUserFollowings: function(followingId) {

        var model = HubStar.User.find(followingId);
        this.getClientId(model); // It is used to get the mesage model

    },
    goToUserRoute: function()
    {
      
        this.get("controllers.user").selectCollection();
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
    },
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);
        this.contentUser = new Array();
        this.contentProfile = new Array();
        this.set('followings', model.get("followings"));
        var data = [localStorage.loginStatus, this.get('clientID')];
        //var currentProfile;
        data = JSON.stringify(data);
        //console.log(this.get('followings'));
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadFollowing', data, 'POST', function(params) {
            that.set("contentUser", []);
            that.set("contentProfile", []);
            //console.log(params.length+"sssssssss");

            for (var i = 0; i < params.length; i++)
            {
                dataNew["type"] = params[i]["type"];
                if (dataNew["type"] === "user")
                {
                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];
                    dataNew["photo_url_large"] = params[i]["cover_url_small"];
                    dataNew["collections_size"] = params[i]["collections_size"];
                    dataNew["follower_size"] = params[i]["follower_size"];
                    dataNew["follow_status"] = params[i]["follow_status"];
                    dataNew["following_status"] = params[i]["following_status"];
                    dataNew["isUserSelf"] = false;
                    if (dataNew["id"] === localStorage.loginStatus) {

                        dataNew["isUserSelf"] = true;
                    }
                    that.get("contentUser").pushObject(dataNew);
                }

                else
                {

                    dataNew["id"] = params[i]["record_id"];
                    dataNew["name"] = params[i]["name"];
                    dataNew["photo_url"] = params[i]["photo_url"];
                    dataNew["photo_url_large"] = params[i]["cover_url_small"];
                    //console.log(dataNew["photo_url_large"]);
                    dataNew["collections_size"] = params[i]["collections_size"];
                    dataNew["follower_size"] = params[i]["follower_size"];
                    dataNew["partner_size"] = params[i]["partner_size"];
                    dataNew["follow_status"] = params[i]["follow_status"];
                    dataNew["following_status"] = params[i]["following_status"];
                    dataNew["profile_about_us"] = params[i]["profile_about_us"];
                    dataNew["profile_cover_text"] = params[i]["profile_cover_text"];
                    //dataNew["current"] = HubStar.Mega.find(dataNew["id"]);
                    // console.log(dataNew["current"]);
                    //dataNew["current"] = params[i]["profile"];
                    // dataNew["current"]=currentProfile;
                    // console.log(dataNew["current"] );
                    that.get("contentProfile").pushObject(dataNew);
                    //console.log(dataNew);
                }
                dataNew = new Array();
            }



            that.set('loadingTime', false);
            that.relayout();

        });

    },
    followThisUser: function(follow_object)
    {

        if (follow_object.get("follow_status") === false)
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").followUser(follow_object.get("id"), "following", follow_object);
            }
            else
            {
                this.followProfile(follow_object.get("id"), "user");
                follow_object.set('follow_status', true);
            }
        }

        else
        {
            if (follow_object.get("type") === "user") {
                this.get("controllers.userFollowers").unFollowUser(follow_object.get("id"), "following", follow_object);
            }
            else
            {
                this.unFollowProfile(follow_object.get("id"), "user");
                follow_object.set('follow_status', false);
            }
        }

    },
    followProfile: function(profile_id, type) {
        //console.log(profile_id);
        //var currentUser = HubStar.User.find(localStorage.loginStatus);
        var tempUser = HubStar.Profile.find(profile_id);
        var that = this;
        if (tempUser.get('isLoaded')) {
            //console.log(tempUser.get("isLoaded"));
            var commenter_profile_pic_url = null;
            var commenter_id = localStorage.loginStatus;
            var name = null;
            var date = new Date();
            var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
            var followArray = [profile_id, tempComment];

            tempUser.get("followers").insertAt(0, tempComment);


            var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                "follower_id": profile_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

            var currentUser = HubStar.User.find(localStorage.loginStatus);

            currentUser.get("followings").insertAt(0, tempFollowing);

            //console.log(this.get("controllers.user"));

            if (type === "user")
            {
                
                if (localStorage.loginStatus === this.get("controllers.user").get('user').id)
                {
                    this.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                }
            }

            var profilethis = this;
            requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
                profilethis.get("controllers.userFollowers").getProfileId(tempUser);
                profilethis.get("controllers.profile").followersStatistics(tempUser.get("followers").get("length"));
                profilethis.get("controllers.profile").followerPhoto(profile_id);

                for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                {
                    if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                    {
                        profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                    }
                }
            });
            that.relayout();
        }
        else
        {
            var thisThis = this;
            tempUser.addObserver('isLoaded', function() {

                if (tempUser.get('isLoaded')) {
                    //console.log(tempUser.get("isLoaded"));
                    var commenter_profile_pic_url = null;
                    var commenter_id = localStorage.loginStatus;
                    var name = null;
                    var date = new Date();
                    var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": commenter_profile_pic_url,
                        "follower_id": commenter_id, "name": name, "type": "profile", "time_stamp": date.toString(), "is_delete": false});
                    var followArray = [profile_id, tempComment];

                    tempUser.get("followers").insertAt(0, tempComment);


                    var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                        "follower_id": profile_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                    //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);
                    var currentUser = HubStar.User.find(localStorage.loginStatus);
                    currentUser.get("followings").insertAt(0, tempFollowing);
                    if (type === "user")
                    {
                        if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                        {

                            thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                        }
                    }

                    var profilethis = thisThis;
                    requiredBackEnd('followers', 'createFollower', followArray, 'POST', function() {
                        for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                        {
                            if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                            {
                                profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                            }
                        }
                    });

                }
            });
            that.relayout();
        }


    },
    unFollowProfile: function(profile_id, type) {
        //console.log(profile_id);
        var tempUser = HubStar.Profile.find(profile_id);
        var ThisController=this;
        if (tempUser.get('isLoaded')) {

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

            var profilethis = this;
            requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
                profilethis.get("controllers.profile").followersStatistics(tempUser.get("followers").get("length"));
                profilethis.get("controllers.userFollowers").getProfileId(tempUser);
                profilethis.get("controllers.profile").followerPhoto(profile_id);
                for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                {
                    if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                    {
                        profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                    }
                }
            });

            var currentUser = HubStar.User.find(localStorage.loginStatus);

            var update_following = currentUser.get('followings');
            for (var i = 0; i < update_following.get('length'); i++)
            {
                if (update_following.objectAt(i).get("follower_id") === profile_id)
                {
                    update_following.removeObject(update_following.objectAt(i));
                }
            }
            if (type === "user")
            {
                if (localStorage.loginStatus === this.get("controllers.user").get('user').id)
                {

                    this.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                }
            }
        }
        else {
            var thisThis = this;
            tempUser.addObserver('isLoaded', function() {


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
                var profilethis = thisThis;
                requiredBackEnd('followers', 'deleteFollower', followArray, 'POST', function(params) {
                    for (var j = 0; j < profilethis.get("contentProfile").get("length"); j++)
                    {
                        if (profile_id === profilethis.get("contentProfile").objectAt(j).get("id"))
                        {
                            profilethis.get("contentProfile").objectAt(j).set("follower_size", tempUser.get("followers").get("length"));
                        }
                    }
                });

                var currentUser = HubStar.User.find(localStorage.loginStatus);

                var update_following = currentUser.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === profile_id)
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (type === "user")
                {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {

                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }
                }
                ThisController.relayout();
            });
        }

    },
    relayout: function()
    {
        setTimeout(function() {
            $('#masonry_user_container').masonry("reload");
        }, 20);
    }


}
);
