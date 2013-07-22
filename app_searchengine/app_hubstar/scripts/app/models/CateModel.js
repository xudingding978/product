define(
        'models/CateModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Cate', {
        subcate: {embedded: 'always'},
    });

    var CateModel = DS.Model.extend({
        topic: DS.attr('string'),
        subcate: DS.hasMany('App.Subcate'),
        didLoad: function() {

        }
    });

    return CateModel;
}
);

