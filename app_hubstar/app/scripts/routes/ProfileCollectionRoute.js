HubStar.ProfileCollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var address = document.URL;
        var id;
        if (model.get("id") === undefined || model.get("id") === "") {

            id = address.split("#")[1].split("/")[4];
        }
        else {
            id = model.get("id");
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
                if (profile.get('collections').objectAt(j).get('updated_at') !== null) {
                    var date = profile.get('collections').objectAt(j).get('updated_at');
                    this.controllerFor('masonryCollectionItems').set("createTime", date + "");
                }
                else
                {
                    this.controllerFor('masonryCollectionItems').set("createTime", "Wed Jan 01 2014 00:00:00 GMT+1200 (NZST)");
                }
            }
        }
        this.controllerFor('masonryCollectionItems').selectModelForProfile(id, title, profileId);
//
        this.controllerFor('profile').set('switchPhoto', false);
        this.controllerFor('masonryCollectionItems').set('uploadStuff', true);
        this.controllerFor('masonryCollectionItems').set('canEditbyOwner', true);
    },
    model: function(params) {
        this.controllerFor('profile').set('switchPhoto', false);
        var address = document.URL;
        var owner_id = address.split("#")[1].split("/")[2];
        var profile = HubStar.Profile.find(owner_id);
        var data = "";
        for (var j = 0; j < profile.get('collections').get('length'); j++) {
            if (profile.get('collections').objectAt(j).get('id') === params.profileCollection_id)
            {
                data = profile.get('collections').objectAt(j);
            }
        }
        //var model = HubStar.Mega.find({RquireType: "profileCollection", owner_profile_id: id, collection_id: params.profileCollection_id});
        //model.set("id", params.profileCollection_id);
        return data;
    },
    
    actions: {
        transitionToPhoto: function(id) {
            this.controllerFor('mega').set("type", "profile");
            var obj = HubStar.Mega.find(id);
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];

            var collection_id = address.split("#")[1].split("/")[4];
            var profile = HubStar.Profile.find(owner_id);
            for (var i = 0; i < profile.get('collections').get("length"); i++) {
                var data = profile.get('collections').objectAt(i);
                if (data.id === collection_id) {
                    break;
                }
            }
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
            this.transitionTo("profilePhoto", obj);
        },
        transitionToProfile: function(id) {
            var address = document.URL;
            var owner_id = address.split("#")[1].split("/")[2];
            if (id !== owner_id) {
                this.transitionTo("profile", HubStar.Profile.find(id));
            }
            else
            {
                this.controllerFor('profile').set("goBackType", true);
                var model = {id: id};
                this.transitionTo('profile', model);
            }
        },
        transitionToArticle: function(id) {

            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
            this.controllerFor("article").set("collectionArticleId", id);
            var obj = HubStar.Mega.find(id);
            this.transitionTo("profileArticle", obj);
        },
        transitionToVideo: function(video_id) {
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
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
