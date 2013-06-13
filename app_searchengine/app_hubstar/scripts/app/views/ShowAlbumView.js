define([
    "ember",
    "text!templates/showAlbumTemplate.html"
], function(Ember, showAlbumTemplate) {
    Ember.TEMPLATES["showAlbum"] = Ember.Handlebars.compile(showAlbumTemplate);
    var ShowAlbumView = Ember.View.extend({
        template: Ember.Handlebars.compile(showAlbumTemplate),
        didInsertElement: function() {

        //    this.$().hide().show('slow');

        },
        hide: function(e) {
            var album_id="#album_" + e;
            
   
            $(album_id).slideToggle("slow" );
            
            

        }

    });
    return ShowAlbumView;
});
