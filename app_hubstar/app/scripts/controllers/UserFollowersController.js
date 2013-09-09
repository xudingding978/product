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
    needs: ['permission', 'applicationFeedback', 'user'],
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
            this.followUser(follow_object.get("id"));
            follow_object.set('follow_status', true);
        }
        else
        {
            this.unFollowUser(follow_object.get("id"));
           follow_object.set('follow_status', false);
        }
    },
     followUser: function(user_id) {
        
        var date = new Date();
        var currentUser = localStorage.loginStatus;
        var tempComment = HubStar.Follower.createRecord({"follower_profile_pic_url": null,
            "follower_id": currentUser, "name": null, "type": "user", "time_stamp": date.toString(), "is_delete": false});
        
        var followArray = [user_id, tempComment];        

        requiredBackEnd('followers', 'createUserFollower', followArray, 'POST', function() {
        }); 
    },
    unFollowUser: function(user_id) {
        var currentUser = localStorage.loginStatus;
        var followArray = [currentUser, user_id];
        //var update_record = this.get("model").get('followers');        
     
        requiredBackEnd('followers', 'deleteUserFollower', followArray, 'POST', function(params) {
        });
    }
}
);
