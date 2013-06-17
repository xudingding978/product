define([
    "ember",
    "text!templates/showAlbumTemplate.html"
], function(Ember, showAlbumTemplate) {
    Ember.TEMPLATES["showAlbum"] = Ember.Handlebars.compile(showAlbumTemplate);
    var ShowAlbumView = Ember.View.extend({
        template: Ember.Handlebars.compile(showAlbumTemplate),
        didInsertElement: function() {

     

        },
        hide: function() {
        
   
            $("#collection_tab").slideToggle("slow" );
            
            

        }

    });
    return ShowAlbumView;
});
