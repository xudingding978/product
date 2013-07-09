define(["ember", 'models/CateModel'], function(Ember, CateModel) {
    var PlatformBarController = Ember.ArrayController.extend({
        categorys: [],
        centent: [],
        user: null,
        myUserProfile: null,
        needs: ["application"],
        init: function()
        {



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
            var category = this.get('categorys');
            var that = this;
            setTimeout(function() {
                for (var i = 0; i < category.get("length"); i++) {

                    for (var j = 0; j < category.objectAt(i).get('subcate').get("length"); j++) {
                        var data = category.objectAt(i).get('subcate').objectAt(j).get('subcategories');
                        //      console.log(data);

                        that.get('centent').pushObject(data);

                    }

                }

            }, 1);

        }
    });
    return PlatformBarController;
});
