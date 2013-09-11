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
    needs: ['permission', 'applicationFeedback', 'user', 'userFollowings'],
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
                dataNew["following_status"] = params[i]["following_status"];
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
            this.followUser(follow_object.get("id"), null, follow_object);



        }
        else
        {
            this.unFollowUser(follow_object.get("id"), null, follow_object);

            //console.log(currentUser.get("followers").get("length"));
            //follow_object.set('follow_status', false);
        }
    },
    checkFollowStatus: function(currentUser, that, follow_object)
    {

        var isFollow = 0;
        //console.log(follow_object);

        if (follow_object === null) {
            var followers = that.get("model").get("followers");
        }
        else
        {
            var followers = that.get("followers");

            //console.log("sssssssssssssssss");
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
            
            //console.log(follower_id);
            if (follower_id === localStorage.loginStatus)
            {
                //console.log("ddddddddddddddd");

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
           // console.log(followerIdCurrent);
            //console.log(followersCurrent.get("length"));
            if (follow_object === null)            
            {      
                //console.log("ggggggggggggggggg");
                if (followerIdCurrent === that.get("model").get("id"))
                {
                    //console.log("sssssssssssssssssssssssssssssssssssss");
                    that.set("following_status", true);
                     break;
                }
               
            }
            else
            {
                
                if (followerIdCurrent === that.get("id"))
                {
                    follow_object.set('following_status', true);
                    break
                }
                ;
            }
        }
    },
    followUser: function(user_id, that, follow_object) {
        //console.log("ssssssssssssssssss");
        var date = new Date();
        var currentUser = localStorage.loginStatus;
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
            "follower_id": currentUser, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});
        var followArray = [user_id, tempComment];
        var tempUser = HubStar.User.find(user_id);
        tempUser.get("followers").insertAt(0, tempComment);
        var thatNew = that;
        var thisThis = this;
        requiredBackEnd('followers', 'createUserFollower', followArray, 'POST', function() {
            if (thatNew !== null) {
                if (thatNew.get('followerTag') === true)
                {
                    thisThis.getClientId(thatNew.get("model"));
                       
                    //thatNew.set('follow_status', true);
                }
                var currentUserNew = HubStar.User.find(localStorage.loginStatus);            
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);
            }
            else
            {
                var currentUser = HubStar.User.find(localStorage.loginStatus);               
                var followers = HubStar.User.find(follow_object.get("id"));
                if (followers.get('isLoaded')) {
                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                   
                    //thisThis.checkFollowStatus(currentUserNew, followers, null);
                }
                else
                {
                    followers.addObserver('isLoaded', function() {
                      
                        if (followers.get('isLoaded')) {
                            thisThis.checkFollowStatus(currentUser, followers, follow_object);
                           
                        }
                    });
                }

            }
        });


    },
    unFollowUser: function(user_id, that, follow_object) {
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
        var thisThis = this;
        requiredBackEnd('followers', 'deleteUserFollower', followArray, 'POST', function(params) {
            if (thatNew !== null) {
                if (thatNew.get('followerTag') === true)
                {
                    thatNew.get('controllers.userFollowers').getClientId(that.get("model"));
                           
                    //thatNew.set('follow_status', false);
                }
                 var currentUserNew = HubStar.User.find(localStorage.loginStatus);           
                thisThis.checkFollowStatus(currentUserNew, thatNew, null);
            }
            else
            {
                var currentUser = HubStar.User.find(localStorage.loginStatus);
                var followers = HubStar.User.find(follow_object.get("id"));
                if (followers.get('isLoaded')) {

                    thisThis.checkFollowStatus(currentUser, followers, follow_object);
                  
                }
                else {
                    followers.addObserver('isLoaded', function() {
                        
                        if (followers.get('isLoaded')) {
                            thisThis.checkFollowStatus(currentUser, followers, follow_object);
                            
                        }
                    });
                }
            }
        });
    }
}
);
