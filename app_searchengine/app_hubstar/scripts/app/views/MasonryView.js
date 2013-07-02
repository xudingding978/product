define([
    "ember",
    "text!templates/masonryTemplate.html",
    'jquery',
    'helpers',
    'jquery.masonry'
], function(Ember, masonryTemplate) {

    Ember.TEMPLATES["masonry"] = Ember.Handlebars.compile(masonryTemplate);
    var distance = "";

    var MasonryView = Ember.View.extend({
        template: Ember.Handlebars.compile(masonryTemplate),
        didInsertElement: function() {

            if (distance === "") {
                distance = $(window).height() * 0.8;
            }
            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 0,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });

            var that = this;
            $(window).scroll(function() {

                if ($(this).scrollTop() > distance) {


                    that.infiniteData();
                    distance = distance + 1300;

                }
            });

        },
        scroll: function() {
            // You can pass this directly but i've extracted it here for clarity
            
            var view = this;
            Ember.run(view, function() {
               alert(55555);
            })
        },
        infiniteData: function() {
            this.get('controller').scrollDownAction();
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
    return MasonryView;
});
