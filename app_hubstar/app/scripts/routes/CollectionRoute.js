HubStar.CollectionRoute = Ember.Route.extend({
    setupController: function(controller, model) {

        if (model.get('id') === undefined || model.get('id') === "") {
            var address = document.URL;
            var id = address.split("#")[1].split("/")[3];
        } else {
            var id = model.get('id');
        }
        console.log("ddddddddddssssssss");
        console.log(id);
        this.controllerFor('user').set('switchPhoto', false);
        $('#user-stats > li').removeClass('selected-user-stats');
        $('#defualt').addClass('selected-user-stats');
        this.controllerFor('masonryCollectionItems').selectModelForUser(id);
        this.controllerFor('masonryCollectionItems').set('canEdit', true);
        setTimeout(function() {
            $('#masonry_photo_collection_container').masonry("reload");
        }, 3000);


    },
//    model: function(params) {
//
//        this.controllerFor('user').set('switchPhoto', false);
//        var address = document.URL;
//        var user_id = address.split("#")[1].split("/")[2];
//        return HubStar.Mega.find({RquireType: "personalCollection", user_id: user_id, collection_id: params.collection_id});
//    },
    events: {
        transitionToPhoto: function(id) {
            this.transitionTo("photo", HubStar.Mega.find(id));

        },
        transitionToProfile: function(id) {

            this.controllerFor('user').set('switchPhoto', false);
            var address = document.URL;
            var user_id = address.split("#")[1].split("/")[2];
            return HubStar.Mega.find({RquireType: "firstsearch", user_id: user_id, collection_id: params.collection_id});
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
