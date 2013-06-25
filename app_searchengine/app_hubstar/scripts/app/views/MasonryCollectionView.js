define([
    "ember",
    "text!templates/masonryCollectionTemplate.html",
    'jquery',
    'helpers',
    'jquery.masonry'
], function(Ember, masonryCollectionTemplate) {

    Ember.TEMPLATES["masonryCollection"] = Ember.Handlebars.compile(masonryCollectionTemplate);
    var MasonryView = Ember.View.extend({
        template: Ember.Handlebars.compile(masonryCollectionTemplate),
        didInsertElement: function() {


            $(function() {
                $('#masonry_user_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });



        },
    });
    return MasonryView;
});
