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
            //      alert(App.get('isLogin'));
            if (App.get('isLogin')) {

                $('#login_button').attr("style", "display:none");
                $('#afterLogin').attr("style", "display:block");
                $('#welcome_message').attr("style", "display:none");


            } else {

                $('#login_button').attr("style", "display:inline-block");
                $('#afterLogin').attr("style", "display:none");
                $('#welcome_message').attr("style", "display:block");
            }

//            if (localStorage.isLogin=="true") {
//
//                $('#login_button').attr("style", "display:none");
//            } else {
//
//                $('#login_button').attr("style", "display:block");
//            }

        },
        moreContent: function(event) {


            $('#masonry_container').masonry({
                itemSelector: '.box',
                isAnimated: true
            });

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;

            $(id).slideToggle(200);

            $(collape_button).attr("style", "display:block");
            $(more_button).attr("style", "display:none");

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);
        },
        collapeContent: function(event) {


            $('#masonry_container').masonry({
                itemSelector: '.box',
                isAnimated: true
            });


            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;


            $(id).slideToggle(200);

            $(collape_button).attr("style", "display:none");
            $(more_button).attr("style", "display:block");
//            var $container = $('#masonry_container');
//            $container.masonry('reload');

            setTimeout(function() {
                $('#masonry_container').masonry("reload");
            }, 200);

        }
    });
    return MasonryView;
});
