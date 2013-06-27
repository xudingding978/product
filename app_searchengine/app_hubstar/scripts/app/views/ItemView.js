define([
    "ember",
    "text!templates/itemTemplate.html",
    'jquery',
    'helpers',
    'jquery.masonry'
], function(Ember, itemTemplate) {

    Ember.TEMPLATES["item"] = Ember.Handlebars.compile(itemTemplate);
    var ItemView = Ember.View.extend({
        template: Ember.Handlebars.compile(itemTemplate),
        didInsertElement: function() {


            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });



        },
        moreContent: function(event) {

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;

            //     $(id).slideToggle(200);
            $(id).animate({
                height: "100%"

            }, 200);
            $(collape_button).attr("style", "display:block");
            $(more_button).attr("style", "display:none");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        collapeContent: function(event) {
            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
            $(id).animate({
                height: "20px"
            }, 200);
            $(collape_button).attr("style", "display:none");
            $(more_button).attr("style", "display:block");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        mega: function() {
            this.rerender();
        }.observes('controller.content')
    });
    return ItemView;
});