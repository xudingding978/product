HubStar.MasonryView = Ember.View.extend({
    templateName: 'masonry',
        didInsertElement: function() {
            $(function() {
                $('#masonry_container').masonry({
                    itemSelector: '.box',
                    columnWidth: 185,
                    isInitLayout: false,
                    isFitWidth: true
                });
            });
            if (HubStar.get('searchStart')) {
                HubStar.set('isMansonryPageLoad', true);
            }
        },
        willDestroyElement: function() {
            HubStar.set('isMansonryPageLoad', false);
        },
        moreContent: function(event) {

            var id = "#" + event.id;
            var collape_button = "#collape_button_" + event.id;
            var more_button = "#more_button_" + event.id;
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
