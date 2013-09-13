HubStar.StatusController = Ember.Controller.extend({
        searchResultNum: "",
        time: "",
        user: null,
        photo_url:"",
        myUserProfile: null,
        response: 'Start searching for ideas now.',
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", HubStar.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
            this.set('photo_url', HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture');
           
        },
        changeDescription: function()
        {

         this.set('response',  "You've got "+this.get('searchResultNum')+" results in "+this.get('time')+".");

        },
                
       changeImage: function(imageSrc)
        {
            console.log("change image");
            this.set('photo_url', imageSrc);
            console.log( this.get('photo_url'));
        }

    });

