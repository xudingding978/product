define([
    "ember",
    "text!templates/masonryTemplate.html",
    'jquery',
    'helpers',
      'jquery.masonry'
], function(Ember, masonryTemplate) {
    Ember.TEMPLATES["masonry"] = Ember.Handlebars.compile(masonryTemplate);
    var MasonryView = Ember.View.extend({
        template: Ember.Handlebars.compile(masonryTemplate),
        didInsertElement: function() {
            $(function() {

                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 200,
                  
                    isFitWidth: true
                });

            });


        }
    });
    return MasonryView;
});
