HubStar.AboutEmbededObject = DS.Model.extend({        
    embeded_object_id: DS.attr('string'),
    embeded_object_title: DS.attr('string'),
    embeded_object_desc: DS.attr('string'),
    embeded_object_code:DS.attr('string'),
    embeded_object_url: DS.attr('string'),
    optional: DS.attr('string'),
    embed_object_enabled: DS.attr('boolean'),
    didLoad: function() {

    }
});

