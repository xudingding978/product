define(
        'models/SubcategoriesModel',
        [
            'ember',
            'emberData'
        ], function() {


    var SubcategoriesModel = DS.Model.extend({
        search_topic: DS.attr('string'),
 
        didLoad: function() {

        }
    });

    return SubcategoriesModel;
}
);

