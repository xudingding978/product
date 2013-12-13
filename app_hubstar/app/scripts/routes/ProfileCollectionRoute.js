HubStar.ProfileCollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        if (model.id === undefined || model.id === "") {

            var id = address.split("#")[1].split("/")[4];
        }
        else {

            var id = model.id;
        }
        if (model.get('title') !== undefined) {
            var title = model.get('title');


        }
        this.controllerFor('mega').set("type", "profile");

        this.controllerFor('mega').set("selectType", "profile"); // selectType: profile means it is access from profile else it is from the searcgh 
        this.controllerFor('masonryCollectionItems').set("id", model.id);
        var owner_id = address.split("#")[1].split("/")[2];

        var profile = HubStar.Profile.find(owner_id);
        var profileId = "";
        for (var j = 0; j < profile.get('collections').get('length'); j++) {
            if (profile.get('collections').objectAt(j).get('id') === id)
            {
                profileId = profile.get('collections').objectAt(j).get('optional');
            }
        }

        this.controllerFor('masonryCollectionItems').selectModelForProfile(id, title, profileId);

        this.controllerFor('profile').set('switchPhoto', false);
        this.controllerFor('masonryCollectionItems').set('uploadStuff', true);
        this.controllerFor('masonryCollectionItems').set('canEditbyOwner', true);
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 3000);

    },
    model: function(params) {
        this.controllerFor('profile').set('switchPhoto', false);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var profile = HubStar.Profile.find(owner_id);
        var id = "";
        for (var j = 0; j < profile.get('collections').get('length'); j++) {
            if (profile.get('collections').objectAt(j).get('id') === params.profileCollection_id)
            {
                id = profile.get('collections').objectAt(j).get('optional');
            }
        }
        var model = HubStar.Mega.find({RquireType: "collection", collection_id: params.profileCollection_id, owner_profile_id: id});
        model.set("id", params.profileCollection_id);
        return model;

    },
    events: {
        transitionToPhoto: function(id) {
            //      this.transitionTo("profile",HubStar.)
            this.controllerFor('mega').set("type", "profile");
            var obj = HubStar.Mega.find(id);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];

            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
             var  data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }

            this.transitionTo("profileCollection", data);
            this.transitionTo("profilePhoto", obj);
        },
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
        },
        transitionToArticle: function(id) {

            this.controllerFor("article").set("collectionArticleId", id);
            var obj = HubStar.Article.find(id);


            this.transitionTo("profileArticle", obj);

        },
        transitionToVideo: function(video_id) {

//            var address = document.URL;
//            var owner_id = address.split("#")[1].split("/")[2];
//
//
//            var collection_id = address.split("#")[1].split("/")[4];
//            var profile = HubStar.Profile.find(owner_id);
//            for (var i = 0; i < profile.get('collections').get("length"); i++) {
//                var data = profile.get('collections').objectAt(i);
//                if (data.id === collection_id) {
//                    break;
//                }
//            }
//            this.transitionTo("profileCollection", data);
            //           this.controllerFor('masonryCollectionItems').set('isUser', true);
            this.transitionTo("profileVideo", video_id);
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
