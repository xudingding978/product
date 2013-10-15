/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


HubStar.UserFollowersController = Ember.Controller.extend({
    contentUser: [],
    clientID: "",
    followerID: "",
    model: "",
    addPartner: true,
    currentAddPartnerPic: null,
    selectedPartnerPic: "",
    is_authentic_user: false,
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
    test: "test",
    setUserFollowers: function(followers) {
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#ufollower').addClass('selected-user-stats');
        var model = HubStar.User.find(followers);
        this.getClientId(model); // It is used to get the mesage model

    },
    getClientId: function(model) {
        //console.log(localStorage.loginStatus);
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'Read', data, 'POST', function(params) {

            that.set("contentUser", []);
            for (var i = 0; i < params.length; i++)
            {
                dataNew["id"] = params[i]["record_id"];
                dataNew["name"] = params[i]["name"];
                dataNew["photo_url"] = params[i]["photo_url"];
                dataNew["photo_url_large"] = params[i]["cover_url_small"];
                //console.log(dataNew["photo_url_large"]);
                //       dataNew["photo_url_large"] = HubStar.get('photoDomain')+'/users/'+dataNew["id"]+'/user_cover_small/user_cover';
                //       dataNew["photo_url"] = HubStar.get('photoDomain')+'/users/'+dataNew["id"]+'/user_picture/user_picture';

                dataNew["collections_size"] = params[i]["collections_size"];
                dataNew["follower_size"] = params[i]["follower_size"];
                dataNew["follow_status"] = params[i]["follow_status"];
                dataNew["following_status"] = params[i]["following_status"];
                //console.log(dataNew["follow_status"]);
                dataNew["isUserSelf"] = false;
                if (dataNew["id"] === localStorage.loginStatus) {
                    dataNew["isUserSelf"] = true;
                }
                that.get("contentUser").pushObject(dataNew);
                dataNew = new Array();
            }
            //console.log(that.get("contentUser"));
            that.set('loadingTime', false);
        });

    },
    getProfileId: function(model) {
//console.log(localStorage.loginStatus);
        this.set('loadingTime', true);
        this.set("model", model);
        this.set('clientID', model.id);

        var data = [localStorage.loginStatus, this.get('clientID')];
        data = JSON.stringify(data);
        var dataNew = new Array();
        var that = this;
        requiredBackEnd('followers', 'ReadProfileFollower', data, 'POST', function(params) {

            that.set("contentUser", []);
            for (var i = 0; i < params.length; i++)
            {
                dataNew["id"] = params[i]["record_id"];
                dataNew["name"] = params[i]["name"];
                dataNew["photo_url"] = params[i]["photo_url"];
                dataNew["photo_url_large"] = params[i]["cover_url_small"];
                //console.log(dataNew["photo_url_large"]);
                //       dataNew["photo_url_large"] = HubStar.get('photoDomain')+'/users/'+dataNew["id"]+'/user_cover_small/user_cover';
                //       dataNew["photo_url"] = HubStar.get('photoDomain')+'/users/'+dataNew["id"]+'/user_picture/user_picture';

                dataNew["collections_size"] = params[i]["collections_size"];
                dataNew["follower_size"] = params[i]["follower_size"];
                dataNew["follow_status"] = params[i]["follow_status"];
                dataNew["following_status"] = params[i]["following_status"];
                //console.log(dataNew["follow_status"]);
                dataNew["isUserSelf"] = false;
                if (dataNew["id"] === localStorage.loginStatus) {
                    dataNew["isUserSelf"] = true;
                }
                that.get("contentUser").pushObject(dataNew);
                dataNew = new Array();
            }
            //console.log(that.get("contentUser"));
            that.set('loadingTime', false);
        });

    },
    followThisUser: function(follow_object)
    {

        if (follow_object.get("follow_status") === false)
        {
            this.followUser(follow_object.get("id"), "follower", follow_object);
        }
        else
        {
            this.unFollowUser(follow_object.get("id"), "follower", follow_object);

        }
    },
    checkFollowStatus: function(currentUser, that, follow_object)
    {
        if (follow_object === null) {
            var followers = that.get("model").get("followers");
        }
        else
        {
            var followers = that.get("followers");
        }

        if (follow_object === null)
        {
            that.set("follow_status", false);
        }
        else
        {
            follow_object.set('follow_status', false);
        }

        for (var i = 0; i < followers.get('length'); i++) {
            var follower_id = followers.objectAt(i).get("follower_id");
            if (follower_id === localStorage.loginStatus)
            {
                if (follow_object === null)
                {
                    that.set("follow_status", true);
                }
                else
                {
                    follow_object.set('follow_status', true);
                }
                break;
            }
        }
        var followersCurrent = currentUser.get("followers");
        var followerIdCurrent;
        if (follow_object === null)
        {
            that.set("following_status", false);
        }
        else
        {
            follow_object.set("following_status", false);
        }
        for (var j = 0; j < followersCurrent.get("length"); j++)
        {
            followerIdCurrent = followersCurrent.objectAt(j).get("follower_id");
            if (follow_object === null)
            {
                if (followerIdCurrent === that.get("model").get("id"))
                {
                    that.set("following_status", true);
                    break;
                }
            }
            else
            {
                if (followerIdCurrent === that.get("id"))
                {
                    follow_object.set('following_status', true);
                    break;
                }
            }
        }
    },
    followUser: function(user_id, that, follow_object) {
        var date = new Date();
        var currentUser = localStorage.loginStatus;
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
            "follower_id": currentUser, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});
        var followArray = [user_id, tempComment];

        var thatNew = that;
        var thisThis = this;
        requiredBackEnd('followers', 'createUserFollower', followArray, 'POST', function() {
            if (thatNew !== "follower" && thatNew !== "following") {
                if (thatNew.get('followerTag') === true)
                {
                    thisThis.getClientId(thatNew.get("model"));
                }
                var tempUser = HubStar.User.find(user_id);
                if (tempUser.get("isLoaded"))
                {
                    tempUser.get("followers").insertAt(0, tempComment);
                }
                var currentUserNew = HubStar.User.find(localStorage.loginStatus);
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);
                thisThis.get("controllers.user").set("userFollowerStatistics", tempUser.get("followers").get("length"));

                var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                    "follower_id": user_id, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);                
                currentUserNew.get("followings").insertAt(0, tempFollowing);

                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)

                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUserNew.get("followings").get("length"));
                    }
                }
            }
            else
            {
                var tempFollowing = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
                    "follower_id": follow_object.get("id"), "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});

                //thisThis.get("controllers.user").set("userFollowingStatistics", thisThis.get("controllers.user").get("userFollowingStatistics") + 1);
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                currentUser.get("followings").insertAt(0, tempFollowing);
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }
                }

                var followers = HubStar.User.find(follow_object.get("id"));
                if (followers.get('isLoaded')) {

                    followers.get("followers").insertAt(0, tempComment);

                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                    if (thatNew === "follower") {
                        for (var j = 0; j < thisThis.get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    else if (thatNew === "following")
                    {
                        for (var j = 0; j < thisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                }
                else
                {
                    var thisThisThis = thisThis;

                    var thatNewNew = thatNew;
                    followers.addObserver('isLoaded', function() {

                        if (followers.get('isLoaded')) {
                            //followers.get("followers").insertAt(0, tempComment);                         
                            thisThisThis.checkFollowStatus(currentUser, followers, follow_object);
                            if (thatNewNew === "follower") {
                                for (var j = 0; j < thisThisThis.get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            else if (thatNewNew === "following")
                            {

                                for (var j = 0; j < thisThisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                        }
                    });
                }

            }
        });


    },
    unFollowUser: function(user_id, that, follow_object) {
        var currentUser = localStorage.loginStatus;

        var followArray = [currentUser, user_id];



        var thatNew = that;
        var thisThis = this;
        requiredBackEnd('followers', 'deleteUserFollower', followArray, 'POST', function(params) {
            if (thatNew !== "follower" && thatNew !== "following") {

                if (thatNew.get('followerTag') === true)
                {
                    thatNew.get('controllers.userFollowers').getClientId(that.get("model"));
                }
                var tempUser = HubStar.User.find(user_id);
                if (tempUser.get("isLoaded"))
                {
                    var update_record = tempUser.get('followers');
                    for (var i = 0; i < update_record.get('length'); i++)
                    {

                        if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                        {
                            update_record.removeObject(update_record.objectAt(i));
                        }
                    }
                }
                thisThis.get("controllers.user").set("userFollowerStatistics", tempUser.get('followers').get('length'));
                var currentUserNew = HubStar.User.find(localStorage.loginStatus);
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);

                var update_following = currentUserNew.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === thatNew.get("user").get("id"))
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUserNew.get("followings").get("length"));
                    }
                }
            }
            else
            {
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                var followers = HubStar.User.find(follow_object.get("id"));

                var update_following = currentUser.get('followings');
                for (var i = 0; i < update_following.get('length'); i++)
                {
                    if (update_following.objectAt(i).get("follower_id") === follow_object.get("id"))
                    {
                        update_following.removeObject(update_following.objectAt(i));
                    }
                }
                if (thisThis.get("controllers.user").get('user') !== null) {
                    if (localStorage.loginStatus === thisThis.get("controllers.user").get('user').id)
                    {
                        thisThis.get("controllers.user").set("userFollowingStatistics", currentUser.get("followings").get("length"));
                    }

                }

                if (followers.get('isLoaded')) {
                    var update_record = followers.get('followers');
                    for (var i = 0; i < update_record.get('length'); i++)
                    {
                        if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                        {
                            update_record.removeObject(update_record.objectAt(i));
                        }
                    }
                    if (thatNew === "follower") {
                        for (var j = 0; j < thisThis.get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("contentUser").objectAt(j).get("id"))
                            {

                                thisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    else if (thatNew === "following")
                    {
                        for (var j = 0; j < thisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                        {
                            if (follow_object.get("id") === thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                            {
                                thisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                            }
                        }
                    }
                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                }
                else {
                    var thisThisThis = thisThis;
                    var thatNewNew = thatNew;
                    followers.addObserver('isLoaded', function() {
                        if (followers.get('isLoaded')) {
                            var update_record = followers.get('followers');
                            for (var i = 0; i < update_record.get('length'); i++)
                            {
                                if (update_record.objectAt(i).get("follower_id") === localStorage.loginStatus)
                                {
                                    update_record.removeObject(update_record.objectAt(i));
                                }
                            }
                            if (thatNewNew === "follower") {
                                for (var j = 0; j < thisThisThis.get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("contentUser").objectAt(j).get("id"))
                                    {

                                        thisThisThis.get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            else if (thatNewNew === "following")
                            {
                                for (var j = 0; j < thisThisThis.get("controllers.userFollowings").get("contentUser").get("length"); j++)
                                {
                                    if (follow_object.get("id") === thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).get("id"))
                                    {
                                        thisThisThis.get("controllers.userFollowings").get("contentUser").objectAt(j).set("follower_size", followers.get("followers").get("length"));
                                    }
                                }
                            }
                            thisThisThis.checkFollowStatus(currentUser, followers, follow_object);
                        }
                    });
                }
            }
        });
    }
}
);
