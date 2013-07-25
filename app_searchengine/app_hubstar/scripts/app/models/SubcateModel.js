define(
        'models/SubcateModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Subcate', {
        subcategories: {embedded: 'always'}
    });

    var SubcateModel = DS.Model.extend({
        category_topic: DS.attr('string'),
        subcategories: DS.hasMany('App.Subcategories'),
        didLoad: function() {

        }
    });

    return SubcateModel;
}
);

