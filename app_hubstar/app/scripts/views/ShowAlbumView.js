HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    hide: function(id) {
        $("#collection_tab").slideToggle("fast");
        if (HubStar.get("what") === true)
        {
            $("#collection_tab1").slideToggle("fast");
        }
        {
            $("#collection_tab").slideToggle("fast");
        }
    }

});