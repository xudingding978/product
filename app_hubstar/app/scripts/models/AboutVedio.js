HubStar.AboutVedio = DS.Model.extend({        
    video_id: DS.attr('string'),
    video_title: DS.attr('string'),
    video_desc: DS.attr('number'),
    video_url: DS.attr('number'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});

