
HubStar.PlatformBarController = Ember.ArrayController.extend({
    categorys: [],
    centent: [],
    user: null,
    photo_url: '',
    userLocation: "",
    myUserProfile: null,
    needs: ["application", "user", "applicationFeedback"],
    init: function()
    {
        this.setTopicModel(HubStar.Cate.find({}));
        this.set('userLocation', geoip_city());
    },
    topicSearch: function(search_topic) {
        this.transitionToRoute('searchIndex');
        this.get("controllers.application").set('search_string', search_topic);
        this.get("controllers.application").set("pageCount", 0);        
        this.get("controllers.application").set("searchFromTopic",true);
        this.get("controllers.application").newSearch();

    },
    setTopicModel: function(model) {
        this.set("user", HubStar.User.find(localStorage.loginStatus));
        this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
        this.set('categorys', null);
        this.set('categorys', model);
    },
    changeImage: function(imageSrc)
    {
        this.set('photo_url', imageSrc);
    },
    changeLocation: function(location) {
        HubStar.set('geoLocation', location);
        this.get('controllers.applicationFeedback').statusObserver(null, "You are now searching within " + location + " only.");
    }
});
