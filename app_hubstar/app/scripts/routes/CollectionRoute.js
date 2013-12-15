HubStar.CollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (model.get('id') === undefined || model.get('id') === "") {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[3];
        } else {
            var id = model.get('id');
        }

        this.controllerFor('user').set('switchPhoto', false);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.controllerFor('masonryCollectionItems').selectModelForUser(id);
        this.controllerFor('masonryCollectionItems').set('canEdit', true);
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reloadItems");
        }, 3000);
    },
    events: {
        transitionToPhoto: function(id) {
            
            this.controllerFor('mega').set("selectPhoto", false);
            var obj = HubStar.Mega.find(id);
            this.transitionTo("userPhoto", obj);//photo          
        },
        transitionToProfile: function(id) {          
            this.controllerFor('user').set('switchPhoto', false);
//            var address = document.URL;
//            var user_id = address.split("#")[1].split("/")[2];
           
             this.transitionTo("profile", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {
            this.controllerFor("article").set("collectionArticleId", id);
            this.transitionTo("userArticle", HubStar.Article.find(id));
        },
        transitionToVideo: function(video_id) {
            this.transitionTo("userVideo", video_id);
        }
    },
    redirect: function() {

    },
    deactivate: function() {

    },
    activate: function() {

    },
    renderTemplate: function() {



    }

});
