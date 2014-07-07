HubStar.CollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        var id;
        var address;
        if (model.get('id') === undefined || model.get('id') === "") {
            address = document.URL;
            id = address.split("#")[1].split("/")[3];
        } else {
            id = model.get('id');
        }

        this.controllerFor('user').set('switchPhoto', false);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.controllerFor('masonryCollectionItems').selectModelForUser(id);
        this.controllerFor('masonryCollectionItems').set('canEdit', true);

    },
    events: {
        transitionToPhoto: function(id) {

            this.controllerFor('mega').set("selectPhoto", false);

            var obj = HubStar.Mega.find(id);
            this.transitionTo("userPhoto", obj);//photo   
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }

        },
        transitionToProfile: function(id) {
            this.controllerFor('user').set('switchPhoto', false);          
            this.transitionTo("profile", HubStar.Profile.find(id));

        },
        transitionToArticle: function(id) {
            this.controllerFor("article").set("collectionArticleId", id);
            var article = HubStar.Mega.find(id);
            this.transitionTo("userArticle", article);
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }

        },
        transitionToVideo: function(video_id) {
            this.transitionTo("userVideo", video_id);
            if (HubStar.get("checkLoginStatus")) {
                if (HubStar.get('showDiscoveryBar') === false) {
                    HubStar.set('ctaView', true);
                } else {
                    HubStar.set('ctaView', false);
                }
            }
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
