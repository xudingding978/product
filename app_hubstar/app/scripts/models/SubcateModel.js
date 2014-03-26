
DS.RESTAdapter.map('HubStar.Subcate', {
    subcategories: {embedded: 'always'}
});

HubStar.Subcate = DS.Model.extend({
    //ids: DS.attr('string'),
    category_topic: DS.attr('string'),
    subcategories: DS.hasMany('HubStar.Subcategories'),
    ids: function() { 
        return createNavigatorId();
    }.property('category_topic'),
    didLoad: function() {

    }
});



