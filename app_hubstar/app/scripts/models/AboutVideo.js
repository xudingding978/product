HubStar.AboutVideo = DS.Model.extend({        
    video_id: DS.attr('string'),
    video_title: DS.attr('string'),
    video_desc: DS.attr('string'),
    video_url: DS.attr('string'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});

