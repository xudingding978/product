HubStar.AboutImage = DS.Model.extend({        
    image_id: DS.attr('string'),
    image_title: DS.attr('string'),
    image_desc: DS.attr('number'),
    image_url: DS.attr('number'),
    optional: DS.attr('string'),
    didLoad: function() {

    }
});

