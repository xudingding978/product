
    DS.RESTAdapter.map('HubStar.Subcate', {
        subcategories: {embedded: 'always'}
    });

    HubStar.Subcate = DS.Model.extend({
        category_topic: DS.attr('string'),
        subcategories: DS.hasMany('HubStar.Subcategories'),
        didLoad: function() {

        }
    });



