
HubStar.PlatformBarController = Ember.ArrayController.extend({
    categorys: [],
    centent: [],
    user: null,
    photo_url: '',
    userLocation:"",
    myUserProfile: null,
    needs: ["application"],
    init: function()
    {  
//      this.set("photo_url", HubStar.User.find(localStorage.loginStatus).get('photo_url_large'));
        this.setTopicModel(HubStar.Cate.find({}));
        

    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('searchIndex');
        this.get("controllers.application").set('search_string', search_topic);
        this.get("controllers.application").newSearch();

    },
    setTopicModel: function(model) {
        //       console.log(model);
        
  //      this.set("user", HubStar.User.find(localStorage.loginStatus));
            var user =HubStar.User.find(localStorage.loginStatus);
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
//        this.set('photo_url', HubStar.get('photoDomain') + '/users/' + localStorage.loginStatus + '/user_picture/user_picture');
       var that =this;
        that.set("user",user);
                 that.set("photo_url", user.get("photo_url_large"));
          user.addObserver('isLoaded', function() {
                if (user.get('isLoaded')) {          
                     that.set("user",user);
                 that.set("photo_url", user.get("photo_url_large"));
                }
          });    
        
        
        
        
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set('categorys', null);
        this.set('categorys', model);
    },
            
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    }
});
