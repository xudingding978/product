HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    actions: {
        hide: function() {
            $(".show-album").slideToggle("fast");
        }
    }

});