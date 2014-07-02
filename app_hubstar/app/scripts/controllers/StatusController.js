HubStar.StatusController = Ember.Controller.extend({
        searchResultNum: "",
        time: "",
        user: null,
        myUserProfile: null,
        response: 'Start searching for ideas now.',
        residential:true,
        commercial:true,
        needs: ['application'],
    
        getSearchResultNum: function(hits) {

            this.set("searchResultNum", "Item: " + hits);
        },
        getSearchResultTime: function(time) {

            this.set("time", "Time: " + time);
        },
        grapData: function() {
            this.set("user", HubStar.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        },
        changeDescription: function()
        {

         this.set('response',  "You've got "+this.get('searchResultNum')+" results in "+this.get('time')+".");

        },
                
       changeImage: function(imageSrc)
        {
            this.set('photo_url', imageSrc);
        }

    });

