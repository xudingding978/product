HubStar.ShowAlbumView = Ember.View.extend({
    templateName: 'showAlbum',
    didInsertElement: function() {
    },
    hide: function() {
           $(".show-album").slideToggle("fast");      
    }

});