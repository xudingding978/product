define(
        'models/SubcateModel',
        [
            'ember',
            'emberData'
        ], function() {
    DS.RESTAdapter.map('App.Subcate', {
        subcategories: {embedded: 'always'},
    });

    var SubcateModel = DS.Model.extend({
        category_topic: DS.attr('string'),
        subcategories: DS.hasMany('App.Subcategories'),
        didLoad: function() {
            //   console.log(this.get('sub_topic'));
//            console.log('id: ' + this.id + ' ' + this.profile_name, this);
        }
    });

    return SubcateModel;
}
);

