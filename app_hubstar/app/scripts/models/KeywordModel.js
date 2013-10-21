HubStar.Follower = DS.Model.extend({        
    keyword_id: DS.attr('string'),
    keyword_name: DS.attr('string'),
    create_date: DS.attr('date'),
    expire_date: DS.attr('date'),
    value: DS.attr('number'),
    is_delete: DS.attr('boolean'),
    didLoad: function() {

    }
});

