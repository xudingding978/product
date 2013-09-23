HubStar.CollectionRoute = Ember.Route.extend({
        setupController: function(controller, model) {


            if (model.id === undefined || model.id === "") {
                var address = document.URL;
                var id = address.split("#")[1].split("/")[3];

            } else {
                var id = model.id;

            }
            this.controllerFor('user').set('switchPhoto', false);

            this.controllerFor('masonryCollectionItems').selectModelForUser(id);
            this.controllerFor('masonryCollectionItems').set('canEdit', true);
        },
        model: function(params) {

            this.controllerFor('user').set('switchPhoto', false);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            return HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: params.collection_id});
        },
        events: {
            transitionToPhoto: function(id) {
                this.transitionTo("photo", HubStar.Mega.find(id));
            },
            transitionToProfile: function(id) {

                this.transitionTo("profile", HubStar.Profile.find(id));
            },
            transitionToArticle: function(id) {

                this.transitionTo("article", HubStar.Article.find(id));
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
