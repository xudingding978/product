HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    hide: function(id) {
        if (HubStar.get("what") === true)
        {
            $("#collection_tab1").slideToggle("fast");
        }
        {
            $("#collection_tab").slideToggle("fast");
        }
    }

});