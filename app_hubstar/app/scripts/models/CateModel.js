
    DS.RESTAdapter.map('HubStar.Cate', {
        subcate: {embedded: 'always'}
    });

    HubStar.Cate = DS.Model.extend({
        id: DS.attr('string'),
        topic: DS.attr('string'),
        subcate: DS.hasMany('HubStar.Subcate'),
        didLoad: function() {

        }
    });

