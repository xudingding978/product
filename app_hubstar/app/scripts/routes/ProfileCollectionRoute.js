HubStar.ProfileCollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        if (model.id === undefined || model.id === "") {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[4];
        }
        else {
            var id = model.id;
        }

        if (model.get('title') !== undefined) {
            var title = model.get('title');
        }
        this.controllerFor('masonryCollectionItems').selectModelForProfile(id, title);
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
        return HubStar.Mega.find({RquireType: "collection", collection_id: params.profileCollection_id, owner_profile_id: owner_id});

    },
    events: {
        transitionToPhoto: function(id) {
      //      this.transitionTo("profile",HubStar.)
            this.transitionTo("photo", HubStar.Mega.find(id));
        },
        transitionToProfile: function(id) {
            this.transitionTo("profile", HubStar.Profile.find(id));
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
