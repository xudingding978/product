HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    hide: function(id) {
        if (HubStar.get("what") === true)
        {
           setTimeout(function() {
            $('.collection_tab1').attr('style', 'bottom: 0px; right: 0px; height: 300px;background-color: black;overflow:hidden;display:none; position: absolute;z-index: 5; width: 100%; opacity: .9;');
        }, 200);
        }
        {
            $("#collection_tab").slideToggle("fast");
        }
    }
});