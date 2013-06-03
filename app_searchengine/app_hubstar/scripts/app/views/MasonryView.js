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
                    columnWidth: 0,
                    isFitWidth: true
                });
            });

        },
        detailToggle: function(event) {

            alert(event.context);
            alert( this.get('controller.id'));
            alert( this.get('content.id'));
             alert( this.get('controller.id'));
            $('.more_detail').slideToggle(100);


            var $container = $('#masonry_container');


            $container.masonry('reload');


        }
    });
    return MasonryView;
});
