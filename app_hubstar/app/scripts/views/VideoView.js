HubStar.VideoView = Ember.View.extend({
         templateName: 'video',
        classNames: ["lightbox"],

        didInsertElement: function() {



        },
        testing: function() {
           


        }.observes('content.id')
    });
