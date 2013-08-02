HubStar.VideoView = Ember.View.extend({
        classNames: ["lightbox"],
        template: Ember.Handlebars.compile(videosTemplate),
        didInsertElement: function() {



        },
        testing: function() {
           


        }.observes('content.id')
    });
