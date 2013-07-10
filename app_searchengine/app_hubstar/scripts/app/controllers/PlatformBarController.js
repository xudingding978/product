define(["ember"], function(Ember) {
    var PlatformBarController = Ember.ArrayController.extend({
        categorys: [],
        centent: [],
        user: null,
        myUserProfile: null,
        needs: ["application"],
        init: function()
        {
            this.setTopicModel(App.Cate.find());


        },
        topicSearch: function(search_topic) {
            this.transitionToRoute('searchIndex');
            this.get("controllers.application").set('search_string', search_topic);


            this.get("controllers.application").newSearch();

        },
        setTopicModel: function(model) {
            this.set("user", App.User.find(localStorage.loginStatus));
            this.set("myUserProfile", "#/users/" + localStorage.loginStatus);
            this.set('categorys', null);
            this.set('categorys', model);

        }
    });
    return PlatformBarController;
});
